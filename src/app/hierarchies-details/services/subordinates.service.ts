import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { subordinatesResponseDto } from '../models/subordinatesResponseDto.model';

@Injectable({
  providedIn: 'root'
})
export class SubordinatesService {

  constructor(private httpClient:HttpClient) { }

  private readonly _apiUrl = environment.apiUrl + '/subordinates.php';

  GetSubordinates():Observable<subordinatesResponseDto>{
    return this.httpClient.post<subordinatesResponseDto>(this._apiUrl,null);
  }
}
