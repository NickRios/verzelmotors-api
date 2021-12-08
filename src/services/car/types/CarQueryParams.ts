import { FindManyOptions, Like, FindConditions } from 'typeorm';

import { Paginator, Specification } from '@shared/pagination';

import { Car } from '@models/car';

export class CarQueryParams extends Paginator implements Specification<Car> {
  name?: string;

  getOptions(): FindManyOptions<Car> {
    const where: FindConditions<Car> = {};

    if (this.name) {
      where.name = Like(`%${this.name}%`);
    }

    return this.paginate({
      where,
    });
  }
}
