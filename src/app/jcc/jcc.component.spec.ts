import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JCCComponent } from './jcc.component';

describe('JCCComponent', () => {
  let component: JCCComponent;
  let fixture: ComponentFixture<JCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JCCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
