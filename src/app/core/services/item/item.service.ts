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
    return this.http.get<Paginator<Item>>(`${this.urlApi}?proyectoId=${proyectoId}`);
  }

  getItemById(id) {
    return this.http.get<Item>(`${this.urlApi}/${id}`);
  }

  getItemByCapituloId(capituloId) {
    return this.http.get<Item[]>(`${this.urlApi}/Capitulo?capituloId=${capituloId}`);
  }

  getCostoDirecto(proyectoId: number) {
    return this.http.get<number>(`${this.urlApi}/CostoDirecto?proyectoId=${proyectoId}`);
  }

  postItem(item: Item) {
    return this.http.post<Item>(this.urlApi, item);
  }

  putItem(item: Item) {
    return this.http.put(`${this.urlApi}/${item.id}`, item);
  }
}
