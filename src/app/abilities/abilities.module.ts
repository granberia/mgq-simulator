import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [AbilitiesListComponent],
})
export class AbilitiesModule { }
