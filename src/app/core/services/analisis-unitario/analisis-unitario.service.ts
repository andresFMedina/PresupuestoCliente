import { PagedResponse, SingleResponse } from './../../models/response.interface';
import { Paginator } from './../../models/paginator';

import { environment } from './../../../../environments/environment';
import { AnalisisUnitario } from './../../models/analisis-unitario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalisisUnitarioService {
  urlApi = `${environment.urlApi}/AnalisisUnitario`;

  constructor(
    private http: HttpClient
  ) { }

  getAnalisisUnitarioByProyectoId(proyectoId: number, page?: number, filter?: string) {
    return this.http.get<PagedResponse<AnalisisUnitario>>(`${this.urlApi}?proyectoId=${proyectoId}`);
  }

  getAnalisisUnitarioById(id: number) {
    return this.http.get<SingleResponse<AnalisisUnitario>>(`${this.urlApi}/${id}`);
  }

  postAnalisisUnitario(analisisUnitario: AnalisisUnitario) {
    return this.http.post<SingleResponse<AnalisisUnitario>>(this.urlApi, analisisUnitario);
  }

  putAnalisisUnitario(changes: AnalisisUnitario, id: number) {
    return this.http.put<Response>(`${this.urlApi}/${id}`, changes);
  }

}
