import { N as b, m as v } from "./index-DI9T3iLd.js";
import { N as C, c as g, R as N } from "./dom-dataset-Di3tIRrR.js";
import { jsx as l, jsxs as T } from "react/jsx-runtime";
import { useState as p, useCallback as m, useEffect as d } from "react";
import { u as O } from "./index-CsK90iVd.js";
import { Z as _, A as y } from "./RichTextEditor-KP2Rgcqe.js";
const x = "_toc_aag8a_1", A = "_visible_aag8a_7", w = "_list_aag8a_11", E = "_item_aag8a_16", f = {
  toc: x,
  visible: A,
  list: w,
  item: E
};
function k(t) {
  const s = [], o = [s];
  return t.forEach((a) => {
    let e = -1, n = o[a.level + e];
    for (; !n; )
      e -= 1, n = o[a.level + e];
    n.push({ ...a, children: o[a.level] = [] });
  }), s;
}
function M({ editor: t }) {
  const s = _(), [o, a] = p([]), { t: e } = O(), n = m(() => {
    const i = [], r = t.state.tr;
    t.state.doc.descendants((c, h) => {
      if (c.type.name === "heading") {
        const u = `heading-${i.length + 1}`;
        c.attrs.id !== u && r.setNodeMarkup(h, void 0, {
          ...c.attrs,
          id: u
        }), i.push({
          level: c.attrs.level,
          text: c.textContent,
          id: u
        });
      }
    }), r.setMeta("addToHistory", !1), r.setMeta("preventUpdate", !0), t.view.dispatch(r), a(i), t.eventEmitter && t.eventEmitter.emit("TableOfContents", k(i));
  }, [t]);
  return d(() => {
    if (t) {
      if (!t.options.editable) {
        n();
        return;
      }
      return t.on("update", n), () => {
        t.off("update", n);
      };
    }
  }, [t, n]), d(() => {
    n();
  }, []), /* @__PURE__ */ l(C, { className: g("tableOfContent", f.toc, s && f.visible), children: s ? /* @__PURE__ */ T("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ l("p", { className: "text-[20px] richtext-mb-[8px] richtext-font-semibold", children: e("editor.table_of_content") }),
    /* @__PURE__ */ l("ul", { className: f.list, children: o.map((i, r) => /* @__PURE__ */ l(
      "li",
      {
        className: f.item,
        style: { paddingLeft: `${i.level - 1}rem` },
        children: /* @__PURE__ */ l("a", { href: `#${i.id}`, children: i.text })
      },
      `table-of-content-${r}`
    )) })
  ] }) : null });
}
function B(t, ...s) {
  const [o, a] = p(!1);
  return d(() => {
    const e = () => {
      a(t.isActive.apply(t, s));
    };
    return t.on("selectionUpdate", e), t.on("transaction", e), () => {
      t.off("selectionUpdate", e), t.off("transaction", e);
    };
  }, [t, s, a]), o;
}
function H({ editor: t, icon: s, tooltip: o, tooltipOptions: a }) {
  const e = B(t, z.name), n = m(() => {
    if (e) {
      t.chain().focus().removeTableOfContents().run();
      return;
    }
    t.chain().focus().setTableOfContents().run();
  }, [t, e]);
  return /* @__PURE__ */ l(
    y,
    {
      action: n,
      isActive: () => e || !1,
      icon: s,
      tooltip: o,
      tooltipOptions: a
    }
  );
}
function L(t) {
  return t && t.type.name === "title";
}
function S(t, s) {
  const a = [t.getJSON()], e = [];
  for (; a.length > 0; ) {
    const n = a.shift();
    n.type === s && e.push(n), n.content && n.content.length > 0 && a.push(...n.content);
  }
  return e;
}
const z = /* @__PURE__ */ b.create({
  name: "tableOfContents",
  group: "block",
  atom: !0,
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      onHasOneBeforeInsert: () => {
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: s, t: o }) => ({
        component: H,
        componentProps: {
          disabled: !1,
          icon: "BookMarked",
          tooltip: o("editor.table_of_content"),
          editor: s
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "toc"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["toc", v(t)];
  },
  addNodeView() {
    return N(M);
  },
  // @ts-expect-error
  addCommands() {
    return {
      setTableOfContents: () => ({ commands: t, editor: s, view: o }) => {
        if (S(s, this.name).length > 0) {
          this.options.onHasOneBeforeInsert();
          return;
        }
        const e = o.props.state.doc.content.firstChild;
        if (L(e)) {
          const n = (e.firstChild && e.firstChild.nodeSize || 0) + 1;
          return t.insertContentAt(n, { type: this.name });
        }
        return t.insertContent({
          type: this.name
        });
      },
      removeTableOfContents: () => ({ state: t, dispatch: s }) => {
        const { tr: o } = t, a = t.schema.nodes.tableOfContents;
        return t.doc.descendants((e, n) => {
          if (e.type === a) {
            const i = n, r = n + e.nodeSize;
            o.delete(i, r);
          }
        }), o.docChanged ? (s(o), !0) : !1;
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: ["heading"],
        attributes: {
          id: {
            default: null
          }
        }
      }
    ];
  }
});
export {
  z as TableOfContents
};
