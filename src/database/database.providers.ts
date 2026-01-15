
import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect("mongodb+srv://limudime_db_user:5SZAyNX6uqgowOhb@cluster0.0eur7lt.mongodb.net/"),
    },
];
