import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-new-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './new-control-flow.component.html',
  styleUrl: './new-control-flow.component.scss'
})
export class NewControlFlowComponent {

  isRaining = signal<boolean>(true);
  areThereClouds = signal<boolean>(true);

  amountOfTimesItsRained = signal<number>(-4);
  items = signal<{id:number,name:string}[]>([]);
}
