import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { take } from 'rxjs/operators';
import { Race } from '../../shared/types/races';

@Component({
  selector: 'app-races-detail',
  templateUrl: './races-detail.component.html'
})
export class RacesDetailComponent implements OnInit {
  race: Race;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe((params) => {
        this.race = this.dataService.getOneRace(params['id']);
      });
  }
}

