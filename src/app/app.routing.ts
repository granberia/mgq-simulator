import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { CalculatorViewComponent } from './calculator/calculator-view/calculator-view.component';
import { ActorsListComponent } from './actors/actors-list/actors-list.component';
import { ActorsDetailComponent } from './actors/actors-detail/actors-detail.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobsDetailComponent } from './jobs/jobs-detail/jobs-detail.component';
import { RacesListComponent } from './races/races-list/races-list.component';
import { RacesDetailComponent } from './races/races-detail/races-detail.component';
import { WeaponsListComponent } from './weapons/weapons-list/weapons-list.component';
import { ArmorsListComponent } from './armors/armors-list/armors-list.component';
import { AccessoriesListComponent } from './accessories/accessories-list/accessories-list.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { AbilitiesListComponent } from './abilities/abilities-list/abilities-list.component';


export const ROUTES: Routes = [
  {
    path: 'main',
    component: CalculatorViewComponent,
    pathMatch: 'full',
  },
  { path: 'main/:id', component: CalculatorViewComponent },
  { path: 'actors', component: ActorsListComponent },
  { path: 'actors/:id', component: ActorsDetailComponent },
  { path: 'jobs', component: JobsListComponent },
  { path: 'jobs/:id', component: JobsDetailComponent },
  { path: 'races', component: RacesListComponent },
  { path: 'races/:id', component: RacesDetailComponent },
  { path: 'weapons', component: WeaponsListComponent },
  { path: 'armors', component: ArmorsListComponent },
  { path: 'accessories', component: AccessoriesListComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'abilities', component: AbilitiesListComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
