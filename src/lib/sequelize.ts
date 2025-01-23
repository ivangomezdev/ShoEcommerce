

import pg from 'pg';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgresql://neondb_owner:npg_1UG5dOXlFiqR@ep-summer-brook-a835f250.eastus2.azure.neon.tech/neondb?sslmode=require', {
  dialect: 'postgres',
  dialectModule: pg
});