import { DialogResourceComponent } from './../dialog-resource/dialog-resource.component';
import { MatDialog } from '@angular/material/dialog';
import { RecursoBasico } from './../../../core/models/recurso-basico.model';
import { RecursoBasicoService } from './../../../core/services/recurso-basico/recurso-basico.service';
import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table-resource',
  templateUrl: './table-resource.component.html',
  styleUrls: ['./table-resource.component.scss']
})
export class TableResourceComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['codigo', 'descripcion', 'unidad', 'precio', 'edit'];
  resources: RecursoBasico[];
  @Output() recursoSelected = new EventEmitter<RecursoBasico>();

  resultsLength = 0;
  filter = '';

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private recursoBasicoService: RecursoBasicoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  fetchRecursoBasico(filter: string, page: number) {
    console.log(filter);
    this.recursoBasicoService.getRecursosBasicos(filter, page).subscribe((recurso) => {
      this.resultsLength = recurso.totalRegister;
      this.resources = recurso.model;
    }, (error) => {
      console.error(error);
    });
  }

  ngAfterViewInit() {
    this.fetchRecursoBasico(this.filter, this.paginator.pageIndex);
  }

  applyFilter(filter: string) {
    console.log(filter);
    this.fetchRecursoBasico(filter, this.paginator.pageIndex);
    this.filter = filter;
  }

  ChangePage(event: PageEvent) {
    this.fetchRecursoBasico(this.filter, event.pageIndex);
  }

  selectResource(recursoBasico: RecursoBasico) {
    this.recursoSelected.emit(recursoBasico);
  }

  openDialogResources(recursoBasico?: RecursoBasico) {
    const dialogRef = this.dialog.open(DialogResourceComponent, {
      width: '600px',
      data: recursoBasico
    });

    dialogRef.beforeClosed().subscribe(
      () => {
        this.fetchRecursoBasico(this.filter, this.paginator.pageIndex);
      }
    );
  }

}
