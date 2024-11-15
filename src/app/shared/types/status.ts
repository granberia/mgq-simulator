export interface StateResist {
  death?: number; // 즉사
  ascension?: number; // 승천
  climax?: number; // 절정
  bind?: number; // 구속
  poison?: number; // 독
  blind?: number; // 눈멈
  silence?: number; // 침묵
  confusion?: number; // 혼란
  sleep?: number; // 수면
  paralysis?: number; // 마비
  burn?: number; // 번
  freeze?: number; // 프리즈
  shock?: number; // 쇼크
  slow?: number; // 슬로우
  stop?: number; // 스톱
  mini?: number; // 미니멈
  zombie?: number; // 좀비
  petrify?: number; // 석화
  digest?: number; // 소화
  stun?: number; // 스턴
  slime?: number; // 미끈미끈
  horny?: number; // 민감
  trance?: number; // 황홀
  seduction?: number; // 유혹
  incontinence?: number; // 실금
}

export interface StateOnHit {
  death?: number; // 즉사
  ascension?: number; // 승천
  climax?: number; // 절정
  bind?: number; // 구속
  poison?: number; // 독
  blind?: number; // 눈멈
  silence?: number; // 침묵
  confusion?: number; // 혼란
  sleep?: number; // 수면
  paralysis?: number; // 마비
  burn?: number; // 번
  freeze?: number; // 프리즈
  shock?: number; // 쇼크
  slow?: number; // 슬로우
  stop?: number; // 스톱
  mini?: number; // 미니멈
  zombie?: number; // 좀비
  petrify?: number; // 석화
  digest?: number; // 소화
  stun?: number; // 스턴
  slime?: number; // 미끈미끈
  horny?: number; // 민감
  trance?: number; // 황홀
  seduction?: number; // 유혹
  incontinence?: number; // 실금
}

export const StatusList: Array<keyof StateResist> = [
  'death',
  'ascension',
  'climax',
  'bind',
  'poison',
  'blind',
  'silence',
  'confusion',
  'sleep',
  'paralysis',
  'burn',
  'freeze',
  'shock',
  'slow',
  'stop',
  'mini',
  'zombie',
  'petrify',
  'digest',
  'stun',
  'slime',
  'horny',
  'trance',
  'seduction',
  'incontinence',
];

export const StatusListKor = [
  '즉사',
  '승천',
  '절정',
  '구속',
  '독',
  '눈멈',
  '침묵',
  '혼란',
  '수면',
  '마비',
  '번',
  '프리즈',
  '쇼크',
  '슬로우',
  '스톱',
  '미니멈',
  '좀비',
  '석화',
  '소화',
  '스턴',
  '미끈미끈',
  '민감',
  '황홀',
  '유혹',
  '실금',
];
