import { switchMap } from 'rxjs/operators';
import { CapituloService } from 'src/app/core/services/capitulo/capitulo.service';
import { ProyectoService } from 'src/app/core/services/proyecto/proyecto.service';
import { ItemService } from 'src/app/core/services/item/item.service';
import { Capitulo } from './../../../core/models/capitulo.model';
import { Item } from './../../../core/models/item.model';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { compareNumbers } from 'src/app/core/constants';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource: MatTableDataSource<Item>;

  displayedColumns = ['codigo', 'descripcion', 'unidad', 'cantidad', 'precio', 'parcial', 'aporte'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
          this.data = [];
          this.items = [];
          return this.capituloService.getCapitulosByProyectoId(proyecto.id);
        })
      )
      .subscribe(
        (capitulos) => {
          capitulos.model.forEach(c => this.startData(c));
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
      aporte: 0,
      cantidad: null,
      codigo: '',
      proyectoId: this.proyecto.id,
      unidad: '',
      detalles: null,
      valorUnitario: null,
      numeroCapitulo: capitulo.numero,
      costoEquipo: capitulo.costoEquipo,
      costoMateriales: capitulo.costoMateriales,
      costoManoObra: capitulo.costoManoObra
    };
    // this.data = [...this.items];
    this.itemService.getItemByCapituloId(capitulo.id).subscribe(
      (items) => {
        this.items.push(itemCapitulo);
        items.model.forEach((i) => {
          i.valorParcial = i.valorUnitario * i.cantidad;
          i.numeroCapitulo = Number(`${capitulo.numero}.${i.numeroCapitulo}`);
          this.items.push(i); 
        });
        this.data = [...this.items];
        this.data.sort((item1, item2) => compareNumbers(item1.numeroCapitulo, item2.numeroCapitulo));
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error(error.error);
      }
    );
  }
}
