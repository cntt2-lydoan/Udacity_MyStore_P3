import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  id = 0;
  item: Product;
  availableAmounts: number[] = [];
  selectedAmount = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService : CartService
  ) {
    this.item = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => (this.id = parseInt(data['id'], 10)));
    this.productService.getProducts().subscribe(data => {
      this.item = data.find(p => p.id === this.id) as unknown as Product;
    });
    this.availableAmounts = [...Array(this.item.availableAmount).keys()].map(
      i => i + 1
    );
  }
  onClickAdd(item: Product): void {
    if(item.selectedAmount != 0){
      this.item.selectedAmount = item.selectedAmount;
      this.selectedAmount = Number(item.selectedAmount);
      this.cartService.addToCart(item);
      alert(`${this.item.name} added to cart!\nTotal: ${this.selectedAmount}`);
    }else{
      alert(`Please select the quantity of the product`);
    }
  }
}
