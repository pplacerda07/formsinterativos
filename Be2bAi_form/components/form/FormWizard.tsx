"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, Sparkles } from "lucide-react";

import {
  defaultValues,
  FormData,
  fullFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
} from "@/lib/validators";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackLead } from "@/lib/pixel";
import { cn } from "@/lib/utils";

import { ProgressBar } from "./ProgressBar";
import { Button } from "@/components/ui/Button";
import { Step1Identity } from "./steps/Step1Identity";
import { Step2Profile } from "./steps/Step2Profile";
import { Step3Scenario } from "./steps/Step3Scenario";
import { Step4Pain } from "./steps/Step4Pain";
import { Step5Commitment } from "./steps/Step5Commitment";

const STORAGE_KEY = "be2b_form_v1";
const TOTAL_STEPS = 5;

const stepSchemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
];

const stepFields: (keyof FormData)[][] = [
  ["nome"],
  ["cargo", "segmento", "tamanhoTime", "site"],
  ["prospeccao", "volume", "ferramentas", "canal"],
  ["gargalo", "ticket", "meta"],
  ["investimento", "decisor", "urgencia"],
];

export function FormWizard() {
  const [step, setStep] = useState(1);
  const [redirecting, setRedirecting] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(fullFormSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        methods.reset({ ...defaultValues, ...parsed });
      }
    } catch {}
  }, [methods]);

  useEffect(() => {
    const sub = methods.watch((values) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      } catch {}
    });
    return () => sub.unsubscribe();
  }, [methods]);

  const goNext = async () => {
    const values = methods.getValues();
    const schema = stepSchemas[step - 1];
    const result = schema.safeParse(values);
    const fields = stepFields[step - 1];

    fields.forEach((f) => methods.clearErrors(f));

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof FormData;
        if (fields.includes(path)) {
          methods.setError(path, { message: issue.message });
        }
      });
      return;
    }

    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleSubmit();
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    const values = methods.getValues();
    const fullResult = fullFormSchema.safeParse(values);
    if (!fullResult.success) return;

    setRedirecting(true);
    const url = buildWhatsAppUrl(fullResult.data);

    trackLead({
      content_name: "Be2B AI · Form Qualificação",
      content_category: fullResult.data.segmento,
    });

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}

    setTimeout(() => {
      window.location.href = url;
    }, 700);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-6">
        <ProgressBar current={step} total={TOTAL_STEPS} />

        <div className="glass rounded-3xl p-6 sm:p-8 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div key={step}>
              {step === 1 && <Step1Identity />}
              {step === 2 && <Step2Profile />}
              {step === 3 && <Step3Scenario />}
              {step === 4 && <Step4Pain />}
              {step === 5 && <Step5Commitment />}
            </motion.div>
          </AnimatePresence>
        </div>

        {step === 5 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-5 sm:p-6 flex items-start gap-3"
          >
            <div className="shrink-0 h-10 w-10 rounded-full bg-indigo-violet flex items-center justify-center shadow-glow">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="text-sm text-text-primary/90 leading-relaxed">
              Você está prestes a conversar com a nossa IA, o mesmo agente que
              prospecta pros nossos clientes 24/7. Ele já recebeu seu briefing.
              Manda "oi" que ele assume daqui.
            </div>
          </motion.div>
        )}

        <div
          className={cn(
            "flex items-center gap-3",
            step === 1 ? "justify-end" : "justify-between"
          )}
        >
          {step > 1 && (
            <Button
              type="button"
              variant="ghost"
              onClick={goBack}
              disabled={redirecting}
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          )}

          <Button
            type="button"
            onClick={goNext}
            disabled={redirecting}
            className={step === 5 ? "px-8 py-4 text-base" : ""}
          >
            {step < 5 ? (
              <>
                {step === 4 ? "Quase lá" : "Continuar"}
                <ArrowRight className="h-4 w-4" />
              </>
            ) : redirecting ? (
              <>
                <Sparkles className="h-4 w-4 animate-pulse" />
                Abrindo WhatsApp...
              </>
            ) : (
              <>
                <Bot className="h-5 w-5" />
                Quer testar o produto? É só falar com ele
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {step === 5 && (
          <p className="text-center text-xs text-text-muted">
            Atendimento 100% por IA · Sem espera · Resposta na hora
          </p>
        )}
      </div>
    </FormProvider>
  );
}
