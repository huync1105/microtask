import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ITodoItem } from '@mfeng/shared/core/interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'mfeng-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss'],
})
export class AddTodoDialogComponent {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AddTodoDialogComponent>) {
    this.todoForm = fb.group({
      title: ['', Validators.required],
      description: [''],
      isDone: false,
      id: uuidv4()
    })
  }

  closeDialog() {
    this.dialogRef.close(this.todoForm.value as ITodoItem);
  }
}
