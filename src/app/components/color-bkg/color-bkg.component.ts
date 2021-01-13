import { Component, OnInit } from "@angular/core";
import { IntermediaryDirective } from "../../directive/intermediary.directive";

@Component({
  selector: "app-color-bkg",
  templateUrl: "./color-bkg.component.html",
  styleUrls: ["./color-bkg.component.scss"]
})
export class ColorBkgComponent implements OnInit {
  color$;

  constructor(public directive: IntermediaryDirective) {}

  ngOnInit() {
    this.color$ = this.directive.colorObservable$;
  }
}
