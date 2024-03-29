import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) { }
  async create(createCarDto: CreateCarDto) {
    this.carModel.create(createCarDto)
  }

  async update(carID: string, updateCarDto: UpdateCarDto) {
    this.carModel.findByIdAndUpdate(carID, { updateCarDto })
  }

  async delete(carID: string) {
    this.carModel.findByIdAndDelete(carID)
  }

  async findOne(carID: string) {
    const findedUser = this.carModel.findById(carID)
    return findedUser
  }
}
