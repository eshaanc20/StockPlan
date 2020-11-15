import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { SummaryComponent } from './summary/summary.component';
import { MatTableModule } from '@angular/material/table';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { FormsModule } from '@angular/forms';
import { GoalsModule } from '../goals/goals.module';
import { StockListsModule } from '../stock-lists/stock-lists.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [PortfolioDetailComponent, SummaryComponent, PortfolioAddComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    GoalsModule,
    StockListsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [PortfolioDetailComponent],
  entryComponents: [
    PortfolioAddComponent
  ]
})
export class PortfolioModule { }
