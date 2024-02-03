import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
config();
interface LocalConnectionOptions extends PostgresConnectionOptions {
  seeds?: string[];
  factories?: string[];
}

const ormConnectionConfig: LocalConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true,
};

export default ormConnectionConfig;
