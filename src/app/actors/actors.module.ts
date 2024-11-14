import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [ActorsListComponent],
})
export class ActorsModule { }
