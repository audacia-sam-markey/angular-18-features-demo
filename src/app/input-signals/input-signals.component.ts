import { Component } from '@angular/core';
import { ChildComponentDemoComponent } from './child-component-demo/child-component-demo.component';

@Component({
  selector: 'app-input-signals',
  standalone: true,
  imports: [ChildComponentDemoComponent],
  templateUrl: './input-signals.component.html',
  styleUrl: './input-signals.component.scss'
})
export class InputSignalsComponent {

}
