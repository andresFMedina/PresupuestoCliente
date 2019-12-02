import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCostComponent } from './table-cost.component';

describe('TableCostComponent', () => {
  let component: TableCostComponent;
  let fixture: ComponentFixture<TableCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
