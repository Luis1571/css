import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasExpandidasComponent } from './letras-expandidas.component';

describe('LetrasExpandidasComponent', () => {
  let component: LetrasExpandidasComponent;
  let fixture: ComponentFixture<LetrasExpandidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrasExpandidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasExpandidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
