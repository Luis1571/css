import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraTransparenteVideoComponent } from './letra-transparente-video.component';

describe('LetraTransparenteVideoComponent', () => {
  let component: LetraTransparenteVideoComponent;
  let fixture: ComponentFixture<LetraTransparenteVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetraTransparenteVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraTransparenteVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
