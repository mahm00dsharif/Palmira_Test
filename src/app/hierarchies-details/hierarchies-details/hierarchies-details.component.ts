import { Component } from '@angular/core';

@Component({
  selector: 'app-hierarchies-details',
  templateUrl: './hierarchies-details.component.html',
  styleUrls: ['./hierarchies-details.component.scss']
})
export class HierarchiesDetailsComponent {
  public statisticsCards:any = [
    {
      image:'hierarchies',
      title:'Subordinates',
      count:22
    },
    {
      image:'goal',
      title:'Linked Objects',
      count:143
    },
    {
      image:'speedometer',
      title:'Linked KPIs',
      count:250
    },
    {
      image:'timeline',
      title:'Audit trail list',
      count:22
    }
  ];

  // public tabs:any = [
  //   {
  //     link:'info',
  //     label:'Hierarchy info'
  //   },
  //   {
  //     link:'user',
  //     label:'User defined'
  //   },
  //   {
  //     link:'responsibilities',
  //     label:'Responsibilities'
  //   },
  //   {
  //     link:'subordinates',
  //     label:'Subordinates'
  //   }
  // ]
}
