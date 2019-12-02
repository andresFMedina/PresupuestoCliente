import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { switchMap } from 'rxjs/operators';
import { CostoIndirectoService } from './../../../core/services/costo-indirecto/costo-indirecto.service';
import { ItemService } from 'src/app/core/services/item/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-cost',
  templateUrl: './table-cost.component.html',
  styleUrls: ['./table-cost.component.scss']
})
export class TableCostComponent implements OnInit {

  proyecto: Proyecto;
  data = [
    {
      descripcion: 'Costo Directo',
      costo: 0
    },
    {
      descripcion: 'Costo Indirecto',
      costo: 0
    },
  ];
  displayedColumns = ['descripcion', 'costo'];
  costoDirecto: number;
  totalAiu: number;

  constructor(
    private itemService: ItemService,
    private costoIndirectoService: CostoIndirectoService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.proyectoService.project$
      .pipe(
        switchMap((proyecto) => {
          this.proyecto = proyecto;
          return this.itemService.getCostoDirecto(this.proyecto.id);
        })
      )
      .pipe(
        switchMap((costo) => {
          this.costoDirecto = costo;
          this.itemService.setCurrentCostoDirecto(costo);
          return this.costoIndirectoService.getAiuTotal(this.proyecto.id);
        })
      )
      .subscribe(
        (aiu) => {
          this.totalAiu = aiu;
          this.costoIndirectoService.setAiu(aiu);
          this.data[0].costo = this.costoDirecto;
          this.data[1].costo = this.costoDirecto * this.totalAiu;
        },
        () => {

        }
      );
  }

  getTotalCost() {
    return this.data.map(t => t.costo).reduce((acc, value) => acc + value, 0);
  }

}
