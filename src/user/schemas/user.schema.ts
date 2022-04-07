import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    phoneNumber:number;
    
    @Prop({})
    age:number;
    
    @Prop({enum:['M','F']})
    gender:string;

    @Prop({default:Date.now(), required:true})
    createdAt:Date;

    @Prop({default:null})
    modifiedAt:Date;
}


export const UserSchema = SchemaFactory.createForClass(User);