import { ProyectoService } from './../../../core/services/proyecto/proyecto.service';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit {
  @Input() proyecto: Proyecto;

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private proyectoService: ProyectoService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      projectName: [(!this.proyecto) ? null : this.proyecto.nombre_Obra, Validators.required],
      contractor: [(!this.proyecto) ? null : this.proyecto.contratante, Validators.required],
      proponent: [(!this.proyecto) ? null : this.proyecto.proponente, Validators.required],
      comments: [(!this.proyecto) ? null : this.proyecto.comentarios],
      endDate: [(!this.proyecto) ? null : this.getDate(this.proyecto.fecha_Presentacion), Validators.required],
      editDate: [(!this.proyecto) ? new Date() : this.getDate(this.proyecto.fecha_Modificacion), Validators.required],
      tool: [(!this.proyecto) ? null : this.proyecto.porcentaje_Menor, Validators.required],
      benefits: [(!this.proyecto) ? null : this.proyecto.porcentaje_Prestaciones_Sociales, Validators.required],
      waste: [(!this.proyecto) ? null : this.proyecto.desperdicio_Materiales, Validators.required],
    });
  }

  onSubmit() {
    const proyecto: Proyecto = {
      nombre_Obra: this.form.get('projectName').value,
      contratante: this.form.get('contractor').value,
      proponente: this.form.get('proponent').value,
      comentarios: this.form.get('comments').value,
      fecha_Presentacion: this.form.get('endDate').value.toISOString(),
      fecha_Modificacion: this.form.get('editDate').value.toISOString(),
      porcentaje_Menor: this.form.get('tool').value,
      porcentaje_Prestaciones_Sociales: this.form.get('benefits').value,
      desperdicio_Materiales: this.form.get('waste').value,
      grupos: []
    };
    console.log(proyecto);
    this.proyectoService.postProyecto(proyecto).subscribe(
      (response) => {
        console.log(response);
        alert('Creado');
      },
      (error) => {
        console.error(error.error);
      });
  }

  getDate(dateISO: string): Date {
    const date = new Date(dateISO);
    return date;
  }
}
