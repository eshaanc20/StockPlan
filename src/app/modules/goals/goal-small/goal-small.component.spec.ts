import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSmallComponent } from './goal-small.component';

describe('GoalSmallComponent', () => {
  let component: GoalSmallComponent;
  let fixture: ComponentFixture<GoalSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
