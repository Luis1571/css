import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTrasparenteImgComponent } from './text-trasparente-img.component';

describe('TextTrasparenteImgComponent', () => {
  let component: TextTrasparenteImgComponent;
  let fixture: ComponentFixture<TextTrasparenteImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTrasparenteImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTrasparenteImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
