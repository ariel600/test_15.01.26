import { Body, Controller, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/item.dto';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Post("create")
    createIteme(@Body() body: CreateItemDto){
        return this.itemsService.createItem(body)
    }
}