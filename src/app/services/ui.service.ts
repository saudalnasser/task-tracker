import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private addTaskToggleValue: boolean = false;
  private subject: Subject<any> = new Subject();

  public toggleAddTask(): void {
    this.addTaskToggleValue = !this.addTaskToggleValue;
    this.subject.next(this.addTaskToggleValue);
  }

  public onAddTaskToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
