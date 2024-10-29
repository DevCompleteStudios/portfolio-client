import { Component } from '@angular/core';
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ContactMeComponent } from "../../components/contact-me/contact-me.component";
import { ViewComentsComponent } from "../../components/view-coments/view-coments.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ContactMeComponent, ViewComentsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {



}
