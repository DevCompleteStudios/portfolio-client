import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './rating.component.html',
})
export class RatingComponent {

  protected discordUrl:string = '';
  protected youtubeUrl: string = '';
  protected instagramUrl:string = '';

}
