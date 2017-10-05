import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToEventComponent } from './link-to-event.component';

describe('LinkToEventComponent', () => {
  let component: LinkToEventComponent;
  let fixture: ComponentFixture<LinkToEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkToEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
