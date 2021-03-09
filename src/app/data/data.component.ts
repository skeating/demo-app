import { Component, OnInit } from '@angular/core';
import { Datapoint } from '../datapoint'
import { DATAPOINTS } from '../datapoint'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  datapoints = DATAPOINTS;
  selectedDatapoint?: Datapoint;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(datapoint: Datapoint): void {
    this.selectedDatapoint = datapoint;
  }
}
