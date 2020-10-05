import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
