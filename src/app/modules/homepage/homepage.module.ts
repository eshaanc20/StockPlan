import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';
import { AuthenticationModule } from '../authentication/authentication.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationModule,
    MenuModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
