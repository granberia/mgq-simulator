import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JobsListComponent } from './containers/jobs-list.component';
import { JobsDetailComponent } from './containers/jobs-detail.component';
import { JobViewComponent } from './compontnts/job-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [JobsListComponent, JobsDetailComponent, JobViewComponent],
})
export class JobsModule { }
