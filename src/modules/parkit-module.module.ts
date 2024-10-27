import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';

import { ExpedienteController } from './controller/expediente/expediente.controller';
import { SingInController } from './controller/sing-in/sing-in.controller';
import { SingUpController } from './controller/sing-up/sing-up.controller';
import { CountriesController } from './controller/countries/countries.controller';

import { ExpedienteService } from './service/expediente/expediente.service';
import { SingInService } from './service/sing-in/sing-in.service';
import { SingUpService } from './service/sing-up/sing-up.service';
import { CountriesService } from './service/countries/countries.service';

import { DatabaseModule } from './database/database.module';
import { JwtStrategy } from './strategie/jwt.strategy';
import { LocalStrategy } from './strategie/local.strategy';
import { Users } from './database/schema.db';
import { Countries } from './database/countries.db';
import config from './../config';

@Module({
  imports: [
    SequelizeModule.forFeature([Users, Countries]),
    DatabaseModule,
    PassportModule,
    HttpModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtSecret,
        };
      },
    }),
  ],
  controllers: [
    SingInController,
    SingUpController,
    ExpedienteController,
    CountriesController,
  ],
  providers: [
    SingInService,
    SingUpService,
    ExpedienteService,
    CountriesService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [SingUpService, SingInService, ExpedienteService],
})
export class ParkitModuleModule {}
