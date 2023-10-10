import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NseHomeComponent } from './nse-home.component';

describe('NseHomeComponent', () => {
  let component: NseHomeComponent;
  let fixture: ComponentFixture<NseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NseHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
