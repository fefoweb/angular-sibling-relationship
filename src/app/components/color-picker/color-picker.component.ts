import { Component, OnInit } from "@angular/core";
import { ColorObject } from "src/app/model/color.model";
import { IntermediaryDirective } from "../../directive/intermediary.directive";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"]
})
export class ColorPickerComponent implements OnInit {
  color$;
  objColor: ColorObject;

  constructor(public directive: IntermediaryDirective) {}

  ngOnInit() {
    this.color$ = this.directive.colorObservable$;

    this.color$.subscribe((obj) => (this.objColor = obj));
  }

  updateBackground(val) {
    this.objColor.bkg = val;
    this.objColor.bkgRGB = this.directive.hexToRgb(this.objColor.bkg);

    this.directive.updateColor(this.objColor);
  }
  updateForeground(val) {
    this.objColor.frg = val;
    this.objColor.frgRGB = this.directive.hexToRgb(this.objColor.frg);

    this.directive.updateColor(this.objColor);
  }
}
