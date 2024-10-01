import { Component } from '@angular/core';

@Component({
  selector: 'app-signal-queries-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-queries-child.component.html',
  styleUrl: './signal-queries-child.component.scss'
})
export class SignalQueriesChildComponent {
  constructor() { }
  testing(): void{
    console.log('testing');
  }
}
