import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { DateComponent } from './components/date/date.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
