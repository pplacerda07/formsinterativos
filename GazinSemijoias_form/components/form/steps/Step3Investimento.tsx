"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { investimentoOptions } from "@/lib/options";

export function Step3Investimento() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Qual o seu faturamento mensal atual com semijoias?"
      subtitle="Ou quanto você pretende investir inicialmente."
    >
      <Controller
        name="investimento"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="investimento"
            value={field.value}
            onChange={field.onChange}
            options={investimentoOptions}
            columns={1}
            size="lg"
            error={errors.investimento?.message}
          />
        )}
      />
    </StepShell>
  );
}
