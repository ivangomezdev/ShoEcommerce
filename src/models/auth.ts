import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/sequelize";
export class Auth extends Model {}

Auth.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    verificationCode: {
      type: DataTypes.INTEGER,
    },
    codeUsed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "Auth" }
);
