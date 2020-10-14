import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { ListDetailComponent } from './modules/stock-lists/list-detail/list-detail.component';
import { GoalListsComponent } from './modules/goals/goal-lists/goal-lists.component';
import { GoalsListDetailComponent } from './modules/goals/goals-list-detail/goals-list-detail.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'list/:listNumber', component: ListDetailComponent},
    {path: 'goals/:listNumber', component: GoalsListDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
