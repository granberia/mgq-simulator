import { Skill } from './skills';
import { Ability } from './abilities';
import { ElementResist, ElementAdd, ElementPower } from './elements';
import { StateResist, StateOnHit } from './status';


export interface Equip extends Common {
  description: string;
  type: string;
  icon: number;
  price: number;
  hpAdd: number;
  mpAdd: number;
  atkAdd: number;
  defAdd: number;
  matAdd: number;
  mdfAdd: number;
  agiAdd: number;
  lukAdd: number;
  accuracyAdd?: number;
  criticalAdd?: number;
  evasionAdd?: number;
  magicEvasionAdd?: number;
  criticalEvasionAdd?: number;
  counterAdd?: number;
  reflectAdd?: number;
  magicReflectAdd?: number;
  spOnInit?: number;
  physicalDamage?: number;
  magicDamage?: number;
  ignoreDamage?: number;
  endure?: number;
  absorbMP?: number;
  damageToGold?: number;
  reverseHeal?: number;
  hpRegenOnVictory?: number;
  mpRegenOnVictory?: number;
  // 리본 상태유효도 0인 경우 작동 안함!!
  // weaponPower 빼먹음 !!! (주판의 책)
  // 확장 hp mp sp 재생율도 있으나 무시
  // <トリガーステート H,0,20%,32> 빈사시 스킬 (1152)
  // <戦闘開始時発動 32,50%> 전투시작시 스킬 (1181)
  // <ターン終了時発動 36,100%> 턴종료시 스킬 (1185)
  // <通常攻撃 4> 통상공격 개조 (1189)
  // <属性吸収 1> 속성 흡수 (1488)
  // <連続発動タイプ 30-2,31-2,32-2,33-2,34-2,35-2,36-2,37-2,38-2,39-2,43-2,44-2,45-2,46-2,47-2,48-2,49-2> 연속발동 1685
  // 지형 강화 (1710)

  displaySpecialStat?: string;
}

// 공격시 속성 미구현

export interface LearningSkill {
  id: string;
  level: number;
  skill?: Ability | Skill;
}

export type Datatype = 'actor' | 'job' | 'race' | 'weapon' | 'armor' | 'accessory';

export interface From {
  type: Datatype;
  id: string;
  source: string;
  level: number;
}

export interface Common {
  id: string;
  name: string;
  learningSkills?: LearningSkill[];
  addSkill?: string[];
  addWeapon?: string[];
  addArmor?: string[];
  // 기본 능력 배율
  hp?: number;
  mp?: number;
  sp?: number;
  atk?: number;
  def?: number;
  mat?: number;
  mdf?: number;
  agi?: number;
  luk?: number;
  accuracy?: number;
  critical?: number;
  evasion?: number;
  magicEvasion?: number;
  counter?: number;
  magicCounter?: number;
  // 특수 능력
  hpRegen?: number;
  mpRegen?: number;
  spRegen?: number;
  spCharge?: number;
  mpCost?: number;
  spCost?: number;
  healRate?: number;
  itemUseRate?: number;
  stealRate?: number;
  reflect?: number;
  magicReflect?: number;
  expRate?: number;
  jobExpRate?: number;
  goldRate?: number;
  goldCost?: number;
  itemGetRate?: number;
  aggroRate?: number;
  defenceRate?: number;
  moreAttack?: number;
  dualWield?: boolean;
  autoBattle?: boolean;
  noBackstab?: boolean;
  floorDamage?: number;
  moreAction?: number;
  // 속성 내성
  elementResist?: ElementResist;
  // 속성 부여
  elementAdd?: ElementAdd;
  // 속성 강화
  elementPower?: ElementPower;
  // 스킬군 강화
  skillPower?: {
    id: string,
    power: number,
  }[];
  // 스킬군 상태이상확률 강화
  skillStateUp?: {
    id: string,
    power: number,
  }[];
  // 종족 특공
  raceKill?: string[];
  // 상태이상 내성
  stateResist?: StateResist;
  // 공격시 상태이상 ( TODO 아직 직업 및 종족에서 안 불러오니 참고!!)
  stateOnHit?: StateOnHit;
}

export const NOT_LEARN_ACTORS: number[] = [
  1, // 루카
];


/* 액터 직업 종족에서 빠진 것 목록
  通常攻撃強化 일반 공격 강화 (무기군, 퍼센트)
  武器スキル倍率強化 무기 스킬 배율 강화 (무기군, 스킬군, 퍼센트)
  HPタイプ消費率 HP 소비율 (스킬군, 퍼센트)
  武器マスタリー 무기 마스터리 (무기군, 배율)
  通常攻撃強 바다 강화
  海地形超強化 바다 초 강화
  34 0 2.0 (스큐라 공격횟수 2회 및 무기 공격횟수 2회)
  바닥 피해율 (23으로 시작함)
*/
