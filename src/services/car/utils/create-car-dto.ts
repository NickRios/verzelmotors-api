import { Car } from '@models/car';

import { CarDTO } from '../types';

export const createCarDTO = ({ ...car }: Car): CarDTO => ({
  ...car,
});
