import { Injectable } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';

import { ExpedienteResponseDto } from './../../models/expediente-response.model';

@Injectable()
export class ExpedienteService {
  constructor(private readonly httpService: HttpService) {}

  getExpedientes(): Observable<ExpedienteResponseDto[]> {
    const url =
      'https://aplicaciones.universidades.gob.es/gestion_expedientes/v1/estado_expediente?fechaNacimiento=06/09/1994&nombreApellidosLogin=nombre&apellidos=&numeroDocumentoIdentidadSolicitud=BE282725&numeroDocumentoIdentidadLogin=BE282725&accesoClave=false';
    return this.httpService
      .get<ExpedienteResponseDto[]>(url)
      .pipe(map((response) => response.data));
  }
}
