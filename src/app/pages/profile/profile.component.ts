import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  email: string = 'at.auctor@protonmail.couk';
  ecole: string = 'Leão de Capoeira';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Simuler la récupération de l'utilisateur connecté
    const userId = '6748d9e733558fcc2a8080f7'; // ID utilisateur à récupérer

    this.userService.getUserById(userId).subscribe((data) => {
      this.user = data;
    });
  }
}
