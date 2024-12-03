import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css']
})
export class DiscussionDetailComponent implements OnInit {
  messages: Message[] = [];
  discussionId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.discussionId = this.route.snapshot.paramMap.get('id');

    if (this.discussionId) {
      this.messageService.getMessagesByDiscussion(this.discussionId).subscribe((data) => {
        this.messages = data;
      });
    }
  }
}
