import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';

export class PurchaseItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsInt()
    @Min(0)
    quantity: number;

    @IsInt()
    @Min(1)
    pricePerUnit: number;
}

export class SaleItemsDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsInt()
    @Min(0)
    quantity: number;

    @IsInt()
    @Min(1)
    pricePerUnit: number;
}
