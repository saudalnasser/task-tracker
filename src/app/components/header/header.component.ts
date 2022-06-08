import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public title: string = 'Task Tracker';

  public onAddButtonClick(): void {
    console.log('click!');
  }
}
