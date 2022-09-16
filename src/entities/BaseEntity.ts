import {validate} from "class-validator";
import {plainToInstance} from "class-transformer";

declare type ClassConstructor<T> = {
    new (...args: any[]): T;
};
export abstract class BaseEntity {

    public async validateThis(skipMissing = false): Promise<string[]> {
        const errors = await validate(this, {
            skipMissingProperties: skipMissing
        });
        const temp = errors.map(e => {return Object.values(e.constraints)})
        return temp.flat();
    }

    protected static baseTransform<T>(cls: ClassConstructor<T>, plainObject: object): T{
        if (plainObject instanceof cls){
            return plainObject;
        }
        return plainToInstance(cls, plainObject)
    }
}
