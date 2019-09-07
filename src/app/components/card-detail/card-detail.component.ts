import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  @Input() product: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  addToCar(){
    this.carService.addToCar(this.product.id);
  }
}
