import { CarService } from './../services/car/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  productos: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCar().then(prod => {
      this.productos = prod;
    });
  }
}
