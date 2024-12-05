import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Discussion } from '../models/discussion.model';

@Injectable({
  providedIn: 'root',
})
export class DiscussionService {
  private apiUrl = 'http://localhost:3000/discussions'; 

  constructor(private http: HttpClient) {}

  getDiscussions(): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(this.apiUrl);
  }

  getDiscussionById(id: string): Observable<Discussion> {
    return this.http.get<Discussion>(`${this.apiUrl}/${id}`);
  }

  addDiscussion(discussion: Discussion): Observable<Discussion> {
    return this.http.post<Discussion>(this.apiUrl, discussion);
  }
  updateDiscussion(id: string, discussion: Discussion): Observable<Discussion> {
    return this.http.put<Discussion>(`${this.apiUrl}/${id}`, discussion);
  }

  deleteDiscussion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
