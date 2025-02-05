import { User } from "./user";
import { Auth } from "./auth";
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




// Relación entre User y Payment
User.hasMany(Payment, { foreignKey: "userId",as:"user" });
Payment.belongsTo(User, { foreignKey: "userId",as:"payment" });


export { User, Auth,Payment, Product };