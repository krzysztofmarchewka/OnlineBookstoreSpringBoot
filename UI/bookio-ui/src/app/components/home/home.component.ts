import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Array<BookModel> = [];
  public editBook!: BookModel;

  constructor(private bookService: BookService) {
    this.bookService.getAllBooks().subscribe((book) => (this.books = book));
  }

  ngOnInit(): void {}

  public onAddBook(addForm: NgForm): void {
    document.getElementById('add-book-form')?.click();
    this.bookService.addBook(addForm.value).subscribe(
      (response: BookModel) => {
        console.log(response);
        this.bookService.getAllBooks().subscribe((book) => (this.books = book));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public onUpdateBook(book: BookModel): void {
  //   this.bookService.updateBook(book).subscribe(
  //     (response: BookModel) => {
  //       console.log(response);
  //       this.bookService.getAllBooks().subscribe((book) => (this.books = book));
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public onOpenModal(book: BookModel, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      // this.addBook = book;
      button.setAttribute('data-target', '#addBookModal');
    }
    if (mode === 'edit') {
      this.editBook = book;
      button.setAttribute('data-target', '#updateBookModal');
    }
    if (mode === 'delete') {
      // this.deleteBook = book;
      button.setAttribute('data-target', '#deleteBookModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
