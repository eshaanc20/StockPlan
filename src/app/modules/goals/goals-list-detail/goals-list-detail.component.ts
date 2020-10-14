import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../authentication/login.service';
import { GoalsInformationFormat } from '../../interfaces';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goals-list-detail',
  templateUrl: './goals-list-detail.component.html',
  styleUrls: ['./goals-list-detail.component.css']
})
export class GoalsListDetailComponent implements OnInit {
  listId: string;
  goalsList: GoalsInformationFormat;

  constructor(
    private route: ActivatedRoute,
    private goals: GoalsService,
    private loginService: LoginService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listId = params.listNumber;
      this.goals.getGoalsDetail(this.listId).subscribe(res => {
        this.goalsList = res.goalsDetail;
      })
    })
  }

  
}
