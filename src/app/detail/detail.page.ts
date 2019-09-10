import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  //public product: any;
  idProduct: any;
  product: any;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { 
  }

  ngOnInit() {
    this.findProduct()
  }

  findProduct() {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://my-json-server.typicode.com/ebedoyaalzate/fakeProducts/products/1`, {}).subscribe(res => {
      this.product = res;
      console.log(this.product);
    });
  }

}
