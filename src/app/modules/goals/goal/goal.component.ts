import { Component, Input, OnInit } from '@angular/core';
import { GoalsData } from '../../interfaces';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input() goal: GoalsData;
  status: string;

  constructor() { }

  ngOnInit() {
    if (this.goal.goalCompleted) {
      this.status = 'Completed';
    } else {
      this.status = 'Active';
    }
  }

}
