import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const sqlConfig = registerAs('database', () => ({
  dialect: <Dialect>process.env.SQL_DIALECT || 'mysql',
  logging: process.env.SQL_LOGGING === 'true' ? true : false,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABSE_PASSWORD,
  database: process.env.DATABSE_NAME,
  autoLoadEntities: true,
  synchronize: true,
}));
