import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
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
  ];

  currentIndex = 0;

  nextSlide(): void {
    if (this.currentIndex < this.articles.length - 3) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  getVisibleArticles() {
    return this.articles.slice(this.currentIndex, this.currentIndex + 3);
  }
}
