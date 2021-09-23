import { Component, Input, OnInit } from '@angular/core';
import { get_palette, make_palette } from 'src/app/meta';

@Component({
  selector: 'bmg-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() pieChartData:any[] = [];

  chartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
    segmentShowStroke: true,
    elements: {
        arc: {
            borderWidth: .2
        }
    }
  };

    chartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    chartType:string = 'pie';
    chartLegend:boolean = true;

    chartColors:Array<any> = make_palette('pie', 'primarythirdaccent')


    ngOnInit(): void {
      console.log(this.chartColors)
      this.randomize()
    }

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


      let clone = JSON.parse(JSON.stringify(this.pieChartData));
      clone[0].data = data;
      this.pieChartData = clone;
    }

}
