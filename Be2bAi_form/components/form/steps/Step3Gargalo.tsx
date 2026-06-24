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
      title="Onde tá doendo de verdade?"
      subtitle="A IA usa essa resposta pra abrir a conversa direto no seu problema."
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
