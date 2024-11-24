import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsListComponent } from './jobs/containers/jobs-list.component';
import { JobsDetailComponent } from './jobs/containers/jobs-detail.component';
import { RacesListComponent } from './races/containers/races-list.component';
import { RacesDetailComponent } from './races/containers/races-detail.component';
import { ActorsListComponent } from './actors/containers/actors-list.component';
import { SkillsListComponent } from './skills/containers/skills-list.component';
import { AbilitiesListComponent } from './abilities/containers/abilities-list.component';
import { ActorsDetailComponent } from './actors/containers/actors-detail.component';
import { WeaponsListComponent } from './weapons/containers/weapons-list.component';
import { ArmorsListComponent } from './armors/containers/armors-list.component';
import { AccessoriesListComponent } from './accessories/containers/accessories-list.component';
import { SkillsDetailComponent } from './skills/containers/skills-detail.component';
import { AbilitiesDetailComponent } from './abilities/containers/abilities-detail.component';
import { ItemsListComponent } from './items/containers/items-list.component';

const routes: Routes = [
  {
    path: 'main',
    component: ActorsListComponent,
    pathMatch: 'full',
  },
  { path: 'actors', component: ActorsListComponent },
  { path: 'actors/:id', component: ActorsDetailComponent },
  { path: 'races', component: RacesListComponent },
  { path: 'races/:id', component: RacesDetailComponent },
  { path: 'jobs', component: JobsListComponent },
  { path: 'jobs/:id', component: JobsDetailComponent },
  { path: 'weapons', component: WeaponsListComponent },
  { path: 'armors', component: ArmorsListComponent },
  { path: 'accessories', component: AccessoriesListComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'skills/:id', component: SkillsDetailComponent },
  { path: 'abilities', component: AbilitiesListComponent },
  { path: 'abilities/:id', component: AbilitiesDetailComponent },
  { path: 'items', component: ItemsListComponent },
  { path: '', redirectTo: 'actors', pathMatch: 'full' },
  { path: '**', redirectTo: 'actors' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
