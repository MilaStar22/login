import { Component, computed, EventEmitter, Input, Output, signal, effect, untracked } from '@angular/core';
import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  standalone: true,
  imports: [DragDropModule, CommonModule, ReactiveFormsModule]
})
export class TestComponent {
  @Output() text = new EventEmitter<string>();
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();
  countSignal = signal<number>(0);
  writableSignal = computed(() => this.countSignal() * 2);

  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.countSignal()}`);
    });

    // effect(() => {
    //   console.log(`User set to ${this.writableSignal()} and the counter is ${untracked(this.countSignal)}`);
    // });
  }

  incrementSignal() {
    this.countSignal.update(value => value + 1);
  }

  decrementSignal() {
    this.countSignal.update(value => value - 1);
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }

  buttons = [
    { label: 'Default', width: 50 },
    { label: 'Default1', width: 50 },
    { label: 'Default2', width: 50 },
    { label: 'Default3', width: 50 },
    { label: 'Double', width: 100 },
    { label: 'Triple', width: 150 },
  ];


  sendText() {
    this.text.emit('Hello from test component');
  }

  onDragMoved(event: CdkDragMove): void {
    const placeholder = document.querySelector('.cdk-drag-placeholder') as HTMLElement;
    const source = event.source.getRootElement();

    if (placeholder && source) {
      // Match the width and column span of the dragged element
      placeholder.style.width = `${source.offsetWidth}px`;
      placeholder.style.height = `${source.offsetHeight}px`;

      // Optionally, sync the grid styles
      const gridColumn = window.getComputedStyle(source).gridColumn;
      placeholder.style.gridColumn = gridColumn;
    }
  }

  getColumnSpan(button: any): string {
    return `span ${button.span}`;
  }

  onDrop(event: any): void {
    console.log('Dropped:', event);
  }
}
