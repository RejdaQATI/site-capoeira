import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventItemComponent } from './event-item/event-item.component';
import { EventService } from '../../services/event.service';
import { RouterModule } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-events',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    EventItemComponent 
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[] = []; 

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      this.events = data;
    });
  }
}
