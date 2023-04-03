import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  year: number | undefined;

  @Output() yearChange = new EventEmitter<number>();

  constructor() { }

  onYearChange(): void {
    this.yearChange.emit(this.year);
  }
}