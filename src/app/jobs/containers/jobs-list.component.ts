import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Job } from '../../shared/types/jobs';
import { JobComparators } from '../../shared/utils/comparator';
import { JobNameFilter } from '../../shared/utils/filter';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html'
})

export class JobsListComponent implements OnInit {
  columns: Array<keyof Job> = ['hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new JobNameFilter();
  jobComparators = JobComparators;

  jobList: Job[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.jobList = this.dataService.getAllJobs().jobs;
  }

  viewDetail(job: Job) {
    this.router.navigate([`./${job.id}`], { relativeTo: this.route });
  }
}


