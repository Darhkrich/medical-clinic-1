// components/ui/Button.jsx
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

export const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm focus:ring-teal-500",
      secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 focus:ring-slate-400",
      outline: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500",
      ghost: "text-slate-600 hover:bg-slate-100 focus:ring-slate-400",
      danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 focus:ring-red-500",
      success: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 focus:ring-emerald-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs sm:text-sm rounded-lg",
      md: "px-5 sm:px-6 py-2.5 text-sm sm:text-base rounded-lg",
      lg: "px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg rounded-xl",
      icon: "p-2 sm:p-2.5 rounded-full",
    };

    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          "font-medium transition-all duration-200 flex items-center justify-center gap-2",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "active:scale-[0.98] touch-manipulation", // Subtle press effect
          // Variant and size
          variants[variant],
          sizes[size],
          className
        )}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="sr-only">Loading</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";