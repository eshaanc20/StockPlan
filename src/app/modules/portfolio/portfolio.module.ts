import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';



@NgModule({
  declarations: [PortfolioDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PortfolioDetailComponent]
})
export class PortfolioModule { }
