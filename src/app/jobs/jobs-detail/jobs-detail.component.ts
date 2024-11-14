import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { JOB_DESC_TEXT } from '../../shared/database/descriptionDataBase';
import { take } from 'rxjs/operators';
import { SkillType } from '../../shared/types/skills';
import { WeaponType } from '../../shared/types/weapons';
import { ArmorType } from '../../shared/types/armors';
import { Job } from '../../shared/types/jobs';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html'
})
export class JobsDetailComponent implements OnInit {
  description = JOB_DESC_TEXT;
  skillType = SkillType;
  weaponType = WeaponType;
  armorType = ArmorType;
  job: Job;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(take(1))
      .subscribe((params) => {
        this.job = this.dataService.getOneJob(params['id']);
      });
  }
}

