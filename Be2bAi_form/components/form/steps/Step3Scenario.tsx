"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { CheckboxCardGroup } from "@/components/ui/CheckboxCard";
import {
  prospeccaoOptions,
  volumeOptions,
  ferramentasOptions,
  canalOptions,
} from "@/lib/options";

export function Step3Scenario() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Como funciona sua prospecção hoje?"
      subtitle="Esse pedaço ajuda a IA a entender seu nível de maturidade comercial."
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Hoje vocês fazem prospecção ativa?
        </label>
        <Controller
          name="prospeccao"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="prospeccao"
              value={field.value}
              onChange={field.onChange}
              options={prospeccaoOptions}
              columns={1}
              error={errors.prospeccao?.message}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Quantos leads vocês geram por mês?
        </label>
        <Controller
          name="volume"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="volume"
              value={field.value}
              onChange={field.onChange}
              options={volumeOptions}
              columns={2}
              error={errors.volume?.message}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Ferramentas que vocês usam hoje
          <span className="ml-2 text-xs font-normal text-text-muted">
            (pode marcar mais de uma)
          </span>
        </label>
        <Controller
          name="ferramentas"
          control={control}
          render={({ field }) => (
            <CheckboxCardGroup
              name="ferramentas"
              value={field.value || []}
              onChange={field.onChange}
              options={ferramentasOptions}
              columns={3}
              error={errors.ferramentas?.message as string | undefined}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Canal principal de abordagem
        </label>
        <Controller
          name="canal"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="canal"
              value={field.value}
              onChange={field.onChange}
              options={canalOptions}
              columns={2}
              error={errors.canal?.message}
            />
          )}
        />
      </div>
    </StepShell>
  );
}
