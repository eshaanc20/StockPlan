import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoalListsComponent } from './goal-lists/goal-lists.component';
import { FormsModule } from '@angular/forms';
import { NewGoalsListComponent } from './new-goals-list/new-goals-list.component';



@NgModule({
  declarations: [GoalListsComponent, NewGoalsListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    GoalListsComponent
  ],
  entryComponents: [
    NewGoalsListComponent
  ]
})
export class GoalsModule { }
