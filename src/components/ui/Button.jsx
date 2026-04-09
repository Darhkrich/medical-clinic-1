// components/ui/Button.jsx
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm",
    outline: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
    ghost: "text-slate-600 hover:bg-slate-100",
  };

  return (
    <button
      className={cn(
        "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}