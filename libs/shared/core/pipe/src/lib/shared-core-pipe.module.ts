import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTaskPipe } from './filter-task.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterTaskPipe],
  exports: [FilterTaskPipe]
})
export class SharedCorePipeModule {}
