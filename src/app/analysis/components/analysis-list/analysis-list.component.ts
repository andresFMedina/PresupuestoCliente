import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { AnalisisUnitarioService } from 'src/app/core/services/analisis-unitario/analisis-unitario.service';
import { AnalisisUnitario } from './../../../core/models/analisis-unitario.model';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-analysis-list',
  templateUrl: './analysis-list.component.html',
  styleUrls: ['./analysis-list.component.scss']
})
export class AnalysisListComponent implements OnInit {

  analisisUnitarios: AnalisisUnitario[];
  proyecto: Proyecto;
  resultsLength: number;

  displayedColumns = ['codigo', 'descripcion', 'unidad', 'precio', 'edit', 'delete'];

  constructor(
    private analisisUnitarioService: AnalisisUnitarioService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.proyectoService.project$.pipe(
      switchMap(
        (proyecto) => {
          this.proyecto = proyecto;
          return this.analisisUnitarioService.getAnalisisUnitarioByProyectoId(proyecto.id);
        }
      )
    ).subscribe(
      (results) => {
        this.analisisUnitarios = results.model;
        this.resultsLength = results.totalRegister;
      }
    );
  }

}
