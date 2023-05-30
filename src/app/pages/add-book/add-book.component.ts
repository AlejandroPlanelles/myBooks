import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {



  constructor (public booksService:BooksService, public toastrSvc:ToastrService){

    
  }
  public newbook(newId_book:number, newId_user:number, newTitle:string, newType:string, newAuthor:string, newPrice:number, newPhoto:string){
    let newbook1: Books =new Books(newTitle, newType, newAuthor, newPrice, newPhoto,newId_book,newId_user)        
    this.booksService.add(newbook1)
    this.toastrSvc.success("añadido!!")
    
  }
  
}
 
