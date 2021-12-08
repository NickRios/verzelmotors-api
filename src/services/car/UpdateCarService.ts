import { Repository } from 'typeorm';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';

import { Car } from '@models/car';

import { InjectRepository } from 'typeorm-typedi-extensions';
import { UpdateCarProps } from './types';

@Service()
export class UpdateCarService {
  @InjectRepository(Car)
  repository: Repository<Car>;

  async update(id: number, partial: UpdateCarProps): Promise<Car> {
    const car = await this.repository.findOne({ where: { id } });

    if (!car) throw new NotFoundError();

    this.repository.merge(car, partial);

    const updated = await this.repository.save(car);

    return updated;
  }
}
