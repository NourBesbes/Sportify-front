var firebase = require('./app');
(function () {
  /*! @license Firebase v3.7.3
      Build: 3.7.3-rc.1
      Terms: https://firebase.google.com/terms/ */
  (function () {
    var h,
        aa = aa || {},
        l = this,
        ba = function ba() {},
        ca = function ca(a) {
      var b = typeof a;if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    },
        da = function da(a) {
      return null === a;
    },
        ea = function ea(a) {
      return "array" == ca(a);
    },
        fa = function fa(a) {
      var b = ca(a);return "array" == b || "object" == b && "number" == typeof a.length;
    },
        m = function m(a) {
      return "string" == typeof a;
    },
        ga = function ga(a) {
      return "number" == typeof a;
    },
        p = function p(a) {
      return "function" == ca(a);
    },
        ha = function ha(a) {
      var b = typeof a;return "object" == b && null != a || "function" == b;
    },
        ia = function ia(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
        ja = function ja(a, b, c) {
      if (!a) throw Error();if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);return function () {
          var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
        };
      }return function () {
        return a.apply(b, arguments);
      };
    },
        _q = function q(a, b, c) {
      _q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;return _q.apply(null, arguments);
    },
        ka = function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);return function () {
        var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
      };
    },
        la = Date.now || function () {
      return +new Date();
    },
        r = function r(a, b) {
      function c() {}c.prototype = b.prototype;a.ud = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.ag = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
          d[e - 2] = arguments[e];
        }return b.prototype[c].apply(a, d);
      };
    };var t = function t(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
        var b = Error().stack;b && (this.stack = b);
      }a && (this.message = String(a));
    };r(t, Error);t.prototype.name = "CustomError";var ma = function ma(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
        d += c.shift() + e.shift();
      }return d + c.join("%s");
    },
        na = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = /\x00/g,
        ua = /[\x00&<>"']/,
        u = function u(a, b) {
      return -1 != a.indexOf(b);
    },
        va = function va(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var wa = function wa(a, b) {
      b.unshift(a);t.call(this, ma.apply(null, b));b.shift();
    };r(wa, t);wa.prototype.name = "AssertionError";
    var xa = function xa(a, b, c, d) {
      var e = "Assertion failed";if (c) var e = e + (": " + c),
          f = d;else a && (e += ": " + a, f = b);throw new wa("" + e, f || []);
    },
        v = function v(a, b, c) {
      a || xa("", null, b, Array.prototype.slice.call(arguments, 2));
    },
        ya = function ya(a, b) {
      throw new wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
        za = function za(a, b, c) {
      ga(a) || xa("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));return a;
    },
        Aa = function Aa(a, b, c) {
      m(a) || xa("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
        Ba = function Ba(a, b, c) {
      p(a) || xa("Expected function but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
    };var Ca = Array.prototype.indexOf ? function (a, b, c) {
      v(null != a.length);return Array.prototype.indexOf.call(a, b, c);
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }return -1;
    },
        w = Array.prototype.forEach ? function (a, b, c) {
      v(null != a.length);Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    },
        Da = function Da(a, b) {
      for (var c = m(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    },
        Ea = Array.prototype.map ? function (a, b, c) {
      v(null != a.length);return Array.prototype.map.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++) {
        g in f && (e[g] = b.call(c, f[g], g, a));
      }return e;
    },
        Fa = Array.prototype.some ? function (a, b, c) {
      v(null != a.length);return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return !0;
      }return !1;
    },
        Ha = function Ha(a) {
      var b;a: {
        b = Ga;for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;break a;
          }
        }b = -1;
      }return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
    },
        Ia = function Ia(a, b) {
      return 0 <= Ca(a, b);
    },
        Ka = function Ka(a, b) {
      b = Ca(a, b);var c;(c = 0 <= b) && Ja(a, b);return c;
    },
        Ja = function Ja(a, b) {
      v(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
        La = function La(a, b) {
      var c = 0;Da(a, function (d, e) {
        b.call(void 0, d, e, a) && Ja(a, e) && c++;
      });
    },
        Ma = function Ma(a) {
      return Array.prototype.concat.apply([], arguments);
    },
        Na = function Na(a) {
      var b = a.length;if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }return c;
      }return [];
    };var Oa = function Oa(a, b) {
      for (var c in a) {
        b.call(void 0, a[c], c, a);
      }
    },
        Pa = function Pa(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = a[d];
      }return b;
    },
        Qa = function Qa(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = d;
      }return b;
    },
        Ra = function Ra(a) {
      for (var b in a) {
        return !1;
      }return !0;
    },
        Sa = function Sa(a, b) {
      for (var c in a) {
        if (!(c in b) || a[c] !== b[c]) return !1;
      }for (c in b) {
        if (!(c in a)) return !1;
      }return !0;
    },
        Ta = function Ta(a) {
      var b = {},
          c;for (c in a) {
        b[c] = a[c];
      }return b;
    },
        Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Va = function Va(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];for (c in d) {
          a[c] = d[c];
        }for (var f = 0; f < Ua.length; f++) {
          c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    };var Wa;a: {
      var Xa = l.navigator;if (Xa) {
        var Ya = Xa.userAgent;if (Ya) {
          Wa = Ya;break a;
        }
      }Wa = "";
    }var x = function x(a) {
      return u(Wa, a);
    };var Za = function Za(a) {
      Za[" "](a);return a;
    };Za[" "] = ba;var ab = function ab(a, b) {
      var c = $a;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var bb = x("Opera"),
        y = x("Trident") || x("MSIE"),
        cb = x("Edge"),
        eb = cb || y,
        fb = x("Gecko") && !(u(Wa.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
        gb = u(Wa.toLowerCase(), "webkit") && !x("Edge"),
        hb = function hb() {
      var a = l.document;return a ? a.documentMode : void 0;
    },
        ib;
    a: {
      var jb = "",
          kb = function () {
        var a = Wa;if (fb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
        );if (cb) return (/Edge\/([\d\.]+)/.exec(a)
        );if (y) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (gb) return (/WebKit\/(\S+)/.exec(a)
        );if (bb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();kb && (jb = kb ? kb[1] : "");if (y) {
        var lb = hb();if (null != lb && lb > parseFloat(jb)) {
          ib = String(lb);break a;
        }
      }ib = jb;
    }
    var mb = ib,
        $a = {},
        z = function z(a) {
      return ab(a, function () {
        for (var b = 0, c = na(String(mb)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              k = d[f] || "";do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];if (0 == g[0].length && 0 == k[0].length) break;b = va(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || va(0 == g[2].length, 0 == k[2].length) || va(g[2], k[2]);g = g[3];k = k[3];
          } while (0 == b);
        }return 0 <= b;
      });
    },
        nb;var ob = l.document;
    nb = ob && y ? hb() || ("CSS1Compat" == ob.compatMode ? parseInt(mb, 10) : 5) : void 0;var pb = function pb(a) {
      return Ea(a, function (a) {
        a = a.toString(16);return 1 < a.length ? a : "0" + a;
      }).join("");
    };var qb = null,
        rb = null,
        tb = function tb(a) {
      var b = "";sb(a, function (a) {
        b += String.fromCharCode(a);
      });return b;
    },
        sb = function sb(a, b) {
      function c(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
              e = rb[c];if (null != e) return e;if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }return b;
      }ub();for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            k = c(64);if (64 === k && -1 === e) break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
      }
    },
        ub = function ub() {
      if (!qb) {
        qb = {};rb = {};for (var a = 0; 65 > a; a++) {
          qb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), rb[qb[a]] = a, 62 <= a && (rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
        }
      }
    };var vb = function vb() {
      this.Ba = -1;
    };var yb = function yb(a, b) {
      this.Ba = 64;this.Zb = l.Uint8Array ? new Uint8Array(this.Ba) : Array(this.Ba);this.Dc = this.eb = 0;this.h = [];this.nf = a;this.Rd = b;this.Uf = l.Int32Array ? new Int32Array(64) : Array(64);void 0 !== wb || (wb = l.Int32Array ? new Int32Array(xb) : xb);this.reset();
    },
        wb;r(yb, vb);for (var zb = [], Ab = 0; 63 > Ab; Ab++) {
      zb[Ab] = 0;
    }var Bb = Ma(128, zb);yb.prototype.reset = function () {
      this.Dc = this.eb = 0;this.h = l.Int32Array ? new Int32Array(this.Rd) : Na(this.Rd);
    };
    var Cb = function Cb(a) {
      var b = a.Zb;v(b.length == a.Ba);for (var c = a.Uf, d = 0, e = 0; e < b.length;) {
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      }for (b = 16; 64 > b; b++) {
        var e = c[b - 15] | 0,
            d = c[b - 2] | 0,
            f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
            g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;c[b] = f + g | 0;
      }for (var d = a.h[0] | 0, e = a.h[1] | 0, k = a.h[2] | 0, n = a.h[3] | 0, A = a.h[4] | 0, db = a.h[5] | 0, Nb = a.h[6] | 0, f = a.h[7] | 0, b = 0; 64 > b; b++) {
        var Ah = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0,
            g = A & db ^ ~A & Nb,
            f = f + ((A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) | 0,
            g = g + (wb[b] | 0) | 0,
            g = f + (g + (c[b] | 0) | 0) | 0,
            f = Nb,
            Nb = db,
            db = A,
            A = n + g | 0,
            n = k,
            k = e,
            e = d,
            d = g + Ah | 0;
      }a.h[0] = a.h[0] + d | 0;a.h[1] = a.h[1] + e | 0;a.h[2] = a.h[2] + k | 0;a.h[3] = a.h[3] + n | 0;a.h[4] = a.h[4] + A | 0;a.h[5] = a.h[5] + db | 0;a.h[6] = a.h[6] + Nb | 0;a.h[7] = a.h[7] + f | 0;
    };
    yb.prototype.update = function (a, b) {
      void 0 === b && (b = a.length);var c = 0,
          d = this.eb;if (m(a)) for (; c < b;) {
        this.Zb[d++] = a.charCodeAt(c++), d == this.Ba && (Cb(this), d = 0);
      } else if (fa(a)) for (; c < b;) {
        var e = a[c++];if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");this.Zb[d++] = e;d == this.Ba && (Cb(this), d = 0);
      } else throw Error("message must be string or array");this.eb = d;this.Dc += b;
    };
    yb.prototype.digest = function () {
      var a = [],
          b = 8 * this.Dc;56 > this.eb ? this.update(Bb, 56 - this.eb) : this.update(Bb, this.Ba - (this.eb - 56));for (var c = 63; 56 <= c; c--) {
        this.Zb[c] = b & 255, b /= 256;
      }Cb(this);for (c = b = 0; c < this.nf; c++) {
        for (var d = 24; 0 <= d; d -= 8) {
          a[b++] = this.h[c] >> d & 255;
        }
      }return a;
    };
    var xb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];var Eb = function Eb() {
      yb.call(this, 8, Db);
    };r(Eb, yb);var Db = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];var Gb = function Gb() {
      this.Ac = "";this.ze = Fb;
    };Gb.prototype.lc = !0;Gb.prototype.fc = function () {
      return this.Ac;
    };Gb.prototype.toString = function () {
      return "Const{" + this.Ac + "}";
    };var Hb = function Hb(a) {
      if (a instanceof Gb && a.constructor === Gb && a.ze === Fb) return a.Ac;ya("expected object of type Const, got '" + a + "'");return "type_error:Const";
    },
        Fb = {},
        Ib = function Ib(a) {
      var b = new Gb();b.Ac = a;return b;
    };Ib("");var Kb = function Kb() {
      this.uc = "";this.Ae = Jb;
    };Kb.prototype.lc = !0;Kb.prototype.fc = function () {
      return this.uc;
    };Kb.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.uc + "}";
    };var Jb = {};var Mb = function Mb() {
      this.na = "";this.ye = Lb;
    };Mb.prototype.lc = !0;Mb.prototype.fc = function () {
      return this.na;
    };Mb.prototype.toString = function () {
      return "SafeUrl{" + this.na + "}";
    };
    var Ob = function Ob(a) {
      if (a instanceof Mb && a.constructor === Mb && a.ye === Lb) return a.na;ya("expected object of type SafeUrl, got '" + a + "' of type " + ca(a));return "type_error:SafeUrl";
    },
        Pb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        Rb = function Rb(a) {
      if (a instanceof Mb) return a;a = a.lc ? a.fc() : String(a);Pb.test(a) || (a = "about:invalid#zClosurez");return Qb(a);
    },
        Lb = {},
        Qb = function Qb(a) {
      var b = new Mb();b.na = a;return b;
    };Qb("about:blank");var Tb = function Tb() {
      this.na = "";this.xe = Sb;
    };Tb.prototype.lc = !0;Tb.prototype.fc = function () {
      return this.na;
    };Tb.prototype.toString = function () {
      return "SafeHtml{" + this.na + "}";
    };var Ub = function Ub(a) {
      if (a instanceof Tb && a.constructor === Tb && a.xe === Sb) return a.na;ya("expected object of type SafeHtml, got '" + a + "' of type " + ca(a));return "type_error:SafeHtml";
    },
        Sb = {};Tb.prototype.df = function (a) {
      this.na = a;return this;
    };var Vb = "StopIteration" in l ? l.StopIteration : { message: "StopIteration", stack: "" },
        Wb = function Wb() {};Wb.prototype.next = function () {
      throw Vb;
    };Wb.prototype.Be = function () {
      return this;
    };var Xb = function Xb(a, b) {
      this.ea = {};this.w = [];this.ub = this.o = 0;var c = arguments.length;if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else a && this.addAll(a);
    };Xb.prototype.X = function () {
      Yb(this);for (var a = [], b = 0; b < this.w.length; b++) {
        a.push(this.ea[this.w[b]]);
      }return a;
    };Xb.prototype.ma = function () {
      Yb(this);return this.w.concat();
    };Xb.prototype.wb = function (a) {
      return Zb(this.ea, a);
    };
    Xb.prototype.remove = function (a) {
      return Zb(this.ea, a) ? (delete this.ea[a], this.o--, this.ub++, this.w.length > 2 * this.o && Yb(this), !0) : !1;
    };var Yb = function Yb(a) {
      if (a.o != a.w.length) {
        for (var b = 0, c = 0; b < a.w.length;) {
          var d = a.w[b];Zb(a.ea, d) && (a.w[c++] = d);b++;
        }a.w.length = c;
      }if (a.o != a.w.length) {
        for (var e = {}, c = b = 0; b < a.w.length;) {
          d = a.w[b], Zb(e, d) || (a.w[c++] = d, e[d] = 1), b++;
        }a.w.length = c;
      }
    };h = Xb.prototype;h.get = function (a, b) {
      return Zb(this.ea, a) ? this.ea[a] : b;
    };
    h.set = function (a, b) {
      Zb(this.ea, a) || (this.o++, this.w.push(a), this.ub++);this.ea[a] = b;
    };h.addAll = function (a) {
      var b;a instanceof Xb ? (b = a.ma(), a = a.X()) : (b = Qa(a), a = Pa(a));for (var c = 0; c < b.length; c++) {
        this.set(b[c], a[c]);
      }
    };h.forEach = function (a, b) {
      for (var c = this.ma(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);a.call(b, f, e, this);
      }
    };h.clone = function () {
      return new Xb(this);
    };
    h.Be = function (a) {
      Yb(this);var b = 0,
          c = this.ub,
          d = this,
          e = new Wb();e.next = function () {
        if (c != d.ub) throw Error("The map has changed since the iterator was created");if (b >= d.w.length) throw Vb;var e = d.w[b++];return a ? e : d.ea[e];
      };return e;
    };var Zb = function Zb(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };var $b = function $b(a) {
      if (a.X && "function" == typeof a.X) return a.X();if (m(a)) return a.split("");if (fa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }return b;
      }return Pa(a);
    },
        ac = function ac(a) {
      if (a.ma && "function" == typeof a.ma) return a.ma();if (!a.X || "function" != typeof a.X) {
        if (fa(a) || m(a)) {
          var b = [];a = a.length;for (var c = 0; c < a; c++) {
            b.push(c);
          }return b;
        }return Qa(a);
      }
    },
        bc = function bc(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (fa(a) || m(a)) w(a, b, void 0);else for (var c = ac(a), d = $b(a), e = d.length, f = 0; f < e; f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    };var cc = function cc(a, b, c, d, e) {
      this.reset(a, b, c, d, e);
    };cc.prototype.Pc = null;var dc = 0;cc.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || dc++;this.qe = d || la();this.Ja = a;this.Zd = b;this.Yd = c;delete this.Pc;
    };cc.prototype.je = function (a) {
      this.Ja = a;
    };var ec = function ec(a) {
      this.lf = a;this.zb = this.Mc = this.Ja = this.s = null;
    },
        fc = function fc(a, b) {
      this.name = a;this.value = b;
    };fc.prototype.toString = function () {
      return this.name;
    };var gc = new fc("SHOUT", 1200),
        hc = new fc("SEVERE", 1E3),
        ic = new fc("WARNING", 900),
        jc = new fc("CONFIG", 700),
        kc = new fc("FINE", 500);ec.prototype.getParent = function () {
      return this.s;
    };ec.prototype.je = function (a) {
      this.Ja = a;
    };var lc = function lc(a) {
      if (a.Ja) return a.Ja;if (a.s) return lc(a.s);ya("Root logger has no level set.");return null;
    };
    ec.prototype.log = function (a, b, c) {
      if (a.value >= lc(this).value) for (p(b) && (b = b()), a = new cc(a, String(b), this.lf), c && (a.Pc = c), c = "log:" + a.Zd, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
        var d = c,
            e = a;if (d.zb) for (var f = 0; b = d.zb[f]; f++) {
          b(e);
        }c = c.getParent();
      }
    };ec.prototype.xd = function (a, b) {
      this.log(ic, a, b);
    };
    var mc = {},
        nc = null,
        oc = function oc() {
      nc || (nc = new ec(""), mc[""] = nc, nc.je(jc));
    },
        pc = function pc(a) {
      oc();var b;if (!(b = mc[a])) {
        b = new ec(a);var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = pc(a.substr(0, c));c.Mc || (c.Mc = {});c.Mc[d] = b;b.s = c;mc[a] = b;
      }return b;
    };var qc = function qc() {
      this.de = la();
    },
        rc = new qc();qc.prototype.set = function (a) {
      this.de = a;
    };qc.prototype.reset = function () {
      this.set(la());
    };qc.prototype.get = function () {
      return this.de;
    };var sc = function sc(a) {
      this.uf = a || "";this.Nf = rc;
    };h = sc.prototype;h.yd = !0;h.me = !0;h.Lf = !0;h.Kf = !0;h.ne = !1;h.Mf = !1;var tc = function tc(a) {
      return 10 > a ? "0" + a : String(a);
    },
        uc = function uc(a, b) {
      a = (a.qe - b) / 1E3;b = a.toFixed(3);var c = 0;if (1 > a) c = 2;else for (; 100 > a;) {
        c++, a *= 10;
      }for (; 0 < c--;) {
        b = " " + b;
      }return b;
    },
        vc = function vc(a) {
      sc.call(this, a);
    };r(vc, sc);var wc = function wc() {
      this.wf = _q(this.Ee, this);this.bc = new vc();this.bc.me = !1;this.bc.ne = !1;this.Td = this.bc.yd = !1;this.Me = {};
    };
    wc.prototype.Ee = function (a) {
      if (!this.Me[a.Yd]) {
        var b;b = this.bc;var c = [];c.push(b.uf, " ");if (b.me) {
          var d = new Date(a.qe);c.push("[", tc(d.getFullYear() - 2E3) + tc(d.getMonth() + 1) + tc(d.getDate()) + " " + tc(d.getHours()) + ":" + tc(d.getMinutes()) + ":" + tc(d.getSeconds()) + "." + tc(Math.floor(d.getMilliseconds() / 10)), "] ");
        }b.Lf && c.push("[", uc(a, b.Nf.get()), "s] ");b.Kf && c.push("[", a.Yd, "] ");b.Mf && c.push("[", a.Ja.name, "] ");c.push(a.Zd);b.ne && (d = a.Pc) && c.push("\n", d instanceof Error ? d.message : d.toString());b.yd && c.push("\n");
        b = c.join("");if (c = xc) switch (a.Ja) {case gc:
            yc(c, "info", b);break;case hc:
            yc(c, "error", b);break;case ic:
            yc(c, "warn", b);break;default:
            yc(c, "debug", b);}
      }
    };var xc = l.console,
        yc = function yc(a, b, c) {
      if (a[b]) a[b](c);else a.log(c);
    };var zc = !y || 9 <= Number(nb),
        Ac = y && !z("9");!gb || z("528");fb && z("1.9b") || y && z("8") || bb && z("9.5") || gb && z("528");fb && !z("8") || y && z("9");var Bc = function Bc() {
      this.Da = this.Da;this.rc = this.rc;
    };Bc.prototype.Da = !1;Bc.prototype.isDisposed = function () {
      return this.Da;
    };Bc.prototype.$a = function () {
      if (this.rc) for (; this.rc.length;) {
        this.rc.shift()();
      }
    };var Cc = function Cc(a, b) {
      this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.kb = !1;this.fe = !0;
    };Cc.prototype.preventDefault = function () {
      this.defaultPrevented = !0;this.fe = !1;
    };var Dc = function Dc(a, b) {
      Cc.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.key = "";this.charCode = this.keyCode = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.ab = this.state = null;a && this.init(a, b);
    };r(Dc, Cc);
    Dc.prototype.init = function (a, b) {
      var c = this.type = a.type,
          d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;if (b = a.relatedTarget) {
        if (fb) {
          var e;a: {
            try {
              Za(b.nodeName);e = !0;break a;
            } catch (f) {}e = !1;
          }e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);this.relatedTarget = b;null === d ? (this.offsetX = gb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = gb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.key = a.key || "";this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.state = a.state;this.ab = a;a.defaultPrevented && this.preventDefault();
    };Dc.prototype.preventDefault = function () {
      Dc.ud.preventDefault.call(this);var a = this.ab;if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Ac) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };Dc.prototype.Se = function () {
      return this.ab;
    };var Ec = "closure_listenable_" + (1E6 * Math.random() | 0),
        Fc = 0;var Gc = function Gc(a, b, c, d, e) {
      this.listener = a;this.vc = null;this.src = b;this.type = c;this.capture = !!d;this.hc = e;this.key = ++Fc;this.ob = this.Yb = !1;
    },
        Hc = function Hc(a) {
      a.ob = !0;a.listener = null;a.vc = null;a.src = null;a.hc = null;
    };var Ic = function Ic(a) {
      this.src = a;this.F = {};this.Ub = 0;
    };Ic.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();a = this.F[f];a || (a = this.F[f] = [], this.Ub++);var g = Jc(a, b, d, e);-1 < g ? (b = a[g], c || (b.Yb = !1)) : (b = new Gc(b, this.src, f, !!d, e), b.Yb = c, a.push(b));return b;
    };Ic.prototype.remove = function (a, b, c, d) {
      a = a.toString();if (!(a in this.F)) return !1;var e = this.F[a];b = Jc(e, b, c, d);return -1 < b ? (Hc(e[b]), Ja(e, b), 0 == e.length && (delete this.F[a], this.Ub--), !0) : !1;
    };
    var Kc = function Kc(a, b) {
      var c = b.type;c in a.F && Ka(a.F[c], b) && (Hc(b), 0 == a.F[c].length && (delete a.F[c], a.Ub--));
    };Ic.prototype.Sc = function (a, b, c, d) {
      a = this.F[a.toString()];var e = -1;a && (e = Jc(a, b, c, d));return -1 < e ? a[e] : null;
    };var Jc = function Jc(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];if (!f.ob && f.listener == b && f.capture == !!c && f.hc == d) return e;
      }return -1;
    };var Lc = "closure_lm_" + (1E6 * Math.random() | 0),
        Mc = {},
        Nc = 0,
        Oc = function Oc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        Oc(a, b[f], c, d, e);
      } else c = Pc(c), a && a[Ec] ? a.listen(b, c, d, e) : Qc(a, b, c, !1, d, e);
    },
        Qc = function Qc(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");var g = !!e,
          k = Rc(a);k || (a[Lc] = k = new Ic(a));c = k.add(b, c, d, e, f);if (!c.vc) {
        d = Sc();c.vc = d;d.src = a;d.listener = c;if (a.addEventListener) a.addEventListener(b.toString(), d, g);else if (a.attachEvent) a.attachEvent(Tc(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");
        Nc++;
      }
    },
        Sc = function Sc() {
      var a = Uc,
          b = zc ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);if (!c) return c;
      };return b;
    },
        Vc = function Vc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        Vc(a, b[f], c, d, e);
      } else c = Pc(c), a && a[Ec] ? Wc(a, b, c, d, e) : Qc(a, b, c, !0, d, e);
    },
        Xc = function Xc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        Xc(a, b[f], c, d, e);
      } else c = Pc(c), a && a[Ec] ? a.da.remove(String(b), c, d, e) : a && (a = Rc(a)) && (b = a.Sc(b, c, !!d, e)) && Yc(b);
    },
        Yc = function Yc(a) {
      if (!ga(a) && a && !a.ob) {
        var b = a.src;if (b && b[Ec]) Kc(b.da, a);else {
          var c = a.type,
              d = a.vc;b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Tc(c), d);Nc--;(c = Rc(b)) ? (Kc(c, a), 0 == c.Ub && (c.src = null, b[Lc] = null)) : Hc(a);
        }
      }
    },
        Tc = function Tc(a) {
      return a in Mc ? Mc[a] : Mc[a] = "on" + a;
    },
        $c = function $c(a, b, c, d) {
      var e = !0;if (a = Rc(a)) if (b = a.F[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];f && f.capture == c && !f.ob && (f = Zc(f, d), e = e && !1 !== f);
      }return e;
    },
        Zc = function Zc(a, b) {
      var c = a.listener,
          d = a.hc || a.src;a.Yb && Yc(a);return c.call(d, b);
    },
        Uc = function Uc(a, b) {
      if (a.ob) return !0;if (!zc) {
        if (!b) a: {
          b = ["window", "event"];for (var c = l, d; d = b.shift();) {
            if (null != c[d]) c = c[d];else {
              b = null;break a;
            }
          }b = c;
        }d = b;b = new Dc(d, this);c = !0;if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;if (0 == d.keyCode) try {
              d.keyCode = -1;break a;
            } catch (g) {
              e = !0;
            }if (e || void 0 == d.returnValue) d.returnValue = !0;
          }d = [];for (e = b.currentTarget; e; e = e.parentNode) {
            d.push(e);
          }a = a.type;for (e = d.length - 1; !b.kb && 0 <= e; e--) {
            b.currentTarget = d[e];var f = $c(d[e], a, !0, b),
                c = c && f;
          }for (e = 0; !b.kb && e < d.length; e++) {
            b.currentTarget = d[e], f = $c(d[e], a, !1, b), c = c && f;
          }
        }return c;
      }return Zc(a, new Dc(b, this));
    },
        Rc = function Rc(a) {
      a = a[Lc];return a instanceof Ic ? a : null;
    },
        ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Pc = function Pc(a) {
      v(a, "Listener can not be null.");if (p(a)) return a;v(a.handleEvent, "An object listener must have handleEvent method.");a[ad] || (a[ad] = function (b) {
        return a.handleEvent(b);
      });return a[ad];
    };var bd = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var ed = function ed(a) {
      var b = [];cd(new dd(), a, b);return b.join("");
    },
        dd = function dd() {
      this.wc = void 0;
    },
        cd = function cd(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (ea(b)) {
            var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++) {
              c.push(e), e = d[f], cd(a, a.wc ? a.wc.call(d, String(f), e) : e, c), e = ",";
            }c.push("]");return;
          }if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");f = "";for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), fd(d, c), c.push(":"), cd(a, a.wc ? a.wc.call(b, d, e) : e, c), f = ","));
            }c.push("}");return;
          }
        }switch (typeof b) {case "string":
            fd(b, c);break;case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":
            c.push(String(b));break;case "function":
            c.push("null");break;default:
            throw Error("Unknown type: " + typeof b);}
      }
    },
        gd = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        hd = /\uffff/.test("\uFFFF") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        fd = function fd(a, b) {
      b.push('"', a.replace(hd, function (a) {
        var b = gd[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), gd[a] = b);return b;
      }), '"');
    };var id = function id() {};id.prototype.Ad = null;var jd = function jd(a) {
      return a.Ad || (a.Ad = a.Zc());
    };var kd,
        ld = function ld() {};r(ld, id);ld.prototype.$b = function () {
      var a = md(this);return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };ld.prototype.Zc = function () {
      var a = {};md(this) && (a[0] = !0, a[1] = !0);return a;
    };
    var md = function md(a) {
      if (!a.Qd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];try {
            return new ActiveXObject(d), a.Qd = d;
          } catch (e) {}
        }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }return a.Qd;
    };kd = new ld();var nd = function nd() {};r(nd, id);nd.prototype.$b = function () {
      var a = new XMLHttpRequest();if ("withCredentials" in a) return a;if ("undefined" != typeof XDomainRequest) return new od();throw Error("Unsupported browser");
    };nd.prototype.Zc = function () {
      return {};
    };
    var od = function od() {
      this.qa = new XDomainRequest();this.readyState = 0;this.onreadystatechange = null;this.responseText = "";this.status = -1;this.statusText = this.responseXML = null;this.qa.onload = _q(this.Ve, this);this.qa.onerror = _q(this.Od, this);this.qa.onprogress = _q(this.We, this);this.qa.ontimeout = _q(this.Xe, this);
    };h = od.prototype;h.open = function (a, b, c) {
      if (null != c && !c) throw Error("Only async requests are supported.");this.qa.open(a, b);
    };
    h.send = function (a) {
      if (a) {
        if ("string" == typeof a) this.qa.send(a);else throw Error("Only string data is supported");
      } else this.qa.send();
    };h.abort = function () {
      this.qa.abort();
    };h.setRequestHeader = function () {};h.Ve = function () {
      this.status = 200;this.responseText = this.qa.responseText;pd(this, 4);
    };h.Od = function () {
      this.status = 500;this.responseText = "";pd(this, 4);
    };h.Xe = function () {
      this.Od();
    };h.We = function () {
      this.status = 200;pd(this, 1);
    };var pd = function pd(a, b) {
      a.readyState = b;if (a.onreadystatechange) a.onreadystatechange();
    };!fb && !y || y && 9 <= Number(nb) || fb && z("1.9.1");y && z("9");var rd = function rd(a, b) {
      Oa(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : qd.hasOwnProperty(d) ? a.setAttribute(qd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      });
    },
        qd = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };var sd = function sd(a, b, c) {
      this.hf = c;this.Ie = a;this.Af = b;this.qc = 0;this.ic = null;
    };sd.prototype.get = function () {
      var a;0 < this.qc ? (this.qc--, a = this.ic, this.ic = a.next, a.next = null) : a = this.Ie();return a;
    };sd.prototype.put = function (a) {
      this.Af(a);this.qc < this.hf && (this.qc++, a.next = this.ic, this.ic = a);
    };var td = function td(a) {
      l.setTimeout(function () {
        throw a;
      }, 0);
    },
        ud,
        vd = function vd() {
      var a = l.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function a() {
        var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
            a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
            a = _q(function (a) {
          if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
        }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
            b.postMessage(c, d);
          } };
      });if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {
        var b = new a(),
            c = {},
            d = c;b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;var a = c.Dd;c.Dd = null;a();
          }
        };return function (a) {
          d.next = { Dd: a };d = d.next;b.port2.postMessage(0);
        };
      }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
          b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
        };document.documentElement.appendChild(b);
      } : function (a) {
        l.setTimeout(a, 0);
      };
    };var wd = function wd() {
      this.Gc = this.Va = null;
    },
        yd = new sd(function () {
      return new xd();
    }, function (a) {
      a.reset();
    }, 100);wd.prototype.add = function (a, b) {
      var c = yd.get();c.set(a, b);this.Gc ? this.Gc.next = c : (v(!this.Va), this.Va = c);this.Gc = c;
    };wd.prototype.remove = function () {
      var a = null;this.Va && (a = this.Va, this.Va = this.Va.next, this.Va || (this.Gc = null), a.next = null);return a;
    };var xd = function xd() {
      this.next = this.scope = this.Rc = null;
    };xd.prototype.set = function (a, b) {
      this.Rc = a;this.scope = b;this.next = null;
    };
    xd.prototype.reset = function () {
      this.next = this.scope = this.Rc = null;
    };var Dd = function Dd(a, b) {
      zd || Ad();Bd || (zd(), Bd = !0);Cd.add(a, b);
    },
        zd,
        Ad = function Ad() {
      if (-1 != String(l.Promise).indexOf("[native code]")) {
        var a = l.Promise.resolve(void 0);zd = function zd() {
          a.then(Ed);
        };
      } else zd = function zd() {
        var a = Ed;!p(l.setImmediate) || l.Window && l.Window.prototype && !x("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (ud || (ud = vd()), ud(a)) : l.setImmediate(a);
      };
    },
        Bd = !1,
        Cd = new wd(),
        Ed = function Ed() {
      for (var a; a = Cd.remove();) {
        try {
          a.Rc.call(a.scope);
        } catch (b) {
          td(b);
        }yd.put(a);
      }Bd = !1;
    };var Fd = function Fd(a) {
      a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0;
    },
        Gd = function Gd(a) {
      if (!a) return !1;try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };var B = function B(a, b) {
      this.N = 0;this.oa = void 0;this.Ya = this.la = this.s = null;this.gc = this.Qc = !1;if (a != ba) try {
        var c = this;a.call(b, function (a) {
          Hd(c, 2, a);
        }, function (a) {
          if (!(a instanceof Id)) try {
            if (a instanceof Error) throw a;throw Error("Promise rejected.");
          } catch (e) {}Hd(c, 3, a);
        });
      } catch (d) {
        Hd(this, 3, d);
      }
    },
        Jd = function Jd() {
      this.next = this.context = this.gb = this.Ma = this.child = null;this.vb = !1;
    };Jd.prototype.reset = function () {
      this.context = this.gb = this.Ma = this.child = null;this.vb = !1;
    };
    var Kd = new sd(function () {
      return new Jd();
    }, function (a) {
      a.reset();
    }, 100),
        Ld = function Ld(a, b, c) {
      var d = Kd.get();d.Ma = a;d.gb = b;d.context = c;return d;
    },
        C = function C(a) {
      if (a instanceof B) return a;var b = new B(ba);Hd(b, 2, a);return b;
    },
        D = function D(a) {
      return new B(function (b, c) {
        c(a);
      });
    },
        Nd = function Nd(a, b, c) {
      Md(a, b, c, null) || Dd(ka(b, a));
    },
        Od = function Od(a) {
      return new B(function (b) {
        var c = a.length,
            d = [];if (c) for (var e = function e(a, _e, f) {
          c--;d[a] = _e ? { Qe: !0, value: f } : { Qe: !1, reason: f };0 == c && b(d);
        }, f = 0, g; f < a.length; f++) {
          g = a[f], Nd(g, ka(e, f, !0), ka(e, f, !1));
        } else b(d);
      });
    };B.prototype.then = function (a, b, c) {
      null != a && Ba(a, "opt_onFulfilled should be a function.");null != b && Ba(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Pd(this, p(a) ? a : null, p(b) ? b : null, c);
    };Fd(B);var Rd = function Rd(a, b) {
      b = Ld(b, b, void 0);b.vb = !0;Qd(a, b);return a;
    };B.prototype.f = function (a, b) {
      return Pd(this, null, a, b);
    };B.prototype.cancel = function (a) {
      0 == this.N && Dd(function () {
        var b = new Id(a);Sd(this, b);
      }, this);
    };
    var Sd = function Sd(a, b) {
      if (0 == a.N) if (a.s) {
        var c = a.s;if (c.la) {
          for (var d = 0, e = null, f = null, g = c.la; g && (g.vb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }e && (0 == c.N && 1 == d ? Sd(c, b) : (f ? (d = f, v(c.la), v(null != d), d.next == c.Ya && (c.Ya = d), d.next = d.next.next) : Td(c), Ud(c, e, 3, b)));
        }a.s = null;
      } else Hd(a, 3, b);
    },
        Qd = function Qd(a, b) {
      a.la || 2 != a.N && 3 != a.N || Vd(a);v(null != b.Ma);a.Ya ? a.Ya.next = b : a.la = b;a.Ya = b;
    },
        Pd = function Pd(a, b, c, d) {
      var e = Ld(null, null, null);e.child = new B(function (a, g) {
        e.Ma = b ? function (c) {
          try {
            var e = b.call(d, c);a(e);
          } catch (A) {
            g(A);
          }
        } : a;e.gb = c ? function (b) {
          try {
            var e = c.call(d, b);void 0 === e && b instanceof Id ? g(b) : a(e);
          } catch (A) {
            g(A);
          }
        } : g;
      });e.child.s = a;Qd(a, e);return e.child;
    };B.prototype.Rf = function (a) {
      v(1 == this.N);this.N = 0;Hd(this, 2, a);
    };B.prototype.Sf = function (a) {
      v(1 == this.N);this.N = 0;Hd(this, 3, a);
    };
    var Hd = function Hd(a, b, c) {
      0 == a.N && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.N = 1, Md(c, a.Rf, a.Sf, a) || (a.oa = c, a.N = b, a.s = null, Vd(a), 3 != b || c instanceof Id || Wd(a, c)));
    },
        Md = function Md(a, b, c, d) {
      if (a instanceof B) return null != b && Ba(b, "opt_onFulfilled should be a function."), null != c && Ba(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Qd(a, Ld(b || ba, c || null, d)), !0;if (Gd(a)) return a.then(b, c, d), !0;if (ha(a)) try {
        var e = a.then;if (p(e)) return Xd(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }return !1;
    },
        Xd = function Xd(a, b, c, d, e) {
      var f = !1,
          g = function g(a) {
        f || (f = !0, c.call(e, a));
      },
          k = function k(a) {
        f || (f = !0, d.call(e, a));
      };try {
        b.call(a, g, k);
      } catch (n) {
        k(n);
      }
    },
        Vd = function Vd(a) {
      a.Qc || (a.Qc = !0, Dd(a.Le, a));
    },
        Td = function Td(a) {
      var b = null;a.la && (b = a.la, a.la = b.next, b.next = null);a.la || (a.Ya = null);null != b && v(null != b.Ma);return b;
    };B.prototype.Le = function () {
      for (var a; a = Td(this);) {
        Ud(this, a, this.N, this.oa);
      }this.Qc = !1;
    };
    var Ud = function Ud(a, b, c, d) {
      if (3 == c && b.gb && !b.vb) for (; a && a.gc; a = a.s) {
        a.gc = !1;
      }if (b.child) b.child.s = null, Yd(b, c, d);else try {
        b.vb ? b.Ma.call(b.context) : Yd(b, c, d);
      } catch (e) {
        Zd.call(null, e);
      }Kd.put(b);
    },
        Yd = function Yd(a, b, c) {
      2 == b ? a.Ma.call(a.context, c) : a.gb && a.gb.call(a.context, c);
    },
        Wd = function Wd(a, b) {
      a.gc = !0;Dd(function () {
        a.gc && Zd.call(null, b);
      });
    },
        Zd = td,
        Id = function Id(a) {
      t.call(this, a);
    };r(Id, t);Id.prototype.name = "cancel";
    var $d = function $d(a, b) {
      this.xc = [];this.$d = a;this.Gd = b || null;this.yb = this.bb = !1;this.oa = void 0;this.rd = this.zd = this.Kc = !1;this.Ec = 0;this.s = null;this.Lc = 0;
    };$d.prototype.cancel = function (a) {
      if (this.bb) this.oa instanceof $d && this.oa.cancel();else {
        if (this.s) {
          var b = this.s;delete this.s;a ? b.cancel(a) : (b.Lc--, 0 >= b.Lc && b.cancel());
        }this.$d ? this.$d.call(this.Gd, this) : this.rd = !0;this.bb || ae(this, new be());
      }
    };$d.prototype.Ed = function (a, b) {
      this.Kc = !1;ce(this, a, b);
    };
    var ce = function ce(a, b, c) {
      a.bb = !0;a.oa = c;a.yb = !b;de(a);
    },
        fe = function fe(a) {
      if (a.bb) {
        if (!a.rd) throw new ee();a.rd = !1;
      }
    };$d.prototype.callback = function (a) {
      fe(this);ge(a);ce(this, !0, a);
    };
    var ae = function ae(a, b) {
      fe(a);ge(b);ce(a, !1, b);
    },
        ge = function ge(a) {
      v(!(a instanceof $d), "An execution sequence may not be initiated with a blocking Deferred.");
    },
        ke = function ke(a) {
      var b = he("https://apis.google.com/js/client.js?onload=" + ie);je(b, null, a, void 0);
    },
        je = function je(a, b, c, d) {
      v(!a.zd, "Blocking Deferreds can not be re-used");a.xc.push([b, c, d]);a.bb && de(a);
    };$d.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new B(function (a, b) {
        d = a;e = b;
      });je(this, d, function (a) {
        a instanceof be ? f.cancel() : e(a);
      });return f.then(a, b, c);
    };
    Fd($d);
    var le = function le(a) {
      return Fa(a.xc, function (a) {
        return p(a[1]);
      });
    },
        de = function de(a) {
      if (a.Ec && a.bb && le(a)) {
        var b = a.Ec,
            c = me[b];c && (l.clearTimeout(c.Ab), delete me[b]);a.Ec = 0;
      }a.s && (a.s.Lc--, delete a.s);for (var b = a.oa, d = c = !1; a.xc.length && !a.Kc;) {
        var e = a.xc.shift(),
            f = e[0],
            g = e[1],
            e = e[2];if (f = a.yb ? g : f) try {
          var k = f.call(e || a.Gd, b);void 0 !== k && (a.yb = a.yb && (k == b || k instanceof Error), a.oa = b = k);if (Gd(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.Kc = !0;
        } catch (n) {
          b = n, a.yb = !0, le(a) || (c = !0);
        }
      }a.oa = b;d && (k = _q(a.Ed, a, !0), d = _q(a.Ed, a, !1), b instanceof $d ? (je(b, k, d), b.zd = !0) : b.then(k, d));c && (b = new ne(b), me[b.Ab] = b, a.Ec = b.Ab);
    },
        ee = function ee() {
      t.call(this);
    };r(ee, t);ee.prototype.message = "Deferred has already fired";ee.prototype.name = "AlreadyCalledError";var be = function be() {
      t.call(this);
    };r(be, t);be.prototype.message = "Deferred was canceled";be.prototype.name = "CanceledError";var ne = function ne(a) {
      this.Ab = l.setTimeout(_q(this.Qf, this), 0);this.P = a;
    };
    ne.prototype.Qf = function () {
      v(me[this.Ab], "Cannot throw an error that is not scheduled.");delete me[this.Ab];throw this.P;
    };var me = {};var he = function he(a) {
      var b = new Kb();b.uc = a;return oe(b);
    },
        oe = function oe(a) {
      var b = {},
          c = b.document || document,
          d;a instanceof Kb && a.constructor === Kb && a.Ae === Jb ? d = a.uc : (ya("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ca(a)), d = "type_error:TrustedResourceUrl");var e = document.createElement("SCRIPT");a = { ge: e, Tb: void 0 };var f = new $d(pe, a),
          g = null,
          k = null != b.timeout ? b.timeout : 5E3;0 < k && (g = window.setTimeout(function () {
        qe(e, !0);ae(f, new re(1, "Timeout reached for loading script " + d));
      }, k), a.Tb = g);e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (qe(e, b.bg || !1, g), f.callback(null));
      };e.onerror = function () {
        qe(e, !0, g);ae(f, new re(0, "Error while loading script " + d));
      };a = b.attributes || {};Va(a, { type: "text/javascript", charset: "UTF-8", src: d });rd(e, a);se(c).appendChild(e);return f;
    },
        se = function se(a) {
      var b;return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
    },
        pe = function pe() {
      if (this && this.ge) {
        var a = this.ge;a && "SCRIPT" == a.tagName && qe(a, !0, this.Tb);
      }
    },
        qe = function qe(a, b, c) {
      null != c && l.clearTimeout(c);a.onload = ba;a.onerror = ba;a.onreadystatechange = ba;b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    },
        re = function re(a, b) {
      var c = "Jsloader error (code #" + a + ")";b && (c += ": " + b);t.call(this, c);this.code = a;
    };r(re, t);var te = function te() {
      Bc.call(this);this.da = new Ic(this);this.Ce = this;this.ed = null;
    };r(te, Bc);te.prototype[Ec] = !0;h = te.prototype;h.addEventListener = function (a, b, c, d) {
      Oc(this, a, b, c, d);
    };h.removeEventListener = function (a, b, c, d) {
      Xc(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
      ue(this);var b,
          c = this.ed;if (c) {
        b = [];for (var d = 1; c; c = c.ed) {
          b.push(c), v(1E3 > ++d, "infinite loop");
        }
      }c = this.Ce;d = a.type || a;if (m(a)) a = new Cc(a, c);else if (a instanceof Cc) a.target = a.target || c;else {
        var e = a;a = new Cc(d, c);Va(a, e);
      }var e = !0,
          f;if (b) for (var g = b.length - 1; !a.kb && 0 <= g; g--) {
        f = a.currentTarget = b[g], e = ve(f, d, !0, a) && e;
      }a.kb || (f = a.currentTarget = c, e = ve(f, d, !0, a) && e, a.kb || (e = ve(f, d, !1, a) && e));if (b) for (g = 0; !a.kb && g < b.length; g++) {
        f = a.currentTarget = b[g], e = ve(f, d, !1, a) && e;
      }return e;
    };
    h.$a = function () {
      te.ud.$a.call(this);if (this.da) {
        var a = this.da,
            b = 0,
            c;for (c in a.F) {
          for (var d = a.F[c], e = 0; e < d.length; e++) {
            ++b, Hc(d[e]);
          }delete a.F[c];a.Ub--;
        }
      }this.ed = null;
    };h.listen = function (a, b, c, d) {
      ue(this);return this.da.add(String(a), b, !1, c, d);
    };
    var Wc = function Wc(a, b, c, d, e) {
      a.da.add(String(b), c, !0, d, e);
    },
        ve = function ve(a, b, c, d) {
      b = a.da.F[String(b)];if (!b) return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];if (g && !g.ob && g.capture == c) {
          var k = g.listener,
              n = g.hc || g.src;g.Yb && Kc(a.da, g);e = !1 !== k.call(n, d) && e;
        }
      }return e && 0 != d.fe;
    };te.prototype.Sc = function (a, b, c, d) {
      return this.da.Sc(String(a), b, c, d);
    };var ue = function ue(a) {
      v(a.da, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };var E = function E(a, b) {
      a && a.log(kc, b, void 0);
    };var we = function we(a, b, c) {
      if (p(a)) c && (a = _q(a, c));else if (a && "function" == typeof a.handleEvent) a = _q(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
    },
        xe = function xe(a) {
      var b = null;return new B(function (c, d) {
        b = we(function () {
          c(void 0);
        }, a);-1 == b && d(Error("Failed to schedule timer."));
      }).f(function (a) {
        l.clearTimeout(b);throw a;
      });
    };var ye = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        ze = function ze(a, b) {
      if (a) {
        a = a.split("&");for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e,
              f = null;0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
      }
    };var F = function F(a) {
      te.call(this);this.headers = new Xb();this.Ic = a || null;this.ra = !1;this.Hc = this.b = null;this.Db = this.Vd = this.oc = "";this.Ha = this.Wc = this.mc = this.Oc = !1;this.rb = 0;this.Cc = null;this.ee = "";this.Fc = this.vf = this.we = !1;
    };r(F, te);F.prototype.G = pc("goog.net.XhrIo");var Ae = /^https?$/i,
        Be = ["POST", "PUT"];
    F.prototype.send = function (a, b, c, d) {
      if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.oc + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.oc = a;this.Db = "";this.Vd = b;this.Oc = !1;this.ra = !0;this.b = this.Ic ? this.Ic.$b() : kd.$b();this.Hc = this.Ic ? jd(this.Ic) : jd(kd);this.b.onreadystatechange = _q(this.be, this);this.vf && "onprogress" in this.b && (this.b.onprogress = _q(function (a) {
        this.ae(a, !0);
      }, this), this.b.upload && (this.b.upload.onprogress = _q(this.ae, this)));try {
        E(this.G, Ce(this, "Opening Xhr")), this.Wc = !0, this.b.open(b, String(a), !0), this.Wc = !1;
      } catch (f) {
        E(this.G, Ce(this, "Error opening Xhr: " + f.message));this.P(5, f);return;
      }a = c || "";var e = this.headers.clone();d && bc(d, function (a, b) {
        e.set(b, a);
      });d = Ha(e.ma());c = l.FormData && a instanceof l.FormData;!Ia(Be, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {
        this.b.setRequestHeader(b, a);
      }, this);this.ee && (this.b.responseType = this.ee);"withCredentials" in this.b && this.b.withCredentials !== this.we && (this.b.withCredentials = this.we);try {
        De(this), 0 < this.rb && (this.Fc = Ee(this.b), E(this.G, Ce(this, "Will abort after " + this.rb + "ms if incomplete, xhr2 " + this.Fc)), this.Fc ? (this.b.timeout = this.rb, this.b.ontimeout = _q(this.Tb, this)) : this.Cc = we(this.Tb, this.rb, this)), E(this.G, Ce(this, "Sending request")), this.mc = !0, this.b.send(a), this.mc = !1;
      } catch (f) {
        E(this.G, Ce(this, "Send error: " + f.message)), this.P(5, f);
      }
    };var Ee = function Ee(a) {
      return y && z(9) && ga(a.timeout) && void 0 !== a.ontimeout;
    },
        Ga = function Ga(a) {
      return "content-type" == a.toLowerCase();
    };
    F.prototype.Tb = function () {
      "undefined" != typeof aa && this.b && (this.Db = "Timed out after " + this.rb + "ms, aborting", E(this.G, Ce(this, this.Db)), this.dispatchEvent("timeout"), this.abort(8));
    };F.prototype.P = function (a, b) {
      this.ra = !1;this.b && (this.Ha = !0, this.b.abort(), this.Ha = !1);this.Db = b;Fe(this);Ge(this);
    };var Fe = function Fe(a) {
      a.Oc || (a.Oc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
    F.prototype.abort = function () {
      this.b && this.ra && (E(this.G, Ce(this, "Aborting")), this.ra = !1, this.Ha = !0, this.b.abort(), this.Ha = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ge(this));
    };F.prototype.$a = function () {
      this.b && (this.ra && (this.ra = !1, this.Ha = !0, this.b.abort(), this.Ha = !1), Ge(this, !0));F.ud.$a.call(this);
    };F.prototype.be = function () {
      this.isDisposed() || (this.Wc || this.mc || this.Ha ? He(this) : this.qf());
    };F.prototype.qf = function () {
      He(this);
    };
    var He = function He(a) {
      if (a.ra && "undefined" != typeof aa) if (a.Hc[1] && 4 == Ie(a) && 2 == Je(a)) E(a.G, Ce(a, "Local request error detected and ignored"));else if (a.mc && 4 == Ie(a)) we(a.be, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == Ie(a)) {
        E(a.G, Ce(a, "Request complete"));a.ra = !1;try {
          var b = Je(a),
              c;a: switch (b) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
              c = !0;break a;default:
              c = !1;}var d;if (!(d = c)) {
            var e;if (e = 0 === b) {
              var f = String(a.oc).match(ye)[1] || null;if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                  f = g.substr(0, g.length - 1);e = !Ae.test(f ? f.toLowerCase() : "");
            }d = e;
          }if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            var k;try {
              k = 2 < Ie(a) ? a.b.statusText : "";
            } catch (n) {
              E(a.G, "Can not get status: " + n.message), k = "";
            }a.Db = k + " [" + Je(a) + "]";Fe(a);
          }
        } finally {
          Ge(a);
        }
      }
    };F.prototype.ae = function (a, b) {
      v("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ke(a, "progress"));this.dispatchEvent(Ke(a, b ? "downloadprogress" : "uploadprogress"));
    };
    var Ke = function Ke(a, b) {
      return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
    },
        Ge = function Ge(a, b) {
      if (a.b) {
        De(a);var c = a.b,
            d = a.Hc[0] ? ba : null;a.b = null;a.Hc = null;b || a.dispatchEvent("ready");try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.G) && a.log(hc, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    },
        De = function De(a) {
      a.b && a.Fc && (a.b.ontimeout = null);ga(a.Cc) && (l.clearTimeout(a.Cc), a.Cc = null);
    },
        Ie = function Ie(a) {
      return a.b ? a.b.readyState : 0;
    },
        Je = function Je(a) {
      try {
        return 2 < Ie(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
        Le = function Le(a) {
      try {
        return a.b ? a.b.responseText : "";
      } catch (b) {
        return E(a.G, "Can not get responseText: " + b.message), "";
      }
    },
        Ce = function Ce(a, b) {
      return b + " [" + a.Vd + " " + a.oc + " " + Je(a) + "]";
    };var Me = function Me(a, b) {
      this.ca = this.Ta = this.fa = "";this.ib = null;this.Ga = this.ta = "";this.S = this.gf = !1;var c;a instanceof Me ? (this.S = void 0 !== b ? b : a.S, Ne(this, a.fa), c = a.Ta, G(this), this.Ta = c, Oe(this, a.ca), Pe(this, a.ib), Qe(this, a.ta), Re(this, a.V.clone()), a = a.Ga, G(this), this.Ga = a) : a && (c = String(a).match(ye)) ? (this.S = !!b, Ne(this, c[1] || "", !0), a = c[2] || "", G(this), this.Ta = Se(a), Oe(this, c[3] || "", !0), Pe(this, c[4]), Qe(this, c[5] || "", !0), Re(this, c[6] || "", !0), a = c[7] || "", G(this), this.Ga = Se(a)) : (this.S = !!b, this.V = new H(null, 0, this.S));
    };Me.prototype.toString = function () {
      var a = [],
          b = this.fa;b && a.push(Te(b, Ue, !0), ":");var c = this.ca;if (c || "file" == b) a.push("//"), (b = this.Ta) && a.push(Te(b, Ue, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.ib, null != c && a.push(":", String(c));if (c = this.ta) this.ca && "/" != c.charAt(0) && a.push("/"), a.push(Te(c, "/" == c.charAt(0) ? Ve : We, !0));(c = this.V.toString()) && a.push("?", c);(c = this.Ga) && a.push("#", Te(c, Xe));return a.join("");
    };
    Me.prototype.resolve = function (a) {
      var b = this.clone(),
          c = !!a.fa;c ? Ne(b, a.fa) : c = !!a.Ta;if (c) {
        var d = a.Ta;G(b);b.Ta = d;
      } else c = !!a.ca;c ? Oe(b, a.ca) : c = null != a.ib;d = a.ta;if (c) Pe(b, a.ib);else if (c = !!a.ta) {
        if ("/" != d.charAt(0)) if (this.ca && !this.ta) d = "/" + d;else {
          var e = b.ta.lastIndexOf("/");-1 != e && (d = b.ta.substr(0, e + 1) + d);
        }e = d;if (".." == e || "." == e) d = "";else if (u(e, "./") || u(e, "/.")) {
          for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
            var k = e[g++];"." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
          }d = f.join("/");
        } else d = e;
      }c ? Qe(b, d) : c = "" !== a.V.toString();c ? Re(b, a.V.clone()) : c = !!a.Ga;c && (a = a.Ga, G(b), b.Ga = a);return b;
    };Me.prototype.clone = function () {
      return new Me(this);
    };
    var Ne = function Ne(a, b, c) {
      G(a);a.fa = c ? Se(b, !0) : b;a.fa && (a.fa = a.fa.replace(/:$/, ""));
    },
        Oe = function Oe(a, b, c) {
      G(a);a.ca = c ? Se(b, !0) : b;
    },
        Pe = function Pe(a, b) {
      G(a);if (b) {
        b = Number(b);if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);a.ib = b;
      } else a.ib = null;
    },
        Qe = function Qe(a, b, c) {
      G(a);a.ta = c ? Se(b, !0) : b;
    },
        Re = function Re(a, b, c) {
      G(a);b instanceof H ? (a.V = b, a.V.qd(a.S)) : (c || (b = Te(b, Ye)), a.V = new H(b, 0, a.S));
    },
        I = function I(a, b, c) {
      G(a);a.V.set(b, c);
    },
        Ze = function Ze(a, b) {
      return a.V.get(b);
    },
        $e = function $e(a, b) {
      G(a);a.V.remove(b);
    },
        G = function G(a) {
      if (a.gf) throw Error("Tried to modify a read-only Uri");
    };Me.prototype.qd = function (a) {
      this.S = a;this.V && this.V.qd(a);return this;
    };
    var af = function af(a) {
      return a instanceof Me ? a.clone() : new Me(a, void 0);
    },
        bf = function bf(a, b) {
      var c = new Me(null, void 0);Ne(c, "https");a && Oe(c, a);b && Qe(c, b);return c;
    },
        Se = function Se(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
        Te = function Te(a, b, c) {
      return m(a) ? (a = encodeURI(a).replace(b, cf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
        cf = function cf(a) {
      a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
        Ue = /[#\/\?@]/g,
        We = /[\#\?:]/g,
        Ve = /[\#\?]/g,
        Ye = /[\#\?@]/g,
        Xe = /#/g,
        H = function H(a, b, c) {
      this.o = this.l = null;this.O = a || null;this.S = !!c;
    },
        df = function df(a) {
      a.l || (a.l = new Xb(), a.o = 0, a.O && ze(a.O, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    },
        ff = function ff(a) {
      var b = ac(a);if ("undefined" == typeof b) throw Error("Keys are undefined");var c = new H(null, 0, void 0);a = $b(a);for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = a[d];ea(f) ? ef(c, e, f) : c.add(e, f);
      }return c;
    };h = H.prototype;
    h.add = function (a, b) {
      df(this);this.O = null;a = this.R(a);var c = this.l.get(a);c || this.l.set(a, c = []);c.push(b);this.o = za(this.o) + 1;return this;
    };h.remove = function (a) {
      df(this);a = this.R(a);return this.l.wb(a) ? (this.O = null, this.o = za(this.o) - this.l.get(a).length, this.l.remove(a)) : !1;
    };h.wb = function (a) {
      df(this);a = this.R(a);return this.l.wb(a);
    };h.ma = function () {
      df(this);for (var a = this.l.X(), b = this.l.ma(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }return c;
    };
    h.X = function (a) {
      df(this);var b = [];if (m(a)) this.wb(a) && (b = Ma(b, this.l.get(this.R(a))));else {
        a = this.l.X();for (var c = 0; c < a.length; c++) {
          b = Ma(b, a[c]);
        }
      }return b;
    };h.set = function (a, b) {
      df(this);this.O = null;a = this.R(a);this.wb(a) && (this.o = za(this.o) - this.l.get(a).length);this.l.set(a, [b]);this.o = za(this.o) + 1;return this;
    };h.get = function (a, b) {
      a = a ? this.X(a) : [];return 0 < a.length ? String(a[0]) : b;
    };var ef = function ef(a, b, c) {
      a.remove(b);0 < c.length && (a.O = null, a.l.set(a.R(b), Na(c)), a.o = za(a.o) + c.length);
    };
    H.prototype.toString = function () {
      if (this.O) return this.O;if (!this.l) return "";for (var a = [], b = this.l.ma(), c = 0; c < b.length; c++) {
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
          var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g);
        }
      }return this.O = a.join("&");
    };H.prototype.clone = function () {
      var a = new H();a.O = this.O;this.l && (a.l = this.l.clone(), a.o = this.o);return a;
    };H.prototype.R = function (a) {
      a = String(a);this.S && (a = a.toLowerCase());return a;
    };
    H.prototype.qd = function (a) {
      a && !this.S && (df(this), this.O = null, this.l.forEach(function (a, c) {
        var b = c.toLowerCase();c != b && (this.remove(c), ef(this, b, a));
      }, this));this.S = a;
    };var gf = function gf() {
      var a = J();return y && !!nb && 11 == nb || /Edge\/\d+/.test(a);
    },
        hf = function hf() {
      return l.window && l.window.location.href || "";
    },
        jf = function jf(a, b) {
      b = b || l.window;var c = "about:blank";a && (c = Ob(Rb(a)));b.location.href = c;
    },
        kf = function kf(a, b) {
      var c = [],
          d;for (d in a) {
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ea(a[d]) ? Sa(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < kf(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      }for (d in b) {
        d in a || c.push(d);
      }return c;
    },
        mf = function mf() {
      var a;
      a = J();a = "Chrome" != lf(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !y || !nb || 9 < nb;
    },
        nf = function nf(a) {
      a = (a || J()).toLowerCase();return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
    },
        of = function of(a) {
      a = a || l.window;try {
        a.close();
      } catch (b) {}
    },
        pf = function pf(a, b, c) {
      var d = Math.floor(1E9 * Math.random()).toString();b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2,
          f = (window.screen.availWidth - b) / 2;b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };c = J().toLowerCase();d && (b.target = d, u(c, "crios/") && (b.target = "_blank"));"Firefox" == lf(J()) && (a = a || "http://localhost", b.scrollbars = !0);var g;c = a || "about:blank";(d = b) || (d = {});a = window;b = c instanceof Mb ? c : Rb("undefined" != typeof c.href ? c.href : String(c));c = d.target || c.target;e = [];for (g in d) {
        switch (g) {case "width":case "height":case "top":case "left":
            e.push(g + "=" + d[g]);break;case "target":case "noreferrer":
            break;
          default:
            e.push(g + "=" + (d[g] ? 1 : 0));}
      }g = e.join(",");(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ha(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, v(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof Mb ? b : Rb(b), g.href = Ob(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = Ob(b), g && (eb && u(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = Ib("b/12014412, meta tag with sanitized URL"), ua.test(d) && (-1 != d.indexOf("&") && (d = d.replace(oa, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(pa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(qa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(ra, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(sa, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(ta, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', Aa(Hb(a), "must provide justification"), v(!/^[\s\xa0]*$/.test(Hb(a)), "must provide non-empty justification"), g.document.write(Ub(new Tb().df(d))), g.document.close())) : g = a.open(Ob(b), c, g);if (g) try {
        g.focus();
      } catch (k) {}return g;
    },
        qf = function qf(a) {
      return new B(function (b) {
        var c = function c() {
          xe(2E3).then(function () {
            if (!a || a.closed) b();else return c();
          });
        };return c();
      });
    },
        rf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        sf = function sf() {
      var a = null;return new B(function (b) {
        "complete" == l.document.readyState ? b() : (a = function a() {
          b();
        }, Vc(window, "load", a));
      }).f(function (b) {
        Xc(window, "load", a);throw b;
      });
    },
        uf = function uf() {
      return tf(void 0) ? sf().then(function () {
        return new B(function (a, b) {
          var c = l.document,
              d = setTimeout(function () {
            b(Error("Cordova framework is not ready."));
          }, 1E3);c.addEventListener("deviceready", function () {
            clearTimeout(d);a();
          }, !1);
        });
      }) : D(Error("Cordova must run in an Android or iOS file scheme."));
    },
        tf = function tf(a) {
      a = a || J();return !("file:" !== vf() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    },
        wf = function wf() {
      var a = l.window;try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
        K = function K() {
      return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
    },
        xf = function xf() {
      var a = K();return "ReactNative" === a || "Node" === a;
    },
        lf = function lf(a) {
      var b = a.toLowerCase();if (u(b, "opera/") || u(b, "opr/") || u(b, "opios/")) return "Opera";if (u(b, "iemobile")) return "IEMobile";if (u(b, "msie") || u(b, "trident/")) return "IE";if (u(b, "edge/")) return "Edge";if (u(b, "firefox/")) return "Firefox";if (u(b, "silk/")) return "Silk";if (u(b, "blackberry")) return "Blackberry";if (u(b, "webos")) return "Webos";if (!u(b, "safari/") || u(b, "chrome/") || u(b, "crios/") || u(b, "android")) {
        if (!u(b, "chrome/") && !u(b, "crios/") || u(b, "edge/")) {
          if (u(b, "android")) return "Android";
          if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
        } else return "Chrome";
      } else return "Safari";return "Other";
    },
        yf = function yf(a) {
      var b = K();return ("Browser" === b ? lf(J()) : b) + "/JsCore/" + a;
    },
        J = function J() {
      return l.navigator && l.navigator.userAgent || "";
    },
        L = function L(a, b) {
      a = a.split(".");b = b || l;for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
        b = b[a[c]];
      }c != a.length && (b = void 0);return b;
    },
        Bf = function Bf() {
      var a;if (a = (zf() || "chrome-extension:" === vf() || tf() && !1) && !xf()) a: {
        try {
          var b = l.localStorage,
              c = Af();if (b) {
            b.setItem(c, "1");b.removeItem(c);a = gf() ? !!l.indexedDB : !0;break a;
          }
        } catch (d) {}a = !1;
      }return a;
    },
        zf = function zf() {
      return "http:" === vf() || "https:" === vf();
    },
        vf = function vf() {
      return l.location && l.location.protocol || null;
    },
        Cf = function Cf(a) {
      a = a || J();return nf(a) || "Firefox" == lf(a) ? !1 : !0;
    },
        Df = function Df(a) {
      return "undefined" === typeof a ? null : ed(a);
    },
        Ef = function Ef(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
      }return b;
    },
        Ff = function Ff(a) {
      if (null !== a) return JSON.parse(a);
    },
        Af = function Af(a) {
      return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
    },
        Gf = function Gf(a) {
      a = a || J();return "Safari" == lf(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
    },
        Hf = function Hf() {
      var a = l.___jsl;if (a && a.H) for (var b in a.H) {
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
          a.CP[c] = null;
        }
      }
    },
        If = function If() {
      return l.navigator && "boolean" === typeof l.navigator.onLine ? l.navigator.onLine : !0;
    },
        Jf = function Jf(a, b, c, d) {
      if (a > b) throw Error("Short delay should be less than long delay!");
      this.Jf = a;this.kf = b;a = c || J();d = d || K();this.ff = nf(a) || "ReactNative" === d;
    };Jf.prototype.get = function () {
      return this.ff ? this.kf : this.Jf;
    };
    var Kf = function Kf() {
      var a = l.document;return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
    },
        Lf = function Lf() {
      var a = l.document,
          _b = null;return Kf() || !a ? C() : new B(function (c) {
        _b = function b() {
          Kf() && (a.removeEventListener("visibilitychange", _b, !1), c());
        };a.addEventListener("visibilitychange", _b, !1);
      }).f(function (c) {
        a.removeEventListener("visibilitychange", _b, !1);throw c;
      });
    };var Mf = function Mf(a) {
      var b = this.jf = new wc();if (1 != b.Td) {
        oc();var c = nc,
            d = b.wf;c.zb || (c.zb = []);c.zb.push(d);b.Td = !0;
      }this.G = a || pc("firebase-auth");
    };Mf.Yc = void 0;Mf.Te = function () {
      return Mf.Yc ? Mf.Yc : Mf.Yc = new Mf();
    };Mf.prototype.xd = function (a, b) {
      var c = this.G;c && c.xd(a, b);
    };Mf.prototype.error = function (a, b) {
      var c = this.G;c && c.log(hc, a, b);
    };var Nf = {};var Of;try {
      var Pf = {};Object.defineProperty(Pf, "abcd", { configurable: !0, enumerable: !0, value: 1 });Object.defineProperty(Pf, "abcd", { configurable: !0, enumerable: !0, value: 2 });Of = 2 == Pf.abcd;
    } catch (a) {
      Of = !1;
    }
    var M = function M(a, b, c) {
      Of ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c;
    },
        Qf = function Qf(a) {
      Of ? Object.defineProperty(a, "provider", { configurable: !0, enumerable: !0, get: function get() {
          Nf["firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."] || (Nf["firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."] = !0, Mf.Te().xd("firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."));
          return "password";
        } }) : a.provider = "password";
    },
        Rf = function Rf(a, b) {
      if (b) for (var c in b) {
        b.hasOwnProperty(c) && M(a, c, b[c]);
      }
    },
        Sf = function Sf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }return b;
    },
        Tf = function Tf(a, b) {
      if (!b || !b.length) return !0;if (!a) return !1;for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];if (void 0 === d || null === d || "" === d) return !1;
      }return !0;
    },
        Uf = function Uf(a) {
      var b = a;if ("object" == typeof a && null != a) {
        var b = "length" in a ? [] : {},
            c;for (c in a) {
          M(b, c, Uf(a[c]));
        }
      }return b;
    };var Vf = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
        Wf = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        Xf = { Xf: { Hb: 500, Gb: 600, providerId: "facebook.com", nd: Wf }, Yf: { Hb: 500, Gb: 620, providerId: "github.com", nd: Wf }, Zf: { Hb: 515, Gb: 680, providerId: "google.com", nd: Wf }, $f: { Hb: 485, Gb: 705, providerId: "twitter.com", nd: Vf } },
        Yf = function Yf(a) {
      for (var b in Xf) {
        if (Xf[b].providerId == a) return Xf[b];
      }return null;
    };var N = function N(a, b) {
      this.code = "auth/" + a;this.message = b || Zf[a] || "";
    };r(N, Error);N.prototype.D = function () {
      return { code: this.code, message: this.message };
    };N.prototype.toJSON = function () {
      return this.D();
    };
    var $f = function $f(a) {
      var b = a && a.code;return b ? new N(b.substring(5), a.message) : null;
    },
        Zf = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "cordova-not-ready": "Cordova framework is not ready.",
      "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.",
      "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
      "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.",
      "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "missing-iframe-start": "An internal error has occurred.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
      "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.",
      "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
      "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
      "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.",
      "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };var O = function O(a, b, c, d, e) {
      this.ba = a;this.I = b || null;this.sb = c || null;this.pd = d || null;this.P = e || null;if (this.sb || this.P) {
        if (this.sb && this.P) throw new N("invalid-auth-event");if (this.sb && !this.pd) throw new N("invalid-auth-event");
      } else throw new N("invalid-auth-event");
    };O.prototype.ec = function () {
      return this.pd;
    };O.prototype.getError = function () {
      return this.P;
    };O.prototype.D = function () {
      return { type: this.ba, eventId: this.I, urlResponse: this.sb, sessionId: this.pd, error: this.P && this.P.D() };
    };
    var ag = function ag(a) {
      a = a || {};return a.type ? new O(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && $f(a.error)) : null;
    };var bg = function bg(a) {
      var b = "unauthorized-domain",
          c = void 0,
          d = af(a);a = d.ca;d = d.fa;"chrome-extension" == d ? c = ma("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";N.call(this, b, c);
    };r(bg, N);var cg = function cg(a) {
      this.Xd = a.sub;la();this.ac = a.email || null;
    },
        dg = function dg(a) {
      a = a.split(".");if (3 != a.length) return null;a = a[1];for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) {
        a += ".";
      }try {
        var d = JSON.parse(tb(a));if (d.sub && d.iss && d.aud && d.exp) return new cg(d);
      } catch (e) {}return null;
    };var eg = function eg(a, b) {
      if (b.idToken || b.accessToken) b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken);else if (b.oauthToken && b.oauthTokenSecret) M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);else throw new N("internal-error", "failed to construct a credential");M(this, "provider", a);M(this, "providerId", a);
    };eg.prototype.dc = function (a) {
      return fg(a, gg(this));
    };eg.prototype.Wd = function (a, b) {
      var c = gg(this);c.idToken = b;return hg(a, c);
    };
    var gg = function gg(a) {
      var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.providerId;return { postBody: ff(b).toString(), requestUri: "http://localhost" };
    };eg.prototype.D = function () {
      var a = { providerId: this.providerId };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a;
    };
    var ig = function ig(a, b) {
      this.zf = b || [];Rf(this, { providerId: a, isOAuthProvider: !0 });this.Fd = {};
    };ig.prototype.setCustomParameters = function (a) {
      this.Fd = Ta(a);return this;
    };var P = function P(a) {
      ig.call(this, a, Wf);this.od = [];
    };r(P, ig);P.prototype.addScope = function (a) {
      Ia(this.od, a) || this.od.push(a);return this;
    };P.prototype.Nd = function () {
      return Na(this.od);
    };
    P.prototype.credential = function (a, b) {
      if (!a && !b) throw new N("argument-error", "credential failed: must provide the ID token and/or the access token.");return new eg(this.providerId, { idToken: a || null, accessToken: b || null });
    };var jg = function jg() {
      P.call(this, "facebook.com");
    };r(jg, P);M(jg, "PROVIDER_ID", "facebook.com");var kg = function kg(a) {
      if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");return new jg().credential(null, a);
    },
        lg = function lg() {
      P.call(this, "github.com");
    };
    r(lg, P);M(lg, "PROVIDER_ID", "github.com");var mg = function mg(a) {
      if (!a) throw new N("argument-error", "credential failed: expected 1 argument (the OAuth access token).");return new lg().credential(null, a);
    },
        ng = function ng() {
      P.call(this, "google.com");this.addScope("profile");
    };r(ng, P);M(ng, "PROVIDER_ID", "google.com");var og = function og(a, b) {
      return new ng().credential(a, b);
    },
        pg = function pg() {
      ig.call(this, "twitter.com", Vf);
    };r(pg, ig);M(pg, "PROVIDER_ID", "twitter.com");
    var qg = function qg(a, b) {
      if (!a || !b) throw new N("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");return new eg("twitter.com", { oauthToken: a, oauthTokenSecret: b });
    },
        rg = function rg(a, b) {
      this.ac = a;this.fd = b;Qf(this);M(this, "providerId", "password");
    };rg.prototype.dc = function (a) {
      return Q(a, sg, { email: this.ac, password: this.fd });
    };rg.prototype.Wd = function (a, b) {
      return Q(a, tg, { idToken: b, email: this.ac, password: this.fd });
    };rg.prototype.D = function () {
      return { email: this.ac, password: this.fd };
    };
    var ug = function ug() {
      Rf(this, { providerId: "password", isOAuthProvider: !1 });
    };Rf(ug, { PROVIDER_ID: "password" });
    var vg = function vg(a) {
      var b = a && a.providerId;if (!b || "password" === b) return null;var c = a && a.oauthAccessToken,
          d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;try {
        switch (b) {case "google.com":
            return og(a, c);case "facebook.com":
            return kg(c);case "github.com":
            return mg(c);case "twitter.com":
            return qg(c, d);default:
            return new P(b).credential(a, c);}
      } catch (e) {
        return null;
      }
    },
        wg = function wg(a) {
      if (!a.isOAuthProvider) throw new N("invalid-oauth-provider");
    };var xg = function xg(a, b, c, d) {
      N.call(this, a, d);M(this, "email", b);M(this, "credential", c);
    };r(xg, N);xg.prototype.D = function () {
      var a = { code: this.code, message: this.message, email: this.email },
          b = this.credential && this.credential.D();b && Va(a, b);return a;
    };xg.prototype.toJSON = function () {
      return this.D();
    };var yg = function yg(a) {
      if (a.code) {
        var b = a.code || "";0 == b.indexOf("auth/") && (b = b.substring(5));return a.email ? new xg(b, a.email, vg(a), a.message) : new N(b, a.message || void 0);
      }return null;
    };var zg = function zg(a) {
      this.Wf = a;
    };r(zg, id);zg.prototype.$b = function () {
      return new this.Wf();
    };zg.prototype.Zc = function () {
      return {};
    };
    var R = function R(a, b, c) {
      var d;d = "Node" == K();d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;if (!d) throw new N("internal-error", "The XMLHttpRequest compatibility library was not found.");this.j = a;a = b || {};this.Ff = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.Gf = a.secureTokenTimeout || Ag;this.he = Ta(a.secureTokenHeaders || Bg);this.Oe = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Pe = a.firebaseTimeout || Cg;this.Ld = Ta(a.firebaseHeaders || Dg);c && (this.Ld["X-Client-Version"] = c, this.he["X-Client-Version"] = c);this.He = new nd();this.Vf = new zg(d);
    },
        Eg,
        Ag = new Jf(3E4, 6E4),
        Bg = { "Content-Type": "application/x-www-form-urlencoded" },
        Cg = new Jf(3E4, 6E4),
        Dg = { "Content-Type": "application/json" },
        Gg = function Gg(a, b, c, d, e, f, g) {
      If() ? (mf() ? a = _q(a.If, a) : (Eg || (Eg = new B(function (a, b) {
        Fg(a, b);
      })), a = _q(a.Hf, a)), a(b, c, d, e, f, g)) : c && c(null);
    };
    R.prototype.If = function (a, b, c, d, e, f) {
      var g = "Node" == K(),
          k = xf() ? g ? new F(this.Vf) : new F() : new F(this.He),
          n;f && (k.rb = Math.max(0, f), n = setTimeout(function () {
        k.dispatchEvent("timeout");
      }, f));k.listen("complete", function () {
        n && clearTimeout(n);var a = null;try {
          a = JSON.parse(Le(this)) || null;
        } catch (db) {
          a = null;
        }b && b(a);
      });Wc(k, "ready", function () {
        n && clearTimeout(n);this.Da || (this.Da = !0, this.$a());
      });Wc(k, "timeout", function () {
        n && clearTimeout(n);this.Da || (this.Da = !0, this.$a());b && b(null);
      });k.send(a, c, d, e);
    };
    var ie = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        Fg = function Fg(a, b) {
      ((window.gapi || {}).client || {}).request ? a() : (l[ie] = function () {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      }, ke(function () {
        b(Error("CORS_UNSUPPORTED"));
      }));
    };
    R.prototype.Hf = function (a, b, c, d, e) {
      var f = this;Eg.then(function () {
        window.gapi.client.setApiKey(f.j);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function callback(a) {
            window.gapi.auth.setToken(g);b && b(a);
          } });
      }).f(function (a) {
        b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } });
      });
    };
    var Ig = function Ig(a, b) {
      return new B(function (c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Gg(a, a.Ff + "?key=" + encodeURIComponent(a.j), function (a) {
          a ? a.error ? d(Hg(a)) : a.access_token && a.refresh_token ? c(a) : d(new N("internal-error")) : d(new N("network-request-failed"));
        }, "POST", ff(b).toString(), a.he, a.Gf.get()) : d(new N("internal-error"));
      });
    },
        Jg = function Jg(a, b, c, d, e) {
      var f = af(a.Oe + b);I(f, "key", a.j);e && I(f, "cb", la().toString());var g = "GET" == c;if (g) for (var k in d) {
        d.hasOwnProperty(k) && I(f, k, d[k]);
      }return new B(function (b, e) {
        Gg(a, f.toString(), function (a) {
          a ? a.error ? e(Hg(a)) : b(a) : e(new N("network-request-failed"));
        }, c, g ? void 0 : ed(Ef(d)), a.Ld, a.Pe.get());
      });
    },
        Kg = function Kg(a) {
      if (!bd.test(a.email)) throw new N("invalid-email");
    },
        Lg = function Lg(a) {
      "email" in a && Kg(a);
    },
        Ng = function Ng(a, b) {
      return Q(a, Mg, { identifier: b, continueUri: zf() ? hf() : "http://localhost" }).then(function (a) {
        return a.allProviders || [];
      });
    },
        Pg = function Pg(a) {
      return Q(a, Og, {}).then(function (a) {
        return a.authorizedDomains || [];
      });
    },
        Qg = function Qg(a) {
      if (!a.idToken) throw new N("internal-error");
    };R.prototype.signInAnonymously = function () {
      return Q(this, Rg, {});
    };R.prototype.updateEmail = function (a, b) {
      return Q(this, Sg, { idToken: a, email: b });
    };R.prototype.updatePassword = function (a, b) {
      return Q(this, tg, { idToken: a, password: b });
    };var Tg = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };R.prototype.updateProfile = function (a, b) {
      var c = { idToken: a },
          d = [];Oa(Tg, function (a, f) {
        var e = b[f];null === e ? d.push(a) : f in b && (c[f] = e);
      });d.length && (c.deleteAttribute = d);return Q(this, Sg, c);
    };
    R.prototype.sendPasswordResetEmail = function (a) {
      return Q(this, Ug, { requestType: "PASSWORD_RESET", email: a });
    };R.prototype.sendEmailVerification = function (a) {
      return Q(this, Vg, { requestType: "VERIFY_EMAIL", idToken: a });
    };
    var Xg = function Xg(a, b, c) {
      return Q(a, Wg, { idToken: b, deleteProvider: c });
    },
        Yg = function Yg(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody) throw new N("internal-error");
    },
        Zg = function Zg(a) {
      var b = null;a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = yg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = yg(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = yg(a));if (b) throw b;if (!a.idToken) throw new N("internal-error");
    },
        fg = function fg(a, b) {
      b.returnIdpCredential = !0;return Q(a, $g, b);
    },
        hg = function hg(a, b) {
      b.returnIdpCredential = !0;return Q(a, ah, b);
    },
        bh = function bh(a) {
      if (!a.oobCode) throw new N("invalid-action-code");
    };R.prototype.confirmPasswordReset = function (a, b) {
      return Q(this, ch, { oobCode: a, newPassword: b });
    };R.prototype.checkActionCode = function (a) {
      return Q(this, dh, { oobCode: a });
    };R.prototype.applyActionCode = function (a) {
      return Q(this, eh, { oobCode: a });
    };
    var eh = { endpoint: "setAccountInfo", M: bh, qb: "email" },
        dh = { endpoint: "resetPassword", M: bh, wa: function wa(a) {
        if (!a.email || !a.requestType) throw new N("internal-error");
      } },
        fh = { endpoint: "signupNewUser", M: function M(a) {
        Kg(a);if (!a.password) throw new N("weak-password");
      }, wa: Qg, xa: !0 },
        Mg = { endpoint: "createAuthUri" },
        gh = { endpoint: "deleteAccount", pb: ["idToken"] },
        Wg = { endpoint: "setAccountInfo", pb: ["idToken", "deleteProvider"], M: function M(a) {
        if (!ea(a.deleteProvider)) throw new N("internal-error");
      } },
        hh = { endpoint: "getAccountInfo" },
        Vg = { endpoint: "getOobConfirmationCode", pb: ["idToken", "requestType"], M: function M(a) {
        if ("VERIFY_EMAIL" != a.requestType) throw new N("internal-error");
      }, qb: "email" },
        Ug = { endpoint: "getOobConfirmationCode", pb: ["requestType"], M: function M(a) {
        if ("PASSWORD_RESET" != a.requestType) throw new N("internal-error");Kg(a);
      }, qb: "email" },
        Og = { Ge: !0, endpoint: "getProjectConfig", $e: "GET" },
        ch = { endpoint: "resetPassword", M: bh, qb: "email" },
        Sg = { endpoint: "setAccountInfo", pb: ["idToken"], M: Lg, xa: !0 },
        tg = { endpoint: "setAccountInfo", pb: ["idToken"],
      M: function M(a) {
        Lg(a);if (!a.password) throw new N("weak-password");
      }, wa: Qg, xa: !0 },
        Rg = { endpoint: "signupNewUser", wa: Qg, xa: !0 },
        $g = { endpoint: "verifyAssertion", M: Yg, wa: Zg, xa: !0 },
        ah = { endpoint: "verifyAssertion", M: function M(a) {
        Yg(a);if (!a.idToken) throw new N("internal-error");
      }, wa: Zg, xa: !0 },
        ih = { endpoint: "verifyCustomToken", M: function M(a) {
        if (!a.token) throw new N("invalid-custom-token");
      }, wa: Qg, xa: !0 },
        sg = { endpoint: "verifyPassword", M: function M(a) {
        Kg(a);if (!a.password) throw new N("wrong-password");
      }, wa: Qg, xa: !0 },
        Q = function Q(a, b, c) {
      if (!Tf(c, b.pb)) return D(new N("internal-error"));var d = b.$e || "POST",
          e;return C(c).then(b.M).then(function () {
        b.xa && (c.returnSecureToken = !0);return Jg(a, b.endpoint, d, c, b.Ge || !1);
      }).then(function (a) {
        return e = a;
      }).then(b.wa).then(function () {
        if (!b.qb) return e;if (!(b.qb in e)) throw new N("internal-error");return e[b.qb];
      });
    },
        Hg = function Hg(a) {
      var b, c;c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };if (c = d[c] ? new N(d[c]) : null) return c;c = a.error && a.error.message || "";d = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired",
        CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled" };b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;for (var e in d) {
        if (0 === c.indexOf(e)) return new N(d[e], b);
      }!b && a && (b = Df(a));return new N("internal-error", b);
    };var jh = function jh(a) {
      this.U = a;
    };jh.prototype.value = function () {
      return this.U;
    };jh.prototype.ke = function (a) {
      this.U.style = a;return this;
    };var kh = function kh(a) {
      this.U = a || {};
    };kh.prototype.value = function () {
      return this.U;
    };kh.prototype.ke = function (a) {
      this.U.style = a;return this;
    };var mh = function mh(a) {
      this.Tf = a;this.kc = null;this.dd = lh(this);
    },
        nh = function nh(a) {
      var b = new kh();b.U.where = document.body;b.U.url = a.Tf;b.U.messageHandlersFilter = L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.U.attributes = b.U.attributes || {};new jh(b.U.attributes).ke({ position: "absolute", top: "-100px", width: "1px", height: "1px" });b.U.dontclear = !0;return b;
    },
        lh = function lh(a) {
      return oh().then(function () {
        return new B(function (b, c) {
          L("gapi.iframes.getContext")().open(nh(a).value(), function (d) {
            a.kc = d;a.kc.restyle({ setHideOnLeave: !1 });
            var e = setTimeout(function () {
              c(Error("Network Error"));
            }, ph.get()),
                f = function f() {
              clearTimeout(e);b();
            };d.ping(f).then(f, function () {
              c(Error("Network Error"));
            });
          });
        });
      });
    };mh.prototype.sendMessage = function (a) {
      var b = this;return this.dd.then(function () {
        return new B(function (c) {
          b.kc.send(a.type, a, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    };
    var qh = function qh(a, b) {
      a.dd.then(function () {
        a.kc.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    },
        rh = new Jf(3E4, 6E4),
        ph = new Jf(5E3, 15E3),
        oh = function oh() {
      return new B(function (a, b) {
        if (If()) {
          var c = function c() {
            Hf();L("gapi.load")("gapi.iframes", { callback: a, ontimeout: function ontimeout() {
                Hf();b(Error("Network Error"));
              }, timeout: rh.get() });
          };if (L("gapi.iframes.Iframe")) a();else if (L("gapi.load")) c();else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();l[d] = function () {
              L("gapi.load") ? c() : b(Error("Network Error"));
            };C(he("https://apis.google.com/js/api.js?onload=" + d)).f(function () {
              b(Error("Network Error"));
            });
          }
        } else b(Error("Network Error"));
      });
    };var sh = function sh(a, b, c) {
      this.v = a;this.j = b;this.B = c;this.Ua = null;this.Vb = bf(this.v, "/__/auth/iframe");I(this.Vb, "apiKey", this.j);I(this.Vb, "appName", this.B);
    };sh.prototype.setVersion = function (a) {
      this.Ua = a;return this;
    };sh.prototype.toString = function () {
      this.Ua ? I(this.Vb, "v", this.Ua) : $e(this.Vb, "v");return this.Vb.toString();
    };var th = function th(a, b, c, d, e) {
      this.v = a;this.j = b;this.B = c;this.Fe = d;this.Ua = this.I = this.md = null;this.Kb = e;
    };th.prototype.setVersion = function (a) {
      this.Ua = a;return this;
    };
    th.prototype.toString = function () {
      var a = bf(this.v, "/__/auth/handler");I(a, "apiKey", this.j);I(a, "appName", this.B);I(a, "authType", this.Fe);if (this.Kb.isOAuthProvider) {
        I(a, "providerId", this.Kb.providerId);var b = this.Kb,
            c = Ef(b.Fd),
            d;for (d in c) {
          c[d] = c[d].toString();
        }b = b.zf;c = Ta(c);for (d = 0; d < b.length; d++) {
          var e = b[d];e in c && delete c[e];
        }Ra(c) || I(a, "customParameters", Df(c));
      }"function" === typeof this.Kb.Nd && (b = this.Kb.Nd(), b.length && I(a, "scopes", b.join(",")));this.md ? I(a, "redirectUrl", this.md) : $e(a, "redirectUrl");
      this.I ? I(a, "eventId", this.I) : $e(a, "eventId");this.Ua ? I(a, "v", this.Ua) : $e(a, "v");if (this.Wb) for (var f in this.Wb) {
        this.Wb.hasOwnProperty(f) && !Ze(a, f) && I(a, f, this.Wb[f]);
      }return a.toString();
    };
    var uh = function uh(a, b, c, d) {
      this.v = a;this.j = b;this.B = c;this.Re = (this.Ca = d || null) ? yf(this.Ca) : null;d = this.Ca;this.af = new sh(a, b, c).setVersion(d).toString();this.ka = [];this.g = new R(b, null, this.Re);this.nc = this.sa = null;
    },
        vh = function vh(a) {
      var b = hf();return Pg(a).then(function (a) {
        a: {
          for (var c = af(b), e = c.fa, c = c.ca, f = 0; f < a.length; f++) {
            var g;var k = a[f];g = c;var n = e;0 == k.indexOf("chrome-extension://") ? g = af(k).ca == g && "chrome-extension" == n : "http" != n && "https" != n ? g = !1 : rf.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = new RegExp("^(.+\\." + k + "|" + k + ")$", "i").test(g));if (g) {
              a = !0;break a;
            }
          }a = !1;
        }if (!a) throw new bg(hf());
      });
    };h = uh.prototype;h.Cb = function () {
      if (this.nc) return this.nc;var a = this;return this.nc = sf().then(function () {
        a.jc = new mh(a.af);wh(a);
      });
    };h.Qb = function (a, b, c) {
      var d = new N("popup-closed-by-user"),
          e = new N("web-storage-unsupported"),
          f = this,
          g = !1;return this.Ia().then(function () {
        xh(f).then(function (c) {
          c || (a && of(a), b(e), g = !0);
        });
      }).f(function () {}).then(function () {
        if (!g) return qf(a);
      }).then(function () {
        if (!g) return xe(c).then(function () {
          b(d);
        });
      });
    };
    h.le = function () {
      var a = J();return !Cf(a) && !Gf(a);
    };h.Pd = function () {
      return !1;
    };h.Ib = function (a, b, c, d, e, f, g) {
      if (!a) return D(new N("popup-blocked"));if (g && !Cf()) return this.Ia().f(function (b) {
        of(a);e(b);
      }), d(), C();this.sa || (this.sa = vh(this.g));var k = this;return this.sa.then(function () {
        var b = k.Ia().f(function (b) {
          of(a);e(b);throw b;
        });d();return b;
      }).then(function () {
        wg(c);if (!g) {
          var d = yh(k.v, k.j, k.B, b, c, null, f, k.Ca);jf(d, a);
        }
      }).f(function (a) {
        "auth/network-request-failed" == a.code && (k.sa = null);throw a;
      });
    };
    h.Jb = function (a, b, c) {
      this.sa || (this.sa = vh(this.g));var d = this;return this.sa.then(function () {
        wg(b);var e = yh(d.v, d.j, d.B, a, b, hf(), c, d.Ca);jf(e);
      });
    };h.Ia = function () {
      var a = this;return this.Cb().then(function () {
        return a.jc.dd;
      }).f(function () {
        a.sa = null;throw new N("network-request-failed");
      });
    };h.re = function () {
      return !0;
    };
    var yh = function yh(a, b, c, d, e, f, g, k, n) {
      a = new th(a, b, c, d, e);a.md = f;a.I = g;f = a.setVersion(k);f.Wb = Ta(n || null);return f.toString();
    },
        wh = function wh(a) {
      if (!a.jc) throw Error("IfcHandler must be initialized!");qh(a.jc, function (b) {
        var c = {};if (b && b.authEvent) {
          var d = !1;b = ag(b.authEvent);for (c = 0; c < a.ka.length; c++) {
            d = a.ka[c](b) || d;
          }c = {};c.status = d ? "ACK" : "ERROR";return C(c);
        }c.status = "ERROR";return C(c);
      });
    },
        xh = function xh(a) {
      var b = { type: "webStorageSupport" };return a.Cb().then(function () {
        return a.jc.sendMessage(b);
      }).then(function (a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;throw Error();
      });
    };uh.prototype.Wa = function (a) {
      this.ka.push(a);
    };uh.prototype.Ob = function (a) {
      La(this.ka, function (b) {
        return b == a;
      });
    };var zh = function zh(a) {
      this.A = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.A) throw new N("internal-error", "The React Native compatibility library was not found.");
    };h = zh.prototype;h.get = function (a) {
      return C(this.A.getItem(a)).then(function (a) {
        return a && Ff(a);
      });
    };h.set = function (a, b) {
      return C(this.A.setItem(a, Df(b)));
    };h.remove = function (a) {
      return C(this.A.removeItem(a));
    };h.Xa = function () {};h.Ra = function () {};var Bh = function Bh() {
      this.A = {};
    };h = Bh.prototype;h.get = function (a) {
      return C(this.A[a]);
    };h.set = function (a, b) {
      this.A[a] = b;return C();
    };h.remove = function (a) {
      delete this.A[a];return C();
    };h.Xa = function () {};h.Ra = function () {};var Dh = function Dh() {
      if (!Ch()) {
        if ("Node" == K()) throw new N("internal-error", "The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");
      }this.A = l.localStorage || firebase.INTERNAL.node.localStorage;
    },
        Ch = function Ch() {
      var a = "Node" == K(),
          a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = Dh.prototype;
    h.get = function (a) {
      var b = this;return C().then(function () {
        var c = b.A.getItem(a);return Ff(c);
      });
    };h.set = function (a, b) {
      var c = this;return C().then(function () {
        var d = Df(b);null === d ? c.remove(a) : c.A.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return C().then(function () {
        b.A.removeItem(a);
      });
    };h.Xa = function (a) {
      l.window && Oc(l.window, "storage", a);
    };h.Ra = function (a) {
      l.window && Xc(l.window, "storage", a);
    };var Eh = function Eh() {
      this.A = {};
    };h = Eh.prototype;h.get = function () {
      return C(null);
    };h.set = function () {
      return C();
    };h.remove = function () {
      return C();
    };h.Xa = function () {};h.Ra = function () {};var Gh = function Gh() {
      if (!Fh()) {
        if ("Node" == K()) throw new N("internal-error", "The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");
      }this.A = l.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
        Fh = function Fh() {
      var a = "Node" == K(),
          a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = Gh.prototype;
    h.get = function (a) {
      var b = this;return C().then(function () {
        var c = b.A.getItem(a);return Ff(c);
      });
    };h.set = function (a, b) {
      var c = this;return C().then(function () {
        var d = Df(b);null === d ? c.remove(a) : c.A.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return C().then(function () {
        b.A.removeItem(a);
      });
    };h.Xa = function () {};h.Ra = function () {};var Hh = function Hh(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new N("web-storage-unsupported");this.Je = a;this.cd = b;this.Nc = c;this.ve = d;this.ub = e;this.Y = {};this.Rb = [];this.Eb = 0;this.bf = f || l.indexedDB;
    },
        Ih,
        Jh = function Jh(a) {
      return new B(function (b, c) {
        var d = a.bf.open(a.Je, a.ub);d.onerror = function (a) {
          c(Error(a.target.errorCode));
        };d.onupgradeneeded = function (b) {
          b = b.target.result;try {
            b.createObjectStore(a.cd, { keyPath: a.Nc });
          } catch (f) {
            c(f);
          }
        };d.onsuccess = function (a) {
          b(a.target.result);
        };
      });
    },
        Kh = function Kh(a) {
      a.Sd || (a.Sd = Jh(a));return a.Sd;
    },
        Lh = function Lh(a, b) {
      return b.objectStore(a.cd);
    },
        Mh = function Mh(a, b, c) {
      return b.transaction([a.cd], c ? "readwrite" : "readonly");
    },
        Nh = function Nh(a) {
      return new B(function (b, c) {
        a.onsuccess = function (a) {
          a && a.target ? b(a.target.result) : b();
        };a.onerror = function (a) {
          c(Error(a.target.errorCode));
        };
      });
    };h = Hh.prototype;
    h.set = function (a, b) {
      var c = !1,
          d,
          e = this;return Rd(Kh(this).then(function (b) {
        d = b;b = Lh(e, Mh(e, d, !0));return Nh(b.get(a));
      }).then(function (f) {
        var g = Lh(e, Mh(e, d, !0));if (f) return f.value = b, Nh(g.put(f));e.Eb++;c = !0;f = {};f[e.Nc] = a;f[e.ve] = b;return Nh(g.add(f));
      }).then(function () {
        e.Y[a] = b;
      }), function () {
        c && e.Eb--;
      });
    };h.get = function (a) {
      var b = this;return Kh(this).then(function (c) {
        return Nh(Lh(b, Mh(b, c, !1)).get(a));
      }).then(function (a) {
        return a && a.value;
      });
    };
    h.remove = function (a) {
      var b = !1,
          c = this;return Rd(Kh(this).then(function (d) {
        b = !0;c.Eb++;return Nh(Lh(c, Mh(c, d, !0))["delete"](a));
      }).then(function () {
        delete c.Y[a];
      }), function () {
        b && c.Eb--;
      });
    };
    h.Pf = function () {
      var a = this;return Kh(this).then(function (b) {
        var c = Lh(a, Mh(a, b, !1));return c.getAll ? Nh(c.getAll()) : new B(function (a, b) {
          var d = [],
              e = c.openCursor();e.onsuccess = function (b) {
            (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
          };e.onerror = function (a) {
            b(Error(a.target.errorCode));
          };
        });
      }).then(function (b) {
        var c = {},
            d = [];if (0 == a.Eb) {
          for (d = 0; d < b.length; d++) {
            c[b[d][a.Nc]] = b[d][a.ve];
          }d = kf(a.Y, c);a.Y = c;
        }return d;
      });
    };h.Xa = function (a) {
      0 == this.Rb.length && this.sd();this.Rb.push(a);
    };
    h.Ra = function (a) {
      La(this.Rb, function (b) {
        return b == a;
      });0 == this.Rb.length && this.zc();
    };h.sd = function () {
      var a = this;this.zc();var b = function b() {
        a.gd = xe(800).then(_q(a.Pf, a)).then(function (b) {
          0 < b.length && w(a.Rb, function (a) {
            a(b);
          });
        }).then(b).f(function (a) {
          "STOP_EVENT" != a.message && b();
        });return a.gd;
      };b();
    };h.zc = function () {
      this.gd && this.gd.cancel("STOP_EVENT");
    };var Rh = function Rh() {
      this.Id = { Browser: Oh, Node: Ph, ReactNative: Qh }[K()];
    },
        Sh,
        Oh = { K: Dh, vd: Gh },
        Ph = { K: Dh, vd: Gh },
        Qh = { K: zh, vd: Eh };var Th = function Th(a) {
      var b = {},
          c = a.email,
          d = a.newEmail;a = a.requestType;if (!c || !a) throw Error("Invalid provider user info!");b.fromEmail = d || null;b.email = c;M(this, "operation", a);M(this, "data", Uf(b));
    };var Uh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        S = function S(a, b) {
      return { name: a || "", ha: "a valid string", optional: !!b, ja: m };
    },
        Vh = function Vh(a) {
      return { name: a || "", ha: "a valid object", optional: !1, ja: ha };
    },
        Wh = function Wh(a, b) {
      return { name: a || "", ha: "a function", optional: !!b, ja: p };
    },
        Xh = function Xh() {
      return { name: "", ha: "null", optional: !1, ja: da };
    },
        Yh = function Yh() {
      return { name: "credential", ha: "a valid credential", optional: !1, ja: function ja(a) {
          return !(!a || !a.dc);
        } };
    },
        Zh = function Zh() {
      return { name: "authProvider",
        ha: "a valid Auth provider", optional: !1, ja: function ja(a) {
          return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
        } };
    },
        $h = function $h(a, b, c, d) {
      return { name: c || "", ha: a.ha + " or " + b.ha, optional: !!d, ja: function ja(c) {
          return a.ja(c) || b.ja(c);
        } };
    };var ai = function ai(a, b, c, d, e, f) {
      this.rf = a;this.Bf = b;this.Ue = c;this.pc = d;this.wd = e;this.Cf = !!f;this.hb = null;this.Ka = this.pc;if (this.wd < this.pc) throw Error("Proactive refresh lower bound greater than upper bound!");
    };ai.prototype.start = function () {
      this.Ka = this.pc;bi(this, !0);
    };
    var ci = function ci(a, b) {
      if (b) return a.Ka = a.pc, a.Ue();b = a.Ka;a.Ka *= 2;a.Ka > a.wd && (a.Ka = a.wd);return b;
    },
        bi = function bi(a, b) {
      a.stop();a.hb = xe(ci(a, b)).then(function () {
        return a.Cf ? C() : Lf();
      }).then(function () {
        return a.rf();
      }).then(function () {
        bi(a, !0);
      }).f(function (b) {
        a.Bf(b) && bi(a, !1);
      });
    };ai.prototype.stop = function () {
      this.hb && (this.hb.cancel(), this.hb = null);
    };var ii = function ii(a) {
      var b = {};b["facebook.com"] = di;b["google.com"] = ei;b["github.com"] = fi;b["twitter.com"] = gi;var c = a && a.providerId;return c ? b[c] ? new b[c](a) : new hi(a) : null;
    },
        hi = function hi(a) {
      var b = Ff(a.rawUserInfo || "{}");a = a.providerId;if (!a) throw Error("Invalid additional user info!");M(this, "profile", Uf(b || {}));M(this, "providerId", a);
    },
        di = function di(a) {
      hi.call(this, a);if ("facebook.com" != this.providerId) throw Error("Invalid provider id!");
    };r(di, hi);
    var fi = function fi(a) {
      hi.call(this, a);if ("github.com" != this.providerId) throw Error("Invalid provider id!");M(this, "username", this.profile && this.profile.login || null);
    };r(fi, hi);var ei = function ei(a) {
      hi.call(this, a);if ("google.com" != this.providerId) throw Error("Invalid provider id!");
    };r(ei, hi);var gi = function gi(a) {
      hi.call(this, a);if ("twitter.com" != this.providerId) throw Error("Invalid provider id!");M(this, "username", a.screenName || null);
    };r(gi, hi);var T = function T(a, b) {
      for (var c in b) {
        var d = b[c].name;a[d] = ji(d, a[c], b[c].a);
      }
    },
        U = function U(a, b, c, d) {
      a[b] = ji(b, c, d);
    },
        ji = function ji(a, b, c) {
      if (!c) return b;var d = ki(a);a = function a() {
        var a = Array.prototype.slice.call(arguments),
            e;a: {
          e = Array.prototype.slice.call(a);var k;k = 0;for (var n = !1, A = 0; A < c.length; A++) {
            if (c[A].optional) n = !0;else {
              if (n) throw new N("internal-error", "Argument validator encountered a required argument after an optional argument.");k++;
            }
          }n = c.length;if (e.length < k || n < e.length) e = "Expected " + (k == n ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + n + " arguments") + " but got " + e.length + ".";else {
            for (k = 0; k < e.length; k++) {
              if (n = c[k].optional && void 0 === e[k], !c[k].ja(e[k]) && !n) {
                e = c[k];if (0 > k || k >= Uh.length) throw new N("internal-error", "Argument validator received an unsupported number of arguments.");e = Uh[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.ha + ".";break a;
              }
            }e = null;
          }
        }if (e) throw new N("argument-error", d + " failed: " + e);return b.apply(this, a);
      };for (var e in b) {
        a[e] = b[e];
      }for (e in b.prototype) {
        a.prototype[e] = b.prototype[e];
      }return a;
    },
        ki = function ki(a) {
      a = a.split(".");return a[a.length - 1];
    };var li = function li(a, b, c, d) {
      this.mf = a;this.ie = b;this.Df = c;this.Pb = d;this.T = {};Sh || (Sh = new Rh());a = Sh;try {
        var e;gf() ? (Ih || (Ih = new Hh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = Ih) : e = new a.Id.K();this.Oa = e;
      } catch (f) {
        this.Oa = new Bh(), this.Pb = !0;
      }try {
        this.Bc = new a.Id.vd();
      } catch (f) {
        this.Bc = new Bh();
      }this.td = _q(this.oe, this);this.Y = {};
    },
        mi,
        ni = function ni() {
      mi || (mi = new li("firebase", ":", !Gf(J()) && wf() ? !0 : !1, Cf()));return mi;
    };h = li.prototype;
    h.R = function (a, b) {
      return this.mf + this.ie + a.name + (b ? this.ie + b : "");
    };h.get = function (a, b) {
      return (a.K ? this.Oa : this.Bc).get(this.R(a, b));
    };h.remove = function (a, b) {
      b = this.R(a, b);a.K && !this.Pb && (this.Y[b] = null);return (a.K ? this.Oa : this.Bc).remove(b);
    };h.set = function (a, b, c) {
      var d = this.R(a, c),
          e = this,
          f = a.K ? this.Oa : this.Bc;return f.set(d, b).then(function () {
        return f.get(d);
      }).then(function (b) {
        a.K && !this.Pb && (e.Y[d] = b);
      });
    };
    h.addListener = function (a, b, c) {
      a = this.R(a, b);this.Pb || (this.Y[a] = l.localStorage.getItem(a));Ra(this.T) && this.sd();this.T[a] || (this.T[a] = []);this.T[a].push(c);
    };h.removeListener = function (a, b, c) {
      a = this.R(a, b);this.T[a] && (La(this.T[a], function (a) {
        return a == c;
      }), 0 == this.T[a].length && delete this.T[a]);Ra(this.T) && this.zc();
    };h.sd = function () {
      this.Oa.Xa(this.td);this.Pb || gf() || oi(this);
    };
    var oi = function oi(a) {
      pi(a);a.bd = setInterval(function () {
        for (var b in a.T) {
          var c = l.localStorage.getItem(b),
              d = a.Y[b];c != d && (a.Y[b] = c, c = new Dc({ type: "storage", key: b, target: window, oldValue: d, newValue: c, tf: !0 }), a.oe(c));
        }
      }, 1E3);
    },
        pi = function pi(a) {
      a.bd && (clearInterval(a.bd), a.bd = null);
    };li.prototype.zc = function () {
      this.Oa.Ra(this.td);pi(this);
    };
    li.prototype.oe = function (a) {
      if (a && a.Se) {
        var b = a.ab.key;"undefined" !== typeof a.ab.tf ? this.Oa.Ra(this.td) : pi(this);if (this.Df) {
          var c = l.localStorage.getItem(b);a = a.ab.newValue;a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b));
        }this.Y[b] = l.localStorage.getItem(b);this.Bd(b);
      } else w(a, _q(this.Bd, this));
    };li.prototype.Bd = function (a) {
      this.T[a] && w(this.T[a], function (a) {
        a();
      });
    };var qi = function qi(a, b) {
      this.u = a;this.i = b || ni();
    },
        ri = { name: "authEvent", K: !0 },
        si = function si(a) {
      return a.i.get(ri, a.u).then(function (a) {
        return ag(a);
      });
    };qi.prototype.Wa = function (a) {
      this.i.addListener(ri, this.u, a);
    };qi.prototype.Ob = function (a) {
      this.i.removeListener(ri, this.u, a);
    };var ti = function ti(a) {
      this.i = a || ni();
    },
        ui = { name: "sessionId", K: !1 };ti.prototype.ec = function (a) {
      return this.i.get(ui, a);
    };var vi = function vi(a, b, c, d, e, f) {
      this.v = a;this.j = b;this.B = c;this.Ca = d || null;this.pe = b + ":" + c;this.Ef = new ti();this.Md = new qi(this.pe);this.Xc = null;this.ka = [];this.ef = e || 500;this.xf = f || 2E3;this.Bb = this.sc = null;
    },
        wi = function wi(a) {
      return new N("invalid-cordova-configuration", a);
    };
    vi.prototype.Ia = function () {
      return this.$c ? this.$c : this.$c = uf().then(function () {
        if ("function" !== typeof L("universalLinks.subscribe", l)) throw wi("cordova-universal-links-plugin is not installed");if ("undefined" === typeof L("BuildInfo.packageName", l)) throw wi("cordova-plugin-buildinfo is not installed");if ("function" !== typeof L("cordova.plugins.browsertab.openUrl", l)) throw wi("cordova-plugin-browsertab is not installed");if ("function" !== typeof L("cordova.InAppBrowser.open", l)) throw wi("cordova-plugin-inappbrowser is not installed");
      }, function () {
        throw new N("cordova-not-ready");
      });
    };var xi = function xi() {
      for (var a = 20, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }return b.join("");
    },
        yi = function yi(a) {
      var b = new Eb();b.update(a);return pb(b.digest());
    };h = vi.prototype;h.Qb = function (a, b) {
      b(new N("operation-not-supported-in-this-environment"));return C();
    };h.Ib = function () {
      return D(new N("operation-not-supported-in-this-environment"));
    };h.re = function () {
      return !1;
    };h.le = function () {
      return !0;
    };
    h.Pd = function () {
      return !0;
    };
    h.Jb = function (a, b, c) {
      if (this.sc) return D(new N("redirect-operation-pending"));var d = this,
          e = l.document,
          f = null,
          g = null,
          k = null,
          n = null;return this.sc = Rd(C().then(function () {
        wg(b);return zi(d);
      }).then(function () {
        return Ai(d, a, b, c);
      }).then(function () {
        return new B(function (a, b) {
          g = function g() {
            var b = L("cordova.plugins.browsertab.close", l);a();"function" === typeof b && b();d.Bb && "function" === typeof d.Bb.close && (d.Bb.close(), d.Bb = null);return !1;
          };d.Wa(g);k = function k() {
            f || (f = xe(d.xf).then(function () {
              b(new N("redirect-cancelled-by-user"));
            }));
          };n = function n() {
            Kf() && k();
          };e.addEventListener("resume", k, !1);J().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
        }).f(function (a) {
          return Bi(d).then(function () {
            throw a;
          });
        });
      }), function () {
        k && e.removeEventListener("resume", k, !1);n && e.removeEventListener("visibilitychange", n, !1);f && f.cancel();g && d.Ob(g);d.sc = null;
      });
    };
    var Ai = function Ai(a, b, c, d) {
      var e = xi(),
          f = new O(b, d, null, e, new N("no-auth-event")),
          g = L("BuildInfo.packageName", l);if ("string" !== typeof g) throw new N("invalid-cordova-configuration");var k = L("BuildInfo.displayName", l),
          n = {};if (J().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (J().toLowerCase().match(/android/)) n.apn = g;else return D(new N("operation-not-supported-in-this-environment"));k && (n.appDisplayName = k);e = yi(e);n.sessionId = e;var A = yh(a.v, a.j, a.B, b, c, null, d, a.Ca, n);return a.Ia().then(function () {
        var b = a.pe;return a.Ef.i.set(ri, f.D(), b);
      }).then(function () {
        var b = L("cordova.plugins.browsertab.isAvailable", l);if ("function" !== typeof b) throw new N("invalid-cordova-configuration");var c = null;b(function (b) {
          if (b) {
            c = L("cordova.plugins.browsertab.openUrl", l);if ("function" !== typeof c) throw new N("invalid-cordova-configuration");c(A);
          } else {
            c = L("cordova.InAppBrowser.open", l);if ("function" !== typeof c) throw new N("invalid-cordova-configuration");b = c;var d;d = J();d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
            a.Bb = b(A, d ? "_blank" : "_system", "location=yes");
          }
        });
      });
    },
        Ci = function Ci(a, b) {
      for (var c = 0; c < a.ka.length; c++) {
        try {
          a.ka[c](b);
        } catch (d) {}
      }
    },
        zi = function zi(a) {
      a.Xc || (a.Xc = a.Ia().then(function () {
        return new B(function (b) {
          var c = function c(d) {
            b(d);a.Ob(c);return !1;
          };a.Wa(c);Di(a);
        });
      }));return a.Xc;
    },
        Bi = function Bi(a) {
      var b = null;return si(a.Md).then(function (c) {
        b = c;c = a.Md;return c.i.remove(ri, c.u);
      }).then(function () {
        return b;
      });
    },
        Di = function Di(a) {
      var b = L("universalLinks.subscribe", l);if ("function" !== typeof b) throw new N("invalid-cordova-configuration");
      var c = new O("unknown", null, null, null, new N("no-auth-event")),
          d = !1,
          e = xe(a.ef).then(function () {
        return Bi(a).then(function () {
          d || Ci(a, c);
        });
      }),
          f = function f(b) {
        d = !0;e && e.cancel();Bi(a).then(function (d) {
          var e = c;if (d && b && b.url) {
            var e = null,
                f;f = b.url;var g = af(f),
                k = Ze(g, "link"),
                n = Ze(af(k), "link"),
                g = Ze(g, "deep_link_id");f = Ze(af(g), "link") || g || n || k || f;-1 != f.indexOf("/__/auth/callback") && (e = af(f), e = Ff(Ze(e, "firebaseError") || null), e = (e = "object" === typeof e ? $f(e) : null) ? new O(d.ba, d.I, null, null, e) : new O(d.ba, d.I, f, d.ec()));
            e = e || c;
          }Ci(a, e);
        });
      },
          g = l.handleOpenURL;l.handleOpenURL = function (a) {
        0 == a.indexOf(L("BuildInfo.packageName", l) + "://") && f({ url: a });if ("function" === typeof g) try {
          g(a);
        } catch (n) {
          console.error(n);
        }
      };b(null, f);
    };vi.prototype.Wa = function (a) {
      this.ka.push(a);zi(this).f(function () {});
    };vi.prototype.Ob = function (a) {
      La(this.ka, function (b) {
        return b == a;
      });
    };var Ei = function Ei(a) {
      this.u = a;this.i = ni();
    },
        Fi = { name: "pendingRedirect", K: !1 },
        Gi = function Gi(a) {
      return a.i.set(Fi, "pending", a.u);
    },
        Hi = function Hi(a) {
      return a.i.remove(Fi, a.u);
    },
        Ii = function Ii(a) {
      return a.i.get(Fi, a.u).then(function (a) {
        return "pending" == a;
      });
    };var V = function V(a, b, c) {
      this.v = a;this.j = b;this.B = c;this.Sb = [];this.fb = !1;this.Jc = _q(this.Uc, this);this.Pa = new Ji(this);this.hd = new Ki(this);this.Fb = new Ei(this.j + ":" + this.B);this.ya = {};this.ya.unknown = this.Pa;this.ya.signInViaRedirect = this.Pa;this.ya.linkViaRedirect = this.Pa;this.ya.reauthViaRedirect = this.Pa;this.ya.signInViaPopup = this.hd;this.ya.linkViaPopup = this.hd;this.ya.reauthViaPopup = this.hd;this.J = Li(this.v, this.j, this.B);
    },
        Li = function Li(a, b, c) {
      var d = firebase.SDK_VERSION || null;return tf() ? new vi(a, b, c, d) : new uh(a, b, c, d);
    };V.prototype.reset = function () {
      this.fb = !1;this.J.Ob(this.Jc);this.J = Li(this.v, this.j, this.B);
    };V.prototype.Cb = function () {
      var a = this;this.fb || (this.fb = !0, this.J.Wa(this.Jc));var b = this.J;return this.J.Ia().f(function (c) {
        a.J == b && a.reset();throw c;
      });
    };var Oi = function Oi(a) {
      a.J.le() && a.Cb().f(function (b) {
        var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));Mi(b) && a.Uc(c);
      });a.J.Pd() || Ni(a.Pa);
    };
    V.prototype.subscribe = function (a) {
      Ia(this.Sb, a) || this.Sb.push(a);if (!this.fb) {
        var b = this;Ii(this.Fb).then(function (a) {
          a ? Hi(b.Fb).then(function () {
            b.Cb().f(function (a) {
              var c = new O("unknown", null, null, null, new N("operation-not-supported-in-this-environment"));Mi(a) && b.Uc(c);
            });
          }) : Oi(b);
        }).f(function () {
          Oi(b);
        });
      }
    };V.prototype.unsubscribe = function (a) {
      La(this.Sb, function (b) {
        return b == a;
      });
    };
    V.prototype.Uc = function (a) {
      if (!a) throw new N("invalid-auth-event");for (var b = !1, c = 0; c < this.Sb.length; c++) {
        var d = this.Sb[c];if (d.Cd(a.ba, a.I)) {
          (b = this.ya[a.ba]) && b.ce(a, d);b = !0;break;
        }
      }Ni(this.Pa);return b;
    };var Pi = new Jf(2E3, 1E4),
        Qi = new Jf(3E4, 6E4);V.prototype.getRedirectResult = function () {
      return this.Pa.getRedirectResult();
    };V.prototype.Ib = function (a, b, c, d, e) {
      var f = this;return this.J.Ib(a, b, c, function () {
        f.fb || (f.fb = !0, f.J.Wa(f.Jc));
      }, function () {
        f.reset();
      }, d, e);
    };
    var Mi = function Mi(a) {
      return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
    };V.prototype.Jb = function (a, b, c) {
      var d = this,
          e;return Gi(this.Fb).then(function () {
        return d.J.Jb(a, b, c).f(function (a) {
          if (Mi(a)) throw new N("operation-not-supported-in-this-environment");e = a;return Hi(d.Fb).then(function () {
            throw e;
          });
        }).then(function () {
          return d.J.re() ? new B(function () {}) : Hi(d.Fb).then(function () {
            return d.getRedirectResult();
          }).then(function () {}).f(function () {});
        });
      });
    };
    V.prototype.Qb = function (a, b, c, d) {
      return this.J.Qb(c, function (c) {
        a.Sa(b, null, c, d);
      }, Pi.get());
    };var Ri = {},
        Si = function Si(a, b, c) {
      var d = b + ":" + c;Ri[d] || (Ri[d] = new V(a, b, c));return Ri[d];
    },
        Ji = function Ji(a) {
      this.i = a;this.nb = null;this.Mb = [];this.Lb = [];this.lb = null;this.ld = !1;
    };Ji.prototype.reset = function () {
      this.nb = null;this.lb && (this.lb.cancel(), this.lb = null);
    };
    Ji.prototype.ce = function (a, b) {
      if (!a) return D(new N("invalid-auth-event"));this.reset();this.ld = !0;var c = a.ba,
          d = a.I,
          e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
          f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;"unknown" != c || e || f ? a = a.P ? this.jd(a, b) : b.xb(c, d) ? this.kd(a, b) : D(new N("invalid-auth-event")) : (Ti(this, !1, null, null), a = C());return a;
    };var Ni = function Ni(a) {
      a.ld || (a.ld = !0, Ti(a, !1, null, null));
    };
    Ji.prototype.jd = function (a) {
      Ti(this, !0, null, a.getError());return C();
    };Ji.prototype.kd = function (a, b) {
      var c = this;b = b.xb(a.ba, a.I);var d = a.sb,
          e = a.ec(),
          f = !!a.ba.match(/Redirect$/);return b(d, e).then(function (a) {
        Ti(c, f, a, null);
      }).f(function (a) {
        Ti(c, f, null, a);
      });
    };
    var Ui = function Ui(a, b) {
      a.nb = function () {
        return D(b);
      };if (a.Lb.length) for (var c = 0; c < a.Lb.length; c++) {
        a.Lb[c](b);
      }
    },
        Vi = function Vi(a, b) {
      a.nb = function () {
        return C(b);
      };if (a.Mb.length) for (var c = 0; c < a.Mb.length; c++) {
        a.Mb[c](b);
      }
    },
        Ti = function Ti(a, b, c, d) {
      b ? d ? Ui(a, d) : Vi(a, c) : Vi(a, { user: null });a.Mb = [];a.Lb = [];
    };Ji.prototype.getRedirectResult = function () {
      var a = this;return new B(function (b, c) {
        a.nb ? a.nb().then(b, c) : (a.Mb.push(b), a.Lb.push(c), Wi(a));
      });
    };
    var Wi = function Wi(a) {
      var b = new N("timeout");a.lb && a.lb.cancel();a.lb = xe(Qi.get()).then(function () {
        a.nb || Ti(a, !0, null, b);
      });
    },
        Ki = function Ki(a) {
      this.i = a;
    };Ki.prototype.ce = function (a, b) {
      if (!a) return D(new N("invalid-auth-event"));var c = a.ba,
          d = a.I;return a.P ? this.jd(a, b) : b.xb(c, d) ? this.kd(a, b) : D(new N("invalid-auth-event"));
    };Ki.prototype.jd = function (a, b) {
      b.Sa(a.ba, null, a.getError(), a.I);return C();
    };
    Ki.prototype.kd = function (a, b) {
      var c = a.I,
          d = a.ba,
          e = b.xb(d, c),
          f = a.sb;a = a.ec();return e(f, a).then(function (a) {
        b.Sa(d, a, null, c);
      }).f(function (a) {
        b.Sa(d, null, a, c);
      });
    };var Xi = function Xi(a) {
      this.g = a;this.za = this.W = null;this.Ea = 0;
    };Xi.prototype.D = function () {
      return { apiKey: this.g.j, refreshToken: this.W, accessToken: this.za, expirationTime: this.Ea };
    };
    var Zi = function Zi(a, b) {
      var c = b.idToken,
          d = b.refreshToken;b = Yi(b.expiresIn);a.za = c;a.Ea = b;a.W = d;
    },
        Yi = function Yi(a) {
      return la() + 1E3 * parseInt(a, 10);
    },
        $i = function $i(a, b) {
      return Ig(a.g, b).then(function (b) {
        a.za = b.access_token;a.Ea = Yi(b.expires_in);a.W = b.refresh_token;return { accessToken: a.za, expirationTime: a.Ea, refreshToken: a.W };
      }).f(function (b) {
        "auth/user-token-expired" == b.code && (a.W = null);throw b;
      });
    };
    Xi.prototype.getToken = function (a) {
      a = !!a;return this.za && !this.W ? D(new N("user-token-expired")) : a || !this.za || la() > this.Ea - 3E4 ? this.W ? $i(this, { grant_type: "refresh_token", refresh_token: this.W }) : C(null) : C({ accessToken: this.za, expirationTime: this.Ea, refreshToken: this.W });
    };var aj = function aj(a, b, c, d, e) {
      Rf(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, providerId: b });
    },
        bj = function bj(a, b) {
      Cc.call(this, a);for (var c in b) {
        this[c] = b[c];
      }
    };r(bj, Cc);
    var W = function W(a, b, c) {
      this.$ = [];this.j = a.apiKey;this.B = a.appName;this.v = a.authDomain || null;a = firebase.SDK_VERSION ? yf(firebase.SDK_VERSION) : null;this.g = new R(this.j, null, a);this.ga = new Xi(this.g);cj(this, b.idToken);Zi(this.ga, b);M(this, "refreshToken", this.ga.W);dj(this, c || {});te.call(this);this.tc = !1;this.v && Bf() && (this.m = Si(this.v, this.j, this.B));this.yc = [];this.ia = null;this.jb = ej(this);this.tb = _q(this.Vc, this);
    };r(W, te);W.prototype.Vc = function () {
      this.jb.hb && (this.jb.stop(), this.jb.start());
    };
    var ej = function ej(a) {
      return new ai(function () {
        return a.getToken(!0);
      }, function (a) {
        return a && "auth/network-request-failed" == a.code ? !0 : !1;
      }, function () {
        var b = a.ga.Ea - la() - 3E5;return 0 < b ? b : 0;
      }, 3E4, 96E4, !1);
    },
        fj = function fj(a) {
      a.Hd || a.jb.hb || (a.jb.start(), Xc(a, "tokenChanged", a.tb), Oc(a, "tokenChanged", a.tb));
    },
        gj = function gj(a) {
      Xc(a, "tokenChanged", a.tb);a.jb.stop();
    },
        cj = function cj(a, b) {
      a.Ud = b;M(a, "_lat", b);
    },
        hj = function hj(a, b) {
      La(a.yc, function (a) {
        return a == b;
      });
    },
        ij = function ij(a) {
      for (var b = [], c = 0; c < a.yc.length; c++) {
        b.push(a.yc[c](a));
      }return Od(b).then(function () {
        return a;
      });
    },
        jj = function jj(a) {
      a.m && !a.tc && (a.tc = !0, a.m.subscribe(a));
    },
        dj = function dj(a, b) {
      Rf(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, isAnonymous: b.isAnonymous || !1, providerData: [] });
    };M(W.prototype, "providerId", "firebase");
    var kj = function kj() {},
        lj = function lj(a) {
      return C().then(function () {
        if (a.Hd) throw new N("app-deleted");
      });
    },
        mj = function mj(a) {
      return Ea(a.providerData, function (a) {
        return a.providerId;
      });
    },
        oj = function oj(a, b) {
      b && (nj(a, b.providerId), a.providerData.push(b));
    },
        nj = function nj(a, b) {
      La(a.providerData, function (a) {
        return a.providerId == b;
      });
    },
        pj = function pj(a, b, c) {
      ("uid" != b || c) && a.hasOwnProperty(b) && M(a, b, c);
    };
    W.prototype.copy = function (a) {
      var b = this;b != a && (Rf(this, { uid: a.uid, displayName: a.displayName, photoURL: a.photoURL, email: a.email, emailVerified: a.emailVerified, isAnonymous: a.isAnonymous, providerData: [] }), w(a.providerData, function (a) {
        oj(b, a);
      }), this.ga = a.ga, M(this, "refreshToken", this.ga.W));
    };W.prototype.reload = function () {
      var a = this;return this.c(lj(this).then(function () {
        return qj(a).then(function () {
          return ij(a);
        }).then(kj);
      }));
    };
    var qj = function qj(a) {
      return a.getToken().then(function (b) {
        var c = a.isAnonymous;return rj(a, b).then(function () {
          c || pj(a, "isAnonymous", !1);return b;
        });
      });
    };W.prototype.getToken = function (a) {
      var b = this;return this.c(lj(this).then(function () {
        return b.ga.getToken(a);
      }).then(function (a) {
        if (!a) throw new N("internal-error");a.accessToken != b.Ud && (cj(b, a.accessToken), b.La());pj(b, "refreshToken", a.refreshToken);return a.accessToken;
      }));
    };
    var sj = function sj(a, b) {
      b.idToken && a.Ud != b.idToken && (Zi(a.ga, b), a.La(), cj(a, b.idToken), pj(a, "refreshToken", a.ga.W));
    };W.prototype.La = function () {
      this.dispatchEvent(new bj("tokenChanged"));
    };var rj = function rj(a, b) {
      return Q(a.g, hh, { idToken: b }).then(_q(a.sf, a));
    };
    W.prototype.sf = function (a) {
      a = a.users;if (!a || !a.length) throw new N("internal-error");a = a[0];dj(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified });for (var b = tj(a), c = 0; c < b.length; c++) {
        oj(this, b[c]);
      }pj(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    };
    var tj = function tj(a) {
      return (a = a.providerUserInfo) && a.length ? Ea(a, function (a) {
        return new aj(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
      }) : [];
    },
        vj = function vj(a, b) {
      var c = null;return a.c(b.dc(a.g).then(function (b) {
        var d = dg(b.idToken);if (!d || a.uid != d.Xd) throw new N("user-mismatch");sj(a, b);c = uj(a, b);a.ia = null;return a.reload();
      }).then(function () {
        return c;
      }), !0);
    };W.prototype.reauthenticate = function (a) {
      return vj(this, a).then(function (a) {
        return a.user;
      });
    };
    var wj = function wj(a, b) {
      return qj(a).then(function () {
        if (Ia(mj(a), b)) return ij(a).then(function () {
          throw new N("provider-already-linked");
        });
      });
    },
        yj = function yj(a, b) {
      var c = null;return a.c(wj(a, b.providerId).then(function () {
        return a.getToken();
      }).then(function (c) {
        return b.Wd(a.g, c);
      }).then(function (b) {
        c = uj(a, b);return xj(a, b);
      }).then(function () {
        return c;
      }));
    };W.prototype.link = function (a) {
      return yj(this, a).then(function (a) {
        return a.user;
      });
    };
    var uj = function uj(a, b) {
      var c = vg(b);b = ii(b);return { user: a, credential: c, additionalUserInfo: b };
    },
        xj = function xj(a, b) {
      sj(a, b);return a.reload().then(function () {
        return a;
      });
    };h = W.prototype;h.updateEmail = function (a) {
      var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updateEmail(c, a);
      }).then(function (a) {
        sj(b, a);return b.reload();
      }));
    };h.updatePassword = function (a) {
      var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updatePassword(c, a);
      }).then(function (a) {
        sj(b, a);return b.reload();
      }));
    };
    h.updateProfile = function (a) {
      if (void 0 === a.displayName && void 0 === a.photoURL) return lj(this);var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updateProfile(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function (a) {
        sj(b, a);pj(b, "displayName", a.displayName || null);pj(b, "photoURL", a.photoUrl || null);return ij(b);
      }).then(kj));
    };
    h.unlink = function (a) {
      var b = this;return this.c(qj(this).then(function (c) {
        return Ia(mj(b), a) ? Xg(b.g, c, [a]).then(function (a) {
          var c = {};w(a.providerUserInfo || [], function (a) {
            c[a.providerId] = !0;
          });w(mj(b), function (a) {
            c[a] || nj(b, a);
          });return ij(b);
        }) : ij(b).then(function () {
          throw new N("no-such-provider");
        });
      }));
    };
    h["delete"] = function () {
      var a = this;return this.c(this.getToken().then(function (b) {
        return Q(a.g, gh, { idToken: b });
      }).then(function () {
        a.dispatchEvent(new bj("userDeleted"));
      })).then(function () {
        for (var b = 0; b < a.$.length; b++) {
          a.$[b].cancel("app-deleted");
        }a.$ = [];a.Hd = !0;gj(a);M(a, "refreshToken", null);a.m && a.m.unsubscribe(a);
      });
    };
    h.Cd = function (a, b) {
      return "linkViaPopup" == a && (this.aa || null) == b && this.Z || "reauthViaPopup" == a && (this.aa || null) == b && this.Z || "linkViaRedirect" == a && (this.ua || null) == b || "reauthViaRedirect" == a && (this.ua || null) == b ? !0 : !1;
    };h.Sa = function (a, b, c, d) {
      "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.aa || null) || (c && this.Na ? this.Na(c) : b && !c && this.Z && this.Z(b), this.C && (this.C.cancel(), this.C = null), delete this.Z, delete this.Na);
    };
    h.xb = function (a, b) {
      return "linkViaPopup" == a && b == (this.aa || null) ? _q(this.Jd, this) : "reauthViaPopup" == a && b == (this.aa || null) ? _q(this.Kd, this) : "linkViaRedirect" == a && (this.ua || null) == b ? _q(this.Jd, this) : "reauthViaRedirect" == a && (this.ua || null) == b ? _q(this.Kd, this) : null;
    };h.cc = function () {
      return Af(this.uid + ":::");
    };h.linkWithPopup = function (a) {
      var b = this;return zj(this, a, function () {
        return wj(b, a.providerId).then(function () {
          return ij(b);
        });
      });
    };
    var zj = function zj(a, b, c) {
      if (!Bf()) return D(new N("operation-not-supported-in-this-environment"));if (a.ia) return D(a.ia);var d = Yf(b.providerId),
          e = a.cc(),
          f = null;(!Cf() || wf()) && a.v && b.isOAuthProvider && (f = yh(a.v, a.j, a.B, "linkViaPopup", b, null, e, firebase.SDK_VERSION || null));var g = pf(f, d && d.Hb, d && d.Gb);c = c().then(function () {
        Aj(a);return a.getToken().then(function () {});
      }).then(function () {
        return a.m.Ib(g, "linkViaPopup", b, e, !!f);
      }).then(function () {
        return new B(function (b, c) {
          a.Sa("linkViaPopup", null, new N("cancelled-popup-request"), a.aa || null);a.Z = b;a.Na = c;a.aa = e;a.C = a.m.Qb(a, "linkViaPopup", g, e);
        });
      }).then(function (a) {
        g && of(g);return a;
      }).f(function (a) {
        g && of(g);throw a;
      });return a.c(c, !1);
    };W.prototype.linkWithRedirect = function (a) {
      var b = this;return Bj(this, a, function () {
        return wj(b, a.providerId);
      });
    };
    var Bj = function Bj(a, b, c) {
      if (!Bf()) return D(new N("operation-not-supported-in-this-environment"));if (a.ia) return D(a.ia);var d = null,
          e = a.cc();c = c().then(function () {
        Aj(a);return a.getToken().then(function () {});
      }).then(function () {
        a.ua = e;return ij(a);
      }).then(function (b) {
        a.Qa && (b = a.Qa, b = b.i.set(Cj, a.D(), b.u));return b;
      }).then(function () {
        return a.m.Jb("linkViaRedirect", b, e);
      }).f(function (b) {
        d = b;if (a.Qa) return Dj(a.Qa);throw d;
      }).then(function () {
        if (d) throw d;
      });return a.c(c, !1);
    },
        Aj = function Aj(a) {
      if (!a.m || !a.tc) {
        if (a.m && !a.tc) throw new N("internal-error");throw new N("auth-domain-config-required");
      }
    };W.prototype.Jd = function (a, b) {
      var c = this;this.C && (this.C.cancel(), this.C = null);var d = null,
          e = this.getToken().then(function (d) {
        return hg(c.g, { requestUri: a, sessionId: b, idToken: d });
      }).then(function (a) {
        d = vg(a);return xj(c, a);
      }).then(function (a) {
        return { user: a, credential: d };
      });return this.c(e);
    };
    W.prototype.Kd = function (a, b) {
      var c = this;this.C && (this.C.cancel(), this.C = null);var d = null,
          e = C().then(function () {
        return fg(c.g, { requestUri: a, sessionId: b });
      }).then(function (a) {
        d = vg(a);var b = dg(a.idToken);if (!b || c.uid != b.Xd) throw new N("user-mismatch");sj(c, a);c.ia = null;return c.reload();
      }).then(function () {
        return { user: c, credential: d };
      });return this.c(e, !0);
    };
    W.prototype.sendEmailVerification = function () {
      var a = this;return this.c(this.getToken().then(function (b) {
        return a.g.sendEmailVerification(b);
      }).then(function (b) {
        if (a.email != b) return a.reload();
      }).then(function () {}));
    };W.prototype.c = function (a, b) {
      var c = this,
          d = Ej(this, a, b);this.$.push(d);Rd(d, function () {
        Ka(c.$, d);
      });return d;
    };
    var Ej = function Ej(a, b, c) {
      return a.ia && !c ? (b.cancel(), D(a.ia)) : b.f(function (b) {
        !b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.ia || a.dispatchEvent(new bj("userInvalidated")), a.ia = b);throw b;
      });
    };W.prototype.toJSON = function () {
      return this.D();
    };
    W.prototype.D = function () {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.j, appName: this.B, authDomain: this.v, stsTokenManager: this.ga.D(), redirectEventId: this.ua || null };w(this.providerData, function (b) {
        a.providerData.push(Sf(b));
      });return a;
    };
    var Fj = function Fj(a) {
      if (!a.apiKey) return null;var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
          c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3;else return null;var d = new W(b, c, a);a.providerData && w(a.providerData, function (a) {
        if (a) {
          var b = {};Rf(b, a);oj(d, b);
        }
      });a.redirectEventId && (d.ua = a.redirectEventId);
      return d;
    },
        Gj = function Gj(a, b, c) {
      var d = new W(a, b);c && (d.Qa = c);return d.reload().then(function () {
        return d;
      });
    };var Hj = function Hj(a) {
      this.u = a;this.i = ni();
    },
        Cj = { name: "redirectUser", K: !1 },
        Dj = function Dj(a) {
      return a.i.remove(Cj, a.u);
    },
        Ij = function Ij(a, b) {
      return a.i.get(Cj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return Fj(a || {});
      });
    };var Jj = function Jj(a) {
      this.u = a;this.i = ni();
    },
        Kj = { name: "authUser", K: !0 },
        Lj = function Lj(a, b) {
      return a.i.set(Kj, b.D(), a.u);
    },
        Mj = function Mj(a) {
      return a.i.remove(Kj, a.u);
    },
        Nj = function Nj(a, b) {
      return a.i.get(Kj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return Fj(a || {});
      });
    };var Y = function Y(a) {
      this.Za = !1;M(this, "app", a);if (X(this).options && X(this).options.apiKey) a = firebase.SDK_VERSION ? yf(firebase.SDK_VERSION) : null, this.g = new R(X(this).options && X(this).options.apiKey, null, a);else throw new N("invalid-api-key");this.$ = [];this.Aa = [];this.pf = firebase.INTERNAL.createSubscribe(_q(this.cf, this));Oj(this, null);this.pa = new Jj(X(this).options.apiKey + ":" + X(this).name);this.mb = new Hj(X(this).options.apiKey + ":" + X(this).name);this.Xb = this.c(Pj(this));this.va = this.c(Qj(this));this.ad = !1;this.Tc = _q(this.Of, this);this.ue = _q(this.cb, this);this.tb = _q(this.Vc, this);this.se = _q(this.Ye, this);this.te = _q(this.Ze, this);Rj(this);this.INTERNAL = {};this.INTERNAL["delete"] = _q(this["delete"], this);this.Fa = 0;
    };Y.prototype.toJSON = function () {
      return { apiKey: X(this).options.apiKey, authDomain: X(this).options.authDomain, appName: X(this).name, currentUser: Z(this) && Z(this).D() };
    };
    var Sj = function Sj(a) {
      return a.Ke || D(new N("auth-domain-config-required"));
    },
        Rj = function Rj(a) {
      var b = X(a).options.authDomain,
          c = X(a).options.apiKey;b && Bf() && (a.Ke = a.Xb.then(function () {
        if (!a.Za) return a.m = Si(b, c, X(a).name), a.m.subscribe(a), Z(a) && jj(Z(a)), a.Nb && (jj(a.Nb), a.Nb = null), a.m;
      }));
    };h = Y.prototype;h.Cd = function (a, b) {
      switch (a) {case "unknown":case "signInViaRedirect":
          return !0;case "signInViaPopup":
          return this.aa == b && !!this.Z;default:
          return !1;}
    };
    h.Sa = function (a, b, c, d) {
      "signInViaPopup" == a && this.aa == d && (c && this.Na ? this.Na(c) : b && !c && this.Z && this.Z(b), this.C && (this.C.cancel(), this.C = null), delete this.Z, delete this.Na);
    };h.xb = function (a, b) {
      return "signInViaRedirect" == a || "signInViaPopup" == a && this.aa == b && this.Z ? _q(this.Ne, this) : null;
    };
    h.Ne = function (a, b) {
      var c = this;a = { requestUri: a, sessionId: b };this.C && (this.C.cancel(), this.C = null);var d = null,
          e = fg(c.g, a).then(function (a) {
        d = vg(a);return a;
      });a = c.Xb.then(function () {
        return e;
      }).then(function (a) {
        return Tj(c, a);
      }).then(function () {
        return { user: Z(c), credential: d };
      });return this.c(a);
    };h.cc = function () {
      return Af();
    };
    h.signInWithPopup = function (a) {
      if (!Bf()) return D(new N("operation-not-supported-in-this-environment"));var b = this,
          c = Yf(a.providerId),
          d = this.cc(),
          e = null;(!Cf() || wf()) && X(this).options.authDomain && a.isOAuthProvider && (e = yh(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));var f = pf(e, c && c.Hb, c && c.Gb),
          c = Sj(this).then(function (b) {
        return b.Ib(f, "signInViaPopup", a, d, !!e);
      }).then(function () {
        return new B(function (a, c) {
          b.Sa("signInViaPopup", null, new N("cancelled-popup-request"), b.aa);b.Z = a;b.Na = c;b.aa = d;b.C = b.m.Qb(b, "signInViaPopup", f, d);
        });
      }).then(function (a) {
        f && of(f);return a;
      }).f(function (a) {
        f && of(f);throw a;
      });return this.c(c);
    };h.signInWithRedirect = function (a) {
      if (!Bf()) return D(new N("operation-not-supported-in-this-environment"));var b = this,
          c = Sj(this).then(function () {
        return b.m.Jb("signInViaRedirect", a);
      });return this.c(c);
    };
    h.getRedirectResult = function () {
      if (!Bf()) return D(new N("operation-not-supported-in-this-environment"));var a = this,
          b = Sj(this).then(function () {
        return a.m.getRedirectResult();
      });return this.c(b);
    };
    var Tj = function Tj(a, b) {
      var c = {};c.apiKey = X(a).options.apiKey;c.authDomain = X(a).options.authDomain;c.appName = X(a).name;return a.Xb.then(function () {
        return Gj(c, b, a.mb);
      }).then(function (b) {
        if (Z(a) && b.uid == Z(a).uid) return Z(a).copy(b), a.cb(b);Oj(a, b);jj(b);return a.cb(b);
      }).then(function () {
        a.La();
      });
    },
        Oj = function Oj(a, b) {
      Z(a) && (hj(Z(a), a.ue), Xc(Z(a), "tokenChanged", a.tb), Xc(Z(a), "userDeleted", a.se), Xc(Z(a), "userInvalidated", a.te), gj(Z(a)));b && (b.yc.push(a.ue), Oc(b, "tokenChanged", a.tb), Oc(b, "userDeleted", a.se), Oc(b, "userInvalidated", a.te), 0 < a.Fa && fj(b));M(a, "currentUser", b);
    };Y.prototype.signOut = function () {
      var a = this,
          b = this.va.then(function () {
        if (!Z(a)) return C();Oj(a, null);return Mj(a.pa).then(function () {
          a.La();
        });
      });return this.c(b);
    };
    var Uj = function Uj(a) {
      var b = Ij(a.mb, X(a).options.authDomain).then(function (b) {
        if (a.Nb = b) b.Qa = a.mb;return Dj(a.mb);
      });return a.c(b);
    },
        Pj = function Pj(a) {
      var b = X(a).options.authDomain,
          c = Uj(a).then(function () {
        return Nj(a.pa, b);
      }).then(function (b) {
        return b ? (b.Qa = a.mb, a.Nb && (a.Nb.ua || null) == (b.ua || null) ? b : b.reload().then(function () {
          return Lj(a.pa, b).then(function () {
            return b;
          });
        }).f(function (c) {
          return "auth/network-request-failed" == c.code ? b : Mj(a.pa);
        })) : null;
      }).then(function (b) {
        Oj(a, b || null);
      });return a.c(c);
    },
        Qj = function Qj(a) {
      return a.Xb.then(function () {
        return a.getRedirectResult();
      }).f(function () {}).then(function () {
        if (!a.Za) return a.Tc();
      }).f(function () {}).then(function () {
        if (!a.Za) {
          a.ad = !0;var b = a.pa;b.i.addListener(Kj, b.u, a.Tc);
        }
      });
    };h = Y.prototype;h.Of = function () {
      var a = this;return Nj(this.pa, X(this).options.authDomain).then(function (b) {
        if (!a.Za) {
          var c;if (c = Z(a) && b) {
            c = Z(a).uid;var d = b.uid;c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
          }if (c) return Z(a).copy(b), Z(a).getToken();if (Z(a) || b) Oj(a, b), b && (jj(b), b.Qa = a.mb), a.m && a.m.subscribe(a), a.La();
        }
      });
    };h.cb = function (a) {
      return Lj(this.pa, a);
    };h.Vc = function () {
      this.La();this.cb(Z(this));
    };h.Ye = function () {
      this.signOut();
    };
    h.Ze = function () {
      this.signOut();
    };var Vj = function Vj(a, b) {
      var c = null,
          d = null;return a.c(b.then(function (b) {
        c = vg(b);d = ii(b);return Tj(a, b);
      }).then(function () {
        return { user: Z(a), credential: c, additionalUserInfo: d };
      }));
    };h = Y.prototype;h.cf = function (a) {
      var b = this;this.addAuthTokenListener(function () {
        a.next(Z(b));
      });
    };h.onAuthStateChanged = function (a, b, c) {
      var d = this;this.ad && firebase.Promise.resolve().then(function () {
        p(a) ? a(Z(d)) : p(a.next) && a.next(Z(d));
      });return this.pf(a, b, c);
    };
    h.getToken = function (a) {
      var b = this,
          c = this.va.then(function () {
        return Z(b) ? Z(b).getToken(a).then(function (a) {
          return { accessToken: a };
        }) : null;
      });return this.c(c);
    };h.signInWithCustomToken = function (a) {
      var b = this;return this.va.then(function () {
        return Vj(b, Q(b.g, ih, { token: a }));
      }).then(function (a) {
        a = a.user;pj(a, "isAnonymous", !1);return b.cb(a);
      }).then(function () {
        return Z(b);
      });
    };h.signInWithEmailAndPassword = function (a, b) {
      var c = this;return this.va.then(function () {
        return Vj(c, Q(c.g, sg, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };
    h.createUserWithEmailAndPassword = function (a, b) {
      var c = this;return this.va.then(function () {
        return Vj(c, Q(c.g, fh, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };h.signInWithCredential = function (a) {
      return Wj(this, a).then(function (a) {
        return a.user;
      });
    };var Wj = function Wj(a, b) {
      return a.va.then(function () {
        return Vj(a, b.dc(a.g));
      });
    };
    Y.prototype.signInAnonymously = function () {
      var a = Z(this),
          b = this;return a && a.isAnonymous ? C(a) : this.va.then(function () {
        return Vj(b, b.g.signInAnonymously());
      }).then(function (a) {
        a = a.user;pj(a, "isAnonymous", !0);return b.cb(a);
      }).then(function () {
        return Z(b);
      });
    };var X = function X(a) {
      return a.app;
    },
        Z = function Z(a) {
      return a.currentUser;
    };h = Y.prototype;h.getUid = function () {
      return Z(this) && Z(this).uid || null;
    };h.La = function () {
      if (this.ad) for (var a = 0; a < this.Aa.length; a++) {
        if (this.Aa[a]) this.Aa[a](Z(this) && Z(this)._lat || null);
      }
    };
    h.De = function (a) {
      this.addAuthTokenListener(a);this.Fa++;0 < this.Fa && Z(this) && fj(Z(this));
    };h.yf = function (a) {
      var b = this;w(this.Aa, function (c) {
        c == a && b.Fa--;
      });0 > this.Fa && (this.Fa = 0);0 == this.Fa && Z(this) && gj(Z(this));this.removeAuthTokenListener(a);
    };h.addAuthTokenListener = function (a) {
      var b = this;this.Aa.push(a);this.c(this.va.then(function () {
        b.Za || Ia(b.Aa, a) && a(Z(b) && Z(b)._lat || null);
      }));
    };h.removeAuthTokenListener = function (a) {
      La(this.Aa, function (b) {
        return b == a;
      });
    };
    h["delete"] = function () {
      this.Za = !0;for (var a = 0; a < this.$.length; a++) {
        this.$[a].cancel("app-deleted");
      }this.$ = [];this.pa && (a = this.pa, a.i.removeListener(Kj, a.u, this.Tc));this.m && this.m.unsubscribe(this);return firebase.Promise.resolve();
    };h.c = function (a) {
      var b = this;this.$.push(a);Rd(a, function () {
        Ka(b.$, a);
      });return a;
    };h.fetchProvidersForEmail = function (a) {
      return this.c(Ng(this.g, a));
    };h.verifyPasswordResetCode = function (a) {
      return this.checkActionCode(a).then(function (a) {
        return a.data.email;
      });
    };
    h.confirmPasswordReset = function (a, b) {
      return this.c(this.g.confirmPasswordReset(a, b).then(function () {}));
    };h.checkActionCode = function (a) {
      return this.c(this.g.checkActionCode(a).then(function (a) {
        return new Th(a);
      }));
    };h.applyActionCode = function (a) {
      return this.c(this.g.applyActionCode(a).then(function () {}));
    };h.sendPasswordResetEmail = function (a) {
      return this.c(this.g.sendPasswordResetEmail(a).then(function () {}));
    };T(Y.prototype, { applyActionCode: { name: "applyActionCode", a: [S("code")] }, checkActionCode: { name: "checkActionCode", a: [S("code")] }, confirmPasswordReset: { name: "confirmPasswordReset", a: [S("code"), S("newPassword")] }, createUserWithEmailAndPassword: { name: "createUserWithEmailAndPassword", a: [S("email"), S("password")] }, fetchProvidersForEmail: { name: "fetchProvidersForEmail", a: [S("email")] }, getRedirectResult: { name: "getRedirectResult", a: [] }, onAuthStateChanged: { name: "onAuthStateChanged", a: [$h(Vh(), Wh(), "nextOrObserver"), Wh("opt_error", !0), Wh("opt_completed", !0)] }, sendPasswordResetEmail: { name: "sendPasswordResetEmail", a: [S("email")] }, signInAnonymously: { name: "signInAnonymously", a: [] }, signInWithCredential: { name: "signInWithCredential", a: [Yh()] }, signInWithCustomToken: { name: "signInWithCustomToken", a: [S("token")] }, signInWithEmailAndPassword: { name: "signInWithEmailAndPassword", a: [S("email"), S("password")] }, signInWithPopup: { name: "signInWithPopup", a: [Zh()] }, signInWithRedirect: { name: "signInWithRedirect", a: [Zh()] }, signOut: { name: "signOut",
        a: [] }, toJSON: { name: "toJSON", a: [S(null, !0)] }, verifyPasswordResetCode: { name: "verifyPasswordResetCode", a: [S("code")] } });
    T(W.prototype, { "delete": { name: "delete", a: [] }, getToken: { name: "getToken", a: [{ name: "opt_forceRefresh", ha: "a boolean", optional: !0, ja: function ja(a) {
            return "boolean" == typeof a;
          } }] }, link: { name: "link", a: [Yh()] }, linkWithPopup: { name: "linkWithPopup", a: [Zh()] }, linkWithRedirect: { name: "linkWithRedirect", a: [Zh()] }, reauthenticate: { name: "reauthenticate", a: [Yh()] }, reload: { name: "reload", a: [] }, sendEmailVerification: { name: "sendEmailVerification", a: [] }, toJSON: { name: "toJSON", a: [S(null, !0)] }, unlink: { name: "unlink", a: [S("provider")] },
      updateEmail: { name: "updateEmail", a: [S("email")] }, updatePassword: { name: "updatePassword", a: [S("password")] }, updateProfile: { name: "updateProfile", a: [Vh("profile")] } });T(B.prototype, { f: { name: "catch" }, then: { name: "then" } });U(ug, "credential", function (a, b) {
      return new rg(a, b);
    }, [S("email"), S("password")]);T(jg.prototype, { addScope: { name: "addScope", a: [S("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Vh("customOAuthParameters")] } });U(jg, "credential", kg, [$h(S(), Vh(), "token")]);
    T(lg.prototype, { addScope: { name: "addScope", a: [S("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Vh("customOAuthParameters")] } });U(lg, "credential", mg, [$h(S(), Vh(), "token")]);T(ng.prototype, { addScope: { name: "addScope", a: [S("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Vh("customOAuthParameters")] } });U(ng, "credential", og, [$h(S(), Xh(), "idToken", !0), $h(S(), Xh(), "accessToken", !0)]);T(pg.prototype, { setCustomParameters: { name: "setCustomParameters", a: [Vh("customOAuthParameters")] } });
    U(pg, "credential", qg, [$h(S(), Vh(), "token"), S("secret", !0)]);T(N.prototype, { toJSON: { name: "toJSON", a: [S(null, !0)] } });T(xg.prototype, { toJSON: { name: "toJSON", a: [S(null, !0)] } });T(bg.prototype, { toJSON: { name: "toJSON", a: [S(null, !0)] } });
    (function () {
      if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = { Auth: Y, Error: N };U(a, "EmailAuthProvider", ug, []);U(a, "FacebookAuthProvider", jg, []);U(a, "GithubAuthProvider", lg, []);U(a, "GoogleAuthProvider", ng, []);U(a, "TwitterAuthProvider", pg, []);firebase.INTERNAL.registerService("auth", function (a, c) {
          a = new Y(a);c({ INTERNAL: { getUid: _q(a.getUid, a), getToken: _q(a.getToken, a), addAuthTokenListener: _q(a.De, a), removeAuthTokenListener: _q(a.yf, a) } });return a;
        }, a, function (a, c) {
          if ("create" === a) try {
            c.auth();
          } catch (d) {}
        });firebase.INTERNAL.extendNamespace({ User: W });
      } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.auth;