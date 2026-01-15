import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/schemas/items.schema';
import { CreateItemDto } from './dto/item.dto';
import { PurchaseItemDto } from 'src/transactions/dto/ransactions.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<CreateItemDto>) { }

    createItem(createItemDto: CreateItemDto) {
        const createShift = new this.itemModel(createItemDto)
        return createShift.save()
    }

    async getItem(name: string, type: string) {
        const item = await this.itemModel.findOne({ name, type }).exec()
        return item
    }

    upData(item: PurchaseItemDto){}
}