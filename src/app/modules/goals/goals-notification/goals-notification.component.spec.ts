import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsNotificationComponent } from './goals-notification.component';

describe('GoalsNotificationComponent', () => {
  let component: GoalsNotificationComponent;
  let fixture: ComponentFixture<GoalsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
