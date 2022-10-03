import { NgModule } from "@angular/core";
import { BasicComponent } from "./basic.component";

@NgModule({
  declarations: [
    BasicComponent,
  ],
  exports: [
    BasicComponent,
  ],
})
export class BasicModule { }
