"use client";

import { useEffect, useRef, useState } from "react";
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
} from "@/lib/validators";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  trackCompleteRegistration,
  trackInicioForm,
  trackLead,
  trackWhatsAppLead,
  isLeadQualificado,
} from "@/lib/pixel";
import { cn } from "@/lib/utils";

import { ProgressBar } from "./ProgressBar";
import { Button } from "@/components/ui/Button";
import { Step1Identity } from "./steps/Step1Identity";
import { Step2Cargo } from "./steps/Step2Cargo";
import { Step3Gargalo } from "./steps/Step3Gargalo";
import { Step4Urgencia } from "./steps/Step4Urgencia";

const STORAGE_KEY = "be2b_form_v2";
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
  const inicioFormFired = useRef(false);

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

    // Dispara inicio_form uma unica vez ao avancar o Step 1 com nome valido.
    if (step === 1 && !inicioFormFired.current) {
      inicioFormFired.current = true;
      trackInicioForm();
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

    // Sinal de funil: preencheu o formulario inteiro.
    trackCompleteRegistration({
      content_name: "Be2B AI Form",
      content_category: fullResult.data.cargo,
      content_id: contentId,
    });

    // Lead qualificado — dispara SOMENTE se o lead atende os criterios.
    // Ajuste os criterios em lib/pixel.ts (CARGOS_DECISOR / URGENCIAS_QUENTES).
    if (isLeadQualificado(fullResult.data.cargo, fullResult.data.urgencia)) {
      trackLead({
        content_name: "Be2B AI Form - Qualified",
        content_category: fullResult.data.cargo,
        content_id: contentId,
      });
    }

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  /** Dispara WhatsAppLead e abre o WhatsApp. Usado no botao da tela final. */
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!waUrl) return;

    const values = methods.getValues();
    const contentId = `urgencia-${values.urgencia
      .toLowerCase()
      .slice(0, 30)
      .replace(/\s+/g, "-")}`;

    trackWhatsAppLead({
      content_name: "Be2B AI Form - WhatsApp",
      content_category: values.cargo,
      content_id: contentId,
    });

    // fbq usa sendBeacon internamente — sobrevive a navegacao.
    window.open(waUrl, "_blank", "noopener,noreferrer");
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
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="text-sm text-text-primary/90 leading-relaxed">
              Você está prestes a conversar com a nossa IA, o mesmo agente que
              prospecta pros nossos clientes 24/7. Ele já recebeu seu briefing.
              Manda "oi" que ele assume daqui.
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
              Pronto! Clica no botão abaixo pra abrir o WhatsApp e falar com a
              IA.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-violet px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <Bot className="h-4 w-4" />
              Abrir conversa com a IA
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
                <Bot className="h-5 w-5" />
                Quer testar o produto? É só falar com ele
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {step === TOTAL_STEPS && (
          <p className="text-center text-xs text-text-muted">
            Atendimento 100% por IA · Sem espera · Resposta na hora
          </p>
        )}
      </div>
    </FormProvider>
  );
}
