import { N as v, q as L, m as c, a as M } from "./index-DI9T3iLd.js";
import { S as w } from "./index-CbQQFj2T.js";
import { c as h, g as f, a as H } from "./dom-dataset-Di3tIRrR.js";
import S from "tippy.js";
import { jsx as m } from "react/jsx-runtime";
import { forwardRef as A, useRef as U, useState as _, useEffect as b, useImperativeHandle as x } from "react";
import C from "scroll-into-view-if-needed";
function N({ editor: e, overrideSuggestionOptions: n, extensionName: t, char: r = "@" }) {
  const i = new M();
  return {
    editor: e,
    char: r,
    pluginKey: i,
    command: ({ editor: o, range: l, props: u }) => {
      var a, s, d;
      const p = o.view.state.selection.$to.nodeAfter;
      ((a = p == null ? void 0 : p.text) === null || a === void 0 ? void 0 : a.startsWith(" ")) && (l.to += 1), o.chain().focus().insertContentAt(l, [
        {
          type: t,
          attrs: { ...u, mentionSuggestionChar: r }
        },
        {
          type: "text",
          text: " "
        }
      ]).run(), (d = (s = o.view.dom.ownerDocument.defaultView) === null || s === void 0 ? void 0 : s.getSelection()) === null || d === void 0 || d.collapseToEnd();
    },
    allow: ({ state: o, range: l }) => {
      const u = o.doc.resolve(l.from), a = o.schema.nodes[t];
      return !!u.parent.type.contentMatch.matchType(a);
    },
    ...n
  };
}
function T(e) {
  return (e.options.suggestions.length ? e.options.suggestions : [e.options.suggestion]).map((n) => N({
    // @ts-ignore `editor` can be `undefined` when converting the document to HTML with the HTML utility
    editor: e.editor,
    overrideSuggestionOptions: n,
    extensionName: e.name,
    char: n.char
  }));
}
function y(e, n) {
  const t = T(e), r = t.find((i) => i.char === n);
  return r || (t.length ? t[0] : null);
}
const R = v.create({
  name: "mention",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      renderText({ node: e, suggestion: n }) {
        var t, r;
        return `${(t = n == null ? void 0 : n.char) !== null && t !== void 0 ? t : "@"}${(r = e.attrs.label) !== null && r !== void 0 ? r : e.attrs.id}`;
      },
      deleteTriggerWithBackspace: !1,
      renderHTML({ options: e, node: n, suggestion: t }) {
        var r, i;
        return [
          "span",
          c(this.HTMLAttributes, e.HTMLAttributes),
          `${(r = t == null ? void 0 : t.char) !== null && r !== void 0 ? r : "@"}${(i = n.attrs.label) !== null && i !== void 0 ? i : n.attrs.id}`
        ];
      },
      suggestions: [],
      suggestion: {}
    };
  },
  group: "inline",
  inline: !0,
  selectable: !1,
  atom: !0,
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (e) => e.getAttribute("data-id"),
        renderHTML: (e) => e.id ? {
          "data-id": e.id
        } : {}
      },
      label: {
        default: null,
        parseHTML: (e) => e.getAttribute("data-label"),
        renderHTML: (e) => e.label ? {
          "data-label": e.label
        } : {}
      },
      // When there are multiple types of mentions, this attribute helps distinguish them
      mentionSuggestionChar: {
        default: "@",
        parseHTML: (e) => e.getAttribute("data-mention-suggestion-char"),
        renderHTML: (e) => ({
          "data-mention-suggestion-char": e.mentionSuggestionChar
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: n }) {
    const t = y(this, e.attrs.mentionSuggestionChar);
    if (this.options.renderLabel !== void 0)
      return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), [
        "span",
        c({ "data-type": this.name }, this.options.HTMLAttributes, n),
        this.options.renderLabel({
          options: this.options,
          node: e,
          suggestion: t
        })
      ];
    const r = { ...this.options };
    r.HTMLAttributes = c({ "data-type": this.name }, this.options.HTMLAttributes, n);
    const i = this.options.renderHTML({
      options: r,
      node: e,
      suggestion: t
    });
    return typeof i == "string" ? [
      "span",
      c({ "data-type": this.name }, this.options.HTMLAttributes, n),
      i
    ] : i;
  },
  renderText({ node: e }) {
    const n = {
      options: this.options,
      node: e,
      suggestion: y(this, e.attrs.mentionSuggestionChar)
    };
    return this.options.renderLabel !== void 0 ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel(n)) : this.options.renderText(n);
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => this.editor.commands.command(({ tr: e, state: n }) => {
        let t = !1;
        const { selection: r } = n, { empty: i, anchor: o } = r;
        if (!i)
          return !1;
        n.doc.nodesBetween(o - 1, o, (a, s) => {
          if (a.type.name === this.name)
            return t = !0, e.insertText(this.options.deleteTriggerWithBackspace ? "" : this.options.suggestion.char || "", s, s + a.nodeSize), !1;
        });
        let l = new L(), u = 0;
        return n.doc.nodesBetween(o - 1, o, (a, s) => {
          if (a.type.name === this.name)
            return t = !0, l = a, u = s, !1;
        }), t && e.insertText(this.options.deleteTriggerWithBackspace ? "" : l.attrs.mentionSuggestionChar, u, u + l.nodeSize), t;
      })
    };
  },
  addProseMirrorPlugins() {
    return T(this).map(w);
  }
}), $ = "_listUsers_en3pm_1", k = "_itemUser_en3pm_10", D = "_selectedUser_en3pm_31", g = {
  listUsers: $,
  itemUser: k,
  selectedUser: D
}, E = A((e, n) => {
  const t = U(null), [r, i] = _(0), o = (s) => {
    const d = e.items[s];
    d && e.command({ id: d, label: d });
  }, l = () => {
    i((r + e.items.length - 1) % e.items.length);
  }, u = () => {
    i((r + 1) % e.items.length);
  }, a = () => {
    o(r);
  };
  return b(() => i(0), [e.items]), b(() => {
    if (Number.isNaN(r + 1))
      return;
    const s = t.current.querySelector(`span:nth-of-type(${r + 1})`);
    s && C(s, { behavior: "smooth", scrollMode: "if-needed" });
  }, [r]), x(n, () => ({
    onKeyDown: ({ event: s }) => s.key === "ArrowUp" ? (l(), !0) : s.key === "ArrowDown" ? (u(), !0) : s.key === "Enter" ? (a(), !0) : !1
  })), /* @__PURE__ */ m("div", { className: h("listUsers", g.listUsers), children: /* @__PURE__ */ m("div", { ref: t, children: e.items.length > 0 ? e.items.map((s, d) => /* @__PURE__ */ m(
    "span",
    {
      className: h("itemUser", g.itemUser, d === r ? g.selectedUser : ""),
      onClick: () => o(d),
      children: s
    },
    d
  )) : /* @__PURE__ */ m("div", { className: h("itemUserEmpty", g.itemUser), children: "Empty" }) }) });
}), B = [
  {
    id: "1",
    name: "John Doe"
  },
  {
    id: "2",
    name: "Jane Doe"
  },
  {
    id: "3",
    name: "Alice"
  },
  {
    id: "4",
    name: "Bob"
  }
], K = {
  items: async ({ query: e }) => B.map((t) => t.name).filter((t) => t.toLowerCase().startsWith(e.toLowerCase())),
  render: () => {
    let e, n;
    return {
      onStart: (t) => {
        e = new H(E, {
          props: t,
          editor: t.editor
        }), n = S("body", {
          getReferenceClientRect: t.clientRect,
          appendTo: () => document.body,
          content: e.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(t) {
        e.updateProps(t), n[0].setProps({
          getReferenceClientRect: t.clientRect
        });
      },
      onKeyDown(t) {
        var r;
        return t.event.key === "Escape" ? (n[0].hide(), !0) : (r = e.ref) == null ? void 0 : r.onKeyDown(t);
      },
      onExit() {
        n[0].destroy(), e.destroy();
      }
    };
  }
}, j = /* @__PURE__ */ R.extend({
  addAttributes() {
    return {
      id: {
        default: "",
        parseHTML: f("id")
      },
      label: {
        default: "",
        parseHTML: f("label")
      }
    };
  }
}).configure({
  HTMLAttributes: {
    class: "mention"
  },
  suggestion: K
});
export {
  j as Mention
};
