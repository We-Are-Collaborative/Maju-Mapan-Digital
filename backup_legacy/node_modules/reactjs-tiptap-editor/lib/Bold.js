import { M as d, c as s, d as o, m as a } from "./index-DI9T3iLd.js";
import { A as i } from "./RichTextEditor-KP2Rgcqe.js";
const l = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, u = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, p = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, g = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, m = d.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", a(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      o({
        find: l,
        type: this.type
      }),
      o({
        find: p,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      s({
        find: u,
        type: this.type
      }),
      s({
        find: g,
        type: this.type
      })
    ];
  }
}), _ = /* @__PURE__ */ m.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n, extension: r }) => ({
        component: i,
        componentProps: {
          action: () => e.commands.toggleBold(),
          isActive: () => e.isActive("bold") || !1,
          disabled: !1,
          icon: "Bold",
          shortcutKeys: r.options.shortcutKeys ?? ["mod", "B"],
          tooltip: n("editor.bold.tooltip")
        }
      })
    };
  }
});
export {
  _ as Bold
};
