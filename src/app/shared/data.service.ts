import { Injectable } from '@angular/core';
import { ElementList, ElementListKor } from './types/elements';
import { StatusList, StatusListKor } from './types/status';
import { JOB_LIST } from './database/jobsDataBase';
import { SKILL_LIST } from './database/skillsDataBase';
import { ABILITY_LIST } from './database/abilitiesDataBase';
import { BaseRace, Race, RaceType } from './types/races';
import { Actor, InitRace } from './types/actors';
import { RACE_LIST } from './database/racesDataBase';
import { ACTOR_LIST } from './database/actorsDataBase';
import { WEAPON_LIST } from './database/weaponsDataBase';
import { ARMOR_LIST } from './database/armorsDataBase';
import { ACCESSORY_LIST } from './database/accessoriesDataBase';
import { Weapon } from './types/weapons';
import { Armor } from './types/armors';
import { Skill, SkillType } from './types/skills';
import { Job } from './types/jobs';
import { Accessory } from './types/accessories';
import { Ability } from './types/abilities';
import { Datatype, From, LearningSkill } from './types/common';

@Injectable()
export class DataService {
  actors: Actor[] = [];
  actorRaceCount: { [key: string]: number } = {};
  actorRaceFilter: BaseRace[] = [];
  jobs: Job[] = [];
  races: Race[] = [];
  raceCount: { [key: string]: number } = {};
  raceFilter: BaseRace[] = [];
  artistFilter: string[] = [];
  weapons: Weapon[] = [];
  weaponFilter: string[] = [];
  armors: Armor[] = [];
  armorFilter: string[] = [];
  accessories: Accessory[] = [];
  skills: Skill[] = [];
  skillFilter: string[] = [];
  abilities: Ability[] = [];
  abilityFilter: string[] = [];

  constructor() {
    this.skills = SKILL_LIST.map((skill) => {
      return {
        ...skill,
        from: [],
      };
    });
    this.abilities = ABILITY_LIST.map((ability) => {
      return {
        ...ability,
        from: [],
      };
    });
    this.jobs = JOB_LIST.map((job) => this.setupDefaultValues(job, 'job'));
    for (let key in RaceType) {
      this.raceCount[RaceType[key]] = 0;
    }
    this.races = RACE_LIST.map((race) => {
      this.getRaceTypes(race).forEach((type) => {
        this.raceCount[type]++;
      });
      return this.setupDefaultValues(race, 'race');
    });
    this.actorRaceCount = {};
    for (let key in RaceType) {
      this.actorRaceCount[RaceType[key]] = 0;
    }
    this.actors = ACTOR_LIST.map((actor) =>
      this.setupDefaultActorValues(actor)
    );
    this.weapons = WEAPON_LIST.map((weapon) =>
      this.setupDefaultValues(weapon, 'weapon')
    );
    this.weapons = this.weapons.map((weapon) => {
      return {
        ...weapon,
        displaySpecialStat: this.setSpecialStats(weapon),
      };
    });
    this.armors = ARMOR_LIST.map((armor) =>
      this.setupDefaultValues(armor, 'armor')
    );
    this.armors = this.armors.map((armor) => {
      return {
        ...armor,
        displaySpecialStat: this.setSpecialStats(armor),
      };
    });
    this.accessories = ACCESSORY_LIST.map((accessory) =>
      this.setupDefaultValues(accessory, 'accessory')
    );
    this.accessories = this.accessories.map((accessory) => {
      return {
        ...accessory,
        displaySpecialStat: this.setSpecialStats(accessory),
      };
    });
  }

  getAllActors() {
    let actors = this.actors;
    if (this.actorRaceFilter.length != 0) {
      actors = actors.filter((actor) => {
        let flag = false;
        this.actorRaceFilter.forEach((race) => {
          if (actor.baseRaces!.includes(race)) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: this.actorRaceCount,
      actors,
    };
  }

  getOneActor(id: string): Actor {
    return this.actors.find((actor) => actor.id === id)!;
  }

  getAllJobs() {
    return {
      total: [],
      jobs: this.jobs,
    };
  }

  getOneJob(id: string): Job {
    return this.jobs.find((job) => job.id === id)!;
  }

  getAllRaces() {
    let races = this.races;
    if (this.raceFilter.length !== 0) {
      races = races.filter((race) => {
        let flag = false;
        this.raceFilter.forEach((filterRace) => {
          if (this.getRaceTypes(race).indexOf(filterRace) !== -1) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: this.raceCount,
      races,
    };
  }

  getOneRace(id: string) {
    return this.races.find((race) => race.id === id)!;
  }

  getAllWeapons() {
    return {
      total: [],
      weapons: this.weapons,
    };
  }

  getOneWeapon(id: string) {
    return this.weapons.find((weapon) => weapon.id === id);
  }

  getAllArmors() {
    return {
      total: [],
      armors: this.armors,
    };
  }

  getOneArmor(id: string) {
    return this.armors.find((armor) => armor.id === id);
  }

  getAllAccessories() {
    return {
      total: [],
      accessories: this.accessories,
    };
  }

  getOneAccessory(id: string) {
    return this.accessories.find((accessory) => accessory.id === id);
  }

  getOneAbilityOrSkill(id: string) {
    return [...this.abilities, ...this.skills].find((skill) => skill.id === id);
  }

  registerFrom(id: string, from: From) {
    const result = [...this.skills, ...this.abilities].find(
      (item) => item.id === id
    );
    result!.from!.push(from);
    return result;
  }

  setupDefaultActorValues(target: any) {
    // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    if (target.learningSkills && target.learningSkills.length !== 0) {
      target.learningSkills = target.learningSkills
        .filter(
          (item: LearningSkill) => item.id !== '1543' && item.id !== '3351'
        )
        .map((item: LearningSkill) => {
          const skill = this.registerFrom(item.id, {
            type: 'actor',
            source: target.name,
            level: item.level,
          });
          return {
            ...item,
            skill,
          };
        });
    }
    target.baseRaces = [];
    const initRaceIds = target.initRace
      .filter((race: InitRace) => +race.id < 371)
      .map((race: InitRace) => race.id);
    RACE_LIST.forEach((race) => {
      if (initRaceIds.indexOf(race.id) !== -1) {
        const raceTypes = this.getRaceTypes(race);
        raceTypes.forEach((type) => {
          if (target.baseRaces.indexOf(type) === -1) {
            target.baseRaces.push(type);
            this.actorRaceCount[type]++;
          }
        });
      }
    });
    return target;
  }

  setupDefaultValues(target: any, type: Datatype) {
    // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    if (target.learningSkills && target.learningSkills.length !== 0) {
      target.learningSkills = target.learningSkills.map(
        (item: LearningSkill) => {
          const skill = this.registerFrom(item.id, {
            type,
            source: target.name,
            level: item.level,
          });
          return {
            ...item,
            skill,
          };
        }
      );
    }
    const elementList = ElementList;
    target.elementResist = target.elementResist ? target.elementResist : {};
    elementList.forEach((element) => {
      target.elementResist[element] = target.elementResist[element]
        ? target.elementResist[element]
        : 100;
    });
    const stateResist = StatusList;
    target.stateResist = target.stateResist ? target.stateResist : {};
    stateResist.forEach((status) => {
      target.stateResist[status] = target.stateResist[status]
        ? target.stateResist[status]
        : 100;
    });
    return target;
  }

  getRaceTypes(race: Race): BaseRace[] {
    const index = +race.id;
    if (index >= 5000) {
      return [
        ...race.require,
        ...(race.subrequire ? race.subrequire : []),
      ].reduce((prev: BaseRace[], req: string) => {
        const subrace = RACE_LIST.find((race) => race.id === req);
        return [...prev, ...(subrace ? this.getRaceTypes(subrace) : [])];
      }, []);
    }
    if (index >= 151 && index < 158) {
      return ['인간'];
    }
    if (index >= 158 && index < 167) {
      return ['요마'];
    }
    if (index >= 167 && index < 175) {
      return ['아인'];
    }
    if (index >= 175 && index < 184) {
      return ['음마'];
    }
    if (index >= 184 && index < 194) {
      return ['흡혈귀'];
    }
    if (index >= 194 && index < 203) {
      return ['인어'];
    }
    if (index >= 203 && index < 214) {
      return ['엘프'];
    }
    if (index >= 214 && index < 223) {
      return ['요정'];
    }
    if (index >= 223 && index < 232) {
      return ['슬라임'];
    }
    if (index >= 232 && index < 245) {
      return ['마수'];
    }
    if (index >= 245 && index < 254) {
      return ['요호'];
    }
    if (index >= 254 && index < 265) {
      return ['라미아'];
    }
    if (index >= 265 && index < 274) {
      return ['스큐라'];
    }
    if (index >= 274 && index < 283) {
      return ['하피'];
    }
    if (index >= 283 && index < 293) {
      return ['드래곤'];
    }
    if (index >= 293 && index < 301) {
      return ['육서종'];
    }
    if (index >= 301 && index < 309) {
      return ['해서종'];
    }
    if (index >= 309 && index < 319) {
      return ['벌레'];
    }
    if (index >= 319 && index < 328) {
      return ['식물'];
    }
    if (index >= 328 && index < 336) {
      return ['좀비'];
    }
    if (index >= 336 && index < 344) {
      return ['고스트'];
    }
    if (index >= 344 && index < 354) {
      return ['돌'];
    }
    if (index >= 354 && index < 362) {
      return ['키메라'];
    }
    if (index >= 362 && index < 371) {
      return ['천사'];
    }
    return [];
  }

  getAllSkills() {
    return {
      total: [],
      skills: this.skills,
    };
  }

  getAllAbilities() {
    return {
      total: [],
      abilities: this.abilities,
    };
  }

  setSpecialStats(target: Weapon | Armor) {
    let result = '';
    for (let i = 0; i < ElementList.length; i++) {
      if (target.elementPower![ElementList[i]]) {
        result =
          result +
          ElementListKor[i] +
          '강화 ' +
          target.elementPower![ElementList[i]] +
          '% ';
      }
    }
    for (let i = 0; i < ElementList.length; i++) {
      if (
        target.elementResist![ElementList[i]] &&
        target.elementResist![ElementList[i]] !== 100
      ) {
        result =
          result +
          ElementListKor[i] +
          '내성 ' +
          target.elementResist![ElementList[i]] +
          '% ';
      }
    }
    for (let i = 0; i < target.skillPower!.length; i++) {
      result =
        result +
        SkillType[target.skillPower![i].id] +
        '강화 ' +
        target.skillPower![i].power +
        '% ';
    }
    for (let i = 0; i < StatusList.length; i++) {
      if (target.stateOnHit![StatusList[i]]) {
        result =
          result +
          StatusListKor[i] +
          '부여 ' +
          target.stateOnHit![StatusList[i]] +
          '% ';
      }
    }
    for (let i = 0; i < StatusList.length; i++) {
      if (
        target.stateResist![StatusList[i]] &&
        target.stateResist![StatusList[i]] !== 100
      ) {
        result =
          result +
          StatusListKor[i] +
          '내성 ' +
          target.stateResist![StatusList[i]] +
          '% ';
      }
    }
    return result;
  }
}
