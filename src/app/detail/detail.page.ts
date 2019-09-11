import { CarService } from './../services/car/car.service';
import { ProductDetail } from './../models/productDetail';
import { ProductService } from './../services/product/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  idProduct: string;
  product: ProductDetail;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private carService: CarService) {}

  ngOnInit() {
    this.findProduct();
  }

  findProduct() {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    this.productService.productDetail(this.idProduct).subscribe(res => {
      this.product = res;
    });
  }

  addToCar() {
    this.carService.addToCar(this.idProduct);
  }
}
