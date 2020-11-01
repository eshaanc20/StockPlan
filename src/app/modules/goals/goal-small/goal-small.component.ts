import { Component, Input, OnInit } from '@angular/core';
import { GoalsData } from '../../interfaces';

@Component({
  selector: 'app-goal-small',
  templateUrl: './goal-small.component.html',
  styleUrls: ['./goal-small.component.css']
})
export class GoalSmallComponent implements OnInit {
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
