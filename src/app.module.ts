import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkitModuleModule } from './modules/parkit-module.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';

import config from './config';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: enviroments[process.env.NODE_ENV] || '.env',
			load: [config],
			isGlobal: true,
		}),
		ParkitModuleModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
