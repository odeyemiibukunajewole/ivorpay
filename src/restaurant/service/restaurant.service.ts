import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BaseRespositoryService } from 'src/base-repository.service';
import { Restaurant } from 'src/core/entity/restaurant.entity';
import { DataSource, Point } from 'typeorm';
import { RestaurantDto } from '../dto/restaurant.dto';
import { interfaceDto } from '../dto/interface.dto';
import { IsNumber } from 'class-validator';

@Injectable()
export class RestaurantService extends BaseRespositoryService<Restaurant> {
  private readonly logger = new Logger(Restaurant.name);
  constructor(datasource: DataSource) {
    super(Restaurant, datasource);
  }

  async findNearbyRestaurants(query: interfaceDto) {
    // try {

    const latitude = Number(query.latitude);
    const longitude = Number(query.longitude);

    const distance = Number(query.distance);

    if (
      !latitude ||
      !longitude ||
      isNaN(latitude) ||
      isNaN(longitude)
    ) {
      throw new NotFoundException();
    }

    if (distance < 0 || !distance || isNaN(distance)) {
      throw new BadRequestException();
    }
    const origin: Point = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    const restaurants = await this.baseRepository
      .createQueryBuilder('restaurant')
      .where(
        `ST_Distance(location, ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location))) > ${distance}`,
      )
      .orderBy(
        'ST_Distance(location, ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)))',
        'ASC',
      )
      .setParameters({
        origin: JSON.stringify(origin),
      })
      .getMany();

    if (!restaurants) {
      throw new NotFoundException();
    }

    return { restaurants };
    // } catch (e) {
    //   console.log(e)
    // }
  }

  async addRestaurant(restaurant: RestaurantDto) {
    try {
      // Create point from lat/lon

      const res = this.baseRepository.create({
        ...restaurant,
        location: {
          type: 'Point',
          coordinates: [restaurant.longitude, restaurant.latitude],
        },
      });
      return await this.baseRepository.save(res);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateRestaurant(id: string, restaurant: RestaurantDto) {
    try {
      const data = await this.getRestaurantById(id);

      return this.baseRepository.save({
        ...data,
        ...restaurant,
        location: {
          type: 'Point',
          coordinates: [restaurant.longitude, restaurant.latitude],
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getRestaurantById(id: string) {
    try {
      return await this.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async deleteRestaurant(id: string) {
    try {
      await this.getRestaurantById(id);

      return {
        response: 'restaurant deleted',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
