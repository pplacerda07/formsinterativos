"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { gargaloOptions } from "@/lib/options";

export function Step3Gargalo() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="O que mais está te atrapalhando hoje?"
      subtitle="A gente já mostra na demo como o ADS ERP resolve exatamente isso."
    >
      <Controller
        name="gargalo"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="gargalo"
            value={field.value}
            onChange={field.onChange}
            options={gargaloOptions}
            columns={1}
            size="lg"
            error={errors.gargalo?.message}
          />
        )}
      />
    </StepShell>
  );
}
