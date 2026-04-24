import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre es obligatorio")
    .max(50, "Máximo 50 caracteres"),

  company: z
    .string()
    .max(50, "Máximo 50 caracteres")
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .regex(/^[0-9+\s()-]{7,20}$/, "Teléfono inválido")
    .optional()
    .or(z.literal("")),

  email: z.string().email("Correo electrónico inválido"),

  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "Máximo 500 caracteres"),
});
