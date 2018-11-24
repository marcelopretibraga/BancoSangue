import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuanaComponent } from './luana.component';

describe('LuanaComponent', () => {
  let component: LuanaComponent;
  let fixture: ComponentFixture<LuanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
