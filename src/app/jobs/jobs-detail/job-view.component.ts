import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../shared/types/jobs';
import { JOB_DESC_TEXT } from '../../shared/database/descriptionDataBase';
import { SkillType } from '../../shared/types/skills';
import { WeaponType } from '../../shared/types/weapons';
import { ArmorType } from '../../shared/types/armors';
import { CalculateService } from '../../shared/calculate.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html'
})
export class JobViewComponent implements OnInit {
  @Input() job: Job;
  description = JOB_DESC_TEXT;
  skillType: { [key: string]: string } = SkillType;
  weaponType: { [key: string]: string } = WeaponType;
  armorType: { [key: string]: string } = ArmorType;

  constructor(
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
  }

}
