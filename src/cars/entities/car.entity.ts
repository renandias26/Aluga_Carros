import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema({ timestamps: true })
export class Car {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    Category: CarsCategory;

    @Prop({ required: true })
    Avaliable: boolean

    @Prop()
    Model: String

    @Prop()
    Brand: String

    @Prop()
    Plate: String
}

export const CarSchema = SchemaFactory.createForClass(Car);