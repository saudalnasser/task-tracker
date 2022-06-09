import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  public deleteIcon: IconDefinition = faTimes;
  @Input() public task!: Task;
  @Output() public delete: EventEmitter<Task> = new EventEmitter();

  public onDelete(task: Task): void {
    this.delete.emit(task);
  }
}
