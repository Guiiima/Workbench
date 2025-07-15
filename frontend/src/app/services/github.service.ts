
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/github/repos';
  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.apiUrl);
  }
}