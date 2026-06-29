"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Headset, Sparkles } from "lucide-react";

import {
  defaultValues,
  FormData,
  fullFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from "@/lib/validators";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  trackCompleteRegistration,
  trackLead,
  trackWhatsAppLead,
} from "@/lib/pixel";
import { cn } from "@/lib/utils";

import { ProgressBar } from "./ProgressBar";
import { Button } from "@/components/ui/Button";
import { Step1Identity } from "./steps/Step1Identity";
import { Step2Cargo } from "./steps/Step2Cargo";
import { Step3Gargalo } from "./steps/Step3Gargalo";
import { Step4Urgencia } from "./steps/Step4Urgencia";

const STORAGE_KEY = "tecdisa_form_v1";
const TOTAL_STEPS = 4;

const stepSchemas = [step1Schema, step2Schema, step3Schema, step4Schema];

const stepFields: (keyof FormData)[][] = [
  ["nome"],
  ["cargo"],
  ["gargalo"],
  ["urgencia"],
];

export function FormWizard() {
  const [step, setStep] = useState(1);
  const [redirecting, setRedirecting] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

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
    setWaUrl(url);

    const contentId = `urgencia-${fullResult.data.urgencia
      .toLowerCase()
      .slice(0, 30)
      .replace(/\s+/g, "-")}`;

    trackCompleteRegistration({
      content_name: "Tecdisa Form",
      content_category: fullResult.data.cargo,
      content_id: contentId,
    });

    trackLead({
      content_name: "Tecdisa Form - Qualified",
      content_category: fullResult.data.cargo,
      content_id: contentId,
    });

    trackWhatsAppLead({
      content_name: "Tecdisa Form - WhatsApp",
      content_category: fullResult.data.cargo,
      content_id: contentId,
    });

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-6">
        <ProgressBar current={step} total={TOTAL_STEPS} />

        <div className="glass rounded-3xl p-6 sm:p-8 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div key={step}>
              {step === 1 && <Step1Identity />}
              {step === 2 && <Step2Cargo />}
              {step === 3 && <Step3Gargalo />}
              {step === 4 && <Step4Urgencia />}
            </motion.div>
          </AnimatePresence>
        </div>

        {step === TOTAL_STEPS && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-5 sm:p-6 flex items-start gap-3"
          >
            <div className="shrink-0 h-10 w-10 rounded-full bg-indigo-violet flex items-center justify-center shadow-glow">
              <Headset className="h-5 w-5 text-white" />
            </div>
            <div className="text-sm text-text-primary/90 leading-relaxed">
              Em segundos você cai no WhatsApp do nosso time comercial. Eles já
              recebem seu briefing pronto e te mostram o ADS ERP rodando no
              cenário da sua distribuidora.
            </div>
          </motion.div>
        )}

        {redirecting && waUrl && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-5 sm:p-6 flex flex-col items-center gap-3 text-center"
          >
            <p className="text-sm text-text-primary/90 leading-relaxed">
              Abrimos o WhatsApp em uma nova aba. Não apareceu? Toca no botão
              abaixo.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-violet px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <Headset className="h-4 w-4" />
              Falar com o time comercial
            </a>
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
            className={step === TOTAL_STEPS ? "px-8 py-4 text-base" : ""}
          >
            {step < TOTAL_STEPS ? (
              <>
                {step === TOTAL_STEPS - 1 ? "Quase lá" : "Continuar"}
                <ArrowRight className="h-4 w-4" />
              </>
            ) : redirecting ? (
              <>
                <Sparkles className="h-4 w-4 animate-pulse" />
                Abrindo WhatsApp...
              </>
            ) : (
              <>
                <Headset className="h-5 w-5" />
                Quero ver o ADS ERP funcionando
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {step === TOTAL_STEPS && (
          <p className="text-center text-xs text-text-muted">
            Demonstração ao vivo · Sem compromisso · Resposta na hora
          </p>
        )}
      </div>
    </FormProvider>
  );
}
