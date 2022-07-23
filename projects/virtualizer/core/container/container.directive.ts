import { Directive, OnInit } from "@angular/core";
import { VScrollDirective } from "../scroll/scroll.directive";

@Directive({
  selector: 'vContainer',
})
export class VContainerDirective implements OnInit {

  public constructor(
    private readonly scroll: VScrollDirective,
  ) { }

  public ngOnInit(): void {

  }

}
