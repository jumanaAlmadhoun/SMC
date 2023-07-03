import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakarComponent } from './dakar.component';

describe('DakarComponent', () => {
  let component: DakarComponent;
  let fixture: ComponentFixture<DakarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DakarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DakarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
