// eslint-disable-next-line @typescript-eslint/no-var-requires
import { SignJWT, jwtVerify } from "jose";


export const singToken = async (userId: string) => {
  const secret = new TextEncoder().encode(process.env.SECRET);

  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" }) // Algoritmo de firma
    .setIssuedAt() // Fecha de emisión
    .sign(secret); // Firma el token

    console.log(token);
    
  return token;
};

export const verifyToken = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET); // Convierte el secreto a Uint8Array
    const { payload } = await jwtVerify(token, secret); // Verifica el token
    return payload; // Devuelve los datos decodificados
  } catch (error) {
    console.error("Error al verificar el token:", error);
    return null; // Devuelve null si el token no es válido
  }
};
