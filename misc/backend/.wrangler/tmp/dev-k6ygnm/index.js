var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-OhCcoj/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-OhCcoj/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var la = Object.create;
    var nr = Object.defineProperty;
    var ca = Object.getOwnPropertyDescriptor;
    var pa = Object.getOwnPropertyNames;
    var fa = Object.getPrototypeOf;
    var ma = Object.prototype.hasOwnProperty;
    var be = (e, t) => () => (e && (t = e(e = 0)), t);
    var Se = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var vt = (e, t) => {
      for (var r in t)
        nr(e, r, { get: t[r], enumerable: true });
    };
    var zn = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of pa(t))
          !ma.call(e, i) && i !== r && nr(e, i, { get: () => t[i], enumerable: !(n = ca(t, i)) || n.enumerable });
      return e;
    };
    var Ue = (e, t, r) => (r = e != null ? la(fa(e)) : {}, zn(t || !e || !e.__esModule ? nr(r, "default", { value: e, enumerable: true }) : r, e));
    var Gr = (e) => zn(nr({}, "__esModule", { value: true }), e);
    var y;
    var c = be(() => {
      "use strict";
      y = { nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var Yn;
    var b;
    var p = be(() => {
      "use strict";
      b = (Yn = globalThis.performance) != null ? Yn : (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var E;
    var f = be(() => {
      "use strict";
      E = () => {
      };
      E.prototype = E;
    });
    var m = be(() => {
      "use strict";
    });
    var hi = Se((rt) => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      var ri = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), da = ri((e) => {
        "use strict";
        e.byteLength = u, e.toByteArray = g, e.fromByteArray = S;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = 0, s = i.length; o < s; ++o)
          t[o] = i[o], r[i.charCodeAt(o)] = o;
        var o, s;
        r[45] = 62, r[95] = 63;
        function a(C) {
          var A = C.length;
          if (A % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var k = C.indexOf("=");
          k === -1 && (k = A);
          var O = k === A ? 0 : 4 - k % 4;
          return [k, O];
        }
        function u(C) {
          var A = a(C), k = A[0], O = A[1];
          return (k + O) * 3 / 4 - O;
        }
        function l(C, A, k) {
          return (A + k) * 3 / 4 - k;
        }
        function g(C) {
          var A, k = a(C), O = k[0], B = k[1], M = new n(l(C, O, B)), I = 0, X = B > 0 ? O - 4 : O, L;
          for (L = 0; L < X; L += 4)
            A = r[C.charCodeAt(L)] << 18 | r[C.charCodeAt(L + 1)] << 12 | r[C.charCodeAt(L + 2)] << 6 | r[C.charCodeAt(L + 3)], M[I++] = A >> 16 & 255, M[I++] = A >> 8 & 255, M[I++] = A & 255;
          return B === 2 && (A = r[C.charCodeAt(L)] << 2 | r[C.charCodeAt(L + 1)] >> 4, M[I++] = A & 255), B === 1 && (A = r[C.charCodeAt(L)] << 10 | r[C.charCodeAt(L + 1)] << 4 | r[C.charCodeAt(L + 2)] >> 2, M[I++] = A >> 8 & 255, M[I++] = A & 255), M;
        }
        function h(C) {
          return t[C >> 18 & 63] + t[C >> 12 & 63] + t[C >> 6 & 63] + t[C & 63];
        }
        function x(C, A, k) {
          for (var O, B = [], M = A; M < k; M += 3)
            O = (C[M] << 16 & 16711680) + (C[M + 1] << 8 & 65280) + (C[M + 2] & 255), B.push(h(O));
          return B.join("");
        }
        function S(C) {
          for (var A, k = C.length, O = k % 3, B = [], M = 16383, I = 0, X = k - O; I < X; I += M)
            B.push(x(C, I, I + M > X ? X : I + M));
          return O === 1 ? (A = C[k - 1], B.push(t[A >> 2] + t[A << 4 & 63] + "==")) : O === 2 && (A = (C[k - 2] << 8) + C[k - 1], B.push(t[A >> 10] + t[A >> 4 & 63] + t[A << 2 & 63] + "=")), B.join("");
        }
      }), ga = ri((e) => {
        e.read = function(t, r, n, i, o) {
          var s, a, u = o * 8 - i - 1, l = (1 << u) - 1, g = l >> 1, h = -7, x = n ? o - 1 : 0, S = n ? -1 : 1, C = t[r + x];
          for (x += S, s = C & (1 << -h) - 1, C >>= -h, h += u; h > 0; s = s * 256 + t[r + x], x += S, h -= 8)
            ;
          for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + x], x += S, h -= 8)
            ;
          if (s === 0)
            s = 1 - g;
          else {
            if (s === l)
              return a ? NaN : (C ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, i), s = s - g;
          }
          return (C ? -1 : 1) * a * Math.pow(2, s - i);
        }, e.write = function(t, r, n, i, o, s) {
          var a, u, l, g = s * 8 - o - 1, h = (1 << g) - 1, x = h >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = i ? 0 : s - 1, A = i ? 1 : -1, k = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + x >= 1 ? r += S / l : r += S * Math.pow(2, 1 - x), r * l >= 2 && (a++, l /= 2), a + x >= h ? (u = 0, a = h) : a + x >= 1 ? (u = (r * l - 1) * Math.pow(2, o), a = a + x) : (u = r * Math.pow(2, x - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + C] = u & 255, C += A, u /= 256, o -= 8)
            ;
          for (a = a << o | u, g += o; g > 0; t[n + C] = a & 255, C += A, a /= 256, g -= 8)
            ;
          t[n + C - A] |= k * 128;
        };
      }), Hr = da(), et = ga(), Zn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      rt.Buffer = T;
      rt.SlowBuffer = xa;
      rt.INSPECT_MAX_BYTES = 50;
      var ir = 2147483647;
      rt.kMaxLength = ir;
      T.TYPED_ARRAY_SUPPORT = ha();
      !T.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function ha() {
        try {
          let e = new Uint8Array(1), t = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(T.prototype, "parent", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(T.prototype, "offset", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.byteOffset;
      } });
      function xe(e) {
        if (e > ir)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, T.prototype), t;
      }
      function T(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return zr(e);
        }
        return ni(e, t, r);
      }
      T.poolSize = 8192;
      function ni(e, t, r) {
        if (typeof e == "string")
          return wa(e, t);
        if (ArrayBuffer.isView(e))
          return Ea(e);
        if (e == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (me(e, ArrayBuffer) || e && me(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(e, SharedArrayBuffer) || e && me(e.buffer, SharedArrayBuffer)))
          return oi(e, t, r);
        if (typeof e == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e)
          return T.from(n, t, r);
        let i = ba(e);
        if (i)
          return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
          return T.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      T.from = function(e, t, r) {
        return ni(e, t, r);
      };
      Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T, Uint8Array);
      function ii(e) {
        if (typeof e != "number")
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      function ya(e, t, r) {
        return ii(e), e <= 0 ? xe(e) : t !== void 0 ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
      }
      T.alloc = function(e, t, r) {
        return ya(e, t, r);
      };
      function zr(e) {
        return ii(e), xe(e < 0 ? 0 : Yr(e) | 0);
      }
      T.allocUnsafe = function(e) {
        return zr(e);
      };
      T.allocUnsafeSlow = function(e) {
        return zr(e);
      };
      function wa(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t))
          throw new TypeError("Unknown encoding: " + t);
        let r = si(e, t) | 0, n = xe(r), i = n.write(e, t);
        return i !== r && (n = n.slice(0, i)), n;
      }
      function Wr(e) {
        let t = e.length < 0 ? 0 : Yr(e.length) | 0, r = xe(t);
        for (let n = 0; n < t; n += 1)
          r[n] = e[n] & 255;
        return r;
      }
      function Ea(e) {
        if (me(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return oi(t.buffer, t.byteOffset, t.byteLength);
        }
        return Wr(e);
      }
      function oi(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T.prototype), n;
      }
      function ba(e) {
        if (T.isBuffer(e)) {
          let t = Yr(e.length) | 0, r = xe(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0)
          return typeof e.length != "number" || Xr(e.length) ? xe(0) : Wr(e);
        if (e.type === "Buffer" && Array.isArray(e.data))
          return Wr(e.data);
      }
      function Yr(e) {
        if (e >= ir)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ir.toString(16) + " bytes");
        return e | 0;
      }
      function xa(e) {
        return +e != e && (e = 0), T.alloc(+e);
      }
      T.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== T.prototype;
      };
      T.compare = function(e, t) {
        if (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), me(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)), !T.isBuffer(e) || !T.isBuffer(t))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t)
          return 0;
        let r = e.length, n = t.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i)
          if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      T.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      T.concat = function(e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0)
          return T.alloc(0);
        let r;
        if (t === void 0)
          for (t = 0, r = 0; r < e.length; ++r)
            t += e[r].length;
        let n = T.allocUnsafe(t), i = 0;
        for (r = 0; r < e.length; ++r) {
          let o = e[r];
          if (me(o, Uint8Array))
            i + o.length > n.length ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
          else if (T.isBuffer(o))
            o.copy(n, i);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          i += o.length;
        }
        return n;
      };
      function si(e, t) {
        if (T.isBuffer(e))
          return e.length;
        if (ArrayBuffer.isView(e) || me(e, ArrayBuffer))
          return e.byteLength;
        if (typeof e != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0)
          return 0;
        let i = false;
        for (; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return Kr(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r * 2;
            case "hex":
              return r >>> 1;
            case "base64":
              return gi(e).length;
            default:
              if (i)
                return n ? -1 : Kr(e).length;
              t = ("" + t).toLowerCase(), i = true;
          }
      }
      T.byteLength = si;
      function Pa(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return Oa(this, t, r);
            case "utf8":
            case "utf-8":
              return ui(this, t, r);
            case "ascii":
              return Da(this, t, r);
            case "latin1":
            case "binary":
              return ka(this, t, r);
            case "base64":
              return Sa(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ma(this, t, r);
            default:
              if (n)
                throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = true;
          }
      }
      T.prototype._isBuffer = true;
      function Ve(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      T.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2)
          Ve(this, t, t + 1);
        return this;
      };
      T.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4)
          Ve(this, t, t + 3), Ve(this, t + 1, t + 2);
        return this;
      };
      T.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          Ve(this, t, t + 7), Ve(this, t + 1, t + 6), Ve(this, t + 2, t + 5), Ve(this, t + 3, t + 4);
        return this;
      };
      T.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? ui(this, 0, e) : Pa.apply(this, arguments);
      };
      T.prototype.toLocaleString = T.prototype.toString;
      T.prototype.equals = function(e) {
        if (!T.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        return this === e ? true : T.compare(this, e) === 0;
      };
      T.prototype.inspect = function() {
        let e = "", t = rt.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      Zn && (T.prototype[Zn] = T.prototype.inspect);
      T.prototype.compare = function(e, t, r, n, i) {
        if (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), !T.isBuffer(e))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
          throw new RangeError("out of range index");
        if (n >= i && t >= r)
          return 0;
        if (n >= i)
          return -1;
        if (t >= r)
          return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e)
          return 0;
        let o = i - n, s = r - t, a = Math.min(o, s), u = this.slice(n, i), l = e.slice(t, r);
        for (let g = 0; g < a; ++g)
          if (u[g] !== l[g]) {
            o = u[g], s = l[g];
            break;
          }
        return o < s ? -1 : s < o ? 1 : 0;
      };
      function ai(e, t, r, n, i) {
        if (e.length === 0)
          return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Xr(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i)
            return -1;
          r = e.length - 1;
        } else if (r < 0)
          if (i)
            r = 0;
          else
            return -1;
        if (typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t))
          return t.length === 0 ? -1 : Xn(e, t, r, n, i);
        if (typeof t == "number")
          return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : Xn(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      function Xn(e, t, r, n, i) {
        let o = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2)
            return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function u(g, h) {
          return o === 1 ? g[h] : g.readUInt16BE(h * o);
        }
        let l;
        if (i) {
          let g = -1;
          for (l = r; l < s; l++)
            if (u(e, l) === u(t, g === -1 ? 0 : l - g)) {
              if (g === -1 && (g = l), l - g + 1 === a)
                return g * o;
            } else
              g !== -1 && (l -= l - g), g = -1;
        } else
          for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
            let g = true;
            for (let h = 0; h < a; h++)
              if (u(e, l + h) !== u(t, h)) {
                g = false;
                break;
              }
            if (g)
              return l;
          }
        return -1;
      }
      T.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      T.prototype.indexOf = function(e, t, r) {
        return ai(this, e, t, r, true);
      };
      T.prototype.lastIndexOf = function(e, t, r) {
        return ai(this, e, t, r, false);
      };
      function va(e, t, r, n) {
        r = Number(r) || 0;
        let i = e.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (Xr(a))
            return s;
          e[r + s] = a;
        }
        return s;
      }
      function Ta(e, t, r, n) {
        return or(Kr(t, e.length - r), e, r, n);
      }
      function Ca(e, t, r, n) {
        return or(La(t), e, r, n);
      }
      function Aa(e, t, r, n) {
        return or(gi(t), e, r, n);
      }
      function Ra(e, t, r, n) {
        return or(Ba(t, e.length - r), e, r, n);
      }
      T.prototype.write = function(e, t, r, n) {
        if (t === void 0)
          n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string")
          n = t, r = this.length, t = 0;
        else if (isFinite(t))
          t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i = this.length - t;
        if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let o = false;
        for (; ; )
          switch (n) {
            case "hex":
              return va(this, e, t, r);
            case "utf8":
            case "utf-8":
              return Ta(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
              return Ca(this, e, t, r);
            case "base64":
              return Aa(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ra(this, e, t, r);
            default:
              if (o)
                throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = true;
          }
      };
      T.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function Sa(e, t, r) {
        return t === 0 && r === e.length ? Hr.fromByteArray(e) : Hr.fromByteArray(e.slice(t, r));
      }
      function ui(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], i = t;
        for (; i < r; ) {
          let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + a <= r) {
            let u, l, g, h;
            switch (a) {
              case 1:
                o < 128 && (s = o);
                break;
              case 2:
                u = e[i + 1], (u & 192) === 128 && (h = (o & 31) << 6 | u & 63, h > 127 && (s = h));
                break;
              case 3:
                u = e[i + 1], l = e[i + 2], (u & 192) === 128 && (l & 192) === 128 && (h = (o & 15) << 12 | (u & 63) << 6 | l & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                break;
              case 4:
                u = e[i + 1], l = e[i + 2], g = e[i + 3], (u & 192) === 128 && (l & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (u & 63) << 12 | (l & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
        }
        return Ia(n);
      }
      var ei = 4096;
      function Ia(e) {
        let t = e.length;
        if (t <= ei)
          return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; )
          r += String.fromCharCode.apply(String, e.slice(n, n += ei));
        return r;
      }
      function Da(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i] & 127);
        return n;
      }
      function ka(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i]);
        return n;
      }
      function Oa(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = t; o < r; ++o)
          i += $a[e[o]];
        return i;
      }
      function Ma(e, t, r) {
        let n = e.slice(t, r), i = "";
        for (let o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i;
      }
      T.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, T.prototype), n;
      };
      function W(e, t, r) {
        if (e % 1 !== 0 || e < 0)
          throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      T.prototype.readUintLE = T.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return n;
      };
      T.prototype.readUintBE = T.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e + --t], i = 1;
        for (; t > 0 && (i *= 256); )
          n += this[e + --t] * i;
        return n;
      };
      T.prototype.readUint8 = T.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || W(e, 1, this.length), this[e];
      };
      T.prototype.readUint16LE = T.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || W(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      T.prototype.readUint16BE = T.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || W(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      T.prototype.readUint32LE = T.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      T.prototype.readUint32BE = T.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      T.prototype.readBigUInt64LE = Ie(function(e) {
        e = e >>> 0, tt(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      });
      T.prototype.readBigUInt64BE = Ie(function(e) {
        e = e >>> 0, tt(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      });
      T.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
      };
      T.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = t, i = 1, o = this[e + --n];
        for (; n > 0 && (i *= 256); )
          o += this[e + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      };
      T.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || W(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      T.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || W(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || W(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      T.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      T.prototype.readBigInt64LE = Ie(function(e) {
        e = e >>> 0, tt(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      T.prototype.readBigInt64BE = Ie(function(e) {
        e = e >>> 0, tt(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && Tt(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      T.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), et.read(this, e, true, 23, 4);
      };
      T.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), et.read(this, e, false, 23, 4);
      };
      T.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || W(e, 8, this.length), et.read(this, e, true, 52, 8);
      };
      T.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || W(e, 8, this.length), et.read(this, e, false, 52, 8);
      };
      function ie(e, t, r, n, i, o) {
        if (!T.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length)
          throw new RangeError("Index out of range");
      }
      T.prototype.writeUintLE = T.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          ie(this, e, t, r, s, 0);
        }
        let i = 1, o = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); )
          this[t + o] = e / i & 255;
        return t + r;
      };
      T.prototype.writeUintBE = T.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          ie(this, e, t, r, s, 0);
        }
        let i = r - 1, o = 1;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          this[t + i] = e / o & 255;
        return t + r;
      };
      T.prototype.writeUint8 = T.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function li(e, t, r, n, i) {
        di(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      function ci(e, t, r, n, i) {
        di(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      T.prototype.writeBigUInt64LE = Ie(function(e, t = 0) {
        return li(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeBigUInt64BE = Ie(function(e, t = 0) {
        return ci(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          ie(this, e, t, r, a - 1, -a);
        }
        let i = 0, o = 1, s = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); )
          e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          ie(this, e, t, r, a - 1, -a);
        }
        let i = r - 1, o = 1, s = 0;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      T.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      T.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || ie(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      T.prototype.writeBigInt64LE = Ie(function(e, t = 0) {
        return li(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T.prototype.writeBigInt64BE = Ie(function(e, t = 0) {
        return ci(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function pi(e, t, r, n, i, o) {
        if (r + n > e.length)
          throw new RangeError("Index out of range");
        if (r < 0)
          throw new RangeError("Index out of range");
      }
      function fi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || pi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), et.write(e, t, r, n, 23, 4), r + 4;
      }
      T.prototype.writeFloatLE = function(e, t, r) {
        return fi(this, e, t, true, r);
      };
      T.prototype.writeFloatBE = function(e, t, r) {
        return fi(this, e, t, false, r);
      };
      function mi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || pi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), et.write(e, t, r, n, 52, 8), r + 8;
      }
      T.prototype.writeDoubleLE = function(e, t, r) {
        return mi(this, e, t, true, r);
      };
      T.prototype.writeDoubleBE = function(e, t, r) {
        return mi(this, e, t, false, r);
      };
      T.prototype.copy = function(e, t, r, n) {
        if (!T.isBuffer(e))
          throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
          throw new RangeError("Index out of range");
        if (n < 0)
          throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
      };
      T.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string")
            throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !T.isEncoding(n))
            throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (n === "utf8" && o < 128 || n === "latin1") && (e = o);
          }
        } else
          typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r)
          throw new RangeError("Out of range index");
        if (r <= t)
          return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let i;
        if (typeof e == "number")
          for (i = t; i < r; ++i)
            this[i] = e;
        else {
          let o = T.isBuffer(e) ? e : T.from(e, n), s = o.length;
          if (s === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (i = 0; i < r - t; ++i)
            this[i + t] = o[i % s];
        }
        return this;
      };
      var Xe = {};
      function Zr(e, t, r) {
        Xe[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      Zr("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      Zr("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      Zr("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = ti(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = ti(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
      }, RangeError);
      function ti(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
          t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function Na(e, t, r) {
        tt(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && Tt(t, e.length - (r + 1));
      }
      function di(e, t, r, n, i, o) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new Xe.ERR_OUT_OF_RANGE("value", a, e);
        }
        Na(n, i, o);
      }
      function tt(e, t) {
        if (typeof e != "number")
          throw new Xe.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function Tt(e, t, r) {
        throw Math.floor(e) !== e ? (tt(e, r), new Xe.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Xe.ERR_BUFFER_OUT_OF_BOUNDS() : new Xe.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      var _a = /[^+/0-9A-Za-z-_]/g;
      function Fa(e) {
        if (e = e.split("=")[0], e = e.trim().replace(_a, ""), e.length < 2)
          return "";
        for (; e.length % 4 !== 0; )
          e = e + "=";
        return e;
      }
      function Kr(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = (i - 55296 << 10 | r - 56320) + 65536;
          } else
            i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((t -= 1) < 0)
              break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0)
              break;
            o.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0)
              break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0)
              break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return o;
      }
      function La(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r)
          t.push(e.charCodeAt(r) & 255);
        return t;
      }
      function Ba(e, t) {
        let r, n, i, o = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
          r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }
      function gi(e) {
        return Hr.toByteArray(Fa(e));
      }
      function or(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      function me(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      function Xr(e) {
        return e !== e;
      }
      var $a = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let i = 0; i < 16; ++i)
            t[n + i] = e[r] + e[i];
        }
        return t;
      }();
      function Ie(e) {
        return typeof BigInt > "u" ? qa : e;
      }
      function qa() {
        throw new Error("BigInt not supported");
      }
    });
    var w;
    var d = be(() => {
      "use strict";
      w = Ue(hi());
    });
    function Ua() {
      return false;
    }
    var Va;
    var ja;
    var bi;
    var xi = be(() => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      Va = {}, ja = { existsSync: Ua, promises: Va }, bi = ja;
    });
    var Mi = Se((df, Oi) => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      Oi.exports = (on(), Gr(nn)).format;
    });
    var nn = {};
    vt(nn, { default: () => Ga, deprecate: () => _i, format: () => Li, inspect: () => Fi, promisify: () => Ni });
    function Ni(e) {
      return (...t) => new Promise((r, n) => {
        e(...t, (i, o) => {
          i ? n(i) : r(o);
        });
      });
    }
    function _i(e, t) {
      return (...r) => (console.warn(t), e(...r));
    }
    function Fi(e) {
      return JSON.stringify(e, (t, r) => typeof r == "function" ? r.toString() : typeof r == "bigint" ? `${r}n` : r instanceof Error ? { ...r, message: r.message, stack: r.stack } : r);
    }
    var Li;
    var Qa;
    var Ga;
    var on = be(() => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      Li = Mi(), Qa = { promisify: Ni, deprecate: _i, inspect: Fi, format: Li }, Ga = Qa;
    });
    function Ya(...e) {
      return e.join("/");
    }
    function Za(...e) {
      return e.join("/");
    }
    var Ji;
    var Xa;
    var eu;
    var At;
    var Qi = be(() => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      Ji = "/", Xa = { sep: Ji }, eu = { resolve: Ya, posix: Xa, join: Za, sep: Ji }, At = eu;
    });
    var lr;
    var Hi = be(() => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      lr = class {
        constructor() {
          this.events = {};
        }
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var Ki = Se((Em, Wi) => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      Wi.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Zi = Se((km, Yi) => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      Yi.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var eo = Se((Lm, Xi) => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      var su = Zi();
      Xi.exports = (e) => typeof e == "string" ? e.replace(su(), "") : e;
    });
    var io = Se((Mh, cu) => {
      cu.exports = { name: "@prisma/engines-version", version: "5.15.1-1.5675a3182f972f1a8f31d16eee6abf4fd54910e3", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "5675a3182f972f1a8f31d16eee6abf4fd54910e3" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var oo = Se(() => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
    });
    var Un = Se((a2, ys) => {
      "use strict";
      d();
      c();
      p();
      f();
      m();
      ys.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, u, l, g, h, x, S, C, A, k, O, B, M, I = [];
          for (u = 0; u < i; u++)
            I.push(u + 1), I.push(t.charCodeAt(s + u));
          for (var X = I.length - 1; a < o - 3; )
            for (k = r.charCodeAt(s + (l = a)), O = r.charCodeAt(s + (g = a + 1)), B = r.charCodeAt(s + (h = a + 2)), M = r.charCodeAt(s + (x = a + 3)), S = a += 4, u = 0; u < X; u += 2)
              C = I[u], A = I[u + 1], l = e(C, l, g, k, A), g = e(l, g, h, O, A), h = e(g, h, x, B, A), S = e(h, x, S, M, A), I[u] = S, x = h, h = g, g = l, l = C;
          for (; a < o; )
            for (k = r.charCodeAt(s + (l = a)), S = ++a, u = 0; u < X; u += 2)
              C = I[u], I[u] = S = e(C, l, S, k, I[u + 1]), l = C;
          return S;
        };
      }();
    });
    var Hc = {};
    vt(Hc, { Debug: () => an, Decimal: () => ye, Extensions: () => en, MetricsClient: () => st, NotFoundError: () => Pe, PrismaClientInitializationError: () => G, PrismaClientKnownRequestError: () => K, PrismaClientRustPanicError: () => ve, PrismaClientUnknownRequestError: () => oe, PrismaClientValidationError: () => Y, Public: () => tn, Sql: () => se, defineDmmfProperty: () => no, empty: () => ao, getPrismaClient: () => sa, getRuntime: () => Mr, join: () => so, makeStrictEnum: () => aa, objectEnumValues: () => pr, raw: () => yn, sqltag: () => wn, warnEnvConflicts: () => void 0, warnOnce: () => It });
    module.exports = Gr(Hc);
    d();
    c();
    p();
    f();
    m();
    var en = {};
    vt(en, { defineExtension: () => yi, getExtensionContext: () => wi });
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function yi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    d();
    c();
    p();
    f();
    m();
    function wi(e) {
      return e;
    }
    var tn = {};
    vt(tn, { validator: () => Ei });
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function Ei(...e) {
      return (t) => t;
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var rn;
    var Pi;
    var vi;
    var Ti;
    var Ci = true;
    typeof y != "undefined" && ({ FORCE_COLOR: rn, NODE_DISABLE_COLORS: Pi, NO_COLOR: vi, TERM: Ti } = y.env || {}, Ci = y.stdout && y.stdout.isTTY);
    var Ja = { enabled: !Pi && vi == null && Ti !== "dumb" && (rn != null && rn !== "0" || Ci) };
    function V(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Ja.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var Jp = V(0, 0);
    var sr = V(1, 22);
    var ar = V(2, 22);
    var Qp = V(3, 23);
    var Ai = V(4, 24);
    var Gp = V(7, 27);
    var Hp = V(8, 28);
    var Wp = V(9, 29);
    var Kp = V(30, 39);
    var nt = V(31, 39);
    var Ri = V(32, 39);
    var Si = V(33, 39);
    var Ii = V(34, 39);
    var zp = V(35, 39);
    var Di = V(36, 39);
    var Yp = V(37, 39);
    var ki = V(90, 39);
    var Zp = V(90, 39);
    var Xp = V(40, 49);
    var ef = V(41, 49);
    var tf = V(42, 49);
    var rf = V(43, 49);
    var nf = V(44, 49);
    var of = V(45, 49);
    var sf = V(46, 49);
    var af = V(47, 49);
    d();
    c();
    p();
    f();
    m();
    var Ha = 100;
    var Bi = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var ur = [];
    var $i = Date.now();
    var Wa = 0;
    var sn = typeof y != "undefined" ? y.env : {};
    var qi;
    var Ui;
    (Ui = globalThis.DEBUG) != null || (globalThis.DEBUG = (qi = sn.DEBUG) != null ? qi : "");
    var Vi;
    (Vi = globalThis.DEBUG_COLORS) != null || (globalThis.DEBUG_COLORS = sn.DEBUG_COLORS ? sn.DEBUG_COLORS === "true" : true);
    var Ct = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      var o;
      let [t, r, ...n] = e, i;
      typeof __require == "function" && typeof y != "undefined" && typeof y.stderr != "undefined" && typeof y.stderr.write == "function" ? i = (...s) => {
        var a;
        try {
          let u = (on(), Gr(nn));
          y.stderr.write(u.format(...s) + `
`);
        } catch (u) {
          i = (a = console.warn) != null ? a : console.log;
        }
      } : i = (o = console.warn) != null ? o : console.log, i(`${t} ${r}`, ...n);
    }, formatters: {} };
    function Ka(e) {
      let t = { color: Bi[Wa++ % Bi.length], enabled: Ct.enabled(e), namespace: e, log: Ct.log, extend: () => {
      } }, r = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && ur.push([o, ...n]), ur.length > Ha && ur.shift(), Ct.enabled(o) || i) {
          let u = n.map((g) => typeof g == "string" ? g : za(g)), l = `+${Date.now() - $i}ms`;
          $i = Date.now(), a(o, ...u, l);
        }
      };
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    var an = new Proxy(Ka, { get: (e, t) => Ct[t], set: (e, t, r) => Ct[t] = r });
    function za(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i))
            return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint")
          return i.toString();
        return i;
      }, t);
    }
    function ji() {
      ur.length = 0;
    }
    var re = an;
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var Gi = "library";
    function Rt(e) {
      let t = tu();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : Gi);
    }
    function tu() {
      let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var De;
    ((t) => {
      let e;
      ((I) => (I.findUnique = "findUnique", I.findUniqueOrThrow = "findUniqueOrThrow", I.findFirst = "findFirst", I.findFirstOrThrow = "findFirstOrThrow", I.findMany = "findMany", I.create = "create", I.createMany = "createMany", I.createManyAndReturn = "createManyAndReturn", I.update = "update", I.updateMany = "updateMany", I.upsert = "upsert", I.delete = "delete", I.deleteMany = "deleteMany", I.groupBy = "groupBy", I.count = "count", I.aggregate = "aggregate", I.findRaw = "findRaw", I.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(De || (De = {}));
    var it = {};
    vt(it, { error: () => iu, info: () => nu, log: () => ru, query: () => ou, should: () => zi, tags: () => St, warn: () => un });
    d();
    c();
    p();
    f();
    m();
    var St = { error: nt("prisma:error"), warn: Si("prisma:warn"), info: Di("prisma:info"), query: Ii("prisma:query") };
    var zi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
    function ru(...e) {
      console.log(...e);
    }
    function un(e, ...t) {
      zi.warn() && console.warn(`${St.warn} ${e}`, ...t);
    }
    function nu(e, ...t) {
      console.info(`${St.info} ${e}`, ...t);
    }
    function iu(e, ...t) {
      console.error(`${St.error} ${e}`, ...t);
    }
    function ou(e, ...t) {
      console.log(`${St.query} ${e}`, ...t);
    }
    d();
    c();
    p();
    f();
    m();
    function je(e, t) {
      throw new Error(t);
    }
    d();
    c();
    p();
    f();
    m();
    function ln(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    d();
    c();
    p();
    f();
    m();
    var cn = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    d();
    c();
    p();
    f();
    m();
    function ot(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    d();
    c();
    p();
    f();
    m();
    function pn(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    d();
    c();
    p();
    f();
    m();
    function _(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    d();
    c();
    p();
    f();
    m();
    var to = /* @__PURE__ */ new Set();
    var It = (e, t, ...r) => {
      to.has(e) || (to.add(e), un(t, ...r));
    };
    d();
    c();
    p();
    f();
    m();
    var K = class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    _(K, "PrismaClientKnownRequestError");
    var Pe = class extends K {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    _(Pe, "NotFoundError");
    d();
    c();
    p();
    f();
    m();
    var G = class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    _(G, "PrismaClientInitializationError");
    d();
    c();
    p();
    f();
    m();
    var ve = class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    _(ve, "PrismaClientRustPanicError");
    d();
    c();
    p();
    f();
    m();
    var oe = class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    _(oe, "PrismaClientUnknownRequestError");
    d();
    c();
    p();
    f();
    m();
    var Y = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    _(Y, "PrismaClientValidationError");
    d();
    c();
    p();
    f();
    m();
    var st = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function Dt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function no(e, t) {
      let r = Dt(() => au(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function au(e) {
      return { datamodel: { models: fn(e.models), enums: fn(e.enums), types: fn(e.types) } };
    }
    function fn(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    d();
    c();
    p();
    f();
    m();
    var cr = Symbol();
    var mn = /* @__PURE__ */ new WeakMap();
    var Te = class {
      constructor(t) {
        t === cr ? mn.set(this, `Prisma.${this._getName()}`) : mn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return mn.get(this);
      }
    };
    var kt = class extends Te {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Ot = class extends kt {
    };
    dn(Ot, "DbNull");
    var Mt = class extends kt {
    };
    dn(Mt, "JsonNull");
    var Nt = class extends kt {
    };
    dn(Nt, "AnyNull");
    var pr = { classes: { DbNull: Ot, JsonNull: Mt, AnyNull: Nt }, instances: { DbNull: new Ot(cr), JsonNull: new Mt(cr), AnyNull: new Nt(cr) } };
    function dn(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function _t(e) {
      return { ok: false, error: e, map() {
        return _t(e);
      }, flatMap() {
        return _t(e);
      } };
    }
    var gn = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var hn = (e) => {
      let t = new gn(), r = Je(t, e.startTransaction.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Je(t, e.queryRaw.bind(e)), executeRaw: Je(t, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...i) => (await r(...i)).map((s) => uu(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = lu(t, e.getConnectionInfo.bind(e))), n;
    };
    var uu = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Je(e, t.queryRaw.bind(t)), executeRaw: Je(e, t.executeRaw.bind(t)), commit: Je(e, t.commit.bind(t)), rollback: Je(e, t.rollback.bind(t)) });
    function Je(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return _t({ kind: "GenericJs", id: i });
        }
      };
    }
    function lu(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return _t({ kind: "GenericJs", id: i });
        }
      };
    }
    var oa = Ue(io());
    var gk = Ue(oo());
    Hi();
    xi();
    Qi();
    d();
    c();
    p();
    f();
    m();
    var se = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let u = 0;
            for (; u < s.values.length; )
              this.values[o++] = s.values[u++], this.strings[o] = s.strings[u];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function so(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new se([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function yn(e) {
      return new se([e], []);
    }
    var ao = yn("");
    function wn(e, ...t) {
      return new se(e, t);
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function Ft(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    d();
    c();
    p();
    f();
    m();
    function ne(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var de = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var r;
        return (r = this._map.get(t)) == null ? void 0 : r.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function Qe(e) {
      let t = new de();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var n;
        return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
      } };
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var fr = { enumerable: true, configurable: true, writable: true };
    function mr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => fr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var uo = Symbol.for("nodejs.util.inspect.custom");
    function ge(e, t) {
      let r = pu(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var u, l;
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null ? l : true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = lo(Reflect.ownKeys(o), r), a = lo(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var l, g;
        let u = r.get(s);
        return ((g = (l = u == null ? void 0 : u.getPropertyDescriptor) == null ? void 0 : l.call(u, s)) == null ? void 0 : g.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let u = r.get(s);
        return u ? u.getPropertyDescriptor ? { ...fr, ...u == null ? void 0 : u.getPropertyDescriptor(s) } : fr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[uo] = function() {
        let o = { ...this };
        return delete o[uo], o;
      }, i;
    }
    function pu(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function lo(e, t) {
      return e.filter((r) => {
        var i, o;
        let n = t.get(r);
        return (o = (i = n == null ? void 0 : n.has) == null ? void 0 : i.call(n, r)) != null ? o : true;
      });
    }
    d();
    c();
    p();
    f();
    m();
    function at(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    d();
    c();
    p();
    f();
    m();
    function dr(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var ut = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null || t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function co(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    d();
    c();
    p();
    f();
    m();
    function lt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function gr(e) {
      return e.toString() !== "Invalid Date";
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var ct = 9e15;
    var Ne = 1e9;
    var En = "0123456789abcdef";
    var yr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var wr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var bn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ct, maxE: ct, crypto: false };
    var go;
    var Ce;
    var F = true;
    var br = "[DecimalError] ";
    var Me = br + "Invalid argument: ";
    var ho = br + "Precision limit exceeded";
    var yo = br + "crypto unavailable";
    var wo = "[object Decimal]";
    var te = Math.floor;
    var H = Math.pow;
    var fu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var mu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var du = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Eo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var pe = 1e7;
    var N = 7;
    var gu = 9007199254740991;
    var hu = yr.length - 1;
    var xn = wr.length - 1;
    var R = { toStringTag: wo };
    R.absoluteValue = R.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), D(e);
    };
    R.ceil = function() {
      return D(new this.constructor(this), this.e + 1, 2);
    };
    R.clampedTo = R.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(Me + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    R.comparedTo = R.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, u = o.s, l = e.s;
      if (!s || !a)
        return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? u : a[0] ? -l : 0;
      if (u !== l)
        return u;
      if (o.e !== e.e)
        return o.e > e.e ^ u < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ u < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ u < 0 ? 1 : -1;
    };
    R.cosine = R.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + N, n.rounding = 1, r = yu(n, To(n, r)), n.precision = e, n.rounding = t, D(Ce == 2 || Ce == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    R.cubeRoot = R.cbrt = function() {
      var e, t, r, n, i, o, s, a, u, l, g = this, h = g.constructor;
      if (!g.isFinite() || g.isZero())
        return new h(g);
      for (F = false, o = g.s * H(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Z(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = H(r, 1 / 3), e = te((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; )
        if (a = n, u = a.times(a).times(a), l = u.plus(g), n = q(l.plus(g).times(a), l.plus(u), s + 2, 1), Z(a.d).slice(0, s) === (r = Z(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (D(a, e + 1, 0), a.times(a).times(a).eq(g))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (D(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
            break;
          }
      return F = true, D(n, e, h.rounding, t);
    };
    R.decimalPlaces = R.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - te(this.e / N)) * N, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    R.dividedBy = R.div = function(e) {
      return q(this, new this.constructor(e));
    };
    R.dividedToIntegerBy = R.divToInt = function(e) {
      var t = this, r = t.constructor;
      return D(q(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    R.equals = R.eq = function(e) {
      return this.cmp(e) === 0;
    };
    R.floor = function() {
      return D(new this.constructor(this), this.e + 1, 3);
    };
    R.greaterThan = R.gt = function(e) {
      return this.cmp(e) > 0;
    };
    R.greaterThanOrEqualTo = R.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    R.hyperbolicCosine = R.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Pr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = pt(s, 1, o.times(t), new s(1), true);
      for (var u, l = e, g = new s(8); l--; )
        u = o.times(o), o = a.minus(u.times(g.minus(u.times(g))));
      return D(o, s.precision = r, s.rounding = n, true);
    };
    R.hyperbolicSine = R.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = pt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Pr(5, e)), i = pt(o, 2, i, i, true);
        for (var s, a = new o(5), u = new o(16), l = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(u.times(s).plus(l))));
      }
      return o.precision = t, o.rounding = r, D(i, t, r, true);
    };
    R.hyperbolicTangent = R.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, q(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    R.inverseCosine = R.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? ce(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ce(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ce(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    R.inverseHyperbolicCosine = R.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, F = false, r = r.times(r).minus(1).sqrt().plus(r), F = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    R.inverseHyperbolicSine = R.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, F = false, r = r.times(r).plus(1).sqrt().plus(r), F = true, n.precision = e, n.rounding = t, r.ln());
    };
    R.inverseHyperbolicTangent = R.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? D(new o(i), e, t, true) : (o.precision = r = n - i.e, i = q(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    R.inverseSine = R.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ce(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    R.inverseTangent = R.atan = function() {
      var e, t, r, n, i, o, s, a, u, l = this, g = l.constructor, h = g.precision, x = g.rounding;
      if (l.isFinite()) {
        if (l.isZero())
          return new g(l);
        if (l.abs().eq(1) && h + 4 <= xn)
          return s = ce(g, h + 4, x).times(0.25), s.s = l.s, s;
      } else {
        if (!l.s)
          return new g(NaN);
        if (h + 4 <= xn)
          return s = ce(g, h + 4, x).times(0.5), s.s = l.s, s;
      }
      for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / N + 2 | 0), e = r; e; --e)
        l = l.div(l.times(l).plus(1).sqrt().plus(1));
      for (F = false, t = Math.ceil(a / N), n = 1, u = l.times(l), s = new g(l), i = l; e !== -1; )
        if (i = i.times(u), o = s.minus(i.div(n += 2)), i = i.times(u), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), F = true, D(s, g.precision = h, g.rounding = x, true);
    };
    R.isFinite = function() {
      return !!this.d;
    };
    R.isInteger = R.isInt = function() {
      return !!this.d && te(this.e / N) > this.d.length - 2;
    };
    R.isNaN = function() {
      return !this.s;
    };
    R.isNegative = R.isNeg = function() {
      return this.s < 0;
    };
    R.isPositive = R.isPos = function() {
      return this.s > 0;
    };
    R.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    R.lessThan = R.lt = function(e) {
      return this.cmp(e) < 0;
    };
    R.lessThanOrEqualTo = R.lte = function(e) {
      return this.cmp(e) < 1;
    };
    R.logarithm = R.log = function(e) {
      var t, r, n, i, o, s, a, u, l = this, g = l.constructor, h = g.precision, x = g.rounding, S = 5;
      if (e == null)
        e = new g(10), t = true;
      else {
        if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new g(NaN);
        t = e.eq(10);
      }
      if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1))
        return new g(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (F = false, a = h + S, s = Oe(l, a), n = t ? Er(g, a + 10) : Oe(e, a), u = q(s, n, a, 1), Lt(u.d, i = h, x))
        do
          if (a += 10, s = Oe(l, a), n = t ? Er(g, a + 10) : Oe(e, a), u = q(s, n, a, 1), !o) {
            +Z(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = D(u, h + 1, 0));
            break;
          }
        while (Lt(u.d, i += 10, x));
      return F = true, D(u, h, x);
    };
    R.minus = R.sub = function(e) {
      var t, r, n, i, o, s, a, u, l, g, h, x, S = this, C = S.constructor;
      if (e = new C(e), !S.d || !e.d)
        return !S.s || !e.s ? e = new C(NaN) : S.d ? e.s = -e.s : e = new C(e.d || S.s !== e.s ? S : NaN), e;
      if (S.s != e.s)
        return e.s = -e.s, S.plus(e);
      if (l = S.d, x = e.d, a = C.precision, u = C.rounding, !l[0] || !x[0]) {
        if (x[0])
          e.s = -e.s;
        else if (l[0])
          e = new C(S);
        else
          return new C(u === 3 ? -0 : 0);
        return F ? D(e, a, u) : e;
      }
      if (r = te(e.e / N), g = te(S.e / N), l = l.slice(), o = g - r, o) {
        for (h = o < 0, h ? (t = l, o = -o, s = x.length) : (t = x, r = g, s = l.length), n = Math.max(Math.ceil(a / N), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = l.length, s = x.length, h = n < s, h && (s = n), n = 0; n < s; n++)
          if (l[n] != x[n]) {
            h = l[n] < x[n];
            break;
          }
        o = 0;
      }
      for (h && (t = l, l = x, x = t, e.s = -e.s), s = l.length, n = x.length - s; n > 0; --n)
        l[s++] = 0;
      for (n = x.length; n > o; ) {
        if (l[--n] < x[n]) {
          for (i = n; i && l[--i] === 0; )
            l[i] = pe - 1;
          --l[i], l[n] += pe;
        }
        l[n] -= x[n];
      }
      for (; l[--s] === 0; )
        l.pop();
      for (; l[0] === 0; l.shift())
        --r;
      return l[0] ? (e.d = l, e.e = xr(l, r), F ? D(e, a, u) : e) : new C(u === 3 ? -0 : 0);
    };
    R.modulo = R.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? D(new n(r), n.precision, n.rounding) : (F = false, n.modulo == 9 ? (t = q(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(r, e, 0, n.modulo, 1), t = t.times(e), F = true, r.minus(t));
    };
    R.naturalExponential = R.exp = function() {
      return Pn(this);
    };
    R.naturalLogarithm = R.ln = function() {
      return Oe(this);
    };
    R.negated = R.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, D(e);
    };
    R.plus = R.add = function(e) {
      var t, r, n, i, o, s, a, u, l, g, h = this, x = h.constructor;
      if (e = new x(e), !h.d || !e.d)
        return !h.s || !e.s ? e = new x(NaN) : h.d || (e = new x(e.d || h.s === e.s ? h : NaN)), e;
      if (h.s != e.s)
        return e.s = -e.s, h.minus(e);
      if (l = h.d, g = e.d, a = x.precision, u = x.rounding, !l[0] || !g[0])
        return g[0] || (e = new x(h)), F ? D(e, a, u) : e;
      if (o = te(h.e / N), n = te(e.e / N), l = l.slice(), i = o - n, i) {
        for (i < 0 ? (r = l, i = -i, s = g.length) : (r = g, n = o, s = l.length), o = Math.ceil(a / N), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = l.length, i = g.length, s - i < 0 && (i = s, r = g, g = l, l = r), t = 0; i; )
        t = (l[--i] = l[i] + g[i] + t) / pe | 0, l[i] %= pe;
      for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; )
        l.pop();
      return e.d = l, e.e = xr(l, n), F ? D(e, a, u) : e;
    };
    R.precision = R.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(Me + e);
      return r.d ? (t = bo(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    R.round = function() {
      var e = this, t = e.constructor;
      return D(new t(e), e.e + 1, t.rounding);
    };
    R.sine = R.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + N, n.rounding = 1, r = Eu(n, To(n, r)), n.precision = e, n.rounding = t, D(Ce > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    R.squareRoot = R.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, u = s.e, l = s.s, g = s.constructor;
      if (l !== 1 || !a || !a[0])
        return new g(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (F = false, l = Math.sqrt(+s), l == 0 || l == 1 / 0 ? (t = Z(a), (t.length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = te((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), n = new g(t)) : n = new g(l.toString()), r = (u = g.precision) + 3; ; )
        if (o = n, n = o.plus(q(s, o, r + 2, 1)).times(0.5), Z(o.d).slice(0, r) === (t = Z(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (D(o, u + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (D(n, u + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return F = true, D(n, u, g.rounding, e);
    };
    R.tangent = R.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, D(Ce == 2 || Ce == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    R.times = R.mul = function(e) {
      var t, r, n, i, o, s, a, u, l, g = this, h = g.constructor, x = g.d, S = (e = new h(e)).d;
      if (e.s *= g.s, !x || !x[0] || !S || !S[0])
        return new h(!e.s || x && !x[0] && !S || S && !S[0] && !x ? NaN : !x || !S ? e.s / 0 : e.s * 0);
      for (r = te(g.e / N) + te(e.e / N), u = x.length, l = S.length, u < l && (o = x, x = S, S = o, s = u, u = l, l = s), o = [], s = u + l, n = s; n--; )
        o.push(0);
      for (n = l; --n >= 0; ) {
        for (t = 0, i = u + n; i > n; )
          a = o[i] + S[n] * x[i - n - 1] + t, o[i--] = a % pe | 0, t = a / pe | 0;
        o[i] = (o[i] + t) % pe | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = xr(o, r), F ? D(e, h.precision, h.rounding) : e;
    };
    R.toBinary = function(e, t) {
      return Tn(this, 2, e, t);
    };
    R.toDecimalPlaces = R.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ae(e, 0, Ne), t === void 0 ? t = n.rounding : ae(t, 0, 8), D(r, e + r.e + 1, t));
    };
    R.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = he(n, true) : (ae(e, 0, Ne), t === void 0 ? t = i.rounding : ae(t, 0, 8), n = D(new i(n), e + 1, t), r = he(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    R.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = he(i) : (ae(e, 0, Ne), t === void 0 ? t = o.rounding : ae(t, 0, 8), n = D(new o(i), e + i.e + 1, t), r = he(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    R.toFraction = function(e) {
      var t, r, n, i, o, s, a, u, l, g, h, x, S = this, C = S.d, A = S.constructor;
      if (!C)
        return new A(S);
      if (l = r = new A(1), n = u = new A(0), t = new A(n), o = t.e = bo(C) - S.e - 1, s = o % N, t.d[0] = H(10, s < 0 ? N + s : s), e == null)
        e = o > 0 ? t : l;
      else {
        if (a = new A(e), !a.isInt() || a.lt(l))
          throw Error(Me + a);
        e = a.gt(t) ? o > 0 ? t : l : a;
      }
      for (F = false, a = new A(Z(C)), g = A.precision, A.precision = o = C.length * N * 2; h = q(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = l, l = u.plus(h.times(i)), u = i, i = t, t = a.minus(h.times(i)), a = i;
      return i = q(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(l)), r = r.plus(i.times(n)), u.s = l.s = S.s, x = q(l, n, o, 1).minus(S).abs().cmp(q(u, r, o, 1).minus(S).abs()) < 1 ? [l, n] : [u, r], A.precision = g, F = true, x;
    };
    R.toHexadecimal = R.toHex = function(e, t) {
      return Tn(this, 16, e, t);
    };
    R.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : ae(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (F = false, r = q(r, e, 0, t, 1).times(e), F = true, D(r)) : (e.s = r.s, r = e), r;
    };
    R.toNumber = function() {
      return +this;
    };
    R.toOctal = function(e, t) {
      return Tn(this, 8, e, t);
    };
    R.toPower = R.pow = function(e) {
      var t, r, n, i, o, s, a = this, u = a.constructor, l = +(e = new u(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new u(H(+a, l));
      if (a = new u(a), a.eq(1))
        return a;
      if (n = u.precision, o = u.rounding, e.eq(1))
        return D(a, n, o);
      if (t = te(e.e / N), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= gu)
        return i = xo(u, a, r, n), e.s < 0 ? new u(1).div(i) : D(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new u(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = H(+a, l), t = r == 0 || !isFinite(r) ? te(l * (Math.log("0." + Z(a.d)) / Math.LN10 + a.e + 1)) : new u(r + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? s / 0 : 0) : (F = false, u.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Pn(e.times(Oe(a, n + r)), n), i.d && (i = D(i, n + 5, 1), Lt(i.d, n, o) && (t = n + 10, i = D(Pn(e.times(Oe(a, t + r)), t), t + 5, 1), +Z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = D(i, n + 1, 0)))), i.s = s, F = true, u.rounding = o, D(i, n, o));
    };
    R.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = he(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ae(e, 1, Ne), t === void 0 ? t = i.rounding : ae(t, 0, 8), n = D(new i(n), e, t), r = he(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    R.toSignificantDigits = R.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (ae(e, 1, Ne), t === void 0 ? t = n.rounding : ae(t, 0, 8)), D(new n(r), e, t);
    };
    R.toString = function() {
      var e = this, t = e.constructor, r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    R.truncated = R.trunc = function() {
      return D(new this.constructor(this), this.e + 1, 1);
    };
    R.valueOf = R.toJSON = function() {
      var e = this, t = e.constructor, r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function Z(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = N - n.length, r && (o += ke(r)), o += n;
        s = e[t], n = s + "", r = N - n.length, r && (o += ke(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function ae(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Me + e);
    }
    function Lt(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += N, i = 0) : (i = Math.ceil((t + 1) / N), t %= N), o = H(10, N - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == H(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == H(10, t - 3) - 1, s;
    }
    function hr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += En.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function yu(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Pr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = pt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var q = function() {
      function e(n, i, o) {
        var s, a = 0, u = n.length;
        for (n = n.slice(); u--; )
          s = n[u] * i + a, n[u] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, u;
        if (o != s)
          u = o > s ? 1 : -1;
        else
          for (a = u = 0; a < o; a++)
            if (n[a] != i[a]) {
              u = n[a] > i[a] ? 1 : -1;
              break;
            }
        return u;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, u) {
        var l, g, h, x, S, C, A, k, O, B, M, I, X, L, Ye, Be, fe, $e, Q, Re, qe = n.constructor, Ze = n.s == i.s ? 1 : -1, ee = n.d, U = i.d;
        if (!ee || !ee[0] || !U || !U[0])
          return new qe(!n.s || !i.s || (ee ? U && ee[0] == U[0] : !U) ? NaN : ee && ee[0] == 0 || !U ? Ze * 0 : Ze / 0);
        for (u ? (S = 1, g = n.e - i.e) : (u = pe, S = N, g = te(n.e / S) - te(i.e / S)), Q = U.length, fe = ee.length, O = new qe(Ze), B = O.d = [], h = 0; U[h] == (ee[h] || 0); h++)
          ;
        if (U[h] > (ee[h] || 0) && g--, o == null ? (L = o = qe.precision, s = qe.rounding) : a ? L = o + (n.e - i.e) + 1 : L = o, L < 0)
          B.push(1), C = true;
        else {
          if (L = L / S + 2 | 0, h = 0, Q == 1) {
            for (x = 0, U = U[0], L++; (h < fe || x) && L--; h++)
              Ye = x * u + (ee[h] || 0), B[h] = Ye / U | 0, x = Ye % U | 0;
            C = x || h < fe;
          } else {
            for (x = u / (U[0] + 1) | 0, x > 1 && (U = e(U, x, u), ee = e(ee, x, u), Q = U.length, fe = ee.length), Be = Q, M = ee.slice(0, Q), I = M.length; I < Q; )
              M[I++] = 0;
            Re = U.slice(), Re.unshift(0), $e = U[0], U[1] >= u / 2 && ++$e;
            do
              x = 0, l = t(U, M, Q, I), l < 0 ? (X = M[0], Q != I && (X = X * u + (M[1] || 0)), x = X / $e | 0, x > 1 ? (x >= u && (x = u - 1), A = e(U, x, u), k = A.length, I = M.length, l = t(A, M, k, I), l == 1 && (x--, r(A, Q < k ? Re : U, k, u))) : (x == 0 && (l = x = 1), A = U.slice()), k = A.length, k < I && A.unshift(0), r(M, A, I, u), l == -1 && (I = M.length, l = t(U, M, Q, I), l < 1 && (x++, r(M, Q < I ? Re : U, I, u))), I = M.length) : l === 0 && (x++, M = [0]), B[h++] = x, l && M[0] ? M[I++] = ee[Be] || 0 : (M = [ee[Be]], I = 1);
            while ((Be++ < fe || M[0] !== void 0) && L--);
            C = M[0] !== void 0;
          }
          B[0] || B.shift();
        }
        if (S == 1)
          O.e = g, go = C;
        else {
          for (h = 1, x = B[0]; x >= 10; x /= 10)
            h++;
          O.e = h + g * S - 1, D(O, a ? o + O.e + 1 : o, s, C);
        }
        return O;
      };
    }();
    function D(e, t, r, n) {
      var i, o, s, a, u, l, g, h, x, S = e.constructor;
      e:
        if (t != null) {
          if (h = e.d, !h)
            return e;
          for (i = 1, a = h[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += N, s = t, g = h[x = 0], u = g / H(10, i - s - 1) % 10 | 0;
          else if (x = Math.ceil((o + 1) / N), a = h.length, x >= a)
            if (n) {
              for (; a++ <= x; )
                h.push(0);
              g = u = 0, i = 1, o %= N, s = o - N + 1;
            } else
              break e;
          else {
            for (g = a = h[x], i = 1; a >= 10; a /= 10)
              i++;
            o %= N, s = o - N + i, u = s < 0 ? 0 : g / H(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || h[x + 1] !== void 0 || (s < 0 ? g : g % H(10, i - s - 1)), l = r < 4 ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / H(10, i - s) : 0 : h[x - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
            return h.length = 0, l ? (t -= e.e + 1, h[0] = H(10, (N - t % N) % N), e.e = -t || 0) : h[0] = e.e = 0, e;
          if (o == 0 ? (h.length = x, a = 1, x--) : (h.length = x + 1, a = H(10, N - o), h[x] = s > 0 ? (g / H(10, i - s) % H(10, s) | 0) * a : 0), l)
            for (; ; )
              if (x == 0) {
                for (o = 1, s = h[0]; s >= 10; s /= 10)
                  o++;
                for (s = h[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, h[0] == pe && (h[0] = 1));
                break;
              } else {
                if (h[x] += a, h[x] != pe)
                  break;
                h[x--] = 0, a = 1;
              }
          for (o = h.length; h[--o] === 0; )
            h.pop();
        }
      return F && (e.e > S.maxE ? (e.d = null, e.e = NaN) : e.e < S.minE && (e.e = 0, e.d = [0])), e;
    }
    function he(e, t, r) {
      if (!e.isFinite())
        return vo(e);
      var n, i = e.e, o = Z(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ke(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + ke(-i - 1) + o, r && (n = r - s) > 0 && (o += ke(n))) : i >= s ? (o += ke(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + ke(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += ke(n))), o;
    }
    function xr(e, t) {
      var r = e[0];
      for (t *= N; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Er(e, t, r) {
      if (t > hu)
        throw F = true, r && (e.precision = r), Error(ho);
      return D(new e(yr), t, 1, true);
    }
    function ce(e, t, r) {
      if (t > xn)
        throw Error(ho);
      return D(new e(wr), t, r, true);
    }
    function bo(e) {
      var t = e.length - 1, r = t * N + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function ke(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function xo(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / N + 4);
      for (F = false; ; ) {
        if (r % 2 && (o = o.times(t), fo(o.d, s) && (i = true)), r = te(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), fo(t.d, s);
      }
      return F = true, o;
    }
    function po(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Po(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function Pn(e, t) {
      var r, n, i, o, s, a, u, l = 0, g = 0, h = 0, x = e.constructor, S = x.rounding, C = x.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new x(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (F = false, u = C) : u = t, a = new x(0.03125); e.e > -2; )
        e = e.times(a), h += 5;
      for (n = Math.log(H(2, h)) / Math.LN10 * 2 + 5 | 0, u += n, r = o = s = new x(1), x.precision = u; ; ) {
        if (o = D(o.times(e), u, 1), r = r.times(++g), a = s.plus(q(o, r, u, 1)), Z(a.d).slice(0, u) === Z(s.d).slice(0, u)) {
          for (i = h; i--; )
            s = D(s.times(s), u, 1);
          if (t == null)
            if (l < 3 && Lt(s.d, u - n, S, l))
              x.precision = u += 10, r = o = a = new x(1), g = 0, l++;
            else
              return D(s, x.precision = C, S, F = true);
          else
            return x.precision = C, s;
        }
        s = a;
      }
    }
    function Oe(e, t) {
      var r, n, i, o, s, a, u, l, g, h, x, S = 1, C = 10, A = e, k = A.d, O = A.constructor, B = O.rounding, M = O.precision;
      if (A.s < 0 || !k || !k[0] || !A.e && k[0] == 1 && k.length == 1)
        return new O(k && !k[0] ? -1 / 0 : A.s != 1 ? NaN : k ? 0 : A);
      if (t == null ? (F = false, g = M) : g = t, O.precision = g += C, r = Z(k), n = r.charAt(0), Math.abs(o = A.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          A = A.times(e), r = Z(A.d), n = r.charAt(0), S++;
        o = A.e, n > 1 ? (A = new O("0." + r), o++) : A = new O(n + "." + r.slice(1));
      } else
        return l = Er(O, g + 2, M).times(o + ""), A = Oe(new O(n + "." + r.slice(1)), g - C).plus(l), O.precision = M, t == null ? D(A, M, B, F = true) : A;
      for (h = A, u = s = A = q(A.minus(1), A.plus(1), g, 1), x = D(A.times(A), g, 1), i = 3; ; ) {
        if (s = D(s.times(x), g, 1), l = u.plus(q(s, new O(i), g, 1)), Z(l.d).slice(0, g) === Z(u.d).slice(0, g))
          if (u = u.times(2), o !== 0 && (u = u.plus(Er(O, g + 2, M).times(o + ""))), u = q(u, new O(S), g, 1), t == null)
            if (Lt(u.d, g - C, B, a))
              O.precision = g += C, l = s = A = q(h.minus(1), h.plus(1), g, 1), x = D(A.times(A), g, 1), i = a = 1;
            else
              return D(u, O.precision = M, B, F = true);
          else
            return O.precision = M, u;
        u = l, i += 2;
      }
    }
    function vo(e) {
      return String(e.s * e.s / 0);
    }
    function vn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % N, r < 0 && (n += N), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= N; n < i; )
            e.d.push(+t.slice(n, n += N));
          t = t.slice(n), n = N - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), F && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function wu(e, t) {
      var r, n, i, o, s, a, u, l, g;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Eo.test(t))
          return vn(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (mu.test(t))
        r = 16, t = t.toLowerCase();
      else if (fu.test(t))
        r = 2;
      else if (du.test(t))
        r = 8;
      else
        throw Error(Me + t);
      for (o = t.search(/p/i), o > 0 ? (u = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = xo(n, new n(r), o, o * 2)), l = hr(t, r, pe), g = l.length - 1, o = g; l[o] === 0; --o)
        l.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = xr(l, g), e.d = l, F = false, s && (e = q(e, i, a * 4)), u && (e = e.times(Math.abs(u) < 54 ? H(2, u) : Ge.pow(2, u))), F = true, e);
    }
    function Eu(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : pt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Pr(5, r)), t = pt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function pt(e, t, r, n, i) {
      var o, s, a, u, l = 1, g = e.precision, h = Math.ceil(g / N);
      for (F = false, u = r.times(r), a = new e(n); ; ) {
        if (s = q(a.times(u), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = q(s.times(u), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
          for (o = h; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, l++;
      }
      return F = true, s.d.length = h + 1, s;
    }
    function Pr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function To(e, t) {
      var r, n = t.s < 0, i = ce(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Ce = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Ce = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Ce = po(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Ce = po(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function Tn(e, t, r, n) {
      var i, o, s, a, u, l, g, h, x, S = e.constructor, C = r !== void 0;
      if (C ? (ae(r, 1, Ne), n === void 0 ? n = S.rounding : ae(n, 0, 8)) : (r = S.precision, n = S.rounding), !e.isFinite())
        g = vo(e);
      else {
        for (g = he(e), s = g.indexOf("."), C ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), x = new S(1), x.e = g.length - s, x.d = hr(he(x), 10, i), x.e = x.d.length), h = hr(g, 10, i), o = u = h.length; h[--u] == 0; )
          h.pop();
        if (!h[0])
          g = C ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new S(e), e.d = h, e.e = o, e = q(e, x, r, n, 0, i), h = e.d, o = e.e, l = go), s = h[r], a = i / 2, l = l || h[r + 1] !== void 0, l = n < 4 ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || l || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, l)
            for (; ++h[--r] > i - 1; )
              h[r] = 0, r || (++o, h.unshift(1));
          for (u = h.length; !h[u - 1]; --u)
            ;
          for (s = 0, g = ""; s < u; s++)
            g += En.charAt(h[s]);
          if (C) {
            if (u > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --u; u % s; u++)
                  g += "0";
                for (h = hr(g, i, t), u = h.length; !h[u - 1]; --u)
                  ;
                for (s = 1, g = "1."; s < u; s++)
                  g += En.charAt(h[s]);
              } else
                g = g.charAt(0) + "." + g.slice(1);
            g = g + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              g = "0" + g;
            g = "0." + g;
          } else if (++o > u)
            for (o -= u; o--; )
              g += "0";
          else
            o < u && (g = g.slice(0, o) + "." + g.slice(o));
        }
        g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
      }
      return e.s < 0 ? "-" + g : g;
    }
    function fo(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function bu(e) {
      return new this(e).abs();
    }
    function xu(e) {
      return new this(e).acos();
    }
    function Pu(e) {
      return new this(e).acosh();
    }
    function vu(e, t) {
      return new this(e).plus(t);
    }
    function Tu(e) {
      return new this(e).asin();
    }
    function Cu(e) {
      return new this(e).asinh();
    }
    function Au(e) {
      return new this(e).atan();
    }
    function Ru(e) {
      return new this(e).atanh();
    }
    function Su(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ce(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ce(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ce(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(q(e, t, o, 1)), t = ce(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(q(e, t, o, 1)), r;
    }
    function Iu(e) {
      return new this(e).cbrt();
    }
    function Du(e) {
      return D(e = new this(e), e.e + 1, 2);
    }
    function ku(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function Ou(e) {
      if (!e || typeof e != "object")
        throw Error(br + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, Ne, "rounding", 0, 8, "toExpNeg", -ct, 0, "toExpPos", 0, ct, "maxE", 0, ct, "minE", -ct, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = bn[r]), (n = e[r]) !== void 0)
          if (te(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(Me + r + ": " + n);
      if (r = "crypto", i && (this[r] = bn[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(yo);
          else
            this[r] = false;
        else
          throw Error(Me + r + ": " + n);
      return this;
    }
    function Mu(e) {
      return new this(e).cos();
    }
    function Nu(e) {
      return new this(e).cosh();
    }
    function Co(e) {
      var t, r, n;
      function i(o) {
        var s, a, u, l = this;
        if (!(l instanceof i))
          return new i(o);
        if (l.constructor = i, mo(o)) {
          l.s = o.s, F ? !o.d || o.e > i.maxE ? (l.e = NaN, l.d = null) : o.e < i.minE ? (l.e = 0, l.d = [0]) : (l.e = o.e, l.d = o.d.slice()) : (l.e = o.e, l.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (u = typeof o, u === "number") {
          if (o === 0) {
            l.s = 1 / o < 0 ? -1 : 1, l.e = 0, l.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, l.s = -1) : l.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            F ? s > i.maxE ? (l.e = NaN, l.d = null) : s < i.minE ? (l.e = 0, l.d = [0]) : (l.e = s, l.d = [o]) : (l.e = s, l.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (l.s = NaN), l.e = NaN, l.d = null;
            return;
          }
          return vn(l, o.toString());
        } else if (u !== "string")
          throw Error(Me + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), l.s = -1) : (a === 43 && (o = o.slice(1)), l.s = 1), Eo.test(o) ? vn(l, o) : wu(l, o);
      }
      if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ou, i.clone = Co, i.isDecimal = mo, i.abs = bu, i.acos = xu, i.acosh = Pu, i.add = vu, i.asin = Tu, i.asinh = Cu, i.atan = Au, i.atanh = Ru, i.atan2 = Su, i.cbrt = Iu, i.ceil = Du, i.clamp = ku, i.cos = Mu, i.cosh = Nu, i.div = _u, i.exp = Fu, i.floor = Lu, i.hypot = Bu, i.ln = $u, i.log = qu, i.log10 = Vu, i.log2 = Uu, i.max = ju, i.min = Ju, i.mod = Qu, i.mul = Gu, i.pow = Hu, i.random = Wu, i.round = Ku, i.sign = zu, i.sin = Yu, i.sinh = Zu, i.sqrt = Xu, i.sub = el, i.sum = tl, i.tan = rl, i.tanh = nl, i.trunc = il, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function _u(e, t) {
      return new this(e).div(t);
    }
    function Fu(e) {
      return new this(e).exp();
    }
    function Lu(e) {
      return D(e = new this(e), e.e + 1, 3);
    }
    function Bu() {
      var e, t, r = new this(0);
      for (F = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return F = true, new this(1 / 0);
          r = t;
        }
      return F = true, r.sqrt();
    }
    function mo(e) {
      return e instanceof Ge || e && e.toStringTag === wo || false;
    }
    function $u(e) {
      return new this(e).ln();
    }
    function qu(e, t) {
      return new this(e).log(t);
    }
    function Uu(e) {
      return new this(e).log(2);
    }
    function Vu(e) {
      return new this(e).log(10);
    }
    function ju() {
      return Po(this, arguments, "lt");
    }
    function Ju() {
      return Po(this, arguments, "gt");
    }
    function Qu(e, t) {
      return new this(e).mod(t);
    }
    function Gu(e, t) {
      return new this(e).mul(t);
    }
    function Hu(e, t) {
      return new this(e).pow(t);
    }
    function Wu(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ae(e, 1, Ne), n = Math.ceil(e / N), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(yo);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= N, n && e && (i = H(10, N - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= N)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < N && (r -= N - n);
      }
      return s.e = r, s.d = a, s;
    }
    function Ku(e) {
      return D(e = new this(e), e.e + 1, this.rounding);
    }
    function zu(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Yu(e) {
      return new this(e).sin();
    }
    function Zu(e) {
      return new this(e).sinh();
    }
    function Xu(e) {
      return new this(e).sqrt();
    }
    function el(e, t) {
      return new this(e).sub(t);
    }
    function tl() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (F = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return F = true, D(r, this.precision, this.rounding);
    }
    function rl(e) {
      return new this(e).tan();
    }
    function nl(e) {
      return new this(e).tanh();
    }
    function il(e) {
      return D(e = new this(e), e.e + 1, 1);
    }
    R[Symbol.for("nodejs.util.inspect.custom")] = R.toString;
    R[Symbol.toStringTag] = "Decimal";
    var Ge = R.constructor = Co(bn);
    yr = new Ge(yr);
    wr = new Ge(wr);
    var ye = Ge;
    function ft(e) {
      return Ge.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    d();
    c();
    p();
    f();
    m();
    var Bt = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function mt(e) {
      return e instanceof Bt;
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var vr = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    d();
    c();
    p();
    f();
    m();
    var Tr = (e) => e;
    var Cr = { bold: Tr, red: Tr, green: Tr, dim: Tr, enabled: false };
    var Ao = { bold: sr, red: nt, green: Ri, dim: ar, enabled: true };
    var dt = { write(e) {
      e.writeLine(",");
    } };
    d();
    c();
    p();
    f();
    m();
    var we = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    d();
    c();
    p();
    f();
    m();
    var _e = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var gt = class extends _e {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new vr(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new we("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(dt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    d();
    c();
    p();
    f();
    m();
    var Ro = ": ";
    var Ar = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ro.length;
      }
      write(t) {
        let r = new we(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Ro).write(this.value);
      }
    };
    d();
    c();
    p();
    f();
    m();
    var Rr = class e extends _e {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let u;
          if (s.value instanceof e ? u = s.value.getField(a) : s.value instanceof gt && (u = s.value.getField(Number(a))), !u)
            return;
          s = u;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var n;
        return r.length === 0 ? this : (n = this.getDeepField(r)) == null ? void 0 : n.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var n;
        return (n = this.getField(r)) == null ? void 0 : n.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        var i, o;
        let r = (i = this.getField("select")) == null ? void 0 : i.value.asObject();
        if (r)
          return { kind: "select", value: r };
        let n = (o = this.getField("include")) == null ? void 0 : o.value.asObject();
        if (n)
          return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        var n;
        return (n = this.getSelectionParent()) == null ? void 0 : n.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new we("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(dt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    d();
    c();
    p();
    f();
    m();
    var z = class extends _e {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new we(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    var Cn = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function Sr(e) {
      return new Cn(So(e));
    }
    function So(e) {
      let t = new Rr();
      for (let [r, n] of Object.entries(e)) {
        let i = new Ar(r, Io(n));
        t.addField(i);
      }
      return t;
    }
    function Io(e) {
      if (typeof e == "string")
        return new z(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new z(String(e));
      if (typeof e == "bigint")
        return new z(`${e}n`);
      if (e === null)
        return new z("null");
      if (e === void 0)
        return new z("undefined");
      if (ft(e))
        return new z(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return w.Buffer.isBuffer(e) ? new z(`Buffer.alloc(${e.byteLength})`) : new z(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = gr(e) ? e.toISOString() : "Invalid Date";
        return new z(`new Date("${t}")`);
      }
      return e instanceof Te ? new z(`Prisma.${e._getName()}`) : mt(e) ? new z(`prisma.${co(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? sl(e) : typeof e == "object" ? So(e) : new z(Object.prototype.toString.call(e));
    }
    function sl(e) {
      let t = new gt();
      for (let r of e)
        t.addItem(Io(r));
      return t;
    }
    function Do(e) {
      if (e === void 0)
        return "";
      let t = Sr(e);
      return new ut(0, { colors: Cr }).write(t).toString();
    }
    d();
    c();
    p();
    f();
    m();
    var al = "P2037";
    function $t({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new K(ul(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new oe(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    function ul(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === al && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var An = class {
      getLocation() {
        return null;
      }
    };
    function Fe(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new An();
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var ko = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ht(e = {}) {
      let t = cl(e);
      return Object.entries(t).reduce((n, [i, o]) => (ko[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function cl(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function Ir(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Oo(e, t) {
      let r = Ir(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: ht })(e);
    }
    d();
    c();
    p();
    f();
    m();
    function pl(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? ht({ ...r, _count: t }) : ht({ ...r, _count: { _all: true } });
    }
    function fl(e = {}) {
      return typeof e.select == "object" ? (t) => Ir(e)(t)._count : (t) => Ir(e)(t)._count._all;
    }
    function Mo(e, t) {
      return t({ action: "count", unpacker: fl(e), argsMapper: pl })(e);
    }
    d();
    c();
    p();
    f();
    m();
    function ml(e = {}) {
      let t = ht(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function dl(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function No(e, t) {
      return t({ action: "groupBy", unpacker: dl(e), argsMapper: ml })(e);
    }
    function _o(e, t, r) {
      if (t === "aggregate")
        return (n) => Oo(n, r);
      if (t === "count")
        return (n) => Mo(n, r);
      if (t === "groupBy")
        return (n) => No(n, r);
    }
    d();
    c();
    p();
    f();
    m();
    function Fo(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = cn(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new Bt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...mr(Object.keys(n)) });
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var Lo = (e) => Array.isArray(e) ? e : e.split(".");
    var Rn = (e, t) => Lo(t).reduce((r, n) => r && r[n], e);
    var Bo = (e, t, r) => Lo(t).reduceRight((n, i, o, s) => Object.assign({}, Rn(e, s.slice(0, o)), { [i]: n }), r);
    function gl(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function hl(e, t, r) {
      return t === void 0 ? e != null ? e : {} : Bo(t, r, e || true);
    }
    function Sn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((u, l) => ({ ...u, [l.name]: l }), {});
      return (u) => {
        let l = Fe(e._errorFormat), g = gl(n, i), h = hl(u, o, g), x = r({ dataPath: g, callsite: l })(h), S = yl(e, t);
        return new Proxy(x, { get(C, A) {
          if (!S.includes(A))
            return C[A];
          let O = [a[A].type, r, A], B = [g, h];
          return Sn(e, ...O, ...B);
        }, ...mr([...S, ...Object.getOwnPropertyNames(x)]) });
      };
    }
    function yl(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var wl = Ue(Ki());
    var El = { red: nt, gray: ki, dim: ar, bold: sr, underline: Ai, highlightSource: (e) => e.highlight() };
    var bl = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function xl({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r != null ? r : false, callArguments: n };
    }
    function Pl({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], u = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)), t && a.push(s.underline(vl(t))), i) {
        a.push("");
        let l = [i.toString()];
        o && (l.push(o), l.push(s.dim(")"))), a.push(l.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function vl(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function yt(e) {
      let t = e.showColors ? El : bl, r;
      return typeof $getTemplateParameters != "undefined" ? r = $getTemplateParameters(e, t) : r = xl(e), Pl(r, t);
    }
    function $o(e, t, r, n) {
      return e === De.ModelAction.findFirstOrThrow || e === De.ModelAction.findUniqueOrThrow ? Tl(t, r, n) : n;
    }
    function Tl(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = yt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new Y(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof K && o.code === "P2025" ? new Pe(`No ${e} found`, t) : o;
        });
      };
    }
    d();
    c();
    p();
    f();
    m();
    function Ee(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Cl = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Al = ["aggregate", "count", "groupBy"];
    function In(e, t) {
      var i;
      let r = (i = e._extensions.getAllModelExtensions(t)) != null ? i : {}, n = [Rl(e, t), Il(e, t), Ft(r), ne("name", () => t), ne("$name", () => t), ne("$parent", () => e._appliedParent)];
      return ge({}, n);
    }
    function Rl(e, t) {
      let r = Ee(t), n = Object.keys(De.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (u) => e._request(u);
        s = $o(o, t, e._clientVersion, s);
        let a = (u) => (l) => {
          let g = Fe(e._errorFormat);
          return e._createPrismaPromise((h) => {
            let x = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: h, callsite: g };
            return s({ ...x, ...u });
          });
        };
        return Cl.includes(o) ? Sn(e, t, a) : Sl(i) ? _o(e, i, a) : a({});
      } };
    }
    function Sl(e) {
      return Al.includes(e);
    }
    function Il(e, t) {
      return Qe(ne("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Fo(t, r);
      }));
    }
    d();
    c();
    p();
    f();
    m();
    function qo(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var Dn = Symbol();
    function qt(e) {
      let t = [Dl(e), ne(Dn, () => e), ne("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Ft(r)), ge(e, t);
    }
    function Dl(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Ee), n = [...new Set(t.concat(r))];
      return Qe({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = qo(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return In(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return In(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function Uo(e) {
      return e[Dn] ? e[Dn] : e;
    }
    function Vo(e) {
      var r;
      if (typeof e == "function")
        return e(this);
      if ((r = e.client) != null && r.__AccelerateEngine) {
        let n = e.client.__AccelerateEngine;
        this._originalClient._engine = new n(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return qt(t);
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function jo({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o)
        return e;
      let s = [], a = [];
      for (let u of Object.values(o)) {
        if (n) {
          if (n[u.name])
            continue;
          let l = u.needs.filter((g) => n[g]);
          l.length > 0 && a.push(at(l));
        } else if (r) {
          if (!r[u.name])
            continue;
          let l = u.needs.filter((g) => !r[g]);
          l.length > 0 && a.push(at(l));
        }
        kl(e, u.needs) && s.push(Ol(u, ge(e, s)));
      }
      return s.length > 0 || a.length > 0 ? ge(e, [...s, ...a]) : e;
    }
    function kl(e, t) {
      return t.every((r) => ln(e, r));
    }
    function Ol(e, t) {
      return Qe(ne(e.name, () => e.compute(t)));
    }
    d();
    c();
    p();
    f();
    m();
    function Dr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      var s;
      if (Array.isArray(t)) {
        for (let a = 0; a < t.length; a++)
          t[a] = Dr({ result: t[a], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = (s = e(t, i, r)) != null ? s : t;
      return r.include && Jo({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Jo({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function Jo({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let u = n.models[r].fields.find((g) => g.name === o);
        if (!u || u.kind !== "object" || !u.relationName)
          continue;
        let l = typeof s == "object" ? s : {};
        t[o] = Dr({ visitor: i, result: t[o], args: l, modelName: u.type, runtimeDataModel: n });
      }
    }
    function Qo({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Dr({ result: e, args: r != null ? r : {}, modelName: t, runtimeDataModel: i, visitor: (s, a, u) => jo({ result: s, modelName: Ee(a), select: u.select, omit: u.omit, extensions: n }) });
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function Go(e) {
      if (e instanceof se)
        return Ml(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Ut(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Ut(e[r]);
      return t;
    }
    function Ml(e) {
      return new se(e.strings, e.values);
    }
    function Ut(e) {
      if (typeof e != "object" || e == null || e instanceof Te || mt(e))
        return e;
      if (ft(e))
        return new ye(e.toFixed());
      if (lt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Ut(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Ut(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Ut(e[r]);
        return t;
      }
      je(e, "Unknown value");
    }
    function Wo(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        var s, a;
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (((s = t.transaction) == null ? void 0 : s.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Go((a = t.args) != null ? a : {}), __internalParams: t, query: (u, l = t) => {
          let g = l.customDataProxyFetch;
          return l.customDataProxyFetch = Zo(o, g), l.args = u, Wo(e, l, r, n + 1);
        } });
      });
    }
    function Ko(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
      return Wo(e, t, s);
    }
    function zo(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Yo(r, n, 0, e) : e(r);
      };
    }
    function Yo(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let u = a.customDataProxyFetch;
        return a.customDataProxyFetch = Zo(i, u), Yo(a, t, r + 1, n);
      } });
    }
    var Ho = (e) => e;
    function Zo(e = Ho, t = Ho) {
      return (r) => e(t(r));
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function es(e, t, r) {
      let n = Ee(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Nl({ ...e, ...Xo(t.name, e, t.result.$allModels), ...Xo(t.name, e, t.result[n]) });
    }
    function Nl(e) {
      let t = new de(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return ot(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function Xo(e, t, r) {
      return r ? ot(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: _l(t, o, i) })) : {};
    }
    function _l(e, t, r) {
      var i;
      let n = (i = e == null ? void 0 : e[t]) == null ? void 0 : i.compute;
      return n ? (o) => r({ ...o, [t]: n(o) }) : r;
    }
    function ts(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    function rs(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!e[n.name])
          for (let i of n.needs)
            delete r[i];
      return r;
    }
    var kr = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new de();
        this.modelExtensionsCache = new de();
        this.queryCallbacksCache = new de();
        this.clientExtensions = Dt(() => {
          var t2, r2;
          return this.extension.client ? { ...(r2 = this.previous) == null ? void 0 : r2.getAllClientExtensions(), ...this.extension.client } : (t2 = this.previous) == null ? void 0 : t2.getAllClientExtensions();
        });
        this.batchCallbacks = Dt(() => {
          var n, i, o;
          let t2 = (i = (n = this.previous) == null ? void 0 : n.getAllBatchQueryCallbacks()) != null ? i : [], r2 = (o = this.extension.query) == null ? void 0 : o.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var r;
          return es((r = this.previous) == null ? void 0 : r.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var n, i;
          let r = Ee(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (n = this.previous) == null ? void 0 : n.getAllModelExtensions(t) : { ...(i = this.previous) == null ? void 0 : i.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var s, a;
          let n = (a = (s = this.previous) == null ? void 0 : s.getAllQueryCallbacks(t, r)) != null ? a : [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Or = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new kr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new kr(t, this.head));
      }
      getAllComputedFields(t) {
        var r;
        return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var t;
        return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var r;
        return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var n, i;
        return (i = (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null ? i : [];
      }
      getAllBatchQueryCallbacks() {
        var t, r;
        return (r = (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) != null ? r : [];
      }
    };
    d();
    c();
    p();
    f();
    m();
    var ns = re("prisma:client");
    var is = { Vercel: "vercel", "Netlify CI": "netlify" };
    function os({ postinstall: e, ciName: t, clientVersion: r }) {
      if (ns("checkPlatformCaching:postinstall", e), ns("checkPlatformCaching:ciName", t), e === true && t && t in is) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${is[t]}-build`;
        throw console.error(n), new G(n, r);
      }
    }
    d();
    c();
    p();
    f();
    m();
    function ss(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var Fl = "Cloudflare-Workers";
    var Ll = "node";
    function as() {
      var e, t, r;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Fl ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((r = (t = globalThis.process) == null ? void 0 : t.release) == null ? void 0 : r.name) === Ll ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    var Bl = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Vercel Edge Functions or Edge Middleware" };
    function Mr() {
      let e = as();
      return { id: e, prettyName: Bl[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function wt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      var u, l;
      let i, o = Object.keys(e)[0], s = (u = e[o]) == null ? void 0 : u.url, a = (l = t[o]) == null ? void 0 : l.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s != null && s.value ? i = s.value : s != null && s.fromEnvVar && (i = r[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0)
        throw Mr().id === "workerd" ? new G(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new G(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new G("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var Nr = class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ue = class extends Nr {
      constructor(t, r) {
        var n;
        super(t, r), this.isRetryable = (n = r.isRetryable) != null ? n : true;
      }
    };
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    function $(e, t) {
      return { ...e, isRetryable: t };
    }
    var Et = class extends ue {
      constructor(r) {
        super("This request must be retried", $(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    _(Et, "ForcedRetryError");
    d();
    c();
    p();
    f();
    m();
    var He = class extends ue {
      constructor(r, n) {
        super(r, $(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    _(He, "InvalidDatasourceError");
    d();
    c();
    p();
    f();
    m();
    var We = class extends ue {
      constructor(r, n) {
        super(r, $(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    _(We, "NotImplementedYetError");
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var j = class extends ue {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var Ke = class extends j {
      constructor(r) {
        super("Schema needs to be uploaded", $(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    _(Ke, "SchemaMissingError");
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var kn = "This request could not be understood by the server";
    var Vt = class extends j {
      constructor(r, n, i) {
        super(n || kn, $(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    _(Vt, "BadRequestError");
    d();
    c();
    p();
    f();
    m();
    var jt = class extends j {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", $(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    _(jt, "HealthcheckTimeoutError");
    d();
    c();
    p();
    f();
    m();
    var Jt = class extends j {
      constructor(r, n, i) {
        super(n, $(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    _(Jt, "EngineStartupError");
    d();
    c();
    p();
    f();
    m();
    var Qt = class extends j {
      constructor(r) {
        super("Engine version is not supported", $(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    _(Qt, "EngineVersionNotSupportedError");
    d();
    c();
    p();
    f();
    m();
    var On = "Request timed out";
    var Gt = class extends j {
      constructor(r, n = On) {
        super(n, $(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    _(Gt, "GatewayTimeoutError");
    d();
    c();
    p();
    f();
    m();
    var $l = "Interactive transaction error";
    var Ht = class extends j {
      constructor(r, n = $l) {
        super(n, $(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    _(Ht, "InteractiveTransactionError");
    d();
    c();
    p();
    f();
    m();
    var ql = "Request parameters are invalid";
    var Wt = class extends j {
      constructor(r, n = ql) {
        super(n, $(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    _(Wt, "InvalidRequestError");
    d();
    c();
    p();
    f();
    m();
    var Mn = "Requested resource does not exist";
    var Kt = class extends j {
      constructor(r, n = Mn) {
        super(n, $(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    _(Kt, "NotFoundError");
    d();
    c();
    p();
    f();
    m();
    var Nn = "Unknown server error";
    var bt = class extends j {
      constructor(r, n, i) {
        super(n || Nn, $(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    _(bt, "ServerError");
    d();
    c();
    p();
    f();
    m();
    var _n = "Unauthorized, check your connection string";
    var zt = class extends j {
      constructor(r, n = _n) {
        super(n, $(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    _(zt, "UnauthorizedError");
    d();
    c();
    p();
    f();
    m();
    var Fn = "Usage exceeded, retry again later";
    var Yt = class extends j {
      constructor(r, n = Fn) {
        super(n, $(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    _(Yt, "UsageExceededError");
    async function Ul(e) {
      let t;
      try {
        t = await e.text();
      } catch (r) {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch (r) {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    async function Zt(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await Ul(e);
      if (n.type === "QueryEngineError")
        throw new K(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new bt(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Ke(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new Qt(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Jt(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new G(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new jt(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Ht(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new Wt(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new zt(r, xt(_n, n));
      if (e.status === 404)
        return new Kt(r, xt(Mn, n));
      if (e.status === 429)
        throw new Yt(r, xt(Fn, n));
      if (e.status === 504)
        throw new Gt(r, xt(On, n));
      if (e.status >= 500)
        throw new bt(r, xt(Nn, n));
      if (e.status >= 400)
        throw new Vt(r, xt(kn, n));
    }
    function xt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    d();
    c();
    p();
    f();
    m();
    function us(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    d();
    c();
    p();
    f();
    m();
    var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function ls(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, u, l, g;
      for (let h = 0; h < o; h = h + 3)
        g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, u = (g & 4032) >> 6, l = g & 63, r += Ae[s] + Ae[a] + Ae[u] + Ae[l];
      return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Ae[s] + Ae[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, u = (g & 15) << 2, r += Ae[s] + Ae[a] + Ae[u] + "="), r;
    }
    d();
    c();
    p();
    f();
    m();
    function cs(e) {
      var r;
      if (!!((r = e.generator) != null && r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))))
        throw new G("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    d();
    c();
    p();
    f();
    m();
    function Vl(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function ps(e) {
      return new Date(Vl(e));
    }
    d();
    c();
    p();
    f();
    m();
    var fs = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.15.1-1.5675a3182f972f1a8f31d16eee6abf4fd54910e3", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var Xt = class extends ue {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, $(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    _(Xt, "RequestError");
    async function ze(e, t, r = (n) => n) {
      var i;
      let n = t.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t) : await r(Ln)(e, t);
      } catch (o) {
        let s = (i = o.message) != null ? i : "Unknown error";
        throw new Xt(s, { clientVersion: n });
      }
    }
    function Jl(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    function Ql(e) {
      return { method: e.method, headers: Jl(e) };
    }
    function Gl(e, t) {
      return { text: () => Promise.resolve(w.Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Bn(t.headers) };
    }
    async function Ln(e, t = {}) {
      let r = Hl("https"), n = Ql(t), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        var l;
        let u = r.request(e, n, (g) => {
          let { statusCode: h, headers: { location: x } } = g;
          h >= 301 && h <= 399 && x && (x.startsWith("http") === false ? s(Ln(`${o}${x}`, t)) : s(Ln(x, t))), g.on("data", (S) => i.push(S)), g.on("end", () => s(Gl(i, g))), g.on("error", a);
        });
        u.on("error", a), u.end((l = t.body) != null ? l : "");
      });
    }
    var Hl = typeof __require != "undefined" ? __require : () => {
    };
    var Bn = class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        var r;
        return (r = this.headers.get(t)) != null ? r : null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    };
    var Wl = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var ms = re("prisma:client:dataproxyEngine");
    async function Kl(e, t) {
      var s, a, u;
      let r = fs["@prisma/engines-version"], n = (s = t.clientVersion) != null ? s : "unknown";
      if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [i, o] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
      if (o === void 0 && Wl.test(i))
        return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [l] = (u = r.split("-")) != null ? u : [], [g, h, x] = l.split("."), S = zl(`<=${g}.${h}.${x}`), C = await ze(S, { clientVersion: n });
        if (!C.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${C.status} ${C.statusText}, response body: ${await C.text() || "<empty body>"}`);
        let A = await C.text();
        ms("length of body fetched from unpkg.com", A.length);
        let k;
        try {
          k = JSON.parse(A);
        } catch (O) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", A), O;
        }
        return k.version;
      }
      throw new We("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function ds(e, t) {
      let r = await Kl(e, t);
      return ms("version", r), r;
    }
    function zl(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var gs = 3;
    var $n = re("prisma:client:dataproxyEngine");
    var qn = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var er = class {
      constructor(t) {
        this.name = "DataProxyEngine";
        cs(t), this.config = t, this.env = { ...t.env, ...typeof y != "undefined" ? y.env : {} }, this.inlineSchema = ls(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          this.host = t, this.headerBuilder = new qn({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ds(t, this.config), $n("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        var r, n;
        (r = t == null ? void 0 : t.logs) != null && r.length && t.logs.forEach((i) => {
          switch (i.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let o = typeof i.attributes.query == "string" ? i.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s] = o.split("/* traceparent");
                o = s;
              }
              this.logEmitter.emit("query", { query: o, timestamp: ps(i.timestamp), duration: Number(i.attributes.duration_ms), params: i.attributes.params, target: i.attributes.target });
            }
          }
        }), (n = t == null ? void 0 : t.traces) != null && n.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await ze(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || $n("schema response status", r.status);
          let n = await Zt(r, this.clientVersion);
          if (n)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = dr(t, n), { batchResult: a, elapsed: u } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
        return a.map((l) => "errors" in l && l.errors.length > 0 ? $t(l.errors[0], this.clientVersion, this.config.activeProvider) : { data: l, elapsed: u });
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await ze(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || $n("graphql response status", a.status), await this.handleError(await Zt(a, this.clientVersion));
          let u = await a.json(), l = u.extensions;
          if (l && this.propagateResponseExtensions(l), u.errors)
            throw u.errors.length === 1 ? $t(u.errors[0], this.config.clientVersion, this.config.activeProvider) : new oe(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        } });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let u = await ze(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await Zt(u, this.clientVersion));
            let l = await u.json(), g = l.extensions;
            g && this.propagateResponseExtensions(g);
            let h = l.id, x = l["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: x } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await ze(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Zt(a, this.clientVersion));
            let l = (await a.json()).extensions;
            l && this.propagateResponseExtensions(l);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = wt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch (l) {
          throw new He(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:")
          throw new He(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let u = a.get("api_key");
        if (u === null || u.length < 1)
          throw new He(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, u];
      }
      metrics() {
        throw new We("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        var r;
        for (let n = 0; ; n++) {
          let i = (o) => {
            this.logEmitter.emit("info", { message: `Calling ${o} (n=${n})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await t.callback({ logHttpCall: i });
          } catch (o) {
            if (!(o instanceof ue) || !o.isRetryable)
              throw o;
            if (n >= gs)
              throw o instanceof Et ? o.cause : o;
            this.logEmitter.emit("warn", { message: `Attempt ${n + 1}/${gs} failed for ${t.actionGerund}: ${(r = o.message) != null ? r : "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let s = await us(n);
            this.logEmitter.emit("warn", { message: `Retrying after ${s}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof Ke)
          throw await this.uploadSchema(), new Et({ clientVersion: this.clientVersion, cause: t });
        if (t)
          throw t;
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function hs({ copyEngine: e = true }, t) {
      let r;
      try {
        r = wt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion });
      } catch (u) {
      }
      e && (r != null && r.startsWith("prisma://")) && It("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = Rt(t.generator), i = !!(r != null && r.startsWith("prisma://") || !e), o = !!t.adapter, s = n === "library", a = n === "binary";
      if (i && o || o) {
        let u;
        throw u = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new Y(u.join(`
`), { clientVersion: t.clientVersion });
      }
      if (i)
        return new er(t);
      throw new Y("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    d();
    c();
    p();
    f();
    m();
    function _r({ generator: e }) {
      var t;
      return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
    }
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var Ps = Ue(Un());
    d();
    c();
    p();
    f();
    m();
    function bs(e, t) {
      let r = xs(e), n = Yl(r), i = Xl(n);
      i ? Fr(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function xs(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? xs(t) : [t]);
    }
    function Yl(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Zl(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function Zl(e, t) {
      return [...new Set(e.concat(t))];
    }
    function Xl(e) {
      return pn(e, (t, r) => {
        let n = ws(t), i = ws(r);
        return n !== i ? n - i : Es(t) - Es(r);
      });
    }
    function ws(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Es(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    d();
    c();
    p();
    f();
    m();
    var le = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    d();
    c();
    p();
    f();
    m();
    var Lr = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(dt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Fr(e, t) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          ec(e, t);
          break;
        case "IncludeOnScalar":
          tc(e, t);
          break;
        case "EmptySelection":
          rc(e, t);
          break;
        case "UnknownSelectionField":
          oc(e, t);
          break;
        case "UnknownArgument":
          sc(e, t);
          break;
        case "UnknownInputField":
          ac(e, t);
          break;
        case "RequiredArgumentMissing":
          uc(e, t);
          break;
        case "InvalidArgumentType":
          lc(e, t);
          break;
        case "InvalidArgumentValue":
          cc(e, t);
          break;
        case "ValueTooLarge":
          pc(e, t);
          break;
        case "SomeFieldsMissing":
          fc(e, t);
          break;
        case "TooManyFieldsGiven":
          mc(e, t);
          break;
        case "Union":
          bs(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function ec(e, t) {
      var n, i, o;
      let r = (n = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : n.asObject();
      r && ((i = r.getField(e.firstField)) == null || i.markAsError(), (o = r.getField(e.secondField)) == null || o.markAsError()), t.addErrorMessage((s) => `Please ${s.bold("either")} use ${s.green(`\`${e.firstField}\``)} or ${s.green(`\`${e.secondField}\``)}, but ${s.red("not both")} at the same time.`);
    }
    function tc(e, t) {
      var s, a;
      let [r, n] = Br(e.selectionPath), i = e.outputType, o = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
      if (o && ((a = o.getField(n)) == null || a.markAsError(), i))
        for (let u of i.fields)
          u.isRelation && o.addSuggestion(new le(u.name, "true"));
      t.addErrorMessage((u) => {
        let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold("include")} statement`;
        return i ? l += ` on model ${u.bold(i.name)}. ${tr(u)}` : l += ".", l += `
Note that ${u.bold("include")} statements only accept relation fields.`, l;
      });
    }
    function rc(e, t) {
      var n, i;
      let r = (n = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : n.asObject();
      if (r) {
        let o = (i = r.getField("omit")) == null ? void 0 : i.value.asObject();
        if (o) {
          nc(e, t, o);
          return;
        }
      }
      ic(e, t);
    }
    function nc(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields)
        r.addSuggestion(new le(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function ic(e, t) {
      var o, s;
      let r = e.outputType, n = (o = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : o.value, i = (s = n == null ? void 0 : n.isEmpty()) != null ? s : false;
      n && (n.removeAllFields(), Cs(n, r)), t.addErrorMessage((a) => i ? `The ${a.red("`select`")} statement for type ${a.bold(r.name)} must not be empty. ${tr(a)}` : `The ${a.red("`select`")} statement for type ${a.bold(r.name)} needs ${a.bold("at least one truthy value")}.`);
    }
    function oc(e, t) {
      var s, a, u, l, g, h, x;
      let [r, n] = Br(e.selectionPath), i = (s = t.arguments.getDeepSubSelectionValue(r)) == null ? void 0 : s.asObject(), o;
      if (i) {
        let S = (a = i.getFieldValue("select")) == null ? void 0 : a.asObject(), C = (u = i.getFieldValue("include")) == null ? void 0 : u.asObject(), A = (l = i.getFieldValue("omit")) == null ? void 0 : l.asObject();
        S != null && S.hasField(n) ? (o = "select", (g = S.getField(n)) == null || g.markAsError(), Cs(S, e.outputType)) : C != null && C.hasField(n) ? (o = "include", (h = C.getField(n)) == null || h.markAsError(), dc(C, e.outputType)) : A != null && A.hasField(n) && (o = "omit", (x = A.getField(n)) == null || x.markAsError(), gc(A, e.outputType));
      }
      t.addErrorMessage((S) => {
        let C = [`Unknown field ${S.red(`\`${n}\``)}`];
        return o && C.push(`for ${S.bold(o)} statement`), C.push(`on model ${S.bold(`\`${e.outputType.name}\``)}.`), C.push(tr(S)), C.join(" ");
      });
    }
    function sc(e, t) {
      var i, o;
      let r = e.argumentPath[0], n = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
      n && ((o = n.getField(r)) == null || o.markAsError(), hc(n, e.arguments)), t.addErrorMessage((s) => vs(s, r, e.arguments.map((a) => a.name)));
    }
    function ac(e, t) {
      var o, s, a;
      let [r, n] = Br(e.argumentPath), i = (o = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : o.asObject();
      if (i) {
        (s = i.getDeepField(e.argumentPath)) == null || s.markAsError();
        let u = (a = i.getDeepFieldValue(r)) == null ? void 0 : a.asObject();
        u && As(u, e.inputType);
      }
      t.addErrorMessage((u) => vs(u, n, e.inputType.fields.map((l) => l.name)));
    }
    function vs(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = wc(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(tr(e)), n.join(" ");
    }
    function uc(e, t) {
      var u, l;
      let r;
      t.addErrorMessage((g) => (r == null ? void 0 : r.value) instanceof z && r.value.text === "null" ? `Argument \`${g.green(o)}\` must not be ${g.red("null")}.` : `Argument \`${g.green(o)}\` is missing.`);
      let n = (u = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : u.asObject();
      if (!n)
        return;
      let [i, o] = Br(e.argumentPath), s = new Lr(), a = (l = n.getDeepFieldValue(i)) == null ? void 0 : l.asObject();
      if (a)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let g of e.inputTypes[0].fields)
            s.addField(g.name, g.typeNames.join(" | "));
          a.addSuggestion(new le(o, s).makeRequired());
        } else {
          let g = e.inputTypes.map(Ts).join(" | ");
          a.addSuggestion(new le(o, g).makeRequired());
        }
    }
    function Ts(e) {
      return e.kind === "list" ? `${Ts(e.elementType)}[]` : e.name;
    }
    function lc(e, t) {
      var i, o;
      let r = e.argument.name, n = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
      n && ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()), t.addErrorMessage((s) => {
        let a = $r("or", e.argument.typeNames.map((u) => s.green(u)));
        return `Argument \`${s.bold(r)}\`: Invalid value provided. Expected ${a}, provided ${s.red(e.inferredType)}.`;
      });
    }
    function cc(e, t) {
      var i, o;
      let r = e.argument.name, n = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
      n && ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()), t.addErrorMessage((s) => {
        let a = [`Invalid value for argument \`${s.bold(r)}\``];
        if (e.underlyingError && a.push(`: ${e.underlyingError}`), a.push("."), e.argument.typeNames.length > 0) {
          let u = $r("or", e.argument.typeNames.map((l) => s.green(l)));
          a.push(` Expected ${u}.`);
        }
        return a.join("");
      });
    }
    function pc(e, t) {
      var o;
      let r = e.argument.name, n = (o = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : o.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath), a = s == null ? void 0 : s.value;
        a == null || a.markAsError(), a instanceof z && (i = a.text);
      }
      t.addErrorMessage((s) => {
        let a = ["Unable to fit value"];
        return i && a.push(s.red(i)), a.push(`into a 64-bit signed integer for field \`${s.bold(r)}\``), a.join(" ");
      });
    }
    function fc(e, t) {
      var i, o;
      let r = e.argumentPath[e.argumentPath.length - 1], n = (i = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : i.asObject();
      if (n) {
        let s = (o = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : o.asObject();
        s && As(s, e.inputType);
      }
      t.addErrorMessage((s) => {
        let a = [`Argument \`${s.bold(r)}\` of type ${s.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? a.push(`${s.green("at least one of")} ${$r("or", e.constraints.requiredFields.map((u) => `\`${s.bold(u)}\``))} arguments.`) : a.push(`${s.green("at least one")} argument.`) : a.push(`${s.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), a.push(tr(s)), a.join(" ");
      });
    }
    function mc(e, t) {
      var o, s;
      let r = e.argumentPath[e.argumentPath.length - 1], n = (o = t.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : o.asObject(), i = [];
      if (n) {
        let a = (s = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : s.asObject();
        a && (a.markAsError(), i = Object.keys(a.getFields()));
      }
      t.addErrorMessage((a) => {
        let u = [`Argument \`${a.bold(r)}\` of type ${a.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? u.push(`${a.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? u.push(`${a.green("at most one")} argument,`) : u.push(`${a.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), u.push(`but you provided ${$r("and", i.map((l) => a.red(l)))}. Please choose`), e.constraints.maxFieldCount === 1 ? u.push("one.") : u.push(`${e.constraints.maxFieldCount}.`), u.join(" ");
      });
    }
    function Cs(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
    }
    function dc(e, t) {
      for (let r of t.fields)
        r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
    }
    function gc(e, t) {
      for (let r of t.fields)
        !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
    }
    function hc(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    function As(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    function Br(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function tr({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function $r(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var yc = 3;
    function wc(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Ps.default)(e, i);
        o > yc || o < r && (r = o, n = i);
      }
      return n;
    }
    function qr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = Sr(e);
      for (let h of t)
        Fr(h, s);
      let a = r === "pretty" ? Ao : Cr, u = s.renderAllMessages(a), l = new ut(0, { colors: a }).write(s).toString(), g = yt({ message: u, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: l });
      throw new Y(g, { clientVersion: o });
    }
    var Ec = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Rs({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: u, previewFeatures: l }) {
      let g = new Vn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: u, previewFeatures: l });
      return { modelName: e, action: Ec[t], query: jn(r, g) };
    }
    function jn({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: Is(r, n), selection: bc(e, t, i, n) };
    }
    function bc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Tc(e, n)) : xc(n, t, r);
    }
    function xc(e, t, r) {
      let n = {};
      return e.model && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && Pc(n, t, e), r && e.isPreviewFeatureOn("omitApi") && vc(n, r, e), n;
    }
    function Pc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && (o == null ? void 0 : o.kind) !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = jn(i, r.nestSelection(n)));
      }
    }
    function vc(e, t, r) {
      let n = r.getComputedFields(), i = rs(t, n);
      for (let [o, s] of Object.entries(i)) {
        let a = r.findField(o);
        n != null && n[o] && !a || (e[o] = !s);
      }
    }
    function Tc(e, t) {
      let r = {}, n = t.getComputedFields(), i = ts(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        n != null && n[o] && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = jn(s, t.nestSelection(o))));
      }
      return r;
    }
    function Ss(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (lt(e)) {
        if (gr(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (mt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Cc(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
      if (Ac(e))
        return e.values;
      if (ft(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Te) {
        if (e !== pr.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Rc(e))
        return e.toJSON();
      if (typeof e == "object")
        return Is(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Is(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = Ss(i, t.nestArgument(n)));
      }
      return r;
    }
    function Cc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        o === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(Ss(o, i));
      }
      return r;
    }
    function Ac(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Rc(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var Vn = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        var r;
        qr({ errors: [t], originalMethod: this.params.originalMethod, args: (r = this.params.rootArgs) != null ? r : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var r;
        return (r = this.model) == null ? void 0 : r.fields.find((n) => n.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    d();
    c();
    p();
    f();
    m();
    var Ds = (e) => ({ command: e });
    d();
    c();
    p();
    f();
    m();
    d();
    c();
    p();
    f();
    m();
    var ks = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    d();
    c();
    p();
    f();
    m();
    function rr(e) {
      try {
        return Os(e, "fast");
      } catch (t) {
        return Os(e, "slow");
      }
    }
    function Os(e, t) {
      return JSON.stringify(e.map((r) => Sc(r, t)));
    }
    function Sc(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : lt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : ye.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : w.Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Ic(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: w.Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Ns(e) : e;
    }
    function Ic(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function Ns(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Ms);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Ms(e[r]);
      return t;
    }
    function Ms(e) {
      return typeof e == "bigint" ? e.toString() : Ns(e);
    }
    var Dc = /^(\s*alter\s)/i;
    var _s = re("prisma:client");
    function Jn(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Dc.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Qn = ({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: rr(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: rr(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, i = { values: rr(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = ks(r), i = { values: rr(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return i != null && i.values ? _s(`prisma.${e}(${n}, ${i.values})`) : _s(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var Fs = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new se(t, r);
    } };
    var Ls = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    d();
    c();
    p();
    f();
    m();
    function Gn(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || (o == null ? void 0 : o.kind) === "itx" ? n != null ? n : n = Bs(r(o)) : Bs(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function Bs(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    d();
    c();
    p();
    f();
    m();
    var $s = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Hn = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        var t, r;
        return (r = (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) != null ? r : $s;
      }
    };
    function qs(e) {
      return e.includes("tracing") ? new Hn() : $s;
    }
    d();
    c();
    p();
    f();
    m();
    function Us(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i == null ? void 0 : i(n);
      } };
    }
    d();
    c();
    p();
    f();
    m();
    var kc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Vs = kc;
    d();
    c();
    p();
    f();
    m();
    function js(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    d();
    c();
    p();
    f();
    m();
    var Ur = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    d();
    c();
    p();
    f();
    m();
    var Qs = Ue(eo());
    d();
    c();
    p();
    f();
    m();
    function Vr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    d();
    c();
    p();
    f();
    m();
    function jr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(jr) : typeof e == "object" ? Oc(e) ? Mc(e) : ot(e, jr) : e;
    }
    function Oc(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Mc({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return w.Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new ye(t);
        case "Json":
          return JSON.parse(t);
        default:
          je(t, "Unknown tagged value");
      }
    }
    d();
    c();
    p();
    f();
    m();
    function Js(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Wn(e.query.arguments)), t.push(Wn(e.query.selection)), t.join("");
    }
    function Wn(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Wn(n)})` : r;
      }).join(" ")})`;
    }
    d();
    c();
    p();
    f();
    m();
    var Nc = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Kn(e) {
      return Nc[e];
    }
    d();
    c();
    p();
    f();
    m();
    var Jr = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var _c = re("prisma:client:request_handler");
    var Qr = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Jr({ batchLoader: zo(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), u = this.client._tracingHelper.getTraceParent(s), l = n.some((h) => Kn(h.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: u, transaction: Fc(o), containsWrite: l, customDataProxyFetch: i })).map((h, x) => {
            if (h instanceof Error)
              return h;
            try {
              return this.mapQueryEngineResult(n[x], h);
            } catch (S) {
              return S;
            }
          });
        }), singleLoader: async (n) => {
          var s;
          let i = ((s = n.transaction) == null ? void 0 : s.kind) === "itx" ? Gs(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Kn(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => {
          var i;
          return (i = n.transaction) != null && i.id ? `transaction-${n.transaction.id}` : Js(n.protocolQuery);
        }, batchOrder(n, i) {
          var o, s;
          return ((o = n.transaction) == null ? void 0 : o.kind) === "batch" && ((s = i.transaction) == null ? void 0 : s.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n == null ? void 0 : n.data, o = n == null ? void 0 : n.elapsed, s = this.unpack(i, t, r);
        return y.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s }) {
        if (_c(t), Lc(t, i) || t instanceof Pe)
          throw t;
        if (t instanceof K && Bc(t)) {
          let u = Hs(t.meta);
          qr({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let a = t.message;
        if (n && (a = yt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new K(a, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new ve(a, this.client._clientVersion);
          if (t instanceof oe)
            throw new oe(a, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof G)
            throw new G(a, this.client._clientVersion);
          if (t instanceof ve)
            throw new ve(a, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Qs.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = jr(Rn(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Fc(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Gs(e) };
        je(e, "Unknown transaction kind");
      }
    }
    function Gs(e) {
      return { id: e.id, payload: e.payload };
    }
    function Lc(e, t) {
      return Vr(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function Bc(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Hs(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Hs) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    d();
    c();
    p();
    f();
    m();
    var Ws = "5.15.1";
    var Ks = Ws;
    d();
    c();
    p();
    f();
    m();
    function zs(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = Ys(t[n]);
        return r;
      });
    }
    function Ys({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return w.Buffer.from(t, "base64");
        case "decimal":
          return new ye(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(Ys);
        default:
          return t;
      }
    }
    d();
    c();
    p();
    f();
    m();
    var ta = Ue(Un());
    d();
    c();
    p();
    f();
    m();
    var J = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    _(J, "PrismaClientConstructorValidationError");
    var Zs = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "__internal"];
    var Xs = ["pretty", "colorless", "minimal"];
    var ea = ["info", "query", "warn", "error"];
    var qc = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new J(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Pt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new J(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new J(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new J(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new J(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new J('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!_r(t).includes("driverAdapters"))
        throw new J('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Rt() === "binary")
        throw new J('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new J(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new J(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Xs.includes(e)) {
          let t = Pt(e, Xs);
          throw new J(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new J(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !ea.includes(r)) {
          let n = Pt(r, ea);
          throw new J(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Pt(i, o);
            throw new J(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new J(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e)
        return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new J(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new J(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new J(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Pt(r, t);
          throw new J(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function ra(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Zs.includes(r)) {
          let i = Pt(r, Zs);
          throw new J(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        qc[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new J('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Pt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Uc(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Uc(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, ta.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    d();
    c();
    p();
    f();
    m();
    function na(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, u = (l) => {
          o || (o = true, r(l));
        };
        for (let l = 0; l < e.length; l++)
          e[l].then((g) => {
            n[l] = g, a();
          }, (g) => {
            if (!Vr(g)) {
              u(g);
              return;
            }
            g.batchRequestIdx === l ? u(g) : (i || (i = g), a());
          });
      });
    }
    var Le = re("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Vc = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var jc = Symbol.for("prisma.client.transaction.id");
    var Jc = { id: 0, nextId() {
      return ++this.id;
    } };
    function sa(e) {
      class t {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Ur();
          this._createPrismaPromise = Gn();
          this.$extends = Vo;
          var u, l, g, h, x, S, C, A, k, O, B, M, I, X;
          e = (g = (l = (u = n == null ? void 0 : n.__internal) == null ? void 0 : u.configOverride) == null ? void 0 : l.call(u, e)) != null ? g : e, os(e), n && ra(n, e);
          let i = n != null && n.adapter ? hn(n.adapter) : void 0, o = new lr().on("error", () => {
          });
          this._extensions = Or.empty(), this._previewFeatures = _r(e), this._clientVersion = (h = e.clientVersion) != null ? h : Ks, this._activeProvider = e.activeProvider, this._tracingHelper = qs(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && At.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && At.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = (x = e.injectableEdgeEnv) == null ? void 0 : x.call(e);
          try {
            let L = n != null ? n : {}, Ye = (S = L.__internal) != null ? S : {}, Be = Ye.debug === true;
            Be && re.enable("prisma:client");
            let fe = At.resolve(e.dirname, e.relativePath);
            bi.existsSync(fe) || (fe = e.dirname), Le("dirname", e.dirname), Le("relativePath", e.relativePath), Le("cwd", fe);
            let $e = Ye.engine || {};
            if (L.errorFormat ? this._errorFormat = L.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: fe, dirname: e.dirname, enableDebugLogs: Be, allowTriggerPanic: $e.allowTriggerPanic, datamodelPath: At.join(e.dirname, (C = e.filename) != null ? C : "schema.prisma"), prismaPath: (A = $e.binaryPath) != null ? A : void 0, engineEndpoint: $e.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: L.log && js(L.log), logQueries: L.log && !!(typeof L.log == "string" ? L.log === "query" : L.log.find((Q) => typeof Q == "string" ? Q === "query" : Q.level === "query")), env: (k = a == null ? void 0 : a.parsed) != null ? k : {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: ss(L, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: (B = (O = L.transactionOptions) == null ? void 0 : O.maxWait) != null ? B : 2e3, timeout: (I = (M = L.transactionOptions) == null ? void 0 : M.timeout) != null ? I : 5e3, isolationLevel: (X = L.transactionOptions) == null ? void 0 : X.isolationLevel }, logEmitter: o, isBundled: e.isBundled, adapter: i }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: wt, getBatchRequestPayload: dr, prismaGraphQLToJSError: $t, PrismaClientUnknownRequestError: oe, PrismaClientInitializationError: G, PrismaClientKnownRequestError: K, debug: re("prisma:client:accelerateEngine"), engineVersion: oa.version, clientVersion: e.clientVersion } }, Le("clientVersion", e.clientVersion), this._engine = hs(e, this._engineConfig), this._requestHandler = new Qr(this, o), L.log)
              for (let Q of L.log) {
                let Re = typeof Q == "string" ? Q : Q.emit === "stdout" ? Q.level : null;
                Re && this.$on(Re, (qe) => {
                  var Ze;
                  it.log(`${(Ze = it.tags[Re]) != null ? Ze : ""}`, qe.message || qe.query);
                });
              }
            this._metrics = new st(this._engine);
          } catch (L) {
            throw L.clientVersion = this._clientVersion, L;
          }
          return this._appliedParent = qt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            ji();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Qn({ clientMethod: i, activeProvider: a }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = ia(n, i);
              return Jn(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new Y("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Jn(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new Y(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ds, callsite: Fe(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Qn({ clientMethod: i, activeProvider: a }), callsite: Fe(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(zs);
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...ia(n, i));
            throw new Y("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Jc.nextId(), s = Us(n.length), a = n.map((u, l) => {
            var x, S, C;
            if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g = (x = i == null ? void 0 : i.isolationLevel) != null ? x : this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: l, isolationLevel: g, lock: s };
            return (C = (S = u.requestTransaction) == null ? void 0 : S.call(u, h)) != null ? C : u;
          });
          return na(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          var l, g, h;
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: (l = i == null ? void 0 : i.maxWait) != null ? l : this._engineConfig.transactionOptions.maxWait, timeout: (g = i == null ? void 0 : i.timeout) != null ? g : this._engineConfig.transactionOptions.timeout, isolationLevel: (h = i == null ? void 0 : i.isolationLevel) != null ? h : this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), u;
          try {
            let x = { kind: "itx", ...a };
            u = await n(this._createItxClient(x)), await this._engine.transaction("commit", o, a);
          } catch (x) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), x;
          }
          return u;
        }
        _createItxClient(n) {
          return qt(ge(Uo(this), [ne("_appliedParent", () => this._appliedParent._createItxClient(n)), ne("_createPrismaPromise", () => Gn(n)), ne(jc, () => n.id), at(Vs)]));
        }
        $transaction(n, i) {
          var a;
          let o;
          typeof n == "function" ? ((a = this._engineConfig.adapter) == null ? void 0 : a.adapterName) === "@prisma/adapter-d1" ? o = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          var l;
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = (l = n.middlewareArgsMapper) != null ? l : Vc, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, u = async (g) => {
            let h = this._middlewares.get(++a);
            if (h)
              return this._tracingHelper.runInChildSpan(s.middleware, (O) => h(g, (B) => (O == null || O.end(), u(B))));
            let { runInTransaction: x, args: S, ...C } = g, A = { ...n, ...C };
            S && (A.args = i.middlewareArgsToRequestArgs(S)), n.transaction !== void 0 && x === false && delete A.transaction;
            let k = await Ko(this, A);
            return A.model ? Qo({ result: k, modelName: A.model, args: A.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : k;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => u(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: u, argsMapper: l, transaction: g, unpacker: h, otelParentCtx: x, customDataProxyFetch: S }) {
          try {
            n = l ? l(n) : n;
            let C = { name: "serialize" }, A = this._tracingHelper.runInChildSpan(C, () => Rs({ modelName: u, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures }));
            return re.enabled("prisma:client") && (Le("Prisma Client call:"), Le(`prisma.${i}(${Do(n)})`), Le("Generated request:"), Le(JSON.stringify(A, null, 2) + `
`)), (g == null ? void 0 : g.kind) === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: A, modelName: u, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: x, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: S });
          } catch (C) {
            throw C.clientVersion = this._clientVersion, C;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new Y("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          var i;
          return !!((i = this._engineConfig.previewFeatures) != null && i.includes(n));
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return t;
    }
    function ia(e, t) {
      return Qc(e) ? [new se(e, t), Fs] : [e, Ls];
    }
    function Qc(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    d();
    c();
    p();
    f();
    m();
    var Gc = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function aa(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Gc.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    d();
    c();
    p();
    f();
    m();
  }
});

// node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "node_modules/.prisma/client/edge.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.15.1",
      engine: "5675a3182f972f1a8f31d16eee6abf4fd54910e3"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name",
      password: "password"
    };
    exports.Prisma.PostScalarFieldEnum = {
      id: "id",
      title: "title",
      content: "content",
      published: "published",
      authorId: "authorId"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Post: "Post"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Shashidhar\\Documents\\code\\devx\\projects\\medium\\backend\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "5.15.1",
      "engineVersion": "5675a3182f972f1a8f31d16eee6abf4fd54910e3",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       String  @id @default(uuid())\n  email    String  @unique\n  name     String?\n  password String\n  posts    Post[]\n}\n\nmodel Post {\n  id        String  @id @default(uuid())\n  title     String\n  content   String\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  String\n}\n',
      "inlineSchemaHash": "c3d11b4d4da5a15df66655e594319a4e2eeeecd6d848b9eebd0305dea0d66ca3",
      "copyEngine": false
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"PostToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient3 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "node_modules/@prisma/client/edge.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: () => Prisma,
      PrismaClient: () => PrismaClient3,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "5675a3182f972f1a8f31d16eee6abf4fd54910e3"
    };
    var version = "5.15.1";
    var clientVersion = version;
    var PrismaClient3 = class {
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    function getExtensionContext(that) {
      return that;
    }
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// .wrangler/tmp/bundle-OhCcoj/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-OhCcoj/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var Context = class {
  req;
  env = {};
  _var;
  finalized = false;
  error = void 0;
  #status = 200;
  #executionCtx;
  #headers = void 0;
  #preparedHeaders = void 0;
  #res;
  #isFresh = true;
  layout = void 0;
  renderer = (content) => this.html(content);
  notFoundHandler = () => new Response();
  constructor(req, options) {
    this.req = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => this.renderer(...args);
  setLayout = (layout) => this.layout = layout;
  getLayout = () => this.layout;
  setRenderer = (renderer) => {
    this.renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this._var ??= {};
    this._var[key] = value;
  };
  get = (key) => {
    return this._var ? this._var[key] : void 0;
  };
  get var() {
    return { ...this._var };
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      if (!(html instanceof Promise)) {
        html = html.toString();
      }
      if (html instanceof Promise) {
        return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
          return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    return this.notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType !== null && contentType.startsWith("multipart/form-data") || contentType !== null && contentType.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecodeURI = (str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
};
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request, path, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res ?? this.notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/routes/user.ts
init_checked_fetch();
init_modules_watch_stub();
var import_edge = __toESM(require_edge3());

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index2 = __toESM(require_default_index(), 1);

// node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_checked_fetch();
init_modules_watch_stub();
function compareSemVer(a, b) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}

// node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        const response = await fetcher(url, options);
        info = {
          cacheStatus: response.headers.get("accelerate-cache-status"),
          lastModified: new Date(response.headers.get("last-modified") ?? ""),
          region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
          requestId: response.headers.get("cf-ray") ?? "unspecified",
          signature: response.headers.get("accelerate-signature") ?? "unspecified"
        };
        machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
        return response;
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info };
    } else {
      return query(rest, __internalParams);
    }
  };
}
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const xclient = client.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}

// node_modules/hono/dist/middleware/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_checked_fetch();
init_modules_watch_stub();
var decodeBase64Url = (str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
};
var encodeBase64Url = (buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m);
var encodeBase64 = (buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var decodeBase64 = (str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
};

// node_modules/hono/dist/utils/jwt/jwa.js
init_checked_fetch();
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/adapter/index.js
init_checked_fetch();
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = () => {
  const global = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
};
var checkUserAgentEquals = (platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
};

// node_modules/hono/dist/utils/jwt/types.js
init_checked_fetch();
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtHeaderInvalid = class extends Error {
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_checked_fetch();
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private") {
      throw new Error(`unexpected non private key: CryptoKey.type is ${key.type}`);
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x, y } = jwk;
  return { kty, alg, e, n, crv, x, y, key_ops: [CryptoKeyUsage.Verify] };
}
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = (part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, "");
var encodeSignaturePart = (buf) => encodeBase64Url(buf).replace(/=/g, "");
var decodeJwtPart = (part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part)));
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
var sign = async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
};
var verify = async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Math.floor(Date.now() / 1e3);
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
};
var decode = (token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch (e) {
    throw new JwtTokenInvalid(token);
  }
};

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/routes/user.ts
var userRouter = new Hono2();
userRouter.post("/signup", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    });
    const token = await sign2({
      id: user.id
    }, c.env.JWT_SECRET);
    return c.json({
      jwt: token
    });
  } catch (e) {
    c.status(411);
    return c.text("Invalid");
  }
});
userRouter.post("/signin", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password
      }
    });
    if (!user) {
      c.status(403);
      return c.json({
        error: "user not found"
      });
    }
    const jwt2 = await sign2({
      id: user.id
    }, c.env.JWT_SECRET);
    return c.json({
      jwt: jwt2,
      message: "Signed in succesfully"
    });
  } catch (e) {
    c.status(411);
    return c.text("invalid");
  }
});

// src/routes/post.ts
init_checked_fetch();
init_modules_watch_stub();
var import_edge2 = __toESM(require_edge3());
var postRouter = new Hono2();
postRouter.use(async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) {
    c.status(401);
    return c.json({
      error: "unauthorized"
    });
  }
  const payload = await verify2(authHeader, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({
      error: "unauthorized"
    });
  }
  c.set("userId", payload.id);
  await next();
});
postRouter.post(async (c) => {
  const userId = c.get("userId");
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const post = prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId
    }
  });
  console.log((await post).id);
  return c.json({
    id: (await post).id
    // ** post.id
  });
});
postRouter.put("/blog", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const post = prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content
    }
  });
  return c.json({
    id: (await post).id
    // ** post.id
  });
});
postRouter.get("/:id", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  const body = await c.req.json();
  try {
    const post = prisma.post.findFirst({
      where: {
        id
      }
    });
    return c.json({
      body
    });
  } catch (e) {
    c.status(411);
    return c.json({
      error: "error while fetching post"
    });
  }
});
postRouter.get("/bulk", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const posts = prisma.post.findMany();
    return c.json({
      posts
    });
  } catch (e) {
    c.status(411);
    return c.json({
      error: "error while fetching posts"
    });
  }
});

// src/index.ts
var app = new Hono2();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", postRouter);
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-OhCcoj/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  ...void 0 ?? [],
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-OhCcoj/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
