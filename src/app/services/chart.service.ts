import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  prepareForBarChart(data) {
    console.log(data)
  }
}
