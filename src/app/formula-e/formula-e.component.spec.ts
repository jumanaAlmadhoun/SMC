import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaEComponent } from './formula-e.component';

describe('FormulaEComponent', () => {
  let component: FormulaEComponent;
  let fixture: ComponentFixture<FormulaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
