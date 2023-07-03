import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiRalliesComponent } from './saudi-rallies.component';

describe('SaudiRalliesComponent', () => {
  let component: SaudiRalliesComponent;
  let fixture: ComponentFixture<SaudiRalliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudiRalliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudiRalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
