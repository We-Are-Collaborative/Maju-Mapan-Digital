import { E as m } from "./index-DI9T3iLd.js";
import { S as f, a as b } from "./index-LUL9mqY4.js";
import { jsxs as h, jsx as s } from "react/jsx-runtime";
import { useMemo as x } from "react";
import { D as g, e as M, A as y, M as S, f as k, h as A, k as w, g as v } from "./RichTextEditor-KP2Rgcqe.js";
function K(t) {
  var c;
  const e = x(() => {
    var o;
    const i = (o = t == null ? void 0 : t.items) == null ? void 0 : o.find((a) => a.isActive());
    return i && !i.default ? {
      ...i,
      icon: i != null && i.icon ? i == null ? void 0 : i.icon : t == null ? void 0 : t.icon
    } : {
      title: t.tooltip,
      icon: t.icon,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ h(g, { children: [
    /* @__PURE__ */ s(
      M,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ s(
          y,
          {
            customClass: "!richtext-w-12 richtext-h-12",
            disabled: t == null ? void 0 : t.disabled,
            icon: t == null ? void 0 : t.icon,
            tooltip: t == null ? void 0 : t.tooltip,
            children: /* @__PURE__ */ s(S, { className: "richtext-size-3 richtext-text-gray-500" })
          }
        )
      }
    ),
    /* @__PURE__ */ s(k, { className: "w-full", children: (c = t == null ? void 0 : t.items) == null ? void 0 : c.map((i, n) => /* @__PURE__ */ h(
      A,
      {
        checked: e.title === i.title,
        className: "richtext-flex richtext-items-center richtext-gap-3",
        onClick: i.action,
        children: [
          /* @__PURE__ */ s(w, { name: i == null ? void 0 : i.icon }),
          /* @__PURE__ */ s("span", { className: "richtext-ml-1", children: i.title }),
          !!(i != null && i.shortcutKeys) && /* @__PURE__ */ s("span", { className: "richtext-ml-auto richtext-text-xs richtext-tracking-widest richtext-opacity-60", children: v(i.shortcutKeys) })
        ]
      },
      `more-mark-${n}`
    )) })
  ] });
}
const j = /* @__PURE__ */ m.create({
  name: "moreMark",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button({ editor: e, extension: c, t: i }) {
        var u, l;
        const n = c.options.subscript, o = c.options.superscript, a = {
          action: () => e.commands.toggleSubscript(),
          isActive: () => e.isActive("subscript") || !1,
          disabled: !e.can().toggleSubscript(),
          icon: "Subscript",
          title: i("editor.subscript.tooltip"),
          shortcutKeys: ((u = c.options.shortcutKeys) == null ? void 0 : u[0]) ?? ["mod", "."]
        }, d = {
          action: () => e.commands.toggleSuperscript(),
          isActive: () => e.isActive("superscript") || !1,
          disabled: !e.can().toggleSuperscript(),
          icon: "Superscript",
          title: i("editor.superscript.tooltip"),
          shortcutKeys: ((l = c.options.shortcutKeys) == null ? void 0 : l[1]) ?? ["mod", ","]
        }, r = [];
        return n !== !1 && r.push(a), o !== !1 && r.push(d), {
          component: K,
          componentProps: {
            icon: "Type",
            tooltip: i("editor.moremark"),
            disabled: !e.isEditable,
            items: r
          }
        };
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(f.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(b.configure(this.options.superscript)), t;
  }
});
export {
  j as MoreMark
};
