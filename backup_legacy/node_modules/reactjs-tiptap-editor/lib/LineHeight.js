import { T as f, A as H, E as L } from "./index-DI9T3iLd.js";
import { u as x, k as g, m as T } from "./index-CsK90iVd.js";
import { jsxs as b, jsx as h } from "react/jsx-runtime";
import { useState as _, useMemo as D } from "react";
import { D as E, e as M, A as w, k as A, f as C, h as y } from "./RichTextEditor-KP2Rgcqe.js";
function k(e) {
  return Number.parseFloat(e.replace("%", "")) / 100;
}
function p(e) {
  const { t } = x(), [n, s] = _("default");
  function o(i) {
    i === "default" ? e.editor.commands.unsetLineHeight() : e.editor.commands.setLineHeight(i), s(i);
  }
  const c = D(() => {
    const a = e.editor.extensionManager.extensions.find(
      (l) => l.name === "lineHeight"
    ).options.lineHeights.map((l) => ({
      label: k(l),
      value: l
    }));
    return a.unshift({
      label: t("editor.default"),
      value: "default"
    }), a;
  }, [e]);
  return /* @__PURE__ */ b(E, { children: [
    /* @__PURE__ */ h(
      M,
      {
        asChild: !0,
        disabled: e == null ? void 0 : e.disabled,
        children: /* @__PURE__ */ h(
          w,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: e == null ? void 0 : e.disabled,
            icon: "LineHeight",
            tooltip: e == null ? void 0 : e.tooltip,
            tooltipOptions: e == null ? void 0 : e.tooltipOptions,
            children: /* @__PURE__ */ h(
              A,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ h(C, { className: "richtext-min-w-24", children: c == null ? void 0 : c.map((i, u) => /* @__PURE__ */ h(
      y,
      {
        checked: i.value === n,
        onClick: () => o(i.value),
        children: i.label
      },
      `lineHeight-${u}`
    )) })
  ] });
}
const I = ["paragraph", "heading", "list_item", "todo_item"];
function N(e, t) {
  const { selection: n, doc: s } = e;
  if (!n || !s || !(n instanceof f || n instanceof H))
    return e;
  const { from: o, to: c } = n, i = [], u = t && t !== g ? t : null;
  if (s.nodesBetween(o, c, (a, l) => {
    const r = a.type;
    return I.includes(r.name) ? ((a.attrs.lineHeight || null) !== u && i.push({
      node: a,
      pos: l,
      nodeType: r
    }), r.name !== "list_item" && r.name !== "todo_item") : !0;
  }), i.length === 0)
    return e;
  for (const a of i) {
    const { node: l, pos: r, nodeType: m } = a;
    let { attrs: d } = l;
    d = {
      ...d,
      lineHeight: u
    }, e = e.setNodeMarkup(r, m, d, l.marks);
  }
  return e;
}
function O(e) {
  return ({ state: t, dispatch: n }) => {
    const { selection: s } = t;
    let { tr: o } = t;
    return o = o.setSelection(s), o = N(o, e), o.docChanged ? (n && n(o), !0) : !1;
  };
}
const z = /* @__PURE__ */ L.create({
  name: "lineHeight",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: T,
      defaultHeight: g,
      button({ editor: t, t: n }) {
        return {
          component: p,
          componentProps: {
            editor: t,
            tooltip: n("editor.lineheight.tooltip")
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => e.style.lineHeight || this.options.defaultHeight,
            renderHTML: (e) => e.lineHeight === this.options.defaultHeight || !e.lineHeight ? {} : { style: `line-height: ${e.lineHeight}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => O(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
});
export {
  T as DEFAULT_LINE_HEIGHT_LIST,
  z as LineHeight
};
