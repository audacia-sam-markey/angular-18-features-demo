import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModalInputsComponent } from './child-modal-inputs.component';

describe('ChildModalInputsComponent', () => {
  let component: ChildModalInputsComponent;
  let fixture: ComponentFixture<ChildModalInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildModalInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildModalInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
