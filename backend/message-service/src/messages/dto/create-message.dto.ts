import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsArray,
  IsObject,
  ValidateNested,
  IsNumber,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

class ReadByDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsBoolean()
  @IsOptional()
  isRead: boolean;
}

class TransactionDto {
  @IsString()
  @IsNotEmpty()
  assetType: string; // Type of asset (e.g., 'ETH', 'BTC', 'NFT')

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  transactionHash: string;

  @IsString()
  @IsNotEmpty()
  receiverAddress: string;
}

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  conversationId: string;

  @IsString()
  @IsNotEmpty()
  senderId: string;

  @IsEnum(['text', 'transaction'])
  @IsNotEmpty()
  messageType: string;

  @IsString()
  @IsOptional()
  text: string; // Only for text messages

  @IsBoolean()
  @IsOptional()
  isRead: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReadByDto)
  @IsOptional()
  readBy: ReadByDto[];

  @IsObject()
  @ValidateNested()
  @Type(() => TransactionDto)
  @IsOptional()
  transaction: TransactionDto; // Only for transaction messages
}
