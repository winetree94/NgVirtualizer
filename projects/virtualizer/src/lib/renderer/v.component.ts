import { Component, HostBinding, Inject, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { VContext, V_CONTEXT } from "../refs/context";
import { V_TEMPLATE } from "../refs/template";

@Component({
  selector: 'v',
  template: '',
  styles: ['']
})
export class VComponent<T> implements OnInit {

  direction: string = 'vertical';
  @HostBinding('style.top')
  position: number = 0;
  size: number = 0;

  public constructor(
    @Inject(V_TEMPLATE)
    private readonly templateRef: TemplateRef<VContext<T>>,
    @Inject(V_CONTEXT)
    private readonly context: VContext<T>,
    private readonly viewContainerRef: ViewContainerRef,
  ) { }

  public ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
  }

}
