import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonCommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonCommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type ButtonAsLinkProps = ButtonCommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseClasses =
  "inline-flex min-h-11 min-w-11 items-center justify-center px-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-canvas",
  secondary: "border border-ink text-ink bg-transparent",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;

  if (props.href !== undefined) {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
