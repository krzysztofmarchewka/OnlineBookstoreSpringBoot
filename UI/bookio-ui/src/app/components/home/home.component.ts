import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: BookModel[] = [];
  searchValue: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private cartService: CartService
  ) {}

  public getBooks() {
    this.bookService.getAllBooks().subscribe((book) => {
      this.books = book;
    });
  }

  ngOnInit() {
    this.getBooks();
  }

  public onAddBook(addForm: NgForm): void {
    document.getElementById('add-book-form')?.click();
    this.bookService.addBook(addForm.value).subscribe(
      (response: BookModel) => {
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addToCart(book: BookModel) {
    this.cartService.addToCart(book);
  }
}
