import { N as Z, n as k, m as z } from "./index-DI9T3iLd.js";
import { N as P, c as C, R as j, n as V, g as I } from "./dom-dataset-Di3tIRrR.js";
import { jsxs as x, jsx as r } from "react/jsx-runtime";
import { useMemo as B, useState as c, useCallback as E, useEffect as _, useRef as U } from "react";
import { w as $, x as F, A as S, y as X, z as G, F as K, B as Y, K as q } from "./RichTextEditor-KP2Rgcqe.js";
import { o as J } from "./index-CsK90iVd.js";
import { Resizable as Q } from "re-resizable";
let M;
function O() {
  try {
    return M || (M = J()), M;
  } catch {
    throw new Error("Error EventEmitter");
  }
}
const D = "OPEN_EXCALIDRAW_SETTING_MODAL";
function ee(e, i) {
  O().on(e, i);
}
function te(e, i) {
  O().off(e, i);
}
function we(e) {
  O().emit(D, e);
}
const re = ({ editor: e, tooltipOptions: i }) => {
  const u = B(() => {
    var t;
    return ((t = e.extensionManager.extensions.find(
      (a) => a.name === "excalidraw"
    )) == null ? void 0 : t.options) || {};
  }, [e]), [s, p] = c(null), [l, h] = c({}), [v, m] = c({ elements: [], appState: { isLoading: !1 }, files: null }), [w, o] = c(!1), [g, d] = c(!0), [f, N] = c(null), L = E(
    (t) => {
      t && import("@excalidraw/excalidraw").then((a) => {
        p(a.Excalidraw);
      }).catch(N).finally(() => d(!1));
    },
    [d]
  ), b = E((t) => {
    setTimeout(() => {
      t.refresh();
    });
  }, []), y = E((t, a, A) => {
    h({
      elements: t,
      appState: { isLoading: !1 },
      files: A
    });
  }, []), n = E(() => {
    if (!s) {
      o(!1);
      return;
    }
    e.chain().focus().setExcalidraw({ data: l }).run(), o(!1);
  }, [s, e, l, o]);
  return _(() => {
    const t = (a) => {
      (a == null ? void 0 : a.editor) === e && (o(!0), a && m(a.data));
    };
    return ee(D, t), () => {
      te(D, t);
    };
  }, [e, o]), _(() => {
    !g && s && w && setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 400);
  }, [g, s, w]), /* @__PURE__ */ x(
    $,
    {
      onOpenChange: o,
      open: w,
      children: [
        /* @__PURE__ */ r(F, { asChild: !0, children: /* @__PURE__ */ r(
          S,
          {
            action: () => o(!0),
            icon: "Excalidraw",
            tooltip: "Excalidraw",
            tooltipOptions: i
          }
        ) }),
        /* @__PURE__ */ x(X, { className: "richtext-z-[99999] !richtext-max-w-[1300px]", children: [
          /* @__PURE__ */ r(G, { children: "Excalidraw" }),
          /* @__PURE__ */ x("div", { style: { height: "100%", borderWidth: 1 }, children: [
            g && /* @__PURE__ */ r("p", { children: "Loading..." }),
            f && /* @__PURE__ */ r("p", { children: f && f.message || "Error" }),
            /* @__PURE__ */ r(
              "div",
              {
                ref: L,
                style: { width: "100%", height: 600 },
                children: !g && !f && s ? /* @__PURE__ */ r(
                  s,
                  {
                    initialData: v,
                    langCode: "en",
                    onChange: y,
                    ref: b,
                    ...u.excalidrawProps
                  }
                ) : null
              }
            )
          ] }),
          /* @__PURE__ */ r(K, { children: /* @__PURE__ */ r(
            Y,
            {
              onClick: n,
              type: "button",
              children: "Save changes"
            }
          ) })
        ] })
      ]
    }
  );
}, ne = "_wrap_15k3c_1", ae = "_renderWrap_15k3c_7", ie = "_handlerWrap_15k3c_30", T = {
  wrap: ne,
  renderWrap: ae,
  handlerWrap: ie
}, se = 10, oe = 200, R = 15, W = { width: "100%", height: "100%", maxWidth: "100%" };
function le({ editor: e, node: i, updateAttributes: u }) {
  const s = U(null), p = e.isActive(ce.name), { data: l, width: h, height: v } = i.attrs, [m, w] = c(null), [o, g] = c(!0), [d, f] = c(null), [N, L] = c(100), b = E((n) => () => {
    L(
      (t) => q(n === "minus" ? t - R : t + R, se, oe)
    );
  }, []);
  _(() => {
    let n = !1;
    return import("@excalidraw/excalidraw").then((t) => {
      n || (s.current = t.exportToSvg);
    }).catch((t) => !n && f(t)).finally(() => !n && g(!1)), () => {
      n = !0;
    };
  }, [l]), _(() => {
    let n = !1;
    return (async () => {
      if (!s.current || n || o || d || !l)
        return;
      const a = await s.current(l);
      n || (a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("display", "block"), w(a));
    })(), () => {
      n = !0;
    };
  }, [l, o, d]);
  const y = (n) => {
    u({ width: n.width, height: n.height });
  };
  return /* @__PURE__ */ r(P, { className: C(T.wrap, p && T.isActive), children: /* @__PURE__ */ r(
    Q,
    {
      size: { width: Number.parseInt(h), height: Number.parseInt(v) },
      onResizeStop: (n, t, a, A) => {
        y({
          width: Number.parseInt(h) + A.width,
          height: Number.parseInt(v) + A.height
        });
      },
      children: /* @__PURE__ */ x(
        "div",
        {
          className: C(T.renderWrap, "render-wrapper"),
          style: { ...W, overflow: "hidden" },
          children: [
            d && /* @__PURE__ */ r("div", { style: W, children: /* @__PURE__ */ r("p", { children: d.message || d }) }),
            o && /* @__PURE__ */ r("p", { children: "Loading..." }),
            !o && !d && m && /* @__PURE__ */ r(
              "div",
              {
                dangerouslySetInnerHTML: { __html: (m == null ? void 0 : m.outerHTML) ?? "" },
                style: {
                  height: "100%",
                  maxHeight: "100%",
                  padding: 24,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `scale(${N / 100})`,
                  transition: "all ease-in-out .3s"
                }
              }
            ),
            /* @__PURE__ */ x("div", { className: T.handlerWrap, children: [
              /* @__PURE__ */ r(
                S,
                {
                  action: b("minus"),
                  icon: "ZoomOut",
                  tooltip: "Zoom Out"
                }
              ),
              /* @__PURE__ */ r(
                S,
                {
                  action: b("plus"),
                  icon: "ZoomIn",
                  tooltip: "Zoom In"
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}
const H = { elements: [] }, ce = /* @__PURE__ */ Z.create({
  name: "excalidraw",
  group: "block",
  selectable: !0,
  atom: !0,
  draggable: !0,
  inline: !1,
  addAttributes() {
    return {
      defaultShowPicker: {
        default: !1
      },
      createUser: {
        default: null
      },
      width: {
        default: "100%",
        parseHTML: I("width")
      },
      height: {
        default: 240,
        parseHTML: I("height")
      },
      data: {
        default: H,
        parseHTML: I("data", !0)
      }
    };
  },
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      HTMLAttributes: {
        class: "excalidraw"
      },
      excalidrawProps: {},
      button: ({ editor: i }) => ({
        component: re,
        componentProps: {
          editor: i
        }
      })
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: i }) {
    return ["div", z(this.options.HTMLAttributes, e, V(i))];
  },
  addCommands() {
    return {
      setExcalidraw: (e) => ({ tr: i, commands: u, chain: s }) => {
        var p, l, h;
        return e = e || {}, e.data = e.data || H, ((h = (l = (p = i.selection) == null ? void 0 : p.node) == null ? void 0 : l.type) == null ? void 0 : h.name) == this.name ? u.updateAttributes(this.name, e) : s().insertContent({
          type: this.name,
          attrs: e
        }).run();
      }
    };
  },
  addNodeView() {
    return j(le);
  },
  addInputRules() {
    return [
      k({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => ({ width: "100%" })
      })
    ];
  }
});
export {
  ce as E,
  we as t
};
