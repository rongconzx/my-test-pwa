import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { InstantSearchComponent } from './instant-search.component';
import { BarcodeValidatorService } from '../../../services/barcode-validator.service';

describe('InstantSearchComponent', () => {
  let component: InstantSearchComponent;
  let fixture: ComponentFixture<InstantSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InstantSearchComponent],
      providers: [
        {
          provide: BarcodeValidatorService,
          useValue: { doSearchbyCode: () => of('') },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
