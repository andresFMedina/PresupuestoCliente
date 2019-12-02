import { AnalysisListComponent } from './components/analysis-list/analysis-list.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AnalysisListComponent
  },
  {
    path: 'create',
    component: AnalysisComponent
  },
  {
    path: 'edit/:id',
    component: AnalysisComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
