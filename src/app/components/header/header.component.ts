import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  protected title: string;
  protected showAddTask: boolean;
  private uiService: UiService;
  private router: Router;

  public constructor(uiService: UiService, router: Router) {
    this.title = 'Task Tracker';
    this.showAddTask = false;
    this.uiService = uiService;
    this.router = router;

    this.uiService.onAddTaskToggle().subscribe((value: boolean): void => {
      this.showAddTask = value;
    });
  }

  protected onAddTaskButtonClick(): void {
    this.uiService.toggleAddTask();
  }

  protected hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
