import { Proyecto } from './../../../core/models/proyecto.model';
import { CostoIndirectoService } from './../../../core/services/costo-indirecto/costo-indirecto.service';
import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { CostoIndirecto } from './../../../core/models/costo-indirecto.model';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-table-aiu',
  templateUrl: './table-aiu.component.html',
  styleUrls: ['./table-aiu.component.scss']
})
export class TableAiuComponent implements OnInit {

  form: FormGroup;
  costs: CostoIndirecto[] = [];
  costsForm: FormArray = this.formBuilder.array([]);
  dataSource = new BehaviorSubject<AbstractControl[]>([]);

  proyecto: Proyecto;
  displayedColumns = ['gasto', 'porcentaje', 'add', 'delete'];

  constructor(
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    private costoIndirectoService: CostoIndirectoService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      costs: this.costsForm
    });
    this.proyectoService.project$
      .pipe(
        switchMap((proyecto) => {
          this.proyecto = proyecto;
          return this.costoIndirectoService.getCostoIndirectoByProyectoId(proyecto.id);
        }))
      .subscribe(
        (costosIndirectos) => {
          this.costs = costosIndirectos.model;
          this.costs.forEach((c) => this.addRow(c, false));
          this.updateView();
        });
  }

  getTotalPercent() {
    return this.costs.map(t => t.porcentaje).reduce((acc, value) => acc + value, 0);
  }
  addRow(cost?: CostoIndirecto, noUpdate?: boolean) {
    const row = this.formBuilder.group({
      description: [(cost) ? cost.descripcion : null, Validators.required],
      percent: [(cost) ? cost.porcentaje * 100 : 0, Validators.required],
    });
    this.costsForm.push(row);
    if (!noUpdate) { this.updateView(); }
  }


  updateView() {
    this.dataSource.next(this.costsForm.controls);
  }

  deleteRow(index: number) {
    this.costsForm.removeAt(index);
    this.updateView();
  }

  createCost(value, index: number) {
    console.log(value);
    // Post para un costo Indirecto
    if (index >= this.costs.length) {
      const cost: CostoIndirecto = {
        id: 0,
        descripcion: value.description,
        porcentaje: value.percent / 100,
        proyectoId: this.proyecto.id
      };
      this.costoIndirectoService.postCostoIndirecto(cost).subscribe(
        (response) => {
          console.log(response);
          this.costs.push(response.model);
        },
        (error) => {
          console.error(error.error);
        }
      );
      console.log(cost);
      // PUT para un costo indirecto
    } else {
      const cost: CostoIndirecto = {
        id: this.costs[index].id,
        descripcion: value.description,
        porcentaje: value.percent / 100,
        proyectoId: this.proyecto.id
      };
      this.costoIndirectoService.putCostoIndirecto(cost).subscribe(
        (response) => {
          console.log(response);
          this.costs[index] = cost;
        },
        (error) => {
          console.error(error.error);
        }
      );
    }
  }

  isModified(index: number, value): boolean {
    if (index >= this.costs.length) {
      return true;
    }

    if (value.description !== this.costs[index].descripcion ||
      value.percent / 100 !== this.costs[index].porcentaje) {
      return true;
    }

  }

}
