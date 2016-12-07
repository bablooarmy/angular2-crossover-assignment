import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics-arrow',
  templateUrl: './metrics-arrow.component.html',
  styleUrls: ['./metrics-arrow.component.css']
})
export class MetricsArrowComponent implements OnInit {
  @Input('width') width: number = 100;
  @Input('height') height: number = 100;
  @Input('rotation') rotation: string = "upward";
  @Input('textToShow') textToShow: string = "";
  @Input('font') font: string = "10px verdana";
  @Input('fontColor') fontColor: string = "#FFFFFF";
  @Input('fillColor') fillColor: string = "#548039";
  @Input('strokeColor') strokeColor: string = "#548039";

  @ViewChild('myCanvas') arrowCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() { // wait for the view to init before using the element

      let ctx: CanvasRenderingContext2D = this.arrowCanvas.nativeElement.getContext("2d");
      let xMove: number = 0;
      let yMove: number = 0;
      let rotationAngle: number = 0;
      switch(this.rotation){
        case "upward":
          xMove = 0;
          yMove = 0;
          rotationAngle = 0;
          break;
        case "forward":
          xMove = this.width;
          yMove = 0;
          rotationAngle = 90;
          break;
        case "downward":
          xMove = this.width;
          yMove = this.height;
          rotationAngle = 180;
          break;
        case "back":
          xMove = 0;
          yMove = this.height;
          rotationAngle = 270;
          break;
        default:
          xMove = 0;
          yMove = 0;
          rotationAngle = 0;
          break;
      }
      //arrow
      ctx.setTransform(1, 0, 0, 1, xMove, yMove);
      ctx.rotate(rotationAngle*Math.PI/180);
      ctx.beginPath();
      ctx.moveTo(this.width/2, 0);
      ctx.lineTo(0, this.height/2);
      ctx.lineTo(this.width/4, this.height/2);
      ctx.lineTo(this.width/4, this.height);
      ctx.lineTo((this.width/4)*3, this.height);
      ctx.lineTo((this.width/4)*3, this.height/2);
      ctx.lineTo(this.width, this.height/2);
      ctx.lineTo(this.width/2, 0);
      ctx.fillStyle = this.fillColor;
      ctx.fill();
      ctx.strokeStyle = this.strokeColor;
      ctx.stroke();

      //text
      ctx.font = this.font;
      ctx.setTransform(1,0,0,1,0,0);
      ctx.fillStyle = this.fontColor;
      ctx.textAlign="center";
      ctx.fillText(this.textToShow, this.width/2, (this.height/2)+5);
  }


}
