import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps-timeline',
  templateUrl: './steps-timeline.component.html',
  styleUrls: ['./steps-timeline.component.css']
})
export class StepsTimelineComponent implements OnInit {

  constructor() { }

  @Input() steps: any;

  ngOnInit(): void {
  }

}
