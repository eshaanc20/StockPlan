import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoalListsComponent } from './goal-lists/goal-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewGoalsListComponent } from './new-goals-list/new-goals-list.component';
import { GoalsListDetailComponent } from './goals-list-detail/goals-list-detail.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { LoginService } from '../authentication/login.service';
import { GoalsService } from './goals.service';
import { GoalComponent } from './goal/goal.component';
import { ProgressComponent } from './progress/progress.component';
import { GoalSmallComponent } from './goal-small/goal-small.component';
import { ProgressSecondComponent } from './progress-second/progress-second.component';



@NgModule({
  declarations: [
    GoalListsComponent,
    NewGoalsListComponent,
    GoalsListDetailComponent,
    AddGoalComponent,
    GoalComponent,
    ProgressComponent,
    GoalSmallComponent,
    ProgressSecondComponent
  ],
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
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  exports: [
    GoalListsComponent,
    GoalSmallComponent
  ],
  providers: [LoginService, GoalsService],
  entryComponents: [
    NewGoalsListComponent,
    AddGoalComponent,
  ]
})
export class GoalsModule { }
