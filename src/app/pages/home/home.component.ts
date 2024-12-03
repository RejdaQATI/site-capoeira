import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from "../../carousel/carousel.component";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { School } from '../../models/school.model';
import { SchoolsService } from '../../services/schools.service';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  schools: School[] = [];

  constructor(private schoolsService: SchoolsService) {}

  ngOnInit(): void {
    this.schoolsService.getSchools().subscribe((data: School[]) => {
      this.schools = data;
      var map = L.map('map').setView([47.13, 2.5], 5);
      
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);
      console.log(this.schools);
      
      this.schools.forEach(school => {
        L.marker([school.location.geo.coordinates[0], school.location.geo.coordinates[1]]).addTo(map)
        .bindPopup(`<b>${school.name}</b><br>${school.location.address.street}<br>${school.location.address.city}, ${school.location.address.zipcode}`)
        .openPopup();
    });
    });
  }

}
