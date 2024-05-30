import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { User } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dtos/update-user-dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.userHash(createUserDto.password)

    this.userModel.create(createUserDto)
  }

  async update(userID: string, updateUserDto: UpdateUserDto) {
    this.userModel.findByIdAndUpdate(userID, { updateUserDto })
  }

  async delete(userID: string) {
    try {
      const result = this.userModel.findByIdAndDelete(userID)
      if (!result) {
        console.log("Usuário não encontrado ou já deletado.");
        return { success: false, message: "Usuário não encontrado ou já deletado." };
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      return { success: false, message: "Erro ao deletar usuário." };
    }
  }

  async findOne(userID: string) {
    const findedUser = this.userModel.findById(userID)
    return findedUser
  }

  findAll() {
    const findedUsers = this.userModel.find().select("-password")
    return findedUsers
  }

  private async userHash(pass) {
    const saltOrRounds = 10
    const hashedPass = await bcrypt.hash(pass, saltOrRounds)
    return hashedPass
  }
}