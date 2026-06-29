import { z } from "zod";

export const step1Schema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome")
    .max(60, "Nome muito longo"),
});

export const step2Schema = z.object({
  cargo: z.string().min(1, "Selecione seu cargo"),
});

export const step3Schema = z.object({
  gargalo: z.string().min(1, "Selecione seu maior gargalo"),
});

export const step4Schema = z.object({
  urgencia: z.string().min(1, "Selecione a urgência"),
});

export const fullFormSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);

export type FormData = z.infer<typeof fullFormSchema>;

export const defaultValues: FormData = {
  nome: "",
  cargo: "",
  gargalo: "",
  urgencia: "",
};
