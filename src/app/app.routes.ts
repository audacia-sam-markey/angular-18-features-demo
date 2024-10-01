import { Routes } from '@angular/router';
import { DeferDemoComponent } from './defer-demo/defer-demo.component';
import { InputSignalsComponent } from './input-signals/input-signals.component';
import { ModalInputsComponent } from './modal-inputs/modal-inputs.component';
import { NewControlFlowComponent } from './new-control-flow/new-control-flow.component';
import { NewOutputSyntaxComponent } from './new-output-syntax/new-output-syntax.component';
import { SignalQueriesComponent } from './signal-queries/signal-queries.component';
export const routes: Routes = [
  { path: 'control-flow', component: NewControlFlowComponent },
  { path: 'modal-input-signals', component: ModalInputsComponent },
  { path: 'input-signals', component: InputSignalsComponent },
  { path: 'signal-queries', component: SignalQueriesComponent },
  { path: 'defer-demo', component: DeferDemoComponent },
  { path: 'new-output-syntax', component: NewOutputSyntaxComponent },

];
