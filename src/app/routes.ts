import { async } from "@angular/core/testing";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./authentication/components/login/login.component";
import { IsLoggedInGuard } from "./guards/IsLoggedIn.guard";


export const routes: Routes = [
    {
        path:'',
        component:AppComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'HierarchiesDetails',
        loadChildren: async () => (await import('./hierarchies-details/hierarchies-details-routing.module')).HierarchiesDetailsRoutingModule,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'authentication',
        loadChildren: async () => (await import('./authentication/authentication-routing.module')).AuthenticationRoutingModule
    }
]