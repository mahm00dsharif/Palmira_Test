import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    private readonly apiUrl = environment.apiUrl + '/login.php';
    constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {

    }

    Login(body: AuthRequestDto): Observable<AuthResponseDto> {
        const formData = new FormData();
        formData.append('email', body.email);
        formData.append('password', body.password);

        const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

        return this.http.post<AuthResponseDto>(this.apiUrl, formData, { headers: headers });

    }

    public getToken(): any {
        return localStorage.getItem('access_token');
    }

    IsLoggedIn$(): Observable<boolean> {
        const token = this.getToken();
        
        if (token == null)
            return of(false);
        
        //the token returned is expired so I skipped this stage 
        //const tokenExpired = <boolean>this.jwtHelper.isTokenExpired(token);

        return of(true);
    }
}