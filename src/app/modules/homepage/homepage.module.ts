import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginModule } from '../login/login.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    MenuModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
