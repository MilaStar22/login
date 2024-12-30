import { Component, QueryList, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { TestComponent } from './components/test/test.component';
import { DragDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChildComponent,
    DragDropComponent,
    TestComponent,
    RouterLink,
    RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <app-child>Save</app-child>
    <app-child>Cancel</app-child>
`,
})
export class AppComponent {
  title = 'angular_17';
  textFromChild: string = '';
  textFromDrag: string = '';
  parentCount = 5;

  @ViewChildren(ChildComponent) actions!: QueryList<ChildComponent>;

  showText(text: string) {
    this.textFromChild = text;
  }

  showDragText(text: string) {
    this.textFromDrag = text;
  }

  ngAfterViewInit() {
    this.actions.forEach(action => {
      console.log(action.textFromChild);
    });
  }
}
