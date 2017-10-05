import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValueComponent } from './simple-value.component';

describe('SimpleValueComponent', () => {
  let component: SimpleValueComponent;
  let fixture: ComponentFixture<SimpleValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
