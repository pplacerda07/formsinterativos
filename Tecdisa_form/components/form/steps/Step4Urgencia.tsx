"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { urgenciaOptions } from "@/lib/options";

export function Step4Urgencia() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Última pergunta: qual a urgência?"
      subtitle="Pra nosso time priorizar o seu atendimento."
    >
      <Controller
        name="urgencia"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="urgencia"
            value={field.value}
            onChange={field.onChange}
            options={urgenciaOptions}
            columns={1}
            size="lg"
            error={errors.urgencia?.message}
          />
        )}
      />
    </StepShell>
  );
}
