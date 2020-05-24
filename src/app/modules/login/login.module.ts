import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
