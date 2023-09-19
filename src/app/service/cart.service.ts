import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];

  getCart(): Product[] {
    return this.cartList;
  }

  addToCart(product: Product): void {
    if(this.cartList.some(item => item.id === product.id)){
      this.cartList.forEach(item => {
        if(item.id === product.id){
          item.selectedAmount = product.selectedAmount
        }
      })
    } else {
      this.cartList.push(product);
    }
  }

  removeFromCart(product: Product): Product[] {
    this.cartList = this.cartList.filter(p => p.id !== product.id);
    return this.cartList;
  }

  getTotalPrice(): number {
    return this.cartList.reduce((total, productI) => {
      return total + productI.price * Number(productI.selectedAmount);
    }, 0);
  }
}
