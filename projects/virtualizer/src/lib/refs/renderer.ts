import { InjectionToken } from "@angular/core";
import { VRect } from "./rect";

export const V_RENDERER = new InjectionToken<VRenderer>('V_RENDERER');

export class VRenderer {

  public constructor() {

  }

  public getRect(): VRect {
    return {
      position: 0,
      size: 10,
    }
  }

  public notifySizeChanged(
    size: number,
  ): void {

  }

  public trackBy(): void {

  }

}
