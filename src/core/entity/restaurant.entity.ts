import { Column, Entity, Geometry, Index } from 'typeorm';
import { AppBaseEntity } from './base.enttity';

@Entity({ name: 'restaurant' })
@Index(['location'])
export class Restaurant extends AppBaseEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 8,
  })
  latitude: number;

  @Column({
    type: 'decimal',
    precision: 11,
    scale: 8,
  })
  longitude: number;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
  })
  location: Geometry;
}
