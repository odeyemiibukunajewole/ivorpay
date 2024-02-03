import { Module } from '@nestjs/common';
import { RestaurantService } from './service/restaurant.service';
import { RestaurantController } from './controller/restaurant.controller';

@Module({
  imports: [],
  controllers: [
    RestaurantController,
  ],
  providers: [RestaurantService],
  exports: [],
})
export class RestaurantModule {}
