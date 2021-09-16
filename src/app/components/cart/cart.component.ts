import {Component} from '@angular/core';
import {ShoppinglistService} from "../../services/shoppinglist.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(public shoppinglistService: ShoppinglistService) {
  }

}
