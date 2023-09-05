import { Pipe, PipeTransform } from '@angular/core';
import { ITodoItem } from '@mfeng/shared/core/interface';

@Pipe({
  name: 'filterTask',
})
export class FilterTaskPipe implements PipeTransform {
  transform(array: ITodoItem[] = [], index: number): ITodoItem[] {
    if (index === 0) {
      return array;
    } else if (index === 1) {
      return array.filter(item => !item.isDone);
    } else {
      return array.filter(item => item.isDone)
    }
  }
}
