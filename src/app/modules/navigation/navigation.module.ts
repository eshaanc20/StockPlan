import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { StockListsModule } from '../stock-lists/stock-lists.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    StockListsModule,
    RouterModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
