import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ViewComentsComponent } from "../../components/view-coments/view-coments.component";
import { AddComentComponent } from "../../components/add-coment/add-coment.component";
import { RatingComponent } from "../../components/rating/rating.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ViewComentsComponent, AddComentComponent, RatingComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {



}
