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

  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.productService.productDetail(this.id).subscribe(prod => {
      this.product = prod;
    });
  }
}
