import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatheusListComponent } from './matheus-list.component';

describe('MatheusListComponent', () => {
  let component: MatheusListComponent;
  let fixture: ComponentFixture<MatheusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatheusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatheusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
