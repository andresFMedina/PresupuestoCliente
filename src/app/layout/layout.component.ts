import { Proyecto } from './../core/models/proyecto.model';
import { ProyectoService } from './../core/services/proyecto/proyecto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  proyecto: Proyecto;
  constructor(
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.proyectoService.project$.subscribe(
      (proyecto) => {
        this.proyecto = proyecto;
      }
    );
  }

}
