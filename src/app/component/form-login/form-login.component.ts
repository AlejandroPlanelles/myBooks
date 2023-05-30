import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from 'src/app/models/user'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{

  public user:User
  
  constructor (){
    this.user=new User()
  }
  onSubmit(form:NgForm){
    console.log(this.user)

    return this.user
  }
  ngOnInit(): void {
    
  }
}
