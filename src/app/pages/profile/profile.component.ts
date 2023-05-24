import { Component } from '@angular/core';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
public usuario:User

constructor(){

    this.usuario = new User("","","","","","")
}
  //   nombreCompleto():string{

  //     return this.usuario.name + " " + this.usuario.last_name;
  // }
    mostrarNombre(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string){

      this.usuario.name=nuevoNombre;
      this.usuario.last_name=nuevoApellido;
      this.usuario.email=nuevoEmail;
      this.usuario.photo=nuevaFoto;
    }
}