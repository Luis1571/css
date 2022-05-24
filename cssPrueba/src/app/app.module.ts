import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BotonesHoverComponent } from "./diseños/botones-hover/botones-hover.component";
import { FormTransparenteComponent } from "./diseños/FormTransparente/FormTransparente.component";
import { HomeComponent } from "./home/home.component";
import { DivRedondeadoComponent } from './diseños/div-redondeado/div-redondeado.component';
import { LetrasExpandidasComponent } from './diseños/letras-expandidas/letras-expandidas.component';
import { FocusComponent } from './diseños/focus/focus.component';
import { IconoBuscarComponent } from './diseños/icono-buscar/icono-buscar.component';
import { ImgCarruselComponent } from './diseños/img-carrusel/img-carrusel.component';
import { MenuLetrasGrandesComponent } from './diseños/menu-letras-grandes/menu-letras-grandes.component';
import { TabSectionComponent } from './diseños/tab-section/tab-section.component';
import { TextImgComponent } from './diseños/text-img/text-img.component';
import { LetraTransparenteVideoComponent } from './diseños/letra-transparente-video/letra-transparente-video.component';
import { TextTrasparenteImgComponent } from './diseños/text-trasparente-img/text-trasparente-img.component';

//import { FormTransparente } from "../app/diseños/FormTransparente/FormTransparente.component";

@NgModule({
  declarations: [
    AppComponent,
    FormTransparenteComponent,
    HomeComponent,
    BotonesHoverComponent,
    DivRedondeadoComponent,
    LetrasExpandidasComponent,
    FocusComponent,
    IconoBuscarComponent,
    ImgCarruselComponent,
    MenuLetrasGrandesComponent,
    TabSectionComponent,
    TextImgComponent,
    LetraTransparenteVideoComponent,
    TextTrasparenteImgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
