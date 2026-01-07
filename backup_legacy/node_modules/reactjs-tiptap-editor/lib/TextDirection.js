import { E as b } from "./index-DI9T3iLd.js";
import { jsxs as h, jsx as n } from "react/jsx-runtime";
import { useMemo as g } from "react";
import { P as D, m as v, A as y, k as T, n as A, T as C, a as w, r as M, b as P, s as z } from "./RichTextEditor-KP2Rgcqe.js";
function L(t) {
  var r;
  const i = g(() => {
    var c;
    const e = (c = t == null ? void 0 : t.items) == null ? void 0 : c.find((o) => o.isActive());
    return e && !e.default ? {
      ...e,
      icon: e.icon ? e.icon : t.icon
    } : {
      title: t == null ? void 0 : t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ h(D, { modal: !0, children: [
    /* @__PURE__ */ n(
      v,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ n(
          y,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            tooltipOptions: t == null ? void 0 : t.tooltipOptions,
            children: /* @__PURE__ */ n(
              T,
              {
                className: "richtext-ml-1 richtext-size-3 richtext-text-zinc-500",
                name: "MenuDown"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ n(
      A,
      {
        align: "start",
        className: "richtext-flex richtext-w-full richtext-min-w-4 richtext-flex-row richtext-gap-1 !richtext-p-[4px]",
        side: "bottom",
        children: (r = t == null ? void 0 : t.items) == null ? void 0 : r.map((e, s) => {
          var c, o;
          return /* @__PURE__ */ h(C, { children: [
            /* @__PURE__ */ n(w, { asChild: !0, children: /* @__PURE__ */ n(
              M,
              {
                className: "richtext-size-7 richtext-p-1",
                "data-state": i.title === e.title ? "on" : "off",
                onClick: e == null ? void 0 : e.action,
                pressed: i.title === e.title,
                size: "sm",
                children: (e == null ? void 0 : e.icon) && /* @__PURE__ */ n(T, { name: e.icon })
              }
            ) }),
            /* @__PURE__ */ h(P, { className: "richtext-flex richtext-flex-col richtext-items-center", children: [
              /* @__PURE__ */ n("span", { children: e.title }),
              !!((c = e.shortcutKeys) != null && c.length) && /* @__PURE__ */ n("span", { children: (o = e.shortcutKeys) == null ? void 0 : o.map((u) => z(u)).join(" ") })
            ] })
          ] }, `text-align-${s}`);
        })
      }
    )
  ] });
}
const B = /* @__PURE__ */ b.create({
  name: "text-direction",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["heading", "paragraph"],
      directions: ["auto", "ltr", "rtl"],
      defaultDirection: "auto",
      button({
        editor: i,
        extension: r,
        t: e
      }) {
        var x;
        const s = ((x = r.options) == null ? void 0 : x.directions) || [], c = {
          auto: "TextDirection",
          ltr: "LeftToRight",
          rtl: "RightToLeft"
        }, o = s.map((a) => ({
          title: e(`editor.textDirection.${a}.tooltip`),
          icon: c[a],
          isActive: () => !1,
          action: () => {
            var l, f, d, m;
            if (a === "auto") {
              (f = (l = i.commands) == null ? void 0 : l.unsetTextDirection) == null || f.call(l);
              return;
            }
            (m = (d = i.commands) == null ? void 0 : d.setTextDirection) == null || m.call(d, a);
          },
          disabled: !1
        })), u = o.filter((a) => a.disabled).length === o.length;
        return {
          component: L,
          componentProps: {
            icon: "TextDirection",
            tooltip: e("editor.textDirection.tooltip"),
            disabled: u,
            items: o
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
          dir: {
            default: this.options.defaultDirection,
            parseHTML: (t) => t.attributes.dir && this.options.directions.includes(t.attributes.dir) ? t.attributes.dir.value : this.options.defaultDirection,
            renderHTML: (t) => ({ dir: t.dir })
          }
        }
      }
    ];
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTextDirection: (t) => ({ commands: i }) => this.options.directions.includes(t) ? this.options.types.every((r) => i.updateAttributes(r, { dir: t })) : !1,
      unsetTextDirection: () => ({ commands: t }) => this.options.types.every((i) => t.resetAttributes(i, "dir"))
    };
  }
});
export {
  B as TextDirection
};
