import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthRequestDto } from "./models/authRequestDto.model";
import { AuthResponseDto } from "./models/authResponseDto.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private readonly envUrl = environment.apiUrl + '/login.php';
    constructor(private jwtHelper: JwtHelperService,private http:HttpClient) {

    }

    Login(body: AuthRequestDto):Observable<AuthResponseDto>{
        console.log(this.envUrl)
        return this.http.post<AuthResponseDto>(this.envUrl, body,{headers :{  "Access-Control-Allow-Origin":"http://194.163.169.47:5000"}});
    }

    public getToken(): any {
        return localStorage.getItem('access_token');
    }

    IsLoggedIn$(): Observable<boolean> {
        const token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return of(this.jwtHelper.isTokenExpired(null, token));
    }
}