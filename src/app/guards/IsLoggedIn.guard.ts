import { Injectable } from "@angular/core";
import * as router from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class IsLoggedInGuard implements router.CanActivate {
    constructor(private authService: AuthenticationService, private router: router.Router) { }

    canActivate(route: router.ActivatedRouteSnapshot, state: router.RouterStateSnapshot):
        boolean | router.UrlTree | Observable<boolean | router.UrlTree> | Promise<boolean | router.UrlTree> {
        return this.authService.IsLoggedIn$().pipe(
            tap((IsLoggedIn) => {
                console.log('is logged in',IsLoggedIn);
                return !IsLoggedIn && this.router.navigate(['authentication/login'])
            })
        );
    }
}