"use client";

import { useFormContext } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { Input } from "@/components/ui/Input";

export function Step1Identity() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Vamos começar pelo básico"
      subtitle="2 minutos do seu tempo. Ao final, você vai conversar com a nossa IA, o mesmo robô que prospecta pros nossos clientes."
    >
      <Input
        label="Como podemos te chamar?"
        placeholder="Seu primeiro nome"
        autoComplete="given-name"
        autoFocus
        error={errors.nome?.message}
        {...register("nome")}
      />
    </StepShell>
  );
}
