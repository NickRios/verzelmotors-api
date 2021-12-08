import { InjectRepository } from 'typeorm-typedi-extensions';
import { DeepPartial, Repository } from 'typeorm';
import { Service } from 'typedi';

import { Car } from '@models/car';

import { CreateCarProps } from './types';

@Service()
export class CreateCarService {
  @InjectRepository(Car)
  carRepository: Repository<Car>;

  async create({
    name,
    brand,
    model,
    car_trim,
    km,
    year,
    price,
    transmission,
    color,
    location,
    region,
    image,
  }: CreateCarProps): Promise<Car> {
    const car: DeepPartial<Car> = {
      name,
      brand,
      model,
      car_trim,
      km,
      year,
      price,
      transmission,
      color,
      location,
      region,
      image,
    };

    const newCar = await this.carRepository.save(car);

    return newCar;
  }
}
