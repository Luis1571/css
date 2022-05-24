import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoBuscarComponent } from './icono-buscar.component';

describe('IconoBuscarComponent', () => {
  let component: IconoBuscarComponent;
  let fixture: ComponentFixture<IconoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
