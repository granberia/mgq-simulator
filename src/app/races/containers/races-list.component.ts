import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { BaseRace, Race, RaceType } from '../../shared/types/races';
import { RaceComparators } from '../../shared/utils/comparator';
import { RaceNameFilter } from '../../shared/utils/filter';

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html'
})

export class RacesListComponent implements OnInit {
  columns: Array<keyof Race> = ['hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new RaceNameFilter();
  raceComparators = RaceComparators;

  raceList: Race[];
  baseRaces: BaseRace[] = [];
  total: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    for (let key in RaceType) {
      this.baseRaces.push(RaceType[key]);
    }
    const { races, total } = this.dataService.getAllRaces();
    this.raceList = races;
    this.total = total;
  }

  viewDetail(race: Race) {
    this.router.navigate([`./${race.id}`], { relativeTo: this.route });
  }

  addFilter(item: BaseRace) {
    if (this.dataService.raceFilter.includes(item)) {
      this.dataService.raceFilter.splice(this.dataService.raceFilter.indexOf(item), 1);
    } else {
      this.dataService.raceFilter.push(item);
    }
    this.raceList = this.dataService.getAllRaces().races;
  }

}


