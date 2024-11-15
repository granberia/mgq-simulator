import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  constructor() { }

  calculateFaceStyle(id: number) {
    return {
      'margin': '-32px',
      'width': '96px',
      'height': '96px',
      'object-fit': 'none',
      'object-position': '-' + (0) + 'px -' + (0) + 'px',
      'transform': 'scale(0.333)',
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

}
