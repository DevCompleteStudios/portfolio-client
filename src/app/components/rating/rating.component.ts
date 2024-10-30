import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './rating.component.html',
})
export class RatingComponent {

  protected discordUrl:string = 'https://discord.gg/xDCakmb24Y';
  protected youtubeUrl: string = 'https://www.youtube.com/@DevCompleteStudios';
  protected instagramUrl:string = 'https://www.instagram.com/yael_hs5/#';

}
