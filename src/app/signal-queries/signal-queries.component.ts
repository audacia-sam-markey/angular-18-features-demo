import { AfterViewInit, Component, contentChildren, effect, ElementRef, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { SignalQueriesChildComponent } from './signal-queries-child/signal-queries-child.component';

@Component({
  selector: 'app-signal-queries',
  standalone: true,
  imports: [SignalQueriesChildComponent],
  templateUrl: './signal-queries.component.html',
  styleUrl: './signal-queries.component.scss'
})
export class SignalQueriesComponent implements AfterViewInit {
  // DEVELOPER PREVIEW
  numbers = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  signQueryChildren = viewChildren(SignalQueriesChildComponent,);
  headerElementRef = viewChildren<ElementRef<HTMLHeadElement>>('headerElementRef')
  @ViewChildren(SignalQueriesChildComponent) signQueryChildrenOld!: QueryList<SignalQueriesChildComponent>;

  signalQueryContent = contentChildren(SignalQueriesChildComponent);

  constructor() {
    effect(() => {
      console.log(this.signQueryChildren());


      console.log(this.signalQueryContent());
    })
  }
  ngAfterViewInit(): void {
    console.log(this.signQueryChildrenOld);

  }



}
