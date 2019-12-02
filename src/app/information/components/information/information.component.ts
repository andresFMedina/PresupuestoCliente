import { Proyecto } from './../../../core/models/proyecto.model';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  proyecto: Proyecto;

  constructor(
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.proyectoService.project$.subscribe(
      (proyecto) => {
        this.proyecto = proyecto;
        console.log(proyecto);
      });
  }

}
