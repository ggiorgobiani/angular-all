import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookInterface } from '../book-interface';

// const url = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  private _books =new BehaviorSubject<any>([]);
  private _book = new BehaviorSubject<any>({});
  

constructor(
  private HttpClient: HttpClient,
  private router: Router
){}
//get books from databas (json)
getBooksFromDb()
{
  this
  .HttpClient
  .get("books")      
  .subscribe(response => {     //dans le response j'ai le tableau de json
  this._books.next(response);  //response est une variable et on l'appel comme on veut
  })
}


getBookFromDb(id:number)
{
  //reset book
  this.book.next({});
//get book data
  this
  .HttpClient
  .get(`books/${id}`)      
  .subscribe(response => {    
  this._book.next(response)  
  });
}

  addBook(book:any)
  {
    this.HttpClient
    .post("books", book)
    .subscribe((Response: any) => {
      
      this.router.navigate(['/books', Response.id]);

    })
  }



  get books()
  {
    return this._books;
  }

  get book ()
  {
    return this._book;
  }
}
