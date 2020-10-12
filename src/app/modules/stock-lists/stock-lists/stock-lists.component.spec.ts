import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListsComponent } from './stock-lists.component';

describe('StockListsComponent', () => {
  let component: StockListsComponent;
  let fixture: ComponentFixture<StockListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
