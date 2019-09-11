import { ProductDetail } from './../../models/productDetail';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchText = '';
  products: ProductDetail[];

  constructor(
    private productService: ProductService) {}

  ngOnInit() {}

  findProduct() {
    this.productService.findProducts(this.searchText).subscribe(res => {
      this.products = res.products;
    });
  }
}
