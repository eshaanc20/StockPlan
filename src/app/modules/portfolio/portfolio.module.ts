import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { SummaryComponent } from './summary/summary.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { FormsModule } from '@angular/forms';
import { GoalsModule } from '../goals/goals.module';
import { StockListsModule } from '../stock-lists/stock-lists.module';



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
    StockListsModule
  ],
  exports: [PortfolioDetailComponent],
  entryComponents: [
    PortfolioAddComponent
  ]
})
export class PortfolioModule { }
