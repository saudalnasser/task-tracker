import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private addTaskToggleValue: boolean;
  private subject: Subject<any>;

  public constructor() {
    this.addTaskToggleValue = false;
    this.subject = new Subject();
  }

  public toggleAddTask(): void {
    this.addTaskToggleValue = !this.addTaskToggleValue;
    this.subject.next(this.addTaskToggleValue);
  }

  public onAddTaskToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
