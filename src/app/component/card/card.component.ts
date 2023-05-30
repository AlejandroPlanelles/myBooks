import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit
{
@Input() cartaPadre:Books;
@Input() esPar:boolean;
@Output() quitar = new EventEmitter <Books>();
constructor(){}
 
quitarCaja(){
  this.quitar.emit(this.cartaPadre)
}

ngOnInit():void
  {

  }

}
