import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiuComponent } from './aiu.component';

describe('AiuComponent', () => {
  let component: AiuComponent;
  let fixture: ComponentFixture<AiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
