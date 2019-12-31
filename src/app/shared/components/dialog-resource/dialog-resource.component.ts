import { grupos } from './../../../core/constants';
import { RecursoBasicoService } from './../../../core/services/recurso-basico/recurso-basico.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { RecursoBasico } from 'src/app/core/models/recurso-basico.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-resource',
  templateUrl: './dialog-resource.component.html',
  styleUrls: ['./dialog-resource.component.scss']
})
export class DialogResourceComponent implements OnInit {

  recursoBasico: RecursoBasico;

  form: FormGroup;
  grupos = grupos;

  constructor(
    private fb: FormBuilder,
    private recursoBasicoService: RecursoBasicoService,
    public dialogRef: MatDialogRef<DialogResourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RecursoBasico
  ) {
    this.recursoBasico = data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      codigo: [(!this.recursoBasico) ? null : this.recursoBasico.codigo, Validators.required],
      descripcion: [(!this.recursoBasico) ? null : this.recursoBasico.descripcion, Validators.required],
      unidad: [(!this.recursoBasico) ? null : this.recursoBasico.unidad, Validators.required],
      precio: [(!this.recursoBasico) ? null : this.recursoBasico.precio],
      grupo: [(!this.recursoBasico) ? null : this.recursoBasico.grupo],
    });
  }

  onSubmit() {
    if (this.recursoBasico) {
      this.putRecursoBasico();
    } else {
      this.postRecursoBasico();
    }


  }

  getDate(dateISO: string): Date {
    const date = new Date(dateISO);
    return date;
  }

  postRecursoBasico() {
    const recursoBasico: RecursoBasico = {
      id: 0,
      codigo: this.form.get('codigo').value,
      descripcion: this.form.get('descripcion').value,
      unidad: this.form.get('unidad').value,
      precio: Number(this.form.get('precio').value),
      grupo: this.form.get('grupo').value
    };
    console.log(recursoBasico);
    this.recursoBasicoService.postRecursoBasico(recursoBasico).subscribe(
      (response) => {
        console.log(response);
        alert('Creado');
        this.dialogRef.close();
      },
      (error) => {
        console.error(error.error);
      });
  }

  putRecursoBasico() {
    this.recursoBasico.codigo = this.form.get('codigo').value;
    this.recursoBasico.descripcion = this.form.get('descripcion').value;
    this.recursoBasico.unidad = this.form.get('unidad').value;
    this.recursoBasico.precio = Number(this.form.get('precio').value);
    this.recursoBasico.grupo = this.form.get('grupo').value;
    this.recursoBasicoService.putRecursoBasico(this.recursoBasico.id, this.recursoBasico).subscribe(
      (response) => {
        console.log(response);
        alert('Modificado');
        this.dialogRef.close();
      },
      (error) => {
        console.error(error.error);
      }
    );
  }

}
