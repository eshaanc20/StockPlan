import { Component, Input, OnInit } from '@angular/core';
import { GoalsInformationFormat } from '../../interfaces';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input() goal: GoalsInformationFormat;
  status: string;

  constructor() { }

  ngOnInit() {
    console.log(this.goal.progress)
    if (this.goal.goalCompleted) {
      this.status = 'Completed';
    } else {
      this.status = 'Active';
    }
  }

}
