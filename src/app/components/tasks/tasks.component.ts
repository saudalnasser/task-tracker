import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];
  private taskService: TaskService;

  public constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]): void => {
      this.tasks = tasks;
    });
  }

  public onDelete(task: Task): void {
    this.taskService.deleteTask(task).subscribe((): void => {
      this.tasks = this.tasks.filter((t: Task): boolean => t.id !== task.id);
    });
  }
}
