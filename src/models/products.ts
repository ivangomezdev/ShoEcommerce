import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/sequelize";
export class Product extends Model {}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
    },
    productPrice: {
      type: DataTypes.INTEGER,
    },
    productCategory: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    productStock:{
        type: DataTypes.INTEGER,
  
    },
    productDescription:{
        type: DataTypes.STRING,
  
    },
    productImage:{
        type: DataTypes.STRING,
  
    },
    brand:{
      type:DataTypes.STRING
    }
  },
  { sequelize, modelName: "Product" }
);
