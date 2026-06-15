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
  segmento: z.string().min(1, "Selecione o segmento"),
  tamanhoTime: z.string().min(1, "Selecione o tamanho do time"),
  site: z.string().trim().optional().or(z.literal("")),
});

export const step3Schema = z.object({
  prospeccao: z.string().min(1, "Selecione uma opção"),
  volume: z.string().min(1, "Selecione o volume"),
  ferramentas: z.array(z.string()).min(1, "Marque pelo menos uma opção"),
  canal: z.string().min(1, "Selecione o canal principal"),
});

export const step4Schema = z.object({
  gargalo: z.string().min(1, "Selecione seu maior gargalo"),
  ticket: z.string().min(1, "Selecione o ticket médio"),
  meta: z
    .string()
    .trim()
    .min(10, "Conta um pouquinho mais (mín. 10 caracteres)")
    .max(240, "Máx. 240 caracteres"),
});

export const step5Schema = z.object({
  investimento: z.string().min(1, "Selecione a faixa de investimento"),
  decisor: z.string().min(1, "Selecione quem decide"),
  urgencia: z.string().min(1, "Selecione a urgência"),
});

export const fullFormSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)
  .merge(step5Schema);

export type FormData = z.infer<typeof fullFormSchema>;

export const defaultValues: FormData = {
  nome: "",
  cargo: "",
  segmento: "",
  tamanhoTime: "",
  site: "",
  prospeccao: "",
  volume: "",
  ferramentas: [],
  canal: "",
  gargalo: "",
  ticket: "",
  meta: "",
  investimento: "",
  decisor: "",
  urgencia: "",
};
