import { Component, OnInit, Input } from '@angular/core';
import { Ability } from '../../shared/types/abilities';
import { AbilityType } from '../../shared/types/abilities';
import { CalculateService } from '../../shared/calculate.service';

@Component({
  selector: 'app-ability-view',
  templateUrl: './ability-view.component.html'
})
export class AbilityViewComponent implements OnInit {
  @Input() ability: Ability;
  abilityType: { [key: string]: string } = AbilityType;

  constructor(
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
  }
}
