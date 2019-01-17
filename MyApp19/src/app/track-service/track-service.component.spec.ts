import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackServiceComponent } from './track-service.component';

describe('TrackServiceComponent', () => {
  let component: TrackServiceComponent;
  let fixture: ComponentFixture<TrackServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
