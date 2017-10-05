import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPushComponent } from './list-push.component';

describe('ListPushComponent', () => {
  let component: ListPushComponent;
  let fixture: ComponentFixture<ListPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
