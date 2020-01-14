import { switchMap } from 'rxjs/operators';
import { DetalleService } from './../../../core/services/detalle/detalle.service';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Detalle } from './../../../core/models/detalle';
import { Component, OnInit } from '@angular/core';
import { calcularSubtotalDetalle } from 'src/app/core/utils/calcular-costos';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  proyecto: Proyecto;
  detalles: Detalle[];

  constructor(
    private proyectoService: ProyectoService,
    private detalleService: DetalleService
  ) { }

  ngOnInit() {
    this.proyectoService.project$.pipe(
      switchMap(
        (proyecto) => {
          this.proyecto = proyecto;
          return this.detalleService.getDetallesByProyectoId(proyecto.id);
        }
      )).subscribe(
        (detalles) => {
          this.detalles = detalles.model;
          this.detalles.forEach(d => calcularSubtotalDetalle(d));
        },
        (error) => {
          console.error(error.error);
        }
      );
  }

}
