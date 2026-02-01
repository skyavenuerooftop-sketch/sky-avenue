import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: "_blank" | "_self";
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  target
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950";

  const variantClasses =
    variant === "primary"
      ? "bg-gold text-navy-950 hover:bg-amber-300"
      : variant === "secondary"
      ? "bg-slate-900/80 text-slate-100 border border-slate-700 hover:bg-slate-800"
      : "bg-transparent border border-slate-700 text-slate-200 hover:bg-slate-900/60";

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
}