import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-errors',
  standalone: true,
  imports: [],
  templateUrl: './show-errors.component.html',
})
export class ShowErrorsComponent {

  @Input({required: true})
  err!: string | string[];


  protected get getErrors():string[]{
    if( typeof this.err === 'string' ){
      return [this.err];
    }

    return this.err;
  }

}
