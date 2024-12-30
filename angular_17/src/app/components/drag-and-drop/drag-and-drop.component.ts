import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  standalone: true,
  imports: [DragDropModule, CommonModule]
})
export class DragDropComponent {
  items = [
    { label: 'B1', width: 50, height: 50, isDragging: false },
    { label: 'B2', width: 50, height: 50, isDragging: false },
    { label: 'Large Button', width: 150, height: 50, isDragging: false, class: 'big' },
    { label: 'B3', width: 50, height: 50, isDragging: false },
    { label: 'B4', width: 50, height: 50, isDragging: false },
    { label: 'B5', width: 50, height: 50, isDragging: false },
    { label: 'B6', width: 50, height: 50, isDragging: false },
    { label: 'B7', width: 50, height: 50, isDragging: false },
    { label: 'B8', width: 50, height: 50, isDragging: false },

  ];

  placeholderWidth: number = 0;
  showPlaceholder: boolean = false;

  // Track the currently dragged item
  currentDragItem: any = null;

  onDragEntered(event: CdkDragEnter<any>, index: number): void {
    this.currentDragItem = event.item.data;
    const targetItem = this.items[index];

    if (this.currentDragItem.width <= targetItem.width) {
      this.placeholderWidth = this.currentDragItem.width;
      this.showPlaceholder = true;
    } else {
      this.showPlaceholder = false;
    }
  }

  onDragExited(): void {
    this.showPlaceholder = false;
  }

  onDrop(event: CdkDragDrop<any[]>): void {
    const previousIndex = this.items.findIndex(item => item === event.item.data);
    const targetIndex = event.currentIndex;

    // Move the item in the list
    if (previousIndex !== targetIndex) {
      const [movedItem] = this.items.splice(previousIndex, 1);
      this.items.splice(targetIndex, 0, movedItem);
    }

    // Reset states
    this.showPlaceholder = false;
    this.currentDragItem = null;
  }
}
