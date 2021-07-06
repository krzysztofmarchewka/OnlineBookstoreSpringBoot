import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { BookModel } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [BookService],
})
export class BookDetailsComponent implements OnInit {
  books: BookModel[];
  id: number;
  sub: any;
  bookIdSnapshot: number;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['bookId'];
    });
  }
}
