import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListsComponent } from './stock-lists/stock-lists.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewListComponent } from './new-list/new-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../authentication/signup/signup.component';
import { LoginService } from '../authentication/login.service';
import { StockListsService } from './stock-lists.service';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockSecondComponent } from './stock-second/stock-second.component';



@NgModule({
  declarations: [StockListsComponent, NewListComponent, ListDetailComponent, StockComponent, AddStockComponent, StockSecondComponent],
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
    MatProgressSpinnerModule,
  ],
  exports: [StockListsComponent, StockSecondComponent],
  providers: [LoginService, StockListsService],
  entryComponents: [
    NewListComponent,
    AddStockComponent
  ]
})
export class StockListsModule { }
