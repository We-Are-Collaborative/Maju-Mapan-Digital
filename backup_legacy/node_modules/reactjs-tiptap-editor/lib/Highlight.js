import { M as s, c as n, d as a, m as u } from "./index-DI9T3iLd.js";
import { H as l } from "./RichTextEditor-KP2Rgcqe.js";
const h = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, g = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, d = s.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", u(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: r }) => r.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: r }) => r.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      a({
        find: h,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      n({
        find: g,
        type: this.type
      })
    ];
  }
}), m = /* @__PURE__ */ d.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      multicolor: !0,
      button: ({ editor: r, t: i, extension: o }) => ({
        component: l,
        componentProps: {
          action: (e) => {
            typeof e == "string" && r.chain().focus().setHighlight({ color: e }).run(), e === void 0 && r.chain().focus().unsetHighlight().run();
          },
          editor: r,
          isActive: () => r.isActive("highlight") || !1,
          disabled: !1,
          shortcutKeys: o.options.shortcutKeys ?? ["⇧", "mod", "H"],
          tooltip: i("editor.highlight.tooltip"),
          defaultColor: o.options.defaultColor
        }
      })
    };
  }
});
export {
  m as Highlight
};
