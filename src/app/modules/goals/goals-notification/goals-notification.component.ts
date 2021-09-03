import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../authentication/login.service';
import { GoalsData } from '../../interfaces';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goals-notification',
  templateUrl: './goals-notification.component.html',
  styleUrls: ['./goals-notification.component.css']
})
export class GoalsNotificationComponent implements OnInit {
  goalLists: any;
  count: Number;
  goalsCompleted: GoalsData[];

  constructor(private goals: GoalsService, private loginService: LoginService) { 
    this.goalsCompleted = [];
    this.count = 0;
  }

  ngOnInit(): void {
    if (!this.loginService.getLoginStatus()) {
      this.loginService.user.subscribe(res => {
        this.goals.getAllLists().subscribe(res => {
          this.goalLists = res.allLists;
          for (let list of this.goalLists) {
            this.goals.getGoalsDetail(list.listNumber).subscribe(list => {
              this.goalsCompleted = list.goalsDetail;
            })
          }
        });
      });
    } else {
      this.goals.getAllLists().subscribe(res => {
        this.goalLists = res.allLists;
        for (let list of this.goalLists) {
          this.goals.getGoalsDetail(list.listNumber).subscribe(list => {
            let currentList;
            currentList = list.goalsDetail.filter(goal => !goal.read && goal.goalCompleted);
            this.goalsCompleted.push(...currentList);
            this.count = this.goalsCompleted.length;
          })
        }
      });
    }
  }

}
