import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string;
  private http: HttpClient;

  public constructor(http: HttpClient) {
    this.apiUrl = `${environment.apiBaseUrl}/tasks`;
    this.http = http;
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  public deleteTask(task: Task): Observable<Task> {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
