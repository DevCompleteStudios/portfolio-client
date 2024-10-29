import { Component, signal } from '@angular/core';
import { ComentsService } from '../../services/coments.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShowErrorsComponent } from "../show-errors/show-errors.component";
import { finalize } from 'rxjs';

@Component({
  selector: 'app-add-coment',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ShowErrorsComponent],
  templateUrl: './add-coment.component.html',
})
export class AddComentComponent {

  protected coment = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    content: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(10)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
  });

  protected isLoading = signal(false);
  protected error?: string | string[];


  constructor(
    private comentsService: ComentsService,
  ){}


  protected get getEmailErrors(): string | undefined{
    const field = this.coment.controls.email;

    if( field.hasError('email') ) return 'Email is not valid';
    if( field.hasError('minlength') ) return 'Email is too short';
    if( field.hasError('maxlength') ) return 'Email is too long';

    return undefined;
  }

  protected get getNameErrors(): string | undefined{
    const field = this.coment.controls.username;

    if( field.hasError('minlength') ) return 'Name is too short';
    if( field.hasError('maxlength') ) return 'Name is too long';

    return undefined;
  }

  protected get getContentErrors(): string | undefined{
    const field = this.coment.controls.content;

    if( field.hasError('minlength') ) return 'Coment is too short';
    if( field.hasError('maxlength') ) return 'Coment is too long';

    return undefined;
  }


  onSendComent(){
    if( this.coment.invalid ) return;

    const content:string = this.coment.controls.content.value!;
    const email:string = this.coment.controls.email.value!;
    const username:string = this.coment.controls.username.value!;

    this.comentsService.addComent({content, email, stars: 5, username})
      .pipe(
        finalize( () => {

        }),
      )
      .subscribe({
        next: () => {
          this.error = undefined;

          this.coment.controls.content.setValue('');
          this.coment.controls.email.setValue('');
          this.coment.controls.username.setValue('');
        },
        error: (error) => {
          if( error.error.err ){
            this.error = error.e
          } else {
            this.error = 'Unexpected error, try again later';
          };

          console.log(error);
        },
      })
  }

}
