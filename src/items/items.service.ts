import { Injectable } from '@nestjs/common';
import { ITEMS } from './items.mock';

@Injectable()
export class ItemsService {
  items = ITEMS;

  findAll(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.items);
    });
  }
}
