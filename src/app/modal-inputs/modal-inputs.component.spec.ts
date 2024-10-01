import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInputsComponent } from './modal-inputs.component';

describe('ModalInputsComponent', () => {
  let component: ModalInputsComponent;
  let fixture: ComponentFixture<ModalInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
