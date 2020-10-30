import { Component, Input, OnInit } from '@angular/core';
import { GoalsInformationFormat } from '../../interfaces';

@Component({
  selector: 'app-goal-small',
  templateUrl: './goal-small.component.html',
  styleUrls: ['./goal-small.component.css']
})
export class GoalSmallComponent implements OnInit {
  @Input() goal: GoalsInformationFormat;
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
