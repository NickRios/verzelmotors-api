import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Inject, Service } from 'typedi';
import uploadConfig from '@config/upload';
import {
  Get,
  JsonController,
  Param,
  Post,
  Body,
  Put,
  OnUndefined,
  Delete,
  QueryParams,
  OnNull,
  Authorized,
  Patch,
  UploadedFile,
} from 'routing-controllers';

import {
  CreateCarProps,
  CreateCarService,
  UpdateCarProps,
  UpdateImageCarProps,
  UpdateCarService,
  UpdateImageCarService,
  FindCarService,
  CarQueryParams,
  CarDTO,
} from '@services/car';

import { Car } from '@models/car';

import { Page } from '@shared/pagination';

@Service()
@JsonController('/cars')
export class CarsController {
  @Inject()
  private createCarService: CreateCarService;

  @Inject()
  private readonly findCarService: FindCarService;

  @Inject()
  private updateCarService: UpdateCarService;

  @Inject()
  private updateCarImageService: UpdateImageCarService;

  @InjectRepository(Car)
  private repository: Repository<Car>;

  @Authorized(['ADM', 'USER'])
  @Get()
  async index(@QueryParams() query: CarQueryParams): Promise<Page<CarDTO>> {
    return this.findCarService.findPage(query);
  }

  @Authorized(['ADM'])
  @Get('/:id')
  @OnUndefined(404)
  async show(@Param('id') id: number): Promise<CarDTO> {
    return this.findCarService.findOne(id);
  }

  @Authorized(['ADM'])
  @Post()
  async store(@Body() car: CreateCarProps): Promise<Car> {
    return this.createCarService.create(car);
  }

  @Authorized(['ADM'])
  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() car: UpdateCarProps,
  ): Promise<Car> {
    return this.updateCarService.update(id, car);
  }

  @Authorized(['ADM'])
  @Patch('/update-image/:id')
  async updateImage(
    @Param('id') id: number,
    @Body() image: UpdateImageCarProps,
  ): Promise<Car> {
    console.log(image);
    return this.updateCarImageService.updateImage(id, image);
  }

  @Authorized(['ADM'])
  @Delete('/:id')
  @OnUndefined(200)
  @OnNull(404)
  async destroy(@Param('id') id: number): Promise<null | undefined> {
    const car = await this.repository.findOne({ where: { id } });

    if (!car) {
      return null;
    }

    await this.repository.delete(car.id);
    return undefined;
  }
}
