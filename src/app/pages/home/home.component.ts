import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ContactMeComponent } from "../../components/contact-me/contact-me.component";
import { ViewComentsComponent } from "../../components/view-coments/view-coments.component";
import { AddComentComponent } from "../../components/add-coment/add-coment.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ContactMeComponent, ViewComentsComponent, AddComentComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {



}
