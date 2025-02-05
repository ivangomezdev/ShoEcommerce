import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/sequelize";
export class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER, // Tipo de dato para el ID
      autoIncrement: true, // Incremento automático
      primaryKey: true, // Clave primaria
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users", 
        key: "id",
      },
    },
    transactionId:{
      type:DataTypes.STRING
    },

    amount: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "Payment" }
);
