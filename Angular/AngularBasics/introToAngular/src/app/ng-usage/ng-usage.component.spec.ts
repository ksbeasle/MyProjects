import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUsageComponent } from './ng-usage.component';

describe('NgUsageComponent', () => {
  let component: NgUsageComponent;
  let fixture: ComponentFixture<NgUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
