import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { RestaurantService } from '../service/restaurant.service';
import { RestaurantDto } from '../dto/restaurant.dto';
import { interfaceDto } from '../dto/interface.dto';

@Controller('restaurants')
export class RestaurantController {
  constructor(private restaurant: RestaurantService) {}
  @Post()
  async createRestaurant(@Body() restaurantDto: RestaurantDto) {
    return await this.restaurant.addRestaurant(restaurantDto);
  }

  @Get(':id')
  async getRestaurant(@Param('id') id: string) {
    return await this.restaurant.getRestaurantById(id);
  }

  @Get()
  async getRestaurants(@Query() query: interfaceDto) {
    return await this.restaurant.findNearbyRestaurants(query);
  }

  @Put(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() updateRestaurantDto: RestaurantDto,
  ) {
    return await this.restaurant.updateRestaurant(id, updateRestaurantDto);
  }

  @Delete(':id')
  async removeRestaurant(@Param('id') id: string) {
    return await this.restaurant.deleteRestaurant(id);
  }
}
