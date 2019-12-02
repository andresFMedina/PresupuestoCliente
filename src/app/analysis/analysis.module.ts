import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { SharedModule } from '../shared/shared.module';
import { AnalysisListComponent } from './components/analysis-list/analysis-list.component';


@NgModule({
  declarations: [AnalysisComponent, AnalysisListComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AnalysisModule { }
