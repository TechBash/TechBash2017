import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicSaveComponent } from './atomic-save.component';

describe('AtomicSaveComponent', () => {
  let component: AtomicSaveComponent;
  let fixture: ComponentFixture<AtomicSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomicSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
