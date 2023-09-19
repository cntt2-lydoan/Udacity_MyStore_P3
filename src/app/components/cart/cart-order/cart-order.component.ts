import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css'],
})
export class CartOrderComponent {
  user: User;

  constructor(private router: Router) {
    this.user = {
      fullname: '',
      address: '',
      cardNumber: '',
    };
  }

  onSubmit(): void {
    this.router.navigate([
      'confirm',
      {
        fullname: this.user.fullname,
        address: this.user.address,
        cardNumber: this.user.cardNumber,
      },
    ]);
  }
}
