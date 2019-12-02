import { DetalleService } from './../../../core/services/detalle/detalle.service';
import { AnalisisUnitarioService } from './../../../core/services/analisis-unitario/analisis-unitario.service';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { TableComponent } from './../../../shared/components/table/table.component';
import { Detalle } from './../../../core/models/detalle';
import { AnalisisUnitario } from './../../../core/models/analisis-unitario.model';
import { RecursoBasico } from './../../../core/models/recurso-basico.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  form: FormGroup;
  analisisUnitario: AnalisisUnitario;
  proyecto: Proyecto;
  id = 0;
  isProcesing = false;

  @ViewChild(TableComponent, { static: false })
  private tableComponent: TableComponent;

  constructor(
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    private analisisUnitarioService: AnalisisUnitarioService,
    private detalleService: DetalleService,
    private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.proyectoService.project$.subscribe(
      (proyecto) => {
        this.proyecto = proyecto;
      }
    );
    this.route.params
      .pipe(switchMap((params: Params) => {
        this.id = (params.id) ? params.id : 0;
        console.log(this.id);
        return this.analisisUnitarioService.getAnalisisUnitarioById(this.id);
      }))
      .subscribe((analisisUnitario) => {
        this.analisisUnitario = analisisUnitario;
        console.log(analisisUnitario);
        this.buildForm();
      });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      codigo: [(this.analisisUnitario) ? this.analisisUnitario.codigo : '', [Validators.required]],
      descripcion: [(this.analisisUnitario) ? this.analisisUnitario.descripcion : '', [Validators.required]],
      unidad: [(this.analisisUnitario) ? this.analisisUnitario.unidad : '', [Validators.required]],
    });
  }

  addResource(recurso: RecursoBasico) {
    console.log(recurso);
    const detalle: Detalle = {
      id: 0,
      analisisUnitarioId: (this.analisisUnitario) ? this.id : 0,
      codigo: recurso.codigo,
      descripcion: recurso.descripcion,
      unidad: recurso.unidad,
      precio: recurso.precio,
      rendimiento: 1,
      detalleDe: 'recurso',
      subTotal: recurso.precio
    };
    this.tableComponent.addRow(detalle, true);
  }

  createAnalisis(detalles: Detalle[]) {
    this.isProcesing = true;
    console.log(detalles);
    const valorUnitario = detalles.map(d => d.subTotal).reduce((acc, value) => acc + value, 0);
    const analisisUnitario: AnalisisUnitario = {
      id: Number(this.id),
      codigo: this.form.get('codigo').value,
      descripcion: this.form.get('descripcion').value,
      unidad: this.form.get('unidad').value,
      detalles: null,
      proyectoId: this.proyecto.id,
      valorUnitario: Math.round(valorUnitario)
    };
    console.log(analisisUnitario);
    if (this.id === 0) {
      this.postAnalysis(analisisUnitario, detalles);
    } else {
      this.putAnalysis(analisisUnitario, detalles);
    }
  }

  postAnalysis(analisisUnitario: AnalisisUnitario, detalles: Detalle[]) {
    this.analisisUnitarioService.postAnalisisUnitario(analisisUnitario).subscribe(
      (response) => {
        console.log(response);
        // this.analisisUnitario = response;
        detalles.forEach((d) => {
          this.postDetalle(d, response.id);
        });
      },
      (error) => {
        console.error(error.error);
        this.isProcesing = false;
      }
    );
  }

  putAnalysis(analisisUnitario, detalles: Detalle[]) {
    // analisisUnitario.id = 0;
    this.analisisUnitarioService.putAnalisisUnitario(analisisUnitario, this.id).subscribe(
      (response) => {
        console.log(response);
        analisisUnitario.id = this.id;
        // this.analisisUnitario = response;
      },
      (error) => {
        console.error(error.error);
        this.isProcesing = false;
      }
    );
    detalles.forEach((d) => {
      if (d.analisisUnitarioId === 0) {
        this.postDetalle(d, this.id);
      } else {
        this.putDetalle(d);
      }
    });
  }

  postDetalle(detalle: Detalle, id: number) {
    detalle.analisisUnitarioId = id;
    this.detalleService.postDetalle(detalle).subscribe(
      (resp) => {
        console.log(resp);
        this.isProcesing = false;
      },
      (error) => {
        console.log(error.error);
        this.isProcesing = false;
      }
    );
  }

  putDetalle(detalle: Detalle) {
    this.detalleService.putDetalle(detalle).subscribe(
      (resp) => {
        console.log(resp);
        this.isProcesing = false;
      },
      (error) => {
        console.log(error.error);
        this.isProcesing = false;
      }
    );
  }

}
