import { Component, signal } from '@angular/core';
import { IComent } from '../../pages/home/interfaces/IComent';
import { ComentsService } from '../../services/coments.service';
import { LoadingComponent } from "../loading/loading.component";
import { ViewElementDirective } from '../../directives/view-element.directive';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-view-coments',
  standalone: true,
  imports: [LoadingComponent, ViewElementDirective],
  templateUrl: './view-coments.component.html',
})
export class ViewComentsComponent {

  protected coments: IComent[] = [];
  protected isLoading = signal(true);
  protected err?: string | string[];

  constructor(
    private comentService: ComentsService,
  ){}


  get getStars():number[]{
    return Array(5).fill(0);
  }

  checkStar(coment: IComent, index: number): boolean {
    return index < coment.stars;
  }

  onViewComents(){
    this.comentService.getMoreComents()
      .pipe(
        finalize( () => this.isLoading.set(false))
      )
      .subscribe({
        next: (data) => this.coments.push(...data.data),
        error: (err) => {
          console.log('Hubo un error al mostrar los comentarios!');
          console.log(err);
        }
      })
  }

  protected formatDate(date: any){
    return new Date(date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

}
