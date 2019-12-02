import { ItemListComponent } from './components/item-list/item-list.component';
import { BudgetComponent } from './components/budget/budget.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: 'create',
    component: BudgetComponent
  },
  {
    path: 'edit/:id',
    component: BudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
