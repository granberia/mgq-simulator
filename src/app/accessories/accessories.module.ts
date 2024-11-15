import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AccessoriesListComponent } from './containers/accessories-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [AccessoriesListComponent],
})
export class AccessoriesModule { }
