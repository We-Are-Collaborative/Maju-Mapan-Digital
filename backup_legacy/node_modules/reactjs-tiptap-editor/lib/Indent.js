import { E as p } from "./index-DI9T3iLd.js";
import { c as i, I as e, A as a } from "./RichTextEditor-KP2Rgcqe.js";
const u = /* @__PURE__ */ p.create({
  name: "indent",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["paragraph", "heading", "blockquote"],
      minIndent: e.min,
      maxIndent: e.max,
      button({ editor: n, t: o, extension: s }) {
        var r, d;
        return [
          {
            component: a,
            componentProps: {
              action: () => {
                n.commands.indent();
              },
              shortcutKeys: ((r = s.options.shortcutKeys) == null ? void 0 : r[0]) ?? ["Tab"],
              icon: "IndentIncrease",
              tooltip: o("editor.indent.tooltip")
            }
          },
          {
            component: a,
            componentProps: {
              action: () => {
                n.commands.outdent();
              },
              shortcutKeys: ((d = s.options.shortcutKeys) == null ? void 0 : d[1]) ?? ["Shift", "Tab"],
              icon: "IndentDecrease",
              tooltip: o("editor.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (t) => {
              const n = t.dataset.indent;
              return (n ? Number.parseInt(n, 10) : 0) || 0;
            },
            renderHTML: (t) => t.indent ? { "data-indent": t.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => i({
        delta: e.more,
        types: this.options.types
      }),
      outdent: () => i({
        delta: e.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
});
export {
  u as Indent
};
