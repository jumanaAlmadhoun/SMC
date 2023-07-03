import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremeEComponent } from './extreme-e.component';

describe('ExtremeEComponent', () => {
  let component: ExtremeEComponent;
  let fixture: ComponentFixture<ExtremeEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtremeEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremeEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
