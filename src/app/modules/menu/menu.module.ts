import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticationModule } from '../authentication/authentication.module';
import { SignupComponent } from '../authentication/signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { GoalsModule } from '../goals/goals.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    AuthenticationModule,
    MatIconModule,
    MatBadgeModule,
    GoalsModule
  ],
  exports: [
    MenuComponent
  ],
  entryComponents: [
    SignupComponent
  ]
})
export class MenuModule { }
