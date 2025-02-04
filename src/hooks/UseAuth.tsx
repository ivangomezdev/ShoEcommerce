import { useCookies } from "react-cookie";
import useSWR from "swr";

export const fetcherAuth = async (url: string, body: {}, token: string) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Error en la solicitud");
  }

  // Espera a que se resuelva la promesa de json()
  const data = await res.json();

  return data; // Devuelve
};

export const useApiRequest = (
  path: string,
  dataForm: any,
  submitted: boolean
) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token?.token // Obtiene el token de las cookies

  const updatedFormData = {
    ...(dataForm.email || dataForm.code
      ? dataForm // Si email y code están presentes, enviar todo
      : { name: dataForm.name, address: dataForm.address }) // Si no, solo name y address
  };

  const { data: response, error } = useSWR(
    submitted ? `/api/${path}` : null,
    (url) => fetcherAuth(url, updatedFormData, token) // Pasamos los datos y el token
  );

  return { response, error };
};
