import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Ability } from '../../shared/types/abilities';

@Component({
  selector: 'app-abilities-detail',
  templateUrl: './abilities-detail.component.html'
})
export class AbilitiesDetailComponent implements OnInit {
  ability: Ability;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe((params) => {
        this.ability = this.dataService.getOneAbilityOrSkill(params['id']) as Ability;
      });
  }
}

