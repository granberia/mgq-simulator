import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [JobsListComponent, JobsDetailComponent],
})
export class JobsModule { }
