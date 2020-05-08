import { switchMap } from 'rxjs/operators';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { ItemService } from './../../../core/services/item/item.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Item } from './../../../core/models/item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chapter-table',
  templateUrl: './chapter-table.component.html',
  styleUrls: ['./chapter-table.component.scss']
})
export class ChapterTableComponent implements OnInit {

  items: Item[] = [];
  data: Item[] = [];
  proyecto: Proyecto;
  resultsLength: number;

  @Input() capituloId = 0;
  @Input() isProcesing: boolean;
  @Output() save = new EventEmitter<Item[]>();

  displayedColumns = ['codigo', 'descripcion', 'unidad', 'cantidad', 'precio', 'parcial', 'aporte', 'delete'];

  constructor(
    private itemService: ItemService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.itemService.getItemByCapituloId(this.capituloId).subscribe(
      (items) => {
        console.log(items);
        items.model.forEach((i) => {
          i.valorParcial = i.valorUnitario * i.cantidad;
          console.log(i);
          this.addRow(i);
        });
        console.log(this.data);
      },
      (error) => {
        console.error(error.error);
      }
    );
  }

  addRow(item: Item) {
    this.items.push(item);
    this.data = [...this.items];
  }

  saveChanges(items: Item[]) {
    this.save.emit(this.data);
  }

  deleteRow(index: number, item: Item) {
    this.items.splice(index, 1);
    this.data = [...this.items];
    if (item.capituloId !== 0 && item.numeroCapitulo !== 0) {
      this.putItem(item);
    }
  }

  putItem(item: Item) {
    item.capituloId = 0;
    item.numeroCapitulo = 0;
    this.itemService.putItem(item).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.error);
      }
    );
  }

  clearTable() {
    this.items = [];
    this.data = [];
    this.resultsLength = 0;
    this.capituloId = 0;
  }

}
