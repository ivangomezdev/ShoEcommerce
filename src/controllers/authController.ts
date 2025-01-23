import { sendVerificationEmail } from "@/lib/nodeMailer";
import {  Auth } from "../models/relations";
import { singToken } from "../lib/jsonwebtoken";

//Creamos / encontramos un usuario x su email (de no existir lo creamos)
export const createOrFindUser = async (email: string) => {
  const newCode = createCode() as number;

  const [auth, created] = await Auth.findOrCreate({
    where: { email: email },
    defaults: {
      verificationCode: newCode,
      codeUsed: false,
    },
  });

  //si el usuario fue creado/encontrado enviamos un email con el codigo
  if (auth && created == true) {
    sendVerificationEmail(email, newCode);
  } else if (auth && created == false) {
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
  if (validate) {
      const authId = await validate.get("id") as string;
    changeStatusCode(email);
    singToken(authId)
  } else {
    console.log("codigo incorrecto");
  }
  return validate;
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
