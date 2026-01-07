import { E as ws } from "./index-DI9T3iLd.js";
import { jsxs as Es, jsx as ba } from "react/jsx-runtime";
import { useState as As, useRef as Fs } from "react";
import { a9 as Cs, aa as dn, ab as Ss, ac as Bs, A as ks, ad as Ws } from "./RichTextEditor-KP2Rgcqe.js";
import { u as Rs } from "./index-CsK90iVd.js";
var Xe = {}, Ei = "1.13.7", ya = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, Ht = Array.prototype, Ai = Object.prototype, Da = typeof Symbol < "u" ? Symbol.prototype : null, Ns = Ht.push, it = Ht.slice, Qn = Ai.toString, Os = Ai.hasOwnProperty, Mc = typeof ArrayBuffer < "u", Is = typeof DataView < "u", Ls = Array.isArray, va = Object.keys, xa = Object.create, _a = Mc && ArrayBuffer.isView, Ms = isNaN, qs = isFinite, qc = !{ toString: null }.propertyIsEnumerable("toString"), Ua = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
], Ps = Math.pow(2, 53) - 1;
function Le(e, n) {
  return n = n == null ? e.length - 1 : +n, function() {
    for (var t = Math.max(arguments.length - n, 0), r = Array(t), c = 0; c < t; c++)
      r[c] = arguments[c + n];
    switch (n) {
      case 0:
        return e.call(this, r);
      case 1:
        return e.call(this, arguments[0], r);
      case 2:
        return e.call(this, arguments[0], arguments[1], r);
    }
    var i = Array(n + 1);
    for (c = 0; c < n; c++)
      i[c] = arguments[c];
    return i[n] = r, e.apply(this, i);
  };
}
function hn(e) {
  var n = typeof e;
  return n === "function" || n === "object" && !!e;
}
function Pc(e) {
  return e === null;
}
function Fi(e) {
  return e === void 0;
}
function Ci(e) {
  return e === !0 || e === !1 || Qn.call(e) === "[object Boolean]";
}
function zc(e) {
  return !!(e && e.nodeType === 1);
}
function Ie(e) {
  var n = "[object " + e + "]";
  return function(t) {
    return Qn.call(t) === n;
  };
}
const Gt = Ie("String"), Si = Ie("Number"), jc = Ie("Date"), Xc = Ie("RegExp"), Vc = Ie("Error"), Bi = Ie("Symbol"), ki = Ie("ArrayBuffer");
var Hc = Ie("Function"), zs = ya.document && ya.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof zs != "function" && (Hc = function(e) {
  return typeof e == "function" || !1;
});
const Oe = Hc, Gc = Ie("Object");
var Zc = Is && (!/\[native code\]/.test(String(DataView)) || Gc(new DataView(new ArrayBuffer(8)))), Wi = typeof Map < "u" && Gc(/* @__PURE__ */ new Map()), js = Ie("DataView");
function Xs(e) {
  return e != null && Oe(e.getInt8) && ki(e.buffer);
}
const Jn = Zc ? Xs : js, pn = Ls || Ie("Array");
function gn(e, n) {
  return e != null && Os.call(e, n);
}
var Ui = Ie("Arguments");
(function() {
  Ui(arguments) || (Ui = function(e) {
    return gn(e, "callee");
  });
})();
const Zt = Ui;
function $c(e) {
  return !Bi(e) && qs(e) && !isNaN(parseFloat(e));
}
function Ri(e) {
  return Si(e) && Ms(e);
}
function Ni(e) {
  return function() {
    return e;
  };
}
function Yc(e) {
  return function(n) {
    var t = e(n);
    return typeof t == "number" && t >= 0 && t <= Ps;
  };
}
function Kc(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
const Pt = Kc("byteLength"), Vs = Yc(Pt);
var Hs = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function Gs(e) {
  return _a ? _a(e) && !Jn(e) : Vs(e) && Hs.test(Qn.call(e));
}
const Oi = Mc ? Gs : Ni(!1), qe = Kc("length");
function Zs(e) {
  for (var n = {}, t = e.length, r = 0; r < t; ++r) n[e[r]] = !0;
  return {
    contains: function(c) {
      return n[c] === !0;
    },
    push: function(c) {
      return n[c] = !0, e.push(c);
    }
  };
}
function Qc(e, n) {
  n = Zs(n);
  var t = Ua.length, r = e.constructor, c = Oe(r) && r.prototype || Ai, i = "constructor";
  for (gn(e, i) && !n.contains(i) && n.push(i); t--; )
    i = Ua[t], i in e && e[i] !== c[i] && !n.contains(i) && n.push(i);
}
function ke(e) {
  if (!hn(e)) return [];
  if (va) return va(e);
  var n = [];
  for (var t in e) gn(e, t) && n.push(t);
  return qc && Qc(e, n), n;
}
function Jc(e) {
  if (e == null) return !0;
  var n = qe(e);
  return typeof n == "number" && (pn(e) || Gt(e) || Zt(e)) ? n === 0 : qe(ke(e)) === 0;
}
function Ii(e, n) {
  var t = ke(n), r = t.length;
  if (e == null) return !r;
  for (var c = Object(e), i = 0; i < r; i++) {
    var a = t[i];
    if (n[a] !== c[a] || !(a in c)) return !1;
  }
  return !0;
}
function Ee(e) {
  if (e instanceof Ee) return e;
  if (!(this instanceof Ee)) return new Ee(e);
  this._wrapped = e;
}
Ee.VERSION = Ei;
Ee.prototype.value = function() {
  return this._wrapped;
};
Ee.prototype.valueOf = Ee.prototype.toJSON = Ee.prototype.value;
Ee.prototype.toString = function() {
  return String(this._wrapped);
};
function Ta(e) {
  return new Uint8Array(
    e.buffer || e,
    e.byteOffset || 0,
    Pt(e)
  );
}
var wa = "[object DataView]";
function Ti(e, n, t, r) {
  if (e === n) return e !== 0 || 1 / e === 1 / n;
  if (e == null || n == null) return !1;
  if (e !== e) return n !== n;
  var c = typeof e;
  return c !== "function" && c !== "object" && typeof n != "object" ? !1 : eu(e, n, t, r);
}
function eu(e, n, t, r) {
  e instanceof Ee && (e = e._wrapped), n instanceof Ee && (n = n._wrapped);
  var c = Qn.call(e);
  if (c !== Qn.call(n)) return !1;
  if (Zc && c == "[object Object]" && Jn(e)) {
    if (!Jn(n)) return !1;
    c = wa;
  }
  switch (c) {
    // These types are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      return "" + e == "" + n;
    case "[object Number]":
      return +e != +e ? +n != +n : +e == 0 ? 1 / +e === 1 / n : +e == +n;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +n;
    case "[object Symbol]":
      return Da.valueOf.call(e) === Da.valueOf.call(n);
    case "[object ArrayBuffer]":
    case wa:
      return eu(Ta(e), Ta(n), t, r);
  }
  var i = c === "[object Array]";
  if (!i && Oi(e)) {
    var a = Pt(e);
    if (a !== Pt(n)) return !1;
    if (e.buffer === n.buffer && e.byteOffset === n.byteOffset) return !0;
    i = !0;
  }
  if (!i) {
    if (typeof e != "object" || typeof n != "object") return !1;
    var o = e.constructor, u = n.constructor;
    if (o !== u && !(Oe(o) && o instanceof o && Oe(u) && u instanceof u) && "constructor" in e && "constructor" in n)
      return !1;
  }
  t = t || [], r = r || [];
  for (var l = t.length; l--; )
    if (t[l] === e) return r[l] === n;
  if (t.push(e), r.push(n), i) {
    if (l = e.length, l !== n.length) return !1;
    for (; l--; )
      if (!Ti(e[l], n[l], t, r)) return !1;
  } else {
    var b = ke(e), m;
    if (l = b.length, ke(n).length !== l) return !1;
    for (; l--; )
      if (m = b[l], !(gn(n, m) && Ti(e[m], n[m], t, r))) return !1;
  }
  return t.pop(), r.pop(), !0;
}
function nu(e, n) {
  return Ti(e, n);
}
function Mn(e) {
  if (!hn(e)) return [];
  var n = [];
  for (var t in e) n.push(t);
  return qc && Qc(e, n), n;
}
function Li(e) {
  var n = qe(e);
  return function(t) {
    if (t == null) return !1;
    var r = Mn(t);
    if (qe(r)) return !1;
    for (var c = 0; c < n; c++)
      if (!Oe(t[e[c]])) return !1;
    return e !== iu || !Oe(t[Mi]);
  };
}
var Mi = "forEach", tu = "has", qi = ["clear", "delete"], ru = ["get", tu, "set"], $s = qi.concat(Mi, ru), iu = qi.concat(ru), Ys = ["add"].concat(qi, Mi, tu);
const au = Wi ? Li($s) : Ie("Map"), ou = Wi ? Li(iu) : Ie("WeakMap"), cu = Wi ? Li(Ys) : Ie("Set"), uu = Ie("WeakSet");
function An(e) {
  for (var n = ke(e), t = n.length, r = Array(t), c = 0; c < t; c++)
    r[c] = e[n[c]];
  return r;
}
function su(e) {
  for (var n = ke(e), t = n.length, r = Array(t), c = 0; c < t; c++)
    r[c] = [n[c], e[n[c]]];
  return r;
}
function Pi(e) {
  for (var n = {}, t = ke(e), r = 0, c = t.length; r < c; r++)
    n[e[t[r]]] = t[r];
  return n;
}
function et(e) {
  var n = [];
  for (var t in e)
    Oe(e[t]) && n.push(t);
  return n.sort();
}
function zi(e, n) {
  return function(t) {
    var r = arguments.length;
    if (n && (t = Object(t)), r < 2 || t == null) return t;
    for (var c = 1; c < r; c++)
      for (var i = arguments[c], a = e(i), o = a.length, u = 0; u < o; u++) {
        var l = a[u];
        (!n || t[l] === void 0) && (t[l] = i[l]);
      }
    return t;
  };
}
const ji = zi(Mn), In = zi(ke), Xi = zi(Mn, !0);
function Ks() {
  return function() {
  };
}
function du(e) {
  if (!hn(e)) return {};
  if (xa) return xa(e);
  var n = Ks();
  n.prototype = e;
  var t = new n();
  return n.prototype = null, t;
}
function lu(e, n) {
  var t = du(e);
  return n && In(t, n), t;
}
function fu(e) {
  return hn(e) ? pn(e) ? e.slice() : ji({}, e) : e;
}
function hu(e, n) {
  return n(e), e;
}
function Vi(e) {
  return pn(e) ? e : [e];
}
Ee.toPath = Vi;
function at(e) {
  return Ee.toPath(e);
}
function Hi(e, n) {
  for (var t = n.length, r = 0; r < t; r++) {
    if (e == null) return;
    e = e[n[r]];
  }
  return t ? e : void 0;
}
function Gi(e, n, t) {
  var r = Hi(e, at(n));
  return Fi(r) ? t : r;
}
function pu(e, n) {
  n = at(n);
  for (var t = n.length, r = 0; r < t; r++) {
    var c = n[r];
    if (!gn(e, c)) return !1;
    e = e[c];
  }
  return !!t;
}
function $t(e) {
  return e;
}
function En(e) {
  return e = In({}, e), function(n) {
    return Ii(n, e);
  };
}
function Yt(e) {
  return e = at(e), function(n) {
    return Hi(n, e);
  };
}
function ot(e, n, t) {
  if (n === void 0) return e;
  switch (t ?? 3) {
    case 1:
      return function(r) {
        return e.call(n, r);
      };
    // The 2-argument case is omitted because we’re not using it.
    case 3:
      return function(r, c, i) {
        return e.call(n, r, c, i);
      };
    case 4:
      return function(r, c, i, a) {
        return e.call(n, r, c, i, a);
      };
  }
  return function() {
    return e.apply(n, arguments);
  };
}
function gu(e, n, t) {
  return e == null ? $t : Oe(e) ? ot(e, n, t) : hn(e) && !pn(e) ? En(e) : Yt(e);
}
function Kt(e, n) {
  return gu(e, n, 1 / 0);
}
Ee.iteratee = Kt;
function Pe(e, n, t) {
  return Ee.iteratee !== Kt ? Ee.iteratee(e, n) : gu(e, n, t);
}
function mu(e, n, t) {
  n = Pe(n, t);
  for (var r = ke(e), c = r.length, i = {}, a = 0; a < c; a++) {
    var o = r[a];
    i[o] = n(e[o], o, e);
  }
  return i;
}
function Zi() {
}
function bu(e) {
  return e == null ? Zi : function(n) {
    return Gi(e, n);
  };
}
function yu(e, n, t) {
  var r = Array(Math.max(0, e));
  n = ot(n, t, 1);
  for (var c = 0; c < e; c++) r[c] = n(c);
  return r;
}
function zt(e, n) {
  return n == null && (n = e, e = 0), e + Math.floor(Math.random() * (n - e + 1));
}
const Ln = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function Du(e) {
  var n = function(i) {
    return e[i];
  }, t = "(?:" + ke(e).join("|") + ")", r = RegExp(t), c = RegExp(t, "g");
  return function(i) {
    return i = i == null ? "" : "" + i, r.test(i) ? i.replace(c, n) : i;
  };
}
const vu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, xu = Du(vu), Qs = Pi(vu), _u = Du(Qs), Uu = Ee.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var br = /(.)^/, Js = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, ed = /\\|'|\r|\n|\u2028|\u2029/g;
function nd(e) {
  return "\\" + Js[e];
}
var td = /^\s*(\w|\$)+\s*$/;
function Tu(e, n, t) {
  !n && t && (n = t), n = Xi({}, n, Ee.templateSettings);
  var r = RegExp([
    (n.escape || br).source,
    (n.interpolate || br).source,
    (n.evaluate || br).source
  ].join("|") + "|$", "g"), c = 0, i = "__p+='";
  e.replace(r, function(l, b, m, g, h) {
    return i += e.slice(c, h).replace(ed, nd), c = h + l.length, b ? i += `'+
((__t=(` + b + `))==null?'':_.escape(__t))+
'` : m ? i += `'+
((__t=(` + m + `))==null?'':__t)+
'` : g && (i += `';
` + g + `
__p+='`), l;
  }), i += `';
`;
  var a = n.variable;
  if (a) {
    if (!td.test(a)) throw new Error(
      "variable is not a bare identifier: " + a
    );
  } else
    i = `with(obj||{}){
` + i + `}
`, a = "obj";
  i = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + i + `return __p;
`;
  var o;
  try {
    o = new Function(a, "_", i);
  } catch (l) {
    throw l.source = i, l;
  }
  var u = function(l) {
    return o.call(this, l, Ee);
  };
  return u.source = "function(" + a + `){
` + i + "}", u;
}
function wu(e, n, t) {
  n = at(n);
  var r = n.length;
  if (!r)
    return Oe(t) ? t.call(e) : t;
  for (var c = 0; c < r; c++) {
    var i = e == null ? void 0 : e[n[c]];
    i === void 0 && (i = t, c = r), e = Oe(i) ? i.call(e) : i;
  }
  return e;
}
var rd = 0;
function Eu(e) {
  var n = ++rd + "";
  return e ? e + n : n;
}
function Au(e) {
  var n = Ee(e);
  return n._chain = !0, n;
}
function Fu(e, n, t, r, c) {
  if (!(r instanceof n)) return e.apply(t, c);
  var i = du(e.prototype), a = e.apply(i, c);
  return hn(a) ? a : i;
}
var Fn = Le(function(e, n) {
  var t = Fn.placeholder, r = function() {
    for (var c = 0, i = n.length, a = Array(i), o = 0; o < i; o++)
      a[o] = n[o] === t ? arguments[c++] : n[o];
    for (; c < arguments.length; ) a.push(arguments[c++]);
    return Fu(e, r, this, this, a);
  };
  return r;
});
Fn.placeholder = Ee;
const $i = Le(function(e, n, t) {
  if (!Oe(e)) throw new TypeError("Bind must be called on a function");
  var r = Le(function(c) {
    return Fu(e, r, n, this, t.concat(c));
  });
  return r;
}), je = Yc(qe);
function Cn(e, n, t, r) {
  if (r = r || [], !n && n !== 0)
    n = 1 / 0;
  else if (n <= 0)
    return r.concat(e);
  for (var c = r.length, i = 0, a = qe(e); i < a; i++) {
    var o = e[i];
    if (je(o) && (pn(o) || Zt(o)))
      if (n > 1)
        Cn(o, n - 1, t, r), c = r.length;
      else
        for (var u = 0, l = o.length; u < l; ) r[c++] = o[u++];
    else t || (r[c++] = o);
  }
  return r;
}
const Cu = Le(function(e, n) {
  n = Cn(n, !1, !1);
  var t = n.length;
  if (t < 1) throw new Error("bindAll must be passed function names");
  for (; t--; ) {
    var r = n[t];
    e[r] = $i(e[r], e);
  }
  return e;
});
function Su(e, n) {
  var t = function(r) {
    var c = t.cache, i = "" + (n ? n.apply(this, arguments) : r);
    return gn(c, i) || (c[i] = e.apply(this, arguments)), c[i];
  };
  return t.cache = {}, t;
}
const Yi = Le(function(e, n, t) {
  return setTimeout(function() {
    return e.apply(null, t);
  }, n);
}), Bu = Fn(Yi, Ee, 1);
function ku(e, n, t) {
  var r, c, i, a, o = 0;
  t || (t = {});
  var u = function() {
    o = t.leading === !1 ? 0 : Ln(), r = null, a = e.apply(c, i), r || (c = i = null);
  }, l = function() {
    var b = Ln();
    !o && t.leading === !1 && (o = b);
    var m = n - (b - o);
    return c = this, i = arguments, m <= 0 || m > n ? (r && (clearTimeout(r), r = null), o = b, a = e.apply(c, i), r || (c = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(u, m)), a;
  };
  return l.cancel = function() {
    clearTimeout(r), o = 0, r = c = i = null;
  }, l;
}
function Wu(e, n, t) {
  var r, c, i, a, o, u = function() {
    var b = Ln() - c;
    n > b ? r = setTimeout(u, n - b) : (r = null, t || (a = e.apply(o, i)), r || (i = o = null));
  }, l = Le(function(b) {
    return o = this, i = b, c = Ln(), r || (r = setTimeout(u, n), t && (a = e.apply(o, i))), a;
  });
  return l.cancel = function() {
    clearTimeout(r), r = i = o = null;
  }, l;
}
function Ru(e, n) {
  return Fn(n, e);
}
function Qt(e) {
  return function() {
    return !e.apply(this, arguments);
  };
}
function Nu() {
  var e = arguments, n = e.length - 1;
  return function() {
    for (var t = n, r = e[n].apply(this, arguments); t--; ) r = e[t].call(this, r);
    return r;
  };
}
function Ou(e, n) {
  return function() {
    if (--e < 1)
      return n.apply(this, arguments);
  };
}
function Ki(e, n) {
  var t;
  return function() {
    return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = null), t;
  };
}
const Iu = Fn(Ki, 2);
function Qi(e, n, t) {
  n = Pe(n, t);
  for (var r = ke(e), c, i = 0, a = r.length; i < a; i++)
    if (c = r[i], n(e[c], c, e)) return c;
}
function Lu(e) {
  return function(n, t, r) {
    t = Pe(t, r);
    for (var c = qe(n), i = e > 0 ? 0 : c - 1; i >= 0 && i < c; i += e)
      if (t(n[i], i, n)) return i;
    return -1;
  };
}
const Jt = Lu(1), Ji = Lu(-1);
function ea(e, n, t, r) {
  t = Pe(t, r, 1);
  for (var c = t(n), i = 0, a = qe(e); i < a; ) {
    var o = Math.floor((i + a) / 2);
    t(e[o]) < c ? i = o + 1 : a = o;
  }
  return i;
}
function Mu(e, n, t) {
  return function(r, c, i) {
    var a = 0, o = qe(r);
    if (typeof i == "number")
      e > 0 ? a = i >= 0 ? i : Math.max(i + o, a) : o = i >= 0 ? Math.min(i + 1, o) : i + o + 1;
    else if (t && i && o)
      return i = t(r, c), r[i] === c ? i : -1;
    if (c !== c)
      return i = n(it.call(r, a, o), Ri), i >= 0 ? i + a : -1;
    for (i = e > 0 ? a : o - 1; i >= 0 && i < o; i += e)
      if (r[i] === c) return i;
    return -1;
  };
}
const na = Mu(1, Jt, ea), qu = Mu(-1, Ji);
function nt(e, n, t) {
  var r = je(e) ? Jt : Qi, c = r(e, n, t);
  if (c !== void 0 && c !== -1) return e[c];
}
function Pu(e, n) {
  return nt(e, En(n));
}
function $e(e, n, t) {
  n = ot(n, t);
  var r, c;
  if (je(e))
    for (r = 0, c = e.length; r < c; r++)
      n(e[r], r, e);
  else {
    var i = ke(e);
    for (r = 0, c = i.length; r < c; r++)
      n(e[i[r]], i[r], e);
  }
  return e;
}
function rn(e, n, t) {
  n = Pe(n, t);
  for (var r = !je(e) && ke(e), c = (r || e).length, i = Array(c), a = 0; a < c; a++) {
    var o = r ? r[a] : a;
    i[a] = n(e[o], o, e);
  }
  return i;
}
function zu(e) {
  var n = function(t, r, c, i) {
    var a = !je(t) && ke(t), o = (a || t).length, u = e > 0 ? 0 : o - 1;
    for (i || (c = t[a ? a[u] : u], u += e); u >= 0 && u < o; u += e) {
      var l = a ? a[u] : u;
      c = r(c, t[l], l, t);
    }
    return c;
  };
  return function(t, r, c, i) {
    var a = arguments.length >= 3;
    return n(t, ot(r, i, 4), c, a);
  };
}
const Nn = zu(1), jt = zu(-1);
function ln(e, n, t) {
  var r = [];
  return n = Pe(n, t), $e(e, function(c, i, a) {
    n(c, i, a) && r.push(c);
  }), r;
}
function ju(e, n, t) {
  return ln(e, Qt(Pe(n)), t);
}
function Xt(e, n, t) {
  n = Pe(n, t);
  for (var r = !je(e) && ke(e), c = (r || e).length, i = 0; i < c; i++) {
    var a = r ? r[i] : i;
    if (!n(e[a], a, e)) return !1;
  }
  return !0;
}
function Vt(e, n, t) {
  n = Pe(n, t);
  for (var r = !je(e) && ke(e), c = (r || e).length, i = 0; i < c; i++) {
    var a = r ? r[i] : i;
    if (n(e[a], a, e)) return !0;
  }
  return !1;
}
function He(e, n, t, r) {
  return je(e) || (e = An(e)), (typeof t != "number" || r) && (t = 0), na(e, n, t) >= 0;
}
const Xu = Le(function(e, n, t) {
  var r, c;
  return Oe(n) ? c = n : (n = at(n), r = n.slice(0, -1), n = n[n.length - 1]), rn(e, function(i) {
    var a = c;
    if (!a) {
      if (r && r.length && (i = Hi(i, r)), i == null) return;
      a = i[n];
    }
    return a == null ? a : a.apply(i, t);
  });
});
function er(e, n) {
  return rn(e, Yt(n));
}
function Vu(e, n) {
  return ln(e, En(n));
}
function ta(e, n, t) {
  var r = -1 / 0, c = -1 / 0, i, a;
  if (n == null || typeof n == "number" && typeof e[0] != "object" && e != null) {
    e = je(e) ? e : An(e);
    for (var o = 0, u = e.length; o < u; o++)
      i = e[o], i != null && i > r && (r = i);
  } else
    n = Pe(n, t), $e(e, function(l, b, m) {
      a = n(l, b, m), (a > c || a === -1 / 0 && r === -1 / 0) && (r = l, c = a);
    });
  return r;
}
function Hu(e, n, t) {
  var r = 1 / 0, c = 1 / 0, i, a;
  if (n == null || typeof n == "number" && typeof e[0] != "object" && e != null) {
    e = je(e) ? e : An(e);
    for (var o = 0, u = e.length; o < u; o++)
      i = e[o], i != null && i < r && (r = i);
  } else
    n = Pe(n, t), $e(e, function(l, b, m) {
      a = n(l, b, m), (a < c || a === 1 / 0 && r === 1 / 0) && (r = l, c = a);
    });
  return r;
}
var id = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function ra(e) {
  return e ? pn(e) ? it.call(e) : Gt(e) ? e.match(id) : je(e) ? rn(e, $t) : An(e) : [];
}
function ia(e, n, t) {
  if (n == null || t)
    return je(e) || (e = An(e)), e[zt(e.length - 1)];
  var r = ra(e), c = qe(r);
  n = Math.max(Math.min(n, c), 0);
  for (var i = c - 1, a = 0; a < n; a++) {
    var o = zt(a, i), u = r[a];
    r[a] = r[o], r[o] = u;
  }
  return r.slice(0, n);
}
function Gu(e) {
  return ia(e, 1 / 0);
}
function Zu(e, n, t) {
  var r = 0;
  return n = Pe(n, t), er(rn(e, function(c, i, a) {
    return {
      value: c,
      index: r++,
      criteria: n(c, i, a)
    };
  }).sort(function(c, i) {
    var a = c.criteria, o = i.criteria;
    if (a !== o) {
      if (a > o || a === void 0) return 1;
      if (a < o || o === void 0) return -1;
    }
    return c.index - i.index;
  }), "value");
}
function nr(e, n) {
  return function(t, r, c) {
    var i = n ? [[], []] : {};
    return r = Pe(r, c), $e(t, function(a, o) {
      var u = r(a, o, t);
      e(i, a, u);
    }), i;
  };
}
const $u = nr(function(e, n, t) {
  gn(e, t) ? e[t].push(n) : e[t] = [n];
}), Yu = nr(function(e, n, t) {
  e[t] = n;
}), Ku = nr(function(e, n, t) {
  gn(e, t) ? e[t]++ : e[t] = 1;
}), Qu = nr(function(e, n, t) {
  e[t ? 0 : 1].push(n);
}, !0);
function Ju(e) {
  return e == null ? 0 : je(e) ? e.length : ke(e).length;
}
function ad(e, n, t) {
  return n in t;
}
const aa = Le(function(e, n) {
  var t = {}, r = n[0];
  if (e == null) return t;
  Oe(r) ? (n.length > 1 && (r = ot(r, n[1])), n = Mn(e)) : (r = ad, n = Cn(n, !1, !1), e = Object(e));
  for (var c = 0, i = n.length; c < i; c++) {
    var a = n[c], o = e[a];
    r(o, a, e) && (t[a] = o);
  }
  return t;
}), es = Le(function(e, n) {
  var t = n[0], r;
  return Oe(t) ? (t = Qt(t), n.length > 1 && (r = n[1])) : (n = rn(Cn(n, !1, !1), String), t = function(c, i) {
    return !He(n, i);
  }), aa(e, t, r);
});
function oa(e, n, t) {
  return it.call(e, 0, Math.max(0, e.length - (n == null || t ? 1 : n)));
}
function On(e, n, t) {
  return e == null || e.length < 1 ? n == null || t ? void 0 : [] : n == null || t ? e[0] : oa(e, e.length - n);
}
function wn(e, n, t) {
  return it.call(e, n == null || t ? 1 : n);
}
function ns(e, n, t) {
  return e == null || e.length < 1 ? n == null || t ? void 0 : [] : n == null || t ? e[e.length - 1] : wn(e, Math.max(0, e.length - n));
}
function ts(e) {
  return ln(e, Boolean);
}
function rs(e, n) {
  return Cn(e, n, !1);
}
const ca = Le(function(e, n) {
  return n = Cn(n, !0, !0), ln(e, function(t) {
    return !He(n, t);
  });
}), is = Le(function(e, n) {
  return ca(e, n);
});
function tt(e, n, t, r) {
  Ci(n) || (r = t, t = n, n = !1), t != null && (t = Pe(t, r));
  for (var c = [], i = [], a = 0, o = qe(e); a < o; a++) {
    var u = e[a], l = t ? t(u, a, e) : u;
    n && !t ? ((!a || i !== l) && c.push(u), i = l) : t ? He(i, l) || (i.push(l), c.push(u)) : He(c, u) || c.push(u);
  }
  return c;
}
const as = Le(function(e) {
  return tt(Cn(e, !0, !0));
});
function os(e) {
  for (var n = [], t = arguments.length, r = 0, c = qe(e); r < c; r++) {
    var i = e[r];
    if (!He(n, i)) {
      var a;
      for (a = 1; a < t && He(arguments[a], i); a++)
        ;
      a === t && n.push(i);
    }
  }
  return n;
}
function rt(e) {
  for (var n = e && ta(e, qe).length || 0, t = Array(n), r = 0; r < n; r++)
    t[r] = er(e, r);
  return t;
}
const cs = Le(rt);
function us(e, n) {
  for (var t = {}, r = 0, c = qe(e); r < c; r++)
    n ? t[e[r]] = n[r] : t[e[r][0]] = e[r][1];
  return t;
}
function ss(e, n, t) {
  n == null && (n = e || 0, e = 0), t || (t = n < e ? -1 : 1);
  for (var r = Math.max(Math.ceil((n - e) / t), 0), c = Array(r), i = 0; i < r; i++, e += t)
    c[i] = e;
  return c;
}
function ds(e, n) {
  if (n == null || n < 1) return [];
  for (var t = [], r = 0, c = e.length; r < c; )
    t.push(it.call(e, r, r += n));
  return t;
}
function ua(e, n) {
  return e._chain ? Ee(n).chain() : n;
}
function sa(e) {
  return $e(et(e), function(n) {
    var t = Ee[n] = e[n];
    Ee.prototype[n] = function() {
      var r = [this._wrapped];
      return Ns.apply(r, arguments), ua(this, t.apply(Ee, r));
    };
  }), Ee;
}
$e(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
  var n = Ht[e];
  Ee.prototype[e] = function() {
    var t = this._wrapped;
    return t != null && (n.apply(t, arguments), (e === "shift" || e === "splice") && t.length === 0 && delete t[0]), ua(this, t);
  };
});
$e(["concat", "join", "slice"], function(e) {
  var n = Ht[e];
  Ee.prototype[e] = function() {
    var t = this._wrapped;
    return t != null && (t = n.apply(t, arguments)), ua(this, t);
  };
});
const od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Ei,
  after: Ou,
  all: Xt,
  allKeys: Mn,
  any: Vt,
  assign: In,
  before: Ki,
  bind: $i,
  bindAll: Cu,
  chain: Au,
  chunk: ds,
  clone: fu,
  collect: rn,
  compact: ts,
  compose: Nu,
  constant: Ni,
  contains: He,
  countBy: Ku,
  create: lu,
  debounce: Wu,
  default: Ee,
  defaults: Xi,
  defer: Bu,
  delay: Yi,
  detect: nt,
  difference: ca,
  drop: wn,
  each: $e,
  escape: xu,
  every: Xt,
  extend: ji,
  extendOwn: In,
  filter: ln,
  find: nt,
  findIndex: Jt,
  findKey: Qi,
  findLastIndex: Ji,
  findWhere: Pu,
  first: On,
  flatten: rs,
  foldl: Nn,
  foldr: jt,
  forEach: $e,
  functions: et,
  get: Gi,
  groupBy: $u,
  has: pu,
  head: On,
  identity: $t,
  include: He,
  includes: He,
  indexBy: Yu,
  indexOf: na,
  initial: oa,
  inject: Nn,
  intersection: os,
  invert: Pi,
  invoke: Xu,
  isArguments: Zt,
  isArray: pn,
  isArrayBuffer: ki,
  isBoolean: Ci,
  isDataView: Jn,
  isDate: jc,
  isElement: zc,
  isEmpty: Jc,
  isEqual: nu,
  isError: Vc,
  isFinite: $c,
  isFunction: Oe,
  isMap: au,
  isMatch: Ii,
  isNaN: Ri,
  isNull: Pc,
  isNumber: Si,
  isObject: hn,
  isRegExp: Xc,
  isSet: cu,
  isString: Gt,
  isSymbol: Bi,
  isTypedArray: Oi,
  isUndefined: Fi,
  isWeakMap: ou,
  isWeakSet: uu,
  iteratee: Kt,
  keys: ke,
  last: ns,
  lastIndexOf: qu,
  map: rn,
  mapObject: mu,
  matcher: En,
  matches: En,
  max: ta,
  memoize: Su,
  methods: et,
  min: Hu,
  mixin: sa,
  negate: Qt,
  noop: Zi,
  now: Ln,
  object: us,
  omit: es,
  once: Iu,
  pairs: su,
  partial: Fn,
  partition: Qu,
  pick: aa,
  pluck: er,
  property: Yt,
  propertyOf: bu,
  random: zt,
  range: ss,
  reduce: Nn,
  reduceRight: jt,
  reject: ju,
  rest: wn,
  restArguments: Le,
  result: wu,
  sample: ia,
  select: ln,
  shuffle: Gu,
  size: Ju,
  some: Vt,
  sortBy: Zu,
  sortedIndex: ea,
  tail: wn,
  take: On,
  tap: hu,
  template: Tu,
  templateSettings: Uu,
  throttle: ku,
  times: yu,
  toArray: ra,
  toPath: Vi,
  transpose: rt,
  unescape: _u,
  union: as,
  uniq: tt,
  unique: tt,
  uniqueId: Eu,
  unzip: rt,
  values: An,
  where: Vu,
  without: is,
  wrap: Ru,
  zip: cs
}, Symbol.toStringTag, { value: "Module" }));
var wi = sa(od);
wi._ = wi;
const cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Ei,
  after: Ou,
  all: Xt,
  allKeys: Mn,
  any: Vt,
  assign: In,
  before: Ki,
  bind: $i,
  bindAll: Cu,
  chain: Au,
  chunk: ds,
  clone: fu,
  collect: rn,
  compact: ts,
  compose: Nu,
  constant: Ni,
  contains: He,
  countBy: Ku,
  create: lu,
  debounce: Wu,
  default: wi,
  defaults: Xi,
  defer: Bu,
  delay: Yi,
  detect: nt,
  difference: ca,
  drop: wn,
  each: $e,
  escape: xu,
  every: Xt,
  extend: ji,
  extendOwn: In,
  filter: ln,
  find: nt,
  findIndex: Jt,
  findKey: Qi,
  findLastIndex: Ji,
  findWhere: Pu,
  first: On,
  flatten: rs,
  foldl: Nn,
  foldr: jt,
  forEach: $e,
  functions: et,
  get: Gi,
  groupBy: $u,
  has: pu,
  head: On,
  identity: $t,
  include: He,
  includes: He,
  indexBy: Yu,
  indexOf: na,
  initial: oa,
  inject: Nn,
  intersection: os,
  invert: Pi,
  invoke: Xu,
  isArguments: Zt,
  isArray: pn,
  isArrayBuffer: ki,
  isBoolean: Ci,
  isDataView: Jn,
  isDate: jc,
  isElement: zc,
  isEmpty: Jc,
  isEqual: nu,
  isError: Vc,
  isFinite: $c,
  isFunction: Oe,
  isMap: au,
  isMatch: Ii,
  isNaN: Ri,
  isNull: Pc,
  isNumber: Si,
  isObject: hn,
  isRegExp: Xc,
  isSet: cu,
  isString: Gt,
  isSymbol: Bi,
  isTypedArray: Oi,
  isUndefined: Fi,
  isWeakMap: ou,
  isWeakSet: uu,
  iteratee: Kt,
  keys: ke,
  last: ns,
  lastIndexOf: qu,
  map: rn,
  mapObject: mu,
  matcher: En,
  matches: En,
  max: ta,
  memoize: Su,
  methods: et,
  min: Hu,
  mixin: sa,
  negate: Qt,
  noop: Zi,
  now: Ln,
  object: us,
  omit: es,
  once: Iu,
  pairs: su,
  partial: Fn,
  partition: Qu,
  pick: aa,
  pluck: er,
  property: Yt,
  propertyOf: bu,
  random: zt,
  range: ss,
  reduce: Nn,
  reduceRight: jt,
  reject: ju,
  rest: wn,
  restArguments: Le,
  result: wu,
  sample: ia,
  select: ln,
  shuffle: Gu,
  size: Ju,
  some: Vt,
  sortBy: Zu,
  sortedIndex: ea,
  tail: wn,
  take: On,
  tap: hu,
  template: Tu,
  templateSettings: Uu,
  throttle: ku,
  times: yu,
  toArray: ra,
  toPath: Vi,
  transpose: rt,
  unescape: _u,
  union: as,
  uniq: tt,
  unique: tt,
  uniqueId: Eu,
  unzip: rt,
  values: An,
  where: Vu,
  without: is,
  wrap: Ru,
  zip: cs
}, Symbol.toStringTag, { value: "Module" })), Be = /* @__PURE__ */ Cs(cd);
var ct = {}, Ve = {}, yr = { exports: {} }, ut = { exports: {} }, Ea;
function qn() {
  if (Ea) return ut.exports;
  Ea = 1;
  var e = /* @__PURE__ */ function() {
    return this === void 0;
  }();
  if (e)
    ut.exports = {
      freeze: Object.freeze,
      defineProperty: Object.defineProperty,
      getDescriptor: Object.getOwnPropertyDescriptor,
      keys: Object.keys,
      names: Object.getOwnPropertyNames,
      getPrototypeOf: Object.getPrototypeOf,
      isArray: Array.isArray,
      isES5: e,
      propertyIsWritable: function(b, m) {
        var g = Object.getOwnPropertyDescriptor(b, m);
        return !!(!g || g.writable || g.set);
      }
    };
  else {
    var n = {}.hasOwnProperty, t = {}.toString, r = {}.constructor.prototype, c = function(b) {
      var m = [];
      for (var g in b)
        n.call(b, g) && m.push(g);
      return m;
    }, i = function(b, m) {
      return { value: b[m] };
    }, a = function(b, m, g) {
      return b[m] = g.value, b;
    }, o = function(b) {
      return b;
    }, u = function(b) {
      try {
        return Object(b).constructor.prototype;
      } catch {
        return r;
      }
    }, l = function(b) {
      try {
        return t.call(b) === "[object Array]";
      } catch {
        return !1;
      }
    };
    ut.exports = {
      isArray: l,
      keys: c,
      names: c,
      defineProperty: a,
      getDescriptor: i,
      freeze: o,
      getPrototypeOf: u,
      isES5: e,
      propertyIsWritable: function() {
        return !0;
      }
    };
  }
  return ut.exports;
}
var zn, Aa;
function Fe() {
  if (Aa) return zn;
  Aa = 1;
  var e = qn(), n = typeof navigator > "u", t = { e: {} }, r, c = typeof self < "u" ? self : typeof window < "u" ? window : typeof dn < "u" ? dn : zn !== void 0 ? zn : null;
  function i() {
    try {
      var k = r;
      return r = null, k.apply(this, arguments);
    } catch (re) {
      return t.e = re, t;
    }
  }
  function a(k) {
    return r = k, i;
  }
  var o = function(k, re) {
    var ae = {}.hasOwnProperty;
    function J() {
      this.constructor = k, this.constructor$ = re;
      for (var ce in re.prototype)
        ae.call(re.prototype, ce) && ce.charAt(ce.length - 1) !== "$" && (this[ce + "$"] = re.prototype[ce]);
    }
    return J.prototype = re.prototype, k.prototype = new J(), k.prototype;
  };
  function u(k) {
    return k == null || k === !0 || k === !1 || typeof k == "string" || typeof k == "number";
  }
  function l(k) {
    return typeof k == "function" || typeof k == "object" && k !== null;
  }
  function b(k) {
    return u(k) ? new Error(U(k)) : k;
  }
  function m(k, re) {
    var ae = k.length, J = new Array(ae + 1), ce;
    for (ce = 0; ce < ae; ++ce)
      J[ce] = k[ce];
    return J[ce] = re, J;
  }
  function g(k, re, ae) {
    if (e.isES5) {
      var J = Object.getOwnPropertyDescriptor(k, re);
      if (J != null)
        return J.get == null && J.set == null ? J.value : ae;
    } else
      return {}.hasOwnProperty.call(k, re) ? k[re] : void 0;
  }
  function h(k, re, ae) {
    if (u(k)) return k;
    var J = {
      value: ae,
      configurable: !0,
      enumerable: !1,
      writable: !0
    };
    return e.defineProperty(k, re, J), k;
  }
  function y(k) {
    throw k;
  }
  var f = function() {
    var k = [
      Array.prototype,
      Object.prototype,
      Function.prototype
    ], re = function(ce) {
      for (var fe = 0; fe < k.length; ++fe)
        if (k[fe] === ce)
          return !0;
      return !1;
    };
    if (e.isES5) {
      var ae = Object.getOwnPropertyNames;
      return function(ce) {
        for (var fe = [], le = /* @__PURE__ */ Object.create(null); ce != null && !re(ce); ) {
          var he;
          try {
            he = ae(ce);
          } catch {
            return fe;
          }
          for (var ge = 0; ge < he.length; ++ge) {
            var be = he[ge];
            if (!le[be]) {
              le[be] = !0;
              var Te = Object.getOwnPropertyDescriptor(ce, be);
              Te != null && Te.get == null && Te.set == null && fe.push(be);
            }
          }
          ce = e.getPrototypeOf(ce);
        }
        return fe;
      };
    } else {
      var J = {}.hasOwnProperty;
      return function(ce) {
        if (re(ce)) return [];
        var fe = [];
        e: for (var le in ce)
          if (J.call(ce, le))
            fe.push(le);
          else {
            for (var he = 0; he < k.length; ++he)
              if (J.call(k[he], le))
                continue e;
            fe.push(le);
          }
        return fe;
      };
    }
  }(), s = /this\s*\.\s*\S+\s*=/;
  function p(k) {
    try {
      if (typeof k == "function") {
        var re = e.names(k.prototype), ae = e.isES5 && re.length > 1, J = re.length > 0 && !(re.length === 1 && re[0] === "constructor"), ce = s.test(k + "") && e.names(k).length > 0;
        if (ae || J || ce)
          return !0;
      }
      return !1;
    } catch {
      return !1;
    }
  }
  function d(k) {
    return k;
  }
  var D = /^[a-z$_][a-z$_0-9]*$/i;
  function w(k) {
    return D.test(k);
  }
  function _(k, re, ae) {
    for (var J = new Array(k), ce = 0; ce < k; ++ce)
      J[ce] = re + ce + ae;
    return J;
  }
  function U(k) {
    try {
      return k + "";
    } catch {
      return "[no string representation]";
    }
  }
  function E(k) {
    return k !== null && typeof k == "object" && typeof k.message == "string" && typeof k.name == "string";
  }
  function S(k) {
    try {
      h(k, "isOperational", !0);
    } catch {
    }
  }
  function A(k) {
    return k == null ? !1 : k instanceof Error.__BluebirdErrorTypes__.OperationalError || k.isOperational === !0;
  }
  function I(k) {
    return E(k) && e.propertyIsWritable(k, "stack");
  }
  var Z = function() {
    return "stack" in new Error() ? function(k) {
      return I(k) ? k : new Error(U(k));
    } : function(k) {
      if (I(k)) return k;
      try {
        throw new Error(U(k));
      } catch (re) {
        return re;
      }
    };
  }();
  function T(k) {
    return {}.toString.call(k);
  }
  function R(k, re, ae) {
    for (var J = e.names(k), ce = 0; ce < J.length; ++ce) {
      var fe = J[ce];
      if (ae(fe))
        try {
          e.defineProperty(re, fe, e.getDescriptor(k, fe));
        } catch {
        }
    }
  }
  var x = function(k) {
    return e.isArray(k) ? k : null;
  };
  if (typeof Symbol < "u" && Symbol.iterator) {
    var z = typeof Array.from == "function" ? function(k) {
      return Array.from(k);
    } : function(k) {
      for (var re = [], ae = k[Symbol.iterator](), J; !(J = ae.next()).done; )
        re.push(J.value);
      return re;
    };
    x = function(k) {
      return e.isArray(k) ? k : k != null && typeof k[Symbol.iterator] == "function" ? z(k) : null;
    };
  }
  var W = typeof process < "u" && T(process).toLowerCase() === "[object process]", O = typeof process < "u" && typeof process.env < "u";
  function G(k) {
    return O ? process.env[k] : void 0;
  }
  function q() {
    if (typeof Promise == "function")
      try {
        var k = new Promise(function() {
        });
        if ({}.toString.call(k) === "[object Promise]")
          return Promise;
      } catch {
      }
  }
  function Q(k, re) {
    return k.bind(re);
  }
  var L = {
    isClass: p,
    isIdentifier: w,
    inheritedDataKeys: f,
    getDataPropertyOrDefault: g,
    thrower: y,
    isArray: e.isArray,
    asArray: x,
    notEnumerableProp: h,
    isPrimitive: u,
    isObject: l,
    isError: E,
    canEvaluate: n,
    errorObj: t,
    tryCatch: a,
    inherits: o,
    withAppended: m,
    maybeWrapAsError: b,
    toFastProperties: d,
    filledRange: _,
    toString: U,
    canAttachTrace: I,
    ensureErrorObject: Z,
    originatesFromRejection: A,
    markAsOriginatingFromRejection: S,
    classString: T,
    copyDescriptors: R,
    hasDevTools: typeof chrome < "u" && chrome && typeof chrome.loadTimes == "function",
    isNode: W,
    hasEnvVariables: O,
    env: G,
    global: c,
    getNativePromise: q,
    domainBind: Q
  };
  L.isRecentNode = L.isNode && function() {
    var k = process.versions.node.split(".").map(Number);
    return k[0] === 0 && k[1] > 10 || k[0] > 0;
  }(), L.isNode && L.toFastProperties(process);
  try {
    throw new Error();
  } catch (k) {
    L.lastLineError = k;
  }
  return zn = L, zn;
}
var st = { exports: {} }, Dr, Fa;
function ud() {
  if (Fa) return Dr;
  Fa = 1;
  var e = Fe(), n, t = function() {
    throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
  }, r = e.getNativePromise();
  if (e.isNode && typeof MutationObserver > "u") {
    var c = dn.setImmediate, i = process.nextTick;
    n = e.isRecentNode ? function(o) {
      c.call(dn, o);
    } : function(o) {
      i.call(process, o);
    };
  } else if (typeof r == "function" && typeof r.resolve == "function") {
    var a = r.resolve();
    n = function(o) {
      a.then(o);
    };
  } else typeof MutationObserver < "u" && !(typeof window < "u" && window.navigator && (window.navigator.standalone || window.cordova)) ? n = function() {
    var o = document.createElement("div"), u = { attributes: !0 }, l = !1, b = document.createElement("div"), m = new MutationObserver(function() {
      o.classList.toggle("foo"), l = !1;
    });
    m.observe(b, u);
    var g = function() {
      l || (l = !0, b.classList.toggle("foo"));
    };
    return function(y) {
      var f = new MutationObserver(function() {
        f.disconnect(), y();
      });
      f.observe(o, u), g();
    };
  }() : typeof setImmediate < "u" ? n = function(o) {
    setImmediate(o);
  } : typeof setTimeout < "u" ? n = function(o) {
    setTimeout(o, 0);
  } : n = t;
  return Dr = n, Dr;
}
var vr, Ca;
function sd() {
  if (Ca) return vr;
  Ca = 1;
  function e(t, r, c, i, a) {
    for (var o = 0; o < a; ++o)
      c[o + i] = t[o + r], t[o + r] = void 0;
  }
  function n(t) {
    this._capacity = t, this._length = 0, this._front = 0;
  }
  return n.prototype._willBeOverCapacity = function(t) {
    return this._capacity < t;
  }, n.prototype._pushOne = function(t) {
    var r = this.length();
    this._checkCapacity(r + 1);
    var c = this._front + r & this._capacity - 1;
    this[c] = t, this._length = r + 1;
  }, n.prototype.push = function(t, r, c) {
    var i = this.length() + 3;
    if (this._willBeOverCapacity(i)) {
      this._pushOne(t), this._pushOne(r), this._pushOne(c);
      return;
    }
    var a = this._front + i - 3;
    this._checkCapacity(i);
    var o = this._capacity - 1;
    this[a + 0 & o] = t, this[a + 1 & o] = r, this[a + 2 & o] = c, this._length = i;
  }, n.prototype.shift = function() {
    var t = this._front, r = this[t];
    return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, r;
  }, n.prototype.length = function() {
    return this._length;
  }, n.prototype._checkCapacity = function(t) {
    this._capacity < t && this._resizeTo(this._capacity << 1);
  }, n.prototype._resizeTo = function(t) {
    var r = this._capacity;
    this._capacity = t;
    var c = this._front, i = this._length, a = c + i & r - 1;
    e(this, 0, this, r, a);
  }, vr = n, vr;
}
var Sa;
function dd() {
  if (Sa) return st.exports;
  Sa = 1;
  var e;
  try {
    throw new Error();
  } catch (u) {
    e = u;
  }
  var n = ud(), t = sd(), r = Fe();
  function c() {
    this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new t(16), this._normalQueue = new t(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
    var u = this;
    this.drainQueues = function() {
      u._drainQueues();
    }, this._schedule = n;
  }
  c.prototype.setScheduler = function(u) {
    var l = this._schedule;
    return this._schedule = u, this._customScheduler = !0, l;
  }, c.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
  }, c.prototype.enableTrampoline = function() {
    this._trampolineEnabled = !0;
  }, c.prototype.disableTrampolineIfNecessary = function() {
    r.hasDevTools && (this._trampolineEnabled = !1);
  }, c.prototype.haveItemsQueued = function() {
    return this._isTickUsed || this._haveDrainedQueues;
  }, c.prototype.fatalError = function(u, l) {
    l ? (process.stderr.write("Fatal " + (u instanceof Error ? u.stack : u) + `
`), process.exit(2)) : this.throwLater(u);
  }, c.prototype.throwLater = function(u, l) {
    if (arguments.length === 1 && (l = u, u = function() {
      throw l;
    }), typeof setTimeout < "u")
      setTimeout(function() {
        u(l);
      }, 0);
    else try {
      this._schedule(function() {
        u(l);
      });
    } catch {
      throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
    }
  };
  function i(u, l, b) {
    this._lateQueue.push(u, l, b), this._queueTick();
  }
  function a(u, l, b) {
    this._normalQueue.push(u, l, b), this._queueTick();
  }
  function o(u) {
    this._normalQueue._pushOne(u), this._queueTick();
  }
  return r.hasDevTools ? (c.prototype.invokeLater = function(u, l, b) {
    this._trampolineEnabled ? i.call(this, u, l, b) : this._schedule(function() {
      setTimeout(function() {
        u.call(l, b);
      }, 100);
    });
  }, c.prototype.invoke = function(u, l, b) {
    this._trampolineEnabled ? a.call(this, u, l, b) : this._schedule(function() {
      u.call(l, b);
    });
  }, c.prototype.settlePromises = function(u) {
    this._trampolineEnabled ? o.call(this, u) : this._schedule(function() {
      u._settlePromises();
    });
  }) : (c.prototype.invokeLater = i, c.prototype.invoke = a, c.prototype.settlePromises = o), c.prototype._drainQueue = function(u) {
    for (; u.length() > 0; ) {
      var l = u.shift();
      if (typeof l != "function") {
        l._settlePromises();
        continue;
      }
      var b = u.shift(), m = u.shift();
      l.call(b, m);
    }
  }, c.prototype._drainQueues = function() {
    this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
  }, c.prototype._queueTick = function() {
    this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
  }, c.prototype._reset = function() {
    this._isTickUsed = !1;
  }, st.exports = c, st.exports.firstLineError = e, st.exports;
}
var xr, Ba;
function fn() {
  if (Ba) return xr;
  Ba = 1;
  var e = qn(), n = e.freeze, t = Fe(), r = t.inherits, c = t.notEnumerableProp;
  function i(p, d) {
    function D(w) {
      if (!(this instanceof D)) return new D(w);
      c(
        this,
        "message",
        typeof w == "string" ? w : d
      ), c(this, "name", p), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
    }
    return r(D, Error), D;
  }
  var a, o, u = i("Warning", "warning"), l = i("CancellationError", "cancellation error"), b = i("TimeoutError", "timeout error"), m = i("AggregateError", "aggregate error");
  try {
    a = TypeError, o = RangeError;
  } catch {
    a = i("TypeError", "type error"), o = i("RangeError", "range error");
  }
  for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), h = 0; h < g.length; ++h)
    typeof Array.prototype[g[h]] == "function" && (m.prototype[g[h]] = Array.prototype[g[h]]);
  e.defineProperty(m.prototype, "length", {
    value: 0,
    configurable: !1,
    writable: !0,
    enumerable: !0
  }), m.prototype.isOperational = !0;
  var y = 0;
  m.prototype.toString = function() {
    var p = Array(y * 4 + 1).join(" "), d = `
` + p + `AggregateError of:
`;
    y++, p = Array(y * 4 + 1).join(" ");
    for (var D = 0; D < this.length; ++D) {
      for (var w = this[D] === this ? "[Circular AggregateError]" : this[D] + "", _ = w.split(`
`), U = 0; U < _.length; ++U)
        _[U] = p + _[U];
      w = _.join(`
`), d += w + `
`;
    }
    return y--, d;
  };
  function f(p) {
    if (!(this instanceof f))
      return new f(p);
    c(this, "name", "OperationalError"), c(this, "message", p), this.cause = p, this.isOperational = !0, p instanceof Error ? (c(this, "message", p.message), c(this, "stack", p.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  r(f, Error);
  var s = Error.__BluebirdErrorTypes__;
  return s || (s = n({
    CancellationError: l,
    TimeoutError: b,
    OperationalError: f,
    RejectionError: f,
    AggregateError: m
  }), e.defineProperty(Error, "__BluebirdErrorTypes__", {
    value: s,
    writable: !1,
    enumerable: !1,
    configurable: !1
  })), xr = {
    Error,
    TypeError: a,
    RangeError: o,
    CancellationError: s.CancellationError,
    OperationalError: s.OperationalError,
    TimeoutError: s.TimeoutError,
    AggregateError: s.AggregateError,
    Warning: u
  }, xr;
}
var _r, ka;
function ld() {
  return ka || (ka = 1, _r = function(e, n) {
    var t = Fe(), r = t.errorObj, c = t.isObject;
    function i(m, g) {
      if (c(m)) {
        if (m instanceof e) return m;
        var h = o(m);
        if (h === r) {
          g && g._pushContext();
          var y = e.reject(h.e);
          return g && g._popContext(), y;
        } else if (typeof h == "function") {
          if (l(m)) {
            var y = new e(n);
            return m._then(
              y._fulfill,
              y._reject,
              void 0,
              y,
              null
            ), y;
          }
          return b(m, h, g);
        }
      }
      return m;
    }
    function a(m) {
      return m.then;
    }
    function o(m) {
      try {
        return a(m);
      } catch (g) {
        return r.e = g, r;
      }
    }
    var u = {}.hasOwnProperty;
    function l(m) {
      try {
        return u.call(m, "_promise0");
      } catch {
        return !1;
      }
    }
    function b(m, g, h) {
      var y = new e(n), f = y;
      h && h._pushContext(), y._captureStackTrace(), h && h._popContext();
      var s = !0, p = t.tryCatch(g).call(m, d, D);
      s = !1, y && p === r && (y._rejectCallback(p.e, !0, !0), y = null);
      function d(w) {
        y && (y._resolveCallback(w), y = null);
      }
      function D(w) {
        y && (y._rejectCallback(w, s, !0), y = null);
      }
      return f;
    }
    return i;
  }), _r;
}
var Ur, Wa;
function fd() {
  return Wa || (Wa = 1, Ur = function(e, n, t, r, c) {
    var i = Fe();
    i.isArray;
    function a(u) {
      switch (u) {
        case -2:
          return [];
        case -3:
          return {};
      }
    }
    function o(u) {
      var l = this._promise = new e(n);
      u instanceof e && l._propagateFrom(u, 3), l._setOnCancel(this), this._values = u, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
    }
    return i.inherits(o, c), o.prototype.length = function() {
      return this._length;
    }, o.prototype.promise = function() {
      return this._promise;
    }, o.prototype._init = function u(l, b) {
      var m = t(this._values, this._promise);
      if (m instanceof e) {
        m = m._target();
        var g = m._bitField;
        if (this._values = m, (g & 50397184) === 0)
          return this._promise._setAsyncGuaranteed(), m._then(
            u,
            this._reject,
            void 0,
            this,
            b
          );
        if ((g & 33554432) !== 0)
          m = m._value();
        else return (g & 16777216) !== 0 ? this._reject(m._reason()) : this._cancel();
      }
      if (m = i.asArray(m), m === null) {
        var h = r(
          "expecting an array or an iterable object but got " + i.classString(m)
        ).reason();
        this._promise._rejectCallback(h, !1);
        return;
      }
      if (m.length === 0) {
        b === -5 ? this._resolveEmptyArray() : this._resolve(a(b));
        return;
      }
      this._iterate(m);
    }, o.prototype._iterate = function(u) {
      var l = this.getActualLength(u.length);
      this._length = l, this._values = this.shouldCopyValues() ? new Array(l) : this._values;
      for (var b = this._promise, m = !1, g = null, h = 0; h < l; ++h) {
        var y = t(u[h], b);
        y instanceof e ? (y = y._target(), g = y._bitField) : g = null, m ? g !== null && y.suppressUnhandledRejections() : g !== null ? (g & 50397184) === 0 ? (y._proxy(this, h), this._values[h] = y) : (g & 33554432) !== 0 ? m = this._promiseFulfilled(y._value(), h) : (g & 16777216) !== 0 ? m = this._promiseRejected(y._reason(), h) : m = this._promiseCancelled(h) : m = this._promiseFulfilled(y, h);
      }
      m || b._setAsyncGuaranteed();
    }, o.prototype._isResolved = function() {
      return this._values === null;
    }, o.prototype._resolve = function(u) {
      this._values = null, this._promise._fulfill(u);
    }, o.prototype._cancel = function() {
      this._isResolved() || !this._promise._isCancellable() || (this._values = null, this._promise._cancel());
    }, o.prototype._reject = function(u) {
      this._values = null, this._promise._rejectCallback(u, !1);
    }, o.prototype._promiseFulfilled = function(u, l) {
      this._values[l] = u;
      var b = ++this._totalResolved;
      return b >= this._length ? (this._resolve(this._values), !0) : !1;
    }, o.prototype._promiseCancelled = function() {
      return this._cancel(), !0;
    }, o.prototype._promiseRejected = function(u) {
      return this._totalResolved++, this._reject(u), !0;
    }, o.prototype._resultCancelled = function() {
      if (!this._isResolved()) {
        var u = this._values;
        if (this._cancel(), u instanceof e)
          u.cancel();
        else
          for (var l = 0; l < u.length; ++l)
            u[l] instanceof e && u[l].cancel();
      }
    }, o.prototype.shouldCopyValues = function() {
      return !0;
    }, o.prototype.getActualLength = function(u) {
      return u;
    }, o;
  }), Ur;
}
var Tr, Ra;
function hd() {
  return Ra || (Ra = 1, Tr = function(e) {
    var n = !1, t = [];
    e.prototype._promiseCreated = function() {
    }, e.prototype._pushContext = function() {
    }, e.prototype._popContext = function() {
      return null;
    }, e._peekContext = e.prototype._peekContext = function() {
    };
    function r() {
      this._trace = new r.CapturedTrace(i());
    }
    r.prototype._pushContext = function() {
      this._trace !== void 0 && (this._trace._promiseCreated = null, t.push(this._trace));
    }, r.prototype._popContext = function() {
      if (this._trace !== void 0) {
        var a = t.pop(), o = a._promiseCreated;
        return a._promiseCreated = null, o;
      }
      return null;
    };
    function c() {
      if (n) return new r();
    }
    function i() {
      var a = t.length - 1;
      if (a >= 0)
        return t[a];
    }
    return r.CapturedTrace = null, r.create = c, r.deactivateLongStackTraces = function() {
    }, r.activateLongStackTraces = function() {
      var a = e.prototype._pushContext, o = e.prototype._popContext, u = e._peekContext, l = e.prototype._peekContext, b = e.prototype._promiseCreated;
      r.deactivateLongStackTraces = function() {
        e.prototype._pushContext = a, e.prototype._popContext = o, e._peekContext = u, e.prototype._peekContext = l, e.prototype._promiseCreated = b, n = !1;
      }, n = !0, e.prototype._pushContext = r.prototype._pushContext, e.prototype._popContext = r.prototype._popContext, e._peekContext = e.prototype._peekContext = i, e.prototype._promiseCreated = function() {
        var m = this._peekContext();
        m && m._promiseCreated == null && (m._promiseCreated = this);
      };
    }, r;
  }), Tr;
}
var wr, Na;
function pd() {
  return Na || (Na = 1, wr = function(e, n) {
    var t = e._getDomain, r = e._async, c = fn().Warning, i = Fe(), a = i.canAttachTrace, o, u, l = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, b = /\((?:timers\.js):\d+:\d+\)/, m = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, g = null, h = null, y = !1, f, s = !!(i.env("BLUEBIRD_DEBUG") != 0 && (i.env("BLUEBIRD_DEBUG") || i.env("NODE_ENV") === "development")), p = !!(i.env("BLUEBIRD_WARNINGS") != 0 && (s || i.env("BLUEBIRD_WARNINGS"))), d = !!(i.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (s || i.env("BLUEBIRD_LONG_STACK_TRACES"))), D = i.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (p || !!i.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
    e.prototype.suppressUnhandledRejections = function() {
      var M = this._target();
      M._bitField = M._bitField & -1048577 | 524288;
    }, e.prototype._ensurePossibleRejectionHandled = function() {
      (this._bitField & 524288) === 0 && (this._setRejectionIsUnhandled(), r.invokeLater(this._notifyUnhandledRejection, this, void 0));
    }, e.prototype._notifyUnhandledRejectionIsHandled = function() {
      Te(
        "rejectionHandled",
        o,
        void 0,
        this
      );
    }, e.prototype._setReturnedNonUndefined = function() {
      this._bitField = this._bitField | 268435456;
    }, e.prototype._returnedNonUndefined = function() {
      return (this._bitField & 268435456) !== 0;
    }, e.prototype._notifyUnhandledRejection = function() {
      if (this._isRejectionUnhandled()) {
        var M = this._settledValue();
        this._setUnhandledRejectionIsNotified(), Te(
          "unhandledRejection",
          u,
          M,
          this
        );
      }
    }, e.prototype._setUnhandledRejectionIsNotified = function() {
      this._bitField = this._bitField | 262144;
    }, e.prototype._unsetUnhandledRejectionIsNotified = function() {
      this._bitField = this._bitField & -262145;
    }, e.prototype._isUnhandledRejectionNotified = function() {
      return (this._bitField & 262144) > 0;
    }, e.prototype._setRejectionIsUnhandled = function() {
      this._bitField = this._bitField | 1048576;
    }, e.prototype._unsetRejectionIsUnhandled = function() {
      this._bitField = this._bitField & -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
    }, e.prototype._isRejectionUnhandled = function() {
      return (this._bitField & 1048576) > 0;
    }, e.prototype._warn = function(M, X, Y) {
      return ae(M, X, Y || this);
    }, e.onPossiblyUnhandledRejection = function(M) {
      var X = t();
      u = typeof M == "function" ? X === null ? M : i.domainBind(X, M) : void 0;
    }, e.onUnhandledRejectionHandled = function(M) {
      var X = t();
      o = typeof M == "function" ? X === null ? M : i.domainBind(X, M) : void 0;
    };
    var w = function() {
    };
    e.longStackTraces = function() {
      if (r.haveItemsQueued() && !H.longStackTraces)
        throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
      if (!H.longStackTraces && $()) {
        var M = e.prototype._captureStackTrace, X = e.prototype._attachExtraTrace;
        H.longStackTraces = !0, w = function() {
          if (r.haveItemsQueued() && !H.longStackTraces)
            throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
          e.prototype._captureStackTrace = M, e.prototype._attachExtraTrace = X, n.deactivateLongStackTraces(), r.enableTrampoline(), H.longStackTraces = !1;
        }, e.prototype._captureStackTrace = Q, e.prototype._attachExtraTrace = L, n.activateLongStackTraces(), r.disableTrampolineIfNecessary();
      }
    }, e.hasLongStackTraces = function() {
      return H.longStackTraces && $();
    };
    var _ = function() {
      try {
        if (typeof CustomEvent == "function") {
          var M = new CustomEvent("CustomEvent");
          return i.global.dispatchEvent(M), function(X, Y) {
            var te = new CustomEvent(X.toLowerCase(), {
              detail: Y,
              cancelable: !0
            });
            return !i.global.dispatchEvent(te);
          };
        } else if (typeof Event == "function") {
          var M = new Event("CustomEvent");
          return i.global.dispatchEvent(M), function(Y, te) {
            var ue = new Event(Y.toLowerCase(), {
              cancelable: !0
            });
            return ue.detail = te, !i.global.dispatchEvent(ue);
          };
        } else {
          var M = document.createEvent("CustomEvent");
          return M.initCustomEvent("testingtheevent", !1, !0, {}), i.global.dispatchEvent(M), function(Y, te) {
            var ue = document.createEvent("CustomEvent");
            return ue.initCustomEvent(
              Y.toLowerCase(),
              !1,
              !0,
              te
            ), !i.global.dispatchEvent(ue);
          };
        }
      } catch {
      }
      return function() {
        return !1;
      };
    }(), U = function() {
      return i.isNode ? function() {
        return process.emit.apply(process, arguments);
      } : i.global ? function(M) {
        var X = "on" + M.toLowerCase(), Y = i.global[X];
        return Y ? (Y.apply(i.global, [].slice.call(arguments, 1)), !0) : !1;
      } : function() {
        return !1;
      };
    }();
    function E(M, X) {
      return { promise: X };
    }
    var S = {
      promiseCreated: E,
      promiseFulfilled: E,
      promiseRejected: E,
      promiseResolved: E,
      promiseCancelled: E,
      promiseChained: function(M, X, Y) {
        return { promise: X, child: Y };
      },
      warning: function(M, X) {
        return { warning: X };
      },
      unhandledRejection: function(M, X, Y) {
        return { reason: X, promise: Y };
      },
      rejectionHandled: E
    }, A = function(M) {
      var X = !1;
      try {
        X = U.apply(null, arguments);
      } catch (te) {
        r.throwLater(te), X = !0;
      }
      var Y = !1;
      try {
        Y = _(
          M,
          S[M].apply(null, arguments)
        );
      } catch (te) {
        r.throwLater(te), Y = !0;
      }
      return Y || X;
    };
    e.config = function(M) {
      if (M = Object(M), "longStackTraces" in M && (M.longStackTraces ? e.longStackTraces() : !M.longStackTraces && e.hasLongStackTraces() && w()), "warnings" in M) {
        var X = M.warnings;
        H.warnings = !!X, D = H.warnings, i.isObject(X) && "wForgottenReturn" in X && (D = !!X.wForgottenReturn);
      }
      if ("cancellation" in M && M.cancellation && !H.cancellation) {
        if (r.haveItemsQueued())
          throw new Error(
            "cannot enable cancellation after promises are in use"
          );
        e.prototype._clearCancellationData = z, e.prototype._propagateFrom = W, e.prototype._onCancel = R, e.prototype._setOnCancel = x, e.prototype._attachCancellationCallback = T, e.prototype._execute = Z, G = W, H.cancellation = !0;
      }
      return "monitoring" in M && (M.monitoring && !H.monitoring ? (H.monitoring = !0, e.prototype._fireEvent = A) : !M.monitoring && H.monitoring && (H.monitoring = !1, e.prototype._fireEvent = I)), e;
    };
    function I() {
      return !1;
    }
    e.prototype._fireEvent = I, e.prototype._execute = function(M, X, Y) {
      try {
        M(X, Y);
      } catch (te) {
        return te;
      }
    }, e.prototype._onCancel = function() {
    }, e.prototype._setOnCancel = function(M) {
    }, e.prototype._attachCancellationCallback = function(M) {
    }, e.prototype._captureStackTrace = function() {
    }, e.prototype._attachExtraTrace = function() {
    }, e.prototype._clearCancellationData = function() {
    }, e.prototype._propagateFrom = function(M, X) {
    };
    function Z(M, X, Y) {
      var te = this;
      try {
        M(X, Y, function(ue) {
          if (typeof ue != "function")
            throw new TypeError("onCancel must be a function, got: " + i.toString(ue));
          te._attachCancellationCallback(ue);
        });
      } catch (ue) {
        return ue;
      }
    }
    function T(M) {
      if (!this._isCancellable()) return this;
      var X = this._onCancel();
      X !== void 0 ? i.isArray(X) ? X.push(M) : this._setOnCancel([X, M]) : this._setOnCancel(M);
    }
    function R() {
      return this._onCancelField;
    }
    function x(M) {
      this._onCancelField = M;
    }
    function z() {
      this._cancellationParent = void 0, this._onCancelField = void 0;
    }
    function W(M, X) {
      if ((X & 1) !== 0) {
        this._cancellationParent = M;
        var Y = M._branchesRemainingToCancel;
        Y === void 0 && (Y = 0), M._branchesRemainingToCancel = Y + 1;
      }
      (X & 2) !== 0 && M._isBound() && this._setBoundTo(M._boundTo);
    }
    function O(M, X) {
      (X & 2) !== 0 && M._isBound() && this._setBoundTo(M._boundTo);
    }
    var G = O;
    function q() {
      var M = this._boundTo;
      return M !== void 0 && M instanceof e ? M.isFulfilled() ? M.value() : void 0 : M;
    }
    function Q() {
      this._trace = new ie(this._peekContext());
    }
    function L(M, X) {
      if (a(M)) {
        var Y = this._trace;
        if (Y !== void 0 && X && (Y = Y._parent), Y !== void 0)
          Y.attachExtraTrace(M);
        else if (!M.__stackCleaned__) {
          var te = ge(M);
          i.notEnumerableProp(
            M,
            "stack",
            te.message + `
` + te.stack.join(`
`)
          ), i.notEnumerableProp(M, "__stackCleaned__", !0);
        }
      }
    }
    function k(M, X, Y, te, ue) {
      if (M === void 0 && X !== null && D) {
        if (ue !== void 0 && ue._returnedNonUndefined() || (te._bitField & 65535) === 0) return;
        Y && (Y = Y + " ");
        var pe = "", xe = "";
        if (X._trace) {
          for (var me = X._trace.stack.split(`
`), _e = le(me), K = _e.length - 1; K >= 0; --K) {
            var oe = _e[K];
            if (!b.test(oe)) {
              var de = oe.match(m);
              de && (pe = "at " + de[1] + ":" + de[2] + ":" + de[3] + " ");
              break;
            }
          }
          if (_e.length > 0) {
            for (var ye = _e[0], K = 0; K < me.length; ++K)
              if (me[K] === ye) {
                K > 0 && (xe = `
` + me[K - 1]);
                break;
              }
          }
        }
        var De = "a promise was created in a " + Y + "handler " + pe + "but was not returned from it, see http://goo.gl/rRqMUw" + xe;
        te._warn(De, !0, X);
      }
    }
    function re(M, X) {
      var Y = M + " is deprecated and will be removed in a future version.";
      return X && (Y += " Use " + X + " instead."), ae(Y);
    }
    function ae(M, X, Y) {
      if (H.warnings) {
        var te = new c(M), ue;
        if (X)
          Y._attachExtraTrace(te);
        else if (H.longStackTraces && (ue = e._peekContext()))
          ue.attachExtraTrace(te);
        else {
          var pe = ge(te);
          te.stack = pe.message + `
` + pe.stack.join(`
`);
        }
        A("warning", te) || be(te, "", !0);
      }
    }
    function J(M, X) {
      for (var Y = 0; Y < X.length - 1; ++Y)
        X[Y].push("From previous event:"), X[Y] = X[Y].join(`
`);
      return Y < X.length && (X[Y] = X[Y].join(`
`)), M + `
` + X.join(`
`);
    }
    function ce(M) {
      for (var X = 0; X < M.length; ++X)
        (M[X].length === 0 || X + 1 < M.length && M[X][0] === M[X + 1][0]) && (M.splice(X, 1), X--);
    }
    function fe(M) {
      for (var X = M[0], Y = 1; Y < M.length; ++Y) {
        for (var te = M[Y], ue = X.length - 1, pe = X[ue], xe = -1, me = te.length - 1; me >= 0; --me)
          if (te[me] === pe) {
            xe = me;
            break;
          }
        for (var me = xe; me >= 0; --me) {
          var _e = te[me];
          if (X[ue] === _e)
            X.pop(), ue--;
          else
            break;
        }
        X = te;
      }
    }
    function le(M) {
      for (var X = [], Y = 0; Y < M.length; ++Y) {
        var te = M[Y], ue = te === "    (No stack trace)" || g.test(te), pe = ue && j(te);
        ue && !pe && (y && te.charAt(0) !== " " && (te = "    " + te), X.push(te));
      }
      return X;
    }
    function he(M) {
      for (var X = M.stack.replace(/\s+$/g, "").split(`
`), Y = 0; Y < X.length; ++Y) {
        var te = X[Y];
        if (te === "    (No stack trace)" || g.test(te))
          break;
      }
      return Y > 0 && M.name != "SyntaxError" && (X = X.slice(Y)), X;
    }
    function ge(M) {
      var X = M.stack, Y = M.toString();
      return X = typeof X == "string" && X.length > 0 ? he(M) : ["    (No stack trace)"], {
        message: Y,
        stack: M.name == "SyntaxError" ? X : le(X)
      };
    }
    function be(M, X, Y) {
      if (typeof console < "u") {
        var te;
        if (i.isObject(M)) {
          var ue = M.stack;
          te = X + h(ue, M);
        } else
          te = X + String(M);
        typeof f == "function" ? f(te, Y) : (typeof console.log == "function" || typeof console.log == "object") && console.log(te);
      }
    }
    function Te(M, X, Y, te) {
      var ue = !1;
      try {
        typeof X == "function" && (ue = !0, M === "rejectionHandled" ? X(te) : X(Y, te));
      } catch (pe) {
        r.throwLater(pe);
      }
      M === "unhandledRejection" ? !A(M, Y, te) && !ue && be(Y, "Unhandled rejection ") : A(M, te);
    }
    function Ae(M) {
      var X;
      if (typeof M == "function")
        X = "[function " + (M.name || "anonymous") + "]";
      else {
        X = M && typeof M.toString == "function" ? M.toString() : i.toString(M);
        var Y = /\[object [a-zA-Z0-9$_]+\]/;
        if (Y.test(X))
          try {
            var te = JSON.stringify(M);
            X = te;
          } catch {
          }
        X.length === 0 && (X = "(empty array)");
      }
      return "(<" + v(X) + ">, no stack trace)";
    }
    function v(M) {
      var X = 41;
      return M.length < X ? M : M.substr(0, X - 3) + "...";
    }
    function $() {
      return typeof ne == "function";
    }
    var j = function() {
      return !1;
    }, N = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
    function B(M) {
      var X = M.match(N);
      if (X)
        return {
          fileName: X[1],
          line: parseInt(X[2], 10)
        };
    }
    function V(M, X) {
      if ($()) {
        for (var Y = M.stack.split(`
`), te = X.stack.split(`
`), ue = -1, pe = -1, xe, me, _e = 0; _e < Y.length; ++_e) {
          var K = B(Y[_e]);
          if (K) {
            xe = K.fileName, ue = K.line;
            break;
          }
        }
        for (var _e = 0; _e < te.length; ++_e) {
          var K = B(te[_e]);
          if (K) {
            me = K.fileName, pe = K.line;
            break;
          }
        }
        ue < 0 || pe < 0 || !xe || !me || xe !== me || ue >= pe || (j = function(oe) {
          if (l.test(oe)) return !0;
          var de = B(oe);
          return !!(de && de.fileName === xe && ue <= de.line && de.line <= pe);
        });
      }
    }
    function ie(M) {
      this._parent = M, this._promisesCreated = 0;
      var X = this._length = 1 + (M === void 0 ? 0 : M._length);
      ne(this, ie), X > 32 && this.uncycle();
    }
    i.inherits(ie, Error), n.CapturedTrace = ie, ie.prototype.uncycle = function() {
      var M = this._length;
      if (!(M < 2)) {
        for (var X = [], Y = {}, te = 0, ue = this; ue !== void 0; ++te)
          X.push(ue), ue = ue._parent;
        M = this._length = te;
        for (var te = M - 1; te >= 0; --te) {
          var pe = X[te].stack;
          Y[pe] === void 0 && (Y[pe] = te);
        }
        for (var te = 0; te < M; ++te) {
          var xe = X[te].stack, me = Y[xe];
          if (me !== void 0 && me !== te) {
            me > 0 && (X[me - 1]._parent = void 0, X[me - 1]._length = 1), X[te]._parent = void 0, X[te]._length = 1;
            var _e = te > 0 ? X[te - 1] : this;
            me < M - 1 ? (_e._parent = X[me + 1], _e._parent.uncycle(), _e._length = _e._parent._length + 1) : (_e._parent = void 0, _e._length = 1);
            for (var K = _e._length + 1, oe = te - 2; oe >= 0; --oe)
              X[oe]._length = K, K++;
            return;
          }
        }
      }
    }, ie.prototype.attachExtraTrace = function(M) {
      if (!M.__stackCleaned__) {
        this.uncycle();
        for (var X = ge(M), Y = X.message, te = [X.stack], ue = this; ue !== void 0; )
          te.push(le(ue.stack.split(`
`))), ue = ue._parent;
        fe(te), ce(te), i.notEnumerableProp(M, "stack", J(Y, te)), i.notEnumerableProp(M, "__stackCleaned__", !0);
      }
    };
    var ne = function() {
      var X = /^\s*at\s*/, Y = function(xe, me) {
        return typeof xe == "string" ? xe : me.name !== void 0 && me.message !== void 0 ? me.toString() : Ae(me);
      };
      if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
        Error.stackTraceLimit += 6, g = X, h = Y;
        var te = Error.captureStackTrace;
        return j = function(xe) {
          return l.test(xe);
        }, function(xe, me) {
          Error.stackTraceLimit += 6, te(xe, me), Error.stackTraceLimit -= 6;
        };
      }
      var ue = new Error();
      if (typeof ue.stack == "string" && ue.stack.split(`
`)[0].indexOf("stackDetection@") >= 0)
        return g = /@/, h = Y, y = !0, function(me) {
          me.stack = new Error().stack;
        };
      var pe;
      try {
        throw new Error();
      } catch (xe) {
        pe = "stack" in xe;
      }
      return !("stack" in ue) && pe && typeof Error.stackTraceLimit == "number" ? (g = X, h = Y, function(me) {
        Error.stackTraceLimit += 6;
        try {
          throw new Error();
        } catch (_e) {
          me.stack = _e.stack;
        }
        Error.stackTraceLimit -= 6;
      }) : (h = function(xe, me) {
        return typeof xe == "string" ? xe : (typeof me == "object" || typeof me == "function") && me.name !== void 0 && me.message !== void 0 ? me.toString() : Ae(me);
      }, null);
    }();
    typeof console < "u" && typeof console.warn < "u" && (f = function(M) {
      console.warn(M);
    }, i.isNode && process.stderr.isTTY ? f = function(M, X) {
      var Y = X ? "\x1B[33m" : "\x1B[31m";
      console.warn(Y + M + `\x1B[0m
`);
    } : !i.isNode && typeof new Error().stack == "string" && (f = function(M, X) {
      console.warn(
        "%c" + M,
        X ? "color: darkorange" : "color: red"
      );
    }));
    var H = {
      warnings: p,
      longStackTraces: !1,
      cancellation: !1,
      monitoring: !1
    };
    return d && e.longStackTraces(), {
      longStackTraces: function() {
        return H.longStackTraces;
      },
      warnings: function() {
        return H.warnings;
      },
      cancellation: function() {
        return H.cancellation;
      },
      monitoring: function() {
        return H.monitoring;
      },
      propagateFromFunction: function() {
        return G;
      },
      boundValueFunction: function() {
        return q;
      },
      checkForgottenReturns: k,
      setBounds: V,
      warn: ae,
      deprecated: re,
      CapturedTrace: ie,
      fireDomEvent: _,
      fireGlobalEvent: U
    };
  }), wr;
}
var Er, Oa;
function gd() {
  return Oa || (Oa = 1, Er = function(e, n) {
    var t = Fe(), r = e.CancellationError, c = t.errorObj;
    function i(m, g, h) {
      this.promise = m, this.type = g, this.handler = h, this.called = !1, this.cancelPromise = null;
    }
    i.prototype.isFinallyHandler = function() {
      return this.type === 0;
    };
    function a(m) {
      this.finallyHandler = m;
    }
    a.prototype._resultCancelled = function() {
      o(this.finallyHandler);
    };
    function o(m, g) {
      return m.cancelPromise != null ? (arguments.length > 1 ? m.cancelPromise._reject(g) : m.cancelPromise._cancel(), m.cancelPromise = null, !0) : !1;
    }
    function u() {
      return b.call(this, this.promise._target()._settledValue());
    }
    function l(m) {
      if (!o(this, m))
        return c.e = m, c;
    }
    function b(m) {
      var g = this.promise, h = this.handler;
      if (!this.called) {
        this.called = !0;
        var y = this.isFinallyHandler() ? h.call(g._boundValue()) : h.call(g._boundValue(), m);
        if (y !== void 0) {
          g._setReturnedNonUndefined();
          var f = n(y, g);
          if (f instanceof e) {
            if (this.cancelPromise != null)
              if (f._isCancelled()) {
                var s = new r("late cancellation observer");
                return g._attachExtraTrace(s), c.e = s, c;
              } else f.isPending() && f._attachCancellationCallback(
                new a(this)
              );
            return f._then(
              u,
              l,
              void 0,
              this,
              void 0
            );
          }
        }
      }
      return g.isRejected() ? (o(this), c.e = m, c) : (o(this), m);
    }
    return e.prototype._passThrough = function(m, g, h, y) {
      return typeof m != "function" ? this.then() : this._then(
        h,
        y,
        void 0,
        new i(this, g, m),
        void 0
      );
    }, e.prototype.lastly = e.prototype.finally = function(m) {
      return this._passThrough(
        m,
        0,
        b,
        b
      );
    }, e.prototype.tap = function(m) {
      return this._passThrough(m, 1, b);
    }, i;
  }), Er;
}
var Ar, Ia;
function md() {
  return Ia || (Ia = 1, Ar = function(e) {
    var n = Fe(), t = qn().keys, r = n.tryCatch, c = n.errorObj;
    function i(a, o, u) {
      return function(l) {
        var b = u._boundValue();
        e: for (var m = 0; m < a.length; ++m) {
          var g = a[m];
          if (g === Error || g != null && g.prototype instanceof Error) {
            if (l instanceof g)
              return r(o).call(b, l);
          } else if (typeof g == "function") {
            var h = r(g).call(b, l);
            if (h === c)
              return h;
            if (h)
              return r(o).call(b, l);
          } else if (n.isObject(l)) {
            for (var y = t(g), f = 0; f < y.length; ++f) {
              var s = y[f];
              if (g[s] != l[s])
                continue e;
            }
            return r(o).call(b, l);
          }
        }
        return e;
      };
    }
    return i;
  }), Ar;
}
var Fr, La;
function ls() {
  if (La) return Fr;
  La = 1;
  var e = Fe(), n = e.maybeWrapAsError, t = fn(), r = t.OperationalError, c = qn();
  function i(l) {
    return l instanceof Error && c.getPrototypeOf(l) === Error.prototype;
  }
  var a = /^(?:name|message|stack|cause)$/;
  function o(l) {
    var b;
    if (i(l)) {
      b = new r(l), b.name = l.name, b.message = l.message, b.stack = l.stack;
      for (var m = c.keys(l), g = 0; g < m.length; ++g) {
        var h = m[g];
        a.test(h) || (b[h] = l[h]);
      }
      return b;
    }
    return e.markAsOriginatingFromRejection(l), l;
  }
  function u(l, b) {
    return function(m, g) {
      if (l !== null) {
        if (m) {
          var h = o(n(m));
          l._attachExtraTrace(h), l._reject(h);
        } else if (!b)
          l._fulfill(g);
        else {
          for (var y = arguments.length, f = new Array(Math.max(y - 1, 0)), s = 1; s < y; ++s)
            f[s - 1] = arguments[s];
          l._fulfill(f);
        }
        l = null;
      }
    };
  }
  return Fr = u, Fr;
}
var Cr, Ma;
function bd() {
  return Ma || (Ma = 1, Cr = function(e, n, t, r, c) {
    var i = Fe(), a = i.tryCatch;
    e.method = function(o) {
      if (typeof o != "function")
        throw new e.TypeError("expecting a function but got " + i.classString(o));
      return function() {
        var u = new e(n);
        u._captureStackTrace(), u._pushContext();
        var l = a(o).apply(this, arguments), b = u._popContext();
        return c.checkForgottenReturns(
          l,
          b,
          "Promise.method",
          u
        ), u._resolveFromSyncValue(l), u;
      };
    }, e.attempt = e.try = function(o) {
      if (typeof o != "function")
        return r("expecting a function but got " + i.classString(o));
      var u = new e(n);
      u._captureStackTrace(), u._pushContext();
      var l;
      if (arguments.length > 1) {
        c.deprecated("calling Promise.try with more than 1 argument");
        var b = arguments[1], m = arguments[2];
        l = i.isArray(b) ? a(o).apply(m, b) : a(o).call(m, b);
      } else
        l = a(o)();
      var g = u._popContext();
      return c.checkForgottenReturns(
        l,
        g,
        "Promise.try",
        u
      ), u._resolveFromSyncValue(l), u;
    }, e.prototype._resolveFromSyncValue = function(o) {
      o === i.errorObj ? this._rejectCallback(o.e, !1) : this._resolveCallback(o, !0);
    };
  }), Cr;
}
var Sr, qa;
function yd() {
  return qa || (qa = 1, Sr = function(e, n, t, r) {
    var c = !1, i = function(l, b) {
      this._reject(b);
    }, a = function(l, b) {
      b.promiseRejectionQueued = !0, b.bindingPromise._then(i, i, null, this, l);
    }, o = function(l, b) {
      (this._bitField & 50397184) === 0 && this._resolveCallback(b.target);
    }, u = function(l, b) {
      b.promiseRejectionQueued || this._reject(l);
    };
    e.prototype.bind = function(l) {
      c || (c = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
      var b = t(l), m = new e(n);
      m._propagateFrom(this, 1);
      var g = this._target();
      if (m._setBoundTo(b), b instanceof e) {
        var h = {
          promiseRejectionQueued: !1,
          promise: m,
          target: g,
          bindingPromise: b
        };
        g._then(n, a, void 0, m, h), b._then(
          o,
          u,
          void 0,
          m,
          h
        ), m._setOnCancel(b);
      } else
        m._resolveCallback(g);
      return m;
    }, e.prototype._setBoundTo = function(l) {
      l !== void 0 ? (this._bitField = this._bitField | 2097152, this._boundTo = l) : this._bitField = this._bitField & -2097153;
    }, e.prototype._isBound = function() {
      return (this._bitField & 2097152) === 2097152;
    }, e.bind = function(l, b) {
      return e.resolve(b).bind(l);
    };
  }), Sr;
}
var Br, Pa;
function Dd() {
  return Pa || (Pa = 1, Br = function(e, n, t, r) {
    var c = Fe(), i = c.tryCatch, a = c.errorObj, o = e._async;
    e.prototype.break = e.prototype.cancel = function() {
      if (!r.cancellation()) return this._warn("cancellation is disabled");
      for (var u = this, l = u; u._isCancellable(); ) {
        if (!u._cancelBy(l)) {
          l._isFollowing() ? l._followee().cancel() : l._cancelBranched();
          break;
        }
        var b = u._cancellationParent;
        if (b == null || !b._isCancellable()) {
          u._isFollowing() ? u._followee().cancel() : u._cancelBranched();
          break;
        } else
          u._isFollowing() && u._followee().cancel(), u._setWillBeCancelled(), l = u, u = b;
      }
    }, e.prototype._branchHasCancelled = function() {
      this._branchesRemainingToCancel--;
    }, e.prototype._enoughBranchesHaveCancelled = function() {
      return this._branchesRemainingToCancel === void 0 || this._branchesRemainingToCancel <= 0;
    }, e.prototype._cancelBy = function(u) {
      return u === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), !0) : !1);
    }, e.prototype._cancelBranched = function() {
      this._enoughBranchesHaveCancelled() && this._cancel();
    }, e.prototype._cancel = function() {
      this._isCancellable() && (this._setCancelled(), o.invoke(this._cancelPromises, this, void 0));
    }, e.prototype._cancelPromises = function() {
      this._length() > 0 && this._settlePromises();
    }, e.prototype._unsetOnCancel = function() {
      this._onCancelField = void 0;
    }, e.prototype._isCancellable = function() {
      return this.isPending() && !this._isCancelled();
    }, e.prototype.isCancellable = function() {
      return this.isPending() && !this.isCancelled();
    }, e.prototype._doInvokeOnCancel = function(u, l) {
      if (c.isArray(u))
        for (var b = 0; b < u.length; ++b)
          this._doInvokeOnCancel(u[b], l);
      else if (u !== void 0)
        if (typeof u == "function") {
          if (!l) {
            var m = i(u).call(this._boundValue());
            m === a && (this._attachExtraTrace(m.e), o.throwLater(m.e));
          }
        } else
          u._resultCancelled(this);
    }, e.prototype._invokeOnCancel = function() {
      var u = this._onCancel();
      this._unsetOnCancel(), o.invoke(this._doInvokeOnCancel, this, u);
    }, e.prototype._invokeInternalOnCancel = function() {
      this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
    }, e.prototype._resultCancelled = function() {
      this.cancel();
    };
  }), Br;
}
var kr, za;
function vd() {
  return za || (za = 1, kr = function(e) {
    function n() {
      return this.value;
    }
    function t() {
      throw this.reason;
    }
    e.prototype.return = e.prototype.thenReturn = function(r) {
      return r instanceof e && r.suppressUnhandledRejections(), this._then(
        n,
        void 0,
        void 0,
        { value: r },
        void 0
      );
    }, e.prototype.throw = e.prototype.thenThrow = function(r) {
      return this._then(
        t,
        void 0,
        void 0,
        { reason: r },
        void 0
      );
    }, e.prototype.catchThrow = function(r) {
      if (arguments.length <= 1)
        return this._then(
          void 0,
          t,
          void 0,
          { reason: r },
          void 0
        );
      var c = arguments[1], i = function() {
        throw c;
      };
      return this.caught(r, i);
    }, e.prototype.catchReturn = function(r) {
      if (arguments.length <= 1)
        return r instanceof e && r.suppressUnhandledRejections(), this._then(
          void 0,
          n,
          void 0,
          { value: r },
          void 0
        );
      var c = arguments[1];
      c instanceof e && c.suppressUnhandledRejections();
      var i = function() {
        return c;
      };
      return this.caught(r, i);
    };
  }), kr;
}
var Wr, ja;
function xd() {
  return ja || (ja = 1, Wr = function(e) {
    function n(u) {
      u !== void 0 ? (u = u._target(), this._bitField = u._bitField, this._settledValueField = u._isFateSealed() ? u._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
    }
    n.prototype._settledValue = function() {
      return this._settledValueField;
    };
    var t = n.prototype.value = function() {
      if (!this.isFulfilled())
        throw new TypeError(`cannot get fulfillment value of a non-fulfilled promise

    See http://goo.gl/MqrFmX
`);
      return this._settledValue();
    }, r = n.prototype.error = n.prototype.reason = function() {
      if (!this.isRejected())
        throw new TypeError(`cannot get rejection reason of a non-rejected promise

    See http://goo.gl/MqrFmX
`);
      return this._settledValue();
    }, c = n.prototype.isFulfilled = function() {
      return (this._bitField & 33554432) !== 0;
    }, i = n.prototype.isRejected = function() {
      return (this._bitField & 16777216) !== 0;
    }, a = n.prototype.isPending = function() {
      return (this._bitField & 50397184) === 0;
    }, o = n.prototype.isResolved = function() {
      return (this._bitField & 50331648) !== 0;
    };
    n.prototype.isCancelled = function() {
      return (this._bitField & 8454144) !== 0;
    }, e.prototype.__isCancelled = function() {
      return (this._bitField & 65536) === 65536;
    }, e.prototype._isCancelled = function() {
      return this._target().__isCancelled();
    }, e.prototype.isCancelled = function() {
      return (this._target()._bitField & 8454144) !== 0;
    }, e.prototype.isPending = function() {
      return a.call(this._target());
    }, e.prototype.isRejected = function() {
      return i.call(this._target());
    }, e.prototype.isFulfilled = function() {
      return c.call(this._target());
    }, e.prototype.isResolved = function() {
      return o.call(this._target());
    }, e.prototype.value = function() {
      return t.call(this._target());
    }, e.prototype.reason = function() {
      var u = this._target();
      return u._unsetRejectionIsUnhandled(), r.call(u);
    }, e.prototype._value = function() {
      return this._settledValue();
    }, e.prototype._reason = function() {
      return this._unsetRejectionIsUnhandled(), this._settledValue();
    }, e.PromiseInspection = n;
  }), Wr;
}
var Rr, Xa;
function _d() {
  return Xa || (Xa = 1, Rr = function(e, n, t, r, c, i) {
    var a = Fe(), o = a.canEvaluate, u = a.tryCatch, l = a.errorObj, b;
    if (o) {
      for (var m = function(d) {
        return new Function("value", "holder", `                             
	            'use strict';                                                    
	            holder.pIndex = value;                                           
	            holder.checkFulfillment(this);                                   
	            `.replace(/Index/g, d));
      }, g = function(d) {
        return new Function("promise", "holder", `                           
	            'use strict';                                                    
	            holder.pIndex = promise;                                         
	            `.replace(/Index/g, d));
      }, h = function(d) {
        for (var D = new Array(d), w = 0; w < D.length; ++w)
          D[w] = "this.p" + (w + 1);
        var _ = D.join(" = ") + " = null;", U = `var promise;
` + D.map(function(I) {
          return `                                                         
	                promise = ` + I + `;                                      
	                if (promise instanceof Promise) {                            
	                    promise.cancel();                                        
	                }                                                            
	            `;
        }).join(`
`), E = D.join(", "), S = "Holder$" + d, A = `return function(tryCatch, errorObj, Promise, async) {    
	            'use strict';                                                    
	            function [TheName](fn) {                                         
	                [TheProperties]                                              
	                this.fn = fn;                                                
	                this.asyncNeeded = true;                                     
	                this.now = 0;                                                
	            }                                                                
	                                                                             
	            [TheName].prototype._callFunction = function(promise) {          
	                promise._pushContext();                                      
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           
	                promise._popContext();                                       
	                if (ret === errorObj) {                                      
	                    promise._rejectCallback(ret.e, false);                   
	                } else {                                                     
	                    promise._resolveCallback(ret);                           
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype.checkFulfillment = function(promise) {       
	                var now = ++this.now;                                        
	                if (now === [TheTotal]) {                                    
	                    if (this.asyncNeeded) {                                  
	                        async.invoke(this._callFunction, this, promise);     
	                    } else {                                                 
	                        this._callFunction(promise);                         
	                    }                                                        
	                                                                             
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype._resultCancelled = function() {              
	                [CancellationCode]                                           
	            };                                                               
	                                                                             
	            return [TheName];                                                
	        }(tryCatch, errorObj, Promise, async);                               
	        `;
        return A = A.replace(/\[TheName\]/g, S).replace(/\[TheTotal\]/g, d).replace(/\[ThePassedArguments\]/g, E).replace(/\[TheProperties\]/g, _).replace(/\[CancellationCode\]/g, U), new Function("tryCatch", "errorObj", "Promise", "async", A)(u, l, e, c);
      }, y = [], f = [], s = [], p = 0; p < 8; ++p)
        y.push(h(p + 1)), f.push(m(p + 1)), s.push(g(p + 1));
      b = function(d) {
        this._reject(d);
      };
    }
    e.join = function() {
      var d = arguments.length - 1, D;
      if (d > 0 && typeof arguments[d] == "function" && (D = arguments[d], d <= 8 && o)) {
        var x = new e(r);
        x._captureStackTrace();
        for (var w = y[d - 1], _ = new w(D), U = f, E = 0; E < d; ++E) {
          var S = t(arguments[E], x);
          if (S instanceof e) {
            S = S._target();
            var A = S._bitField;
            (A & 50397184) === 0 ? (S._then(
              U[E],
              b,
              void 0,
              x,
              _
            ), s[E](S, _), _.asyncNeeded = !1) : (A & 33554432) !== 0 ? U[E].call(
              x,
              S._value(),
              _
            ) : (A & 16777216) !== 0 ? x._reject(S._reason()) : x._cancel();
          } else
            U[E].call(x, S, _);
        }
        if (!x._isFateSealed()) {
          if (_.asyncNeeded) {
            var I = i();
            I !== null && (_.fn = a.domainBind(I, _.fn));
          }
          x._setAsyncGuaranteed(), x._setOnCancel(_);
        }
        return x;
      }
      for (var Z = arguments.length, T = new Array(Z), R = 0; R < Z; ++R)
        T[R] = arguments[R];
      D && T.pop();
      var x = new n(T).promise();
      return D !== void 0 ? x.spread(D) : x;
    };
  }), Rr;
}
var Nr, Va;
function Ud() {
  return Va || (Va = 1, Nr = function(e, n, t, r, c, i) {
    var a = e._getDomain, o = Fe(), u = o.tryCatch, l = o.errorObj, b = e._async;
    function m(h, y, f, s) {
      this.constructor$(h), this._promise._captureStackTrace();
      var p = a();
      this._callback = p === null ? y : o.domainBind(p, y), this._preservedValues = s === c ? new Array(this.length()) : null, this._limit = f, this._inFlight = 0, this._queue = [], b.invoke(this._asyncInit, this, void 0);
    }
    o.inherits(m, n), m.prototype._asyncInit = function() {
      this._init$(void 0, -2);
    }, m.prototype._init = function() {
    }, m.prototype._promiseFulfilled = function(h, y) {
      var f = this._values, s = this.length(), p = this._preservedValues, d = this._limit;
      if (y < 0) {
        if (y = y * -1 - 1, f[y] = h, d >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved()))
          return !0;
      } else {
        if (d >= 1 && this._inFlight >= d)
          return f[y] = h, this._queue.push(y), !1;
        p !== null && (p[y] = h);
        var D = this._promise, w = this._callback, _ = D._boundValue();
        D._pushContext();
        var U = u(w).call(_, h, y, s), E = D._popContext();
        if (i.checkForgottenReturns(
          U,
          E,
          p !== null ? "Promise.filter" : "Promise.map",
          D
        ), U === l)
          return this._reject(U.e), !0;
        var S = r(U, this._promise);
        if (S instanceof e) {
          S = S._target();
          var A = S._bitField;
          if ((A & 50397184) === 0)
            return d >= 1 && this._inFlight++, f[y] = S, S._proxy(this, (y + 1) * -1), !1;
          if ((A & 33554432) !== 0)
            U = S._value();
          else return (A & 16777216) !== 0 ? (this._reject(S._reason()), !0) : (this._cancel(), !0);
        }
        f[y] = U;
      }
      var I = ++this._totalResolved;
      return I >= s ? (p !== null ? this._filter(f, p) : this._resolve(f), !0) : !1;
    }, m.prototype._drainQueue = function() {
      for (var h = this._queue, y = this._limit, f = this._values; h.length > 0 && this._inFlight < y; ) {
        if (this._isResolved()) return;
        var s = h.pop();
        this._promiseFulfilled(f[s], s);
      }
    }, m.prototype._filter = function(h, y) {
      for (var f = y.length, s = new Array(f), p = 0, d = 0; d < f; ++d)
        h[d] && (s[p++] = y[d]);
      s.length = p, this._resolve(s);
    }, m.prototype.preservedValues = function() {
      return this._preservedValues;
    };
    function g(h, y, f, s) {
      if (typeof y != "function")
        return t("expecting a function but got " + o.classString(y));
      var p = 0;
      if (f !== void 0)
        if (typeof f == "object" && f !== null) {
          if (typeof f.concurrency != "number")
            return e.reject(
              new TypeError("'concurrency' must be a number but it is " + o.classString(f.concurrency))
            );
          p = f.concurrency;
        } else
          return e.reject(new TypeError(
            "options argument must be an object but it is " + o.classString(f)
          ));
      return p = typeof p == "number" && isFinite(p) && p >= 1 ? p : 0, new m(h, y, p, s).promise();
    }
    e.prototype.map = function(h, y) {
      return g(this, h, y, null);
    }, e.map = function(h, y, f, s) {
      return g(h, y, f, s);
    };
  }), Nr;
}
var Or, Ha;
function Td() {
  if (Ha) return Or;
  Ha = 1;
  var e = Object.create;
  if (e) {
    var n = e(null), t = e(null);
    n[" size"] = t[" size"] = 0;
  }
  return Or = function(r) {
    var c = Fe(), i = c.canEvaluate, a = c.isIdentifier, o, u;
    {
      var l = function(s) {
        return new Function("ensureMethod", `                                    
	        return function(obj) {                                               
	            'use strict'                                                     
	            var len = this.length;                                           
	            ensureMethod(obj, 'methodName');                                 
	            switch(len) {                                                    
	                case 1: return obj.methodName(this[0]);                      
	                case 2: return obj.methodName(this[0], this[1]);             
	                case 3: return obj.methodName(this[0], this[1], this[2]);    
	                case 0: return obj.methodName();                             
	                default:                                                     
	                    return obj.methodName.apply(obj, this);                  
	            }                                                                
	        };                                                                   
	        `.replace(/methodName/g, s))(g);
      }, b = function(s) {
        return new Function("obj", `                                             
	        'use strict';                                                        
	        return obj.propertyName;                                             
	        `.replace("propertyName", s));
      }, m = function(s, p, d) {
        var D = d[s];
        if (typeof D != "function") {
          if (!a(s))
            return null;
          if (D = p(s), d[s] = D, d[" size"]++, d[" size"] > 512) {
            for (var w = Object.keys(d), _ = 0; _ < 256; ++_) delete d[w[_]];
            d[" size"] = w.length - 256;
          }
        }
        return D;
      };
      o = function(s) {
        return m(s, l, n);
      }, u = function(s) {
        return m(s, b, t);
      };
    }
    function g(s, p) {
      var d;
      if (s != null && (d = s[p]), typeof d != "function") {
        var D = "Object " + c.classString(s) + " has no method '" + c.toString(p) + "'";
        throw new r.TypeError(D);
      }
      return d;
    }
    function h(s) {
      var p = this.pop(), d = g(s, p);
      return d.apply(s, this);
    }
    r.prototype.call = function(s) {
      for (var p = arguments.length, d = new Array(Math.max(p - 1, 0)), D = 1; D < p; ++D)
        d[D - 1] = arguments[D];
      if (i) {
        var w = o(s);
        if (w !== null)
          return this._then(
            w,
            void 0,
            void 0,
            d,
            void 0
          );
      }
      return d.push(s), this._then(h, void 0, void 0, d, void 0);
    };
    function y(s) {
      return s[this];
    }
    function f(s) {
      var p = +this;
      return p < 0 && (p = Math.max(0, p + s.length)), s[p];
    }
    r.prototype.get = function(s) {
      var p = typeof s == "number", d;
      if (p)
        d = f;
      else if (i) {
        var D = u(s);
        d = D !== null ? D : y;
      } else
        d = y;
      return this._then(d, void 0, void 0, s, void 0);
    };
  }, Or;
}
var Ir, Ga;
function wd() {
  return Ga || (Ga = 1, Ir = function(e, n, t, r, c, i) {
    var a = Fe(), o = fn().TypeError, u = Fe().inherits, l = a.errorObj, b = a.tryCatch, m = {};
    function g(D) {
      setTimeout(function() {
        throw D;
      }, 0);
    }
    function h(D) {
      var w = t(D);
      return w !== D && typeof D._isDisposable == "function" && typeof D._getDisposer == "function" && D._isDisposable() && w._setDisposable(D._getDisposer()), w;
    }
    function y(D, w) {
      var _ = 0, U = D.length, E = new e(c);
      function S() {
        if (_ >= U) return E._fulfill();
        var A = h(D[_++]);
        if (A instanceof e && A._isDisposable()) {
          try {
            A = t(
              A._getDisposer().tryDispose(w),
              D.promise
            );
          } catch (I) {
            return g(I);
          }
          if (A instanceof e)
            return A._then(
              S,
              g,
              null,
              null,
              null
            );
        }
        S();
      }
      return S(), E;
    }
    function f(D, w, _) {
      this._data = D, this._promise = w, this._context = _;
    }
    f.prototype.data = function() {
      return this._data;
    }, f.prototype.promise = function() {
      return this._promise;
    }, f.prototype.resource = function() {
      return this.promise().isFulfilled() ? this.promise().value() : m;
    }, f.prototype.tryDispose = function(D) {
      var w = this.resource(), _ = this._context;
      _ !== void 0 && _._pushContext();
      var U = w !== m ? this.doDispose(w, D) : null;
      return _ !== void 0 && _._popContext(), this._promise._unsetDisposable(), this._data = null, U;
    }, f.isDisposer = function(D) {
      return D != null && typeof D.resource == "function" && typeof D.tryDispose == "function";
    };
    function s(D, w, _) {
      this.constructor$(D, w, _);
    }
    u(s, f), s.prototype.doDispose = function(D, w) {
      var _ = this.data();
      return _.call(D, D, w);
    };
    function p(D) {
      return f.isDisposer(D) ? (this.resources[this.index]._setDisposable(D), D.promise()) : D;
    }
    function d(D) {
      this.length = D, this.promise = null, this[D - 1] = null;
    }
    d.prototype._resultCancelled = function() {
      for (var D = this.length, w = 0; w < D; ++w) {
        var _ = this[w];
        _ instanceof e && _.cancel();
      }
    }, e.using = function() {
      var D = arguments.length;
      if (D < 2) return n(
        "you must pass at least 2 arguments to Promise.using"
      );
      var w = arguments[D - 1];
      if (typeof w != "function")
        return n("expecting a function but got " + a.classString(w));
      var _, U = !0;
      D === 2 && Array.isArray(arguments[0]) ? (_ = arguments[0], D = _.length, U = !1) : (_ = arguments, D--);
      for (var E = new d(D), S = 0; S < D; ++S) {
        var A = _[S];
        if (f.isDisposer(A)) {
          var I = A;
          A = A.promise(), A._setDisposable(I);
        } else {
          var Z = t(A);
          Z instanceof e && (A = Z._then(p, null, null, {
            resources: E,
            index: S
          }, void 0));
        }
        E[S] = A;
      }
      for (var T = new Array(E.length), S = 0; S < T.length; ++S)
        T[S] = e.resolve(E[S]).reflect();
      var R = e.all(T).then(function(z) {
        for (var W = 0; W < z.length; ++W) {
          var O = z[W];
          if (O.isRejected())
            return l.e = O.error(), l;
          if (!O.isFulfilled()) {
            R.cancel();
            return;
          }
          z[W] = O.value();
        }
        x._pushContext(), w = b(w);
        var G = U ? w.apply(void 0, z) : w(z), q = x._popContext();
        return i.checkForgottenReturns(
          G,
          q,
          "Promise.using",
          x
        ), G;
      }), x = R.lastly(function() {
        var z = new e.PromiseInspection(R);
        return y(E, z);
      });
      return E.promise = x, x._setOnCancel(E), x;
    }, e.prototype._setDisposable = function(D) {
      this._bitField = this._bitField | 131072, this._disposer = D;
    }, e.prototype._isDisposable = function() {
      return (this._bitField & 131072) > 0;
    }, e.prototype._getDisposer = function() {
      return this._disposer;
    }, e.prototype._unsetDisposable = function() {
      this._bitField = this._bitField & -131073, this._disposer = void 0;
    }, e.prototype.disposer = function(D) {
      if (typeof D == "function")
        return new s(D, this, r());
      throw new o();
    };
  }), Ir;
}
var Lr, Za;
function Ed() {
  return Za || (Za = 1, Lr = function(e, n, t) {
    var r = Fe(), c = e.TimeoutError;
    function i(m) {
      this.handle = m;
    }
    i.prototype._resultCancelled = function() {
      clearTimeout(this.handle);
    };
    var a = function(m) {
      return o(+this).thenReturn(m);
    }, o = e.delay = function(m, g) {
      var h, y;
      return g !== void 0 ? (h = e.resolve(g)._then(a, null, null, m, void 0), t.cancellation() && g instanceof e && h._setOnCancel(g)) : (h = new e(n), y = setTimeout(function() {
        h._fulfill();
      }, +m), t.cancellation() && h._setOnCancel(new i(y)), h._captureStackTrace()), h._setAsyncGuaranteed(), h;
    };
    e.prototype.delay = function(m) {
      return o(m, this);
    };
    var u = function(m, g, h) {
      var y;
      typeof g != "string" ? g instanceof Error ? y = g : y = new c("operation timed out") : y = new c(g), r.markAsOriginatingFromRejection(y), m._attachExtraTrace(y), m._reject(y), h != null && h.cancel();
    };
    function l(m) {
      return clearTimeout(this.handle), m;
    }
    function b(m) {
      throw clearTimeout(this.handle), m;
    }
    e.prototype.timeout = function(m, g) {
      m = +m;
      var h, y, f = new i(setTimeout(function() {
        h.isPending() && u(h, g, y);
      }, m));
      return t.cancellation() ? (y = this.then(), h = y._then(
        l,
        b,
        void 0,
        f,
        void 0
      ), h._setOnCancel(f)) : h = this._then(
        l,
        b,
        void 0,
        f,
        void 0
      ), h;
    };
  }), Lr;
}
var Mr, $a;
function Ad() {
  return $a || ($a = 1, Mr = function(e, n, t, r, c, i) {
    var a = fn(), o = a.TypeError, u = Fe(), l = u.errorObj, b = u.tryCatch, m = [];
    function g(y, f, s) {
      for (var p = 0; p < f.length; ++p) {
        s._pushContext();
        var d = b(f[p])(y);
        if (s._popContext(), d === l) {
          s._pushContext();
          var D = e.reject(l.e);
          return s._popContext(), D;
        }
        var w = r(d, s);
        if (w instanceof e) return w;
      }
      return null;
    }
    function h(y, f, s, p) {
      if (i.cancellation()) {
        var d = new e(t), D = this._finallyPromise = new e(t);
        this._promise = d.lastly(function() {
          return D;
        }), d._captureStackTrace(), d._setOnCancel(this);
      } else {
        var w = this._promise = new e(t);
        w._captureStackTrace();
      }
      this._stack = p, this._generatorFunction = y, this._receiver = f, this._generator = void 0, this._yieldHandlers = typeof s == "function" ? [s].concat(m) : m, this._yieldedPromise = null, this._cancellationPhase = !1;
    }
    u.inherits(h, c), h.prototype._isResolved = function() {
      return this._promise === null;
    }, h.prototype._cleanup = function() {
      this._promise = this._generator = null, i.cancellation() && this._finallyPromise !== null && (this._finallyPromise._fulfill(), this._finallyPromise = null);
    }, h.prototype._promiseCancelled = function() {
      if (!this._isResolved()) {
        var y = typeof this._generator.return < "u", f;
        if (y)
          this._promise._pushContext(), f = b(this._generator.return).call(
            this._generator,
            void 0
          ), this._promise._popContext();
        else {
          var s = new e.CancellationError(
            "generator .return() sentinel"
          );
          e.coroutine.returnSentinel = s, this._promise._attachExtraTrace(s), this._promise._pushContext(), f = b(this._generator.throw).call(
            this._generator,
            s
          ), this._promise._popContext();
        }
        this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(f);
      }
    }, h.prototype._promiseFulfilled = function(y) {
      this._yieldedPromise = null, this._promise._pushContext();
      var f = b(this._generator.next).call(this._generator, y);
      this._promise._popContext(), this._continue(f);
    }, h.prototype._promiseRejected = function(y) {
      this._yieldedPromise = null, this._promise._attachExtraTrace(y), this._promise._pushContext();
      var f = b(this._generator.throw).call(this._generator, y);
      this._promise._popContext(), this._continue(f);
    }, h.prototype._resultCancelled = function() {
      if (this._yieldedPromise instanceof e) {
        var y = this._yieldedPromise;
        this._yieldedPromise = null, y.cancel();
      }
    }, h.prototype.promise = function() {
      return this._promise;
    }, h.prototype._run = function() {
      this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
    }, h.prototype._continue = function(y) {
      var f = this._promise;
      if (y === l)
        return this._cleanup(), this._cancellationPhase ? f.cancel() : f._rejectCallback(y.e, !1);
      var s = y.value;
      if (y.done === !0)
        return this._cleanup(), this._cancellationPhase ? f.cancel() : f._resolveCallback(s);
      var p = r(s, this._promise);
      if (!(p instanceof e) && (p = g(
        p,
        this._yieldHandlers,
        this._promise
      ), p === null)) {
        this._promiseRejected(
          new o(
            `A value %s was yielded that could not be treated as a promise

    See http://goo.gl/MqrFmX

`.replace("%s", s) + `From coroutine:
` + this._stack.split(`
`).slice(1, -7).join(`
`)
          )
        );
        return;
      }
      p = p._target();
      var d = p._bitField;
      (d & 50397184) === 0 ? (this._yieldedPromise = p, p._proxy(this, null)) : (d & 33554432) !== 0 ? e._async.invoke(
        this._promiseFulfilled,
        this,
        p._value()
      ) : (d & 16777216) !== 0 ? e._async.invoke(
        this._promiseRejected,
        this,
        p._reason()
      ) : this._promiseCancelled();
    }, e.coroutine = function(y, f) {
      if (typeof y != "function")
        throw new o(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
      var s = Object(f).yieldHandler, p = h, d = new Error().stack;
      return function() {
        var D = y.apply(this, arguments), w = new p(
          void 0,
          void 0,
          s,
          d
        ), _ = w.promise();
        return w._generator = D, w._promiseFulfilled(void 0), _;
      };
    }, e.coroutine.addYieldHandler = function(y) {
      if (typeof y != "function")
        throw new o("expecting a function but got " + u.classString(y));
      m.push(y);
    }, e.spawn = function(y) {
      if (i.deprecated("Promise.spawn()", "Promise.coroutine()"), typeof y != "function")
        return n(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
      var f = new h(y, this), s = f.promise();
      return f._run(e.spawn), s;
    };
  }), Mr;
}
var qr, Ya;
function Fd() {
  return Ya || (Ya = 1, qr = function(e) {
    var n = Fe(), t = e._async, r = n.tryCatch, c = n.errorObj;
    function i(u, l) {
      var b = this;
      if (!n.isArray(u)) return a.call(b, u, l);
      var m = r(l).apply(b._boundValue(), [null].concat(u));
      m === c && t.throwLater(m.e);
    }
    function a(u, l) {
      var b = this, m = b._boundValue(), g = u === void 0 ? r(l).call(m, null) : r(l).call(m, null, u);
      g === c && t.throwLater(g.e);
    }
    function o(u, l) {
      var b = this;
      if (!u) {
        var m = new Error(u + "");
        m.cause = u, u = m;
      }
      var g = r(l).call(b._boundValue(), u);
      g === c && t.throwLater(g.e);
    }
    e.prototype.asCallback = e.prototype.nodeify = function(u, l) {
      if (typeof u == "function") {
        var b = a;
        l !== void 0 && Object(l).spread && (b = i), this._then(
          b,
          o,
          void 0,
          this,
          u
        );
      }
      return this;
    };
  }), qr;
}
var Pr, Ka;
function Cd() {
  return Ka || (Ka = 1, Pr = function(e, n) {
    var t = {}, r = Fe(), c = ls(), i = r.withAppended, a = r.maybeWrapAsError, o = r.canEvaluate, u = fn().TypeError, l = "Async", b = { __isPromisified__: !0 }, m = [
      "arity",
      "length",
      "name",
      "arguments",
      "caller",
      "callee",
      "prototype",
      "__isPromisified__"
    ], g = new RegExp("^(?:" + m.join("|") + ")$"), h = function(R) {
      return r.isIdentifier(R) && R.charAt(0) !== "_" && R !== "constructor";
    };
    function y(R) {
      return !g.test(R);
    }
    function f(R) {
      try {
        return R.__isPromisified__ === !0;
      } catch {
        return !1;
      }
    }
    function s(R, x, z) {
      var W = r.getDataPropertyOrDefault(
        R,
        x + z,
        b
      );
      return W ? f(W) : !1;
    }
    function p(R, x, z) {
      for (var W = 0; W < R.length; W += 2) {
        var O = R[W];
        if (z.test(O)) {
          for (var G = O.replace(z, ""), q = 0; q < R.length; q += 2)
            if (R[q] === G)
              throw new u(`Cannot promisify an API that has normal methods with '%s'-suffix

    See http://goo.gl/MqrFmX
`.replace("%s", x));
        }
      }
    }
    function d(R, x, z, W) {
      for (var O = r.inheritedDataKeys(R), G = [], q = 0; q < O.length; ++q) {
        var Q = O[q], L = R[Q], k = W === h ? !0 : h(Q);
        typeof L == "function" && !f(L) && !s(R, Q, x) && W(Q, L, R, k) && G.push(Q, L);
      }
      return p(G, x, z), G;
    }
    var D = function(R) {
      return R.replace(/([$])/, "\\$");
    }, w;
    {
      var _ = function(R) {
        for (var x = [R], z = Math.max(0, R - 1 - 3), W = R - 1; W >= z; --W)
          x.push(W);
        for (var W = R + 1; W <= 3; ++W)
          x.push(W);
        return x;
      }, U = function(R) {
        return r.filledRange(R, "_arg", "");
      }, E = function(R) {
        return r.filledRange(
          Math.max(R, 3),
          "_arg",
          ""
        );
      }, S = function(R) {
        return typeof R.length == "number" ? Math.max(Math.min(R.length, 1024), 0) : 0;
      };
      w = function(R, x, z, W, O, G) {
        var q = Math.max(0, S(W) - 1), Q = _(q), L = typeof R == "string" || x === t;
        function k(ce) {
          var fe = U(ce).join(", "), le = ce > 0 ? ", " : "", he;
          return L ? he = `ret = callback.call(this, {{args}}, nodeback); break;
` : he = x === void 0 ? `ret = callback({{args}}, nodeback); break;
` : `ret = callback.call(receiver, {{args}}, nodeback); break;
`, he.replace("{{args}}", fe).replace(", ", le);
        }
        function re() {
          for (var ce = "", fe = 0; fe < Q.length; ++fe)
            ce += "case " + Q[fe] + ":" + k(Q[fe]);
          return ce += `                                                             
	        default:                                                             
	            var args = new Array(len + 1);                                   
	            var i = 0;                                                       
	            for (var i = 0; i < len; ++i) {                                  
	               args[i] = arguments[i];                                       
	            }                                                                
	            args[i] = nodeback;                                              
	            [CodeForCall]                                                    
	            break;                                                           
	        `.replace("[CodeForCall]", L ? `ret = callback.apply(this, args);
` : `ret = callback.apply(receiver, args);
`), ce;
        }
        var ae = typeof R == "string" ? "this != null ? this['" + R + "'] : fn" : "fn", J = `'use strict';                                                
	        var ret = function (Parameters) {                                    
	            'use strict';                                                    
	            var len = arguments.length;                                      
	            var promise = new Promise(INTERNAL);                             
	            promise._captureStackTrace();                                    
	            var nodeback = nodebackForPromise(promise, ` + G + `);   
	            var ret;                                                         
	            var callback = tryCatch([GetFunctionCode]);                      
	            switch(len) {                                                    
	                [CodeForSwitchCase]                                          
	            }                                                                
	            if (ret === errorObj) {                                          
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);
	            }                                                                
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     
	            return promise;                                                  
	        };                                                                   
	        notEnumerableProp(ret, '__isPromisified__', true);                   
	        return ret;                                                          
	    `.replace("[CodeForSwitchCase]", re()).replace("[GetFunctionCode]", ae);
        return J = J.replace("Parameters", E(q)), new Function(
          "Promise",
          "fn",
          "receiver",
          "withAppended",
          "maybeWrapAsError",
          "nodebackForPromise",
          "tryCatch",
          "errorObj",
          "notEnumerableProp",
          "INTERNAL",
          J
        )(
          e,
          W,
          x,
          i,
          a,
          c,
          r.tryCatch,
          r.errorObj,
          r.notEnumerableProp,
          n
        );
      };
    }
    function A(R, x, z, W, O, G) {
      var q = /* @__PURE__ */ function() {
        return this;
      }(), Q = R;
      typeof Q == "string" && (R = W);
      function L() {
        var k = x;
        x === t && (k = this);
        var re = new e(n);
        re._captureStackTrace();
        var ae = typeof Q == "string" && this !== q ? this[Q] : R, J = c(re, G);
        try {
          ae.apply(k, i(arguments, J));
        } catch (ce) {
          re._rejectCallback(a(ce), !0, !0);
        }
        return re._isFateSealed() || re._setAsyncGuaranteed(), re;
      }
      return r.notEnumerableProp(L, "__isPromisified__", !0), L;
    }
    var I = o ? w : A;
    function Z(R, x, z, W, O) {
      for (var G = new RegExp(D(x) + "$"), q = d(R, x, G, z), Q = 0, L = q.length; Q < L; Q += 2) {
        var k = q[Q], re = q[Q + 1], ae = k + x;
        if (W === I)
          R[ae] = I(k, t, k, re, x, O);
        else {
          var J = W(re, function() {
            return I(
              k,
              t,
              k,
              re,
              x,
              O
            );
          });
          r.notEnumerableProp(J, "__isPromisified__", !0), R[ae] = J;
        }
      }
      return r.toFastProperties(R), R;
    }
    function T(R, x, z) {
      return I(
        R,
        x,
        void 0,
        R,
        null,
        z
      );
    }
    e.promisify = function(R, x) {
      if (typeof R != "function")
        throw new u("expecting a function but got " + r.classString(R));
      if (f(R))
        return R;
      x = Object(x);
      var z = x.context === void 0 ? t : x.context, W = !!x.multiArgs, O = T(R, z, W);
      return r.copyDescriptors(R, O, y), O;
    }, e.promisifyAll = function(R, x) {
      if (typeof R != "function" && typeof R != "object")
        throw new u(`the target of promisifyAll must be an object or a function

    See http://goo.gl/MqrFmX
`);
      x = Object(x);
      var z = !!x.multiArgs, W = x.suffix;
      typeof W != "string" && (W = l);
      var O = x.filter;
      typeof O != "function" && (O = h);
      var G = x.promisifier;
      if (typeof G != "function" && (G = I), !r.isIdentifier(W))
        throw new RangeError(`suffix must be a valid identifier

    See http://goo.gl/MqrFmX
`);
      for (var q = r.inheritedDataKeys(R), Q = 0; Q < q.length; ++Q) {
        var L = R[q[Q]];
        q[Q] !== "constructor" && r.isClass(L) && (Z(
          L.prototype,
          W,
          O,
          G,
          z
        ), Z(L, W, O, G, z));
      }
      return Z(R, W, O, G, z);
    };
  }), Pr;
}
var zr, Qa;
function Sd() {
  return Qa || (Qa = 1, zr = function(e, n, t, r) {
    var c = Fe(), i = c.isObject, a = qn(), o;
    typeof Map == "function" && (o = Map);
    var u = /* @__PURE__ */ function() {
      var g = 0, h = 0;
      function y(f, s) {
        this[g] = f, this[g + h] = s, g++;
      }
      return function(s) {
        h = s.size, g = 0;
        var p = new Array(s.size * 2);
        return s.forEach(y, p), p;
      };
    }(), l = function(g) {
      for (var h = new o(), y = g.length / 2 | 0, f = 0; f < y; ++f) {
        var s = g[y + f], p = g[f];
        h.set(s, p);
      }
      return h;
    };
    function b(g) {
      var h = !1, y;
      if (o !== void 0 && g instanceof o)
        y = u(g), h = !0;
      else {
        var f = a.keys(g), s = f.length;
        y = new Array(s * 2);
        for (var p = 0; p < s; ++p) {
          var d = f[p];
          y[p] = g[d], y[p + s] = d;
        }
      }
      this.constructor$(y), this._isMap = h, this._init$(void 0, -3);
    }
    c.inherits(b, n), b.prototype._init = function() {
    }, b.prototype._promiseFulfilled = function(g, h) {
      this._values[h] = g;
      var y = ++this._totalResolved;
      if (y >= this._length) {
        var f;
        if (this._isMap)
          f = l(this._values);
        else {
          f = {};
          for (var s = this.length(), p = 0, d = this.length(); p < d; ++p)
            f[this._values[p + s]] = this._values[p];
        }
        return this._resolve(f), !0;
      }
      return !1;
    }, b.prototype.shouldCopyValues = function() {
      return !1;
    }, b.prototype.getActualLength = function(g) {
      return g >> 1;
    };
    function m(g) {
      var h, y = t(g);
      if (i(y))
        y instanceof e ? h = y._then(
          e.props,
          void 0,
          void 0,
          void 0,
          void 0
        ) : h = new b(y).promise();
      else return r(`cannot await properties of a non-object

    See http://goo.gl/MqrFmX
`);
      return y instanceof e && h._propagateFrom(y, 2), h;
    }
    e.prototype.props = function() {
      return m(this);
    }, e.props = function(g) {
      return m(g);
    };
  }), zr;
}
var jr, Ja;
function Bd() {
  return Ja || (Ja = 1, jr = function(e, n, t, r) {
    var c = Fe(), i = function(o) {
      return o.then(function(u) {
        return a(u, o);
      });
    };
    function a(o, u) {
      var l = t(o);
      if (l instanceof e)
        return i(l);
      if (o = c.asArray(o), o === null)
        return r("expecting an array or an iterable object but got " + c.classString(o));
      var b = new e(n);
      u !== void 0 && b._propagateFrom(u, 3);
      for (var m = b._fulfill, g = b._reject, h = 0, y = o.length; h < y; ++h) {
        var f = o[h];
        f === void 0 && !(h in o) || e.cast(f)._then(m, g, void 0, b, null);
      }
      return b;
    }
    e.race = function(o) {
      return a(o, void 0);
    }, e.prototype.race = function() {
      return a(this, void 0);
    };
  }), jr;
}
var Xr, eo;
function kd() {
  return eo || (eo = 1, Xr = function(e, n, t, r, c, i) {
    var a = e._getDomain, o = Fe(), u = o.tryCatch;
    function l(y, f, s, p) {
      this.constructor$(y);
      var d = a();
      this._fn = d === null ? f : o.domainBind(d, f), s !== void 0 && (s = e.resolve(s), s._attachCancellationCallback(this)), this._initialValue = s, this._currentCancellable = null, p === c ? this._eachValues = Array(this._length) : p === 0 ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
    }
    o.inherits(l, n), l.prototype._gotAccum = function(y) {
      this._eachValues !== void 0 && this._eachValues !== null && y !== c && this._eachValues.push(y);
    }, l.prototype._eachComplete = function(y) {
      return this._eachValues !== null && this._eachValues.push(y), this._eachValues;
    }, l.prototype._init = function() {
    }, l.prototype._resolveEmptyArray = function() {
      this._resolve(this._eachValues !== void 0 ? this._eachValues : this._initialValue);
    }, l.prototype.shouldCopyValues = function() {
      return !1;
    }, l.prototype._resolve = function(y) {
      this._promise._resolveCallback(y), this._values = null;
    }, l.prototype._resultCancelled = function(y) {
      if (y === this._initialValue) return this._cancel();
      this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel());
    }, l.prototype._iterate = function(y) {
      this._values = y;
      var f, s, p = y.length;
      if (this._initialValue !== void 0 ? (f = this._initialValue, s = 0) : (f = e.resolve(y[0]), s = 1), this._currentCancellable = f, !f.isRejected())
        for (; s < p; ++s) {
          var d = {
            accum: null,
            value: y[s],
            index: s,
            length: p,
            array: this
          };
          f = f._then(g, void 0, void 0, d, void 0);
        }
      this._eachValues !== void 0 && (f = f._then(this._eachComplete, void 0, void 0, this, void 0)), f._then(b, b, void 0, f, this);
    }, e.prototype.reduce = function(y, f) {
      return m(this, y, f, null);
    }, e.reduce = function(y, f, s, p) {
      return m(y, f, s, p);
    };
    function b(y, f) {
      this.isFulfilled() ? f._resolve(y) : f._reject(y);
    }
    function m(y, f, s, p) {
      if (typeof f != "function")
        return t("expecting a function but got " + o.classString(f));
      var d = new l(y, f, s, p);
      return d.promise();
    }
    function g(y) {
      this.accum = y, this.array._gotAccum(y);
      var f = r(this.value, this.array._promise);
      return f instanceof e ? (this.array._currentCancellable = f, f._then(h, void 0, void 0, this, void 0)) : h.call(this, f);
    }
    function h(y) {
      var f = this.array, s = f._promise, p = u(f._fn);
      s._pushContext();
      var d;
      f._eachValues !== void 0 ? d = p.call(s._boundValue(), y, this.index, this.length) : d = p.call(
        s._boundValue(),
        this.accum,
        y,
        this.index,
        this.length
      ), d instanceof e && (f._currentCancellable = d);
      var D = s._popContext();
      return i.checkForgottenReturns(
        d,
        D,
        f._eachValues !== void 0 ? "Promise.each" : "Promise.reduce",
        s
      ), d;
    }
  }), Xr;
}
var Vr, no;
function Wd() {
  return no || (no = 1, Vr = function(e, n, t) {
    var r = e.PromiseInspection, c = Fe();
    function i(a) {
      this.constructor$(a);
    }
    c.inherits(i, n), i.prototype._promiseResolved = function(a, o) {
      this._values[a] = o;
      var u = ++this._totalResolved;
      return u >= this._length ? (this._resolve(this._values), !0) : !1;
    }, i.prototype._promiseFulfilled = function(a, o) {
      var u = new r();
      return u._bitField = 33554432, u._settledValueField = a, this._promiseResolved(o, u);
    }, i.prototype._promiseRejected = function(a, o) {
      var u = new r();
      return u._bitField = 16777216, u._settledValueField = a, this._promiseResolved(o, u);
    }, e.settle = function(a) {
      return t.deprecated(".settle()", ".reflect()"), new i(a).promise();
    }, e.prototype.settle = function() {
      return e.settle(this);
    };
  }), Vr;
}
var Hr, to;
function Rd() {
  return to || (to = 1, Hr = function(e, n, t) {
    var r = Fe(), c = fn().RangeError, i = fn().AggregateError, a = r.isArray, o = {};
    function u(b) {
      this.constructor$(b), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
    }
    r.inherits(u, n), u.prototype._init = function() {
      if (this._initialized) {
        if (this._howMany === 0) {
          this._resolve([]);
          return;
        }
        this._init$(void 0, -5);
        var b = a(this._values);
        !this._isResolved() && b && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
      }
    }, u.prototype.init = function() {
      this._initialized = !0, this._init();
    }, u.prototype.setUnwrap = function() {
      this._unwrap = !0;
    }, u.prototype.howMany = function() {
      return this._howMany;
    }, u.prototype.setHowMany = function(b) {
      this._howMany = b;
    }, u.prototype._promiseFulfilled = function(b) {
      return this._addFulfilled(b), this._fulfilled() === this.howMany() ? (this._values.length = this.howMany(), this.howMany() === 1 && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0) : !1;
    }, u.prototype._promiseRejected = function(b) {
      return this._addRejected(b), this._checkOutcome();
    }, u.prototype._promiseCancelled = function() {
      return this._values instanceof e || this._values == null ? this._cancel() : (this._addRejected(o), this._checkOutcome());
    }, u.prototype._checkOutcome = function() {
      if (this.howMany() > this._canPossiblyFulfill()) {
        for (var b = new i(), m = this.length(); m < this._values.length; ++m)
          this._values[m] !== o && b.push(this._values[m]);
        return b.length > 0 ? this._reject(b) : this._cancel(), !0;
      }
      return !1;
    }, u.prototype._fulfilled = function() {
      return this._totalResolved;
    }, u.prototype._rejected = function() {
      return this._values.length - this.length();
    }, u.prototype._addRejected = function(b) {
      this._values.push(b);
    }, u.prototype._addFulfilled = function(b) {
      this._values[this._totalResolved++] = b;
    }, u.prototype._canPossiblyFulfill = function() {
      return this.length() - this._rejected();
    }, u.prototype._getRangeError = function(b) {
      var m = "Input array must contain at least " + this._howMany + " items but contains only " + b + " items";
      return new c(m);
    }, u.prototype._resolveEmptyArray = function() {
      this._reject(this._getRangeError(0));
    };
    function l(b, m) {
      if ((m | 0) !== m || m < 0)
        return t(`expecting a positive integer

    See http://goo.gl/MqrFmX
`);
      var g = new u(b), h = g.promise();
      return g.setHowMany(m), g.init(), h;
    }
    e.some = function(b, m) {
      return l(b, m);
    }, e.prototype.some = function(b) {
      return l(this, b);
    }, e._SomePromiseArray = u;
  }), Hr;
}
var Gr, ro;
function Nd() {
  return ro || (ro = 1, Gr = function(e, n) {
    var t = e.map;
    e.prototype.filter = function(r, c) {
      return t(this, r, c, n);
    }, e.filter = function(r, c, i) {
      return t(r, c, i, n);
    };
  }), Gr;
}
var Zr, io;
function Od() {
  return io || (io = 1, Zr = function(e, n) {
    var t = e.reduce, r = e.all;
    function c() {
      return r(this);
    }
    function i(a, o) {
      return t(a, o, n, n);
    }
    e.prototype.each = function(a) {
      return t(this, a, n, 0)._then(c, void 0, void 0, this, void 0);
    }, e.prototype.mapSeries = function(a) {
      return t(this, a, n, n);
    }, e.each = function(a, o) {
      return t(a, o, n, 0)._then(c, void 0, void 0, a, void 0);
    }, e.mapSeries = i;
  }), Zr;
}
var $r, ao;
function Id() {
  return ao || (ao = 1, $r = function(e) {
    var n = e._SomePromiseArray;
    function t(r) {
      var c = new n(r), i = c.promise();
      return c.setHowMany(1), c.setUnwrap(), c.init(), i;
    }
    e.any = function(r) {
      return t(r);
    }, e.prototype.any = function() {
      return t(this);
    };
  }), $r;
}
var oo;
function Ld() {
  return oo || (oo = 1, function(e) {
    e.exports = function() {
      var n = function() {
        return new g(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`);
      }, t = function() {
        return new T.PromiseInspection(this._target());
      }, r = function(W) {
        return T.reject(new g(W));
      };
      function c() {
      }
      var i = {}, a = Fe(), o;
      a.isNode ? o = function() {
        var W = process.domain;
        return W === void 0 && (W = null), W;
      } : o = function() {
        return null;
      }, a.notEnumerableProp(T, "_getDomain", o);
      var u = qn(), l = dd(), b = new l();
      u.defineProperty(T, "_async", { value: b });
      var m = fn(), g = T.TypeError = m.TypeError;
      T.RangeError = m.RangeError;
      var h = T.CancellationError = m.CancellationError;
      T.TimeoutError = m.TimeoutError, T.OperationalError = m.OperationalError, T.RejectionError = m.OperationalError, T.AggregateError = m.AggregateError;
      var y = function() {
      }, f = {}, s = {}, p = ld()(T, y), d = fd()(
        T,
        y,
        p,
        r,
        c
      ), D = hd()(T), w = D.create, _ = pd()(T, D);
      _.CapturedTrace;
      var U = gd()(T, p), E = md()(s), S = ls(), A = a.errorObj, I = a.tryCatch;
      function Z(W, O) {
        if (typeof O != "function")
          throw new g("expecting a function but got " + a.classString(O));
        if (W.constructor !== T)
          throw new g(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`);
      }
      function T(W) {
        this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, W !== y && (Z(this, W), this._resolveFromExecutor(W)), this._promiseCreated(), this._fireEvent("promiseCreated", this);
      }
      T.prototype.toString = function() {
        return "[object Promise]";
      }, T.prototype.caught = T.prototype.catch = function(W) {
        var O = arguments.length;
        if (O > 1) {
          var G = new Array(O - 1), q = 0, Q;
          for (Q = 0; Q < O - 1; ++Q) {
            var L = arguments[Q];
            if (a.isObject(L))
              G[q++] = L;
            else
              return r("expecting an object but got A catch statement predicate " + a.classString(L));
          }
          return G.length = q, W = arguments[Q], this.then(void 0, E(G, W, this));
        }
        return this.then(void 0, W);
      }, T.prototype.reflect = function() {
        return this._then(
          t,
          t,
          void 0,
          this,
          void 0
        );
      }, T.prototype.then = function(W, O) {
        if (_.warnings() && arguments.length > 0 && typeof W != "function" && typeof O != "function") {
          var G = ".then() only accepts functions but was passed: " + a.classString(W);
          arguments.length > 1 && (G += ", " + a.classString(O)), this._warn(G);
        }
        return this._then(W, O, void 0, void 0, void 0);
      }, T.prototype.done = function(W, O) {
        var G = this._then(W, O, void 0, void 0, void 0);
        G._setIsFinal();
      }, T.prototype.spread = function(W) {
        return typeof W != "function" ? r("expecting a function but got " + a.classString(W)) : this.all()._then(W, void 0, void 0, f, void 0);
      }, T.prototype.toJSON = function() {
        var W = {
          isFulfilled: !1,
          isRejected: !1,
          fulfillmentValue: void 0,
          rejectionReason: void 0
        };
        return this.isFulfilled() ? (W.fulfillmentValue = this.value(), W.isFulfilled = !0) : this.isRejected() && (W.rejectionReason = this.reason(), W.isRejected = !0), W;
      }, T.prototype.all = function() {
        return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new d(this).promise();
      }, T.prototype.error = function(W) {
        return this.caught(a.originatesFromRejection, W);
      }, T.getNewLibraryCopy = e.exports, T.is = function(W) {
        return W instanceof T;
      }, T.fromNode = T.fromCallback = function(W) {
        var O = new T(y);
        O._captureStackTrace();
        var G = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1, q = I(W)(S(O, G));
        return q === A && O._rejectCallback(q.e, !0), O._isFateSealed() || O._setAsyncGuaranteed(), O;
      }, T.all = function(W) {
        return new d(W).promise();
      }, T.cast = function(W) {
        var O = p(W);
        return O instanceof T || (O = new T(y), O._captureStackTrace(), O._setFulfilled(), O._rejectionHandler0 = W), O;
      }, T.resolve = T.fulfilled = T.cast, T.reject = T.rejected = function(W) {
        var O = new T(y);
        return O._captureStackTrace(), O._rejectCallback(W, !0), O;
      }, T.setScheduler = function(W) {
        if (typeof W != "function")
          throw new g("expecting a function but got " + a.classString(W));
        return b.setScheduler(W);
      }, T.prototype._then = function(W, O, G, q, Q) {
        var L = Q !== void 0, k = L ? Q : new T(y), re = this._target(), ae = re._bitField;
        L || (k._propagateFrom(this, 3), k._captureStackTrace(), q === void 0 && (this._bitField & 2097152) !== 0 && ((ae & 50397184) !== 0 ? q = this._boundValue() : q = re === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, k));
        var J = o();
        if ((ae & 50397184) !== 0) {
          var ce, fe, le = re._settlePromiseCtx;
          (ae & 33554432) !== 0 ? (fe = re._rejectionHandler0, ce = W) : (ae & 16777216) !== 0 ? (fe = re._fulfillmentHandler0, ce = O, re._unsetRejectionIsUnhandled()) : (le = re._settlePromiseLateCancellationObserver, fe = new h("late cancellation observer"), re._attachExtraTrace(fe), ce = O), b.invoke(le, re, {
            handler: J === null ? ce : typeof ce == "function" && a.domainBind(J, ce),
            promise: k,
            receiver: q,
            value: fe
          });
        } else
          re._addCallbacks(W, O, k, q, J);
        return k;
      }, T.prototype._length = function() {
        return this._bitField & 65535;
      }, T.prototype._isFateSealed = function() {
        return (this._bitField & 117506048) !== 0;
      }, T.prototype._isFollowing = function() {
        return (this._bitField & 67108864) === 67108864;
      }, T.prototype._setLength = function(W) {
        this._bitField = this._bitField & -65536 | W & 65535;
      }, T.prototype._setFulfilled = function() {
        this._bitField = this._bitField | 33554432, this._fireEvent("promiseFulfilled", this);
      }, T.prototype._setRejected = function() {
        this._bitField = this._bitField | 16777216, this._fireEvent("promiseRejected", this);
      }, T.prototype._setFollowing = function() {
        this._bitField = this._bitField | 67108864, this._fireEvent("promiseResolved", this);
      }, T.prototype._setIsFinal = function() {
        this._bitField = this._bitField | 4194304;
      }, T.prototype._isFinal = function() {
        return (this._bitField & 4194304) > 0;
      }, T.prototype._unsetCancelled = function() {
        this._bitField = this._bitField & -65537;
      }, T.prototype._setCancelled = function() {
        this._bitField = this._bitField | 65536, this._fireEvent("promiseCancelled", this);
      }, T.prototype._setWillBeCancelled = function() {
        this._bitField = this._bitField | 8388608;
      }, T.prototype._setAsyncGuaranteed = function() {
        b.hasCustomScheduler() || (this._bitField = this._bitField | 134217728);
      }, T.prototype._receiverAt = function(W) {
        var O = W === 0 ? this._receiver0 : this[W * 4 - 4 + 3];
        if (O !== i)
          return O === void 0 && this._isBound() ? this._boundValue() : O;
      }, T.prototype._promiseAt = function(W) {
        return this[W * 4 - 4 + 2];
      }, T.prototype._fulfillmentHandlerAt = function(W) {
        return this[W * 4 - 4 + 0];
      }, T.prototype._rejectionHandlerAt = function(W) {
        return this[W * 4 - 4 + 1];
      }, T.prototype._boundValue = function() {
      }, T.prototype._migrateCallback0 = function(W) {
        W._bitField;
        var O = W._fulfillmentHandler0, G = W._rejectionHandler0, q = W._promise0, Q = W._receiverAt(0);
        Q === void 0 && (Q = i), this._addCallbacks(O, G, q, Q, null);
      }, T.prototype._migrateCallbackAt = function(W, O) {
        var G = W._fulfillmentHandlerAt(O), q = W._rejectionHandlerAt(O), Q = W._promiseAt(O), L = W._receiverAt(O);
        L === void 0 && (L = i), this._addCallbacks(G, q, Q, L, null);
      }, T.prototype._addCallbacks = function(W, O, G, q, Q) {
        var L = this._length();
        if (L >= 65531 && (L = 0, this._setLength(0)), L === 0)
          this._promise0 = G, this._receiver0 = q, typeof W == "function" && (this._fulfillmentHandler0 = Q === null ? W : a.domainBind(Q, W)), typeof O == "function" && (this._rejectionHandler0 = Q === null ? O : a.domainBind(Q, O));
        else {
          var k = L * 4 - 4;
          this[k + 2] = G, this[k + 3] = q, typeof W == "function" && (this[k + 0] = Q === null ? W : a.domainBind(Q, W)), typeof O == "function" && (this[k + 1] = Q === null ? O : a.domainBind(Q, O));
        }
        return this._setLength(L + 1), L;
      }, T.prototype._proxy = function(W, O) {
        this._addCallbacks(void 0, void 0, O, W, null);
      }, T.prototype._resolveCallback = function(W, O) {
        if ((this._bitField & 117506048) === 0) {
          if (W === this)
            return this._rejectCallback(n(), !1);
          var G = p(W, this);
          if (!(G instanceof T)) return this._fulfill(W);
          O && this._propagateFrom(G, 2);
          var q = G._target();
          if (q === this) {
            this._reject(n());
            return;
          }
          var Q = q._bitField;
          if ((Q & 50397184) === 0) {
            var L = this._length();
            L > 0 && q._migrateCallback0(this);
            for (var k = 1; k < L; ++k)
              q._migrateCallbackAt(this, k);
            this._setFollowing(), this._setLength(0), this._setFollowee(q);
          } else if ((Q & 33554432) !== 0)
            this._fulfill(q._value());
          else if ((Q & 16777216) !== 0)
            this._reject(q._reason());
          else {
            var re = new h("late cancellation observer");
            q._attachExtraTrace(re), this._reject(re);
          }
        }
      }, T.prototype._rejectCallback = function(W, O, G) {
        var q = a.ensureErrorObject(W), Q = q === W;
        if (!Q && !G && _.warnings()) {
          var L = "a promise was rejected with a non-error: " + a.classString(W);
          this._warn(L, !0);
        }
        this._attachExtraTrace(q, O ? Q : !1), this._reject(W);
      }, T.prototype._resolveFromExecutor = function(W) {
        var O = this;
        this._captureStackTrace(), this._pushContext();
        var G = !0, q = this._execute(W, function(Q) {
          O._resolveCallback(Q);
        }, function(Q) {
          O._rejectCallback(Q, G);
        });
        G = !1, this._popContext(), q !== void 0 && O._rejectCallback(q, !0);
      }, T.prototype._settlePromiseFromHandler = function(W, O, G, q) {
        var Q = q._bitField;
        if ((Q & 65536) === 0) {
          q._pushContext();
          var L;
          O === f ? !G || typeof G.length != "number" ? (L = A, L.e = new g("cannot .spread() a non-array: " + a.classString(G))) : L = I(W).apply(this._boundValue(), G) : L = I(W).call(O, G);
          var k = q._popContext();
          Q = q._bitField, (Q & 65536) === 0 && (L === s ? q._reject(G) : L === A ? q._rejectCallback(L.e, !1) : (_.checkForgottenReturns(L, k, "", q, this), q._resolveCallback(L)));
        }
      }, T.prototype._target = function() {
        for (var W = this; W._isFollowing(); ) W = W._followee();
        return W;
      }, T.prototype._followee = function() {
        return this._rejectionHandler0;
      }, T.prototype._setFollowee = function(W) {
        this._rejectionHandler0 = W;
      }, T.prototype._settlePromise = function(W, O, G, q) {
        var Q = W instanceof T, L = this._bitField, k = (L & 134217728) !== 0;
        (L & 65536) !== 0 ? (Q && W._invokeInternalOnCancel(), G instanceof U && G.isFinallyHandler() ? (G.cancelPromise = W, I(O).call(G, q) === A && W._reject(A.e)) : O === t ? W._fulfill(t.call(G)) : G instanceof c ? G._promiseCancelled(W) : Q || W instanceof d ? W._cancel() : G.cancel()) : typeof O == "function" ? Q ? (k && W._setAsyncGuaranteed(), this._settlePromiseFromHandler(O, G, q, W)) : O.call(G, q, W) : G instanceof c ? G._isResolved() || ((L & 33554432) !== 0 ? G._promiseFulfilled(q, W) : G._promiseRejected(q, W)) : Q && (k && W._setAsyncGuaranteed(), (L & 33554432) !== 0 ? W._fulfill(q) : W._reject(q));
      }, T.prototype._settlePromiseLateCancellationObserver = function(W) {
        var O = W.handler, G = W.promise, q = W.receiver, Q = W.value;
        typeof O == "function" ? G instanceof T ? this._settlePromiseFromHandler(O, q, Q, G) : O.call(q, Q, G) : G instanceof T && G._reject(Q);
      }, T.prototype._settlePromiseCtx = function(W) {
        this._settlePromise(W.promise, W.handler, W.receiver, W.value);
      }, T.prototype._settlePromise0 = function(W, O, G) {
        var q = this._promise0, Q = this._receiverAt(0);
        this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(q, W, Q, O);
      }, T.prototype._clearCallbackDataAtIndex = function(W) {
        var O = W * 4 - 4;
        this[O + 2] = this[O + 3] = this[O + 0] = this[O + 1] = void 0;
      }, T.prototype._fulfill = function(W) {
        var O = this._bitField;
        if (!((O & 117506048) >>> 16)) {
          if (W === this) {
            var G = n();
            return this._attachExtraTrace(G), this._reject(G);
          }
          this._setFulfilled(), this._rejectionHandler0 = W, (O & 65535) > 0 && ((O & 134217728) !== 0 ? this._settlePromises() : b.settlePromises(this));
        }
      }, T.prototype._reject = function(W) {
        var O = this._bitField;
        if (!((O & 117506048) >>> 16)) {
          if (this._setRejected(), this._fulfillmentHandler0 = W, this._isFinal())
            return b.fatalError(W, a.isNode);
          (O & 65535) > 0 ? b.settlePromises(this) : this._ensurePossibleRejectionHandled();
        }
      }, T.prototype._fulfillPromises = function(W, O) {
        for (var G = 1; G < W; G++) {
          var q = this._fulfillmentHandlerAt(G), Q = this._promiseAt(G), L = this._receiverAt(G);
          this._clearCallbackDataAtIndex(G), this._settlePromise(Q, q, L, O);
        }
      }, T.prototype._rejectPromises = function(W, O) {
        for (var G = 1; G < W; G++) {
          var q = this._rejectionHandlerAt(G), Q = this._promiseAt(G), L = this._receiverAt(G);
          this._clearCallbackDataAtIndex(G), this._settlePromise(Q, q, L, O);
        }
      }, T.prototype._settlePromises = function() {
        var W = this._bitField, O = W & 65535;
        if (O > 0) {
          if ((W & 16842752) !== 0) {
            var G = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, G, W), this._rejectPromises(O, G);
          } else {
            var q = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, q, W), this._fulfillPromises(O, q);
          }
          this._setLength(0);
        }
        this._clearCancellationData();
      }, T.prototype._settledValue = function() {
        var W = this._bitField;
        if ((W & 33554432) !== 0)
          return this._rejectionHandler0;
        if ((W & 16777216) !== 0)
          return this._fulfillmentHandler0;
      };
      function R(W) {
        this.promise._resolveCallback(W);
      }
      function x(W) {
        this.promise._rejectCallback(W, !1);
      }
      T.defer = T.pending = function() {
        _.deprecated("Promise.defer", "new Promise");
        var W = new T(y);
        return {
          promise: W,
          resolve: R,
          reject: x
        };
      }, a.notEnumerableProp(
        T,
        "_makeSelfResolutionError",
        n
      ), bd()(
        T,
        y,
        p,
        r,
        _
      ), yd()(T, y, p, _), Dd()(T, d, r, _), vd()(T), xd()(T), _d()(
        T,
        d,
        p,
        y,
        b,
        o
      ), T.Promise = T, T.version = "3.4.7", Ud()(T, d, r, p, y, _), Td()(T), wd()(T, r, p, w, y, _), Ed()(T, y, _), Ad()(T, r, y, p, c, _), Fd()(T), Cd()(T, y), Sd()(T, d, p, r), Bd()(T, y, p, r), kd()(T, d, r, p, y, _), Wd()(T, d, _), Rd()(T, d, r), Nd()(T, y), Od()(T, y), Id()(T), a.toFastProperties(T), a.toFastProperties(T.prototype);
      function z(W) {
        var O = new T(y);
        O._fulfillmentHandler0 = W, O._rejectionHandler0 = W, O._promise0 = W, O._receiver0 = W;
      }
      return z({ a: 1 }), z({ b: 2 }), z({ c: 3 }), z(1), z(function() {
      }), z(void 0), z(!1), z(new T(y)), _.setBounds(l.firstLineError, a.lastLineError), T;
    };
  }(yr)), yr.exports;
}
var co;
function mn() {
  if (co) return Ve;
  co = 1;
  var e = Be, n = Ld()();
  Ve.defer = t, Ve.when = n.resolve, Ve.resolve = n.resolve, Ve.all = n.all, Ve.props = n.props, Ve.reject = n.reject, Ve.promisify = n.promisify, Ve.mapSeries = n.mapSeries, Ve.attempt = n.attempt, Ve.nfcall = function(r) {
    var c = Array.prototype.slice.call(arguments, 1), i = n.promisify(r);
    return i.apply(null, c);
  }, n.prototype.fail = n.prototype.caught, n.prototype.also = function(r) {
    return this.then(function(c) {
      var i = e.extend({}, c, r(c));
      return n.props(i);
    });
  };
  function t() {
    var r, c, i = new n.Promise(function(a, o) {
      r = a, c = o;
    });
    return {
      resolve: r,
      reject: c,
      promise: i
    };
  }
  return Ve;
}
var we = {}, uo;
function Sn() {
  if (uo) return we;
  uo = 1;
  var e = Be, n = we.types = {
    document: "document",
    paragraph: "paragraph",
    run: "run",
    text: "text",
    tab: "tab",
    checkbox: "checkbox",
    hyperlink: "hyperlink",
    noteReference: "noteReference",
    image: "image",
    note: "note",
    commentReference: "commentReference",
    comment: "comment",
    table: "table",
    tableRow: "tableRow",
    tableCell: "tableCell",
    break: "break",
    bookmarkStart: "bookmarkStart"
  };
  function t(U, E) {
    return E = E || {}, {
      type: n.document,
      children: U,
      notes: E.notes || new m({}),
      comments: E.comments || []
    };
  }
  function r(U, E) {
    E = E || {};
    var S = E.indent || {};
    return {
      type: n.paragraph,
      children: U,
      styleId: E.styleId || null,
      styleName: E.styleName || null,
      numbering: E.numbering || null,
      alignment: E.alignment || null,
      indent: {
        start: S.start || null,
        end: S.end || null,
        firstLine: S.firstLine || null,
        hanging: S.hanging || null
      }
    };
  }
  function c(U, E) {
    return E = E || {}, {
      type: n.run,
      children: U,
      styleId: E.styleId || null,
      styleName: E.styleName || null,
      isBold: !!E.isBold,
      isUnderline: !!E.isUnderline,
      isItalic: !!E.isItalic,
      isStrikethrough: !!E.isStrikethrough,
      isAllCaps: !!E.isAllCaps,
      isSmallCaps: !!E.isSmallCaps,
      verticalAlignment: E.verticalAlignment || i.baseline,
      font: E.font || null,
      fontSize: E.fontSize || null,
      highlight: E.highlight || null
    };
  }
  var i = {
    baseline: "baseline",
    superscript: "superscript",
    subscript: "subscript"
  };
  function a(U) {
    return {
      type: n.text,
      value: U
    };
  }
  function o() {
    return {
      type: n.tab
    };
  }
  function u(U) {
    return {
      type: n.checkbox,
      checked: U.checked
    };
  }
  function l(U, E) {
    return {
      type: n.hyperlink,
      children: U,
      href: E.href,
      anchor: E.anchor,
      targetFrame: E.targetFrame
    };
  }
  function b(U) {
    return {
      type: n.noteReference,
      noteType: U.noteType,
      noteId: U.noteId
    };
  }
  function m(U) {
    this._notes = e.indexBy(U, function(E) {
      return f(E.noteType, E.noteId);
    });
  }
  m.prototype.resolve = function(U) {
    return this.findNoteByKey(f(U.noteType, U.noteId));
  }, m.prototype.findNoteByKey = function(U) {
    return this._notes[U] || null;
  };
  function g(U) {
    return {
      type: n.note,
      noteType: U.noteType,
      noteId: U.noteId,
      body: U.body
    };
  }
  function h(U) {
    return {
      type: n.commentReference,
      commentId: U.commentId
    };
  }
  function y(U) {
    return {
      type: n.comment,
      commentId: U.commentId,
      body: U.body,
      authorName: U.authorName,
      authorInitials: U.authorInitials
    };
  }
  function f(U, E) {
    return U + "-" + E;
  }
  function s(U) {
    return {
      type: n.image,
      // `read` is retained for backwards compatibility, but other read
      // methods should be preferred.
      read: function(E) {
        return E ? U.readImage(E) : U.readImage().then(function(S) {
          return Buffer.from(S);
        });
      },
      readAsArrayBuffer: function() {
        return U.readImage();
      },
      readAsBase64String: function() {
        return U.readImage("base64");
      },
      readAsBuffer: function() {
        return U.readImage().then(function(E) {
          return Buffer.from(E);
        });
      },
      altText: U.altText,
      contentType: U.contentType
    };
  }
  function p(U, E) {
    return E = E || {}, {
      type: n.table,
      children: U,
      styleId: E.styleId || null,
      styleName: E.styleName || null
    };
  }
  function d(U, E) {
    return E = E || {}, {
      type: n.tableRow,
      children: U,
      isHeader: E.isHeader || !1
    };
  }
  function D(U, E) {
    return E = E || {}, {
      type: n.tableCell,
      children: U,
      colSpan: E.colSpan == null ? 1 : E.colSpan,
      rowSpan: E.rowSpan == null ? 1 : E.rowSpan
    };
  }
  function w(U) {
    return {
      type: n.break,
      breakType: U
    };
  }
  function _(U) {
    return {
      type: n.bookmarkStart,
      name: U.name
    };
  }
  return we.document = we.Document = t, we.paragraph = we.Paragraph = r, we.run = we.Run = c, we.text = we.Text = a, we.tab = we.Tab = o, we.checkbox = we.Checkbox = u, we.Hyperlink = l, we.noteReference = we.NoteReference = b, we.Notes = m, we.Note = g, we.commentReference = h, we.comment = y, we.Image = s, we.Table = p, we.TableRow = d, we.TableCell = D, we.lineBreak = w("line"), we.pageBreak = w("page"), we.columnBreak = w("column"), we.BookmarkStart = _, we.verticalAlignment = i, we;
}
var kn = {}, so;
function an() {
  if (so) return kn;
  so = 1;
  var e = Be;
  kn.Result = n, kn.success = t, kn.warning = r, kn.error = c;
  function n(u, l) {
    this.value = u, this.messages = l || [];
  }
  n.prototype.map = function(u) {
    return new n(u(this.value), this.messages);
  }, n.prototype.flatMap = function(u) {
    var l = u(this.value);
    return new n(l.value, i([this, l]));
  }, n.prototype.flatMapThen = function(u) {
    var l = this;
    return u(this.value).then(function(b) {
      return new n(b.value, i([l, b]));
    });
  }, n.combine = function(u) {
    var l = e.flatten(e.pluck(u, "value")), b = i(u);
    return new n(l, b);
  };
  function t(u) {
    return new n(u, []);
  }
  function r(u) {
    return {
      type: "warning",
      message: u
    };
  }
  function c(u) {
    return {
      type: "error",
      message: u.message,
      error: u
    };
  }
  function i(u) {
    var l = [];
    return e.flatten(e.pluck(u, "messages"), !0).forEach(function(b) {
      a(l, b) || l.push(b);
    }), l;
  }
  function a(u, l) {
    return e.find(u, o.bind(null, l)) !== void 0;
  }
  function o(u, l) {
    return u.type === l.type && u.message === l.message;
  }
  return kn;
}
var jn = {}, Xn = {}, lo;
function Md() {
  if (lo) return Xn;
  lo = 1, Xn.byteLength = o, Xn.toByteArray = l, Xn.fromByteArray = g;
  for (var e = [], n = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, i = r.length; c < i; ++c)
    e[c] = r[c], n[r.charCodeAt(c)] = c;
  n[45] = 62, n[95] = 63;
  function a(h) {
    var y = h.length;
    if (y % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var f = h.indexOf("=");
    f === -1 && (f = y);
    var s = f === y ? 0 : 4 - f % 4;
    return [f, s];
  }
  function o(h) {
    var y = a(h), f = y[0], s = y[1];
    return (f + s) * 3 / 4 - s;
  }
  function u(h, y, f) {
    return (y + f) * 3 / 4 - f;
  }
  function l(h) {
    var y, f = a(h), s = f[0], p = f[1], d = new t(u(h, s, p)), D = 0, w = p > 0 ? s - 4 : s, _;
    for (_ = 0; _ < w; _ += 4)
      y = n[h.charCodeAt(_)] << 18 | n[h.charCodeAt(_ + 1)] << 12 | n[h.charCodeAt(_ + 2)] << 6 | n[h.charCodeAt(_ + 3)], d[D++] = y >> 16 & 255, d[D++] = y >> 8 & 255, d[D++] = y & 255;
    return p === 2 && (y = n[h.charCodeAt(_)] << 2 | n[h.charCodeAt(_ + 1)] >> 4, d[D++] = y & 255), p === 1 && (y = n[h.charCodeAt(_)] << 10 | n[h.charCodeAt(_ + 1)] << 4 | n[h.charCodeAt(_ + 2)] >> 2, d[D++] = y >> 8 & 255, d[D++] = y & 255), d;
  }
  function b(h) {
    return e[h >> 18 & 63] + e[h >> 12 & 63] + e[h >> 6 & 63] + e[h & 63];
  }
  function m(h, y, f) {
    for (var s, p = [], d = y; d < f; d += 3)
      s = (h[d] << 16 & 16711680) + (h[d + 1] << 8 & 65280) + (h[d + 2] & 255), p.push(b(s));
    return p.join("");
  }
  function g(h) {
    for (var y, f = h.length, s = f % 3, p = [], d = 16383, D = 0, w = f - s; D < w; D += d)
      p.push(m(h, D, D + d > w ? w : D + d));
    return s === 1 ? (y = h[f - 1], p.push(
      e[y >> 2] + e[y << 4 & 63] + "=="
    )) : s === 2 && (y = (h[f - 2] << 8) + h[f - 1], p.push(
      e[y >> 10] + e[y >> 4 & 63] + e[y << 2 & 63] + "="
    )), p.join("");
  }
  return Xn;
}
function dt(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Yr = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
var fo;
function qd() {
  return fo || (fo = 1, function(e, n) {
    (function(t) {
      e.exports = t();
    })(function() {
      return function t(r, c, i) {
        function a(l, b) {
          if (!c[l]) {
            if (!r[l]) {
              var m = typeof dt == "function" && dt;
              if (!b && m) return m(l, !0);
              if (o) return o(l, !0);
              var g = new Error("Cannot find module '" + l + "'");
              throw g.code = "MODULE_NOT_FOUND", g;
            }
            var h = c[l] = { exports: {} };
            r[l][0].call(h.exports, function(y) {
              var f = r[l][1][y];
              return a(f || y);
            }, h, h.exports, t, r, c, i);
          }
          return c[l].exports;
        }
        for (var o = typeof dt == "function" && dt, u = 0; u < i.length; u++) a(i[u]);
        return a;
      }({ 1: [function(t, r, c) {
        var i = t("./utils"), a = t("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        c.encode = function(u) {
          for (var l, b, m, g, h, y, f, s = [], p = 0, d = u.length, D = d, w = i.getTypeOf(u) !== "string"; p < u.length; ) D = d - p, m = w ? (l = u[p++], b = p < d ? u[p++] : 0, p < d ? u[p++] : 0) : (l = u.charCodeAt(p++), b = p < d ? u.charCodeAt(p++) : 0, p < d ? u.charCodeAt(p++) : 0), g = l >> 2, h = (3 & l) << 4 | b >> 4, y = 1 < D ? (15 & b) << 2 | m >> 6 : 64, f = 2 < D ? 63 & m : 64, s.push(o.charAt(g) + o.charAt(h) + o.charAt(y) + o.charAt(f));
          return s.join("");
        }, c.decode = function(u) {
          var l, b, m, g, h, y, f = 0, s = 0, p = "data:";
          if (u.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
          var d, D = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (u.charAt(u.length - 1) === o.charAt(64) && D--, u.charAt(u.length - 2) === o.charAt(64) && D--, D % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (d = a.uint8array ? new Uint8Array(0 | D) : new Array(0 | D); f < u.length; ) l = o.indexOf(u.charAt(f++)) << 2 | (g = o.indexOf(u.charAt(f++))) >> 4, b = (15 & g) << 4 | (h = o.indexOf(u.charAt(f++))) >> 2, m = (3 & h) << 6 | (y = o.indexOf(u.charAt(f++))), d[s++] = l, h !== 64 && (d[s++] = b), y !== 64 && (d[s++] = m);
          return d;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(t, r, c) {
        var i = t("./external"), a = t("./stream/DataWorker"), o = t("./stream/Crc32Probe"), u = t("./stream/DataLengthProbe");
        function l(b, m, g, h, y) {
          this.compressedSize = b, this.uncompressedSize = m, this.crc32 = g, this.compression = h, this.compressedContent = y;
        }
        l.prototype = { getContentWorker: function() {
          var b = new a(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")), m = this;
          return b.on("end", function() {
            if (this.streamInfo.data_length !== m.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), b;
        }, getCompressedWorker: function() {
          return new a(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, l.createWorkerFrom = function(b, m, g) {
          return b.pipe(new o()).pipe(new u("uncompressedSize")).pipe(m.compressWorker(g)).pipe(new u("compressedSize")).withStreamInfo("compression", m);
        }, r.exports = l;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, r, c) {
        var i = t("./stream/GenericWorker");
        c.STORE = { magic: "\0\0", compressWorker: function() {
          return new i("STORE compression");
        }, uncompressWorker: function() {
          return new i("STORE decompression");
        } }, c.DEFLATE = t("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, r, c) {
        var i = t("./utils"), a = function() {
          for (var o, u = [], l = 0; l < 256; l++) {
            o = l;
            for (var b = 0; b < 8; b++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
            u[l] = o;
          }
          return u;
        }();
        r.exports = function(o, u) {
          return o !== void 0 && o.length ? i.getTypeOf(o) !== "string" ? function(l, b, m, g) {
            var h = a, y = g + m;
            l ^= -1;
            for (var f = g; f < y; f++) l = l >>> 8 ^ h[255 & (l ^ b[f])];
            return -1 ^ l;
          }(0 | u, o, o.length, 0) : function(l, b, m, g) {
            var h = a, y = g + m;
            l ^= -1;
            for (var f = g; f < y; f++) l = l >>> 8 ^ h[255 & (l ^ b.charCodeAt(f))];
            return -1 ^ l;
          }(0 | u, o, o.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(t, r, c) {
        c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
      }, {}], 6: [function(t, r, c) {
        var i = null;
        i = typeof Promise < "u" ? Promise : t("lie"), r.exports = { Promise: i };
      }, { lie: 37 }], 7: [function(t, r, c) {
        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = t("pako"), o = t("./utils"), u = t("./stream/GenericWorker"), l = i ? "uint8array" : "array";
        function b(m, g) {
          u.call(this, "FlateWorker/" + m), this._pako = null, this._pakoAction = m, this._pakoOptions = g, this.meta = {};
        }
        c.magic = "\b\0", o.inherits(b, u), b.prototype.processChunk = function(m) {
          this.meta = m.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(l, m.data), !1);
        }, b.prototype.flush = function() {
          u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, b.prototype.cleanUp = function() {
          u.prototype.cleanUp.call(this), this._pako = null;
        }, b.prototype._createPako = function() {
          this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var m = this;
          this._pako.onData = function(g) {
            m.push({ data: g, meta: m.meta });
          };
        }, c.compressWorker = function(m) {
          return new b("Deflate", m);
        }, c.uncompressWorker = function() {
          return new b("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, r, c) {
        function i(h, y) {
          var f, s = "";
          for (f = 0; f < y; f++) s += String.fromCharCode(255 & h), h >>>= 8;
          return s;
        }
        function a(h, y, f, s, p, d) {
          var D, w, _ = h.file, U = h.compression, E = d !== l.utf8encode, S = o.transformTo("string", d(_.name)), A = o.transformTo("string", l.utf8encode(_.name)), I = _.comment, Z = o.transformTo("string", d(I)), T = o.transformTo("string", l.utf8encode(I)), R = A.length !== _.name.length, x = T.length !== I.length, z = "", W = "", O = "", G = _.dir, q = _.date, Q = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          y && !f || (Q.crc32 = h.crc32, Q.compressedSize = h.compressedSize, Q.uncompressedSize = h.uncompressedSize);
          var L = 0;
          y && (L |= 8), E || !R && !x || (L |= 2048);
          var k = 0, re = 0;
          G && (k |= 16), p === "UNIX" ? (re = 798, k |= function(J, ce) {
            var fe = J;
            return J || (fe = ce ? 16893 : 33204), (65535 & fe) << 16;
          }(_.unixPermissions, G)) : (re = 20, k |= function(J) {
            return 63 & (J || 0);
          }(_.dosPermissions)), D = q.getUTCHours(), D <<= 6, D |= q.getUTCMinutes(), D <<= 5, D |= q.getUTCSeconds() / 2, w = q.getUTCFullYear() - 1980, w <<= 4, w |= q.getUTCMonth() + 1, w <<= 5, w |= q.getUTCDate(), R && (W = i(1, 1) + i(b(S), 4) + A, z += "up" + i(W.length, 2) + W), x && (O = i(1, 1) + i(b(Z), 4) + T, z += "uc" + i(O.length, 2) + O);
          var ae = "";
          return ae += `
\0`, ae += i(L, 2), ae += U.magic, ae += i(D, 2), ae += i(w, 2), ae += i(Q.crc32, 4), ae += i(Q.compressedSize, 4), ae += i(Q.uncompressedSize, 4), ae += i(S.length, 2), ae += i(z.length, 2), { fileRecord: m.LOCAL_FILE_HEADER + ae + S + z, dirRecord: m.CENTRAL_FILE_HEADER + i(re, 2) + ae + i(Z.length, 2) + "\0\0\0\0" + i(k, 4) + i(s, 4) + S + z + Z };
        }
        var o = t("../utils"), u = t("../stream/GenericWorker"), l = t("../utf8"), b = t("../crc32"), m = t("../signature");
        function g(h, y, f, s) {
          u.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = f, this.encodeFileName = s, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        o.inherits(g, u), g.prototype.push = function(h) {
          var y = h.meta.percent || 0, f = this.entriesCount, s = this._sources.length;
          this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, u.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: f ? (y + 100 * (f - s - 1)) / f : 100 } }));
        }, g.prototype.openedSource = function(h) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
          var y = this.streamFiles && !h.file.dir;
          if (y) {
            var f = a(h, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: f.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = !0;
        }, g.prototype.closedSource = function(h) {
          this.accumulate = !1;
          var y = this.streamFiles && !h.file.dir, f = a(h, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(f.dirRecord), y) this.push({ data: function(s) {
            return m.DATA_DESCRIPTOR + i(s.crc32, 4) + i(s.compressedSize, 4) + i(s.uncompressedSize, 4);
          }(h), meta: { percent: 100 } });
          else for (this.push({ data: f.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, g.prototype.flush = function() {
          for (var h = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
          var f = this.bytesWritten - h, s = function(p, d, D, w, _) {
            var U = o.transformTo("string", _(w));
            return m.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(p, 2) + i(p, 2) + i(d, 4) + i(D, 4) + i(U.length, 2) + U;
          }(this.dirRecords.length, f, h, this.zipComment, this.encodeFileName);
          this.push({ data: s, meta: { percent: 100 } });
        }, g.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, g.prototype.registerPrevious = function(h) {
          this._sources.push(h);
          var y = this;
          return h.on("data", function(f) {
            y.processChunk(f);
          }), h.on("end", function() {
            y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
          }), h.on("error", function(f) {
            y.error(f);
          }), this;
        }, g.prototype.resume = function() {
          return !!u.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, g.prototype.error = function(h) {
          var y = this._sources;
          if (!u.prototype.error.call(this, h)) return !1;
          for (var f = 0; f < y.length; f++) try {
            y[f].error(h);
          } catch {
          }
          return !0;
        }, g.prototype.lock = function() {
          u.prototype.lock.call(this);
          for (var h = this._sources, y = 0; y < h.length; y++) h[y].lock();
        }, r.exports = g;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, r, c) {
        var i = t("../compressions"), a = t("./ZipFileWorker");
        c.generateWorker = function(o, u, l) {
          var b = new a(u.streamFiles, l, u.platform, u.encodeFileName), m = 0;
          try {
            o.forEach(function(g, h) {
              m++;
              var y = function(d, D) {
                var w = d || D, _ = i[w];
                if (!_) throw new Error(w + " is not a valid compression method !");
                return _;
              }(h.options.compression, u.compression), f = h.options.compressionOptions || u.compressionOptions || {}, s = h.dir, p = h.date;
              h._compressWorker(y, f).withStreamInfo("file", { name: g, dir: s, date: p, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(b);
            }), b.entriesCount = m;
          } catch (g) {
            b.error(g);
          }
          return b;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, r, c) {
        function i() {
          if (!(this instanceof i)) return new i();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var a = new i();
            for (var o in this) typeof this[o] != "function" && (a[o] = this[o]);
            return a;
          };
        }
        (i.prototype = t("./object")).loadAsync = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.version = "3.10.1", i.loadAsync = function(a, o) {
          return new i().loadAsync(a, o);
        }, i.external = t("./external"), r.exports = i;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, r, c) {
        var i = t("./utils"), a = t("./external"), o = t("./utf8"), u = t("./zipEntries"), l = t("./stream/Crc32Probe"), b = t("./nodejsUtils");
        function m(g) {
          return new a.Promise(function(h, y) {
            var f = g.decompressed.getContentWorker().pipe(new l());
            f.on("error", function(s) {
              y(s);
            }).on("end", function() {
              f.streamInfo.crc32 !== g.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : h();
            }).resume();
          });
        }
        r.exports = function(g, h) {
          var y = this;
          return h = i.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: o.utf8decode }), b.isNode && b.isStream(g) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", g, !0, h.optimizedBinaryString, h.base64).then(function(f) {
            var s = new u(h);
            return s.load(f), s;
          }).then(function(f) {
            var s = [a.Promise.resolve(f)], p = f.files;
            if (h.checkCRC32) for (var d = 0; d < p.length; d++) s.push(m(p[d]));
            return a.Promise.all(s);
          }).then(function(f) {
            for (var s = f.shift(), p = s.files, d = 0; d < p.length; d++) {
              var D = p[d], w = D.fileNameStr, _ = i.resolve(D.fileNameStr);
              y.file(_, D.decompressed, { binary: !0, optimizedBinaryString: !0, date: D.date, dir: D.dir, comment: D.fileCommentStr.length ? D.fileCommentStr : null, unixPermissions: D.unixPermissions, dosPermissions: D.dosPermissions, createFolders: h.createFolders }), D.dir || (y.file(_).unsafeOriginalName = w);
            }
            return s.zipComment.length && (y.comment = s.zipComment), y;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, r, c) {
        var i = t("../utils"), a = t("../stream/GenericWorker");
        function o(u, l) {
          a.call(this, "Nodejs stream input adapter for " + u), this._upstreamEnded = !1, this._bindStream(l);
        }
        i.inherits(o, a), o.prototype._bindStream = function(u) {
          var l = this;
          (this._stream = u).pause(), u.on("data", function(b) {
            l.push({ data: b, meta: { percent: 0 } });
          }).on("error", function(b) {
            l.isPaused ? this.generatedError = b : l.error(b);
          }).on("end", function() {
            l.isPaused ? l._upstreamEnded = !0 : l.end();
          });
        }, o.prototype.pause = function() {
          return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, o.prototype.resume = function() {
          return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, r.exports = o;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, r, c) {
        var i = t("readable-stream").Readable;
        function a(o, u, l) {
          i.call(this, u), this._helper = o;
          var b = this;
          o.on("data", function(m, g) {
            b.push(m) || b._helper.pause(), l && l(g);
          }).on("error", function(m) {
            b.emit("error", m);
          }).on("end", function() {
            b.push(null);
          });
        }
        t("../utils").inherits(a, i), a.prototype._read = function() {
          this._helper.resume();
        }, r.exports = a;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, r, c) {
        r.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, a) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, a);
          if (typeof i == "number") throw new Error('The "data" argument must not be a number');
          return new Buffer(i, a);
        }, allocBuffer: function(i) {
          if (Buffer.alloc) return Buffer.alloc(i);
          var a = new Buffer(i);
          return a.fill(0), a;
        }, isBuffer: function(i) {
          return Buffer.isBuffer(i);
        }, isStream: function(i) {
          return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
        } };
      }, {}], 15: [function(t, r, c) {
        function i(_, U, E) {
          var S, A = o.getTypeOf(U), I = o.extend(E || {}, b);
          I.date = I.date || /* @__PURE__ */ new Date(), I.compression !== null && (I.compression = I.compression.toUpperCase()), typeof I.unixPermissions == "string" && (I.unixPermissions = parseInt(I.unixPermissions, 8)), I.unixPermissions && 16384 & I.unixPermissions && (I.dir = !0), I.dosPermissions && 16 & I.dosPermissions && (I.dir = !0), I.dir && (_ = p(_)), I.createFolders && (S = s(_)) && d.call(this, S, !0);
          var Z = A === "string" && I.binary === !1 && I.base64 === !1;
          E && E.binary !== void 0 || (I.binary = !Z), (U instanceof m && U.uncompressedSize === 0 || I.dir || !U || U.length === 0) && (I.base64 = !1, I.binary = !0, U = "", I.compression = "STORE", A = "string");
          var T = null;
          T = U instanceof m || U instanceof u ? U : y.isNode && y.isStream(U) ? new f(_, U) : o.prepareContent(_, U, I.binary, I.optimizedBinaryString, I.base64);
          var R = new g(_, T, I);
          this.files[_] = R;
        }
        var a = t("./utf8"), o = t("./utils"), u = t("./stream/GenericWorker"), l = t("./stream/StreamHelper"), b = t("./defaults"), m = t("./compressedObject"), g = t("./zipObject"), h = t("./generate"), y = t("./nodejsUtils"), f = t("./nodejs/NodejsStreamInputAdapter"), s = function(_) {
          _.slice(-1) === "/" && (_ = _.substring(0, _.length - 1));
          var U = _.lastIndexOf("/");
          return 0 < U ? _.substring(0, U) : "";
        }, p = function(_) {
          return _.slice(-1) !== "/" && (_ += "/"), _;
        }, d = function(_, U) {
          return U = U !== void 0 ? U : b.createFolders, _ = p(_), this.files[_] || i.call(this, _, null, { dir: !0, createFolders: U }), this.files[_];
        };
        function D(_) {
          return Object.prototype.toString.call(_) === "[object RegExp]";
        }
        var w = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(_) {
          var U, E, S;
          for (U in this.files) S = this.files[U], (E = U.slice(this.root.length, U.length)) && U.slice(0, this.root.length) === this.root && _(E, S);
        }, filter: function(_) {
          var U = [];
          return this.forEach(function(E, S) {
            _(E, S) && U.push(S);
          }), U;
        }, file: function(_, U, E) {
          if (arguments.length !== 1) return _ = this.root + _, i.call(this, _, U, E), this;
          if (D(_)) {
            var S = _;
            return this.filter(function(I, Z) {
              return !Z.dir && S.test(I);
            });
          }
          var A = this.files[this.root + _];
          return A && !A.dir ? A : null;
        }, folder: function(_) {
          if (!_) return this;
          if (D(_)) return this.filter(function(A, I) {
            return I.dir && _.test(A);
          });
          var U = this.root + _, E = d.call(this, U), S = this.clone();
          return S.root = E.name, S;
        }, remove: function(_) {
          _ = this.root + _;
          var U = this.files[_];
          if (U || (_.slice(-1) !== "/" && (_ += "/"), U = this.files[_]), U && !U.dir) delete this.files[_];
          else for (var E = this.filter(function(A, I) {
            return I.name.slice(0, _.length) === _;
          }), S = 0; S < E.length; S++) delete this.files[E[S].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(_) {
          var U, E = {};
          try {
            if ((E = o.extend(_ || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = E.type.toLowerCase(), E.compression = E.compression.toUpperCase(), E.type === "binarystring" && (E.type = "string"), !E.type) throw new Error("No output type specified.");
            o.checkSupport(E.type), E.platform !== "darwin" && E.platform !== "freebsd" && E.platform !== "linux" && E.platform !== "sunos" || (E.platform = "UNIX"), E.platform === "win32" && (E.platform = "DOS");
            var S = E.comment || this.comment || "";
            U = h.generateWorker(this, E, S);
          } catch (A) {
            (U = new u("error")).error(A);
          }
          return new l(U, E.type || "string", E.mimeType);
        }, generateAsync: function(_, U) {
          return this.generateInternalStream(_).accumulate(U);
        }, generateNodeStream: function(_, U) {
          return (_ = _ || {}).type || (_.type = "nodebuffer"), this.generateInternalStream(_).toNodejsStream(U);
        } };
        r.exports = w;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, r, c) {
        r.exports = t("stream");
      }, { stream: void 0 }], 17: [function(t, r, c) {
        var i = t("./DataReader");
        function a(o) {
          i.call(this, o);
          for (var u = 0; u < this.data.length; u++) o[u] = 255 & o[u];
        }
        t("../utils").inherits(a, i), a.prototype.byteAt = function(o) {
          return this.data[this.zero + o];
        }, a.prototype.lastIndexOfSignature = function(o) {
          for (var u = o.charCodeAt(0), l = o.charCodeAt(1), b = o.charCodeAt(2), m = o.charCodeAt(3), g = this.length - 4; 0 <= g; --g) if (this.data[g] === u && this.data[g + 1] === l && this.data[g + 2] === b && this.data[g + 3] === m) return g - this.zero;
          return -1;
        }, a.prototype.readAndCheckSignature = function(o) {
          var u = o.charCodeAt(0), l = o.charCodeAt(1), b = o.charCodeAt(2), m = o.charCodeAt(3), g = this.readData(4);
          return u === g[0] && l === g[1] && b === g[2] && m === g[3];
        }, a.prototype.readData = function(o) {
          if (this.checkOffset(o), o === 0) return [];
          var u = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, u;
        }, r.exports = a;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, r, c) {
        var i = t("../utils");
        function a(o) {
          this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
        }
        a.prototype = { checkOffset: function(o) {
          this.checkIndex(this.index + o);
        }, checkIndex: function(o) {
          if (this.length < this.zero + o || o < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
        }, setIndex: function(o) {
          this.checkIndex(o), this.index = o;
        }, skip: function(o) {
          this.setIndex(this.index + o);
        }, byteAt: function() {
        }, readInt: function(o) {
          var u, l = 0;
          for (this.checkOffset(o), u = this.index + o - 1; u >= this.index; u--) l = (l << 8) + this.byteAt(u);
          return this.index += o, l;
        }, readString: function(o) {
          return i.transformTo("string", this.readData(o));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var o = this.readInt(4);
          return new Date(Date.UTC(1980 + (o >> 25 & 127), (o >> 21 & 15) - 1, o >> 16 & 31, o >> 11 & 31, o >> 5 & 63, (31 & o) << 1));
        } }, r.exports = a;
      }, { "../utils": 32 }], 19: [function(t, r, c) {
        var i = t("./Uint8ArrayReader");
        function a(o) {
          i.call(this, o);
        }
        t("../utils").inherits(a, i), a.prototype.readData = function(o) {
          this.checkOffset(o);
          var u = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, u;
        }, r.exports = a;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, r, c) {
        var i = t("./DataReader");
        function a(o) {
          i.call(this, o);
        }
        t("../utils").inherits(a, i), a.prototype.byteAt = function(o) {
          return this.data.charCodeAt(this.zero + o);
        }, a.prototype.lastIndexOfSignature = function(o) {
          return this.data.lastIndexOf(o) - this.zero;
        }, a.prototype.readAndCheckSignature = function(o) {
          return o === this.readData(4);
        }, a.prototype.readData = function(o) {
          this.checkOffset(o);
          var u = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, u;
        }, r.exports = a;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, r, c) {
        var i = t("./ArrayReader");
        function a(o) {
          i.call(this, o);
        }
        t("../utils").inherits(a, i), a.prototype.readData = function(o) {
          if (this.checkOffset(o), o === 0) return new Uint8Array(0);
          var u = this.data.subarray(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, u;
        }, r.exports = a;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, r, c) {
        var i = t("../utils"), a = t("../support"), o = t("./ArrayReader"), u = t("./StringReader"), l = t("./NodeBufferReader"), b = t("./Uint8ArrayReader");
        r.exports = function(m) {
          var g = i.getTypeOf(m);
          return i.checkSupport(g), g !== "string" || a.uint8array ? g === "nodebuffer" ? new l(m) : a.uint8array ? new b(i.transformTo("uint8array", m)) : new o(i.transformTo("array", m)) : new u(m);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, r, c) {
        c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(t, r, c) {
        var i = t("./GenericWorker"), a = t("../utils");
        function o(u) {
          i.call(this, "ConvertWorker to " + u), this.destType = u;
        }
        a.inherits(o, i), o.prototype.processChunk = function(u) {
          this.push({ data: a.transformTo(this.destType, u.data), meta: u.meta });
        }, r.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, r, c) {
        var i = t("./GenericWorker"), a = t("../crc32");
        function o() {
          i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        t("../utils").inherits(o, i), o.prototype.processChunk = function(u) {
          this.streamInfo.crc32 = a(u.data, this.streamInfo.crc32 || 0), this.push(u);
        }, r.exports = o;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, r, c) {
        var i = t("../utils"), a = t("./GenericWorker");
        function o(u) {
          a.call(this, "DataLengthProbe for " + u), this.propName = u, this.withStreamInfo(u, 0);
        }
        i.inherits(o, a), o.prototype.processChunk = function(u) {
          if (u) {
            var l = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = l + u.data.length;
          }
          a.prototype.processChunk.call(this, u);
        }, r.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, r, c) {
        var i = t("../utils"), a = t("./GenericWorker");
        function o(u) {
          a.call(this, "DataWorker");
          var l = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, u.then(function(b) {
            l.dataIsReady = !0, l.data = b, l.max = b && b.length || 0, l.type = i.getTypeOf(b), l.isPaused || l._tickAndRepeat();
          }, function(b) {
            l.error(b);
          });
        }
        i.inherits(o, a), o.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this.data = null;
        }, o.prototype.resume = function() {
          return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
        }, o.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, o.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return !1;
          var u = null, l = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              u = this.data.substring(this.index, l);
              break;
            case "uint8array":
              u = this.data.subarray(this.index, l);
              break;
            case "array":
            case "nodebuffer":
              u = this.data.slice(this.index, l);
          }
          return this.index = l, this.push({ data: u, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, r.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, r, c) {
        function i(a) {
          this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        i.prototype = { push: function(a) {
          this.emit("data", a);
        }, end: function() {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (a) {
            this.emit("error", a);
          }
          return !0;
        }, error: function(a) {
          return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
        }, on: function(a, o) {
          return this._listeners[a].push(o), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(a, o) {
          if (this._listeners[a]) for (var u = 0; u < this._listeners[a].length; u++) this._listeners[a][u].call(this, o);
        }, pipe: function(a) {
          return a.registerPrevious(this);
        }, registerPrevious: function(a) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
          var o = this;
          return a.on("data", function(u) {
            o.processChunk(u);
          }), a.on("end", function() {
            o.end();
          }), a.on("error", function(u) {
            o.error(u);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return !1;
          var a = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
        }, flush: function() {
        }, processChunk: function(a) {
          this.push(a);
        }, withStreamInfo: function(a, o) {
          return this.extraStreamInfo[a] = o, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var a = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + a : a;
        } }, r.exports = i;
      }, {}], 29: [function(t, r, c) {
        var i = t("../utils"), a = t("./ConvertWorker"), o = t("./GenericWorker"), u = t("../base64"), l = t("../support"), b = t("../external"), m = null;
        if (l.nodestream) try {
          m = t("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function g(y, f) {
          return new b.Promise(function(s, p) {
            var d = [], D = y._internalType, w = y._outputType, _ = y._mimeType;
            y.on("data", function(U, E) {
              d.push(U), f && f(E);
            }).on("error", function(U) {
              d = [], p(U);
            }).on("end", function() {
              try {
                var U = function(E, S, A) {
                  switch (E) {
                    case "blob":
                      return i.newBlob(i.transformTo("arraybuffer", S), A);
                    case "base64":
                      return u.encode(S);
                    default:
                      return i.transformTo(E, S);
                  }
                }(w, function(E, S) {
                  var A, I = 0, Z = null, T = 0;
                  for (A = 0; A < S.length; A++) T += S[A].length;
                  switch (E) {
                    case "string":
                      return S.join("");
                    case "array":
                      return Array.prototype.concat.apply([], S);
                    case "uint8array":
                      for (Z = new Uint8Array(T), A = 0; A < S.length; A++) Z.set(S[A], I), I += S[A].length;
                      return Z;
                    case "nodebuffer":
                      return Buffer.concat(S);
                    default:
                      throw new Error("concat : unsupported type '" + E + "'");
                  }
                }(D, d), _);
                s(U);
              } catch (E) {
                p(E);
              }
              d = [];
            }).resume();
          });
        }
        function h(y, f, s) {
          var p = f;
          switch (f) {
            case "blob":
            case "arraybuffer":
              p = "uint8array";
              break;
            case "base64":
              p = "string";
          }
          try {
            this._internalType = p, this._outputType = f, this._mimeType = s, i.checkSupport(p), this._worker = y.pipe(new a(p)), y.lock();
          } catch (d) {
            this._worker = new o("error"), this._worker.error(d);
          }
        }
        h.prototype = { accumulate: function(y) {
          return g(this, y);
        }, on: function(y, f) {
          var s = this;
          return y === "data" ? this._worker.on(y, function(p) {
            f.call(s, p.data, p.meta);
          }) : this._worker.on(y, function() {
            i.delay(f, arguments, s);
          }), this;
        }, resume: function() {
          return i.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(y) {
          if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
          return new m(this, { objectMode: this._outputType !== "nodebuffer" }, y);
        } }, r.exports = h;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, r, c) {
        if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") c.blob = !1;
        else {
          var i = new ArrayBuffer(0);
          try {
            c.blob = new Blob([i], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              a.append(i), c.blob = a.getBlob("application/zip").size === 0;
            } catch {
              c.blob = !1;
            }
          }
        }
        try {
          c.nodestream = !!t("readable-stream").Readable;
        } catch {
          c.nodestream = !1;
        }
      }, { "readable-stream": 16 }], 31: [function(t, r, c) {
        for (var i = t("./utils"), a = t("./support"), o = t("./nodejsUtils"), u = t("./stream/GenericWorker"), l = new Array(256), b = 0; b < 256; b++) l[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
        l[254] = l[254] = 1;
        function m() {
          u.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function g() {
          u.call(this, "utf-8 encode");
        }
        c.utf8encode = function(h) {
          return a.nodebuffer ? o.newBufferFrom(h, "utf-8") : function(y) {
            var f, s, p, d, D, w = y.length, _ = 0;
            for (d = 0; d < w; d++) (64512 & (s = y.charCodeAt(d))) == 55296 && d + 1 < w && (64512 & (p = y.charCodeAt(d + 1))) == 56320 && (s = 65536 + (s - 55296 << 10) + (p - 56320), d++), _ += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;
            for (f = a.uint8array ? new Uint8Array(_) : new Array(_), d = D = 0; D < _; d++) (64512 & (s = y.charCodeAt(d))) == 55296 && d + 1 < w && (64512 & (p = y.charCodeAt(d + 1))) == 56320 && (s = 65536 + (s - 55296 << 10) + (p - 56320), d++), s < 128 ? f[D++] = s : (s < 2048 ? f[D++] = 192 | s >>> 6 : (s < 65536 ? f[D++] = 224 | s >>> 12 : (f[D++] = 240 | s >>> 18, f[D++] = 128 | s >>> 12 & 63), f[D++] = 128 | s >>> 6 & 63), f[D++] = 128 | 63 & s);
            return f;
          }(h);
        }, c.utf8decode = function(h) {
          return a.nodebuffer ? i.transformTo("nodebuffer", h).toString("utf-8") : function(y) {
            var f, s, p, d, D = y.length, w = new Array(2 * D);
            for (f = s = 0; f < D; ) if ((p = y[f++]) < 128) w[s++] = p;
            else if (4 < (d = l[p])) w[s++] = 65533, f += d - 1;
            else {
              for (p &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && f < D; ) p = p << 6 | 63 & y[f++], d--;
              1 < d ? w[s++] = 65533 : p < 65536 ? w[s++] = p : (p -= 65536, w[s++] = 55296 | p >> 10 & 1023, w[s++] = 56320 | 1023 & p);
            }
            return w.length !== s && (w.subarray ? w = w.subarray(0, s) : w.length = s), i.applyFromCharCode(w);
          }(h = i.transformTo(a.uint8array ? "uint8array" : "array", h));
        }, i.inherits(m, u), m.prototype.processChunk = function(h) {
          var y = i.transformTo(a.uint8array ? "uint8array" : "array", h.data);
          if (this.leftOver && this.leftOver.length) {
            if (a.uint8array) {
              var f = y;
              (y = new Uint8Array(f.length + this.leftOver.length)).set(this.leftOver, 0), y.set(f, this.leftOver.length);
            } else y = this.leftOver.concat(y);
            this.leftOver = null;
          }
          var s = function(d, D) {
            var w;
            for ((D = D || d.length) > d.length && (D = d.length), w = D - 1; 0 <= w && (192 & d[w]) == 128; ) w--;
            return w < 0 || w === 0 ? D : w + l[d[w]] > D ? w : D;
          }(y), p = y;
          s !== y.length && (a.uint8array ? (p = y.subarray(0, s), this.leftOver = y.subarray(s, y.length)) : (p = y.slice(0, s), this.leftOver = y.slice(s, y.length))), this.push({ data: c.utf8decode(p), meta: h.meta });
        }, m.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, c.Utf8DecodeWorker = m, i.inherits(g, u), g.prototype.processChunk = function(h) {
          this.push({ data: c.utf8encode(h.data), meta: h.meta });
        }, c.Utf8EncodeWorker = g;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, r, c) {
        var i = t("./support"), a = t("./base64"), o = t("./nodejsUtils"), u = t("./external");
        function l(f) {
          return f;
        }
        function b(f, s) {
          for (var p = 0; p < f.length; ++p) s[p] = 255 & f.charCodeAt(p);
          return s;
        }
        t("setimmediate"), c.newBlob = function(f, s) {
          c.checkSupport("blob");
          try {
            return new Blob([f], { type: s });
          } catch {
            try {
              var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return p.append(f), p.getBlob(s);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var m = { stringifyByChunk: function(f, s, p) {
          var d = [], D = 0, w = f.length;
          if (w <= p) return String.fromCharCode.apply(null, f);
          for (; D < w; ) s === "array" || s === "nodebuffer" ? d.push(String.fromCharCode.apply(null, f.slice(D, Math.min(D + p, w)))) : d.push(String.fromCharCode.apply(null, f.subarray(D, Math.min(D + p, w)))), D += p;
          return d.join("");
        }, stringifyByChar: function(f) {
          for (var s = "", p = 0; p < f.length; p++) s += String.fromCharCode(f[p]);
          return s;
        }, applyCanBeUsed: { uint8array: function() {
          try {
            return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        }(), nodebuffer: function() {
          try {
            return i.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        }() } };
        function g(f) {
          var s = 65536, p = c.getTypeOf(f), d = !0;
          if (p === "uint8array" ? d = m.applyCanBeUsed.uint8array : p === "nodebuffer" && (d = m.applyCanBeUsed.nodebuffer), d) for (; 1 < s; ) try {
            return m.stringifyByChunk(f, p, s);
          } catch {
            s = Math.floor(s / 2);
          }
          return m.stringifyByChar(f);
        }
        function h(f, s) {
          for (var p = 0; p < f.length; p++) s[p] = f[p];
          return s;
        }
        c.applyFromCharCode = g;
        var y = {};
        y.string = { string: l, array: function(f) {
          return b(f, new Array(f.length));
        }, arraybuffer: function(f) {
          return y.string.uint8array(f).buffer;
        }, uint8array: function(f) {
          return b(f, new Uint8Array(f.length));
        }, nodebuffer: function(f) {
          return b(f, o.allocBuffer(f.length));
        } }, y.array = { string: g, array: l, arraybuffer: function(f) {
          return new Uint8Array(f).buffer;
        }, uint8array: function(f) {
          return new Uint8Array(f);
        }, nodebuffer: function(f) {
          return o.newBufferFrom(f);
        } }, y.arraybuffer = { string: function(f) {
          return g(new Uint8Array(f));
        }, array: function(f) {
          return h(new Uint8Array(f), new Array(f.byteLength));
        }, arraybuffer: l, uint8array: function(f) {
          return new Uint8Array(f);
        }, nodebuffer: function(f) {
          return o.newBufferFrom(new Uint8Array(f));
        } }, y.uint8array = { string: g, array: function(f) {
          return h(f, new Array(f.length));
        }, arraybuffer: function(f) {
          return f.buffer;
        }, uint8array: l, nodebuffer: function(f) {
          return o.newBufferFrom(f);
        } }, y.nodebuffer = { string: g, array: function(f) {
          return h(f, new Array(f.length));
        }, arraybuffer: function(f) {
          return y.nodebuffer.uint8array(f).buffer;
        }, uint8array: function(f) {
          return h(f, new Uint8Array(f.length));
        }, nodebuffer: l }, c.transformTo = function(f, s) {
          if (s = s || "", !f) return s;
          c.checkSupport(f);
          var p = c.getTypeOf(s);
          return y[p][f](s);
        }, c.resolve = function(f) {
          for (var s = f.split("/"), p = [], d = 0; d < s.length; d++) {
            var D = s[d];
            D === "." || D === "" && d !== 0 && d !== s.length - 1 || (D === ".." ? p.pop() : p.push(D));
          }
          return p.join("/");
        }, c.getTypeOf = function(f) {
          return typeof f == "string" ? "string" : Object.prototype.toString.call(f) === "[object Array]" ? "array" : i.nodebuffer && o.isBuffer(f) ? "nodebuffer" : i.uint8array && f instanceof Uint8Array ? "uint8array" : i.arraybuffer && f instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, c.checkSupport = function(f) {
          if (!i[f.toLowerCase()]) throw new Error(f + " is not supported by this platform");
        }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(f) {
          var s, p, d = "";
          for (p = 0; p < (f || "").length; p++) d += "\\x" + ((s = f.charCodeAt(p)) < 16 ? "0" : "") + s.toString(16).toUpperCase();
          return d;
        }, c.delay = function(f, s, p) {
          setImmediate(function() {
            f.apply(p || null, s || []);
          });
        }, c.inherits = function(f, s) {
          function p() {
          }
          p.prototype = s.prototype, f.prototype = new p();
        }, c.extend = function() {
          var f, s, p = {};
          for (f = 0; f < arguments.length; f++) for (s in arguments[f]) Object.prototype.hasOwnProperty.call(arguments[f], s) && p[s] === void 0 && (p[s] = arguments[f][s]);
          return p;
        }, c.prepareContent = function(f, s, p, d, D) {
          return u.Promise.resolve(s).then(function(w) {
            return i.blob && (w instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(w)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(_, U) {
              var E = new FileReader();
              E.onload = function(S) {
                _(S.target.result);
              }, E.onerror = function(S) {
                U(S.target.error);
              }, E.readAsArrayBuffer(w);
            }) : w;
          }).then(function(w) {
            var _ = c.getTypeOf(w);
            return _ ? (_ === "arraybuffer" ? w = c.transformTo("uint8array", w) : _ === "string" && (D ? w = a.decode(w) : p && d !== !0 && (w = function(U) {
              return b(U, i.uint8array ? new Uint8Array(U.length) : new Array(U.length));
            }(w))), w) : u.Promise.reject(new Error("Can't read the data of '" + f + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, r, c) {
        var i = t("./reader/readerFor"), a = t("./utils"), o = t("./signature"), u = t("./zipEntry"), l = t("./support");
        function b(m) {
          this.files = [], this.loadOptions = m;
        }
        b.prototype = { checkSignature: function(m) {
          if (!this.reader.readAndCheckSignature(m)) {
            this.reader.index -= 4;
            var g = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(g) + ", expected " + a.pretty(m) + ")");
          }
        }, isSignature: function(m, g) {
          var h = this.reader.index;
          this.reader.setIndex(m);
          var y = this.reader.readString(4) === g;
          return this.reader.setIndex(h), y;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var m = this.reader.readData(this.zipCommentLength), g = l.uint8array ? "uint8array" : "array", h = a.transformTo(g, m);
          this.zipComment = this.loadOptions.decodeFileName(h);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var m, g, h, y = this.zip64EndOfCentralSize - 44; 0 < y; ) m = this.reader.readInt(2), g = this.reader.readInt(4), h = this.reader.readData(g), this.zip64ExtensibleData[m] = { id: m, length: g, value: h };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var m, g;
          for (m = 0; m < this.files.length; m++) g = this.files[m], this.reader.setIndex(g.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), g.readLocalPart(this.reader), g.handleUTF8(), g.processAttributes();
        }, readCentralDir: function() {
          var m;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); ) (m = new u({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(m);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var m = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
          if (m < 0) throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(m);
          var g = m;
          if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (m = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(m), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var h = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
          var y = g - h;
          if (0 < y) this.isSignature(g, o.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
          else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
        }, prepareReader: function(m) {
          this.reader = i(m);
        }, load: function(m) {
          this.prepareReader(m), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, r.exports = b;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, r, c) {
        var i = t("./reader/readerFor"), a = t("./utils"), o = t("./compressedObject"), u = t("./crc32"), l = t("./utf8"), b = t("./compressions"), m = t("./support");
        function g(h, y) {
          this.options = h, this.loadOptions = y;
        }
        g.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(h) {
          var y, f;
          if (h.skip(22), this.fileNameLength = h.readInt(2), f = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(f), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((y = function(s) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p) && b[p].magic === s) return b[p];
            return null;
          }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
          this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, y, h.readData(this.compressedSize));
        }, readCentralPart: function(h) {
          this.versionMadeBy = h.readInt(2), h.skip(2), this.bitFlag = h.readInt(2), this.compressionMethod = h.readString(2), this.date = h.readDate(), this.crc32 = h.readInt(4), this.compressedSize = h.readInt(4), this.uncompressedSize = h.readInt(4);
          var y = h.readInt(2);
          if (this.extraFieldsLength = h.readInt(2), this.fileCommentLength = h.readInt(2), this.diskNumberStart = h.readInt(2), this.internalFileAttributes = h.readInt(2), this.externalFileAttributes = h.readInt(4), this.localHeaderOffset = h.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          h.skip(y), this.readExtraFields(h), this.parseZIP64ExtraField(h), this.fileComment = h.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var h = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), h == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), h == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var h = i(this.extraFields[1].value);
            this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
          }
        }, readExtraFields: function(h) {
          var y, f, s, p = h.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); h.index + 4 < p; ) y = h.readInt(2), f = h.readInt(2), s = h.readData(f), this.extraFields[y] = { id: y, length: f, value: s };
          h.setIndex(p);
        }, handleUTF8: function() {
          var h = m.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
          else {
            var y = this.findExtraFieldUnicodePath();
            if (y !== null) this.fileNameStr = y;
            else {
              var f = a.transformTo(h, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(f);
            }
            var s = this.findExtraFieldUnicodeComment();
            if (s !== null) this.fileCommentStr = s;
            else {
              var p = a.transformTo(h, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(p);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var h = this.extraFields[28789];
          if (h) {
            var y = i(h.value);
            return y.readInt(1) !== 1 || u(this.fileName) !== y.readInt(4) ? null : l.utf8decode(y.readData(h.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var h = this.extraFields[25461];
          if (h) {
            var y = i(h.value);
            return y.readInt(1) !== 1 || u(this.fileComment) !== y.readInt(4) ? null : l.utf8decode(y.readData(h.length - 5));
          }
          return null;
        } }, r.exports = g;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, r, c) {
        function i(y, f, s) {
          this.name = y, this.dir = s.dir, this.date = s.date, this.comment = s.comment, this.unixPermissions = s.unixPermissions, this.dosPermissions = s.dosPermissions, this._data = f, this._dataBinary = s.binary, this.options = { compression: s.compression, compressionOptions: s.compressionOptions };
        }
        var a = t("./stream/StreamHelper"), o = t("./stream/DataWorker"), u = t("./utf8"), l = t("./compressedObject"), b = t("./stream/GenericWorker");
        i.prototype = { internalStream: function(y) {
          var f = null, s = "string";
          try {
            if (!y) throw new Error("No output type specified.");
            var p = (s = y.toLowerCase()) === "string" || s === "text";
            s !== "binarystring" && s !== "text" || (s = "string"), f = this._decompressWorker();
            var d = !this._dataBinary;
            d && !p && (f = f.pipe(new u.Utf8EncodeWorker())), !d && p && (f = f.pipe(new u.Utf8DecodeWorker()));
          } catch (D) {
            (f = new b("error")).error(D);
          }
          return new a(f, s, "");
        }, async: function(y, f) {
          return this.internalStream(y).accumulate(f);
        }, nodeStream: function(y, f) {
          return this.internalStream(y || "nodebuffer").toNodejsStream(f);
        }, _compressWorker: function(y, f) {
          if (this._data instanceof l && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
          var s = this._decompressWorker();
          return this._dataBinary || (s = s.pipe(new u.Utf8EncodeWorker())), l.createWorkerFrom(s, y, f);
        }, _decompressWorker: function() {
          return this._data instanceof l ? this._data.getContentWorker() : this._data instanceof b ? this._data : new o(this._data);
        } };
        for (var m = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], g = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, h = 0; h < m.length; h++) i.prototype[m[h]] = g;
        r.exports = i;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, r, c) {
        (function(i) {
          var a, o, u = i.MutationObserver || i.WebKitMutationObserver;
          if (u) {
            var l = 0, b = new u(y), m = i.document.createTextNode("");
            b.observe(m, { characterData: !0 }), a = function() {
              m.data = l = ++l % 2;
            };
          } else if (i.setImmediate || i.MessageChannel === void 0) a = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
            var f = i.document.createElement("script");
            f.onreadystatechange = function() {
              y(), f.onreadystatechange = null, f.parentNode.removeChild(f), f = null;
            }, i.document.documentElement.appendChild(f);
          } : function() {
            setTimeout(y, 0);
          };
          else {
            var g = new i.MessageChannel();
            g.port1.onmessage = y, a = function() {
              g.port2.postMessage(0);
            };
          }
          var h = [];
          function y() {
            var f, s;
            o = !0;
            for (var p = h.length; p; ) {
              for (s = h, h = [], f = -1; ++f < p; ) s[f]();
              p = h.length;
            }
            o = !1;
          }
          r.exports = function(f) {
            h.push(f) !== 1 || o || a();
          };
        }).call(this, typeof dn < "u" ? dn : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(t, r, c) {
        var i = t("immediate");
        function a() {
        }
        var o = {}, u = ["REJECTED"], l = ["FULFILLED"], b = ["PENDING"];
        function m(p) {
          if (typeof p != "function") throw new TypeError("resolver must be a function");
          this.state = b, this.queue = [], this.outcome = void 0, p !== a && f(this, p);
        }
        function g(p, d, D) {
          this.promise = p, typeof d == "function" && (this.onFulfilled = d, this.callFulfilled = this.otherCallFulfilled), typeof D == "function" && (this.onRejected = D, this.callRejected = this.otherCallRejected);
        }
        function h(p, d, D) {
          i(function() {
            var w;
            try {
              w = d(D);
            } catch (_) {
              return o.reject(p, _);
            }
            w === p ? o.reject(p, new TypeError("Cannot resolve promise with itself")) : o.resolve(p, w);
          });
        }
        function y(p) {
          var d = p && p.then;
          if (p && (typeof p == "object" || typeof p == "function") && typeof d == "function") return function() {
            d.apply(p, arguments);
          };
        }
        function f(p, d) {
          var D = !1;
          function w(E) {
            D || (D = !0, o.reject(p, E));
          }
          function _(E) {
            D || (D = !0, o.resolve(p, E));
          }
          var U = s(function() {
            d(_, w);
          });
          U.status === "error" && w(U.value);
        }
        function s(p, d) {
          var D = {};
          try {
            D.value = p(d), D.status = "success";
          } catch (w) {
            D.status = "error", D.value = w;
          }
          return D;
        }
        (r.exports = m).prototype.finally = function(p) {
          if (typeof p != "function") return this;
          var d = this.constructor;
          return this.then(function(D) {
            return d.resolve(p()).then(function() {
              return D;
            });
          }, function(D) {
            return d.resolve(p()).then(function() {
              throw D;
            });
          });
        }, m.prototype.catch = function(p) {
          return this.then(null, p);
        }, m.prototype.then = function(p, d) {
          if (typeof p != "function" && this.state === l || typeof d != "function" && this.state === u) return this;
          var D = new this.constructor(a);
          return this.state !== b ? h(D, this.state === l ? p : d, this.outcome) : this.queue.push(new g(D, p, d)), D;
        }, g.prototype.callFulfilled = function(p) {
          o.resolve(this.promise, p);
        }, g.prototype.otherCallFulfilled = function(p) {
          h(this.promise, this.onFulfilled, p);
        }, g.prototype.callRejected = function(p) {
          o.reject(this.promise, p);
        }, g.prototype.otherCallRejected = function(p) {
          h(this.promise, this.onRejected, p);
        }, o.resolve = function(p, d) {
          var D = s(y, d);
          if (D.status === "error") return o.reject(p, D.value);
          var w = D.value;
          if (w) f(p, w);
          else {
            p.state = l, p.outcome = d;
            for (var _ = -1, U = p.queue.length; ++_ < U; ) p.queue[_].callFulfilled(d);
          }
          return p;
        }, o.reject = function(p, d) {
          p.state = u, p.outcome = d;
          for (var D = -1, w = p.queue.length; ++D < w; ) p.queue[D].callRejected(d);
          return p;
        }, m.resolve = function(p) {
          return p instanceof this ? p : o.resolve(new this(a), p);
        }, m.reject = function(p) {
          var d = new this(a);
          return o.reject(d, p);
        }, m.all = function(p) {
          var d = this;
          if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var D = p.length, w = !1;
          if (!D) return this.resolve([]);
          for (var _ = new Array(D), U = 0, E = -1, S = new this(a); ++E < D; ) A(p[E], E);
          return S;
          function A(I, Z) {
            d.resolve(I).then(function(T) {
              _[Z] = T, ++U !== D || w || (w = !0, o.resolve(S, _));
            }, function(T) {
              w || (w = !0, o.reject(S, T));
            });
          }
        }, m.race = function(p) {
          var d = this;
          if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var D = p.length, w = !1;
          if (!D) return this.resolve([]);
          for (var _ = -1, U = new this(a); ++_ < D; ) E = p[_], d.resolve(E).then(function(S) {
            w || (w = !0, o.resolve(U, S));
          }, function(S) {
            w || (w = !0, o.reject(U, S));
          });
          var E;
          return U;
        };
      }, { immediate: 36 }], 38: [function(t, r, c) {
        var i = {};
        (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), r.exports = i;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, r, c) {
        var i = t("./zlib/deflate"), a = t("./utils/common"), o = t("./utils/strings"), u = t("./zlib/messages"), l = t("./zlib/zstream"), b = Object.prototype.toString, m = 0, g = -1, h = 0, y = 8;
        function f(p) {
          if (!(this instanceof f)) return new f(p);
          this.options = a.assign({ level: g, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, p || {});
          var d = this.options;
          d.raw && 0 < d.windowBits ? d.windowBits = -d.windowBits : d.gzip && 0 < d.windowBits && d.windowBits < 16 && (d.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
          var D = i.deflateInit2(this.strm, d.level, d.method, d.windowBits, d.memLevel, d.strategy);
          if (D !== m) throw new Error(u[D]);
          if (d.header && i.deflateSetHeader(this.strm, d.header), d.dictionary) {
            var w;
            if (w = typeof d.dictionary == "string" ? o.string2buf(d.dictionary) : b.call(d.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(d.dictionary) : d.dictionary, (D = i.deflateSetDictionary(this.strm, w)) !== m) throw new Error(u[D]);
            this._dict_set = !0;
          }
        }
        function s(p, d) {
          var D = new f(d);
          if (D.push(p, !0), D.err) throw D.msg || u[D.err];
          return D.result;
        }
        f.prototype.push = function(p, d) {
          var D, w, _ = this.strm, U = this.options.chunkSize;
          if (this.ended) return !1;
          w = d === ~~d ? d : d === !0 ? 4 : 0, typeof p == "string" ? _.input = o.string2buf(p) : b.call(p) === "[object ArrayBuffer]" ? _.input = new Uint8Array(p) : _.input = p, _.next_in = 0, _.avail_in = _.input.length;
          do {
            if (_.avail_out === 0 && (_.output = new a.Buf8(U), _.next_out = 0, _.avail_out = U), (D = i.deflate(_, w)) !== 1 && D !== m) return this.onEnd(D), !(this.ended = !0);
            _.avail_out !== 0 && (_.avail_in !== 0 || w !== 4 && w !== 2) || (this.options.to === "string" ? this.onData(o.buf2binstring(a.shrinkBuf(_.output, _.next_out))) : this.onData(a.shrinkBuf(_.output, _.next_out)));
          } while ((0 < _.avail_in || _.avail_out === 0) && D !== 1);
          return w === 4 ? (D = i.deflateEnd(this.strm), this.onEnd(D), this.ended = !0, D === m) : w !== 2 || (this.onEnd(m), !(_.avail_out = 0));
        }, f.prototype.onData = function(p) {
          this.chunks.push(p);
        }, f.prototype.onEnd = function(p) {
          p === m && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
        }, c.Deflate = f, c.deflate = s, c.deflateRaw = function(p, d) {
          return (d = d || {}).raw = !0, s(p, d);
        }, c.gzip = function(p, d) {
          return (d = d || {}).gzip = !0, s(p, d);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, r, c) {
        var i = t("./zlib/inflate"), a = t("./utils/common"), o = t("./utils/strings"), u = t("./zlib/constants"), l = t("./zlib/messages"), b = t("./zlib/zstream"), m = t("./zlib/gzheader"), g = Object.prototype.toString;
        function h(f) {
          if (!(this instanceof h)) return new h(f);
          this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, f || {});
          var s = this.options;
          s.raw && 0 <= s.windowBits && s.windowBits < 16 && (s.windowBits = -s.windowBits, s.windowBits === 0 && (s.windowBits = -15)), !(0 <= s.windowBits && s.windowBits < 16) || f && f.windowBits || (s.windowBits += 32), 15 < s.windowBits && s.windowBits < 48 && (15 & s.windowBits) == 0 && (s.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
          var p = i.inflateInit2(this.strm, s.windowBits);
          if (p !== u.Z_OK) throw new Error(l[p]);
          this.header = new m(), i.inflateGetHeader(this.strm, this.header);
        }
        function y(f, s) {
          var p = new h(s);
          if (p.push(f, !0), p.err) throw p.msg || l[p.err];
          return p.result;
        }
        h.prototype.push = function(f, s) {
          var p, d, D, w, _, U, E = this.strm, S = this.options.chunkSize, A = this.options.dictionary, I = !1;
          if (this.ended) return !1;
          d = s === ~~s ? s : s === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof f == "string" ? E.input = o.binstring2buf(f) : g.call(f) === "[object ArrayBuffer]" ? E.input = new Uint8Array(f) : E.input = f, E.next_in = 0, E.avail_in = E.input.length;
          do {
            if (E.avail_out === 0 && (E.output = new a.Buf8(S), E.next_out = 0, E.avail_out = S), (p = i.inflate(E, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && A && (U = typeof A == "string" ? o.string2buf(A) : g.call(A) === "[object ArrayBuffer]" ? new Uint8Array(A) : A, p = i.inflateSetDictionary(this.strm, U)), p === u.Z_BUF_ERROR && I === !0 && (p = u.Z_OK, I = !1), p !== u.Z_STREAM_END && p !== u.Z_OK) return this.onEnd(p), !(this.ended = !0);
            E.next_out && (E.avail_out !== 0 && p !== u.Z_STREAM_END && (E.avail_in !== 0 || d !== u.Z_FINISH && d !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (D = o.utf8border(E.output, E.next_out), w = E.next_out - D, _ = o.buf2string(E.output, D), E.next_out = w, E.avail_out = S - w, w && a.arraySet(E.output, E.output, D, w, 0), this.onData(_)) : this.onData(a.shrinkBuf(E.output, E.next_out)))), E.avail_in === 0 && E.avail_out === 0 && (I = !0);
          } while ((0 < E.avail_in || E.avail_out === 0) && p !== u.Z_STREAM_END);
          return p === u.Z_STREAM_END && (d = u.Z_FINISH), d === u.Z_FINISH ? (p = i.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === u.Z_OK) : d !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(E.avail_out = 0));
        }, h.prototype.onData = function(f) {
          this.chunks.push(f);
        }, h.prototype.onEnd = function(f) {
          f === u.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg;
        }, c.Inflate = h, c.inflate = y, c.inflateRaw = function(f, s) {
          return (s = s || {}).raw = !0, y(f, s);
        }, c.ungzip = y;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, r, c) {
        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        c.assign = function(u) {
          for (var l = Array.prototype.slice.call(arguments, 1); l.length; ) {
            var b = l.shift();
            if (b) {
              if (typeof b != "object") throw new TypeError(b + "must be non-object");
              for (var m in b) b.hasOwnProperty(m) && (u[m] = b[m]);
            }
          }
          return u;
        }, c.shrinkBuf = function(u, l) {
          return u.length === l ? u : u.subarray ? u.subarray(0, l) : (u.length = l, u);
        };
        var a = { arraySet: function(u, l, b, m, g) {
          if (l.subarray && u.subarray) u.set(l.subarray(b, b + m), g);
          else for (var h = 0; h < m; h++) u[g + h] = l[b + h];
        }, flattenChunks: function(u) {
          var l, b, m, g, h, y;
          for (l = m = 0, b = u.length; l < b; l++) m += u[l].length;
          for (y = new Uint8Array(m), l = g = 0, b = u.length; l < b; l++) h = u[l], y.set(h, g), g += h.length;
          return y;
        } }, o = { arraySet: function(u, l, b, m, g) {
          for (var h = 0; h < m; h++) u[g + h] = l[b + h];
        }, flattenChunks: function(u) {
          return [].concat.apply([], u);
        } };
        c.setTyped = function(u) {
          u ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, o));
        }, c.setTyped(i);
      }, {}], 42: [function(t, r, c) {
        var i = t("./common"), a = !0, o = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          a = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          o = !1;
        }
        for (var u = new i.Buf8(256), l = 0; l < 256; l++) u[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
        function b(m, g) {
          if (g < 65537 && (m.subarray && o || !m.subarray && a)) return String.fromCharCode.apply(null, i.shrinkBuf(m, g));
          for (var h = "", y = 0; y < g; y++) h += String.fromCharCode(m[y]);
          return h;
        }
        u[254] = u[254] = 1, c.string2buf = function(m) {
          var g, h, y, f, s, p = m.length, d = 0;
          for (f = 0; f < p; f++) (64512 & (h = m.charCodeAt(f))) == 55296 && f + 1 < p && (64512 & (y = m.charCodeAt(f + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), f++), d += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (g = new i.Buf8(d), f = s = 0; s < d; f++) (64512 & (h = m.charCodeAt(f))) == 55296 && f + 1 < p && (64512 & (y = m.charCodeAt(f + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), f++), h < 128 ? g[s++] = h : (h < 2048 ? g[s++] = 192 | h >>> 6 : (h < 65536 ? g[s++] = 224 | h >>> 12 : (g[s++] = 240 | h >>> 18, g[s++] = 128 | h >>> 12 & 63), g[s++] = 128 | h >>> 6 & 63), g[s++] = 128 | 63 & h);
          return g;
        }, c.buf2binstring = function(m) {
          return b(m, m.length);
        }, c.binstring2buf = function(m) {
          for (var g = new i.Buf8(m.length), h = 0, y = g.length; h < y; h++) g[h] = m.charCodeAt(h);
          return g;
        }, c.buf2string = function(m, g) {
          var h, y, f, s, p = g || m.length, d = new Array(2 * p);
          for (h = y = 0; h < p; ) if ((f = m[h++]) < 128) d[y++] = f;
          else if (4 < (s = u[f])) d[y++] = 65533, h += s - 1;
          else {
            for (f &= s === 2 ? 31 : s === 3 ? 15 : 7; 1 < s && h < p; ) f = f << 6 | 63 & m[h++], s--;
            1 < s ? d[y++] = 65533 : f < 65536 ? d[y++] = f : (f -= 65536, d[y++] = 55296 | f >> 10 & 1023, d[y++] = 56320 | 1023 & f);
          }
          return b(d, y);
        }, c.utf8border = function(m, g) {
          var h;
          for ((g = g || m.length) > m.length && (g = m.length), h = g - 1; 0 <= h && (192 & m[h]) == 128; ) h--;
          return h < 0 || h === 0 ? g : h + u[m[h]] > g ? h : g;
        };
      }, { "./common": 41 }], 43: [function(t, r, c) {
        r.exports = function(i, a, o, u) {
          for (var l = 65535 & i | 0, b = i >>> 16 & 65535 | 0, m = 0; o !== 0; ) {
            for (o -= m = 2e3 < o ? 2e3 : o; b = b + (l = l + a[u++] | 0) | 0, --m; ) ;
            l %= 65521, b %= 65521;
          }
          return l | b << 16 | 0;
        };
      }, {}], 44: [function(t, r, c) {
        r.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(t, r, c) {
        var i = function() {
          for (var a, o = [], u = 0; u < 256; u++) {
            a = u;
            for (var l = 0; l < 8; l++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            o[u] = a;
          }
          return o;
        }();
        r.exports = function(a, o, u, l) {
          var b = i, m = l + u;
          a ^= -1;
          for (var g = l; g < m; g++) a = a >>> 8 ^ b[255 & (a ^ o[g])];
          return -1 ^ a;
        };
      }, {}], 46: [function(t, r, c) {
        var i, a = t("../utils/common"), o = t("./trees"), u = t("./adler32"), l = t("./crc32"), b = t("./messages"), m = 0, g = 4, h = 0, y = -2, f = -1, s = 4, p = 2, d = 8, D = 9, w = 286, _ = 30, U = 19, E = 2 * w + 1, S = 15, A = 3, I = 258, Z = I + A + 1, T = 42, R = 113, x = 1, z = 2, W = 3, O = 4;
        function G(v, $) {
          return v.msg = b[$], $;
        }
        function q(v) {
          return (v << 1) - (4 < v ? 9 : 0);
        }
        function Q(v) {
          for (var $ = v.length; 0 <= --$; ) v[$] = 0;
        }
        function L(v) {
          var $ = v.state, j = $.pending;
          j > v.avail_out && (j = v.avail_out), j !== 0 && (a.arraySet(v.output, $.pending_buf, $.pending_out, j, v.next_out), v.next_out += j, $.pending_out += j, v.total_out += j, v.avail_out -= j, $.pending -= j, $.pending === 0 && ($.pending_out = 0));
        }
        function k(v, $) {
          o._tr_flush_block(v, 0 <= v.block_start ? v.block_start : -1, v.strstart - v.block_start, $), v.block_start = v.strstart, L(v.strm);
        }
        function re(v, $) {
          v.pending_buf[v.pending++] = $;
        }
        function ae(v, $) {
          v.pending_buf[v.pending++] = $ >>> 8 & 255, v.pending_buf[v.pending++] = 255 & $;
        }
        function J(v, $) {
          var j, N, B = v.max_chain_length, V = v.strstart, ie = v.prev_length, ne = v.nice_match, H = v.strstart > v.w_size - Z ? v.strstart - (v.w_size - Z) : 0, M = v.window, X = v.w_mask, Y = v.prev, te = v.strstart + I, ue = M[V + ie - 1], pe = M[V + ie];
          v.prev_length >= v.good_match && (B >>= 2), ne > v.lookahead && (ne = v.lookahead);
          do
            if (M[(j = $) + ie] === pe && M[j + ie - 1] === ue && M[j] === M[V] && M[++j] === M[V + 1]) {
              V += 2, j++;
              do
                ;
              while (M[++V] === M[++j] && M[++V] === M[++j] && M[++V] === M[++j] && M[++V] === M[++j] && M[++V] === M[++j] && M[++V] === M[++j] && M[++V] === M[++j] && M[++V] === M[++j] && V < te);
              if (N = I - (te - V), V = te - I, ie < N) {
                if (v.match_start = $, ne <= (ie = N)) break;
                ue = M[V + ie - 1], pe = M[V + ie];
              }
            }
          while (($ = Y[$ & X]) > H && --B != 0);
          return ie <= v.lookahead ? ie : v.lookahead;
        }
        function ce(v) {
          var $, j, N, B, V, ie, ne, H, M, X, Y = v.w_size;
          do {
            if (B = v.window_size - v.lookahead - v.strstart, v.strstart >= Y + (Y - Z)) {
              for (a.arraySet(v.window, v.window, Y, Y, 0), v.match_start -= Y, v.strstart -= Y, v.block_start -= Y, $ = j = v.hash_size; N = v.head[--$], v.head[$] = Y <= N ? N - Y : 0, --j; ) ;
              for ($ = j = Y; N = v.prev[--$], v.prev[$] = Y <= N ? N - Y : 0, --j; ) ;
              B += Y;
            }
            if (v.strm.avail_in === 0) break;
            if (ie = v.strm, ne = v.window, H = v.strstart + v.lookahead, M = B, X = void 0, X = ie.avail_in, M < X && (X = M), j = X === 0 ? 0 : (ie.avail_in -= X, a.arraySet(ne, ie.input, ie.next_in, X, H), ie.state.wrap === 1 ? ie.adler = u(ie.adler, ne, X, H) : ie.state.wrap === 2 && (ie.adler = l(ie.adler, ne, X, H)), ie.next_in += X, ie.total_in += X, X), v.lookahead += j, v.lookahead + v.insert >= A) for (V = v.strstart - v.insert, v.ins_h = v.window[V], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[V + 1]) & v.hash_mask; v.insert && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[V + A - 1]) & v.hash_mask, v.prev[V & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = V, V++, v.insert--, !(v.lookahead + v.insert < A)); ) ;
          } while (v.lookahead < Z && v.strm.avail_in !== 0);
        }
        function fe(v, $) {
          for (var j, N; ; ) {
            if (v.lookahead < Z) {
              if (ce(v), v.lookahead < Z && $ === m) return x;
              if (v.lookahead === 0) break;
            }
            if (j = 0, v.lookahead >= A && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + A - 1]) & v.hash_mask, j = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), j !== 0 && v.strstart - j <= v.w_size - Z && (v.match_length = J(v, j)), v.match_length >= A) if (N = o._tr_tally(v, v.strstart - v.match_start, v.match_length - A), v.lookahead -= v.match_length, v.match_length <= v.max_lazy_match && v.lookahead >= A) {
              for (v.match_length--; v.strstart++, v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + A - 1]) & v.hash_mask, j = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart, --v.match_length != 0; ) ;
              v.strstart++;
            } else v.strstart += v.match_length, v.match_length = 0, v.ins_h = v.window[v.strstart], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + 1]) & v.hash_mask;
            else N = o._tr_tally(v, 0, v.window[v.strstart]), v.lookahead--, v.strstart++;
            if (N && (k(v, !1), v.strm.avail_out === 0)) return x;
          }
          return v.insert = v.strstart < A - 1 ? v.strstart : A - 1, $ === g ? (k(v, !0), v.strm.avail_out === 0 ? W : O) : v.last_lit && (k(v, !1), v.strm.avail_out === 0) ? x : z;
        }
        function le(v, $) {
          for (var j, N, B; ; ) {
            if (v.lookahead < Z) {
              if (ce(v), v.lookahead < Z && $ === m) return x;
              if (v.lookahead === 0) break;
            }
            if (j = 0, v.lookahead >= A && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + A - 1]) & v.hash_mask, j = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), v.prev_length = v.match_length, v.prev_match = v.match_start, v.match_length = A - 1, j !== 0 && v.prev_length < v.max_lazy_match && v.strstart - j <= v.w_size - Z && (v.match_length = J(v, j), v.match_length <= 5 && (v.strategy === 1 || v.match_length === A && 4096 < v.strstart - v.match_start) && (v.match_length = A - 1)), v.prev_length >= A && v.match_length <= v.prev_length) {
              for (B = v.strstart + v.lookahead - A, N = o._tr_tally(v, v.strstart - 1 - v.prev_match, v.prev_length - A), v.lookahead -= v.prev_length - 1, v.prev_length -= 2; ++v.strstart <= B && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + A - 1]) & v.hash_mask, j = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), --v.prev_length != 0; ) ;
              if (v.match_available = 0, v.match_length = A - 1, v.strstart++, N && (k(v, !1), v.strm.avail_out === 0)) return x;
            } else if (v.match_available) {
              if ((N = o._tr_tally(v, 0, v.window[v.strstart - 1])) && k(v, !1), v.strstart++, v.lookahead--, v.strm.avail_out === 0) return x;
            } else v.match_available = 1, v.strstart++, v.lookahead--;
          }
          return v.match_available && (N = o._tr_tally(v, 0, v.window[v.strstart - 1]), v.match_available = 0), v.insert = v.strstart < A - 1 ? v.strstart : A - 1, $ === g ? (k(v, !0), v.strm.avail_out === 0 ? W : O) : v.last_lit && (k(v, !1), v.strm.avail_out === 0) ? x : z;
        }
        function he(v, $, j, N, B) {
          this.good_length = v, this.max_lazy = $, this.nice_length = j, this.max_chain = N, this.func = B;
        }
        function ge() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = d, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * E), this.dyn_dtree = new a.Buf16(2 * (2 * _ + 1)), this.bl_tree = new a.Buf16(2 * (2 * U + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(S + 1), this.heap = new a.Buf16(2 * w + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * w + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function be(v) {
          var $;
          return v && v.state ? (v.total_in = v.total_out = 0, v.data_type = p, ($ = v.state).pending = 0, $.pending_out = 0, $.wrap < 0 && ($.wrap = -$.wrap), $.status = $.wrap ? T : R, v.adler = $.wrap === 2 ? 0 : 1, $.last_flush = m, o._tr_init($), h) : G(v, y);
        }
        function Te(v) {
          var $ = be(v);
          return $ === h && function(j) {
            j.window_size = 2 * j.w_size, Q(j.head), j.max_lazy_match = i[j.level].max_lazy, j.good_match = i[j.level].good_length, j.nice_match = i[j.level].nice_length, j.max_chain_length = i[j.level].max_chain, j.strstart = 0, j.block_start = 0, j.lookahead = 0, j.insert = 0, j.match_length = j.prev_length = A - 1, j.match_available = 0, j.ins_h = 0;
          }(v.state), $;
        }
        function Ae(v, $, j, N, B, V) {
          if (!v) return y;
          var ie = 1;
          if ($ === f && ($ = 6), N < 0 ? (ie = 0, N = -N) : 15 < N && (ie = 2, N -= 16), B < 1 || D < B || j !== d || N < 8 || 15 < N || $ < 0 || 9 < $ || V < 0 || s < V) return G(v, y);
          N === 8 && (N = 9);
          var ne = new ge();
          return (v.state = ne).strm = v, ne.wrap = ie, ne.gzhead = null, ne.w_bits = N, ne.w_size = 1 << ne.w_bits, ne.w_mask = ne.w_size - 1, ne.hash_bits = B + 7, ne.hash_size = 1 << ne.hash_bits, ne.hash_mask = ne.hash_size - 1, ne.hash_shift = ~~((ne.hash_bits + A - 1) / A), ne.window = new a.Buf8(2 * ne.w_size), ne.head = new a.Buf16(ne.hash_size), ne.prev = new a.Buf16(ne.w_size), ne.lit_bufsize = 1 << B + 6, ne.pending_buf_size = 4 * ne.lit_bufsize, ne.pending_buf = new a.Buf8(ne.pending_buf_size), ne.d_buf = 1 * ne.lit_bufsize, ne.l_buf = 3 * ne.lit_bufsize, ne.level = $, ne.strategy = V, ne.method = j, Te(v);
        }
        i = [new he(0, 0, 0, 0, function(v, $) {
          var j = 65535;
          for (j > v.pending_buf_size - 5 && (j = v.pending_buf_size - 5); ; ) {
            if (v.lookahead <= 1) {
              if (ce(v), v.lookahead === 0 && $ === m) return x;
              if (v.lookahead === 0) break;
            }
            v.strstart += v.lookahead, v.lookahead = 0;
            var N = v.block_start + j;
            if ((v.strstart === 0 || v.strstart >= N) && (v.lookahead = v.strstart - N, v.strstart = N, k(v, !1), v.strm.avail_out === 0) || v.strstart - v.block_start >= v.w_size - Z && (k(v, !1), v.strm.avail_out === 0)) return x;
          }
          return v.insert = 0, $ === g ? (k(v, !0), v.strm.avail_out === 0 ? W : O) : (v.strstart > v.block_start && (k(v, !1), v.strm.avail_out), x);
        }), new he(4, 4, 8, 4, fe), new he(4, 5, 16, 8, fe), new he(4, 6, 32, 32, fe), new he(4, 4, 16, 16, le), new he(8, 16, 32, 32, le), new he(8, 16, 128, 128, le), new he(8, 32, 128, 256, le), new he(32, 128, 258, 1024, le), new he(32, 258, 258, 4096, le)], c.deflateInit = function(v, $) {
          return Ae(v, $, d, 15, 8, 0);
        }, c.deflateInit2 = Ae, c.deflateReset = Te, c.deflateResetKeep = be, c.deflateSetHeader = function(v, $) {
          return v && v.state ? v.state.wrap !== 2 ? y : (v.state.gzhead = $, h) : y;
        }, c.deflate = function(v, $) {
          var j, N, B, V;
          if (!v || !v.state || 5 < $ || $ < 0) return v ? G(v, y) : y;
          if (N = v.state, !v.output || !v.input && v.avail_in !== 0 || N.status === 666 && $ !== g) return G(v, v.avail_out === 0 ? -5 : y);
          if (N.strm = v, j = N.last_flush, N.last_flush = $, N.status === T) if (N.wrap === 2) v.adler = 0, re(N, 31), re(N, 139), re(N, 8), N.gzhead ? (re(N, (N.gzhead.text ? 1 : 0) + (N.gzhead.hcrc ? 2 : 0) + (N.gzhead.extra ? 4 : 0) + (N.gzhead.name ? 8 : 0) + (N.gzhead.comment ? 16 : 0)), re(N, 255 & N.gzhead.time), re(N, N.gzhead.time >> 8 & 255), re(N, N.gzhead.time >> 16 & 255), re(N, N.gzhead.time >> 24 & 255), re(N, N.level === 9 ? 2 : 2 <= N.strategy || N.level < 2 ? 4 : 0), re(N, 255 & N.gzhead.os), N.gzhead.extra && N.gzhead.extra.length && (re(N, 255 & N.gzhead.extra.length), re(N, N.gzhead.extra.length >> 8 & 255)), N.gzhead.hcrc && (v.adler = l(v.adler, N.pending_buf, N.pending, 0)), N.gzindex = 0, N.status = 69) : (re(N, 0), re(N, 0), re(N, 0), re(N, 0), re(N, 0), re(N, N.level === 9 ? 2 : 2 <= N.strategy || N.level < 2 ? 4 : 0), re(N, 3), N.status = R);
          else {
            var ie = d + (N.w_bits - 8 << 4) << 8;
            ie |= (2 <= N.strategy || N.level < 2 ? 0 : N.level < 6 ? 1 : N.level === 6 ? 2 : 3) << 6, N.strstart !== 0 && (ie |= 32), ie += 31 - ie % 31, N.status = R, ae(N, ie), N.strstart !== 0 && (ae(N, v.adler >>> 16), ae(N, 65535 & v.adler)), v.adler = 1;
          }
          if (N.status === 69) if (N.gzhead.extra) {
            for (B = N.pending; N.gzindex < (65535 & N.gzhead.extra.length) && (N.pending !== N.pending_buf_size || (N.gzhead.hcrc && N.pending > B && (v.adler = l(v.adler, N.pending_buf, N.pending - B, B)), L(v), B = N.pending, N.pending !== N.pending_buf_size)); ) re(N, 255 & N.gzhead.extra[N.gzindex]), N.gzindex++;
            N.gzhead.hcrc && N.pending > B && (v.adler = l(v.adler, N.pending_buf, N.pending - B, B)), N.gzindex === N.gzhead.extra.length && (N.gzindex = 0, N.status = 73);
          } else N.status = 73;
          if (N.status === 73) if (N.gzhead.name) {
            B = N.pending;
            do {
              if (N.pending === N.pending_buf_size && (N.gzhead.hcrc && N.pending > B && (v.adler = l(v.adler, N.pending_buf, N.pending - B, B)), L(v), B = N.pending, N.pending === N.pending_buf_size)) {
                V = 1;
                break;
              }
              V = N.gzindex < N.gzhead.name.length ? 255 & N.gzhead.name.charCodeAt(N.gzindex++) : 0, re(N, V);
            } while (V !== 0);
            N.gzhead.hcrc && N.pending > B && (v.adler = l(v.adler, N.pending_buf, N.pending - B, B)), V === 0 && (N.gzindex = 0, N.status = 91);
          } else N.status = 91;
          if (N.status === 91) if (N.gzhead.comment) {
            B = N.pending;
            do {
              if (N.pending === N.pending_buf_size && (N.gzhead.hcrc && N.pending > B && (v.adler = l(v.adler, N.pending_buf, N.pending - B, B)), L(v), B = N.pending, N.pending === N.pending_buf_size)) {
                V = 1;
                break;
              }
              V = N.gzindex < N.gzhead.comment.length ? 255 & N.gzhead.comment.charCodeAt(N.gzindex++) : 0, re(N, V);
            } while (V !== 0);
            N.gzhead.hcrc && N.pending > B && (v.adler = l(v.adler, N.pending_buf, N.pending - B, B)), V === 0 && (N.status = 103);
          } else N.status = 103;
          if (N.status === 103 && (N.gzhead.hcrc ? (N.pending + 2 > N.pending_buf_size && L(v), N.pending + 2 <= N.pending_buf_size && (re(N, 255 & v.adler), re(N, v.adler >> 8 & 255), v.adler = 0, N.status = R)) : N.status = R), N.pending !== 0) {
            if (L(v), v.avail_out === 0) return N.last_flush = -1, h;
          } else if (v.avail_in === 0 && q($) <= q(j) && $ !== g) return G(v, -5);
          if (N.status === 666 && v.avail_in !== 0) return G(v, -5);
          if (v.avail_in !== 0 || N.lookahead !== 0 || $ !== m && N.status !== 666) {
            var ne = N.strategy === 2 ? function(H, M) {
              for (var X; ; ) {
                if (H.lookahead === 0 && (ce(H), H.lookahead === 0)) {
                  if (M === m) return x;
                  break;
                }
                if (H.match_length = 0, X = o._tr_tally(H, 0, H.window[H.strstart]), H.lookahead--, H.strstart++, X && (k(H, !1), H.strm.avail_out === 0)) return x;
              }
              return H.insert = 0, M === g ? (k(H, !0), H.strm.avail_out === 0 ? W : O) : H.last_lit && (k(H, !1), H.strm.avail_out === 0) ? x : z;
            }(N, $) : N.strategy === 3 ? function(H, M) {
              for (var X, Y, te, ue, pe = H.window; ; ) {
                if (H.lookahead <= I) {
                  if (ce(H), H.lookahead <= I && M === m) return x;
                  if (H.lookahead === 0) break;
                }
                if (H.match_length = 0, H.lookahead >= A && 0 < H.strstart && (Y = pe[te = H.strstart - 1]) === pe[++te] && Y === pe[++te] && Y === pe[++te]) {
                  ue = H.strstart + I;
                  do
                    ;
                  while (Y === pe[++te] && Y === pe[++te] && Y === pe[++te] && Y === pe[++te] && Y === pe[++te] && Y === pe[++te] && Y === pe[++te] && Y === pe[++te] && te < ue);
                  H.match_length = I - (ue - te), H.match_length > H.lookahead && (H.match_length = H.lookahead);
                }
                if (H.match_length >= A ? (X = o._tr_tally(H, 1, H.match_length - A), H.lookahead -= H.match_length, H.strstart += H.match_length, H.match_length = 0) : (X = o._tr_tally(H, 0, H.window[H.strstart]), H.lookahead--, H.strstart++), X && (k(H, !1), H.strm.avail_out === 0)) return x;
              }
              return H.insert = 0, M === g ? (k(H, !0), H.strm.avail_out === 0 ? W : O) : H.last_lit && (k(H, !1), H.strm.avail_out === 0) ? x : z;
            }(N, $) : i[N.level].func(N, $);
            if (ne !== W && ne !== O || (N.status = 666), ne === x || ne === W) return v.avail_out === 0 && (N.last_flush = -1), h;
            if (ne === z && ($ === 1 ? o._tr_align(N) : $ !== 5 && (o._tr_stored_block(N, 0, 0, !1), $ === 3 && (Q(N.head), N.lookahead === 0 && (N.strstart = 0, N.block_start = 0, N.insert = 0))), L(v), v.avail_out === 0)) return N.last_flush = -1, h;
          }
          return $ !== g ? h : N.wrap <= 0 ? 1 : (N.wrap === 2 ? (re(N, 255 & v.adler), re(N, v.adler >> 8 & 255), re(N, v.adler >> 16 & 255), re(N, v.adler >> 24 & 255), re(N, 255 & v.total_in), re(N, v.total_in >> 8 & 255), re(N, v.total_in >> 16 & 255), re(N, v.total_in >> 24 & 255)) : (ae(N, v.adler >>> 16), ae(N, 65535 & v.adler)), L(v), 0 < N.wrap && (N.wrap = -N.wrap), N.pending !== 0 ? h : 1);
        }, c.deflateEnd = function(v) {
          var $;
          return v && v.state ? ($ = v.state.status) !== T && $ !== 69 && $ !== 73 && $ !== 91 && $ !== 103 && $ !== R && $ !== 666 ? G(v, y) : (v.state = null, $ === R ? G(v, -3) : h) : y;
        }, c.deflateSetDictionary = function(v, $) {
          var j, N, B, V, ie, ne, H, M, X = $.length;
          if (!v || !v.state || (V = (j = v.state).wrap) === 2 || V === 1 && j.status !== T || j.lookahead) return y;
          for (V === 1 && (v.adler = u(v.adler, $, X, 0)), j.wrap = 0, X >= j.w_size && (V === 0 && (Q(j.head), j.strstart = 0, j.block_start = 0, j.insert = 0), M = new a.Buf8(j.w_size), a.arraySet(M, $, X - j.w_size, j.w_size, 0), $ = M, X = j.w_size), ie = v.avail_in, ne = v.next_in, H = v.input, v.avail_in = X, v.next_in = 0, v.input = $, ce(j); j.lookahead >= A; ) {
            for (N = j.strstart, B = j.lookahead - (A - 1); j.ins_h = (j.ins_h << j.hash_shift ^ j.window[N + A - 1]) & j.hash_mask, j.prev[N & j.w_mask] = j.head[j.ins_h], j.head[j.ins_h] = N, N++, --B; ) ;
            j.strstart = N, j.lookahead = A - 1, ce(j);
          }
          return j.strstart += j.lookahead, j.block_start = j.strstart, j.insert = j.lookahead, j.lookahead = 0, j.match_length = j.prev_length = A - 1, j.match_available = 0, v.next_in = ne, v.input = H, v.avail_in = ie, j.wrap = V, h;
        }, c.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, r, c) {
        r.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(t, r, c) {
        r.exports = function(i, a) {
          var o, u, l, b, m, g, h, y, f, s, p, d, D, w, _, U, E, S, A, I, Z, T, R, x, z;
          o = i.state, u = i.next_in, x = i.input, l = u + (i.avail_in - 5), b = i.next_out, z = i.output, m = b - (a - i.avail_out), g = b + (i.avail_out - 257), h = o.dmax, y = o.wsize, f = o.whave, s = o.wnext, p = o.window, d = o.hold, D = o.bits, w = o.lencode, _ = o.distcode, U = (1 << o.lenbits) - 1, E = (1 << o.distbits) - 1;
          e: do {
            D < 15 && (d += x[u++] << D, D += 8, d += x[u++] << D, D += 8), S = w[d & U];
            n: for (; ; ) {
              if (d >>>= A = S >>> 24, D -= A, (A = S >>> 16 & 255) === 0) z[b++] = 65535 & S;
              else {
                if (!(16 & A)) {
                  if ((64 & A) == 0) {
                    S = w[(65535 & S) + (d & (1 << A) - 1)];
                    continue n;
                  }
                  if (32 & A) {
                    o.mode = 12;
                    break e;
                  }
                  i.msg = "invalid literal/length code", o.mode = 30;
                  break e;
                }
                I = 65535 & S, (A &= 15) && (D < A && (d += x[u++] << D, D += 8), I += d & (1 << A) - 1, d >>>= A, D -= A), D < 15 && (d += x[u++] << D, D += 8, d += x[u++] << D, D += 8), S = _[d & E];
                t: for (; ; ) {
                  if (d >>>= A = S >>> 24, D -= A, !(16 & (A = S >>> 16 & 255))) {
                    if ((64 & A) == 0) {
                      S = _[(65535 & S) + (d & (1 << A) - 1)];
                      continue t;
                    }
                    i.msg = "invalid distance code", o.mode = 30;
                    break e;
                  }
                  if (Z = 65535 & S, D < (A &= 15) && (d += x[u++] << D, (D += 8) < A && (d += x[u++] << D, D += 8)), h < (Z += d & (1 << A) - 1)) {
                    i.msg = "invalid distance too far back", o.mode = 30;
                    break e;
                  }
                  if (d >>>= A, D -= A, (A = b - m) < Z) {
                    if (f < (A = Z - A) && o.sane) {
                      i.msg = "invalid distance too far back", o.mode = 30;
                      break e;
                    }
                    if (R = p, (T = 0) === s) {
                      if (T += y - A, A < I) {
                        for (I -= A; z[b++] = p[T++], --A; ) ;
                        T = b - Z, R = z;
                      }
                    } else if (s < A) {
                      if (T += y + s - A, (A -= s) < I) {
                        for (I -= A; z[b++] = p[T++], --A; ) ;
                        if (T = 0, s < I) {
                          for (I -= A = s; z[b++] = p[T++], --A; ) ;
                          T = b - Z, R = z;
                        }
                      }
                    } else if (T += s - A, A < I) {
                      for (I -= A; z[b++] = p[T++], --A; ) ;
                      T = b - Z, R = z;
                    }
                    for (; 2 < I; ) z[b++] = R[T++], z[b++] = R[T++], z[b++] = R[T++], I -= 3;
                    I && (z[b++] = R[T++], 1 < I && (z[b++] = R[T++]));
                  } else {
                    for (T = b - Z; z[b++] = z[T++], z[b++] = z[T++], z[b++] = z[T++], 2 < (I -= 3); ) ;
                    I && (z[b++] = z[T++], 1 < I && (z[b++] = z[T++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (u < l && b < g);
          u -= I = D >> 3, d &= (1 << (D -= I << 3)) - 1, i.next_in = u, i.next_out = b, i.avail_in = u < l ? l - u + 5 : 5 - (u - l), i.avail_out = b < g ? g - b + 257 : 257 - (b - g), o.hold = d, o.bits = D;
        };
      }, {}], 49: [function(t, r, c) {
        var i = t("../utils/common"), a = t("./adler32"), o = t("./crc32"), u = t("./inffast"), l = t("./inftrees"), b = 1, m = 2, g = 0, h = -2, y = 1, f = 852, s = 592;
        function p(T) {
          return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((65280 & T) << 8) + ((255 & T) << 24);
        }
        function d() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function D(T) {
          var R;
          return T && T.state ? (R = T.state, T.total_in = T.total_out = R.total = 0, T.msg = "", R.wrap && (T.adler = 1 & R.wrap), R.mode = y, R.last = 0, R.havedict = 0, R.dmax = 32768, R.head = null, R.hold = 0, R.bits = 0, R.lencode = R.lendyn = new i.Buf32(f), R.distcode = R.distdyn = new i.Buf32(s), R.sane = 1, R.back = -1, g) : h;
        }
        function w(T) {
          var R;
          return T && T.state ? ((R = T.state).wsize = 0, R.whave = 0, R.wnext = 0, D(T)) : h;
        }
        function _(T, R) {
          var x, z;
          return T && T.state ? (z = T.state, R < 0 ? (x = 0, R = -R) : (x = 1 + (R >> 4), R < 48 && (R &= 15)), R && (R < 8 || 15 < R) ? h : (z.window !== null && z.wbits !== R && (z.window = null), z.wrap = x, z.wbits = R, w(T))) : h;
        }
        function U(T, R) {
          var x, z;
          return T ? (z = new d(), (T.state = z).window = null, (x = _(T, R)) !== g && (T.state = null), x) : h;
        }
        var E, S, A = !0;
        function I(T) {
          if (A) {
            var R;
            for (E = new i.Buf32(512), S = new i.Buf32(32), R = 0; R < 144; ) T.lens[R++] = 8;
            for (; R < 256; ) T.lens[R++] = 9;
            for (; R < 280; ) T.lens[R++] = 7;
            for (; R < 288; ) T.lens[R++] = 8;
            for (l(b, T.lens, 0, 288, E, 0, T.work, { bits: 9 }), R = 0; R < 32; ) T.lens[R++] = 5;
            l(m, T.lens, 0, 32, S, 0, T.work, { bits: 5 }), A = !1;
          }
          T.lencode = E, T.lenbits = 9, T.distcode = S, T.distbits = 5;
        }
        function Z(T, R, x, z) {
          var W, O = T.state;
          return O.window === null && (O.wsize = 1 << O.wbits, O.wnext = 0, O.whave = 0, O.window = new i.Buf8(O.wsize)), z >= O.wsize ? (i.arraySet(O.window, R, x - O.wsize, O.wsize, 0), O.wnext = 0, O.whave = O.wsize) : (z < (W = O.wsize - O.wnext) && (W = z), i.arraySet(O.window, R, x - z, W, O.wnext), (z -= W) ? (i.arraySet(O.window, R, x - z, z, 0), O.wnext = z, O.whave = O.wsize) : (O.wnext += W, O.wnext === O.wsize && (O.wnext = 0), O.whave < O.wsize && (O.whave += W))), 0;
        }
        c.inflateReset = w, c.inflateReset2 = _, c.inflateResetKeep = D, c.inflateInit = function(T) {
          return U(T, 15);
        }, c.inflateInit2 = U, c.inflate = function(T, R) {
          var x, z, W, O, G, q, Q, L, k, re, ae, J, ce, fe, le, he, ge, be, Te, Ae, v, $, j, N, B = 0, V = new i.Buf8(4), ie = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0) return h;
          (x = T.state).mode === 12 && (x.mode = 13), G = T.next_out, W = T.output, Q = T.avail_out, O = T.next_in, z = T.input, q = T.avail_in, L = x.hold, k = x.bits, re = q, ae = Q, $ = g;
          e: for (; ; ) switch (x.mode) {
            case y:
              if (x.wrap === 0) {
                x.mode = 13;
                break;
              }
              for (; k < 16; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              if (2 & x.wrap && L === 35615) {
                V[x.check = 0] = 255 & L, V[1] = L >>> 8 & 255, x.check = o(x.check, V, 2, 0), k = L = 0, x.mode = 2;
                break;
              }
              if (x.flags = 0, x.head && (x.head.done = !1), !(1 & x.wrap) || (((255 & L) << 8) + (L >> 8)) % 31) {
                T.msg = "incorrect header check", x.mode = 30;
                break;
              }
              if ((15 & L) != 8) {
                T.msg = "unknown compression method", x.mode = 30;
                break;
              }
              if (k -= 4, v = 8 + (15 & (L >>>= 4)), x.wbits === 0) x.wbits = v;
              else if (v > x.wbits) {
                T.msg = "invalid window size", x.mode = 30;
                break;
              }
              x.dmax = 1 << v, T.adler = x.check = 1, x.mode = 512 & L ? 10 : 12, k = L = 0;
              break;
            case 2:
              for (; k < 16; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              if (x.flags = L, (255 & x.flags) != 8) {
                T.msg = "unknown compression method", x.mode = 30;
                break;
              }
              if (57344 & x.flags) {
                T.msg = "unknown header flags set", x.mode = 30;
                break;
              }
              x.head && (x.head.text = L >> 8 & 1), 512 & x.flags && (V[0] = 255 & L, V[1] = L >>> 8 & 255, x.check = o(x.check, V, 2, 0)), k = L = 0, x.mode = 3;
            case 3:
              for (; k < 32; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              x.head && (x.head.time = L), 512 & x.flags && (V[0] = 255 & L, V[1] = L >>> 8 & 255, V[2] = L >>> 16 & 255, V[3] = L >>> 24 & 255, x.check = o(x.check, V, 4, 0)), k = L = 0, x.mode = 4;
            case 4:
              for (; k < 16; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              x.head && (x.head.xflags = 255 & L, x.head.os = L >> 8), 512 & x.flags && (V[0] = 255 & L, V[1] = L >>> 8 & 255, x.check = o(x.check, V, 2, 0)), k = L = 0, x.mode = 5;
            case 5:
              if (1024 & x.flags) {
                for (; k < 16; ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                x.length = L, x.head && (x.head.extra_len = L), 512 & x.flags && (V[0] = 255 & L, V[1] = L >>> 8 & 255, x.check = o(x.check, V, 2, 0)), k = L = 0;
              } else x.head && (x.head.extra = null);
              x.mode = 6;
            case 6:
              if (1024 & x.flags && (q < (J = x.length) && (J = q), J && (x.head && (v = x.head.extra_len - x.length, x.head.extra || (x.head.extra = new Array(x.head.extra_len)), i.arraySet(x.head.extra, z, O, J, v)), 512 & x.flags && (x.check = o(x.check, z, J, O)), q -= J, O += J, x.length -= J), x.length)) break e;
              x.length = 0, x.mode = 7;
            case 7:
              if (2048 & x.flags) {
                if (q === 0) break e;
                for (J = 0; v = z[O + J++], x.head && v && x.length < 65536 && (x.head.name += String.fromCharCode(v)), v && J < q; ) ;
                if (512 & x.flags && (x.check = o(x.check, z, J, O)), q -= J, O += J, v) break e;
              } else x.head && (x.head.name = null);
              x.length = 0, x.mode = 8;
            case 8:
              if (4096 & x.flags) {
                if (q === 0) break e;
                for (J = 0; v = z[O + J++], x.head && v && x.length < 65536 && (x.head.comment += String.fromCharCode(v)), v && J < q; ) ;
                if (512 & x.flags && (x.check = o(x.check, z, J, O)), q -= J, O += J, v) break e;
              } else x.head && (x.head.comment = null);
              x.mode = 9;
            case 9:
              if (512 & x.flags) {
                for (; k < 16; ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                if (L !== (65535 & x.check)) {
                  T.msg = "header crc mismatch", x.mode = 30;
                  break;
                }
                k = L = 0;
              }
              x.head && (x.head.hcrc = x.flags >> 9 & 1, x.head.done = !0), T.adler = x.check = 0, x.mode = 12;
              break;
            case 10:
              for (; k < 32; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              T.adler = x.check = p(L), k = L = 0, x.mode = 11;
            case 11:
              if (x.havedict === 0) return T.next_out = G, T.avail_out = Q, T.next_in = O, T.avail_in = q, x.hold = L, x.bits = k, 2;
              T.adler = x.check = 1, x.mode = 12;
            case 12:
              if (R === 5 || R === 6) break e;
            case 13:
              if (x.last) {
                L >>>= 7 & k, k -= 7 & k, x.mode = 27;
                break;
              }
              for (; k < 3; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              switch (x.last = 1 & L, k -= 1, 3 & (L >>>= 1)) {
                case 0:
                  x.mode = 14;
                  break;
                case 1:
                  if (I(x), x.mode = 20, R !== 6) break;
                  L >>>= 2, k -= 2;
                  break e;
                case 2:
                  x.mode = 17;
                  break;
                case 3:
                  T.msg = "invalid block type", x.mode = 30;
              }
              L >>>= 2, k -= 2;
              break;
            case 14:
              for (L >>>= 7 & k, k -= 7 & k; k < 32; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              if ((65535 & L) != (L >>> 16 ^ 65535)) {
                T.msg = "invalid stored block lengths", x.mode = 30;
                break;
              }
              if (x.length = 65535 & L, k = L = 0, x.mode = 15, R === 6) break e;
            case 15:
              x.mode = 16;
            case 16:
              if (J = x.length) {
                if (q < J && (J = q), Q < J && (J = Q), J === 0) break e;
                i.arraySet(W, z, O, J, G), q -= J, O += J, Q -= J, G += J, x.length -= J;
                break;
              }
              x.mode = 12;
              break;
            case 17:
              for (; k < 14; ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              if (x.nlen = 257 + (31 & L), L >>>= 5, k -= 5, x.ndist = 1 + (31 & L), L >>>= 5, k -= 5, x.ncode = 4 + (15 & L), L >>>= 4, k -= 4, 286 < x.nlen || 30 < x.ndist) {
                T.msg = "too many length or distance symbols", x.mode = 30;
                break;
              }
              x.have = 0, x.mode = 18;
            case 18:
              for (; x.have < x.ncode; ) {
                for (; k < 3; ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                x.lens[ie[x.have++]] = 7 & L, L >>>= 3, k -= 3;
              }
              for (; x.have < 19; ) x.lens[ie[x.have++]] = 0;
              if (x.lencode = x.lendyn, x.lenbits = 7, j = { bits: x.lenbits }, $ = l(0, x.lens, 0, 19, x.lencode, 0, x.work, j), x.lenbits = j.bits, $) {
                T.msg = "invalid code lengths set", x.mode = 30;
                break;
              }
              x.have = 0, x.mode = 19;
            case 19:
              for (; x.have < x.nlen + x.ndist; ) {
                for (; he = (B = x.lencode[L & (1 << x.lenbits) - 1]) >>> 16 & 255, ge = 65535 & B, !((le = B >>> 24) <= k); ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                if (ge < 16) L >>>= le, k -= le, x.lens[x.have++] = ge;
                else {
                  if (ge === 16) {
                    for (N = le + 2; k < N; ) {
                      if (q === 0) break e;
                      q--, L += z[O++] << k, k += 8;
                    }
                    if (L >>>= le, k -= le, x.have === 0) {
                      T.msg = "invalid bit length repeat", x.mode = 30;
                      break;
                    }
                    v = x.lens[x.have - 1], J = 3 + (3 & L), L >>>= 2, k -= 2;
                  } else if (ge === 17) {
                    for (N = le + 3; k < N; ) {
                      if (q === 0) break e;
                      q--, L += z[O++] << k, k += 8;
                    }
                    k -= le, v = 0, J = 3 + (7 & (L >>>= le)), L >>>= 3, k -= 3;
                  } else {
                    for (N = le + 7; k < N; ) {
                      if (q === 0) break e;
                      q--, L += z[O++] << k, k += 8;
                    }
                    k -= le, v = 0, J = 11 + (127 & (L >>>= le)), L >>>= 7, k -= 7;
                  }
                  if (x.have + J > x.nlen + x.ndist) {
                    T.msg = "invalid bit length repeat", x.mode = 30;
                    break;
                  }
                  for (; J--; ) x.lens[x.have++] = v;
                }
              }
              if (x.mode === 30) break;
              if (x.lens[256] === 0) {
                T.msg = "invalid code -- missing end-of-block", x.mode = 30;
                break;
              }
              if (x.lenbits = 9, j = { bits: x.lenbits }, $ = l(b, x.lens, 0, x.nlen, x.lencode, 0, x.work, j), x.lenbits = j.bits, $) {
                T.msg = "invalid literal/lengths set", x.mode = 30;
                break;
              }
              if (x.distbits = 6, x.distcode = x.distdyn, j = { bits: x.distbits }, $ = l(m, x.lens, x.nlen, x.ndist, x.distcode, 0, x.work, j), x.distbits = j.bits, $) {
                T.msg = "invalid distances set", x.mode = 30;
                break;
              }
              if (x.mode = 20, R === 6) break e;
            case 20:
              x.mode = 21;
            case 21:
              if (6 <= q && 258 <= Q) {
                T.next_out = G, T.avail_out = Q, T.next_in = O, T.avail_in = q, x.hold = L, x.bits = k, u(T, ae), G = T.next_out, W = T.output, Q = T.avail_out, O = T.next_in, z = T.input, q = T.avail_in, L = x.hold, k = x.bits, x.mode === 12 && (x.back = -1);
                break;
              }
              for (x.back = 0; he = (B = x.lencode[L & (1 << x.lenbits) - 1]) >>> 16 & 255, ge = 65535 & B, !((le = B >>> 24) <= k); ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              if (he && (240 & he) == 0) {
                for (be = le, Te = he, Ae = ge; he = (B = x.lencode[Ae + ((L & (1 << be + Te) - 1) >> be)]) >>> 16 & 255, ge = 65535 & B, !(be + (le = B >>> 24) <= k); ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                L >>>= be, k -= be, x.back += be;
              }
              if (L >>>= le, k -= le, x.back += le, x.length = ge, he === 0) {
                x.mode = 26;
                break;
              }
              if (32 & he) {
                x.back = -1, x.mode = 12;
                break;
              }
              if (64 & he) {
                T.msg = "invalid literal/length code", x.mode = 30;
                break;
              }
              x.extra = 15 & he, x.mode = 22;
            case 22:
              if (x.extra) {
                for (N = x.extra; k < N; ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                x.length += L & (1 << x.extra) - 1, L >>>= x.extra, k -= x.extra, x.back += x.extra;
              }
              x.was = x.length, x.mode = 23;
            case 23:
              for (; he = (B = x.distcode[L & (1 << x.distbits) - 1]) >>> 16 & 255, ge = 65535 & B, !((le = B >>> 24) <= k); ) {
                if (q === 0) break e;
                q--, L += z[O++] << k, k += 8;
              }
              if ((240 & he) == 0) {
                for (be = le, Te = he, Ae = ge; he = (B = x.distcode[Ae + ((L & (1 << be + Te) - 1) >> be)]) >>> 16 & 255, ge = 65535 & B, !(be + (le = B >>> 24) <= k); ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                L >>>= be, k -= be, x.back += be;
              }
              if (L >>>= le, k -= le, x.back += le, 64 & he) {
                T.msg = "invalid distance code", x.mode = 30;
                break;
              }
              x.offset = ge, x.extra = 15 & he, x.mode = 24;
            case 24:
              if (x.extra) {
                for (N = x.extra; k < N; ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                x.offset += L & (1 << x.extra) - 1, L >>>= x.extra, k -= x.extra, x.back += x.extra;
              }
              if (x.offset > x.dmax) {
                T.msg = "invalid distance too far back", x.mode = 30;
                break;
              }
              x.mode = 25;
            case 25:
              if (Q === 0) break e;
              if (J = ae - Q, x.offset > J) {
                if ((J = x.offset - J) > x.whave && x.sane) {
                  T.msg = "invalid distance too far back", x.mode = 30;
                  break;
                }
                ce = J > x.wnext ? (J -= x.wnext, x.wsize - J) : x.wnext - J, J > x.length && (J = x.length), fe = x.window;
              } else fe = W, ce = G - x.offset, J = x.length;
              for (Q < J && (J = Q), Q -= J, x.length -= J; W[G++] = fe[ce++], --J; ) ;
              x.length === 0 && (x.mode = 21);
              break;
            case 26:
              if (Q === 0) break e;
              W[G++] = x.length, Q--, x.mode = 21;
              break;
            case 27:
              if (x.wrap) {
                for (; k < 32; ) {
                  if (q === 0) break e;
                  q--, L |= z[O++] << k, k += 8;
                }
                if (ae -= Q, T.total_out += ae, x.total += ae, ae && (T.adler = x.check = x.flags ? o(x.check, W, ae, G - ae) : a(x.check, W, ae, G - ae)), ae = Q, (x.flags ? L : p(L)) !== x.check) {
                  T.msg = "incorrect data check", x.mode = 30;
                  break;
                }
                k = L = 0;
              }
              x.mode = 28;
            case 28:
              if (x.wrap && x.flags) {
                for (; k < 32; ) {
                  if (q === 0) break e;
                  q--, L += z[O++] << k, k += 8;
                }
                if (L !== (4294967295 & x.total)) {
                  T.msg = "incorrect length check", x.mode = 30;
                  break;
                }
                k = L = 0;
              }
              x.mode = 29;
            case 29:
              $ = 1;
              break e;
            case 30:
              $ = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return h;
          }
          return T.next_out = G, T.avail_out = Q, T.next_in = O, T.avail_in = q, x.hold = L, x.bits = k, (x.wsize || ae !== T.avail_out && x.mode < 30 && (x.mode < 27 || R !== 4)) && Z(T, T.output, T.next_out, ae - T.avail_out) ? (x.mode = 31, -4) : (re -= T.avail_in, ae -= T.avail_out, T.total_in += re, T.total_out += ae, x.total += ae, x.wrap && ae && (T.adler = x.check = x.flags ? o(x.check, W, ae, T.next_out - ae) : a(x.check, W, ae, T.next_out - ae)), T.data_type = x.bits + (x.last ? 64 : 0) + (x.mode === 12 ? 128 : 0) + (x.mode === 20 || x.mode === 15 ? 256 : 0), (re == 0 && ae === 0 || R === 4) && $ === g && ($ = -5), $);
        }, c.inflateEnd = function(T) {
          if (!T || !T.state) return h;
          var R = T.state;
          return R.window && (R.window = null), T.state = null, g;
        }, c.inflateGetHeader = function(T, R) {
          var x;
          return T && T.state ? (2 & (x = T.state).wrap) == 0 ? h : ((x.head = R).done = !1, g) : h;
        }, c.inflateSetDictionary = function(T, R) {
          var x, z = R.length;
          return T && T.state ? (x = T.state).wrap !== 0 && x.mode !== 11 ? h : x.mode === 11 && a(1, R, z, 0) !== x.check ? -3 : Z(T, R, z, z) ? (x.mode = 31, -4) : (x.havedict = 1, g) : h;
        }, c.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, r, c) {
        var i = t("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        r.exports = function(b, m, g, h, y, f, s, p) {
          var d, D, w, _, U, E, S, A, I, Z = p.bits, T = 0, R = 0, x = 0, z = 0, W = 0, O = 0, G = 0, q = 0, Q = 0, L = 0, k = null, re = 0, ae = new i.Buf16(16), J = new i.Buf16(16), ce = null, fe = 0;
          for (T = 0; T <= 15; T++) ae[T] = 0;
          for (R = 0; R < h; R++) ae[m[g + R]]++;
          for (W = Z, z = 15; 1 <= z && ae[z] === 0; z--) ;
          if (z < W && (W = z), z === 0) return y[f++] = 20971520, y[f++] = 20971520, p.bits = 1, 0;
          for (x = 1; x < z && ae[x] === 0; x++) ;
          for (W < x && (W = x), T = q = 1; T <= 15; T++) if (q <<= 1, (q -= ae[T]) < 0) return -1;
          if (0 < q && (b === 0 || z !== 1)) return -1;
          for (J[1] = 0, T = 1; T < 15; T++) J[T + 1] = J[T] + ae[T];
          for (R = 0; R < h; R++) m[g + R] !== 0 && (s[J[m[g + R]]++] = R);
          if (E = b === 0 ? (k = ce = s, 19) : b === 1 ? (k = a, re -= 257, ce = o, fe -= 257, 256) : (k = u, ce = l, -1), T = x, U = f, G = R = L = 0, w = -1, _ = (Q = 1 << (O = W)) - 1, b === 1 && 852 < Q || b === 2 && 592 < Q) return 1;
          for (; ; ) {
            for (S = T - G, I = s[R] < E ? (A = 0, s[R]) : s[R] > E ? (A = ce[fe + s[R]], k[re + s[R]]) : (A = 96, 0), d = 1 << T - G, x = D = 1 << O; y[U + (L >> G) + (D -= d)] = S << 24 | A << 16 | I | 0, D !== 0; ) ;
            for (d = 1 << T - 1; L & d; ) d >>= 1;
            if (d !== 0 ? (L &= d - 1, L += d) : L = 0, R++, --ae[T] == 0) {
              if (T === z) break;
              T = m[g + s[R]];
            }
            if (W < T && (L & _) !== w) {
              for (G === 0 && (G = W), U += x, q = 1 << (O = T - G); O + G < z && !((q -= ae[O + G]) <= 0); ) O++, q <<= 1;
              if (Q += 1 << O, b === 1 && 852 < Q || b === 2 && 592 < Q) return 1;
              y[w = L & _] = W << 24 | O << 16 | U - f | 0;
            }
          }
          return L !== 0 && (y[U + L] = T - G << 24 | 64 << 16 | 0), p.bits = W, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(t, r, c) {
        r.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(t, r, c) {
        var i = t("../utils/common"), a = 0, o = 1;
        function u(B) {
          for (var V = B.length; 0 <= --V; ) B[V] = 0;
        }
        var l = 0, b = 29, m = 256, g = m + 1 + b, h = 30, y = 19, f = 2 * g + 1, s = 15, p = 16, d = 7, D = 256, w = 16, _ = 17, U = 18, E = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Z = new Array(2 * (g + 2));
        u(Z);
        var T = new Array(2 * h);
        u(T);
        var R = new Array(512);
        u(R);
        var x = new Array(256);
        u(x);
        var z = new Array(b);
        u(z);
        var W, O, G, q = new Array(h);
        function Q(B, V, ie, ne, H) {
          this.static_tree = B, this.extra_bits = V, this.extra_base = ie, this.elems = ne, this.max_length = H, this.has_stree = B && B.length;
        }
        function L(B, V) {
          this.dyn_tree = B, this.max_code = 0, this.stat_desc = V;
        }
        function k(B) {
          return B < 256 ? R[B] : R[256 + (B >>> 7)];
        }
        function re(B, V) {
          B.pending_buf[B.pending++] = 255 & V, B.pending_buf[B.pending++] = V >>> 8 & 255;
        }
        function ae(B, V, ie) {
          B.bi_valid > p - ie ? (B.bi_buf |= V << B.bi_valid & 65535, re(B, B.bi_buf), B.bi_buf = V >> p - B.bi_valid, B.bi_valid += ie - p) : (B.bi_buf |= V << B.bi_valid & 65535, B.bi_valid += ie);
        }
        function J(B, V, ie) {
          ae(B, ie[2 * V], ie[2 * V + 1]);
        }
        function ce(B, V) {
          for (var ie = 0; ie |= 1 & B, B >>>= 1, ie <<= 1, 0 < --V; ) ;
          return ie >>> 1;
        }
        function fe(B, V, ie) {
          var ne, H, M = new Array(s + 1), X = 0;
          for (ne = 1; ne <= s; ne++) M[ne] = X = X + ie[ne - 1] << 1;
          for (H = 0; H <= V; H++) {
            var Y = B[2 * H + 1];
            Y !== 0 && (B[2 * H] = ce(M[Y]++, Y));
          }
        }
        function le(B) {
          var V;
          for (V = 0; V < g; V++) B.dyn_ltree[2 * V] = 0;
          for (V = 0; V < h; V++) B.dyn_dtree[2 * V] = 0;
          for (V = 0; V < y; V++) B.bl_tree[2 * V] = 0;
          B.dyn_ltree[2 * D] = 1, B.opt_len = B.static_len = 0, B.last_lit = B.matches = 0;
        }
        function he(B) {
          8 < B.bi_valid ? re(B, B.bi_buf) : 0 < B.bi_valid && (B.pending_buf[B.pending++] = B.bi_buf), B.bi_buf = 0, B.bi_valid = 0;
        }
        function ge(B, V, ie, ne) {
          var H = 2 * V, M = 2 * ie;
          return B[H] < B[M] || B[H] === B[M] && ne[V] <= ne[ie];
        }
        function be(B, V, ie) {
          for (var ne = B.heap[ie], H = ie << 1; H <= B.heap_len && (H < B.heap_len && ge(V, B.heap[H + 1], B.heap[H], B.depth) && H++, !ge(V, ne, B.heap[H], B.depth)); ) B.heap[ie] = B.heap[H], ie = H, H <<= 1;
          B.heap[ie] = ne;
        }
        function Te(B, V, ie) {
          var ne, H, M, X, Y = 0;
          if (B.last_lit !== 0) for (; ne = B.pending_buf[B.d_buf + 2 * Y] << 8 | B.pending_buf[B.d_buf + 2 * Y + 1], H = B.pending_buf[B.l_buf + Y], Y++, ne === 0 ? J(B, H, V) : (J(B, (M = x[H]) + m + 1, V), (X = E[M]) !== 0 && ae(B, H -= z[M], X), J(B, M = k(--ne), ie), (X = S[M]) !== 0 && ae(B, ne -= q[M], X)), Y < B.last_lit; ) ;
          J(B, D, V);
        }
        function Ae(B, V) {
          var ie, ne, H, M = V.dyn_tree, X = V.stat_desc.static_tree, Y = V.stat_desc.has_stree, te = V.stat_desc.elems, ue = -1;
          for (B.heap_len = 0, B.heap_max = f, ie = 0; ie < te; ie++) M[2 * ie] !== 0 ? (B.heap[++B.heap_len] = ue = ie, B.depth[ie] = 0) : M[2 * ie + 1] = 0;
          for (; B.heap_len < 2; ) M[2 * (H = B.heap[++B.heap_len] = ue < 2 ? ++ue : 0)] = 1, B.depth[H] = 0, B.opt_len--, Y && (B.static_len -= X[2 * H + 1]);
          for (V.max_code = ue, ie = B.heap_len >> 1; 1 <= ie; ie--) be(B, M, ie);
          for (H = te; ie = B.heap[1], B.heap[1] = B.heap[B.heap_len--], be(B, M, 1), ne = B.heap[1], B.heap[--B.heap_max] = ie, B.heap[--B.heap_max] = ne, M[2 * H] = M[2 * ie] + M[2 * ne], B.depth[H] = (B.depth[ie] >= B.depth[ne] ? B.depth[ie] : B.depth[ne]) + 1, M[2 * ie + 1] = M[2 * ne + 1] = H, B.heap[1] = H++, be(B, M, 1), 2 <= B.heap_len; ) ;
          B.heap[--B.heap_max] = B.heap[1], function(pe, xe) {
            var me, _e, K, oe, de, ye, De = xe.dyn_tree, Ue = xe.max_code, Se = xe.stat_desc.static_tree, Re = xe.stat_desc.has_stree, Qe = xe.stat_desc.extra_bits, F = xe.stat_desc.extra_base, C = xe.stat_desc.max_length, P = 0;
            for (oe = 0; oe <= s; oe++) pe.bl_count[oe] = 0;
            for (De[2 * pe.heap[pe.heap_max] + 1] = 0, me = pe.heap_max + 1; me < f; me++) C < (oe = De[2 * De[2 * (_e = pe.heap[me]) + 1] + 1] + 1) && (oe = C, P++), De[2 * _e + 1] = oe, Ue < _e || (pe.bl_count[oe]++, de = 0, F <= _e && (de = Qe[_e - F]), ye = De[2 * _e], pe.opt_len += ye * (oe + de), Re && (pe.static_len += ye * (Se[2 * _e + 1] + de)));
            if (P !== 0) {
              do {
                for (oe = C - 1; pe.bl_count[oe] === 0; ) oe--;
                pe.bl_count[oe]--, pe.bl_count[oe + 1] += 2, pe.bl_count[C]--, P -= 2;
              } while (0 < P);
              for (oe = C; oe !== 0; oe--) for (_e = pe.bl_count[oe]; _e !== 0; ) Ue < (K = pe.heap[--me]) || (De[2 * K + 1] !== oe && (pe.opt_len += (oe - De[2 * K + 1]) * De[2 * K], De[2 * K + 1] = oe), _e--);
            }
          }(B, V), fe(M, ue, B.bl_count);
        }
        function v(B, V, ie) {
          var ne, H, M = -1, X = V[1], Y = 0, te = 7, ue = 4;
          for (X === 0 && (te = 138, ue = 3), V[2 * (ie + 1) + 1] = 65535, ne = 0; ne <= ie; ne++) H = X, X = V[2 * (ne + 1) + 1], ++Y < te && H === X || (Y < ue ? B.bl_tree[2 * H] += Y : H !== 0 ? (H !== M && B.bl_tree[2 * H]++, B.bl_tree[2 * w]++) : Y <= 10 ? B.bl_tree[2 * _]++ : B.bl_tree[2 * U]++, M = H, ue = (Y = 0) === X ? (te = 138, 3) : H === X ? (te = 6, 3) : (te = 7, 4));
        }
        function $(B, V, ie) {
          var ne, H, M = -1, X = V[1], Y = 0, te = 7, ue = 4;
          for (X === 0 && (te = 138, ue = 3), ne = 0; ne <= ie; ne++) if (H = X, X = V[2 * (ne + 1) + 1], !(++Y < te && H === X)) {
            if (Y < ue) for (; J(B, H, B.bl_tree), --Y != 0; ) ;
            else H !== 0 ? (H !== M && (J(B, H, B.bl_tree), Y--), J(B, w, B.bl_tree), ae(B, Y - 3, 2)) : Y <= 10 ? (J(B, _, B.bl_tree), ae(B, Y - 3, 3)) : (J(B, U, B.bl_tree), ae(B, Y - 11, 7));
            M = H, ue = (Y = 0) === X ? (te = 138, 3) : H === X ? (te = 6, 3) : (te = 7, 4);
          }
        }
        u(q);
        var j = !1;
        function N(B, V, ie, ne) {
          ae(B, (l << 1) + (ne ? 1 : 0), 3), function(H, M, X, Y) {
            he(H), re(H, X), re(H, ~X), i.arraySet(H.pending_buf, H.window, M, X, H.pending), H.pending += X;
          }(B, V, ie);
        }
        c._tr_init = function(B) {
          j || (function() {
            var V, ie, ne, H, M, X = new Array(s + 1);
            for (H = ne = 0; H < b - 1; H++) for (z[H] = ne, V = 0; V < 1 << E[H]; V++) x[ne++] = H;
            for (x[ne - 1] = H, H = M = 0; H < 16; H++) for (q[H] = M, V = 0; V < 1 << S[H]; V++) R[M++] = H;
            for (M >>= 7; H < h; H++) for (q[H] = M << 7, V = 0; V < 1 << S[H] - 7; V++) R[256 + M++] = H;
            for (ie = 0; ie <= s; ie++) X[ie] = 0;
            for (V = 0; V <= 143; ) Z[2 * V + 1] = 8, V++, X[8]++;
            for (; V <= 255; ) Z[2 * V + 1] = 9, V++, X[9]++;
            for (; V <= 279; ) Z[2 * V + 1] = 7, V++, X[7]++;
            for (; V <= 287; ) Z[2 * V + 1] = 8, V++, X[8]++;
            for (fe(Z, g + 1, X), V = 0; V < h; V++) T[2 * V + 1] = 5, T[2 * V] = ce(V, 5);
            W = new Q(Z, E, m + 1, g, s), O = new Q(T, S, 0, h, s), G = new Q(new Array(0), A, 0, y, d);
          }(), j = !0), B.l_desc = new L(B.dyn_ltree, W), B.d_desc = new L(B.dyn_dtree, O), B.bl_desc = new L(B.bl_tree, G), B.bi_buf = 0, B.bi_valid = 0, le(B);
        }, c._tr_stored_block = N, c._tr_flush_block = function(B, V, ie, ne) {
          var H, M, X = 0;
          0 < B.level ? (B.strm.data_type === 2 && (B.strm.data_type = function(Y) {
            var te, ue = 4093624447;
            for (te = 0; te <= 31; te++, ue >>>= 1) if (1 & ue && Y.dyn_ltree[2 * te] !== 0) return a;
            if (Y.dyn_ltree[18] !== 0 || Y.dyn_ltree[20] !== 0 || Y.dyn_ltree[26] !== 0) return o;
            for (te = 32; te < m; te++) if (Y.dyn_ltree[2 * te] !== 0) return o;
            return a;
          }(B)), Ae(B, B.l_desc), Ae(B, B.d_desc), X = function(Y) {
            var te;
            for (v(Y, Y.dyn_ltree, Y.l_desc.max_code), v(Y, Y.dyn_dtree, Y.d_desc.max_code), Ae(Y, Y.bl_desc), te = y - 1; 3 <= te && Y.bl_tree[2 * I[te] + 1] === 0; te--) ;
            return Y.opt_len += 3 * (te + 1) + 5 + 5 + 4, te;
          }(B), H = B.opt_len + 3 + 7 >>> 3, (M = B.static_len + 3 + 7 >>> 3) <= H && (H = M)) : H = M = ie + 5, ie + 4 <= H && V !== -1 ? N(B, V, ie, ne) : B.strategy === 4 || M === H ? (ae(B, 2 + (ne ? 1 : 0), 3), Te(B, Z, T)) : (ae(B, 4 + (ne ? 1 : 0), 3), function(Y, te, ue, pe) {
            var xe;
            for (ae(Y, te - 257, 5), ae(Y, ue - 1, 5), ae(Y, pe - 4, 4), xe = 0; xe < pe; xe++) ae(Y, Y.bl_tree[2 * I[xe] + 1], 3);
            $(Y, Y.dyn_ltree, te - 1), $(Y, Y.dyn_dtree, ue - 1);
          }(B, B.l_desc.max_code + 1, B.d_desc.max_code + 1, X + 1), Te(B, B.dyn_ltree, B.dyn_dtree)), le(B), ne && he(B);
        }, c._tr_tally = function(B, V, ie) {
          return B.pending_buf[B.d_buf + 2 * B.last_lit] = V >>> 8 & 255, B.pending_buf[B.d_buf + 2 * B.last_lit + 1] = 255 & V, B.pending_buf[B.l_buf + B.last_lit] = 255 & ie, B.last_lit++, V === 0 ? B.dyn_ltree[2 * ie]++ : (B.matches++, V--, B.dyn_ltree[2 * (x[ie] + m + 1)]++, B.dyn_dtree[2 * k(V)]++), B.last_lit === B.lit_bufsize - 1;
        }, c._tr_align = function(B) {
          ae(B, 2, 3), J(B, D, Z), function(V) {
            V.bi_valid === 16 ? (re(V, V.bi_buf), V.bi_buf = 0, V.bi_valid = 0) : 8 <= V.bi_valid && (V.pending_buf[V.pending++] = 255 & V.bi_buf, V.bi_buf >>= 8, V.bi_valid -= 8);
          }(B);
        };
      }, { "../utils/common": 41 }], 53: [function(t, r, c) {
        r.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(t, r, c) {
        (function(i) {
          (function(a, o) {
            if (!a.setImmediate) {
              var u, l, b, m, g = 1, h = {}, y = !1, f = a.document, s = Object.getPrototypeOf && Object.getPrototypeOf(a);
              s = s && s.setTimeout ? s : a, u = {}.toString.call(a.process) === "[object process]" ? function(w) {
                process.nextTick(function() {
                  d(w);
                });
              } : function() {
                if (a.postMessage && !a.importScripts) {
                  var w = !0, _ = a.onmessage;
                  return a.onmessage = function() {
                    w = !1;
                  }, a.postMessage("", "*"), a.onmessage = _, w;
                }
              }() ? (m = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", D, !1) : a.attachEvent("onmessage", D), function(w) {
                a.postMessage(m + w, "*");
              }) : a.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(w) {
                d(w.data);
              }, function(w) {
                b.port2.postMessage(w);
              }) : f && "onreadystatechange" in f.createElement("script") ? (l = f.documentElement, function(w) {
                var _ = f.createElement("script");
                _.onreadystatechange = function() {
                  d(w), _.onreadystatechange = null, l.removeChild(_), _ = null;
                }, l.appendChild(_);
              }) : function(w) {
                setTimeout(d, 0, w);
              }, s.setImmediate = function(w) {
                typeof w != "function" && (w = new Function("" + w));
                for (var _ = new Array(arguments.length - 1), U = 0; U < _.length; U++) _[U] = arguments[U + 1];
                var E = { callback: w, args: _ };
                return h[g] = E, u(g), g++;
              }, s.clearImmediate = p;
            }
            function p(w) {
              delete h[w];
            }
            function d(w) {
              if (y) setTimeout(d, 0, w);
              else {
                var _ = h[w];
                if (_) {
                  y = !0;
                  try {
                    (function(U) {
                      var E = U.callback, S = U.args;
                      switch (S.length) {
                        case 0:
                          E();
                          break;
                        case 1:
                          E(S[0]);
                          break;
                        case 2:
                          E(S[0], S[1]);
                          break;
                        case 3:
                          E(S[0], S[1], S[2]);
                          break;
                        default:
                          E.apply(o, S);
                      }
                    })(_);
                  } finally {
                    p(w), y = !1;
                  }
                }
              }
            }
            function D(w) {
              w.source === a && typeof w.data == "string" && w.data.indexOf(m) === 0 && d(+w.data.slice(m.length));
            }
          })(typeof self > "u" ? i === void 0 ? this : i : self);
        }).call(this, typeof dn < "u" ? dn : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }(Yr)), Yr.exports;
}
var ho;
function fs() {
  if (ho) return jn;
  ho = 1;
  var e = Md(), n = qd();
  jn.openArrayBuffer = t, jn.splitPath = r, jn.joinPath = c;
  function t(i) {
    return n.loadAsync(i).then(function(a) {
      function o(m) {
        return a.file(m) !== null;
      }
      function u(m, g) {
        return a.file(m).async("uint8array").then(function(h) {
          if (g === "base64")
            return e.fromByteArray(h);
          if (g) {
            var y = new TextDecoder(g);
            return y.decode(h);
          } else
            return h;
        });
      }
      function l(m, g) {
        a.file(m, g);
      }
      function b() {
        return a.generateAsync({ type: "arraybuffer" });
      }
      return {
        exists: o,
        read: u,
        write: l,
        toArrayBuffer: b
      };
    });
  }
  function r(i) {
    var a = i.lastIndexOf("/");
    return a === -1 ? { dirname: "", basename: i } : {
      dirname: i.substring(0, a),
      basename: i.substring(a + 1)
    };
  }
  function c() {
    var i = Array.prototype.filter.call(arguments, function(o) {
      return o;
    }), a = [];
    return i.forEach(function(o) {
      /^\//.test(o) ? a = [o] : a.push(o);
    }), a.join("/");
  }
  return jn;
}
var lt = {}, cn = {}, Wn = {}, po;
function hs() {
  if (po) return Wn;
  po = 1;
  var e = Be;
  Wn.Element = t, Wn.element = function(i, a, o) {
    return new t(i, a, o);
  }, Wn.text = function(i) {
    return {
      type: "text",
      value: i
    };
  };
  var n = Wn.emptyElement = {
    first: function() {
      return null;
    },
    firstOrEmpty: function() {
      return n;
    },
    attributes: {},
    children: []
  };
  function t(i, a, o) {
    this.type = "element", this.name = i, this.attributes = a || {}, this.children = o || [];
  }
  t.prototype.first = function(i) {
    return e.find(this.children, function(a) {
      return a.name === i;
    });
  }, t.prototype.firstOrEmpty = function(i) {
    return this.first(i) || n;
  }, t.prototype.getElementsByTagName = function(i) {
    var a = e.filter(this.children, function(o) {
      return o.name === i;
    });
    return c(a);
  }, t.prototype.text = function() {
    if (this.children.length === 0)
      return "";
    if (this.children.length !== 1 || this.children[0].type !== "text")
      throw new Error("Not implemented");
    return this.children[0].value;
  };
  var r = {
    getElementsByTagName: function(i) {
      return c(e.flatten(this.map(function(a) {
        return a.getElementsByTagName(i);
      }, !0)));
    }
  };
  function c(i) {
    return e.extend(i, r);
  }
  return Wn;
}
var Kr = {}, ft = {}, Vn = {}, nn = {}, _n = {}, go;
function tr() {
  if (go) return _n;
  go = 1;
  function e(i, a, o) {
    if (o === void 0 && (o = Array.prototype), i && typeof o.find == "function")
      return o.find.call(i, a);
    for (var u = 0; u < i.length; u++)
      if (Object.prototype.hasOwnProperty.call(i, u)) {
        var l = i[u];
        if (a.call(void 0, l, u, i))
          return l;
      }
  }
  function n(i, a) {
    return a === void 0 && (a = Object), a && typeof a.freeze == "function" ? a.freeze(i) : i;
  }
  function t(i, a) {
    if (i === null || typeof i != "object")
      throw new TypeError("target is not an object");
    for (var o in a)
      Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o]);
    return i;
  }
  var r = n({
    /**
     * `text/html`, the only mime type that triggers treating an XML document as HTML.
     *
     * @see DOMParser.SupportedType.isHTML
     * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/HTML Wikipedia
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
     * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
     */
    HTML: "text/html",
    /**
     * Helper method to check a mime type if it indicates an HTML document
     *
     * @param {string} [value]
     * @returns {boolean}
     *
     * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/HTML Wikipedia
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
     * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
    isHTML: function(i) {
      return i === r.HTML;
    },
    /**
     * `application/xml`, the standard mime type for XML documents.
     *
     * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
     * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
     * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
     */
    XML_APPLICATION: "application/xml",
    /**
     * `text/html`, an alias for `application/xml`.
     *
     * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
     * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
     */
    XML_TEXT: "text/xml",
    /**
     * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
     * but is parsed as an XML document.
     *
     * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
     * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
     */
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    /**
     * `image/svg+xml`,
     *
     * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
     * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
     * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
     */
    XML_SVG_IMAGE: "image/svg+xml"
  }), c = n({
    /**
     * The XHTML namespace.
     *
     * @see http://www.w3.org/1999/xhtml
     */
    HTML: "http://www.w3.org/1999/xhtml",
    /**
     * Checks if `uri` equals `NAMESPACE.HTML`.
     *
     * @param {string} [uri]
     *
     * @see NAMESPACE.HTML
     */
    isHTML: function(i) {
      return i === c.HTML;
    },
    /**
     * The SVG namespace.
     *
     * @see http://www.w3.org/2000/svg
     */
    SVG: "http://www.w3.org/2000/svg",
    /**
     * The `xml:` namespace.
     *
     * @see http://www.w3.org/XML/1998/namespace
     */
    XML: "http://www.w3.org/XML/1998/namespace",
    /**
     * The `xmlns:` namespace
     *
     * @see https://www.w3.org/2000/xmlns/
     */
    XMLNS: "http://www.w3.org/2000/xmlns/"
  });
  return _n.assign = t, _n.find = e, _n.freeze = n, _n.MIME_TYPE = r, _n.NAMESPACE = c, _n;
}
var mo;
function da() {
  if (mo) return nn;
  mo = 1;
  var e = tr(), n = e.find, t = e.NAMESPACE;
  function r(F) {
    return F !== "";
  }
  function c(F) {
    return F ? F.split(/[\t\n\f\r ]+/).filter(r) : [];
  }
  function i(F, C) {
    return F.hasOwnProperty(C) || (F[C] = !0), F;
  }
  function a(F) {
    if (!F) return [];
    var C = c(F);
    return Object.keys(C.reduce(i, {}));
  }
  function o(F) {
    return function(C) {
      return F && F.indexOf(C) !== -1;
    };
  }
  function u(F, C) {
    for (var P in F)
      Object.prototype.hasOwnProperty.call(F, P) && (C[P] = F[P]);
  }
  function l(F, C) {
    var P = F.prototype;
    if (!(P instanceof C)) {
      let ee = function() {
      };
      ee.prototype = C.prototype, ee = new ee(), u(P, ee), F.prototype = P = ee;
    }
    P.constructor != F && (typeof F != "function" && console.error("unknown Class:" + F), P.constructor = F);
  }
  var b = {}, m = b.ELEMENT_NODE = 1, g = b.ATTRIBUTE_NODE = 2, h = b.TEXT_NODE = 3, y = b.CDATA_SECTION_NODE = 4, f = b.ENTITY_REFERENCE_NODE = 5, s = b.ENTITY_NODE = 6, p = b.PROCESSING_INSTRUCTION_NODE = 7, d = b.COMMENT_NODE = 8, D = b.DOCUMENT_NODE = 9, w = b.DOCUMENT_TYPE_NODE = 10, _ = b.DOCUMENT_FRAGMENT_NODE = 11, U = b.NOTATION_NODE = 12, E = {}, S = {};
  E.INDEX_SIZE_ERR = (S[1] = "Index size error", 1), E.DOMSTRING_SIZE_ERR = (S[2] = "DOMString size error", 2);
  var A = E.HIERARCHY_REQUEST_ERR = (S[3] = "Hierarchy request error", 3);
  E.WRONG_DOCUMENT_ERR = (S[4] = "Wrong document", 4), E.INVALID_CHARACTER_ERR = (S[5] = "Invalid character", 5), E.NO_DATA_ALLOWED_ERR = (S[6] = "No data allowed", 6), E.NO_MODIFICATION_ALLOWED_ERR = (S[7] = "No modification allowed", 7);
  var I = E.NOT_FOUND_ERR = (S[8] = "Not found", 8);
  E.NOT_SUPPORTED_ERR = (S[9] = "Not supported", 9);
  var Z = E.INUSE_ATTRIBUTE_ERR = (S[10] = "Attribute in use", 10);
  E.INVALID_STATE_ERR = (S[11] = "Invalid state", 11), E.SYNTAX_ERR = (S[12] = "Syntax error", 12), E.INVALID_MODIFICATION_ERR = (S[13] = "Invalid modification", 13), E.NAMESPACE_ERR = (S[14] = "Invalid namespace", 14), E.INVALID_ACCESS_ERR = (S[15] = "Invalid access", 15);
  function T(F, C) {
    if (C instanceof Error)
      var P = C;
    else
      P = this, Error.call(this, S[F]), this.message = S[F], Error.captureStackTrace && Error.captureStackTrace(this, T);
    return P.code = F, C && (this.message = this.message + ": " + C), P;
  }
  T.prototype = Error.prototype, u(E, T);
  function R() {
  }
  R.prototype = {
    /**
     * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
     * @standard level1
     */
    length: 0,
    /**
     * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
     * @standard level1
     * @param index  unsigned long
     *   Index into the collection.
     * @return Node
     * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
     */
    item: function(F) {
      return F >= 0 && F < this.length ? this[F] : null;
    },
    toString: function(F, C) {
      for (var P = [], ee = 0; ee < this.length; ee++)
        Ue(this[ee], P, F, C);
      return P.join("");
    },
    /**
     * @private
     * @param {function (Node):boolean} predicate
     * @returns {Node[]}
     */
    filter: function(F) {
      return Array.prototype.filter.call(this, F);
    },
    /**
     * @private
     * @param {Node} item
     * @returns {number}
     */
    indexOf: function(F) {
      return Array.prototype.indexOf.call(this, F);
    }
  };
  function x(F, C) {
    this._node = F, this._refresh = C, z(this);
  }
  function z(F) {
    var C = F._node._inc || F._node.ownerDocument._inc;
    if (F._inc !== C) {
      var P = F._refresh(F._node);
      if (Qe(F, "length", P.length), !F.$$length || P.length < F.$$length)
        for (var ee = P.length; ee in F; ee++)
          Object.prototype.hasOwnProperty.call(F, ee) && delete F[ee];
      u(P, F), F._inc = C;
    }
  }
  x.prototype.item = function(F) {
    return z(this), this[F] || null;
  }, l(x, R);
  function W() {
  }
  function O(F, C) {
    for (var P = F.length; P--; )
      if (F[P] === C)
        return P;
  }
  function G(F, C, P, ee) {
    if (ee ? C[O(C, ee)] = P : C[C.length++] = P, F) {
      P.ownerElement = F;
      var se = F.ownerDocument;
      se && (ee && ce(se, F, ee), J(se, F, P));
    }
  }
  function q(F, C, P) {
    var ee = O(C, P);
    if (ee >= 0) {
      for (var se = C.length - 1; ee < se; )
        C[ee] = C[++ee];
      if (C.length = se, F) {
        var ve = F.ownerDocument;
        ve && (ce(ve, F, P), P.ownerElement = null);
      }
    } else
      throw new T(I, new Error(F.tagName + "@" + P));
  }
  W.prototype = {
    length: 0,
    item: R.prototype.item,
    getNamedItem: function(F) {
      for (var C = this.length; C--; ) {
        var P = this[C];
        if (P.nodeName == F)
          return P;
      }
    },
    setNamedItem: function(F) {
      var C = F.ownerElement;
      if (C && C != this._ownerElement)
        throw new T(Z);
      var P = this.getNamedItem(F.nodeName);
      return G(this._ownerElement, this, F, P), P;
    },
    /* returns Node */
    setNamedItemNS: function(F) {
      var C = F.ownerElement, P;
      if (C && C != this._ownerElement)
        throw new T(Z);
      return P = this.getNamedItemNS(F.namespaceURI, F.localName), G(this._ownerElement, this, F, P), P;
    },
    /* returns Node */
    removeNamedItem: function(F) {
      var C = this.getNamedItem(F);
      return q(this._ownerElement, this, C), C;
    },
    // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
    //for level2
    removeNamedItemNS: function(F, C) {
      var P = this.getNamedItemNS(F, C);
      return q(this._ownerElement, this, P), P;
    },
    getNamedItemNS: function(F, C) {
      for (var P = this.length; P--; ) {
        var ee = this[P];
        if (ee.localName == C && ee.namespaceURI == F)
          return ee;
      }
      return null;
    }
  };
  function Q() {
  }
  Q.prototype = {
    /**
     * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
     * The different implementations fairly diverged in what kind of features were reported.
     * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
     *
     * @deprecated It is deprecated and modern browsers return true in all cases.
     *
     * @param {string} feature
     * @param {string} [version]
     * @returns {boolean} always true
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
     * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
     */
    hasFeature: function(F, C) {
      return !0;
    },
    /**
     * Creates an XML Document object of the specified type with its document element.
     *
     * __It behaves slightly different from the description in the living standard__:
     * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
     * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
     * - this implementation is not validating names or qualified names
     *   (when parsing XML strings, the SAX parser takes care of that)
     *
     * @param {string|null} namespaceURI
     * @param {string} qualifiedName
     * @param {DocumentType=null} doctype
     * @returns {Document}
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
     * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
     *
     * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
     * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
     * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
     */
    createDocument: function(F, C, P) {
      var ee = new ae();
      if (ee.implementation = this, ee.childNodes = new R(), ee.doctype = P || null, P && ee.appendChild(P), C) {
        var se = ee.createElementNS(F, C);
        ee.appendChild(se);
      }
      return ee;
    },
    /**
     * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
     *
     * __This behavior is slightly different from the in the specs__:
     * - this implementation is not validating names or qualified names
     *   (when parsing XML strings, the SAX parser takes care of that)
     *
     * @param {string} qualifiedName
     * @param {string} [publicId]
     * @param {string} [systemId]
     * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
     * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
     * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
     *
     * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
     * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
     * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
     */
    createDocumentType: function(F, C, P) {
      var ee = new ue();
      return ee.name = F, ee.nodeName = F, ee.publicId = C || "", ee.systemId = P || "", ee;
    }
  };
  function L() {
  }
  L.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    // Modified in DOM Level 2:
    insertBefore: function(F, C) {
      return V(this, F, C);
    },
    replaceChild: function(F, C) {
      V(this, F, C, B), C && this.removeChild(C);
    },
    removeChild: function(F) {
      return le(this, F);
    },
    appendChild: function(F) {
      return this.insertBefore(F, null);
    },
    hasChildNodes: function() {
      return this.firstChild != null;
    },
    cloneNode: function(F) {
      return Re(this.ownerDocument || this, this, F);
    },
    // Modified in DOM Level 2:
    normalize: function() {
      for (var F = this.firstChild; F; ) {
        var C = F.nextSibling;
        C && C.nodeType == h && F.nodeType == h ? (this.removeChild(C), F.appendData(C.data)) : (F.normalize(), F = C);
      }
    },
    // Introduced in DOM Level 2:
    isSupported: function(F, C) {
      return this.ownerDocument.implementation.hasFeature(F, C);
    },
    // Introduced in DOM Level 2:
    hasAttributes: function() {
      return this.attributes.length > 0;
    },
    /**
     * Look up the prefix associated to the given namespace URI, starting from this node.
     * **The default namespace declarations are ignored by this method.**
     * See Namespace Prefix Lookup for details on the algorithm used by this method.
     *
     * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
     *
     * @param {string | null} namespaceURI
     * @returns {string | null}
     * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
     * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
     * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
     * @see https://github.com/xmldom/xmldom/issues/322
     */
    lookupPrefix: function(F) {
      for (var C = this; C; ) {
        var P = C._nsMap;
        if (P) {
          for (var ee in P)
            if (Object.prototype.hasOwnProperty.call(P, ee) && P[ee] === F)
              return ee;
        }
        C = C.nodeType == g ? C.ownerDocument : C.parentNode;
      }
      return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI: function(F) {
      for (var C = this; C; ) {
        var P = C._nsMap;
        if (P && Object.prototype.hasOwnProperty.call(P, F))
          return P[F];
        C = C.nodeType == g ? C.ownerDocument : C.parentNode;
      }
      return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace: function(F) {
      var C = this.lookupPrefix(F);
      return C == null;
    }
  };
  function k(F) {
    return F == "<" && "&lt;" || F == ">" && "&gt;" || F == "&" && "&amp;" || F == '"' && "&quot;" || "&#" + F.charCodeAt() + ";";
  }
  u(b, L), u(b, L.prototype);
  function re(F, C) {
    if (C(F))
      return !0;
    if (F = F.firstChild)
      do
        if (re(F, C))
          return !0;
      while (F = F.nextSibling);
  }
  function ae() {
    this.ownerDocument = this;
  }
  function J(F, C, P) {
    F && F._inc++;
    var ee = P.namespaceURI;
    ee === t.XMLNS && (C._nsMap[P.prefix ? P.localName : ""] = P.value);
  }
  function ce(F, C, P, ee) {
    F && F._inc++;
    var se = P.namespaceURI;
    se === t.XMLNS && delete C._nsMap[P.prefix ? P.localName : ""];
  }
  function fe(F, C, P) {
    if (F && F._inc) {
      F._inc++;
      var ee = C.childNodes;
      if (P)
        ee[ee.length++] = P;
      else {
        for (var se = C.firstChild, ve = 0; se; )
          ee[ve++] = se, se = se.nextSibling;
        ee.length = ve, delete ee[ee.length];
      }
    }
  }
  function le(F, C) {
    var P = C.previousSibling, ee = C.nextSibling;
    return P ? P.nextSibling = ee : F.firstChild = ee, ee ? ee.previousSibling = P : F.lastChild = P, C.parentNode = null, C.previousSibling = null, C.nextSibling = null, fe(F.ownerDocument, F), C;
  }
  function he(F) {
    return F && (F.nodeType === L.DOCUMENT_NODE || F.nodeType === L.DOCUMENT_FRAGMENT_NODE || F.nodeType === L.ELEMENT_NODE);
  }
  function ge(F) {
    return F && (Te(F) || Ae(F) || be(F) || F.nodeType === L.DOCUMENT_FRAGMENT_NODE || F.nodeType === L.COMMENT_NODE || F.nodeType === L.PROCESSING_INSTRUCTION_NODE);
  }
  function be(F) {
    return F && F.nodeType === L.DOCUMENT_TYPE_NODE;
  }
  function Te(F) {
    return F && F.nodeType === L.ELEMENT_NODE;
  }
  function Ae(F) {
    return F && F.nodeType === L.TEXT_NODE;
  }
  function v(F, C) {
    var P = F.childNodes || [];
    if (n(P, Te) || be(C))
      return !1;
    var ee = n(P, be);
    return !(C && ee && P.indexOf(ee) > P.indexOf(C));
  }
  function $(F, C) {
    var P = F.childNodes || [];
    function ee(ve) {
      return Te(ve) && ve !== C;
    }
    if (n(P, ee))
      return !1;
    var se = n(P, be);
    return !(C && se && P.indexOf(se) > P.indexOf(C));
  }
  function j(F, C, P) {
    if (!he(F))
      throw new T(A, "Unexpected parent node type " + F.nodeType);
    if (P && P.parentNode !== F)
      throw new T(I, "child not in parent");
    if (
      // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
      !ge(C) || // 5. If either `node` is a Text node and `parent` is a document,
      // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
      // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
      // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
      be(C) && F.nodeType !== L.DOCUMENT_NODE
    )
      throw new T(
        A,
        "Unexpected node type " + C.nodeType + " for parent node type " + F.nodeType
      );
  }
  function N(F, C, P) {
    var ee = F.childNodes || [], se = C.childNodes || [];
    if (C.nodeType === L.DOCUMENT_FRAGMENT_NODE) {
      var ve = se.filter(Te);
      if (ve.length > 1 || n(se, Ae))
        throw new T(A, "More than one element or text in fragment");
      if (ve.length === 1 && !v(F, P))
        throw new T(A, "Element in fragment can not be inserted before doctype");
    }
    if (Te(C) && !v(F, P))
      throw new T(A, "Only one element can be added and only after doctype");
    if (be(C)) {
      if (n(ee, be))
        throw new T(A, "Only one doctype is allowed");
      var Ce = n(ee, Te);
      if (P && ee.indexOf(Ce) < ee.indexOf(P))
        throw new T(A, "Doctype can only be inserted before an element");
      if (!P && Ce)
        throw new T(A, "Doctype can not be appended since element is present");
    }
  }
  function B(F, C, P) {
    var ee = F.childNodes || [], se = C.childNodes || [];
    if (C.nodeType === L.DOCUMENT_FRAGMENT_NODE) {
      var ve = se.filter(Te);
      if (ve.length > 1 || n(se, Ae))
        throw new T(A, "More than one element or text in fragment");
      if (ve.length === 1 && !$(F, P))
        throw new T(A, "Element in fragment can not be inserted before doctype");
    }
    if (Te(C) && !$(F, P))
      throw new T(A, "Only one element can be added and only after doctype");
    if (be(C)) {
      if (n(ee, function(Je) {
        return be(Je) && Je !== P;
      }))
        throw new T(A, "Only one doctype is allowed");
      var Ce = n(ee, Te);
      if (P && ee.indexOf(Ce) < ee.indexOf(P))
        throw new T(A, "Doctype can only be inserted before an element");
    }
  }
  function V(F, C, P, ee) {
    j(F, C, P), F.nodeType === L.DOCUMENT_NODE && (ee || N)(F, C, P);
    var se = C.parentNode;
    if (se && se.removeChild(C), C.nodeType === _) {
      var ve = C.firstChild;
      if (ve == null)
        return C;
      var Ce = C.lastChild;
    } else
      ve = Ce = C;
    var Me = P ? P.previousSibling : F.lastChild;
    ve.previousSibling = Me, Ce.nextSibling = P, Me ? Me.nextSibling = ve : F.firstChild = ve, P == null ? F.lastChild = Ce : P.previousSibling = Ce;
    do
      ve.parentNode = F;
    while (ve !== Ce && (ve = ve.nextSibling));
    return fe(F.ownerDocument || F, F), C.nodeType == _ && (C.firstChild = C.lastChild = null), C;
  }
  function ie(F, C) {
    return C.parentNode && C.parentNode.removeChild(C), C.parentNode = F, C.previousSibling = F.lastChild, C.nextSibling = null, C.previousSibling ? C.previousSibling.nextSibling = C : F.firstChild = C, F.lastChild = C, fe(F.ownerDocument, F, C), C;
  }
  ae.prototype = {
    //implementation : null,
    nodeName: "#document",
    nodeType: D,
    /**
     * The DocumentType node of the document.
     *
     * @readonly
     * @type DocumentType
     */
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(F, C) {
      if (F.nodeType == _) {
        for (var P = F.firstChild; P; ) {
          var ee = P.nextSibling;
          this.insertBefore(P, C), P = ee;
        }
        return F;
      }
      return V(this, F, C), F.ownerDocument = this, this.documentElement === null && F.nodeType === m && (this.documentElement = F), F;
    },
    removeChild: function(F) {
      return this.documentElement == F && (this.documentElement = null), le(this, F);
    },
    replaceChild: function(F, C) {
      V(this, F, C, B), F.ownerDocument = this, C && this.removeChild(C), Te(F) && (this.documentElement = F);
    },
    // Introduced in DOM Level 2:
    importNode: function(F, C) {
      return Se(this, F, C);
    },
    // Introduced in DOM Level 2:
    getElementById: function(F) {
      var C = null;
      return re(this.documentElement, function(P) {
        if (P.nodeType == m && P.getAttribute("id") == F)
          return C = P, !0;
      }), C;
    },
    /**
     * The `getElementsByClassName` method of `Document` interface returns an array-like object
     * of all child elements which have **all** of the given class name(s).
     *
     * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
     *
     *
     * Warning: This is a live LiveNodeList.
     * Changes in the DOM will reflect in the array as the changes occur.
     * If an element selected by this array no longer qualifies for the selector,
     * it will automatically be removed. Be aware of this for iteration purposes.
     *
     * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
     * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
     */
    getElementsByClassName: function(F) {
      var C = a(F);
      return new x(this, function(P) {
        var ee = [];
        return C.length > 0 && re(P.documentElement, function(se) {
          if (se !== P && se.nodeType === m) {
            var ve = se.getAttribute("class");
            if (ve) {
              var Ce = F === ve;
              if (!Ce) {
                var Me = a(ve);
                Ce = C.every(o(Me));
              }
              Ce && ee.push(se);
            }
          }
        }), ee;
      });
    },
    //document factory method:
    createElement: function(F) {
      var C = new ne();
      C.ownerDocument = this, C.nodeName = F, C.tagName = F, C.localName = F, C.childNodes = new R();
      var P = C.attributes = new W();
      return P._ownerElement = C, C;
    },
    createDocumentFragment: function() {
      var F = new _e();
      return F.ownerDocument = this, F.childNodes = new R(), F;
    },
    createTextNode: function(F) {
      var C = new X();
      return C.ownerDocument = this, C.appendData(F), C;
    },
    createComment: function(F) {
      var C = new Y();
      return C.ownerDocument = this, C.appendData(F), C;
    },
    createCDATASection: function(F) {
      var C = new te();
      return C.ownerDocument = this, C.appendData(F), C;
    },
    createProcessingInstruction: function(F, C) {
      var P = new K();
      return P.ownerDocument = this, P.tagName = P.nodeName = P.target = F, P.nodeValue = P.data = C, P;
    },
    createAttribute: function(F) {
      var C = new H();
      return C.ownerDocument = this, C.name = F, C.nodeName = F, C.localName = F, C.specified = !0, C;
    },
    createEntityReference: function(F) {
      var C = new me();
      return C.ownerDocument = this, C.nodeName = F, C;
    },
    // Introduced in DOM Level 2:
    createElementNS: function(F, C) {
      var P = new ne(), ee = C.split(":"), se = P.attributes = new W();
      return P.childNodes = new R(), P.ownerDocument = this, P.nodeName = C, P.tagName = C, P.namespaceURI = F, ee.length == 2 ? (P.prefix = ee[0], P.localName = ee[1]) : P.localName = C, se._ownerElement = P, P;
    },
    // Introduced in DOM Level 2:
    createAttributeNS: function(F, C) {
      var P = new H(), ee = C.split(":");
      return P.ownerDocument = this, P.nodeName = C, P.name = C, P.namespaceURI = F, P.specified = !0, ee.length == 2 ? (P.prefix = ee[0], P.localName = ee[1]) : P.localName = C, P;
    }
  }, l(ae, L);
  function ne() {
    this._nsMap = {};
  }
  ne.prototype = {
    nodeType: m,
    hasAttribute: function(F) {
      return this.getAttributeNode(F) != null;
    },
    getAttribute: function(F) {
      var C = this.getAttributeNode(F);
      return C && C.value || "";
    },
    getAttributeNode: function(F) {
      return this.attributes.getNamedItem(F);
    },
    setAttribute: function(F, C) {
      var P = this.ownerDocument.createAttribute(F);
      P.value = P.nodeValue = "" + C, this.setAttributeNode(P);
    },
    removeAttribute: function(F) {
      var C = this.getAttributeNode(F);
      C && this.removeAttributeNode(C);
    },
    //four real opeartion method
    appendChild: function(F) {
      return F.nodeType === _ ? this.insertBefore(F, null) : ie(this, F);
    },
    setAttributeNode: function(F) {
      return this.attributes.setNamedItem(F);
    },
    setAttributeNodeNS: function(F) {
      return this.attributes.setNamedItemNS(F);
    },
    removeAttributeNode: function(F) {
      return this.attributes.removeNamedItem(F.nodeName);
    },
    //get real attribute name,and remove it by removeAttributeNode
    removeAttributeNS: function(F, C) {
      var P = this.getAttributeNodeNS(F, C);
      P && this.removeAttributeNode(P);
    },
    hasAttributeNS: function(F, C) {
      return this.getAttributeNodeNS(F, C) != null;
    },
    getAttributeNS: function(F, C) {
      var P = this.getAttributeNodeNS(F, C);
      return P && P.value || "";
    },
    setAttributeNS: function(F, C, P) {
      var ee = this.ownerDocument.createAttributeNS(F, C);
      ee.value = ee.nodeValue = "" + P, this.setAttributeNode(ee);
    },
    getAttributeNodeNS: function(F, C) {
      return this.attributes.getNamedItemNS(F, C);
    },
    getElementsByTagName: function(F) {
      return new x(this, function(C) {
        var P = [];
        return re(C, function(ee) {
          ee !== C && ee.nodeType == m && (F === "*" || ee.tagName == F) && P.push(ee);
        }), P;
      });
    },
    getElementsByTagNameNS: function(F, C) {
      return new x(this, function(P) {
        var ee = [];
        return re(P, function(se) {
          se !== P && se.nodeType === m && (F === "*" || se.namespaceURI === F) && (C === "*" || se.localName == C) && ee.push(se);
        }), ee;
      });
    }
  }, ae.prototype.getElementsByTagName = ne.prototype.getElementsByTagName, ae.prototype.getElementsByTagNameNS = ne.prototype.getElementsByTagNameNS, l(ne, L);
  function H() {
  }
  H.prototype.nodeType = g, l(H, L);
  function M() {
  }
  M.prototype = {
    data: "",
    substringData: function(F, C) {
      return this.data.substring(F, F + C);
    },
    appendData: function(F) {
      F = this.data + F, this.nodeValue = this.data = F, this.length = F.length;
    },
    insertData: function(F, C) {
      this.replaceData(F, 0, C);
    },
    appendChild: function(F) {
      throw new Error(S[A]);
    },
    deleteData: function(F, C) {
      this.replaceData(F, C, "");
    },
    replaceData: function(F, C, P) {
      var ee = this.data.substring(0, F), se = this.data.substring(F + C);
      P = ee + P + se, this.nodeValue = this.data = P, this.length = P.length;
    }
  }, l(M, L);
  function X() {
  }
  X.prototype = {
    nodeName: "#text",
    nodeType: h,
    splitText: function(F) {
      var C = this.data, P = C.substring(F);
      C = C.substring(0, F), this.data = this.nodeValue = C, this.length = C.length;
      var ee = this.ownerDocument.createTextNode(P);
      return this.parentNode && this.parentNode.insertBefore(ee, this.nextSibling), ee;
    }
  }, l(X, M);
  function Y() {
  }
  Y.prototype = {
    nodeName: "#comment",
    nodeType: d
  }, l(Y, M);
  function te() {
  }
  te.prototype = {
    nodeName: "#cdata-section",
    nodeType: y
  }, l(te, M);
  function ue() {
  }
  ue.prototype.nodeType = w, l(ue, L);
  function pe() {
  }
  pe.prototype.nodeType = U, l(pe, L);
  function xe() {
  }
  xe.prototype.nodeType = s, l(xe, L);
  function me() {
  }
  me.prototype.nodeType = f, l(me, L);
  function _e() {
  }
  _e.prototype.nodeName = "#document-fragment", _e.prototype.nodeType = _, l(_e, L);
  function K() {
  }
  K.prototype.nodeType = p, l(K, L);
  function oe() {
  }
  oe.prototype.serializeToString = function(F, C, P) {
    return de.call(F, C, P);
  }, L.prototype.toString = de;
  function de(F, C) {
    var P = [], ee = this.nodeType == 9 && this.documentElement || this, se = ee.prefix, ve = ee.namespaceURI;
    if (ve && se == null) {
      var se = ee.lookupPrefix(ve);
      if (se == null)
        var Ce = [
          { namespace: ve, prefix: null }
          //{namespace:uri,prefix:''}
        ];
    }
    return Ue(this, P, F, C, Ce), P.join("");
  }
  function ye(F, C, P) {
    var ee = F.prefix || "", se = F.namespaceURI;
    if (!se || ee === "xml" && se === t.XML || se === t.XMLNS)
      return !1;
    for (var ve = P.length; ve--; ) {
      var Ce = P[ve];
      if (Ce.prefix === ee)
        return Ce.namespace !== se;
    }
    return !0;
  }
  function De(F, C, P) {
    F.push(" ", C, '="', P.replace(/[<>&"\t\n\r]/g, k), '"');
  }
  function Ue(F, C, P, ee, se) {
    if (se || (se = []), ee)
      if (F = ee(F), F) {
        if (typeof F == "string") {
          C.push(F);
          return;
        }
      } else
        return;
    switch (F.nodeType) {
      case m:
        var ve = F.attributes, Ce = ve.length, Ne = F.firstChild, Me = F.tagName;
        P = t.isHTML(F.namespaceURI) || P;
        var Je = Me;
        if (!P && !F.prefix && F.namespaceURI) {
          for (var on, en = 0; en < ve.length; en++)
            if (ve.item(en).name === "xmlns") {
              on = ve.item(en).value;
              break;
            }
          if (!on)
            for (var yn = se.length - 1; yn >= 0; yn--) {
              var Dn = se[yn];
              if (Dn.prefix === "" && Dn.namespace === F.namespaceURI) {
                on = Dn.namespace;
                break;
              }
            }
          if (on !== F.namespaceURI)
            for (var yn = se.length - 1; yn >= 0; yn--) {
              var Dn = se[yn];
              if (Dn.namespace === F.namespaceURI) {
                Dn.prefix && (Je = Dn.prefix + ":" + Me);
                break;
              }
            }
        }
        C.push("<", Je);
        for (var vn = 0; vn < Ce; vn++) {
          var Ye = ve.item(vn);
          Ye.prefix == "xmlns" ? se.push({ prefix: Ye.localName, namespace: Ye.value }) : Ye.nodeName == "xmlns" && se.push({ prefix: "", namespace: Ye.value });
        }
        for (var vn = 0; vn < Ce; vn++) {
          var Ye = ve.item(vn);
          if (ye(Ye, P, se)) {
            var xn = Ye.prefix || "", Pn = Ye.namespaceURI;
            De(C, xn ? "xmlns:" + xn : "xmlns", Pn), se.push({ prefix: xn, namespace: Pn });
          }
          Ue(Ye, C, P, ee, se);
        }
        if (Me === Je && ye(F, P, se)) {
          var xn = F.prefix || "", Pn = F.namespaceURI;
          De(C, xn ? "xmlns:" + xn : "xmlns", Pn), se.push({ prefix: xn, namespace: Pn });
        }
        if (Ne || P && !/^(?:meta|link|img|br|hr|input)$/i.test(Me)) {
          if (C.push(">"), P && /^script$/i.test(Me))
            for (; Ne; )
              Ne.data ? C.push(Ne.data) : Ue(Ne, C, P, ee, se.slice()), Ne = Ne.nextSibling;
          else
            for (; Ne; )
              Ue(Ne, C, P, ee, se.slice()), Ne = Ne.nextSibling;
          C.push("</", Je, ">");
        } else
          C.push("/>");
        return;
      case D:
      case _:
        for (var Ne = F.firstChild; Ne; )
          Ue(Ne, C, P, ee, se.slice()), Ne = Ne.nextSibling;
        return;
      case g:
        return De(C, F.name, F.value);
      case h:
        return C.push(
          F.data.replace(/[<&>]/g, k)
        );
      case y:
        return C.push("<![CDATA[", F.data, "]]>");
      case d:
        return C.push("<!--", F.data, "-->");
      case w:
        var ga = F.publicId, Bn = F.systemId;
        if (C.push("<!DOCTYPE ", F.name), ga)
          C.push(" PUBLIC ", ga), Bn && Bn != "." && C.push(" ", Bn), C.push(">");
        else if (Bn && Bn != ".")
          C.push(" SYSTEM ", Bn, ">");
        else {
          var ma = F.internalSubset;
          ma && C.push(" [", ma, "]"), C.push(">");
        }
        return;
      case p:
        return C.push("<?", F.target, " ", F.data, "?>");
      case f:
        return C.push("&", F.nodeName, ";");
      //case ENTITY_NODE:
      //case NOTATION_NODE:
      default:
        C.push("??", F.nodeName);
    }
  }
  function Se(F, C, P) {
    var ee;
    switch (C.nodeType) {
      case m:
        ee = C.cloneNode(!1), ee.ownerDocument = F;
      //var attrs = node2.attributes;
      //var len = attrs.length;
      //for(var i=0;i<len;i++){
      //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
      //}
      case _:
        break;
      case g:
        P = !0;
        break;
    }
    if (ee || (ee = C.cloneNode(!1)), ee.ownerDocument = F, ee.parentNode = null, P)
      for (var se = C.firstChild; se; )
        ee.appendChild(Se(F, se, P)), se = se.nextSibling;
    return ee;
  }
  function Re(F, C, P) {
    var ee = new C.constructor();
    for (var se in C)
      if (Object.prototype.hasOwnProperty.call(C, se)) {
        var ve = C[se];
        typeof ve != "object" && ve != ee[se] && (ee[se] = ve);
      }
    switch (C.childNodes && (ee.childNodes = new R()), ee.ownerDocument = F, ee.nodeType) {
      case m:
        var Ce = C.attributes, Me = ee.attributes = new W(), Je = Ce.length;
        Me._ownerElement = ee;
        for (var on = 0; on < Je; on++)
          ee.setAttributeNode(Re(F, Ce.item(on), !0));
        break;
      case g:
        P = !0;
    }
    if (P)
      for (var en = C.firstChild; en; )
        ee.appendChild(Re(F, en, P)), en = en.nextSibling;
    return ee;
  }
  function Qe(F, C, P) {
    F[C] = P;
  }
  try {
    if (Object.defineProperty) {
      let F = function(C) {
        switch (C.nodeType) {
          case m:
          case _:
            var P = [];
            for (C = C.firstChild; C; )
              C.nodeType !== 7 && C.nodeType !== 8 && P.push(F(C)), C = C.nextSibling;
            return P.join("");
          default:
            return C.nodeValue;
        }
      };
      Object.defineProperty(x.prototype, "length", {
        get: function() {
          return z(this), this.$$length;
        }
      }), Object.defineProperty(L.prototype, "textContent", {
        get: function() {
          return F(this);
        },
        set: function(C) {
          switch (this.nodeType) {
            case m:
            case _:
              for (; this.firstChild; )
                this.removeChild(this.firstChild);
              (C || String(C)) && this.appendChild(this.ownerDocument.createTextNode(C));
              break;
            default:
              this.data = C, this.value = C, this.nodeValue = C;
          }
        }
      }), Qe = function(C, P, ee) {
        C["$$" + P] = ee;
      };
    }
  } catch {
  }
  return nn.DocumentType = ue, nn.DOMException = T, nn.DOMImplementation = Q, nn.Element = ne, nn.Node = L, nn.NodeList = R, nn.XMLSerializer = oe, nn;
}
var Hn = {}, Qr = {}, bo;
function Pd() {
  return bo || (bo = 1, function(e) {
    var n = tr().freeze;
    e.XML_ENTITIES = n({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    }), e.HTML_ENTITIES = n({
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      AMP: "&",
      amp: "&",
      And: "⩓",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      ap: "≈",
      apacir: "⩯",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      Barwed: "⌆",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      Because: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxDL: "╗",
      boxDl: "╖",
      boxdL: "╕",
      boxdl: "┐",
      boxDR: "╔",
      boxDr: "╓",
      boxdR: "╒",
      boxdr: "┌",
      boxH: "═",
      boxh: "─",
      boxHD: "╦",
      boxHd: "╤",
      boxhD: "╥",
      boxhd: "┬",
      boxHU: "╩",
      boxHu: "╧",
      boxhU: "╨",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxUL: "╝",
      boxUl: "╜",
      boxuL: "╛",
      boxul: "┘",
      boxUR: "╚",
      boxUr: "╙",
      boxuR: "╘",
      boxur: "└",
      boxV: "║",
      boxv: "│",
      boxVH: "╬",
      boxVh: "╫",
      boxvH: "╪",
      boxvh: "┼",
      boxVL: "╣",
      boxVl: "╢",
      boxvL: "╡",
      boxvl: "┤",
      boxVR: "╠",
      boxVr: "╟",
      boxvR: "╞",
      boxvr: "├",
      bprime: "‵",
      Breve: "˘",
      breve: "˘",
      brvbar: "¦",
      Bscr: "ℬ",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      Cap: "⋒",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      CenterDot: "·",
      centerdot: "·",
      Cfr: "ℭ",
      cfr: "𝔠",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      cir: "○",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      Colon: "∷",
      colon: ":",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      Conint: "∯",
      conint: "∮",
      ContourIntegral: "∮",
      Copf: "ℂ",
      copf: "𝕔",
      coprod: "∐",
      Coproduct: "∐",
      COPY: "©",
      copy: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      Cross: "⨯",
      cross: "✗",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      Cup: "⋓",
      cup: "∪",
      cupbrcap: "⩈",
      CupCap: "≍",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      Dagger: "‡",
      dagger: "†",
      daleth: "ℸ",
      Darr: "↡",
      dArr: "⇓",
      darr: "↓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      DD: "ⅅ",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      Diamond: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      Downarrow: "⇓",
      downarrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      ecir: "≖",
      Ecirc: "Ê",
      ecirc: "ê",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      eDot: "≑",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp: " ",
      emsp13: " ",
      emsp14: " ",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: " ",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      Escr: "ℰ",
      escr: "ℯ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      ExponentialE: "ⅇ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      ForAll: "∀",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      Fscr: "ℱ",
      fscr: "𝒻",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      gE: "≧",
      ge: "≥",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      Gg: "⋙",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gl: "≷",
      gla: "⪥",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gnE: "≩",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      Gt: "≫",
      GT: ">",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      hArr: "⇔",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      Hfr: "ℌ",
      hfr: "𝔥",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      Hopf: "ℍ",
      hopf: "𝕙",
      horbar: "―",
      HorizontalLine: "─",
      Hscr: "ℋ",
      hscr: "𝒽",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      Ifr: "ℑ",
      ifr: "𝔦",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Im: "ℑ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      in: "∈",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      Int: "∬",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      Iscr: "ℐ",
      iscr: "𝒾",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      Lang: "⟪",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      Larr: "↞",
      lArr: "⇐",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      lAtail: "⤛",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lBarr: "⤎",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      lE: "≦",
      le: "≤",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      Leftarrow: "⇐",
      leftarrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      Ll: "⋘",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lnE: "≨",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftarrow: "⟵",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      Lscr: "ℒ",
      lscr: "𝓁",
      Lsh: "↰",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      Lt: "≪",
      LT: "<",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      Mscr: "ℳ",
      mscr: "𝓂",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      nearhk: "⤤",
      neArr: "⇗",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: `
`,
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlArr: "⇍",
      nlarr: "↚",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nLeftarrow: "⇍",
      nleftarrow: "↚",
      nLeftrightarrow: "⇎",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      nopf: "𝕟",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nRightarrow: "⇏",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvap: "≍⃒",
      nVDash: "⊯",
      nVdash: "⊮",
      nvDash: "⊭",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwArr: "⇖",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "⊚",
      Ocirc: "Ô",
      ocirc: "ô",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      Or: "⩔",
      or: "∨",
      orarr: "↻",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      Otimes: "⨷",
      otimes: "⊗",
      otimesas: "⨶",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      par: "∥",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      Popf: "ℙ",
      popf: "𝕡",
      pound: "£",
      Pr: "⪻",
      pr: "≺",
      prap: "⪷",
      prcue: "≼",
      prE: "⪳",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      Prime: "″",
      prime: "′",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportion: "∷",
      Proportional: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: " ",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      Qopf: "ℚ",
      qopf: "𝕢",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      QUOT: '"',
      quot: '"',
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      Rang: "⟫",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      Rarr: "↠",
      rArr: "⇒",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      rAtail: "⤜",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      RBarr: "⤐",
      rBarr: "⤏",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      Re: "ℜ",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      REG: "®",
      reg: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      Rfr: "ℜ",
      rfr: "𝔯",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      Rightarrow: "⇒",
      rightarrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      Ropf: "ℝ",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      Rscr: "ℛ",
      rscr: "𝓇",
      Rsh: "↱",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      Sc: "⪼",
      sc: "≻",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      sccue: "≽",
      scE: "⪴",
      sce: "⪰",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      searhk: "⤥",
      seArr: "⇘",
      searr: "↘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      Square: "□",
      square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      Sub: "⋐",
      sub: "⊂",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      Subset: "⋐",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      Sum: "∑",
      sum: "∑",
      sung: "♪",
      Sup: "⋑",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      Supset: "⋑",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swArr: "⇙",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "	",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      Therefore: "∴",
      therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "  ",
      thinsp: " ",
      ThinSpace: " ",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      Tilde: "∼",
      tilde: "˜",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      TRADE: "™",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      Uarr: "↟",
      uArr: "⇑",
      uarr: "↑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrow: "↑",
      Uparrow: "⇑",
      uparrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      updownarrow: "↕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      upsi: "υ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      vArr: "⇕",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      Vbar: "⫫",
      vBar: "⫨",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      VDash: "⊫",
      Vdash: "⊩",
      vDash: "⊨",
      vdash: "⊢",
      Vdashl: "⫦",
      Vee: "⋁",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      Verbar: "‖",
      verbar: "|",
      Vert: "‖",
      vert: "|",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      Wedge: "⋀",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      Xi: "Ξ",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      Yuml: "Ÿ",
      yuml: "ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      Zfr: "ℨ",
      zfr: "𝔷",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      Zopf: "ℤ",
      zopf: "𝕫",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌"
    }), e.entityMap = e.HTML_ENTITIES;
  }(Qr)), Qr;
}
var ht = {}, yo;
function zd() {
  if (yo) return ht;
  yo = 1;
  var e = tr().NAMESPACE, n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, t = new RegExp("[\\-\\.0-9" + n.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), r = new RegExp("^" + n.source + t.source + "*(?::" + n.source + t.source + "*)?$"), c = 0, i = 1, a = 2, o = 3, u = 4, l = 5, b = 6, m = 7;
  function g(A, I) {
    this.message = A, this.locator = I, Error.captureStackTrace && Error.captureStackTrace(this, g);
  }
  g.prototype = new Error(), g.prototype.name = g.name;
  function h() {
  }
  h.prototype = {
    parse: function(A, I, Z) {
      var T = this.domBuilder;
      T.startDocument(), w(I, I = {}), y(
        A,
        I,
        Z,
        T,
        this.errorHandler
      ), T.endDocument();
    }
  };
  function y(A, I, Z, T, R) {
    function x(ne) {
      if (ne > 65535) {
        ne -= 65536;
        var H = 55296 + (ne >> 10), M = 56320 + (ne & 1023);
        return String.fromCharCode(H, M);
      } else
        return String.fromCharCode(ne);
    }
    function z(ne) {
      var H = ne.slice(1, -1);
      return Object.hasOwnProperty.call(Z, H) ? Z[H] : H.charAt(0) === "#" ? x(parseInt(H.substr(1).replace("x", "0x"))) : (R.error("entity not found:" + ne), ne);
    }
    function W(ne) {
      if (ne > ae) {
        var H = A.substring(ae, ne).replace(/&#?\w+;/g, z);
        L && O(ae), T.characters(H, 0, ne - ae), ae = ne;
      }
    }
    function O(ne, H) {
      for (; ne >= q && (H = Q.exec(A)); )
        G = H.index, q = G + H[0].length, L.lineNumber++;
      L.columnNumber = ne - G + 1;
    }
    for (var G = 0, q = 0, Q = /.*(?:\r\n?|\n)|.*$/g, L = T.locator, k = [{ currentNSMap: I }], re = {}, ae = 0; ; ) {
      try {
        var J = A.indexOf("<", ae);
        if (J < 0) {
          if (!A.substr(ae).match(/^\s*$/)) {
            var ce = T.doc, fe = ce.createTextNode(A.substr(ae));
            ce.appendChild(fe), T.currentElement = fe;
          }
          return;
        }
        switch (J > ae && W(J), A.charAt(J + 1)) {
          case "/":
            var j = A.indexOf(">", J + 3), le = A.substring(J + 2, j).replace(/[ \t\n\r]+$/g, ""), he = k.pop();
            j < 0 ? (le = A.substring(J + 2).replace(/[\s<].*/, ""), R.error("end tag name: " + le + " is not complete:" + he.tagName), j = J + 1 + le.length) : le.match(/\s</) && (le = le.replace(/[\s<].*/, ""), R.error("end tag name: " + le + " maybe not complete"), j = J + 1 + le.length);
            var ge = he.localNSMap, be = he.tagName == le, Te = be || he.tagName && he.tagName.toLowerCase() == le.toLowerCase();
            if (Te) {
              if (T.endElement(he.uri, he.localName, le), ge)
                for (var Ae in ge)
                  Object.prototype.hasOwnProperty.call(ge, Ae) && T.endPrefixMapping(Ae);
              be || R.fatalError("end tag name: " + le + " is not match the current start tagName:" + he.tagName);
            } else
              k.push(he);
            j++;
            break;
          // end elment
          case "?":
            L && O(J), j = U(A, J, T);
            break;
          case "!":
            L && O(J), j = _(A, J, T, R);
            break;
          default:
            L && O(J);
            var v = new E(), $ = k[k.length - 1].currentNSMap, j = s(A, J, v, $, z, R), N = v.length;
            if (!v.closed && D(A, j, v.tagName, re) && (v.closed = !0, Z.nbsp || R.warning("unclosed xml attribute")), L && N) {
              for (var B = f(L, {}), V = 0; V < N; V++) {
                var ie = v[V];
                O(ie.offset), ie.locator = f(L, {});
              }
              T.locator = B, p(v, T, $) && k.push(v), T.locator = L;
            } else
              p(v, T, $) && k.push(v);
            e.isHTML(v.uri) && !v.closed ? j = d(A, j, v.tagName, z, T) : j++;
        }
      } catch (ne) {
        if (ne instanceof g)
          throw ne;
        R.error("element parse error: " + ne), j = -1;
      }
      j > ae ? ae = j : W(Math.max(J, ae) + 1);
    }
  }
  function f(A, I) {
    return I.lineNumber = A.lineNumber, I.columnNumber = A.columnNumber, I;
  }
  function s(A, I, Z, T, R, x) {
    function z(L, k, re) {
      Z.attributeNames.hasOwnProperty(L) && x.fatalError("Attribute " + L + " redefined"), Z.addValue(
        L,
        // @see https://www.w3.org/TR/xml/#AVNormalize
        // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
        // - recursive replacement of (DTD) entity references
        // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
        k.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, R),
        re
      );
    }
    for (var W, O, G = ++I, q = c; ; ) {
      var Q = A.charAt(G);
      switch (Q) {
        case "=":
          if (q === i)
            W = A.slice(I, G), q = o;
          else if (q === a)
            q = o;
          else
            throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (q === o || q === i)
            if (q === i && (x.warning('attribute value must after "="'), W = A.slice(I, G)), I = G + 1, G = A.indexOf(Q, I), G > 0)
              O = A.slice(I, G), z(W, O, I - 1), q = l;
            else
              throw new Error("attribute value no end '" + Q + "' match");
          else if (q == u)
            O = A.slice(I, G), z(W, O, I), x.warning('attribute "' + W + '" missed start quot(' + Q + ")!!"), I = G + 1, q = l;
          else
            throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (q) {
            case c:
              Z.setTagName(A.slice(I, G));
            case l:
            case b:
            case m:
              q = m, Z.closed = !0;
            case u:
            case i:
              break;
            case a:
              Z.closed = !0;
              break;
            //case S_EQ:
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return x.error("unexpected end of input"), q == c && Z.setTagName(A.slice(I, G)), G;
        case ">":
          switch (q) {
            case c:
              Z.setTagName(A.slice(I, G));
            case l:
            case b:
            case m:
              break;
            //normal
            case u:
            //Compatible state
            case i:
              O = A.slice(I, G), O.slice(-1) === "/" && (Z.closed = !0, O = O.slice(0, -1));
            case a:
              q === a && (O = W), q == u ? (x.warning('attribute "' + O + '" missed quot(")!'), z(W, O, I)) : ((!e.isHTML(T[""]) || !O.match(/^(?:disabled|checked|selected)$/i)) && x.warning('attribute "' + O + '" missed value!! "' + O + '" instead!!'), z(O, O, I));
              break;
            case o:
              throw new Error("attribute value missed!!");
          }
          return G;
        /*xml space '\x20' | #x9 | #xD | #xA; */
        case "":
          Q = " ";
        default:
          if (Q <= " ")
            switch (q) {
              case c:
                Z.setTagName(A.slice(I, G)), q = b;
                break;
              case i:
                W = A.slice(I, G), q = a;
                break;
              case u:
                var O = A.slice(I, G);
                x.warning('attribute "' + O + '" missed quot(")!!'), z(W, O, I);
              case l:
                q = b;
                break;
            }
          else
            switch (q) {
              //case S_TAG:void();break;
              //case S_ATTR:void();break;
              //case S_ATTR_NOQUOT_VALUE:void();break;
              case a:
                Z.tagName, (!e.isHTML(T[""]) || !W.match(/^(?:disabled|checked|selected)$/i)) && x.warning('attribute "' + W + '" missed value!! "' + W + '" instead2!!'), z(W, W, I), I = G, q = i;
                break;
              case l:
                x.warning('attribute space is required"' + W + '"!!');
              case b:
                q = i, I = G;
                break;
              case o:
                q = u, I = G;
                break;
              case m:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
      }
      G++;
    }
  }
  function p(A, I, Z) {
    for (var T = A.tagName, R = null, Q = A.length; Q--; ) {
      var x = A[Q], z = x.qName, W = x.value, L = z.indexOf(":");
      if (L > 0)
        var O = x.prefix = z.slice(0, L), G = z.slice(L + 1), q = O === "xmlns" && G;
      else
        G = z, O = null, q = z === "xmlns" && "";
      x.localName = G, q !== !1 && (R == null && (R = {}, w(Z, Z = {})), Z[q] = R[q] = W, x.uri = e.XMLNS, I.startPrefixMapping(q, W));
    }
    for (var Q = A.length; Q--; ) {
      x = A[Q];
      var O = x.prefix;
      O && (O === "xml" && (x.uri = e.XML), O !== "xmlns" && (x.uri = Z[O || ""]));
    }
    var L = T.indexOf(":");
    L > 0 ? (O = A.prefix = T.slice(0, L), G = A.localName = T.slice(L + 1)) : (O = null, G = A.localName = T);
    var k = A.uri = Z[O || ""];
    if (I.startElement(k, G, T, A), A.closed) {
      if (I.endElement(k, G, T), R)
        for (O in R)
          Object.prototype.hasOwnProperty.call(R, O) && I.endPrefixMapping(O);
    } else
      return A.currentNSMap = Z, A.localNSMap = R, !0;
  }
  function d(A, I, Z, T, R) {
    if (/^(?:script|textarea)$/i.test(Z)) {
      var x = A.indexOf("</" + Z + ">", I), z = A.substring(I + 1, x);
      if (/[&<]/.test(z))
        return /^script$/i.test(Z) ? (R.characters(z, 0, z.length), x) : (z = z.replace(/&#?\w+;/g, T), R.characters(z, 0, z.length), x);
    }
    return I + 1;
  }
  function D(A, I, Z, T) {
    var R = T[Z];
    return R == null && (R = A.lastIndexOf("</" + Z + ">"), R < I && (R = A.lastIndexOf("</" + Z)), T[Z] = R), R < I;
  }
  function w(A, I) {
    for (var Z in A)
      Object.prototype.hasOwnProperty.call(A, Z) && (I[Z] = A[Z]);
  }
  function _(A, I, Z, T) {
    var R = A.charAt(I + 2);
    switch (R) {
      case "-":
        if (A.charAt(I + 3) === "-") {
          var x = A.indexOf("-->", I + 4);
          return x > I ? (Z.comment(A, I + 4, x - I - 4), x + 3) : (T.error("Unclosed comment"), -1);
        } else
          return -1;
      default:
        if (A.substr(I + 3, 6) == "CDATA[") {
          var x = A.indexOf("]]>", I + 9);
          return Z.startCDATA(), Z.characters(A, I + 9, x - I - 9), Z.endCDATA(), x + 3;
        }
        var z = S(A, I), W = z.length;
        if (W > 1 && /!doctype/i.test(z[0][0])) {
          var O = z[1][0], G = !1, q = !1;
          W > 3 && (/^public$/i.test(z[2][0]) ? (G = z[3][0], q = W > 4 && z[4][0]) : /^system$/i.test(z[2][0]) && (q = z[3][0]));
          var Q = z[W - 1];
          return Z.startDTD(O, G, q), Z.endDTD(), Q.index + Q[0].length;
        }
    }
    return -1;
  }
  function U(A, I, Z) {
    var T = A.indexOf("?>", I);
    if (T) {
      var R = A.substring(I, T).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      return R ? (R[0].length, Z.processingInstruction(R[1], R[2]), T + 2) : -1;
    }
    return -1;
  }
  function E() {
    this.attributeNames = {};
  }
  E.prototype = {
    setTagName: function(A) {
      if (!r.test(A))
        throw new Error("invalid tagName:" + A);
      this.tagName = A;
    },
    addValue: function(A, I, Z) {
      if (!r.test(A))
        throw new Error("invalid attribute:" + A);
      this.attributeNames[A] = this.length, this[this.length++] = { qName: A, value: I, offset: Z };
    },
    length: 0,
    getLocalName: function(A) {
      return this[A].localName;
    },
    getLocator: function(A) {
      return this[A].locator;
    },
    getQName: function(A) {
      return this[A].qName;
    },
    getURI: function(A) {
      return this[A].uri;
    },
    getValue: function(A) {
      return this[A].value;
    }
    //	,getIndex:function(uri, localName)){
    //		if(localName){
    //
    //		}else{
    //			var qName = uri
    //		}
    //	},
    //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
    //	getType:function(uri,localName){}
    //	getType:function(i){},
  };
  function S(A, I) {
    var Z, T = [], R = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (R.lastIndex = I, R.exec(A); Z = R.exec(A); )
      if (T.push(Z), Z[1]) return T;
  }
  return ht.XMLReader = h, ht.ParseError = g, ht;
}
var Do;
function jd() {
  if (Do) return Hn;
  Do = 1;
  var e = tr(), n = da(), t = Pd(), r = zd(), c = n.DOMImplementation, i = e.NAMESPACE, a = r.ParseError, o = r.XMLReader;
  function u(s) {
    return s.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
  }
  function l(s) {
    this.options = s || { locator: {} };
  }
  l.prototype.parseFromString = function(s, p) {
    var d = this.options, D = new o(), w = d.domBuilder || new m(), _ = d.errorHandler, U = d.locator, E = d.xmlns || {}, S = /\/x?html?$/.test(p), A = S ? t.HTML_ENTITIES : t.XML_ENTITIES;
    U && w.setDocumentLocator(U), D.errorHandler = b(_, w, U), D.domBuilder = d.domBuilder || w, S && (E[""] = i.HTML), E.xml = E.xml || i.XML;
    var I = d.normalizeLineEndings || u;
    return s && typeof s == "string" ? D.parse(
      I(s),
      E,
      A
    ) : D.errorHandler.error("invalid doc source"), w.doc;
  };
  function b(s, p, d) {
    if (!s) {
      if (p instanceof m)
        return p;
      s = p;
    }
    var D = {}, w = s instanceof Function;
    d = d || {};
    function _(U) {
      var E = s[U];
      !E && w && (E = s.length == 2 ? function(S) {
        s(U, S);
      } : s), D[U] = E && function(S) {
        E("[xmldom " + U + "]	" + S + h(d));
      } || function() {
      };
    }
    return _("warning"), _("error"), _("fatalError"), D;
  }
  function m() {
    this.cdata = !1;
  }
  function g(s, p) {
    p.lineNumber = s.lineNumber, p.columnNumber = s.columnNumber;
  }
  m.prototype = {
    startDocument: function() {
      this.doc = new c().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(s, p, d, D) {
      var w = this.doc, _ = w.createElementNS(s, d || p), U = D.length;
      f(this, _), this.currentElement = _, this.locator && g(this.locator, _);
      for (var E = 0; E < U; E++) {
        var s = D.getURI(E), S = D.getValue(E), d = D.getQName(E), A = w.createAttributeNS(s, d);
        this.locator && g(D.getLocator(E), A), A.value = A.nodeValue = S, _.setAttributeNode(A);
      }
    },
    endElement: function(s, p, d) {
      var D = this.currentElement;
      D.tagName, this.currentElement = D.parentNode;
    },
    startPrefixMapping: function(s, p) {
    },
    endPrefixMapping: function(s) {
    },
    processingInstruction: function(s, p) {
      var d = this.doc.createProcessingInstruction(s, p);
      this.locator && g(this.locator, d), f(this, d);
    },
    ignorableWhitespace: function(s, p, d) {
    },
    characters: function(s, p, d) {
      if (s = y.apply(this, arguments), s) {
        if (this.cdata)
          var D = this.doc.createCDATASection(s);
        else
          var D = this.doc.createTextNode(s);
        this.currentElement ? this.currentElement.appendChild(D) : /^\s*$/.test(s) && this.doc.appendChild(D), this.locator && g(this.locator, D);
      }
    },
    skippedEntity: function(s) {
    },
    endDocument: function() {
      this.doc.normalize();
    },
    setDocumentLocator: function(s) {
      (this.locator = s) && (s.lineNumber = 0);
    },
    //LexicalHandler
    comment: function(s, p, d) {
      s = y.apply(this, arguments);
      var D = this.doc.createComment(s);
      this.locator && g(this.locator, D), f(this, D);
    },
    startCDATA: function() {
      this.cdata = !0;
    },
    endCDATA: function() {
      this.cdata = !1;
    },
    startDTD: function(s, p, d) {
      var D = this.doc.implementation;
      if (D && D.createDocumentType) {
        var w = D.createDocumentType(s, p, d);
        this.locator && g(this.locator, w), f(this, w), this.doc.doctype = w;
      }
    },
    /**
     * @see org.xml.sax.ErrorHandler
     * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
     */
    warning: function(s) {
      console.warn("[xmldom warning]	" + s, h(this.locator));
    },
    error: function(s) {
      console.error("[xmldom error]	" + s, h(this.locator));
    },
    fatalError: function(s) {
      throw new a(s, this.locator);
    }
  };
  function h(s) {
    if (s)
      return `
@` + (s.systemId || "") + "#[line:" + s.lineNumber + ",col:" + s.columnNumber + "]";
  }
  function y(s, p, d) {
    return typeof s == "string" ? s.substr(p, d) : s.length >= p + d || p ? new java.lang.String(s, p, d) + "" : s;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(s) {
    m.prototype[s] = function() {
      return null;
    };
  });
  function f(s, p) {
    s.currentElement ? s.currentElement.appendChild(p) : s.doc.appendChild(p);
  }
  return Hn.__DOMHandler = m, Hn.normalizeLineEndings = u, Hn.DOMParser = l, Hn;
}
var vo;
function Xd() {
  if (vo) return Vn;
  vo = 1;
  var e = da();
  return Vn.DOMImplementation = e.DOMImplementation, Vn.XMLSerializer = e.XMLSerializer, Vn.DOMParser = jd().DOMParser, Vn;
}
var xo;
function Vd() {
  if (xo) return ft;
  xo = 1;
  var e = Xd(), n = da();
  function t(r) {
    var c = null, i = new e.DOMParser({
      errorHandler: function(o, u) {
        c = { level: o, message: u };
      }
    }), a = i.parseFromString(r);
    if (c === null)
      return a;
    throw new Error(c.level + ": " + c.message);
  }
  return ft.parseFromString = t, ft.Node = n.Node, ft;
}
var _o;
function Hd() {
  if (_o) return Kr;
  _o = 1;
  var e = mn(), n = Be, t = Vd(), r = hs(), c = r.Element;
  Kr.readString = a;
  var i = t.Node;
  function a(o, u) {
    u = u || {};
    try {
      var l = t.parseFromString(o, "text/xml");
    } catch (h) {
      return e.reject(h);
    }
    if (l.documentElement.tagName === "parsererror")
      return e.resolve(new Error(l.documentElement.textContent));
    function b(h) {
      switch (h.nodeType) {
        case i.ELEMENT_NODE:
          return m(h);
        case i.TEXT_NODE:
          return r.text(h.nodeValue);
      }
    }
    function m(h) {
      var y = g(h), f = [];
      n.forEach(h.childNodes, function(p) {
        var d = b(p);
        d && f.push(d);
      });
      var s = {};
      return n.forEach(h.attributes, function(p) {
        s[g(p)] = p.value;
      }), new c(y, s, f);
    }
    function g(h) {
      if (h.namespaceURI) {
        var y = u[h.namespaceURI], f;
        return y ? f = y + ":" : f = "{" + h.namespaceURI + "}", f + h.localName;
      } else
        return h.localName;
    }
    return e.resolve(b(l.documentElement));
  }
  return Kr;
}
var Jr = {}, Un = {}, Ke = {}, Uo;
function bn() {
  return Uo || (Uo = 1, (function() {
    var e, n, t, r, c, i, a, o = [].slice, u = {}.hasOwnProperty;
    e = function() {
      var l, b, m, g, h, y;
      if (y = arguments[0], h = 2 <= arguments.length ? o.call(arguments, 1) : [], c(Object.assign))
        Object.assign.apply(null, arguments);
      else
        for (l = 0, m = h.length; l < m; l++)
          if (g = h[l], g != null)
            for (b in g)
              u.call(g, b) && (y[b] = g[b]);
      return y;
    }, c = function(l) {
      return !!l && Object.prototype.toString.call(l) === "[object Function]";
    }, i = function(l) {
      var b;
      return !!l && ((b = typeof l) == "function" || b === "object");
    }, t = function(l) {
      return c(Array.isArray) ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
    }, r = function(l) {
      var b;
      if (t(l))
        return !l.length;
      for (b in l)
        if (u.call(l, b))
          return !1;
      return !0;
    }, a = function(l) {
      var b, m;
      return i(l) && (m = Object.getPrototypeOf(l)) && (b = m.constructor) && typeof b == "function" && b instanceof b && Function.prototype.toString.call(b) === Function.prototype.toString.call(Object);
    }, n = function(l) {
      return c(l.valueOf) ? l.valueOf() : l;
    }, Ke.assign = e, Ke.isFunction = c, Ke.isObject = i, Ke.isArray = t, Ke.isEmpty = r, Ke.isPlainObject = a, Ke.getValue = n;
  }).call(Ke)), Ke;
}
var vt = { exports: {} }, xt = { exports: {} }, _t = { exports: {} }, Ut = { exports: {} }, Gd = Ut.exports, To;
function ps() {
  return To || (To = 1, (function() {
    Ut.exports = function() {
      function e(n, t, r) {
        if (this.options = n.options, this.stringify = n.stringify, this.parent = n, t == null)
          throw new Error("Missing attribute name. " + this.debugInfo(t));
        if (r == null)
          throw new Error("Missing attribute value. " + this.debugInfo(t));
        this.name = this.stringify.attName(t), this.value = this.stringify.attValue(r);
      }
      return e.prototype.clone = function() {
        return Object.create(this);
      }, e.prototype.toString = function(n) {
        return this.options.writer.set(n).attribute(this);
      }, e.prototype.debugInfo = function(n) {
        return n = n || this.name, n == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + n + "}, parent: <" + this.parent.name + ">";
      }, e;
    }();
  }).call(Gd)), Ut.exports;
}
var Zd = _t.exports, wo;
function rr() {
  return wo || (wo = 1, (function() {
    var e, n, t, r, c, i, a = function(u, l) {
      for (var b in l)
        o.call(l, b) && (u[b] = l[b]);
      function m() {
        this.constructor = u;
      }
      return m.prototype = l.prototype, u.prototype = new m(), u.__super__ = l.prototype, u;
    }, o = {}.hasOwnProperty;
    i = bn(), c = i.isObject, r = i.isFunction, t = i.getValue, n = ze(), e = ps(), _t.exports = function(u) {
      a(l, u);
      function l(b, m, g) {
        if (l.__super__.constructor.call(this, b), m == null)
          throw new Error("Missing element name. " + this.debugInfo());
        this.name = this.stringify.eleName(m), this.attributes = {}, g != null && this.attribute(g), b.isDocument && (this.isRoot = !0, this.documentObject = b, b.rootObject = this);
      }
      return l.prototype.clone = function() {
        var b, m, g, h;
        g = Object.create(this), g.isRoot && (g.documentObject = null), g.attributes = {}, h = this.attributes;
        for (m in h)
          o.call(h, m) && (b = h[m], g.attributes[m] = b.clone());
        return g.children = [], this.children.forEach(function(y) {
          var f;
          return f = y.clone(), f.parent = g, g.children.push(f);
        }), g;
      }, l.prototype.attribute = function(b, m) {
        var g, h;
        if (b != null && (b = t(b)), c(b))
          for (g in b)
            o.call(b, g) && (h = b[g], this.attribute(g, h));
        else
          r(m) && (m = m.apply()), (!this.options.skipNullAttributes || m != null) && (this.attributes[b] = new e(this, b, m));
        return this;
      }, l.prototype.removeAttribute = function(b) {
        var m, g, h;
        if (b == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (b = t(b), Array.isArray(b))
          for (g = 0, h = b.length; g < h; g++)
            m = b[g], delete this.attributes[m];
        else
          delete this.attributes[b];
        return this;
      }, l.prototype.toString = function(b) {
        return this.options.writer.set(b).element(this);
      }, l.prototype.att = function(b, m) {
        return this.attribute(b, m);
      }, l.prototype.a = function(b, m) {
        return this.attribute(b, m);
      }, l;
    }(n);
  }).call(Zd)), _t.exports;
}
var Tt = { exports: {} }, $d = Tt.exports, Eo;
function ir() {
  return Eo || (Eo = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), Tt.exports = function(r) {
      n(c, r);
      function c(i, a) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing CDATA text. " + this.debugInfo());
        this.text = this.stringify.cdata(a);
      }
      return c.prototype.clone = function() {
        return Object.create(this);
      }, c.prototype.toString = function(i) {
        return this.options.writer.set(i).cdata(this);
      }, c;
    }(e);
  }).call($d)), Tt.exports;
}
var wt = { exports: {} }, Yd = wt.exports, Ao;
function ar() {
  return Ao || (Ao = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), wt.exports = function(r) {
      n(c, r);
      function c(i, a) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing comment text. " + this.debugInfo());
        this.text = this.stringify.comment(a);
      }
      return c.prototype.clone = function() {
        return Object.create(this);
      }, c.prototype.toString = function(i) {
        return this.options.writer.set(i).comment(this);
      }, c;
    }(e);
  }).call(Yd)), wt.exports;
}
var Et = { exports: {} }, Kd = Et.exports, Fo;
function or() {
  return Fo || (Fo = 1, (function() {
    var e, n, t = function(c, i) {
      for (var a in i)
        r.call(i, a) && (c[a] = i[a]);
      function o() {
        this.constructor = c;
      }
      return o.prototype = i.prototype, c.prototype = new o(), c.__super__ = i.prototype, c;
    }, r = {}.hasOwnProperty;
    n = bn().isObject, e = ze(), Et.exports = function(c) {
      t(i, c);
      function i(a, o, u, l) {
        var b;
        i.__super__.constructor.call(this, a), n(o) && (b = o, o = b.version, u = b.encoding, l = b.standalone), o || (o = "1.0"), this.version = this.stringify.xmlVersion(o), u != null && (this.encoding = this.stringify.xmlEncoding(u)), l != null && (this.standalone = this.stringify.xmlStandalone(l));
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.set(a).declaration(this);
      }, i;
    }(e);
  }).call(Kd)), Et.exports;
}
var At = { exports: {} }, Ft = { exports: {} }, Qd = Ft.exports, Co;
function cr() {
  return Co || (Co = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), Ft.exports = function(r) {
      n(c, r);
      function c(i, a, o, u, l, b) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        if (o == null)
          throw new Error("Missing DTD attribute name. " + this.debugInfo(a));
        if (!u)
          throw new Error("Missing DTD attribute type. " + this.debugInfo(a));
        if (!l)
          throw new Error("Missing DTD attribute default. " + this.debugInfo(a));
        if (l.indexOf("#") !== 0 && (l = "#" + l), !l.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(a));
        if (b && !l.match(/^(#FIXED|#DEFAULT)$/))
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(a));
        this.elementName = this.stringify.eleName(a), this.attributeName = this.stringify.attName(o), this.attributeType = this.stringify.dtdAttType(u), this.defaultValue = this.stringify.dtdAttDefault(b), this.defaultValueType = l;
      }
      return c.prototype.toString = function(i) {
        return this.options.writer.set(i).dtdAttList(this);
      }, c;
    }(e);
  }).call(Qd)), Ft.exports;
}
var Ct = { exports: {} }, Jd = Ct.exports, So;
function ur() {
  return So || (So = 1, (function() {
    var e, n, t = function(c, i) {
      for (var a in i)
        r.call(i, a) && (c[a] = i[a]);
      function o() {
        this.constructor = c;
      }
      return o.prototype = i.prototype, c.prototype = new o(), c.__super__ = i.prototype, c;
    }, r = {}.hasOwnProperty;
    n = bn().isObject, e = ze(), Ct.exports = function(c) {
      t(i, c);
      function i(a, o, u, l) {
        if (i.__super__.constructor.call(this, a), u == null)
          throw new Error("Missing DTD entity name. " + this.debugInfo(u));
        if (l == null)
          throw new Error("Missing DTD entity value. " + this.debugInfo(u));
        if (this.pe = !!o, this.name = this.stringify.eleName(u), !n(l))
          this.value = this.stringify.dtdEntityValue(l);
        else {
          if (!l.pubID && !l.sysID)
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(u));
          if (l.pubID && !l.sysID)
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(u));
          if (l.pubID != null && (this.pubID = this.stringify.dtdPubID(l.pubID)), l.sysID != null && (this.sysID = this.stringify.dtdSysID(l.sysID)), l.nData != null && (this.nData = this.stringify.dtdNData(l.nData)), this.pe && this.nData)
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(u));
        }
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.set(a).dtdEntity(this);
      }, i;
    }(e);
  }).call(Jd)), Ct.exports;
}
var St = { exports: {} }, el = St.exports, Bo;
function sr() {
  return Bo || (Bo = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), St.exports = function(r) {
      n(c, r);
      function c(i, a, o) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        o || (o = "(#PCDATA)"), Array.isArray(o) && (o = "(" + o.join(",") + ")"), this.name = this.stringify.eleName(a), this.value = this.stringify.dtdElementValue(o);
      }
      return c.prototype.toString = function(i) {
        return this.options.writer.set(i).dtdElement(this);
      }, c;
    }(e);
  }).call(el)), St.exports;
}
var Bt = { exports: {} }, nl = Bt.exports, ko;
function dr() {
  return ko || (ko = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), Bt.exports = function(r) {
      n(c, r);
      function c(i, a, o) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing DTD notation name. " + this.debugInfo(a));
        if (!o.pubID && !o.sysID)
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(a));
        this.name = this.stringify.eleName(a), o.pubID != null && (this.pubID = this.stringify.dtdPubID(o.pubID)), o.sysID != null && (this.sysID = this.stringify.dtdSysID(o.sysID));
      }
      return c.prototype.toString = function(i) {
        return this.options.writer.set(i).dtdNotation(this);
      }, c;
    }(e);
  }).call(nl)), Bt.exports;
}
var tl = At.exports, Wo;
function lr() {
  return Wo || (Wo = 1, (function() {
    var e, n, t, r, c, i, a = function(u, l) {
      for (var b in l)
        o.call(l, b) && (u[b] = l[b]);
      function m() {
        this.constructor = u;
      }
      return m.prototype = l.prototype, u.prototype = new m(), u.__super__ = l.prototype, u;
    }, o = {}.hasOwnProperty;
    i = bn().isObject, c = ze(), e = cr(), t = ur(), n = sr(), r = dr(), At.exports = function(u) {
      a(l, u);
      function l(b, m, g) {
        var h, y;
        l.__super__.constructor.call(this, b), this.name = "!DOCTYPE", this.documentObject = b, i(m) && (h = m, m = h.pubID, g = h.sysID), g == null && (y = [m, g], g = y[0], m = y[1]), m != null && (this.pubID = this.stringify.dtdPubID(m)), g != null && (this.sysID = this.stringify.dtdSysID(g));
      }
      return l.prototype.element = function(b, m) {
        var g;
        return g = new n(this, b, m), this.children.push(g), this;
      }, l.prototype.attList = function(b, m, g, h, y) {
        var f;
        return f = new e(this, b, m, g, h, y), this.children.push(f), this;
      }, l.prototype.entity = function(b, m) {
        var g;
        return g = new t(this, !1, b, m), this.children.push(g), this;
      }, l.prototype.pEntity = function(b, m) {
        var g;
        return g = new t(this, !0, b, m), this.children.push(g), this;
      }, l.prototype.notation = function(b, m) {
        var g;
        return g = new r(this, b, m), this.children.push(g), this;
      }, l.prototype.toString = function(b) {
        return this.options.writer.set(b).docType(this);
      }, l.prototype.ele = function(b, m) {
        return this.element(b, m);
      }, l.prototype.att = function(b, m, g, h, y) {
        return this.attList(b, m, g, h, y);
      }, l.prototype.ent = function(b, m) {
        return this.entity(b, m);
      }, l.prototype.pent = function(b, m) {
        return this.pEntity(b, m);
      }, l.prototype.not = function(b, m) {
        return this.notation(b, m);
      }, l.prototype.up = function() {
        return this.root() || this.documentObject;
      }, l;
    }(c);
  }).call(tl)), At.exports;
}
var kt = { exports: {} }, rl = kt.exports, Ro;
function fr() {
  return Ro || (Ro = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), kt.exports = function(r) {
      n(c, r);
      function c(i, a) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing raw text. " + this.debugInfo());
        this.value = this.stringify.raw(a);
      }
      return c.prototype.clone = function() {
        return Object.create(this);
      }, c.prototype.toString = function(i) {
        return this.options.writer.set(i).raw(this);
      }, c;
    }(e);
  }).call(rl)), kt.exports;
}
var Wt = { exports: {} }, il = Wt.exports, No;
function hr() {
  return No || (No = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), Wt.exports = function(r) {
      n(c, r);
      function c(i, a) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing element text. " + this.debugInfo());
        this.value = this.stringify.eleText(a);
      }
      return c.prototype.clone = function() {
        return Object.create(this);
      }, c.prototype.toString = function(i) {
        return this.options.writer.set(i).text(this);
      }, c;
    }(e);
  }).call(il)), Wt.exports;
}
var Rt = { exports: {} }, al = Rt.exports, Oo;
function pr() {
  return Oo || (Oo = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), Rt.exports = function(r) {
      n(c, r);
      function c(i, a, o) {
        if (c.__super__.constructor.call(this, i), a == null)
          throw new Error("Missing instruction target. " + this.debugInfo());
        this.target = this.stringify.insTarget(a), o && (this.value = this.stringify.insValue(o));
      }
      return c.prototype.clone = function() {
        return Object.create(this);
      }, c.prototype.toString = function(i) {
        return this.options.writer.set(i).processingInstruction(this);
      }, c;
    }(e);
  }).call(al)), Rt.exports;
}
var Nt = { exports: {} }, ol = Nt.exports, Io;
function la() {
  return Io || (Io = 1, (function() {
    var e, n = function(r, c) {
      for (var i in c)
        t.call(c, i) && (r[i] = c[i]);
      function a() {
        this.constructor = r;
      }
      return a.prototype = c.prototype, r.prototype = new a(), r.__super__ = c.prototype, r;
    }, t = {}.hasOwnProperty;
    e = ze(), Nt.exports = function(r) {
      n(c, r);
      function c(i) {
        c.__super__.constructor.call(this, i), this.isDummy = !0;
      }
      return c.prototype.clone = function() {
        return Object.create(this);
      }, c.prototype.toString = function(i) {
        return "";
      }, c;
    }(e);
  }).call(ol)), Nt.exports;
}
var cl = xt.exports, Lo;
function ze() {
  return Lo || (Lo = 1, (function() {
    var e, n, t, r, c, i, a, o, u, l, b, m, g, h, y = {}.hasOwnProperty;
    h = bn(), g = h.isObject, m = h.isFunction, b = h.isEmpty, l = h.getValue, i = null, e = null, n = null, t = null, r = null, o = null, u = null, a = null, c = null, xt.exports = function() {
      function f(s) {
        this.parent = s, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.children = [], i || (i = rr(), e = ir(), n = ar(), t = or(), r = lr(), o = fr(), u = hr(), a = pr(), c = la());
      }
      return f.prototype.element = function(s, p, d) {
        var D, w, _, U, E, S, A, I, Z, T, R;
        if (S = null, p === null && d == null && (Z = [{}, null], p = Z[0], d = Z[1]), p == null && (p = {}), p = l(p), g(p) || (T = [p, d], d = T[0], p = T[1]), s != null && (s = l(s)), Array.isArray(s))
          for (_ = 0, A = s.length; _ < A; _++)
            w = s[_], S = this.element(w);
        else if (m(s))
          S = this.element(s.apply());
        else if (g(s)) {
          for (E in s)
            if (y.call(s, E))
              if (R = s[E], m(R) && (R = R.apply()), g(R) && b(R) && (R = null), !this.options.ignoreDecorators && this.stringify.convertAttKey && E.indexOf(this.stringify.convertAttKey) === 0)
                S = this.attribute(E.substr(this.stringify.convertAttKey.length), R);
              else if (!this.options.separateArrayItems && Array.isArray(R))
                for (U = 0, I = R.length; U < I; U++)
                  w = R[U], D = {}, D[E] = w, S = this.element(D);
              else g(R) ? (S = this.element(E), S.element(R)) : S = this.element(E, R);
        } else this.options.skipNullNodes && d === null ? S = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && s.indexOf(this.stringify.convertTextKey) === 0 ? S = this.text(d) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && s.indexOf(this.stringify.convertCDataKey) === 0 ? S = this.cdata(d) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && s.indexOf(this.stringify.convertCommentKey) === 0 ? S = this.comment(d) : !this.options.ignoreDecorators && this.stringify.convertRawKey && s.indexOf(this.stringify.convertRawKey) === 0 ? S = this.raw(d) : !this.options.ignoreDecorators && this.stringify.convertPIKey && s.indexOf(this.stringify.convertPIKey) === 0 ? S = this.instruction(s.substr(this.stringify.convertPIKey.length), d) : S = this.node(s, p, d);
        if (S == null)
          throw new Error("Could not create any elements with: " + s + ". " + this.debugInfo());
        return S;
      }, f.prototype.insertBefore = function(s, p, d) {
        var D, w, _;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(s));
        return w = this.parent.children.indexOf(this), _ = this.parent.children.splice(w), D = this.parent.element(s, p, d), Array.prototype.push.apply(this.parent.children, _), D;
      }, f.prototype.insertAfter = function(s, p, d) {
        var D, w, _;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(s));
        return w = this.parent.children.indexOf(this), _ = this.parent.children.splice(w + 1), D = this.parent.element(s, p, d), Array.prototype.push.apply(this.parent.children, _), D;
      }, f.prototype.remove = function() {
        var s;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return s = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [s, s - s + 1].concat([])), this.parent;
      }, f.prototype.node = function(s, p, d) {
        var D, w;
        return s != null && (s = l(s)), p || (p = {}), p = l(p), g(p) || (w = [p, d], d = w[0], p = w[1]), D = new i(this, s, p), d != null && D.text(d), this.children.push(D), D;
      }, f.prototype.text = function(s) {
        var p;
        return p = new u(this, s), this.children.push(p), this;
      }, f.prototype.cdata = function(s) {
        var p;
        return p = new e(this, s), this.children.push(p), this;
      }, f.prototype.comment = function(s) {
        var p;
        return p = new n(this, s), this.children.push(p), this;
      }, f.prototype.commentBefore = function(s) {
        var p, d;
        return p = this.parent.children.indexOf(this), d = this.parent.children.splice(p), this.parent.comment(s), Array.prototype.push.apply(this.parent.children, d), this;
      }, f.prototype.commentAfter = function(s) {
        var p, d;
        return p = this.parent.children.indexOf(this), d = this.parent.children.splice(p + 1), this.parent.comment(s), Array.prototype.push.apply(this.parent.children, d), this;
      }, f.prototype.raw = function(s) {
        var p;
        return p = new o(this, s), this.children.push(p), this;
      }, f.prototype.dummy = function() {
        var s;
        return s = new c(this), this.children.push(s), s;
      }, f.prototype.instruction = function(s, p) {
        var d, D, w, _, U;
        if (s != null && (s = l(s)), p != null && (p = l(p)), Array.isArray(s))
          for (_ = 0, U = s.length; _ < U; _++)
            d = s[_], this.instruction(d);
        else if (g(s))
          for (d in s)
            y.call(s, d) && (D = s[d], this.instruction(d, D));
        else
          m(p) && (p = p.apply()), w = new a(this, s, p), this.children.push(w);
        return this;
      }, f.prototype.instructionBefore = function(s, p) {
        var d, D;
        return d = this.parent.children.indexOf(this), D = this.parent.children.splice(d), this.parent.instruction(s, p), Array.prototype.push.apply(this.parent.children, D), this;
      }, f.prototype.instructionAfter = function(s, p) {
        var d, D;
        return d = this.parent.children.indexOf(this), D = this.parent.children.splice(d + 1), this.parent.instruction(s, p), Array.prototype.push.apply(this.parent.children, D), this;
      }, f.prototype.declaration = function(s, p, d) {
        var D, w;
        return D = this.document(), w = new t(D, s, p, d), D.children[0] instanceof t ? D.children[0] = w : D.children.unshift(w), D.root() || D;
      }, f.prototype.doctype = function(s, p) {
        var d, D, w, _, U, E, S, A, I, Z;
        for (D = this.document(), w = new r(D, s, p), I = D.children, _ = U = 0, S = I.length; U < S; _ = ++U)
          if (d = I[_], d instanceof r)
            return D.children[_] = w, w;
        for (Z = D.children, _ = E = 0, A = Z.length; E < A; _ = ++E)
          if (d = Z[_], d.isRoot)
            return D.children.splice(_, 0, w), w;
        return D.children.push(w), w;
      }, f.prototype.up = function() {
        if (this.isRoot)
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        return this.parent;
      }, f.prototype.root = function() {
        var s;
        for (s = this; s; ) {
          if (s.isDocument)
            return s.rootObject;
          if (s.isRoot)
            return s;
          s = s.parent;
        }
      }, f.prototype.document = function() {
        var s;
        for (s = this; s; ) {
          if (s.isDocument)
            return s;
          s = s.parent;
        }
      }, f.prototype.end = function(s) {
        return this.document().end(s);
      }, f.prototype.prev = function() {
        var s;
        for (s = this.parent.children.indexOf(this); s > 0 && this.parent.children[s - 1].isDummy; )
          s = s - 1;
        if (s < 1)
          throw new Error("Already at the first node. " + this.debugInfo());
        return this.parent.children[s - 1];
      }, f.prototype.next = function() {
        var s;
        for (s = this.parent.children.indexOf(this); s < this.parent.children.length - 1 && this.parent.children[s + 1].isDummy; )
          s = s + 1;
        if (s === -1 || s === this.parent.children.length - 1)
          throw new Error("Already at the last node. " + this.debugInfo());
        return this.parent.children[s + 1];
      }, f.prototype.importDocument = function(s) {
        var p;
        return p = s.root().clone(), p.parent = this, p.isRoot = !1, this.children.push(p), this;
      }, f.prototype.debugInfo = function(s) {
        var p, d;
        return s = s || this.name, s == null && !((p = this.parent) != null && p.name) ? "" : s == null ? "parent: <" + this.parent.name + ">" : (d = this.parent) != null && d.name ? "node: <" + s + ">, parent: <" + this.parent.name + ">" : "node: <" + s + ">";
      }, f.prototype.ele = function(s, p, d) {
        return this.element(s, p, d);
      }, f.prototype.nod = function(s, p, d) {
        return this.node(s, p, d);
      }, f.prototype.txt = function(s) {
        return this.text(s);
      }, f.prototype.dat = function(s) {
        return this.cdata(s);
      }, f.prototype.com = function(s) {
        return this.comment(s);
      }, f.prototype.ins = function(s, p) {
        return this.instruction(s, p);
      }, f.prototype.doc = function() {
        return this.document();
      }, f.prototype.dec = function(s, p, d) {
        return this.declaration(s, p, d);
      }, f.prototype.dtd = function(s, p) {
        return this.doctype(s, p);
      }, f.prototype.e = function(s, p, d) {
        return this.element(s, p, d);
      }, f.prototype.n = function(s, p, d) {
        return this.node(s, p, d);
      }, f.prototype.t = function(s) {
        return this.text(s);
      }, f.prototype.d = function(s) {
        return this.cdata(s);
      }, f.prototype.c = function(s) {
        return this.comment(s);
      }, f.prototype.r = function(s) {
        return this.raw(s);
      }, f.prototype.i = function(s, p) {
        return this.instruction(s, p);
      }, f.prototype.u = function() {
        return this.up();
      }, f.prototype.importXMLBuilder = function(s) {
        return this.importDocument(s);
      }, f;
    }();
  }).call(cl)), xt.exports;
}
var Ot = { exports: {} }, ul = Ot.exports, Mo;
function gs() {
  return Mo || (Mo = 1, (function() {
    var e = function(t, r) {
      return function() {
        return t.apply(r, arguments);
      };
    }, n = {}.hasOwnProperty;
    Ot.exports = function() {
      function t(r) {
        this.assertLegalChar = e(this.assertLegalChar, this);
        var c, i, a;
        r || (r = {}), this.noDoubleEncoding = r.noDoubleEncoding, i = r.stringify || {};
        for (c in i)
          n.call(i, c) && (a = i[c], this[c] = a);
      }
      return t.prototype.eleName = function(r) {
        return r = "" + r || "", this.assertLegalChar(r);
      }, t.prototype.eleText = function(r) {
        return r = "" + r || "", this.assertLegalChar(this.elEscape(r));
      }, t.prototype.cdata = function(r) {
        return r = "" + r || "", r = r.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(r);
      }, t.prototype.comment = function(r) {
        if (r = "" + r || "", r.match(/--/))
          throw new Error("Comment text cannot contain double-hypen: " + r);
        return this.assertLegalChar(r);
      }, t.prototype.raw = function(r) {
        return "" + r || "";
      }, t.prototype.attName = function(r) {
        return r = "" + r || "";
      }, t.prototype.attValue = function(r) {
        return r = "" + r || "", this.attEscape(r);
      }, t.prototype.insTarget = function(r) {
        return "" + r || "";
      }, t.prototype.insValue = function(r) {
        if (r = "" + r || "", r.match(/\?>/))
          throw new Error("Invalid processing instruction value: " + r);
        return r;
      }, t.prototype.xmlVersion = function(r) {
        if (r = "" + r || "", !r.match(/1\.[0-9]+/))
          throw new Error("Invalid version number: " + r);
        return r;
      }, t.prototype.xmlEncoding = function(r) {
        if (r = "" + r || "", !r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))
          throw new Error("Invalid encoding: " + r);
        return r;
      }, t.prototype.xmlStandalone = function(r) {
        return r ? "yes" : "no";
      }, t.prototype.dtdPubID = function(r) {
        return "" + r || "";
      }, t.prototype.dtdSysID = function(r) {
        return "" + r || "";
      }, t.prototype.dtdElementValue = function(r) {
        return "" + r || "";
      }, t.prototype.dtdAttType = function(r) {
        return "" + r || "";
      }, t.prototype.dtdAttDefault = function(r) {
        return r != null ? "" + r || "" : r;
      }, t.prototype.dtdEntityValue = function(r) {
        return "" + r || "";
      }, t.prototype.dtdNData = function(r) {
        return "" + r || "";
      }, t.prototype.convertAttKey = "@", t.prototype.convertPIKey = "?", t.prototype.convertTextKey = "#text", t.prototype.convertCDataKey = "#cdata", t.prototype.convertCommentKey = "#comment", t.prototype.convertRawKey = "#raw", t.prototype.assertLegalChar = function(r) {
        var c;
        if (c = r.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), c)
          throw new Error("Invalid character in string: " + r + " at index " + c.index);
        return r;
      }, t.prototype.elEscape = function(r) {
        var c;
        return c = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(c, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      }, t.prototype.attEscape = function(r) {
        var c;
        return c = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(c, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      }, t;
    }();
  }).call(ul)), Ot.exports;
}
var It = { exports: {} }, Lt = { exports: {} }, sl = Lt.exports, qo;
function ms() {
  return qo || (qo = 1, (function() {
    var e = {}.hasOwnProperty;
    Lt.exports = function() {
      function n(t) {
        var r, c, i, a, o, u, l, b, m;
        t || (t = {}), this.pretty = t.pretty || !1, this.allowEmpty = (c = t.allowEmpty) != null ? c : !1, this.pretty ? (this.indent = (i = t.indent) != null ? i : "  ", this.newline = (a = t.newline) != null ? a : `
`, this.offset = (o = t.offset) != null ? o : 0, this.dontprettytextnodes = (u = t.dontprettytextnodes) != null ? u : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = (l = t.spacebeforeslash) != null ? l : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, b = t.writer || {};
        for (r in b)
          e.call(b, r) && (m = b[r], this[r] = m);
      }
      return n.prototype.set = function(t) {
        var r, c, i;
        t || (t = {}), "pretty" in t && (this.pretty = t.pretty), "allowEmpty" in t && (this.allowEmpty = t.allowEmpty), this.pretty ? (this.indent = "indent" in t ? t.indent : "  ", this.newline = "newline" in t ? t.newline : `
`, this.offset = "offset" in t ? t.offset : 0, this.dontprettytextnodes = "dontprettytextnodes" in t ? t.dontprettytextnodes : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = "spacebeforeslash" in t ? t.spacebeforeslash : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, c = t.writer || {};
        for (r in c)
          e.call(c, r) && (i = c[r], this[r] = i);
        return this;
      }, n.prototype.space = function(t) {
        var r;
        return this.pretty ? (r = (t || 0) + this.offset + 1, r > 0 ? new Array(r).join(this.indent) : "") : "";
      }, n;
    }();
  }).call(sl)), Lt.exports;
}
var dl = It.exports, Po;
function fa() {
  return Po || (Po = 1, (function() {
    var e, n, t, r, c, i, a, o, u, l, b, m, g, h, y = function(s, p) {
      for (var d in p)
        f.call(p, d) && (s[d] = p[d]);
      function D() {
        this.constructor = s;
      }
      return D.prototype = p.prototype, s.prototype = new D(), s.__super__ = p.prototype, s;
    }, f = {}.hasOwnProperty;
    a = or(), o = lr(), e = ir(), n = ar(), l = rr(), m = fr(), g = hr(), b = pr(), u = la(), t = cr(), r = sr(), c = ur(), i = dr(), h = ms(), It.exports = function(s) {
      y(p, s);
      function p(d) {
        p.__super__.constructor.call(this, d);
      }
      return p.prototype.document = function(d) {
        var D, w, _, U, E;
        for (this.textispresent = !1, U = "", E = d.children, w = 0, _ = E.length; w < _; w++)
          D = E[w], !(D instanceof u) && (U += (function() {
            switch (!1) {
              case !(D instanceof a):
                return this.declaration(D);
              case !(D instanceof o):
                return this.docType(D);
              case !(D instanceof n):
                return this.comment(D);
              case !(D instanceof b):
                return this.processingInstruction(D);
              default:
                return this.element(D, 0);
            }
          }).call(this));
        return this.pretty && U.slice(-this.newline.length) === this.newline && (U = U.slice(0, -this.newline.length)), U;
      }, p.prototype.attribute = function(d) {
        return " " + d.name + '="' + d.value + '"';
      }, p.prototype.cdata = function(d, D) {
        return this.space(D) + "<![CDATA[" + d.text + "]]>" + this.newline;
      }, p.prototype.comment = function(d, D) {
        return this.space(D) + "<!-- " + d.text + " -->" + this.newline;
      }, p.prototype.declaration = function(d, D) {
        var w;
        return w = this.space(D), w += '<?xml version="' + d.version + '"', d.encoding != null && (w += ' encoding="' + d.encoding + '"'), d.standalone != null && (w += ' standalone="' + d.standalone + '"'), w += this.spacebeforeslash + "?>", w += this.newline, w;
      }, p.prototype.docType = function(d, D) {
        var w, _, U, E, S;
        if (D || (D = 0), E = this.space(D), E += "<!DOCTYPE " + d.root().name, d.pubID && d.sysID ? E += ' PUBLIC "' + d.pubID + '" "' + d.sysID + '"' : d.sysID && (E += ' SYSTEM "' + d.sysID + '"'), d.children.length > 0) {
          for (E += " [", E += this.newline, S = d.children, _ = 0, U = S.length; _ < U; _++)
            w = S[_], E += (function() {
              switch (!1) {
                case !(w instanceof t):
                  return this.dtdAttList(w, D + 1);
                case !(w instanceof r):
                  return this.dtdElement(w, D + 1);
                case !(w instanceof c):
                  return this.dtdEntity(w, D + 1);
                case !(w instanceof i):
                  return this.dtdNotation(w, D + 1);
                case !(w instanceof e):
                  return this.cdata(w, D + 1);
                case !(w instanceof n):
                  return this.comment(w, D + 1);
                case !(w instanceof b):
                  return this.processingInstruction(w, D + 1);
                default:
                  throw new Error("Unknown DTD node type: " + w.constructor.name);
              }
            }).call(this);
          E += "]";
        }
        return E += this.spacebeforeslash + ">", E += this.newline, E;
      }, p.prototype.element = function(d, D) {
        var w, _, U, E, S, A, I, Z, T, R, x, z, W;
        D || (D = 0), W = !1, this.textispresent ? (this.newline = "", this.pretty = !1) : (this.newline = this.newlinedefault, this.pretty = this.prettydefault), z = this.space(D), Z = "", Z += z + "<" + d.name, T = d.attributes;
        for (I in T)
          f.call(T, I) && (w = T[I], Z += this.attribute(w));
        if (d.children.length === 0 || d.children.every(function(O) {
          return O.value === "";
        }))
          this.allowEmpty ? Z += "></" + d.name + ">" + this.newline : Z += this.spacebeforeslash + "/>" + this.newline;
        else if (this.pretty && d.children.length === 1 && d.children[0].value != null)
          Z += ">", Z += d.children[0].value, Z += "</" + d.name + ">" + this.newline;
        else {
          if (this.dontprettytextnodes) {
            for (R = d.children, U = 0, S = R.length; U < S; U++)
              if (_ = R[U], _.value != null) {
                this.textispresent++, W = !0;
                break;
              }
          }
          for (this.textispresent && (this.newline = "", this.pretty = !1, z = this.space(D)), Z += ">" + this.newline, x = d.children, E = 0, A = x.length; E < A; E++)
            _ = x[E], Z += (function() {
              switch (!1) {
                case !(_ instanceof e):
                  return this.cdata(_, D + 1);
                case !(_ instanceof n):
                  return this.comment(_, D + 1);
                case !(_ instanceof l):
                  return this.element(_, D + 1);
                case !(_ instanceof m):
                  return this.raw(_, D + 1);
                case !(_ instanceof g):
                  return this.text(_, D + 1);
                case !(_ instanceof b):
                  return this.processingInstruction(_, D + 1);
                case !(_ instanceof u):
                  return "";
                default:
                  throw new Error("Unknown XML node type: " + _.constructor.name);
              }
            }).call(this);
          W && this.textispresent--, this.textispresent || (this.newline = this.newlinedefault, this.pretty = this.prettydefault), Z += z + "</" + d.name + ">" + this.newline;
        }
        return Z;
      }, p.prototype.processingInstruction = function(d, D) {
        var w;
        return w = this.space(D) + "<?" + d.target, d.value && (w += " " + d.value), w += this.spacebeforeslash + "?>" + this.newline, w;
      }, p.prototype.raw = function(d, D) {
        return this.space(D) + d.value + this.newline;
      }, p.prototype.text = function(d, D) {
        return this.space(D) + d.value + this.newline;
      }, p.prototype.dtdAttList = function(d, D) {
        var w;
        return w = this.space(D) + "<!ATTLIST " + d.elementName + " " + d.attributeName + " " + d.attributeType, d.defaultValueType !== "#DEFAULT" && (w += " " + d.defaultValueType), d.defaultValue && (w += ' "' + d.defaultValue + '"'), w += this.spacebeforeslash + ">" + this.newline, w;
      }, p.prototype.dtdElement = function(d, D) {
        return this.space(D) + "<!ELEMENT " + d.name + " " + d.value + this.spacebeforeslash + ">" + this.newline;
      }, p.prototype.dtdEntity = function(d, D) {
        var w;
        return w = this.space(D) + "<!ENTITY", d.pe && (w += " %"), w += " " + d.name, d.value ? w += ' "' + d.value + '"' : (d.pubID && d.sysID ? w += ' PUBLIC "' + d.pubID + '" "' + d.sysID + '"' : d.sysID && (w += ' SYSTEM "' + d.sysID + '"'), d.nData && (w += " NDATA " + d.nData)), w += this.spacebeforeslash + ">" + this.newline, w;
      }, p.prototype.dtdNotation = function(d, D) {
        var w;
        return w = this.space(D) + "<!NOTATION " + d.name, d.pubID && d.sysID ? w += ' PUBLIC "' + d.pubID + '" "' + d.sysID + '"' : d.pubID ? w += ' PUBLIC "' + d.pubID + '"' : d.sysID && (w += ' SYSTEM "' + d.sysID + '"'), w += this.spacebeforeslash + ">" + this.newline, w;
      }, p.prototype.openNode = function(d, D) {
        var w, _, U, E;
        if (D || (D = 0), d instanceof l) {
          U = this.space(D) + "<" + d.name, E = d.attributes;
          for (_ in E)
            f.call(E, _) && (w = E[_], U += this.attribute(w));
          return U += (d.children ? ">" : "/>") + this.newline, U;
        } else
          return U = this.space(D) + "<!DOCTYPE " + d.rootNodeName, d.pubID && d.sysID ? U += ' PUBLIC "' + d.pubID + '" "' + d.sysID + '"' : d.sysID && (U += ' SYSTEM "' + d.sysID + '"'), U += (d.children ? " [" : ">") + this.newline, U;
      }, p.prototype.closeNode = function(d, D) {
        switch (D || (D = 0), !1) {
          case !(d instanceof l):
            return this.space(D) + "</" + d.name + ">" + this.newline;
          case !(d instanceof o):
            return this.space(D) + "]>" + this.newline;
        }
      }, p;
    }(h);
  }).call(dl)), It.exports;
}
var ll = vt.exports, zo;
function fl() {
  return zo || (zo = 1, (function() {
    var e, n, t, r, c = function(a, o) {
      for (var u in o)
        i.call(o, u) && (a[u] = o[u]);
      function l() {
        this.constructor = a;
      }
      return l.prototype = o.prototype, a.prototype = new l(), a.__super__ = o.prototype, a;
    }, i = {}.hasOwnProperty;
    r = bn().isPlainObject, e = ze(), t = gs(), n = fa(), vt.exports = function(a) {
      c(o, a);
      function o(u) {
        o.__super__.constructor.call(this, null), this.name = "?xml", u || (u = {}), u.writer || (u.writer = new n()), this.options = u, this.stringify = new t(u), this.isDocument = !0;
      }
      return o.prototype.end = function(u) {
        var l;
        return u ? r(u) && (l = u, u = this.options.writer.set(l)) : u = this.options.writer, u.document(this);
      }, o.prototype.toString = function(u) {
        return this.options.writer.set(u).document(this);
      }, o;
    }(e);
  }).call(ll)), vt.exports;
}
var Mt = { exports: {} }, hl = Mt.exports, jo;
function pl() {
  return jo || (jo = 1, (function() {
    var e, n, t, r, c, i, a, o, u, l, b, m, g, h, y, f, s, p, d, D, w = {}.hasOwnProperty;
    D = bn(), p = D.isObject, s = D.isFunction, d = D.isPlainObject, f = D.getValue, l = rr(), n = ir(), t = ar(), m = fr(), y = hr(), b = pr(), o = or(), u = lr(), r = cr(), i = ur(), c = sr(), a = dr(), e = ps(), h = gs(), g = fa(), Mt.exports = function() {
      function _(U, E, S) {
        var A;
        this.name = "?xml", U || (U = {}), U.writer ? d(U.writer) && (A = U.writer, U.writer = new g(A)) : U.writer = new g(U), this.options = U, this.writer = U.writer, this.stringify = new h(U), this.onDataCallback = E || function() {
        }, this.onEndCallback = S || function() {
        }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return _.prototype.node = function(U, E, S) {
        var A, I;
        if (U == null)
          throw new Error("Missing node name.");
        if (this.root && this.currentLevel === -1)
          throw new Error("Document can only have one root node. " + this.debugInfo(U));
        return this.openCurrent(), U = f(U), E === null && S == null && (A = [{}, null], E = A[0], S = A[1]), E == null && (E = {}), E = f(E), p(E) || (I = [E, S], S = I[0], E = I[1]), this.currentNode = new l(this, U, E), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, S != null && this.text(S), this;
      }, _.prototype.element = function(U, E, S) {
        return this.currentNode && this.currentNode instanceof u ? this.dtdElement.apply(this, arguments) : this.node(U, E, S);
      }, _.prototype.attribute = function(U, E) {
        var S, A;
        if (!this.currentNode || this.currentNode.children)
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(U));
        if (U != null && (U = f(U)), p(U))
          for (S in U)
            w.call(U, S) && (A = U[S], this.attribute(S, A));
        else
          s(E) && (E = E.apply()), (!this.options.skipNullAttributes || E != null) && (this.currentNode.attributes[U] = new e(this, U, E));
        return this;
      }, _.prototype.text = function(U) {
        var E;
        return this.openCurrent(), E = new y(this, U), this.onData(this.writer.text(E, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.cdata = function(U) {
        var E;
        return this.openCurrent(), E = new n(this, U), this.onData(this.writer.cdata(E, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.comment = function(U) {
        var E;
        return this.openCurrent(), E = new t(this, U), this.onData(this.writer.comment(E, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.raw = function(U) {
        var E;
        return this.openCurrent(), E = new m(this, U), this.onData(this.writer.raw(E, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.instruction = function(U, E) {
        var S, A, I, Z, T;
        if (this.openCurrent(), U != null && (U = f(U)), E != null && (E = f(E)), Array.isArray(U))
          for (S = 0, Z = U.length; S < Z; S++)
            A = U[S], this.instruction(A);
        else if (p(U))
          for (A in U)
            w.call(U, A) && (I = U[A], this.instruction(A, I));
        else
          s(E) && (E = E.apply()), T = new b(this, U, E), this.onData(this.writer.processingInstruction(T, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, _.prototype.declaration = function(U, E, S) {
        var A;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return A = new o(this, U, E, S), this.onData(this.writer.declaration(A, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.doctype = function(U, E, S) {
        if (this.openCurrent(), U == null)
          throw new Error("Missing root node name.");
        if (this.root)
          throw new Error("dtd() must come before the root node.");
        return this.currentNode = new u(this, E, S), this.currentNode.rootNodeName = U, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, _.prototype.dtdElement = function(U, E) {
        var S;
        return this.openCurrent(), S = new c(this, U, E), this.onData(this.writer.dtdElement(S, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.attList = function(U, E, S, A, I) {
        var Z;
        return this.openCurrent(), Z = new r(this, U, E, S, A, I), this.onData(this.writer.dtdAttList(Z, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.entity = function(U, E) {
        var S;
        return this.openCurrent(), S = new i(this, !1, U, E), this.onData(this.writer.dtdEntity(S, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.pEntity = function(U, E) {
        var S;
        return this.openCurrent(), S = new i(this, !0, U, E), this.onData(this.writer.dtdEntity(S, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.notation = function(U, E) {
        var S;
        return this.openCurrent(), S = new a(this, U, E), this.onData(this.writer.dtdNotation(S, this.currentLevel + 1), this.currentLevel + 1), this;
      }, _.prototype.up = function() {
        if (this.currentLevel < 0)
          throw new Error("The document node has no parent.");
        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }, _.prototype.end = function() {
        for (; this.currentLevel >= 0; )
          this.up();
        return this.onEnd();
      }, _.prototype.openCurrent = function() {
        if (this.currentNode)
          return this.currentNode.children = !0, this.openNode(this.currentNode);
      }, _.prototype.openNode = function(U) {
        if (!U.isOpen)
          return !this.root && this.currentLevel === 0 && U instanceof l && (this.root = U), this.onData(this.writer.openNode(U, this.currentLevel), this.currentLevel), U.isOpen = !0;
      }, _.prototype.closeNode = function(U) {
        if (!U.isClosed)
          return this.onData(this.writer.closeNode(U, this.currentLevel), this.currentLevel), U.isClosed = !0;
      }, _.prototype.onData = function(U, E) {
        return this.documentStarted = !0, this.onDataCallback(U, E + 1);
      }, _.prototype.onEnd = function() {
        return this.documentCompleted = !0, this.onEndCallback();
      }, _.prototype.debugInfo = function(U) {
        return U == null ? "" : "node: <" + U + ">";
      }, _.prototype.ele = function() {
        return this.element.apply(this, arguments);
      }, _.prototype.nod = function(U, E, S) {
        return this.node(U, E, S);
      }, _.prototype.txt = function(U) {
        return this.text(U);
      }, _.prototype.dat = function(U) {
        return this.cdata(U);
      }, _.prototype.com = function(U) {
        return this.comment(U);
      }, _.prototype.ins = function(U, E) {
        return this.instruction(U, E);
      }, _.prototype.dec = function(U, E, S) {
        return this.declaration(U, E, S);
      }, _.prototype.dtd = function(U, E, S) {
        return this.doctype(U, E, S);
      }, _.prototype.e = function(U, E, S) {
        return this.element(U, E, S);
      }, _.prototype.n = function(U, E, S) {
        return this.node(U, E, S);
      }, _.prototype.t = function(U) {
        return this.text(U);
      }, _.prototype.d = function(U) {
        return this.cdata(U);
      }, _.prototype.c = function(U) {
        return this.comment(U);
      }, _.prototype.r = function(U) {
        return this.raw(U);
      }, _.prototype.i = function(U, E) {
        return this.instruction(U, E);
      }, _.prototype.att = function() {
        return this.currentNode && this.currentNode instanceof u ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, _.prototype.a = function() {
        return this.currentNode && this.currentNode instanceof u ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, _.prototype.ent = function(U, E) {
        return this.entity(U, E);
      }, _.prototype.pent = function(U, E) {
        return this.pEntity(U, E);
      }, _.prototype.not = function(U, E) {
        return this.notation(U, E);
      }, _;
    }();
  }).call(hl)), Mt.exports;
}
var qt = { exports: {} }, gl = qt.exports, Xo;
function ml() {
  return Xo || (Xo = 1, (function() {
    var e, n, t, r, c, i, a, o, u, l, b, m, g, h, y = function(s, p) {
      for (var d in p)
        f.call(p, d) && (s[d] = p[d]);
      function D() {
        this.constructor = s;
      }
      return D.prototype = p.prototype, s.prototype = new D(), s.__super__ = p.prototype, s;
    }, f = {}.hasOwnProperty;
    a = or(), o = lr(), e = ir(), n = ar(), l = rr(), m = fr(), g = hr(), b = pr(), u = la(), t = cr(), r = sr(), c = ur(), i = dr(), h = ms(), qt.exports = function(s) {
      y(p, s);
      function p(d, D) {
        p.__super__.constructor.call(this, D), this.stream = d;
      }
      return p.prototype.document = function(d) {
        var D, w, _, U, E, S, A, I;
        for (S = d.children, w = 0, U = S.length; w < U; w++)
          D = S[w], D.isLastRootNode = !1;
        for (d.children[d.children.length - 1].isLastRootNode = !0, A = d.children, I = [], _ = 0, E = A.length; _ < E; _++)
          if (D = A[_], !(D instanceof u))
            switch (!1) {
              case !(D instanceof a):
                I.push(this.declaration(D));
                break;
              case !(D instanceof o):
                I.push(this.docType(D));
                break;
              case !(D instanceof n):
                I.push(this.comment(D));
                break;
              case !(D instanceof b):
                I.push(this.processingInstruction(D));
                break;
              default:
                I.push(this.element(D));
            }
        return I;
      }, p.prototype.attribute = function(d) {
        return this.stream.write(" " + d.name + '="' + d.value + '"');
      }, p.prototype.cdata = function(d, D) {
        return this.stream.write(this.space(D) + "<![CDATA[" + d.text + "]]>" + this.endline(d));
      }, p.prototype.comment = function(d, D) {
        return this.stream.write(this.space(D) + "<!-- " + d.text + " -->" + this.endline(d));
      }, p.prototype.declaration = function(d, D) {
        return this.stream.write(this.space(D)), this.stream.write('<?xml version="' + d.version + '"'), d.encoding != null && this.stream.write(' encoding="' + d.encoding + '"'), d.standalone != null && this.stream.write(' standalone="' + d.standalone + '"'), this.stream.write(this.spacebeforeslash + "?>"), this.stream.write(this.endline(d));
      }, p.prototype.docType = function(d, D) {
        var w, _, U, E;
        if (D || (D = 0), this.stream.write(this.space(D)), this.stream.write("<!DOCTYPE " + d.root().name), d.pubID && d.sysID ? this.stream.write(' PUBLIC "' + d.pubID + '" "' + d.sysID + '"') : d.sysID && this.stream.write(' SYSTEM "' + d.sysID + '"'), d.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(d)), E = d.children, _ = 0, U = E.length; _ < U; _++)
            switch (w = E[_], !1) {
              case !(w instanceof t):
                this.dtdAttList(w, D + 1);
                break;
              case !(w instanceof r):
                this.dtdElement(w, D + 1);
                break;
              case !(w instanceof c):
                this.dtdEntity(w, D + 1);
                break;
              case !(w instanceof i):
                this.dtdNotation(w, D + 1);
                break;
              case !(w instanceof e):
                this.cdata(w, D + 1);
                break;
              case !(w instanceof n):
                this.comment(w, D + 1);
                break;
              case !(w instanceof b):
                this.processingInstruction(w, D + 1);
                break;
              default:
                throw new Error("Unknown DTD node type: " + w.constructor.name);
            }
          this.stream.write("]");
        }
        return this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(d));
      }, p.prototype.element = function(d, D) {
        var w, _, U, E, S, A, I, Z;
        D || (D = 0), Z = this.space(D), this.stream.write(Z + "<" + d.name), A = d.attributes;
        for (S in A)
          f.call(A, S) && (w = A[S], this.attribute(w));
        if (d.children.length === 0 || d.children.every(function(T) {
          return T.value === "";
        }))
          this.allowEmpty ? this.stream.write("></" + d.name + ">") : this.stream.write(this.spacebeforeslash + "/>");
        else if (this.pretty && d.children.length === 1 && d.children[0].value != null)
          this.stream.write(">"), this.stream.write(d.children[0].value), this.stream.write("</" + d.name + ">");
        else {
          for (this.stream.write(">" + this.newline), I = d.children, U = 0, E = I.length; U < E; U++)
            switch (_ = I[U], !1) {
              case !(_ instanceof e):
                this.cdata(_, D + 1);
                break;
              case !(_ instanceof n):
                this.comment(_, D + 1);
                break;
              case !(_ instanceof l):
                this.element(_, D + 1);
                break;
              case !(_ instanceof m):
                this.raw(_, D + 1);
                break;
              case !(_ instanceof g):
                this.text(_, D + 1);
                break;
              case !(_ instanceof b):
                this.processingInstruction(_, D + 1);
                break;
              case !(_ instanceof u):
                break;
              default:
                throw new Error("Unknown XML node type: " + _.constructor.name);
            }
          this.stream.write(Z + "</" + d.name + ">");
        }
        return this.stream.write(this.endline(d));
      }, p.prototype.processingInstruction = function(d, D) {
        return this.stream.write(this.space(D) + "<?" + d.target), d.value && this.stream.write(" " + d.value), this.stream.write(this.spacebeforeslash + "?>" + this.endline(d));
      }, p.prototype.raw = function(d, D) {
        return this.stream.write(this.space(D) + d.value + this.endline(d));
      }, p.prototype.text = function(d, D) {
        return this.stream.write(this.space(D) + d.value + this.endline(d));
      }, p.prototype.dtdAttList = function(d, D) {
        return this.stream.write(this.space(D) + "<!ATTLIST " + d.elementName + " " + d.attributeName + " " + d.attributeType), d.defaultValueType !== "#DEFAULT" && this.stream.write(" " + d.defaultValueType), d.defaultValue && this.stream.write(' "' + d.defaultValue + '"'), this.stream.write(this.spacebeforeslash + ">" + this.endline(d));
      }, p.prototype.dtdElement = function(d, D) {
        return this.stream.write(this.space(D) + "<!ELEMENT " + d.name + " " + d.value), this.stream.write(this.spacebeforeslash + ">" + this.endline(d));
      }, p.prototype.dtdEntity = function(d, D) {
        return this.stream.write(this.space(D) + "<!ENTITY"), d.pe && this.stream.write(" %"), this.stream.write(" " + d.name), d.value ? this.stream.write(' "' + d.value + '"') : (d.pubID && d.sysID ? this.stream.write(' PUBLIC "' + d.pubID + '" "' + d.sysID + '"') : d.sysID && this.stream.write(' SYSTEM "' + d.sysID + '"'), d.nData && this.stream.write(" NDATA " + d.nData)), this.stream.write(this.spacebeforeslash + ">" + this.endline(d));
      }, p.prototype.dtdNotation = function(d, D) {
        return this.stream.write(this.space(D) + "<!NOTATION " + d.name), d.pubID && d.sysID ? this.stream.write(' PUBLIC "' + d.pubID + '" "' + d.sysID + '"') : d.pubID ? this.stream.write(' PUBLIC "' + d.pubID + '"') : d.sysID && this.stream.write(' SYSTEM "' + d.sysID + '"'), this.stream.write(this.spacebeforeslash + ">" + this.endline(d));
      }, p.prototype.endline = function(d) {
        return d.isLastRootNode ? "" : this.newline;
      }, p;
    }(h);
  }).call(gl)), qt.exports;
}
var Vo;
function bl() {
  return Vo || (Vo = 1, (function() {
    var e, n, t, r, c, i, a;
    a = bn(), c = a.assign, i = a.isFunction, e = fl(), n = pl(), r = fa(), t = ml(), Un.create = function(o, u, l, b) {
      var m, g;
      if (o == null)
        throw new Error("Root element needs a name.");
      return b = c({}, u, l, b), m = new e(b), g = m.element(o), b.headless || (m.declaration(b), (b.pubID != null || b.sysID != null) && m.doctype(b)), g;
    }, Un.begin = function(o, u, l) {
      var b;
      return i(o) && (b = [o, u], u = b[0], l = b[1], o = {}), u ? new n(o, u, l) : new e(o);
    }, Un.stringWriter = function(o) {
      return new r(o);
    }, Un.streamWriter = function(o, u) {
      return new t(o, u);
    };
  }).call(Un)), Un;
}
var Ho;
function yl() {
  if (Ho) return Jr;
  Ho = 1;
  var e = Be, n = bl();
  Jr.writeString = t;
  function t(c, i) {
    var a = e.invert(i), o = {
      element: l,
      text: r
    };
    function u(g, h) {
      return o[h.type](g, h);
    }
    function l(g, h) {
      var y = g.element(b(h.name), h.attributes);
      h.children.forEach(function(f) {
        u(y, f);
      });
    }
    function b(g) {
      var h = /^\{(.*)\}(.*)$/.exec(g);
      if (h) {
        var y = a[h[1]];
        return y + (y === "" ? "" : ":") + h[2];
      } else
        return g;
    }
    function m(g) {
      var h = n.create(b(g.name), {
        version: "1.0",
        encoding: "UTF-8",
        standalone: !0
      });
      return e.forEach(i, function(y, f) {
        var s = "xmlns" + (f === "" ? "" : ":" + f);
        h.attribute(s, y);
      }), g.children.forEach(function(y) {
        u(h, y);
      }), h.end();
    }
    return m(c);
  }
  function r(c, i) {
    c.text(i.value);
  }
  return Jr;
}
var Go;
function ha() {
  if (Go) return cn;
  Go = 1;
  var e = hs();
  return cn.Element = e.Element, cn.element = e.element, cn.emptyElement = e.emptyElement, cn.text = e.text, cn.readString = Hd().readString, cn.writeString = yl().writeString, cn;
}
var Zo;
function Dl() {
  if (Zo) return lt;
  Zo = 1;
  var e = Be, n = mn(), t = ha();
  lt.read = c, lt.readXmlFromZipFile = i;
  var r = {
    // Transitional format
    "http://schemas.openxmlformats.org/wordprocessingml/2006/main": "w",
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships": "r",
    "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing": "wp",
    "http://schemas.openxmlformats.org/drawingml/2006/main": "a",
    "http://schemas.openxmlformats.org/drawingml/2006/picture": "pic",
    // Strict format
    "http://purl.oclc.org/ooxml/wordprocessingml/main": "w",
    "http://purl.oclc.org/ooxml/officeDocument/relationships": "r",
    "http://purl.oclc.org/ooxml/drawingml/wordprocessingDrawing": "wp",
    "http://purl.oclc.org/ooxml/drawingml/main": "a",
    "http://purl.oclc.org/ooxml/drawingml/picture": "pic",
    // Common
    "http://schemas.openxmlformats.org/package/2006/content-types": "content-types",
    "http://schemas.openxmlformats.org/package/2006/relationships": "relationships",
    "http://schemas.openxmlformats.org/markup-compatibility/2006": "mc",
    "urn:schemas-microsoft-com:vml": "v",
    "urn:schemas-microsoft-com:office:word": "office-word",
    // [MS-DOCX]: Word Extensions to the Office Open XML (.docx) File Format
    // https://learn.microsoft.com/en-us/openspecs/office_standards/ms-docx/b839fe1f-e1ca-4fa6-8c26-5954d0abbccd
    "http://schemas.microsoft.com/office/word/2010/wordml": "wordml"
  };
  function c(u) {
    return t.readString(u, r).then(function(l) {
      return o(l)[0];
    });
  }
  function i(u, l) {
    return u.exists(l) ? u.read(l, "utf-8").then(a).then(c) : n.resolve(null);
  }
  function a(u) {
    return u.replace(/^\uFEFF/g, "");
  }
  function o(u) {
    return u.type === "element" ? u.name === "mc:AlternateContent" ? u.firstOrEmpty("mc:Fallback").children : (u.children = e.flatten(u.children.map(o, !0)), [u]) : [u];
  }
  return lt;
}
var pt = {}, Ge = {}, gt = {}, $o;
function vl() {
  if ($o) return gt;
  $o = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  var e = [
    { "Typeface name": "Symbol", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
    { "Typeface name": "Symbol", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "33", "Unicode hex": "21" },
    { "Typeface name": "Symbol", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "8704", "Unicode hex": "2200" },
    { "Typeface name": "Symbol", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "35", "Unicode hex": "23" },
    { "Typeface name": "Symbol", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "8707", "Unicode hex": "2203" },
    { "Typeface name": "Symbol", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "37", "Unicode hex": "25" },
    { "Typeface name": "Symbol", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "38", "Unicode hex": "26" },
    { "Typeface name": "Symbol", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "8717", "Unicode hex": "220D" },
    { "Typeface name": "Symbol", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "40", "Unicode hex": "28" },
    { "Typeface name": "Symbol", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "41", "Unicode hex": "29" },
    { "Typeface name": "Symbol", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "42", "Unicode hex": "2A" },
    { "Typeface name": "Symbol", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "43", "Unicode hex": "2B" },
    { "Typeface name": "Symbol", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "44", "Unicode hex": "2C" },
    { "Typeface name": "Symbol", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "8722", "Unicode hex": "2212" },
    { "Typeface name": "Symbol", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "46", "Unicode hex": "2E" },
    { "Typeface name": "Symbol", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "47", "Unicode hex": "2F" },
    { "Typeface name": "Symbol", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "48", "Unicode hex": "30" },
    { "Typeface name": "Symbol", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "49", "Unicode hex": "31" },
    { "Typeface name": "Symbol", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "50", "Unicode hex": "32" },
    { "Typeface name": "Symbol", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "51", "Unicode hex": "33" },
    { "Typeface name": "Symbol", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "52", "Unicode hex": "34" },
    { "Typeface name": "Symbol", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "53", "Unicode hex": "35" },
    { "Typeface name": "Symbol", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "54", "Unicode hex": "36" },
    { "Typeface name": "Symbol", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "55", "Unicode hex": "37" },
    { "Typeface name": "Symbol", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "56", "Unicode hex": "38" },
    { "Typeface name": "Symbol", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "57", "Unicode hex": "39" },
    { "Typeface name": "Symbol", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "58", "Unicode hex": "3A" },
    { "Typeface name": "Symbol", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "59", "Unicode hex": "3B" },
    { "Typeface name": "Symbol", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "60", "Unicode hex": "3C" },
    { "Typeface name": "Symbol", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "61", "Unicode hex": "3D" },
    { "Typeface name": "Symbol", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "62", "Unicode hex": "3E" },
    { "Typeface name": "Symbol", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "63", "Unicode hex": "3F" },
    { "Typeface name": "Symbol", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "8773", "Unicode hex": "2245" },
    { "Typeface name": "Symbol", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "913", "Unicode hex": "391" },
    { "Typeface name": "Symbol", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "914", "Unicode hex": "392" },
    { "Typeface name": "Symbol", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "935", "Unicode hex": "3A7" },
    { "Typeface name": "Symbol", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "916", "Unicode hex": "394" },
    { "Typeface name": "Symbol", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "917", "Unicode hex": "395" },
    { "Typeface name": "Symbol", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "934", "Unicode hex": "3A6" },
    { "Typeface name": "Symbol", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "915", "Unicode hex": "393" },
    { "Typeface name": "Symbol", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "919", "Unicode hex": "397" },
    { "Typeface name": "Symbol", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "921", "Unicode hex": "399" },
    { "Typeface name": "Symbol", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "977", "Unicode hex": "3D1" },
    { "Typeface name": "Symbol", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "922", "Unicode hex": "39A" },
    { "Typeface name": "Symbol", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "923", "Unicode hex": "39B" },
    { "Typeface name": "Symbol", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "924", "Unicode hex": "39C" },
    { "Typeface name": "Symbol", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "925", "Unicode hex": "39D" },
    { "Typeface name": "Symbol", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "927", "Unicode hex": "39F" },
    { "Typeface name": "Symbol", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "928", "Unicode hex": "3A0" },
    { "Typeface name": "Symbol", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "920", "Unicode hex": "398" },
    { "Typeface name": "Symbol", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "929", "Unicode hex": "3A1" },
    { "Typeface name": "Symbol", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "931", "Unicode hex": "3A3" },
    { "Typeface name": "Symbol", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "932", "Unicode hex": "3A4" },
    { "Typeface name": "Symbol", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "933", "Unicode hex": "3A5" },
    { "Typeface name": "Symbol", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "962", "Unicode hex": "3C2" },
    { "Typeface name": "Symbol", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "937", "Unicode hex": "3A9" },
    { "Typeface name": "Symbol", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "926", "Unicode hex": "39E" },
    { "Typeface name": "Symbol", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "936", "Unicode hex": "3A8" },
    { "Typeface name": "Symbol", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "918", "Unicode hex": "396" },
    { "Typeface name": "Symbol", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "91", "Unicode hex": "5B" },
    { "Typeface name": "Symbol", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "8756", "Unicode hex": "2234" },
    { "Typeface name": "Symbol", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "93", "Unicode hex": "5D" },
    { "Typeface name": "Symbol", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "8869", "Unicode hex": "22A5" },
    { "Typeface name": "Symbol", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "95", "Unicode hex": "5F" },
    { "Typeface name": "Symbol", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "8254", "Unicode hex": "203E" },
    { "Typeface name": "Symbol", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "945", "Unicode hex": "3B1" },
    { "Typeface name": "Symbol", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "946", "Unicode hex": "3B2" },
    { "Typeface name": "Symbol", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "967", "Unicode hex": "3C7" },
    { "Typeface name": "Symbol", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "948", "Unicode hex": "3B4" },
    { "Typeface name": "Symbol", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "949", "Unicode hex": "3B5" },
    { "Typeface name": "Symbol", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "966", "Unicode hex": "3C6" },
    { "Typeface name": "Symbol", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "947", "Unicode hex": "3B3" },
    { "Typeface name": "Symbol", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "951", "Unicode hex": "3B7" },
    { "Typeface name": "Symbol", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "953", "Unicode hex": "3B9" },
    { "Typeface name": "Symbol", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "981", "Unicode hex": "3D5" },
    { "Typeface name": "Symbol", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "954", "Unicode hex": "3BA" },
    { "Typeface name": "Symbol", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "955", "Unicode hex": "3BB" },
    { "Typeface name": "Symbol", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "956", "Unicode hex": "3BC" },
    { "Typeface name": "Symbol", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "957", "Unicode hex": "3BD" },
    { "Typeface name": "Symbol", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "959", "Unicode hex": "3BF" },
    { "Typeface name": "Symbol", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "960", "Unicode hex": "3C0" },
    { "Typeface name": "Symbol", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "952", "Unicode hex": "3B8" },
    { "Typeface name": "Symbol", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "961", "Unicode hex": "3C1" },
    { "Typeface name": "Symbol", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "963", "Unicode hex": "3C3" },
    { "Typeface name": "Symbol", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "964", "Unicode hex": "3C4" },
    { "Typeface name": "Symbol", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "965", "Unicode hex": "3C5" },
    { "Typeface name": "Symbol", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "982", "Unicode hex": "3D6" },
    { "Typeface name": "Symbol", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "969", "Unicode hex": "3C9" },
    { "Typeface name": "Symbol", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "958", "Unicode hex": "3BE" },
    { "Typeface name": "Symbol", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "968", "Unicode hex": "3C8" },
    { "Typeface name": "Symbol", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "950", "Unicode hex": "3B6" },
    { "Typeface name": "Symbol", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "123", "Unicode hex": "7B" },
    { "Typeface name": "Symbol", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "124", "Unicode hex": "7C" },
    { "Typeface name": "Symbol", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "125", "Unicode hex": "7D" },
    { "Typeface name": "Symbol", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "126", "Unicode hex": "7E" },
    { "Typeface name": "Symbol", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "8364", "Unicode hex": "20AC" },
    { "Typeface name": "Symbol", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "978", "Unicode hex": "3D2" },
    { "Typeface name": "Symbol", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "8242", "Unicode hex": "2032" },
    { "Typeface name": "Symbol", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "8804", "Unicode hex": "2264" },
    { "Typeface name": "Symbol", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "8260", "Unicode hex": "2044" },
    { "Typeface name": "Symbol", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "8734", "Unicode hex": "221E" },
    { "Typeface name": "Symbol", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "402", "Unicode hex": "192" },
    { "Typeface name": "Symbol", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "9827", "Unicode hex": "2663" },
    { "Typeface name": "Symbol", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "9830", "Unicode hex": "2666" },
    { "Typeface name": "Symbol", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "9829", "Unicode hex": "2665" },
    { "Typeface name": "Symbol", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "9824", "Unicode hex": "2660" },
    { "Typeface name": "Symbol", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "8596", "Unicode hex": "2194" },
    { "Typeface name": "Symbol", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "8592", "Unicode hex": "2190" },
    { "Typeface name": "Symbol", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "8593", "Unicode hex": "2191" },
    { "Typeface name": "Symbol", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "8594", "Unicode hex": "2192" },
    { "Typeface name": "Symbol", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "8595", "Unicode hex": "2193" },
    { "Typeface name": "Symbol", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "176", "Unicode hex": "B0" },
    { "Typeface name": "Symbol", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "177", "Unicode hex": "B1" },
    { "Typeface name": "Symbol", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "8243", "Unicode hex": "2033" },
    { "Typeface name": "Symbol", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "8805", "Unicode hex": "2265" },
    { "Typeface name": "Symbol", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "215", "Unicode hex": "D7" },
    { "Typeface name": "Symbol", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "8733", "Unicode hex": "221D" },
    { "Typeface name": "Symbol", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "8706", "Unicode hex": "2202" },
    { "Typeface name": "Symbol", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "8226", "Unicode hex": "2022" },
    { "Typeface name": "Symbol", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "247", "Unicode hex": "F7" },
    { "Typeface name": "Symbol", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "8800", "Unicode hex": "2260" },
    { "Typeface name": "Symbol", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "8801", "Unicode hex": "2261" },
    { "Typeface name": "Symbol", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "8776", "Unicode hex": "2248" },
    { "Typeface name": "Symbol", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "8230", "Unicode hex": "2026" },
    { "Typeface name": "Symbol", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "9168", "Unicode hex": "23D0" },
    { "Typeface name": "Symbol", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "9135", "Unicode hex": "23AF" },
    { "Typeface name": "Symbol", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "8629", "Unicode hex": "21B5" },
    { "Typeface name": "Symbol", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "8501", "Unicode hex": "2135" },
    { "Typeface name": "Symbol", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "8465", "Unicode hex": "2111" },
    { "Typeface name": "Symbol", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "8476", "Unicode hex": "211C" },
    { "Typeface name": "Symbol", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "8472", "Unicode hex": "2118" },
    { "Typeface name": "Symbol", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "8855", "Unicode hex": "2297" },
    { "Typeface name": "Symbol", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "8853", "Unicode hex": "2295" },
    { "Typeface name": "Symbol", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "8709", "Unicode hex": "2205" },
    { "Typeface name": "Symbol", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "8745", "Unicode hex": "2229" },
    { "Typeface name": "Symbol", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "8746", "Unicode hex": "222A" },
    { "Typeface name": "Symbol", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "8835", "Unicode hex": "2283" },
    { "Typeface name": "Symbol", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "8839", "Unicode hex": "2287" },
    { "Typeface name": "Symbol", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "8836", "Unicode hex": "2284" },
    { "Typeface name": "Symbol", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "8834", "Unicode hex": "2282" },
    { "Typeface name": "Symbol", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "8838", "Unicode hex": "2286" },
    { "Typeface name": "Symbol", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "8712", "Unicode hex": "2208" },
    { "Typeface name": "Symbol", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "8713", "Unicode hex": "2209" },
    { "Typeface name": "Symbol", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "8736", "Unicode hex": "2220" },
    { "Typeface name": "Symbol", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "8711", "Unicode hex": "2207" },
    { "Typeface name": "Symbol", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "174", "Unicode hex": "AE" },
    { "Typeface name": "Symbol", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "169", "Unicode hex": "A9" },
    { "Typeface name": "Symbol", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "8482", "Unicode hex": "2122" },
    { "Typeface name": "Symbol", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "8719", "Unicode hex": "220F" },
    { "Typeface name": "Symbol", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "8730", "Unicode hex": "221A" },
    { "Typeface name": "Symbol", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "8901", "Unicode hex": "22C5" },
    { "Typeface name": "Symbol", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "172", "Unicode hex": "AC" },
    { "Typeface name": "Symbol", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "8743", "Unicode hex": "2227" },
    { "Typeface name": "Symbol", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "8744", "Unicode hex": "2228" },
    { "Typeface name": "Symbol", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "8660", "Unicode hex": "21D4" },
    { "Typeface name": "Symbol", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "8656", "Unicode hex": "21D0" },
    { "Typeface name": "Symbol", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "8657", "Unicode hex": "21D1" },
    { "Typeface name": "Symbol", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "8658", "Unicode hex": "21D2" },
    { "Typeface name": "Symbol", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "8659", "Unicode hex": "21D3" },
    { "Typeface name": "Symbol", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "9674", "Unicode hex": "25CA" },
    { "Typeface name": "Symbol", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "12296", "Unicode hex": "3008" },
    { "Typeface name": "Symbol", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "174", "Unicode hex": "AE" },
    { "Typeface name": "Symbol", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "169", "Unicode hex": "A9" },
    { "Typeface name": "Symbol", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "8482", "Unicode hex": "2122" },
    { "Typeface name": "Symbol", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "8721", "Unicode hex": "2211" },
    { "Typeface name": "Symbol", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "9115", "Unicode hex": "239B" },
    { "Typeface name": "Symbol", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "9116", "Unicode hex": "239C" },
    { "Typeface name": "Symbol", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "9117", "Unicode hex": "239D" },
    { "Typeface name": "Symbol", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "9121", "Unicode hex": "23A1" },
    { "Typeface name": "Symbol", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "9122", "Unicode hex": "23A2" },
    { "Typeface name": "Symbol", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "9123", "Unicode hex": "23A3" },
    { "Typeface name": "Symbol", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "9127", "Unicode hex": "23A7" },
    { "Typeface name": "Symbol", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "9128", "Unicode hex": "23A8" },
    { "Typeface name": "Symbol", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "9129", "Unicode hex": "23A9" },
    { "Typeface name": "Symbol", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "9130", "Unicode hex": "23AA" },
    { "Typeface name": "Symbol", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "63743", "Unicode hex": "F8FF" },
    { "Typeface name": "Symbol", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "12297", "Unicode hex": "3009" },
    { "Typeface name": "Symbol", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "8747", "Unicode hex": "222B" },
    { "Typeface name": "Symbol", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "8992", "Unicode hex": "2320" },
    { "Typeface name": "Symbol", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "9134", "Unicode hex": "23AE" },
    { "Typeface name": "Symbol", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "8993", "Unicode hex": "2321" },
    { "Typeface name": "Symbol", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "9118", "Unicode hex": "239E" },
    { "Typeface name": "Symbol", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "9119", "Unicode hex": "239F" },
    { "Typeface name": "Symbol", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "9120", "Unicode hex": "23A0" },
    { "Typeface name": "Symbol", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "9124", "Unicode hex": "23A4" },
    { "Typeface name": "Symbol", "Dingbat dec": "250", "Dingbat hex": "FA", "Unicode dec": "9125", "Unicode hex": "23A5" },
    { "Typeface name": "Symbol", "Dingbat dec": "251", "Dingbat hex": "FB", "Unicode dec": "9126", "Unicode hex": "23A6" },
    { "Typeface name": "Symbol", "Dingbat dec": "252", "Dingbat hex": "FC", "Unicode dec": "9131", "Unicode hex": "23AB" },
    { "Typeface name": "Symbol", "Dingbat dec": "253", "Dingbat hex": "FD", "Unicode dec": "9132", "Unicode hex": "23AC" },
    { "Typeface name": "Symbol", "Dingbat dec": "254", "Dingbat hex": "FE", "Unicode dec": "9133", "Unicode hex": "23AD" },
    { "Typeface name": "Webdings", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
    { "Typeface name": "Webdings", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "128375", "Unicode hex": "1F577" },
    { "Typeface name": "Webdings", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "128376", "Unicode hex": "1F578" },
    { "Typeface name": "Webdings", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "128370", "Unicode hex": "1F572" },
    { "Typeface name": "Webdings", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "128374", "Unicode hex": "1F576" },
    { "Typeface name": "Webdings", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "127942", "Unicode hex": "1F3C6" },
    { "Typeface name": "Webdings", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "127894", "Unicode hex": "1F396" },
    { "Typeface name": "Webdings", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "128391", "Unicode hex": "1F587" },
    { "Typeface name": "Webdings", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "128488", "Unicode hex": "1F5E8" },
    { "Typeface name": "Webdings", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "128489", "Unicode hex": "1F5E9" },
    { "Typeface name": "Webdings", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "128496", "Unicode hex": "1F5F0" },
    { "Typeface name": "Webdings", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "128497", "Unicode hex": "1F5F1" },
    { "Typeface name": "Webdings", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "127798", "Unicode hex": "1F336" },
    { "Typeface name": "Webdings", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "127895", "Unicode hex": "1F397" },
    { "Typeface name": "Webdings", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "128638", "Unicode hex": "1F67E" },
    { "Typeface name": "Webdings", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "128636", "Unicode hex": "1F67C" },
    { "Typeface name": "Webdings", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "128469", "Unicode hex": "1F5D5" },
    { "Typeface name": "Webdings", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "128470", "Unicode hex": "1F5D6" },
    { "Typeface name": "Webdings", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "128471", "Unicode hex": "1F5D7" },
    { "Typeface name": "Webdings", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "9204", "Unicode hex": "23F4" },
    { "Typeface name": "Webdings", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "9205", "Unicode hex": "23F5" },
    { "Typeface name": "Webdings", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "9206", "Unicode hex": "23F6" },
    { "Typeface name": "Webdings", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "9207", "Unicode hex": "23F7" },
    { "Typeface name": "Webdings", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "9194", "Unicode hex": "23EA" },
    { "Typeface name": "Webdings", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "9193", "Unicode hex": "23E9" },
    { "Typeface name": "Webdings", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "9198", "Unicode hex": "23EE" },
    { "Typeface name": "Webdings", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "9197", "Unicode hex": "23ED" },
    { "Typeface name": "Webdings", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "9208", "Unicode hex": "23F8" },
    { "Typeface name": "Webdings", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "9209", "Unicode hex": "23F9" },
    { "Typeface name": "Webdings", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "9210", "Unicode hex": "23FA" },
    { "Typeface name": "Webdings", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "128474", "Unicode hex": "1F5DA" },
    { "Typeface name": "Webdings", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "128499", "Unicode hex": "1F5F3" },
    { "Typeface name": "Webdings", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "128736", "Unicode hex": "1F6E0" },
    { "Typeface name": "Webdings", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "127959", "Unicode hex": "1F3D7" },
    { "Typeface name": "Webdings", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "127960", "Unicode hex": "1F3D8" },
    { "Typeface name": "Webdings", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "127961", "Unicode hex": "1F3D9" },
    { "Typeface name": "Webdings", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "127962", "Unicode hex": "1F3DA" },
    { "Typeface name": "Webdings", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "127964", "Unicode hex": "1F3DC" },
    { "Typeface name": "Webdings", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "127981", "Unicode hex": "1F3ED" },
    { "Typeface name": "Webdings", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "127963", "Unicode hex": "1F3DB" },
    { "Typeface name": "Webdings", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "127968", "Unicode hex": "1F3E0" },
    { "Typeface name": "Webdings", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "127958", "Unicode hex": "1F3D6" },
    { "Typeface name": "Webdings", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "127965", "Unicode hex": "1F3DD" },
    { "Typeface name": "Webdings", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "128739", "Unicode hex": "1F6E3" },
    { "Typeface name": "Webdings", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "128269", "Unicode hex": "1F50D" },
    { "Typeface name": "Webdings", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "127956", "Unicode hex": "1F3D4" },
    { "Typeface name": "Webdings", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "128065", "Unicode hex": "1F441" },
    { "Typeface name": "Webdings", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "128066", "Unicode hex": "1F442" },
    { "Typeface name": "Webdings", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "127966", "Unicode hex": "1F3DE" },
    { "Typeface name": "Webdings", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "127957", "Unicode hex": "1F3D5" },
    { "Typeface name": "Webdings", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "128740", "Unicode hex": "1F6E4" },
    { "Typeface name": "Webdings", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "127967", "Unicode hex": "1F3DF" },
    { "Typeface name": "Webdings", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "128755", "Unicode hex": "1F6F3" },
    { "Typeface name": "Webdings", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "128364", "Unicode hex": "1F56C" },
    { "Typeface name": "Webdings", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "128363", "Unicode hex": "1F56B" },
    { "Typeface name": "Webdings", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "128360", "Unicode hex": "1F568" },
    { "Typeface name": "Webdings", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "128264", "Unicode hex": "1F508" },
    { "Typeface name": "Webdings", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "127892", "Unicode hex": "1F394" },
    { "Typeface name": "Webdings", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "127893", "Unicode hex": "1F395" },
    { "Typeface name": "Webdings", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "128492", "Unicode hex": "1F5EC" },
    { "Typeface name": "Webdings", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "128637", "Unicode hex": "1F67D" },
    { "Typeface name": "Webdings", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "128493", "Unicode hex": "1F5ED" },
    { "Typeface name": "Webdings", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "128490", "Unicode hex": "1F5EA" },
    { "Typeface name": "Webdings", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "128491", "Unicode hex": "1F5EB" },
    { "Typeface name": "Webdings", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "11156", "Unicode hex": "2B94" },
    { "Typeface name": "Webdings", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "10004", "Unicode hex": "2714" },
    { "Typeface name": "Webdings", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "128690", "Unicode hex": "1F6B2" },
    { "Typeface name": "Webdings", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "11036", "Unicode hex": "2B1C" },
    { "Typeface name": "Webdings", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "128737", "Unicode hex": "1F6E1" },
    { "Typeface name": "Webdings", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "128230", "Unicode hex": "1F4E6" },
    { "Typeface name": "Webdings", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "128753", "Unicode hex": "1F6F1" },
    { "Typeface name": "Webdings", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "11035", "Unicode hex": "2B1B" },
    { "Typeface name": "Webdings", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "128657", "Unicode hex": "1F691" },
    { "Typeface name": "Webdings", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "128712", "Unicode hex": "1F6C8" },
    { "Typeface name": "Webdings", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "128745", "Unicode hex": "1F6E9" },
    { "Typeface name": "Webdings", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "128752", "Unicode hex": "1F6F0" },
    { "Typeface name": "Webdings", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "128968", "Unicode hex": "1F7C8" },
    { "Typeface name": "Webdings", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "128372", "Unicode hex": "1F574" },
    { "Typeface name": "Webdings", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "11044", "Unicode hex": "2B24" },
    { "Typeface name": "Webdings", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "128741", "Unicode hex": "1F6E5" },
    { "Typeface name": "Webdings", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "128660", "Unicode hex": "1F694" },
    { "Typeface name": "Webdings", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "128472", "Unicode hex": "1F5D8" },
    { "Typeface name": "Webdings", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "128473", "Unicode hex": "1F5D9" },
    { "Typeface name": "Webdings", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "10067", "Unicode hex": "2753" },
    { "Typeface name": "Webdings", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "128754", "Unicode hex": "1F6F2" },
    { "Typeface name": "Webdings", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "128647", "Unicode hex": "1F687" },
    { "Typeface name": "Webdings", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "128653", "Unicode hex": "1F68D" },
    { "Typeface name": "Webdings", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "9971", "Unicode hex": "26F3" },
    { "Typeface name": "Webdings", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "10680", "Unicode hex": "29B8" },
    { "Typeface name": "Webdings", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "8854", "Unicode hex": "2296" },
    { "Typeface name": "Webdings", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "128685", "Unicode hex": "1F6AD" },
    { "Typeface name": "Webdings", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "128494", "Unicode hex": "1F5EE" },
    { "Typeface name": "Webdings", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "9168", "Unicode hex": "23D0" },
    { "Typeface name": "Webdings", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "128495", "Unicode hex": "1F5EF" },
    { "Typeface name": "Webdings", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "128498", "Unicode hex": "1F5F2" },
    { "Typeface name": "Webdings", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "128697", "Unicode hex": "1F6B9" },
    { "Typeface name": "Webdings", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "128698", "Unicode hex": "1F6BA" },
    { "Typeface name": "Webdings", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "128713", "Unicode hex": "1F6C9" },
    { "Typeface name": "Webdings", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "128714", "Unicode hex": "1F6CA" },
    { "Typeface name": "Webdings", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "128700", "Unicode hex": "1F6BC" },
    { "Typeface name": "Webdings", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "128125", "Unicode hex": "1F47D" },
    { "Typeface name": "Webdings", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "127947", "Unicode hex": "1F3CB" },
    { "Typeface name": "Webdings", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "9975", "Unicode hex": "26F7" },
    { "Typeface name": "Webdings", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "127938", "Unicode hex": "1F3C2" },
    { "Typeface name": "Webdings", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "127948", "Unicode hex": "1F3CC" },
    { "Typeface name": "Webdings", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "127946", "Unicode hex": "1F3CA" },
    { "Typeface name": "Webdings", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "127940", "Unicode hex": "1F3C4" },
    { "Typeface name": "Webdings", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "127949", "Unicode hex": "1F3CD" },
    { "Typeface name": "Webdings", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "127950", "Unicode hex": "1F3CE" },
    { "Typeface name": "Webdings", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "128664", "Unicode hex": "1F698" },
    { "Typeface name": "Webdings", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "128480", "Unicode hex": "1F5E0" },
    { "Typeface name": "Webdings", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "128738", "Unicode hex": "1F6E2" },
    { "Typeface name": "Webdings", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "128176", "Unicode hex": "1F4B0" },
    { "Typeface name": "Webdings", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "127991", "Unicode hex": "1F3F7" },
    { "Typeface name": "Webdings", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "128179", "Unicode hex": "1F4B3" },
    { "Typeface name": "Webdings", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "128106", "Unicode hex": "1F46A" },
    { "Typeface name": "Webdings", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "128481", "Unicode hex": "1F5E1" },
    { "Typeface name": "Webdings", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "128482", "Unicode hex": "1F5E2" },
    { "Typeface name": "Webdings", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "128483", "Unicode hex": "1F5E3" },
    { "Typeface name": "Webdings", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "10031", "Unicode hex": "272F" },
    { "Typeface name": "Webdings", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "128388", "Unicode hex": "1F584" },
    { "Typeface name": "Webdings", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "128389", "Unicode hex": "1F585" },
    { "Typeface name": "Webdings", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "128387", "Unicode hex": "1F583" },
    { "Typeface name": "Webdings", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "128390", "Unicode hex": "1F586" },
    { "Typeface name": "Webdings", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "128441", "Unicode hex": "1F5B9" },
    { "Typeface name": "Webdings", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "128442", "Unicode hex": "1F5BA" },
    { "Typeface name": "Webdings", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "128443", "Unicode hex": "1F5BB" },
    { "Typeface name": "Webdings", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "128373", "Unicode hex": "1F575" },
    { "Typeface name": "Webdings", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "128368", "Unicode hex": "1F570" },
    { "Typeface name": "Webdings", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "128445", "Unicode hex": "1F5BD" },
    { "Typeface name": "Webdings", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "128446", "Unicode hex": "1F5BE" },
    { "Typeface name": "Webdings", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "128203", "Unicode hex": "1F4CB" },
    { "Typeface name": "Webdings", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "128466", "Unicode hex": "1F5D2" },
    { "Typeface name": "Webdings", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "128467", "Unicode hex": "1F5D3" },
    { "Typeface name": "Webdings", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "128366", "Unicode hex": "1F56E" },
    { "Typeface name": "Webdings", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "128218", "Unicode hex": "1F4DA" },
    { "Typeface name": "Webdings", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "128478", "Unicode hex": "1F5DE" },
    { "Typeface name": "Webdings", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "128479", "Unicode hex": "1F5DF" },
    { "Typeface name": "Webdings", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "128451", "Unicode hex": "1F5C3" },
    { "Typeface name": "Webdings", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "128450", "Unicode hex": "1F5C2" },
    { "Typeface name": "Webdings", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "128444", "Unicode hex": "1F5BC" },
    { "Typeface name": "Webdings", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "127917", "Unicode hex": "1F3AD" },
    { "Typeface name": "Webdings", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "127900", "Unicode hex": "1F39C" },
    { "Typeface name": "Webdings", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "127896", "Unicode hex": "1F398" },
    { "Typeface name": "Webdings", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "127897", "Unicode hex": "1F399" },
    { "Typeface name": "Webdings", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "127911", "Unicode hex": "1F3A7" },
    { "Typeface name": "Webdings", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "128191", "Unicode hex": "1F4BF" },
    { "Typeface name": "Webdings", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "127902", "Unicode hex": "1F39E" },
    { "Typeface name": "Webdings", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "128247", "Unicode hex": "1F4F7" },
    { "Typeface name": "Webdings", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "127903", "Unicode hex": "1F39F" },
    { "Typeface name": "Webdings", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "127916", "Unicode hex": "1F3AC" },
    { "Typeface name": "Webdings", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "128253", "Unicode hex": "1F4FD" },
    { "Typeface name": "Webdings", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "128249", "Unicode hex": "1F4F9" },
    { "Typeface name": "Webdings", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "128254", "Unicode hex": "1F4FE" },
    { "Typeface name": "Webdings", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "128251", "Unicode hex": "1F4FB" },
    { "Typeface name": "Webdings", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "127898", "Unicode hex": "1F39A" },
    { "Typeface name": "Webdings", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "127899", "Unicode hex": "1F39B" },
    { "Typeface name": "Webdings", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "128250", "Unicode hex": "1F4FA" },
    { "Typeface name": "Webdings", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "128187", "Unicode hex": "1F4BB" },
    { "Typeface name": "Webdings", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "128421", "Unicode hex": "1F5A5" },
    { "Typeface name": "Webdings", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "128422", "Unicode hex": "1F5A6" },
    { "Typeface name": "Webdings", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "128423", "Unicode hex": "1F5A7" },
    { "Typeface name": "Webdings", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "128377", "Unicode hex": "1F579" },
    { "Typeface name": "Webdings", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "127918", "Unicode hex": "1F3AE" },
    { "Typeface name": "Webdings", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "128379", "Unicode hex": "1F57B" },
    { "Typeface name": "Webdings", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "128380", "Unicode hex": "1F57C" },
    { "Typeface name": "Webdings", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "128223", "Unicode hex": "1F4DF" },
    { "Typeface name": "Webdings", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "128385", "Unicode hex": "1F581" },
    { "Typeface name": "Webdings", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "128384", "Unicode hex": "1F580" },
    { "Typeface name": "Webdings", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "128424", "Unicode hex": "1F5A8" },
    { "Typeface name": "Webdings", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "128425", "Unicode hex": "1F5A9" },
    { "Typeface name": "Webdings", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "128447", "Unicode hex": "1F5BF" },
    { "Typeface name": "Webdings", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "128426", "Unicode hex": "1F5AA" },
    { "Typeface name": "Webdings", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "128476", "Unicode hex": "1F5DC" },
    { "Typeface name": "Webdings", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "128274", "Unicode hex": "1F512" },
    { "Typeface name": "Webdings", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "128275", "Unicode hex": "1F513" },
    { "Typeface name": "Webdings", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "128477", "Unicode hex": "1F5DD" },
    { "Typeface name": "Webdings", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "128229", "Unicode hex": "1F4E5" },
    { "Typeface name": "Webdings", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "128228", "Unicode hex": "1F4E4" },
    { "Typeface name": "Webdings", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "128371", "Unicode hex": "1F573" },
    { "Typeface name": "Webdings", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "127779", "Unicode hex": "1F323" },
    { "Typeface name": "Webdings", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "127780", "Unicode hex": "1F324" },
    { "Typeface name": "Webdings", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "127781", "Unicode hex": "1F325" },
    { "Typeface name": "Webdings", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "127782", "Unicode hex": "1F326" },
    { "Typeface name": "Webdings", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "9729", "Unicode hex": "2601" },
    { "Typeface name": "Webdings", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "127784", "Unicode hex": "1F328" },
    { "Typeface name": "Webdings", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "127783", "Unicode hex": "1F327" },
    { "Typeface name": "Webdings", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "127785", "Unicode hex": "1F329" },
    { "Typeface name": "Webdings", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "127786", "Unicode hex": "1F32A" },
    { "Typeface name": "Webdings", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "127788", "Unicode hex": "1F32C" },
    { "Typeface name": "Webdings", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "127787", "Unicode hex": "1F32B" },
    { "Typeface name": "Webdings", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "127772", "Unicode hex": "1F31C" },
    { "Typeface name": "Webdings", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "127777", "Unicode hex": "1F321" },
    { "Typeface name": "Webdings", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "128715", "Unicode hex": "1F6CB" },
    { "Typeface name": "Webdings", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "128719", "Unicode hex": "1F6CF" },
    { "Typeface name": "Webdings", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "127869", "Unicode hex": "1F37D" },
    { "Typeface name": "Webdings", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "127864", "Unicode hex": "1F378" },
    { "Typeface name": "Webdings", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "128718", "Unicode hex": "1F6CE" },
    { "Typeface name": "Webdings", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "128717", "Unicode hex": "1F6CD" },
    { "Typeface name": "Webdings", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "9413", "Unicode hex": "24C5" },
    { "Typeface name": "Webdings", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "9855", "Unicode hex": "267F" },
    { "Typeface name": "Webdings", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "128710", "Unicode hex": "1F6C6" },
    { "Typeface name": "Webdings", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "128392", "Unicode hex": "1F588" },
    { "Typeface name": "Webdings", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "127891", "Unicode hex": "1F393" },
    { "Typeface name": "Webdings", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "128484", "Unicode hex": "1F5E4" },
    { "Typeface name": "Webdings", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "128485", "Unicode hex": "1F5E5" },
    { "Typeface name": "Webdings", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "128486", "Unicode hex": "1F5E6" },
    { "Typeface name": "Webdings", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "128487", "Unicode hex": "1F5E7" },
    { "Typeface name": "Webdings", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "128746", "Unicode hex": "1F6EA" },
    { "Typeface name": "Webdings", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "128063", "Unicode hex": "1F43F" },
    { "Typeface name": "Webdings", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "128038", "Unicode hex": "1F426" },
    { "Typeface name": "Webdings", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "128031", "Unicode hex": "1F41F" },
    { "Typeface name": "Webdings", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "128021", "Unicode hex": "1F415" },
    { "Typeface name": "Webdings", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "128008", "Unicode hex": "1F408" },
    { "Typeface name": "Webdings", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "128620", "Unicode hex": "1F66C" },
    { "Typeface name": "Webdings", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "128622", "Unicode hex": "1F66E" },
    { "Typeface name": "Webdings", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "128621", "Unicode hex": "1F66D" },
    { "Typeface name": "Webdings", "Dingbat dec": "250", "Dingbat hex": "FA", "Unicode dec": "128623", "Unicode hex": "1F66F" },
    { "Typeface name": "Webdings", "Dingbat dec": "251", "Dingbat hex": "FB", "Unicode dec": "128506", "Unicode hex": "1F5FA" },
    { "Typeface name": "Webdings", "Dingbat dec": "252", "Dingbat hex": "FC", "Unicode dec": "127757", "Unicode hex": "1F30D" },
    { "Typeface name": "Webdings", "Dingbat dec": "253", "Dingbat hex": "FD", "Unicode dec": "127759", "Unicode hex": "1F30F" },
    { "Typeface name": "Webdings", "Dingbat dec": "254", "Dingbat hex": "FE", "Unicode dec": "127758", "Unicode hex": "1F30E" },
    { "Typeface name": "Webdings", "Dingbat dec": "255", "Dingbat hex": "FF", "Unicode dec": "128330", "Unicode hex": "1F54A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
    { "Typeface name": "Wingdings", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "128393", "Unicode hex": "1F589" },
    { "Typeface name": "Wingdings", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "9986", "Unicode hex": "2702" },
    { "Typeface name": "Wingdings", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "9985", "Unicode hex": "2701" },
    { "Typeface name": "Wingdings", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "128083", "Unicode hex": "1F453" },
    { "Typeface name": "Wingdings", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "128365", "Unicode hex": "1F56D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "128366", "Unicode hex": "1F56E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "128367", "Unicode hex": "1F56F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "128383", "Unicode hex": "1F57F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "9990", "Unicode hex": "2706" },
    { "Typeface name": "Wingdings", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "128386", "Unicode hex": "1F582" },
    { "Typeface name": "Wingdings", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "128387", "Unicode hex": "1F583" },
    { "Typeface name": "Wingdings", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "128234", "Unicode hex": "1F4EA" },
    { "Typeface name": "Wingdings", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "128235", "Unicode hex": "1F4EB" },
    { "Typeface name": "Wingdings", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "128236", "Unicode hex": "1F4EC" },
    { "Typeface name": "Wingdings", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "128237", "Unicode hex": "1F4ED" },
    { "Typeface name": "Wingdings", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "128448", "Unicode hex": "1F5C0" },
    { "Typeface name": "Wingdings", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "128449", "Unicode hex": "1F5C1" },
    { "Typeface name": "Wingdings", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "128462", "Unicode hex": "1F5CE" },
    { "Typeface name": "Wingdings", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "128463", "Unicode hex": "1F5CF" },
    { "Typeface name": "Wingdings", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "128464", "Unicode hex": "1F5D0" },
    { "Typeface name": "Wingdings", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "128452", "Unicode hex": "1F5C4" },
    { "Typeface name": "Wingdings", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "8987", "Unicode hex": "231B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "128430", "Unicode hex": "1F5AE" },
    { "Typeface name": "Wingdings", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "128432", "Unicode hex": "1F5B0" },
    { "Typeface name": "Wingdings", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "128434", "Unicode hex": "1F5B2" },
    { "Typeface name": "Wingdings", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "128435", "Unicode hex": "1F5B3" },
    { "Typeface name": "Wingdings", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "128436", "Unicode hex": "1F5B4" },
    { "Typeface name": "Wingdings", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "128427", "Unicode hex": "1F5AB" },
    { "Typeface name": "Wingdings", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "128428", "Unicode hex": "1F5AC" },
    { "Typeface name": "Wingdings", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "9991", "Unicode hex": "2707" },
    { "Typeface name": "Wingdings", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "9997", "Unicode hex": "270D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "128398", "Unicode hex": "1F58E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "9996", "Unicode hex": "270C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "128399", "Unicode hex": "1F58F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "128077", "Unicode hex": "1F44D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "128078", "Unicode hex": "1F44E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "9756", "Unicode hex": "261C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "9758", "Unicode hex": "261E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "9757", "Unicode hex": "261D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "9759", "Unicode hex": "261F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "128400", "Unicode hex": "1F590" },
    { "Typeface name": "Wingdings", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "9786", "Unicode hex": "263A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "128528", "Unicode hex": "1F610" },
    { "Typeface name": "Wingdings", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "9785", "Unicode hex": "2639" },
    { "Typeface name": "Wingdings", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "128163", "Unicode hex": "1F4A3" },
    { "Typeface name": "Wingdings", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "128369", "Unicode hex": "1F571" },
    { "Typeface name": "Wingdings", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "127987", "Unicode hex": "1F3F3" },
    { "Typeface name": "Wingdings", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "127985", "Unicode hex": "1F3F1" },
    { "Typeface name": "Wingdings", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "9992", "Unicode hex": "2708" },
    { "Typeface name": "Wingdings", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "9788", "Unicode hex": "263C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "127778", "Unicode hex": "1F322" },
    { "Typeface name": "Wingdings", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "10052", "Unicode hex": "2744" },
    { "Typeface name": "Wingdings", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "128326", "Unicode hex": "1F546" },
    { "Typeface name": "Wingdings", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "10014", "Unicode hex": "271E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "128328", "Unicode hex": "1F548" },
    { "Typeface name": "Wingdings", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "10016", "Unicode hex": "2720" },
    { "Typeface name": "Wingdings", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "10017", "Unicode hex": "2721" },
    { "Typeface name": "Wingdings", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "9770", "Unicode hex": "262A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "9775", "Unicode hex": "262F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "128329", "Unicode hex": "1F549" },
    { "Typeface name": "Wingdings", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "9784", "Unicode hex": "2638" },
    { "Typeface name": "Wingdings", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "9800", "Unicode hex": "2648" },
    { "Typeface name": "Wingdings", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "9801", "Unicode hex": "2649" },
    { "Typeface name": "Wingdings", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "9802", "Unicode hex": "264A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "9803", "Unicode hex": "264B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "9804", "Unicode hex": "264C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "9805", "Unicode hex": "264D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "9806", "Unicode hex": "264E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "9807", "Unicode hex": "264F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "9808", "Unicode hex": "2650" },
    { "Typeface name": "Wingdings", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "9809", "Unicode hex": "2651" },
    { "Typeface name": "Wingdings", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "9810", "Unicode hex": "2652" },
    { "Typeface name": "Wingdings", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "9811", "Unicode hex": "2653" },
    { "Typeface name": "Wingdings", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "128624", "Unicode hex": "1F670" },
    { "Typeface name": "Wingdings", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "128629", "Unicode hex": "1F675" },
    { "Typeface name": "Wingdings", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "9899", "Unicode hex": "26AB" },
    { "Typeface name": "Wingdings", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "128318", "Unicode hex": "1F53E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "9724", "Unicode hex": "25FC" },
    { "Typeface name": "Wingdings", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "128911", "Unicode hex": "1F78F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "128912", "Unicode hex": "1F790" },
    { "Typeface name": "Wingdings", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "10065", "Unicode hex": "2751" },
    { "Typeface name": "Wingdings", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "10066", "Unicode hex": "2752" },
    { "Typeface name": "Wingdings", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "128927", "Unicode hex": "1F79F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "10731", "Unicode hex": "29EB" },
    { "Typeface name": "Wingdings", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "9670", "Unicode hex": "25C6" },
    { "Typeface name": "Wingdings", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "10070", "Unicode hex": "2756" },
    { "Typeface name": "Wingdings", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "11049", "Unicode hex": "2B29" },
    { "Typeface name": "Wingdings", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "8999", "Unicode hex": "2327" },
    { "Typeface name": "Wingdings", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "11193", "Unicode hex": "2BB9" },
    { "Typeface name": "Wingdings", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "8984", "Unicode hex": "2318" },
    { "Typeface name": "Wingdings", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "127989", "Unicode hex": "1F3F5" },
    { "Typeface name": "Wingdings", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "127990", "Unicode hex": "1F3F6" },
    { "Typeface name": "Wingdings", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "128630", "Unicode hex": "1F676" },
    { "Typeface name": "Wingdings", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "128631", "Unicode hex": "1F677" },
    { "Typeface name": "Wingdings", "Dingbat dec": "127", "Dingbat hex": "7F", "Unicode dec": "9647", "Unicode hex": "25AF" },
    { "Typeface name": "Wingdings", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "127243", "Unicode hex": "1F10B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "10112", "Unicode hex": "2780" },
    { "Typeface name": "Wingdings", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "10113", "Unicode hex": "2781" },
    { "Typeface name": "Wingdings", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "10114", "Unicode hex": "2782" },
    { "Typeface name": "Wingdings", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "10115", "Unicode hex": "2783" },
    { "Typeface name": "Wingdings", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "10116", "Unicode hex": "2784" },
    { "Typeface name": "Wingdings", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "10117", "Unicode hex": "2785" },
    { "Typeface name": "Wingdings", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "10118", "Unicode hex": "2786" },
    { "Typeface name": "Wingdings", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "10119", "Unicode hex": "2787" },
    { "Typeface name": "Wingdings", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "10120", "Unicode hex": "2788" },
    { "Typeface name": "Wingdings", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "10121", "Unicode hex": "2789" },
    { "Typeface name": "Wingdings", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "127244", "Unicode hex": "1F10C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "10122", "Unicode hex": "278A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "10123", "Unicode hex": "278B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "10124", "Unicode hex": "278C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "10125", "Unicode hex": "278D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "10126", "Unicode hex": "278E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "10127", "Unicode hex": "278F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "10128", "Unicode hex": "2790" },
    { "Typeface name": "Wingdings", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "10129", "Unicode hex": "2791" },
    { "Typeface name": "Wingdings", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "10130", "Unicode hex": "2792" },
    { "Typeface name": "Wingdings", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "10131", "Unicode hex": "2793" },
    { "Typeface name": "Wingdings", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "128610", "Unicode hex": "1F662" },
    { "Typeface name": "Wingdings", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "128608", "Unicode hex": "1F660" },
    { "Typeface name": "Wingdings", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "128609", "Unicode hex": "1F661" },
    { "Typeface name": "Wingdings", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "128611", "Unicode hex": "1F663" },
    { "Typeface name": "Wingdings", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "128606", "Unicode hex": "1F65E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "128604", "Unicode hex": "1F65C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "128605", "Unicode hex": "1F65D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "128607", "Unicode hex": "1F65F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "8729", "Unicode hex": "2219" },
    { "Typeface name": "Wingdings", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "8226", "Unicode hex": "2022" },
    { "Typeface name": "Wingdings", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "11037", "Unicode hex": "2B1D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "11096", "Unicode hex": "2B58" },
    { "Typeface name": "Wingdings", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "128902", "Unicode hex": "1F786" },
    { "Typeface name": "Wingdings", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "128904", "Unicode hex": "1F788" },
    { "Typeface name": "Wingdings", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "128906", "Unicode hex": "1F78A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "128907", "Unicode hex": "1F78B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "128319", "Unicode hex": "1F53F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "9642", "Unicode hex": "25AA" },
    { "Typeface name": "Wingdings", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "128910", "Unicode hex": "1F78E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "128961", "Unicode hex": "1F7C1" },
    { "Typeface name": "Wingdings", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "128965", "Unicode hex": "1F7C5" },
    { "Typeface name": "Wingdings", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "9733", "Unicode hex": "2605" },
    { "Typeface name": "Wingdings", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "128971", "Unicode hex": "1F7CB" },
    { "Typeface name": "Wingdings", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "128975", "Unicode hex": "1F7CF" },
    { "Typeface name": "Wingdings", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "128979", "Unicode hex": "1F7D3" },
    { "Typeface name": "Wingdings", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "128977", "Unicode hex": "1F7D1" },
    { "Typeface name": "Wingdings", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "11216", "Unicode hex": "2BD0" },
    { "Typeface name": "Wingdings", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "8982", "Unicode hex": "2316" },
    { "Typeface name": "Wingdings", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "11214", "Unicode hex": "2BCE" },
    { "Typeface name": "Wingdings", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "11215", "Unicode hex": "2BCF" },
    { "Typeface name": "Wingdings", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "11217", "Unicode hex": "2BD1" },
    { "Typeface name": "Wingdings", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "10026", "Unicode hex": "272A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "10032", "Unicode hex": "2730" },
    { "Typeface name": "Wingdings", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "128336", "Unicode hex": "1F550" },
    { "Typeface name": "Wingdings", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "128337", "Unicode hex": "1F551" },
    { "Typeface name": "Wingdings", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "128338", "Unicode hex": "1F552" },
    { "Typeface name": "Wingdings", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "128339", "Unicode hex": "1F553" },
    { "Typeface name": "Wingdings", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "128340", "Unicode hex": "1F554" },
    { "Typeface name": "Wingdings", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "128341", "Unicode hex": "1F555" },
    { "Typeface name": "Wingdings", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "128342", "Unicode hex": "1F556" },
    { "Typeface name": "Wingdings", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "128343", "Unicode hex": "1F557" },
    { "Typeface name": "Wingdings", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "128344", "Unicode hex": "1F558" },
    { "Typeface name": "Wingdings", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "128345", "Unicode hex": "1F559" },
    { "Typeface name": "Wingdings", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "128346", "Unicode hex": "1F55A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "128347", "Unicode hex": "1F55B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "11184", "Unicode hex": "2BB0" },
    { "Typeface name": "Wingdings", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "11185", "Unicode hex": "2BB1" },
    { "Typeface name": "Wingdings", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "11186", "Unicode hex": "2BB2" },
    { "Typeface name": "Wingdings", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "11187", "Unicode hex": "2BB3" },
    { "Typeface name": "Wingdings", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "11188", "Unicode hex": "2BB4" },
    { "Typeface name": "Wingdings", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "11189", "Unicode hex": "2BB5" },
    { "Typeface name": "Wingdings", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "11190", "Unicode hex": "2BB6" },
    { "Typeface name": "Wingdings", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "11191", "Unicode hex": "2BB7" },
    { "Typeface name": "Wingdings", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "128618", "Unicode hex": "1F66A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "128619", "Unicode hex": "1F66B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "128597", "Unicode hex": "1F655" },
    { "Typeface name": "Wingdings", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "128596", "Unicode hex": "1F654" },
    { "Typeface name": "Wingdings", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "128599", "Unicode hex": "1F657" },
    { "Typeface name": "Wingdings", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "128598", "Unicode hex": "1F656" },
    { "Typeface name": "Wingdings", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "128592", "Unicode hex": "1F650" },
    { "Typeface name": "Wingdings", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "128593", "Unicode hex": "1F651" },
    { "Typeface name": "Wingdings", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "128594", "Unicode hex": "1F652" },
    { "Typeface name": "Wingdings", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "128595", "Unicode hex": "1F653" },
    { "Typeface name": "Wingdings", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "9003", "Unicode hex": "232B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "8998", "Unicode hex": "2326" },
    { "Typeface name": "Wingdings", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "11160", "Unicode hex": "2B98" },
    { "Typeface name": "Wingdings", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "11162", "Unicode hex": "2B9A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "11161", "Unicode hex": "2B99" },
    { "Typeface name": "Wingdings", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "11163", "Unicode hex": "2B9B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "11144", "Unicode hex": "2B88" },
    { "Typeface name": "Wingdings", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "11146", "Unicode hex": "2B8A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "11145", "Unicode hex": "2B89" },
    { "Typeface name": "Wingdings", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "11147", "Unicode hex": "2B8B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "129128", "Unicode hex": "1F868" },
    { "Typeface name": "Wingdings", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "129130", "Unicode hex": "1F86A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "129129", "Unicode hex": "1F869" },
    { "Typeface name": "Wingdings", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "129131", "Unicode hex": "1F86B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "129132", "Unicode hex": "1F86C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "129133", "Unicode hex": "1F86D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "129135", "Unicode hex": "1F86F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "129134", "Unicode hex": "1F86E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "129144", "Unicode hex": "1F878" },
    { "Typeface name": "Wingdings", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "129146", "Unicode hex": "1F87A" },
    { "Typeface name": "Wingdings", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "129145", "Unicode hex": "1F879" },
    { "Typeface name": "Wingdings", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "129147", "Unicode hex": "1F87B" },
    { "Typeface name": "Wingdings", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "129148", "Unicode hex": "1F87C" },
    { "Typeface name": "Wingdings", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "129149", "Unicode hex": "1F87D" },
    { "Typeface name": "Wingdings", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "129151", "Unicode hex": "1F87F" },
    { "Typeface name": "Wingdings", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "129150", "Unicode hex": "1F87E" },
    { "Typeface name": "Wingdings", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "8678", "Unicode hex": "21E6" },
    { "Typeface name": "Wingdings", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "8680", "Unicode hex": "21E8" },
    { "Typeface name": "Wingdings", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "8679", "Unicode hex": "21E7" },
    { "Typeface name": "Wingdings", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "8681", "Unicode hex": "21E9" },
    { "Typeface name": "Wingdings", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "11012", "Unicode hex": "2B04" },
    { "Typeface name": "Wingdings", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "8691", "Unicode hex": "21F3" },
    { "Typeface name": "Wingdings", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "11009", "Unicode hex": "2B01" },
    { "Typeface name": "Wingdings", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "11008", "Unicode hex": "2B00" },
    { "Typeface name": "Wingdings", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "11011", "Unicode hex": "2B03" },
    { "Typeface name": "Wingdings", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "11010", "Unicode hex": "2B02" },
    { "Typeface name": "Wingdings", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "129196", "Unicode hex": "1F8AC" },
    { "Typeface name": "Wingdings", "Dingbat dec": "250", "Dingbat hex": "FA", "Unicode dec": "129197", "Unicode hex": "1F8AD" },
    { "Typeface name": "Wingdings", "Dingbat dec": "251", "Dingbat hex": "FB", "Unicode dec": "128502", "Unicode hex": "1F5F6" },
    { "Typeface name": "Wingdings", "Dingbat dec": "252", "Dingbat hex": "FC", "Unicode dec": "10003", "Unicode hex": "2713" },
    { "Typeface name": "Wingdings", "Dingbat dec": "253", "Dingbat hex": "FD", "Unicode dec": "128503", "Unicode hex": "1F5F7" },
    { "Typeface name": "Wingdings", "Dingbat dec": "254", "Dingbat hex": "FE", "Unicode dec": "128505", "Unicode hex": "1F5F9" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "128394", "Unicode hex": "1F58A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "128395", "Unicode hex": "1F58B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "128396", "Unicode hex": "1F58C" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "128397", "Unicode hex": "1F58D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "9988", "Unicode hex": "2704" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "9984", "Unicode hex": "2700" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "128382", "Unicode hex": "1F57E" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "128381", "Unicode hex": "1F57D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "128453", "Unicode hex": "1F5C5" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "128454", "Unicode hex": "1F5C6" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "128455", "Unicode hex": "1F5C7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "128456", "Unicode hex": "1F5C8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "128457", "Unicode hex": "1F5C9" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "128458", "Unicode hex": "1F5CA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "128459", "Unicode hex": "1F5CB" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "128460", "Unicode hex": "1F5CC" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "128461", "Unicode hex": "1F5CD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "128203", "Unicode hex": "1F4CB" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "128465", "Unicode hex": "1F5D1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "128468", "Unicode hex": "1F5D4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "128437", "Unicode hex": "1F5B5" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "128438", "Unicode hex": "1F5B6" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "128439", "Unicode hex": "1F5B7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "128440", "Unicode hex": "1F5B8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "128429", "Unicode hex": "1F5AD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "128431", "Unicode hex": "1F5AF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "128433", "Unicode hex": "1F5B1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "128402", "Unicode hex": "1F592" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "128403", "Unicode hex": "1F593" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "128408", "Unicode hex": "1F598" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "128409", "Unicode hex": "1F599" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "128410", "Unicode hex": "1F59A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "128411", "Unicode hex": "1F59B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "128072", "Unicode hex": "1F448" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "128073", "Unicode hex": "1F449" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "128412", "Unicode hex": "1F59C" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "128413", "Unicode hex": "1F59D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "128414", "Unicode hex": "1F59E" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "128415", "Unicode hex": "1F59F" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "128416", "Unicode hex": "1F5A0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "128417", "Unicode hex": "1F5A1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "128070", "Unicode hex": "1F446" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "128071", "Unicode hex": "1F447" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "128418", "Unicode hex": "1F5A2" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "128419", "Unicode hex": "1F5A3" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "128401", "Unicode hex": "1F591" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "128500", "Unicode hex": "1F5F4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "128504", "Unicode hex": "1F5F8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "128501", "Unicode hex": "1F5F5" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "9745", "Unicode hex": "2611" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "11197", "Unicode hex": "2BBD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "9746", "Unicode hex": "2612" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "11198", "Unicode hex": "2BBE" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "11199", "Unicode hex": "2BBF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "128711", "Unicode hex": "1F6C7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "10680", "Unicode hex": "29B8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "128625", "Unicode hex": "1F671" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "128628", "Unicode hex": "1F674" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "128626", "Unicode hex": "1F672" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "128627", "Unicode hex": "1F673" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "8253", "Unicode hex": "203D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "128633", "Unicode hex": "1F679" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "128634", "Unicode hex": "1F67A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "128635", "Unicode hex": "1F67B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "128614", "Unicode hex": "1F666" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "128612", "Unicode hex": "1F664" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "128613", "Unicode hex": "1F665" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "128615", "Unicode hex": "1F667" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "128602", "Unicode hex": "1F65A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "128600", "Unicode hex": "1F658" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "128601", "Unicode hex": "1F659" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "128603", "Unicode hex": "1F65B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "9450", "Unicode hex": "24EA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "9312", "Unicode hex": "2460" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "9313", "Unicode hex": "2461" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "9314", "Unicode hex": "2462" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "9315", "Unicode hex": "2463" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "9316", "Unicode hex": "2464" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "9317", "Unicode hex": "2465" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "9318", "Unicode hex": "2466" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "9319", "Unicode hex": "2467" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "9320", "Unicode hex": "2468" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "9321", "Unicode hex": "2469" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "9471", "Unicode hex": "24FF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "10102", "Unicode hex": "2776" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "10103", "Unicode hex": "2777" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "10104", "Unicode hex": "2778" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "10105", "Unicode hex": "2779" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "10106", "Unicode hex": "277A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "10107", "Unicode hex": "277B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "10108", "Unicode hex": "277C" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "10109", "Unicode hex": "277D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "10110", "Unicode hex": "277E" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "10111", "Unicode hex": "277F" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "9737", "Unicode hex": "2609" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "127765", "Unicode hex": "1F315" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "9789", "Unicode hex": "263D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "9790", "Unicode hex": "263E" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "11839", "Unicode hex": "2E3F" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "10013", "Unicode hex": "271D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "128327", "Unicode hex": "1F547" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "128348", "Unicode hex": "1F55C" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "128349", "Unicode hex": "1F55D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "128350", "Unicode hex": "1F55E" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "128351", "Unicode hex": "1F55F" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "128352", "Unicode hex": "1F560" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "128353", "Unicode hex": "1F561" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "128354", "Unicode hex": "1F562" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "128355", "Unicode hex": "1F563" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "128356", "Unicode hex": "1F564" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "128357", "Unicode hex": "1F565" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "128358", "Unicode hex": "1F566" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "128359", "Unicode hex": "1F567" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "128616", "Unicode hex": "1F668" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "128617", "Unicode hex": "1F669" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "8901", "Unicode hex": "22C5" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "128900", "Unicode hex": "1F784" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "10625", "Unicode hex": "2981" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "9679", "Unicode hex": "25CF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "9675", "Unicode hex": "25CB" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "128901", "Unicode hex": "1F785" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "128903", "Unicode hex": "1F787" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "128905", "Unicode hex": "1F789" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "8857", "Unicode hex": "2299" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "10687", "Unicode hex": "29BF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "128908", "Unicode hex": "1F78C" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "128909", "Unicode hex": "1F78D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "9726", "Unicode hex": "25FE" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "9632", "Unicode hex": "25A0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "9633", "Unicode hex": "25A1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "128913", "Unicode hex": "1F791" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "128914", "Unicode hex": "1F792" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "128915", "Unicode hex": "1F793" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "128916", "Unicode hex": "1F794" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "9635", "Unicode hex": "25A3" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "128917", "Unicode hex": "1F795" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "128918", "Unicode hex": "1F796" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "128919", "Unicode hex": "1F797" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "128920", "Unicode hex": "1F798" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "11049", "Unicode hex": "2B29" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "11045", "Unicode hex": "2B25" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "9671", "Unicode hex": "25C7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "128922", "Unicode hex": "1F79A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "9672", "Unicode hex": "25C8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "128923", "Unicode hex": "1F79B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "128924", "Unicode hex": "1F79C" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "128925", "Unicode hex": "1F79D" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "128926", "Unicode hex": "1F79E" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "11050", "Unicode hex": "2B2A" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "11047", "Unicode hex": "2B27" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "9674", "Unicode hex": "25CA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "128928", "Unicode hex": "1F7A0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "9686", "Unicode hex": "25D6" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "9687", "Unicode hex": "25D7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "11210", "Unicode hex": "2BCA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "11211", "Unicode hex": "2BCB" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "11200", "Unicode hex": "2BC0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "11201", "Unicode hex": "2BC1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "11039", "Unicode hex": "2B1F" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "11202", "Unicode hex": "2BC2" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "11043", "Unicode hex": "2B23" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "11042", "Unicode hex": "2B22" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "11203", "Unicode hex": "2BC3" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "11204", "Unicode hex": "2BC4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "128929", "Unicode hex": "1F7A1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "128930", "Unicode hex": "1F7A2" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "128931", "Unicode hex": "1F7A3" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "128932", "Unicode hex": "1F7A4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "128933", "Unicode hex": "1F7A5" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "128934", "Unicode hex": "1F7A6" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "128935", "Unicode hex": "1F7A7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "128936", "Unicode hex": "1F7A8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "128937", "Unicode hex": "1F7A9" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "128938", "Unicode hex": "1F7AA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "128939", "Unicode hex": "1F7AB" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "128940", "Unicode hex": "1F7AC" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "128941", "Unicode hex": "1F7AD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "128942", "Unicode hex": "1F7AE" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "128943", "Unicode hex": "1F7AF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "128944", "Unicode hex": "1F7B0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "128945", "Unicode hex": "1F7B1" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "128946", "Unicode hex": "1F7B2" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "128947", "Unicode hex": "1F7B3" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "128948", "Unicode hex": "1F7B4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "128949", "Unicode hex": "1F7B5" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "128950", "Unicode hex": "1F7B6" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "128951", "Unicode hex": "1F7B7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "128952", "Unicode hex": "1F7B8" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "128953", "Unicode hex": "1F7B9" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "128954", "Unicode hex": "1F7BA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "128955", "Unicode hex": "1F7BB" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "128956", "Unicode hex": "1F7BC" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "128957", "Unicode hex": "1F7BD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "128958", "Unicode hex": "1F7BE" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "128959", "Unicode hex": "1F7BF" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "128960", "Unicode hex": "1F7C0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "128962", "Unicode hex": "1F7C2" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "128964", "Unicode hex": "1F7C4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "128966", "Unicode hex": "1F7C6" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "128969", "Unicode hex": "1F7C9" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "128970", "Unicode hex": "1F7CA" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "10038", "Unicode hex": "2736" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "128972", "Unicode hex": "1F7CC" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "128974", "Unicode hex": "1F7CE" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "128976", "Unicode hex": "1F7D0" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "128978", "Unicode hex": "1F7D2" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "10041", "Unicode hex": "2739" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "128963", "Unicode hex": "1F7C3" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "128967", "Unicode hex": "1F7C7" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "10031", "Unicode hex": "272F" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "128973", "Unicode hex": "1F7CD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "128980", "Unicode hex": "1F7D4" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "11212", "Unicode hex": "2BCC" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "11213", "Unicode hex": "2BCD" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "8251", "Unicode hex": "203B" },
    { "Typeface name": "Wingdings 2", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "8258", "Unicode hex": "2042" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "11104", "Unicode hex": "2B60" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "11106", "Unicode hex": "2B62" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "11105", "Unicode hex": "2B61" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "11107", "Unicode hex": "2B63" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "11110", "Unicode hex": "2B66" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "11111", "Unicode hex": "2B67" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "11113", "Unicode hex": "2B69" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "11112", "Unicode hex": "2B68" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "11120", "Unicode hex": "2B70" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "11122", "Unicode hex": "2B72" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "11121", "Unicode hex": "2B71" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "11123", "Unicode hex": "2B73" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "11126", "Unicode hex": "2B76" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "11128", "Unicode hex": "2B78" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "11131", "Unicode hex": "2B7B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "11133", "Unicode hex": "2B7D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "11108", "Unicode hex": "2B64" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "11109", "Unicode hex": "2B65" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "11114", "Unicode hex": "2B6A" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "11116", "Unicode hex": "2B6C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "11115", "Unicode hex": "2B6B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "11117", "Unicode hex": "2B6D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "11085", "Unicode hex": "2B4D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "11168", "Unicode hex": "2BA0" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "11169", "Unicode hex": "2BA1" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "11170", "Unicode hex": "2BA2" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "11171", "Unicode hex": "2BA3" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "11172", "Unicode hex": "2BA4" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "11173", "Unicode hex": "2BA5" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "11174", "Unicode hex": "2BA6" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "11175", "Unicode hex": "2BA7" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "11152", "Unicode hex": "2B90" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "11153", "Unicode hex": "2B91" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "11154", "Unicode hex": "2B92" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "11155", "Unicode hex": "2B93" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "11136", "Unicode hex": "2B80" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "11139", "Unicode hex": "2B83" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "11134", "Unicode hex": "2B7E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "11135", "Unicode hex": "2B7F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "11140", "Unicode hex": "2B84" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "11142", "Unicode hex": "2B86" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "11141", "Unicode hex": "2B85" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "11143", "Unicode hex": "2B87" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "11151", "Unicode hex": "2B8F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "11149", "Unicode hex": "2B8D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "11150", "Unicode hex": "2B8E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "11148", "Unicode hex": "2B8C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "11118", "Unicode hex": "2B6E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "11119", "Unicode hex": "2B6F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "9099", "Unicode hex": "238B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "8996", "Unicode hex": "2324" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "8963", "Unicode hex": "2303" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "8997", "Unicode hex": "2325" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "9251", "Unicode hex": "2423" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "9085", "Unicode hex": "237D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "8682", "Unicode hex": "21EA" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "11192", "Unicode hex": "2BB8" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "129184", "Unicode hex": "1F8A0" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "129185", "Unicode hex": "1F8A1" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "129186", "Unicode hex": "1F8A2" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "129187", "Unicode hex": "1F8A3" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "129188", "Unicode hex": "1F8A4" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "129189", "Unicode hex": "1F8A5" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "129190", "Unicode hex": "1F8A6" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "129191", "Unicode hex": "1F8A7" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "129192", "Unicode hex": "1F8A8" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "129193", "Unicode hex": "1F8A9" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "129194", "Unicode hex": "1F8AA" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "129195", "Unicode hex": "1F8AB" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "129104", "Unicode hex": "1F850" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "129106", "Unicode hex": "1F852" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "129105", "Unicode hex": "1F851" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "129107", "Unicode hex": "1F853" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "129108", "Unicode hex": "1F854" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "129109", "Unicode hex": "1F855" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "129111", "Unicode hex": "1F857" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "129110", "Unicode hex": "1F856" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "129112", "Unicode hex": "1F858" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "129113", "Unicode hex": "1F859" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "9650", "Unicode hex": "25B2" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "9660", "Unicode hex": "25BC" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "9651", "Unicode hex": "25B3" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "9661", "Unicode hex": "25BD" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "9664", "Unicode hex": "25C0" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "9654", "Unicode hex": "25B6" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "9665", "Unicode hex": "25C1" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "9655", "Unicode hex": "25B7" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "9699", "Unicode hex": "25E3" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "9698", "Unicode hex": "25E2" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "9700", "Unicode hex": "25E4" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "9701", "Unicode hex": "25E5" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "128896", "Unicode hex": "1F780" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "128898", "Unicode hex": "1F782" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "128897", "Unicode hex": "1F781" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "128899", "Unicode hex": "1F783" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "11205", "Unicode hex": "2BC5" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "11206", "Unicode hex": "2BC6" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "11207", "Unicode hex": "2BC7" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "11208", "Unicode hex": "2BC8" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "11164", "Unicode hex": "2B9C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "11166", "Unicode hex": "2B9E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "11165", "Unicode hex": "2B9D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "11167", "Unicode hex": "2B9F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "129040", "Unicode hex": "1F810" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "129042", "Unicode hex": "1F812" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "129041", "Unicode hex": "1F811" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "129043", "Unicode hex": "1F813" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "129044", "Unicode hex": "1F814" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "129046", "Unicode hex": "1F816" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "129045", "Unicode hex": "1F815" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "129047", "Unicode hex": "1F817" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "129048", "Unicode hex": "1F818" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "129050", "Unicode hex": "1F81A" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "129049", "Unicode hex": "1F819" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "129051", "Unicode hex": "1F81B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "129052", "Unicode hex": "1F81C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "129054", "Unicode hex": "1F81E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "129053", "Unicode hex": "1F81D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "129055", "Unicode hex": "1F81F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "129024", "Unicode hex": "1F800" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "129026", "Unicode hex": "1F802" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "129025", "Unicode hex": "1F801" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "129027", "Unicode hex": "1F803" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "129028", "Unicode hex": "1F804" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "129030", "Unicode hex": "1F806" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "129029", "Unicode hex": "1F805" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "129031", "Unicode hex": "1F807" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "129032", "Unicode hex": "1F808" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "129034", "Unicode hex": "1F80A" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "129033", "Unicode hex": "1F809" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "129035", "Unicode hex": "1F80B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "129056", "Unicode hex": "1F820" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "129058", "Unicode hex": "1F822" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "129060", "Unicode hex": "1F824" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "129062", "Unicode hex": "1F826" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "129064", "Unicode hex": "1F828" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "129066", "Unicode hex": "1F82A" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "129068", "Unicode hex": "1F82C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "129180", "Unicode hex": "1F89C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "129181", "Unicode hex": "1F89D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "129182", "Unicode hex": "1F89E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "129183", "Unicode hex": "1F89F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "129070", "Unicode hex": "1F82E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "129072", "Unicode hex": "1F830" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "129074", "Unicode hex": "1F832" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "129076", "Unicode hex": "1F834" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "129078", "Unicode hex": "1F836" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "129080", "Unicode hex": "1F838" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "129082", "Unicode hex": "1F83A" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "129081", "Unicode hex": "1F839" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "129083", "Unicode hex": "1F83B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "129176", "Unicode hex": "1F898" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "129178", "Unicode hex": "1F89A" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "129177", "Unicode hex": "1F899" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "129179", "Unicode hex": "1F89B" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "129084", "Unicode hex": "1F83C" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "129086", "Unicode hex": "1F83E" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "129085", "Unicode hex": "1F83D" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "129087", "Unicode hex": "1F83F" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "129088", "Unicode hex": "1F840" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "129090", "Unicode hex": "1F842" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "129089", "Unicode hex": "1F841" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "129091", "Unicode hex": "1F843" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "129092", "Unicode hex": "1F844" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "129094", "Unicode hex": "1F846" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "129093", "Unicode hex": "1F845" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "129095", "Unicode hex": "1F847" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "11176", "Unicode hex": "2BA8" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "11177", "Unicode hex": "2BA9" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "11178", "Unicode hex": "2BAA" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "11179", "Unicode hex": "2BAB" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "11180", "Unicode hex": "2BAC" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "11181", "Unicode hex": "2BAD" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "11182", "Unicode hex": "2BAE" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "11183", "Unicode hex": "2BAF" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "129120", "Unicode hex": "1F860" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "129122", "Unicode hex": "1F862" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "129121", "Unicode hex": "1F861" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "129123", "Unicode hex": "1F863" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "129124", "Unicode hex": "1F864" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "129125", "Unicode hex": "1F865" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "129127", "Unicode hex": "1F867" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "129126", "Unicode hex": "1F866" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "129136", "Unicode hex": "1F870" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "129138", "Unicode hex": "1F872" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "129137", "Unicode hex": "1F871" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "129139", "Unicode hex": "1F873" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "129140", "Unicode hex": "1F874" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "129141", "Unicode hex": "1F875" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "129143", "Unicode hex": "1F877" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "129142", "Unicode hex": "1F876" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "129152", "Unicode hex": "1F880" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "129154", "Unicode hex": "1F882" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "129153", "Unicode hex": "1F881" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "129155", "Unicode hex": "1F883" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "129156", "Unicode hex": "1F884" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "129157", "Unicode hex": "1F885" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "129159", "Unicode hex": "1F887" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "129158", "Unicode hex": "1F886" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "129168", "Unicode hex": "1F890" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "129170", "Unicode hex": "1F892" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "129169", "Unicode hex": "1F891" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "129171", "Unicode hex": "1F893" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "129172", "Unicode hex": "1F894" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "129174", "Unicode hex": "1F896" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "129173", "Unicode hex": "1F895" },
    { "Typeface name": "Wingdings 3", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "129175", "Unicode hex": "1F897" }
  ];
  return gt.default = e, gt;
}
var Yo;
function xl() {
  if (Yo) return Ge;
  Yo = 1;
  var e = Ge && Ge.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.hex = Ge.dec = Ge.codePoint = void 0;
  for (var n = e(vl()), t = {}, r = String.fromCodePoint ? String.fromCodePoint : g, c = 0, i = n.default; c < i.length; c++) {
    var a = i[c], o = parseInt(a["Unicode dec"], 10), u = {
      codePoint: o,
      string: r(o)
    };
    t[a["Typeface name"].toUpperCase() + "_" + a["Dingbat dec"]] = u;
  }
  function l(h, y) {
    return t[h.toUpperCase() + "_" + y];
  }
  Ge.codePoint = l;
  function b(h, y) {
    return l(h, parseInt(y, 10));
  }
  Ge.dec = b;
  function m(h, y) {
    return l(h, parseInt(y, 16));
  }
  Ge.hex = m;
  function g(h) {
    if (h <= 65535)
      return String.fromCharCode(h);
    var y = Math.floor((h - 65536) / 1024) + 55296, f = (h - 65536) % 1024 + 56320;
    return String.fromCharCode(y, f);
  }
  return Ge;
}
var un = {}, Ko;
function bs() {
  if (Ko) return un;
  Ko = 1;
  var e = Be;
  un.paragraph = n, un.run = t, un._elements = c, un._elementsOfType = r, un.getDescendantsOfType = i, un.getDescendants = a;
  function n(u) {
    return r("paragraph", u);
  }
  function t(u) {
    return r("run", u);
  }
  function r(u, l) {
    return c(function(b) {
      return b.type === u ? l(b) : b;
    });
  }
  function c(u) {
    return function l(b) {
      if (b.children) {
        var m = e.map(b.children, l);
        b = e.extend(b, { children: m });
      }
      return u(b);
    };
  }
  function i(u, l) {
    return a(u).filter(function(b) {
      return b.type === l;
    });
  }
  function a(u) {
    var l = [];
    return o(u, function(b) {
      l.push(b);
    }), l;
  }
  function o(u, l) {
    u.children && u.children.forEach(function(b) {
      o(b, l), l(b);
    });
  }
  return un;
}
var mt = {}, Qo;
function _l() {
  if (Qo) return mt;
  Qo = 1, mt.uriToZipEntryName = e, mt.replaceFragment = n;
  function e(t, r) {
    return r.charAt(0) === "/" ? r.substr(1) : t + "/" + r;
  }
  function n(t, r) {
    var c = t.indexOf("#");
    return c !== -1 && (t = t.substring(0, c)), t + "#" + r;
  }
  return mt;
}
var Jo;
function Ul() {
  if (Jo) return pt;
  Jo = 1, pt.createBodyReader = u, pt._readNumberingProperties = b;
  var e = xl(), n = Be, t = Sn(), r = an().Result, c = an().warning, i = ha(), a = bs(), o = _l();
  function u(_) {
    return {
      readXmlElement: function(U) {
        return new l(_).readXmlElement(U);
      },
      readXmlElements: function(U) {
        return new l(_).readXmlElements(U);
      }
    };
  }
  function l(_) {
    var U = [], E = [], S = [], A = _.relationships, I = _.contentTypes, Z = _.docxFile, T = _.files, R = _.numbering, x = _.styles;
    function z(K) {
      var oe = K.map(W);
      return d(oe);
    }
    function W(K) {
      if (K.type === "element") {
        var oe = N[K.name];
        if (oe)
          return oe(K);
        if (!Object.prototype.hasOwnProperty.call(g, K.name)) {
          var de = c("An unrecognised element was ignored: " + K.name);
          return h([de]);
        }
      }
      return y();
    }
    function O(K) {
      return ae(K).map(function(oe) {
        return {
          type: "paragraphProperties",
          styleId: oe.styleId,
          styleName: oe.name,
          alignment: K.firstOrEmpty("w:jc").attributes["w:val"],
          numbering: b(oe.styleId, K.firstOrEmpty("w:numPr"), R),
          indent: G(K.firstOrEmpty("w:ind"))
        };
      });
    }
    function G(K) {
      return {
        start: K.attributes["w:start"] || K.attributes["w:left"],
        end: K.attributes["w:end"] || K.attributes["w:right"],
        firstLine: K.attributes["w:firstLine"],
        hanging: K.attributes["w:hanging"]
      };
    }
    function q(K) {
      return J(K).map(function(oe) {
        var de = K.firstOrEmpty("w:sz").attributes["w:val"], ye = /^[0-9]+$/.test(de) ? parseInt(de, 10) / 2 : null;
        return {
          type: "runProperties",
          styleId: oe.styleId,
          styleName: oe.name,
          verticalAlignment: K.firstOrEmpty("w:vertAlign").attributes["w:val"],
          font: K.firstOrEmpty("w:rFonts").attributes["w:ascii"],
          fontSize: ye,
          isBold: L(K.first("w:b")),
          isUnderline: Q(K.first("w:u")),
          isItalic: L(K.first("w:i")),
          isStrikethrough: L(K.first("w:strike")),
          isAllCaps: L(K.first("w:caps")),
          isSmallCaps: L(K.first("w:smallCaps")),
          highlight: re(K.firstOrEmpty("w:highlight").attributes["w:val"])
        };
      });
    }
    function Q(K) {
      if (K) {
        var oe = K.attributes["w:val"];
        return oe !== void 0 && oe !== "false" && oe !== "0" && oe !== "none";
      } else
        return !1;
    }
    function L(K) {
      if (K) {
        var oe = K.attributes["w:val"];
        return oe !== "false" && oe !== "0";
      } else
        return !1;
    }
    function k(K) {
      return K !== "false" && K !== "0";
    }
    function re(K) {
      return !K || K === "none" ? null : K;
    }
    function ae(K) {
      return fe(K, "w:pStyle", "Paragraph", x.findParagraphStyleById);
    }
    function J(K) {
      return fe(K, "w:rStyle", "Run", x.findCharacterStyleById);
    }
    function ce(K) {
      return fe(K, "w:tblStyle", "Table", x.findTableStyleById);
    }
    function fe(K, oe, de, ye) {
      var De = [], Ue = K.first(oe), Se = null, Re = null;
      if (Ue && (Se = Ue.attributes["w:val"], Se)) {
        var Qe = ye(Se);
        Qe ? Re = Qe.name : De.push(_e(de, Se));
      }
      return s({ styleId: Se, name: Re }, De);
    }
    function le(K) {
      var oe = K.attributes["w:fldCharType"];
      if (oe === "begin")
        U.push({ type: "begin", fldChar: K }), E = [];
      else if (oe === "end") {
        var de = U.pop();
        if (de.type === "begin" && (de = ge(de)), de.type === "checkbox")
          return f(t.checkbox({
            checked: de.checked
          }));
      } else if (oe === "separate") {
        var ye = U.pop(), De = ge(ye);
        U.push(De);
      }
      return y();
    }
    function he() {
      var K = n.last(U.filter(function(oe) {
        return oe.type === "hyperlink";
      }));
      return K ? K.options : null;
    }
    function ge(K) {
      return be(
        E.join(""),
        K.type === "begin" ? K.fldChar : i.emptyElement
      );
    }
    function be(K, oe) {
      var de = /\s*HYPERLINK "(.*)"/.exec(K);
      if (de)
        return { type: "hyperlink", options: { href: de[1] } };
      var ye = /\s*HYPERLINK\s+\\l\s+"(.*)"/.exec(K);
      if (ye)
        return { type: "hyperlink", options: { anchor: ye[1] } };
      var De = /\s*FORMCHECKBOX\s*/.exec(K);
      if (De) {
        var Ue = oe.firstOrEmpty("w:ffData").firstOrEmpty("w:checkBox"), Se = Ue.first("w:checked"), Re = Se == null ? L(Ue.first("w:default")) : L(Se);
        return { type: "checkbox", checked: Re };
      }
      return { type: "unknown" };
    }
    function Te(K) {
      return E.push(K.text()), y();
    }
    function Ae(K) {
      var oe = K.attributes["w:font"], de = K.attributes["w:char"], ye = e.hex(oe, de);
      return ye == null && /^F0..$/.test(de) && (ye = e.hex(oe, de.substring(2))), ye == null ? h([c(
        "A w:sym element with an unsupported character was ignored: char " + de + " in font " + oe
      )]) : f(new t.Text(ye.string));
    }
    function v(K) {
      return function(oe) {
        var de = oe.attributes["w:id"];
        return f(new t.NoteReference({
          noteType: K,
          noteId: de
        }));
      };
    }
    function $(K) {
      return f(t.commentReference({
        commentId: K.attributes["w:id"]
      }));
    }
    function j(K) {
      return z(K.children);
    }
    var N = {
      "w:p": function(K) {
        var oe = K.firstOrEmpty("w:pPr"), de = !!oe.firstOrEmpty("w:rPr").first("w:del");
        if (de)
          return K.children.forEach(function(De) {
            S.push(De);
          }), y();
        var ye = K.children;
        return S.length > 0 && (ye = S.concat(ye), S = []), p.map(
          O(oe),
          z(ye),
          function(De, Ue) {
            return new t.Paragraph(Ue, De);
          }
        ).insertExtra();
      },
      "w:r": function(K) {
        return p.map(
          q(K.firstOrEmpty("w:rPr")),
          z(K.children),
          function(oe, de) {
            var ye = he();
            return ye !== null && (de = [new t.Hyperlink(de, ye)]), new t.Run(de, oe);
          }
        );
      },
      "w:fldChar": le,
      "w:instrText": Te,
      "w:t": function(K) {
        return f(new t.Text(K.text()));
      },
      "w:tab": function(K) {
        return f(new t.Tab());
      },
      "w:noBreakHyphen": function() {
        return f(new t.Text("‑"));
      },
      "w:softHyphen": function(K) {
        return f(new t.Text("­"));
      },
      "w:sym": Ae,
      "w:hyperlink": function(K) {
        var oe = K.attributes["r:id"], de = K.attributes["w:anchor"];
        return z(K.children).map(function(ye) {
          function De(Se) {
            var Re = K.attributes["w:tgtFrame"] || null;
            return new t.Hyperlink(
              ye,
              n.extend({ targetFrame: Re }, Se)
            );
          }
          if (oe) {
            var Ue = A.findTargetByRelationshipId(oe);
            return de && (Ue = o.replaceFragment(Ue, de)), De({ href: Ue });
          } else return de ? De({ anchor: de }) : ye;
        });
      },
      "w:tbl": B,
      "w:tr": ie,
      "w:tc": ne,
      "w:footnoteReference": v("footnote"),
      "w:endnoteReference": v("endnote"),
      "w:commentReference": $,
      "w:br": function(K) {
        var oe = K.attributes["w:type"];
        return oe == null || oe === "textWrapping" ? f(t.lineBreak) : oe === "page" ? f(t.pageBreak) : oe === "column" ? f(t.columnBreak) : h([c("Unsupported break type: " + oe)]);
      },
      "w:bookmarkStart": function(K) {
        var oe = K.attributes["w:name"];
        return oe === "_GoBack" ? y() : f(new t.BookmarkStart({ name: oe }));
      },
      "mc:AlternateContent": function(K) {
        return j(K.firstOrEmpty("mc:Fallback"));
      },
      "w:sdt": function(K) {
        var oe = z(K.firstOrEmpty("w:sdtContent").children);
        return oe.map(function(de) {
          var ye = K.firstOrEmpty("w:sdtPr").first("wordml:checkbox");
          if (ye) {
            var De = ye.first("wordml:checked"), Ue = !!De && k(
              De.attributes["wordml:val"]
            ), Se = t.checkbox({
              checked: Ue
            }), Re = !1, Qe = de.map(a._elementsOfType(
              t.types.text,
              function(F) {
                return F.value.length > 0 && !Re ? (Re = !0, Se) : F;
              }
            ));
            return Re ? Qe : Se;
          } else
            return de;
        });
      },
      "w:ins": j,
      "w:object": j,
      "w:smartTag": j,
      "w:drawing": j,
      "w:pict": function(K) {
        return j(K).toExtra();
      },
      "v:roundrect": j,
      "v:shape": j,
      "v:textbox": j,
      "w:txbxContent": j,
      "wp:inline": X,
      "wp:anchor": X,
      "v:imagedata": pe,
      "v:group": j,
      "v:rect": j
    };
    return {
      readXmlElement: W,
      readXmlElements: z
    };
    function B(K) {
      var oe = V(K.firstOrEmpty("w:tblPr"));
      return z(K.children).flatMap(M).flatMap(function(de) {
        return oe.map(function(ye) {
          return t.Table(de, ye);
        });
      });
    }
    function V(K) {
      return ce(K).map(function(oe) {
        return {
          styleId: oe.styleId,
          styleName: oe.name
        };
      });
    }
    function ie(K) {
      var oe = K.firstOrEmpty("w:trPr"), de = !!oe.first("w:del");
      if (de)
        return y();
      var ye = !!oe.first("w:tblHeader");
      return z(K.children).map(function(De) {
        return t.TableRow(De, { isHeader: ye });
      });
    }
    function ne(K) {
      return z(K.children).map(function(oe) {
        var de = K.firstOrEmpty("w:tcPr"), ye = de.firstOrEmpty("w:gridSpan").attributes["w:val"], De = ye ? parseInt(ye, 10) : 1, Ue = t.TableCell(oe, { colSpan: De });
        return Ue._vMerge = H(de), Ue;
      });
    }
    function H(K) {
      var oe = K.first("w:vMerge");
      if (oe) {
        var de = oe.attributes["w:val"];
        return de === "continue" || !de;
      } else
        return null;
    }
    function M(K) {
      var oe = n.any(K, function(De) {
        return De.type !== t.types.tableRow;
      });
      if (oe)
        return s(K, [c(
          "unexpected non-row element in table, cell merging may be incorrect"
        )]);
      var de = n.any(K, function(De) {
        return n.any(De.children, function(Ue) {
          return Ue.type !== t.types.tableCell;
        });
      });
      if (de)
        return s(K, [c(
          "unexpected non-cell element in table row, cell merging may be incorrect"
        )]);
      var ye = {};
      return K.forEach(function(De) {
        var Ue = 0;
        De.children.forEach(function(Se) {
          Se._vMerge && ye[Ue] ? ye[Ue].rowSpan++ : (ye[Ue] = Se, Se._vMerge = !1), Ue += Se.colSpan;
        });
      }), K.forEach(function(De) {
        De.children = De.children.filter(function(Ue) {
          return !Ue._vMerge;
        }), De.children.forEach(function(Ue) {
          delete Ue._vMerge;
        });
      }), f(K);
    }
    function X(K) {
      var oe = K.getElementsByTagName("a:graphic").getElementsByTagName("a:graphicData").getElementsByTagName("pic:pic").getElementsByTagName("pic:blipFill").getElementsByTagName("a:blip");
      return d(oe.map(Y.bind(null, K)));
    }
    function Y(K, oe) {
      var de = K.first("wp:docPr").attributes, ye = te(de.descr) ? de.title : de.descr, De = ue(oe);
      return De === null ? h([c("Could not find image file for a:blip element")]) : me(De, ye);
    }
    function te(K) {
      return K == null || /^\s*$/.test(K);
    }
    function ue(K) {
      var oe = K.attributes["r:embed"], de = K.attributes["r:link"];
      if (oe)
        return xe(oe);
      if (de) {
        var ye = A.findTargetByRelationshipId(de);
        return {
          path: ye,
          read: T.read.bind(T, ye)
        };
      } else
        return null;
    }
    function pe(K) {
      var oe = K.attributes["r:id"];
      return oe ? me(
        xe(oe),
        K.attributes["o:title"]
      ) : h([c("A v:imagedata element without a relationship ID was ignored")]);
    }
    function xe(K) {
      var oe = o.uriToZipEntryName("word", A.findTargetByRelationshipId(K));
      return {
        path: oe,
        read: Z.read.bind(Z, oe)
      };
    }
    function me(K, oe) {
      var de = I.findContentType(K.path), ye = t.Image({
        readImage: K.read,
        altText: oe,
        contentType: de
      }), De = m[de] ? [] : c("Image of type " + de + " is unlikely to display in web browsers");
      return s(ye, De);
    }
    function _e(K, oe) {
      return c(
        K + " style with ID " + oe + " was referenced but not defined in the document"
      );
    }
  }
  function b(_, U, E) {
    var S = U.firstOrEmpty("w:ilvl").attributes["w:val"], A = U.firstOrEmpty("w:numId").attributes["w:val"];
    if (S !== void 0 && A !== void 0)
      return E.findLevel(A, S);
    if (_ != null) {
      var I = E.findLevelByParagraphStyleId(_);
      if (I != null)
        return I;
    }
    return null;
  }
  var m = {
    "image/png": !0,
    "image/gif": !0,
    "image/jpeg": !0,
    "image/svg+xml": !0,
    "image/tiff": !0
  }, g = {
    "office-word:wrap": !0,
    "v:shadow": !0,
    "v:shapetype": !0,
    "w:annotationRef": !0,
    "w:bookmarkEnd": !0,
    "w:sectPr": !0,
    "w:proofErr": !0,
    "w:lastRenderedPageBreak": !0,
    "w:commentRangeStart": !0,
    "w:commentRangeEnd": !0,
    "w:del": !0,
    "w:footnoteRef": !0,
    "w:endnoteRef": !0,
    "w:pPr": !0,
    "w:rPr": !0,
    "w:tblPr": !0,
    "w:tblGrid": !0,
    "w:trPr": !0,
    "w:tcPr": !0
  };
  function h(_) {
    return new p(null, null, _);
  }
  function y() {
    return new p(null);
  }
  function f(_) {
    return new p(_);
  }
  function s(_, U) {
    return new p(_, null, U);
  }
  function p(_, U, E) {
    this.value = _ || [], this.extra = U || [], this._result = new r({
      element: this.value,
      extra: U
    }, E), this.messages = this._result.messages;
  }
  p.prototype.toExtra = function() {
    return new p(null, D(this.extra, this.value), this.messages);
  }, p.prototype.insertExtra = function() {
    var _ = this.extra;
    return _ && _.length ? new p(D(this.value, _), null, this.messages) : this;
  }, p.prototype.map = function(_) {
    var U = this._result.map(function(E) {
      return _(E.element);
    });
    return new p(U.value, this.extra, U.messages);
  }, p.prototype.flatMap = function(_) {
    var U = this._result.flatMap(function(E) {
      return _(E.element)._result;
    });
    return new p(U.value.element, D(this.extra, U.value.extra), U.messages);
  }, p.map = function(_, U, E) {
    return new p(
      E(_.value, U.value),
      D(_.extra, U.extra),
      _.messages.concat(U.messages)
    );
  };
  function d(_) {
    var U = r.combine(n.pluck(_, "_result"));
    return new p(
      n.flatten(n.pluck(U.value, "element")),
      n.filter(n.flatten(n.pluck(U.value, "extra")), w),
      U.messages
    );
  }
  function D(_, U) {
    return n.flatten([_, U]);
  }
  function w(_) {
    return _;
  }
  return pt;
}
var ei = {}, ec;
function Tl() {
  if (ec) return ei;
  ec = 1, ei.DocumentXmlReader = t;
  var e = Sn(), n = an().Result;
  function t(r) {
    var c = r.bodyReader;
    function i(a) {
      var o = a.first("w:body");
      if (o == null)
        throw new Error("Could not find the body element: are you sure this is a docx file?");
      var u = c.readXmlElements(o.children).map(function(l) {
        return new e.Document(l, {
          notes: r.notes,
          comments: r.comments
        });
      });
      return new n(u.value, u.messages);
    }
    return {
      convertXmlToDocument: i
    };
  }
  return ei;
}
var Gn = {}, nc;
function wl() {
  if (nc) return Gn;
  nc = 1, Gn.readRelationships = e, Gn.defaultValue = new n([]), Gn.Relationships = n;
  function e(t) {
    var r = [];
    return t.children.forEach(function(c) {
      if (c.name === "relationships:Relationship") {
        var i = {
          relationshipId: c.attributes.Id,
          target: c.attributes.Target,
          type: c.attributes.Type
        };
        r.push(i);
      }
    }), new n(r);
  }
  function n(t) {
    var r = {};
    t.forEach(function(i) {
      r[i.relationshipId] = i.target;
    });
    var c = {};
    return t.forEach(function(i) {
      c[i.type] || (c[i.type] = []), c[i.type].push(i.target);
    }), {
      findTargetByRelationshipId: function(i) {
        return r[i];
      },
      findTargetsByType: function(i) {
        return c[i] || [];
      }
    };
  }
  return Gn;
}
var bt = {}, tc;
function El() {
  if (tc) return bt;
  tc = 1, bt.readContentTypesFromXml = n;
  var e = {
    png: "png",
    gif: "gif",
    jpeg: "jpeg",
    jpg: "jpeg",
    tif: "tiff",
    tiff: "tiff",
    bmp: "bmp"
  };
  bt.defaultContentTypes = t({}, {});
  function n(r) {
    var c = {}, i = {};
    return r.children.forEach(function(a) {
      if (a.name === "content-types:Default" && (c[a.attributes.Extension] = a.attributes.ContentType), a.name === "content-types:Override") {
        var o = a.attributes.PartName;
        o.charAt(0) === "/" && (o = o.substring(1)), i[o] = a.attributes.ContentType;
      }
    }), t(i, c);
  }
  function t(r, c) {
    return {
      findContentType: function(i) {
        var a = r[i];
        if (a)
          return a;
        var o = i.split("."), u = o[o.length - 1];
        if (c.hasOwnProperty(u))
          return c[u];
        var l = e[u.toLowerCase()];
        return l ? "image/" + l : null;
      }
    };
  }
  return bt;
}
var Zn = {}, rc;
function Al() {
  if (rc) return Zn;
  rc = 1;
  var e = Be;
  Zn.readNumberingXml = t, Zn.Numbering = n, Zn.defaultNumbering = new n({}, {});
  function n(a, o, u) {
    var l = e.flatten(e.values(o).map(function(h) {
      return e.values(h.levels);
    })), b = e.indexBy(
      l.filter(function(h) {
        return h.paragraphStyleId != null;
      }),
      "paragraphStyleId"
    );
    function m(h, y) {
      var f = a[h];
      if (f) {
        var s = o[f.abstractNumId];
        if (s) {
          if (s.numStyleLink == null)
            return o[f.abstractNumId].levels[y];
          var p = u.findNumberingStyleById(s.numStyleLink);
          return m(p.numId, y);
        } else return null;
      } else
        return null;
    }
    function g(h) {
      return b[h] || null;
    }
    return {
      findLevel: m,
      findLevelByParagraphStyleId: g
    };
  }
  function t(a, o) {
    if (!o || !o.styles)
      throw new Error("styles is missing");
    var u = r(a), l = i(a);
    return new n(l, u, o.styles);
  }
  function r(a) {
    var o = {};
    return a.getElementsByTagName("w:abstractNum").forEach(function(u) {
      var l = u.attributes["w:abstractNumId"];
      o[l] = c(u);
    }), o;
  }
  function c(a) {
    var o = {};
    a.getElementsByTagName("w:lvl").forEach(function(l) {
      var b = l.attributes["w:ilvl"], m = l.firstOrEmpty("w:numFmt").attributes["w:val"], g = l.firstOrEmpty("w:pStyle").attributes["w:val"];
      o[b] = {
        isOrdered: m !== "bullet",
        level: b,
        paragraphStyleId: g
      };
    });
    var u = a.firstOrEmpty("w:numStyleLink").attributes["w:val"];
    return { levels: o, numStyleLink: u };
  }
  function i(a) {
    var o = {};
    return a.getElementsByTagName("w:num").forEach(function(u) {
      var l = u.attributes["w:numId"], b = u.first("w:abstractNumId").attributes["w:val"];
      o[l] = { abstractNumId: b };
    }), o;
  }
  return Zn;
}
var $n = {}, ic;
function Fl() {
  if (ic) return $n;
  ic = 1, $n.readStylesXml = n, $n.Styles = e, $n.defaultStyles = new e({}, {});
  function e(i, a, o, u) {
    return {
      findParagraphStyleById: function(l) {
        return i[l];
      },
      findCharacterStyleById: function(l) {
        return a[l];
      },
      findTableStyleById: function(l) {
        return o[l];
      },
      findNumberingStyleById: function(l) {
        return u[l];
      }
    };
  }
  e.EMPTY = new e({}, {}, {}, {});
  function n(i) {
    var a = {}, o = {}, u = {}, l = {}, b = {
      paragraph: a,
      character: o,
      table: u
    };
    return i.getElementsByTagName("w:style").forEach(function(m) {
      var g = t(m);
      if (g.type === "numbering")
        l[g.styleId] = c(m);
      else {
        var h = b[g.type];
        h && (h[g.styleId] = g);
      }
    }), new e(a, o, u, l);
  }
  function t(i) {
    var a = i.attributes["w:type"], o = i.attributes["w:styleId"], u = r(i);
    return { type: a, styleId: o, name: u };
  }
  function r(i) {
    var a = i.first("w:name");
    return a ? a.attributes["w:val"] : null;
  }
  function c(i) {
    var a = i.firstOrEmpty("w:pPr").firstOrEmpty("w:numPr").firstOrEmpty("w:numId").attributes["w:val"];
    return { numId: a };
  }
  return $n;
}
var Rn = {}, ac;
function Cl() {
  if (ac) return Rn;
  ac = 1;
  var e = Sn(), n = an().Result;
  Rn.createFootnotesReader = t.bind(Rn, "footnote"), Rn.createEndnotesReader = t.bind(Rn, "endnote");
  function t(r, c) {
    function i(u) {
      return n.combine(u.getElementsByTagName("w:" + r).filter(a).map(o));
    }
    function a(u) {
      var l = u.attributes["w:type"];
      return l !== "continuationSeparator" && l !== "separator";
    }
    function o(u) {
      var l = u.attributes["w:id"];
      return c.readXmlElements(u.children).map(function(b) {
        return e.Note({ noteType: r, noteId: l, body: b });
      });
    }
    return i;
  }
  return Rn;
}
var ni = {}, oc;
function Sl() {
  if (oc) return ni;
  oc = 1;
  var e = Sn(), n = an().Result;
  function t(r) {
    function c(a) {
      return n.combine(a.getElementsByTagName("w:comment").map(i));
    }
    function i(a) {
      var o = a.attributes["w:id"];
      function u(l) {
        return (a.attributes[l] || "").trim() || null;
      }
      return r.readXmlElements(a.children).map(function(l) {
        return e.comment({
          commentId: o,
          body: l,
          authorName: u("w:author"),
          authorInitials: u("w:initials")
        });
      });
    }
    return c;
  }
  return ni.createCommentsReader = t, ni;
}
var ti = {}, cc;
function Bl() {
  if (cc) return ti;
  cc = 1;
  var e = mn();
  ti.Files = n;
  function n() {
    function t(r) {
      return e.reject(new Error("could not open external image: '" + r + `'
cannot open linked files from a web browser`));
    }
    return {
      read: t
    };
  }
  return ti;
}
var uc;
function kl() {
  if (uc) return ct;
  uc = 1, ct.read = y, ct._findPartPaths = f;
  var e = mn(), n = Sn(), t = an().Result, r = fs(), c = Dl().readXmlFromZipFile, i = Ul().createBodyReader, a = Tl().DocumentXmlReader, o = wl(), u = El(), l = Al(), b = Fl(), m = Cl(), g = Sl(), h = Bl().Files;
  function y(A, I) {
    return I = I || {}, e.props({
      contentTypes: _(A),
      partPaths: f(A),
      docxFile: A,
      files: I.path ? h.relativeToFile(I.path) : new h(null)
    }).also(function(Z) {
      return {
        styles: E(A, Z.partPaths.styles)
      };
    }).also(function(Z) {
      return {
        numbering: U(A, Z.partPaths.numbering, Z.styles)
      };
    }).also(function(Z) {
      return {
        footnotes: D(Z.partPaths.footnotes, Z, function(T, R) {
          return R ? m.createFootnotesReader(T)(R) : new t([]);
        }),
        endnotes: D(Z.partPaths.endnotes, Z, function(T, R) {
          return R ? m.createEndnotesReader(T)(R) : new t([]);
        }),
        comments: D(Z.partPaths.comments, Z, function(T, R) {
          return R ? g.createCommentsReader(T)(R) : new t([]);
        })
      };
    }).also(function(Z) {
      return {
        notes: Z.footnotes.flatMap(function(T) {
          return Z.endnotes.map(function(R) {
            return new n.Notes(T.concat(R));
          });
        })
      };
    }).then(function(Z) {
      return D(Z.partPaths.mainDocument, Z, function(T, R) {
        return Z.notes.flatMap(function(x) {
          return Z.comments.flatMap(function(z) {
            var W = new a({
              bodyReader: T,
              notes: x,
              comments: z
            });
            return W.convertXmlToDocument(R);
          });
        });
      });
    });
  }
  function f(A) {
    return S(A).then(function(I) {
      var Z = s({
        docxFile: A,
        relationships: I,
        relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        basePath: "",
        fallbackPath: "word/document.xml"
      });
      if (!A.exists(Z))
        throw new Error("Could not find main document part. Are you sure this is a valid .docx file?");
      return d({
        filename: w(Z),
        readElement: o.readRelationships,
        defaultValue: o.defaultValue
      })(A).then(function(T) {
        function R(x) {
          return s({
            docxFile: A,
            relationships: T,
            relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/" + x,
            basePath: r.splitPath(Z).dirname,
            fallbackPath: "word/" + x + ".xml"
          });
        }
        return {
          mainDocument: Z,
          comments: R("comments"),
          endnotes: R("endnotes"),
          footnotes: R("footnotes"),
          numbering: R("numbering"),
          styles: R("styles")
        };
      });
    });
  }
  function s(A) {
    var I = A.docxFile, Z = A.relationships, T = A.relationshipType, R = A.basePath, x = A.fallbackPath, z = Z.findTargetsByType(T), W = z.map(function(G) {
      return p(r.joinPath(R, G), "/");
    }), O = W.filter(function(G) {
      return I.exists(G);
    });
    return O.length === 0 ? x : O[0];
  }
  function p(A, I) {
    return A.substring(0, I.length) === I ? A.substring(I.length) : A;
  }
  function d(A) {
    return function(I) {
      return c(I, A.filename).then(function(Z) {
        return Z ? A.readElement(Z) : A.defaultValue;
      });
    };
  }
  function D(A, I, Z) {
    var T = d({
      filename: w(A),
      readElement: o.readRelationships,
      defaultValue: o.defaultValue
    });
    return T(I.docxFile).then(function(R) {
      var x = new i({
        relationships: R,
        contentTypes: I.contentTypes,
        docxFile: I.docxFile,
        numbering: I.numbering,
        styles: I.styles,
        files: I.files
      });
      return c(I.docxFile, A).then(function(z) {
        return Z(x, z);
      });
    });
  }
  function w(A) {
    var I = r.splitPath(A);
    return r.joinPath(I.dirname, "_rels", I.basename + ".rels");
  }
  var _ = d({
    filename: "[Content_Types].xml",
    readElement: u.readContentTypesFromXml,
    defaultValue: u.defaultContentTypes
  });
  function U(A, I, Z) {
    return d({
      filename: I,
      readElement: function(T) {
        return l.readNumberingXml(T, { styles: Z });
      },
      defaultValue: l.defaultNumbering
    })(A);
  }
  function E(A, I) {
    return d({
      filename: I,
      readElement: b.readStylesXml,
      defaultValue: b.defaultStyles
    })(A);
  }
  var S = d({
    filename: "_rels/.rels",
    readElement: o.readRelationships,
    defaultValue: o.defaultValue
  });
  return ct;
}
var yt = {}, sc;
function Wl() {
  if (sc) return yt;
  sc = 1;
  var e = Be, n = mn(), t = ha();
  yt.writeStyleMap = a, yt.readStyleMap = b;
  var r = "http://schemas.zwobble.org/mammoth/style-map", c = "mammoth/style-map", i = "/" + c;
  function a(m, g) {
    return m.write(c, g), o(m).then(function() {
      return u(m);
    });
  }
  function o(m) {
    var g = "word/_rels/document.xml.rels", h = "http://schemas.openxmlformats.org/package/2006/relationships", y = "{" + h + "}Relationship";
    return m.read(g, "utf8").then(t.readString).then(function(f) {
      var s = f.children;
      l(s, y, "Id", {
        Id: "rMammothStyleMap",
        Type: r,
        Target: i
      });
      var p = { "": h };
      return m.write(g, t.writeString(f, p));
    });
  }
  function u(m) {
    var g = "[Content_Types].xml", h = "http://schemas.openxmlformats.org/package/2006/content-types", y = "{" + h + "}Override";
    return m.read(g, "utf8").then(t.readString).then(function(f) {
      var s = f.children;
      l(s, y, "PartName", {
        PartName: i,
        ContentType: "text/prs.mammoth.style-map"
      });
      var p = { "": h };
      return m.write(g, t.writeString(f, p));
    });
  }
  function l(m, g, h, y) {
    var f = e.find(m, function(s) {
      return s.name === g && s.attributes[h] === y[h];
    });
    f ? f.attributes = y : m.push(t.element(g, y));
  }
  function b(m) {
    return m.exists(c) ? m.read(c, "utf8") : n.resolve(null);
  }
  return yt;
}
var Dt = {}, Tn = {}, tn = {}, sn = {}, dc;
function ys() {
  if (dc) return sn;
  dc = 1;
  var e = mr();
  function n(u, l, b) {
    return r(
      e.element(u, l, { fresh: !1 }),
      b
    );
  }
  function t(u, l, b) {
    var m = e.element(u, l, { fresh: !0 });
    return r(m, b);
  }
  function r(u, l) {
    return {
      type: "element",
      tag: u,
      children: l || []
    };
  }
  function c(u) {
    return {
      type: "text",
      value: u
    };
  }
  var i = {
    type: "forceWrite"
  };
  sn.freshElement = t, sn.nonFreshElement = n, sn.elementWithTag = r, sn.text = c, sn.forceWrite = i;
  var a = {
    br: !0,
    hr: !0,
    img: !0,
    input: !0
  };
  function o(u) {
    return u.children.length === 0 && a[u.tag.tagName];
  }
  return sn.isVoidElement = o, sn;
}
var ri, lc;
function Rl() {
  if (lc) return ri;
  lc = 1;
  var e = Be, n = ys();
  function t(f) {
    return r(l(f));
  }
  function r(f) {
    var s = [];
    return f.map(c).forEach(function(p) {
      u(s, p);
    }), s;
  }
  function c(f) {
    return i[f.type](f);
  }
  var i = {
    element: a,
    text: o,
    forceWrite: o
  };
  function a(f) {
    return n.elementWithTag(f.tag, r(f.children));
  }
  function o(f) {
    return f;
  }
  function u(f, s) {
    var p = f[f.length - 1];
    s.type === "element" && !s.tag.fresh && p && p.type === "element" && s.tag.matchesElement(p.tag) ? (s.tag.separator && u(p.children, n.text(s.tag.separator)), s.children.forEach(function(d) {
      u(p.children, d);
    })) : f.push(s);
  }
  function l(f) {
    return b(f, function(s) {
      return m[s.type](s);
    });
  }
  function b(f, s) {
    return e.flatten(e.map(f, s), !0);
  }
  var m = {
    element: h,
    text: y,
    forceWrite: g
  };
  function g(f) {
    return [f];
  }
  function h(f) {
    var s = l(f.children);
    return s.length === 0 && !n.isVoidElement(f) ? [] : [n.elementWithTag(f.tag, s)];
  }
  function y(f) {
    return f.value.length === 0 ? [] : [f];
  }
  return ri = t, ri;
}
var fc;
function gr() {
  if (fc) return tn;
  fc = 1;
  var e = ys();
  tn.freshElement = e.freshElement, tn.nonFreshElement = e.nonFreshElement, tn.elementWithTag = e.elementWithTag, tn.text = e.text, tn.forceWrite = e.forceWrite, tn.simplify = Rl();
  function n(a, o) {
    o.forEach(function(u) {
      t(a, u);
    });
  }
  function t(a, o) {
    r[o.type](a, o);
  }
  var r = {
    element: c,
    text: i,
    forceWrite: function() {
    }
  };
  function c(a, o) {
    e.isVoidElement(o) ? a.selfClosing(o.tag.tagName, o.tag.attributes) : (a.open(o.tag.tagName, o.tag.attributes), n(a, o.children), a.close(o.tag.tagName));
  }
  function i(a, o) {
    a.text(o.value);
  }
  return tn.write = n, tn;
}
var hc;
function mr() {
  if (hc) return Tn;
  hc = 1;
  var e = Be, n = gr();
  Tn.topLevelElement = t, Tn.elements = r, Tn.element = i;
  function t(o, u) {
    return r([i(o, u, { fresh: !0 })]);
  }
  function r(o) {
    return new c(o.map(function(u) {
      return e.isString(u) ? i(u) : u;
    }));
  }
  function c(o) {
    this._elements = o;
  }
  c.prototype.wrap = function(u) {
    for (var l = u(), b = this._elements.length - 1; b >= 0; b--)
      l = this._elements[b].wrapNodes(l);
    return l;
  };
  function i(o, u, l) {
    return l = l || {}, new a(o, u, l);
  }
  function a(o, u, l) {
    var b = {};
    e.isArray(o) ? (o.forEach(function(m) {
      b[m] = !0;
    }), o = o[0]) : b[o] = !0, this.tagName = o, this.tagNames = b, this.attributes = u || {}, this.fresh = l.fresh, this.separator = l.separator;
  }
  return a.prototype.matchesElement = function(o) {
    return this.tagNames[o.tagName] && e.isEqual(this.attributes || {}, o.attributes || {});
  }, a.prototype.wrap = function(u) {
    return this.wrapNodes(u());
  }, a.prototype.wrapNodes = function(u) {
    return [n.elementWithTag(this, u)];
  }, Tn.empty = r([]), Tn.ignore = {
    wrap: function() {
      return [];
    }
  }, Tn;
}
var ii = {}, pc;
function Ds() {
  return pc || (pc = 1, function(e) {
    var n = Be, t = mn(), r = gr();
    e.imgElement = c;
    function c(i) {
      return function(a, o) {
        return t.when(i(a)).then(function(u) {
          var l = {};
          return a.altText && (l.alt = a.altText), n.extend(l, u), [r.freshElement("img", l)];
        });
      };
    }
    e.inline = e.imgElement, e.dataUri = c(function(i) {
      return i.readAsBase64String().then(function(a) {
        return {
          src: "data:" + i.contentType + ";base64," + a
        };
      });
    });
  }(ii)), ii;
}
var ai = {}, oi = {}, gc;
function Nl() {
  if (gc) return oi;
  gc = 1;
  var e = Be;
  oi.writer = n;
  function n(o) {
    return o = o || {}, o.prettyPrint ? r() : c();
  }
  var t = {
    div: !0,
    p: !0,
    ul: !0,
    li: !0
  };
  function r() {
    var o = 0, u = "  ", l = [], b = !0, m = !1, g = c();
    function h(_, U) {
      t[_] && D(), l.push(_), g.open(_, U), t[_] && o++, b = !1;
    }
    function y(_) {
      t[_] && (o--, D()), l.pop(), g.close(_);
    }
    function f(_) {
      d();
      var U = w() ? _ : _.replace(`
`, `
` + u);
      g.text(U);
    }
    function s(_, U) {
      D(), g.selfClosing(_, U);
    }
    function p() {
      return l.length === 0 || t[l[l.length - 1]];
    }
    function d() {
      m || (D(), m = !0);
    }
    function D() {
      if (m = !1, !b && p() && !w()) {
        g._append(`
`);
        for (var _ = 0; _ < o; _++)
          g._append(u);
      }
    }
    function w() {
      return e.some(l, function(_) {
        return _ === "pre";
      });
    }
    return {
      asString: g.asString,
      open: h,
      close: y,
      text: f,
      selfClosing: s
    };
  }
  function c() {
    var o = [];
    function u(f, s) {
      var p = m(s);
      o.push("<" + f + p + ">");
    }
    function l(f) {
      o.push("</" + f + ">");
    }
    function b(f, s) {
      var p = m(s);
      o.push("<" + f + p + " />");
    }
    function m(f) {
      return e.map(f, function(s, p) {
        return " " + p + '="' + a(s) + '"';
      }).join("");
    }
    function g(f) {
      o.push(i(f));
    }
    function h(f) {
      o.push(f);
    }
    function y() {
      return o.join("");
    }
    return {
      asString: y,
      open: u,
      close: l,
      text: g,
      selfClosing: b,
      _append: h
    };
  }
  function i(o) {
    return o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function a(o) {
    return o.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return oi;
}
var ci = {}, mc;
function Ol() {
  if (mc) return ci;
  mc = 1;
  var e = Be;
  function n(m) {
    return t(m, m);
  }
  function t(m, g) {
    return function() {
      return { start: m, end: g };
    };
  }
  function r(m) {
    var g = m.href || "";
    return g ? {
      start: "[",
      end: "](" + g + ")",
      anchorPosition: "before"
    } : {};
  }
  function c(m) {
    var g = m.src || "", h = m.alt || "";
    return g || h ? { start: "![" + h + "](" + g + ")" } : {};
  }
  function i(m) {
    return function(g, h) {
      return {
        start: h ? `
` : "",
        end: h ? "" : `
`,
        list: {
          isOrdered: m.isOrdered,
          indent: h ? h.indent + 1 : 0,
          count: 0
        }
      };
    };
  }
  function a(m, g, h) {
    g = g || { indent: 0, isOrdered: !1, count: 0 }, g.count++, h.hasClosed = !1;
    var y = g.isOrdered ? g.count + "." : "-", f = u("	", g.indent) + y + " ";
    return {
      start: f,
      end: function() {
        if (!h.hasClosed)
          return h.hasClosed = !0, `
`;
      }
    };
  }
  var o = {
    p: t("", `

`),
    br: t("", `  
`),
    ul: i({ isOrdered: !1 }),
    ol: i({ isOrdered: !0 }),
    li: a,
    strong: n("__"),
    em: n("*"),
    a: r,
    img: c
  };
  (function() {
    for (var m = 1; m <= 6; m++)
      o["h" + m] = t(u("#", m) + " ", `

`);
  })();
  function u(m, g) {
    return new Array(g + 1).join(m);
  }
  function l() {
    var m = [], g = [], h = null, y = {};
    function f(_, U) {
      U = U || {};
      var E = o[_] || function() {
        return {};
      }, S = E(U, h, y);
      g.push({ end: S.end, list: h }), S.list && (h = S.list);
      var A = S.anchorPosition === "before";
      A && s(U), m.push(S.start || ""), A || s(U);
    }
    function s(_) {
      _.id && m.push('<a id="' + _.id + '"></a>');
    }
    function p(_) {
      var U = g.pop();
      h = U.list;
      var E = e.isFunction(U.end) ? U.end() : U.end;
      m.push(E || "");
    }
    function d(_, U) {
      f(_, U), p();
    }
    function D(_) {
      m.push(b(_));
    }
    function w() {
      return m.join("");
    }
    return {
      asString: w,
      open: f,
      close: p,
      text: D,
      selfClosing: d
    };
  }
  ci.writer = l;
  function b(m) {
    return m.replace(/\\/g, "\\\\").replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g, "\\$1");
  }
  return ci;
}
var bc;
function Il() {
  if (bc) return ai;
  bc = 1;
  var e = Nl(), n = Ol();
  ai.writer = t;
  function t(r) {
    return r = r || {}, r.outputFormat === "markdown" ? n.writer() : e.writer(r);
  }
  return ai;
}
var yc;
function Ll() {
  if (yc) return Dt;
  yc = 1;
  var e = Be, n = mn(), t = Sn(), r = mr(), c = an(), i = Ds(), a = gr(), o = Il();
  Dt.DocumentConverter = u;
  function u(s) {
    return {
      convertToHtml: function(p) {
        var d = e.indexBy(
          p.type === t.types.document ? p.comments : [],
          "commentId"
        ), D = new l(s, d);
        return D.convertToHtml(p);
      }
    };
  }
  function l(s, p) {
    var d = 1, D = [], w = [];
    s = e.extend({ ignoreEmptyParagraphs: !0 }, s);
    var _ = s.idPrefix === void 0 ? "" : s.idPrefix, U = s.ignoreEmptyParagraphs, E = r.topLevelElement("p"), S = s.styleMap || [];
    function A(v) {
      var $ = [], j = Z(v, $, {}), N = [];
      y(j, function(V) {
        V.type === "deferred" && N.push(V);
      });
      var B = {};
      return n.mapSeries(N, function(V) {
        return V.value().then(function(ie) {
          B[V.id] = ie;
        });
      }).then(function() {
        function V(ne) {
          return h(ne, function(H) {
            return H.type === "deferred" ? B[H.id] : H.children ? [
              e.extend({}, H, {
                children: V(H.children)
              })
            ] : [H];
          });
        }
        var ie = o.writer({
          prettyPrint: s.prettyPrint,
          outputFormat: s.outputFormat
        });
        return a.write(ie, a.simplify(V(j))), new c.Result(ie.asString(), $);
      });
    }
    function I(v, $, j) {
      return h(v, function(N) {
        return Z(N, $, j);
      });
    }
    function Z(v, $, j) {
      if (!j)
        throw new Error("options not set");
      var N = Ae[v.type];
      return N ? N(v, $, j) : [];
    }
    function T(v, $, j) {
      return R(v, $).wrap(function() {
        var N = I(v.children, $, j);
        return U ? N : [a.forceWrite].concat(N);
      });
    }
    function R(v, $) {
      var j = O(v);
      return j ? j.to : (v.styleId && $.push(g("paragraph", v)), E);
    }
    function x(v, $, j) {
      var N = function() {
        return I(v.children, $, j);
      }, B = [];
      if (v.highlight !== null) {
        var V = W({ type: "highlight", color: v.highlight });
        V && B.push(V);
      }
      v.isSmallCaps && B.push(z("smallCaps")), v.isAllCaps && B.push(z("allCaps")), v.isStrikethrough && B.push(z("strikethrough", "s")), v.isUnderline && B.push(z("underline")), v.verticalAlignment === t.verticalAlignment.subscript && B.push(r.element("sub", {}, { fresh: !1 })), v.verticalAlignment === t.verticalAlignment.superscript && B.push(r.element("sup", {}, { fresh: !1 })), v.isItalic && B.push(z("italic", "em")), v.isBold && B.push(z("bold", "strong"));
      var ie = r.empty, ne = O(v);
      return ne ? ie = ne.to : v.styleId && $.push(g("run", v)), B.push(ie), B.forEach(function(H) {
        N = H.wrap.bind(H, N);
      }), N();
    }
    function z(v, $) {
      var j = W({ type: v });
      return j || ($ ? r.element($, {}, { fresh: !1 }) : r.empty);
    }
    function W(v, $) {
      var j = O(v);
      return j ? j.to : $;
    }
    function O(v) {
      for (var $ = 0; $ < S.length; $++)
        if (S[$].from.matches(v))
          return S[$];
    }
    function G(v) {
      return function($, j) {
        return n.attempt(function() {
          return v($, j);
        }).caught(function(N) {
          return j.push(c.error(N)), [];
        });
      };
    }
    function q(v) {
      return L(v.noteType, v.noteId);
    }
    function Q(v) {
      return k(v.noteType, v.noteId);
    }
    function L(v, $) {
      return re(v + "-" + $);
    }
    function k(v, $) {
      return re(v + "-ref-" + $);
    }
    function re(v) {
      return _ + v;
    }
    var ae = r.elements([
      r.element("table", {}, { fresh: !0 })
    ]);
    function J(v, $, j) {
      return W(v, ae).wrap(function() {
        return ce(v, $, j);
      });
    }
    function ce(v, $, j) {
      var N = e.findIndex(v.children, function(ne) {
        return !ne.type === t.types.tableRow || !ne.isHeader;
      });
      N === -1 && (N = v.children.length);
      var B;
      if (N === 0)
        B = I(
          v.children,
          $,
          e.extend({}, j, { isTableHeader: !1 })
        );
      else {
        var V = I(
          v.children.slice(0, N),
          $,
          e.extend({}, j, { isTableHeader: !0 })
        ), ie = I(
          v.children.slice(N),
          $,
          e.extend({}, j, { isTableHeader: !1 })
        );
        B = [
          a.freshElement("thead", {}, V),
          a.freshElement("tbody", {}, ie)
        ];
      }
      return [a.forceWrite].concat(B);
    }
    function fe(v, $, j) {
      var N = I(v.children, $, j);
      return [
        a.freshElement("tr", {}, [a.forceWrite].concat(N))
      ];
    }
    function le(v, $, j) {
      var N = j.isTableHeader ? "th" : "td", B = I(v.children, $, j), V = {};
      return v.colSpan !== 1 && (V.colspan = v.colSpan.toString()), v.rowSpan !== 1 && (V.rowspan = v.rowSpan.toString()), [
        a.freshElement(N, V, [a.forceWrite].concat(B))
      ];
    }
    function he(v, $, j) {
      return W(v, r.ignore).wrap(function() {
        var N = p[v.commentId], B = w.length + 1, V = "[" + f(N) + B + "]";
        return w.push({ label: V, comment: N }), [
          a.freshElement("a", {
            href: "#" + L("comment", v.commentId),
            id: k("comment", v.commentId)
          }, [a.text(V)])
        ];
      });
    }
    function ge(v, $, j) {
      var N = v.label, B = v.comment, V = I(B.body, $, j).concat([
        a.nonFreshElement("p", {}, [
          a.text(" "),
          a.freshElement("a", { href: "#" + k("comment", B.commentId) }, [
            a.text("↑")
          ])
        ])
      ]);
      return [
        a.freshElement(
          "dt",
          { id: L("comment", B.commentId) },
          [a.text("Comment " + N)]
        ),
        a.freshElement("dd", {}, V)
      ];
    }
    function be(v, $, j) {
      return Te(v).wrap(function() {
        return [];
      });
    }
    function Te(v) {
      var $ = O(v);
      return $ ? $.to : v.breakType === "line" ? r.topLevelElement("br") : r.empty;
    }
    var Ae = {
      document: function(v, $, j) {
        var N = I(v.children, $, j), B = D.map(function(ie) {
          return v.notes.resolve(ie);
        }), V = I(B, $, j);
        return N.concat([
          a.freshElement("ol", {}, V),
          a.freshElement("dl", {}, h(w, function(ie) {
            return ge(ie, $, j);
          }))
        ]);
      },
      paragraph: T,
      run: x,
      text: function(v, $, j) {
        return [a.text(v.value)];
      },
      tab: function(v, $, j) {
        return [a.text("	")];
      },
      hyperlink: function(v, $, j) {
        var N = v.anchor ? "#" + re(v.anchor) : v.href, B = { href: N };
        v.targetFrame != null && (B.target = v.targetFrame);
        var V = I(v.children, $, j);
        return [a.nonFreshElement("a", B, V)];
      },
      checkbox: function(v) {
        var $ = { type: "checkbox" };
        return v.checked && ($.checked = "checked"), [a.freshElement("input", $)];
      },
      bookmarkStart: function(v, $, j) {
        var N = a.freshElement("a", {
          id: re(v.name)
        }, [a.forceWrite]);
        return [N];
      },
      noteReference: function(v, $, j) {
        D.push(v);
        var N = a.freshElement("a", {
          href: "#" + q(v),
          id: Q(v)
        }, [a.text("[" + d++ + "]")]);
        return [a.freshElement("sup", {}, [N])];
      },
      note: function(v, $, j) {
        var N = I(v.body, $, j), B = a.elementWithTag(r.element("p", {}, { fresh: !1 }), [
          a.text(" "),
          a.freshElement("a", { href: "#" + Q(v) }, [a.text("↑")])
        ]), V = N.concat([B]);
        return a.freshElement("li", { id: q(v) }, V);
      },
      commentReference: he,
      comment: ge,
      image: m(G(s.convertImage || i.dataUri)),
      table: J,
      tableRow: fe,
      tableCell: le,
      break: be
    };
    return {
      convertToHtml: A
    };
  }
  var b = 1;
  function m(s) {
    return function(p, d, D) {
      return [
        {
          type: "deferred",
          id: b++,
          value: function() {
            return s(p, d, D);
          }
        }
      ];
    };
  }
  function g(s, p) {
    return c.warning(
      "Unrecognised " + s + " style: '" + p.styleName + "' (Style ID: " + p.styleId + ")"
    );
  }
  function h(s, p) {
    return e.flatten(s.map(p), !0);
  }
  function y(s, p) {
    s.forEach(function(d) {
      p(d), d.children && y(d.children, p);
    });
  }
  var f = Dt.commentAuthorLabel = function(p) {
    return p.authorInitials || "";
  };
  return Dt;
}
var ui = {}, Dc;
function Ml() {
  if (Dc) return ui;
  Dc = 1;
  var e = Sn();
  function n(t) {
    if (t.type === "text")
      return t.value;
    if (t.type === e.types.tab)
      return "	";
    var r = t.type === "paragraph" ? `

` : "";
    return (t.children || []).map(n).join("") + r;
  }
  return ui.convertElementToRawText = n, ui;
}
var Yn = {}, Ze = {}, si = {}, di = { exports: {} }, vc;
function ql() {
  if (vc) return di.exports;
  vc = 1;
  var e = di.exports = function(n, t) {
    this._tokens = n, this._startIndex = t || 0;
  };
  return e.prototype.head = function() {
    return this._tokens[this._startIndex];
  }, e.prototype.tail = function(n) {
    return new e(this._tokens, this._startIndex + 1);
  }, e.prototype.toArray = function() {
    return this._tokens.slice(this._startIndex);
  }, e.prototype.end = function() {
    return this._tokens[this._tokens.length - 1];
  }, e.prototype.to = function(n) {
    var t = this.head().source, r = n.head() || n.end();
    return t.to(r.source);
  }, di.exports;
}
var xc;
function Pl() {
  if (xc) return si;
  xc = 1;
  var e = ql();
  return si.Parser = function(n) {
    var t = function(r, c) {
      return r(new e(c));
    };
    return {
      parseTokens: t
    };
  }, si;
}
var li = {}, fi = {}, _c;
function zl() {
  return _c || (_c = 1, function(e) {
    e.none = /* @__PURE__ */ Object.create({
      value: function() {
        throw new Error("Called value on none");
      },
      isNone: function() {
        return !0;
      },
      isSome: function() {
        return !1;
      },
      map: function() {
        return e.none;
      },
      flatMap: function() {
        return e.none;
      },
      filter: function() {
        return e.none;
      },
      toArray: function() {
        return [];
      },
      orElse: n,
      valueOrElse: n
    });
    function n(r) {
      return typeof r == "function" ? r() : r;
    }
    e.some = function(r) {
      return new t(r);
    };
    var t = function(r) {
      this._value = r;
    };
    t.prototype.value = function() {
      return this._value;
    }, t.prototype.isNone = function() {
      return !1;
    }, t.prototype.isSome = function() {
      return !0;
    }, t.prototype.map = function(r) {
      return new t(r(this._value));
    }, t.prototype.flatMap = function(r) {
      return r(this._value);
    }, t.prototype.filter = function(r) {
      return r(this._value) ? this : e.none;
    }, t.prototype.toArray = function() {
      return [this._value];
    }, t.prototype.orElse = function(r) {
      return this;
    }, t.prototype.valueOrElse = function(r) {
      return this._value;
    }, e.isOption = function(r) {
      return r === e.none || r instanceof t;
    }, e.fromNullable = function(r) {
      return r == null ? e.none : new t(r);
    };
  }(fi)), fi;
}
var hi, Uc;
function pa() {
  if (Uc) return hi;
  Uc = 1, hi = {
    failure: function(n, t) {
      if (n.length < 1)
        throw new Error("Failure must have errors");
      return new e({
        status: "failure",
        remaining: t,
        errors: n
      });
    },
    error: function(n, t) {
      if (n.length < 1)
        throw new Error("Failure must have errors");
      return new e({
        status: "error",
        remaining: t,
        errors: n
      });
    },
    success: function(n, t, r) {
      return new e({
        status: "success",
        value: n,
        source: r,
        remaining: t,
        errors: []
      });
    },
    cut: function(n) {
      return new e({
        status: "cut",
        remaining: n,
        errors: []
      });
    }
  };
  var e = function(n) {
    this._value = n.value, this._status = n.status, this._hasValue = n.value !== void 0, this._remaining = n.remaining, this._source = n.source, this._errors = n.errors;
  };
  return e.prototype.map = function(n) {
    return this._hasValue ? new e({
      value: n(this._value, this._source),
      status: this._status,
      remaining: this._remaining,
      source: this._source,
      errors: this._errors
    }) : this;
  }, e.prototype.changeRemaining = function(n) {
    return new e({
      value: this._value,
      status: this._status,
      remaining: n,
      source: this._source,
      errors: this._errors
    });
  }, e.prototype.isSuccess = function() {
    return this._status === "success" || this._status === "cut";
  }, e.prototype.isFailure = function() {
    return this._status === "failure";
  }, e.prototype.isError = function() {
    return this._status === "error";
  }, e.prototype.isCut = function() {
    return this._status === "cut";
  }, e.prototype.value = function() {
    return this._value;
  }, e.prototype.remaining = function() {
    return this._remaining;
  }, e.prototype.source = function() {
    return this._source;
  }, e.prototype.errors = function() {
    return this._errors;
  }, hi;
}
var pi = {}, Tc;
function vs() {
  if (Tc) return pi;
  Tc = 1, pi.error = function(n) {
    return new e(n);
  };
  var e = function(n) {
    this.expected = n.expected, this.actual = n.actual, this._location = n.location;
  };
  return e.prototype.describe = function() {
    var n = this._location ? this._location.describe() + `:
` : "";
    return n + "Expected " + this.expected + `
but got ` + this.actual;
  }, e.prototype.lineNumber = function() {
    return this._location.lineNumber();
  }, e.prototype.characterNumber = function() {
    return this._location.characterNumber();
  }, pi;
}
var gi = {}, wc;
function jl() {
  if (wc) return gi;
  wc = 1, gi.fromArray = function(n) {
    var t = 0, r = function() {
      return t < n.length;
    };
    return new e({
      hasNext: r,
      next: function() {
        if (r())
          return n[t++];
        throw new Error("No more elements");
      }
    });
  };
  var e = function(n) {
    this._iterator = n;
  };
  return e.prototype.map = function(n) {
    var t = this._iterator;
    return new e({
      hasNext: function() {
        return t.hasNext();
      },
      next: function() {
        return n(t.next());
      }
    });
  }, e.prototype.filter = function(n) {
    var t = this._iterator, r = !1, c = !1, i, a = function() {
      if (!r)
        for (r = !0, c = !1; t.hasNext() && !c; )
          i = t.next(), c = n(i);
    };
    return new e({
      hasNext: function() {
        return a(), c;
      },
      next: function() {
        a();
        var o = i;
        return r = !1, o;
      }
    });
  }, e.prototype.first = function() {
    var n = this._iterator;
    return this._iterator.hasNext() ? n.next() : null;
  }, e.prototype.toArray = function() {
    for (var n = []; this._iterator.hasNext(); )
      n.push(this._iterator.next());
    return n;
  }, gi;
}
var Ec;
function xs() {
  return Ec || (Ec = 1, function(e) {
    var n = Be, t = zl(), r = pa(), c = vs(), i = jl();
    e.token = function(g, h) {
      var y = h !== void 0;
      return function(f) {
        var s = f.head();
        if (s && s.name === g && (!y || s.value === h))
          return r.success(s.value, f.tail(), s.source);
        var p = b({ name: g, value: h });
        return m(f, p);
      };
    }, e.tokenOfType = function(g) {
      return e.token(g);
    }, e.firstOf = function(g, h) {
      return n.isArray(h) || (h = Array.prototype.slice.call(arguments, 1)), function(y) {
        return i.fromArray(h).map(function(f) {
          return f(y);
        }).filter(function(f) {
          return f.isSuccess() || f.isError();
        }).first() || m(y, g);
      };
    }, e.then = function(g, h) {
      return function(y) {
        var f = g(y);
        return f.map || console.log(f), f.map(h);
      };
    }, e.sequence = function() {
      var g = Array.prototype.slice.call(arguments, 0), h = function(f) {
        var s = n.foldl(g, function(d, D) {
          var w = d.result, _ = d.hasCut;
          if (!w.isSuccess())
            return { result: w, hasCut: _ };
          var U = D(w.remaining());
          if (U.isCut())
            return { result: w, hasCut: !0 };
          if (U.isSuccess()) {
            var E;
            D.isCaptured ? E = w.value().withValue(D, U.value()) : E = w.value();
            var S = U.remaining(), A = f.to(S);
            return {
              result: r.success(E, S, A),
              hasCut: _
            };
          } else return _ ? { result: r.error(U.errors(), U.remaining()), hasCut: _ } : { result: U, hasCut: _ };
        }, { result: r.success(new a(), f), hasCut: !1 }).result, p = f.to(s.remaining());
        return s.map(function(d) {
          return d.withValue(e.sequence.source, p);
        });
      };
      h.head = function() {
        var f = n.find(g, y);
        return e.then(
          h,
          e.sequence.extract(f)
        );
      }, h.map = function(f) {
        return e.then(
          h,
          function(s) {
            return f.apply(this, s.toArray());
          }
        );
      };
      function y(f) {
        return f.isCaptured;
      }
      return h;
    };
    var a = function(g, h) {
      this._values = g || {}, this._valuesArray = h || [];
    };
    a.prototype.withValue = function(g, h) {
      if (g.captureName && g.captureName in this._values)
        throw new Error('Cannot add second value for capture "' + g.captureName + '"');
      var y = n.clone(this._values);
      y[g.captureName] = h;
      var f = this._valuesArray.concat([h]);
      return new a(y, f);
    }, a.prototype.get = function(g) {
      if (g.captureName in this._values)
        return this._values[g.captureName];
      throw new Error('No value for capture "' + g.captureName + '"');
    }, a.prototype.toArray = function() {
      return this._valuesArray;
    }, e.sequence.capture = function(g, h) {
      var y = function() {
        return g.apply(this, arguments);
      };
      return y.captureName = h, y.isCaptured = !0, y;
    }, e.sequence.extract = function(g) {
      return function(h) {
        return h.get(g);
      };
    }, e.sequence.applyValues = function(g) {
      var h = Array.prototype.slice.call(arguments, 1);
      return function(y) {
        var f = h.map(function(s) {
          return y.get(s);
        });
        return g.apply(this, f);
      };
    }, e.sequence.source = {
      captureName: "☃source☃"
    }, e.sequence.cut = function() {
      return function(g) {
        return r.cut(g);
      };
    }, e.optional = function(g) {
      return function(h) {
        var y = g(h);
        return y.isSuccess() ? y.map(t.some) : y.isFailure() ? r.success(t.none, h) : y;
      };
    }, e.zeroOrMoreWithSeparator = function(g, h) {
      return l(g, h, !1);
    }, e.oneOrMoreWithSeparator = function(g, h) {
      return l(g, h, !0);
    };
    var o = e.zeroOrMore = function(g) {
      return function(h) {
        for (var y = [], f; (f = g(h)) && f.isSuccess(); )
          h = f.remaining(), y.push(f.value());
        return f.isError() ? f : r.success(y, h);
      };
    };
    e.oneOrMore = function(g) {
      return e.oneOrMoreWithSeparator(g, u);
    };
    function u(g) {
      return r.success(null, g);
    }
    var l = function(g, h, y) {
      return function(f) {
        var s = g(f);
        if (s.isSuccess()) {
          var p = e.sequence.capture(g, "main"), d = o(e.then(
            e.sequence(h, p),
            e.sequence.extract(p)
          )), D = d(s.remaining());
          return r.success([s.value()].concat(D.value()), D.remaining());
        } else return y || s.isError() ? s : r.success([], f);
      };
    };
    e.leftAssociative = function(g, h, y) {
      var f;
      y ? f = [{ func: y, rule: h }] : f = h, f = f.map(function(p) {
        return e.then(p.rule, function(d) {
          return function(D, w) {
            return p.func(D, d, w);
          };
        });
      });
      var s = e.firstOf.apply(null, ["rules"].concat(f));
      return function(p) {
        var d = p, D = g(p);
        if (!D.isSuccess())
          return D;
        for (var w = s(D.remaining()); w.isSuccess(); ) {
          var _ = w.remaining(), U = d.to(w.remaining()), E = w.value();
          D = r.success(
            E(D.value(), U),
            _,
            U
          ), w = s(D.remaining());
        }
        return w.isError() ? w : D;
      };
    }, e.leftAssociative.firstOf = function() {
      return Array.prototype.slice.call(arguments, 0);
    }, e.nonConsuming = function(g) {
      return function(h) {
        return g(h).changeRemaining(h);
      };
    };
    var b = function(g) {
      return g.value ? g.name + ' "' + g.value + '"' : g.name;
    };
    function m(g, h) {
      var y, f = g.head();
      return f ? y = c.error({
        expected: h,
        actual: b(f),
        location: f.source
      }) : y = c.error({
        expected: h,
        actual: "end of tokens"
      }), r.failure([y], g);
    }
  }(li)), li;
}
var mi = { exports: {} }, Ac;
function _s() {
  if (Ac) return mi.exports;
  Ac = 1, mi.exports = function(n, t) {
    var r = {
      asString: function() {
        return n;
      },
      range: function(c, i) {
        return new e(n, t, c, i);
      }
    };
    return r;
  };
  var e = function(n, t, r, c) {
    this._string = n, this._description = t, this._startIndex = r, this._endIndex = c;
  };
  return e.prototype.to = function(n) {
    return new e(this._string, this._description, this._startIndex, n._endIndex);
  }, e.prototype.describe = function() {
    var n = this._position(), t = this._description ? this._description + `
` : "";
    return t + "Line number: " + n.lineNumber + `
Character number: ` + n.characterNumber;
  }, e.prototype.lineNumber = function() {
    return this._position().lineNumber;
  }, e.prototype.characterNumber = function() {
    return this._position().characterNumber;
  }, e.prototype._position = function() {
    for (var n = this, t = 0, r = function() {
      return n._string.indexOf(`
`, t);
    }, c = 1; r() !== -1 && r() < this._startIndex; )
      t = r() + 1, c += 1;
    var i = this._startIndex - t + 1;
    return { lineNumber: c, characterNumber: i };
  }, mi.exports;
}
var bi, Fc;
function Us() {
  return Fc || (Fc = 1, bi = function(e, n, t) {
    this.name = e, this.value = n, t && (this.source = t);
  }), bi;
}
var yi = {}, Cc;
function Xl() {
  return Cc || (Cc = 1, function(e) {
    var n = xs(), t = pa();
    e.parser = function(i, a, o) {
      var u = {
        rule: g,
        leftAssociative: h,
        rightAssociative: y
      }, l = new r(o.map(m)), b = n.firstOf(i, a);
      function m(p) {
        return {
          name: p.name,
          rule: c(p.ruleBuilder.bind(null, u))
        };
      }
      function g() {
        return f(l);
      }
      function h(p) {
        return f(l.untilExclusive(p));
      }
      function y(p) {
        return f(l.untilInclusive(p));
      }
      function f(p) {
        return s.bind(null, p);
      }
      function s(p, d) {
        var D = b(d);
        return D.isSuccess() ? p.apply(D) : D;
      }
      return u;
    };
    function r(i) {
      function a(m) {
        return new r(i.slice(0, u().indexOf(m)));
      }
      function o(m) {
        return new r(i.slice(0, u().indexOf(m) + 1));
      }
      function u() {
        return i.map(function(m) {
          return m.name;
        });
      }
      function l(m) {
        for (var g, h; ; )
          if (g = b(m.remaining()), g.isSuccess())
            h = m.source().to(g.source()), m = t.success(
              g.value()(m.value(), h),
              g.remaining(),
              h
            );
          else return g.isFailure() ? m : g;
      }
      function b(m) {
        return n.firstOf("infix", i.map(function(g) {
          return g.rule;
        }))(m);
      }
      return {
        apply: l,
        untilExclusive: a,
        untilInclusive: o
      };
    }
    e.infix = function(i, a) {
      function o(u) {
        return e.infix(i, function(l) {
          var b = a(l);
          return function(m) {
            var g = b(m);
            return g.map(function(h) {
              return function(y, f) {
                return u(y, h, f);
              };
            });
          };
        });
      }
      return {
        name: i,
        ruleBuilder: a,
        map: o
      };
    };
    var c = function(i) {
      var a;
      return function(o) {
        return a || (a = i()), a(o);
      };
    };
  }(yi)), yi;
}
var Di = {}, Sc;
function Vl() {
  if (Sc) return Di;
  Sc = 1;
  var e = Us(), n = _s();
  Di.RegexTokeniser = t;
  function t(r) {
    r = r.map(function(o) {
      return {
        name: o.name,
        regex: new RegExp(o.regex.source, "g")
      };
    });
    function c(o, u) {
      for (var l = new n(o, u), b = 0, m = []; b < o.length; ) {
        var g = i(o, b, l);
        b = g.endIndex, m.push(g.token);
      }
      return m.push(a(o, l)), m;
    }
    function i(o, u, l) {
      for (var b = 0; b < r.length; b++) {
        var m = r[b].regex;
        m.lastIndex = u;
        var g = m.exec(o);
        if (g) {
          var y = u + g[0].length;
          if (g.index === u && y > u) {
            var h = g[1], f = new e(
              r[b].name,
              h,
              l.range(u, y)
            );
            return { token: f, endIndex: y };
          }
        }
      }
      var y = u + 1, f = new e(
        "unrecognisedCharacter",
        o.substring(u, y),
        l.range(u, y)
      );
      return { token: f, endIndex: y };
    }
    function a(o, u) {
      return new e(
        "end",
        null,
        u.range(o.length, o.length)
      );
    }
    return {
      tokenise: c
    };
  }
  return Di;
}
var Bc;
function Ts() {
  return Bc || (Bc = 1, Ze.Parser = Pl().Parser, Ze.rules = xs(), Ze.errors = vs(), Ze.results = pa(), Ze.StringSource = _s(), Ze.Token = Us(), Ze.bottomUp = Xl(), Ze.RegexTokeniser = Vl().RegexTokeniser, Ze.rule = function(e) {
    var n;
    return function(t) {
      return n || (n = e()), n(t);
    };
  }), Ze;
}
var We = {}, kc;
function Hl() {
  if (kc) return We;
  kc = 1, We.paragraph = e, We.run = n, We.table = t, We.bold = new c("bold"), We.italic = new c("italic"), We.underline = new c("underline"), We.strikethrough = new c("strikethrough"), We.allCaps = new c("allCaps"), We.smallCaps = new c("smallCaps"), We.highlight = r, We.commentReference = new c("commentReference"), We.lineBreak = new a({ breakType: "line" }), We.pageBreak = new a({ breakType: "page" }), We.columnBreak = new a({ breakType: "column" }), We.equalTo = u, We.startsWith = l;
  function e(g) {
    return new c("paragraph", g);
  }
  function n(g) {
    return new c("run", g);
  }
  function t(g) {
    return new c("table", g);
  }
  function r(g) {
    return new i(g);
  }
  function c(g, h) {
    h = h || {}, this._elementType = g, this._styleId = h.styleId, this._styleName = h.styleName, h.list && (this._listIndex = h.list.levelIndex, this._listIsOrdered = h.list.isOrdered);
  }
  c.prototype.matches = function(g) {
    return g.type === this._elementType && (this._styleId === void 0 || g.styleId === this._styleId) && (this._styleName === void 0 || g.styleName && this._styleName.operator(this._styleName.operand, g.styleName)) && (this._listIndex === void 0 || o(g, this._listIndex, this._listIsOrdered)) && (this._breakType === void 0 || this._breakType === g.breakType);
  };
  function i(g) {
    g = g || {}, this._color = g.color;
  }
  i.prototype.matches = function(g) {
    return g.type === "highlight" && (this._color === void 0 || g.color === this._color);
  };
  function a(g) {
    g = g || {}, this._breakType = g.breakType;
  }
  a.prototype.matches = function(g) {
    return g.type === "break" && (this._breakType === void 0 || g.breakType === this._breakType);
  };
  function o(g, h, y) {
    return g.numbering && g.numbering.level == h && g.numbering.isOrdered == y;
  }
  function u(g) {
    return {
      operator: b,
      operand: g
    };
  }
  function l(g) {
    return {
      operator: m,
      operand: g
    };
  }
  function b(g, h) {
    return g.toUpperCase() === h.toUpperCase();
  }
  function m(g, h) {
    return h.toUpperCase().indexOf(g.toUpperCase()) === 0;
  }
  return We;
}
var vi = {}, Wc;
function Gl() {
  if (Wc) return vi;
  Wc = 1;
  var e = Ts(), n = e.RegexTokeniser;
  vi.tokenise = r;
  var t = "'((?:\\\\.|[^'])*)";
  function r(c) {
    var i = "(?:[a-zA-Z\\-_]|\\\\.)", a = new n([
      { name: "identifier", regex: new RegExp("(" + i + "(?:" + i + "|[0-9])*)") },
      { name: "dot", regex: /\./ },
      { name: "colon", regex: /:/ },
      { name: "gt", regex: />/ },
      { name: "whitespace", regex: /\s+/ },
      { name: "arrow", regex: /=>/ },
      { name: "equals", regex: /=/ },
      { name: "startsWith", regex: /\^=/ },
      { name: "open-paren", regex: /\(/ },
      { name: "close-paren", regex: /\)/ },
      { name: "open-square-bracket", regex: /\[/ },
      { name: "close-square-bracket", regex: /\]/ },
      { name: "string", regex: new RegExp(t + "'") },
      { name: "unterminated-string", regex: new RegExp(t) },
      { name: "integer", regex: /([0-9]+)/ },
      { name: "choice", regex: /\|/ },
      { name: "bang", regex: /(!)/ }
    ]);
    return a.tokenise(c);
  }
  return vi;
}
var Rc;
function Zl() {
  if (Rc) return Yn;
  Rc = 1;
  var e = Be, n = Ts(), t = Hl(), r = mr(), c = Gl().tokenise, i = an();
  Yn.readHtmlPath = b, Yn.readDocumentMatcher = u, Yn.readStyle = a;
  function a(S) {
    return w(E, S);
  }
  function o() {
    return n.rules.sequence(
      n.rules.sequence.capture(l()),
      n.rules.tokenOfType("whitespace"),
      n.rules.tokenOfType("arrow"),
      n.rules.sequence.capture(n.rules.optional(n.rules.sequence(
        n.rules.tokenOfType("whitespace"),
        n.rules.sequence.capture(m())
      ).head())),
      n.rules.tokenOfType("end")
    ).map(function(S, A) {
      return {
        from: S,
        to: A.valueOrElse(r.empty)
      };
    });
  }
  function u(S) {
    return w(l(), S);
  }
  function l() {
    var S = n.rules.sequence, A = function(ge, be) {
      return n.rules.then(
        n.rules.token("identifier", ge),
        function() {
          return be;
        }
      );
    }, I = A("p", t.paragraph), Z = A("r", t.run), T = n.rules.firstOf(
      "p or r or table",
      I,
      Z
    ), R = n.rules.sequence(
      n.rules.tokenOfType("dot"),
      n.rules.sequence.cut(),
      n.rules.sequence.capture(g)
    ).map(function(ge) {
      return { styleId: ge };
    }), x = n.rules.firstOf(
      "style name matcher",
      n.rules.then(
        n.rules.sequence(
          n.rules.tokenOfType("equals"),
          n.rules.sequence.cut(),
          n.rules.sequence.capture(y)
        ).head(),
        function(ge) {
          return { styleName: t.equalTo(ge) };
        }
      ),
      n.rules.then(
        n.rules.sequence(
          n.rules.tokenOfType("startsWith"),
          n.rules.sequence.cut(),
          n.rules.sequence.capture(y)
        ).head(),
        function(ge) {
          return { styleName: t.startsWith(ge) };
        }
      )
    ), z = n.rules.sequence(
      n.rules.tokenOfType("open-square-bracket"),
      n.rules.sequence.cut(),
      n.rules.token("identifier", "style-name"),
      n.rules.sequence.capture(x),
      n.rules.tokenOfType("close-square-bracket")
    ).head(), W = n.rules.firstOf(
      "list type",
      A("ordered-list", { isOrdered: !0 }),
      A("unordered-list", { isOrdered: !1 })
    ), O = S(
      n.rules.tokenOfType("colon"),
      S.capture(W),
      S.cut(),
      n.rules.tokenOfType("open-paren"),
      S.capture(h),
      n.rules.tokenOfType("close-paren")
    ).map(function(ge, be) {
      return {
        list: {
          isOrdered: ge.isOrdered,
          levelIndex: be - 1
        }
      };
    });
    function G(ge) {
      var be = n.rules.firstOf.apply(
        n.rules.firstOf,
        ["matcher suffix"].concat(ge)
      ), Te = n.rules.zeroOrMore(be);
      return n.rules.then(Te, function(Ae) {
        var v = {};
        return Ae.forEach(function($) {
          e.extend(v, $);
        }), v;
      });
    }
    var q = S(
      S.capture(T),
      S.capture(G([
        R,
        z,
        O
      ]))
    ).map(function(ge, be) {
      return ge(be);
    }), Q = S(
      n.rules.token("identifier", "table"),
      S.capture(G([
        R,
        z
      ]))
    ).map(function(ge) {
      return t.table(ge);
    }), L = A("b", t.bold), k = A("i", t.italic), re = A("u", t.underline), ae = A("strike", t.strikethrough), J = A("all-caps", t.allCaps), ce = A("small-caps", t.smallCaps), fe = S(
      n.rules.token("identifier", "highlight"),
      n.rules.sequence.capture(n.rules.optional(n.rules.sequence(
        n.rules.tokenOfType("open-square-bracket"),
        n.rules.sequence.cut(),
        n.rules.token("identifier", "color"),
        n.rules.tokenOfType("equals"),
        n.rules.sequence.capture(y),
        n.rules.tokenOfType("close-square-bracket")
      ).head()))
    ).map(function(ge) {
      return t.highlight({
        color: ge.valueOrElse(void 0)
      });
    }), le = A("comment-reference", t.commentReference), he = S(
      n.rules.token("identifier", "br"),
      S.cut(),
      n.rules.tokenOfType("open-square-bracket"),
      n.rules.token("identifier", "type"),
      n.rules.tokenOfType("equals"),
      S.capture(y),
      n.rules.tokenOfType("close-square-bracket")
    ).map(function(ge) {
      switch (ge) {
        case "line":
          return t.lineBreak;
        case "page":
          return t.pageBreak;
        case "column":
          return t.columnBreak;
      }
    });
    return n.rules.firstOf(
      "element type",
      q,
      Q,
      L,
      k,
      re,
      ae,
      J,
      ce,
      fe,
      le,
      he
    );
  }
  function b(S) {
    return w(m(), S);
  }
  function m() {
    var S = n.rules.sequence.capture, A = n.rules.tokenOfType("whitespace"), I = n.rules.then(
      n.rules.optional(n.rules.sequence(
        n.rules.tokenOfType("colon"),
        n.rules.token("identifier", "fresh")
      )),
      function(x) {
        return x.map(function() {
          return !0;
        }).valueOrElse(!1);
      }
    ), Z = n.rules.then(
      n.rules.optional(n.rules.sequence(
        n.rules.tokenOfType("colon"),
        n.rules.token("identifier", "separator"),
        n.rules.tokenOfType("open-paren"),
        S(y),
        n.rules.tokenOfType("close-paren")
      ).head()),
      function(x) {
        return x.valueOrElse("");
      }
    ), T = n.rules.oneOrMoreWithSeparator(
      g,
      n.rules.tokenOfType("choice")
    ), R = n.rules.sequence(
      S(T),
      S(n.rules.zeroOrMore(D)),
      S(I),
      S(Z)
    ).map(function(x, z, W, O) {
      var G = {}, q = {};
      return z.forEach(function(Q) {
        Q.append && G[Q.name] ? G[Q.name] += " " + Q.value : G[Q.name] = Q.value;
      }), W && (q.fresh = !0), O && (q.separator = O), r.element(x, G, q);
    });
    return n.rules.firstOf(
      "html path",
      n.rules.then(n.rules.tokenOfType("bang"), function() {
        return r.ignore;
      }),
      n.rules.then(
        n.rules.zeroOrMoreWithSeparator(
          R,
          n.rules.sequence(
            A,
            n.rules.tokenOfType("gt"),
            A
          )
        ),
        r.elements
      )
    );
  }
  var g = n.rules.then(
    n.rules.tokenOfType("identifier"),
    s
  ), h = n.rules.tokenOfType("integer"), y = n.rules.then(
    n.rules.tokenOfType("string"),
    s
  ), f = {
    n: `
`,
    r: "\r",
    t: "	"
  };
  function s(S) {
    return S.replace(/\\(.)/g, function(A, I) {
      return f[I] || I;
    });
  }
  var p = n.rules.sequence(
    n.rules.tokenOfType("open-square-bracket"),
    n.rules.sequence.cut(),
    n.rules.sequence.capture(g),
    n.rules.tokenOfType("equals"),
    n.rules.sequence.capture(y),
    n.rules.tokenOfType("close-square-bracket")
  ).map(function(S, A) {
    return { name: S, value: A, append: !1 };
  }), d = n.rules.sequence(
    n.rules.tokenOfType("dot"),
    n.rules.sequence.cut(),
    n.rules.sequence.capture(g)
  ).map(function(S) {
    return { name: "class", value: S, append: !0 };
  }), D = n.rules.firstOf(
    "attribute or class",
    p,
    d
  );
  function w(S, A) {
    var I = c(A), Z = n.Parser(), T = Z.parseTokens(S, I);
    return T.isSuccess() ? i.success(T.value()) : new i.Result(null, [i.warning(_(A, T))]);
  }
  function _(S, A) {
    return "Did not understand this style mapping, so ignored it: " + S + `
` + A.errors().map(U).join(`
`);
  }
  function U(S) {
    return "Error was at character number " + S.characterNumber() + ": Expected " + S.expected + " but got " + S.actual;
  }
  var E = o();
  return Yn;
}
var Kn = {}, Nc;
function $l() {
  if (Nc) return Kn;
  Nc = 1, Kn.readOptions = r;
  var e = Be, n = Kn._defaultStyleMap = [
    "p.Heading1 => h1:fresh",
    "p.Heading2 => h2:fresh",
    "p.Heading3 => h3:fresh",
    "p.Heading4 => h4:fresh",
    "p.Heading5 => h5:fresh",
    "p.Heading6 => h6:fresh",
    "p[style-name='Heading 1'] => h1:fresh",
    "p[style-name='Heading 2'] => h2:fresh",
    "p[style-name='Heading 3'] => h3:fresh",
    "p[style-name='Heading 4'] => h4:fresh",
    "p[style-name='Heading 5'] => h5:fresh",
    "p[style-name='Heading 6'] => h6:fresh",
    "p[style-name='heading 1'] => h1:fresh",
    "p[style-name='heading 2'] => h2:fresh",
    "p[style-name='heading 3'] => h3:fresh",
    "p[style-name='heading 4'] => h4:fresh",
    "p[style-name='heading 5'] => h5:fresh",
    "p[style-name='heading 6'] => h6:fresh",
    // Apple Pages
    "p.Heading => h1:fresh",
    "p[style-name='Heading'] => h1:fresh",
    "r[style-name='Strong'] => strong",
    "p[style-name='footnote text'] => p:fresh",
    "r[style-name='footnote reference'] =>",
    "p[style-name='endnote text'] => p:fresh",
    "r[style-name='endnote reference'] =>",
    "p[style-name='annotation text'] => p:fresh",
    "r[style-name='annotation reference'] =>",
    // LibreOffice
    "p[style-name='Footnote'] => p:fresh",
    "r[style-name='Footnote anchor'] =>",
    "p[style-name='Endnote'] => p:fresh",
    "r[style-name='Endnote anchor'] =>",
    "p:unordered-list(1) => ul > li:fresh",
    "p:unordered-list(2) => ul|ol > li > ul > li:fresh",
    "p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh",
    "p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
    "p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
    "p:ordered-list(1) => ol > li:fresh",
    "p:ordered-list(2) => ul|ol > li > ol > li:fresh",
    "p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh",
    "p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
    "p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
    "r[style-name='Hyperlink'] =>",
    "p[style-name='Normal'] => p:fresh",
    // Apple Pages
    "p.Body => p:fresh",
    "p[style-name='Body'] => p:fresh"
  ], t = Kn._standardOptions = {
    transformDocument: i,
    includeDefaultStyleMap: !0,
    includeEmbeddedStyleMap: !0
  };
  function r(a) {
    return a = a || {}, e.extend({}, t, a, {
      customStyleMap: c(a.styleMap),
      readStyleMap: function() {
        var o = this.customStyleMap;
        return this.includeEmbeddedStyleMap && (o = o.concat(c(this.embeddedStyleMap))), this.includeDefaultStyleMap && (o = o.concat(n)), o;
      }
    });
  }
  function c(a) {
    return a ? e.isString(a) ? a.split(`
`).map(function(o) {
      return o.trim();
    }).filter(function(o) {
      return o !== "" && o.charAt(0) !== "#";
    }) : a : [];
  }
  function i(a) {
    return a;
  }
  return Kn;
}
var xi = {}, Oc;
function Yl() {
  if (Oc) return xi;
  Oc = 1;
  var e = mn(), n = fs();
  xi.openZip = t;
  function t(r) {
    return r.arrayBuffer ? e.resolve(n.openArrayBuffer(r.arrayBuffer)) : e.reject(new Error("Could not find file in options"));
  }
  return xi;
}
var _i = {}, Ic;
function Kl() {
  if (Ic) return _i;
  Ic = 1;
  var e = mr(), n = gr();
  _i.element = t;
  function t(r) {
    return function(c) {
      return n.elementWithTag(e.element(r), [c]);
    };
  }
  return _i;
}
var Lc;
function Ql() {
  if (Lc) return Xe;
  Lc = 1;
  var e = Be, n = kl(), t = Wl(), r = Ll().DocumentConverter, c = Ml().convertElementToRawText, i = Zl().readStyle, a = $l().readOptions, o = Yl(), u = an().Result;
  Xe.convertToHtml = l, Xe.convertToMarkdown = b, Xe.convert = m, Xe.extractRawText = f, Xe.images = Ds(), Xe.transforms = bs(), Xe.underline = Kl(), Xe.embedStyleMap = s, Xe.readEmbeddedStyleMap = g;
  function l(p, d) {
    return m(p, d);
  }
  function b(p, d) {
    var D = Object.create(d || {});
    return D.outputFormat = "markdown", m(p, D);
  }
  function m(p, d) {
    return d = a(d), o.openZip(p).tap(function(D) {
      return t.readStyleMap(D).then(function(w) {
        d.embeddedStyleMap = w;
      });
    }).then(function(D) {
      return n.read(D, p).then(function(w) {
        return w.map(d.transformDocument);
      }).then(function(w) {
        return h(w, d);
      });
    });
  }
  function g(p) {
    return o.openZip(p).then(t.readStyleMap);
  }
  function h(p, d) {
    var D = y(d.readStyleMap()), w = e.extend({}, d, {
      styleMap: D.value
    }), _ = new r(w);
    return p.flatMapThen(function(U) {
      return D.flatMapThen(function(E) {
        return _.convertToHtml(U);
      });
    });
  }
  function y(p) {
    return u.combine((p || []).map(i)).map(function(d) {
      return d.filter(function(D) {
        return !!D;
      });
    });
  }
  function f(p) {
    return o.openZip(p).then(n.read).then(function(d) {
      return d.map(c);
    });
  }
  function s(p, d) {
    return o.openZip(p).tap(function(D) {
      return t.writeStyleMap(D, d);
    }).then(function(D) {
      return D.toArrayBuffer();
    }).then(function(D) {
      return {
        toArrayBuffer: function() {
          return D;
        },
        toBuffer: function() {
          return Buffer.from(D);
        }
      };
    });
  }
  return Xe.styleMapping = function() {
    throw new Error(`Use a raw string instead of mammoth.styleMapping e.g. "p[style-name='Title'] => h1" instead of mammoth.styleMapping("p[style-name='Title'] => h1")`);
  }, Xe;
}
var Jl = Ql();
const ef = /* @__PURE__ */ Ss(Jl);
function nf(e, n) {
  const t = atob(e.split(",")[1]), r = Array.from({ length: t.length });
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  const c = new Uint8Array(r);
  return new Blob([c], { type: n });
}
function tf(e, n) {
  return new File([e], n, { type: e.type });
}
function rf(e) {
  const { toast: n } = Bs(), { t } = Rs(), [r, c] = As(!1), i = Fs(null);
  function a() {
    var m;
    (m = i.current) == null || m.click();
  }
  function o(m) {
    const g = m.target.files[0];
    if (g) {
      if (g.size > e.limit) {
        n({
          variant: "destructive",
          title: t("editor.importWord.limitSize")
        });
        return;
      }
      l(g);
    }
  }
  async function u(m) {
    var s;
    const h = new DOMParser().parseFromString(m, "text/html"), y = h.querySelectorAll("img");
    if (y.length === 0)
      return h.body.innerHTML;
    if (Ws(e.editor, "image")) {
      const p = (s = e.editor.extensionManager.extensions.find(
        (d) => d.name === "importWord"
      )) == null ? void 0 : s.options;
      if (p && typeof p.upload == "function") {
        const d = [];
        for (const w of y) {
          const _ = w.getAttribute("src"), U = nf(_, "image/jpeg"), E = tf(U, "image.jpeg");
          d.push(E);
        }
        const D = await p.upload(d);
        for (const [w, _] of y.entries()) {
          _.setAttribute("src", D[w].src);
          const U = _.parentElement;
          (U == null ? void 0 : U.tagName) === "P" && (U.insertAdjacentElement("beforebegin", _), !U.hasChildNodes() && U.textContent === "" && U.remove());
        }
        return h.body.innerHTML;
      } else
        return console.warn("Image Upload method found, skip image conversion"), h.body.innerHTML;
    } else
      return console.error("Image extension not found, unable to convert image"), h.body.innerHTML;
  }
  async function l(m) {
    c(!0);
    try {
      if (e.convert) {
        const g = await e.convert(m);
        b(g);
      } else {
        const g = await m.arrayBuffer(), { value: h } = await ef.convertToHtml(
          { arrayBuffer: g },
          e == null ? void 0 : e.mammothOptions
        );
        b(h);
      }
    } finally {
      c(!1);
    }
  }
  async function b(m) {
    const g = await u(m);
    e.editor.chain().setContent(g, !0).run();
  }
  return /* @__PURE__ */ Es("div", { children: [
    /* @__PURE__ */ ba(
      ks,
      {
        action: a,
        disabled: e == null ? void 0 : e.disabled,
        icon: e == null ? void 0 : e.icon,
        loading: r,
        tooltip: e == null ? void 0 : e.tooltip,
        tooltipOptions: e == null ? void 0 : e.tooltipOptions
      }
    ),
    /* @__PURE__ */ ba(
      "input",
      {
        accept: ".docx",
        onChange: o,
        ref: i,
        type: "file",
        style: {
          display: "none"
        }
      }
    )
  ] });
}
const df = /* @__PURE__ */ ws.create({
  name: "importWord",
  addOptions() {
    var e;
    return {
      ...(e = this.parent) == null ? void 0 : e.call(this),
      upload: void 0,
      convert: void 0,
      limit: 1024 * 1024 * 10,
      // 10 MB
      button: ({ editor: n, extension: t, t: r }) => {
        const { convert: c, limit: i, mammothOptions: a } = t.options;
        return {
          component: rf,
          componentProps: {
            editor: n,
            convert: c,
            limit: i,
            mammothOptions: a,
            action: () => n.commands.setHorizontalRule(),
            disabled: !n.can().setHorizontalRule(),
            icon: "Word",
            shortcutKeys: t.options.shortcutKeys ?? ["alt", "mod", "S"],
            tooltip: r("editor.importWord.tooltip")
          }
        };
      }
    };
  }
});
export {
  df as ImportWord
};
