import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-modal-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-modal-inputs.component.html',
  styleUrl: './child-modal-inputs.component.scss'
})
export class ChildModalInputsComponent {

  textValue = model.required<string>();

  textValueInputSignal = input.required<string>();



}
