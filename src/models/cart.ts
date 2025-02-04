import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/sequelize";


export class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Permite carritos anónimos
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  { sequelize, modelName: "Cart" }
);

