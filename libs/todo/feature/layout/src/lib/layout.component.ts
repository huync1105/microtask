import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ITodoItem } from '@mfeng/shared/core/interface';
import { AddTodoDialogComponent } from '@mfeng/todo/feature/dialog';
import { Subject, takeUntil } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'mfeng-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  currentTabIndex = 0;
  tasks: ITodoItem[] = [
    {
      title: 'Title 1',
      description: 'This is a very long description...',
      isDone: false,
      id: ''
    },
    {
      title: 'Title 1',
      description: 'This is a very long description...',
      isDone: false,
      id: ''
    },
    {
      title: 'Title 1',
      description: 'This is a very long description...',
      isDone: false,
      id: ''
    },
  ];
  destroy$ = new Subject<void>()

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.tasks.forEach(task => task.id = uuidv4());
  }

  onChangeTab(event: MatTabChangeEvent) {
    this.currentTabIndex = event.index;
  }

  doneTask(id: string) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id) {
        task.isDone = true;
      };
      return task;
    })
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  openAddDialog() {
    const dialog = this.dialog.open(AddTodoDialogComponent);
    dialog.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: ITodoItem) => {
        if (res) {
          this.tasks = [...this.tasks, res];
          console.log("this.tasks", this.tasks)
        }
      })
  }
}
