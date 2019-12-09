import { ListResponse, SingleResponse, Response } from './../../models/response.interface';
import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { CostoIndirecto } from './../../models/costo-indirecto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostoIndirectoService {

  urlApi = `${environment.urlApi}/CostoIndirecto`;
  private aiuTotal: number;
  private aiu$ = new BehaviorSubject<number>(this.aiuTotal);

  constructor(
    private http: HttpClient
  ) { }

  setAiu(aiu) {
    this.aiuTotal = aiu;
    this.aiu$.next(this.aiuTotal);
  }

  getCostoIndirectoByProyectoId(proyectoId: number) {
    return this.http.get<ListResponse<CostoIndirecto>>(`${this.urlApi}?proyecto=${proyectoId}`);
  }

  getAiuTotal(proyectoId: number) {
    return this.http.get<SingleResponse<number>>(`${this.urlApi}/Total?proyectoId=${proyectoId}`);
  }

  postCostoIndirecto(costoIndirecto: CostoIndirecto) {
    return this.http.post<SingleResponse<CostoIndirecto>>(this.urlApi, costoIndirecto);
  }

  putCostoIndirecto(costoIndirecto: CostoIndirecto) {
    const id = costoIndirecto.id;
    return this.http.put<Response>(`${this.urlApi}/${id}`, costoIndirecto);
  }

}
