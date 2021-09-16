import {Component} from '@angular/core';
import Product from 'src/models/Product';
import {ShoppinglistService} from "../../services/shoppinglist.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(public shoppinglistService: ShoppinglistService) {
  }

  showNewProduct = false;

  newProductName = '';
  newProductPrice = 0;

  selectedProduct: Product | null = null;
  addCartAmount = 0;

  showAddProduct() {
    this.showNewProduct = true;
  }

  hideAddProduct() {
    this.showNewProduct = false;
  }

  addProduct() {
    this.showNewProduct = false;
    const product: Product = {
      id: -1,
      name: this.newProductName,
      price: this.newProductPrice
    }

    this.shoppinglistService.addProduct(product);
    this.newProductPrice = 0;
    this.newProductName = '';
  }

  addProductToCart() {
    if (this.selectedProduct != null) {
      this.shoppinglistService.addProductToCart(this.selectedProduct, this.addCartAmount);
    }
  }

}
