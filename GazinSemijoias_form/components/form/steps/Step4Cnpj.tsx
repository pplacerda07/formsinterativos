"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { cnpjOptions } from "@/lib/options";

export function Step4Cnpj() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Você possui CNPJ para comprar no atacado?"
      subtitle="Temos condições especiais para empresas e lojistas."
    >
      <Controller
        name="cnpj"
        control={control}
        render={({ field }) => (
          <RadioCardGroup
            name="cnpj"
            value={field.value}
            onChange={field.onChange}
            options={cnpjOptions}
            columns={1}
            size="lg"
            error={errors.cnpj?.message}
          />
        )}
      />
    </StepShell>
  );
}
