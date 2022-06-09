import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/Task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly httpOptions: HttpHeaders;

  private apiUrl: string;
  private http: HttpClient;

  public constructor(http: HttpClient) {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    });

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

  public updateTask(task: Task): Observable<Task> {
    const url: string = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, { headers: this.httpOptions });
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, {
      headers: this.httpOptions,
    });
  }
}
