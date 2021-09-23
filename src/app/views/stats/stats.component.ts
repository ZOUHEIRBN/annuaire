import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  data = [
    {data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A'},
    {data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
