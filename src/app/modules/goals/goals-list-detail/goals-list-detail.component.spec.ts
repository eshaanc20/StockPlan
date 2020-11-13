import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoalsListDetailComponent } from './goals-list-detail.component';

describe('GoalsListDetailComponent', () => {
  let component: GoalsListDetailComponent;
  let fixture: ComponentFixture<GoalsListDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
