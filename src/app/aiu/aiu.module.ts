import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiuRoutingModule } from './aiu-routing.module';
import { AiuComponent } from './components/aiu/aiu.component';
import { TableAiuComponent } from './components/table-aiu/table-aiu.component';



@NgModule({
  declarations: [AiuComponent, TableAiuComponent],
  imports: [
    CommonModule,
    AiuRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AiuModule { }
