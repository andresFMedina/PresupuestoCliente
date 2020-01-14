import { ResourcesListComponent } from './components/resources-list/resources-list.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ChapterListComponent
  },
  {
    path: 'create',
    component: ChapterComponent
  },
  {
    path: 'edit/:id',
    component: ChapterComponent
  },
  {
    path: 'resources-list',
    component: ResourcesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChapterRoutingModule { }
