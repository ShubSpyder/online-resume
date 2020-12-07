import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() data;
  tlData: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.tlData = this.data.content;
    console.log(this.tlData);
  }
}
