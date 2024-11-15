import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Actor } from '../../shared/types/actors';
import { BaseRace, RaceType } from '../../shared/types/races';
import { ActorComparators } from '../../shared/utils/comparator';
import { ActorNameFilter, ActorSecondaryNameFilter, ActorArtistFilter } from '../../shared/utils/filter';
import { CalculateService } from '../../shared/calculate.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
})
export class ActorsListComponent implements OnInit {
  columns: Array<keyof Actor> = ['secondaryName', 'artist', 'hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new ActorNameFilter();
  secondaryNameFilter = new ActorSecondaryNameFilter();
  artistFilter = new ActorArtistFilter(this.dataService);
  actorComparators = ActorComparators;

  actorList: Actor[];
  baseRaces: BaseRace[] = [];
  artistList: string[] = [];
  total: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in RaceType) {
      this.baseRaces.push(RaceType[key]);
    }
    const data = this.dataService.getAllActors();
    this.actorList = data.actors;
    this.artistList = Array.from(new Set(data.actors.map(item => item.artist)));
    this.total = data.total;
  }

  viewDetail(actor: Actor) {
    this.router.navigate([`./${actor.id}`], { relativeTo: this.route });
  }

  addFilter(item: BaseRace) {
    if (this.dataService.actorRaceFilter.includes(item)) {
      this.dataService.actorRaceFilter.splice(this.dataService.actorRaceFilter.indexOf(item), 1);
    } else {
      this.dataService.actorRaceFilter.push(item);
    }
    this.actorList = this.dataService.getAllActors().actors;
  }

}


