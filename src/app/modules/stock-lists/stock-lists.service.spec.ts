import { TestBed } from '@angular/core/testing';

import { StockListsService } from './stock-lists.service';

describe('StockListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockListsService = TestBed.get(StockListsService);
    expect(service).toBeTruthy();
  });
});
