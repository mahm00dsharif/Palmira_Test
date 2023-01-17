import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss']
})
export class StatisticsCardComponent {
  @Input()
  public image:string = '';

  @Input()
  public title:string = '';

  @Input()
  public count:number = 0;
}
