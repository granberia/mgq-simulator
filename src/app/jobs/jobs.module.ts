import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { SharedModule } from '../shared/shared.module';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { JobViewComponent } from './jobs-detail/job-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [JobsListComponent, JobsDetailComponent, JobViewComponent],
})
export class JobsModule { }
