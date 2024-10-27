import { Injectable } from '@nestjs/common';
import { Countries } from '../../database/countries.db';

import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { CODES } from '../../../config/general.codes';
import { Response } from '../../models/response.model';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Countries)
    private countriesModel: typeof Countries,
  ) {}

  async createCountry(data: any): Promise<Response> {
    this.countriesModel.create(data);
    return new Response(CODES.PKL_USER_CREATE_OK, 'Creado');
  }

  async getCountries(): Promise<Countries[]> {
    return this.countriesModel.findAll({
      attributes: ['id', 'name'],
    });
  }
}
