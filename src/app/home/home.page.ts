import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  serchText = '';
  products: any;

  constructor(
    private carService: CarService,
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  findProduct() {
    this.http.get<any>(`https://api.mercadolibre.com/sites/MCO/search?q=${this.serchText}`, {}).subscribe(res => {
      this.products = res.results;
    });
  }

  getCar(){
    this.products=this.carService.getCar();
  }
}
