
import { IsString, IsInt, IsNotEmpty, Min, IsBoolean } from 'class-validator';

export class CreateItemDto {
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

    @IsBoolean()
    hasImage: boolean;
}
