import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})

export class MissionListComponent implements OnInit {
  launches: any[] | undefined;
  filteredLaunches: any[] | undefined;
  selectedLaunch: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v3/launches').subscribe((response: any) => {
      this.launches = response;
      this.filteredLaunches = response;
    });
  }

  filterLaunches(year: number): void {
    if (year) {
      this.filteredLaunches = this.launches!.filter((launch: any) => {
        return new Date(launch.launch_date_utc).getFullYear() === year;
      });
    } else {
      this.filteredLaunches = this.launches;
    }
  }

  onSelect(launch: any): void {
    this.selectedLaunch = launch;
    this.router.navigate(['/mission', launch.flight_number], { state: { launch }});
  }
}
