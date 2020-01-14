import { DetalleService } from './../../../core/services/detalle/detalle.service';
import { Detalle } from './../../../core/models/detalle';
import { switchMap } from 'rxjs/operators';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { ItemService } from './../../../core/services/item/item.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Item } from './../../../core/models/item.model';
import { Component, OnInit } from '@angular/core';
import { AdaptDetail } from 'src/app/core/utils/adapter-to-detalle';
import { MatTableExporterDirective } from 'mat-table-exporter';
import { calcularSubtotalDetalle } from 'src/app/core/utils/calcular-costos';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  proyecto: Proyecto;
  resultsLength: number;
  showDetails = false;
  detalles: Detalle[] = [];

  displayedColumns = ['codigo', 'descripcion', 'unidad', 'cantidad', 'precio', 'parcial', 'edit', 'delete'];

  constructor(
    private itemService: ItemService,
    private detalleService: DetalleService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.proyectoService.project$.pipe(
      switchMap(
        (proyecto) => {
          this.proyecto = proyecto;
          return this.itemService.getItemByProyectoId(proyecto.id);
        }
      )
    ).subscribe(
      (results) => {
        this.items = results.model;
        this.resultsLength = results.totalRegister;
      }
    );
  }

  async getDetails() {
    this.items.forEach((item) => {
      this.detalleService.getDetallesByItemId(item.id).toPromise().then(
        (response) => {
          const detalles = response.model;
          item.detalles = detalles;
          this.detalles = this.detalles.concat(AdaptDetail(item));
          this.showDetails = true;
        },
        (error) => {
          console.error(error.error);
        }
      );
    });
  }

}
