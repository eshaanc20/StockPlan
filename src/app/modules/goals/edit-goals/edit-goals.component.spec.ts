import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditGoalsComponent } from './edit-goals.component';

describe('EditGoalsComponent', () => {
  let component: EditGoalsComponent;
  let fixture: ComponentFixture<EditGoalsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
