"use client";

import { useFormContext, Controller } from "react-hook-form";
import { FormData } from "@/lib/validators";
import { StepShell } from "../StepShell";
import { RadioCardGroup } from "@/components/ui/RadioCard";
import { Textarea } from "@/components/ui/Textarea";
import { gargaloOptions, ticketOptions } from "@/lib/options";

export function Step4Pain() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();

  const meta = watch("meta") || "";

  return (
    <StepShell
      title="Onde tá doendo de verdade?"
      subtitle="Essa parte é importante. A IA usa isso pra abrir a conversa direto no seu problema, sem rodeio."
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Qual seu MAIOR gargalo em vendas hoje?
        </label>
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
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-text-primary">
          Qual o ticket médio do seu cliente?
        </label>
        <Controller
          name="ticket"
          control={control}
          render={({ field }) => (
            <RadioCardGroup
              name="ticket"
              value={field.value}
              onChange={field.onChange}
              options={ticketOptions}
              columns={2}
              error={errors.ticket?.message}
            />
          )}
        />
      </div>

      <Textarea
        label="Onde você quer chegar nos próximos 90 dias?"
        placeholder="Ex: triplicar agendamentos sem contratar mais BDR / sair da planilha / abrir nova praça em SP..."
        maxLength={240}
        error={errors.meta?.message}
        counter={{ current: meta.length, max: 240 }}
        {...register("meta")}
      />
    </StepShell>
  );
}
