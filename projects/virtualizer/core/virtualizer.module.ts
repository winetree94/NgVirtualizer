import { NgModule } from '@angular/core';
import { VContainerDirective } from './container/container.directive';
import { VForDirective } from './renderer/for.directive';
import { VItemDirective } from './renderer/item.directive';
import { VScrollDirective } from './scroll/scroll.directive';

@NgModule({
  imports: [],
  declarations: [
    VScrollDirective,
    VContainerDirective,
    VForDirective,
    VItemDirective,
  ],
  exports: [
    VScrollDirective,
    VContainerDirective,
    VForDirective,
    VItemDirective,
  ]
})
export class VirtualizerModule { }
