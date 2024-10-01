import { Component } from '@angular/core';
import { SignalQueriesChildComponent } from '../signal-queries/signal-queries-child/signal-queries-child.component';
import { ChildModalInputsComponent } from "../modal-inputs/child-modal-inputs/child-modal-inputs.component";
import { ChildComponentDemoComponent } from "../input-signals/child-component-demo/child-component-demo.component";

@Component({
  selector: 'app-defer-demo',
  standalone: true,
  imports: [SignalQueriesChildComponent, ChildModalInputsComponent, ChildComponentDemoComponent],
  templateUrl: './defer-demo.component.html',
  styleUrl: './defer-demo.component.scss'
})
export class DeferDemoComponent {

  // defer loading is for resources that can be loaded later on by the browser e.i. not in the viewport

  // can only work with standalone components




}
