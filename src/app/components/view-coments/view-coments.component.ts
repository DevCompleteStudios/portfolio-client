import { Component } from '@angular/core';
import { IComent } from '../../pages/home/interfaces/IComent';

@Component({
  selector: 'app-view-coments',
  standalone: true,
  imports: [],
  templateUrl: './view-coments.component.html',
})
export class ViewComentsComponent {

  protected coments: IComent[] = [
    {
      content: 'Yo he comprado varios de sus servicios y son de la mas alta calidad!',
      date: new Date(),
      id: 1,
      stars: 5,
      username: 'Panchito Perez Gonzales',
    },
    {
      content: 'Yo he comprado varios de sus servicios y son de la mas alta calidad!',
      date: new Date(),
      id: 1,
      stars: 3,
      username: 'Panchito Perez Gonzales',
    },
    {
      content: 'Yo he comprado varios de sus servicios y son de la mas alta calidad!',
      date: new Date(),
      id: 1,
      stars: 5,
      username: 'Panchito Perez Gonzales',
    },
    {
      content: 'Yo he comprado varios de sus servicios y son de la mas alta calidad!',
      date: new Date(),
      id: 1,
      stars: 3,
      username: 'Panchito Perez Gonzales',
    },
  ];


  get getStars():number[]{
    return Array(5).fill(0);
  }

  checkStar(coment: IComent, index: number): boolean {
    return index < coment.stars;
  }

}
