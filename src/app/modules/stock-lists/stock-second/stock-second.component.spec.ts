import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSecondComponent } from './stock-second.component';

describe('StockSecondComponent', () => {
  let component: StockSecondComponent;
  let fixture: ComponentFixture<StockSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
