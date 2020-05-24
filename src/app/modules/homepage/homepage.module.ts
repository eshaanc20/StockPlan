import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
