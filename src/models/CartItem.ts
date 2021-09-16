import Product from "./Product";

interface CartItem {
  id: number;
  product: Product;
  amount: number;
}

export default CartItem;
