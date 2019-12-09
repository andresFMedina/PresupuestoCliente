import { ListResponse, SingleResponse } from './../../models/response.interface';
import { Capitulo } from './../../models/capitulo.model';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapituloService {

  urlApi = `${environment.urlApi}/Capitulo`;

  constructor(
    private http: HttpClient
  ) { }

  getCapitulosByProyectoId(proyectoId: number) {
    return this.http.get<ListResponse<Capitulo>>(`${this.urlApi}?proyectoId=${proyectoId}`);
  }

  getCapituloById(id: number) {
    return this.http.get<SingleResponse<Capitulo>>(`${this.urlApi}/${id}`);
  }

  postCapitulo(capitulo: Capitulo) {
    return this.http.post<SingleResponse<Capitulo>>(this.urlApi, capitulo);
  }

  putCapitulo(capitulo: Capitulo) {
    return this.http.put<Response>(`${this.urlApi}/${capitulo.id}`, capitulo);
  }

}
