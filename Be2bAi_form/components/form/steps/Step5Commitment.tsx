"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import {
  investimentoOptions,
  decisorOptions,
  urgenciaOptions,
} from "@/lib/options";

export function Step5Commitment() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Última parada"
      subtitle="Só pra IA saber a prioridade da sua conversa. Sem cobrar nada, prometido."
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Quanto investem hoje em prospecção/mês?
        </label>
        <Controller
          name="investimento"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="investimento"
              value={field.value}
              onChange={field.onChange}
              options={investimentoOptions}
              columns={2}
              error={errors.investimento?.message}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Quem decide a contratação?
        </label>
        <Controller
          name="decisor"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="decisor"
              value={field.value}
              onChange={field.onChange}
              options={decisorOptions}
              columns={2}
              error={errors.decisor?.message}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Qual a urgência?
        </label>
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
      </div>
    </StepShell>
  );
}
