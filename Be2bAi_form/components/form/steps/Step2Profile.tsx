"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { Input } from "@/components/ui/Input";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import {
  cargoOptions,
  segmentoOptions,
  tamanhoTimeOptions,
} from "@/lib/options";

export function Step2Profile() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <StepShell
      title="Conta um pouco do seu cenário"
      subtitle="Pra IA já entrar na conversa sabendo com quem fala e adaptar o pitch."
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Qual seu cargo?
        </label>
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
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Segmento da empresa
        </label>
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
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Tamanho do time comercial
        </label>
        <Controller
          name="tamanhoTime"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="tamanhoTime"
              value={field.value}
              onChange={field.onChange}
              options={tamanhoTimeOptions}
              columns={2}
              error={errors.tamanhoTime?.message}
            />
          )}
        />
      </div>

      <Input
        label="Site da empresa (opcional)"
        placeholder="seusite.com.br"
        autoComplete="url"
        hint="Ajuda a IA a abrir contextualizada antes da conversa."
        {...register("site")}
      />
    </StepShell>
  );
}
