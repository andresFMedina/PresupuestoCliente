import { ListResponse, Response, SingleResponse } from './../../models/response.interface';
import { environment } from './../../../../environments/environment';
import { Detalle } from './../../models/detalle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  urlApi = `${environment.urlApi}/Detalle`;
  constructor(
    private http: HttpClient
  ) { }

  getDetallesByAnalisisId(id: number) {
    return this.http.get<ListResponse<Detalle>>(`${this.urlApi}?analisisId=${id}`);
  }

  getDetallesByItemId(id: number) {
    return this.http.get<ListResponse<Detalle>>(`${this.urlApi}?itemId=${id}`);
  }

  getDetallesByProyectoId(id: number) {
    return this.http.get<ListResponse<Detalle>>(`${this.urlApi}/listado?proyectoId=${id}`);
  }

  putDetalle(changes: Detalle) {
    return this.http.put<Response>(`${this.urlApi}/${changes.id}`, changes);
  }

  postDetalle(detalle: Detalle) {
    return this.http.post<SingleResponse<Detalle>>(this.urlApi, detalle);
  }

  deleteDetalle(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
