import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../shared/types/skills';
import { SkillType } from '../../shared/types/skills';
import { CalculateService } from '../../shared/calculate.service';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html'
})
export class SkillViewComponent implements OnInit {
  @Input() skill: Skill;
  skillType: { [key: string]: string } = SkillType;

  constructor(
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
  }
}
