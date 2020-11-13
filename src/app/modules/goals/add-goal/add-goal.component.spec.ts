import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddGoalComponent } from './add-goal.component';

describe('AddGoalComponent', () => {
  let component: AddGoalComponent;
  let fixture: ComponentFixture<AddGoalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
