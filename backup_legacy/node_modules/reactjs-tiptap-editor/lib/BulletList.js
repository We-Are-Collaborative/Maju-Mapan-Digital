import { N as p, w as s, m as u } from "./index-DI9T3iLd.js";
import { A as l } from "./RichTextEditor-KP2Rgcqe.js";
const a = "listItem", i = "textStyle", o = /^\s*([-+*])\s$/, m = p.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", u(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(a, this.editor.getAttributes(i)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = s({
      find: o,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = s({
      find: o,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(i),
      editor: this.editor
    })), [
      t
    ];
  }
}), c = /* @__PURE__ */ m.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: r, extension: n }) => ({
        component: l,
        componentProps: {
          action: () => e.commands.toggleBulletList(),
          isActive: () => e.isActive("bulletList") || !1,
          disabled: !1,
          shortcutKeys: n.options.shortcutKeys ?? ["shift", "mod", "8"],
          icon: "List",
          tooltip: r("editor.bulletlist.tooltip")
        }
      })
    };
  }
});
export {
  c as BulletList
};
