import { PagedResponse, SingleResponse, ListResponse, Response } from './../../models/response.interface';
import { BehaviorSubject } from 'rxjs';
import { Paginator } from './../../models/paginator';
import { Item } from './../../models/item.model';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  urlApi = `${environment.urlApi}/Item`;
  private currentCost: number;
  private cost$ = new BehaviorSubject<number>(this.currentCost);

  constructor(
    private http: HttpClient
  ) { }

  setCurrentCostoDirecto(costo: number) {
    this.currentCost = costo;
    this.cost$.next(this.currentCost);
  }

  getItemByProyectoId(proyectoId: number) {
    return this.http.get<PagedResponse<Item>>(`${this.urlApi}?proyectoId=${proyectoId}`);
  }

  getItemById(id) {
    return this.http.get<SingleResponse<Item>>(`${this.urlApi}/${id}`);
  }

  getItemByCapituloId(capituloId) {
    return this.http.get<ListResponse<Item>>(`${this.urlApi}/Capitulo?capituloId=${capituloId}`);
  }

  getCostoDirecto(proyectoId: number) {
    return this.http.get<SingleResponse<number>>(`${this.urlApi}/CostoDirecto?proyectoId=${proyectoId}`);
  }

  postItem(item: Item) {
    return this.http.post<SingleResponse<Item>>(this.urlApi, item);
  }

  putItem(item: Item) {
    return this.http.put<Response>(`${this.urlApi}/${item.id}`, item);
  }
}
