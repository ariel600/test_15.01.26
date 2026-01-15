import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseItemDto, SaleItemsDto } from './dto/ransactions.dto';
import { Transaction } from 'src/schemas/transactions.schema';
import { ItemsService } from 'src/items/items.service';
import { CreateItemDto } from 'src/items/dto/item.dto';
import { budget } from 'src/database/fs';

@Injectable()
export class TransactionsService {
    constructor(
        private itemsService: ItemsService,
        @InjectModel(Transaction.name) private transactionModel: Model<PurchaseItemDto>
    ) { }

    async purchaseItems(purchaseItem: PurchaseItemDto) {
        const cost: number = purchaseItem.quantity * purchaseItem.pricePerUnit
        if (budget <= cost) return { msg: "The budget is too low." }
        budget -= cost // הפחתת הסכום מהתקציב
        const find = this.itemsService.getItem(purchaseItem.name, purchaseItem.type)
        if (!find) {
            const item: CreateItemDto = {
                name: purchaseItem.name,
                type: purchaseItem.type,
                quantity: purchaseItem.quantity,
                pricePerUnit: purchaseItem.pricePerUnit,
                hasImage: false
            }
            return this.itemsService.createItem(item)
        }
        return this.itemsService.upData(purchaseItem)
    }

    async saleItems(saleItems: SaleItemsDto) {
        const cost = saleItems.pricePerUnit * saleItems.quantity
        const find = this.itemsService.getItem(saleItems.name, saleItems.type).then()
        if(find.quantity < saleItems.quantity) return { msg: "There are not enough items." }
        budget += cost
        return this.itemsService.upData(saleItems)
    }
}