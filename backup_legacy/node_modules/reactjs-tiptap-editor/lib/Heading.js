import { N as f, t as v, m as b } from "./index-DI9T3iLd.js";
import { jsxs as c, jsx as d } from "react/jsx-runtime";
import { useMemo as M, Fragment as A } from "react";
import { A as x } from "./ActionMenuButton-D97K0UWT.js";
import { D as H, e as y, f as $, h as w, v as K, s as D, u as k } from "./RichTextEditor-KP2Rgcqe.js";
const N = f.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, b(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((t, e) => ({
      ...t,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((t) => v({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
function L(t) {
  var s;
  const e = M(() => {
    var a;
    const n = (a = t == null ? void 0 : t.items) == null ? void 0 : a.find((l) => l.isActive());
    return n && !n.default ? {
      ...n
    } : {
      title: t.tooltip,
      level: 0,
      isActive: () => !1
    };
  }, [t]);
  return /* @__PURE__ */ c(H, { children: [
    /* @__PURE__ */ d(
      y,
      {
        asChild: !0,
        disabled: t == null ? void 0 : t.disabled,
        children: /* @__PURE__ */ d(
          x,
          {
            disabled: t == null ? void 0 : t.disabled,
            icon: "MenuDown",
            title: e == null ? void 0 : e.title,
            tooltip: t == null ? void 0 : t.tooltip,
            tooltipOptions: t == null ? void 0 : t.tooltipOptions
          }
        )
      }
    ),
    /* @__PURE__ */ d($, { className: "richtext-w-full", children: (s = t == null ? void 0 : t.items) == null ? void 0 : s.map((n, r) => {
      var a, l;
      return /* @__PURE__ */ c(A, { children: [
        /* @__PURE__ */ c(
          w,
          {
            checked: (e == null ? void 0 : e.title) === n.title,
            onClick: n.action,
            children: [
              /* @__PURE__ */ d("div", { className: `heading- richtext-ml-1 richtext-h-full${n.level}`, children: n.title }),
              !!((a = n == null ? void 0 : n.shortcutKeys) != null && a.length) && /* @__PURE__ */ d(K, { className: "richtext-pl-4", children: (l = n == null ? void 0 : n.shortcutKeys) == null ? void 0 : l.map((o) => D(o)).join(" ") })
            ]
          }
        ),
        n.level === 0 && /* @__PURE__ */ d(k, {})
      ] }, `heading-k-${r}`);
    }) })
  ] });
}
const j = /* @__PURE__ */ N.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      button({ editor: e, extension: s, t: n }) {
        var h, u;
        const { extensions: r = [] } = e.extensionManager ?? [], a = ((h = s.options) == null ? void 0 : h.levels) || [], l = r.find(
          (i) => i.name === "base-kit"
        ), o = a.map((i) => {
          var g;
          return {
            action: () => e.commands.toggleHeading({ level: i }),
            isActive: () => e.isActive("heading", { level: i }) || !1,
            disabled: !e.can().toggleHeading({ level: i }),
            title: n(`editor.heading.h${i}.tooltip`),
            level: i,
            shortcutKeys: ((g = s.options.shortcutKeys) == null ? void 0 : g[i]) ?? ["alt", "mod", `${i}`]
          };
        });
        l && l.options.paragraph !== !1 && o.unshift({
          action: () => e.commands.setParagraph(),
          isActive: () => e.isActive("paragraph") || !1,
          disabled: !e.can().setParagraph(),
          level: 0,
          title: n("editor.paragraph.tooltip"),
          shortcutKeys: ((u = s.options.shortcutKeys) == null ? void 0 : u[0]) ?? ["alt", "mod", "0"]
        });
        const m = o.filter((i) => i.disabled).length === o.length;
        return {
          component: L,
          componentProps: {
            tooltip: n("editor.heading.tooltip"),
            disabled: m,
            items: o,
            editor: e
          }
        };
      }
    };
  }
});
export {
  j as Heading
};
