import { P as j, a as A, r as G, E as L } from "./index-DI9T3iLd.js";
import { jsxs as x, jsx as I, Fragment as F } from "react/jsx-runtime";
import { T as S, a as z, r as N, i as U, b as Z, g as $ } from "./RichTextEditor-KP2Rgcqe.js";
var E = 200, f = function() {
};
f.prototype.append = function(e) {
  return e.length ? (e = f.from(e), !this.length && e || e.length < E && this.leafAppend(e) || this.length < E && e.leafPrepend(this) || this.appendInner(e)) : this;
};
f.prototype.prepend = function(e) {
  return e.length ? f.from(e).append(this) : this;
};
f.prototype.appendInner = function(e) {
  return new R(this, e);
};
f.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? f.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
f.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
f.prototype.forEach = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
};
f.prototype.map = function(e, t, n) {
  t === void 0 && (t = 0), n === void 0 && (n = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, n), i;
};
f.from = function(e) {
  return e instanceof f ? e : e && e.length ? new H(e) : f.empty;
};
var H = /* @__PURE__ */ function(r) {
  function e(n) {
    r.call(this), this.values = n;
  }
  r && (e.__proto__ = r), e.prototype = Object.create(r && r.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var p = s; p < o; p++)
      if (i(this.values[p], l + p) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var p = s - 1; p >= o; p--)
      if (i(this.values[p], l + p) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= E)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= E)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(f);
f.empty = new H([]);
var R = /* @__PURE__ */ function(r) {
  function e(t, n) {
    r.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
  }
  return r && (e.__proto__ = r), e.prototype = Object.create(r && r.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(n) {
    return n < this.left.length ? this.left.get(n) : this.right.get(n - this.left.length);
  }, e.prototype.forEachInner = function(n, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(n, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(n, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(n, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(n, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(n, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(n, i) {
    if (n == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(n, i) : n >= s ? this.right.slice(n - s, i - s) : this.left.slice(n, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(n) {
    var i = this.right.leafAppend(n);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(n) {
    var i = this.left.leafPrepend(n);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(n) {
    return this.left.depth >= Math.max(this.right.depth, n.depth) + 1 ? new e(this.left, new e(this.right, n)) : new e(this, n);
  }, e;
}(f);
const V = 500;
class m {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let n = this.items.length;
    for (; ; n--)
      if (this.items.get(n - 1).selection) {
        --n;
        break;
      }
    let i, s;
    t && (i = this.remapping(n, this.items.length), s = i.maps.length);
    let o = e.tr, l, p, a = [], c = [];
    return this.items.forEach((h, u) => {
      if (!h.step) {
        i || (i = this.remapping(n, u + 1), s = i.maps.length), s--, c.push(h);
        return;
      }
      if (i) {
        c.push(new g(h.map));
        let d = h.step.map(i.slice(s)), w;
        d && o.maybeStep(d).doc && (w = o.mapping.maps[o.mapping.maps.length - 1], a.push(new g(w, void 0, void 0, a.length + c.length))), s--, w && i.appendMap(w, s);
      } else
        o.maybeStep(h.step);
      if (h.selection)
        return l = i ? h.selection.map(i.slice(s)) : h.selection, p = new m(this.items.slice(0, n).append(c.reverse().concat(a)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: p, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, n, i) {
    let s = [], o = this.eventCount, l = this.items, p = !i && l.length ? l.get(l.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let h = e.steps[c].invert(e.docs[c]), u = new g(e.mapping.maps[c], h, t), d;
      (d = p && p.merge(u)) && (u = d, c ? s.pop() : l = l.slice(0, l.length - 1)), s.push(u), t && (o++, t = void 0), i || (p = u);
    }
    let a = o - n.depth;
    return a > B && (l = W(l, a), o -= a), new m(l.append(s), o);
  }
  remapping(e, t) {
    let n = new G();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? n.maps.length - i.mirrorOffset : void 0;
      n.appendMap(i.map, o);
    }, e, t), n;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new m(this.items.append(e.map((t) => new g(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let n = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((u) => {
      u.selection && l--;
    }, i);
    let p = t;
    this.items.forEach((u) => {
      let d = s.getMirror(--p);
      if (d == null)
        return;
      o = Math.min(o, d);
      let w = s.maps[d];
      if (u.step) {
        let k = e.steps[d].invert(e.docs[d]), P = u.selection && u.selection.map(s.slice(p + 1, d));
        P && l++, n.push(new g(w, k, P));
      } else
        n.push(new g(w));
    }, i);
    let a = [];
    for (let u = t; u < o; u++)
      a.push(new g(s.maps[u]));
    let c = this.items.slice(0, i).append(a).append(n), h = new m(c, l);
    return h.emptyItemCount() > V && (h = h.compress(this.items.length - n.length)), h;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), n = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let p = o.step.map(t.slice(n)), a = p && p.getMap();
        if (n--, a && t.appendMap(a, n), p) {
          let c = o.selection && o.selection.map(t.slice(n));
          c && s++;
          let h = new g(a.invert(), p, c), u, d = i.length - 1;
          (u = i.length && i[d].merge(h)) ? i[d] = u : i.push(h);
        }
      } else o.map && n--;
    }, this.items.length, 0), new m(f.from(i.reverse()), s);
  }
}
m.empty = new m(f.empty, 0);
function W(r, e) {
  let t;
  return r.forEach((n, i) => {
    if (n.selection && e-- == 0)
      return t = i, !1;
  }), r.slice(t);
}
class g {
  constructor(e, t, n, i) {
    this.map = e, this.step = t, this.selection = n, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new g(t.getMap().invert(), t, this.selection);
    }
  }
}
class v {
  constructor(e, t, n, i, s) {
    this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = i, this.prevComposition = s;
  }
}
const B = 20;
function J(r, e, t, n) {
  let i = t.getMeta(y), s;
  if (i)
    return i.historyState;
  t.getMeta(Y) && (r = new v(r.done, r.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return r;
  if (o && o.getMeta(y))
    return o.getMeta(y).redo ? new v(r.done.addTransform(t, void 0, n, M(e)), r.undone, b(t.mapping.maps), r.prevTime, r.prevComposition) : new v(r.done, r.undone.addTransform(t, void 0, n, M(e)), null, r.prevTime, r.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), p = r.prevTime == 0 || !o && r.prevComposition != l && (r.prevTime < (t.time || 0) - n.newGroupDelay || !Q(t, r.prevRanges)), a = o ? C(r.prevRanges, t.mapping) : b(t.mapping.maps);
    return new v(r.done.addTransform(t, p ? e.selection.getBookmark() : void 0, n, M(e)), m.empty, a, t.time, l ?? r.prevComposition);
  } else return (s = t.getMeta("rebased")) ? new v(r.done.rebased(t, s), r.undone.rebased(t, s), C(r.prevRanges, t.mapping), r.prevTime, r.prevComposition) : new v(r.done.addMaps(t.mapping.maps), r.undone.addMaps(t.mapping.maps), C(r.prevRanges, t.mapping), r.prevTime, r.prevComposition);
}
function Q(r, e) {
  if (!e)
    return !1;
  if (!r.docChanged)
    return !0;
  let t = !1;
  return r.mapping.maps[0].forEach((n, i) => {
    for (let s = 0; s < e.length; s += 2)
      n <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function b(r) {
  let e = [];
  for (let t = r.length - 1; t >= 0 && e.length == 0; t--)
    r[t].forEach((n, i, s, o) => e.push(s, o));
  return e;
}
function C(r, e) {
  if (!r)
    return null;
  let t = [];
  for (let n = 0; n < r.length; n += 2) {
    let i = e.map(r[n], 1), s = e.map(r[n + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function X(r, e, t) {
  let n = M(e), i = y.get(e).spec.config, s = (t ? r.undone : r.done).popEvent(e, n);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? r.done : r.undone).addTransform(s.transform, e.selection.getBookmark(), i, n), p = new v(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(y, { redo: t, historyState: p });
}
let T = !1, O = null;
function M(r) {
  let e = r.plugins;
  if (O != e) {
    T = !1, O = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        T = !0;
        break;
      }
  }
  return T;
}
const y = new A("history"), Y = new A("closeHistory");
function q(r = {}) {
  return r = {
    depth: r.depth || 100,
    newGroupDelay: r.newGroupDelay || 500
  }, new j({
    key: y,
    state: {
      init() {
        return new v(m.empty, m.empty, null, 0, -1);
      },
      apply(e, t, n) {
        return J(t, n, e, r);
      }
    },
    config: r,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let n = t.inputType, i = n == "historyUndo" ? D : n == "historyRedo" ? _ : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function K(r, e) {
  return (t, n) => {
    let i = y.getState(t);
    if (!i || (r ? i.undone : i.done).eventCount == 0)
      return !1;
    if (n) {
      let s = X(i, t, r);
      s && n(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const D = K(!1, !0), _ = K(!0, !0), ee = L.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: r, dispatch: e }) => D(r, e),
      redo: () => ({ state: r, dispatch: e }) => _(r, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      q(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
});
function te(r) {
  var a;
  const {
    icon: e = void 0,
    // title = undefined,
    tooltip: t = void 0,
    // disabled = false,
    customClass: n = "",
    // color = undefined,
    // loading = false,
    // shortcutKeys = undefined,
    tooltipOptions: i = {},
    action: s = void 0,
    isActive: o = void 0,
    children: l
  } = r, p = U[e];
  return /* @__PURE__ */ x(S, { children: [
    /* @__PURE__ */ I(z, { asChild: !0, children: /* @__PURE__ */ x(
      N,
      {
        size: "sm",
        className: `richtext-w-[32px] richtext-h-[32px] ${n}`,
        disabled: o == null ? void 0 : o(),
        onClick: s,
        children: [
          p && /* @__PURE__ */ I(p, { className: "richtext-w-4 richtext-h-4" }),
          l && /* @__PURE__ */ I(F, { children: l })
        ]
      }
    ) }),
    t && /* @__PURE__ */ I(Z, { ...i, children: /* @__PURE__ */ x("div", { className: "richtext-flex richtext-flex-col richtext-items-center richtext-text-center richtext-max-w-24", children: [
      /* @__PURE__ */ I("div", { children: t }),
      !!((a = r == null ? void 0 : r.shortcutKeys) != null && a.length) && /* @__PURE__ */ I("span", { children: $(r == null ? void 0 : r.shortcutKeys) })
    ] }) })
  ] });
}
const ne = ["undo", "redo"], oe = /* @__PURE__ */ ee.extend({
  addOptions() {
    var r;
    return {
      ...(r = this.parent) == null ? void 0 : r.call(this),
      depth: 100,
      newGroupDelay: 500,
      button: ({ editor: e, t, extension: n }) => ne.map((i) => {
        var s, o;
        return {
          component: te,
          componentProps: {
            action: () => {
              i === "undo" && e.chain().focus().undo().run(), i === "redo" && e.chain().focus().redo().run();
            },
            shortcutKeys: i === "undo" ? ((s = n.options.shortcutKeys) == null ? void 0 : s[0]) ?? ["mod", "Z"] : ((o = n.options.shortcutKeys) == null ? void 0 : o[1]) ?? ["shift", "mod", "Z"],
            disabled: i === "undo" ? !e.can().undo() : !e.can().redo(),
            isActive: () => i === "undo" ? !e.can().undo() : !e.can().redo(),
            icon: i === "undo" ? "Undo2" : "Redo2",
            tooltip: t(`editor.${i}.tooltip`)
          }
        };
      })
    };
  }
});
export {
  oe as History
};
