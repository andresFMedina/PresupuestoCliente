import { TableUtil } from './../../../core/utils/table-utils';
import { Detalle } from './../../../core/models/detalle';
import { Component, OnInit, Input } from '@angular/core';
import { calcularSubtotalDetalle } from 'src/app/core/utils/calcular-costos';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'rendimiento', 'desperdicio', 'unidad', 'precio', 'subTotal'];
  @Input() detalles: Detalle[];
  total = 0;

  constructor() { }

  ngOnInit() { }

  exportTable() {
    TableUtil.exportToExcel('table-detail');
  }

}
