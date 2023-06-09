import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';

const routes: Routes = [
  {
    path: '',
    component: CarsListComponent
  },
  {
    path: 'cars',
    component: CarsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
