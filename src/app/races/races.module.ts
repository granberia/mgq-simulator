import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RacesListComponent } from './containers/races-list.component';
import { RacesDetailComponent } from './containers/races-detail.component';
import { RaceViewComponent } from './components/race-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [RacesListComponent, RacesDetailComponent, RaceViewComponent],
})
export class RacesModule { }
