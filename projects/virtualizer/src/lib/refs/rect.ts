export interface VRect {
  position: number;
  size: number;
}

export type RectBy<T> = (
  previous: VRect,
  item: T,
  index: number,
  self: T[],
) => VRect;
