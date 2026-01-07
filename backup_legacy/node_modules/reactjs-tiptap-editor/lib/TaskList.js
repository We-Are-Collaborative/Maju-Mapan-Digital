import { N as m, w as f, m as k } from "./index-DI9T3iLd.js";
import { A as L } from "./RichTextEditor-KP2Rgcqe.js";
const y = /^\s*(\[([( |x])?\])\s$/, T = m.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const i = t.getAttribute("data-checked");
          return i === "" || i === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: i }) {
    return [
      "li",
      k(this.options.HTMLAttributes, i, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: i, getPos: o, editor: a }) => {
      const r = document.createElement("li"), c = document.createElement("label"), b = document.createElement("span"), s = document.createElement("input"), h = document.createElement("div"), p = () => {
        var e, n;
        s.ariaLabel = ((n = (e = this.options.a11y) === null || e === void 0 ? void 0 : e.checkboxLabel) === null || n === void 0 ? void 0 : n.call(e, t, s.checked)) || `Task item checkbox for ${t.textContent || "empty task item"}`;
      };
      return p(), c.contentEditable = "false", s.type = "checkbox", s.addEventListener("mousedown", (e) => e.preventDefault()), s.addEventListener("change", (e) => {
        if (!a.isEditable && !this.options.onReadOnlyChecked) {
          s.checked = !s.checked;
          return;
        }
        const { checked: n } = e.target;
        a.isEditable && typeof o == "function" && a.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: l }) => {
          const d = o();
          if (typeof d != "number")
            return !1;
          const u = l.doc.nodeAt(d);
          return l.setNodeMarkup(d, void 0, {
            ...u == null ? void 0 : u.attrs,
            checked: n
          }), !0;
        }).run(), !a.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, n) || (s.checked = !s.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([e, n]) => {
        r.setAttribute(e, n);
      }), r.dataset.checked = t.attrs.checked, s.checked = t.attrs.checked, c.append(s, b), r.append(c, h), Object.entries(i).forEach(([e, n]) => {
        r.setAttribute(e, n);
      }), {
        dom: r,
        contentDOM: h,
        update: (e) => e.type !== this.type ? !1 : (r.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, p(), !0)
      };
    };
  },
  addInputRules() {
    return [
      f({
        find: y,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), g = m.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", k(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
}), E = /* @__PURE__ */ g.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: i, t: o, extension: a }) => ({
        component: L,
        componentProps: {
          action: () => i.commands.toggleTaskList(),
          isActive: () => i.isActive("taskList") || !1,
          disabled: !1,
          icon: "ListTodo",
          shortcutKeys: a.options.shortcutKeys ?? ["shift", "mod", "9"],
          tooltip: o("editor.tasklist.tooltip")
        }
      })
    };
  },
  addExtensions() {
    return [T.configure(this.options.taskItem)];
  }
});
export {
  E as TaskList
};
