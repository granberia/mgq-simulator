import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ActorsListComponent } from './containers/actors-list.component';
import { SharedModule } from '../shared/shared.module';
import { ActorsDetailComponent } from './containers/actors-detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [ActorsListComponent, ActorsDetailComponent],
})
export class ActorsModule { }
