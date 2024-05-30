import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'
export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    name: string;

    @IsNotEmpty()
    @IsInt()
    Category: number;

    @IsNotEmpty()
    Avaliable: boolean

    @IsString()
    Model: String

    @IsString()
    Brand: String

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(30)
    Plate: String
}