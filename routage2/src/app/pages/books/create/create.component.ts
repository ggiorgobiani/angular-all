import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  // Definition du formulaire
  public bookForm = new FormGroup({

    // Definition du champ "title"
    title: new FormControl('',[
      Validators.required
    ]),

    // Definition du champ "description"
    description: new FormControl(''),

    // Definition du champ "price"
    price: new FormControl('',[
      Validators.required
    ]),

  });

  constructor(
    private bookService: BookService
  ){}

  submitBook()
  {
    this.bookService.addBook( this.bookForm.value )
  }

}