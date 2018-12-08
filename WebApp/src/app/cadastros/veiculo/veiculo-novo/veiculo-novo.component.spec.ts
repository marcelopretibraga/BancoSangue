import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoNovoComponent } from './veiculo-novo.component';

describe('VeiculoNovoComponent', () => {
  let component: VeiculoNovoComponent;
  let fixture: ComponentFixture<VeiculoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
