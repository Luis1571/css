import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAcordeonComponent } from './menu-acordeon.component';

describe('MenuAcordeonComponent', () => {
  let component: MenuAcordeonComponent;
  let fixture: ComponentFixture<MenuAcordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAcordeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
