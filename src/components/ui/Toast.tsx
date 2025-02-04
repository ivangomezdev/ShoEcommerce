import React from "react";
import {
  CToast,
  CToastBody,
  CToastHeader,
} from "@coreui/react";

export const exampleToast = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        color="red"
      >
        <rect width="100%" height="100%" fill="red"></rect>
      </svg>
      <div className="fw-bold me-auto">Atención</div>
      <small>Ahora</small>
    </CToastHeader>
    <CToastBody>Producto eliminado con éxito.</CToastBody>
  </CToast>
);


export const addToast = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        color="red"
      >
        <rect width="100%" height="100%" fill="black"></rect>
      </svg>
      <div className="fw-bold me-auto">Atención</div>
      <small>Ahora</small>
    </CToastHeader>
    <CToastBody>Producto AGREGADO.</CToastBody>
  </CToast>
);