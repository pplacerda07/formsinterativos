import { Logo } from "@/components/brand/Logo";
import { FormWizard } from "@/components/form/FormWizard";
import { Bot, Zap, Target } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <header className="flex flex-col items-center gap-4 text-center">
          <Logo size="md" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.05]">
              Sua próxima conversa de vendas é com{" "}
              <span className="gradient-text">a nossa IA</span>.
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
              Preenche 2 minutos e fala direto com o robô que prospecta pros
              nossos clientes 24/7. Você vai testar o produto sendo atendido por
              ele.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            <Badge icon={<Bot className="h-3.5 w-3.5" />} label="100% IA" />
            <Badge icon={<Zap className="h-3.5 w-3.5" />} label="Resposta na hora" />
            <Badge icon={<Target className="h-3.5 w-3.5" />} label="Sem vendedor chato" />
          </div>
        </header>

        <FormWizard />

        <footer className="text-center text-xs text-text-muted/70 pt-4">
          © {new Date().getFullYear()} Be2B AI · bdr.be2b.tech
        </footer>
      </div>
    </main>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-surface/80 px-3 py-1 text-xs font-medium text-text-muted">
      <span className="text-accent-soft">{icon}</span>
      {label}
    </span>
  );
}
