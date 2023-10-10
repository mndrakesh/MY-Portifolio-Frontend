import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NseMasterComponent } from './nse-master.component';

describe('NseMasterComponent', () => {
  let component: NseMasterComponent;
  let fixture: ComponentFixture<NseMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NseMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
