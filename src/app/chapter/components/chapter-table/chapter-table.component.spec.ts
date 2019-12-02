import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTableComponent } from './chapter-table.component';

describe('ChapterTableComponent', () => {
  let component: ChapterTableComponent;
  let fixture: ComponentFixture<ChapterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
