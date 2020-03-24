import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  titulo = 'Productos';
  productos: any[] = [];

  constructor(
    protected jsonService: JsonService
  ) {}

  ngOnInit() {
    this.jsonService.getProducts()
    .subscribe(
      (data) => { // Success
        this.productos = data['results'];
        console.log(this.productos)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
