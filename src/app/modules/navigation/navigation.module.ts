import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StockListsModule } from '../stock-lists/stock-lists.module';
import { RouterModule } from '@angular/router';
import { GoalsModule } from '../goals/goals.module';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    StockListsModule,
    RouterModule,
    GoalsModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
