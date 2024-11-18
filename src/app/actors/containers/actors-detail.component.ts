import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Actor } from '../../shared/types/actors';
import { CalculateService } from '../../shared/calculate.service';
import { ACTOR_ABILITY_TEXT } from '../../shared/database/actorAbilityDataBase';
import { SkillType } from '../../shared/types/skills';
import { LearningSkill } from '../../shared/types/common';

@Component({
  selector: 'app-actors-detail',
  templateUrl: './actors-detail.component.html'
})
export class ActorsDetailComponent implements OnInit {
  description = ACTOR_ABILITY_TEXT;
  skillType: { [key: string]: string } = SkillType;
  actor: Actor;

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
        this.actor = this.dataService.getOneActor(params['id']);
      });
  }

  viewSkill(skill: LearningSkill) {
    if ('size' in skill) {
      this.router.navigate([`../../abilities/${skill.id}`], { relativeTo: this.route });
    } else {
      this.router.navigate([`../../skills/${skill.id}`], { relativeTo: this.route });
    }
  }
}
