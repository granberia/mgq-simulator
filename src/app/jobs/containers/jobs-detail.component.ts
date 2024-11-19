import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Job } from '../../shared/types/jobs';
import { LearningSkill } from '../../shared/types/common';
import { JOB_DESC_TEXT } from '../../shared/database/descriptionDataBase';
import { SkillType } from '../../shared/types/skills';
import { WeaponType } from '../../shared/types/weapons';
import { ArmorType } from '../../shared/types/armors';
import { CalculateService } from '../../shared/calculate.service';
import { Race } from '../../shared/types/races';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html'
})
export class JobsDetailComponent implements OnInit {
  description = JOB_DESC_TEXT;
  skillType: { [key: string]: string } = SkillType;
  weaponType: { [key: string]: string } = WeaponType;
  armorType: { [key: string]: string } = ArmorType;
  job: Job;

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
        this.job = this.dataService.getOneJob(params['id']);
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
      this.router.navigate([`../${item.id}`], { relativeTo: this.route });
      this.job = this.dataService.getOneJob(item.id);
    } else {
      this.router.navigate([`../../races/${item.id}`], { relativeTo: this.route });
    }
  }
}

