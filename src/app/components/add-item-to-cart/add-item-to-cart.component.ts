import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-add-item-to-cart',
  templateUrl: './add-item-to-cart.component.html',
  styleUrls: ['./add-item-to-cart.component.css'],
})
export class AddItemToCartComponent {
  @Input() item: Product;
  availableAmounts: number[] = [];
  selectedAmount = 0;

  constructor(private cartService: CartService) {
    this.item = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
      selectedAmount: 0,
    };
  }
  ngOnInit(): void {
    this.availableAmounts = [...Array(this.item.availableAmount).keys()].map(
      i => i + 1
    );
  }
  onClickAdd(item: Product): void {
    if(this.selectedAmount !== 0){
      this.item.selectedAmount = this.selectedAmount;
      this.cartService.addToCart(item);
      alert(`${this.item.name} added to cart!\nTotal: ${this.selectedAmount}`);
    }else{
      alert(`Please select the quantity of the product`);
    }
  }
}
