import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private storage: Storage) { }

  addToCar(id: string) {
    const prod = {
      id,
      units: 1
    };
    this.storage.get('car').then((val) => {
      let auxCar = val.filter(prod => prod.id !== id);
      if (auxCar) {
        auxCar.push(prod);
      } else {
        auxCar = [prod];
      }
      this.storage.set('car', auxCar);
    });
  }

  addUnit(id: string) {
    this.storage.get('car').then(val => {
      val.forEach(prod => {
        if (prod.id === id) {
          prod.units ++;
        }
      });
      this.storage.set('car', val);
    });
  }

  deleteProduct(id: string) {
    this.storage.get('car').then((val) => {
      const auxCar = val.filter(prod => prod.id !== id);
      this.storage.set('car', auxCar);
    });
  }

  getCar() {
    return this.storage.get('car');
  }

  deleteCar() {
    this.storage.clear();
  }
}
