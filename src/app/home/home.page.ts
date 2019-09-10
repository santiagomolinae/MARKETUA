import { ProductDetail } from './../models/productDetail';
import { ProductService } from './../services/product/product.service';
import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchText = '';
  products: ProductDetail[];

  constructor(
    private carService: CarService,
    private http: HttpClient,
    private productService: ProductService) {
  }

  ngOnInit() {
  }

  findProduct() {
    this.productService.findProducts(this.searchText).subscribe(res => {
      this.products = res.products;
    });
  }
}
