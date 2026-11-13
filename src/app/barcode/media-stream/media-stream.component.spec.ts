import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MediaStreamComponent } from './media-stream.component';
import { BarcodeDecoderService } from '../../../services/barcode-decoder.service';
import { BarcodeValidatorService } from '../../../services/barcode-validator.service';

describe('MediaStreamComponent', () => {
  let component: MediaStreamComponent;
  let fixture: ComponentFixture<MediaStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MediaStreamComponent],
      providers: [
        {
          provide: BarcodeDecoderService,
          useValue: {
            onLiveStreamInit: () => undefined,
            onDecodeProcessed: () => undefined,
            onDecodeDetected: () => new Promise(() => undefined),
            onDecodeStop: () => undefined,
          },
        },
        { provide: BarcodeValidatorService, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
