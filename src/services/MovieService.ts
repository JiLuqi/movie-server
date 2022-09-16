import {Movie} from "../entities/Movie";
import {IMovie} from "../db/MovieSchema";
import {MovieModel} from "../db";
import {SearchCondition} from "../entities/SearchCondition";

export class MovieService {
    public static async add(movie: Movie): Promise<IMovie | string[]>{
        //转换类型
        movie = Movie.transform(movie);

        //数据验证
        const errors = await movie.validateThis();
        if (errors.length > 0){
            return errors;
        }

        //添加到数据库
        return await MovieModel.create(movie);
    }

    /**
     * 更新数据
     */
    public static async edit(id: string, movie: any){
        await MovieModel.updateOne({_id: id}, movie);
    }

    /**
     * 删除对象
     */
    public static async delete(id: string): Promise<void>{
        const res = await MovieModel.deleteOne({_id: id});
        console.log(res);
    }

    /**
     * id查询
     */
    public static async findById(id: string): Promise<IMovie | null>{
        return MovieModel.findById(id);
    }
    /**
     *  page、limit、key
     */
    public static async find(condition: SearchCondition): Promise<IMovie[] | string[]>{
        //转换类型
        condition = SearchCondition.transform(condition);

        //数据验证
        const errors = await condition.validateThis();
        if (errors.length > 0){
            return errors;
        }

        //查询
        return MovieModel.find({
            name: {$regex: new RegExp(condition.key)}
        }).skip((condition.page - 1) * condition.limit).limit(condition.limit);
    }
}