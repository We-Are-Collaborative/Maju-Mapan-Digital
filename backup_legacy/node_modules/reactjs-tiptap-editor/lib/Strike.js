import { M as n, c as i, d as o, m as a } from "./index-DI9T3iLd.js";
import { A as u } from "./RichTextEditor-KP2Rgcqe.js";
const d = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, m = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, p = n.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      o({
        find: d,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      i({
        find: m,
        type: this.type
      })
    ];
  }
}), l = /* @__PURE__ */ p.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: s, extension: r }) => ({
        component: u,
        componentProps: {
          action: () => e.commands.toggleStrike(),
          isActive: () => e.isActive("strike") || !1,
          disabled: !1,
          icon: "Strikethrough",
          shortcutKeys: r.options.shortcutKeys ?? ["shift", "mod", "S"],
          tooltip: s("editor.strike.tooltip")
        }
      })
    };
  }
});
export {
  l as Strike
};
