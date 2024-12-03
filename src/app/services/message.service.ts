import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/messages'; 

  constructor(private http: HttpClient) {}

  getMessagesByDiscussionId(discussionId: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}?discussion_id=${discussionId}`);
  }
  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
