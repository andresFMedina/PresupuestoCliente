import { Paginator } from './../../models/paginator';
import { environment } from './../../../../environments/environment';
import { RecursoBasico } from './../../models/recurso-basico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursoBasicoService {

  url: string = `${environment.urlApi}/RecursoBasico/`;

  constructor(
    private http: HttpClient
  ) { }

  // GET RecursoBasico/?filter={$filter}&page=${page}
  getRecursosBasicos(filter: string, page: number) {
    const urlFilter = `${this.url}?page=${page + 1}&filter=${filter}`;
    console.log(urlFilter);
    return this.http.get<Paginator<RecursoBasico>>(urlFilter);
  }

  // GET RecursoBasico/${id}
  getRecursoBasicoById(id: number) {
    return this.http.get<RecursoBasico>(`${environment.urlApi}/RecursoBasico/${id}`);
  }

  // POST RecursoBasico
  postRecursoBasico(recursoBasico: RecursoBasico) {
    return this.http.post(`${environment.urlApi}/RecursoBasico`, recursoBasico);
  }

  // PUT RecursoBasico/${id}
  putRecursoBasico(id: number, changes: Partial<RecursoBasico>) {
    return this.http.put(`${environment.urlApi}/RecursoBasico/${id}`, changes);
  }
}
