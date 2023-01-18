import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseDto } from '../../models/authResponseDto.model';
import { AuthRequestDto } from '../../models/authRequestDto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HierarchiesDetailsModule } from 'src/app/hierarchies-details/hierarchies-details.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private returnUrl!: string;

  loginForm!: FormGroup;
  errorMessage: string = '';
  showError!: boolean;

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser = (loginFormValue: any) => {
    this.showError = false;
    const login = { ...loginFormValue };

    const userForAuth: AuthRequestDto = {
      email: login.username,
      password: login.password
    }
    // localStorage.setItem('access_token','eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1MWRkMzhiZS1hMzI1LTQ3MGQtYjZkZi0yOWVhNzJjM2VlMTkiLCJqdGkiOiIxNzcyZDA4NDkwMjFmZTE3MzYwZTliNDc5YmEzMzM4NzY1MTIwOGRkYmVkZjZlZWE0YjgwYjhiZTkxNmQ0ZGQ5NTVmOWY3ODBhMjk0ODY0NiIsImlhdCI6MTY3MzIwMzQzOC41NDU2MjUsIm5iZiI6MTY3MzIwMzQzOC41NDU2MjYsImV4cCI6NDgyODg3NzAzOC41NDI1NzksInN1YiI6IjY4MzI5NSIsInNjb3BlcyI6W119.Yi_ZLLkH6OqASR1J8-JOzLu2qVerQWNmMlw4xKnBK6ntF1Z6aZuzJMWoVdLRjKyg0AqiA-IVeDjS29Mu7IR1YSYO346hEMD2lLXk6WuHQJ26zZkAZTeTQV3aWt9U9fyIdkw5rxe7VOqVgbW6eWZJaGapt_HV8MEZ81x1NwtOE2Qi4bjJGbBtnRMZqSHviRki52UeKONxXyQothuubko7IUjDK5d2rOZXQ9ar9NgQcmMJV2UZ9hKLi7s1rwKCBPHorDxfld0xinHOduYOeexWP6QiSFQpkppIkr2dyR1HbtAWzlYSXFGmsPlygU-5mtbp2V_QS_F6JwqbfZph402pOq7eY8EMEEWkCdlfLIrtjyXhTCcoeuqfzcxtt3lIafdQ73tOtlm5WGnausLvvvh7DyX72i_Bd4YNVCIKruX8sE0pM3v39jMUp_rmET6LP8oSgQZHcMyQ7oMxG1jwAJGWjS0yt0mDtX_woXQXIRrCQ9rP_mJRaAhR4xFCaosfR7pUeki-ajosV3ngCG99RmvPjXYvrbordQRQtVNlPBImdzlkC9ul4piFHHyfxdKAckQMdEOTF1U6fZgq2JTPTrOwiK_GocCix1RZmxjHSI15x25x2feU_w04juMK_jr8WzjXXY5NDMHb5Foilm5FxSxB4ogDvYoySHCDtDt9OcxxY-Y')
    // 

    this.authService.Login(userForAuth)
      .subscribe({
        next: (res: AuthResponseDto) => {
          if(res.data !=null && res.data.accessToken !=null){
          localStorage.setItem("access_token", res.data.accessToken);
          this.router.navigateByUrl('/HierarchiesDetails');
          }else
          {
            this.errorMessage = 'wrong username or password';
            this.showError = true;
          }
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          this.showError = true;
        }
      })
  }
}