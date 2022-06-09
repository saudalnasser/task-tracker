import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  public text!: string;
  public day!: string;
  public reminder: boolean = false;
  @Output() public addTask: EventEmitter<Task> = new EventEmitter();

  public onSubmit(): void {
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
