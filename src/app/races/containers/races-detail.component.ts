import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { JOB_DESC_TEXT } from '../../shared/database/descriptionDataBase';
import { take } from 'rxjs/operators';
import { SkillType } from '../../shared/types/skills';
import { WeaponType } from '../../shared/types/weapons';
import { ArmorType } from '../../shared/types/armors';
import { Race } from '../../shared/types/races';

@Component({
  selector: 'app-races-detail',
  templateUrl: './races-detail.component.html'
})
export class RacesDetailComponent implements OnInit {
  description = JOB_DESC_TEXT;
  skillType = SkillType;
  weaponType = WeaponType;
  armorType = ArmorType;
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

