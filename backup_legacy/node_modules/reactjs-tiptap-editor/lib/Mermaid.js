import { h as $, m as X } from "./index-DI9T3iLd.js";
import { w as Z, x as J, A as K, y as Y, z as Q, F as tt, B as et, G as rt, J as V, K as it, N as at } from "./RichTextEditor-KP2Rgcqe.js";
import { N as st, R as nt } from "./dom-dataset-Di3tIRrR.js";
import { jsxs as H, jsx as o } from "react/jsx-runtime";
import { useState as m, useRef as ot, useCallback as y, useEffect as R, useMemo as F } from "react";
import { s as lt, i as ct } from "./shortId-WJVkrvml.js";
import { T as dt } from "./textarea-CktfkXNe.js";
import { I as q, i as ht, j as W } from "./index-CsK90iVd.js";
const j = `graph TB
a-->b`, ut = ({ editor: e, upload: t, tooltipOptions: a }) => {
  const [r, g] = m(j), [_, L] = m(""), [p, I] = m(!1), v = ot(null), [n, S] = m(null), z = y(
    (l) => {
      l && import("mermaid").then((f) => {
        S(f.default);
      });
    },
    []
  ), A = async (l) => {
    try {
      const { svg: f } = await n.render("mermaid-svg", l);
      L(f);
    } catch {
      L("");
    }
  }, B = () => {
    n.initialize({
      darkMode: !1,
      startOnLoad: !1,
      // fontFamily:'',
      fontSize: 12,
      theme: "base"
    }), A(r);
  };
  return R(() => {
    n && p && B();
  }, [n, p]), R(() => {
    n && p && A(r);
  }, [n && r]), /* @__PURE__ */ H(
    Z,
    {
      onOpenChange: I,
      open: p,
      children: [
        /* @__PURE__ */ o(J, { asChild: !0, children: /* @__PURE__ */ o(
          K,
          {
            action: () => I(!0),
            icon: "Mermaid",
            tooltip: "Mermaid",
            tooltipOptions: a
          }
        ) }),
        /* @__PURE__ */ H(Y, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ o(Q, { children: "Mermaid" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: z,
              style: { height: "100%", border: "1px solid hsl(var(--border))" },
              children: /* @__PURE__ */ H("div", { className: "richtext-flex richtext-gap-[10px] richtext-rounded-[10px] richtext-p-[10px]", children: [
                /* @__PURE__ */ o(
                  dt,
                  {
                    autoFocus: !0,
                    className: "richtext-flex-1",
                    defaultValue: j,
                    onChange: (l) => g(l.target.value),
                    placeholder: "Text",
                    required: !0,
                    rows: 10,
                    value: r,
                    style: {
                      color: "hsl(var(--richtext-foreground))"
                    }
                  }
                ),
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: "richtext-flex richtext-flex-1 richtext-items-center richtext-justify-center richtext-rounded-[10px] richtext-p-[10px]",
                    dangerouslySetInnerHTML: { __html: _ },
                    ref: v,
                    style: { height: "100%", borderWidth: 1, minHeight: 500, background: "#fff" }
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ o(tt, { children: /* @__PURE__ */ o(
            et,
            {
              onClick: async () => {
                if (r !== "") {
                  if (r) {
                    const l = v.current.querySelector("svg"), { width: f, height: N } = l.getBoundingClientRect(), O = `mermaid-${lt()}.svg`;
                    let x = ct(l.outerHTML);
                    if (t) {
                      console.log({
                        src: x
                      });
                      const T = rt(x, O);
                      x = await t(T);
                    }
                    e == null || e.chain().focus().setMermaid(
                      {
                        type: "mermaid",
                        src: x,
                        alt: encodeURIComponent(r),
                        width: f,
                        height: N
                      },
                      !!r
                    ).run();
                  }
                  I(!1);
                }
              },
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, E = {
  TOP_LEFT: "tl",
  TOP_RIGHT: "tr",
  BOTTOM_LEFT: "bl",
  BOTTOM_RIGHT: "br"
};
function mt({ editor: e, node: t, updateAttributes: a, getPos: r, selected: g }) {
  const [_, L] = m({
    width: q,
    height: q
  }), [p, I] = m({
    width: 0,
    height: 0
  }), [v] = m([
    E.TOP_LEFT,
    E.TOP_RIGHT,
    E.BOTTOM_LEFT,
    E.BOTTOM_RIGHT
  ]), [n, S] = m(!1), [z, A] = m({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    dir: ""
  }), { align: B } = t == null ? void 0 : t.attrs, b = F(() => {
    const { src: i, alt: d, width: h, height: w } = t == null ? void 0 : t.attrs, M = $(h) ? `${h}px` : h, s = $(w) ? `${w}px` : w;
    return {
      src: i || void 0,
      alt: d || void 0,
      style: {
        width: M || void 0,
        height: s || void 0
      }
    };
  }, [t == null ? void 0 : t.attrs]), l = F(() => {
    const {
      style: { width: i }
    } = b;
    return { width: i === "100%" ? i : void 0 };
  }, [b]);
  function f(i) {
    I({
      width: i.target.width,
      height: i.target.height
    });
  }
  function N() {
    e.commands.setNodeSelection(r());
  }
  const O = y(
    V(() => {
      const { width: i } = getComputedStyle(e.view.dom);
      L((d) => ({
        ...d,
        width: Number.parseInt(i, 10)
      }));
    }, W),
    [e]
  );
  function x(i, d) {
    i.preventDefault(), i.stopPropagation();
    const h = p.width, w = p.height, M = h / w;
    let s = Number(t.attrs.width), u = Number(t.attrs.height);
    const c = _.width;
    s && !u ? (s = s > c ? c : s, u = Math.round(s / M)) : u && !s ? (s = Math.round(u * M), s = s > c ? c : s) : !s && !u ? (s = h > c ? c : h, u = Math.round(s / M)) : s = s > c ? c : s, S(!0), A({
      x: i.clientX,
      y: i.clientY,
      w: s,
      h: u,
      dir: d
    });
  }
  const T = y(
    V((i) => {
      if (i.preventDefault(), i.stopPropagation(), !n)
        return;
      const { x: d, w: h, dir: w } = z, M = (i.clientX - d) * (/l/.test(w) ? -1 : 1), { width: s, height: u } = t == null ? void 0 : t.attrs, c = s / u, P = it(h + M, ht, _.width), U = Math.round(P / c);
      a({
        width: P,
        height: U
      });
    }, W),
    [n, z, _, a, t == null ? void 0 : t.attrs]
  ), C = y(
    (i) => {
      i.preventDefault(), i.stopPropagation(), n && (A({
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }), S(!1), N());
    },
    [n, N]
  ), G = y(() => {
    document == null || document.addEventListener("mousemove", T, !0), document == null || document.addEventListener("mouseup", C, !0);
  }, [T, C]), D = y(() => {
    document == null || document.removeEventListener("mousemove", T, !0), document == null || document.removeEventListener("mouseup", C, !0);
  }, [T, C]);
  R(() => (n ? G() : D(), () => {
    D();
  }), [n, G, D]);
  const k = F(() => new ResizeObserver(() => O()), [O]);
  return R(() => (k.observe(e.view.dom), () => {
    k.disconnect();
  }), [e.view.dom, k]), /* @__PURE__ */ o(
    st,
    {
      className: "image-view",
      style: { ...l, width: "100%", textAlign: B },
      children: /* @__PURE__ */ H(
        "div",
        {
          "data-drag-handle": !0,
          draggable: "true",
          style: { ...l, background: "#fff" },
          className: `image-view__body ${g ? "image-view__body--focused" : ""} ${n ? "image-view__body--resizing" : ""}`,
          children: [
            /* @__PURE__ */ o(
              "img",
              {
                alt: b.alt,
                className: "image-view__body__image block",
                height: "auto",
                onClick: N,
                onLoad: f,
                src: b.src,
                style: b.style
              }
            ),
            e.view.editable && (g || n) && /* @__PURE__ */ o("div", { className: "image-resizer", children: v == null ? void 0 : v.map((i) => /* @__PURE__ */ o(
              "span",
              {
                className: `image-resizer__handler image-resizer__handler--${i}`,
                onMouseDown: (d) => x(d, i)
              },
              `image-dir-${i}`
            )) })
          ]
        }
      )
    }
  );
}
const Tt = /* @__PURE__ */ at.extend({
  name: "mermaid",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      inline: !1,
      content: "",
      marks: "",
      group: "block",
      draggable: !1,
      selectable: !0,
      atom: !0,
      HTMLAttributes: {
        class: "mermaid"
      },
      button: ({ editor: t, t: a, extension: r }) => {
        var g;
        return {
          component: ut,
          componentProps: {
            action: () => !0,
            isActive: () => !1,
            disabled: !1,
            editor: t,
            icon: "Mermaid",
            tooltip: a("editor.mermaid.tooltip"),
            upload: (g = r == null ? void 0 : r.options) == null ? void 0 : g.upload
          }
        };
      }
    };
  },
  addAttributes() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      width: {
        default: null,
        parseHTML: (t) => {
          const a = t.querySelector("img"), r = a == null ? void 0 : a.getAttribute("width");
          return r ? Number.parseInt(r, 10) : 320;
        },
        renderHTML: (t) => ({
          width: t.width
        })
      },
      height: {
        default: null,
        parseHTML: (t) => {
          const a = t.querySelector("img"), r = a == null ? void 0 : a.getAttribute("height");
          return r ? Number.parseInt(r, 10) : 212;
        },
        renderHTML: (t) => ({
          height: t.height
        })
      },
      align: {
        default: "center",
        parseHTML: (t) => t.getAttribute("align"),
        renderHTML: (t) => ({
          align: t.align
        })
      }
    };
  },
  addNodeView() {
    return nt(mt);
  },
  // @ts-ignore
  addCommands() {
    return {
      setMermaid: (e, t) => ({ commands: a, editor: r }) => t ? a.insertContent({
        type: this.name,
        attrs: e
      }) : a.insertContentAt(r.state.selection.anchor, {
        type: this.name,
        attrs: e
      }),
      setAlignImageMermaid: (e) => ({ commands: t }) => t.updateAttributes(this.name, { align: e })
    };
  },
  renderHTML({ HTMLAttributes: e }) {
    const { align: t } = e;
    return [
      "div",
      // Parent element
      {
        style: t ? `text-align: ${t};` : "",
        class: "imageMermaid"
      },
      [
        "img",
        X(
          // @ts-ignore
          this.options.HTMLAttributes,
          e
        )
      ]
    ];
  },
  parseHTML() {
    return [
      {
        tag: "div[class=imageMermaid]",
        getAttrs: (e) => {
          const t = e.querySelector("img"), a = t == null ? void 0 : t.getAttribute("width"), r = t == null ? void 0 : t.getAttribute("height");
          return {
            src: t == null ? void 0 : t.getAttribute("src"),
            alt: t == null ? void 0 : t.getAttribute("alt"),
            width: a ? Number.parseInt(a, 10) : null,
            height: r ? Number.parseInt(r, 10) : null,
            align: (t == null ? void 0 : t.getAttribute("align")) || e.style.textAlign || null
          };
        }
      }
    ];
  }
});
export {
  Tt as Mermaid
};
