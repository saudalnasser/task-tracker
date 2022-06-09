import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() public task!: Task;
  @Output() public delete: EventEmitter<Task>;
  @Output() public toggleReminder: EventEmitter<Task>;

  protected deleteIcon: IconDefinition;

  public constructor() {
    this.delete = new EventEmitter<Task>();
    this.toggleReminder = new EventEmitter<Task>();

    this.deleteIcon = faTimes;
  }

  protected onDelete(task: Task): void {
    this.delete.emit(task);
  }

  protected onToggleReminder(task: Task): void {
    this.toggleReminder.emit(task);
  }
}
