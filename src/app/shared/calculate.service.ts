import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  constructor() { }

  calculateStyle(icon: number) {
    return {
      'width': '24px',
      'height': '24px',
      'object-fit': 'none',
      'object-position': '-' + (icon % 16 * 24) + 'px -' + (Math.floor(icon / 16) * 24) + 'px',
    }
  }

}
