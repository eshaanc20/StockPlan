import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { SummaryComponent } from './summary/summary.component';
import { MatTableModule } from '@angular/material';



@NgModule({
  declarations: [PortfolioDetailComponent, SummaryComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [PortfolioDetailComponent]
})
export class PortfolioModule { }
