import { M as i, c as s, d as n, m as o } from "./index-DI9T3iLd.js";
import { A as l } from "./RichTextEditor-KP2Rgcqe.js";
const c = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, d = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, u = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, m = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, p = i.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", o(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      n({
        find: c,
        type: this.type
      }),
      n({
        find: u,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      s({
        find: d,
        type: this.type
      }),
      s({
        find: m,
        type: this.type
      })
    ];
  }
}), h = /* @__PURE__ */ p.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button({ editor: e, t: r, extension: a }) {
        return {
          component: l,
          componentProps: {
            action: () => e.commands.toggleItalic(),
            isActive: () => e.isActive("italic") || !1,
            disabled: !1,
            shortcutKeys: a.options.shortcutKeys ?? ["mod", "I"],
            icon: "Italic",
            tooltip: r("editor.italic.tooltip")
          }
        };
      }
    };
  }
});
export {
  h as Italic
};
