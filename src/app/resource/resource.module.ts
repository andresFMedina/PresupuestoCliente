import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResourceListComponent],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ResourceModule { }
