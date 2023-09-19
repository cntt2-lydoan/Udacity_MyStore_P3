import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() item: Product;

  constructor() {
    this.item = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
    };
  }
}
