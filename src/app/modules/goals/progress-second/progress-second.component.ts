import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-second',
  templateUrl: './progress-second.component.html',
  styleUrls: ['./progress-second.component.css']
})
export class ProgressSecondComponent implements OnInit {
  @Input() progressValue: number;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
