import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateConversationDto {
  @IsString()
  @IsNotEmpty()
  type: string; // "direct" for 1-on-1 or "group" for group chats

  @IsString({ each: true })
  participants: string[];

  //  For group
  @IsString({ each: true })
  @IsOptional()
  adminIds: string[];

  @IsString()
  @IsOptional()
  name: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  thumbnail: any;
}
