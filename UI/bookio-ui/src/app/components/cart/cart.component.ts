import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems;
  totalAmount;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalPrice();
  }

  removeFromCart(id: number) {
    this.cartService.removeProductFromCart(id);
  }

  emptyCart() {
    // this.cartService.cleanCart();
    this.cartItems = [];
    this.totalAmount = 0;
  }

  onDiscountapplied() {
    this.totalAmount = this.totalAmount / 10;
  }
}
