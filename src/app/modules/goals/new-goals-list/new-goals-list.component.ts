import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-new-goals-list',
  templateUrl: './new-goals-list.component.html',
  styleUrls: ['./new-goals-list.component.css']
})
export class NewGoalsListComponent implements OnInit {
  progress = false;

  constructor(private goals: GoalsService) { }

  ngOnInit() {
  }

  newList(f: NgForm) {
    this.progress = true;
    this.goals.addNewList(f.value.listName).subscribe(res => {
      this.progress = false;
    });
  }
}
