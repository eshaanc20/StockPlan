import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu/menu.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationModule,
    MenuModule,
    MatIconModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
