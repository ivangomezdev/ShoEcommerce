import { sendVerificationEmail } from "@/lib/nodeMailer";
import { Auth, User } from "../models/relations";
import { singToken } from "../lib/jsonwebtoken";

export const createOrFindUser = async (email: string) => {
  const newCode = createCode() as number;

  // Buscar o crear usuario
  const [user, userCreated] = await User.findOrCreate({
    where: { email },
    defaults: {
      name: "undefined",
      address: "undefined",
    },
  });

  // Buscar o crear autenticación asociada al usuario
  const [auth, created] = await Auth.findOrCreate({
    where: { userId: user.get("id") }, // Buscamos por userId en vez de email
    defaults: {
      email, // Guardamos el email también
      verificationCode: newCode,
      codeUsed: false,
      userId: user.get("id"), // Asociamos el auth al usuario
    },
  });

  // Enviar email con el código si es necesario
  if (created) {
    sendVerificationEmail(email, newCode);
  } else {
    newCodeGenerate(email, newCode);
    sendVerificationEmail(email, newCode);
  }

  return "Envio de data OK";
};

//Creamos un codigo que validaremos luego.
const createCode = () => {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
};

//validar codigo
export const validateCode = async (code: number, email: string) => {
  const validate = await Auth.findOne({ where: { verificationCode: code } });
  if (!validate) {
    console.log("❌ Código incorrecto");
    return null; // Evita continuar si la validación falla
  }

  const authId = validate.get("id") as string;
  await changeStatusCode(email);

  return singToken(authId); // Solo ejecuta esto si el código es válido
};

//Cambiar Status a USADO ((TRUE))
export const changeStatusCode = async (email: string) => {
  await Auth.update(
    { codeUsed: true },
    {
      where: {
        email: email,
      },
    }
  );
};

// Generar nuevo codigo para usuarios creados anteriormente
export const newCodeGenerate = async (email: string, code: number) => {
  await Auth.update(
    { codeUsed: false, verificationCode: code },
    {
      where: {
        email: email,
      },
    }
  );
};
