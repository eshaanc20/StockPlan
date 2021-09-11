import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  selected: String;

  constructor() { 
    this.selected = "";
  }

  ngOnInit() {
  }

  portfolioSelected() {
    this.selected = "portfolio";
  }

  updateSelected(name) {
    this.selected = name;
  }

}
