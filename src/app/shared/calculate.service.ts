import { Injectable } from '@angular/core';
import { Skill } from './types/skills';
import { Ability } from './types/abilities';
import { Datatype } from './types/common';

@Injectable()
export class CalculateService {

  constructor() { }

  calculateFaceStyle(id: number) {
    return {
      'margin': '-32px',
      'width': '96px',
      'height': '96px',
      'object-fit': 'none',
      'object-position': '-' + (id % 4 * 96) + 'px -' + (Math.floor(id / 4) * 96) + 'px',
      'transform': 'scale(0.333)',
    }
  }

  calculateFaceDetailStyle(id: number) {
    return {
      'width': '96px',
      'height': '96px',
      'object-fit': 'none',
      'object-position': '-' + (id % 4 * 96) + 'px -' + (Math.floor(id / 4) * 96) + 'px',
    }
  }

  calculateStyle(icon: number) {
    return {
      'width': '24px',
      'height': '24px',
      'object-fit': 'none',
      'object-position': '-' + (icon % 16 * 24) + 'px -' + (Math.floor(icon / 16) * 24) + 'px',
    }
  }

  getDataTypeName(item: Datatype) {
    if (item === 'actor') {
      return '캐릭터';
    }
    if (item === 'job') {
      return '직업';
    }
    if (item === 'race') {
      return '종족';
    }
    return '';
  }

  getCost(item: Ability | Skill) {
    const cost: { [key: string]: number }  = {};
    if ('size' in item!) {
      cost['size'] = item.size;
    }
    if ('mpCost' in item!) {
      cost['mpCost'] = item.mpCost;
    }
    if ('spCost' in item!) {
      cost['spCost'] = item.spCost;
    }
    if ('goldCost' in item!) {
      cost['goldCost'] = item.goldCost!;
    }
    if ('hpCost' in item!) {
      cost['hpCost'] = item.hpCost!;
    }
    return cost;
  }

}
