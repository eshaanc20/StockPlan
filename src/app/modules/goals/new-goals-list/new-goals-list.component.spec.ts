import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewGoalsListComponent } from './new-goals-list.component';

describe('NewGoalsListComponent', () => {
  let component: NewGoalsListComponent;
  let fixture: ComponentFixture<NewGoalsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
