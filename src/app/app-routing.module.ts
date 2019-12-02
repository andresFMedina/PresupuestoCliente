import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'aiu',
        loadChildren: () => import('./aiu/aiu.module').then(m => m.AiuModule)
      },
      {
        path: 'analysis',
        loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)
      },
      {
        path: 'budget',
        loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule)
      },
      {
        path: 'information',
        loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
      },
      {
        path: 'item',
        loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
      },
      {
        path: 'chapter',
        loadChildren: () => import('./chapter/chapter.module').then(m => m.ChapterModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
