import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../menu/menu.module';
import { NavigationModule } from '../navigation/navigation.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MenuModule,
    NavigationModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
