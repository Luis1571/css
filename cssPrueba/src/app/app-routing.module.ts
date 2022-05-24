import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BotonesHoverComponent } from "./diseños/botones-hover/botones-hover.component";
import { DivRedondeadoComponent } from "./diseños/div-redondeado/div-redondeado.component";
import { FocusComponent } from "./diseños/focus/focus.component";

import { FormTransparenteComponent } from "./diseños/FormTransparente/FormTransparente.component";
import { IconoBuscarComponent } from "./diseños/icono-buscar/icono-buscar.component";
import { ImgCarruselComponent } from "./diseños/img-carrusel/img-carrusel.component";
import { LetraTransparenteVideoComponent } from "./diseños/letra-transparente-video/letra-transparente-video.component";
import { LetrasExpandidasComponent } from "./diseños/letras-expandidas/letras-expandidas.component";
import { MenuLetrasGrandesComponent } from "./diseños/menu-letras-grandes/menu-letras-grandes.component";
import { TabSectionComponent } from "./diseños/tab-section/tab-section.component";
import { TextImgComponent } from "./diseños/text-img/text-img.component";
import { TextTrasparenteImgComponent } from "./diseños/text-trasparente-img/text-trasparente-img.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "FormularioTransparente",
    component: FormTransparenteComponent,
  },
  {
    path: "BotonesHover",
    component: BotonesHoverComponent,
  },
  {
    path: "divRedondo",
    component: DivRedondeadoComponent,
  },
  {
    path: "letrasExpandidas",
    component: LetrasExpandidasComponent,
  },
  {
    path: "focus",
    component: FocusComponent,
  },
  {
    path: "iconoBusqueda",
    component: IconoBuscarComponent,
  },
  {
    path: "imgCarrusel",
    component: ImgCarruselComponent,
  },
  {
    path: "menuLetrasGrandes",
    component: MenuLetrasGrandesComponent,
  },
  {
    path: "tabSection",
    component: TabSectionComponent,
  },
  {
    path: "textImg",
    component: TextImgComponent,
  },
  {
    path: "textVideo",
    component: LetraTransparenteVideoComponent,
  },
  {
    path: "textTransImg",
    component: TextTrasparenteImgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
