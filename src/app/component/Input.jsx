import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Ultra-flexible Input component matching Button styles
 *
 * Props:
 * - type: HTML input type ("text" | "email" | "password" | ...)
 * - variant: "primary" | "secondary" | "outline" | "ghost" | "link"
 * - size: "xs" | "sm" | "md" | "lg" | "xl"
 * - borderPosition: "left" | "right" (controls diagonal corners rounding)
 * - isEmpty: boolean (renders transparent background)
 * - isMinWidth: boolean (apply a minimum width)
 * - isSelect: boolean (renders a <select> element)
 * - isTextArea: boolean (renders a <textarea> element)
 * - className: additional Tailwind classes
 * - disabled: boolean (disable interactions)
 * - ...rest: other props (value, onChange, placeholder, children, etc.)
 */
const Input = ({
  type = "text",
  variant = "outline",
  size = "md",
  borderPosition,
  isEmpty = false,
  isMinWidth = false,
  isSelect = false,
  isTextArea = false,
  className = "",
  disabled = false,
  ...rest
}) => {
  // Size styles
  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    xl: "px-6 py-4 text-xl",
  };

  // Variant styles (including border/background)
  const variantStyles = {
    primary: "bg-primary text-white focus:ring-primary-60",
    secondary: "bg-secondary text-white focus:ring-secondary-60",
    outline: "border border-zinc-300 bg-white text-zinc-900 focus:ring-primary",
    ghost: "bg-transparent text-zinc-900 focus:ring-primary",
    link: "bg-transparent text-primary underline-offset-2 focus:ring-primary",
  };

  // Border rounding based on position
  let rounding = "rounded-lg";
  if (borderPosition === "left") rounding = "rounded-bl-lg rounded-tr-lg";
  else if (borderPosition === "right") rounding = "rounded-br-lg rounded-tl-lg";

  // ---------- Select variant: styling on <select> ----------
  if (isSelect) {
    // Wrapper for positioning icon
    const wrapperClasses = [
      "relative w-full",
      isMinWidth && "min-w-[180px]",
      disabled && "opacity-50 cursor-not-allowed",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Select element classes including border & rounding
    const selectClasses = [
      "block w-full appearance-none focus:outline-none",
      sizeStyles[size] || sizeStyles.md,
      isEmpty
        ? "bg-transparent border border-zinc-300"
        : variantStyles[variant] || variantStyles.outline,
      rounding,
      "pr-8",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClasses}>
        <select className={selectClasses} disabled={disabled} {...rest}>
          {rest.children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="h-4 w-4 text-zinc-500"
          />
        </div>
      </div>
    );
  }

  // ---------- Textarea variant ----------
  if (isTextArea) {
    const classes = [
      "w-full",
      sizeStyles[size] || sizeStyles.md,
      rounding,
      isEmpty
        ? "bg-transparent border border-zinc-300"
        : variantStyles[variant] || variantStyles.outline,
      isMinWidth && "min-w-[180px]",
      disabled && "opacity-50 cursor-not-allowed",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <textarea className={classes} disabled={disabled} {...rest} />;
  }

  // ---------- Default Input ----------
  const classes = [
    "inline-flex w-full items-center transition-colors focus:outline-none",
    sizeStyles[size] || sizeStyles.md,
    rounding,
    isEmpty
      ? "bg-transparent border border-zinc-300"
      : variantStyles[variant] || variantStyles.outline,
    isMinWidth && "min-w-[180px]",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <input type={type} className={classes} disabled={disabled} {...rest} />
  );
};

export default Input;
