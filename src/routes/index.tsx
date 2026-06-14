import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import pilates1 from "@/assets/pilates-1.jpg";
import pilates2 from "@/assets/pilates-2.jpg";
import pilates3 from "@/assets/pilates-3.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Users,
  GraduationCap,
  LineChart,
  Calendar,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero.jpg";
import methodImg from "@/assets/method.jpg";
import groupImg from "@/assets/group.jpg";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Hélio — Pilates & Mobilité à Bordeaux" },
      {
        name: "description",
        content:
          "Studio de Pilates en petits groupes (6 max) à Bordeaux. Coachs diplômés, progrès mesurés. Réserve ton premier cours d'essai gratuit.",
      },
      { property: "og:title", content: "Studio Hélio — Pilates & Mobilité à Bordeaux" },
      {
        property: "og:description",
        content:
          "Renforce ton corps sans le casser. Pilates en petits groupes (6 max), encadré, pour gagner en force, souplesse et sérénité.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "Studio Hélio — Pilates & Mobilité à Bordeaux" },
      {
        name: "twitter:description",
        content:
          "Pilates en petits groupes à Bordeaux. Premier cours offert.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Studio Hélio",
          description:
            "Studio de Pilates et mobilité en petits groupes à Bordeaux.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 rue des Remparts",
            addressLocality: "Bordeaux",
            postalCode: "33000",
            addressCountry: "FR",
          },
          telephone: "+33556000000",
          email: "hello@studiohelio.fr",
          openingHours: "Mo-Sa 07:00-21:00",
        }),
      },
    ],
  }),
  component: Page,
});

/* ───────────────────────── data ─────────────────────────── */

const NAV = [
  { href: "#methode", label: "Méthode" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const PILLARS = [
  {
    icon: Users,
    title: "Petits groupes (6 max)",
    body: "Chaque mouvement est corrigé. Zéro blessure, des progrès qui durent.",
  },
  {
    icon: GraduationCap,
    title: "Coachs diplômés",
    body: "3 coachs certifiés, +400h de formation chacun. Une vraie expertise.",
  },
  {
    icon: LineChart,
    title: "Progrès mesurés",
    body: "Bilan posture/mobilité à l'entrée, point tous les 2 mois.",
  },
];

const STEPS = [
  {
    icon: Calendar,
    title: "Tu réserves",
    body: "Ton cours d'essai gratuit, en moins d'une minute.",
  },
  {
    icon: ClipboardCheck,
    title: "On fait ton bilan",
    body: "15 minutes pour comprendre ta posture, ta mobilité et tes objectifs.",
  },
  {
    icon: Sparkles,
    title: "Tu progresses",
    body: "Tu choisis un créneau qui te va, on suit tes progrès dans le temps.",
  },
];

const PLANS = [
  {
    name: "Découverte",
    price: "Offert",
    suffix: "",
    desc: "1er cours d'essai pour faire le tour du studio.",
    features: ["Bilan posture inclus", "Sans engagement", "Coach dédié"],
    cta: "Je réserve",
    featured: false,
  },
  {
    name: "Illimité",
    price: "95€",
    suffix: "/mois",
    desc: "Tous les cours, à ton rythme. Le plus choisi.",
    features: ["Cours illimités", "Sans engagement", "Bilan tous les 2 mois"],
    cta: "Commencer",
    featured: true,
  },
  {
    name: "Carnet 10",
    price: "190€",
    suffix: "",
    desc: "10 séances, valables 3 mois. Idéal en complément.",
    features: ["10 cours au choix", "Valable 3 mois", "Transférable une fois"],
    cta: "Choisir",
    featured: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "En 2 mois mon mal de dos a disparu. Je n'aurais jamais cru.",
    name: "Camille R.",
    role: "Élève depuis 4 mois",
    img: t1,
  },
  {
    quote: "Les petits groupes changent tout, on n'est pas un numéro.",
    name: "Marc D.",
    role: "Élève depuis 1 an",
    img: t2,
  },
  {
    quote: "Le seul sport que je n'ai pas lâché.",
    name: "Inès B.",
    role: "Élève depuis 6 mois",
    img: t3,
  },
];

const FAQ = [
  {
    q: "Faut-il être souple pour commencer ?",
    a: "Non, justement. La grande majorité de nos élèves arrivent sans aucune souplesse particulière — on construit ça ensemble, à ton rythme.",
  },
  {
    q: "Combien de fois par semaine ?",
    a: "1 à 3 fois selon ton objectif. Pour des résultats visibles sur la posture et les douleurs, on recommande 2 séances hebdo.",
  },
  {
    q: "C'est adapté après une blessure ?",
    a: "Oui, avec l'accord de ton médecin. Nos coachs sont formés à la reprise post-blessure et adaptent chaque exercice.",
  },
  {
    q: "Comment j'annule un cours ?",
    a: "En un clic depuis ton espace, jusqu'à 12h avant le cours, sans frais. Au-delà, la séance est décomptée.",
  },
  {
    q: "Où se trouve le studio ?",
    a: "12 rue des Remparts à Bordeaux, en plein centre. Stations de tram à 3 min à pied.",
  },
];

/* ───────────────────────── form ─────────────────────────── */

const phoneRegex = /^(?:(?:\+|00)33[\s.-]?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indique ton prénom et nom.")
    .max(80, "Trop long."),
  email: z.string().trim().email("Adresse email invalide.").max(255),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Numéro français invalide (ex. 06 12 34 56 78)."),
  slot: z.string().min(1, "Choisis un créneau."),
  message: z.string().max(500, "500 caractères max.").optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

/* ───────────────────────── page ─────────────────────────── */

function Page() {
  return (
    <div className="relative min-h-dvh bg-background text-foreground antialiased overflow-x-hidden">
      <div className="ambient-blobs" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main id="main">
          <Hero />
          <LogosMarquee />
          <Pillars />
          <PilatesStrip />
          <Method />
          <SuccessStory />
          <Pricing />
          <Testimonials />
          <Faq />
          <ContactCta />
        </main>
        <Footer />
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "!glass !text-foreground !rounded-2xl",
          },
        }}
      />
    </div>
  );
}

/* ───────────────── Reveal (fade-in on scroll) ───────────────── */

function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...rest
}: {
  as?: React.ElementType;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible || undefined}
      className={cn("reveal", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ───────────────── Logos marquee ───────────────── */

const LOGOS = [
  "Maison Lune", "Atelier Vélo", "Café Aldo", "L'Orangerie",
  "Studio Nord", "Botanic & Co", "Maison Pivoine", "Kura Bordeaux",
];

function LogosMarquee() {
  return (
    <section aria-label="Ils nous font confiance" className="py-10 md:py-14">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-soft">
          Ils nous font confiance
        </p>
        <div className="marquee-mask mt-6 overflow-hidden">
          <div className="marquee gap-12 md:gap-16 py-4">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={i}
                className="text-display text-2xl md:text-3xl text-ink-soft/70 hover:text-foreground transition-colors whitespace-nowrap"
                aria-hidden={i >= LOGOS.length}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── Pilates strip (fade-in images) ───────────────── */

function PilatesStrip() {
  const imgs = [
    { src: pilates1, alt: "Élève sur reformer en pleine extension, lumière naturelle" },
    { src: pilates3, alt: "Coach corrigeant la posture d'une élève à genoux" },
    { src: pilates2, alt: "Pieds nus sur le tapis, instant calme avant la séance" },
  ];
  return (
    <section aria-label="Le studio en images" className="py-12 md:py-20">
      <div className="container-page grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {imgs.map((img, i) => (
          <Reveal
            key={i}
            delay={i * 180}
            className={cn(
              "relative overflow-hidden rounded-3xl shadow-soft aspect-[4/5]",
              i === 1 && "sm:translate-y-6",
            )}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── Success story ───────────────── */

function SuccessStory() {
  const stats = [
    { k: "−82%", v: "de douleurs lombaires rapportées après 8 semaines" },
    { k: "94%", v: "des élèves reviennent le mois suivant" },
    { k: "+12 cm", v: "de gain moyen en flexion (test bout des doigts)" },
    { k: "4.9/5", v: "note moyenne sur 230 avis" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Cas client · Camille, 38 ans
          </span>
          <h2 className="text-display mt-6 text-[clamp(2rem,4vw,3rem)] leading-[1.05]">
            « Je suis venue pour mon dos.{" "}
            <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
              Je suis restée pour le reste.
            </em>{" "}»
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-lg">
            Hernie discale, 2 ans d'arrêt sport, peur de bouger. Après 8 semaines
            (2 séances/sem.), Camille reprend la course — sans douleur. Bilan
            posture refait tous les 2 mois, programme ajusté à chaque étape.
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.k}
              delay={i * 120}
              className="glass glass-sheen hover-lift rounded-3xl p-6 md:p-8"
            >
              <div className="text-display text-4xl md:text-5xl text-terracotta tracking-tight">
                {s.k}
              </div>
              <p className="mt-3 text-sm md:text-base text-ink-soft leading-snug">
                {s.v}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────── header ───────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-3 md:top-5 z-50">
      <div className="container-page">
        <div
          className={cn(
            "glass-strong flex h-14 md:h-16 items-center justify-between gap-4 rounded-full px-3 pl-5 md:pl-6 md:pr-3 transition-all duration-300",
            scrolled ? "shadow-card" : "",
          )}
        >
          <a href="#top" aria-label="Studio Hélio — accueil" className="flex items-center gap-2">
            <span className="text-display text-lg md:text-xl font-medium tracking-tight">
              Studio<span className="text-terracotta">·</span>Hélio
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full px-5 h-10">
              <a href="#contact">Cours d'essai gratuit</a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden fixed inset-x-3 top-20 z-40 glass-strong rounded-3xl transition-[opacity,transform] duration-300",
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-1 p-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-display text-3xl py-3 border-b border-border/60"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-6 rounded-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Cours d'essai gratuit
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

/* ───────────────────────── hero ─────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-12 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Pilates & mobilité — Bordeaux
          </span>

          <h1 className="text-display mt-6 text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-tight">
            Renforce ton corps{" "}
            <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
              sans le casser.
            </em>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
            Pilates en petits groupes (6 max), encadré, pour gagner en force,
            souplesse et sérénité. Coachs diplômés, progrès mesurés.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="cta-glow text-cream rounded-full px-7 h-12 text-base">
              <a href="#contact">
                Réserver mon cours d'essai
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-5 h-12 text-base text-foreground hover:bg-cream-deep"
            >
              <a href="#methode">Découvrir la méthode</a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["6", "max / cours"],
              ["3", "coachs certifiés"],
              ["1er", "cours offert"],
            ].map(([k, v]) => (
              <div key={v} className="border-l-2 border-terracotta/60 pl-3">
                <dt className="text-display text-2xl md:text-3xl">{k}</dt>
                <dd className="text-xs text-ink-soft mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <img
              src={heroImg}
              alt="Élève en posture de Pilates dans le studio Hélio, lumière naturelle douce"
              width={1536}
              height={1280}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="hidden md:flex absolute -left-6 bottom-6 lg:-left-10 items-center gap-3 rounded-2xl glass-strong px-4 py-3 max-w-[260px]">
            <div className="flex -space-x-2">
              {[t1, t2, t3].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-9 w-9 rounded-full object-cover border-2 border-background"
                />
              ))}
            </div>
            <div className="text-xs leading-snug">
              <div className="font-medium">+ 200 élèves</div>
              <div className="text-ink-soft">nous font confiance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── pillars ──────────────────────── */

function Pillars() {
  return (
    <section className="py-20 md:py-28 border-t border-border/60">
      <div className="container-page">
        <SectionTitle eyebrow="Pourquoi Hélio" title="Trois piliers, zéro compromis." />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl glass glass-sheen hover-lift p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-display mt-6 text-2xl">{p.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── method ───────────────────────── */

function Method() {
  return (
    <section id="methode" className="py-20 md:py-28 bg-cream-deep/60">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <img
              src={methodImg}
              alt="Coach corrigeant la posture d'une élève en séance"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionTitle eyebrow="Comment ça se passe" title="Trois étapes, et c'est parti." />

          <ol className="mt-10 space-y-2">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="group flex gap-5 py-6 border-b border-border/60 last:border-b-0"
              >
                <div className="flex flex-col items-center">
                  <span className="text-display text-terracotta text-2xl w-8 text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-4 w-4 text-terracotta shrink-0" />
                    <h3 className="text-display text-xl md:text-2xl">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-ink-soft leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button asChild size="lg" className="mt-10 rounded-full">
            <a href="#contact">
              Commencer maintenant
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── pricing ──────────────────────── */

function Pricing() {
  return (
    <section id="tarifs" className="py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          eyebrow="Tarifs"
          title="Des formules simples, sans engagement."
          subtitle="Le premier cours est offert. Tu vois si on est faits l'un pour l'autre — puis tu choisis."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 hover-lift",
                plan.featured
                  ? "bg-foreground text-background border border-foreground shadow-card md:-translate-y-4"
                  : "glass glass-sheen",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-3 py-1 text-xs text-cream">
                  Le plus choisi
                </span>
              )}
              <h3 className="text-display text-2xl">{plan.name}</h3>
              <p
                className={cn(
                  "text-sm mt-1",
                  plan.featured ? "text-background/70" : "text-ink-soft",
                )}
              >
                {plan.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-display text-5xl tracking-tight">{plan.price}</span>
                {plan.suffix && (
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-background/70" : "text-ink-soft",
                    )}
                  >
                    {plan.suffix}
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "h-4 w-4 mt-0.5 shrink-0",
                        plan.featured ? "text-terracotta" : "text-terracotta",
                      )}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2 border-t border-current/10" />
              <Button
                asChild
                size="lg"
                variant={plan.featured ? "secondary" : "default"}
                className={cn(
                  "mt-6 rounded-full",
                  plan.featured
                    ? "bg-terracotta text-cream hover:bg-terracotta-deep"
                    : "",
                )}
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── testimonials ─────────────────── */

function Testimonials() {
  return (
    <section id="avis" className="py-20 md:py-28 bg-foreground text-cream relative overflow-hidden">
      <div className="container-page">
        <SectionTitle eyebrow="Ils nous font confiance" title="Des résultats, pas des promesses." />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl glass-dark hover-lift p-8 text-cream"
            >
              <blockquote className="text-display text-xl md:text-[1.35rem] leading-snug flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <img
                  src={t.img}
                  alt=""
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-cream/60 text-xs">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── faq ──────────────────────────── */

function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionTitle eyebrow="FAQ" title="Tu te demandes&nbsp;?" />
          <p className="mt-6 text-ink-soft">
            Une question qui n'est pas listée&nbsp;? Écris-nous,
            on répond en quelques heures.
          </p>
          <Button asChild variant="ghost" className="mt-4 px-0 hover:bg-transparent">
            <a href="mailto:hello@studiohelio.fr" className="text-terracotta">
              hello@studiohelio.fr →
            </a>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-display text-lg md:text-xl py-6 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft leading-relaxed pb-6 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── contact ──────────────────────── */

function ContactCta() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden"
    >
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs text-background/70">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Cours d'essai gratuit
          </span>
          <h2 className="text-display mt-6 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Viens essayer.{" "}
            <em className="not-italic text-terracotta" style={{ fontStyle: "italic" }}>
              C'est offert.
            </em>
          </h2>
          <p className="mt-6 text-background/75 max-w-md leading-relaxed">
            Choisis un créneau, on te recontacte dans la journée pour confirmer.
            Pas de carte, pas d'engagement.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <ContactLine icon={MapPin}>12 rue des Remparts, Bordeaux</ContactLine>
            <ContactLine icon={Clock}>Lun – Sam · 7h – 21h</ContactLine>
            <ContactLine icon={Phone}>
              <a href="tel:+33556000000" className="hover:text-terracotta">
                05 56 00 00 00
              </a>
            </ContactLine>
            <ContactLine icon={Mail}>
              <a href="mailto:hello@studiohelio.fr" className="hover:text-terracotta">
                hello@studiohelio.fr
              </a>
            </ContactLine>
          </div>

          <div className="relative mt-10 hidden lg:block aspect-[16/10] rounded-2xl overflow-hidden">
            <img
              src={groupImg}
              alt="Petit groupe en séance de Pilates au Studio Hélio"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-background/85">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/10">
        <Icon className="h-4 w-4" />
      </span>
      <span>{children}</span>
    </div>
  );
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", phone: "", slot: "", message: "" },
    mode: "onTouched",
  });

  const slotValue = watch("slot");

  const onSubmit = async (values: BookingValues) => {
    // Faux envoi — démonstration.
    await new Promise((r) => setTimeout(r, 900));
    console.info("[booking] payload", values);
    toast.success("Merci, on te recontacte sous 24h.");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-background text-foreground p-10 md:p-12 shadow-card text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-display mt-6 text-3xl">Merci, c'est noté.</h3>
        <p className="mt-3 text-ink-soft max-w-md mx-auto">
          On te recontacte dans les 24h ouvrées pour caler ton premier cours.
          Tu peux fermer cette fenêtre — ou revenir voir le studio juste en dessous.
        </p>
        <Button
          variant="ghost"
          className="mt-6 text-terracotta hover:bg-terracotta/10"
          onClick={() => setSubmitted(false)}
        >
          Faire une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl bg-background text-foreground p-6 md:p-10 shadow-card"
      aria-label="Formulaire de réservation"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          label="Nom complet"
          id="name"
          error={errors.name?.message}
          input={
            <Input
              id="name"
              autoComplete="name"
              placeholder="Camille Renard"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
          }
        />
        <Field
          label="Email"
          id="email"
          error={errors.email?.message}
          input={
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="camille@email.fr"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
          }
        />
        <Field
          label="Téléphone"
          id="phone"
          error={errors.phone?.message}
          input={
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="06 12 34 56 78"
              aria-invalid={!!errors.phone}
              {...register("phone")}
            />
          }
        />
        <Field
          label="Créneau souhaité"
          id="slot"
          error={errors.slot?.message}
          input={
            <Select
              value={slotValue}
              onValueChange={(v) =>
                setValue("slot", v, { shouldValidate: true, shouldTouch: true })
              }
            >
              <SelectTrigger id="slot" aria-invalid={!!errors.slot}>
                <SelectValue placeholder="Choisis un créneau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matin">Matin (7h – 10h)</SelectItem>
                <SelectItem value="midi">Midi (12h – 14h)</SelectItem>
                <SelectItem value="soir">Soir (17h – 21h)</SelectItem>
                <SelectItem value="weekend">Week-end</SelectItem>
              </SelectContent>
            </Select>
          }
        />
      </div>

      <Field
        className="mt-5"
        label="Un mot pour nous (optionnel)"
        id="message"
        error={errors.message?.message}
        input={
          <textarea
            id="message"
            rows={3}
            placeholder="Une blessure, un objectif, une question…"
            className="flex w-full min-h-[88px] rounded-lg border border-input bg-background px-3 py-2 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
            {...register("message")}
          />
        }
      />

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-soft">
          En envoyant, tu acceptes d'être recontacté(e) par Studio Hélio.
          Aucune donnée n'est partagée.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="rounded-full px-7 h-12 text-base"
        >
          {isSubmitting ? "Envoi…" : "Réserver mon cours d'essai"}
          {!isSubmitting && <ArrowRight className="ml-1 h-4 w-4" />}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  input,
  error,
  className,
}: {
  label: string;
  id: string;
  input: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
      {input}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/* ───────────────────────── footer ───────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-display text-2xl">
            Studio<span className="text-terracotta">·</span>Hélio
          </div>
          <p className="mt-3 text-sm text-ink-soft max-w-xs">
            Studio de Pilates et mobilité à Bordeaux. Petits groupes,
            grand soin.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft">Studio</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>12 rue des Remparts, Bordeaux</li>
            <li>Lun – Sam · 7h – 21h</li>
            <li>
              <a href="tel:+33556000000" className="hover:text-terracotta">
                05 56 00 00 00
              </a>
            </li>
            <li>
              <a href="mailto:hello@studiohelio.fr" className="hover:text-terracotta">
                hello@studiohelio.fr
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-terracotta">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hairline" />
      <div className="container-page py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-ink-soft">
        <span>© {new Date().getFullYear()} Studio Hélio · Tous droits réservés</span>
        <span>Fait à Bordeaux, avec soin.</span>
      </div>
    </footer>
  );
}

/* ───────────────────────── shared ───────────────────────── */

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.2em] text-terracotta">{eyebrow}</div>
      <h2
        className="text-display mt-4 text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="mt-4 text-ink-soft leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
