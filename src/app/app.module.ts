import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { JobsModule } from './jobs/jobs.module';
import { RacesModule } from './races/races.module';
import { ActorsModule } from './actors/actors.module';
import { SkillsModule } from './skills/skills.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ArmorsModule } from './armors/armors.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { ItemsModule } from './items/items.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ClarityModule,
    JobsModule,
    RacesModule,
    ActorsModule,
    SkillsModule,
    AbilitiesModule,
    WeaponsModule,
    ArmorsModule,
    AccessoriesModule,
    ItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
