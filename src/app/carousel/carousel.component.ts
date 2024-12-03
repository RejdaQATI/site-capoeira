import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  // Liste des actualités
  articles = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tempus magna.',
      author: 'Rejda Q.',
      date: '15 novembre 2024',
      image: 'photo1.png',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tempus magna.',
      author: 'Rejda Q.',
      date: '15 novembre 2024',
      image: 'photo2.png',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tempus magna.',
      author: 'Rejda Q.',
      date: '15 novembre 2024',
      image: 'photo3.png',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tempus magna.',
      author: 'Rejda Q.',
      date: '15 novembre 2024',
      image: 'photo2.png',
    },
  ];

  // Indice du premier article visible
  currentIndex = 0;

  // Avancer vers la diapositive suivante
  nextSlide(): void {
    if (this.currentIndex < this.articles.length - 3) {
      this.currentIndex++;
    }
  }

  // Reculer vers la diapositive précédente
  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Obtenir les articles visibles
  getVisibleArticles() {
    return this.articles.slice(this.currentIndex, this.currentIndex + 3);
  }
}
