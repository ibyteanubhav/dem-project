import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly model:Model<UserDocument>){
    
  }
  async findAll(): Promise<User[]>{
    return await this.model.find().exec();
  }
  async findOne(id:string): Promise<User>{
    return await this.model.findById(id).exec();
  }
  async create(createUserDto:CreateUserDto): Promise<User> {
    return await new this.model({
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }
  async update(id:string, updateUserDto:UpdateUserDto){
    return await this.model.findByIdAndUpdate(id, updateUserDto).exec();
  }
  async delete(id:string){
    const user = await this.findOne(id);
    if(!user){
      return {status: false, message:"This user does not exist."}
    } 
    return await this.model.findByIdAndDelete(id).exec(); 
  }
}
