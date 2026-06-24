"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { cargoOptions } from "@/lib/options";

export function Step2Cargo() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Qual seu cargo?"
      subtitle="Pra IA já saber com quem está falando e adaptar o pitch."
    >
      <Controller
        name="cargo"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="cargo"
            value={field.value}
            onChange={field.onChange}
            options={cargoOptions}
            columns={2}
            error={errors.cargo?.message}
          />
        )}
      />
    </StepShell>
  );
}
