import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CountriesService } from './../../service/countries/countries.service';
import { CreateCountryDto } from './../../dto/countries.dto';

@Controller('countries')
@ApiTags('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post('CreateCountry')
  @ApiOperation({ summary: 'Create countries' })
  createCountry(@Body() data: CreateCountryDto) {
    return this.countriesService.createCountry(data);
  }

  @Get('GetAll')
  @ApiOperation({ summary: 'Get all countries' })
  getCountries() {
    return this.countriesService.getCountries();
  }
}
