import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "proyectos", component: ProyectosComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
