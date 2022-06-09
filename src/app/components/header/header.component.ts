import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public title: string = 'Task Tracker';
  public showAddTask: boolean;
  private uiService: UiService;

  public constructor(uiService: UiService) {
    this.uiService = uiService;
    this.showAddTask = false;
    this.uiService.onAddTaskToggle().subscribe((value: boolean): void => {
      this.showAddTask = value;
    });
  }

  public onAddTaskButtonClick(): void {
    this.uiService.toggleAddTask();
  }
}
