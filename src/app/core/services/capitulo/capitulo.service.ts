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
    return this.http.get<Capitulo[]>(`${this.urlApi}?proyectoId=${proyectoId}`);
  }

  getCapituloById(id: number) {
    return this.http.get<Capitulo>(`${this.urlApi}/${id}`);
  }

  postCapitulo(capitulo: Capitulo) {
    return this.http.post<Capitulo>(this.urlApi, capitulo);
  }

  putCapitulo(capitulo: Capitulo) {
    return this.http.put(`${this.urlApi}/${capitulo.id}`, capitulo);
  }

}
