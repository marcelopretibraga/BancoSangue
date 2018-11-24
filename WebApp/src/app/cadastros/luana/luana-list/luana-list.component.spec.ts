import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuanaListComponent } from './luana-list.component';

describe('LuanaListComponent', () => {
  let component: LuanaListComponent;
  let fixture: ComponentFixture<LuanaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuanaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuanaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
