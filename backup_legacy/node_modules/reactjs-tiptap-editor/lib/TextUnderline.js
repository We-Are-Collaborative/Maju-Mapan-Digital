import { M as o, m as s } from "./index-DI9T3iLd.js";
import { A as i } from "./RichTextEditor-KP2Rgcqe.js";
const d = o.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["u", s(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: e }) => e.setMark(this.name),
      toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), l = /* @__PURE__ */ d.extend({
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      button({ editor: t, t: n, extension: r }) {
        return {
          component: i,
          componentProps: {
            action: () => t.commands.toggleUnderline(),
            isActive: () => t.isActive("underline") || !1,
            disabled: !1,
            icon: "Underline",
            shortcutKeys: r.options.shortcutKeys ?? ["mod", "U"],
            tooltip: n("editor.underline.tooltip")
          }
        };
      }
    };
  }
});
export {
  l as TextUnderline
};
