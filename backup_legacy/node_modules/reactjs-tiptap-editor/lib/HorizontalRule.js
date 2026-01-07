import { N as f, n as h, f as A, i as H, T as c, g as y, m as p } from "./index-DI9T3iLd.js";
import { A as T } from "./RichTextEditor-KP2Rgcqe.js";
const M = f.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: o }) {
    return ["hr", p(this.options.HTMLAttributes, o)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: o, state: n }) => {
        if (!A(n, n.schema.nodes[this.name]))
          return !1;
        const { selection: s } = n, { $from: r, $to: l } = s, i = o();
        return r.parentOffset === 0 ? i.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: l.pos
        }, {
          type: this.name
        }) : H(s) ? i.insertContentAt(l.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ tr: e, dispatch: m }) => {
          var a;
          if (m) {
            const { $to: t } = e.selection, d = t.end();
            if (t.nodeAfter)
              t.nodeAfter.isTextblock ? e.setSelection(c.create(e.doc, t.pos + 1)) : t.nodeAfter.isBlock ? e.setSelection(y.create(e.doc, t.pos)) : e.setSelection(c.create(e.doc, t.pos));
            else {
              const u = (a = t.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              u && (e.insert(d, u), e.setSelection(c.create(e.doc, d + 1)));
            }
            e.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      h({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), S = /* @__PURE__ */ M.extend({
  renderHTML() {
    return [
      "div",
      p(this.options.HTMLAttributes, {
        "data-type": this.name
      }),
      ["hr"]
    ];
  },
  addOptions() {
    var o;
    return {
      ...(o = this.parent) == null ? void 0 : o.call(this),
      button: ({ editor: n, t: s, extension: r }) => ({
        component: T,
        componentProps: {
          action: () => n.commands.setHorizontalRule(),
          disabled: !n.can().setHorizontalRule(),
          icon: "Minus",
          shortcutKeys: r.options.shortcutKeys ?? ["mod", "alt", "S"],
          tooltip: s("editor.horizontalrule.tooltip")
        }
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-s": () => this.editor.commands.setHorizontalRule()
    };
  }
});
export {
  S as HorizontalRule
};
