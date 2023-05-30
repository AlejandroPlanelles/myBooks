import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-mod-book',
  templateUrl: './mod-book.component.html',
  styleUrls: ['./mod-book.component.css']
})
export class ModBookComponent {

  public libros:Books[]
  public filtro:Books
  public bookEdited:Books

  constructor(public booksService:BooksService, public toastrSvc:ToastrService){
  }
  public buscar (id:number){
    this.filtro =this.booksService.getOne(id)
    if (this.filtro){
    this.bookEdited={...this.filtro}
    }
    else{
      this.libros=this.booksService.getAll()
      this.toastrSvc.error("no se encuentra")
    }
  }
  public cambio (bookmod:number, usermod:number, titlemod:string, typemod:string, authormod:string, pricemod:number, photomod:string){
    this.bookEdited.id_book=bookmod;
    this.bookEdited.id_user=usermod;
    this.bookEdited.title=titlemod;
    this.bookEdited.type=typemod;
    this.bookEdited.author=authormod;
    this.bookEdited.price=pricemod;
    this.bookEdited.photo=photomod;

    if(this.booksService.edit(this.bookEdited)){
      this.libros=this.booksService.getAll()
      this.toastrSvc.success("libro añadido")
    }
    else{
      
    }
  }


}
