import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child-component-demo',
  standalone: true,
  imports: [],
  templateUrl: './child-component-demo.component.html',
  styleUrl: './child-component-demo.component.scss'
})
export class ChildComponentDemoComponent {

  inputExample = input<string>();


  @Input({ required: true }) oldInputExample!: string;




  changeValue(): void{
    (this.inputExample as any).set('new value');
  }
  changeOldValue(): void{
    this.oldInputExample = 'value was changed within child'
  }

}
