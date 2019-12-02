import { Proyecto } from './../../../core/models/proyecto.model';
import { AnalisisUnitario } from './../../../core/models/analisis-unitario.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AnalisisUnitarioService } from 'src/app/core/services/analisis-unitario/analisis-unitario.service';

@Component({
  selector: 'app-table-analysis',
  templateUrl: './table-analysis.component.html',
  styleUrls: ['./table-analysis.component.scss']
})
export class TableAnalysisComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['codigo', 'descripcion', 'unidad', 'precio'];
  analisis: AnalisisUnitario[];
  @Input() proyecto: Proyecto;
  @Output() analisisSelected = new EventEmitter<AnalisisUnitario>();

  resultsLength = 0;
  filter = '';

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private analisisUnitarioService: AnalisisUnitarioService
  ) { }

  ngOnInit() {
  }

  fetchAnalisisUnitario(filter: string, page: number) {
    console.log(filter);
    this.analisisUnitarioService.getAnalisisUnitarioByProyectoId(this.proyecto.id).subscribe((analisis) => {
      console.log(analisis);
      this.resultsLength = analisis.totalRegister;
      this.analisis = analisis.result;
    }, (error) => {
      console.error(error);
    });
  }

  ngAfterViewInit() {
    this.fetchAnalisisUnitario(this.filter, this.paginator.pageIndex);
  }

  applyFilter(filter: string) {
    console.log(filter);
    this.fetchAnalisisUnitario(filter, this.paginator.pageIndex);
    this.filter = filter;
  }

  ChangePage(event: PageEvent) {
    this.fetchAnalisisUnitario(this.filter, event.pageIndex);
  }

  selectAnalisis(analisisUnitario: AnalisisUnitario) {
    this.analisisSelected.emit(analisisUnitario);
  }

}
