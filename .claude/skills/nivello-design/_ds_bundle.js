/* @ds-bundle: {"format":3,"namespace":"NivelloDesignSystem_c06109","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"MobileListItem","sourcePath":"components/data/MobileListItem.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"ClientCard","sourcePath":"components/domain/ClientCard.jsx"},{"name":"CreateFAB","sourcePath":"components/domain/CreateFAB.jsx"},{"name":"DeadlineIndicator","sourcePath":"components/domain/DeadlineIndicator.jsx"},{"name":"MobileQuoteBuilder","sourcePath":"components/domain/MobileQuoteBuilder.jsx"},{"name":"PaymentConditionBlock","sourcePath":"components/domain/PaymentConditionBlock.jsx"},{"name":"PrintableQuoteHeader","sourcePath":"components/domain/PrintableQuoteHeader.jsx"},{"name":"ProductServiceItem","sourcePath":"components/domain/ProductServiceItem.jsx"},{"name":"ProductTypeBadge","sourcePath":"components/domain/ProductTypeBadge.jsx"},{"name":"QuoteLineItem","sourcePath":"components/domain/QuoteLineItem.jsx"},{"name":"QuotePreview","sourcePath":"components/domain/QuotePreview.jsx"},{"name":"QuoteStatusBadge","sourcePath":"components/domain/QuoteStatusBadge.jsx"},{"name":"QuoteSummaryCard","sourcePath":"components/domain/QuoteSummaryCard.jsx"},{"name":"TotalPriceDisplay","sourcePath":"components/domain/TotalPriceDisplay.jsx"},{"name":"WorkCard","sourcePath":"components/domain/WorkCard.jsx"},{"name":"WorkTimeline","sourcePath":"components/domain/WorkTimeline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressIndicator","sourcePath":"components/feedback/ProgressIndicator.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"DropdownMenu","sourcePath":"components/navigation/DropdownMenu.jsx"},{"name":"FilterBar","sourcePath":"components/navigation/FilterBar.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Icon","sourcePath":"components/shared/Icon.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"70df61f482cd","components/data/Card.jsx":"359226645a27","components/data/MetricCard.jsx":"e2e837501722","components/data/MobileListItem.jsx":"4d26d2d98aec","components/data/Pagination.jsx":"c4f1972e7ab7","components/data/Table.jsx":"d234aeda88cf","components/domain/ClientCard.jsx":"26ef4cb556e4","components/domain/CreateFAB.jsx":"dcc637bdc4f6","components/domain/DeadlineIndicator.jsx":"cfc4434115df","components/domain/MobileQuoteBuilder.jsx":"fb32d745dc72","components/domain/PaymentConditionBlock.jsx":"645a066d0654","components/domain/PrintableQuoteHeader.jsx":"6c298cadd684","components/domain/ProductServiceItem.jsx":"9f9c95728b31","components/domain/ProductTypeBadge.jsx":"955110cf19c9","components/domain/QuoteLineItem.jsx":"9e8c33fafac0","components/domain/QuotePreview.jsx":"70d0dfe8b5e6","components/domain/QuoteStatusBadge.jsx":"3a7b65927e12","components/domain/QuoteSummaryCard.jsx":"e176e85eca1d","components/domain/TotalPriceDisplay.jsx":"1709e031807e","components/domain/WorkCard.jsx":"0943705117b8","components/domain/WorkTimeline.jsx":"5e3b0e458ed8","components/feedback/Alert.jsx":"57b7fdeefff1","components/feedback/Badge.jsx":"460144d4e251","components/feedback/EmptyState.jsx":"21b9b7bde58a","components/feedback/ProgressIndicator.jsx":"61ff3f2aab6e","components/feedback/Skeleton.jsx":"edc0003d6b7e","components/feedback/Toast.jsx":"9b056ac52ff7","components/forms/Button.jsx":"be6d3e505616","components/forms/DatePicker.jsx":"e988bafc6bcd","components/forms/IconButton.jsx":"65a2320c26d9","components/forms/Input.jsx":"a6df5f729197","components/forms/SearchBar.jsx":"d1791fc393f2","components/forms/Select.jsx":"d5b26036d079","components/forms/Textarea.jsx":"cfd03a7ad092","components/navigation/BottomNav.jsx":"ced8bccce9c5","components/navigation/Breadcrumb.jsx":"f35dfe77d734","components/navigation/DropdownMenu.jsx":"0cc511711533","components/navigation/FilterBar.jsx":"e71744c7598d","components/navigation/Sidebar.jsx":"a8200d44bc0d","components/navigation/Stepper.jsx":"7b71cca30862","components/navigation/Tabs.jsx":"0f826ff67be8","components/overlay/Drawer.jsx":"c7b50afdcdc4","components/overlay/Modal.jsx":"9b1cad7f409f","components/shared/Icon.jsx":"2539cdfc7cad","ui_kits/nivello-app/builder.jsx":"571e5c7c18eb","ui_kits/nivello-app/data.js":"894a715ee10c","ui_kits/nivello-app/screens.jsx":"aa7bacb78d7e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NivelloDesignSystem_c06109 = window.NivelloDesignSystem_c06109 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Avatar — user/client initial or image. */
function Avatar({
  name = "",
  src,
  size = "md",
  tone = "brand",
  square = false,
  style,
  ...rest
}) {
  const dim = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  }[size];
  const fs = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 22
  }[size];
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const tones = {
    brand: {
      bg: "var(--brand-subtle)",
      fg: "var(--text-brand)"
    },
    accent: {
      bg: "var(--accent-subtle)",
      fg: "var(--terra-700)"
    },
    neutral: {
      bg: "var(--neutral-200)",
      fg: "var(--neutral-700)"
    }
  };
  const t = tones[tone] || tones.brand;
  const common = {
    width: dim,
    height: dim,
    borderRadius: square ? "var(--radius-md)" : "50%",
    flexShrink: 0
  };
  if (src) return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: name,
    style: {
      ...common,
      objectFit: "cover",
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...common,
      background: t.bg,
      color: t.fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: fs,
      fontWeight: "var(--fw-semibold)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Card — base surface container. Optional header/footer, hover, padding. */
function Card({
  children,
  header,
  footer,
  title,
  subtitle,
  actions,
  padding = "md",
  hover = false,
  onClick,
  style,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: "14px",
    md: "18px",
    lg: "24px"
  }[padding];
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: hover || clickable ? "nv-card-hover" : undefined,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden",
      cursor: clickable ? "pointer" : "default",
      transition: "box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base), transform var(--dur-base)",
      ...style
    }
  }, rest), (title || header || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      padding: `14px ${pad === 0 ? "18px" : pad} 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, header || /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${pad === 0 ? "18px" : pad} 14px`,
      borderTop: "1px solid var(--border-subtle)",
      marginTop: 4,
      paddingTop: 12
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Table — clean data table (never a spreadsheet look).
 * columns: [{ key, header, align, width, render, mono }]
 */
function Table({
  columns = [],
  data = [],
  rowKey = "id",
  onRowClick,
  selectable = false,
  selectedKeys = [],
  onToggleRow,
  emptyLabel = "Sem registros",
  zebra = false,
  compact = false,
  style,
  ...rest
}) {
  const cellPad = compact ? "8px 12px" : "12px 14px";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--surface-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "14px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40,
      padding: cellPad
    }
  }), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: cellPad,
      width: c.width,
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, data.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      padding: "32px",
      textAlign: "center",
      color: "var(--text-muted)"
    }
  }, emptyLabel)), data.map((row, i) => {
    const key = row[rowKey] ?? i;
    const checked = selectedKeys.includes(key);
    return /*#__PURE__*/React.createElement("tr", {
      key: key,
      onClick: onRowClick ? () => onRowClick(row) : undefined,
      className: "nv-table-row",
      style: {
        background: checked ? "var(--brand-subtle)" : zebra && i % 2 ? "var(--neutral-50)" : "transparent",
        cursor: onRowClick ? "pointer" : "default",
        transition: "background var(--dur-fast)"
      }
    }, selectable && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: cellPad,
        borderBottom: "1px solid var(--border-subtle)"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: () => onToggleRow && onToggleRow(key),
      style: {
        width: 16,
        height: 16,
        accentColor: "var(--brand)"
      }
    })), columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        textAlign: c.align || "left",
        padding: cellPad,
        color: "var(--text-body)",
        borderBottom: "1px solid var(--border-subtle)",
        fontFamily: c.mono ? "var(--font-mono)" : "inherit",
        fontVariantNumeric: c.mono ? "tabular-nums" : "normal",
        whiteSpace: c.nowrap ? "nowrap" : "normal"
      }
    }, c.render ? c.render(row[c.key], row) : row[c.key])));
  })))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/domain/TotalPriceDisplay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Format a number as BRL. Pass currency="Gs" prefix to override. */
function fmt(value, currency, decimals) {
  const n = Number(value || 0);
  const s = n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return {
    prefix: currency,
    number: s
  };
}

/**
 * Nivello TotalPriceDisplay — emphasized money value.
 * Used for subtotais, total geral, item totals.
 */
function TotalPriceDisplay({
  value = 0,
  currency = "R$",
  label,
  size = "md",
  tone = "strong",
  decimals = 0,
  align = "left",
  style,
  ...rest
}) {
  const {
    prefix,
    number
  } = fmt(value, currency, decimals);
  const sizes = {
    sm: 15,
    md: 20,
    lg: 26,
    xl: 34
  }[size];
  const tones = {
    strong: "var(--text-strong)",
    brand: "var(--text-brand)",
    accent: "var(--terra-700)",
    muted: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "right" ? "flex-end" : "flex-start",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    className: "nv-label",
    style: {
      fontSize: "11px",
      color: "var(--text-muted)",
      marginBottom: 2
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      color: tones[tone],
      letterSpacing: "-0.01em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes * 0.62,
      fontWeight: "var(--fw-medium)",
      color: "var(--text-muted)"
    }
  }, prefix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes,
      fontWeight: "var(--fw-bold)",
      lineHeight: 1
    }
  }, number)));
}
Object.assign(__ds_scope, { TotalPriceDisplay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/TotalPriceDisplay.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello ProgressIndicator — linear bar or circular ring.
 * Used for obra progress, upload/save, quote completion.
 */
function ProgressIndicator({
  value = 0,
  max = 100,
  variant = "linear",
  tone = "brand",
  size = "md",
  showLabel = false,
  label,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const tones = {
    brand: "var(--brand)",
    accent: "var(--accent)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)"
  };
  const color = tones[tone] || tones.brand;
  if (variant === "circular") {
    const dim = {
      sm: 40,
      md: 56,
      lg: 72
    }[size];
    const stroke = size === "sm" ? 4 : 6;
    const r = (dim - stroke) / 2;
    const circ = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        position: "relative",
        width: dim,
        height: dim,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: dim,
      height: dim,
      style: {
        transform: "rotate(-90deg)"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: dim / 2,
      cy: dim / 2,
      r: r,
      fill: "none",
      stroke: "var(--neutral-200)",
      strokeWidth: stroke
    }), /*#__PURE__*/React.createElement("circle", {
      cx: dim / 2,
      cy: dim / 2,
      r: r,
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeDasharray: circ,
      strokeDashoffset: circ - circ * pct / 100,
      style: {
        transition: "stroke-dashoffset var(--dur-slow) var(--ease-out)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size === "sm" ? "11px" : "13px",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)",
        fontFamily: "var(--font-mono)"
      }
    }, Math.round(pct), "%"));
  }
  const h = {
    sm: 4,
    md: 6,
    lg: 8
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, label), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)",
      fontWeight: "var(--fw-semibold)",
      fontFamily: "var(--font-mono)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: "var(--neutral-200)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${pct}%`,
      background: color,
      borderRadius: "var(--radius-full)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Skeleton — loading placeholder block. */
function Skeleton({
  width = "100%",
  height = 16,
  radius = "var(--radius-sm)",
  circle = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "nv-skeleton",
    style: {
      display: "block",
      width,
      height: circle ? width : height,
      borderRadius: circle ? "50%" : radius,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Textarea — multi-line field with label, hint, error. */
function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  hint,
  error,
  disabled = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const invalid = Boolean(error);
  const tid = id || (label ? `nv-ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: tid,
    style: {
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: tid,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    className: "nv-focusable",
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      lineHeight: "1.5",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: "10px 12px",
      outline: "none",
      resize: "vertical",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: invalid ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/shared/Icon.jsx
try { (() => {
/**
 * Nivello Icon — React-owned wrapper around a Lucide glyph.
 *
 * Node identity is stable: React owns the <span> and never its interior.
 * The Lucide SVG is injected via innerHTML in an effect, so lucide's DOM
 * mutations never touch nodes React is reconciling (avoids insertBefore
 * crashes on re-render). No global createIcons() interval needed.
 */
function Icon({
  name,
  size,
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!name) {
      el.innerHTML = "";
      return;
    }
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    try {
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    } catch (e) {/* lucide not ready */}
    const svg = el.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("stroke-width", strokeWidth);
      svg.style.display = "block";
    }
  }, [name, strokeWidth]);
  const dim = size != null ? size : undefined;
  return React.createElement("span", {
    ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      ...(dim != null ? {
        width: dim,
        height: dim
      } : {}),
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shared/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello MetricCard — dashboard KPI tile.
 * icon + value + label + optional delta trend.
 */
function MetricCard({
  label,
  value,
  unit,
  icon,
  tone = "brand",
  delta,
  deltaDirection,
  hint,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      bg: "var(--brand-subtle)",
      fg: "var(--brand)"
    },
    accent: {
      bg: "var(--accent-subtle)",
      fg: "var(--accent)"
    },
    success: {
      bg: "var(--success-bg)",
      fg: "var(--success)"
    },
    warning: {
      bg: "var(--warning-bg)",
      fg: "var(--warning)"
    },
    info: {
      bg: "var(--info-bg)",
      fg: "var(--info)"
    },
    neutral: {
      bg: "var(--neutral-100)",
      fg: "var(--neutral-600)"
    }
  };
  const t = tones[tone] || tones.brand;
  const up = deltaDirection === "up";
  const deltaColor = deltaDirection ? up ? "var(--success)" : "var(--danger)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 18,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: t.bg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 20,
      height: 20,
      color: t.fg
    }
  })), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: deltaColor
    }
  }, deltaDirection && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: up ? "trending-up" : "trending-down",
    style: {
      width: 14,
      height: 14
    }
  }), delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      alignItems: "baseline",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "28px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      fontFamily: "var(--font-mono)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)",
      fontWeight: "var(--fw-medium)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, label), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: "12px",
      color: "var(--text-subtle)"
    }
  }, hint));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/MobileListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello MobileListItem — the mobile substitute for a table row.
 * Leading icon/avatar, title, subtitle, meta rows, trailing value + chevron.
 */
function MobileListItem({
  icon,
  iconTone = "brand",
  avatar,
  title,
  subtitle,
  meta,
  trailing,
  badge,
  onClick,
  showChevron = true,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      bg: "var(--brand-subtle)",
      fg: "var(--brand)"
    },
    accent: {
      bg: "var(--accent-subtle)",
      fg: "var(--accent)"
    },
    neutral: {
      bg: "var(--neutral-100)",
      fg: "var(--neutral-600)"
    },
    success: {
      bg: "var(--success-bg)",
      fg: "var(--success)"
    }
  };
  const t = tones[iconTone] || tones.brand;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: "nv-listitem",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      background: "var(--surface-card)",
      cursor: onClick ? "pointer" : "default",
      minHeight: 64,
      transition: "background var(--dur-fast)",
      ...style
    }
  }, rest), avatar, !avatar && icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: t.bg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 20,
      height: 20,
      color: t.fg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), badge), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, subtitle), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-subtle)",
      marginTop: 4,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, meta)), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      textAlign: "right"
    }
  }, trailing), showChevron && onClick && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    style: {
      width: 18,
      height: 18,
      color: "var(--text-subtle)",
      flexShrink: 0
    }
  }));
}
Object.assign(__ds_scope, { MobileListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MobileListItem.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Pagination — page navigation with prev/next and page numbers. */
function Pagination({
  page = 1,
  totalPages = 1,
  onChange,
  showEdges = true,
  style,
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= totalPages && p !== page && onChange) onChange(p);
  };
  const pages = [];
  const range = 1;
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || p >= page - range && p <= page + range) pages.push(p);else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  const btn = active => ({
    minWidth: 34,
    height: 34,
    padding: "0 8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${active ? "var(--brand)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    background: active ? "var(--brand)" : "var(--surface-card)",
    color: active ? "#fff" : "var(--text-body)",
    fontSize: "13px",
    fontWeight: "var(--fw-semibold)",
    fontFamily: "var(--font-mono)",
    cursor: "pointer",
    transition: "background var(--dur-fast)"
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "Anterior",
    style: {
      ...btn(false),
      opacity: page <= 1 ? 0.4 : 1,
      cursor: page <= 1 ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    style: {
      width: 16,
      height: 16
    }
  })), showEdges && pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      color: "var(--text-subtle)",
      padding: "0 4px"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    style: btn(p === page)
  }, p)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page + 1),
    disabled: page >= totalPages,
    "aria-label": "Pr\xF3xima",
    style: {
      ...btn(false),
      opacity: page >= totalPages ? 0.4 : 1,
      cursor: page >= totalPages ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    style: {
      width: 16,
      height: 16
    }
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/domain/ClientCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello ClientCard — cliente summary tile.
 * Shows name, address, phone, and related works/quotes counts.
 */
function ClientCard({
  client = {},
  worksCount,
  quotesCount,
  onClick,
  actions,
  style,
  ...rest
}) {
  const {
    name,
    address,
    cellphone
  } = client;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: onClick ? "nv-card-hover" : undefined,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 16,
      cursor: onClick ? "pointer" : "default",
      transition: "box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    size: "lg",
    square: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, name), address && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    style: {
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, address)), cellphone && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    style: {
      width: 14,
      height: 14,
      flexShrink: 0
    }
  }), cellphone)), actions), (worksCount != null || quotesCount != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 14,
      paddingTop: 12,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, worksCount != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hard-hat",
    style: {
      width: 15,
      height: 15,
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, worksCount), " obras")), quotesCount != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-text",
    style: {
      width: 15,
      height: 15,
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, quotesCount), " or\xE7amentos"))));
}
Object.assign(__ds_scope, { ClientCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/ClientCard.jsx", error: String((e && e.message) || e) }); }

// components/domain/CreateFAB.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello CreateFAB — floating action button (mobile) to create a new
 * orçamento / obra / cliente. Optional speed-dial actions.
 */
function CreateFAB({
  icon = "plus",
  label,
  actions,
  open = false,
  onToggle,
  onClick,
  style,
  ...rest
}) {
  const hasMenu = actions && actions.length > 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "fixed",
      right: 20,
      bottom: "calc(var(--bottomnav-h) + 16px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 12,
      zIndex: "var(--z-fab)",
      ...style
    }
  }, rest), hasMenu && open && actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: a.onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      border: "none",
      cursor: "pointer",
      background: "transparent",
      animation: "nv-slide-up var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-sm)"
    }
  }, a.label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon,
    style: {
      width: 20,
      height: 20,
      color: "var(--brand)"
    }
  })))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label || "Criar",
    onClick: hasMenu ? onToggle : onClick,
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "var(--brand)",
      color: "#fff",
      boxShadow: "var(--shadow-lg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform var(--dur-base) var(--ease-spring), background var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: hasMenu && open ? "x" : icon,
    style: {
      width: 26,
      height: 26,
      transition: "transform var(--dur-base)",
      transform: hasMenu && open ? "rotate(90deg)" : "none"
    }
  })));
}
Object.assign(__ds_scope, { CreateFAB });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/CreateFAB.jsx", error: String((e && e.message) || e) }); }

// components/domain/DeadlineIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello DeadlineIndicator — prazo/vencimento with urgency color.
 * Computes days remaining from `date` (ISO) unless `daysLeft` is given.
 */
function DeadlineIndicator({
  date,
  daysLeft,
  label,
  size = "md",
  style,
  ...rest
}) {
  let days = daysLeft;
  if (days == null && date) {
    const d = new Date(date);
    const now = new Date();
    days = Math.ceil((d - now) / 86400000);
  }
  const overdue = days != null && days < 0;
  const urgent = days != null && days >= 0 && days <= 3;
  const cfg = overdue ? {
    fg: "var(--danger)",
    bg: "var(--danger-bg)",
    icon: "alert-circle",
    text: `${Math.abs(days)}d em atraso`
  } : urgent ? {
    fg: "var(--warning)",
    bg: "var(--warning-bg)",
    icon: "clock-alert",
    text: days === 0 ? "Vence hoje" : `${days}d restantes`
  } : {
    fg: "var(--text-body)",
    bg: "var(--neutral-100)",
    icon: "calendar-clock",
    text: days != null ? `${days}d restantes` : date || "—"
  };
  const dims = size === "sm" ? {
    fontSize: "11px",
    padding: "2px 8px",
    icon: 12
  } : {
    fontSize: "12px",
    padding: "4px 10px",
    icon: 14
  };
  const dateStr = date ? new Date(date).toLocaleDateString("pt-BR") : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    title: dateStr || undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: dims.fontSize,
      color: cfg.fg,
      background: cfg.bg,
      borderRadius: "var(--radius-full)",
      padding: dims.padding,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: cfg.icon,
    style: {
      width: dims.icon,
      height: dims.icon
    }
  }), label ? `${label}: ${cfg.text}` : cfg.text);
}
Object.assign(__ds_scope, { DeadlineIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/DeadlineIndicator.jsx", error: String((e && e.message) || e) }); }

// components/domain/PaymentConditionBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello PaymentConditionBlock — condições de pagamento, prazo, validade.
 * Mirrors the "CONDICIONES DE PAGO / PLAZO / VALIDEZ" block of a quote.
 */
function PaymentConditionBlock({
  paymentTerms,
  deliveryTerm,
  validity,
  observations,
  layout = "grid",
  style,
  ...rest
}) {
  const rows = [{
    icon: "credit-card",
    label: "Condições de pagamento",
    value: paymentTerms
  }, {
    icon: "truck",
    label: "Prazo de entrega",
    value: deliveryTerm
  }, {
    icon: "calendar-check",
    label: "Validade do orçamento",
    value: validity
  }].filter(r => r.value);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: layout === "grid" ? "grid" : "flex",
      gridTemplateColumns: layout === "grid" ? "repeat(auto-fit, minmax(180px, 1fr))" : undefined,
      flexDirection: layout === "stack" ? "column" : undefined,
      gap: 12
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: 12,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-sm)",
      background: "var(--brand-subtle)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    style: {
      width: 16,
      height: 16,
      color: "var(--brand)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label",
    style: {
      fontSize: "10px",
      color: "var(--text-muted)"
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      marginTop: 2
    }
  }, r.value))))), observations && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12,
      padding: "10px 12px",
      background: "var(--warning-bg)",
      border: "1px solid var(--warning-border)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    style: {
      width: 15,
      height: 15,
      color: "var(--warning)",
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "Obs:"), " ", observations)));
}
Object.assign(__ds_scope, { PaymentConditionBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/PaymentConditionBlock.jsx", error: String((e && e.message) || e) }); }

// components/domain/PrintableQuoteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello PrintableQuoteHeader — the letterhead band for a printed/PDF quote.
 * Company identity (left) + quote meta (right). Deep-teal accent rule.
 */
function PrintableQuoteHeader({
  company = {},
  quoteNumber,
  date,
  validity,
  logoSlot,
  style,
  ...rest
}) {
  const {
    name = "Empresa",
    tagline,
    address,
    phone,
    email,
    taxId
  } = company;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 24,
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      minWidth: 0
    }
  }, logoSlot || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "linear-gradient(160deg, var(--teal-500), var(--teal-700))",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "droplet",
    style: {
      width: 28,
      height: 28,
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "20px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, name), tagline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-brand)",
      fontWeight: "var(--fw-semibold)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      marginTop: 2
    }
  }, tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: 6,
      lineHeight: 1.5
    }
  }, address && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    style: {
      width: 12,
      height: 12
    }
  }), address), phone && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    style: {
      width: 12,
      height: 12
    }
  }), phone), email && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    style: {
      width: 12,
      height: 12
    }
  }), email)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label",
    style: {
      fontSize: "11px",
      color: "var(--text-muted)"
    }
  }, "Or\xE7amento"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "26px",
      fontWeight: "var(--fw-bold)",
      fontFamily: "var(--font-mono)",
      color: "var(--text-brand)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1
    }
  }, "N\xBA ", quoteNumber), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, date && /*#__PURE__*/React.createElement("div", null, "Data: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-body)"
    }
  }, date)), validity && /*#__PURE__*/React.createElement("div", null, "Validade: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-body)"
    }
  }, validity)), taxId && /*#__PURE__*/React.createElement("div", null, "RUC/CNPJ: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-body)"
    }
  }, taxId))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: "linear-gradient(90deg, var(--teal-600), var(--teal-400) 60%, var(--terra-400))",
      borderRadius: 2
    }
  }));
}
Object.assign(__ds_scope, { PrintableQuoteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/PrintableQuoteHeader.jsx", error: String((e && e.message) || e) }); }

// components/domain/ProductTypeBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello ProductTypeBadge — distinguishes Serviço vs Material.
 * Serviço = teal (água/mão de obra) · Material = ocre (terra/insumo).
 */
function ProductTypeBadge({
  type = "servico",
  size = "md",
  style,
  ...rest
}) {
  const isService = type === "servico";
  const cfg = isService ? {
    label: "Serviço",
    icon: "wrench",
    fg: "var(--type-service)",
    bg: "var(--type-service-bg)",
    bd: "var(--type-service-border)"
  } : {
    label: "Material",
    icon: "package",
    fg: "var(--type-material)",
    bg: "var(--type-material-bg)",
    bd: "var(--type-material-border)"
  };
  const dims = size === "sm" ? {
    fontSize: "11px",
    padding: "1px 8px",
    gap: 4,
    icon: 12
  } : {
    fontSize: "12px",
    padding: "3px 10px",
    gap: 5,
    icon: 14
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: dims.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: dims.fontSize,
      lineHeight: 1.3,
      color: cfg.fg,
      background: cfg.bg,
      border: `1px solid ${cfg.bd}`,
      borderRadius: "var(--radius-full)",
      padding: dims.padding,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: cfg.icon,
    style: {
      width: dims.icon,
      height: dims.icon
    }
  }), cfg.label);
}
Object.assign(__ds_scope, { ProductTypeBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/ProductTypeBadge.jsx", error: String((e && e.message) || e) }); }

// components/domain/ProductServiceItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const money = n => "R$ " + Number(n || 0).toLocaleString("pt-BR");

/**
 * Nivello ProductServiceItem — a product/serviço/material row in a catalog
 * or picker. Shows type, name, description, unit, and total.
 */
function ProductServiceItem({
  product = {},
  onClick,
  selected = false,
  action,
  compact = false,
  style,
  ...rest
}) {
  const {
    name,
    description,
    quantity,
    unit,
    total,
    type = "servico"
  } = product;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: onClick ? "nv-listitem" : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: compact ? "10px 12px" : "14px",
      background: selected ? "var(--brand-subtle)" : "var(--surface-card)",
      border: `1px solid ${selected ? "var(--brand-border)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-md)",
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--dur-fast), border-color var(--dur-fast)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: type === "servico" ? "var(--type-service-bg)" : "var(--type-material-bg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: type === "servico" ? "wrench" : "package",
    style: {
      width: 19,
      height: 19,
      color: type === "servico" ? "var(--type-service)" : "var(--type-material)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), !compact && /*#__PURE__*/React.createElement(__ds_scope.ProductTypeBadge, {
    type: type,
    size: "sm"
  })), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, (quantity != null || unit) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, quantity, " ", unit), total != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      marginTop: 2
    }
  }, money(total))), action);
}
Object.assign(__ds_scope, { ProductServiceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/ProductServiceItem.jsx", error: String((e && e.message) || e) }); }

// components/domain/QuoteLineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const money = n => Number(n || 0).toLocaleString("pt-BR");

/**
 * Nivello QuoteLineItem — an editable line inside the quote builder.
 * Editable qty/unit/unit-price; computes line total. Read-only variant too.
 */
function QuoteLineItem({
  item = {},
  editable = false,
  onChange,
  onRemove,
  index,
  style,
  ...rest
}) {
  const {
    name,
    description,
    quantity = 0,
    unit = "un",
    unitPrice = 0,
    type = "servico"
  } = item;
  const total = quantity * unitPrice;
  const set = patch => onChange && onChange({
    ...item,
    ...patch
  });
  const inputStyle = {
    width: "100%",
    height: 32,
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    textAlign: "right",
    color: "var(--text-strong)",
    background: "var(--surface-card)",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-sm)",
    padding: "0 8px",
    outline: "none"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-sm)",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: type === "servico" ? "var(--type-service-bg)" : "var(--type-material-bg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: type === "servico" ? "wrench" : "package",
    style: {
      width: 15,
      height: 15,
      color: type === "servico" ? "var(--type-service)" : "var(--type-material)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, description)), editable ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: quantity,
    onChange: e => set({
      quantity: Number(e.target.value)
    }),
    style: {
      ...inputStyle,
      width: 62
    },
    "aria-label": "Quantidade"
  }), /*#__PURE__*/React.createElement("input", {
    value: unit,
    onChange: e => set({
      unit: e.target.value
    }),
    style: {
      ...inputStyle,
      width: 52,
      textAlign: "center"
    },
    "aria-label": "Unidade"
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: unitPrice,
    onChange: e => set({
      unitPrice: Number(e.target.value)
    }),
    style: {
      ...inputStyle,
      width: 96
    },
    "aria-label": "Pre\xE7o unit\xE1rio"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: "14px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, "R$ ", money(total)), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remover",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-subtle)",
      padding: 4,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trash-2",
    style: {
      width: 16,
      height: 16
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, quantity, " ", unit), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100,
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, "R$ ", money(unitPrice)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: "14px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, "R$ ", money(total))));
}
Object.assign(__ds_scope, { QuoteLineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/QuoteLineItem.jsx", error: String((e && e.message) || e) }); }

// components/domain/QuotePreview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const money = n => Number(n || 0).toLocaleString("pt-BR");
function ItemTable({
  title,
  icon,
  color,
  items
}) {
  const subtotal = items.reduce((s, it) => s + (it.quantity || 0) * (it.unitPrice || 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "var(--radius-sm)",
      background: color.bg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 14,
      height: 14,
      color: color.fg
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, title)), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "13px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "7px 10px",
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--text-muted)",
      borderBottom: "1.5px solid var(--border-default)"
    }
  }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right",
      padding: "7px 10px",
      width: 60,
      fontSize: "10px",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1.5px solid var(--border-default)"
    }
  }, "Qtd"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center",
      padding: "7px 10px",
      width: 50,
      fontSize: "10px",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1.5px solid var(--border-default)"
    }
  }, "Un"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right",
      padding: "7px 10px",
      width: 110,
      fontSize: "10px",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1.5px solid var(--border-default)"
    }
  }, "P. Unit."), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right",
      padding: "7px 10px",
      width: 120,
      fontSize: "10px",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1.5px solid var(--border-default)"
    }
  }, "Total"))), /*#__PURE__*/React.createElement("tbody", null, items.map((it, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px",
      color: "var(--text-body)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, it.name), it.description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, it.description)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-body)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, it.quantity), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px",
      textAlign: "center",
      color: "var(--text-muted)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, it.unit), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-body)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, money(it.unitPrice)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, money(it.quantity * it.unitPrice)))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 4,
    style: {
      padding: "8px 10px",
      textAlign: "right",
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-muted)"
    }
  }, "Subtotal ", title.toLowerCase()), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "8px 10px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontWeight: "var(--fw-bold)",
      color: color.fg
    }
  }, "R$ ", money(subtotal))))));
}

/**
 * Nivello QuotePreview — the elegant, print-ready orçamento document.
 * Composes header, client/obra blocks, serviços & materiais tables,
 * grand total, and payment conditions. Feed items with { type }.
 */
function QuotePreview({
  company = {},
  client = {},
  work = {},
  quoteNumber,
  date,
  validity,
  items = [],
  paymentTerms,
  deliveryTerm,
  observations,
  currency = "R$",
  style,
  ...rest
}) {
  const services = items.filter(i => (i.type || "servico") === "servico");
  const materials = items.filter(i => i.type === "material");
  const total = items.reduce((s, it) => s + (it.quantity || 0) * (it.unitPrice || 0), 0);
  const InfoBlock = ({
    label,
    icon,
    lines
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-label",
    style: {
      fontSize: "10px",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 13,
      height: 13
    }
  }), label), lines.filter(Boolean).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: "13px",
      color: i === 0 ? "var(--text-strong)" : "var(--text-body)",
      fontWeight: i === 0 ? "var(--fw-semibold)" : "var(--fw-regular)",
      lineHeight: 1.5
    }
  }, l)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "#fff",
      padding: "36px 40px",
      maxWidth: 820,
      margin: "0 auto",
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PrintableQuoteHeader, {
    company: company,
    quoteNumber: quoteNumber,
    date: date,
    validity: validity
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      padding: "18px 0",
      borderBottom: "1px solid var(--border-subtle)",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(InfoBlock, {
    label: "Cliente",
    icon: "user",
    lines: [client.name, client.address, client.cellphone]
  }), /*#__PURE__*/React.createElement(InfoBlock, {
    label: "Obra",
    icon: "hard-hat",
    lines: [work.name, work.address, work.description]
  })), services.length > 0 && /*#__PURE__*/React.createElement(ItemTable, {
    title: "Servi\xE7os",
    icon: "wrench",
    color: {
      fg: "var(--type-service)",
      bg: "var(--type-service-bg)"
    },
    items: services
  }), materials.length > 0 && /*#__PURE__*/React.createElement(ItemTable, {
    title: "Materiais",
    icon: "package",
    color: {
      fg: "var(--type-material)",
      bg: "var(--type-material-bg)"
    },
    items: materials
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 8,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 300,
      background: "var(--surface-deep)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "#a9cdd6",
      textTransform: "uppercase",
      letterSpacing: "0.05em"
    }
  }, "Total geral"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      color: "#fff",
      fontSize: "26px",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "-0.01em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px",
      color: "#7fbecb",
      marginRight: 4
    }
  }, currency), money(total)))), /*#__PURE__*/React.createElement(__ds_scope.PaymentConditionBlock, {
    paymentTerms: paymentTerms,
    deliveryTerm: deliveryTerm,
    validity: validity,
    observations: observations
  }));
}
Object.assign(__ds_scope, { QuotePreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/QuotePreview.jsx", error: String((e && e.message) || e) }); }

// components/domain/QuoteStatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  rascunho: {
    label: "Rascunho",
    tone: "neutral",
    icon: "file-pen-line",
    fg: "var(--status-draft)",
    bg: "var(--status-draft-bg)"
  },
  enviado: {
    label: "Enviado",
    tone: "info",
    icon: "send",
    fg: "var(--status-sent)",
    bg: "var(--status-sent-bg)"
  },
  aprovado: {
    label: "Aprovado",
    tone: "success",
    icon: "check-circle-2",
    fg: "var(--status-approved)",
    bg: "var(--status-approved-bg)"
  },
  recusado: {
    label: "Recusado",
    tone: "danger",
    icon: "x-circle",
    fg: "var(--status-rejected)",
    bg: "var(--status-rejected-bg)"
  },
  expirado: {
    label: "Expirado",
    tone: "warning",
    icon: "clock-alert",
    fg: "var(--status-expired)",
    bg: "var(--status-expired-bg)"
  }
};

/** Nivello QuoteStatusBadge — orçamento lifecycle status. */
function QuoteStatusBadge({
  status = "rascunho",
  size = "md",
  showIcon = true,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.rascunho;
  const dims = size === "sm" ? {
    fontSize: "11px",
    padding: "2px 8px",
    gap: 4,
    icon: 12
  } : {
    fontSize: "12px",
    padding: "4px 10px",
    gap: 5,
    icon: 14
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: dims.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: dims.fontSize,
      lineHeight: 1.3,
      color: s.fg,
      background: s.bg,
      borderRadius: "var(--radius-full)",
      padding: dims.padding,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), showIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    style: {
      width: dims.icon,
      height: dims.icon
    }
  }), s.label);
}
Object.assign(__ds_scope, { QuoteStatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/QuoteStatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/domain/QuoteSummaryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello QuoteSummaryCard — a quote at-a-glance in lists/dashboard.
 * Shows number, client, obra, total, status, date.
 */
function QuoteSummaryCard({
  quote = {},
  onClick,
  style,
  ...rest
}) {
  const {
    number,
    name,
    clientName,
    workName,
    total,
    status = "rascunho",
    date,
    itemCount
  } = quote;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: onClick ? "nv-card-hover" : undefined,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 16,
      cursor: onClick ? "pointer" : "default",
      transition: "box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-brand)",
      background: "var(--brand-subtle)",
      padding: "1px 7px",
      borderRadius: "var(--radius-sm)"
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name || clientName)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: 5,
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, clientName && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "building-2",
    style: {
      width: 13,
      height: 13
    }
  }), clientName), workName && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "hard-hat",
    style: {
      width: 13,
      height: 13
    }
  }), workName))), /*#__PURE__*/React.createElement(__ds_scope.QuoteStatusBadge, {
    status: status,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 14,
      paddingTop: 12,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, date && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    style: {
      width: 13,
      height: 13
    }
  }), date), itemCount != null && /*#__PURE__*/React.createElement("span", null, itemCount, " itens")), /*#__PURE__*/React.createElement(__ds_scope.TotalPriceDisplay, {
    value: total,
    size: "md",
    align: "right"
  })));
}
Object.assign(__ds_scope, { QuoteSummaryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/QuoteSummaryCard.jsx", error: String((e && e.message) || e) }); }

// components/domain/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WORK_STATUS = {
  planejada: {
    label: "Planejada",
    fg: "var(--work-planned)",
    bg: "var(--work-planned-bg)",
    dot: "var(--neutral-400)"
  },
  andamento: {
    label: "Em andamento",
    fg: "var(--work-active)",
    bg: "var(--work-active-bg)",
    dot: "var(--teal-500)"
  },
  concluida: {
    label: "Concluída",
    fg: "var(--work-done)",
    bg: "var(--work-done-bg)",
    dot: "var(--success-500)"
  },
  atrasada: {
    label: "Atrasada",
    fg: "var(--work-late)",
    bg: "var(--work-late-bg)",
    dot: "var(--danger-500)"
  }
};

/** Nivello WorkCard — obra summary with status, client, progress, deadline. */
function WorkCard({
  work = {},
  clientName,
  status = "andamento",
  progress,
  onClick,
  style,
  ...rest
}) {
  const {
    name,
    address,
    deadline
  } = work;
  const s = WORK_STATUS[status] || WORK_STATUS.andamento;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: onClick ? "nv-card-hover" : undefined,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 16,
      cursor: onClick ? "pointer" : "default",
      transition: "box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, name), clientName && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "building-2",
    style: {
      width: 13,
      height: 13
    }
  }), clientName)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      flexShrink: 0,
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: s.fg,
      background: s.bg,
      borderRadius: "var(--radius-full)",
      padding: "3px 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: s.dot
    }
  }), s.label)), address && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: "12px",
      color: "var(--text-subtle)",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    style: {
      width: 13,
      height: 13,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, address)), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressIndicator, {
    value: progress,
    tone: status === "atrasada" ? "danger" : "brand",
    showLabel: true
  })), deadline && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DeadlineIndicator, {
    date: deadline,
    size: "sm",
    label: "Prazo"
  })));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/WorkCard.jsx", error: String((e && e.message) || e) }); }

// components/domain/WorkTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello WorkTimeline — vertical timeline of a obra's milestones/events.
 * events: [{ title, date, description, status: 'done'|'current'|'upcoming', icon }]
 */
function WorkTimeline({
  events = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), events.map((e, i) => {
    const last = i === events.length - 1;
    const cfg = {
      done: {
        ring: "var(--success)",
        bg: "var(--success)",
        ic: "#fff",
        icon: e.icon || "check"
      },
      current: {
        ring: "var(--brand)",
        bg: "var(--brand-subtle)",
        ic: "var(--brand)",
        icon: e.icon || "loader"
      },
      upcoming: {
        ring: "var(--neutral-300)",
        bg: "var(--surface-card)",
        ic: "var(--text-subtle)",
        icon: e.icon || "circle"
      }
    }[e.status || "upcoming"];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 14,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: `2px solid ${cfg.ring}`,
        background: cfg.bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: cfg.icon,
      style: {
        width: 15,
        height: 15,
        color: cfg.ic
      }
    })), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        background: e.status === "done" ? "var(--success)" : "var(--neutral-200)",
        minHeight: 24
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 22,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)"
      }
    }, e.title), e.date && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        color: "var(--text-subtle)",
        fontFamily: "var(--font-mono)"
      }
    }, e.date)), e.description && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "13px",
        color: "var(--text-muted)",
        marginTop: 3,
        lineHeight: 1.5
      }
    }, e.description)));
  }));
}
Object.assign(__ds_scope, { WorkTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/WorkTimeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Alert — inline contextual message.
 * variants: info · success · warning · danger.
 */
function Alert({
  variant = "info",
  title,
  children,
  icon,
  onClose,
  style,
  ...rest
}) {
  const map = {
    info: {
      bg: "var(--info-bg)",
      bd: "var(--info-border)",
      fg: "var(--info)",
      ic: "info"
    },
    success: {
      bg: "var(--success-bg)",
      bd: "var(--success-border)",
      fg: "var(--success)",
      ic: "check-circle-2"
    },
    warning: {
      bg: "var(--warning-bg)",
      bd: "var(--warning-border)",
      fg: "var(--warning)",
      ic: "alert-triangle"
    },
    danger: {
      bg: "var(--danger-bg)",
      bd: "var(--danger-border)",
      fg: "var(--danger)",
      ic: "alert-circle"
    }
  };
  const c = map[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 14px",
      background: c.bg,
      border: `1px solid ${c.bd}`,
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || c.ic,
    style: {
      width: 18,
      height: 18,
      color: c.fg,
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 2,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    style: {
      width: 16,
      height: 16
    }
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Badge — compact label/count. Semantic tones + optional dot/icon. */
function Badge({
  children,
  tone = "neutral",
  size = "md",
  dot = false,
  icon,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--neutral-100)",
      fg: "var(--neutral-700)",
      bd: "var(--neutral-200)"
    },
    brand: {
      bg: "var(--brand-subtle)",
      fg: "var(--text-brand)",
      bd: "var(--brand-border)"
    },
    accent: {
      bg: "var(--accent-subtle)",
      fg: "var(--terra-700)",
      bd: "var(--accent-border)"
    },
    success: {
      bg: "var(--success-bg)",
      fg: "var(--success)",
      bd: "var(--success-border)"
    },
    warning: {
      bg: "var(--warning-bg)",
      fg: "var(--warning)",
      bd: "var(--warning-border)"
    },
    danger: {
      bg: "var(--danger-bg)",
      fg: "var(--danger)",
      bd: "var(--danger-border)"
    },
    info: {
      bg: "var(--info-bg)",
      fg: "var(--info)",
      bd: "var(--info-border)"
    },
    solid: {
      bg: "var(--brand)",
      fg: "#fff",
      bd: "transparent"
    }
  };
  const t = tones[tone] || tones.neutral;
  const s = size === "sm" ? {
    fontSize: "11px",
    padding: "1px 7px",
    gap: 4
  } : {
    fontSize: "12px",
    padding: "3px 9px",
    gap: 5
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: s.fontSize,
      lineHeight: 1.3,
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-full)",
      padding: s.padding,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      flexShrink: 0
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 13,
      height: 13
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello EmptyState — friendly placeholder for empty lists/screens. */
function EmptyState({
  icon = "inbox",
  title,
  description,
  action,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: compact ? "28px 20px" : "48px 24px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: compact ? 44 : 56,
      height: compact ? 44 : 56,
      borderRadius: "var(--radius-lg)",
      background: "var(--brand-subtle)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: compact ? 22 : 26,
      height: compact ? 22 : 26,
      color: "var(--brand)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: compact ? "15px" : "16px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 6,
      maxWidth: 320,
      lineHeight: 1.5
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Toast — floating transient notification. Render inside a fixed stack. */
function Toast({
  variant = "info",
  title,
  description,
  onClose,
  style,
  ...rest
}) {
  const map = {
    info: {
      fg: "var(--info)",
      ic: "info"
    },
    success: {
      fg: "var(--success)",
      ic: "check-circle-2"
    },
    warning: {
      fg: "var(--warning)",
      ic: "alert-triangle"
    },
    danger: {
      fg: "var(--danger)",
      ic: "alert-circle"
    }
  };
  const c = map[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 360,
      maxWidth: "calc(100vw - 32px)",
      padding: "13px 14px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      animation: "nv-slide-up var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "var(--radius-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: `color-mix(in srgb, ${c.fg} 12%, transparent)`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.ic,
    style: {
      width: 17,
      height: 17,
      color: c.fg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: 2,
      lineHeight: 1.45
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-subtle)",
      padding: 2,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    style: {
      width: 16,
      height: 16
    }
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Button — primary action control.
 * Icons use Lucide: pass `icon`/`iconRight` as a lucide name; the host
 * calls lucide.createIcons() after render.
 */
function Button({
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
    userSelect: "none"
  };
  const sizes = {
    sm: {
      height: "var(--control-sm)",
      padding: "0 12px",
      fontSize: "13px"
    },
    md: {
      height: "var(--control-md)",
      padding: "0 16px",
      fontSize: "14px"
    },
    lg: {
      height: "var(--control-lg)",
      padding: "0 22px",
      fontSize: "15px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--brand-contrast)",
      boxShadow: "var(--shadow-xs)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      borderColor: "var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)"
    },
    danger: {
      background: "var(--danger)",
      color: "#fff",
      boxShadow: "var(--shadow-xs)"
    },
    link: {
      background: "transparent",
      color: "var(--text-link)",
      padding: "0",
      height: "auto"
    }
  };
  const iconSize = size === "sm" ? 15 : size === "lg" ? 19 : 17;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    className: `nv-btn nv-btn-${variant}`,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "nv-spinner",
    style: {
      width: iconSize,
      height: iconSize,
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      borderRadius: "50%",
      display: "inline-block",
      animation: "nv-spin 0.7s linear infinite"
    }
  }), !loading && icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: iconSize,
      height: iconSize
    }
  }), children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    style: {
      width: iconSize,
      height: iconSize
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello DatePicker — date field styled to match Input, with calendar icon. */
function DatePicker({
  label,
  value,
  onChange,
  hint,
  error,
  disabled = false,
  required = false,
  size = "md",
  min,
  max,
  id,
  style,
  ...rest
}) {
  const height = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const invalid = Boolean(error);
  const did = id || (label ? `nv-dp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: did,
    style: {
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    style: {
      position: "absolute",
      left: 12,
      width: 17,
      height: 17,
      color: "var(--text-subtle)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: did,
    type: "date",
    value: value,
    onChange: onChange,
    disabled: disabled,
    min: min,
    max: max,
    className: "nv-focusable",
    style: {
      width: "100%",
      height,
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: "0 12px 0 36px",
      outline: "none",
      cursor: disabled ? "not-allowed" : "text",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: invalid ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello IconButton — square, icon-only action. Uses Lucide.
 */
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const iconSize = {
    sm: 16,
    md: 18,
    lg: 20
  }[size];
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    solid: {
      background: "var(--brand)",
      color: "#fff",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-default)"
    },
    danger: {
      background: "transparent",
      color: "var(--danger)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    className: `nv-btn nv-btn-${variant === "solid" ? "primary" : variant === "danger" ? "ghost" : "ghost"}`,
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out)",
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: iconSize,
      height: iconSize
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Input — labelled text field with optional icon, states, hint.
 */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  suffix,
  hint,
  error,
  disabled = false,
  required = false,
  size = "md",
  id,
  style,
  ...rest
}) {
  const height = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const invalid = Boolean(error);
  const inputId = id || (label ? `nv-inp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "nv-label",
    style: {
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)",
      letterSpacing: "0.01em",
      textTransform: "none"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      position: "absolute",
      left: 12,
      width: 17,
      height: 17,
      color: "var(--text-subtle)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    className: "nv-focusable",
    style: {
      width: "100%",
      height,
      fontFamily: "var(--font-sans)",
      fontSize: size === "sm" ? "13px" : "14px",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: `0 ${suffix ? 44 : 12}px 0 ${icon ? 36 : 12}px`,
      outline: "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
      cursor: disabled ? "not-allowed" : "text"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      fontSize: "13px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: invalid ? "var(--danger)" : "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, invalid && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    style: {
      width: 13,
      height: 13
    }
  }), error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello SearchBar — search input with icon and optional clear button. */
function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Buscar…",
  size = "md",
  fullWidth = true,
  style,
  ...rest
}) {
  const height = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: fullWidth ? "100%" : "auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    style: {
      position: "absolute",
      left: 12,
      width: 17,
      height: 17,
      color: "var(--text-subtle)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    className: "nv-focusable",
    style: {
      width: "100%",
      height,
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: `0 ${value ? 36 : 12}px 0 36px`,
      outline: "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, rest)), value && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClear,
    "aria-label": "Limpar",
    style: {
      position: "absolute",
      right: 8,
      width: 24,
      height: 24,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    style: {
      width: 15,
      height: 15
    }
  })));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Select — native-styled dropdown with label and chevron. */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Selecione…",
  hint,
  error,
  disabled = false,
  required = false,
  size = "md",
  id,
  style,
  ...rest
}) {
  const height = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const invalid = Boolean(error);
  const sid = id || (label ? `nv-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    className: "nv-focusable",
    style: {
      width: "100%",
      height,
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: value ? "var(--text-strong)" : "var(--text-subtle)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: "0 36px 0 12px",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    style: {
      position: "absolute",
      right: 12,
      width: 17,
      height: 17,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: invalid ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello BottomNav — mobile primary navigation. items: [{value,label,icon}]. */
function BottomNav({
  items = [],
  value,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      height: "var(--bottomnav-h)",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      boxShadow: "0 -2px 10px rgba(16,23,28,0.05)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onSelect && onSelect(it.value),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: active ? "var(--brand)" : "var(--text-muted)",
        padding: "6px 4px",
        transition: "color var(--dur-fast)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      style: {
        width: 22,
        height: 22,
        strokeWidth: active ? 2.1 : 1.75
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)",
        fontFamily: "var(--font-sans)"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Breadcrumb — hierarchical trail. items: [{label,href,icon}]. */
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      onClick: !last && onNavigate ? () => onNavigate(it, i) : undefined,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: "13px",
        fontWeight: last ? "var(--fw-semibold)" : "var(--fw-medium)",
        color: last ? "var(--text-strong)" : "var(--text-muted)",
        cursor: !last && onNavigate ? "pointer" : "default",
        whiteSpace: "nowrap"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      style: {
        width: 14,
        height: 14
      }
    }), it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      style: {
        width: 14,
        height: 14,
        color: "var(--text-subtle)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DropdownMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello DropdownMenu — click-to-open menu. items: [{label,icon,onClick,danger,divider}]. */
function DropdownMenu({
  trigger,
  items = [],
  align = "left",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      cursor: "pointer"
    }
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      [align]: 0,
      minWidth: 190,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: 5,
      zIndex: "var(--z-dropdown)",
      animation: "nv-slide-up var(--dur-fast) var(--ease-out)"
    }
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: `d${i}`,
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "5px 0"
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => {
      it.onClick && it.onClick();
      setOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "8px 10px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      borderRadius: "var(--radius-sm)",
      fontSize: "13px",
      fontWeight: "var(--fw-medium)",
      fontFamily: "var(--font-sans)",
      color: it.danger ? "var(--danger)" : "var(--text-body)",
      textAlign: "left",
      transition: "background var(--dur-fast)"
    },
    onMouseEnter: e => e.currentTarget.style.background = it.danger ? "var(--danger-bg)" : "var(--surface-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    style: {
      width: 16,
      height: 16
    }
  }), it.label))));
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello FilterBar — horizontal filter chips + count.
 * On mobile, pair with a Drawer for advanced filters.
 * filters: [{ value, label, icon, active }]
 */
function FilterBar({
  filters = [],
  onToggle,
  onOpenDrawer,
  resultCount,
  trailing,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
      ...style
    }
  }, rest), onOpenDrawer && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenDrawer,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 34,
      padding: "0 12px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sliders-horizontal",
    style: {
      width: 15,
      height: 15
    }
  }), "Filtros"), filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.value,
    type: "button",
    onClick: () => onToggle && onToggle(f.value),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 34,
      padding: "0 12px",
      borderRadius: "var(--radius-full)",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "var(--fw-medium)",
      fontFamily: "var(--font-sans)",
      transition: "all var(--dur-fast)",
      border: `1px solid ${f.active ? "var(--brand)" : "var(--border-default)"}`,
      background: f.active ? "var(--brand-subtle)" : "var(--surface-card)",
      color: f.active ? "var(--text-brand)" : "var(--text-body)"
    }
  }, f.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f.icon,
    style: {
      width: 14,
      height: 14
    }
  }), f.label, f.active && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    style: {
      width: 13,
      height: 13
    }
  }))), (resultCount != null || trailing) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, resultCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, resultCount, " resultados"), trailing));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Sidebar — desktop primary navigation.
 * Brand wordmark + nav groups + user footer. Deep teal surface.
 * items: [{ value, label, icon, badge }]
 */
function Sidebar({
  items = [],
  value,
  onSelect,
  user,
  collapsed = false,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      width: collapsed ? "var(--sidebar-w-collapsed)" : "var(--sidebar-w)",
      height: "100%",
      background: "var(--surface-deep)",
      color: "#cfe6ec",
      display: "flex",
      flexDirection: "column",
      transition: "width var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 18px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "var(--radius-md)",
      background: "linear-gradient(160deg, var(--teal-400), var(--teal-600))",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "droplet",
    style: {
      width: 17,
      height: 17,
      color: "#fff"
    }
  })), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "18px",
      fontWeight: "var(--fw-bold)",
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, "Nivello")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 10px",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(it => {
    if (it.section) return !collapsed ? /*#__PURE__*/React.createElement("div", {
      key: it.section,
      className: "nv-label",
      style: {
        padding: "14px 10px 6px",
        fontSize: "11px",
        color: "#6f96a0"
      }
    }, it.section) : /*#__PURE__*/React.createElement("div", {
      key: it.section,
      style: {
        height: 12
      }
    });
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onSelect && onSelect(it.value),
      title: it.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: collapsed ? "10px" : "9px 11px",
        justifyContent: collapsed ? "center" : "flex-start",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-md)",
        background: active ? "rgba(52,186,205,0.16)" : "transparent",
        color: active ? "#fff" : "#a9cdd6",
        fontSize: "14px",
        fontWeight: "var(--fw-medium)",
        fontFamily: "var(--font-sans)",
        transition: "background var(--dur-fast), color var(--dur-fast)",
        position: "relative"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.06)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: 4,
        background: "var(--teal-300)"
      }
    }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      style: {
        width: 19,
        height: 19,
        flexShrink: 0
      }
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: "left"
      }
    }, it.label), !collapsed && it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        fontWeight: "var(--fw-semibold)",
        padding: "1px 7px",
        borderRadius: "var(--radius-full)",
        background: "rgba(52,186,205,0.22)",
        color: "#cbeef4",
        fontFamily: "var(--font-mono)"
      }
    }, it.badge));
  })), (user || footer) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: "1px solid rgba(255,255,255,0.08)",
      flexShrink: 0
    }
  }, footer || /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "#fff",
      flexShrink: 0
    }
  }, (user?.name || "?").split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase()), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, user?.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "#7fa4ad",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, user?.email)))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Stepper — multi-step progress header (quote builder).
 * steps: [{label, description?}]. current = 0-indexed active step.
 */
function Stepper({
  steps = [],
  current = 0,
  orientation = "horizontal",
  onStepClick,
  style,
  ...rest
}) {
  const vertical = orientation === "vertical";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      alignItems: vertical ? "stretch" : "flex-start",
      gap: 0,
      ...style
    }
  }, rest), steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    const color = done || active ? "var(--brand)" : "var(--neutral-300)";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: vertical ? "row" : "column",
        alignItems: vertical ? "flex-start" : "center",
        flex: vertical ? "none" : 1,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        alignItems: "center",
        gap: vertical ? 0 : 0,
        [vertical ? "marginRight" : ""]: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onStepClick ? () => onStepClick(i) : undefined,
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        flexShrink: 0,
        border: `2px solid ${color}`,
        background: done ? "var(--brand)" : active ? "var(--brand-subtle)" : "var(--surface-card)",
        color: done ? "#fff" : active ? "var(--brand)" : "var(--text-subtle)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: "var(--fw-bold)",
        fontFamily: "var(--font-mono)",
        cursor: onStepClick ? "pointer" : "default",
        transition: "all var(--dur-base)"
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      style: {
        width: 15,
        height: 15
      }
    }) : i + 1)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: vertical ? {
        position: "absolute",
        left: 14,
        top: 30,
        bottom: -6,
        width: 2,
        background: done ? "var(--brand)" : "var(--neutral-200)"
      } : {
        position: "absolute",
        top: 14,
        left: "calc(50% + 20px)",
        right: "calc(-50% + 20px)",
        height: 2,
        background: done ? "var(--brand)" : "var(--neutral-200)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: vertical ? 0 : 8,
        marginLeft: vertical ? 12 : 0,
        paddingBottom: vertical ? 24 : 0,
        textAlign: vertical ? "left" : "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "13px",
        fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)",
        color: active || done ? "var(--text-strong)" : "var(--text-muted)"
      }
    }, s.label), s.description && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "12px",
        color: "var(--text-subtle)",
        marginTop: 2
      }
    }, s.description)));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/domain/MobileQuoteBuilder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STEPS = [{
  label: "Cliente & Obra"
}, {
  label: "Itens"
}, {
  label: "Resumo"
}];

/**
 * Nivello MobileQuoteBuilder — the mobile stepped flow for creating a quote.
 * Self-contained demo of the recommended UX: Stepper header, per-step body,
 * sticky total + advance bar. Wire real data via props for production use.
 */
function MobileQuoteBuilder({
  client,
  work,
  items = [],
  onAddItem,
  step: controlledStep,
  onStepChange,
  style,
  ...rest
}) {
  const [internalStep, setInternalStep] = React.useState(0);
  const step = controlledStep != null ? controlledStep : internalStep;
  const setStep = s => {
    onStepChange ? onStepChange(s) : setInternalStep(s);
  };
  const total = items.reduce((s, it) => s + (it.quantity || 0) * (it.unitPrice || 0), 0);
  const Field = ({
    label,
    value,
    icon,
    placeholder
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 48,
      padding: "0 14px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      color: value ? "var(--text-strong)" : "var(--text-subtle)"
    }
  }, value || placeholder)));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--surface-page)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 14px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "17px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      marginBottom: 14
    }
  }, "Novo or\xE7amento"), /*#__PURE__*/React.createElement(__ds_scope.Stepper, {
    steps: STEPS,
    current: step,
    onStepClick: setStep
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Cliente",
    value: client?.name,
    icon: "user",
    placeholder: "Selecione o cliente"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Obra",
    value: work?.name,
    icon: "hard-hat",
    placeholder: "Selecione a obra"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Endere\xE7o da obra",
    value: work?.address,
    icon: "map-pin",
    placeholder: "\u2014"
  })), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-muted)"
    }
  }, items.length, " itens adicionados"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAddItem,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 36,
      padding: "0 12px",
      border: "1px dashed var(--brand)",
      borderRadius: "var(--radius-md)",
      background: "var(--brand-subtle)",
      color: "var(--text-brand)",
      fontSize: "13px",
      fontWeight: "var(--fw-semibold)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    style: {
      width: 15,
      height: 15
    }
  }), "Adicionar")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--surface-card)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      borderBottom: i < items.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-sm)",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: (it.type || "servico") === "servico" ? "var(--type-service-bg)" : "var(--type-material-bg)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: (it.type || "servico") === "servico" ? "wrench" : "package",
    style: {
      width: 16,
      height: 16,
      color: (it.type || "servico") === "servico" ? "var(--type-service)" : "var(--type-material)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, it.quantity, " ", it.unit, " \xD7 R$ ", Number(it.unitPrice || 0).toLocaleString("pt-BR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: "14px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, "R$ ", Number((it.quantity || 0) * (it.unitPrice || 0)).toLocaleString("pt-BR")))))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Cliente"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-strong)"
    }
  }, client?.name || "—")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Obra"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-strong)"
    }
  }, work?.name || "—")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Itens"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-strong)"
    }
  }, items.length))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TotalPriceDisplay, {
    value: total,
    label: "Total",
    size: "md"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep(Math.min(step + 1, STEPS.length - 1)),
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 48,
      padding: "0 22px",
      border: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--brand)",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "var(--fw-semibold)",
      cursor: "pointer",
      boxShadow: "var(--shadow-sm)"
    }
  }, step === STEPS.length - 1 ? "Gerar orçamento" : "Continuar", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: step === STEPS.length - 1 ? "check" : "arrow-right",
    style: {
      width: 18,
      height: 18
    }
  }))));
}
Object.assign(__ds_scope, { MobileQuoteBuilder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/MobileQuoteBuilder.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Nivello Tabs — underline or pill tab bar. items: [{value,label,icon,count}]. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  const isPill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: isPill ? 6 : 4,
      borderBottom: isPill ? "none" : "1px solid var(--border-subtle)",
      background: isPill ? "var(--surface-sunken)" : "transparent",
      padding: isPill ? 4 : 0,
      borderRadius: isPill ? "var(--radius-md)" : 0,
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
        fontWeight: "var(--fw-semibold)",
        whiteSpace: "nowrap",
        padding: isPill ? "7px 14px" : "10px 4px",
        marginBottom: isPill ? 0 : -1,
        background: isPill ? active ? "var(--surface-card)" : "transparent" : "transparent",
        color: active ? isPill ? "var(--text-strong)" : "var(--text-brand)" : "var(--text-muted)",
        borderRadius: isPill ? "var(--radius-sm)" : 0,
        borderBottom: isPill ? "none" : `2px solid ${active ? "var(--brand)" : "transparent"}`,
        boxShadow: isPill && active ? "var(--shadow-xs)" : "none",
        transition: "color var(--dur-fast), background var(--dur-fast)"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      style: {
        width: 16,
        height: 16
      }
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        fontWeight: "var(--fw-semibold)",
        padding: "1px 7px",
        borderRadius: "var(--radius-full)",
        background: active ? "var(--brand-subtle)" : "var(--neutral-100)",
        color: active ? "var(--text-brand)" : "var(--text-muted)",
        fontFamily: "var(--font-mono)"
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Drawer — side/bottom sliding panel.
 * side="right" for detail/edit; side="bottom" for mobile filters & sheets.
 */
function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  side = "right",
  size = 420,
  style,
  ...rest
}) {
  if (!open) return null;
  const bottom = side === "bottom";
  const panel = bottom ? {
    width: "100%",
    maxHeight: "85vh",
    borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
    animation: "nv-slide-up var(--dur-slow) var(--ease-out)"
  } : {
    width: size,
    maxWidth: "92vw",
    height: "100%",
    borderRadius: 0,
    animation: "nv-slide-in-right var(--dur-slow) var(--ease-out)"
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay)",
      display: "flex",
      alignItems: bottom ? "flex-end" : "stretch",
      justifyContent: side === "left" ? "flex-start" : "flex-end",
      zIndex: "var(--z-drawer)",
      animation: "nv-fade-in var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      ...panel,
      ...style
    }
  }, rest), bottom && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 4,
      background: "var(--neutral-300)",
      margin: "10px auto 2px"
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "16px 20px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "16px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 4,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    style: {
      width: 19,
      height: 19
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 20
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "14px 20px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nivello Modal — centered dialog with backdrop.
 * Use for confirmations, quick forms, quote-generated success.
 */
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  icon,
  iconTone = "brand",
  closeOnBackdrop = true,
  style,
  ...rest
}) {
  if (!open) return null;
  const width = {
    sm: 400,
    md: 520,
    lg: 680
  }[size];
  const tones = {
    brand: {
      bg: "var(--brand-subtle)",
      fg: "var(--brand)"
    },
    success: {
      bg: "var(--success-bg)",
      fg: "var(--success)"
    },
    warning: {
      bg: "var(--warning-bg)",
      fg: "var(--warning)"
    },
    danger: {
      bg: "var(--danger-bg)",
      fg: "var(--danger)"
    }
  };
  const t = tones[iconTone] || tones.brand;
  return /*#__PURE__*/React.createElement("div", {
    onClick: closeOnBackdrop ? onClose : undefined,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      zIndex: "var(--z-modal)",
      animation: "nv-fade-in var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxWidth: width,
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      animation: "nv-slide-up var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      padding: "20px 22px 0"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-md)",
      background: t.bg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    style: {
      width: 21,
      height: 21,
      color: t.fg
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "18px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 4,
      display: "inline-flex",
      borderRadius: "var(--radius-sm)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    style: {
      width: 19,
      height: 19
    }
  }))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      overflowY: "auto"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "14px 22px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nivello-app/builder.jsx
try { (() => {
/* Nivello UI kit — desktop quote builder screen (editable) */
(function () {
  const NS = window.NivelloDesignSystem_c06109;
  const {
    Stepper,
    Select,
    Button,
    QuoteLineItem,
    ProductServiceItem,
    TotalPriceDisplay,
    Tabs,
    Card,
    Breadcrumb,
    SearchBar
  } = NS;
  const D = window.NivelloData;
  const money = D.money;
  function QuoteBuilder({
    onBack,
    onGenerate
  }) {
    const [step, setStep] = React.useState(1);
    const [tab, setTab] = React.useState("servicos");
    const [lines, setLines] = React.useState(D.quoteItems.map(i => ({
      ...i
    })));
    const setLine = (idx, v) => setLines(ls => ls.map((l, i) => i === idx ? v : l));
    const remove = idx => setLines(ls => ls.filter((_, i) => i !== idx));
    const shown = lines.map((l, i) => ({
      l,
      i
    })).filter(({
      l
    }) => tab === "servicos" ? (l.type || "servico") === "servico" : l.type === "material");
    const total = lines.reduce((s, l) => s + (l.quantity || 0) * (l.unitPrice || 0), 0);
    const servTotal = lines.filter(l => (l.type || "servico") === "servico").reduce((s, l) => s + l.quantity * l.unitPrice, 0);
    const matTotal = lines.filter(l => l.type === "material").reduce((s, l) => s + l.quantity * l.unitPrice, 0);
    return React.createElement("div", null, React.createElement(Breadcrumb, {
      style: {
        marginBottom: 14
      },
      items: [{
        label: "Orçamentos",
        icon: "file-text"
      }, {
        label: "Novo orçamento"
      }],
      onNavigate: onBack
    }), React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "18px 22px",
        marginBottom: 18,
        boxShadow: "var(--shadow-sm)"
      }
    }, React.createElement(Stepper, {
      steps: [{
        label: "Cliente & Obra"
      }, {
        label: "Itens"
      }, {
        label: "Resumo"
      }, {
        label: "Enviar"
      }],
      current: step,
      onStepClick: setStep
    })), step === 0 && React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        maxWidth: 640
      }
    }, React.createElement(Select, {
      label: "Cliente",
      value: "c1",
      options: D.clients.map(c => ({
        value: c.id,
        label: c.name
      }))
    }), React.createElement(Select, {
      label: "Obra",
      value: "w1",
      options: D.works.map(w => ({
        value: w.id,
        label: w.name
      }))
    })), step === 1 && React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        gap: 18,
        alignItems: "start"
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
      }
    }, React.createElement(Tabs, {
      variant: "pill",
      value: tab,
      onChange: setTab,
      items: [{
        value: "servicos",
        label: "Serviços",
        count: lines.filter(l => (l.type || "servico") === "servico").length
      }, {
        value: "materiais",
        label: "Materiais",
        count: lines.filter(l => l.type === "material").length
      }]
    }), React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      icon: "plus"
    }, "Adicionar item")), React.createElement("div", {
      style: {
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--surface-card)"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        padding: "9px 14px",
        background: "var(--surface-sunken)",
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--text-muted)"
      }
    }, React.createElement("span", {
      style: {
        flex: 1,
        marginLeft: 40
      }
    }, "Descrição"), React.createElement("span", {
      style: {
        width: 62,
        textAlign: "right"
      }
    }, "Qtd"), React.createElement("span", {
      style: {
        width: 52,
        textAlign: "center"
      }
    }, "Un"), React.createElement("span", {
      style: {
        width: 96,
        textAlign: "right"
      }
    }, "P. Unit."), React.createElement("span", {
      style: {
        width: 110,
        textAlign: "right"
      }
    }, "Total"), React.createElement("span", {
      style: {
        width: 24
      }
    })), shown.map(({
      l,
      i
    }) => React.createElement(QuoteLineItem, {
      key: i,
      item: l,
      editable: true,
      onChange: v => setLine(i, v),
      onRemove: () => remove(i)
    })))), React.createElement(Card, {
      title: "Resumo"
    }, React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13
      }
    }, React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "Subtotal serviços"), React.createElement("b", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--type-service)"
      }
    }, "R$ " + money(servTotal))), React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13
      }
    }, React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, "Subtotal materiais"), React.createElement("b", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--type-material)"
      }
    }, "R$ " + money(matTotal))), React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-subtle)"
      }
    }), React.createElement(TotalPriceDisplay, {
      value: total,
      label: "Total geral",
      size: "lg",
      tone: "brand"
    }), React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      icon: "file-check",
      onClick: onGenerate
    }, "Gerar orçamento")))), step >= 2 && React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        padding: 40
      }
    }, React.createElement(Button, {
      variant: "primary",
      icon: "file-text",
      onClick: onGenerate
    }, "Visualizar orçamento gerado")));
  }
  window.NivelloBuilder = {
    QuoteBuilder
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nivello-app/builder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nivello-app/data.js
try { (() => {
/* Nivello UI kit — shared mock data (well-drilling domain) */
window.NivelloData = function () {
  const clients = [{
    id: "c1",
    name: "Kalyleste S.A",
    address: "Monday, Ruta 7 — CDE",
    cellphone: "0983-693 400",
    works: 3,
    quotes: 5
  }, {
    id: "c2",
    name: "Formighieri Agro",
    address: "Avda. Mons. Rodriguez, km 4,3",
    cellphone: "0985-221 108",
    works: 2,
    quotes: 3
  }, {
    id: "c3",
    name: "Estância Santa Rita",
    address: "Zona rural — Minga Guazú",
    cellphone: "0971-455 902",
    works: 1,
    quotes: 2
  }, {
    id: "c4",
    name: "Cond. Vista Verde",
    address: "Km 12 Acaray — CDE",
    cellphone: "0982-110 774",
    works: 4,
    quotes: 6
  }, {
    id: "c5",
    name: "Frigorífico Paraná",
    address: "Ruta 2, Caaguazú",
    cellphone: "0976-334 019",
    works: 1,
    quotes: 1
  }];
  const works = [{
    id: "w1",
    name: "Poço tubular 100m",
    clientId: "c1",
    clientName: "Kalyleste S.A",
    address: "Zona rural — CDE",
    startDate: "2026-04-13",
    deadline: "2026-07-08",
    status: "andamento",
    progress: 68
  }, {
    id: "w2",
    name: "Poço + motobomba",
    clientId: "c4",
    clientName: "Cond. Vista Verde",
    address: "Km 12 Acaray",
    startDate: "2026-03-20",
    deadline: "2026-07-04",
    status: "atrasada",
    progress: 45
  }, {
    id: "w3",
    name: "Perfuração 60m",
    clientId: "c2",
    clientName: "Formighieri Agro",
    address: "km 4,3 Monday",
    startDate: "2026-05-02",
    deadline: "2026-08-01",
    status: "planejada",
    progress: 0
  }, {
    id: "w4",
    name: "Poço artesiano 80m",
    clientId: "c3",
    clientName: "Estância Santa Rita",
    address: "Minga Guazú",
    startDate: "2026-02-10",
    deadline: "2026-05-15",
    status: "concluida",
    progress: 100
  }];
  const quotes = [{
    id: "q1",
    number: "002M",
    name: "Poço tubular 100m",
    clientName: "Kalyleste S.A",
    workName: "Poço tubular 100m",
    total: 33000000,
    status: "enviado",
    date: "13/04/2026",
    itemCount: 9
  }, {
    id: "q2",
    number: "014M",
    name: "Poço + motobomba",
    clientName: "Cond. Vista Verde",
    workName: "Poço + motobomba",
    total: 41500000,
    status: "aprovado",
    date: "20/03/2026",
    itemCount: 12
  }, {
    id: "q3",
    number: "021M",
    name: "Perfuração 60m",
    clientName: "Formighieri Agro",
    workName: "Perfuração 60m",
    total: 18900000,
    status: "rascunho",
    date: "02/05/2026",
    itemCount: 6
  }, {
    id: "q4",
    number: "009M",
    name: "Poço 80m",
    clientName: "Estância Santa Rita",
    workName: "Poço artesiano 80m",
    total: 22400000,
    status: "aprovado",
    date: "10/02/2026",
    itemCount: 8
  }, {
    id: "q5",
    number: "025M",
    name: "Reforma de poço",
    clientName: "Frigorífico Paraná",
    workName: "—",
    total: 9800000,
    status: "expirado",
    date: "15/01/2026",
    itemCount: 4
  }];
  const quoteItems = [{
    name: "Perfuração solo sedimentário",
    description: "Diâm. 10\" de 0 a 20m",
    quantity: 20,
    unit: "m",
    unitPrice: 200000,
    type: "servico"
  }, {
    name: "Perfuração em rocha",
    description: "Diâm. 6 1/8\" de 20 a 100m",
    quantity: 80,
    unit: "m",
    unitPrice: 230000,
    type: "servico"
  }, {
    name: "Limpeza e desenvolvimento",
    description: "Com compressor de ar",
    quantity: 1,
    unit: "gl",
    unitPrice: 650000,
    type: "servico"
  }, {
    name: "Translado de máquinas",
    quantity: 1,
    unit: "gl",
    unitPrice: 650000,
    type: "servico"
  }, {
    name: "Tubo PVC 174mm",
    description: "Revestimento 0–20m",
    quantity: 20,
    unit: "m",
    unitPrice: 155000,
    type: "material"
  }, {
    name: "Selo sanitário",
    quantity: 1,
    unit: "un",
    unitPrice: 650000,
    type: "material"
  }, {
    name: "Conjunto motobomba",
    description: "Eletrobomba NF 95 3HP/380V",
    quantity: 1,
    unit: "cj",
    unitPrice: 6850000,
    type: "material"
  }];
  const nav = [{
    section: "Geral"
  }, {
    value: "dashboard",
    label: "Dashboard",
    icon: "layout-dashboard"
  }, {
    value: "clientes",
    label: "Clientes",
    icon: "users",
    badge: clients.length
  }, {
    value: "obras",
    label: "Obras",
    icon: "hard-hat",
    badge: works.filter(w => w.status === "andamento").length
  }, {
    section: "Comercial"
  }, {
    value: "produtos",
    label: "Produtos",
    icon: "package"
  }, {
    value: "orcamentos",
    label: "Orçamentos",
    icon: "file-text",
    badge: quotes.filter(q => q.status === "rascunho").length
  }];
  const user = {
    name: "João Perfuratriz",
    email: "joao@formighieri.com"
  };
  const company = {
    name: "Formighieri S.A",
    tagline: "Perfuração de poços artesianos",
    address: "Avda. Mons. Rodriguez, km 4,3 — CDE",
    phone: "(061) 578.730",
    email: "formighieri@formighieri.com",
    taxId: "80061772-0"
  };
  const money = n => Number(n || 0).toLocaleString("pt-BR");
  return {
    clients,
    works,
    quotes,
    quoteItems,
    nav,
    user,
    company,
    money
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nivello-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/nivello-app/screens.jsx
try { (() => {
/* Nivello UI kit — desktop screens. Composes window.NivelloDesignSystem_c06109. */
(function () {
  const NS = window.NivelloDesignSystem_c06109;
  const {
    MetricCard,
    Card,
    Table,
    Button,
    IconButton,
    SearchBar,
    FilterBar,
    Pagination,
    ClientCard,
    WorkCard,
    QuoteSummaryCard,
    QuoteStatusBadge,
    ProductTypeBadge,
    DeadlineIndicator,
    TotalPriceDisplay,
    Avatar,
    Badge,
    WorkTimeline,
    Breadcrumb,
    DropdownMenu,
    EmptyState,
    ProductServiceItem,
    Icon
  } = NS;
  const D = window.NivelloData;
  const money = D.money;
  const SectionTitle = ({
    title,
    sub,
    action
  }) => React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 18,
      gap: 12,
      flexWrap: "wrap"
    }
  }, React.createElement("div", null, React.createElement("h1", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "-0.015em",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), sub && React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      margin: "4px 0 0"
    }
  }, sub)), action);

  /* ---------------- Dashboard ---------------- */
  function Dashboard({
    onNav
  }) {
    const upcoming = D.works.filter(w => w.status !== "concluida").slice(0, 3);
    return React.createElement("div", null, SectionTitle({
      title: "Dashboard",
      sub: "Visão geral da operação — Formighieri S.A",
      action: React.createElement("div", {
        style: {
          display: "flex",
          gap: 10
        }
      }, React.createElement(Button, {
        variant: "secondary",
        icon: "user-plus",
        onClick: () => onNav("clientes")
      }, "Novo cliente"), React.createElement(Button, {
        variant: "secondary",
        icon: "hard-hat",
        onClick: () => onNav("obras")
      }, "Nova obra"), React.createElement(Button, {
        variant: "primary",
        icon: "plus",
        onClick: () => onNav("orcamentos")
      }, "Novo orçamento"))
    }), React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 16,
        marginBottom: 20
      }
    }, React.createElement(MetricCard, {
      icon: "file-text",
      label: "Orçamentos",
      value: D.quotes.length,
      delta: "+12%",
      deltaDirection: "up"
    }), React.createElement(MetricCard, {
      icon: "hard-hat",
      tone: "accent",
      label: "Obras em andamento",
      value: D.works.filter(w => w.status === "andamento").length
    }), React.createElement(MetricCard, {
      icon: "users",
      tone: "info",
      label: "Clientes cadastrados",
      value: D.clients.length,
      delta: "+3",
      deltaDirection: "up"
    }), React.createElement(MetricCard, {
      icon: "wallet",
      tone: "success",
      label: "Valor total orçado",
      value: "R$ 1,2",
      unit: "mi"
    })), React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 16
      }
    }, React.createElement(Card, {
      padding: "none",
      title: "Últimos orçamentos",
      actions: React.createElement(Button, {
        variant: "link",
        size: "sm",
        onClick: () => onNav("orcamentos")
      }, "Ver todos")
    }, React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-subtle)"
      }
    }, D.quotes.slice(0, 4).map((q, i) => React.createElement("div", {
      key: q.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 18px",
        borderBottom: i < 3 ? "1px solid var(--border-subtle)" : "none"
      }
    }, React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 700,
        color: "var(--text-brand)",
        background: "var(--brand-subtle)",
        padding: "2px 7px",
        borderRadius: 6
      }
    }, q.number), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, q.clientName), React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, q.date + " · " + q.itemCount + " itens")), React.createElement(QuoteStatusBadge, {
      status: q.status,
      size: "sm"
    }), React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontVariantNumeric: "tabular-nums",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-strong)",
        width: 120,
        textAlign: "right"
      }
    }, "R$ " + money(q.total)))))), React.createElement(Card, {
      title: "Próximos prazos"
    }, React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, upcoming.map(w => React.createElement("div", {
      key: w.id,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-strong)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, w.name), React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, w.clientName)), React.createElement(DeadlineIndicator, {
      date: w.deadline,
      size: "sm"
    })))))));
  }

  /* ---------------- Clientes ---------------- */
  function Clientes({
    onOpenClient
  }) {
    const [q, setQ] = React.useState("");
    const list = D.clients.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
    return React.createElement("div", null, SectionTitle({
      title: "Clientes",
      sub: D.clients.length + " clientes cadastrados",
      action: React.createElement(Button, {
        variant: "primary",
        icon: "user-plus"
      }, "Novo cliente")
    }), React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginBottom: 16,
        alignItems: "center"
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 320,
        flex: 1
      }
    }, React.createElement(SearchBar, {
      value: q,
      onChange: e => setQ(e.target.value),
      onClear: () => setQ(""),
      placeholder: "Buscar cliente…"
    })), React.createElement(FilterBar, {
      filters: [{
        value: "ativo",
        label: "Ativos",
        active: true
      }, {
        value: "recent",
        label: "Recentes"
      }]
    })), React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 16
      }
    }, list.map(c => React.createElement(ClientCard, {
      key: c.id,
      client: c,
      worksCount: c.works,
      quotesCount: c.quotes,
      onClick: () => onOpenClient(c),
      actions: React.createElement(DropdownMenu, {
        align: "right",
        trigger: React.createElement(IconButton, {
          icon: "more-vertical",
          variant: "ghost",
          label: "Ações"
        }),
        items: [{
          label: "Ver detalhes",
          icon: "eye"
        }, {
          label: "Editar",
          icon: "pencil"
        }, {
          divider: true
        }, {
          label: "Excluir",
          icon: "trash-2",
          danger: true
        }]
      })
    }))));
  }

  /* ---------------- Obras ---------------- */
  function Obras() {
    const groups = [{
      key: "andamento",
      label: "Em andamento"
    }, {
      key: "atrasada",
      label: "Atrasadas"
    }, {
      key: "planejada",
      label: "Planejadas"
    }, {
      key: "concluida",
      label: "Concluídas"
    }];
    return React.createElement("div", null, SectionTitle({
      title: "Obras",
      sub: "Acompanhe o andamento das perfurações",
      action: React.createElement(Button, {
        variant: "primary",
        icon: "plus"
      }, "Nova obra")
    }), groups.map(g => {
      const items = D.works.filter(w => w.status === g.key);
      if (!items.length) return null;
      return React.createElement("div", {
        key: g.key,
        style: {
          marginBottom: 22
        }
      }, React.createElement("div", {
        className: "nv-label",
        style: {
          fontSize: 12,
          color: "var(--text-muted)",
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, g.label, React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          background: "var(--neutral-100)",
          padding: "1px 7px",
          borderRadius: 999,
          fontSize: 11
        }
      }, items.length)), React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 16
        }
      }, items.map(w => React.createElement(WorkCard, {
        key: w.id,
        work: w,
        clientName: w.clientName,
        status: w.status,
        progress: w.progress,
        onClick: () => {}
      }))));
    }));
  }

  /* ---------------- Orçamentos (list) ---------------- */
  function Orcamentos({
    onOpenQuote
  }) {
    const [page, setPage] = React.useState(1);
    return React.createElement("div", null, SectionTitle({
      title: "Orçamentos",
      sub: "Gerencie propostas técnicas",
      action: React.createElement(Button, {
        variant: "primary",
        icon: "plus"
      }, "Novo orçamento")
    }), React.createElement(FilterBar, {
      style: {
        marginBottom: 16
      },
      resultCount: D.quotes.length,
      filters: [{
        value: "rascunho",
        label: "Rascunho"
      }, {
        value: "enviado",
        label: "Enviados",
        active: true
      }, {
        value: "aprovado",
        label: "Aprovados"
      }]
    }), React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: 16
      }
    }, D.quotes.map(q => React.createElement(QuoteSummaryCard, {
      key: q.id,
      quote: q,
      onClick: () => onOpenQuote(q)
    }))), React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20
      }
    }, React.createElement(Pagination, {
      page: page,
      totalPages: 3,
      onChange: setPage
    })));
  }

  /* ---------------- Client detail ---------------- */
  function ClientDetail({
    client,
    onBack
  }) {
    const works = D.works.filter(w => w.clientName === client.name);
    const quotes = D.quotes.filter(q => q.clientName === client.name);
    return React.createElement("div", null, React.createElement(Breadcrumb, {
      style: {
        marginBottom: 14
      },
      items: [{
        label: "Clientes",
        icon: "users"
      }, {
        label: client.name
      }],
      onNavigate: onBack
    }), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 22
      }
    }, React.createElement(Avatar, {
      name: client.name,
      size: "xl",
      square: true
    }), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("h1", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        color: "var(--text-strong)",
        margin: 0
      }
    }, client.name), React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 6,
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, React.createElement(Icon, {
      name: "map-pin",
      style: {
        width: 14,
        height: 14
      }
    }), client.address), React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, React.createElement(Icon, {
      name: "phone",
      style: {
        width: 14,
        height: 14
      }
    }), client.cellphone))), React.createElement(Button, {
      variant: "secondary",
      icon: "pencil"
    }, "Editar")), React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, React.createElement(Card, {
      title: "Obras (" + works.length + ")"
    }, React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, works.length ? works.map(w => React.createElement(WorkCard, {
      key: w.id,
      work: w,
      status: w.status,
      progress: w.progress
    })) : React.createElement(EmptyState, {
      compact: true,
      icon: "hard-hat",
      title: "Sem obras"
    }))), React.createElement(Card, {
      title: "Orçamentos (" + quotes.length + ")"
    }, React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, quotes.length ? quotes.map(q => React.createElement(QuoteSummaryCard, {
      key: q.id,
      quote: q
    })) : React.createElement(EmptyState, {
      compact: true,
      icon: "file-text",
      title: "Sem orçamentos"
    })))));
  }

  /* ---------------- Produtos (catálogo) ---------------- */
  function Produtos() {
    const [tab, setTab] = React.useState("todos");
    const T = NS.Tabs;
    const catalog = [{
      name: "Perfuração solo sedimentário",
      description: "Diâm. 10\"",
      unit: "m",
      total: 200000,
      type: "servico"
    }, {
      name: "Perfuração em rocha",
      description: "Diâm. 6 1/8\"",
      unit: "m",
      total: 230000,
      type: "servico"
    }, {
      name: "Limpeza e desenvolvimento",
      description: "Compressor de ar",
      unit: "gl",
      total: 650000,
      type: "servico"
    }, {
      name: "Translado de máquinas",
      description: "Ida e volta",
      unit: "gl",
      total: 650000,
      type: "servico"
    }, {
      name: "Selo sanitário",
      description: "Proteção do poço",
      unit: "un",
      total: 650000,
      type: "material"
    }, {
      name: "Tubo PVC 174mm",
      description: "Revestimento / camisa",
      unit: "m",
      total: 155000,
      type: "material"
    }, {
      name: "Filtro geomecânico",
      description: "Seção filtrante",
      unit: "m",
      total: 180000,
      type: "material"
    }, {
      name: "Conjunto motobomba",
      description: "Eletrobomba submersível 3HP",
      unit: "cj",
      total: 6850000,
      type: "material"
    }];
    const list = catalog.filter(p => tab === "todos" || p.type === tab);
    return React.createElement("div", null, SectionTitle({
      title: "Produtos, serviços e materiais",
      sub: "Catálogo reutilizável nos orçamentos",
      action: React.createElement(Button, {
        variant: "primary",
        icon: "plus"
      }, "Novo item")
    }), React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, React.createElement(T, {
      variant: "pill",
      value: tab,
      onChange: setTab,
      items: [{
        value: "todos",
        label: "Todos",
        count: catalog.length
      }, {
        value: "servico",
        label: "Serviços",
        icon: "wrench",
        count: catalog.filter(c => c.type === "servico").length
      }, {
        value: "material",
        label: "Materiais",
        icon: "package",
        count: catalog.filter(c => c.type === "material").length
      }]
    })), React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, list.map((p, i) => React.createElement(ProductServiceItem, {
      key: i,
      product: p,
      action: React.createElement(IconButton, {
        icon: "plus",
        variant: "outline",
        label: "Adicionar"
      })
    }))));
  }
  window.NivelloScreens = {
    Dashboard,
    Clientes,
    Obras,
    Orcamentos,
    ClientDetail,
    Produtos
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nivello-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.MobileListItem = __ds_scope.MobileListItem;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.ClientCard = __ds_scope.ClientCard;

__ds_ns.CreateFAB = __ds_scope.CreateFAB;

__ds_ns.DeadlineIndicator = __ds_scope.DeadlineIndicator;

__ds_ns.MobileQuoteBuilder = __ds_scope.MobileQuoteBuilder;

__ds_ns.PaymentConditionBlock = __ds_scope.PaymentConditionBlock;

__ds_ns.PrintableQuoteHeader = __ds_scope.PrintableQuoteHeader;

__ds_ns.ProductServiceItem = __ds_scope.ProductServiceItem;

__ds_ns.ProductTypeBadge = __ds_scope.ProductTypeBadge;

__ds_ns.QuoteLineItem = __ds_scope.QuoteLineItem;

__ds_ns.QuotePreview = __ds_scope.QuotePreview;

__ds_ns.QuoteStatusBadge = __ds_scope.QuoteStatusBadge;

__ds_ns.QuoteSummaryCard = __ds_scope.QuoteSummaryCard;

__ds_ns.TotalPriceDisplay = __ds_scope.TotalPriceDisplay;

__ds_ns.WorkCard = __ds_scope.WorkCard;

__ds_ns.WorkTimeline = __ds_scope.WorkTimeline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Icon = __ds_scope.Icon;

})();
