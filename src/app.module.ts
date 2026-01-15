import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://limudime_db_user:5SZAyNX6uqgowOhb@cluster0.0eur7lt.mongodb.net/"),
    DatabaseModule,
    ItemsModule,
    TransactionsModule
  ],
  controllers: [
    AppController,
    ItemsController,
    TransactionsController
  ],
  providers: [
    AppService,
    ItemsService,
    TransactionsService
  ],
})
export class AppModule { }
