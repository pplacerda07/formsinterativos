"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { perfilOptions } from "@/lib/options";

export function Step2Perfil() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Você já trabalha com revenda de semijoias?"
      subtitle="Nosso foco é o atacado para lojistas e revendedoras parceiras Gazin."
    >
      <Controller
        name="perfil"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="perfil"
            value={field.value}
            onChange={field.onChange}
            options={perfilOptions}
            columns={1}
            size="lg"
            error={errors.perfil?.message}
          />
        )}
      />
    </StepShell>
  );
}
