import { Component } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartList: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  ngDoCheck(): void {
    this.cartList.forEach(item => {
      if (item.selectedAmount) this.ngOnInit();
    });
  }
  removeItem(item: Product) {
    this.cartService.removeFromCart(item);
    this.cartService.getTotalPrice();
    alert(`${item.name} remove form cart!\nTotal: ${item.selectedAmount}`);
  }
}
