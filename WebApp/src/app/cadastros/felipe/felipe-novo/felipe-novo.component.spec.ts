import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelipeNovoComponent } from './felipe-novo.component';

describe('FelipeNovoComponent', () => {
  let component: FelipeNovoComponent;
  let fixture: ComponentFixture<FelipeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelipeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelipeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
