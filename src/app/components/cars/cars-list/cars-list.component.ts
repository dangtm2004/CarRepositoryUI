import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { CarServiceService } from '../../../services/car-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{

  cars: Car[] = [];
  constructor(private carService: CarServiceService) {

  }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe({
      next: (cars) => {
        console.log(cars);
        this.cars = cars;
      },
      error: (response) => {
        console.log(response);
      }
      })
  }
}
