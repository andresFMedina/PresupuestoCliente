import { ListResponse, SingleResponse } from './../../models/response.interface';
import { environment } from './../../../../environments/environment';
import { Proyecto } from './../../models/proyecto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url: string = environment.urlApi;
  private currentProject: Proyecto;
  private project = new BehaviorSubject<Proyecto>(this.currentProject);

  project$ = this.project.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  setCurrentProject(proyecto: Proyecto) {
    this.currentProject = proyecto;
    this.project.next(this.currentProject);
  }

  getProyectos() {
    return this.http.get<ListResponse<Proyecto>>(`${this.url}/Proyecto/`);
  }

  getProyectoById(id: number) {
    return this.http.get<SingleResponse<Proyecto>>(`${this.url}/Proyecto/${id}`);
  }

  postProyecto(proyecto: Proyecto) {
    return this.http.post<SingleResponse<Proyecto>>(`${this.url}/Proyecto/`, proyecto);
  }
}
