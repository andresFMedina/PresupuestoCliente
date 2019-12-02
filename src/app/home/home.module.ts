import { MaterialModule } from './../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { AiuComponent } from './components/aiu/aiu.component';



@NgModule({
  declarations: [HomeComponent, DashboardComponent, ChaptersComponent, AiuComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
