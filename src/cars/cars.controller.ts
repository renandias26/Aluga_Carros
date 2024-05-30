import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto)
    }

    @Put(':carID')
    update(@Param('carID') carID: string, @Body() createUserDto: UpdateCarDto) {
        return this.carsService.update(carID, createUserDto)
    }

    @Delete(':carID')
    delete(@Param('carID') carID: string) {
        return this.carsService.delete(carID)
    }

    @Get(':carID')
    findOne(@Param('carID') carID: string) {
        try {
            return this.carsService.findOne(carID)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message'
            },
                HttpStatus.FORBIDDEN,
                {
                    cause: error
                }
            )
        }
    }

    @Get()
    findAll() {
        return this.carsService.findAll()
    }
}
