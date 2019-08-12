import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private storage: Storage) { }

  addToCar(id: string) {
    this.storage.get('car').then((val) => {
      if (val) {
        val.push([id, 1]);
      } else {
        val = [[id, 1]];
      }
      this.storage.set('car', val);
    });
  }

  addUnit(id: string, unit: number) {
    this.storage.get('car').then(val => {
      val.forEach(prod => {
        if (prod[0] === id) {
          prod[1] = unit;
        }
      });
      this.storage.set('car', val);
    });
  }

  deleteProduct(id: string) {
    let auxCar;
    this.storage.get('car').then((val) => {
      auxCar = val.filter(pr => pr !== id);
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
