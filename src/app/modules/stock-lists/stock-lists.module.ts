import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListsComponent } from './stock-lists/stock-lists.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { NewListComponent } from './new-list/new-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../authentication/signup/signup.component';



@NgModule({
  declarations: [StockListsComponent, NewListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  exports: [StockListsComponent],
  entryComponents: [
    NewListComponent
  ]
})
export class StockListsModule { }
