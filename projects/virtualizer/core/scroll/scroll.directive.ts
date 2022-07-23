import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { fromEvent, SubscriptionLike } from "rxjs";
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[vScroll]'
})
export class VScrollDirective implements OnInit, AfterViewInit, OnDestroy {

  private readonly _subscriptions: SubscriptionLike[] = [];

  public constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
  ) { }

  public ngOnInit(): void {
    this._subscriptions.push(
      fromEvent(this.elementRef.nativeElement, 'scroll').pipe(
        tap((e) => {
          console.log(e);
        })
      ).subscribe(),
    )
  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
