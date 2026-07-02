import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello IconButton — square, icon-only action. Uses Lucide.
 */
export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 }[size];
  const iconSize = { sm: 16, md: 18, lg: 20 }[size];
  const variants = {
    ghost: { background: "transparent", color: "var(--text-body)", border: "1px solid transparent" },
    solid: { background: "var(--brand)", color: "#fff", border: "1px solid transparent" },
    outline: { background: "var(--surface-card)", color: "var(--text-body)", border: "1px solid var(--border-default)" },
    danger: { background: "transparent", color: "var(--danger)", border: "1px solid transparent" },
  };
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={`nv-btn nv-btn-${variant === "solid" ? "primary" : variant === "danger" ? "ghost" : "ghost"}`}
      style={{
        width: dims, height: dims, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-md)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        transition: "background var(--dur-base) var(--ease-out)", ...variants[variant], ...style,
      }}
      {...rest}
    >
      <Icon name={icon} style={{ width: iconSize, height: iconSize }} />
    </button>
  );
}
