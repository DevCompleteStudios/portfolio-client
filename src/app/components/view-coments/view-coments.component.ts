import { Component, signal } from '@angular/core';
import { IComent } from '../../pages/home/interfaces/IComent';
import { ComentsService } from '../../services/coments.service';
import { LoadingComponent } from "../loading/loading.component";
import { ViewElementDirective } from '../../directives/view-element.directive';
import { finalize } from 'rxjs';
import { ShowErrorsComponent } from "../show-errors/show-errors.component";
import { AddComentComponent } from "../add-coment/add-coment.component";

@Component({
  selector: 'app-view-coments',
  standalone: true,
  imports: [LoadingComponent, ViewElementDirective, ShowErrorsComponent, AddComentComponent],
  templateUrl: './view-coments.component.html',
})
export class ViewComentsComponent {

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
        error: (err) => {
          this.err = 'Unexpected error, please contact support';
          console.log(err);
        }
      })
  }

  protected get findAllComents():IComent[] {
    return this.comentService.getComents;
  }

  protected formatDate(date: any){
    return new Date(date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

}
