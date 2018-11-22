import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiesComponent } from './techies.component';

describe('TechiesComponent', () => {
  let component: TechiesComponent;
  let fixture: ComponentFixture<TechiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
