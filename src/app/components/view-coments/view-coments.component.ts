import { Component, OnInit, signal } from '@angular/core';
import { IComent } from '../../pages/home/interfaces/IComent';
import { ComentsService } from '../../services/coments.service';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-view-coments',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './view-coments.component.html',
})
export class ViewComentsComponent {

  protected coments: IComent[] = [];
  protected isLoading = signal(true);

  constructor(
    private comentService: ComentsService,
  ){}


  get getStars():number[]{
    return Array(5).fill(0);
  }

  checkStar(coment: IComent, index: number): boolean {
    return index < coment.stars;
  }

}
