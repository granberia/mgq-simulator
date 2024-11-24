import { ClrDatagridFilterInterface, ClrDatagridStringFilterInterface } from '@clr/angular';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Job } from '../types/jobs';
import { Race } from '../types/races';
import { Actor } from '../types/actors';
import { Skill, SkillType } from '../types/skills';
import { Ability, AbilityType } from '../types/abilities';
import { Weapon, WeaponType } from '../types/weapons';
import { Armor, ArmorType } from '../types/armors';
import { Accessory } from '../types/accessories';
import { Item } from '../types/items';

export class JobNameFilter implements ClrDatagridStringFilterInterface<Job> {
  accepts(a: Job, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class RaceNameFilter implements ClrDatagridStringFilterInterface<Race> {
  accepts(a: Race, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ActorNameFilter implements ClrDatagridStringFilterInterface<Actor> {
  accepts(a: Actor, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ActorSecondaryNameFilter implements ClrDatagridStringFilterInterface<Actor> {
  accepts(a: Actor, search: string): boolean {
    return "" + a.secondaryName === search
      || a.secondaryName!.toLowerCase().indexOf(search) >= 0;
  }
}

export class ActorArtistFilter implements ClrDatagridFilterInterface<Actor> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(actor: Actor) {
    if (actor.artist === 'しいずぴぃ') { // 몬무스 퀘스트 패러독스 제작진들 반성해라. 원본 게임에 오타를 넣다니
      return (this.dataService.artistFilter.includes('しぃずぴぃ'));
    }
    return (this.dataService.artistFilter.includes(actor.artist));
  }

  isActive(): boolean {
    return this.dataService.artistFilter.length !== 0;
  }

  setValue(event: any, artist: string) {
    const value = event.target.checked;
    if (value === true && (!this.dataService.artistFilter.includes(artist))) {
      this.dataService.artistFilter.push(artist);
    } else if (value === false && this.dataService.artistFilter.includes(artist)) {
      this.dataService.artistFilter.splice(this.dataService.artistFilter.indexOf(artist), 1);
    }
    this.changes.emit(true);
  }
}
export class WeaponNameFilter implements ClrDatagridStringFilterInterface<Weapon> {
  accepts(a: Weapon, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class WeaponTypeFilter implements ClrDatagridFilterInterface<Weapon> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(weapon: Weapon) {
    return (this.dataService.weaponFilter.includes(WeaponType[weapon.type]));
  }

  isActive(): boolean {
    return this.dataService.weaponFilter.length !== 0;
  }

  setValue(event: any, weapon: string) {
    const value = event.target.checked;
    if (value === true && (!this.dataService.weaponFilter.includes(weapon))) {
      this.dataService.weaponFilter.push(weapon);
    } else if (value === false && this.dataService.weaponFilter.includes(weapon)) {
      this.dataService.weaponFilter.splice(this.dataService.weaponFilter.indexOf(weapon), 1);
    }
    this.changes.emit(true);
  }
}

export class ArmorNameFilter implements ClrDatagridStringFilterInterface<Armor> {
  accepts(a: Armor, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ArmorTypeFilter implements ClrDatagridFilterInterface<Armor> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(armor: Armor) {
    return (this.dataService.armorFilter.includes(ArmorType[armor.type]));
  }

  isActive(): boolean {
    return this.dataService.armorFilter.length !== 0;
  }

  setValue(event: any, armor: string) {
    const value = event.target.checked;
    if (value === true && (!this.dataService.armorFilter.includes(armor))) {
      this.dataService.armorFilter.push(armor);
    } else if (value === false && this.dataService.armorFilter.includes(armor)) {
      this.dataService.armorFilter.splice(this.dataService.armorFilter.indexOf(armor), 1);
    }
    this.changes.emit(true);
  }
}

export class AccessoryNameFilter implements ClrDatagridStringFilterInterface<Accessory> {
  accepts(a: Accessory, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class SpecialStatFilter implements ClrDatagridStringFilterInterface<Weapon | Armor> {
  accepts(a: Weapon | Armor | Accessory, search: string): boolean {
    return "" + a.displaySpecialStat === search
      || a.displaySpecialStat!.toLowerCase().indexOf(search) >= 0;
  }
}

export class NameFilter implements ClrDatagridStringFilterInterface<Weapon | Armor> {
  accepts(a: Weapon | Armor | Accessory | Item, search: string): boolean {
    return "" + a.name === search
      || a.name!.toLowerCase().indexOf(search) >= 0;
  }
}

export class DescFilter implements ClrDatagridStringFilterInterface<Weapon | Armor> {
  accepts(a: Weapon | Armor | Accessory | Item, search: string): boolean {
    return "" + a.description === search
      || a.description!.toLowerCase().indexOf(search) >= 0;
  }
}

export class SkillNameFilter implements ClrDatagridStringFilterInterface<Skill> {
  accepts(a: Skill, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class SkillDescFilter implements ClrDatagridStringFilterInterface<Skill> {
  accepts(a: Skill, search: string): boolean {
    return "" + a.description === search
      || a.description.toLowerCase().indexOf(search) >= 0;
  }
}

export class SkillTypeFilter implements ClrDatagridFilterInterface<Skill> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(skill: Skill) {
    return (this.dataService.skillFilter.includes(SkillType[skill.type]));
  }

  isActive(): boolean {
    return this.dataService.skillFilter.length !== 0;
  }

  setValue(event: any, skill: string) {
    const value = event.target.checked;
    if (value === true && (!this.dataService.skillFilter.includes(skill))) {
      this.dataService.skillFilter.push(skill);
    } else if (value === false && this.dataService.skillFilter.includes(skill)) {
      this.dataService.skillFilter.splice(this.dataService.skillFilter.indexOf(skill), 1);
    }
    this.changes.emit(true);
  }
}

export class AbilityNameFilter implements ClrDatagridStringFilterInterface<Ability> {
  accepts(a: Ability, search: string): boolean {
    return "" + a.name === search
      || a.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class AbilityDescFilter implements ClrDatagridStringFilterInterface<Ability> {
  accepts(a: Ability, search: string): boolean {
    return "" + a.description === search
      || a.description.toLowerCase().indexOf(search) >= 0;
  }
}

export class AbilityTypeFilter implements ClrDatagridFilterInterface<Ability> {
  constructor(
    public dataService: DataService,
  ) { }

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  accepts(ability: Ability) {
    return (this.dataService.abilityFilter.includes(AbilityType[ability.type]));
  }

  isActive(): boolean {
    return this.dataService.abilityFilter.length !== 0;
  }

  setValue(event: any, ability: string) {
    const value = event.target.checked;
    if (value === true && (!this.dataService.abilityFilter.includes(ability))) {
      this.dataService.abilityFilter.push(ability);
    } else if (value === false && this.dataService.abilityFilter.includes(ability)) {
      this.dataService.abilityFilter.splice(this.dataService.abilityFilter.indexOf(ability), 1);
    }
    this.changes.emit(true);
  }
}
