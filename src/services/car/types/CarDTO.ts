import { Car } from '@models/car';

export interface CarDTO extends Car {
  name: string;
  brand: string;
  model: string;
  car_trim: string;
  km: number;
  year: number;
  price: number;
  transmission: string;
  color: string;
  location: string;
  region: string;
  image: string;
}
