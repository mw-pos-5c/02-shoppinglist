import { Component } from '@angular/core';
import Product from "../models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  budget = 0

  products: Product[] = [
    {name: "Brot", price: 15.8},
    {name: "Milch", price: 15.8},
    {name: "Zucker", price: 15.8}
  ];


}
