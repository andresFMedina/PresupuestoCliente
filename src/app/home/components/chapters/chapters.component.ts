import { switchMap } from 'rxjs/operators';
import { CapituloService } from 'src/app/core/services/capitulo/capitulo.service';
import { ProyectoService } from 'src/app/core/services/proyecto/proyecto.service';
import { ItemService } from 'src/app/core/services/item/item.service';
import { Capitulo } from './../../../core/models/capitulo.model';
import { Item } from './../../../core/models/item.model';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {
  items: Item[] = [];
  data: Item[] = [];
  proyecto: Proyecto;
  resultsLength: number;
  capitulos: Capitulo[];

  displayedColumns = ['codigo', 'descripcion', 'unidad', 'cantidad', 'precio', 'parcial', 'aporte'];

  constructor(
    private itemService: ItemService,
    private proyectoService: ProyectoService,
    private capituloService: CapituloService
  ) { }

  ngOnInit() {
    this.proyectoService.project$
      .pipe(
        switchMap((proyecto) => {
          this.proyecto = proyecto;
          return this.capituloService.getCapitulosByProyectoId(proyecto.id);
        })
      )
      .subscribe(
        (capitulos) => {
          this.capitulos = capitulos;
          capitulos.forEach(c => this.startData(c));
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  startData(capitulo: Capitulo) {
    const itemCapitulo: Item = {
      id: 0,
      descripcion: capitulo.descripcion,
      aporte: '',
      cantidad: null,
      codigo: '',
      proyectoId: this.proyecto.id,
      unidad: '',
      detalles: null,
      valorUnitario: null,
      numeroCapitulo: capitulo.numero,
    };
    this.items.push(itemCapitulo);
    this.itemService.getItemByCapituloId(capitulo.id).subscribe(
      (items) => {
        console.log(items);
        items.forEach((i) => {
          i.valorParcial = i.valorUnitario * i.cantidad;
          i.numeroCapitulo = Number(`${capitulo.id}.${i.numeroCapitulo}`);
          console.log(i);
          this.items.push(i);
          this.data = [...this.items];
        });
        console.log(this.data);
      },
      (error) => {
        console.error(error.error);
      }
    );
  }
}
