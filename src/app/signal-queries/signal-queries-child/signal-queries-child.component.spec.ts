import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalQueriesChildComponent } from './signal-queries-child.component';

describe('SignalQueriesChildComponent', () => {
  let component: SignalQueriesChildComponent;
  let fixture: ComponentFixture<SignalQueriesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalQueriesChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalQueriesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
