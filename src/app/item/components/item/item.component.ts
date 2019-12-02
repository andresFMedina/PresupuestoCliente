import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      unidad: ['', [Validators.required]],
      cantidad: [0, [Validators.required]],
      aporte: [0.0, [Validators.required]],
    });
  }

}
