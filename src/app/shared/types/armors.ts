import { Equip } from './common';

export interface Armor extends Equip {
}

export const ArmorType: { [key: string]: string } = {
  '1': '옷',
  '2': '무도복',
  '3': '흉갑',
  '4': '갑옷',
  '5': '중갑',
  '6': '등껍질',
  '7': '로브',
  '8': '드레스',
  '9': '얇은옷',
  '33': '모자',
  '34': '투구',
  '35': '중투구',
  '36': '마법모',
  '37': '고급모',
  '38': '경방패',
  '39': '방패',
  '40': '중방패',
//  '41': '장신구',
};
