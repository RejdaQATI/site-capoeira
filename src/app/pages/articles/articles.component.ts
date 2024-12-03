import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = [
    {
      _id: '6748d8a32831eafd3fad9fb0',
      title: "C'est quoi la FSCF",
      url: 'https://www.fscf.asso.fr/histoire',
      type: 'article',
      image: 'assets/article1.jpg',
      description: 'Découvrez l’histoire de la Fédération Sportive et Culturelle de France (FSCF).'
    },
    {
      _id: '6748d801ab85103854344cc2',
      title: 'Les 6,5 mouvements que je dois maîtriser en débutant la Capoeira.',
      url: 'https://www.apprendrelacapoeira.fr/les-65-mouvements-que-je-dois-maitriser-en-debutant-la-capoeira',
      type: 'article',
      image: 'assets/article2.jpg',
      description: 'Apprenez les mouvements essentiels pour débuter en Capoeira.'
    },
    {
      _id: '6748d806eb2469e520b00148',
      title: 'Au Brésil, la capoeira est une danse de combat | Invitation au voyage | ARTE Family',
      url: 'https://www.youtube.com/watch?v=RLrS8hu8kQA',
      type: 'reportage',
      image: 'assets/article3.jpg',
      description: 'Explorez l’histoire et la pratique de la Capoeira au Brésil dans ce reportage.'
    }
  ];
}
