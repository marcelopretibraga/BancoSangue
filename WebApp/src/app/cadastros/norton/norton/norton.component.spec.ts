import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NortonComponent } from './norton.component';

describe('NortonComponent', () => {
  let component: NortonComponent;
  let fixture: ComponentFixture<NortonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NortonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NortonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
