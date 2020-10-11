import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListsComponent } from './stock-lists/stock-lists.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { NewListComponent } from './new-list/new-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../authentication/signup/signup.component';
import { LoginService } from '../authentication/login.service';
import { StockListsService } from './stock-lists.service';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [StockListsComponent, NewListComponent, ListDetailComponent, StockComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    RouterModule,
  ],
  exports: [StockListsComponent],
  providers: [LoginService, StockListsService],
  entryComponents: [
    NewListComponent
  ]
})
export class StockListsModule { }
