import { ProductDetail } from './../../models/productDetail';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  @Input() product: ProductDetail;

  constructor( private router: Router) { }

  presentDetail() {
    const id = this.product.id;
    this.router.navigate(['/detail', id]);
  }

  ngOnInit() {
  }
}
