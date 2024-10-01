import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-new-output-syntax',
  standalone: true,
  imports: [],
  templateUrl: './new-output-syntax.component.html',
  styleUrl: './new-output-syntax.component.scss'
})
export class NewOutputSyntaxComponent {

  // DEVELOPER PREVIEW !!!! ⚠️

  @Output() outputOldSyntax = new EventEmitter<string>();
  outputNewSyntax = output<string>();
/*
Why you should use output() over decorator-based @Output()?
The output() function provides numerous benefits over decorator-based @Output and EventEmitter:

Simpler mental model and API:
• No concept of error channel, completion channels, or other APIs from RxJS.
• Outputs are simple emitters. You can emit values using the .emit function.
More accurate types.
• OutputEmitterRef.emit(value) is now correctly typed, while EventEmitter has broken types and can cause runtime errors.
*/
  testing() {
    this.outputOldSyntax.emit('Old Syntax');
    this.outputNewSyntax.emit('New Syntax');
  }
}
