import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Ability, AbilityType } from '../../shared/types/abilities';
import { AbilityDescFilter, AbilityNameFilter, AbilityTypeFilter } from '../../shared/utils/filter';
import { AbilityComparators } from '../../shared/utils/comparator';

@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.component.html'
})

export class AbilitiesListComponent implements OnInit {
  nameFilter = new AbilityNameFilter();
  descFilter = new AbilityDescFilter();
  typeFilter = new AbilityTypeFilter(this.dataService);
  abilityComparators = AbilityComparators;

  abilityList: Ability[];
  abilityType: { [key: string]: string } = AbilityType;
  abilityTypes: string[] = [];

  constructor(
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in AbilityType) {
      this.abilityTypes.push(AbilityType[key]);
    }
    this.abilityList = this.dataService.getAllAbilities().abilities;
  }

  viewDetail(ability: Ability) {
    // this.router.navigate([`./${ability.id}`], { relativeTo: this.route });
  }
}


