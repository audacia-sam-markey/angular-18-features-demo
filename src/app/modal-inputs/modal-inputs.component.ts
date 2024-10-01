import { Component, signal } from '@angular/core';
import { ChildModalInputsComponent } from './child-modal-inputs/child-modal-inputs.component';

@Component({
  selector: 'app-modal-inputs',
  standalone: true,
  imports: [ChildModalInputsComponent],
  templateUrl: './modal-inputs.component.html',
  styleUrl: './modal-inputs.component.scss'
})
export class ModalInputsComponent {

 protected textInputValue = signal('initial value');
 protected textSignalInputValue = signal('testing signal input');

}
