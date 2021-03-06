import { Task } from './../../models/Task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  protected tasks: Task[];
  private taskService: TaskService;

  public constructor(taskService: TaskService) {
    this.tasks = [];
    this.taskService = taskService;
  }

  public ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]): void => {
      this.tasks = tasks;
    });
  }

  protected onDelete(task: Task): void {
    this.taskService.deleteTask(task).subscribe((): void => {
      this.tasks = this.tasks.filter((t: Task): boolean => t.id !== task.id);
    });
  }

  protected onToggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  protected onAddTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task: Task): void => {
      this.tasks.push(task);
    });
  }
}
