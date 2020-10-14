import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsListDetailComponent } from './goals-list-detail.component';

describe('GoalsListDetailComponent', () => {
  let component: GoalsListDetailComponent;
  let fixture: ComponentFixture<GoalsListDetailComponent>;

  beforeEach(async(() => {
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
