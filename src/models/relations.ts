import { User } from "./user";
import { Auth } from './auth';

// Relación entre User y Auth: Un usuario tiene una sola entrada de autenticación
User.hasOne(Auth, {
  foreignKey: 'userId',  // Clave foránea en Auth
  as: 'auth',  // Alias para acceder a la autenticación
});

// Relación inversa: Auth pertenece a un usuario
Auth.belongsTo(User, {
  foreignKey: 'userId',  // Clave foránea en Auth
  as: 'user',  // Alias para acceder al usuario relacionado
});

export {User,Auth}