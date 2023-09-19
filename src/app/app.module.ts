import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { AddItemToCartComponent } from './components/add-item-to-cart/add-item-to-cart.component';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartOrderComponent } from './components/cart/cart-order/cart-order.component';
import { ConfirmComponent } from './components/cart/cart-order/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    ProductItemDetailComponent,
    AddItemToCartComponent,
    CartItemComponent,
    CartOrderComponent,
    ConfirmComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
