import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appVisible]',
  standalone: true
})
export class ViewElementDirective implements OnInit, OnDestroy {

  @Output()
  public visible = new EventEmitter<void>();
  @Input()
  public isObserverForever = false;

  private observer!: IntersectionObserver;


  constructor(
    private element:ElementRef,
  ){}


  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach( e => {
        if( e.isIntersecting ){
          this.visible.emit();
          if( !this.isObserverForever ){
            this.observer.disconnect();
          }
        }
      });
    });

    this.observer.observe(this.element.nativeElement);
  }


}
