import { IsInt, IsNotEmpty, IsString } from 'class-validator'
export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsInt()
    Category: CarsCategory;

    @IsNotEmpty()
    Avaliable: boolean

    @IsString()
    Model: String

    @IsString()
    Brand: String

    @IsString()
    Plate: String
}