import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoalListsComponent } from './goal-lists/goal-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewGoalsListComponent } from './new-goals-list/new-goals-list.component';
import { GoalsListDetailComponent } from './goals-list-detail/goals-list-detail.component';
import { AddGoalComponent } from './add-goal/add-goal.component';



@NgModule({
  declarations: [GoalListsComponent, NewGoalsListComponent, GoalsListDetailComponent, AddGoalComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    GoalListsComponent
  ],
  entryComponents: [
    NewGoalsListComponent,
    AddGoalComponent
  ]
})
export class GoalsModule { }
