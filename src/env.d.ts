/// <reference path="../.astro/types.d.ts" />
// src/types/en.d.ts
import { JwtPayload } from 'jwt-decode';  // Importe JwtPayload de 'jwt-decode'

// Étend le type JwtPayload pour ajouter un champ 'role'
declare global {
  interface MyJwtPayload extends JwtPayload {
    role: string;  // Ajoute ici d'autres propriétés si nécessaire
  }
}
declare global {
    interface Window {
      role: string;
    }
  }
  