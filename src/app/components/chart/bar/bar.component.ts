import { Component, Input, OnInit } from '@angular/core';
import { get_default_palette, get_palette, make_palette } from 'src/app/meta';

@Component({
  selector: 'bmg-bar-chart',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() barChartData:any[] = [];
  ngOnInit(): void {
    this.randomize()
  }

  chartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

    chartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    chartType:string = 'bar';
    chartLegend:boolean = true;

    chartColors:Array<any> = make_palette('bar') //get_default_palette();


    // events
    public chartClicked(e:any):void {
      // console.log(e);
    }

    public chartHovered(e:any):void {
      // console.log(e);
    }

    public randomize():void {
      let data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100)];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    }
}
