import { Logo } from "@/components/brand/Logo";
import { FormWizard } from "@/components/form/FormWizard";
import { Gem, ShieldCheck, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <header className="flex flex-col items-center gap-4 text-center">
          <Logo size="md" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-primary leading-[1.05]">
              Semijoias que{" "}
              <span className="text-secondary">encantam e vendem</span>.
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
              Peças sofisticadas com garantia, qualidade e alto giro.
              Descubra como revender Gazin Semijoias e transforme seu negócio.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            <Badge icon={<Gem className="h-3.5 w-3.5" />} label="Peças exclusivas" />
            <Badge icon={<ShieldCheck className="h-3.5 w-3.5" />} label="Garantia de qualidade" />
            <Badge icon={<Sparkles className="h-3.5 w-3.5" />} label="Alto giro de vendas" />
          </div>
        </header>

        <FormWizard />

        <footer className="text-center text-xs text-text-muted/70 pt-4">
          © {new Date().getFullYear()} Gazin Semijoias
        </footer>
      </div>
    </main>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-white px-3 py-1 text-xs font-medium text-text-muted shadow-sm">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}
