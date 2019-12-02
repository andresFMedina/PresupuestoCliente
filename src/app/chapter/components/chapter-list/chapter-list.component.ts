import { switchMap } from 'rxjs/operators';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { CapituloService } from './../../../core/services/capitulo/capitulo.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Capitulo } from './../../../core/models/capitulo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit {

  capitulos: Capitulo[];
  proyecto: Proyecto;

  displayedColumns = ['codigo', 'descripcion', 'parcial', 'edit', 'delete'];

  constructor(
    private capituloService: CapituloService,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.proyectoService.project$.pipe(
      switchMap(
        (proyecto) => {
          this.proyecto = proyecto;
          return this.capituloService.getCapitulosByProyectoId(proyecto.id);
        }
      )
    ).subscribe(
      (capitulos) => {
        this.capitulos = capitulos;
      }
    );
  }

}
