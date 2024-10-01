import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutputSyntaxComponent } from './new-output-syntax.component';

describe('NewOutputSyntaxComponent', () => {
  let component: NewOutputSyntaxComponent;
  let fixture: ComponentFixture<NewOutputSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOutputSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOutputSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
