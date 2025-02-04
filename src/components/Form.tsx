import React, { useEffect } from "react";
import "./form.css";
import { FormButton } from "./ui/Buttons";
import { useApiRequest } from "@/hooks/UseAuth";

import { useCookies } from "react-cookie";
import { useFormHandler } from "@/hooks/UseForm";


type FormTypes = {
  data: {
    formPlaceholder: string;
    formType: string;
    name: string;
  }[];
  formButtonText: string;
  path: string;
};

const Form = ({ data, formButtonText, path }: FormTypes) => {
  const [cookies, setCookie] = useCookies(["token"]);
  const { dataForm, handleSubmit, submitted } = useFormHandler();
  console.log(cookies);
  

//fetch
  const {response, error } = useApiRequest(path,dataForm,submitted);

  useEffect(() => {

    if (!response) return; // No hacer nada si no hay respuesta
    const [cookies, setCookie] = useCookies(["token"]);
    const currentPath = window.location.pathname; // Obtener solo la ruta, sin dominio
  
    switch (currentPath) {
      case "/auth":
        window.location.href = "/auth/token";
        break;
  
      case "/auth/token":
        setCookie("token", response, { path: "/", maxAge: 60 * 60 * 24 * 7 });
        window.location.href = "/me";
        break;
  
      case "/me/userconfig":
        window.location.href = "/me";
        break;
  
      default:
        break;
    }
  }, [response]);



  const formData = data.map((i, index) => {
    return (
      <>
        <input
        required={true}
          key={index}
          name={i.name}
          type={i.formType}
          placeholder={i.formPlaceholder}
        />
      </>
    );
  });

  return (
    <form onSubmit={handleSubmit} className="form__content">
      {formData}
      {error && <p style={{ color: "red" }}>Codigo incorrecto</p>}
      <FormButton>{formButtonText}</FormButton>
    </form>
  );
};

export default Form;
