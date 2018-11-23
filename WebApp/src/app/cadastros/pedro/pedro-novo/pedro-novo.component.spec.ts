import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedroNovoComponent } from './pedro-novo.component';

describe('PedroNovoComponent', () => {
  let component: PedroNovoComponent;
  let fixture: ComponentFixture<PedroNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedroNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedroNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
