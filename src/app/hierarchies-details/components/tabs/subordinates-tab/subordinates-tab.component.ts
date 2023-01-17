import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subordinatesData, subordinatesResponseDto } from 'src/app/hierarchies-details/models/subordinatesResponseDto.model';
import { SubordinatesService } from 'src/app/hierarchies-details/services/subordinates.service';

@Component({
  selector: 'app-subordinates-tab',
  templateUrl: './subordinates-tab.component.html',
  styleUrls: ['./subordinates-tab.component.scss']
})
export class SubordinatesTabComponent implements OnInit {

  constructor(private _subordinatesService: SubordinatesService) { }

  Subordinates: subordinatesData[] = [];
  ngOnInit(): void {
    this._subordinatesService.GetSubordinates().subscribe({
        next: (res:subordinatesResponseDto) => {
         this.Subordinates = res.data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
      }})
  }

}
