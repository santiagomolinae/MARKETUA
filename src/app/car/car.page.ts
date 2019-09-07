import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  @Input() product: any;

  constructor() { }
  
  ngOnInit() {
  }


}
