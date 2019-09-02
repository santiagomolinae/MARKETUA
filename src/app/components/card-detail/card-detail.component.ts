import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  @Input() product: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  sendProduct(){
    this.productService.product = this.product
    this.router.navigate(['/detail',this.product.id])
  }
}
