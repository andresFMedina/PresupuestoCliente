import { CostosMateriales } from './../../../core/models/costos-materiales.interface';
import { switchMap } from 'rxjs/operators';
import { ItemTableComponent } from './../../../shared/components/item-table/item-table.component';
import { Item } from './../../../core/models/item.model';
import { ChapterTableComponent } from './../chapter-table/chapter-table.component';
import { Proyecto } from './../../../core/models/proyecto.model';
import { Capitulo } from './../../../core/models/capitulo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProyectoService } from 'src/app/core/services/proyecto/proyecto.service';
import { CapituloService } from 'src/app/core/services/capitulo/capitulo.service';
import { ItemService } from 'src/app/core/services/item/item.service';
import { Params, ActivatedRoute } from '@angular/router';
import { calcularCostoMaterialesItems } from 'src/app/core/utils/calcular-costos';
import { MatSnackBar } from '@angular/material';
import { createDefaultSnackbar } from 'src/app/core/utils/snackbar-config';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  form: FormGroup;
  capitulo: Capitulo;
  proyecto: Proyecto;
  isProcesing = false;
  itemsAgregados = 0;
  id = 0;

  @ViewChild(ChapterTableComponent, { static: false })
  private chapterTableComponent: ChapterTableComponent;

  constructor(
    private formBuilder: FormBuilder,
    private proyectoService: ProyectoService,
    private capituloService: CapituloService,
    private itemService: ItemService,
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
          return this.capituloService.getCapituloById(params.id);
        }
      }))
      .subscribe((capitulo) => {
        this.capitulo = capitulo.model;
        console.log(capitulo);
        this.buildForm();
      });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      numero: [(this.capitulo) ? this.capitulo.numero : '', [Validators.required]],
      descripcion: [(this.capitulo) ? this.capitulo.descripcion : '', [Validators.required]],
    });
  }

  addItem(item: Item) {
    console.log(item);
    this.itemsAgregados++;
    item.numeroCapitulo = this.itemsAgregados;
    this.chapterTableComponent.addRow(item);
  }

  createCapitulo(items: Item[]) {
    this.isProcesing = true;
    console.log(items);
    let costos: CostosMateriales;
    if (items) {
      costos = calcularCostoMaterialesItems(items);
    }
    const subtotal = (items)
      ? items.map(i => i.valorParcial).reduce((acc, value) => acc + value, 0) : 0;
    const capitulo: Capitulo = {
      id: Number(this.id),
      proyectoId: this.proyecto.id,
      numero: parseInt(this.form.get('numero').value, 10),
      descripcion: this.form.get('descripcion').value,
      subtotal: Math.round(subtotal),
      costoEquipo: (costos) ? costos.costoEquipo : 0,
      costoManoObra: (costos) ? costos.costoManoObra : 0,
      costoMateriales: (costos) ? costos.costoMateriales : 0
    };
    console.log(capitulo);
    if (this.id === 0) {
      this.postCapitulo(capitulo, items);
    } else {
      this.putCapitulo(capitulo, items);
    }
  }

  postCapitulo(capitulo: Capitulo, items: Item[]) {
    this.capituloService.postCapitulo(capitulo).subscribe(
      (response) => {
        console.log(response);
        this.capitulo = response.model;
        let numeroCapitulo = 1;
        if (items) {
          items.forEach((i) => {
            i.capituloId = this.capitulo.id;
            i.numeroCapitulo = numeroCapitulo;
            numeroCapitulo++;
            this.putItem(i);
          });
        }
        this.isProcesing = false;
        this.resetForm();
        const message = 'Se ha creado el capitulo exitosamente';
        createDefaultSnackbar(this.snackbar, message);
      },
      (error) => {
        console.error(error.error);
        this.isProcesing = false;
      }
    );
  }

  putCapitulo(capitulo: Capitulo, items: Item[]) {
    this.capituloService.putCapitulo(capitulo).subscribe(
      (response) => {
        console.log(response);
        const message = 'Se han guardado los cambios';
        createDefaultSnackbar(this.snackbar, message);
      },
      (error) => {
        console.error(error.error);
        this.isProcesing = false;
      }
    );
    let numeroCapitulo = 1;
    items.forEach((i) => {
      i.capituloId = this.capitulo.id;
      i.numeroCapitulo = numeroCapitulo;
      numeroCapitulo++;
      this.putItem(i);
    });
  }

  putItem(item: Item) {
    this.itemService.putItem(item).subscribe(
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

  resetForm() {
    this.chapterTableComponent.clearTable();
    this.capitulo = null;
    this.id = 0;
    this.itemsAgregados = 0;
    this.buildForm();
  }



}
