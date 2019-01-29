import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcComponentComponent } from './orc-component.component';

describe('OrcComponentComponent', () => {
  let component: OrcComponentComponent;
  let fixture: ComponentFixture<OrcComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
