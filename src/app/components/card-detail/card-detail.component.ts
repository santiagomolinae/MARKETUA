import { CarService } from './../../services/car/car.service';
import { ProductDetail } from './../../models/productDetail';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {

  @Input() product: ProductDetail;

  constructor( 
    private router: Router,
    private carService: CarService,
    private alertController: AlertController
  ) { }

  presentDetail() {
    const id = this.product.id;
    this.router.navigate(['/detail', id]);
  }

  ngOnInit() {
  }

  addCar() {
    this.carService.addToCar(this.product.id);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exitoso',
      message: 'El producto se agrego al carro',
      buttons: ['OK']
    });
    await alert.present();
  }
}
