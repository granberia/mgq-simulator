import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { BaseJob, Job, JobType } from '../../shared/types/jobs';
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
  baseJobs: BaseJob[] = [];
  total: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    for (let key in JobType) {
      this.baseJobs.push(JobType[key]);
    }
    const { jobs, total } = this.dataService.getAllJobs();
    this.jobList = jobs;
    this.total = total;
  }

  viewDetail(job: Job) {
    this.router.navigate([`./${job.id}`], { relativeTo: this.route });
  }

  addFilter(item: BaseJob) {
    if (this.dataService.jobFilter.includes(item)) {
      this.dataService.jobFilter.splice(this.dataService.jobFilter.indexOf(item), 1);
    } else {
      this.dataService.jobFilter.push(item);
    }
    this.jobList = this.dataService.getAllJobs().jobs;
  }
}


