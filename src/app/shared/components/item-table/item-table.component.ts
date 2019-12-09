import { switchMap } from 'rxjs/operators';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Item } from './../../../core/models/item.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ItemService } from 'src/app/core/services/item/item.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'valorUnitario', 'valorParcial'];
  items: Item[] = [];
  @Output() itemSelected = new EventEmitter<Item>();

  resultsLength = 0;
  filter = '';
  proyecto: Proyecto;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private itemService: ItemService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
  }

  fetchItem(filter: string, page: number) {
    console.log(filter);
    this.itemService.getItemByProyectoId(this.proyecto.id).subscribe((recurso) => {
      this.resultsLength = recurso.totalRegister;
      this.items = recurso.model;
    }, (error) => {
      console.error(error);
    });
  }

  ngAfterViewInit() {
    this.proyectoService.project$
      .pipe(
        switchMap((proyecto) => {
          this.proyecto = proyecto;
          return this.itemService.getItemByProyectoId(proyecto.id);
        })
      )
      .subscribe((item) => {
        this.resultsLength = item.totalRegister;
        this.items = item.model;
      }, (error) => {
        console.error(error);
      });
    this.fetchItem(this.filter, this.paginator.pageIndex);
  }

  applyFilter(filter: string) {
    console.log(filter);
    this.fetchItem(filter, this.paginator.pageIndex);
    this.filter = filter;
  }

  ChangePage(event: PageEvent) {
    this.fetchItem(this.filter, event.pageIndex);
  }

  selectItem(item: Item) {
    item.valorParcial = item.valorUnitario * item.cantidad;
    this.itemSelected.emit(item);
  }



}
