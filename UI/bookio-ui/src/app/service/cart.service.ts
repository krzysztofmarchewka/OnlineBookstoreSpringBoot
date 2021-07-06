import { Injectable } from '@angular/core';
import { BookModel } from '../model/book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: BookModel[] = [];
  constructor() {}

  addToCart(book: BookModel) {
    this.cartItems.push(book);
  }

  getCartItems() {
    return this.cartItems;
  }

  cleanCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  removeProductFromCart(id) {
    this.cartItems.map((book, index) => {
      if (book.bookId === id) {
        this.cartItems.splice(index, 1);
      }
    });
  }
}
