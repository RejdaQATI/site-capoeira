import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../services/message.service';
import { Message } from '../../../models/message.model';

@Component({
  selector: 'app-discussion-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css']
})
export class DiscussionDetailComponent implements OnInit {
  discussionId: string | null = null;
  messages: Message[] = [];

  constructor(private route: ActivatedRoute, private messageService: MessageService) {}

  ngOnInit(): void {
    this.discussionId = this.route.snapshot.paramMap.get('id');
    if (this.discussionId) {
      this.messageService.getMessagesByDiscussionId(this.discussionId).subscribe((data) => {
        this.messages = data;
      });
    }
  }
}
