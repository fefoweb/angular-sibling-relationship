import { Directive, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ColorObject } from "../model/color.model";

@Directive({
  selector: "[appParent]"
})
export class IntermediaryDirective {
  private colorBS = new BehaviorSubject({});
  public colorObservable$ = this.colorBS.asObservable();

  constructor() {
    //default
    const def = new ColorObject();
    def.bkg = "#D1DB44";
    def.frg = "#8B0000";
    def.bkgRGB = this.hexToRgb(def.bkg);
    def.frgRGB = this.hexToRgb(def.frg);

    this.updateColor(def);
  }

  updateColor(color: ColorObject) {
    this.colorBS.next(color);
  }

  hexToRgb = (hex: string) =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16));


}
