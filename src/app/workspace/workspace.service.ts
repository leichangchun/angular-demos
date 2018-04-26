import { Injectable } from '@angular/core';
import {people , shop , story} from './../../assets/data/mock-data';
@Injectable()
export class WorkspaceService {

  constructor() { }

  getEchartData (type): Promise<any> {
    let data = null;

    switch (type) {
      case 'people':
        data = people;
        break;
      case 'shop':
        data = shop;
        break;
      case 'story':
        data = story;
        break;
      case 'money':
        data = people;
        break;

      default:
        break;
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
}
