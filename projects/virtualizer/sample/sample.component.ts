import { Component } from "@angular/core";
import { SampleService } from "./sample.service";

@Component({
  selector: 'sample',
  template: `
    <div>hello world!</div>
  `
})
export class SampleComponent {
  public constructor(
    private readonly sampleService: SampleService,
  ) { }
}
