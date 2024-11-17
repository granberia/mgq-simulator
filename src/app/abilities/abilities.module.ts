import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AbilitiesListComponent } from './containers/abilities-list.component';
import { SharedModule } from '../shared/shared.module';
import { AbilitiesDetailComponent } from './containers/abilities-detail.component';
import { AbilityViewComponent } from './components/ability-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [AbilitiesListComponent, AbilitiesDetailComponent, AbilityViewComponent],
})
export class AbilitiesModule { }
