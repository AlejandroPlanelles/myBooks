import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public libros:Books[]
  
  constructor(public booksService:BooksService, public toastrSvc:ToastrService){

    this.libros = this.booksService.getAll()
    
    
  }

  // public borrar(cartaPadre:Books){
  //   this.libros=this.libros.filter(x => x.id_book != cartaPadre.id_book)
    
  // }
  public borrar (id:Books){
    let x =this.booksService.delete(id.id_book)
    if (x){
      this.libros=this.booksService.getAll()
    }
  }
  public encontrar (id:number){
    let x =this.booksService.getOne(id)
    if (x){
      this.libros = [x]
    }
    else{
      this.libros=this.booksService.getAll()
      this.toastrSvc.error("no se encuentra")
    }
    
  }
  
  }
  
  


