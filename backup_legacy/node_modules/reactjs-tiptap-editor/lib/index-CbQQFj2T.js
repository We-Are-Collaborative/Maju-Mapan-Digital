import { a as U, P as L, D as z, b as G, e as H } from "./index-DI9T3iLd.js";
function J(B) {
  var a;
  const { char: _, allowSpaces: C, allowToIncludeChar: E, allowedPrefixes: v, startOfLine: M, $position: f } = B, I = C && !E, g = H(_), k = new RegExp(`\\s${g}$`), P = M ? "^" : "", R = E ? "" : g, y = I ? new RegExp(`${P}${g}.*?(?=\\s${R}|$)`, "gm") : new RegExp(`${P}(?:^)?${g}[^\\s${R}]*`, "gm"), p = ((a = f.nodeBefore) === null || a === void 0 ? void 0 : a.isText) && f.nodeBefore.text;
  if (!p)
    return null;
  const A = f.pos - p.length, n = Array.from(p.matchAll(y)).pop();
  if (!n || n.input === void 0 || n.index === void 0)
    return null;
  const e = n.input.slice(Math.max(0, n.index - 1), n.index), h = new RegExp(`^[${v == null ? void 0 : v.join("")}\0]?$`).test(e);
  if (v !== null && !h)
    return null;
  const o = A + n.index;
  let i = o + n[0].length;
  return I && k.test(p.slice(i - 1, i + 1)) && (n[0] += " ", i += 1), o < f.pos && i >= f.pos ? {
    range: {
      from: o,
      to: i
    },
    query: n[0].slice(_.length),
    text: n[0]
  } : null;
}
const Q = new U("suggestion");
function W({ pluginKey: B = Q, editor: a, char: _ = "@", allowSpaces: C = !1, allowToIncludeChar: E = !1, allowedPrefixes: v = [" "], startOfLine: M = !1, decorationTag: f = "span", decorationClass: I = "suggestion", decorationContent: g = "", decorationEmptyClass: k = "is-empty", command: P = () => null, items: R = () => [], render: y = () => ({}), allow: p = () => !0, findSuggestionMatch: A = J }) {
  let n;
  const e = y == null ? void 0 : y(), h = new L({
    key: B,
    view() {
      return {
        update: async (o, i) => {
          var s, r, c, u, d, S, m;
          const t = (s = this.key) === null || s === void 0 ? void 0 : s.getState(i), l = (r = this.key) === null || r === void 0 ? void 0 : r.getState(o.state), $ = t.active && l.active && t.range.from !== l.range.from, j = !t.active && l.active, F = t.active && !l.active, K = !j && !F && t.query !== l.query, w = j || $ && K, D = K || $, N = F || $ && K;
          if (!w && !D && !N)
            return;
          const x = N && !w ? t : l, O = o.dom.querySelector(`[data-decoration-id="${x.decorationId}"]`);
          n = {
            editor: a,
            range: x.range,
            query: x.query,
            text: x.text,
            items: [],
            command: (q) => P({
              editor: a,
              range: x.range,
              props: q
            }),
            decorationNode: O,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: O ? () => {
              var q;
              const { decorationId: T } = (q = this.key) === null || q === void 0 ? void 0 : q.getState(a.state), b = o.dom.querySelector(`[data-decoration-id="${T}"]`);
              return (b == null ? void 0 : b.getBoundingClientRect()) || null;
            } : null
          }, w && ((c = e == null ? void 0 : e.onBeforeStart) === null || c === void 0 || c.call(e, n)), D && ((u = e == null ? void 0 : e.onBeforeUpdate) === null || u === void 0 || u.call(e, n)), (D || w) && (n.items = await R({
            editor: a,
            query: x.query
          })), N && ((d = e == null ? void 0 : e.onExit) === null || d === void 0 || d.call(e, n)), D && ((S = e == null ? void 0 : e.onUpdate) === null || S === void 0 || S.call(e, n)), w && ((m = e == null ? void 0 : e.onStart) === null || m === void 0 || m.call(e, n));
        },
        destroy: () => {
          var o;
          n && ((o = e == null ? void 0 : e.onExit) === null || o === void 0 || o.call(e, n));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(o, i, s, r) {
        const { isEditable: c } = a, { composing: u } = a.view, { selection: d } = o, { empty: S, from: m } = d, t = { ...i };
        if (t.composing = u, c && (S || a.view.composing)) {
          (m < i.range.from || m > i.range.to) && !u && !i.composing && (t.active = !1);
          const l = A({
            char: _,
            allowSpaces: C,
            allowToIncludeChar: E,
            allowedPrefixes: v,
            startOfLine: M,
            $position: d.$from
          }), $ = `id_${Math.floor(Math.random() * 4294967295)}`;
          l && p({
            editor: a,
            state: r,
            range: l.range,
            isActive: i.active
          }) ? (t.active = !0, t.decorationId = i.decorationId ? i.decorationId : $, t.range = l.range, t.query = l.query, t.text = l.text) : t.active = !1;
        } else
          t.active = !1;
        return t.active || (t.decorationId = null, t.range = { from: 0, to: 0 }, t.query = null, t.text = null), t;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(o, i) {
        var s;
        const { active: r, range: c } = h.getState(o.state);
        return r && ((s = e == null ? void 0 : e.onKeyDown) === null || s === void 0 ? void 0 : s.call(e, { view: o, event: i, range: c })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(o) {
        const { active: i, range: s, decorationId: r, query: c } = h.getState(o);
        if (!i)
          return null;
        const u = !(c != null && c.length), d = [I];
        return u && d.push(k), z.create(o.doc, [
          G.inline(s.from, s.to, {
            nodeName: f,
            class: d.join(" "),
            "data-decoration-id": r,
            "data-decoration-content": g
          })
        ]);
      }
    }
  });
  return h;
}
export {
  W as S
};
