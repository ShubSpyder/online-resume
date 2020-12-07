import { Component, OnInit } from '@angular/core';
import { resData } from './resume-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  data = resData;
  constructor() {}

  ngOnInit(): void {}
}
