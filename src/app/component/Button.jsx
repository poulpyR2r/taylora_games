"use client";

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  to,
  variant = "primary",
  size = "md",
  borderPosition,
  isEmpty = false,
  textColor,
  hoverGradient = false,
  isMinWidth = false,
  iconLeft,
  iconRight,
  iconSize = "1x",
  className = "",
  onClick,
  disabled = false,
  children,
  ...rest
}) => {
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!hoverGradient || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setCoords({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };

  const handleMouseEnter = () => hoverGradient && setHovered(true);
  const handleMouseLeave = () => hoverGradient && setHovered(false);

  const baseColor = {
    primary: "#312A39",
    secondary: "#9C86BE",
    outline: "#312A39",
    ghost: "#312A39",
    link: "#312A39",
  }[variant];

  const variantStyles = {
    primary: "bg-primary text-white focus:ring-primary-60 hover:bg-primary-80",
    secondary:
      "bg-secondary text-white focus:ring-secondary-60 hover:bg-secondary-80",
    outline:
      "border border-zinc-300 text-primary focus:ring-primary hover:bg-primary-10",
    ghost: "text-primary focus:ring-primary hover:bg-primary-10",
    link: "text-primary underline-offset-2 bg-transparent focus:ring-primary",
  };

  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    xl: "px-6 py-4 text-xl",
  };

  let rounding = "rounded";
  if (borderPosition === "left") rounding = "rounded-bl-lg rounded-tr-lg";
  else if (borderPosition === "right") rounding = "rounded-br-lg rounded-tl-lg";

  const classes = [
    "relative inline-flex items-center justify-center font-light overflow-hidden gap-2",
    sizeStyles[size] || sizeStyles.md,
    rounding,
  ];
  if (isMinWidth) classes.push("min-w-[220px]");
  if (!disabled) classes.push("cursor-pointer");

  if (isEmpty) {
    classes.push("border", textColor || "text-primary", "border-current");
  } else {
    classes.push(variantStyles[variant] || variantStyles.primary);
  }
  if (disabled) classes.push("opacity-50 cursor-not-allowed");
  if (className) classes.push(className);

  const style =
    hoverGradient && hovered && !isEmpty && !disabled
      ? {
          backgroundImage: `radial-gradient(circle at ${coords.x}% ${coords.y}%, ${baseColor}33, transparent 40%)`,
        }
      : {};

  const renderContent = () => (
    <>
      {iconLeft && <FontAwesomeIcon icon={iconLeft} size={iconSize} />}
      {children}
      {iconRight && <FontAwesomeIcon icon={iconRight} size={iconSize} />}
    </>
  );

  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={classes.join(" ")}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes.join(" ")}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
