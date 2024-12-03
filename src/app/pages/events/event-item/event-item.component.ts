import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './event-item.component.html',
})
export class EventItemComponent {
  @Input() event!: Event;
}
