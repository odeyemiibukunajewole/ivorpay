import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './configs/env.validation';
import ormConnectionConfig from './configs/orm.config';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import DatabaseLogger from './utils/database.logger';
import LogsMiddleware from './utils/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRoot({
      ...ormConnectionConfig,
      autoLoadEntities: true,
      logger: new DatabaseLogger(),
    }),
    RestaurantModule,

  ],
  controllers: [AppController],
  providers: [
    AppService,
    LoggingInterceptor,
    {
      provide: APP_INTERCEPTOR,
      useExisting: LoggingInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
