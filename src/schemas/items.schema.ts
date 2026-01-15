import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop()
    quantity: number;

    @Prop()
    pricePerUnit: number;

    @Prop({ default: false })
    hasImage: boolean;
}

export const ItemSchema = SchemaFactory.createForClass(Item);