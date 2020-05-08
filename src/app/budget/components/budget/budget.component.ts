import { CostosMateriales } from './../../../core/models/costos-materiales.interface';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { DetalleService } from './../../../core/services/detalle/detalle.service';
import { ItemService } from './../../../core/services/item/item.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { AnalisisUnitario } from './../../../core/models/analisis-unitario.model';
import { TableComponent } from './../../../shared/components/table/table.component';
import { Item } from './../../../core/models/item.model';
import { Detalle } from './../../../core/models/detalle';
import { RecursoBasicoService } from './../../../core/services/recurso-basico/recurso-basico.service';
import { RecursoBasico } from './../../../core/models/recurso-basico.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { calcularCostoMaterialesDetalles } from 'src/app/core/utils/calcular-costos';
import { MatSnackBar } from '@angular/material';
import { createDefaultSnackbar } from 'src/app/core/utils/snackbar-config';
import { postDetalle, putDetalle } from 'src/app/shared/functions/detalle-fetch';
import { recursoBasicoADetalle, analisisUnitarioADetalle } from 'src/app/shared/functions/table-component-utils';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  form: FormGroup;
  item: Item = null;
  isRecursoSelected = false;
  isProcesing = false;
  id = 0;
  proyecto: Proyecto;

  @ViewChild(TableComponent, { static: false })
  private tableComponent: TableComponent;
  constructor(
    private formBuilder: FormBuilder,
    private recursoBasicoService: RecursoBasicoService,
    private proyectoService: ProyectoService,
    private itemService: ItemService,
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
        if (this.id !== 0) {
          return this.itemService.getItemById(this.id);
        }
      }))
      .subscribe((item) => {
        this.item = item.model;
        console.log(item);
        this.buildForm();
      });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      codigo: [(this.item) ? this.item.codigo : '', [Validators.required]],
      descripcion: [(this.item) ? this.item.descripcion : '', [Validators.required]],
      unidad: [(this.item) ? this.item.unidad : '', [Validators.required]],
      cantidad: [(this.item) ? this.item.cantidad : '', [Validators.required]],
    });
  }

  createItem(detalles: Detalle[]) {
    this.isProcesing = true;
    console.log(detalles);
    const valorUnitario = (detalles) ? this.getValorUnitario(detalles) : 0;
    let costos: CostosMateriales;
    if (detalles) {
      costos = calcularCostoMaterialesDetalles(detalles);
    }

    const item: Item = {
      id: Number(this.id),
      codigo: this.form.get('codigo').value,
      descripcion: this.form.get('descripcion').value,
      unidad: this.form.get('unidad').value,
      cantidad: this.form.get('cantidad').value,
      aporte: 0,
      detalles: null,
      proyectoId: this.proyecto.id,
      valorUnitario: Math.round(valorUnitario),
      costoMateriales: (costos) ? costos.costoMateriales : 0,
      costoEquipo: (costos) ? costos.costoEquipo : 0,
      costoManoObra: (costos) ? costos.costoManoObra : 0
    };
    if (this.id === 0) {
      this.postItem(item, detalles);
    } else {
      this.putItem(item, detalles);
    }
  }

  getValorUnitario(detalles: Detalle[]) {
    return detalles.map(d => d.subTotal).reduce((acc, value) => acc + value, 0);
  }

  addResource(recurso: RecursoBasico) {
    const itemId = (this.item) ? this.item.id : 0;
    const detalle = recursoBasicoADetalle(recurso, itemId);
    this.tableComponent.addRow(detalle, true);
  }

  addAnalysis(analysis: AnalisisUnitario) {
    const itemId = (this.item) ? this.item.id : 0;
    const detalle = analisisUnitarioADetalle(analysis, itemId);
    this.tableComponent.addRow(detalle, true);
  }

  showResourceTable() {
    this.isRecursoSelected = true;
    console.log(this.isRecursoSelected);
  }

  showAnalysisTable() {
    this.isRecursoSelected = false;
    console.log(this.isRecursoSelected);
  }

  postItem(item: Item, detalles: Detalle[]) {
    this.itemService.postItem(item).subscribe(
      (response) => {
        console.log(response);
        // this.item = response;
        if (detalles) {
          detalles.forEach((d) => {
            postDetalle(this.detalleService, d, response.model.id);
          });
        }
        this.isProcesing = false;
        this.resetForm();
        const message = 'Se ha creado el item exitosamente';
        createDefaultSnackbar(this.snackbar, message);
      },
      (error) => {
        console.error(error.error);
        this.isProcesing = false;
      }
    );
  }

  putItem(item, detalles: Detalle[]) {
    // item.id = 0;
    this.itemService.putItem(item).subscribe(
      (response) => {
        console.log(response);
        item.id = this.id;
        const message = 'Se han guardado los cambios';
        createDefaultSnackbar(this.snackbar, message);
        // this.item = response;
      },
      (error) => {
        console.error(error.error);
        this.isProcesing = false;
      }
    );
    if (detalles) {
      detalles.forEach((d) => {
        if (d.id === 0) {
          postDetalle(this.detalleService, d, this.id);
        } else {
          putDetalle(this.detalleService, d);
        }
      });
    }
  }

  resetForm() {
    this.tableComponent.clearTable();
    this.item = null;
    this.buildForm();
  }

}
