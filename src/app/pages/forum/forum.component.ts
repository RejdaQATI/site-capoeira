import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { DiscussionService } from '../../services/discussion.service';
import { Discussion } from '../../models/discussion.model';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  discussions: Discussion[] = [];

  constructor(private discussionService: DiscussionService) {}

  ngOnInit(): void {
    this.discussionService.getDiscussions().subscribe((data) => {
      this.discussions = data;
    });
  }
}
