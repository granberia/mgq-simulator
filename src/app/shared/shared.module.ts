import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { ClrSearchSelectModule } from './clr-search-select/clr-search-select.module';
import { LivereModule } from 'ngx-livere';
import { DataService } from './data.service';
import { CalculateService } from './calculate.service';
import { JobViewComponent } from './views/job-view/job-view.component';
import { RaceViewComponent } from './views/race-view/race-view.component';



@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    ClrSearchSelectModule,
    LivereModule,
    FormsModule,
    ReactiveFormsModule,
    JobViewComponent,
    RaceViewComponent,
  ],
  imports: [
    CommonModule,
  ],
  declarations: [
    JobViewComponent,
    RaceViewComponent,
  ],
  providers: [DataService, CalculateService],
})
export class SharedModule {}
