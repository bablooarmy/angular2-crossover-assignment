import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics-pie-chart',
  templateUrl: './metrics-pie-chart.component.html',
  styleUrls: ['./metrics-pie-chart.component.css']
})
export class MetricsPieChartComponent implements OnInit {
  @Input('width') width: number = 100;
  @Input('height') height: number = 100;
  @Input('data') data = [270, 90];
  @Input('labels') labels = ['75%', '25%'];
  @Input('colors') colors = ["#FFDAB9", "#E6E6FA"];
  @Input('strokeColors') strokeColors = ["#CACACF", "#CACACF"];

  @ViewChild('myCanvas') pieCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  drawSegment(canvas, context, i) {
      context.save();
      let centerX:number = Math.floor(canvas.width / 2);
      let centerY:number = Math.floor(canvas.height / 2);
      let radius:number = Math.floor(canvas.width / 2);

      let startingAngle:number = this.degreesToRadians(this.sumTo(this.data, i));
      let arcSize:number = this.degreesToRadians(this.data[i]);
      let endingAngle:number = startingAngle + arcSize;

      context.beginPath();
      context.lineWidth = 2;
      context.moveTo(centerX, centerY);
      context.arc(centerX, centerY, radius,
                  startingAngle, endingAngle, false);
      context.closePath();

      context.strokeStyle = this.strokeColors[i];
      context.stroke();

      context.fillStyle = this.colors[i];
      context.fill();

      context.restore();
  }

  drawSegmentLabel(canvas, context, i) {
     context.save();
     let x:number = Math.floor(canvas.width / 2);
     let y:number = Math.floor(canvas.height / 2);
     let angle:number = this.degreesToRadians(this.sumTo(this.data, i));

     context.translate(x, y);
     context.rotate(angle);
     let dx:number = Math.floor(canvas.width * 0.5) - 20;
     let dy:number = Math.floor(canvas.height * 0.05) + 10;

     context.textAlign = "center";
     let fontSize:number = Math.floor(canvas.height / 10);
     context.font = fontSize + "px Verdana";

     context.fillText(this.labels[i], dx, dy);

     context.restore();
  }

  degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
  }

  sumTo(a, i) {
    let sum:number = 0;
    let j:number = 0;
    for (j = 0; j < i; j++) {
      sum += a[j];
    }
    return sum;
  }

  ngAfterViewInit() { // wait for the view to init before using the element

      let ctx: CanvasRenderingContext2D = this.pieCanvas.nativeElement.getContext("2d");
      let canvas = this.pieCanvas.nativeElement;
      let i:number = 0;
      let j:number = 0;
      for (i = 0; i < this.data.length; i++) {
        for (j = 0; j < this.degreesToRadians(this.data[i])/10; j++) {
          this.drawSegment(canvas, ctx, i);
        }
        this.drawSegmentLabel(canvas, ctx, i);
      }
  }


}
