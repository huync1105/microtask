import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeHeaderComponent } from './time-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeHeaderComponent],
  exports: [TimeHeaderComponent],
})
export class TodoFeatureWidgetModule {}
