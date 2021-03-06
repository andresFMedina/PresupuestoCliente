import { CostosMateriales } from './../../../core/models/costos-materiales.interface';
import { grupos } from './../../../core/constants';
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
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { calcularCostoMaterialesDetalles } from 'src/app/core/utils/calcular-costos';
import { MatSnackBar } from '@angular/material';
import { createDefaultSnackbar } from 'src/app/core/utils/snackbar-config';
import { postDetalle, putDetalle } from 'src/app/shared/functions/detalle-fetch';
import { recursoBasicoADetalle } from 'src/app/shared/functions/table-component-utils';

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
  grupos = grupos;

  @ViewChild(TableComponent, { static: false })
  private tableComponent: TableComponent;

  constructor(
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    private analisisUnitarioService: AnalisisUnitarioService,
    private detalleService: DetalleService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
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
        this.id = (params.id) ? Number(params.id) : 0;
        console.log(this.id);
        if (this.id !== 0) {
          return this.analisisUnitarioService.getAnalisisUnitarioById(this.id);
        }
      }))
      .subscribe((analisisUnitario) => {
        this.analisisUnitario = analisisUnitario.model;
        console.log(analisisUnitario);
        this.buildForm();
      });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      codigo: [(this.analisisUnitario) ? this.analisisUnitario.codigo : '', [Validators.required]],
      descripcion: [(this.analisisUnitario) ? this.analisisUnitario.descripcion : '', [Validators.required]],
      unidad: [(this.analisisUnitario) ? this.analisisUnitario.unidad : '', [Validators.required]],
      grupo: [(this.analisisUnitario) ? this.analisisUnitario.grupo : '', [Validators.required]],
    });
  }

  addResource(recurso: RecursoBasico) {
    const analisisId = (this.analisisUnitario) ? this.analisisUnitario.id : 0;
    const detalle = recursoBasicoADetalle(recurso, null, analisisId);
    this.tableComponent.addRow(detalle, true);
  }

  createAnalisis(detalles: Detalle[]) {
    this.isProcesing = true;
    console.log(detalles);
    let costos: CostosMateriales;
    if (detalles) {
      costos = calcularCostoMaterialesDetalles(detalles);
    }
    const valorUnitario = (detalles) ?
      detalles.map(d => d.subTotal).reduce((acc, value) => acc + value, 0) : 0;
    const analisisUnitario: AnalisisUnitario = {
      id: Number(this.id),
      codigo: this.form.get('codigo').value,
      descripcion: this.form.get('descripcion').value,
      unidad: this.form.get('unidad').value,
      detalles: null,
      proyectoId: this.proyecto.id,
      grupo: this.form.get('grupo').value,
      valorUnitario: Math.round(valorUnitario),
      costoMateriales: (costos) ? costos.costoMateriales : 0,
      costoEquipo: (costos) ? costos.costoEquipo : 0,
      costoManoObra: (costos) ? costos.costoManoObra : 0
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
        if (detalles) {
          detalles.forEach((d) => {
            postDetalle(this.detalleService, d, response.model.id);
          });
        }
        this.isProcesing = false;
        this.resetForm();
        const message = 'Se ha creado el analisis unitario exitosamente';
        createDefaultSnackbar(this.snackbar, message);
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
        const message = 'Se han guardado los cambios';
        createDefaultSnackbar(this.snackbar, message);
      }
    );
    if (detalles === null) {
      return;
    }
    detalles.forEach((d) => {
      if (d.id === 0) {
        postDetalle(this.detalleService, d, this.id);
      } else {
        putDetalle(this.detalleService, d);
      }
    });
  }

  resetForm() {
    this.tableComponent.clearTable();
    this.analisisUnitario = null;
    this.buildForm();
  }

}
