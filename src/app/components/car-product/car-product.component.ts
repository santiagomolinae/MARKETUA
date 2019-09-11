import { CarService } from './../../services/car/car.service';
import { ProductService } from './../../services/product/product.service';
import { ProductDetail } from './../../models/productDetail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-product',
  templateUrl: './car-product.component.html',
  styleUrls: ['./car-product.component.scss'],
})
export class CarProductComponent implements OnInit {

  @Input() id: string;
  product: ProductDetail;
  units: number;

  constructor(
    private productService: ProductService,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.carService.getCar().then(car => {
      car.forEach(prod => {
        if (prod.id === this.id){
          this.units = prod.units;
        }
      });
    });
    this.productService.productDetail(this.id).subscribe(prod => {
      this.product = prod;
    });
  }

  restUnits() {
    if (this.units !== 1) {
      this.units --;
      this.carService.changeUnit(this.id, this.units);
    }
  }

  addUnits() {
    this.units ++;
    this.carService.changeUnit(this.id, this.units);
  }

  deleteProduct() {
    this.carService.deleteProduct(this.id);
  }
}
