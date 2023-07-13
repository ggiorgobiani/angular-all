import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookInterface } from '../book-interface';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {


 public books: any[] = [];

 constructor(
  private bookService: BookService
 ){
  // this.bookService.getBooksFromDb()
 }

ngOnInit(): void {
  this.bookService.books.subscribe(data => this.books = data)
}

getAllBooks()
  {
    this.bookService.getBooksFromDb()
  }

  //systeme de requetage (les requetes)
  // constructor(  
  //   private _HttpClient: HttpClient
  // ){
  //   _HttpClient
  //   .get('http://localhost:3000/books')
  //   .subscribe(response => {
  //     console.log(response)
  //   });
  // }

//--------
  //public books: BookInterface[] = [
  //   {
  //     title:"first book",
  //     price: 9.99,
  //     id: 1
  //   },
  //   {
  //     title:"second book",
  //     price: 19.99,
  //     id: 2
  //   }
  // ]; 

}
