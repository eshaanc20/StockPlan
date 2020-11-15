import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSecondComponent } from './progress-second.component';

describe('ProgressSecondComponent', () => {
  let component: ProgressSecondComponent;
  let fixture: ComponentFixture<ProgressSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
