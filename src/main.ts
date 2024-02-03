import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import logLevels from './utils/log.levels';
import {
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';
  const app = await NestFactory.create(AppModule, {
    logger: logLevels(isProduction),
  });
  const configService = app.get(ConfigService);
  const port = configService.get<string>('APP_PORT');
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.listen(parseInt(port));
}
bootstrap();
