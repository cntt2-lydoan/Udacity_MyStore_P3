import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item: Product;
  @Output() removeItem = new EventEmitter();

  availableAmounts: number[] = [];

  constructor(private cartService: CartService) {
    this.item = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
    };
  }

  ngOnInit(): void {
    this.availableAmounts = [...Array(this.item.availableAmount).keys()].map(
      i => i + 1
    );
  }
}
