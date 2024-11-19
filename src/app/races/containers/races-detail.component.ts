import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { take } from 'rxjs/operators';
import { Race } from '../../shared/types/races';
import { JOB_DESC_TEXT } from '../../shared/database/descriptionDataBase';
import { SkillType } from '../../shared/types/skills';
import { WeaponType } from '../../shared/types/weapons';
import { ArmorType } from '../../shared/types/armors';
import { LearningSkill } from '../../shared/types/common';
import { CalculateService } from '../../shared/calculate.service';
import { Job } from '../../shared/types/jobs';

@Component({
  selector: 'app-races-detail',
  templateUrl: './races-detail.component.html'
})
export class RacesDetailComponent implements OnInit {
  description = JOB_DESC_TEXT;
  skillType: { [key: string]: string } = SkillType;
  weaponType: { [key: string]: string } = WeaponType;
  armorType: { [key: string]: string } = ArmorType;
  race: Race;

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
        this.race = this.dataService.getOneRace(params['id']);
      });
  }

  viewSkill(skill: LearningSkill) {
    if ('size' in skill) {
      this.router.navigate([`../../abilities/${skill.id}`], { relativeTo: this.route });
    } else {
      this.router.navigate([`../../skills/${skill.id}`], { relativeTo: this.route });
    }
  }

  viewJobOrRace(item: Job | Race) {
    if ("abilityPoints" in item) {
      this.router.navigate([`../../jobs/${item.id}`], { relativeTo: this.route });
    } else {
      this.router.navigate([`../${item.id}`], { relativeTo: this.route });
      this.race = this.dataService.getOneRace(item.id);
    }
  }
}

