import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';
import { DragDropComponent } from './components/drag-and-drop/drag-and-drop.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: TestComponent },
  { path: 'form', component: FormComponent },
  { path: 'drag', component: DragDropComponent }
];
