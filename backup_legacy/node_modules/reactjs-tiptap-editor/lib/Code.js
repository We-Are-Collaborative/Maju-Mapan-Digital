import { M as s, c as n, d, m as a } from "./index-DI9T3iLd.js";
import { A as i } from "./RichTextEditor-KP2Rgcqe.js";
const u = /(^|[^`])`([^`]+)`(?!`)/, c = /(^|[^`])`([^`]+)`(?!`)/g, p = s.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      d({
        find: u,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      n({
        find: c,
        type: this.type
      })
    ];
  }
}), l = /* @__PURE__ */ p.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: o, extension: r }) => ({
        component: i,
        componentProps: {
          action: () => e.commands.toggleCode(),
          isActive: () => e.isActive("code") || !1,
          disabled: !e.can().toggleCode(),
          icon: "Code",
          shortcutKeys: r.options.shortcutKeys ?? ["mod", "E"],
          tooltip: o("editor.code.tooltip")
        }
      })
    };
  }
});
export {
  l as Code
};
