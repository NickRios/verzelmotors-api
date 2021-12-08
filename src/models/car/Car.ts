import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'name',
  })
  name: string;

  @Column('varchar', {
    name: 'brand',
  })
  brand: string;

  @Column('varchar', {
    name: 'model',
  })
  model: string;

  @Column('varchar', {
    name: 'car_trim',
  })
  car_trim: string;

  @Column('int', {
    name: 'km',
  })
  km: number;

  @Column('int', {
    name: 'year',
  })
  year: number;

  @Column('int', {
    name: 'price',
  })
  price: number;

  @Column('varchar', {
    name: 'transmission',
  })
  transmission: string;

  @Column('varchar', {
    name: 'color',
  })
  color: string;

  @Column('varchar', {
    name: 'location',
  })
  location: string;

  @Column('varchar', {
    name: 'region',
  })
  region: string;

  @Column('varchar', {
    name: 'image',
  })
  image: string;

  @Exclude()
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
