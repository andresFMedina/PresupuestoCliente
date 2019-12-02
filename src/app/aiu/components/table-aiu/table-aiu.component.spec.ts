import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAiuComponent } from './table-aiu.component';

describe('TableAiuComponent', () => {
  let component: TableAiuComponent;
  let fixture: ComponentFixture<TableAiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
