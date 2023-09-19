import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent {
  user: User;
  cartList: Product[] = [];
  totalPrice = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.user = {
      fullname: '',
      address: '',
      cardNumber: '',
    };
  }

  ngOnInit(): void {
    this.user.fullname = this.route.snapshot.paramMap.get('fullname') as string;
    this.user.address = this.route.snapshot.paramMap.get('address') as string;
    this.user.cardNumber = this.route.snapshot.paramMap.get(
      'cardNumber'
    ) as string;
    this.cartList = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    alert(`Thank you ${this.user.fullname}`);
  }
}
