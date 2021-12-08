import { FindConditions, Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Service } from 'typedi';

import { Page } from '@shared/pagination';
import { Car } from '@models/car';

import { CarQueryParams, CarDTO } from './types';
import { createCarDTO } from './utils/create-car-dto';

@Service()
export class FindCarService {
  @InjectRepository(Car)
  private repository: Repository<Car>;

  public async findPage(query: CarQueryParams): Promise<Page<CarDTO>> {
    const where: FindConditions<Car> = {};

    const { page, size } = query;
    if (query.name) {
      where.name = query.name;
    }

    const options = query.paginate<Car>({
      select: [
        'id',
        'name',
        'brand',
        'model',
        'car_trim',
        'km',
        'year',
        'price',
        'transmission',
        'color',
        'location',
        'region',
        'image',
      ],
      order: { price: 'ASC' },
      where,
    });

    const [select, count] = await this.repository.findAndCount(options);

    const cars = select.map(createCarDTO);

    return new Page(await Promise.all(cars), count, page, size);
  }

  public async findOne(id: number): Promise<CarDTO> {
    return createCarDTO(
      await this.repository.findOne({
        where: { id },
        select: [
          'id',
          'name',
          'brand',
          'model',
          'car_trim',
          'km',
          'year',
          'price',
          'transmission',
          'color',
          'location',
          'region',
        ],
      }),
    );
  }
}
