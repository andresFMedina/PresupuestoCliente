import { TableCostComponent } from './components/table-cost/table-cost.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableResourceComponent } from './components/table-resource/table-resource.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { DialogCreateComponent } from './components/dialog-create/dialog-create.component';
import { TableAnalysisComponent } from './components/table-analysis/table-analysis.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { DialogResourceComponent } from './components/dialog-resource/dialog-resource.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { CdkTableExporterModule } from 'cdk-table-exporter';



@NgModule({
  declarations: [
    NavComponent,
    TableResourceComponent,
    TableComponent,
    InfoFormComponent,
    DialogCreateComponent,
    TableAnalysisComponent,
    ItemTableComponent,
    TableCostComponent,
    DialogResourceComponent,
    TableDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableExporterModule,
    CdkTableExporterModule
  ],
  exports: [
    NavComponent,
    TableResourceComponent,
    TableComponent,
    InfoFormComponent,
    TableAnalysisComponent,
    ItemTableComponent,
    TableCostComponent,
    TableDetailsComponent
  ]
})
export class SharedModule { }
