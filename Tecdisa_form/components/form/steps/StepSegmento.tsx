"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { segmentoOptions } from "@/lib/options";

export function StepSegmento() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Qual o segmento da sua distribuidora?"
      subtitle="Assim já preparamos exemplos reais do ADS ERP no seu nicho."
    >
      <Controller
        name="segmento"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="segmento"
            value={field.value}
            onChange={field.onChange}
            options={segmentoOptions}
            columns={2}
            error={errors.segmento?.message}
          />
        )}
      />
    </StepShell>
  );
}
