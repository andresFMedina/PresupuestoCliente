import { ItemService } from 'src/app/core/services/item/item.service';
import { CostoIndirectoService } from './../../../core/services/costo-indirecto/costo-indirecto.service';
import { switchMap } from 'rxjs/operators';
import { Proyecto } from './../../../core/models/proyecto.model';
import { ProyectoService } from 'src/app/core/services/proyecto/proyecto.service';
import { CostoIndirecto } from './../../../core/models/costo-indirecto.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';

export interface Transaction {
  item: string;
  percent: number;
  cost: number;
}


@Component({
  selector: 'app-aiu',
  templateUrl: './aiu.component.html',
  styleUrls: ['./aiu.component.scss']
})
export class AiuComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['item', 'percent', 'cost'];
  transactions: Transaction[] = [];
  data: Transaction[];
  costosIndirectos: CostoIndirecto[];
  proyecto: Proyecto;
  costoDirecto: number;

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  getTotalPercent() {
    return this.transactions.map(t => t.percent).reduce((acc, value) => acc + value, 0);
  }
  constructor(
    private costoIndirectoService: CostoIndirectoService,
    private proyectoService: ProyectoService,
    private itemService: ItemService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.proyectoService.project$
      .pipe(
        switchMap((proyecto) => {
          this.proyecto = proyecto;
          return this.costoIndirectoService.getCostoIndirectoByProyectoId(proyecto.id);
        })
      )
      .subscribe(
        (costosIndirectos) => {
          this.itemService.getCostoDirecto(this.proyecto.id).subscribe(
            (costo) => {
              this.costoDirecto = costo;
              this.costosIndirectos = costosIndirectos;
              costosIndirectos.forEach(
                (c) => {
                  const transaction: Transaction = {
                    item: c.descripcion,
                    percent: c.porcentaje,
                    cost: this.costoDirecto * c.porcentaje
                  };
                  this.transactions.push(transaction);
                }
              );
              this.data = [...this.transactions];
            }
          );


        }
      );
  }

}
