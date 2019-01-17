import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTicketComponent } from './link-ticket.component';

describe('LinkTicketComponent', () => {
  let component: LinkTicketComponent;
  let fixture: ComponentFixture<LinkTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
