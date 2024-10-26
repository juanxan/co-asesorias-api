import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { Observable } from 'rxjs';
import { ExpedienteResponseDto } from './../../models/expediente-response.model';
import { ExpedienteService } from './../../service/expediente/expediente.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('local'))
@Controller('expedientes')
@ApiTags('expedientes')
export class ExpedienteController {
  constructor(private readonly expedienteService: ExpedienteService) {}

  @Get()
  @ApiOperation({ summary: 'Get information about expedient by user' })
  getExpedientes(): Observable<ExpedienteResponseDto[]> {
    return this.expedienteService.getExpedientes();
  }
}
