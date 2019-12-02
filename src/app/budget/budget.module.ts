import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './components/budget/budget.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [BudgetComponent, ItemListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
