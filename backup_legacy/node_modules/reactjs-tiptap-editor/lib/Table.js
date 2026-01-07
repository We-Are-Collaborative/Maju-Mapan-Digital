import { a as de, v as N, u as Pe, T as E, B as Oe, F as T, S as H, P as ke, D as ne, b as oe, g as Ie, C as Fe, N as U, x as je, y as Ve, m as J, G as Ke, E as Xe } from "./index-DI9T3iLd.js";
import { jsxs as Q, jsx as k } from "react/jsx-runtime";
import { P as Ge, m as qe, n as Ue, A as Je } from "./RichTextEditor-KP2Rgcqe.js";
import { useState as ee } from "react";
import { T as O, p as I, q as F } from "./index-CsK90iVd.js";
var le, re;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  le = (e) => t.get(e), re = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  le = (o) => {
    for (let l = 0; l < t.length; l += 2)
      if (t[l] == o) return t[l + 1];
  }, re = (o, l) => (n == 10 && (n = 0), t[n++] = o, t[n++] = l);
}
var C = class {
  constructor(t, e, n, o) {
    this.width = t, this.height = e, this.map = n, this.problems = o;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const o = e % this.width, l = e / this.width | 0;
      let r = o + 1, s = l + 1;
      for (let i = 1; r < this.width && this.map[e + i] == n; i++)
        r++;
      for (let i = 1; s < this.height && this.map[e + this.width * i] == n; i++)
        s++;
      return { left: o, top: l, right: r, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, n) {
    const { left: o, right: l, top: r, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? o == 0 : l == this.width) ? null : this.map[r * this.width + (n < 0 ? o - 1 : l)] : (n < 0 ? r == 0 : s == this.height) ? null : this.map[o + this.width * (n < 0 ? r - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: o,
      top: l,
      bottom: r
    } = this.findCell(t), {
      left: s,
      right: i,
      top: c,
      bottom: a
    } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(l, c),
      right: Math.max(o, i),
      bottom: Math.max(r, a)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let o = t.top; o < t.bottom; o++)
      for (let l = t.left; l < t.right; l++) {
        const r = o * this.width + l, s = this.map[r];
        n[s] || (n[s] = !0, !(l == t.left && l && this.map[r - 1] == s || o == t.top && o && this.map[r - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let o = 0, l = 0; ; o++) {
      const r = l + n.child(o).nodeSize;
      if (o == t) {
        let s = e + t * this.width;
        const i = (t + 1) * this.width;
        for (; s < i && this.map[s] < l; ) s++;
        return s == i ? r - 1 : this.map[s];
      }
      l = r;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return le(t) || re(t, Ze(t));
  }
};
function Ze(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = Ye(t), n = t.childCount, o = [];
  let l = 0, r = null;
  const s = [];
  for (let a = 0, u = e * n; a < u; a++) o[a] = 0;
  for (let a = 0, u = 0; a < n; a++) {
    const d = t.child(a);
    u++;
    for (let p = 0; ; p++) {
      for (; l < o.length && o[l] != 0; ) l++;
      if (p == d.childCount) break;
      const m = d.child(p), { colspan: g, rowspan: w, colwidth: A } = m.attrs;
      for (let M = 0; M < w; M++) {
        if (M + a >= n) {
          (r || (r = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: w - M
          });
          break;
        }
        const $ = l + M * e;
        for (let L = 0; L < g; L++) {
          o[$ + L] == 0 ? o[$ + L] = u : (r || (r = [])).push({
            type: "collision",
            row: a,
            pos: u,
            n: g - L
          });
          const P = A && A[L];
          if (P) {
            const W = ($ + L) % e * 2, Y = s[W];
            Y == null || Y != P && s[W + 1] == 1 ? (s[W] = P, s[W + 1] = 1) : Y == P && s[W + 1]++;
          }
        }
      }
      l += g, u += m.nodeSize;
    }
    const f = (a + 1) * e;
    let h = 0;
    for (; l < f; ) o[l++] == 0 && h++;
    h && (r || (r = [])).push({ type: "missing", row: a, n: h }), u++;
  }
  (e === 0 || n === 0) && (r || (r = [])).push({ type: "zero_sized" });
  const i = new C(e, n, o, r);
  let c = !1;
  for (let a = 0; !c && a < s.length; a += 2)
    s[a] != null && s[a + 1] < n && (c = !0);
  return c && Qe(i, s, t), i;
}
function Ye(t) {
  let e = -1, n = !1;
  for (let o = 0; o < t.childCount; o++) {
    const l = t.child(o);
    let r = 0;
    if (n)
      for (let s = 0; s < o; s++) {
        const i = t.child(s);
        for (let c = 0; c < i.childCount; c++) {
          const a = i.child(c);
          s + a.attrs.rowspan > o && (r += a.attrs.colspan);
        }
      }
    for (let s = 0; s < l.childCount; s++) {
      const i = l.child(s);
      r += i.attrs.colspan, i.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = r : e != r && (e = Math.max(e, r));
  }
  return e;
}
function Qe(t, e, n) {
  t.problems || (t.problems = []);
  const o = {};
  for (let l = 0; l < t.map.length; l++) {
    const r = t.map[l];
    if (o[r]) continue;
    o[r] = !0;
    const s = n.nodeAt(r);
    if (!s)
      throw new RangeError(`No cell with offset ${r} found`);
    let i = null;
    const c = s.attrs;
    for (let a = 0; a < c.colspan; a++) {
      const u = (l + a) % t.width, d = e[u * 2];
      d != null && (!c.colwidth || c.colwidth[a] != d) && ((i || (i = et(c)))[a] = d);
    }
    i && t.problems.unshift({
      type: "colwidth mismatch",
      pos: r,
      colwidth: i
    });
  }
}
function et(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function y(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const o = t.nodes[n], l = o.spec.tableRole;
      l && (e[l] = o);
    }
  }
  return e;
}
var z = new de("selectingCells");
function D(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function tt(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function x(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Z(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = D(e.$head) || nt(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function nt(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const o = e.type.spec.tableRole;
    if (o == "cell" || o == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const o = e.type.spec.tableRole;
    if (o == "cell" || o == "header_cell")
      return t.doc.resolve(n - e.nodeSize);
  }
}
function se(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function ot(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function ue(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function ze(t, e, n) {
  const o = t.node(-1), l = C.get(o), r = t.start(-1), s = l.nextCell(t.pos - r, e, n);
  return s == null ? null : t.node(0).resolve(r + s);
}
function B(t, e, n = 1) {
  const o = { ...t, colspan: t.colspan - n };
  return o.colwidth && (o.colwidth = o.colwidth.slice(), o.colwidth.splice(e, n), o.colwidth.some((l) => l > 0) || (o.colwidth = null)), o;
}
function Ee(t, e, n = 1) {
  const o = { ...t, colspan: t.colspan + n };
  if (o.colwidth) {
    o.colwidth = o.colwidth.slice();
    for (let l = 0; l < n; l++) o.colwidth.splice(e, 0, 0);
  }
  return o;
}
function lt(t, e, n) {
  const o = y(e.type.schema).header_cell;
  for (let l = 0; l < t.height; l++)
    if (e.nodeAt(t.map[n + l * t.width]).type != o)
      return !1;
  return !0;
}
var b = class v extends N {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, n = e) {
    const o = e.node(-1), l = C.get(o), r = e.start(-1), s = l.rectBetween(
      e.pos - r,
      n.pos - r
    ), i = e.node(0), c = l.cellsInRect(s).filter((u) => u != n.pos - r);
    c.unshift(n.pos - r);
    const a = c.map((u) => {
      const d = o.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = r + u + 1;
      return new Oe(
        i.resolve(f),
        i.resolve(f + d.content.size)
      );
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const o = e.resolve(n.map(this.$anchorCell.pos)), l = e.resolve(n.map(this.$headCell.pos));
    if (se(o) && se(l) && ue(o, l)) {
      const r = this.$anchorCell.node(-1) != o.node(-1);
      return r && this.isRowSelection() ? v.rowSelection(o, l) : r && this.isColSelection() ? v.colSelection(o, l) : new v(o, l);
    }
    return E.between(o, l);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = C.get(e), o = this.$anchorCell.start(-1), l = n.rectBetween(
      this.$anchorCell.pos - o,
      this.$headCell.pos - o
    ), r = {}, s = [];
    for (let c = l.top; c < l.bottom; c++) {
      const a = [];
      for (let u = c * n.width + l.left, d = l.left; d < l.right; d++, u++) {
        const f = n.map[u];
        if (r[f]) continue;
        r[f] = !0;
        const h = n.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const m = l.left - h.left, g = h.right - l.right;
        if (m > 0 || g > 0) {
          let w = p.attrs;
          if (m > 0 && (w = B(w, 0, m)), g > 0 && (w = B(
            w,
            w.colspan - g,
            g
          )), h.left < l.left) {
            if (p = p.type.createAndFill(w), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(w)}`
              );
          } else
            p = p.type.create(w, p.content);
        }
        if (h.top < l.top || h.bottom > l.bottom) {
          const w = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, l.bottom) - Math.max(h.top, l.top)
          };
          h.top < l.top ? p = p.type.createAndFill(w) : p = p.type.create(w, p.content);
        }
        a.push(p);
      }
      s.push(e.child(c).copy(T.from(a)));
    }
    const i = this.isColSelection() && this.isRowSelection() ? e : s;
    return new H(T.from(i), 1, 1);
  }
  replace(e, n = H.empty) {
    const o = e.steps.length, l = this.ranges;
    for (let s = 0; s < l.length; s++) {
      const { $from: i, $to: c } = l[s], a = e.mapping.slice(o);
      e.replace(
        a.map(i.pos),
        a.map(c.pos),
        s ? H.empty : n
      );
    }
    const r = N.findFrom(
      e.doc.resolve(e.mapping.slice(o).map(this.to)),
      -1
    );
    r && e.setSelection(r);
  }
  replaceWith(e, n) {
    this.replace(e, new H(T.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), o = C.get(n), l = this.$anchorCell.start(-1), r = o.cellsInRect(
      o.rectBetween(
        this.$anchorCell.pos - l,
        this.$headCell.pos - l
      )
    );
    for (let s = 0; s < r.length; s++)
      e(n.nodeAt(r[s]), l + r[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const o = e + this.$anchorCell.nodeAfter.attrs.rowspan, l = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(o, l) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, n = e) {
    const o = e.node(-1), l = C.get(o), r = e.start(-1), s = l.findCell(e.pos - r), i = l.findCell(n.pos - r), c = e.node(0);
    return s.top <= i.top ? (s.top > 0 && (e = c.resolve(r + l.map[s.left])), i.bottom < l.height && (n = c.resolve(
      r + l.map[l.width * (l.height - 1) + i.right - 1]
    ))) : (i.top > 0 && (n = c.resolve(r + l.map[i.left])), s.bottom < l.height && (e = c.resolve(
      r + l.map[l.width * (l.height - 1) + s.right - 1]
    ))), new v(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = C.get(e), o = this.$anchorCell.start(-1), l = n.colCount(this.$anchorCell.pos - o), r = n.colCount(this.$headCell.pos - o);
    if (Math.min(l, r) > 0) return !1;
    const s = l + this.$anchorCell.nodeAfter.attrs.colspan, i = r + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, i) == n.width;
  }
  eq(e) {
    return e instanceof v && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const o = e.node(-1), l = C.get(o), r = e.start(-1), s = l.findCell(e.pos - r), i = l.findCell(n.pos - r), c = e.node(0);
    return s.left <= i.left ? (s.left > 0 && (e = c.resolve(
      r + l.map[s.top * l.width]
    )), i.right < l.width && (n = c.resolve(
      r + l.map[l.width * (i.top + 1) - 1]
    ))) : (i.left > 0 && (n = c.resolve(r + l.map[i.top * l.width])), s.right < l.width && (e = c.resolve(
      r + l.map[l.width * (s.top + 1) - 1]
    ))), new v(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new v(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, o = n) {
    return new v(e.resolve(n), e.resolve(o));
  }
  getBookmark() {
    return new rt(this.$anchorCell.pos, this.$headCell.pos);
  }
};
b.prototype.visible = !1;
N.jsonID("cell", b);
var rt = class He {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new He(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), o = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && o.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && o.index() < o.parent.childCount && ue(n, o) ? new b(n, o) : N.near(o, 1);
  }
};
function st(t) {
  if (!(t.selection instanceof b)) return null;
  const e = [];
  return t.selection.forEachCell((n, o) => {
    e.push(
      oe.node(o, o + n.nodeSize, { class: "selectedCell" })
    );
  }), ne.create(t.doc, e);
}
function it({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, o = e.pos, l = t.depth;
  for (; l >= 0 && !(t.after(l + 1) < t.end(l)); l--, n++)
    ;
  for (let r = e.depth; r >= 0 && !(e.before(r + 1) > e.start(r)); r--, o--)
    ;
  return n == o && /row|table/.test(t.node(l).type.spec.tableRole);
}
function ct({ $from: t, $to: e }) {
  let n, o;
  for (let l = t.depth; l > 0; l--) {
    const r = t.node(l);
    if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
      n = r;
      break;
    }
  }
  for (let l = e.depth; l > 0; l--) {
    const r = e.node(l);
    if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
      o = r;
      break;
    }
  }
  return n !== o && e.parentOffset === 0;
}
function at(t, e, n) {
  const o = (e || t).selection, l = (e || t).doc;
  let r, s;
  if (o instanceof Ie && (s = o.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      r = b.create(l, o.from);
    else if (s == "row") {
      const i = l.resolve(o.from + 1);
      r = b.rowSelection(i, i);
    } else if (!n) {
      const i = C.get(o.node), c = o.from + 1, a = c + i.map[i.width * i.height - 1];
      r = b.create(l, c + 1, a);
    }
  } else o instanceof E && it(o) ? r = E.create(l, o.from) : o instanceof E && ct(o) && (r = E.create(l, o.$from.start(), o.$from.end()));
  return r && (e || (e = t.tr)).setSelection(r), e;
}
var dt = new de("fix-tables");
function Le(t, e, n, o) {
  const l = t.childCount, r = e.childCount;
  e: for (let s = 0, i = 0; s < r; s++) {
    const c = e.child(s);
    for (let a = i, u = Math.min(l, s + 3); a < u; a++)
      if (t.child(a) == c) {
        i = a + 1, n += c.nodeSize;
        continue e;
      }
    o(c, n), i < l && t.child(i).sameMarkup(c) ? Le(t.child(i), c, n + 1, o) : c.nodesBetween(0, c.content.size, o, n + 1), n += c.nodeSize;
  }
}
function Be(t, e) {
  let n;
  const o = (l, r) => {
    l.type.spec.tableRole == "table" && (n = ut(t, l, r, n));
  };
  return e ? e.doc != t.doc && Le(e.doc, t.doc, 0, o) : t.doc.descendants(o), n;
}
function ut(t, e, n, o) {
  const l = C.get(e);
  if (!l.problems) return o;
  o || (o = t.tr);
  const r = [];
  for (let c = 0; c < l.height; c++) r.push(0);
  for (let c = 0; c < l.problems.length; c++) {
    const a = l.problems[c];
    if (a.type == "collision") {
      const u = e.nodeAt(a.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) r[a.row + f] += a.n;
      o.setNodeMarkup(
        o.mapping.map(n + 1 + a.pos),
        null,
        B(d, d.colspan - a.n, a.n)
      );
    } else if (a.type == "missing")
      r[a.row] += a.n;
    else if (a.type == "overlong_rowspan") {
      const u = e.nodeAt(a.pos);
      if (!u) continue;
      o.setNodeMarkup(o.mapping.map(n + 1 + a.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - a.n
      });
    } else if (a.type == "colwidth mismatch") {
      const u = e.nodeAt(a.pos);
      if (!u) continue;
      o.setNodeMarkup(o.mapping.map(n + 1 + a.pos), null, {
        ...u.attrs,
        colwidth: a.colwidth
      });
    } else if (a.type == "zero_sized") {
      const u = o.mapping.map(n);
      o.delete(u, u + e.nodeSize);
    }
  }
  let s, i;
  for (let c = 0; c < r.length; c++)
    r[c] && (s == null && (s = c), i = c);
  for (let c = 0, a = n + 1; c < l.height; c++) {
    const u = e.child(c), d = a + u.nodeSize, f = r[c];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const w = y(t.schema)[h].createAndFill();
        w && p.push(w);
      }
      const m = (c == 0 || s == c - 1) && i == c ? a + 1 : d - 1;
      o.insert(o.mapping.map(m), p);
    }
    a = d;
  }
  return o.setMeta(dt, { fixTables: !0 });
}
function R(t) {
  const e = t.selection, n = Z(t), o = n.node(-1), l = n.start(-1), r = C.get(o);
  return { ...e instanceof b ? r.rectBetween(
    e.$anchorCell.pos - l,
    e.$headCell.pos - l
  ) : r.findCell(n.pos - l), tableStart: l, map: r, table: o };
}
function De(t, { map: e, tableStart: n, table: o }, l) {
  let r = l > 0 ? -1 : 0;
  lt(e, o, l + r) && (r = l == 0 || l == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const i = s * e.width + l;
    if (l > 0 && l < e.width && e.map[i - 1] == e.map[i]) {
      const c = e.map[i], a = o.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(n + c),
        null,
        Ee(a.attrs, l - e.colCount(c))
      ), s += a.attrs.rowspan - 1;
    } else {
      const c = r == null ? y(o.type.schema).cell : o.nodeAt(e.map[i + r]).type, a = e.positionAt(s, l, o);
      t.insert(t.mapping.map(n + a), c.createAndFill());
    }
  }
  return t;
}
function ft(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const n = R(t);
    e(De(t.tr, n, n.left));
  }
  return !0;
}
function ht(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const n = R(t);
    e(De(t.tr, n, n.right));
  }
  return !0;
}
function pt(t, { map: e, table: n, tableStart: o }, l) {
  const r = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const i = s * e.width + l, c = e.map[i], a = n.nodeAt(c), u = a.attrs;
    if (l > 0 && e.map[i - 1] == c || l < e.width - 1 && e.map[i + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(r).map(o + c),
        null,
        B(u, l - e.colCount(c))
      );
    else {
      const d = t.mapping.slice(r).map(o + c);
      t.delete(d, d + a.nodeSize);
    }
    s += u.rowspan;
  }
}
function mt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const n = R(t), o = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let l = n.right - 1; pt(o, n, l), l != n.left; l--) {
      const r = n.tableStart ? o.doc.nodeAt(n.tableStart - 1) : o.doc;
      if (!r)
        throw RangeError("No table found");
      n.table = r, n.map = C.get(r);
    }
    e(o);
  }
  return !0;
}
function gt(t, e, n) {
  var o;
  const l = y(e.type.schema).header_cell;
  for (let r = 0; r < t.width; r++)
    if (((o = e.nodeAt(t.map[r + n * t.width])) == null ? void 0 : o.type) != l)
      return !1;
  return !0;
}
function $e(t, { map: e, tableStart: n, table: o }, l) {
  var r;
  let s = n;
  for (let a = 0; a < l; a++) s += o.child(a).nodeSize;
  const i = [];
  let c = l > 0 ? -1 : 0;
  gt(e, o, l + c) && (c = l == 0 || l == e.height ? null : 0);
  for (let a = 0, u = e.width * l; a < e.width; a++, u++)
    if (l > 0 && l < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = o.nodeAt(d).attrs;
      t.setNodeMarkup(n + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), a += f.colspan - 1;
    } else {
      const d = c == null ? y(o.type.schema).cell : (r = o.nodeAt(e.map[u + c * e.width])) == null ? void 0 : r.type, f = d == null ? void 0 : d.createAndFill();
      f && i.push(f);
    }
  return t.insert(s, y(o.type.schema).row.create(null, i)), t;
}
function bt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const n = R(t);
    e($e(t.tr, n, n.top));
  }
  return !0;
}
function wt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const n = R(t);
    e($e(t.tr, n, n.bottom));
  }
  return !0;
}
function Ct(t, { map: e, table: n, tableStart: o }, l) {
  let r = 0;
  for (let a = 0; a < l; a++) r += n.child(a).nodeSize;
  const s = r + n.child(l).nodeSize, i = t.mapping.maps.length;
  t.delete(r + o, s + o);
  const c = /* @__PURE__ */ new Set();
  for (let a = 0, u = l * e.width; a < e.width; a++, u++) {
    const d = e.map[u];
    if (!c.has(d)) {
      if (c.add(d), l > 0 && d == e.map[u - e.width]) {
        const f = n.nodeAt(d).attrs;
        t.setNodeMarkup(t.mapping.slice(i).map(d + o), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), a += f.colspan - 1;
      } else if (l < e.height && d == e.map[u + e.width]) {
        const f = n.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), m = e.positionAt(l + 1, a, n);
        t.insert(t.mapping.slice(i).map(o + m), p), a += h.colspan - 1;
      }
    }
  }
}
function yt(t, e) {
  if (!x(t)) return !1;
  if (e) {
    const n = R(t), o = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let l = n.bottom - 1; Ct(o, n, l), l != n.top; l--) {
      const r = n.tableStart ? o.doc.nodeAt(n.tableStart - 1) : o.doc;
      if (!r)
        throw RangeError("No table found");
      n.table = r, n.map = C.get(n.table);
    }
    e(o);
  }
  return !0;
}
function fe(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function St({ width: t, height: e, map: n }, o) {
  let l = o.top * t + o.left, r = l, s = (o.bottom - 1) * t + o.left, i = l + (o.right - o.left - 1);
  for (let c = o.top; c < o.bottom; c++) {
    if (o.left > 0 && n[r] == n[r - 1] || o.right < t && n[i] == n[i + 1])
      return !0;
    r += t, i += t;
  }
  for (let c = o.left; c < o.right; c++) {
    if (o.top > 0 && n[l] == n[l - t] || o.bottom < e && n[s] == n[s + t])
      return !0;
    l++, s++;
  }
  return !1;
}
function he(t, e) {
  const n = t.selection;
  if (!(n instanceof b) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const o = R(t), { map: l } = o;
  if (St(l, o)) return !1;
  if (e) {
    const r = t.tr, s = {};
    let i = T.empty, c, a;
    for (let u = o.top; u < o.bottom; u++)
      for (let d = o.left; d < o.right; d++) {
        const f = l.map[u * l.width + d], h = o.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, c == null)
            c = f, a = h;
          else {
            fe(h) || (i = i.append(h.content));
            const p = r.mapping.map(f + o.tableStart);
            r.delete(p, p + h.nodeSize);
          }
      }
    if (c == null || a == null)
      return !0;
    if (r.setNodeMarkup(c + o.tableStart, null, {
      ...Ee(
        a.attrs,
        a.attrs.colspan,
        o.right - o.left - a.attrs.colspan
      ),
      rowspan: o.bottom - o.top
    }), i.size) {
      const u = c + 1 + a.content.size, d = fe(a) ? c + 1 : u;
      r.replaceWith(d + o.tableStart, u + o.tableStart, i);
    }
    r.setSelection(
      new b(r.doc.resolve(c + o.tableStart))
    ), e(r);
  }
  return !0;
}
function pe(t, e) {
  const n = y(t.schema);
  return At(({ node: o }) => n[o.type.spec.tableRole])(t, e);
}
function At(t) {
  return (e, n) => {
    var o;
    const l = e.selection;
    let r, s;
    if (l instanceof b) {
      if (l.$anchorCell.pos != l.$headCell.pos) return !1;
      r = l.$anchorCell.nodeAfter, s = l.$anchorCell.pos;
    } else {
      if (r = tt(l.$from), !r) return !1;
      s = (o = D(l.$from)) == null ? void 0 : o.pos;
    }
    if (r == null || s == null || r.attrs.colspan == 1 && r.attrs.rowspan == 1)
      return !1;
    if (n) {
      let i = r.attrs;
      const c = [], a = i.colwidth;
      i.rowspan > 1 && (i = { ...i, rowspan: 1 }), i.colspan > 1 && (i = { ...i, colspan: 1 });
      const u = R(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        c.push(
          a ? {
            ...i,
            colwidth: a && a[h] ? [a[h]] : null
          } : i
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += r.nodeSize);
        for (let m = u.left, g = 0; m < u.right; m++, g++)
          m == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            t({ node: r, row: h, col: m }).createAndFill(c[g])
          );
      }
      d.setNodeMarkup(
        s,
        t({ node: r, row: u.top, col: u.left }),
        c[0]
      ), l instanceof b && d.setSelection(
        new b(
          d.doc.resolve(l.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), n(d);
    }
    return !0;
  };
}
function xt(t, e) {
  return function(n, o) {
    if (!x(n)) return !1;
    const l = Z(n);
    if (l.nodeAfter.attrs[t] === e) return !1;
    if (o) {
      const r = n.tr;
      n.selection instanceof b ? n.selection.forEachCell((s, i) => {
        s.attrs[t] !== e && r.setNodeMarkup(i, null, {
          ...s.attrs,
          [t]: e
        });
      }) : r.setNodeMarkup(l.pos, null, {
        ...l.nodeAfter.attrs,
        [t]: e
      }), o(r);
    }
    return !0;
  };
}
function Tt(t) {
  return function(e, n) {
    if (!x(e)) return !1;
    if (n) {
      const o = y(e.schema), l = R(e), r = e.tr, s = l.map.cellsInRect(
        t == "column" ? {
          left: l.left,
          top: 0,
          right: l.right,
          bottom: l.map.height
        } : t == "row" ? {
          left: 0,
          top: l.top,
          right: l.map.width,
          bottom: l.bottom
        } : l
      ), i = s.map((c) => l.table.nodeAt(c));
      for (let c = 0; c < s.length; c++)
        i[c].type == o.header_cell && r.setNodeMarkup(
          l.tableStart + s[c],
          o.cell,
          i[c].attrs
        );
      if (r.steps.length == 0)
        for (let c = 0; c < s.length; c++)
          r.setNodeMarkup(
            l.tableStart + s[c],
            o.header_cell,
            i[c].attrs
          );
      n(r);
    }
    return !0;
  };
}
function me(t, e, n) {
  const o = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let l = 0; l < o.length; l++) {
    const r = e.table.nodeAt(o[l]);
    if (r && r.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function _(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Tt(t) : function(n, o) {
    if (!x(n)) return !1;
    if (o) {
      const l = y(n.schema), r = R(n), s = n.tr, i = me("row", r, l), c = me(
        "column",
        r,
        l
      ), u = (t === "column" ? i : t === "row" ? c : !1) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: r.map.height
      } : t == "row" ? {
        left: u,
        top: 0,
        right: r.map.width,
        bottom: 1
      } : r, f = t == "column" ? c ? l.cell : l.header_cell : t == "row" ? i ? l.cell : l.header_cell : l.cell;
      r.map.cellsInRect(d).forEach((h) => {
        const p = h + r.tableStart, m = s.doc.nodeAt(p);
        m && s.setNodeMarkup(p, f, m.attrs);
      }), o(s);
    }
    return !0;
  };
}
_("row", {
  useDeprecatedLogic: !0
});
_("column", {
  useDeprecatedLogic: !0
});
var Rt = _("cell", {
  useDeprecatedLogic: !0
});
function Mt(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let o = t.index(-1) - 1, l = t.before(); o >= 0; o--) {
      const r = t.node(-1).child(o), s = r.lastChild;
      if (s)
        return l - 1 - s.nodeSize;
      l -= r.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let o = t.indexAfter(-1), l = t.after(); o < n.childCount; o++) {
      const r = n.child(o);
      if (r.childCount) return l + 1;
      l += r.nodeSize;
    }
  }
  return null;
}
function ge(t) {
  return function(e, n) {
    if (!x(e)) return !1;
    const o = Mt(Z(e), t);
    if (o == null) return !1;
    if (n) {
      const l = e.doc.resolve(o);
      n(
        e.tr.setSelection(E.between(l, ot(l))).scrollIntoView()
      );
    }
    return !0;
  };
}
function vt(t, e) {
  const n = t.selection.$anchor;
  for (let o = n.depth; o > 0; o--)
    if (n.node(o).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(o), n.after(o)).scrollIntoView()
      ), !0;
  return !1;
}
function j(t, e) {
  const n = t.selection;
  if (!(n instanceof b)) return !1;
  if (e) {
    const o = t.tr, l = y(t.schema).cell.createAndFill().content;
    n.forEachCell((r, s) => {
      r.content.eq(l) || o.replace(
        o.mapping.map(s + 1),
        o.mapping.map(s + r.nodeSize - 1),
        new H(l, 0, 0)
      );
    }), o.docChanged && e(o);
  }
  return !0;
}
function Nt(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: o } = t;
  for (; e.childCount == 1 && (n > 0 && o > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, o--, e = e.child(0).content;
  const l = e.child(0), r = l.type.spec.tableRole, s = l.type.schema, i = [];
  if (r == "row")
    for (let c = 0; c < e.childCount; c++) {
      let a = e.child(c).content;
      const u = c ? 0 : Math.max(0, n - 1), d = c < e.childCount - 1 ? 0 : Math.max(0, o - 1);
      (u || d) && (a = ie(
        y(s).row,
        new H(a, u, d)
      ).content), i.push(a);
    }
  else if (r == "cell" || r == "header_cell")
    i.push(
      n || o ? ie(
        y(s).row,
        new H(e, n, o)
      ).content : e
    );
  else
    return null;
  return kt(s, i);
}
function kt(t, e) {
  const n = [];
  for (let l = 0; l < e.length; l++) {
    const r = e[l];
    for (let s = r.childCount - 1; s >= 0; s--) {
      const { rowspan: i, colspan: c } = r.child(s).attrs;
      for (let a = l; a < l + i; a++)
        n[a] = (n[a] || 0) + c;
    }
  }
  let o = 0;
  for (let l = 0; l < n.length; l++) o = Math.max(o, n[l]);
  for (let l = 0; l < n.length; l++)
    if (l >= e.length && e.push(T.empty), n[l] < o) {
      const r = y(t).cell.createAndFill(), s = [];
      for (let i = n[l]; i < o; i++)
        s.push(r);
      e[l] = e[l].append(T.from(s));
    }
  return { height: e.length, width: o, rows: e };
}
function ie(t, e) {
  const n = t.createAndFill();
  return new Fe(n).replace(0, n.content.size, e).doc;
}
function zt({ width: t, height: e, rows: n }, o, l) {
  if (t != o) {
    const r = [], s = [];
    for (let i = 0; i < n.length; i++) {
      const c = n[i], a = [];
      for (let u = r[i] || 0, d = 0; u < o; d++) {
        let f = c.child(d % c.childCount);
        u + f.attrs.colspan > o && (f = f.type.createChecked(
          B(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - o
          ),
          f.content
        )), a.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          r[i + h] = (r[i + h] || 0) + f.attrs.colspan;
      }
      s.push(T.from(a));
    }
    n = s, t = o;
  }
  if (e != l) {
    const r = [];
    for (let s = 0, i = 0; s < l; s++, i++) {
      const c = [], a = n[i % e];
      for (let u = 0; u < a.childCount; u++) {
        let d = a.child(u);
        s + d.attrs.rowspan > l && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, l - d.attrs.rowspan)
          },
          d.content
        )), c.push(d);
      }
      r.push(T.from(c));
    }
    n = r, e = l;
  }
  return { width: t, height: e, rows: n };
}
function Et(t, e, n, o, l, r, s) {
  const i = t.doc.type.schema, c = y(i);
  let a, u;
  if (l > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = n.child(d);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == c.cell ? m = a || (a = c.cell.createAndFill()) : m = u || (u = c.header_cell.createAndFill());
      for (let g = e.width; g < l; g++) p.push(m);
      t.insert(t.mapping.slice(s).map(f - 1 + o), p);
    }
  if (r > e.height) {
    const d = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, l); p++) {
      const g = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == c.header_cell;
      d.push(
        g ? u || (u = c.header_cell.createAndFill()) : a || (a = c.cell.createAndFill())
      );
    }
    const f = c.row.create(null, T.from(d)), h = [];
    for (let p = e.height; p < r; p++) h.push(f);
    t.insert(t.mapping.slice(s).map(o + n.nodeSize - 2), h);
  }
  return !!(a || u);
}
function be(t, e, n, o, l, r, s, i) {
  if (s == 0 || s == e.height) return !1;
  let c = !1;
  for (let a = l; a < r; a++) {
    const u = s * e.width + a, d = e.map[u];
    if (e.map[u - e.width] == d) {
      c = !0;
      const f = n.nodeAt(d), { top: h, left: p } = e.findCell(d);
      t.setNodeMarkup(t.mapping.slice(i).map(d + o), null, {
        ...f.attrs,
        rowspan: s - h
      }), t.insert(
        t.mapping.slice(i).map(e.positionAt(s, p, n)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), a += f.attrs.colspan - 1;
    }
  }
  return c;
}
function we(t, e, n, o, l, r, s, i) {
  if (s == 0 || s == e.width) return !1;
  let c = !1;
  for (let a = l; a < r; a++) {
    const u = a * e.width + s, d = e.map[u];
    if (e.map[u - 1] == d) {
      c = !0;
      const f = n.nodeAt(d), h = e.colCount(d), p = t.mapping.slice(i).map(d + o);
      t.setNodeMarkup(
        p,
        null,
        B(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), t.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          B(f.attrs, 0, s - h)
        )
      ), a += f.attrs.rowspan - 1;
    }
  }
  return c;
}
function Ce(t, e, n, o, l) {
  let r = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!r)
    throw new Error("No table found");
  let s = C.get(r);
  const { top: i, left: c } = o, a = c + l.width, u = i + l.height, d = t.tr;
  let f = 0;
  function h() {
    if (r = n ? d.doc.nodeAt(n - 1) : d.doc, !r)
      throw new Error("No table found");
    s = C.get(r), f = d.mapping.maps.length;
  }
  Et(d, s, r, n, a, u, f) && h(), be(d, s, r, n, c, a, i, f) && h(), be(d, s, r, n, c, a, u, f) && h(), we(d, s, r, n, i, u, c, f) && h(), we(d, s, r, n, i, u, a, f) && h();
  for (let p = i; p < u; p++) {
    const m = s.positionAt(p, c, r), g = s.positionAt(p, a, r);
    d.replace(
      d.mapping.slice(f).map(m + n),
      d.mapping.slice(f).map(g + n),
      new H(l.rows[p - i], 0, 0)
    );
  }
  h(), d.setSelection(
    new b(
      d.doc.resolve(n + s.positionAt(i, c, r)),
      d.doc.resolve(n + s.positionAt(u - 1, a - 1, r))
    )
  ), e(d);
}
var Ht = Pe({
  ArrowLeft: V("horiz", -1),
  ArrowRight: V("horiz", 1),
  ArrowUp: V("vert", -1),
  ArrowDown: V("vert", 1),
  "Shift-ArrowLeft": K("horiz", -1),
  "Shift-ArrowRight": K("horiz", 1),
  "Shift-ArrowUp": K("vert", -1),
  "Shift-ArrowDown": K("vert", 1),
  Backspace: j,
  "Mod-Backspace": j,
  Delete: j,
  "Mod-Delete": j
});
function G(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function V(t, e) {
  return (n, o, l) => {
    if (!l) return !1;
    const r = n.selection;
    if (r instanceof b)
      return G(
        n,
        o,
        N.near(r.$headCell, e)
      );
    if (t != "horiz" && !r.empty) return !1;
    const s = We(l, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return G(
        n,
        o,
        N.near(n.doc.resolve(r.head + e), e)
      );
    {
      const i = n.doc.resolve(s), c = ze(i, t, e);
      let a;
      return c ? a = N.near(c, 1) : e < 0 ? a = N.near(n.doc.resolve(i.before(-1)), -1) : a = N.near(n.doc.resolve(i.after(-1)), 1), G(n, o, a);
    }
  };
}
function K(t, e) {
  return (n, o, l) => {
    if (!l) return !1;
    const r = n.selection;
    let s;
    if (r instanceof b)
      s = r;
    else {
      const c = We(l, t, e);
      if (c == null) return !1;
      s = new b(n.doc.resolve(c));
    }
    const i = ze(s.$headCell, t, e);
    return i ? G(
      n,
      o,
      new b(s.$anchorCell, i)
    ) : !1;
  };
}
function Lt(t, e) {
  const n = t.state.doc, o = D(n.resolve(e));
  return o ? (t.dispatch(t.state.tr.setSelection(new b(o))), !0) : !1;
}
function Bt(t, e, n) {
  if (!x(t.state)) return !1;
  let o = Nt(n);
  const l = t.state.selection;
  if (l instanceof b) {
    o || (o = {
      width: 1,
      height: 1,
      rows: [
        T.from(
          ie(y(t.state.schema).cell, n)
        )
      ]
    });
    const r = l.$anchorCell.node(-1), s = l.$anchorCell.start(-1), i = C.get(r).rectBetween(
      l.$anchorCell.pos - s,
      l.$headCell.pos - s
    );
    return o = zt(o, i.right - i.left, i.bottom - i.top), Ce(t.state, t.dispatch, s, i, o), !0;
  } else if (o) {
    const r = Z(t.state), s = r.start(-1);
    return Ce(
      t.state,
      t.dispatch,
      s,
      C.get(r.node(-1)).findCell(r.pos - s),
      o
    ), !0;
  } else
    return !1;
}
function Dt(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const o = ye(t, e.target);
  let l;
  if (e.shiftKey && t.state.selection instanceof b)
    r(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && o && (l = D(t.state.selection.$anchor)) != null && ((n = te(t, e)) == null ? void 0 : n.pos) != l.pos)
    r(l, e), e.preventDefault();
  else if (!o)
    return;
  function r(c, a) {
    let u = te(t, a);
    const d = z.getState(t.state) == null;
    if (!u || !ue(c, u))
      if (d) u = c;
      else return;
    const f = new b(c, u);
    if (d || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      d && h.setMeta(z, c.pos), t.dispatch(h);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", i), z.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(z, -1));
  }
  function i(c) {
    const a = c, u = z.getState(t.state);
    let d;
    if (u != null)
      d = t.state.doc.resolve(u);
    else if (ye(t, a.target) != o && (d = te(t, e), !d))
      return s();
    d && r(d, a);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", i);
}
function We(t, e, n) {
  if (!(t.state.selection instanceof E)) return null;
  const { $head: o } = t.state.selection;
  for (let l = o.depth - 1; l >= 0; l--) {
    const r = o.node(l);
    if ((n < 0 ? o.index(l) : o.indexAfter(l)) != (n < 0 ? 0 : r.childCount)) return null;
    if (r.type.spec.tableRole == "cell" || r.type.spec.tableRole == "header_cell") {
      const i = o.before(l), c = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(c) ? i : null;
    }
  }
  return null;
}
function ye(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function te(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? D(t.state.doc.resolve(n.pos)) : null;
}
var $t = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ce(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, ce(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function ce(t, e, n, o, l, r) {
  var s;
  let i = 0, c = !0, a = e.firstChild;
  const u = t.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = l == f ? r : p && p[m], w = g ? g + "px" : "";
        if (i += g || o, g || (c = !1), a)
          a.style.width != w && (a.style.width = w), a = a.nextSibling;
        else {
          const A = document.createElement("col");
          A.style.width = w, e.appendChild(A);
        }
      }
    }
    for (; a; ) {
      const d = a.nextSibling;
      (s = a.parentNode) == null || s.removeChild(a), a = d;
    }
    c ? (n.style.width = i + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = i + "px");
  }
}
var S = new de(
  "tableColumnResizing"
);
function Wt({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: o = $t,
  lastColumnResizable: l = !0
} = {}) {
  const r = new ke({
    key: S,
    state: {
      init(s, i) {
        var c, a;
        const u = (a = (c = r.spec) == null ? void 0 : c.props) == null ? void 0 : a.nodeViews, d = y(i.schema).table.name;
        return o && u && (u[d] = (f, h) => new o(f, n, h)), new _t(-1, !1);
      },
      apply(s, i) {
        return i.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const i = S.getState(s);
        return i && i.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, i) => {
          Pt(s, i, t, l);
        },
        mouseleave: (s) => {
          Ot(s);
        },
        mousedown: (s, i) => {
          It(s, i, e, n);
        }
      },
      decorations: (s) => {
        const i = S.getState(s);
        if (i && i.activeHandle > -1)
          return Xt(s, i.activeHandle);
      },
      nodeViews: {}
    }
  });
  return r;
}
var _t = class q {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, o = e.getMeta(S);
    if (o && o.setHandle != null)
      return new q(o.setHandle, !1);
    if (o && o.setDragging !== void 0)
      return new q(n.activeHandle, o.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let l = e.mapping.map(n.activeHandle, -1);
      return se(e.doc.resolve(l)) || (l = -1), new q(l, n.dragging);
    }
    return n;
  }
};
function Pt(t, e, n, o) {
  if (!t.editable) return;
  const l = S.getState(t.state);
  if (l && !l.dragging) {
    const r = jt(e.target);
    let s = -1;
    if (r) {
      const { left: i, right: c } = r.getBoundingClientRect();
      e.clientX - i <= n ? s = Se(t, e, "left", n) : c - e.clientX <= n && (s = Se(t, e, "right", n));
    }
    if (s != l.activeHandle) {
      if (!o && s !== -1) {
        const i = t.state.doc.resolve(s), c = i.node(-1), a = C.get(c), u = i.start(-1);
        if (a.colCount(i.pos - u) + i.nodeAfter.attrs.colspan - 1 == a.width - 1)
          return;
      }
      _e(t, s);
    }
  }
}
function Ot(t) {
  if (!t.editable) return;
  const e = S.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && _e(t, -1);
}
function It(t, e, n, o) {
  var l;
  if (!t.editable) return !1;
  const r = (l = t.dom.ownerDocument.defaultView) != null ? l : window, s = S.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const i = t.state.doc.nodeAt(s.activeHandle), c = Ft(t, s.activeHandle, i.attrs);
  t.dispatch(
    t.state.tr.setMeta(S, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function a(d) {
    r.removeEventListener("mouseup", a), r.removeEventListener("mousemove", u);
    const f = S.getState(t.state);
    f != null && f.dragging && (Vt(
      t,
      f.activeHandle,
      Ae(f.dragging, d, n)
    ), t.dispatch(
      t.state.tr.setMeta(S, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return a(d);
    const f = S.getState(t.state);
    if (f && f.dragging) {
      const h = Ae(f.dragging, d, n);
      xe(
        t,
        f.activeHandle,
        h,
        o
      );
    }
  }
  return xe(
    t,
    s.activeHandle,
    c,
    o
  ), r.addEventListener("mouseup", a), r.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function Ft(t, e, { colspan: n, colwidth: o }) {
  const l = o && o[o.length - 1];
  if (l) return l;
  const r = t.domAtPos(e);
  let i = r.node.childNodes[r.offset].offsetWidth, c = n;
  if (o)
    for (let a = 0; a < n; a++)
      o[a] && (i -= o[a], c--);
  return i / c;
}
function jt(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Se(t, e, n, o) {
  const l = n == "right" ? -o : o, r = t.posAtCoords({
    left: e.clientX + l,
    top: e.clientY
  });
  if (!r) return -1;
  const { pos: s } = r, i = D(t.state.doc.resolve(s));
  if (!i) return -1;
  if (n == "right") return i.pos;
  const c = C.get(i.node(-1)), a = i.start(-1), u = c.map.indexOf(i.pos - a);
  return u % c.width == 0 ? -1 : a + c.map[u - 1];
}
function Ae(t, e, n) {
  const o = e.clientX - t.startX;
  return Math.max(n, t.startWidth + o);
}
function _e(t, e) {
  t.dispatch(
    t.state.tr.setMeta(S, { setHandle: e })
  );
}
function Vt(t, e, n) {
  const o = t.state.doc.resolve(e), l = o.node(-1), r = C.get(l), s = o.start(-1), i = r.colCount(o.pos - s) + o.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let a = 0; a < r.height; a++) {
    const u = a * r.width + i;
    if (a && r.map[u] == r.map[u - r.width]) continue;
    const d = r.map[u], f = l.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : i - r.colCount(d);
    if (f.colwidth && f.colwidth[h] == n) continue;
    const p = f.colwidth ? f.colwidth.slice() : Kt(f.colspan);
    p[h] = n, c.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function xe(t, e, n, o) {
  const l = t.state.doc.resolve(e), r = l.node(-1), s = l.start(-1), i = C.get(r).colCount(l.pos - s) + l.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(l.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && ce(
    r,
    c.firstChild,
    c,
    o,
    i,
    n
  );
}
function Kt(t) {
  return Array(t).fill(0);
}
function Xt(t, e) {
  var n;
  const o = [], l = t.doc.resolve(e), r = l.node(-1);
  if (!r)
    return ne.empty;
  const s = C.get(r), i = l.start(-1), c = s.colCount(l.pos - i) + l.nodeAfter.attrs.colspan - 1;
  for (let a = 0; a < s.height; a++) {
    const u = c + a * s.width;
    if ((c == s.width - 1 || s.map[u] != s.map[u + 1]) && (a == 0 || s.map[u] != s.map[u - s.width])) {
      const d = s.map[u], f = i + d + r.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (n = S.getState(t)) != null && n.dragging && o.push(
        oe.node(
          i + d,
          i + d + r.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), o.push(oe.widget(f, h));
    }
  }
  return ne.create(t.doc, o);
}
function Gt({
  allowTableNodeSelection: t = !1
} = {}) {
  return new ke({
    key: z,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const o = e.getMeta(z);
        if (o != null) return o == -1 ? null : o;
        if (n == null || !e.docChanged) return n;
        const { deleted: l, pos: r } = e.mapping.mapResult(n);
        return l ? null : r;
      }
    },
    props: {
      decorations: st,
      handleDOMEvents: {
        mousedown: Dt
      },
      createSelectionBetween(e) {
        return z.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Lt,
      handleKeyDown: Ht,
      handlePaste: Bt
    },
    appendTransaction(e, n, o) {
      return at(
        o,
        Be(o, n),
        t
      );
    }
  });
}
function ae(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function Te(t, e, n, o, l, r) {
  var s;
  let i = 0, c = !0, a = e.firstChild;
  const u = t.firstChild;
  if (u !== null)
    for (let d = 0, f = 0; d < u.childCount; d += 1) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let m = 0; m < h; m += 1, f += 1) {
        const g = l === f ? r : p && p[m], w = g ? `${g}px` : "";
        if (i += g || o, g || (c = !1), a) {
          if (a.style.width !== w) {
            const [A, M] = ae(o, g);
            a.style.setProperty(A, M);
          }
          a = a.nextSibling;
        } else {
          const A = document.createElement("col"), [M, $] = ae(o, g);
          A.style.setProperty(M, $), e.appendChild(A);
        }
      }
    }
  for (; a; ) {
    const d = a.nextSibling;
    (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = d;
  }
  c ? (n.style.width = `${i}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${i}px`);
}
class qt {
  constructor(e, n) {
    this.node = e, this.cellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Te(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, Te(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function Ut(t, e, n, o) {
  let l = 0, r = !0;
  const s = [], i = t.firstChild;
  if (!i)
    return {};
  for (let d = 0, f = 0; d < i.childCount; d += 1) {
    const { colspan: h, colwidth: p } = i.child(d).attrs;
    for (let m = 0; m < h; m += 1, f += 1) {
      const g = n === f ? o : p && p[m];
      l += g || e, g || (r = !1);
      const [w, A] = ae(e, g);
      s.push([
        "col",
        { style: `${w}: ${A}` }
      ]);
    }
  }
  const c = r ? `${l}px` : "", a = r ? "" : `${l}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: c, tableMinWidth: a };
}
function Re(t, e) {
  return t.createAndFill();
}
function Jt(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const o = t.nodes[n];
    o.spec.tableRole && (e[o.spec.tableRole] = o);
  }), t.cached.tableNodeTypes = e, e;
}
function Zt(t, e, n, o, l) {
  const r = Jt(t), s = [], i = [];
  for (let a = 0; a < n; a += 1) {
    const u = Re(r.cell);
    if (u && i.push(u), o) {
      const d = Re(r.header_cell);
      d && s.push(d);
    }
  }
  const c = [];
  for (let a = 0; a < e; a += 1)
    c.push(r.row.createChecked(null, o && a === 0 ? s : i));
  return r.table.createChecked(null, c);
}
function Yt(t) {
  return t instanceof b;
}
const X = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!Yt(e))
    return !1;
  let n = 0;
  const o = Ke(e.ranges[0].$from, (r) => r.type.name === "table");
  return o == null || o.node.descendants((r) => {
    if (r.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(r.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Qt = U.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: qt,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: o, tableMinWidth: l } = Ut(t, this.options.cellMinWidth);
    return [
      "table",
      J(this.options.HTMLAttributes, e, {
        style: o ? `width: ${o}` : `min-width: ${l}`
      }),
      n,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: o, dispatch: l, editor: r }) => {
        const s = Zt(r.schema, t, e, n);
        if (l) {
          const i = o.selection.from + 1;
          o.replaceSelectionWith(s).scrollIntoView().setSelection(E.near(o.doc.resolve(i)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => ft(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => ht(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => mt(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => bt(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => wt(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => yt(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => vt(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => he(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => pe(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => _("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => _("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Rt(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => he(t, e) ? !0 : pe(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: o }) => xt(t, e)(n, o),
      goToNextCell: () => ({ state: t, dispatch: e }) => ge(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => ge(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Be(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const o = b.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(o);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: X,
      "Mod-Backspace": X,
      Delete: X,
      "Mod-Delete": X
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Wt({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Gt({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: je(Ve(t, "tableRole", e))
    };
  }
}), en = U.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((o) => parseInt(o, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", J(this.options.HTMLAttributes, t), 0];
  }
}), tn = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, nn = /CrOS/, on = /android|ipad|playbook|silk/i;
function Me(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(tn.test(e) && !nn.test(e) || t.tablet && on.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const ve = (t) => Array.from({ length: t }).map((e, n) => n + 1);
function ln(t) {
  var u;
  const [e, n] = ee(!0), [o, l] = ee({
    rows: Me() ? O : I,
    cols: Me() ? O : I
  }), [r, s] = ee({
    rows: F,
    cols: F
  });
  function i(d, f) {
    d === o.rows && l((h) => ({
      ...h,
      rows: Math.min(d + 1, O)
    })), f === o.cols && l((h) => ({
      ...h,
      cols: Math.min(f + 1, O)
    })), s({
      rows: d,
      cols: f
    });
  }
  function c(d, f) {
    t == null || t.createTable({ rows: d, cols: f, withHeaderRow: e }), a();
  }
  function a() {
    n(!1), l({
      rows: I,
      cols: I
    }), s({
      rows: F,
      cols: F
    });
  }
  return /* @__PURE__ */ Q(Ge, { modal: !0, children: [
    /* @__PURE__ */ k(qe, { asChild: !0, children: t == null ? void 0 : t.children }),
    /* @__PURE__ */ k(
      Ue,
      {
        align: "start",
        className: "richtext-w-full !richtext-p-2",
        side: "bottom",
        children: /* @__PURE__ */ Q("div", { className: "table-grid-size-editor richtext-p-0", children: [
          /* @__PURE__ */ k("div", { className: "richtext-flex richtext-flex-col richtext-flex-wrap richtext-justify-between richtext-gap-1", children: (u = ve(o == null ? void 0 : o.rows)) == null ? void 0 : u.map((d) => {
            var f;
            return /* @__PURE__ */ k(
              "div",
              {
                className: "richtext-flex richtext-gap-1",
                children: (f = ve(o == null ? void 0 : o.cols)) == null ? void 0 : f.map((h) => /* @__PURE__ */ k(
                  "div",
                  {
                    onMouseDown: () => c(d, h),
                    onMouseOver: () => i(d, h),
                    className: `richtext-cursor-pointer richtext-border-border ${h <= r.cols && d <= r.rows && "tableCellActive !richtext-bg-foreground"}`,
                    children: /* @__PURE__ */ k("div", { className: "richtext-box-border richtext-size-4 richtext-rounded-[2px] !richtext-border richtext-border-solid !richtext-border-border richtext-p-1" })
                  },
                  `c-${h}`
                ))
              },
              `r-${d}`
            );
          }) }),
          /* @__PURE__ */ Q("div", { className: "richtext-mt-2 richtext-text-center richtext-text-sm richtext-text-zinc-600", children: [
            r.rows,
            " ",
            "x",
            r.cols
          ] })
        ] })
      }
    )
  ] });
}
function rn(t) {
  function e(n) {
    t.disabled || t.editor.chain().focus().insertTable({ ...n, withHeaderRow: !1 }).run();
  }
  return /* @__PURE__ */ k(ln, { createTable: e, children: /* @__PURE__ */ k(
    Je,
    {
      icon: t == null ? void 0 : t.icon,
      tooltip: t == null ? void 0 : t.tooltip,
      tooltipOptions: t == null ? void 0 : t.tooltipOptions,
      disabled: t == null ? void 0 : t.disabled,
      color: t == null ? void 0 : t.color,
      action: t == null ? void 0 : t.action,
      isActive: t == null ? void 0 : t.isActive
    }
  ) });
}
function sn(t, e, n) {
  if (!t.doc)
    return t;
  const o = t.doc.nodeAt(e);
  if (!o || n === o.attrs.backgroundColor)
    return t;
  const l = {
    ...o.attrs,
    backgroundColor: n
  };
  return t.setNodeMarkup(e, o.type, l, o.marks);
}
function cn(t, e, n) {
  const { doc: o, selection: l } = t;
  return !o || !l || !(l instanceof b) || l.forEachCell((r, s) => {
    t = sn(t, s, n);
  }), t;
}
function Ne(t, e) {
  return ({ tr: n, state: o, dispatch: l }) => {
    const { selection: r } = o;
    return n = n.setSelection(r), n = cn(n, e, t), n.docChanged ? (l == null || l(n), !0) : !1;
  };
}
const an = Xe.create({
  name: "tableCellBackground",
  addOptions() {
    return {
      types: ["tableCell"],
      HTMLAttributes: {}
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            parseHTML: (t) => t.style.backgroundColor || "",
            renderHTML: (t) => !t.backgroundColor || t.backgroundColor === "" ? {} : {
              style: `background-color: ${t.backgroundColor}`
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTableCellBackground: (t) => Ne(t, this.options),
      unsetTableCellBackground: () => Ne("", this.options)
    };
  }
}), dn = U.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", J(this.options.HTMLAttributes, t), 0];
  }
}), un = dn.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        style: "border-bottom: 1px solid #000;"
        /* Row borders */
      }
    };
  }
}), fn = U.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((o) => parseInt(o, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", J(this.options.HTMLAttributes, t), 0];
  }
}), hn = fn.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        style: `
            border-right: 1px solid #000; 
            padding: 8px 12px;            
            &:last-child {
              border-right: none;        
            }
          `
      }
    };
  }
}), yn = /* @__PURE__ */ Qt.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        style: `
          border: 1px solid #000;         
          border-collapse: collapse;     
          width: 100%;
        `
      },
      resizable: !0,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: e, t: n }) => ({
        component: rn,
        componentProps: {
          disabled: e.isActive("table") || !1,
          icon: "Table",
          tooltip: n("editor.table.tooltip"),
          editor: e
        }
      })
    };
  },
  addExtensions() {
    return [
      un.configure(this.options.tableRow),
      en.configure(this.options.tableHeader),
      hn.configure(this.options.tableCell),
      an.configure(this.options.tableCellBackground)
    ];
  }
});
export {
  yn as Table,
  yn as default
};
