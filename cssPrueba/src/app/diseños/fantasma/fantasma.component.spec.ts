import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasmaComponent } from './fantasma.component';

describe('FantasmaComponent', () => {
  let component: FantasmaComponent;
  let fixture: ComponentFixture<FantasmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantasmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
