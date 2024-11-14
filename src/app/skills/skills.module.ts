import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [SkillsListComponent],
})
export class SkillsModule { }
