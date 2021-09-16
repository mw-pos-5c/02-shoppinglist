import {Injectable} from '@angular/core';
import Product from "../../models/Product";
import CartItem from "../../models/CartItem";

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  constructor() {
  }

  budget = 42

  products: Product[] = [
    {id: 2, name: "Brot", price: 15.8},
    {id: 1, name: "Milch", price: 15.8},
    {id: 0, name: "Zucker", price: 15.8}
  ];

  cart: CartItem[] = [];
  cartTotalPrice: number = 0;


  addProduct(product: Product) {
    product.id = this.findNextId(this.products);
    console.log(product);
    this.products.push(product);
  }

  addProductToCart(product: Product, amount: number) {

    let item: CartItem | undefined = this.cart.find(value => value.product.id === product.id);


    if (item === undefined) {
      item = {
        id: this.findNextId(this.cart),
        product,
        amount: amount
      }
      this.cart.push(item);
    } else {
      item.amount += amount;
    }

    this.updateTotalPrice();
  }

  removeProductFromCart(id: number) {
    const index = this.cart.findIndex(value => value.id === id);
    this.cart.splice(index, 1);
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.cartTotalPrice = this.cart.reduce((previousValue, currentValue) =>
      previousValue + currentValue.product.price * currentValue.amount, 0);
  }

  findNextId(list: any[]) {
    const id = list.reduce((previousValue, currentValue) => {
      if (currentValue.id > previousValue) return currentValue.id;
      return previousValue;
    }, -1);

    return id + 1;
  }
}
