import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  Matches,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `country's name` })
  readonly name: string;
}

export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
