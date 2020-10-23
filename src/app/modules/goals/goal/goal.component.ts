import { Component, Input, OnInit } from '@angular/core';
import { GoalsInformationFormat } from '../../interfaces';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input() goal: GoalsInformationFormat;

  constructor() { }

  ngOnInit() {
  }

}
