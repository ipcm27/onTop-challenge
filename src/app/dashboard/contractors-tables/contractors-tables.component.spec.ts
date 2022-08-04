import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorsTablesComponent } from './contractors-tables.component';

describe('ContractorsTablesComponent', () => {
  let component: ContractorsTablesComponent;
  let fixture: ComponentFixture<ContractorsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorsTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
