import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NortonListComponent } from './norton-list.component';

describe('NortonListComponent', () => {
  let component: NortonListComponent;
  let fixture: ComponentFixture<NortonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NortonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NortonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
