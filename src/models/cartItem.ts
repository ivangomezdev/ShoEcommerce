import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/sequelize";



export class CartItem extends Model {}

CartItem.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cart_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { model: "Carts", key: "id" } 
    },
    product_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { model: "Products", key: "productId" } 
    },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  },
  { sequelize, modelName: "CartItem" }
);


