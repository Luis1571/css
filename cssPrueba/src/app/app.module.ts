import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormTransparenteComponent } from "./diseños/FormTransparente/FormTransparente.component";
//import { FormTransparente } from "../app/diseños/FormTransparente/FormTransparente.component";

@NgModule({
  declarations: [AppComponent, FormTransparenteComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
