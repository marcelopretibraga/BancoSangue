import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoNovoComponent } from './estado-novo.component';

describe('EstadoNovoComponent', () => {
  let component: EstadoNovoComponent;
  let fixture: ComponentFixture<EstadoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
