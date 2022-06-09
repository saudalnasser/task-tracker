import { UiService } from './../../services/ui.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() public addTask: EventEmitter<Task>;

  protected text: string;
  protected day: string;
  protected reminder: boolean;
  protected showAddTask: boolean;
  private uiService: UiService;

  public constructor(uiService: UiService) {
    this.addTask = new EventEmitter();

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.showAddTask = false;
    this.uiService = uiService;

    this.uiService.onAddTaskToggle().subscribe((value: boolean): void => {
      this.showAddTask = value;
    });
  }

  protected onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTask.emit(newTask);

    this.resetForm();
  }

  private resetForm(): void {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
