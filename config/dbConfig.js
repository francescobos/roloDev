import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
import { config } from 'dotenv';
config( {path: join(__dirname, '../', '.env')} );

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(__dirname, '../data/', process.env.DATABASE),
  //logging: (msg) => console.log(`Sequelize: ${msg}`)
  logging: false
});