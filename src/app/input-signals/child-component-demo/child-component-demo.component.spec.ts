import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentDemoComponent } from './child-component-demo.component';

describe('ChildComponentDemoComponent', () => {
  let component: ChildComponentDemoComponent;
  let fixture: ComponentFixture<ChildComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponentDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
