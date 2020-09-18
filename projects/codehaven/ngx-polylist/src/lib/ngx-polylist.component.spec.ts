import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPolylistComponent } from './ngx-polylist.component';

describe('NgxPolylistComponent', () => {
  let component: NgxPolylistComponent;
  let fixture: ComponentFixture<NgxPolylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPolylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPolylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
