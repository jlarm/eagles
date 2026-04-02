import React from "react";
import { cn } from "@/src/lib/utils";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
  className?: string;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-none border border-neutral-warm bg-white text-primary shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("text-sm text-neutral-warm", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export interface BadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "accent" | "outline" | "win" | "loss";
  children?: React.ReactNode;
  className?: string;
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary text-white",
    accent: "bg-accent text-white",
    outline: "border border-neutral-warm text-primary",
    win: "bg-win text-white",
    loss: "bg-loss text-white",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-none px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  className?: string;
}

export function Button({ className, variant = "primary", size = "default", children, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    accent: "bg-accent text-white hover:bg-accent/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "hover:bg-neutral-warm/20 text-primary",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
