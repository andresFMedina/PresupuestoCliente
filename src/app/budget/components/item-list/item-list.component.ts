import { switchMap } from 'rxjs/operators';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { ItemService } from './../../../core/services/item/item.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Item } from './../../../core/models/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  proyecto: Proyecto;
  resultsLength: number;

  displayedColumns = ['codigo', 'descripcion', 'unidad', 'cantidad', 'precio', 'parcial', 'edit', 'delete'];

  constructor(
    private itemService: ItemService,
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

}
