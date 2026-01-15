import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { PurchaseItemDto, SaleItemsDto } from './dto/ransactions.dto';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post("purchase")
    purchaseItems(@Body() body: PurchaseItemDto){
        return this.transactionsService.purchaseItems(body)
    }

    @Post("sale")
    saleItems(@Body() body: SaleItemsDto){
        return this.transactionsService.saleItems(body)
    }
}
