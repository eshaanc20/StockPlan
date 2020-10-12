import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsListsComponent } from './goals-lists.component';

describe('GoalsListsComponent', () => {
  let component: GoalsListsComponent;
  let fixture: ComponentFixture<GoalsListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
