import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RacesListComponent } from './races-list/races-list.component';
import { SharedModule } from '../shared/shared.module';
import { RacesDetailComponent } from './races-detail/races-detail.component';
import { RaceViewComponent } from './races-detail/race-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [RacesListComponent, RacesDetailComponent, RaceViewComponent],
})
export class RacesModule { }
