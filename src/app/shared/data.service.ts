import { Injectable } from '@angular/core';
import { ElementList, ElementListKor } from './types/elements';
import { StatusList, StatusListKor } from './types/status';
import { JOB_LIST } from './database/jobsDataBase';
import { SKILL_LIST } from './database/skillsDataBase';
import { ABILITY_LIST } from './database/abilitiesDataBase';
import { BaseRace, RaceType } from './types/races';
import { InitRace } from './types/actors';
import { RACE_LIST } from './database/racesDataBase';
import { ACTOR_LIST } from './database/actorsDataBase';



@Injectable()
export class DataService {
  actorRaceCount: { [key: string]: number } = {};
  actorRaceFilter: BaseRace[] = [];
  raceCount = {};
  raceFilter: BaseRace[] = [];
  artistFilter: string[] = [];
  weaponFilter: string[] = [];
  armorFilter: string[] = [];
  skillFilter: string[] = [];
  abilityFilter: string[] = [];

  constructor() { }

  getAllActors() {
    this.actorRaceCount = {};
    for (let key in RaceType) {
      this.actorRaceCount[RaceType[key]] = 0;
    }
    let result = ACTOR_LIST.map(actor => this.setupDefaultActorValues(actor));
    if (this.actorRaceFilter.length != 0) {
      result = ACTOR_LIST.filter(actor => {
        let flag = false;
        this.actorRaceFilter.forEach(race => {
          if (actor.baseRaces!.includes(race)) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total: this.actorRaceCount,
      actors: result,
    };
  }

  getOneActor(id: string) {
    return this.setupDefaultActorValues(ACTOR_LIST.find(actor => actor.id === id));
  }

  getAllJobs() {
    return {
      total: [],
      jobs: JOB_LIST.map(job => this.setupDefaultValues(job)),
    };
  }

  getOneJob(id: string) {
    return this.setupDefaultValues(JOB_LIST.find(job => job.id === id));
  }

  getAllRaces() {
    const total: { [key: string]: number } = {};
    for (let key in RaceType) {
      total[RaceType[key]] = 0;
    }
    let races = RACE_LIST.map(race => {
      total[this.getRaceType(Number(race.id))]++;
      return this.setupDefaultValues(race);
    });
    if (this.raceFilter.length != 0) {
      races = RACE_LIST.filter(race => {
        let flag = false;
        this.raceFilter.forEach(filterRace => {
          if (this.getRaceType(Number(race.id)) === filterRace) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return {
      total,
      races,
    };
  }

  getOneRace(id: string) {
    return this.setupDefaultValues(RACE_LIST.find(race => race.id === id));
  }

  getOneAbilityOrSkill(id: string) {
    if (Number(id) <= 860 || Number(id) >= 5620) { // 어빌리티
      return ABILITY_LIST.find(ability => ability.id === id);
    } else { // 스킬
      return SKILL_LIST.find(skill => skill.id === id);
    }
  }

  setupDefaultActorValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    target.baseRaces = [];
    target.initRace.forEach((race: InitRace) => {
      let baseRace = this.getRaceType(Number(race.id));
      target.baseRaces.push(baseRace);
    });
    let result: BaseRace[] = [];
    target.baseRaces = target.baseRaces.forEach((item: BaseRace) => {
      if (result.indexOf(item) < 0) {
        result.push(item);
      }
    });
    target.baseRaces = result;
    result.forEach(item => {
      this.actorRaceCount[item]++;
    });
    return target;
  }

  setupDefaultValues(target: any) { // interface 를 정의할 때 기본값 설정이 불가능하자 사용한 수단
    if (target.learningSkills && target.learningSkills.length !== 0) {
      target.learningSkills = target.learningSkills.map((item: { id: string; }) => {
        return {
          ...item,
          skill: this.getOneAbilityOrSkill(item.id),
        }
      });
    }
    const elementList = ElementList;
    target.elementResist = target.elementResist ? target.elementResist : {};
    elementList.forEach(element => {
      target.elementResist[element] = target.elementResist[element] ? target.elementResist[element] : 100;
    });
    const stateResist = StatusList;
    target.stateResist = target.stateResist ? target.stateResist : {};
    stateResist.forEach(status => {
      target.stateResist[status] = target.stateResist[status] ? target.stateResist[status] : 100;
    });
    return target;
  }

  getRaceType(index: number) {
    if (index >= 5000) {
      return '봉인종&금종';
    }
    if (index >= 151 && index < 158) {
      return '인간';
    }
    if (index >= 158 && index < 167) {
      return '요마';
    }
    if (index >= 167 && index < 175) {
      return '아인';
    }
    if (index >= 175 && index < 184) {
      return '음마';
    }
    if (index >= 184 && index < 194) {
      return '흡혈귀';
    }
    if (index >= 194 && index < 203) {
      return '인어';
    }
    if (index >= 203 && index < 214) {
      return '엘프';
    }
    if (index >= 214 && index < 223) {
      return '요정';
    }
    if (index >= 223 && index < 232) {
      return '슬라임';
    }
    if (index >= 232 && index < 245) {
      return '마수';
    }
    if (index >= 245 && index < 254) {
      return '요호';
    }
    if (index >= 254 && index < 265) {
      return '라미아';
    }
    if (index >= 265 && index < 274) {
      return '스큐라';
    }
    if (index >= 274 && index < 283) {
      return '하피';
    }
    if (index >= 283 && index < 293) {
      return '드래곤';
    }
    if (index >= 293 && index < 301) {
      return '육서종';
    }
    if (index >= 301 && index < 309) {
      return '해서종';
    }
    if (index >= 309 && index < 319) {
      return '벌레';
    }
    if (index >= 319 && index < 328) {
      return '식물';
    }
    if (index >= 328 && index < 336) {
      return '좀비';
    }
    if (index >= 336 && index < 344) {
      return '고스트';
    }
    if (index >= 344 && index < 354) {
      return '돌';
    }
    if (index >= 354 && index < 362) {
      return '키메라';
    }
    if (index >= 362) {
      return '천사';
    }
    return '';
  }

  getAllSkills() {
    let result = SKILL_LIST;
    return {
      total: [],
      skills: result,
    };
  }

  getAllAbilities() {
    let result = ABILITY_LIST;
    return {
      total: [],
      abilities: result,
    };
  }
}
