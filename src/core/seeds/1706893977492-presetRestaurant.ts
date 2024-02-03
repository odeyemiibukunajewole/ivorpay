import { MigrationInterface, QueryRunner } from 'typeorm';
import { Restaurant } from '../entity/restaurant.entity';

export class PresetSuperAdmin1681936990141 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Restaurant).insert([
      {
        name: 'Cafe Delight',
        address: '123 Main St, New York, NY',
        latitude: 40.7112,
        longitude: -74.0055,
        location: {
          type: 'Point',
          coordinates: [40.7112, -74.0055],
        },
      },
      {
        name: 'Pasta Paradise',
        address: '456 Elm St, New York, NY',
        latitude: 40.7145,
        longitude: -74.0082,
        location: {
          type: 'Point',
          coordinates: [40.7145, -74.0082],
        },
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Restaurant).delete({});
  }
}
