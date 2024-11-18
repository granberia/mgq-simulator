import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Ability, AbilityType } from '../../shared/types/abilities';
import { CalculateService } from '../../shared/calculate.service';
import { From } from '../../shared/types/common';

@Component({
  selector: 'app-abilities-detail',
  templateUrl: './abilities-detail.component.html'
})
export class AbilitiesDetailComponent implements OnInit {
  abilityType: { [key: string]: string } = AbilityType;
  ability: Ability;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe((params) => {
        this.ability = this.dataService.getOneAbilityOrSkill(params['id']) as Ability;
      });
  }

  viewFrom(from: From) {
    console.log(from);
    if (from.type === 'actor') {
      this.router.navigate([`../../actors/${from.id}`], { relativeTo: this.route });
    } else if (from.type === 'job') {
      this.router.navigate([`../../jobs/${from.id}`], { relativeTo: this.route });
    } else if (from.type === 'race') {
      this.router.navigate([`../../races/${from.id}`], { relativeTo: this.route });
    }
  }
}

