import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    pricePerUnit: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);