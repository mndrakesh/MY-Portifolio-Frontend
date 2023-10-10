import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmenuComponent } from './projectmenu.component';

describe('ProjectmenuComponent', () => {
  let component: ProjectmenuComponent;
  let fixture: ComponentFixture<ProjectmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
