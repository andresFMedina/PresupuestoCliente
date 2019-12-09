import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateComponent } from '../dialog-create/dialog-create.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  opened: boolean;
  proyectos: Proyecto[];

  constructor(
    public dialog: MatDialog,
    public proyectoService: ProyectoService
  ) { }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      width: '600px'
    });
  }

  ngOnInit() {
    this.fetchProyectos();
  }

  fetchProyectos(): void {
    this.proyectoService.getProyectos().subscribe(
      (proyectos) => {
        this.proyectos = proyectos.model;
        console.log(this.proyectos[0].nombre_Obra);
        this.setCurrentProject(this.proyectos[0]);
      },
      (error) => {
        console.log(error);
      });
  }

  setCurrentProject(proyecto: Proyecto) {
    this.proyectoService.setCurrentProject(proyecto);
  }


}
