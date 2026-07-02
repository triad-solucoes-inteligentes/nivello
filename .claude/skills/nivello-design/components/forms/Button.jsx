import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Button — primary action control.
 * Icons use Lucide: pass `icon`/`iconRight` as a lucide name; the host
 * calls lucide.createIcons() after render.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    border: "1px solid transparent",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.55 : 1,
    userSelect: "none",
  };

  const sizes = {
    sm: { height: "var(--control-sm)", padding: "0 12px", fontSize: "13px" },
    md: { height: "var(--control-md)", padding: "0 16px", fontSize: "14px" },
    lg: { height: "var(--control-lg)", padding: "0 22px", fontSize: "15px" },
  };

  const variants = {
    primary: { background: "var(--brand)", color: "var(--brand-contrast)", boxShadow: "var(--shadow-xs)" },
    secondary: { background: "var(--surface-card)", color: "var(--text-strong)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-xs)" },
    accent: { background: "var(--accent)", color: "var(--accent-contrast)", boxShadow: "var(--shadow-xs)" },
    ghost: { background: "transparent", color: "var(--text-body)" },
    danger: { background: "var(--danger)", color: "#fff", boxShadow: "var(--shadow-xs)" },
    link: { background: "transparent", color: "var(--text-link)", padding: "0", height: "auto" },
  };

  const iconSize = size === "sm" ? 15 : size === "lg" ? 19 : 17;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`nv-btn nv-btn-${variant}`}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      {...rest}
    >
      {loading && <span className="nv-spinner" style={{ width: iconSize, height: iconSize, border: "2px solid currentColor", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "nv-spin 0.7s linear infinite" }} />}
      {!loading && icon && <Icon name={icon} style={{ width: iconSize, height: iconSize }} />}
      {children && <span>{children}</span>}
      {!loading && iconRight && <Icon name={iconRight} style={{ width: iconSize, height: iconSize }} />}
    </button>
  );
}
