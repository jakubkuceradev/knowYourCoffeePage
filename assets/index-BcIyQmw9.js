(function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : l.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = t(l);
        fetch(l.href, o);
    }
})();
function oc(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Ku = { exports: {} },
    tl = {},
    Yu = { exports: {} },
    T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
    ic = Symbol.for("react.portal"),
    uc = Symbol.for("react.fragment"),
    sc = Symbol.for("react.strict_mode"),
    ac = Symbol.for("react.profiler"),
    cc = Symbol.for("react.provider"),
    fc = Symbol.for("react.context"),
    dc = Symbol.for("react.forward_ref"),
    pc = Symbol.for("react.suspense"),
    mc = Symbol.for("react.memo"),
    hc = Symbol.for("react.lazy"),
    Fi = Symbol.iterator;
function vc(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Fi && e[Fi]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Xu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Gu = Object.assign,
    Zu = {};
function it(e, n, t) {
    (this.props = e),
        (this.context = n),
        (this.refs = Zu),
        (this.updater = t || Xu);
}
it.prototype.isReactComponent = {};
it.prototype.setState = function (e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, n, "setState");
};
it.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = it.prototype;
function Bo(e, n, t) {
    (this.props = e),
        (this.context = n),
        (this.refs = Zu),
        (this.updater = t || Xu);
}
var Ho = (Bo.prototype = new Ju());
Ho.constructor = Bo;
Gu(Ho, it.prototype);
Ho.isPureReactComponent = !0;
var Ui = Array.isArray,
    qu = Object.prototype.hasOwnProperty,
    Wo = { current: null },
    bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
    var r,
        l = {},
        o = null,
        i = null;
    if (n != null)
        for (r in (n.ref !== void 0 && (i = n.ref),
        n.key !== void 0 && (o = "" + n.key),
        n))
            qu.call(n, r) && !bu.hasOwnProperty(r) && (l[r] = n[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = t;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Gt,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Wo.current,
    };
}
function yc(e, n) {
    return {
        $$typeof: Gt,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Qo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function gc(e) {
    var n = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (t) {
            return n[t];
        })
    );
}
var $i = /\/+/g;
function kl(e, n) {
    return typeof e == "object" && e !== null && e.key != null
        ? gc("" + e.key)
        : n.toString(36);
}
function Sr(e, n, t, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (o) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Gt:
                    case ic:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === "" ? "." + kl(i, 0) : r),
            Ui(l)
                ? ((t = ""),
                  e != null && (t = e.replace($i, "$&/") + "/"),
                  Sr(l, n, t, "", function (c) {
                      return c;
                  }))
                : l != null &&
                  (Qo(l) &&
                      (l = yc(
                          l,
                          t +
                              (!l.key || (i && i.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace($i, "$&/") + "/") +
                              e
                      )),
                  n.push(l)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), Ui(e)))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + kl(o, u);
            i += Sr(o, n, t, s, l);
        }
    else if (((s = vc(e)), typeof s == "function"))
        for (e = s.call(e), u = 0; !(o = e.next()).done; )
            (o = o.value), (s = r + kl(o, u++)), (i += Sr(o, n, t, s, l));
    else if (o === "object")
        throw (
            ((n = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (n === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : n) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return i;
}
function tr(e, n, t) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        Sr(e, r, "", "", function (o) {
            return n.call(t, o, l++);
        }),
        r
    );
}
function wc(e) {
    if (e._status === -1) {
        var n = e._result;
        (n = n()),
            n.then(
                function (t) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = t));
                },
                function (t) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = t));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = n));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var se = { current: null },
    kr = { transition: null },
    Sc = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: kr,
        ReactCurrentOwner: Wo,
    };
function ns() {
    throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
    map: tr,
    forEach: function (e, n, t) {
        tr(
            e,
            function () {
                n.apply(this, arguments);
            },
            t
        );
    },
    count: function (e) {
        var n = 0;
        return (
            tr(e, function () {
                n++;
            }),
            n
        );
    },
    toArray: function (e) {
        return (
            tr(e, function (n) {
                return n;
            }) || []
        );
    },
    only: function (e) {
        if (!Qo(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
T.Component = it;
T.Fragment = uc;
T.Profiler = ac;
T.PureComponent = Bo;
T.StrictMode = sc;
T.Suspense = pc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
T.act = ns;
T.cloneElement = function (e, n, t) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Gu({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (n != null) {
        if (
            (n.ref !== void 0 && ((o = n.ref), (i = Wo.current)),
            n.key !== void 0 && (l = "" + n.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (s in n)
            qu.call(n, s) &&
                !bu.hasOwnProperty(s) &&
                (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = t;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
    }
    return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
    return (
        (e = {
            $$typeof: fc,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: cc, _context: e }),
        (e.Consumer = e)
    );
};
T.createElement = es;
T.createFactory = function (e) {
    var n = es.bind(null, e);
    return (n.type = e), n;
};
T.createRef = function () {
    return { current: null };
};
T.forwardRef = function (e) {
    return { $$typeof: dc, render: e };
};
T.isValidElement = Qo;
T.lazy = function (e) {
    return { $$typeof: hc, _payload: { _status: -1, _result: e }, _init: wc };
};
T.memo = function (e, n) {
    return { $$typeof: mc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
    var n = kr.transition;
    kr.transition = {};
    try {
        e();
    } finally {
        kr.transition = n;
    }
};
T.unstable_act = ns;
T.useCallback = function (e, n) {
    return se.current.useCallback(e, n);
};
T.useContext = function (e) {
    return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
    return se.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
    return se.current.useEffect(e, n);
};
T.useId = function () {
    return se.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
    return se.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
    return se.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
    return se.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
    return se.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
    return se.current.useReducer(e, n, t);
};
T.useRef = function (e) {
    return se.current.useRef(e);
};
T.useState = function (e) {
    return se.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
    return se.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
    return se.current.useTransition();
};
T.version = "18.3.1";
Yu.exports = T;
var je = Yu.exports;
const kc = oc(je);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ec = je,
    xc = Symbol.for("react.element"),
    Cc = Symbol.for("react.fragment"),
    _c = Object.prototype.hasOwnProperty,
    Nc =
        Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, n, t) {
    var r,
        l = {},
        o = null,
        i = null;
    t !== void 0 && (o = "" + t),
        n.key !== void 0 && (o = "" + n.key),
        n.ref !== void 0 && (i = n.ref);
    for (r in n) _c.call(n, r) && !Pc.hasOwnProperty(r) && (l[r] = n[r]);
    if (e && e.defaultProps)
        for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
    return {
        $$typeof: xc,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Nc.current,
    };
}
tl.Fragment = Cc;
tl.jsx = ts;
tl.jsxs = ts;
Ku.exports = tl;
var P = Ku.exports,
    Xl = {},
    rs = { exports: {} },
    we = {},
    ls = { exports: {} },
    os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function n(x, z) {
        var L = x.length;
        x.push(z);
        e: for (; 0 < L; ) {
            var W = (L - 1) >>> 1,
                G = x[W];
            if (0 < l(G, z)) (x[W] = z), (x[L] = G), (L = W);
            else break e;
        }
    }
    function t(x) {
        return x.length === 0 ? null : x[0];
    }
    function r(x) {
        if (x.length === 0) return null;
        var z = x[0],
            L = x.pop();
        if (L !== z) {
            x[0] = L;
            e: for (var W = 0, G = x.length, er = G >>> 1; W < er; ) {
                var gn = 2 * (W + 1) - 1,
                    Sl = x[gn],
                    wn = gn + 1,
                    nr = x[wn];
                if (0 > l(Sl, L))
                    wn < G && 0 > l(nr, Sl)
                        ? ((x[W] = nr), (x[wn] = L), (W = wn))
                        : ((x[W] = Sl), (x[gn] = L), (W = gn));
                else if (wn < G && 0 > l(nr, L))
                    (x[W] = nr), (x[wn] = L), (W = wn);
                else break e;
            }
        }
        return z;
    }
    function l(x, z) {
        var L = x.sortIndex - z.sortIndex;
        return L !== 0 ? L : x.id - z.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function () {
            return i.now() - u;
        };
    }
    var s = [],
        c = [],
        h = 1,
        m = null,
        p = 3,
        g = !1,
        w = !1,
        S = !1,
        O = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(x) {
        for (var z = t(c); z !== null; ) {
            if (z.callback === null) r(c);
            else if (z.startTime <= x)
                r(c), (z.sortIndex = z.expirationTime), n(s, z);
            else break;
            z = t(c);
        }
    }
    function v(x) {
        if (((S = !1), d(x), !w))
            if (t(s) !== null) (w = !0), gl(E);
            else {
                var z = t(c);
                z !== null && wl(v, z.startTime - x);
            }
    }
    function E(x, z) {
        (w = !1), S && ((S = !1), f(N), (N = -1)), (g = !0);
        var L = p;
        try {
            for (
                d(z), m = t(s);
                m !== null && (!(m.expirationTime > z) || (x && !Pe()));

            ) {
                var W = m.callback;
                if (typeof W == "function") {
                    (m.callback = null), (p = m.priorityLevel);
                    var G = W(m.expirationTime <= z);
                    (z = e.unstable_now()),
                        typeof G == "function"
                            ? (m.callback = G)
                            : m === t(s) && r(s),
                        d(z);
                } else r(s);
                m = t(s);
            }
            if (m !== null) var er = !0;
            else {
                var gn = t(c);
                gn !== null && wl(v, gn.startTime - z), (er = !1);
            }
            return er;
        } finally {
            (m = null), (p = L), (g = !1);
        }
    }
    var C = !1,
        _ = null,
        N = -1,
        H = 5,
        R = -1;
    function Pe() {
        return !(e.unstable_now() - R < H);
    }
    function at() {
        if (_ !== null) {
            var x = e.unstable_now();
            R = x;
            var z = !0;
            try {
                z = _(!0, x);
            } finally {
                z ? ct() : ((C = !1), (_ = null));
            }
        } else C = !1;
    }
    var ct;
    if (typeof a == "function")
        ct = function () {
            a(at);
        };
    else if (typeof MessageChannel < "u") {
        var Ii = new MessageChannel(),
            lc = Ii.port2;
        (Ii.port1.onmessage = at),
            (ct = function () {
                lc.postMessage(null);
            });
    } else
        ct = function () {
            O(at, 0);
        };
    function gl(x) {
        (_ = x), C || ((C = !0), ct());
    }
    function wl(x, z) {
        N = O(function () {
            x(e.unstable_now());
        }, z);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (x) {
            x.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || g || ((w = !0), gl(E));
        }),
        (e.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (H = 0 < x ? Math.floor(1e3 / x) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return t(s);
        }),
        (e.unstable_next = function (x) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var z = 3;
                    break;
                default:
                    z = p;
            }
            var L = p;
            p = z;
            try {
                return x();
            } finally {
                p = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (x, z) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    x = 3;
            }
            var L = p;
            p = x;
            try {
                return z();
            } finally {
                p = L;
            }
        }),
        (e.unstable_scheduleCallback = function (x, z, L) {
            var W = e.unstable_now();
            switch (
                (typeof L == "object" && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == "number" && 0 < L ? W + L : W))
                    : (L = W),
                x)
            ) {
                case 1:
                    var G = -1;
                    break;
                case 2:
                    G = 250;
                    break;
                case 5:
                    G = 1073741823;
                    break;
                case 4:
                    G = 1e4;
                    break;
                default:
                    G = 5e3;
            }
            return (
                (G = L + G),
                (x = {
                    id: h++,
                    callback: z,
                    priorityLevel: x,
                    startTime: L,
                    expirationTime: G,
                    sortIndex: -1,
                }),
                L > W
                    ? ((x.sortIndex = L),
                      n(c, x),
                      t(s) === null &&
                          x === t(c) &&
                          (S ? (f(N), (N = -1)) : (S = !0), wl(v, L - W)))
                    : ((x.sortIndex = G), n(s, x), w || g || ((w = !0), gl(E))),
                x
            );
        }),
        (e.unstable_shouldYield = Pe),
        (e.unstable_wrapCallback = function (x) {
            var z = p;
            return function () {
                var L = p;
                p = z;
                try {
                    return x.apply(this, arguments);
                } finally {
                    p = L;
                }
            };
        });
})(os);
ls.exports = os;
var zc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lc = je,
    ge = zc;
function y(e) {
    for (
        var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            t = 1;
        t < arguments.length;
        t++
    )
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var is = new Set(),
    jt = {};
function jn(e, n) {
    bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
    for (jt[e] = n, e = 0; e < n.length; e++) is.add(n[e]);
}
var Ke = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Gl = Object.prototype.hasOwnProperty,
    Tc =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vi = {},
    Ai = {};
function Rc(e) {
    return Gl.call(Ai, e)
        ? !0
        : Gl.call(Vi, e)
        ? !1
        : Tc.test(e)
        ? (Ai[e] = !0)
        : ((Vi[e] = !0), !1);
}
function jc(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : t !== null
                ? !t.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Dc(e, n, t, r) {
    if (n === null || typeof n > "u" || jc(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
        switch (t.type) {
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
    return !1;
}
function ae(e, n, t, r, l, o, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = o),
        (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ne[e] = new ae(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var n = e[0];
    ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ko = /[\-:]([a-z])/g;
function Yo(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Ko, Yo);
        ne[n] = new ae(n, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Ko, Yo);
        ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(Ko, Yo);
    ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xo(e, n, t, r) {
    var l = ne.hasOwnProperty(n) ? ne[n] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
        (Dc(n, t, l, r) && (t = null),
        r || l === null
            ? Rc(n) &&
              (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
            : l.mustUseProperty
            ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
            : ((n = l.attributeName),
              (r = l.attributeNamespace),
              t === null
                  ? e.removeAttribute(n)
                  : ((l = l.type),
                    (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ze = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rr = Symbol.for("react.element"),
    Mn = Symbol.for("react.portal"),
    In = Symbol.for("react.fragment"),
    Go = Symbol.for("react.strict_mode"),
    Zl = Symbol.for("react.profiler"),
    us = Symbol.for("react.provider"),
    ss = Symbol.for("react.context"),
    Zo = Symbol.for("react.forward_ref"),
    Jl = Symbol.for("react.suspense"),
    ql = Symbol.for("react.suspense_list"),
    Jo = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    as = Symbol.for("react.offscreen"),
    Bi = Symbol.iterator;
function ft(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Bi && e[Bi]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var A = Object.assign,
    El;
function wt(e) {
    if (El === void 0)
        try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            El = (n && n[1]) || "";
        }
    return (
        `
` +
        El +
        e
    );
}
var xl = !1;
function Cl(e, n) {
    if (!e || xl) return "";
    xl = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (
                ((n = function () {
                    throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(n, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (c) {
                    r = c;
                }
                e.call(n.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var l = c.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = l.length - 1,
                    u = o.length - 1;
                1 <= i && 0 <= u && l[i] !== o[u];

            )
                u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if ((i--, u--, 0 > u || l[i] !== o[u])) {
                                var s =
                                    `
` + l[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        s.includes("<anonymous>") &&
                                        (s = s.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= i && 0 <= u);
                    break;
                }
        }
    } finally {
        (xl = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Oc(e) {
    switch (e.tag) {
        case 5:
            return wt(e.type);
        case 16:
            return wt("Lazy");
        case 13:
            return wt("Suspense");
        case 19:
            return wt("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Cl(e.type, !1)), e;
        case 11:
            return (e = Cl(e.type.render, !1)), e;
        case 1:
            return (e = Cl(e.type, !0)), e;
        default:
            return "";
    }
}
function bl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case In:
            return "Fragment";
        case Mn:
            return "Portal";
        case Zl:
            return "Profiler";
        case Go:
            return "StrictMode";
        case Jl:
            return "Suspense";
        case ql:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case ss:
                return (e.displayName || "Context") + ".Consumer";
            case us:
                return (e._context.displayName || "Context") + ".Provider";
            case Zo:
                var n = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = n.displayName || n.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Jo:
                return (
                    (n = e.displayName || null),
                    n !== null ? n : bl(e.type) || "Memo"
                );
            case qe:
                (n = e._payload), (e = e._init);
                try {
                    return bl(e(n));
                } catch {}
        }
    return null;
}
function Mc(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = n.render),
                (e = e.displayName || e.name || ""),
                n.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return bl(n);
        case 8:
            return n === Go ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n;
    }
    return null;
}
function pn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function cs(e) {
    var n = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (n === "checkbox" || n === "radio")
    );
}
function Ic(e) {
    var n = cs(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (
        !e.hasOwnProperty(n) &&
        typeof t < "u" &&
        typeof t.get == "function" &&
        typeof t.set == "function"
    ) {
        var l = t.get,
            o = t.set;
        return (
            Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (i) {
                    (r = "" + i), o.call(this, i);
                },
            }),
            Object.defineProperty(e, n, { enumerable: t.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = "" + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[n];
                },
            }
        );
    }
}
function lr(e) {
    e._valueTracker || (e._valueTracker = Ic(e));
}
function fs(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return (
        e && (r = cs(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== t ? (n.setValue(e), !0) : !1
    );
}
function jr(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function eo(e, n) {
    var t = n.checked;
    return A({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked,
    });
}
function Hi(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    (t = pn(n.value != null ? n.value : t)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled:
                n.type === "checkbox" || n.type === "radio"
                    ? n.checked != null
                    : n.value != null,
        });
}
function ds(e, n) {
    (n = n.checked), n != null && Xo(e, "checked", n, !1);
}
function no(e, n) {
    ds(e, n);
    var t = pn(n.value),
        r = n.type;
    if (t != null)
        r === "number"
            ? ((t === 0 && e.value === "") || e.value != t) &&
              (e.value = "" + t)
            : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    n.hasOwnProperty("value")
        ? to(e, n.type, t)
        : n.hasOwnProperty("defaultValue") && to(e, n.type, pn(n.defaultValue)),
        n.checked == null &&
            n.defaultChecked != null &&
            (e.defaultChecked = !!n.defaultChecked);
}
function Wi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (n.value !== void 0 && n.value !== null)
            )
        )
            return;
        (n = "" + e._wrapperState.initialValue),
            t || n === e.value || (e.value = n),
            (e.defaultValue = n);
    }
    (t = e.name),
        t !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        t !== "" && (e.name = t);
}
function to(e, n, t) {
    (n !== "number" || jr(e.ownerDocument) !== e) &&
        (t == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Yn(e, n, t, r) {
    if (((e = e.options), n)) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++)
            (l = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== l && (e[t].selected = l),
                l && r && (e[t].defaultSelected = !0);
    } else {
        for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
            if (e[l].value === t) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            n !== null || e[l].disabled || (n = e[l]);
        }
        n !== null && (n.selected = !0);
    }
}
function ro(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
    return A({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Qi(e, n) {
    var t = n.value;
    if (t == null) {
        if (((t = n.children), (n = n.defaultValue), t != null)) {
            if (n != null) throw Error(y(92));
            if (St(t)) {
                if (1 < t.length) throw Error(y(93));
                t = t[0];
            }
            n = t;
        }
        n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: pn(t) };
}
function ps(e, n) {
    var t = pn(n.value),
        r = pn(n.defaultValue);
    t != null &&
        ((t = "" + t),
        t !== e.value && (e.value = t),
        n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
        r != null && (e.defaultValue = "" + r);
}
function Ki(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
        n !== "" &&
        n !== null &&
        (e.value = n);
}
function ms(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function lo(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ms(n)
        : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var or,
    hs = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (n, t, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(n, t, r, l);
                  });
              }
            : e;
    })(function (e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = n;
        else {
            for (
                or = or || document.createElement("div"),
                    or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = or.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
    });
function Dt(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return;
        }
    }
    e.textContent = n;
}
var xt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function (e) {
    Fc.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
    });
});
function vs(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
        ? ""
        : t ||
          typeof n != "number" ||
          n === 0 ||
          (xt.hasOwnProperty(e) && xt[e])
        ? ("" + n).trim()
        : n + "px";
}
function ys(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                l = vs(t, n[t], r);
            t === "float" && (t = "cssFloat"),
                r ? e.setProperty(t, l) : (e[t] = l);
        }
}
var Uc = A(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function oo(e, n) {
    if (n) {
        if (Uc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(y(60));
            if (
                typeof n.dangerouslySetInnerHTML != "object" ||
                !("__html" in n.dangerouslySetInnerHTML)
            )
                throw Error(y(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(y(62));
    }
}
function io(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var uo = null;
function qo(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var so = null,
    Xn = null,
    Gn = null;
function Yi(e) {
    if ((e = qt(e))) {
        if (typeof so != "function") throw Error(y(280));
        var n = e.stateNode;
        n && ((n = ul(n)), so(e.stateNode, e.type, n));
    }
}
function gs(e) {
    Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function ws() {
    if (Xn) {
        var e = Xn,
            n = Gn;
        if (((Gn = Xn = null), Yi(e), n))
            for (e = 0; e < n.length; e++) Yi(n[e]);
    }
}
function Ss(e, n) {
    return e(n);
}
function ks() {}
var _l = !1;
function Es(e, n, t) {
    if (_l) return e(n, t);
    _l = !0;
    try {
        return Ss(e, n, t);
    } finally {
        (_l = !1), (Xn !== null || Gn !== null) && (ks(), ws());
    }
}
function Ot(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = ul(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(y(231, n, typeof t));
    return t;
}
var ao = !1;
if (Ke)
    try {
        var dt = {};
        Object.defineProperty(dt, "passive", {
            get: function () {
                ao = !0;
            },
        }),
            window.addEventListener("test", dt, dt),
            window.removeEventListener("test", dt, dt);
    } catch {
        ao = !1;
    }
function $c(e, n, t, r, l, o, i, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, c);
    } catch (h) {
        this.onError(h);
    }
}
var Ct = !1,
    Dr = null,
    Or = !1,
    co = null,
    Vc = {
        onError: function (e) {
            (Ct = !0), (Dr = e);
        },
    };
function Ac(e, n, t, r, l, o, i, u, s) {
    (Ct = !1), (Dr = null), $c.apply(Vc, arguments);
}
function Bc(e, n, t, r, l, o, i, u, s) {
    if ((Ac.apply(this, arguments), Ct)) {
        if (Ct) {
            var c = Dr;
            (Ct = !1), (Dr = null);
        } else throw Error(y(198));
        Or || ((Or = !0), (co = c));
    }
}
function Dn(e) {
    var n = e,
        t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
        e = n;
        do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
        while (e);
    }
    return n.tag === 3 ? t : null;
}
function xs(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (
            (n === null &&
                ((e = e.alternate), e !== null && (n = e.memoizedState)),
            n !== null)
        )
            return n.dehydrated;
    }
    return null;
}
function Xi(e) {
    if (Dn(e) !== e) throw Error(y(188));
}
function Hc(e) {
    var n = e.alternate;
    if (!n) {
        if (((n = Dn(e)), n === null)) throw Error(y(188));
        return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
        var l = t.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                t = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === t) return Xi(l), e;
                if (o === r) return Xi(l), n;
                o = o.sibling;
            }
            throw Error(y(188));
        }
        if (t.return !== r.return) (t = l), (r = o);
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === t) {
                    (i = !0), (t = l), (r = o);
                    break;
                }
                if (u === r) {
                    (i = !0), (r = l), (t = o);
                    break;
                }
                u = u.sibling;
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === t) {
                        (i = !0), (t = o), (r = l);
                        break;
                    }
                    if (u === r) {
                        (i = !0), (r = o), (t = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) throw Error(y(189));
            }
        }
        if (t.alternate !== r) throw Error(y(190));
    }
    if (t.tag !== 3) throw Error(y(188));
    return t.stateNode.current === t ? e : n;
}
function Cs(e) {
    return (e = Hc(e)), e !== null ? _s(e) : null;
}
function _s(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var n = _s(e);
        if (n !== null) return n;
        e = e.sibling;
    }
    return null;
}
var Ns = ge.unstable_scheduleCallback,
    Gi = ge.unstable_cancelCallback,
    Wc = ge.unstable_shouldYield,
    Qc = ge.unstable_requestPaint,
    Q = ge.unstable_now,
    Kc = ge.unstable_getCurrentPriorityLevel,
    bo = ge.unstable_ImmediatePriority,
    Ps = ge.unstable_UserBlockingPriority,
    Mr = ge.unstable_NormalPriority,
    Yc = ge.unstable_LowPriority,
    zs = ge.unstable_IdlePriority,
    rl = null,
    $e = null;
function Xc(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function")
        try {
            $e.onCommitFiberRoot(
                rl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var De = Math.clz32 ? Math.clz32 : Jc,
    Gc = Math.log,
    Zc = Math.LN2;
function Jc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Gc(e) / Zc) | 0)) | 0;
}
var ir = 64,
    ur = 4194304;
function kt(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Ir(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = t & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? (r = kt(u)) : ((o &= i), o !== 0 && (r = kt(o)));
    } else (i = t & ~l), i !== 0 ? (r = kt(i)) : o !== 0 && (r = kt(o));
    if (r === 0) return 0;
    if (
        n !== 0 &&
        n !== r &&
        !(n & l) &&
        ((l = r & -r),
        (o = n & -n),
        l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
        for (e = e.entanglements, n &= r; 0 < n; )
            (t = 31 - De(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
}
function qc(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function bc(e, n) {
    for (
        var t = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - De(o),
            u = 1 << i,
            s = l[i];
        s === -1
            ? (!(u & t) || u & r) && (l[i] = qc(u, n))
            : s <= n && (e.expiredLanes |= u),
            (o &= ~u);
    }
}
function fo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ls() {
    var e = ir;
    return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
}
function Zt(e, n, t) {
    (e.pendingLanes |= n),
        n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (n = 31 - De(n)),
        (e[n] = t);
}
function ef(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= n),
        (e.mutableReadLanes &= n),
        (e.entangledLanes &= n),
        (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
        var l = 31 - De(t),
            o = 1 << l;
        (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
    }
}
function ei(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
        var r = 31 - De(t),
            l = 1 << r;
        (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
}
var D = 0;
function Ts(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Rs,
    ni,
    js,
    Ds,
    Os,
    po = !1,
    sr = [],
    ln = null,
    on = null,
    un = null,
    Mt = new Map(),
    It = new Map(),
    en = [],
    nf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Zi(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            ln = null;
            break;
        case "dragenter":
        case "dragleave":
            on = null;
            break;
        case "mouseover":
        case "mouseout":
            un = null;
            break;
        case "pointerover":
        case "pointerout":
            Mt.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            It.delete(n.pointerId);
    }
}
function pt(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: n,
              domEventName: t,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          n !== null && ((n = qt(n)), n !== null && ni(n)),
          e)
        : ((e.eventSystemFlags |= r),
          (n = e.targetContainers),
          l !== null && n.indexOf(l) === -1 && n.push(l),
          e);
}
function tf(e, n, t, r, l) {
    switch (n) {
        case "focusin":
            return (ln = pt(ln, e, n, t, r, l)), !0;
        case "dragenter":
            return (on = pt(on, e, n, t, r, l)), !0;
        case "mouseover":
            return (un = pt(un, e, n, t, r, l)), !0;
        case "pointerover":
            var o = l.pointerId;
            return Mt.set(o, pt(Mt.get(o) || null, e, n, t, r, l)), !0;
        case "gotpointercapture":
            return (
                (o = l.pointerId),
                It.set(o, pt(It.get(o) || null, e, n, t, r, l)),
                !0
            );
    }
    return !1;
}
function Ms(e) {
    var n = En(e.target);
    if (n !== null) {
        var t = Dn(n);
        if (t !== null) {
            if (((n = t.tag), n === 13)) {
                if (((n = xs(t)), n !== null)) {
                    (e.blockedOn = n),
                        Os(e.priority, function () {
                            js(t);
                        });
                    return;
                }
            } else if (
                n === 3 &&
                t.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Er(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
        var t = mo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            (uo = r), t.target.dispatchEvent(r), (uo = null);
        } else return (n = qt(t)), n !== null && ni(n), (e.blockedOn = t), !1;
        n.shift();
    }
    return !0;
}
function Ji(e, n, t) {
    Er(e) && t.delete(n);
}
function rf() {
    (po = !1),
        ln !== null && Er(ln) && (ln = null),
        on !== null && Er(on) && (on = null),
        un !== null && Er(un) && (un = null),
        Mt.forEach(Ji),
        It.forEach(Ji);
}
function mt(e, n) {
    e.blockedOn === n &&
        ((e.blockedOn = null),
        po ||
            ((po = !0),
            ge.unstable_scheduleCallback(ge.unstable_NormalPriority, rf)));
}
function Ft(e) {
    function n(l) {
        return mt(l, e);
    }
    if (0 < sr.length) {
        mt(sr[0], e);
        for (var t = 1; t < sr.length; t++) {
            var r = sr[t];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        ln !== null && mt(ln, e),
            on !== null && mt(on, e),
            un !== null && mt(un, e),
            Mt.forEach(n),
            It.forEach(n),
            t = 0;
        t < en.length;
        t++
    )
        (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
        Ms(t), t.blockedOn === null && en.shift();
}
var Zn = Ze.ReactCurrentBatchConfig,
    Fr = !0;
function lf(e, n, t, r) {
    var l = D,
        o = Zn.transition;
    Zn.transition = null;
    try {
        (D = 1), ti(e, n, t, r);
    } finally {
        (D = l), (Zn.transition = o);
    }
}
function of(e, n, t, r) {
    var l = D,
        o = Zn.transition;
    Zn.transition = null;
    try {
        (D = 4), ti(e, n, t, r);
    } finally {
        (D = l), (Zn.transition = o);
    }
}
function ti(e, n, t, r) {
    if (Fr) {
        var l = mo(e, n, t, r);
        if (l === null) Il(e, n, r, Ur, t), Zi(e, r);
        else if (tf(l, e, n, t, r)) r.stopPropagation();
        else if ((Zi(e, r), n & 4 && -1 < nf.indexOf(e))) {
            for (; l !== null; ) {
                var o = qt(l);
                if (
                    (o !== null && Rs(o),
                    (o = mo(e, n, t, r)),
                    o === null && Il(e, n, r, Ur, t),
                    o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else Il(e, n, r, null, t);
    }
}
var Ur = null;
function mo(e, n, t, r) {
    if (((Ur = null), (e = qo(r)), (e = En(e)), e !== null))
        if (((n = Dn(e)), n === null)) e = null;
        else if (((t = n.tag), t === 13)) {
            if (((e = xs(n)), e !== null)) return e;
            e = null;
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated)
                return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
        } else n !== e && (e = null);
    return (Ur = e), null;
}
function Is(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Kc()) {
                case bo:
                    return 1;
                case Ps:
                    return 4;
                case Mr:
                case Yc:
                    return 16;
                case zs:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var tn = null,
    ri = null,
    xr = null;
function Fs() {
    if (xr) return xr;
    var e,
        n = ri,
        t = n.length,
        r,
        l = "value" in tn ? tn.value : tn.textContent,
        o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
    return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
    var n = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
            : (e = n),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function ar() {
    return !0;
}
function qi() {
    return !1;
}
function Se(e) {
    function n(t, r, l, o, i) {
        (this._reactName = t),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? ar
                : qi),
            (this.isPropagationStopped = qi),
            this
        );
    }
    return (
        A(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                    (t.preventDefault
                        ? t.preventDefault()
                        : typeof t.returnValue != "unknown" &&
                          (t.returnValue = !1),
                    (this.isDefaultPrevented = ar));
            },
            stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                    (t.stopPropagation
                        ? t.stopPropagation()
                        : typeof t.cancelBubble != "unknown" &&
                          (t.cancelBubble = !0),
                    (this.isPropagationStopped = ar));
            },
            persist: function () {},
            isPersistent: ar,
        }),
        n
    );
}
var ut = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    li = Se(ut),
    Jt = A({}, ut, { view: 0, detail: 0 }),
    uf = Se(Jt),
    Pl,
    zl,
    ht,
    ll = A({}, Jt, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: oi,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== ht &&
                      (ht && e.type === "mousemove"
                          ? ((Pl = e.screenX - ht.screenX),
                            (zl = e.screenY - ht.screenY))
                          : (zl = Pl = 0),
                      (ht = e)),
                  Pl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : zl;
        },
    }),
    bi = Se(ll),
    sf = A({}, ll, { dataTransfer: 0 }),
    af = Se(sf),
    cf = A({}, Jt, { relatedTarget: 0 }),
    Ll = Se(cf),
    ff = A({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    df = Se(ff),
    pf = A({}, ut, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    mf = Se(pf),
    hf = A({}, ut, { data: 0 }),
    eu = Se(hf),
    vf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    yf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    gf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function wf(e) {
    var n = this.nativeEvent;
    return n.getModifierState
        ? n.getModifierState(e)
        : (e = gf[e])
        ? !!n[e]
        : !1;
}
function oi() {
    return wf;
}
var Sf = A({}, Jt, {
        key: function (e) {
            if (e.key) {
                var n = vf[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress"
                ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? yf[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: oi,
        charCode: function (e) {
            return e.type === "keypress" ? Cr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Cr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    kf = Se(Sf),
    Ef = A({}, ll, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    nu = Se(Ef),
    xf = A({}, Jt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: oi,
    }),
    Cf = Se(xf),
    _f = A({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nf = Se(_f),
    Pf = A({}, ll, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    zf = Se(Pf),
    Lf = [9, 13, 27, 32],
    ii = Ke && "CompositionEvent" in window,
    _t = null;
Ke && "documentMode" in document && (_t = document.documentMode);
var Tf = Ke && "TextEvent" in window && !_t,
    Us = Ke && (!ii || (_t && 8 < _t && 11 >= _t)),
    tu = " ",
    ru = !1;
function $s(e, n) {
    switch (e) {
        case "keyup":
            return Lf.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Vs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Rf(e, n) {
    switch (e) {
        case "compositionend":
            return Vs(n);
        case "keypress":
            return n.which !== 32 ? null : ((ru = !0), tu);
        case "textInput":
            return (e = n.data), e === tu && ru ? null : e;
        default:
            return null;
    }
}
function jf(e, n) {
    if (Fn)
        return e === "compositionend" || (!ii && $s(e, n))
            ? ((e = Fs()), (xr = ri = tn = null), (Fn = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(n.ctrlKey || n.altKey || n.metaKey) ||
                (n.ctrlKey && n.altKey)
            ) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which);
            }
            return null;
        case "compositionend":
            return Us && n.locale !== "ko" ? null : n.data;
        default:
            return null;
    }
}
var Df = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function lu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Df[e.type] : n === "textarea";
}
function As(e, n, t, r) {
    gs(r),
        (n = $r(n, "onChange")),
        0 < n.length &&
            ((t = new li("onChange", "change", null, t, r)),
            e.push({ event: t, listeners: n }));
}
var Nt = null,
    Ut = null;
function Of(e) {
    qs(e, 0);
}
function ol(e) {
    var n = Vn(e);
    if (fs(n)) return e;
}
function Mf(e, n) {
    if (e === "change") return n;
}
var Bs = !1;
if (Ke) {
    var Tl;
    if (Ke) {
        var Rl = "oninput" in document;
        if (!Rl) {
            var ou = document.createElement("div");
            ou.setAttribute("oninput", "return;"),
                (Rl = typeof ou.oninput == "function");
        }
        Tl = Rl;
    } else Tl = !1;
    Bs = Tl && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
    Nt && (Nt.detachEvent("onpropertychange", Hs), (Ut = Nt = null));
}
function Hs(e) {
    if (e.propertyName === "value" && ol(Ut)) {
        var n = [];
        As(n, Ut, e, qo(e)), Es(Of, n);
    }
}
function If(e, n, t) {
    e === "focusin"
        ? (iu(), (Nt = n), (Ut = t), Nt.attachEvent("onpropertychange", Hs))
        : e === "focusout" && iu();
}
function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ol(Ut);
}
function Uf(e, n) {
    if (e === "click") return ol(n);
}
function $f(e, n) {
    if (e === "input" || e === "change") return ol(n);
}
function Vf(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Me = typeof Object.is == "function" ? Object.is : Vf;
function $t(e, n) {
    if (Me(e, n)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof n != "object" ||
        n === null
    )
        return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
        var l = t[r];
        if (!Gl.call(n, l) || !Me(e[l], n[l])) return !1;
    }
    return !0;
}
function uu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function su(e, n) {
    var t = uu(e);
    e = 0;
    for (var r; t; ) {
        if (t.nodeType === 3) {
            if (((r = e + t.textContent.length), e <= n && r >= n))
                return { node: t, offset: n - e };
            e = r;
        }
        e: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e;
                }
                t = t.parentNode;
            }
            t = void 0;
        }
        t = uu(t);
    }
}
function Ws(e, n) {
    return e && n
        ? e === n
            ? !0
            : e && e.nodeType === 3
            ? !1
            : n && n.nodeType === 3
            ? Ws(e, n.parentNode)
            : "contains" in e
            ? e.contains(n)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(n) & 16)
            : !1
        : !1;
}
function Qs() {
    for (var e = window, n = jr(); n instanceof e.HTMLIFrameElement; ) {
        try {
            var t = typeof n.contentWindow.location.href == "string";
        } catch {
            t = !1;
        }
        if (t) e = n.contentWindow;
        else break;
        n = jr(e.document);
    }
    return n;
}
function ui(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        n &&
        ((n === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            n === "textarea" ||
            e.contentEditable === "true")
    );
}
function Af(e) {
    var n = Qs(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (
        n !== t &&
        t &&
        t.ownerDocument &&
        Ws(t.ownerDocument.documentElement, t)
    ) {
        if (r !== null && ui(t)) {
            if (
                ((n = r.start),
                (e = r.end),
                e === void 0 && (e = n),
                "selectionStart" in t)
            )
                (t.selectionStart = n),
                    (t.selectionEnd = Math.min(e, t.value.length));
            else if (
                ((e =
                    ((n = t.ownerDocument || document) && n.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = t.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = su(t, o));
                var i = su(t, r);
                l &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((n = n.createRange()),
                    n.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(n), e.extend(i.node, i.offset))
                        : (n.setEnd(i.node, i.offset), e.addRange(n)));
            }
        }
        for (n = [], e = t; (e = e.parentNode); )
            e.nodeType === 1 &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof t.focus == "function" && t.focus(), t = 0;
            t < n.length;
            t++
        )
            (e = n[t]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Bf = Ke && "documentMode" in document && 11 >= document.documentMode,
    Un = null,
    ho = null,
    Pt = null,
    vo = !1;
function au(e, n, t) {
    var r =
        t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    vo ||
        Un == null ||
        Un !== jr(r) ||
        ((r = Un),
        "selectionStart" in r && ui(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Pt && $t(Pt, r)) ||
            ((Pt = r),
            (r = $r(ho, "onSelect")),
            0 < r.length &&
                ((n = new li("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = Un))));
}
function cr(e, n) {
    var t = {};
    return (
        (t[e.toLowerCase()] = n.toLowerCase()),
        (t["Webkit" + e] = "webkit" + n),
        (t["Moz" + e] = "moz" + n),
        t
    );
}
var $n = {
        animationend: cr("Animation", "AnimationEnd"),
        animationiteration: cr("Animation", "AnimationIteration"),
        animationstart: cr("Animation", "AnimationStart"),
        transitionend: cr("Transition", "TransitionEnd"),
    },
    jl = {},
    Ks = {};
Ke &&
    ((Ks = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete $n.animationend.animation,
        delete $n.animationiteration.animation,
        delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
function il(e) {
    if (jl[e]) return jl[e];
    if (!$n[e]) return e;
    var n = $n[e],
        t;
    for (t in n) if (n.hasOwnProperty(t) && t in Ks) return (jl[e] = n[t]);
    return e;
}
var Ys = il("animationend"),
    Xs = il("animationiteration"),
    Gs = il("animationstart"),
    Zs = il("transitionend"),
    Js = new Map(),
    cu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function hn(e, n) {
    Js.set(e, n), jn(n, [e]);
}
for (var Dl = 0; Dl < cu.length; Dl++) {
    var Ol = cu[Dl],
        Hf = Ol.toLowerCase(),
        Wf = Ol[0].toUpperCase() + Ol.slice(1);
    hn(Hf, "on" + Wf);
}
hn(Ys, "onAnimationEnd");
hn(Xs, "onAnimationIteration");
hn(Gs, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Zs, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
jn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
jn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Et =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Qf = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Et)
    );
function fu(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Bc(r, n, void 0, e), (e.currentTarget = null);
}
function qs(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (n)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        s = u.instance,
                        c = u.currentTarget;
                    if (((u = u.listener), s !== o && l.isPropagationStopped()))
                        break e;
                    fu(l, u, c), (o = s);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((u = r[i]),
                        (s = u.instance),
                        (c = u.currentTarget),
                        (u = u.listener),
                        s !== o && l.isPropagationStopped())
                    )
                        break e;
                    fu(l, u, c), (o = s);
                }
        }
    }
    if (Or) throw ((e = co), (Or = !1), (co = null), e);
}
function I(e, n) {
    var t = n[ko];
    t === void 0 && (t = n[ko] = new Set());
    var r = e + "__bubble";
    t.has(r) || (bs(n, e, 2, !1), t.add(r));
}
function Ml(e, n, t) {
    var r = 0;
    n && (r |= 4), bs(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function Vt(e) {
    if (!e[fr]) {
        (e[fr] = !0),
            is.forEach(function (t) {
                t !== "selectionchange" &&
                    (Qf.has(t) || Ml(t, !1, e), Ml(t, !0, e));
            });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[fr] || ((n[fr] = !0), Ml("selectionchange", !1, n));
    }
}
function bs(e, n, t, r) {
    switch (Is(n)) {
        case 1:
            var l = lf;
            break;
        case 4:
            l = of;
            break;
        default:
            l = ti;
    }
    (t = l.bind(null, n, t, e)),
        (l = void 0),
        !ao ||
            (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(n, t, { capture: !0, passive: l })
                : e.addEventListener(n, t, !0)
            : l !== void 0
            ? e.addEventListener(n, t, { passive: l })
            : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var s = i.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = i.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return;
                        i = i.return;
                    }
                for (; u !== null; ) {
                    if (((i = En(u)), i === null)) return;
                    if (((s = i.tag), s === 5 || s === 6)) {
                        r = o = i;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    Es(function () {
        var c = o,
            h = qo(t),
            m = [];
        e: {
            var p = Js.get(e);
            if (p !== void 0) {
                var g = li,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Cr(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = kf;
                        break;
                    case "focusin":
                        (w = "focus"), (g = Ll);
                        break;
                    case "focusout":
                        (w = "blur"), (g = Ll);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Ll;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = bi;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = af;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Cf;
                        break;
                    case Ys:
                    case Xs:
                    case Gs:
                        g = df;
                        break;
                    case Zs:
                        g = Nf;
                        break;
                    case "scroll":
                        g = uf;
                        break;
                    case "wheel":
                        g = zf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = mf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = nu;
                }
                var S = (n & 4) !== 0,
                    O = !S && e === "scroll",
                    f = S ? (p !== null ? p + "Capture" : null) : p;
                S = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var v = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            v !== null &&
                            ((d = v),
                            f !== null &&
                                ((v = Ot(a, f)),
                                v != null && S.push(At(a, v, d)))),
                        O)
                    )
                        break;
                    a = a.return;
                }
                0 < S.length &&
                    ((p = new g(p, w, null, t, h)),
                    m.push({ event: p, listeners: S }));
            }
        }
        if (!(n & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (g = e === "mouseout" || e === "pointerout"),
                    p &&
                        t !== uo &&
                        (w = t.relatedTarget || t.fromElement) &&
                        (En(w) || w[Ye]))
                )
                    break e;
                if (
                    (g || p) &&
                    ((p =
                        h.window === h
                            ? h
                            : (p = h.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    g
                        ? ((w = t.relatedTarget || t.toElement),
                          (g = c),
                          (w = w ? En(w) : null),
                          w !== null &&
                              ((O = Dn(w)),
                              w !== O || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((g = null), (w = c)),
                    g !== w)
                ) {
                    if (
                        ((S = bi),
                        (v = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (a = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((S = nu),
                            (v = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (a = "pointer")),
                        (O = g == null ? p : Vn(g)),
                        (d = w == null ? p : Vn(w)),
                        (p = new S(v, a + "leave", g, t, h)),
                        (p.target = O),
                        (p.relatedTarget = d),
                        (v = null),
                        En(h) === c &&
                            ((S = new S(f, a + "enter", w, t, h)),
                            (S.target = d),
                            (S.relatedTarget = O),
                            (v = S)),
                        (O = v),
                        g && w)
                    )
                        n: {
                            for (S = g, f = w, a = 0, d = S; d; d = On(d)) a++;
                            for (d = 0, v = f; v; v = On(v)) d++;
                            for (; 0 < a - d; ) (S = On(S)), a--;
                            for (; 0 < d - a; ) (f = On(f)), d--;
                            for (; a--; ) {
                                if (
                                    S === f ||
                                    (f !== null && S === f.alternate)
                                )
                                    break n;
                                (S = On(S)), (f = On(f));
                            }
                            S = null;
                        }
                    else S = null;
                    g !== null && du(m, p, g, S, !1),
                        w !== null && O !== null && du(m, O, w, S, !0);
                }
            }
            e: {
                if (
                    ((p = c ? Vn(c) : window),
                    (g = p.nodeName && p.nodeName.toLowerCase()),
                    g === "select" || (g === "input" && p.type === "file"))
                )
                    var E = Mf;
                else if (lu(p))
                    if (Bs) E = $f;
                    else {
                        E = Ff;
                        var C = If;
                    }
                else
                    (g = p.nodeName) &&
                        g.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (E = Uf);
                if (E && (E = E(e, c))) {
                    As(m, E, t, h);
                    break e;
                }
                C && C(e, p, c),
                    e === "focusout" &&
                        (C = p._wrapperState) &&
                        C.controlled &&
                        p.type === "number" &&
                        to(p, "number", p.value);
            }
            switch (((C = c ? Vn(c) : window), e)) {
                case "focusin":
                    (lu(C) || C.contentEditable === "true") &&
                        ((Un = C), (ho = c), (Pt = null));
                    break;
                case "focusout":
                    Pt = ho = Un = null;
                    break;
                case "mousedown":
                    vo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (vo = !1), au(m, t, h);
                    break;
                case "selectionchange":
                    if (Bf) break;
                case "keydown":
                case "keyup":
                    au(m, t, h);
            }
            var _;
            if (ii)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                Fn
                    ? $s(e, t) && (N = "onCompositionEnd")
                    : e === "keydown" &&
                      t.keyCode === 229 &&
                      (N = "onCompositionStart");
            N &&
                (Us &&
                    t.locale !== "ko" &&
                    (Fn || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && Fn && (_ = Fs())
                        : ((tn = h),
                          (ri = "value" in tn ? tn.value : tn.textContent),
                          (Fn = !0))),
                (C = $r(c, N)),
                0 < C.length &&
                    ((N = new eu(N, e, null, t, h)),
                    m.push({ event: N, listeners: C }),
                    _
                        ? (N.data = _)
                        : ((_ = Vs(t)), _ !== null && (N.data = _)))),
                (_ = Tf ? Rf(e, t) : jf(e, t)) &&
                    ((c = $r(c, "onBeforeInput")),
                    0 < c.length &&
                        ((h = new eu(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            t,
                            h
                        )),
                        m.push({ event: h, listeners: c }),
                        (h.data = _)));
        }
        qs(m, n);
    });
}
function At(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = Ot(e, t)),
            o != null && r.unshift(At(e, o, l)),
            (o = Ot(e, n)),
            o != null && r.push(At(e, o, l))),
            (e = e.return);
    }
    return r;
}
function On(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function du(e, n, t, r, l) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
        var u = t,
            s = u.alternate,
            c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 &&
            c !== null &&
            ((u = c),
            l
                ? ((s = Ot(t, o)), s != null && i.unshift(At(t, s, u)))
                : l || ((s = Ot(t, o)), s != null && i.push(At(t, s, u)))),
            (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
}
var Kf = /\r\n?/g,
    Yf = /\u0000|\uFFFD/g;
function pu(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Kf,
            `
`
        )
        .replace(Yf, "");
}
function dr(e, n, t) {
    if (((n = pu(n)), pu(e) !== n && t)) throw Error(y(425));
}
function Vr() {}
var yo = null,
    go = null;
function wo(e, n) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof n.children == "string" ||
        typeof n.children == "number" ||
        (typeof n.dangerouslySetInnerHTML == "object" &&
            n.dangerouslySetInnerHTML !== null &&
            n.dangerouslySetInnerHTML.__html != null)
    );
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
    Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    mu = typeof Promise == "function" ? Promise : void 0,
    Gf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof mu < "u"
            ? function (e) {
                  return mu.resolve(null).then(e).catch(Zf);
              }
            : So;
function Zf(e) {
    setTimeout(function () {
        throw e;
    });
}
function Fl(e, n) {
    var t = n,
        r = 0;
    do {
        var l = t.nextSibling;
        if ((e.removeChild(t), l && l.nodeType === 8))
            if (((t = l.data), t === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Ft(n);
                    return;
                }
                r--;
            } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
        t = l;
    } while (t);
    Ft(n);
}
function sn(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
            if (n === "/$") return null;
        }
    }
    return e;
}
function hu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--;
            } else t === "/$" && n++;
        }
        e = e.previousSibling;
    }
    return null;
}
var st = Math.random().toString(36).slice(2),
    Ue = "__reactFiber$" + st,
    Bt = "__reactProps$" + st,
    Ye = "__reactContainer$" + st,
    ko = "__reactEvents$" + st,
    Jf = "__reactListeners$" + st,
    qf = "__reactHandles$" + st;
function En(e) {
    var n = e[Ue];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
        if ((n = t[Ye] || t[Ue])) {
            if (
                ((t = n.alternate),
                n.child !== null || (t !== null && t.child !== null))
            )
                for (e = hu(e); e !== null; ) {
                    if ((t = e[Ue])) return t;
                    e = hu(e);
                }
            return n;
        }
        (e = t), (t = e.parentNode);
    }
    return null;
}
function qt(e) {
    return (
        (e = e[Ue] || e[Ye]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
}
function ul(e) {
    return e[Bt] || null;
}
var Eo = [],
    An = -1;
function vn(e) {
    return { current: e };
}
function F(e) {
    0 > An || ((e.current = Eo[An]), (Eo[An] = null), An--);
}
function M(e, n) {
    An++, (Eo[An] = e.current), (e.current = n);
}
var mn = {},
    oe = vn(mn),
    de = vn(!1),
    Pn = mn;
function et(e, n) {
    var t = e.type.contextTypes;
    if (!t) return mn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in t) l[o] = n[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = n),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function pe(e) {
    return (e = e.childContextTypes), e != null;
}
function Ar() {
    F(de), F(oe);
}
function vu(e, n, t) {
    if (oe.current !== mn) throw Error(y(168));
    M(oe, n), M(de, t);
}
function ea(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
        return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(y(108, Mc(e) || "Unknown", l));
    return A({}, t, r);
}
function Br(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            mn),
        (Pn = oe.current),
        M(oe, e),
        M(de, de.current),
        !0
    );
}
function yu(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    t
        ? ((e = ea(e, n, Pn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          F(de),
          F(oe),
          M(oe, e))
        : F(de),
        M(de, t);
}
var Be = null,
    sl = !1,
    Ul = !1;
function na(e) {
    Be === null ? (Be = [e]) : Be.push(e);
}
function bf(e) {
    (sl = !0), na(e);
}
function yn() {
    if (!Ul && Be !== null) {
        Ul = !0;
        var e = 0,
            n = D;
        try {
            var t = Be;
            for (D = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0);
                while (r !== null);
            }
            (Be = null), (sl = !1);
        } catch (l) {
            throw (Be !== null && (Be = Be.slice(e + 1)), Ns(bo, yn), l);
        } finally {
            (D = n), (Ul = !1);
        }
    }
    return null;
}
var Bn = [],
    Hn = 0,
    Hr = null,
    Wr = 0,
    ke = [],
    Ee = 0,
    zn = null,
    He = 1,
    We = "";
function Sn(e, n) {
    (Bn[Hn++] = Wr), (Bn[Hn++] = Hr), (Hr = e), (Wr = n);
}
function ta(e, n, t) {
    (ke[Ee++] = He), (ke[Ee++] = We), (ke[Ee++] = zn), (zn = e);
    var r = He;
    e = We;
    var l = 32 - De(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var o = 32 - De(n) + l;
    if (30 < o) {
        var i = l - (l % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (He = (1 << (32 - De(n) + l)) | (t << l) | r),
            (We = o + e);
    } else (He = (1 << o) | (t << l) | r), (We = e);
}
function si(e) {
    e.return !== null && (Sn(e, 1), ta(e, 1, 0));
}
function ai(e) {
    for (; e === Hr; )
        (Hr = Bn[--Hn]), (Bn[Hn] = null), (Wr = Bn[--Hn]), (Bn[Hn] = null);
    for (; e === zn; )
        (zn = ke[--Ee]),
            (ke[Ee] = null),
            (We = ke[--Ee]),
            (ke[Ee] = null),
            (He = ke[--Ee]),
            (ke[Ee] = null);
}
var ye = null,
    ve = null,
    U = !1,
    Re = null;
function ra(e, n) {
    var t = xe(5, null, null, 0);
    (t.elementType = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        (n = e.deletions),
        n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function gu(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return (
                (n =
                    n.nodeType !== 1 ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                        ? null
                        : n),
                n !== null
                    ? ((e.stateNode = n), (ye = e), (ve = sn(n.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                n !== null ? ((e.stateNode = n), (ye = e), (ve = null), !0) : !1
            );
        case 13:
            return (
                (n = n.nodeType !== 8 ? null : n),
                n !== null
                    ? ((t = zn !== null ? { id: He, overflow: We } : null),
                      (e.memoizedState = {
                          dehydrated: n,
                          treeContext: t,
                          retryLane: 1073741824,
                      }),
                      (t = xe(18, null, null, 0)),
                      (t.stateNode = n),
                      (t.return = e),
                      (e.child = t),
                      (ye = e),
                      (ve = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
    if (U) {
        var n = ve;
        if (n) {
            var t = n;
            if (!gu(e, n)) {
                if (xo(e)) throw Error(y(418));
                n = sn(t.nextSibling);
                var r = ye;
                n && gu(e, n)
                    ? ra(r, t)
                    : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
            }
        } else {
            if (xo(e)) throw Error(y(418));
            (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
        }
    }
}
function wu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ye = e;
}
function pr(e) {
    if (e !== ye) return !1;
    if (!U) return wu(e), (U = !0), !1;
    var n;
    if (
        ((n = e.tag !== 3) &&
            !(n = e.tag !== 5) &&
            ((n = e.type),
            (n = n !== "head" && n !== "body" && !wo(e.type, e.memoizedProps))),
        n && (n = ve))
    ) {
        if (xo(e)) throw (la(), Error(y(418)));
        for (; n; ) ra(e, n), (n = sn(n.nextSibling));
    }
    if ((wu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(y(317));
        e: {
            for (e = e.nextSibling, n = 0; e; ) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            ve = sn(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
                }
                e = e.nextSibling;
            }
            ve = null;
        }
    } else ve = ye ? sn(e.stateNode.nextSibling) : null;
    return !0;
}
function la() {
    for (var e = ve; e; ) e = sn(e.nextSibling);
}
function nt() {
    (ve = ye = null), (U = !1);
}
function ci(e) {
    Re === null ? (Re = [e]) : Re.push(e);
}
var ed = Ze.ReactCurrentBatchConfig;
function vt(e, n, t) {
    if (
        ((e = t.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (t._owner) {
            if (((t = t._owner), t)) {
                if (t.tag !== 1) throw Error(y(309));
                var r = t.stateNode;
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                o = "" + e;
            return n !== null &&
                n.ref !== null &&
                typeof n.ref == "function" &&
                n.ref._stringRef === o
                ? n.ref
                : ((n = function (i) {
                      var u = l.refs;
                      i === null ? delete u[o] : (u[o] = i);
                  }),
                  (n._stringRef = o),
                  n);
        }
        if (typeof e != "string") throw Error(y(284));
        if (!t._owner) throw Error(y(290, e));
    }
    return e;
}
function mr(e, n) {
    throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
            y(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : e
            )
        ))
    );
}
function Su(e) {
    var n = e._init;
    return n(e._payload);
}
function oa(e) {
    function n(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
        }
    }
    function t(f, a) {
        if (!e) return null;
        for (; a !== null; ) n(f, a), (a = a.sibling);
        return null;
    }
    function r(f, a) {
        for (f = new Map(); a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
                (a = a.sibling);
        return f;
    }
    function l(f, a) {
        return (f = dn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, a, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
                      : ((f.flags |= 2), a))
                : ((f.flags |= 1048576), a)
        );
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, v) {
        return a === null || a.tag !== 6
            ? ((a = Ql(d, f.mode, v)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, v) {
        var E = d.type;
        return E === In
            ? h(f, a, d.props.children, v, d.key)
            : a !== null &&
              (a.elementType === E ||
                  (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === qe &&
                      Su(E) === a.type))
            ? ((v = l(a, d.props)), (v.ref = vt(f, a, d)), (v.return = f), v)
            : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
              (v.ref = vt(f, a, d)),
              (v.return = f),
              v);
    }
    function c(f, a, d, v) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== d.containerInfo ||
            a.stateNode.implementation !== d.implementation
            ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
            : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function h(f, a, d, v, E) {
        return a === null || a.tag !== 7
            ? ((a = Nn(d, f.mode, v, E)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function m(f, a, d) {
        if ((typeof a == "string" && a !== "") || typeof a == "number")
            return (a = Ql("" + a, f.mode, d)), (a.return = f), a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case rr:
                    return (
                        (d = Rr(a.type, a.key, a.props, null, f.mode, d)),
                        (d.ref = vt(f, null, a)),
                        (d.return = f),
                        d
                    );
                case Mn:
                    return (a = Kl(a, f.mode, d)), (a.return = f), a;
                case qe:
                    var v = a._init;
                    return m(f, v(a._payload), d);
            }
            if (St(a) || ft(a))
                return (a = Nn(a, f.mode, d, null)), (a.return = f), a;
            mr(f, a);
        }
        return null;
    }
    function p(f, a, d, v) {
        var E = a !== null ? a.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return E !== null ? null : u(f, a, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case rr:
                    return d.key === E ? s(f, a, d, v) : null;
                case Mn:
                    return d.key === E ? c(f, a, d, v) : null;
                case qe:
                    return (E = d._init), p(f, a, E(d._payload), v);
            }
            if (St(d) || ft(d)) return E !== null ? null : h(f, a, d, v, null);
            mr(f, d);
        }
        return null;
    }
    function g(f, a, d, v, E) {
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return (f = f.get(d) || null), u(a, f, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case rr:
                    return (
                        (f = f.get(v.key === null ? d : v.key) || null),
                        s(a, f, v, E)
                    );
                case Mn:
                    return (
                        (f = f.get(v.key === null ? d : v.key) || null),
                        c(a, f, v, E)
                    );
                case qe:
                    var C = v._init;
                    return g(f, a, d, C(v._payload), E);
            }
            if (St(v) || ft(v))
                return (f = f.get(d) || null), h(a, f, v, E, null);
            mr(a, v);
        }
        return null;
    }
    function w(f, a, d, v) {
        for (
            var E = null, C = null, _ = a, N = (a = 0), H = null;
            _ !== null && N < d.length;
            N++
        ) {
            _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
            var R = p(f, _, d[N], v);
            if (R === null) {
                _ === null && (_ = H);
                break;
            }
            e && _ && R.alternate === null && n(f, _),
                (a = o(R, a, N)),
                C === null ? (E = R) : (C.sibling = R),
                (C = R),
                (_ = H);
        }
        if (N === d.length) return t(f, _), U && Sn(f, N), E;
        if (_ === null) {
            for (; N < d.length; N++)
                (_ = m(f, d[N], v)),
                    _ !== null &&
                        ((a = o(_, a, N)),
                        C === null ? (E = _) : (C.sibling = _),
                        (C = _));
            return U && Sn(f, N), E;
        }
        for (_ = r(f, _); N < d.length; N++)
            (H = g(_, f, N, d[N], v)),
                H !== null &&
                    (e &&
                        H.alternate !== null &&
                        _.delete(H.key === null ? N : H.key),
                    (a = o(H, a, N)),
                    C === null ? (E = H) : (C.sibling = H),
                    (C = H));
        return (
            e &&
                _.forEach(function (Pe) {
                    return n(f, Pe);
                }),
            U && Sn(f, N),
            E
        );
    }
    function S(f, a, d, v) {
        var E = ft(d);
        if (typeof E != "function") throw Error(y(150));
        if (((d = E.call(d)), d == null)) throw Error(y(151));
        for (
            var C = (E = null), _ = a, N = (a = 0), H = null, R = d.next();
            _ !== null && !R.done;
            N++, R = d.next()
        ) {
            _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
            var Pe = p(f, _, R.value, v);
            if (Pe === null) {
                _ === null && (_ = H);
                break;
            }
            e && _ && Pe.alternate === null && n(f, _),
                (a = o(Pe, a, N)),
                C === null ? (E = Pe) : (C.sibling = Pe),
                (C = Pe),
                (_ = H);
        }
        if (R.done) return t(f, _), U && Sn(f, N), E;
        if (_ === null) {
            for (; !R.done; N++, R = d.next())
                (R = m(f, R.value, v)),
                    R !== null &&
                        ((a = o(R, a, N)),
                        C === null ? (E = R) : (C.sibling = R),
                        (C = R));
            return U && Sn(f, N), E;
        }
        for (_ = r(f, _); !R.done; N++, R = d.next())
            (R = g(_, f, N, R.value, v)),
                R !== null &&
                    (e &&
                        R.alternate !== null &&
                        _.delete(R.key === null ? N : R.key),
                    (a = o(R, a, N)),
                    C === null ? (E = R) : (C.sibling = R),
                    (C = R));
        return (
            e &&
                _.forEach(function (at) {
                    return n(f, at);
                }),
            U && Sn(f, N),
            E
        );
    }
    function O(f, a, d, v) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === In &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case rr:
                    e: {
                        for (var E = d.key, C = a; C !== null; ) {
                            if (C.key === E) {
                                if (((E = d.type), E === In)) {
                                    if (C.tag === 7) {
                                        t(f, C.sibling),
                                            (a = l(C, d.props.children)),
                                            (a.return = f),
                                            (f = a);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === E ||
                                    (typeof E == "object" &&
                                        E !== null &&
                                        E.$$typeof === qe &&
                                        Su(E) === C.type)
                                ) {
                                    t(f, C.sibling),
                                        (a = l(C, d.props)),
                                        (a.ref = vt(f, C, d)),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                }
                                t(f, C);
                                break;
                            } else n(f, C);
                            C = C.sibling;
                        }
                        d.type === In
                            ? ((a = Nn(d.props.children, f.mode, v, d.key)),
                              (a.return = f),
                              (f = a))
                            : ((v = Rr(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  v
                              )),
                              (v.ref = vt(f, a, d)),
                              (v.return = f),
                              (f = v));
                    }
                    return i(f);
                case Mn:
                    e: {
                        for (C = d.key; a !== null; ) {
                            if (a.key === C)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    a.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    t(f, a.sibling),
                                        (a = l(a, d.children || [])),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                } else {
                                    t(f, a);
                                    break;
                                }
                            else n(f, a);
                            a = a.sibling;
                        }
                        (a = Kl(d, f.mode, v)), (a.return = f), (f = a);
                    }
                    return i(f);
                case qe:
                    return (C = d._init), O(f, a, C(d._payload), v);
            }
            if (St(d)) return w(f, a, d, v);
            if (ft(d)) return S(f, a, d, v);
            mr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              a !== null && a.tag === 6
                  ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
                  : (t(f, a), (a = Ql(d, f.mode, v)), (a.return = f), (f = a)),
              i(f))
            : t(f, a);
    }
    return O;
}
var tt = oa(!0),
    ia = oa(!1),
    Qr = vn(null),
    Kr = null,
    Wn = null,
    fi = null;
function di() {
    fi = Wn = Kr = null;
}
function pi(e) {
    var n = Qr.current;
    F(Qr), (e._currentValue = n);
}
function _o(e, n, t) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
                : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
            e === t)
        )
            break;
        e = e.return;
    }
}
function Jn(e, n) {
    (Kr = e),
        (fi = Wn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function _e(e) {
    var n = e._currentValue;
    if (fi !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), Wn === null)) {
            if (Kr === null) throw Error(y(308));
            (Wn = e), (Kr.dependencies = { lanes: 0, firstContext: e });
        } else Wn = Wn.next = e;
    return n;
}
var xn = null;
function mi(e) {
    xn === null ? (xn = [e]) : xn.push(e);
}
function ua(e, n, t, r) {
    var l = n.interleaved;
    return (
        l === null ? ((t.next = t), mi(n)) : ((t.next = l.next), (l.next = t)),
        (n.interleaved = t),
        Xe(e, r)
    );
}
function Xe(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
        (e.childLanes |= n),
            (t = e.alternate),
            t !== null && (t.childLanes |= n),
            (t = e),
            (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function hi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function sa(e, n) {
    (e = e.updateQueue),
        n.updateQueue === e &&
            (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Qe(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function an(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), j & 2)) {
        var l = r.pending;
        return (
            l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
            (r.pending = n),
            Xe(e, t)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((n.next = n), mi(r)) : ((n.next = l.next), (l.next = n)),
        (r.interleaved = n),
        Xe(e, t)
    );
}
function _r(e, n, t) {
    if (
        ((n = n.updateQueue),
        n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), ei(e, t);
    }
}
function ku(e, n) {
    var t = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
        var l = null,
            o = null;
        if (((t = t.firstBaseUpdate), t !== null)) {
            do {
                var i = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null,
                };
                o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
            } while (t !== null);
            o === null ? (l = o = n) : (o = o.next = n);
        } else l = o = n;
        (t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = t);
        return;
    }
    (e = t.lastBaseUpdate),
        e === null ? (t.firstBaseUpdate = n) : (e.next = n),
        (t.lastBaseUpdate = n);
}
function Yr(e, n, t, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            c = s.next;
        (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
            (u = h.lastBaseUpdate),
            u !== i &&
                (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
                (h.lastBaseUpdate = s)));
    }
    if (o !== null) {
        var m = l.baseState;
        (i = 0), (h = c = s = null), (u = o);
        do {
            var p = u.lane,
                g = u.eventTime;
            if ((r & p) === p) {
                h !== null &&
                    (h = h.next =
                        {
                            eventTime: g,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        });
                e: {
                    var w = e,
                        S = u;
                    switch (((p = n), (g = t), S.tag)) {
                        case 1:
                            if (((w = S.payload), typeof w == "function")) {
                                m = w.call(g, m, p);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = S.payload),
                                (p =
                                    typeof w == "function"
                                        ? w.call(g, m, p)
                                        : w),
                                p == null)
                            )
                                break e;
                            m = A({}, m, p);
                            break e;
                        case 2:
                            be = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = l.effects),
                    p === null ? (l.effects = [u]) : p.push(u));
            } else
                (g = {
                    eventTime: g,
                    lane: p,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
                    (i |= p);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (p = u),
                    (u = p.next),
                    (p.next = null),
                    (l.lastBaseUpdate = p),
                    (l.shared.pending = null);
            }
        } while (!0);
        if (
            (h === null && (s = m),
            (l.baseState = s),
            (l.firstBaseUpdate = c),
            (l.lastBaseUpdate = h),
            (n = l.shared.interleaved),
            n !== null)
        ) {
            l = n;
            do (i |= l.lane), (l = l.next);
            while (l !== n);
        } else o === null && (l.shared.lanes = 0);
        (Tn |= i), (e.lanes = i), (e.memoizedState = m);
    }
}
function Eu(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = t), typeof l != "function"))
                    throw Error(y(191, l));
                l.call(r);
            }
        }
}
var bt = {},
    Ve = vn(bt),
    Ht = vn(bt),
    Wt = vn(bt);
function Cn(e) {
    if (e === bt) throw Error(y(174));
    return e;
}
function vi(e, n) {
    switch ((M(Wt, n), M(Ht, e), M(Ve, bt), (e = n.nodeType), e)) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : lo(null, "");
            break;
        default:
            (e = e === 8 ? n.parentNode : n),
                (n = e.namespaceURI || null),
                (e = e.tagName),
                (n = lo(n, e));
    }
    F(Ve), M(Ve, n);
}
function rt() {
    F(Ve), F(Ht), F(Wt);
}
function aa(e) {
    Cn(Wt.current);
    var n = Cn(Ve.current),
        t = lo(n, e.type);
    n !== t && (M(Ht, e), M(Ve, t));
}
function yi(e) {
    Ht.current === e && (F(Ve), F(Ht));
}
var $ = vn(0);
function Xr(e) {
    for (var n = e; n !== null; ) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (
                t !== null &&
                ((t = t.dehydrated),
                t === null || t.data === "$?" || t.data === "$!")
            )
                return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128) return n;
        } else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
}
var $l = [];
function gi() {
    for (var e = 0; e < $l.length; e++)
        $l[e]._workInProgressVersionPrimary = null;
    $l.length = 0;
}
var Nr = Ze.ReactCurrentDispatcher,
    Vl = Ze.ReactCurrentBatchConfig,
    Ln = 0,
    V = null,
    Y = null,
    Z = null,
    Gr = !1,
    zt = !1,
    Qt = 0,
    nd = 0;
function te() {
    throw Error(y(321));
}
function wi(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!Me(e[t], n[t])) return !1;
    return !0;
}
function Si(e, n, t, r, l, o) {
    if (
        ((Ln = o),
        (V = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (Nr.current = e === null || e.memoizedState === null ? od : id),
        (e = t(r, l)),
        zt)
    ) {
        o = 0;
        do {
            if (((zt = !1), (Qt = 0), 25 <= o)) throw Error(y(301));
            (o += 1),
                (Z = Y = null),
                (n.updateQueue = null),
                (Nr.current = ud),
                (e = t(r, l));
        } while (zt);
    }
    if (
        ((Nr.current = Zr),
        (n = Y !== null && Y.next !== null),
        (Ln = 0),
        (Z = Y = V = null),
        (Gr = !1),
        n)
    )
        throw Error(y(300));
    return e;
}
function ki() {
    var e = Qt !== 0;
    return (Qt = 0), e;
}
function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ne() {
    if (Y === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Y.next;
    var n = Z === null ? V.memoizedState : Z.next;
    if (n !== null) (Z = n), (Y = e);
    else {
        if (e === null) throw Error(y(310));
        (Y = e),
            (e = {
                memoizedState: Y.memoizedState,
                baseState: Y.baseState,
                baseQueue: Y.baseQueue,
                queue: Y.queue,
                next: null,
            }),
            Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e);
    }
    return Z;
}
function Kt(e, n) {
    return typeof n == "function" ? n(e) : n;
}
function Al(e) {
    var n = Ne(),
        t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = Y,
        l = r.baseQueue,
        o = t.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            (l.next = o.next), (o.next = i);
        }
        (r.baseQueue = l = o), (t.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var u = (i = null),
            s = null,
            c = o;
        do {
            var h = c.lane;
            if ((Ln & h) === h)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var m = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
                    (V.lanes |= h),
                    (Tn |= h);
            }
            c = c.next;
        } while (c !== null && c !== o);
        s === null ? (i = r) : (s.next = u),
            Me(r, n.memoizedState) || (fe = !0),
            (n.memoizedState = r),
            (n.baseState = i),
            (n.baseQueue = s),
            (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), (V.lanes |= o), (Tn |= o), (l = l.next);
        while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
}
function Bl(e) {
    var n = Ne(),
        t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
        l = t.pending,
        o = n.memoizedState;
    if (l !== null) {
        t.pending = null;
        var i = (l = l.next);
        do (o = e(o, i.action)), (i = i.next);
        while (i !== l);
        Me(o, n.memoizedState) || (fe = !0),
            (n.memoizedState = o),
            n.baseQueue === null && (n.baseState = o),
            (t.lastRenderedState = o);
    }
    return [o, r];
}
function ca() {}
function fa(e, n) {
    var t = V,
        r = Ne(),
        l = n(),
        o = !Me(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (fe = !0)),
        (r = r.queue),
        Ei(ma.bind(null, t, r, e), [e]),
        r.getSnapshot !== n || o || (Z !== null && Z.memoizedState.tag & 1))
    ) {
        if (
            ((t.flags |= 2048),
            Yt(9, pa.bind(null, t, r, l, n), void 0, null),
            J === null)
        )
            throw Error(y(349));
        Ln & 30 || da(t, n, l);
    }
    return l;
}
function da(e, n, t) {
    (e.flags |= 16384),
        (e = { getSnapshot: n, value: t }),
        (n = V.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }),
              (V.updateQueue = n),
              (n.stores = [e]))
            : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function pa(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ha(n) && va(e);
}
function ma(e, n, t) {
    return t(function () {
        ha(n) && va(e);
    });
}
function ha(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !Me(e, t);
    } catch {
        return !0;
    }
}
function va(e) {
    var n = Xe(e, 1);
    n !== null && Oe(n, e, 1, -1);
}
function xu(e) {
    var n = Fe();
    return (
        typeof e == "function" && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Kt,
            lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = ld.bind(null, V, e)),
        [n.memoizedState, e]
    );
}
function Yt(e, n, t, r) {
    return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        (n = V.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }),
              (V.updateQueue = n),
              (n.lastEffect = e.next = e))
            : ((t = n.lastEffect),
              t === null
                  ? (n.lastEffect = e.next = e)
                  : ((r = t.next),
                    (t.next = e),
                    (e.next = r),
                    (n.lastEffect = e))),
        e
    );
}
function ya() {
    return Ne().memoizedState;
}
function Pr(e, n, t, r) {
    var l = Fe();
    (V.flags |= e),
        (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function al(e, n, t, r) {
    var l = Ne();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Y !== null) {
        var i = Y.memoizedState;
        if (((o = i.destroy), r !== null && wi(r, i.deps))) {
            l.memoizedState = Yt(n, t, o, r);
            return;
        }
    }
    (V.flags |= e), (l.memoizedState = Yt(1 | n, t, o, r));
}
function Cu(e, n) {
    return Pr(8390656, 8, e, n);
}
function Ei(e, n) {
    return al(2048, 8, e, n);
}
function ga(e, n) {
    return al(4, 2, e, n);
}
function wa(e, n) {
    return al(4, 4, e, n);
}
function Sa(e, n) {
    if (typeof n == "function")
        return (
            (e = e()),
            n(e),
            function () {
                n(null);
            }
        );
    if (n != null)
        return (
            (e = e()),
            (n.current = e),
            function () {
                n.current = null;
            }
        );
}
function ka(e, n, t) {
    return (
        (t = t != null ? t.concat([e]) : null), al(4, 4, Sa.bind(null, n, e), t)
    );
}
function xi() {}
function Ea(e, n) {
    var t = Ne();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && wi(n, r[1])
        ? r[0]
        : ((t.memoizedState = [e, n]), e);
}
function xa(e, n) {
    var t = Ne();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && wi(n, r[1])
        ? r[0]
        : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Ca(e, n, t) {
    return Ln & 21
        ? (Me(t, n) ||
              ((t = Ls()), (V.lanes |= t), (Tn |= t), (e.baseState = !0)),
          n)
        : (e.baseState && ((e.baseState = !1), (fe = !0)),
          (e.memoizedState = t));
}
function td(e, n) {
    var t = D;
    (D = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Vl.transition;
    Vl.transition = {};
    try {
        e(!1), n();
    } finally {
        (D = t), (Vl.transition = r);
    }
}
function _a() {
    return Ne().memoizedState;
}
function rd(e, n, t) {
    var r = fn(e);
    if (
        ((t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Na(e))
    )
        Pa(n, t);
    else if (((t = ua(e, n, t, r)), t !== null)) {
        var l = ue();
        Oe(t, e, r, l), za(t, n, r);
    }
}
function ld(e, n, t) {
    var r = fn(e),
        l = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Na(e)) Pa(n, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = n.lastRenderedReducer), o !== null)
        )
            try {
                var i = n.lastRenderedState,
                    u = o(i, t);
                if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
                    var s = n.interleaved;
                    s === null
                        ? ((l.next = l), mi(n))
                        : ((l.next = s.next), (s.next = l)),
                        (n.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (t = ua(e, n, l, r)),
            t !== null && ((l = ue()), Oe(t, e, r, l), za(t, n, r));
    }
}
function Na(e) {
    var n = e.alternate;
    return e === V || (n !== null && n === V);
}
function Pa(e, n) {
    zt = Gr = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
        (e.pending = n);
}
function za(e, n, t) {
    if (t & 4194240) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), ei(e, t);
    }
}
var Zr = {
        readContext: _e,
        useCallback: te,
        useContext: te,
        useEffect: te,
        useImperativeHandle: te,
        useInsertionEffect: te,
        useLayoutEffect: te,
        useMemo: te,
        useReducer: te,
        useRef: te,
        useState: te,
        useDebugValue: te,
        useDeferredValue: te,
        useTransition: te,
        useMutableSource: te,
        useSyncExternalStore: te,
        useId: te,
        unstable_isNewReconciler: !1,
    },
    od = {
        readContext: _e,
        useCallback: function (e, n) {
            return (Fe().memoizedState = [e, n === void 0 ? null : n]), e;
        },
        useContext: _e,
        useEffect: Cu,
        useImperativeHandle: function (e, n, t) {
            return (
                (t = t != null ? t.concat([e]) : null),
                Pr(4194308, 4, Sa.bind(null, n, e), t)
            );
        },
        useLayoutEffect: function (e, n) {
            return Pr(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
            return Pr(4, 2, e, n);
        },
        useMemo: function (e, n) {
            var t = Fe();
            return (
                (n = n === void 0 ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
            );
        },
        useReducer: function (e, n, t) {
            var r = Fe();
            return (
                (n = t !== void 0 ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = rd.bind(null, V, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var n = Fe();
            return (e = { current: e }), (n.memoizedState = e);
        },
        useState: xu,
        useDebugValue: xi,
        useDeferredValue: function (e) {
            return (Fe().memoizedState = e);
        },
        useTransition: function () {
            var e = xu(!1),
                n = e[0];
            return (e = td.bind(null, e[1])), (Fe().memoizedState = e), [n, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, n, t) {
            var r = V,
                l = Fe();
            if (U) {
                if (t === void 0) throw Error(y(407));
                t = t();
            } else {
                if (((t = n()), J === null)) throw Error(y(349));
                Ln & 30 || da(r, n, t);
            }
            l.memoizedState = t;
            var o = { value: t, getSnapshot: n };
            return (
                (l.queue = o),
                Cu(ma.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Yt(9, pa.bind(null, r, o, t, n), void 0, null),
                t
            );
        },
        useId: function () {
            var e = Fe(),
                n = J.identifierPrefix;
            if (U) {
                var t = We,
                    r = He;
                (t = (r & ~(1 << (32 - De(r) - 1))).toString(32) + t),
                    (n = ":" + n + "R" + t),
                    (t = Qt++),
                    0 < t && (n += "H" + t.toString(32)),
                    (n += ":");
            } else (t = nd++), (n = ":" + n + "r" + t.toString(32) + ":");
            return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
    },
    id = {
        readContext: _e,
        useCallback: Ea,
        useContext: _e,
        useEffect: Ei,
        useImperativeHandle: ka,
        useInsertionEffect: ga,
        useLayoutEffect: wa,
        useMemo: xa,
        useReducer: Al,
        useRef: ya,
        useState: function () {
            return Al(Kt);
        },
        useDebugValue: xi,
        useDeferredValue: function (e) {
            var n = Ne();
            return Ca(n, Y.memoizedState, e);
        },
        useTransition: function () {
            var e = Al(Kt)[0],
                n = Ne().memoizedState;
            return [e, n];
        },
        useMutableSource: ca,
        useSyncExternalStore: fa,
        useId: _a,
        unstable_isNewReconciler: !1,
    },
    ud = {
        readContext: _e,
        useCallback: Ea,
        useContext: _e,
        useEffect: Ei,
        useImperativeHandle: ka,
        useInsertionEffect: ga,
        useLayoutEffect: wa,
        useMemo: xa,
        useReducer: Bl,
        useRef: ya,
        useState: function () {
            return Bl(Kt);
        },
        useDebugValue: xi,
        useDeferredValue: function (e) {
            var n = Ne();
            return Y === null
                ? (n.memoizedState = e)
                : Ca(n, Y.memoizedState, e);
        },
        useTransition: function () {
            var e = Bl(Kt)[0],
                n = Ne().memoizedState;
            return [e, n];
        },
        useMutableSource: ca,
        useSyncExternalStore: fa,
        useId: _a,
        unstable_isNewReconciler: !1,
    };
function Le(e, n) {
    if (e && e.defaultProps) {
        (n = A({}, n)), (e = e.defaultProps);
        for (var t in e) n[t] === void 0 && (n[t] = e[t]);
        return n;
    }
    return n;
}
function No(e, n, t, r) {
    (n = e.memoizedState),
        (t = t(r, n)),
        (t = t == null ? n : A({}, n, t)),
        (e.memoizedState = t),
        e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = ue(),
            l = fn(e),
            o = Qe(r, l);
        (o.payload = n),
            t != null && (o.callback = t),
            (n = an(e, o, l)),
            n !== null && (Oe(n, e, l, r), _r(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = ue(),
            l = fn(e),
            o = Qe(r, l);
        (o.tag = 1),
            (o.payload = n),
            t != null && (o.callback = t),
            (n = an(e, o, l)),
            n !== null && (Oe(n, e, l, r), _r(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = ue(),
            r = fn(e),
            l = Qe(t, r);
        (l.tag = 2),
            n != null && (l.callback = n),
            (n = an(e, l, r)),
            n !== null && (Oe(n, e, r, t), _r(n, e, r));
    },
};
function _u(e, n, t, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, i)
            : n.prototype && n.prototype.isPureReactComponent
            ? !$t(t, r) || !$t(l, o)
            : !0
    );
}
function La(e, n, t) {
    var r = !1,
        l = mn,
        o = n.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = _e(o))
            : ((l = pe(n) ? Pn : oe.current),
              (r = n.contextTypes),
              (o = (r = r != null) ? et(e, l) : mn)),
        (n = new n(t, o)),
        (e.memoizedState =
            n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = cl),
        (e.stateNode = n),
        (n._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        n
    );
}
function Nu(e, n, t, r) {
    (e = n.state),
        typeof n.componentWillReceiveProps == "function" &&
            n.componentWillReceiveProps(t, r),
        typeof n.UNSAFE_componentWillReceiveProps == "function" &&
            n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function Po(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), hi(e);
    var o = n.contextType;
    typeof o == "object" && o !== null
        ? (l.context = _e(o))
        : ((o = pe(n) ? Pn : oe.current), (l.context = et(e, o))),
        (l.state = e.memoizedState),
        (o = n.getDerivedStateFromProps),
        typeof o == "function" && (No(e, n, o, t), (l.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((n = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            n !== l.state && cl.enqueueReplaceState(l, l.state, null),
            Yr(e, t, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lt(e, n) {
    try {
        var t = "",
            r = n;
        do (t += Oc(r)), (r = r.return);
        while (r);
        var l = t;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
}
function Hl(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function zo(e, n) {
    try {
        console.error(n.value);
    } catch (t) {
        setTimeout(function () {
            throw t;
        });
    }
}
var sd = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, n, t) {
    (t = Qe(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
        (t.callback = function () {
            qr || ((qr = !0), (Uo = r)), zo(e, n);
        }),
        t
    );
}
function Ra(e, n, t) {
    (t = Qe(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = n.value;
        (t.payload = function () {
            return r(l);
        }),
            (t.callback = function () {
                zo(e, n);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (t.callback = function () {
                zo(e, n),
                    typeof r != "function" &&
                        (cn === null ? (cn = new Set([this])) : cn.add(this));
                var i = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: i !== null ? i : "",
                });
            }),
        t
    );
}
function Pu(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new sd();
        var l = new Set();
        r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = Ed.bind(null, e, n, t)), n.then(e, e));
}
function zu(e) {
    do {
        var n;
        if (
            ((n = e.tag === 13) &&
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated !== null : !0)),
            n)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Lu(e, n, t, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === n
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (t.flags |= 131072),
                (t.flags &= -52805),
                t.tag === 1 &&
                    (t.alternate === null
                        ? (t.tag = 17)
                        : ((n = Qe(-1, 1)), (n.tag = 2), an(t, n, 1))),
                (t.lanes |= 1)),
          e);
}
var ad = Ze.ReactCurrentOwner,
    fe = !1;
function ie(e, n, t, r) {
    n.child = e === null ? ia(n, null, t, r) : tt(n, e.child, t, r);
}
function Tu(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return (
        Jn(n, l),
        (r = Si(e, n, t, r, o, l)),
        (t = ki()),
        e !== null && !fe
            ? ((n.updateQueue = e.updateQueue),
              (n.flags &= -2053),
              (e.lanes &= ~l),
              Ge(e, n, l))
            : (U && t && si(n), (n.flags |= 1), ie(e, n, r, l), n.child)
    );
}
function Ru(e, n, t, r, l) {
    if (e === null) {
        var o = t.type;
        return typeof o == "function" &&
            !Ri(o) &&
            o.defaultProps === void 0 &&
            t.compare === null &&
            t.defaultProps === void 0
            ? ((n.tag = 15), (n.type = o), ja(e, n, o, r, l))
            : ((e = Rr(t.type, null, r, n, n.mode, l)),
              (e.ref = n.ref),
              (e.return = n),
              (n.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps;
        if (
            ((t = t.compare),
            (t = t !== null ? t : $t),
            t(i, r) && e.ref === n.ref)
        )
            return Ge(e, n, l);
    }
    return (
        (n.flags |= 1),
        (e = dn(o, r)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e)
    );
}
function ja(e, n, t, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if ($t(o, r) && e.ref === n.ref)
            if (((fe = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (fe = !0);
            else return (n.lanes = e.lanes), Ge(e, n, l);
    }
    return Lo(e, n, t, r, l);
}
function Da(e, n, t) {
    var r = n.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(n.mode & 1))
            (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                M(Kn, he),
                (he |= t);
        else {
            if (!(t & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | t : t),
                    (n.lanes = n.childLanes = 1073741824),
                    (n.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (n.updateQueue = null),
                    M(Kn, he),
                    (he |= e),
                    null
                );
            (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : t),
                M(Kn, he),
                (he |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | t), (n.memoizedState = null))
            : (r = t),
            M(Kn, he),
            (he |= r);
    return ie(e, n, l, t), n.child;
}
function Oa(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
        ((n.flags |= 512), (n.flags |= 2097152));
}
function Lo(e, n, t, r, l) {
    var o = pe(t) ? Pn : oe.current;
    return (
        (o = et(n, o)),
        Jn(n, l),
        (t = Si(e, n, t, r, o, l)),
        (r = ki()),
        e !== null && !fe
            ? ((n.updateQueue = e.updateQueue),
              (n.flags &= -2053),
              (e.lanes &= ~l),
              Ge(e, n, l))
            : (U && r && si(n), (n.flags |= 1), ie(e, n, t, l), n.child)
    );
}
function ju(e, n, t, r, l) {
    if (pe(t)) {
        var o = !0;
        Br(n);
    } else o = !1;
    if ((Jn(n, l), n.stateNode === null))
        zr(e, n), La(n, t, r), Po(n, t, r, l), (r = !0);
    else if (e === null) {
        var i = n.stateNode,
            u = n.memoizedProps;
        i.props = u;
        var s = i.context,
            c = t.contextType;
        typeof c == "object" && c !== null
            ? (c = _e(c))
            : ((c = pe(t) ? Pn : oe.current), (c = et(n, c)));
        var h = t.getDerivedStateFromProps,
            m =
                typeof h == "function" ||
                typeof i.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((u !== r || s !== c) && Nu(n, i, r, c)),
            (be = !1);
        var p = n.memoizedState;
        (i.state = p),
            Yr(n, r, i, l),
            (s = n.memoizedState),
            u !== r || p !== s || de.current || be
                ? (typeof h == "function" &&
                      (No(n, t, h, r), (s = n.memoizedState)),
                  (u = be || _u(n, t, u, r, p, s, c))
                      ? (m ||
                            (typeof i.UNSAFE_componentWillMount != "function" &&
                                typeof i.componentWillMount != "function") ||
                            (typeof i.componentWillMount == "function" &&
                                i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == "function" &&
                                i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" &&
                            (n.flags |= 4194308))
                      : (typeof i.componentDidMount == "function" &&
                            (n.flags |= 4194308),
                        (n.memoizedProps = r),
                        (n.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = u))
                : (typeof i.componentDidMount == "function" &&
                      (n.flags |= 4194308),
                  (r = !1));
    } else {
        (i = n.stateNode),
            sa(e, n),
            (u = n.memoizedProps),
            (c = n.type === n.elementType ? u : Le(n.type, u)),
            (i.props = c),
            (m = n.pendingProps),
            (p = i.context),
            (s = t.contextType),
            typeof s == "object" && s !== null
                ? (s = _e(s))
                : ((s = pe(t) ? Pn : oe.current), (s = et(n, s)));
        var g = t.getDerivedStateFromProps;
        (h =
            typeof g == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((u !== m || p !== s) && Nu(n, i, r, s)),
            (be = !1),
            (p = n.memoizedState),
            (i.state = p),
            Yr(n, r, i, l);
        var w = n.memoizedState;
        u !== m || p !== w || de.current || be
            ? (typeof g == "function" &&
                  (No(n, t, g, r), (w = n.memoizedState)),
              (c = be || _u(n, t, c, r, p, w, s) || !1)
                  ? (h ||
                        (typeof i.UNSAFE_componentWillUpdate != "function" &&
                            typeof i.componentWillUpdate != "function") ||
                        (typeof i.componentWillUpdate == "function" &&
                            i.componentWillUpdate(r, w, s),
                        typeof i.UNSAFE_componentWillUpdate == "function" &&
                            i.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof i.componentDidUpdate == "function" && (n.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" &&
                        (n.flags |= 1024))
                  : (typeof i.componentDidUpdate != "function" ||
                        (u === e.memoizedProps && p === e.memoizedState) ||
                        (n.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                        (u === e.memoizedProps && p === e.memoizedState) ||
                        (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = w)),
              (i.props = r),
              (i.state = w),
              (i.context = s),
              (r = c))
            : (typeof i.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && p === e.memoizedState) ||
                  (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && p === e.memoizedState) ||
                  (n.flags |= 1024),
              (r = !1));
    }
    return To(e, n, t, r, o, l);
}
function To(e, n, t, r, l, o) {
    Oa(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && yu(n, t, !1), Ge(e, n, o);
    (r = n.stateNode), (ad.current = n);
    var u =
        i && typeof t.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (n.flags |= 1),
        e !== null && i
            ? ((n.child = tt(n, e.child, null, o)),
              (n.child = tt(n, null, u, o)))
            : ie(e, n, u, o),
        (n.memoizedState = r.state),
        l && yu(n, t, !0),
        n.child
    );
}
function Ma(e) {
    var n = e.stateNode;
    n.pendingContext
        ? vu(e, n.pendingContext, n.pendingContext !== n.context)
        : n.context && vu(e, n.context, !1),
        vi(e, n.containerInfo);
}
function Du(e, n, t, r, l) {
    return nt(), ci(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, n, t) {
    var r = n.pendingProps,
        l = $.current,
        o = !1,
        i = (n.flags & 128) !== 0,
        u;
    if (
        ((u = i) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((o = !0), (n.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        M($, l & 1),
        e === null)
    )
        return (
            Co(n),
            (e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (n.mode & 1
                      ? e.data === "$!"
                          ? (n.lanes = 8)
                          : (n.lanes = 1073741824)
                      : (n.lanes = 1),
                  null)
                : ((i = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = n.mode),
                        (o = n.child),
                        (i = { mode: "hidden", children: i }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = pl(i, r, 0, null)),
                        (e = Nn(e, r, t, null)),
                        (o.return = n),
                        (e.return = n),
                        (o.sibling = e),
                        (n.child = o),
                        (n.child.memoizedState = jo(t)),
                        (n.memoizedState = Ro),
                        e)
                      : Ci(n, i))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return cd(e, n, i, r, u, l, t);
    if (o) {
        (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(i & 1) && n.child !== l
                ? ((r = n.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (n.deletions = null))
                : ((r = dn(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (o = dn(u, o))
                : ((o = Nn(o, i, t, null)), (o.flags |= 2)),
            (o.return = n),
            (r.return = n),
            (r.sibling = o),
            (n.child = r),
            (r = o),
            (o = n.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? jo(t)
                    : {
                          baseLanes: i.baseLanes | t,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~t),
            (n.memoizedState = Ro),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = dn(o, { mode: "visible", children: r.children })),
        !(n.mode & 1) && (r.lanes = t),
        (r.return = n),
        (r.sibling = null),
        e !== null &&
            ((t = n.deletions),
            t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r
    );
}
function Ci(e, n) {
    return (
        (n = pl({ mode: "visible", children: n }, e.mode, 0, null)),
        (n.return = e),
        (e.child = n)
    );
}
function hr(e, n, t, r) {
    return (
        r !== null && ci(r),
        tt(n, e.child, null, t),
        (e = Ci(n, n.pendingProps.children)),
        (e.flags |= 2),
        (n.memoizedState = null),
        e
    );
}
function cd(e, n, t, r, l, o, i) {
    if (t)
        return n.flags & 256
            ? ((n.flags &= -257), (r = Hl(Error(y(422)))), hr(e, n, i, r))
            : n.memoizedState !== null
            ? ((n.child = e.child), (n.flags |= 128), null)
            : ((o = r.fallback),
              (l = n.mode),
              (r = pl({ mode: "visible", children: r.children }, l, 0, null)),
              (o = Nn(o, l, i, null)),
              (o.flags |= 2),
              (r.return = n),
              (o.return = n),
              (r.sibling = o),
              (n.child = r),
              n.mode & 1 && tt(n, e.child, null, i),
              (n.child.memoizedState = jo(i)),
              (n.memoizedState = Ro),
              o);
    if (!(n.mode & 1)) return hr(e, n, i, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (o = Error(y(419))), (r = Hl(o, r, void 0)), hr(e, n, i, r)
        );
    }
    if (((u = (i & e.childLanes) !== 0), fe || u)) {
        if (((r = J), r !== null)) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | i) ? 0 : l),
                l !== 0 &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), Xe(e, l), Oe(r, e, l, -1));
        }
        return Ti(), (r = Hl(Error(y(421)))), hr(e, n, i, r);
    }
    return l.data === "$?"
        ? ((n.flags |= 128),
          (n.child = e.child),
          (n = xd.bind(null, e)),
          (l._reactRetry = n),
          null)
        : ((e = o.treeContext),
          (ve = sn(l.nextSibling)),
          (ye = n),
          (U = !0),
          (Re = null),
          e !== null &&
              ((ke[Ee++] = He),
              (ke[Ee++] = We),
              (ke[Ee++] = zn),
              (He = e.id),
              (We = e.overflow),
              (zn = n)),
          (n = Ci(n, r.children)),
          (n.flags |= 4096),
          n);
}
function Ou(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), _o(e.return, n, t);
}
function Wl(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: n,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: t,
              tailMode: l,
          })
        : ((o.isBackwards = n),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = t),
          (o.tailMode = l));
}
function Fa(e, n, t) {
    var r = n.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((ie(e, n, r.children, t), (r = $.current), r & 2))
        (r = (r & 1) | 2), (n.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = n.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ou(e, t, n);
                else if (e.tag === 19) Ou(e, t, n);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === n) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((M($, r), !(n.mode & 1))) n.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (t = n.child, l = null; t !== null; )
                    (e = t.alternate),
                        e !== null && Xr(e) === null && (l = t),
                        (t = t.sibling);
                (t = l),
                    t === null
                        ? ((l = n.child), (n.child = null))
                        : ((l = t.sibling), (t.sibling = null)),
                    Wl(n, !1, l, t, o);
                break;
            case "backwards":
                for (t = null, l = n.child, n.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && Xr(e) === null)) {
                        n.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = t), (t = l), (l = e);
                }
                Wl(n, !0, t, null, o);
                break;
            case "together":
                Wl(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null;
        }
    return n.child;
}
function zr(e, n) {
    !(n.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ge(e, n, t) {
    if (
        (e !== null && (n.dependencies = e.dependencies),
        (Tn |= n.lanes),
        !(t & n.childLanes))
    )
        return null;
    if (e !== null && n.child !== e.child) throw Error(y(153));
    if (n.child !== null) {
        for (
            e = n.child, t = dn(e, e.pendingProps), n.child = t, t.return = n;
            e.sibling !== null;

        )
            (e = e.sibling),
                (t = t.sibling = dn(e, e.pendingProps)),
                (t.return = n);
        t.sibling = null;
    }
    return n.child;
}
function fd(e, n, t) {
    switch (n.tag) {
        case 3:
            Ma(n), nt();
            break;
        case 5:
            aa(n);
            break;
        case 1:
            pe(n.type) && Br(n);
            break;
        case 4:
            vi(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                l = n.memoizedProps.value;
            M(Qr, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = n.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (M($, $.current & 1), (n.flags |= 128), null)
                    : t & n.child.childLanes
                    ? Ia(e, n, t)
                    : (M($, $.current & 1),
                      (e = Ge(e, n, t)),
                      e !== null ? e.sibling : null);
            M($, $.current & 1);
            break;
        case 19:
            if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
                if (r) return Fa(e, n, t);
                n.flags |= 128;
            }
            if (
                ((l = n.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                M($, $.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (n.lanes = 0), Da(e, n, t);
    }
    return Ge(e, n, t);
}
var Ua, Do, $a, Va;
Ua = function (e, n) {
    for (var t = n.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === n) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) return;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
};
Do = function () {};
$a = function (e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = n.stateNode), Cn(Ve.current);
        var o = null;
        switch (t) {
            case "input":
                (l = eo(e, l)), (r = eo(e, r)), (o = []);
                break;
            case "select":
                (l = A({}, l, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (l = ro(e, l)), (r = ro(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Vr);
        }
        oo(t, r);
        var i;
        t = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (i in u)
                        u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (jt.hasOwnProperty(c)
                            ? o || (o = [])
                            : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (
                ((u = l != null ? l[c] : void 0),
                r.hasOwnProperty(c) && s !== u && (s != null || u != null))
            )
                if (c === "style")
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) ||
                                (s && s.hasOwnProperty(i)) ||
                                (t || (t = {}), (t[i] = ""));
                        for (i in s)
                            s.hasOwnProperty(i) &&
                                u[i] !== s[i] &&
                                (t || (t = {}), (t[i] = s[i]));
                    } else t || (o || (o = []), o.push(c, t)), (t = s);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (o = o || []).push(c, s))
                        : c === "children"
                        ? (typeof s != "string" && typeof s != "number") ||
                          (o = o || []).push(c, "" + s)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (jt.hasOwnProperty(c)
                              ? (s != null &&
                                    c === "onScroll" &&
                                    I("scroll", e),
                                o || u === s || (o = []))
                              : (o = o || []).push(c, s));
        }
        t && (o = o || []).push("style", t);
        var c = o;
        (n.updateQueue = c) && (n.flags |= 4);
    }
};
Va = function (e, n, t, r) {
    t !== r && (n.flags |= 4);
};
function yt(e, n) {
    if (!U)
        switch (e.tailMode) {
            case "hidden":
                n = e.tail;
                for (var t = null; n !== null; )
                    n.alternate !== null && (t = n), (n = n.sibling);
                t === null ? (e.tail = null) : (t.sibling = null);
                break;
            case "collapsed":
                t = e.tail;
                for (var r = null; t !== null; )
                    t.alternate !== null && (r = t), (t = t.sibling);
                r === null
                    ? n || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function re(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var l = e.child; l !== null; )
            (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function dd(e, n, t) {
    var r = n.pendingProps;
    switch ((ai(n), n.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return re(n), null;
        case 1:
            return pe(n.type) && Ar(), re(n), null;
        case 3:
            return (
                (r = n.stateNode),
                rt(),
                F(de),
                F(oe),
                gi(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (pr(n)
                        ? (n.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                          ((n.flags |= 1024),
                          Re !== null && (Ao(Re), (Re = null)))),
                Do(e, n),
                re(n),
                null
            );
        case 5:
            yi(n);
            var l = Cn(Wt.current);
            if (((t = n.type), e !== null && n.stateNode != null))
                $a(e, n, t, r, l),
                    e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
            else {
                if (!r) {
                    if (n.stateNode === null) throw Error(y(166));
                    return re(n), null;
                }
                if (((e = Cn(Ve.current)), pr(n))) {
                    (r = n.stateNode), (t = n.type);
                    var o = n.memoizedProps;
                    switch (
                        ((r[Ue] = n), (r[Bt] = o), (e = (n.mode & 1) !== 0), t)
                    ) {
                        case "dialog":
                            I("cancel", r), I("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            I("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Et.length; l++) I(Et[l], r);
                            break;
                        case "source":
                            I("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            I("error", r), I("load", r);
                            break;
                        case "details":
                            I("toggle", r);
                            break;
                        case "input":
                            Hi(r, o), I("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                I("invalid", r);
                            break;
                        case "textarea":
                            Qi(r, o), I("invalid", r);
                    }
                    oo(t, o), (l = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          dr(r.textContent, u, e),
                                      (l = ["children", u]))
                                    : typeof u == "number" &&
                                      r.textContent !== "" + u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          dr(r.textContent, u, e),
                                      (l = ["children", "" + u]))
                                : jt.hasOwnProperty(i) &&
                                  u != null &&
                                  i === "onScroll" &&
                                  I("scroll", r);
                        }
                    switch (t) {
                        case "input":
                            lr(r), Wi(r, o, !0);
                            break;
                        case "textarea":
                            lr(r), Ki(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Vr);
                    }
                    (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
                } else {
                    (i = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ms(t)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? t === "script"
                                ? ((e = i.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = i.createElement(t, { is: r.is }))
                                : ((e = i.createElement(t)),
                                  t === "select" &&
                                      ((i = e),
                                      r.multiple
                                          ? (i.multiple = !0)
                                          : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, t)),
                        (e[Ue] = n),
                        (e[Bt] = r),
                        Ua(e, n, !1, !1),
                        (n.stateNode = e);
                    e: {
                        switch (((i = io(t, r)), t)) {
                            case "dialog":
                                I("cancel", e), I("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                I("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Et.length; l++) I(Et[l], e);
                                l = r;
                                break;
                            case "source":
                                I("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                I("error", e), I("load", e), (l = r);
                                break;
                            case "details":
                                I("toggle", e), (l = r);
                                break;
                            case "input":
                                Hi(e, r), (l = eo(e, r)), I("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = A({}, r, { value: void 0 })),
                                    I("invalid", e);
                                break;
                            case "textarea":
                                Qi(e, r), (l = ro(e, r)), I("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        oo(t, l), (u = l);
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === "style"
                                    ? ys(e, s)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && hs(e, s))
                                    : o === "children"
                                    ? typeof s == "string"
                                        ? (t !== "textarea" || s !== "") &&
                                          Dt(e, s)
                                        : typeof s == "number" && Dt(e, "" + s)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (jt.hasOwnProperty(o)
                                          ? s != null &&
                                            o === "onScroll" &&
                                            I("scroll", e)
                                          : s != null && Xo(e, o, s, i));
                            }
                        switch (t) {
                            case "input":
                                lr(e), Wi(e, r, !1);
                                break;
                            case "textarea":
                                lr(e), Ki(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + pn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? Yn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          Yn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = Vr);
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (n.flags |= 4);
                }
                n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
            }
            return re(n), null;
        case 6:
            if (e && n.stateNode != null) Va(e, n, e.memoizedProps, r);
            else {
                if (typeof r != "string" && n.stateNode === null)
                    throw Error(y(166));
                if (((t = Cn(Wt.current)), Cn(Ve.current), pr(n))) {
                    if (
                        ((r = n.stateNode),
                        (t = n.memoizedProps),
                        (r[Ue] = n),
                        (o = r.nodeValue !== t) && ((e = ye), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    dr(r.nodeValue, t, (e.mode & 1) !== 0);
                        }
                    o && (n.flags |= 4);
                } else
                    (r = (
                        t.nodeType === 9 ? t : t.ownerDocument
                    ).createTextNode(r)),
                        (r[Ue] = n),
                        (n.stateNode = r);
            }
            return re(n), null;
        case 13:
            if (
                (F($),
                (r = n.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (U && ve !== null && n.mode & 1 && !(n.flags & 128))
                    la(), nt(), (n.flags |= 98560), (o = !1);
                else if (((o = pr(n)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(y(318));
                        if (
                            ((o = n.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(y(317));
                        o[Ue] = n;
                    } else
                        nt(),
                            !(n.flags & 128) && (n.memoizedState = null),
                            (n.flags |= 4);
                    re(n), (o = !1);
                } else Re !== null && (Ao(Re), (Re = null)), (o = !0);
                if (!o) return n.flags & 65536 ? n : null;
            }
            return n.flags & 128
                ? ((n.lanes = t), n)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((n.child.flags |= 8192),
                      n.mode & 1 &&
                          (e === null || $.current & 1
                              ? X === 0 && (X = 3)
                              : Ti())),
                  n.updateQueue !== null && (n.flags |= 4),
                  re(n),
                  null);
        case 4:
            return (
                rt(),
                Do(e, n),
                e === null && Vt(n.stateNode.containerInfo),
                re(n),
                null
            );
        case 10:
            return pi(n.type._context), re(n), null;
        case 17:
            return pe(n.type) && Ar(), re(n), null;
        case 19:
            if ((F($), (o = n.memoizedState), o === null)) return re(n), null;
            if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) yt(o, !1);
                else {
                    if (X !== 0 || (e !== null && e.flags & 128))
                        for (e = n.child; e !== null; ) {
                            if (((i = Xr(e)), i !== null)) {
                                for (
                                    n.flags |= 128,
                                        yt(o, !1),
                                        r = i.updateQueue,
                                        r !== null &&
                                            ((n.updateQueue = r),
                                            (n.flags |= 4)),
                                        n.subtreeFlags = 0,
                                        r = t,
                                        t = n.child;
                                    t !== null;

                                )
                                    (o = t),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (i = o.alternate),
                                        i === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = i.childLanes),
                                              (o.lanes = i.lanes),
                                              (o.child = i.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  i.memoizedProps),
                                              (o.memoizedState =
                                                  i.memoizedState),
                                              (o.updateQueue = i.updateQueue),
                                              (o.type = i.type),
                                              (e = i.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (t = t.sibling);
                                return M($, ($.current & 1) | 2), n.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        Q() > ot &&
                        ((n.flags |= 128),
                        (r = !0),
                        yt(o, !1),
                        (n.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Xr(i)), e !== null)) {
                        if (
                            ((n.flags |= 128),
                            (r = !0),
                            (t = e.updateQueue),
                            t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                            yt(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !i.alternate &&
                                !U)
                        )
                            return re(n), null;
                    } else
                        2 * Q() - o.renderingStartTime > ot &&
                            t !== 1073741824 &&
                            ((n.flags |= 128),
                            (r = !0),
                            yt(o, !1),
                            (n.lanes = 4194304));
                o.isBackwards
                    ? ((i.sibling = n.child), (n.child = i))
                    : ((t = o.last),
                      t !== null ? (t.sibling = i) : (n.child = i),
                      (o.last = i));
            }
            return o.tail !== null
                ? ((n = o.tail),
                  (o.rendering = n),
                  (o.tail = n.sibling),
                  (o.renderingStartTime = Q()),
                  (n.sibling = null),
                  (t = $.current),
                  M($, r ? (t & 1) | 2 : t & 1),
                  n)
                : (re(n), null);
        case 22:
        case 23:
            return (
                Li(),
                (r = n.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (n.flags |= 8192),
                r && n.mode & 1
                    ? he & 1073741824 &&
                      (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                    : re(n),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(y(156, n.tag));
}
function pd(e, n) {
    switch ((ai(n), n.tag)) {
        case 1:
            return (
                pe(n.type) && Ar(),
                (e = n.flags),
                e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 3:
            return (
                rt(),
                F(de),
                F(oe),
                gi(),
                (e = n.flags),
                e & 65536 && !(e & 128)
                    ? ((n.flags = (e & -65537) | 128), n)
                    : null
            );
        case 5:
            return yi(n), null;
        case 13:
            if (
                (F($),
                (e = n.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (n.alternate === null) throw Error(y(340));
                nt();
            }
            return (
                (e = n.flags),
                e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 19:
            return F($), null;
        case 4:
            return rt(), null;
        case 10:
            return pi(n.type._context), null;
        case 22:
        case 23:
            return Li(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var vr = !1,
    le = !1,
    md = typeof WeakSet == "function" ? WeakSet : Set,
    k = null;
function Qn(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null);
            } catch (r) {
                B(e, n, r);
            }
        else t.current = null;
}
function Oo(e, n, t) {
    try {
        t();
    } catch (r) {
        B(e, n, r);
    }
}
var Mu = !1;
function hd(e, n) {
    if (((yo = Fr), (e = Qs()), ui(e))) {
        if ("selectionStart" in e)
            var t = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                t = ((t = e.ownerDocument) && t.defaultView) || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType, o.nodeType;
                    } catch {
                        t = null;
                        break e;
                    }
                    var i = 0,
                        u = -1,
                        s = -1,
                        c = 0,
                        h = 0,
                        m = e,
                        p = null;
                    n: for (;;) {
                        for (
                            var g;
                            m !== t ||
                                (l !== 0 && m.nodeType !== 3) ||
                                (u = i + l),
                                m !== o ||
                                    (r !== 0 && m.nodeType !== 3) ||
                                    (s = i + r),
                                m.nodeType === 3 && (i += m.nodeValue.length),
                                (g = m.firstChild) !== null;

                        )
                            (p = m), (m = g);
                        for (;;) {
                            if (m === e) break n;
                            if (
                                (p === t && ++c === l && (u = i),
                                p === o && ++h === r && (s = i),
                                (g = m.nextSibling) !== null)
                            )
                                break;
                            (m = p), (p = m.parentNode);
                        }
                        m = g;
                    }
                    t = u === -1 || s === -1 ? null : { start: u, end: s };
                } else t = null;
            }
        t = t || { start: 0, end: 0 };
    } else t = null;
    for (
        go = { focusedElem: e, selectionRange: t }, Fr = !1, k = n;
        k !== null;

    )
        if (
            ((n = k),
            (e = n.child),
            (n.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = n), (k = e);
        else
            for (; k !== null; ) {
                n = k;
                try {
                    var w = n.alternate;
                    if (n.flags & 1024)
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var S = w.memoizedProps,
                                        O = w.memoizedState,
                                        f = n.stateNode,
                                        a = f.getSnapshotBeforeUpdate(
                                            n.elementType === n.type
                                                ? S
                                                : Le(n.type, S),
                                            O
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = n.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(y(163));
                        }
                } catch (v) {
                    B(n, n.return, v);
                }
                if (((e = n.sibling), e !== null)) {
                    (e.return = n.return), (k = e);
                    break;
                }
                k = n.return;
            }
    return (w = Mu), (Mu = !1), w;
}
function Lt(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && Oo(n, t, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function fl(e, n) {
    if (
        ((n = n.updateQueue),
        (n = n !== null ? n.lastEffect : null),
        n !== null)
    ) {
        var t = (n = n.next);
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
            }
            t = t.next;
        } while (t !== n);
    }
}
function Mo(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t;
        }
        typeof n == "function" ? n(e) : (n.current = e);
    }
}
function Aa(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Aa(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((n = e.stateNode),
            n !== null &&
                (delete n[Ue],
                delete n[Bt],
                delete n[ko],
                delete n[Jf],
                delete n[qf])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ba(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Iu(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ba(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Io(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            n
                ? t.nodeType === 8
                    ? t.parentNode.insertBefore(e, n)
                    : t.insertBefore(e, n)
                : (t.nodeType === 8
                      ? ((n = t.parentNode), n.insertBefore(e, t))
                      : ((n = t), n.appendChild(e)),
                  (t = t._reactRootContainer),
                  t != null || n.onclick !== null || (n.onclick = Vr));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Io(e, n, t), e = e.sibling; e !== null; )
            Io(e, n, t), (e = e.sibling);
}
function Fo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Fo(e, n, t), e = e.sibling; e !== null; )
            Fo(e, n, t), (e = e.sibling);
}
var b = null,
    Te = !1;
function Je(e, n, t) {
    for (t = t.child; t !== null; ) Ha(e, n, t), (t = t.sibling);
}
function Ha(e, n, t) {
    if ($e && typeof $e.onCommitFiberUnmount == "function")
        try {
            $e.onCommitFiberUnmount(rl, t);
        } catch {}
    switch (t.tag) {
        case 5:
            le || Qn(t, n);
        case 6:
            var r = b,
                l = Te;
            (b = null),
                Je(e, n, t),
                (b = r),
                (Te = l),
                b !== null &&
                    (Te
                        ? ((e = b),
                          (t = t.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(t)
                              : e.removeChild(t))
                        : b.removeChild(t.stateNode));
            break;
        case 18:
            b !== null &&
                (Te
                    ? ((e = b),
                      (t = t.stateNode),
                      e.nodeType === 8
                          ? Fl(e.parentNode, t)
                          : e.nodeType === 1 && Fl(e, t),
                      Ft(e))
                    : Fl(b, t.stateNode));
            break;
        case 4:
            (r = b),
                (l = Te),
                (b = t.stateNode.containerInfo),
                (Te = !0),
                Je(e, n, t),
                (b = r),
                (Te = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !le &&
                ((r = t.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    (o = o.tag),
                        i !== void 0 && (o & 2 || o & 4) && Oo(t, n, i),
                        (l = l.next);
                } while (l !== r);
            }
            Je(e, n, t);
            break;
        case 1:
            if (
                !le &&
                (Qn(t, n),
                (r = t.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = t.memoizedProps),
                        (r.state = t.memoizedState),
                        r.componentWillUnmount();
                } catch (u) {
                    B(t, n, u);
                }
            Je(e, n, t);
            break;
        case 21:
            Je(e, n, t);
            break;
        case 22:
            t.mode & 1
                ? ((le = (r = le) || t.memoizedState !== null),
                  Je(e, n, t),
                  (le = r))
                : Je(e, n, t);
            break;
        default:
            Je(e, n, t);
    }
}
function Fu(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new md()),
            n.forEach(function (r) {
                var l = Cd.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
    }
}
function ze(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
                var o = e,
                    i = n,
                    u = i;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (b = u.stateNode), (Te = !1);
                            break e;
                        case 3:
                            (b = u.stateNode.containerInfo), (Te = !0);
                            break e;
                        case 4:
                            (b = u.stateNode.containerInfo), (Te = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (b === null) throw Error(y(160));
                Ha(o, i, l), (b = null), (Te = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (c) {
                B(l, n, c);
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null; ) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
    var t = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(n, e), Ie(e), r & 4)) {
                try {
                    Lt(3, e, e.return), fl(3, e);
                } catch (S) {
                    B(e, e.return, S);
                }
                try {
                    Lt(5, e, e.return);
                } catch (S) {
                    B(e, e.return, S);
                }
            }
            break;
        case 1:
            ze(n, e), Ie(e), r & 512 && t !== null && Qn(t, t.return);
            break;
        case 5:
            if (
                (ze(n, e),
                Ie(e),
                r & 512 && t !== null && Qn(t, t.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Dt(l, "");
                } catch (S) {
                    B(e, e.return, S);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    i = t !== null ? t.memoizedProps : o,
                    u = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            ds(l, o),
                            io(u, i);
                        var c = io(u, o);
                        for (i = 0; i < s.length; i += 2) {
                            var h = s[i],
                                m = s[i + 1];
                            h === "style"
                                ? ys(l, m)
                                : h === "dangerouslySetInnerHTML"
                                ? hs(l, m)
                                : h === "children"
                                ? Dt(l, m)
                                : Xo(l, h, m, c);
                        }
                        switch (u) {
                            case "input":
                                no(l, o);
                                break;
                            case "textarea":
                                ps(l, o);
                                break;
                            case "select":
                                var p = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null
                                    ? Yn(l, !!o.multiple, g, !1)
                                    : p !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? Yn(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : Yn(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        l[Bt] = o;
                    } catch (S) {
                        B(e, e.return, S);
                    }
            }
            break;
        case 6:
            if ((ze(n, e), Ie(e), r & 4)) {
                if (e.stateNode === null) throw Error(y(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (S) {
                    B(e, e.return, S);
                }
            }
            break;
        case 3:
            if (
                (ze(n, e),
                Ie(e),
                r & 4 && t !== null && t.memoizedState.isDehydrated)
            )
                try {
                    Ft(n.containerInfo);
                } catch (S) {
                    B(e, e.return, S);
                }
            break;
        case 4:
            ze(n, e), Ie(e);
            break;
        case 13:
            ze(n, e),
                Ie(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (Pi = Q())),
                r & 4 && Fu(e);
            break;
        case 22:
            if (
                ((h = t !== null && t.memoizedState !== null),
                e.mode & 1
                    ? ((le = (c = le) || h), ze(n, e), (le = c))
                    : ze(n, e),
                Ie(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !h && e.mode & 1)
                )
                    for (k = e, h = e.child; h !== null; ) {
                        for (m = k = h; k !== null; ) {
                            switch (((p = k), (g = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Lt(4, p, p.return);
                                    break;
                                case 1:
                                    Qn(p, p.return);
                                    var w = p.stateNode;
                                    if (
                                        typeof w.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = p), (t = p.return);
                                        try {
                                            (n = r),
                                                (w.props = n.memoizedProps),
                                                (w.state = n.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (S) {
                                            B(r, t, S);
                                        }
                                    }
                                    break;
                                case 5:
                                    Qn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        $u(m);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = p), (k = g)) : $u(m);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                (l = m.stateNode),
                                    c
                                        ? ((o = l.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((u = m.stateNode),
                                          (s = m.memoizedProps.style),
                                          (i =
                                              s != null &&
                                              s.hasOwnProperty("display")
                                                  ? s.display
                                                  : null),
                                          (u.style.display = vs("display", i)));
                            } catch (S) {
                                B(e, e.return, S);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null)
                            try {
                                m.stateNode.nodeValue = c
                                    ? ""
                                    : m.memoizedProps;
                            } catch (S) {
                                B(e, e.return, S);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), (m = m.return);
                    }
                    h === m && (h = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling);
                }
            }
            break;
        case 19:
            ze(n, e), Ie(e), r & 4 && Fu(e);
            break;
        case 21:
            break;
        default:
            ze(n, e), Ie(e);
    }
}
function Ie(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null; ) {
                    if (Ba(t)) {
                        var r = t;
                        break e;
                    }
                    t = t.return;
                }
                throw Error(y(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Dt(l, ""), (r.flags &= -33));
                    var o = Iu(e);
                    Fo(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Iu(e);
                    Io(e, u, i);
                    break;
                default:
                    throw Error(y(161));
            }
        } catch (s) {
            B(e, e.return, s);
        }
        e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
}
function vd(e, n, t) {
    (k = e), Qa(e);
}
function Qa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; k !== null; ) {
        var l = k,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || vr;
            if (!i) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || le;
                u = vr;
                var c = le;
                if (((vr = i), (le = s) && !c))
                    for (k = l; k !== null; )
                        (i = k),
                            (s = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? Vu(l)
                                : s !== null
                                ? ((s.return = i), (k = s))
                                : Vu(l);
                for (; o !== null; ) (k = o), Qa(o), (o = o.sibling);
                (k = l), (vr = u), (le = c);
            }
            Uu(e);
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (k = o))
                : Uu(e);
    }
}
function Uu(e) {
    for (; k !== null; ) {
        var n = k;
        if (n.flags & 8772) {
            var t = n.alternate;
            try {
                if (n.flags & 8772)
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            le || fl(5, n);
                            break;
                        case 1:
                            var r = n.stateNode;
                            if (n.flags & 4 && !le)
                                if (t === null) r.componentDidMount();
                                else {
                                    var l =
                                        n.elementType === n.type
                                            ? t.memoizedProps
                                            : Le(n.type, t.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        t.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = n.updateQueue;
                            o !== null && Eu(n, o, r);
                            break;
                        case 3:
                            var i = n.updateQueue;
                            if (i !== null) {
                                if (((t = null), n.child !== null))
                                    switch (n.child.tag) {
                                        case 5:
                                            t = n.child.stateNode;
                                            break;
                                        case 1:
                                            t = n.child.stateNode;
                                    }
                                Eu(n, i, t);
                            }
                            break;
                        case 5:
                            var u = n.stateNode;
                            if (t === null && n.flags & 4) {
                                t = u;
                                var s = n.memoizedProps;
                                switch (n.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && t.focus();
                                        break;
                                    case "img":
                                        s.src && (t.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (n.memoizedState === null) {
                                var c = n.alternate;
                                if (c !== null) {
                                    var h = c.memoizedState;
                                    if (h !== null) {
                                        var m = h.dehydrated;
                                        m !== null && Ft(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(y(163));
                    }
                le || (n.flags & 512 && Mo(n));
            } catch (p) {
                B(n, n.return, p);
            }
        }
        if (n === e) {
            k = null;
            break;
        }
        if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (k = t);
            break;
        }
        k = n.return;
    }
}
function $u(e) {
    for (; k !== null; ) {
        var n = k;
        if (n === e) {
            k = null;
            break;
        }
        var t = n.sibling;
        if (t !== null) {
            (t.return = n.return), (k = t);
            break;
        }
        k = n.return;
    }
}
function Vu(e) {
    for (; k !== null; ) {
        var n = k;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try {
                        fl(4, n);
                    } catch (s) {
                        B(n, t, s);
                    }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = n.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            B(n, l, s);
                        }
                    }
                    var o = n.return;
                    try {
                        Mo(n);
                    } catch (s) {
                        B(n, o, s);
                    }
                    break;
                case 5:
                    var i = n.return;
                    try {
                        Mo(n);
                    } catch (s) {
                        B(n, i, s);
                    }
            }
        } catch (s) {
            B(n, n.return, s);
        }
        if (n === e) {
            k = null;
            break;
        }
        var u = n.sibling;
        if (u !== null) {
            (u.return = n.return), (k = u);
            break;
        }
        k = n.return;
    }
}
var yd = Math.ceil,
    Jr = Ze.ReactCurrentDispatcher,
    _i = Ze.ReactCurrentOwner,
    Ce = Ze.ReactCurrentBatchConfig,
    j = 0,
    J = null,
    K = null,
    ee = 0,
    he = 0,
    Kn = vn(0),
    X = 0,
    Xt = null,
    Tn = 0,
    dl = 0,
    Ni = 0,
    Tt = null,
    ce = null,
    Pi = 0,
    ot = 1 / 0,
    Ae = null,
    qr = !1,
    Uo = null,
    cn = null,
    yr = !1,
    rn = null,
    br = 0,
    Rt = 0,
    $o = null,
    Lr = -1,
    Tr = 0;
function ue() {
    return j & 6 ? Q() : Lr !== -1 ? Lr : (Lr = Q());
}
function fn(e) {
    return e.mode & 1
        ? j & 2 && ee !== 0
            ? ee & -ee
            : ed.transition !== null
            ? (Tr === 0 && (Tr = Ls()), Tr)
            : ((e = D),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
              e)
        : 1;
}
function Oe(e, n, t, r) {
    if (50 < Rt) throw ((Rt = 0), ($o = null), Error(y(185)));
    Zt(e, t, r),
        (!(j & 2) || e !== J) &&
            (e === J && (!(j & 2) && (dl |= t), X === 4 && nn(e, ee)),
            me(e, r),
            t === 1 &&
                j === 0 &&
                !(n.mode & 1) &&
                ((ot = Q() + 500), sl && yn()));
}
function me(e, n) {
    var t = e.callbackNode;
    bc(e, n);
    var r = Ir(e, e === J ? ee : 0);
    if (r === 0)
        t !== null && Gi(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
        if ((t != null && Gi(t), n === 1))
            e.tag === 0 ? bf(Au.bind(null, e)) : na(Au.bind(null, e)),
                Gf(function () {
                    !(j & 6) && yn();
                }),
                (t = null);
        else {
            switch (Ts(r)) {
                case 1:
                    t = bo;
                    break;
                case 4:
                    t = Ps;
                    break;
                case 16:
                    t = Mr;
                    break;
                case 536870912:
                    t = zs;
                    break;
                default:
                    t = Mr;
            }
            t = ba(t, Ka.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = t);
    }
}
function Ka(e, n) {
    if (((Lr = -1), (Tr = 0), j & 6)) throw Error(y(327));
    var t = e.callbackNode;
    if (qn() && e.callbackNode !== t) return null;
    var r = Ir(e, e === J ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = el(e, r);
    else {
        n = r;
        var l = j;
        j |= 2;
        var o = Xa();
        (J !== e || ee !== n) && ((Ae = null), (ot = Q() + 500), _n(e, n));
        do
            try {
                Sd();
                break;
            } catch (u) {
                Ya(e, u);
            }
        while (!0);
        di(),
            (Jr.current = o),
            (j = l),
            K !== null ? (n = 0) : ((J = null), (ee = 0), (n = X));
    }
    if (n !== 0) {
        if (
            (n === 2 && ((l = fo(e)), l !== 0 && ((r = l), (n = Vo(e, l)))),
            n === 1)
        )
            throw ((t = Xt), _n(e, 0), nn(e, r), me(e, Q()), t);
        if (n === 6) nn(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !gd(l) &&
                    ((n = el(e, r)),
                    n === 2 &&
                        ((o = fo(e)), o !== 0 && ((r = o), (n = Vo(e, o)))),
                    n === 1))
            )
                throw ((t = Xt), _n(e, 0), nn(e, r), me(e, Q()), t);
            switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    kn(e, ce, Ae);
                    break;
                case 3:
                    if (
                        (nn(e, r),
                        (r & 130023424) === r && ((n = Pi + 500 - Q()), 10 < n))
                    ) {
                        if (Ir(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ue(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = So(kn.bind(null, e, ce, Ae), n);
                        break;
                    }
                    kn(e, ce, Ae);
                    break;
                case 4:
                    if ((nn(e, r), (r & 4194240) === r)) break;
                    for (n = e.eventTimes, l = -1; 0 < r; ) {
                        var i = 31 - De(r);
                        (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
                    }
                    if (
                        ((r = l),
                        (r = Q() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * yd(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = So(kn.bind(null, e, ce, Ae), r);
                        break;
                    }
                    kn(e, ce, Ae);
                    break;
                case 5:
                    kn(e, ce, Ae);
                    break;
                default:
                    throw Error(y(329));
            }
        }
    }
    return me(e, Q()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function Vo(e, n) {
    var t = Tt;
    return (
        e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256),
        (e = el(e, n)),
        e !== 2 && ((n = ce), (ce = t), n !== null && Ao(n)),
        e
    );
}
function Ao(e) {
    ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function gd(e) {
    for (var n = e; ; ) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && ((t = t.stores), t !== null))
                for (var r = 0; r < t.length; r++) {
                    var l = t[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Me(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
            (t.return = n), (n = t);
        else {
            if (n === e) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) return !0;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }
    return !0;
}
function nn(e, n) {
    for (
        n &= ~Ni,
            n &= ~dl,
            e.suspendedLanes |= n,
            e.pingedLanes &= ~n,
            e = e.expirationTimes;
        0 < n;

    ) {
        var t = 31 - De(n),
            r = 1 << t;
        (e[t] = -1), (n &= ~r);
    }
}
function Au(e) {
    if (j & 6) throw Error(y(327));
    qn();
    var n = Ir(e, 0);
    if (!(n & 1)) return me(e, Q()), null;
    var t = el(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = fo(e);
        r !== 0 && ((n = r), (t = Vo(e, r)));
    }
    if (t === 1) throw ((t = Xt), _n(e, 0), nn(e, n), me(e, Q()), t);
    if (t === 6) throw Error(y(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = n),
        kn(e, ce, Ae),
        me(e, Q()),
        null
    );
}
function zi(e, n) {
    var t = j;
    j |= 1;
    try {
        return e(n);
    } finally {
        (j = t), j === 0 && ((ot = Q() + 500), sl && yn());
    }
}
function Rn(e) {
    rn !== null && rn.tag === 0 && !(j & 6) && qn();
    var n = j;
    j |= 1;
    var t = Ce.transition,
        r = D;
    try {
        if (((Ce.transition = null), (D = 1), e)) return e();
    } finally {
        (D = r), (Ce.transition = t), (j = n), !(j & 6) && yn();
    }
}
function Li() {
    (he = Kn.current), F(Kn);
}
function _n(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Xf(t)), K !== null))
        for (t = K.return; t !== null; ) {
            var r = t;
            switch ((ai(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ar();
                    break;
                case 3:
                    rt(), F(de), F(oe), gi();
                    break;
                case 5:
                    yi(r);
                    break;
                case 4:
                    rt();
                    break;
                case 13:
                    F($);
                    break;
                case 19:
                    F($);
                    break;
                case 10:
                    pi(r.type._context);
                    break;
                case 22:
                case 23:
                    Li();
            }
            t = t.return;
        }
    if (
        ((J = e),
        (K = e = dn(e.current, null)),
        (ee = he = n),
        (X = 0),
        (Xt = null),
        (Ni = dl = Tn = 0),
        (ce = Tt = null),
        xn !== null)
    ) {
        for (n = 0; n < xn.length; n++)
            if (((t = xn[n]), (r = t.interleaved), r !== null)) {
                t.interleaved = null;
                var l = r.next,
                    o = t.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = l), (r.next = i);
                }
                t.pending = r;
            }
        xn = null;
    }
    return e;
}
function Ya(e, n) {
    do {
        var t = K;
        try {
            if ((di(), (Nr.current = Zr), Gr)) {
                for (var r = V.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Gr = !1;
            }
            if (
                ((Ln = 0),
                (Z = Y = V = null),
                (zt = !1),
                (Qt = 0),
                (_i.current = null),
                t === null || t.return === null)
            ) {
                (X = 1), (Xt = n), (K = null);
                break;
            }
            e: {
                var o = e,
                    i = t.return,
                    u = t,
                    s = n;
                if (
                    ((n = ee),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == "object" &&
                        typeof s.then == "function")
                ) {
                    var c = s,
                        h = u,
                        m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = h.alternate;
                        p
                            ? ((h.updateQueue = p.updateQueue),
                              (h.memoizedState = p.memoizedState),
                              (h.lanes = p.lanes))
                            : ((h.updateQueue = null),
                              (h.memoizedState = null));
                    }
                    var g = zu(i);
                    if (g !== null) {
                        (g.flags &= -257),
                            Lu(g, i, u, o, n),
                            g.mode & 1 && Pu(o, c, n),
                            (n = g),
                            (s = c);
                        var w = n.updateQueue;
                        if (w === null) {
                            var S = new Set();
                            S.add(s), (n.updateQueue = S);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(n & 1)) {
                            Pu(o, c, n), Ti();
                            break e;
                        }
                        s = Error(y(426));
                    }
                } else if (U && u.mode & 1) {
                    var O = zu(i);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256),
                            Lu(O, i, u, o, n),
                            ci(lt(s, u));
                        break e;
                    }
                }
                (o = s = lt(s, u)),
                    X !== 4 && (X = 2),
                    Tt === null ? (Tt = [o]) : Tt.push(o),
                    (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                            var f = Ta(o, s, n);
                            ku(o, f);
                            break e;
                        case 1:
                            u = s;
                            var a = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof a.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (cn === null || !cn.has(d))))
                            ) {
                                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                                var v = Ra(o, u, n);
                                ku(o, v);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Za(t);
        } catch (E) {
            (n = E), K === t && t !== null && (K = t = t.return);
            continue;
        }
        break;
    } while (!0);
}
function Xa() {
    var e = Jr.current;
    return (Jr.current = Zr), e === null ? Zr : e;
}
function Ti() {
    (X === 0 || X === 3 || X === 2) && (X = 4),
        J === null || (!(Tn & 268435455) && !(dl & 268435455)) || nn(J, ee);
}
function el(e, n) {
    var t = j;
    j |= 2;
    var r = Xa();
    (J !== e || ee !== n) && ((Ae = null), _n(e, n));
    do
        try {
            wd();
            break;
        } catch (l) {
            Ya(e, l);
        }
    while (!0);
    if ((di(), (j = t), (Jr.current = r), K !== null)) throw Error(y(261));
    return (J = null), (ee = 0), X;
}
function wd() {
    for (; K !== null; ) Ga(K);
}
function Sd() {
    for (; K !== null && !Wc(); ) Ga(K);
}
function Ga(e) {
    var n = qa(e.alternate, e, he);
    (e.memoizedProps = e.pendingProps),
        n === null ? Za(e) : (K = n),
        (_i.current = null);
}
function Za(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (((e = n.return), n.flags & 32768)) {
            if (((t = pd(t, n)), t !== null)) {
                (t.flags &= 32767), (K = t);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (X = 6), (K = null);
                return;
            }
        } else if (((t = dd(t, n, he)), t !== null)) {
            K = t;
            return;
        }
        if (((n = n.sibling), n !== null)) {
            K = n;
            return;
        }
        K = n = e;
    } while (n !== null);
    X === 0 && (X = 5);
}
function kn(e, n, t) {
    var r = D,
        l = Ce.transition;
    try {
        (Ce.transition = null), (D = 1), kd(e, n, t, r);
    } finally {
        (Ce.transition = l), (D = r);
    }
    return null;
}
function kd(e, n, t, r) {
    do qn();
    while (rn !== null);
    if (j & 6) throw Error(y(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
        throw Error(y(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = t.lanes | t.childLanes;
    if (
        (ef(e, o),
        e === J && ((K = J = null), (ee = 0)),
        (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
            yr ||
            ((yr = !0),
            ba(Mr, function () {
                return qn(), null;
            })),
        (o = (t.flags & 15990) !== 0),
        t.subtreeFlags & 15990 || o)
    ) {
        (o = Ce.transition), (Ce.transition = null);
        var i = D;
        D = 1;
        var u = j;
        (j |= 4),
            (_i.current = null),
            hd(e, t),
            Wa(t, e),
            Af(go),
            (Fr = !!yo),
            (go = yo = null),
            (e.current = t),
            vd(t),
            Qc(),
            (j = u),
            (D = i),
            (Ce.transition = o);
    } else e.current = t;
    if (
        (yr && ((yr = !1), (rn = e), (br = l)),
        (o = e.pendingLanes),
        o === 0 && (cn = null),
        Xc(t.stateNode),
        me(e, Q()),
        n !== null)
    )
        for (r = e.onRecoverableError, t = 0; t < n.length; t++)
            (l = n[t]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (qr) throw ((qr = !1), (e = Uo), (Uo = null), e);
    return (
        br & 1 && e.tag !== 0 && qn(),
        (o = e.pendingLanes),
        o & 1 ? (e === $o ? Rt++ : ((Rt = 0), ($o = e))) : (Rt = 0),
        yn(),
        null
    );
}
function qn() {
    if (rn !== null) {
        var e = Ts(br),
            n = Ce.transition,
            t = D;
        try {
            if (((Ce.transition = null), (D = 16 > e ? 16 : e), rn === null))
                var r = !1;
            else {
                if (((e = rn), (rn = null), (br = 0), j & 6))
                    throw Error(y(331));
                var l = j;
                for (j |= 4, k = e.current; k !== null; ) {
                    var o = k,
                        i = o.child;
                    if (k.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (k = c; k !== null; ) {
                                    var h = k;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Lt(8, h, o);
                                    }
                                    var m = h.child;
                                    if (m !== null) (m.return = h), (k = m);
                                    else
                                        for (; k !== null; ) {
                                            h = k;
                                            var p = h.sibling,
                                                g = h.return;
                                            if ((Aa(h), h === c)) {
                                                k = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = g), (k = p);
                                                break;
                                            }
                                            k = g;
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var S = w.child;
                                if (S !== null) {
                                    w.child = null;
                                    do {
                                        var O = S.sibling;
                                        (S.sibling = null), (S = O);
                                    } while (S !== null);
                                }
                            }
                            k = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (k = i);
                    else
                        e: for (; k !== null; ) {
                            if (((o = k), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Lt(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (k = f);
                                break e;
                            }
                            k = o.return;
                        }
                }
                var a = e.current;
                for (k = a; k !== null; ) {
                    i = k;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null)
                        (d.return = i), (k = d);
                    else
                        e: for (i = a; k !== null; ) {
                            if (((u = k), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fl(9, u);
                                    }
                                } catch (E) {
                                    B(u, u.return, E);
                                }
                            if (u === i) {
                                k = null;
                                break e;
                            }
                            var v = u.sibling;
                            if (v !== null) {
                                (v.return = u.return), (k = v);
                                break e;
                            }
                            k = u.return;
                        }
                }
                if (
                    ((j = l),
                    yn(),
                    $e && typeof $e.onPostCommitFiberRoot == "function")
                )
                    try {
                        $e.onPostCommitFiberRoot(rl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (D = t), (Ce.transition = n);
        }
    }
    return !1;
}
function Bu(e, n, t) {
    (n = lt(t, n)),
        (n = Ta(e, n, 1)),
        (e = an(e, n, 1)),
        (n = ue()),
        e !== null && (Zt(e, 1, n), me(e, n));
}
function B(e, n, t) {
    if (e.tag === 3) Bu(e, e, t);
    else
        for (; n !== null; ) {
            if (n.tag === 3) {
                Bu(n, e, t);
                break;
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (
                    typeof n.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (cn === null || !cn.has(r)))
                ) {
                    (e = lt(t, e)),
                        (e = Ra(n, e, 1)),
                        (n = an(n, e, 1)),
                        (e = ue()),
                        n !== null && (Zt(n, 1, e), me(n, e));
                    break;
                }
            }
            n = n.return;
        }
}
function Ed(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
        (n = ue()),
        (e.pingedLanes |= e.suspendedLanes & t),
        J === e &&
            (ee & t) === t &&
            (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Q() - Pi)
                ? _n(e, 0)
                : (Ni |= t)),
        me(e, n);
}
function Ja(e, n) {
    n === 0 &&
        (e.mode & 1
            ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
            : (n = 1));
    var t = ue();
    (e = Xe(e, n)), e !== null && (Zt(e, n, t), me(e, t));
}
function xd(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), Ja(e, t);
}
function Cd(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (t = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314));
    }
    r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
        else {
            if (!(e.lanes & t) && !(n.flags & 128))
                return (fe = !1), fd(e, n, t);
            fe = !!(e.flags & 131072);
        }
    else (fe = !1), U && n.flags & 1048576 && ta(n, Wr, n.index);
    switch (((n.lanes = 0), n.tag)) {
        case 2:
            var r = n.type;
            zr(e, n), (e = n.pendingProps);
            var l = et(n, oe.current);
            Jn(n, t), (l = Si(null, n, r, e, l, t));
            var o = ki();
            return (
                (n.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((n.tag = 1),
                      (n.memoizedState = null),
                      (n.updateQueue = null),
                      pe(r) ? ((o = !0), Br(n)) : (o = !1),
                      (n.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      hi(n),
                      (l.updater = cl),
                      (n.stateNode = l),
                      (l._reactInternals = n),
                      Po(n, r, e, t),
                      (n = To(null, n, r, !0, o, t)))
                    : ((n.tag = 0),
                      U && o && si(n),
                      ie(null, n, l, t),
                      (n = n.child)),
                n
            );
        case 16:
            r = n.elementType;
            e: {
                switch (
                    (zr(e, n),
                    (e = n.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (n.type = r),
                    (l = n.tag = Nd(r)),
                    (e = Le(r, e)),
                    l)
                ) {
                    case 0:
                        n = Lo(null, n, r, e, t);
                        break e;
                    case 1:
                        n = ju(null, n, r, e, t);
                        break e;
                    case 11:
                        n = Tu(null, n, r, e, t);
                        break e;
                    case 14:
                        n = Ru(null, n, r, Le(r.type, e), t);
                        break e;
                }
                throw Error(y(306, r, ""));
            }
            return n;
        case 0:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Le(r, l)),
                Lo(e, n, r, l, t)
            );
        case 1:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Le(r, l)),
                ju(e, n, r, l, t)
            );
        case 3:
            e: {
                if ((Ma(n), e === null)) throw Error(y(387));
                (r = n.pendingProps),
                    (o = n.memoizedState),
                    (l = o.element),
                    sa(e, n),
                    Yr(n, r, null, t);
                var i = n.memoizedState;
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries:
                                i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (n.updateQueue.baseState = o),
                        (n.memoizedState = o),
                        n.flags & 256)
                    ) {
                        (l = lt(Error(y(423)), n)), (n = Du(e, n, r, t, l));
                        break e;
                    } else if (r !== l) {
                        (l = lt(Error(y(424)), n)), (n = Du(e, n, r, t, l));
                        break e;
                    } else
                        for (
                            ve = sn(n.stateNode.containerInfo.firstChild),
                                ye = n,
                                U = !0,
                                Re = null,
                                t = ia(n, null, r, t),
                                n.child = t;
                            t;

                        )
                            (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
                else {
                    if ((nt(), r === l)) {
                        n = Ge(e, n, t);
                        break e;
                    }
                    ie(e, n, r, t);
                }
                n = n.child;
            }
            return n;
        case 5:
            return (
                aa(n),
                e === null && Co(n),
                (r = n.type),
                (l = n.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                wo(r, l)
                    ? (i = null)
                    : o !== null && wo(r, o) && (n.flags |= 32),
                Oa(e, n),
                ie(e, n, i, t),
                n.child
            );
        case 6:
            return e === null && Co(n), null;
        case 13:
            return Ia(e, n, t);
        case 4:
            return (
                vi(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                e === null ? (n.child = tt(n, null, r, t)) : ie(e, n, r, t),
                n.child
            );
        case 11:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Le(r, l)),
                Tu(e, n, r, l, t)
            );
        case 7:
            return ie(e, n, n.pendingProps, t), n.child;
        case 8:
            return ie(e, n, n.pendingProps.children, t), n.child;
        case 12:
            return ie(e, n, n.pendingProps.children, t), n.child;
        case 10:
            e: {
                if (
                    ((r = n.type._context),
                    (l = n.pendingProps),
                    (o = n.memoizedProps),
                    (i = l.value),
                    M(Qr, r._currentValue),
                    (r._currentValue = i),
                    o !== null)
                )
                    if (Me(o.value, i)) {
                        if (o.children === l.children && !de.current) {
                            n = Ge(e, n, t);
                            break e;
                        }
                    } else
                        for (
                            o = n.child, o !== null && (o.return = n);
                            o !== null;

                        ) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            (s = Qe(-1, t & -t)), (s.tag = 2);
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var h = c.pending;
                                                h === null
                                                    ? (s.next = s)
                                                    : ((s.next = h.next),
                                                      (h.next = s)),
                                                    (c.pending = s);
                                            }
                                        }
                                        (o.lanes |= t),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= t),
                                            _o(o.return, t, n),
                                            (u.lanes |= t);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (o.tag === 10)
                                i = o.type === n.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null))
                                    throw Error(y(341));
                                (i.lanes |= t),
                                    (u = i.alternate),
                                    u !== null && (u.lanes |= t),
                                    _o(i, t, n),
                                    (i = o.sibling);
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null; ) {
                                    if (i === n) {
                                        i = null;
                                        break;
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        (o.return = i.return), (i = o);
                                        break;
                                    }
                                    i = i.return;
                                }
                            o = i;
                        }
                ie(e, n, l.children, t), (n = n.child);
            }
            return n;
        case 9:
            return (
                (l = n.type),
                (r = n.pendingProps.children),
                Jn(n, t),
                (l = _e(l)),
                (r = r(l)),
                (n.flags |= 1),
                ie(e, n, r, t),
                n.child
            );
        case 14:
            return (
                (r = n.type),
                (l = Le(r, n.pendingProps)),
                (l = Le(r.type, l)),
                Ru(e, n, r, l, t)
            );
        case 15:
            return ja(e, n, n.type, n.pendingProps, t);
        case 17:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : Le(r, l)),
                zr(e, n),
                (n.tag = 1),
                pe(r) ? ((e = !0), Br(n)) : (e = !1),
                Jn(n, t),
                La(n, r, l),
                Po(n, r, l, t),
                To(null, n, r, !0, e, t)
            );
        case 19:
            return Fa(e, n, t);
        case 22:
            return Da(e, n, t);
    }
    throw Error(y(156, n.tag));
};
function ba(e, n) {
    return Ns(e, n);
}
function _d(e, n, t, r) {
    (this.tag = e),
        (this.key = t),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function xe(e, n, t, r) {
    return new _d(e, n, t, r);
}
function Ri(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nd(e) {
    if (typeof e == "function") return Ri(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Zo)) return 11;
        if (e === Jo) return 14;
    }
    return 2;
}
function dn(e, n) {
    var t = e.alternate;
    return (
        t === null
            ? ((t = xe(e.tag, n, e.key, e.mode)),
              (t.elementType = e.elementType),
              (t.type = e.type),
              (t.stateNode = e.stateNode),
              (t.alternate = e),
              (e.alternate = t))
            : ((t.pendingProps = n),
              (t.type = e.type),
              (t.flags = 0),
              (t.subtreeFlags = 0),
              (t.deletions = null)),
        (t.flags = e.flags & 14680064),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies =
            n === null
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
    );
}
function Rr(e, n, t, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Ri(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case In:
                return Nn(t.children, l, o, n);
            case Go:
                (i = 8), (l |= 8);
                break;
            case Zl:
                return (
                    (e = xe(12, t, n, l | 2)),
                    (e.elementType = Zl),
                    (e.lanes = o),
                    e
                );
            case Jl:
                return (
                    (e = xe(13, t, n, l)),
                    (e.elementType = Jl),
                    (e.lanes = o),
                    e
                );
            case ql:
                return (
                    (e = xe(19, t, n, l)),
                    (e.elementType = ql),
                    (e.lanes = o),
                    e
                );
            case as:
                return pl(t, l, o, n);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case us:
                            i = 10;
                            break e;
                        case ss:
                            i = 9;
                            break e;
                        case Zo:
                            i = 11;
                            break e;
                        case Jo:
                            i = 14;
                            break e;
                        case qe:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(y(130, e == null ? e : typeof e, ""));
        }
    return (
        (n = xe(i, t, n, l)),
        (n.elementType = e),
        (n.type = r),
        (n.lanes = o),
        n
    );
}
function Nn(e, n, t, r) {
    return (e = xe(7, e, r, n)), (e.lanes = t), e;
}
function pl(e, n, t, r) {
    return (
        (e = xe(22, e, r, n)),
        (e.elementType = as),
        (e.lanes = t),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Ql(e, n, t) {
    return (e = xe(6, e, null, n)), (e.lanes = t), e;
}
function Kl(e, n, t) {
    return (
        (n = xe(4, e.children !== null ? e.children : [], e.key, n)),
        (n.lanes = t),
        (n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        n
    );
}
function Pd(e, n, t, r, l) {
    (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Nl(0)),
        (this.expirationTimes = Nl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Nl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function ji(e, n, t, r, l, o, i, u, s) {
    return (
        (e = new Pd(e, n, t, u, s)),
        n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
        (o = xe(3, null, null, n)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: t,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        hi(o),
        e
    );
}
function zd(e, n, t) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Mn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t,
    };
}
function ec(e) {
    if (!e) return mn;
    e = e._reactInternals;
    e: {
        if (Dn(e) !== e || e.tag !== 1) throw Error(y(170));
        var n = e;
        do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (pe(n.type)) {
                        n =
                            n.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            n = n.return;
        } while (n !== null);
        throw Error(y(171));
    }
    if (e.tag === 1) {
        var t = e.type;
        if (pe(t)) return ea(e, t, n);
    }
    return n;
}
function nc(e, n, t, r, l, o, i, u, s) {
    return (
        (e = ji(t, r, !0, e, l, o, i, u, s)),
        (e.context = ec(null)),
        (t = e.current),
        (r = ue()),
        (l = fn(t)),
        (o = Qe(r, l)),
        (o.callback = n ?? null),
        an(t, o, l),
        (e.current.lanes = l),
        Zt(e, l, r),
        me(e, r),
        e
    );
}
function ml(e, n, t, r) {
    var l = n.current,
        o = ue(),
        i = fn(l);
    return (
        (t = ec(t)),
        n.context === null ? (n.context = t) : (n.pendingContext = t),
        (n = Qe(o, i)),
        (n.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (n.callback = r),
        (e = an(l, n, i)),
        e !== null && (Oe(e, l, i, o), _r(e, l, i)),
        i
    );
}
function nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Hu(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n;
    }
}
function Di(e, n) {
    Hu(e, n), (e = e.alternate) && Hu(e, n);
}
function Ld() {
    return null;
}
var tc =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Oi(e) {
    this._internalRoot = e;
}
hl.prototype.render = Oi.prototype.render = function (e) {
    var n = this._internalRoot;
    if (n === null) throw Error(y(409));
    ml(e, n, null, null);
};
hl.prototype.unmount = Oi.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Rn(function () {
            ml(null, e, null, null);
        }),
            (n[Ye] = null);
    }
};
function hl(e) {
    this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var n = Ds();
        e = { blockedOn: null, target: e, priority: n };
        for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
        en.splice(t, 0, e), t === 0 && Ms(e);
    }
};
function Mi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Wu() {}
function Td(e, n, t, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = nl(i);
                o.call(c);
            };
        }
        var i = nc(n, r, e, 0, null, !1, !1, "", Wu);
        return (
            (e._reactRootContainer = i),
            (e[Ye] = i.current),
            Vt(e.nodeType === 8 ? e.parentNode : e),
            Rn(),
            i
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var c = nl(s);
            u.call(c);
        };
    }
    var s = ji(e, 0, !1, null, null, !1, !1, "", Wu);
    return (
        (e._reactRootContainer = s),
        (e[Ye] = s.current),
        Vt(e.nodeType === 8 ? e.parentNode : e),
        Rn(function () {
            ml(n, s, t, r);
        }),
        s
    );
}
function yl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var s = nl(i);
                u.call(s);
            };
        }
        ml(n, i, e, l);
    } else i = Td(t, n, e, l, r);
    return nl(i);
}
Rs = function (e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var t = kt(n.pendingLanes);
                t !== 0 &&
                    (ei(n, t | 1),
                    me(n, Q()),
                    !(j & 6) && ((ot = Q() + 500), yn()));
            }
            break;
        case 13:
            Rn(function () {
                var r = Xe(e, 1);
                if (r !== null) {
                    var l = ue();
                    Oe(r, e, 1, l);
                }
            }),
                Di(e, 1);
    }
};
ni = function (e) {
    if (e.tag === 13) {
        var n = Xe(e, 134217728);
        if (n !== null) {
            var t = ue();
            Oe(n, e, 134217728, t);
        }
        Di(e, 134217728);
    }
};
js = function (e) {
    if (e.tag === 13) {
        var n = fn(e),
            t = Xe(e, n);
        if (t !== null) {
            var r = ue();
            Oe(t, e, n, r);
        }
        Di(e, n);
    }
};
Ds = function () {
    return D;
};
Os = function (e, n) {
    var t = D;
    try {
        return (D = e), n();
    } finally {
        D = t;
    }
};
so = function (e, n, t) {
    switch (n) {
        case "input":
            if ((no(e, t), (n = t.name), t.type === "radio" && n != null)) {
                for (t = e; t.parentNode; ) t = t.parentNode;
                for (
                    t = t.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + n) +
                            '][type="radio"]'
                    ),
                        n = 0;
                    n < t.length;
                    n++
                ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                        var l = ul(r);
                        if (!l) throw Error(y(90));
                        fs(r), no(r, l);
                    }
                }
            }
            break;
        case "textarea":
            ps(e, t);
            break;
        case "select":
            (n = t.value), n != null && Yn(e, !!t.multiple, n, !1);
    }
};
Ss = zi;
ks = Rn;
var Rd = { usingClientEntryPoint: !1, Events: [qt, Vn, ul, gs, ws, zi] },
    gt = {
        findFiberByHostInstance: En,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    jd = {
        bundleType: gt.bundleType,
        version: gt.version,
        rendererPackageName: gt.rendererPackageName,
        rendererConfig: gt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Cs(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: gt.findFiberByHostInstance || Ld,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber)
        try {
            (rl = gr.inject(jd)), ($e = gr);
        } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
we.createPortal = function (e, n) {
    var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mi(n)) throw Error(y(200));
    return zd(e, n, null, t);
};
we.createRoot = function (e, n) {
    if (!Mi(e)) throw Error(y(299));
    var t = !1,
        r = "",
        l = tc;
    return (
        n != null &&
            (n.unstable_strictMode === !0 && (t = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = ji(e, 1, !1, null, null, t, !1, r, l)),
        (e[Ye] = n.current),
        Vt(e.nodeType === 8 ? e.parentNode : e),
        new Oi(n)
    );
};
we.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
        throw typeof e.render == "function"
            ? Error(y(188))
            : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (e = Cs(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
    return Rn(e);
};
we.hydrate = function (e, n, t) {
    if (!vl(n)) throw Error(y(200));
    return yl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
    if (!Mi(e)) throw Error(y(405));
    var r = (t != null && t.hydratedSources) || null,
        l = !1,
        o = "",
        i = tc;
    if (
        (t != null &&
            (t.unstable_strictMode === !0 && (l = !0),
            t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = nc(n, null, e, 1, t ?? null, l, !1, o, i)),
        (e[Ye] = n.current),
        Vt(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (t = r[e]),
                (l = t._getVersion),
                (l = l(t._source)),
                n.mutableSourceEagerHydrationData == null
                    ? (n.mutableSourceEagerHydrationData = [t, l])
                    : n.mutableSourceEagerHydrationData.push(t, l);
    return new hl(n);
};
we.render = function (e, n, t) {
    if (!vl(n)) throw Error(y(200));
    return yl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
    if (!vl(e)) throw Error(y(40));
    return e._reactRootContainer
        ? (Rn(function () {
              yl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Ye] = null);
              });
          }),
          !0)
        : !1;
};
we.unstable_batchedUpdates = zi;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
    if (!vl(t)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return yl(e, n, t, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function rc() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
        } catch (e) {
            console.error(e);
        }
}
rc(), (rs.exports = we);
var Dd = rs.exports,
    Qu = Dd;
(Xl.createRoot = Qu.createRoot), (Xl.hydrateRoot = Qu.hydrateRoot);
const Od = () =>
        P.jsxs("div", {
            className: "header--container",
            children: [
                P.jsx("h2", {
                    className: "header--title-light",
                    children: "Know Your",
                }),
                P.jsx("h1", {
                    className: "header--title-strong",
                    children: "COFFEE",
                }),
            ],
        }),
    Md = ({ title: e, content: n, hasImage: t, imagePath: r }) =>
        P.jsxs("div", {
            className: "description--container",
            children: [
                P.jsxs("div", {
                    className: "description--text-container mt-4",
                    children: [
                        P.jsx("h2", { children: e }),
                        P.jsxs("p", { children: [n, " "] }),
                    ],
                }),
                P.jsx("div", {
                    className: "description--image-container mt-4",
                    children:
                        t &&
                        P.jsx("img", {
                            className: "description--img",
                            src: r,
                            alt: e + "-image",
                        }),
                }),
            ],
        });
var wr,
    Id = new Uint8Array(16);
function Fd() {
    if (
        !wr &&
        ((wr =
            (typeof crypto < "u" &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
            (typeof msCrypto < "u" &&
                typeof msCrypto.getRandomValues == "function" &&
                msCrypto.getRandomValues.bind(msCrypto))),
        !wr)
    )
        throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
    return wr(Id);
}
const Ud =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function $d(e) {
    return typeof e == "string" && Ud.test(e);
}
var q = [];
for (var Yl = 0; Yl < 256; ++Yl) q.push((Yl + 256).toString(16).substr(1));
function Vd(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        t = (
            q[e[n + 0]] +
            q[e[n + 1]] +
            q[e[n + 2]] +
            q[e[n + 3]] +
            "-" +
            q[e[n + 4]] +
            q[e[n + 5]] +
            "-" +
            q[e[n + 6]] +
            q[e[n + 7]] +
            "-" +
            q[e[n + 8]] +
            q[e[n + 9]] +
            "-" +
            q[e[n + 10]] +
            q[e[n + 11]] +
            q[e[n + 12]] +
            q[e[n + 13]] +
            q[e[n + 14]] +
            q[e[n + 15]]
        ).toLowerCase();
    if (!$d(t)) throw TypeError("Stringified UUID is invalid");
    return t;
}
function Ad(e, n, t) {
    e = e || {};
    var r = e.random || (e.rng || Fd)();
    return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), Vd(r);
}
const Bd = ({ steps: e }) => {
        const n = e.map((t, r) =>
            P.jsx(
                Hd,
                {
                    header: t.header,
                    description: t.description,
                    classAddition: `${r === 0 ? "round-top-corners" : ""} ${
                        r === e.length - 1 ? "round-bottom-corners" : ""
                    }`,
                },
                Ad()
            )
        );
        return P.jsxs("div", {
            className: "preparation--container mt-4",
            children: [
                P.jsx("h3", {
                    className: "preparation--title",
                    children: "Preparation",
                }),
                P.jsx("div", {
                    className: "preparation--steps-container mt-3",
                    children: n,
                }),
            ],
        });
    },
    Hd = ({ header: e, description: n, classAddition: t }) => {
        const [r, l] = je.useState(!1),
            o = () => {
                l((i) => !i);
            };
        return P.jsxs("button", {
            className: `preparation-item--container ${t}`,
            onClick: o,
            children: [
                P.jsxs("div", {
                    className: "preparation-item--header-container",
                    children: [
                        P.jsx("h4", {
                            className: "preparation-item--header",
                            children: e,
                        }),
                        P.jsx("div", {
                            className: "preparation-item--expand-icon",
                            children: r ? "-" : "+",
                        }),
                    ],
                }),
                P.jsx("div", {
                    className: `preparation-item--description-container ${
                        r
                            ? "preparation-item--expanded"
                            : "preparation-item--collapsed"
                    }`,
                    children: P.jsx("p", {
                        className: "preparation-item--description",
                        children: n,
                    }),
                }),
            ],
        });
    },
    Wd = ({ data: e }) =>
        P.jsxs(P.Fragment, {
            children: [
                P.jsx(Md, {
                    title: e.title,
                    content: e.description,
                    hasImage: e.hasImage,
                    imagePath: e.imagePath,
                }),
                P.jsx(Bd, { steps: e.steps }),
            ],
        }),
    Qd = ({ data: e, setBeverageID: n }) => {
        const [t, r] = je.useState(""),
            [l, o] = je.useState(!1),
            [i, u] = je.useState(-1),
            s = je.useMemo(() => {
                const p = e.map((S, O) => ({ title: S.title, index: O })),
                    g = [],
                    w = [];
                return (
                    p.forEach((S) => {
                        S.title.toLowerCase().includes(t.toLowerCase()) &&
                            (S.title.toLowerCase().startsWith(t.toLowerCase())
                                ? g.push(S)
                                : w.push(S));
                    }),
                    [...g, ...w].slice(0, 10)
                );
            }, [e, t]),
            c = (p) => {
                p.target.value === "" ? o(!1) : o(!0), u(0), r(p.target.value);
            },
            h = (p) => {
                !l ||
                    i < 0 ||
                    (p.key === "ArrowDown"
                        ? (p.preventDefault(),
                          i < s.length - 1 && u((g) => g + 1))
                        : p.key === "ArrowUp"
                        ? (p.preventDefault(),
                          i > 0 ? u((g) => g - 1) : i === 0 && u(s.length - 1))
                        : p.key === "Enter" &&
                          (p.preventDefault(), m(s[i].index)));
            },
            m = (p) => {
                n(p), r(e[p].title), o(!1);
            };
        return P.jsxs("div", {
            className: "search--container",
            children: [
                P.jsxs("div", {
                    className: "search-bar--container",
                    children: [
                        P.jsx("input", {
                            onKeyDown: h,
                            className: "search-bar--input",
                            type: "text",
                            value: t,
                            placeholder: "Search for a beverage..",
                            onChange: c,
                        }),
                        P.jsx("button", {
                            onClick: () => {
                                r(""), o(!1);
                            },
                            className: "search-bar--clear",
                            children: "X",
                        }),
                    ],
                }),
                P.jsx("div", {
                    className: `search-suggestions--container ${
                        l ? "display" : "hide"
                    }`,
                    children: s
                        .slice(0, 10)
                        .map((p, g) =>
                            P.jsx(
                                Kd,
                                {
                                    content: p.title,
                                    handleClick: () => m(p.index),
                                    focused: g === i,
                                },
                                p.index
                            )
                        ),
                }),
            ],
        });
    },
    Kd = ({ content: e, focused: n, handleClick: t }) =>
        P.jsx("button", {
            className: `suggestions-item--container ${
                n ? "suggestions-item--focused" : ""
            }`,
            onClick: t,
            children: P.jsx("div", {
                className: "preparation-item--header-container",
                children: P.jsx("p", {
                    className: "suggestions-item--title",
                    children: e,
                }),
            }),
        }),
    Yd = () => {
        const [e, n] = je.useState(null),
            [t, r] = je.useState(null),
            l = async () => {
                try {
                    const i = await (
                        await fetch("./data/beverages.json")
                    ).json();
                    n(i);
                } catch (o) {
                    console.error("Error fetching data:", o);
                }
            };
        return (
            je.useEffect(() => {
                l();
            }, []),
            P.jsxs(P.Fragment, {
                children: [
                    P.jsx("header", { children: P.jsx(Od, {}) }),
                    P.jsx("main", {
                        className: "container",
                        children:
                            e &&
                            P.jsxs(P.Fragment, {
                                children: [
                                    P.jsx(Qd, { data: e, setBeverageID: r }),
                                    t !== null && P.jsx(Wd, { data: e[t] }),
                                ],
                            }),
                    }),
                ],
            })
        );
    };
Xl.createRoot(document.getElementById("root")).render(
    P.jsx(kc.StrictMode, { children: P.jsx(Yd, {}) })
);
