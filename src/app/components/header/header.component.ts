import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  protected title: string;
  protected showAddTask: boolean;
  private uiService: UiService;

  public constructor(uiService: UiService) {
    this.title = 'Task Tracker';
    this.showAddTask = false;
    this.uiService = uiService;

    this.uiService.onAddTaskToggle().subscribe((value: boolean): void => {
      this.showAddTask = value;
    });
  }

  protected onAddTaskButtonClick(): void {
    this.uiService.toggleAddTask();
  }
}
