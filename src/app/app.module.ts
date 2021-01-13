import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ColorBkgComponent } from "./components/color-bkg/color-bkg.component";
import { ColorPickerComponent } from "./components/color-picker/color-picker.component";

import { IntermediaryDirective } from "./directive/intermediary.directive";

@NgModule({
  declarations: [
    AppComponent,
    ColorBkgComponent,
    ColorPickerComponent,
    IntermediaryDirective
  ],
  imports: [BrowserModule],
  providers: [IntermediaryDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
