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
      title="Qual seu cargo na distribuidora?"
      subtitle="Pra nosso time já entrar na conversa adaptando o pitch pra você."
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
