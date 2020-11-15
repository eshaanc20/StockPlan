import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GoalsData } from '../../interfaces';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input() goal: GoalsData;
  @Input() edit: boolean;
  status: string;
  @Output() update = new EventEmitter<boolean>()

  constructor(private goalService: GoalsService) { }

  ngOnInit() {
    if (this.goal.goalCompleted) {
      this.status = 'Completed';
    } else {
      this.status = 'Active';
    }
  }

  delete(id) {
    console.log(id)
    this.goalService.deleteGoal(id).subscribe(result => {
      this.update.emit(true);
    });
  }

}
