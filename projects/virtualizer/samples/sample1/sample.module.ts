import { NgModule } from "@angular/core";
import { VirtualizerModule } from "virtualizer/core";
import { SampleComponent } from "./sample.component";
import { SampleService } from "./sample.service";

@NgModule({
  imports: [
    VirtualizerModule,
  ],
  declarations: [
    SampleComponent,
  ],
  providers: [
    SampleService,
  ],
})
export class SampleModule { }
