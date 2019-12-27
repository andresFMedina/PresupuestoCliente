import { DetalleService } from './../../../core/services/detalle/detalle.service';
import { Detalle } from './../../../core/models/detalle';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  detalles: Detalle[] = [];
  data: Detalle[];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  detallesForm: FormArray = this.formBuilder.array([]);
  form: FormGroup;
  total: number;

  @Input() isProcesing: boolean;
  @Input() itemId = 0;
  @Input() analisisId = 0;

  @Output() save = new EventEmitter<Detalle[]>();

  displayedColumns: string[] = ['codigo', 'descripcion', 'rendimiento', 'desperdicio', 'unidad', 'precio', 'subTotal', 'delete'];

  constructor(
    private formBuilder: FormBuilder,
    private detalleService: DetalleService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      detalle: this.detallesForm
    });
    console.log(this.itemId);
    console.log(this.data);
    if (this.itemId !== 0) {
      this.detalleService.getDetallesByItemId(this.itemId).subscribe(
        (detalles) => {
          detalles.model.forEach((d) => {
            d.subTotal = d.precio * d.rendimiento;
            this.addRow(d, false);
          });
          console.log(this.data);
          this.updateView();
        },
        (error) => {
          console.error(error.error);
        }
      );
    }
    console.log(this.data);
    if (this.analisisId !== 0) {
      this.detalleService.getDetallesByAnalisisId(this.analisisId).subscribe(
        (detalles) => {
          detalles.model.forEach((d) => {
            d.subTotal = d.precio * d.rendimiento;
            this.addRow(d, false);
          });
          console.log(this.data);
          this.updateView();
        },
        (error) => {
          console.error(error.error);
        }
      );
    }
    console.log(this.data);

  }

  getTotal() {
    this.total = this.data.map(d => d.subTotal).reduce((acc, value) => acc + value, 0);
  }

  addRow(detalle: Detalle, noUpdate?: boolean) {
    this.detalles.push(detalle);
    const row = this.formBuilder.group({
      rendimiento: [(detalle) ? detalle.rendimiento : 1],
      desperdicio: [(detalle) ? detalle.desperdicio : 0.0]
    });
    this.detallesForm.push(row);
    this.data = [...this.detalles];
    this.getTotal();
    console.log(this.data);
    if (!noUpdate) { this.updateView(); }
  }


  updateView() {
    this.dataSource.next(this.detallesForm.controls);
  }

  saveChanges(details: Detalle[]) {
    this.save.emit(this.data);
  }

  calcularDesperdicio(desperdicio, index) {
    this.data[index].desperdicio = Number(desperdicio);
    this.calcularSubTotal(this.data[index]);
    this.getTotal();
  }

  calcularRendimiento(rendimiento, index) {
    this.data[index].rendimiento = Number(rendimiento);
    this.calcularSubTotal(this.data[index]);
    this.getTotal();
  }

  calcularSubTotal(detalle: Detalle) {
    const rendimiento = detalle.rendimiento;
    const precio = detalle.precio;
    const desperdicio = 1 + detalle.desperdicio / 100;
    detalle.subTotal = Math.round(precio * rendimiento * desperdicio);
  }

  deleteRow(index: number, detalleId: number) {
    this.detalles.splice(index, 1);
    this.data = [...this.detalles];
    this.detallesForm.removeAt(index);
    this.updateView();
    this.getTotal();
    if (detalleId !== 0) {
      this.deleteDetalle(detalleId);
    }
  }

  deleteDetalle(index: number) {
    this.detalleService.deleteDetalle(index).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error.error);
      }
    )
  }


}
