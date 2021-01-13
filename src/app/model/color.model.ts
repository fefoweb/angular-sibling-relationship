export type Nullable<T> = T | null;

export class ColorObject {
  bkg?: Nullable<string>;
  frg?: Nullable<string>;
  bkgRGB?: Nullable<Array<number>>;
  frgRGB?: Nullable<Array<number>>;
}
