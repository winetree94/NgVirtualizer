import { NgModule } from '@angular/core';
import { SamplesComponent } from './samples.component';
import { VirtualizerModule } from 'virtualizer/core';

@NgModule({
  declarations: [
    SamplesComponent
  ],
  imports: [
    VirtualizerModule,
  ],
  exports: [
    SamplesComponent
  ]
})
export class SamplesModule { }
