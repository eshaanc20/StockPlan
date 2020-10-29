import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { SummaryComponent } from './summary/summary.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PortfolioDetailComponent, SummaryComponent, PortfolioAddComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [PortfolioDetailComponent],
  entryComponents: [
    PortfolioAddComponent
  ]
})
export class PortfolioModule { }
