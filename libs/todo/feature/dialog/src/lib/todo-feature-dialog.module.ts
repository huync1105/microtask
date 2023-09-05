import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddTodoDialogComponent],
})
export class TodoFeatureDialogModule {}
