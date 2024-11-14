import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobsDetailComponent } from './jobs/jobs-detail/jobs-detail.component';
import { RacesListComponent } from './races/races-list/races-list.component';
import { RacesDetailComponent } from './races/races-detail/races-detail.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { AbilitiesListComponent } from './abilities/abilities-list/abilities-list.component';

const routes: Routes = [
  {
    path: 'main',
    component: ActorsListComponent,
    pathMatch: 'full',
  },
  { path: 'actors', component: ActorsListComponent },
  { path: 'races', component: RacesListComponent },
  { path: 'races/:id', component: RacesDetailComponent },
  { path: 'jobs', component: JobsListComponent },
  { path: 'jobs/:id', component: JobsDetailComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'abilities', component: AbilitiesListComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
