import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalListsComponent } from './goal-lists.component';

describe('GoalListsComponent', () => {
  let component: GoalListsComponent;
  let fixture: ComponentFixture<GoalListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
