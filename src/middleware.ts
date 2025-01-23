import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./lib/jsonwebtoken";


export async function middleware(request: NextRequest) {
  // Obtener el token del encabezado
  const header = request.headers;
  const token = header.get("authorization")?.split(" ")[1] as string;

  // Verificar el token
  const verifiedToken = await verifyToken(token);


    
  // Si el token es válido, permitir que la solicitud continúe
  if (verifiedToken) {
    return NextResponse.next();
    
  }
  
  if (!verifiedToken) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
}

// Configuración para aplicar el middleware a rutas específicas
export const config = {
  matcher: ["/api/me"], // Aplica el middleware a todas las rutas bajo /dashboard
};