import { InjectionToken } from "@angular/core";

export const V_CONTEXT = new InjectionToken<VContext>('')

export interface VContext<T = any> {
  data: T;
}
