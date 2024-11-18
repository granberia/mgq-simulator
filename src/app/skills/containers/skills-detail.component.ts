import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Skill, SkillType } from '../../shared/types/skills';
import { CalculateService } from '../../shared/calculate.service';
import { From } from '../../shared/types/common';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html'
})
export class SkillsDetailComponent implements OnInit {
  skillType: { [key: string]: string } = SkillType;
  skill: Skill;

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
        this.skill = this.dataService.getOneAbilityOrSkill(params['id']) as Skill;
      });
  }

  viewFrom(from: From) {
    if (from.type === 'actor') {
      this.router.navigate([`../../actors/${from.id}`], { relativeTo: this.route });
    } else if (from.type === 'job') {
      this.router.navigate([`../../jobs/${from.id}`], { relativeTo: this.route });
    } else if (from.type === 'race') {
      this.router.navigate([`../../races/${from.id}`], { relativeTo: this.route });
    }
  }
}

