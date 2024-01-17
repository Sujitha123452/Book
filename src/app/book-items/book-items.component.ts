import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent {
  hide = false;
  hidebook=false;
  managebook=false;
  showdescription:boolean=true;
  title = 'Book Library';
  books: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
     this.getBooks();
  }

  getBooks() {
     this.http.get<any[]>('http://localhost:3000/books').subscribe(data => {
       this.books = data;
     });
  }

  addBook(name: string, author: string, description: string) {
     this.http.post('http://localhost:3000/books', { name, author, description }).subscribe(() => {
       this.getBooks();
     });
  }

  deleteBook(id: number) {
     this.http.delete(`http://localhost:3000/books/${id}`).subscribe(() => {
       this.getBooks();
     });
  }
  hidedescription(id: string) {
    this.books = this.books.filter(books => books.id !== id);
}
}





