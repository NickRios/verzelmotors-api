import { Repository } from 'typeorm';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';

import { Car } from '@models/car';

import { InjectRepository } from 'typeorm-typedi-extensions';
import { UpdateImageCarProps } from './types';

@Service()
export class UpdateImageCarService {
  @InjectRepository(Car)
  repository: Repository<Car>;

  async updateImage(id: number, image: UpdateImageCarProps): Promise<Car> {
    const car = await this.repository.findOne({ where: { id } });

    if (!car) throw new NotFoundError();

    this.repository.merge(car, image);

    const updated = await this.repository.save(car);

    return updated;
  }
}
