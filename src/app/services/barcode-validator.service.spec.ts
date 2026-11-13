/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { BarcodeValidatorService } from './barcode-validator.service';

describe('BarcodeValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeValidatorService],
    });
  });

  it('should ...', inject([BarcodeValidatorService], (service: BarcodeValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
