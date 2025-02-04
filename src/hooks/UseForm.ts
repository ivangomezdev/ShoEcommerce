import { FormEvent, useState } from "react";


export const useFormHandler = () => {
    const [submitted, setSubmitted] = useState(false);
    const [dataForm, setDataForm] = useState({
      email: "",
      code: "",
      name: "",
      address: "",
    });
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
  
      setDataForm({
        email: formData.get("email") as string || "",
        code: formData.get("code") as string || "",
        name: formData.get("nombre") as string || "",
        address: formData.get("direccion") as string || "",
      });
  
      setSubmitted(true);

      
    };
  
    return { dataForm, handleSubmit, submitted };
  };