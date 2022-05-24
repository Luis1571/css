import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarruselComponent } from './img-carrusel.component';

describe('ImgCarruselComponent', () => {
  let component: ImgCarruselComponent;
  let fixture: ComponentFixture<ImgCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
