import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ModBookComponent } from './pages/mod-book/mod-book.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"home1", component: HomeComponent},
  {path:"register1", component: RegisterComponent},
  {path:"profile1", component: ProfileComponent},
  {path:"books1", component: BooksComponent},
  {path:"add1", component: AddBookComponent},
  {path:"mod1", component: ModBookComponent},
  {path:"login1", component: LoginComponent},
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }