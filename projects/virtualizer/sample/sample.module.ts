import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample.component";
import { SampleService } from "./sample.service";

@NgModule({
  declarations: [
    SampleComponent,
  ],
  providers: [
    SampleService,
  ],
})
export class SampleModule { }
