import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: BookModel[] = [];
  searchValue: string;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((book) => {
      this.books = book;
      console.log(book);
    });
  }

  addToCart(book: BookModel) {}
}
