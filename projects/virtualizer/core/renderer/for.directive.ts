import { AfterViewInit, ComponentFactoryResolver, Directive, Injector, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { VContext } from "../refs/context";
import { VComponent } from "./v.component";

@Directive({
  selector: '[vFor]',
})
export class VForDirective<T> implements OnInit, AfterViewInit {

  @Input('vForOf')
  public items: T[] = [];

  @Input('vForTrackBy')
  public trackByFn = null;

  public constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<VContext<T>>,
    private readonly injector: Injector,
  ) { }

  public ngOnInit(): void {
    console.log('vFor Init');
  }

  public ngAfterViewInit(): void {

  }

  public a(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(VComponent);
  }

}
