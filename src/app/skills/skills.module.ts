import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SkillsListComponent } from './containers/skills-list.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsDetailComponent } from './containers/skills-detail.component';
import { SkillViewComponent } from './components/skill-view.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [SkillsListComponent, SkillsDetailComponent, SkillViewComponent],
})
export class SkillsModule { }
