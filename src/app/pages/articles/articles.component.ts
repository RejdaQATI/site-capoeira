import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = [
    {
      id: 1,
      title: "C'est quoi la FSCF",
      description: "Découvrez l’histoire de la Fédération Sportive et Culturelle de France.",
      url: 'https://www.fscf.asso.fr/histoire',
      image: 'assets/article1.jpg'
    },
    {
      id: 2,
      title: 'Les 6,5 mouvements que je dois maîtriser en débutant la Capoeira',
      description: 'Apprenez les mouvements essentiels pour débuter en Capoeira.',
      url: 'https://www.apprendrelacapoeira.fr/les-65-mouvements-que-je-dois-maitriser-en-debutant-la-capoeira',
      image: 'assets/article2.jpg'
    },
    {
      id: 3,
      title: 'Au Brésil, la capoeira est une danse de combat',
      description: 'Explorez l’histoire et la pratique de la Capoeira au Brésil.',
      url: 'https://www.youtube.com/watch?v=RLrS8hu8kQA',
      image: 'assets/article3.jpg'
    }
  ];
}
