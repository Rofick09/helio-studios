import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { X, M as Menu, A as ArrowRight, U as Users, G as GraduationCap, C as ChartLine, a as Calendar, b as ClipboardCheck, S as Sparkles, c as Check, d as MapPin, e as Clock, P as Phone, f as Mail, g as ChevronDown, h as ChevronUp } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
const pilates1 = "/assets/pilates-1-D4e9Aa6v.jpg";
const pilates2 = "/assets/pilates-2-Bv-0OtOt.jpg";
const pilates3 = "/assets/pilates-3-1XyFm81_.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const heroImg = "/assets/hero-BOK6CxBv.jpg";
const methodImg = "/assets/method-CrRn2zlJ.jpg";
const groupImg = "/assets/group-C0OXpq4o.jpg";
const t1 = "/assets/t1-Z8_HRje5.jpg";
const t2 = "/assets/t2-BB_cj_uZ.jpg";
const t3 = "/assets/t3-BN7a5dn6.jpg";
const NAV = [{
  href: "#methode",
  label: "Méthode"
}, {
  href: "#tarifs",
  label: "Tarifs"
}, {
  href: "#avis",
  label: "Avis"
}, {
  href: "#faq",
  label: "FAQ"
}, {
  href: "#contact",
  label: "Contact"
}];
const PILLARS = [{
  icon: Users,
  title: "Petits groupes (6 max)",
  body: "Chaque mouvement est corrigé. Zéro blessure, des progrès qui durent."
}, {
  icon: GraduationCap,
  title: "Coachs diplômés",
  body: "3 coachs certifiés, +400h de formation chacun. Une vraie expertise."
}, {
  icon: ChartLine,
  title: "Progrès mesurés",
  body: "Bilan posture/mobilité à l'entrée, point tous les 2 mois."
}];
const STEPS = [{
  icon: Calendar,
  title: "Tu réserves",
  body: "Ton cours d'essai gratuit, en moins d'une minute."
}, {
  icon: ClipboardCheck,
  title: "On fait ton bilan",
  body: "15 minutes pour comprendre ta posture, ta mobilité et tes objectifs."
}, {
  icon: Sparkles,
  title: "Tu progresses",
  body: "Tu choisis un créneau qui te va, on suit tes progrès dans le temps."
}];
const PLANS = [{
  name: "Découverte",
  price: "Offert",
  suffix: "",
  desc: "1er cours d'essai pour faire le tour du studio.",
  features: ["Bilan posture inclus", "Sans engagement", "Coach dédié"],
  cta: "Je réserve",
  featured: false
}, {
  name: "Illimité",
  price: "95€",
  suffix: "/mois",
  desc: "Tous les cours, à ton rythme. Le plus choisi.",
  features: ["Cours illimités", "Sans engagement", "Bilan tous les 2 mois"],
  cta: "Commencer",
  featured: true
}, {
  name: "Carnet 10",
  price: "190€",
  suffix: "",
  desc: "10 séances, valables 3 mois. Idéal en complément.",
  features: ["10 cours au choix", "Valable 3 mois", "Transférable une fois"],
  cta: "Choisir",
  featured: false
}];
const TESTIMONIALS = [{
  quote: "En 2 mois mon mal de dos a disparu. Je n'aurais jamais cru.",
  name: "Camille R.",
  role: "Élève depuis 4 mois",
  img: t1
}, {
  quote: "Les petits groupes changent tout, on n'est pas un numéro.",
  name: "Marc D.",
  role: "Élève depuis 1 an",
  img: t2
}, {
  quote: "Le seul sport que je n'ai pas lâché.",
  name: "Inès B.",
  role: "Élève depuis 6 mois",
  img: t3
}];
const FAQ = [{
  q: "Faut-il être souple pour commencer ?",
  a: "Non, justement. La grande majorité de nos élèves arrivent sans aucune souplesse particulière — on construit ça ensemble, à ton rythme."
}, {
  q: "Combien de fois par semaine ?",
  a: "1 à 3 fois selon ton objectif. Pour des résultats visibles sur la posture et les douleurs, on recommande 2 séances hebdo."
}, {
  q: "C'est adapté après une blessure ?",
  a: "Oui, avec l'accord de ton médecin. Nos coachs sont formés à la reprise post-blessure et adaptent chaque exercice."
}, {
  q: "Comment j'annule un cours ?",
  a: "En un clic depuis ton espace, jusqu'à 12h avant le cours, sans frais. Au-delà, la séance est décomptée."
}, {
  q: "Où se trouve le studio ?",
  a: "12 rue des Remparts à Bordeaux, en plein centre. Stations de tram à 3 min à pied."
}];
const phoneRegex = /^(?:(?:\+|00)33[\s.-]?|0)[1-9](?:[\s.-]?\d{2}){4}$/;
const bookingSchema = objectType({
  name: stringType().trim().min(2, "Indique ton prénom et nom.").max(80, "Trop long."),
  email: stringType().trim().email("Adresse email invalide.").max(255),
  phone: stringType().trim().regex(phoneRegex, "Numéro français invalide (ex. 06 12 34 56 78)."),
  slot: stringType().min(1, "Choisis un créneau."),
  message: stringType().max(500, "500 caractères max.").optional()
});
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-dvh bg-background text-foreground antialiased overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-blobs", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogosMarquee, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pillars, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PilatesStrip, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Method, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessStory, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCta, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", toastOptions: {
      classNames: {
        toast: "!glass !text-foreground !rounded-2xl"
      }
    } })
  ] });
}
function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.18
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { ref, "data-visible": visible || void 0, className: cn("reveal", className), ...rest, children });
}
const LOGOS = ["Maison Lune", "Atelier Vélo", "Café Aldo", "L'Orangerie", "Studio Nord", "Botanic & Co", "Maison Pivoine", "Kura Bordeaux"];
function LogosMarquee() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Ils nous font confiance", className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-[0.2em] text-ink-soft", children: "Ils nous font confiance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-mask mt-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee gap-12 md:gap-16 py-4", children: [...LOGOS, ...LOGOS].map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-2xl md:text-3xl text-ink-soft/70 hover:text-foreground transition-colors whitespace-nowrap", "aria-hidden": i >= LOGOS.length, children: name }, i)) }) })
  ] }) });
}
function PilatesStrip() {
  const imgs = [{
    src: pilates1,
    alt: "Élève sur reformer en pleine extension, lumière naturelle"
  }, {
    src: pilates3,
    alt: "Coach corrigeant la posture d'une élève à genoux"
  }, {
    src: pilates2,
    alt: "Pieds nus sur le tapis, instant calme avant la séance"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Le studio en images", className: "py-12 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6", children: imgs.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 180, className: cn("relative overflow-hidden rounded-3xl shadow-soft aspect-[4/5]", i === 1 && "sm:translate-y-6"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, loading: "lazy", width: 1024, height: 1280, className: "h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]" }) }, i)) }) });
}
function SuccessStory() {
  const stats = [{
    k: "−82%",
    v: "de douleurs lombaires rapportées après 8 semaines"
  }, {
    k: "94%",
    v: "des élèves reviennent le mois suivant"
  }, {
    k: "+12 cm",
    v: "de gain moyen en flexion (test bout des doigts)"
  }, {
    k: "4.9/5",
    v: "note moyenne sur 230 avis"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-ink-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-terracotta" }),
        "Cas client · Camille, 38 ans"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-display mt-6 text-[clamp(2rem,4vw,3rem)] leading-[1.05]", children: [
        "« Je suis venue pour mon dos.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-terracotta", style: {
          fontStyle: "italic"
        }, children: "Je suis restée pour le reste." }),
        " ",
        "»"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-ink-soft leading-relaxed max-w-lg", children: "Hernie discale, 2 ans d'arrêt sport, peur de bouger. Après 8 semaines (2 séances/sem.), Camille reprend la course — sans douleur. Bilan posture refait tous les 2 mois, programme ajusté à chaque étape." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 120, className: "glass glass-sheen hover-lift rounded-3xl p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-4xl md:text-5xl text-terracotta tracking-tight", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-ink-soft leading-snug", children: s.v })
    ] }, s.k)) })
  ] }) });
}
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-3 md:top-5 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("glass-strong flex h-14 md:h-16 items-center justify-between gap-4 rounded-full px-3 pl-5 md:pl-6 md:pr-3 transition-all duration-300", scrolled ? "shadow-card" : ""), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", "aria-label": "Studio Hélio — accueil", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-display text-lg md:text-xl font-medium tracking-tight", children: [
        "Studio",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta", children: "·" }),
        "Hélio"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Navigation principale", className: "hidden md:flex items-center gap-7", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "text-sm text-ink-soft hover:text-foreground transition-colors", children: item.label }, item.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "rounded-full px-5 h-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: "Cours d'essai gratuit" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": open ? "Fermer le menu" : "Ouvrir le menu", "aria-expanded": open, "aria-controls": "mobile-menu", onClick: () => setOpen((v) => !v), className: "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "mobile-menu", className: cn("md:hidden fixed inset-x-3 top-20 z-40 glass-strong rounded-3xl transition-[opacity,transform] duration-300", open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"), "aria-hidden": !open, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Navigation mobile", className: "flex flex-col gap-1 p-6", children: [
      NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, onClick: () => setOpen(false), className: "text-display text-3xl py-3 border-b border-border/60", children: item.label }, item.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "mt-6 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", onClick: () => setOpen(false), children: "Cours d'essai gratuit" }) })
    ] }) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "top", className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-10 lg:gap-12 pt-10 pb-16 md:pt-16 md:pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-ink-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-terracotta" }),
        "Pilates & mobilité — Bordeaux"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display mt-6 text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-tight", children: [
        "Renforce ton corps",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-terracotta", style: {
          fontStyle: "italic"
        }, children: "sans le casser." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-ink-soft leading-relaxed", children: "Pilates en petits groupes (6 max), encadré, pour gagner en force, souplesse et sérénité. Coachs diplômés, progrès mesurés." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "cta-glow text-cream rounded-full px-7 h-12 text-base", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", children: [
          "Réserver mon cours d'essai",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ghost", className: "rounded-full px-5 h-12 text-base text-foreground hover:bg-cream-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#methode", children: "Découvrir la méthode" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-12 grid grid-cols-3 gap-6 max-w-md", children: [["6", "max / cours"], ["3", "coachs certifiés"], ["1er", "cours offert"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-terracotta/60 pl-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-display text-2xl md:text-3xl", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-xs text-ink-soft mt-1", children: v })
      ] }, v)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-3xl shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Élève en posture de Pilates dans le studio Hélio, lumière naturelle douce", width: 1536, height: 1280, fetchPriority: "high", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex absolute -left-6 bottom-6 lg:-left-10 items-center gap-3 rounded-2xl glass-strong px-4 py-3 max-w-[260px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: [t1, t2, t3].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", loading: "lazy", width: 64, height: 64, className: "h-9 w-9 rounded-full object-cover border-2 border-background" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs leading-snug", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "+ 200 élèves" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-ink-soft", children: "nous font confiance" })
        ] })
      ] })
    ] })
  ] }) });
}
function Pillars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Pourquoi Hélio", title: "Trois piliers, zéro compromis." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: PILLARS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl glass glass-sheen hover-lift p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-6 text-2xl", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink-soft leading-relaxed", children: p.body })
    ] }, p.title)) })
  ] }) });
}
function Method() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "methode", className: "py-20 md:py-28 bg-cream-deep/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: methodImg, alt: "Coach corrigeant la posture d'une élève en séance", loading: "lazy", width: 1280, height: 1280, className: "h-full w-full object-cover" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Comment ça se passe", title: "Trois étapes, et c'est parti." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 space-y-2", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group flex gap-5 py-6 border-b border-border/60 last:border-b-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-terracotta text-2xl w-8 text-center", children: String(i + 1).padStart(2, "0") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-terracotta shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-xl md:text-2xl", children: s.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-ink-soft leading-relaxed", children: s.body })
        ] })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "mt-10 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", children: [
        "Commencer maintenant",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) })
    ] })
  ] }) });
}
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tarifs", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Tarifs", title: "Des formules simples, sans engagement.", subtitle: "Le premier cours est offert. Tu vois si on est faits l'un pour l'autre — puis tu choisis." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: PLANS.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: cn("relative flex flex-col rounded-3xl p-8 hover-lift", plan.featured ? "bg-foreground text-background border border-foreground shadow-card md:-translate-y-4" : "glass glass-sheen"), children: [
      plan.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-3 py-1 text-xs text-cream", children: "Le plus choisi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-2xl", children: plan.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-sm mt-1", plan.featured ? "text-background/70" : "text-ink-soft"), children: plan.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-5xl tracking-tight", children: plan.price }),
        plan.suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-sm", plan.featured ? "text-background/70" : "text-ink-soft"), children: plan.suffix })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: cn("h-4 w-4 mt-0.5 shrink-0", plan.featured ? "text-terracotta" : "text-terracotta") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-2 border-t border-current/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: plan.featured ? "secondary" : "default", className: cn("mt-6 rounded-full", plan.featured ? "bg-terracotta text-cream hover:bg-terracotta-deep" : ""), children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: plan.cta }) })
    ] }, plan.name)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "avis", className: "py-20 md:py-28 bg-foreground text-cream relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Ils nous font confiance", title: "Des résultats, pas des promesses." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "flex flex-col rounded-3xl glass-dark hover-lift p-8 text-cream", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-display text-xl md:text-[1.35rem] leading-snug flex-1", children: [
        "« ",
        t.quote,
        " »"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: "", loading: "lazy", width: 64, height: 64, className: "h-11 w-11 rounded-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cream/60 text-xs", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "FAQ", title: "Tu te demandes ?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-ink-soft", children: "Une question qui n'est pas listée ? Écris-nous, on répond en quelques heures." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "mt-4 px-0 hover:bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@studiohelio.fr", className: "text-terracotta", children: "hello@studiohelio.fr →" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: FAQ.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-display text-lg md:text-xl py-6 hover:no-underline", children: item.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-ink-soft leading-relaxed pb-6 text-base", children: item.a })
    ] }, i)) }) })
  ] }) });
}
function ContactCta() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-20 md:py-28 bg-foreground text-background relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs text-background/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-terracotta" }),
        "Cours d'essai gratuit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-display mt-6 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]", children: [
        "Viens essayer.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-terracotta", style: {
          fontStyle: "italic"
        }, children: "C'est offert." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-background/75 max-w-md leading-relaxed", children: "Choisis un créneau, on te recontacte dans la journée pour confirmer. Pas de carte, pas d'engagement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLine, { icon: MapPin, children: "12 rue des Remparts, Bordeaux" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLine, { icon: Clock, children: "Lun – Sam · 7h – 21h" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLine, { icon: Phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+33556000000", className: "hover:text-terracotta", children: "05 56 00 00 00" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactLine, { icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@studiohelio.fr", className: "hover:text-terracotta", children: "hello@studiohelio.fr" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-10 hidden lg:block aspect-[16/10] rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: groupImg, alt: "Petit groupe en séance de Pilates au Studio Hélio", loading: "lazy", width: 1280, height: 960, className: "h-full w-full object-cover opacity-90" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingForm, {}) })
  ] }) });
}
function ContactLine({
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-background/85", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children })
  ] });
}
function BookingForm() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: u(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      slot: "",
      message: ""
    },
    mode: "onTouched"
  });
  const slotValue = watch("slot");
  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 900));
    console.info("[booking] payload", values);
    toast.success("Merci, on te recontacte sous 24h.");
    setSubmitted(true);
    reset();
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-background text-foreground p-10 md:p-12 shadow-card text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 text-terracotta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display mt-6 text-3xl", children: "Merci, c'est noté." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink-soft max-w-md mx-auto", children: "On te recontacte dans les 24h ouvrées pour caler ton premier cours. Tu peux fermer cette fenêtre — ou revenir voir le studio juste en dessous." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "mt-6 text-terracotta hover:bg-terracotta/10", onClick: () => setSubmitted(false), children: "Faire une autre demande" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, className: "rounded-3xl bg-background text-foreground p-6 md:p-10 shadow-card", "aria-label": "Formulaire de réservation", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom complet", id: "name", error: errors.name?.message, input: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", autoComplete: "name", placeholder: "Camille Renard", "aria-invalid": !!errors.name, ...register("name") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", id: "email", error: errors.email?.message, input: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", placeholder: "camille@email.fr", "aria-invalid": !!errors.email, ...register("email") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", id: "phone", error: errors.phone?.message, input: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", type: "tel", autoComplete: "tel", placeholder: "06 12 34 56 78", "aria-invalid": !!errors.phone, ...register("phone") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Créneau souhaité", id: "slot", error: errors.slot?.message, input: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: slotValue, onValueChange: (v) => setValue("slot", v, {
        shouldValidate: true,
        shouldTouch: true
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "slot", "aria-invalid": !!errors.slot, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choisis un créneau" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "matin", children: "Matin (7h – 10h)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "midi", children: "Midi (12h – 14h)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "soir", children: "Soir (17h – 21h)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekend", children: "Week-end" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { className: "mt-5", label: "Un mot pour nous (optionnel)", id: "message", error: errors.message?.message, input: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", rows: 3, placeholder: "Une blessure, un objectif, une question…", className: "flex w-full min-h-[88px] rounded-lg border border-input bg-background px-3 py-2 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1", ...register("message") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-soft", children: "En envoyant, tu acceptes d'être recontacté(e) par Studio Hélio. Aucune donnée n'est partagée." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", size: "lg", disabled: isSubmitting, className: "cta-glow text-cream rounded-full px-7 h-12 text-base", children: [
        isSubmitting ? "Envoi…" : "Réserver mon cours d'essai",
        !isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] })
    ] })
  ] });
}
function Field({
  label,
  id,
  input,
  error,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-sm", children: label }),
    input,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "text-xs text-destructive", children: error })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-display text-2xl", children: [
          "Studio",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-terracotta", children: "·" }),
          "Hélio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-ink-soft max-w-xs", children: "Studio de Pilates et mobilité à Bordeaux. Petits groupes, grand soin." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-ink-soft", children: "Studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "12 rue des Remparts, Bordeaux" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lun – Sam · 7h – 21h" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+33556000000", className: "hover:text-terracotta", children: "05 56 00 00 00" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@studiohelio.fr", className: "hover:text-terracotta", children: "hello@studiohelio.fr" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-ink-soft", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "hover:text-terracotta", children: n.label }) }, n.href)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-ink-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Studio Hélio · Tous droits réservés"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fait à Bordeaux, avec soin." })
    ] })
  ] });
}
function SectionTitle({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-terracotta", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display mt-4 text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08]", dangerouslySetInnerHTML: {
      __html: title
    } }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-ink-soft leading-relaxed", children: subtitle })
  ] });
}
export {
  Page as component
};
