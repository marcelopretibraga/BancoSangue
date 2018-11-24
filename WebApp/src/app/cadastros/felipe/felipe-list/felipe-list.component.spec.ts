import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelipeListComponent } from './felipe-list.component';

describe('FelipeListComponent', () => {
  let component: FelipeListComponent;
  let fixture: ComponentFixture<FelipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
