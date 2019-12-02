import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterTableComponent } from './components/chapter-table/chapter-table.component';
import { SharedModule } from '../shared/shared.module';
import { ChapterComponent } from './components/chapter/chapter.component';


@NgModule({
  declarations: [ChapterListComponent, ChapterTableComponent, ChapterComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ChapterModule { }
