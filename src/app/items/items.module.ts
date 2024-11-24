import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ItemsListComponent } from './containers/items-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [ItemsListComponent],
})
export class ItemsModule { }
