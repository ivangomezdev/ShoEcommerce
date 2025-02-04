import { User } from "./user";
import { Auth } from "./auth";
import { Cart } from "./cart";
import { CartItem } from "./cartItem";
import { Product } from "./products";
import { Payment } from "./buy";



// Un usuario tiene una autenticación
User.hasOne(Auth, {
    foreignKey: "userId",
    as: "authData", // Alias para consultas
  });
  
  // La autenticación pertenece a un usuario
  Auth.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });

// Relación entre User y Cart
User.hasOne(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

// Relación entre Cart y CartItem
Cart.hasMany(CartItem, { foreignKey: "cart_id" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

// Relación entre CartItem y Product
CartItem.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(CartItem, { foreignKey: "product_id" });

// Relación entre User y Payment
User.hasMany(Payment, { foreignKey: "user_id" });
Payment.belongsTo(User, { foreignKey: "user_id" });

// Relación entre Cart y Payment
Cart.hasOne(Payment, { foreignKey: "cart_id" });
Payment.belongsTo(Cart, { foreignKey: "cart_id" });

export { User, Auth, Cart, CartItem, Payment, Product };