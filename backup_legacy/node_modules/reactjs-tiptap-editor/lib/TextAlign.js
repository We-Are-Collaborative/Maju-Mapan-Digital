import { E as K } from "./index-DI9T3iLd.js";
import { jsxs as u, jsx as l } from "react/jsx-runtime";
import { useMemo as S } from "react";
import { P as C, m as j, A as w, k as v, n as P, T as z, a as L, r as N, b as O, s as $ } from "./RichTextEditor-KP2Rgcqe.js";
const E = K.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (t) => t.textAlign ? { style: `text-align: ${t.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).every((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).every((e) => e),
      toggleTextAlign: (t) => ({ editor: e, commands: n }) => this.options.alignments.includes(t) ? e.isActive({ textAlign: t }) ? n.unsetTextAlign() : n.setTextAlign(t) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});
function J(t) {
  var n;
  const e = S(() => {
    var o;
    const i = (o = t == null ? void 0 : t.items) == null ? void 0 : o.find((c) => c.isActive());
    return i && !i.default ? {
      ...i,
      icon: i.icon ? i.icon : t.icon
    } : {
      title: t == null ? void 0 : t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ u(C, { modal: !0, children: [
    /* @__PURE__ */ l(
      j,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ l(
          w,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            tooltipOptions: t == null ? void 0 : t.tooltipOptions,
            children: /* @__PURE__ */ l(
              v,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ l(
      P,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (n = t == null ? void 0 : t.items) == null ? void 0 : n.map((i, r) => {
          var o, c;
          return /* @__PURE__ */ u(z, { children: [
            /* @__PURE__ */ l(L, { asChild: !0, children: /* @__PURE__ */ l(
              N,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": e.title === i.title ? "on" : "off",
                onClick: i == null ? void 0 : i.action,
                pressed: e.title === i.title,
                size: "sm",
                children: (i == null ? void 0 : i.icon) && /* @__PURE__ */ l(v, { name: i.icon })
              }
            ) }),
            /* @__PURE__ */ u(O, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ l("span", { children: i.title }),
              !!((o = i.shortcutKeys) != null && o.length) && /* @__PURE__ */ l("span", { children: (c = i.shortcutKeys) == null ? void 0 : c.map((a) => $(a)).join(" ") })
            ] })
          ] }, `text-align-${r}`);
        })
      }
    )
  ] });
}
const G = /* @__PURE__ */ E.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["heading", "paragraph", "list_item", "title"],
      button({
        editor: e,
        extension: n,
        t: i
      }) {
        var g, x, f, m, A;
        const r = ((g = n.options) == null ? void 0 : g.alignments) || [], o = {
          left: ((x = n.options.shortcutKeys) == null ? void 0 : x[0]) ?? ["mod", "Shift", "L"],
          center: ((f = n.options.shortcutKeys) == null ? void 0 : f[1]) ?? ["mod", "Shift", "E"],
          right: ((m = n.options.shortcutKeys) == null ? void 0 : m[2]) ?? ["mod", "Shift", "R"],
          justify: ((A = n.options.shortcutKeys) == null ? void 0 : A[3]) ?? ["mod", "Shift", "J"]
        }, c = {
          left: "AlignLeft",
          center: "AlignCenter",
          right: "AlignRight",
          justify: "AlignJustify"
        }, a = r.map((s) => {
          var y, h, T;
          return {
            title: i(`editor.textalign.${s}.tooltip`),
            icon: c[s],
            shortcutKeys: o[s],
            isActive: () => e.isActive({ textAlign: s }) || !1,
            action: () => {
              var d, b;
              return (b = (d = e.commands) == null ? void 0 : d.setTextAlign) == null ? void 0 : b.call(d, s);
            },
            disabled: !((T = (h = (y = e == null ? void 0 : e.can) == null ? void 0 : y.call(e)) == null ? void 0 : h.setTextAlign) != null && T.call(h, s))
          };
        }), M = a.filter((s) => s.disabled).length === a.length;
        return {
          component: J,
          componentProps: {
            icon: "AlignJustify",
            tooltip: i("editor.textalign.tooltip"),
            disabled: M,
            items: a
          }
        };
      }
    };
  }
});
export {
  G as TextAlign
};
