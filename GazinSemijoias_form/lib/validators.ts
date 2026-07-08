import { z } from "zod";

export const step1Schema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome")
    .max(60, "Nome muito longo"),
});

export const step2Schema = z.object({
  perfil: z.string().min(1, "Selecione seu perfil"),
});

export const step3Schema = z.object({
  investimento: z.string().min(1, "Selecione seu investimento"),
});

export const step4Schema = z.object({
  cnpj: z.string().min(1, "Selecione sobre seu CNPJ"),
});

export const fullFormSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);

export type FormData = z.infer<typeof fullFormSchema>;

export const defaultValues: FormData = {
  nome: "",
  perfil: "",
  investimento: "",
  cnpj: "",
};
