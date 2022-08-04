import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsFiltersMenuComponent } from './inputs-filters-menu.component';

describe('InputsFiltersMenuComponent', () => {
  let component: InputsFiltersMenuComponent;
  let fixture: ComponentFixture<InputsFiltersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsFiltersMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsFiltersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
