import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { primaryKey, timestamps } from '@utils/database';

export class createTableCars1638796106940 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'car',
        columns: [
          primaryKey(),
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'car_trim',
            type: 'varchar',
          },
          {
            name: 'km',
            type: 'int',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'price',
            type: 'int',
          },
          {
            name: 'transmission',
            type: 'varchar',
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'location',
            type: 'varchar',
          },
          {
            name: 'region',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          ...timestamps(),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('car');
  }
}
