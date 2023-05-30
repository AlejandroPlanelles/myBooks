import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { raceWith } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private book:Books[]

  constructor() 
  { 
    this.book =[
      new Books("Juego de Tronos","Ciencia Ficcion","George RR Martin",30,"assets/libro1.jpg",1,9),
      new Books("Choque de Reyes","Ciencia Ficcion","George RR Martin",30,"assets/libro2.jpg",2,8),
      new Books("Tormenta de Espadas","Ciencia Ficcion","George RR Martin",30,"assets/libro3.jpg",3,7),
      new Books("Festín de Cuervos","Ciencia Ficcion","George RR Martin",30,"assets/libro4.jpg",4,6),
      new Books("Danza de Dragones","Ciencia Ficcion","George RR Martin",30,"assets/libro5.jpg",5,5),
      ]
  
  }
public getAll():Books[]
  {
    return this.book
  }
public getOne(id_libro:number):Books
  {
    return  this.book.find(x => x.id_book == id_libro);
       
  }
public add(bookquerecives:Books):void
  {
    this.book.push(bookquerecives)
  }
public edit(bookquerecives:Books):boolean
  { 
    let nuevoLibro= this.book.findIndex(x => x.id_book===bookquerecives.id_book)
    if(nuevoLibro !=-1){
      this.book[nuevoLibro]=bookquerecives;
      return true
    }
    return false
  }
public delete(id_book:number):boolean
{
  // let longitud =this.book.length;
   this.book=this.book.filter(x => x.id_book !== id_book);
  // filtro=this.book;

  return true
}
}
