import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mission = history.state.launch;
  }
}
