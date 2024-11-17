import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';
import { Skill } from '../../shared/types/skills';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html'
})
export class SkillsDetailComponent implements OnInit {
  skill: Skill;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe((params) => {
        this.skill = this.dataService.getOneAbilityOrSkill(params['id']) as Skill;
      });
  }
}

