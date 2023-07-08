import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { DateComponent } from './components/date/date.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'fechas',
    component: DateComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule { }
