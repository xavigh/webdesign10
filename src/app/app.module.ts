import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";

//Routes
import { APP_ROUTING } from "./app-routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProyectosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
