import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/schemas/items.schema';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
        forwardRef(() => ItemsModule)
    ],
    providers: [
        ItemsService
    ],
    controllers: [
        ItemsController
    ],
    exports: [
        ItemsService
    ]
})
export class ItemsModule { }
