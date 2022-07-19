import { Component } from "@angular/core";
import { SampleService } from "./sample.service";

export interface SampleModel {
  key: string;
}

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent {

  public data = [{
    key: '1'
  }, {
    key: '2',
  }, {
    key: '3',
  }, {
    key: '4',
  }, {
    key: '5',
  }];

  public constructor(
    private readonly sampleService: SampleService,
  ) { }
}
