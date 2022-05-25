import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosSmallComponent } from './iconos-small.component';

describe('IconosSmallComponent', () => {
  let component: IconosSmallComponent;
  let fixture: ComponentFixture<IconosSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
