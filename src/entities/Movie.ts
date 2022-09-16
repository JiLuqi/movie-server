import {ArrayMinSize, IsArray, IsInt, IsNotEmpty, Max, Min, validate} from "class-validator"
import {Type} from "class-transformer"
import {BaseEntity} from "./BaseEntity";
interface MovieRule{
    name: string
    types?: string[]
    areas?: string[]
    timeLong: number
    isHot?: boolean
    isClassic?: boolean
    description?: string
    poster: string
}

export class Movie extends BaseEntity{
    @IsNotEmpty({message: '电影名称不为空'})
    @Type(() => String)
    public name: string;

    @IsNotEmpty({message: '电影类型不为空'})
    @ArrayMinSize(1, {message: '电影类型至少有一个'})
    @Type(() => String)
    @IsArray({message: '必须是一个数组'})
    public types: string[] = [];

    @IsNotEmpty({message: '上映区域不为空'})
    @ArrayMinSize(1, {message: '上映区域至少有一个'})
    @Type(() => String)
    @IsArray({message: '必须是一个数组'})
    public areas: string[] = [];

    @IsNotEmpty({message: '电影时长不为空'})
    @IsInt({message: '时长必须是整数'})
    @Min(1, {message: '时长最小1分钟'})
    @Max(1800, {message: '时长过长'})
    @Type(() => Number)
    public timeLong: number;

    @IsNotEmpty({message: '是否热映不为空'})
    @Type(() => Boolean)
    public isHot: boolean = false;

    @IsNotEmpty({message: '是否为经典影片不为空'})
    @Type(() => Boolean)
    public isClassic: boolean = false;

    @IsNotEmpty({message: '电影简介不为空'})
    @Type(() => String)
    public description: string;

    @IsNotEmpty({message: '海报图不能为空'})
    @Type(() => String)
    public poster: string;

    constructor(movie: MovieRule) {
        super();
        this.name = movie.name;
        this.types = movie.types? movie.types: ['喜剧'];
        this.areas = movie.areas? movie.areas: ['中国大陆'];
        this.timeLong = movie.timeLong;
        this.isHot = movie.isHot? movie.isHot: false;
        this.isClassic = movie.isClassic? movie.isClassic: false;
        this.description = movie.description? movie.description: '电影简介';
        this.poster = movie.poster;
    }

    public static transform(plainObject: object): Movie{
        return super.baseTransform(Movie, plainObject);
    }
}

