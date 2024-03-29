function dropdownEffectData(t) {
    var e = null,
        i = null,
        n = $(t),
        o = $(".dropdown-menu", t),
        a = n.parents("ul.nav");
    return a.size() > 0 && (e = a.data("dropdown-in") || null, i = a.data("dropdown-out") || null), {
        target: t,
        dropdown: n,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || e,
        effectOut: o.data("dropdown-out") || i
    }
}

function dropdownEffectStart(t, e) {
    e && (t.dropdown.addClass("dropdown-animating"), t.dropdownMenu.addClass("animated"), t.dropdownMenu.addClass(e))
}

function dropdownEffectEnd(t, e) {
    var i = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    t.dropdown.one(i, function() {
        t.dropdown.removeClass("dropdown-animating"), t.dropdownMenu.removeClass("animated"), t.dropdownMenu.removeClass(t.effectIn), t.dropdownMenu.removeClass(t.effectOut), "function" == typeof e && e()
    })
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
        },
        easeInQuad: function(t, e, i, n, o) {
            return n * (e /= o) * e + i
        },
        easeOutQuad: function(t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, o) {
            return n * (e /= o) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeInExpo: function(t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, o) {
            return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                r = 0,
                s = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (r || (r = .3 * o), s < Math.abs(n)) {
                s = n;
                var a = r / 4
            } else var a = r / (2 * Math.PI) * Math.asin(n / s);
            return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r)) + i
        },
        easeOutElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                r = 0,
                s = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (r || (r = .3 * o), s < Math.abs(n)) {
                s = n;
                var a = r / 4
            } else var a = r / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / r) + n + i
        },
        easeInOutElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                r = 0,
                s = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if (r || (r = o * (.3 * 1.5)), s < Math.abs(n)) {
                s = n;
                var a = r / 4
            } else var a = r / (2 * Math.PI) * Math.asin(n / s);
            return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r)) + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / r) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), n * (e /= o) * e * ((a + 1) * e - a) + i
        },
        easeOutBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), n * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + i : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + i
        },
        easeInBounce: function(t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
        },
        easeOutBounce: function(t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, o) {
            return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
        }
    }),
    function(t) {
        t.Package ? Materialize = {} : t.Materialize = {}
    }(window), Materialize.guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(), Materialize.elementOrParentIsFixed = function(t) {
        var e = $(t),
            i = e.add(e.parents()),
            n = !1;
        return i.each(function() {
            return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
        }), n
    };
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" === n || i.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        if (!t.jQuery) {
            var i = function(t, e) {
                return new i.fn.init(t, e)
            };
            i.isWindow = function(t) {
                return null != t && t == t.window
            }, i.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[r.call(t)] || "object" : typeof t
            }, i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t)
            }, i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                try {
                    if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (e in t);
                return void 0 === e || a.call(t, e)
            }, i.each = function(t, i, n) {
                var o, a = 0,
                    r = t.length,
                    s = e(t);
                if (n) {
                    if (s)
                        for (; r > a && (o = i.apply(t[a], n), o !== !1); a++);
                    else
                        for (a in t)
                            if (o = i.apply(t[a], n), o === !1) break
                } else if (s)
                    for (; r > a && (o = i.call(t[a], a, t[a]), o !== !1); a++);
                else
                    for (a in t)
                        if (o = i.call(t[a], a, t[a]), o === !1) break; return t
            }, i.data = function(t, e, o) {
                if (void 0 === o) {
                    var a = t[i.expando],
                        r = a && n[a];
                    if (void 0 === e) return r;
                    if (r && e in r) return r[e]
                } else if (void 0 !== e) {
                    var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][e] = o, o
                }
            }, i.removeData = function(t, e) {
                var o = t[i.expando],
                    a = o && n[o];
                a && i.each(e, function(t, e) {
                    delete a[e]
                })
            }, i.extend = function() {
                var t, e, n, o, a, r, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (o in a) t = s[o], n = a[o], s !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, r = t && i.isArray(t) ? t : []) : r = t && i.isPlainObject(t) ? t : {}, s[o] = i.extend(u, r, n)) : void 0 !== n && (s[o] = n));
                return s
            }, i.queue = function(t, n, o) {
                function a(t, i) {
                    var n = i || [];
                    return null != t && (e(Object(t)) ? ! function(t, e) {
                        for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
                        if (i !== i)
                            for (; void 0 !== e[n];) t[o++] = e[n++];
                        return t.length = o, t
                    }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                }
                if (t) {
                    n = (n || "fx") + "queue";
                    var r = i.data(t, n);
                    return o ? (!r || i.isArray(o) ? r = i.data(t, n, a(o)) : r.push(o), r) : r || []
                }
            }, i.dequeue = function(t, e) {
                i.each(t.nodeType ? [t] : t, function(t, n) {
                    e = e || "fx";
                    var o = i.queue(n, e),
                        a = o.shift();
                    "inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(n, function() {
                        i.dequeue(n, e)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(t).offset();
                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, a = o.hasOwnProperty, r = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = {
                Utilities: i
            }
        }
    }(window), function(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function() {
        return function(t, e, i, n) {
            function o(t) {
                for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                    var o = t[e];
                    o && n.push(o)
                }
                return n
            }

            function a(t) {
                return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t
            }

            function r(t) {
                var e = f.data(t, "velocity");
                return null === e ? n : e
            }

            function s(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function l(t, i, n, o) {
                function a(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function r(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function l(t, e, i) {
                    return ((a(e, i) * t + r(e, i)) * t + s(e)) * t
                }

                function c(t, e, i) {
                    return 3 * a(e, i) * t * t + 2 * r(e, i) * t + s(e)
                }

                function u(e, i) {
                    for (var o = 0; v > o; ++o) {
                        var a = c(i, t, n);
                        if (0 === a) return i;
                        var r = l(i, t, n) - e;
                        i -= r / a
                    }
                    return i
                }

                function h() {
                    for (var e = 0; b > e; ++e) S[e] = l(e * w, t, n)
                }

                function f(e, i, o) {
                    var a, r, s = 0;
                    do r = i + (o - i) / 2, a = l(r, t, n) - e, a > 0 ? o = r : i = r; while (Math.abs(a) > g && ++s < y);
                    return r
                }

                function d(e) {
                    for (var i = 0, o = 1, a = b - 1; o != a && S[o] <= e; ++o) i += w;
                    --o;
                    var r = (e - S[o]) / (S[o + 1] - S[o]),
                        s = i + r * w,
                        l = c(s, t, n);
                    return l >= m ? u(e, s) : 0 == l ? s : f(e, i, i + w)
                }

                function p() {
                    k = !0, (t != i || n != o) && h()
                }
                var v = 4,
                    m = .001,
                    g = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                var S = x ? new Float32Array(b) : new Array(b),
                    k = !1,
                    T = function(e) {
                        return k || p(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(d(e), i, o)
                    };
                T.getControlPoints = function() {
                    return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var P = "generateBezier(" + [t, i, n, o] + ")";
                return T.toString = function() {
                    return P
                }, T
            }

            function c(t, e) {
                var i = t;
                return v.isString(t) ? b.Easings[t] || (i = !1) : i = v.isArray(t) && 1 === t.length ? s.apply(null, t) : v.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : v.isArray(t) && 4 === t.length ? l.apply(null, t) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
            }

            function u(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = o(b.State.calls));
                    for (var a = 0; i > a; a++)
                        if (b.State.calls[a]) {
                            var s = b.State.calls[a],
                                l = s[0],
                                c = s[2],
                                d = s[3],
                                p = !!d,
                                m = null;
                            d || (d = b.State.calls[a][3] = e - 16);
                            for (var g = Math.min((e - d) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var C = l[y],
                                    k = C.element;
                                if (r(k)) {
                                    var T = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var P = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            f.each(P, function(t, e) {
                                                x.setPropertyValue(k, "display", e)
                                            })
                                        }
                                        x.setPropertyValue(k, "display", c.display)
                                    }
                                    c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(k, "visibility", c.visibility);
                                    for (var E in C)
                                        if ("element" !== E) {
                                            var A, M = C[E],
                                                I = v.isString(M.easing) ? b.Easings[M.easing] : M.easing;
                                            if (1 === g) A = M.endValue;
                                            else {
                                                var L = M.endValue - M.startValue;
                                                if (A = M.startValue + L * I(g, c, L), !p && A === M.currentValue) continue
                                            }
                                            if (M.currentValue = A, "tween" === E) m = A;
                                            else {
                                                if (x.Hooks.registered[E]) {
                                                    var O = x.Hooks.getRoot(E),
                                                        R = r(k).rootPropertyValueCache[O];
                                                    R && (M.rootPropertyValue = R)
                                                }
                                                var F = x.setPropertyValue(k, E, M.currentValue + (0 === parseFloat(A) ? "" : M.unitType), M.rootPropertyValue, M.scrollData);
                                                x.Hooks.registered[E] && (r(k).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null, F[1]) : F[1]), "transform" === F[0] && (T = !0)
                                            }
                                        }
                                    c.mobileHA && r(k).transformCache.translate3d === n && (r(k).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && x.flushTransformCache(k)
                                }
                            }
                            c.display !== n && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], g, Math.max(0, d + c.duration - e), d, m), 1 === g && h(a)
                        }
                }
                b.State.isTicking && S(u)
            }

            function h(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var i = b.State.calls[t][0], o = b.State.calls[t][1], a = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var h = i[c].element;
                    if (e || a.loop || ("none" === a.display && x.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(h, "visibility", a.visibility)), a.loop !== !0 && (f.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(f.queue(h)[1])) && r(h)) {
                        r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                        var d = !1;
                        f.each(x.Lists.transforms3D, function(t, e) {
                            var i = /^scale/.test(e) ? 1 : 0,
                                o = r(h).transformCache[e];
                            r(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (d = !0, delete r(h).transformCache[e])
                        }), a.mobileHA && (d = !0, delete r(h).transformCache.translate3d), d && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating")
                    }
                    if (!e && a.complete && !a.loop && c === u - 1) try {
                        a.complete.call(o, o)
                    } catch (p) {
                        setTimeout(function() {
                            throw p
                        }, 1)
                    }
                    s && a.loop !== !0 && s(o), r(h) && a.loop === !0 && !e && (f.each(r(h).tweensContainer, function(t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), b(h, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), a.queue !== !1 && f.dequeue(h, a.queue)
                }
                b.State.calls[t] = !1;
                for (var v = 0, m = b.State.calls.length; m > v; v++)
                    if (b.State.calls[v] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var f, d = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return n
                }(),
                p = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
                            e(n + i)
                        }, i)
                    }
                }(),
                v = {
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                m = !1;
            if (t.fn && t.fn.jquery ? (f = t, m = !0) : f = e.Velocity.Utilities, 8 >= d && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= d) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var g = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: f,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: g,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(t) {
                        f.data(t, "velocity", {
                            isSVG: v.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, i, n) {
                    var o = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: o.v,
                        dv: t(o)
                    }
                }

                function i(i, n) {
                    var o = {
                            dx: i.v,
                            dv: t(i)
                        },
                        a = e(i, .5 * n, o),
                        r = e(i, .5 * n, a),
                        s = e(i, n, r),
                        l = 1 / 6 * (o.dx + 2 * (a.dx + r.dx) + s.dx),
                        c = 1 / 6 * (o.dv + 2 * (a.dv + r.dv) + s.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i
                }
                return function n(t, e, o) {
                    var a, r, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        c = [0],
                        u = 0,
                        h = 1e-4,
                        f = .016;
                    for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, o = o || null, l.tension = t, l.friction = e, a = null !== o, a ? (u = n(t, e), r = u / o * f) : r = f; s = i(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > h && Math.abs(s.v) > h;);
                    return a ? function(t) {
                        return c[t * (c.length - 1) | 0]
                    } : u
                }
            }();
            b.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, f.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(t, e) {
                b.Easings[e[0]] = l.apply(null, e[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < x.Lists.colors.length; t++) {
                            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i, n, o;
                        if (d)
                            for (i in x.Hooks.templates) {
                                n = x.Hooks.templates[i], o = n[0].split(" ");
                                var a = n[1].match(x.RegEx.valueSplit);
                                "Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), x.Hooks.templates[i] = [o.join(" "), a.join(" ")])
                            }
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i], o = n[0].split(" ");
                            for (var t in o) {
                                var r = i + o[t],
                                    s = t;
                                x.Hooks.registered[r] = [i, s]
                            }
                        }
                    },
                    getRoot: function(t) {
                        var e = x.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                    },
                    extractValue: function(t, e) {
                        var i = x.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                                o = i[1];
                            return e = x.Hooks.cleanRootPropertyValue(n, e), e.toString().match(x.RegEx.valueSplit)[o]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = x.Hooks.registered[t];
                        if (n) {
                            var o, a, r = n[0],
                                s = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(r, i), o = i.toString().match(x.RegEx.valueSplit), o[s] = e, a = o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = o ? o[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (8 >= d) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function() {
                        9 >= d || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var t = 0; t < x.Lists.transformsBase.length; t++) ! function() {
                            var e = x.Lists.transformsBase[t];
                            x.Normalizations.registered[e] = function(t, i, o) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return r(i) === n || r(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : r(i).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var a = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && r(i).transformCache[e] === n && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                break;
                                            case "skew":
                                                a = !/(deg|\d)$/i.test(o);
                                                break;
                                            case "rotate":
                                                a = !/(deg|\d)$/i.test(o)
                                        }
                                        return a || (r(i).transformCache[e] = "(" + o + ")"), r(i).transformCache[e]
                                }
                            }
                        }();
                        for (var t = 0; t < x.Lists.colors.length; t++) ! function() {
                            var e = x.Lists.colors[t];
                            x.Normalizations.registered[e] = function(t, i, o) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var a;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
                                        else {
                                            var r, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? r = s[o] !== n ? s[o] : s.black : x.RegEx.isHex.test(o) ? r = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (r = s.black), a = (r || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= d || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                            var o;
                            if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                    return t.toUpperCase()
                                }), v.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[t] = o, [o, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(i, function(t, e, i, n) {
                            return e + e + i + i + n + n
                        }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(t, i, o, a) {
                    function s(t, i) {
                        function o() {
                            c && x.setPropertyValue(t, "display", "none")
                        }
                        var l = 0;
                        if (8 >= d) l = f.css(t, i);
                        else {
                            var c = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !a) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                    return o(), u
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                    return o(), h
                                }
                            }
                            var p;
                            p = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === d && "filter" === i ? p.getPropertyValue(i) : p[i], ("" === l || null === l) && (l = t.style[i]), o()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var v = s(t, "position");
                            ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = f(t).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var c = i,
                            u = x.Hooks.getRoot(c);
                        o === n && (o = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", t, o)), l = x.Hooks.extractValue(c, o)
                    } else if (x.Normalizations.registered[i]) {
                        var h, p;
                        h = x.Normalizations.registered[i]("name", t), "transform" !== h && (p = s(t, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[i] && (p = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", t, p)
                    }
                    if (!/^[\d-]/.test(l))
                        if (r(t) && r(t).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = t.getBBox()[i]
                            } catch (v) {
                                l = 0
                            } else l = t.getAttribute(i);
                            else l = s(t, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function(t, i, n, o, a) {
                    var s = i;
                    if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? e.scrollTo(n, a.alternateValue) : e.scrollTo(a.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t)) x.Normalizations.registered[i]("inject", t, n), s = "transform", n = r(t).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                c = x.Hooks.getRoot(i);
                            o = o || x.getPropertyValue(t, c), n = x.Hooks.injectValue(l, n, o), i = c
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n), i = x.Normalizations.registered[i]("name", t)), s = x.Names.prefixCheck(i)[0], 8 >= d) try {
                            t.style[s] = n
                        } catch (u) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        } else r(t) && r(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                    }
                    return [s, n]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(x.getPropertyValue(t, e))
                    }
                    var i = "";
                    if ((d || b.State.isAndroid && !b.State.isChrome) && r(t).isSVG) {
                        var n = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        f.each(r(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                        })
                    } else {
                        var o, a;
                        f.each(r(t).transformCache, function(e) {
                            return o = r(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(i += e + o + " "))
                        }), a && (i = "perspective" + a + " " + i)
                    }
                    x.setPropertyValue(t, "transform", i)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(t, e, i) {
                var o = n;
                return t = a(t), f.each(t, function(t, a) {
                    if (r(a) === n && b.init(a), i === n) o === n && (o = b.CSS.getPropertyValue(a, e));
                    else {
                        var s = b.CSS.setPropertyValue(a, e, i);
                        "transform" === s[0] && b.CSS.flushTransformCache(a), o = s
                    }
                }), o
            };
            var C = function() {
                function t() {
                    return s ? E.promise || null : l
                }

                function o() {
                    function t(t) {
                        function h(t, e) {
                            var i = n,
                                o = n,
                                r = n;
                            return v.isArray(t) ? (i = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? r = t[1] : (v.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (o = e ? t[1] : c(t[1], s.duration), t[2] !== n && (r = t[2]))) : i = t, e || (o = o || s.easing), v.isFunction(i) && (i = i.call(a, k, S)), v.isFunction(r) && (r = r.call(a, k, S)), [i || 0, o, r]
                        }

                        function d(t, e) {
                            var i, n;
                            return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                return i = t, ""
                            }), i || (i = x.Values.getUnitType(t)), [n, i]
                        }

                        function g() {
                            var t = {
                                    myParent: a.parentNode || i.body,
                                    position: x.getPropertyValue(a, "position"),
                                    fontSize: x.getPropertyValue(a, "fontSize")
                                },
                                n = t.position === F.lastPosition && t.myParent === F.lastParent,
                                o = t.fontSize === F.lastFontSize;
                            F.lastParent = t.myParent, F.lastPosition = t.position, F.lastFontSize = t.fontSize;
                            var s = 100,
                                l = {};
                            if (o && n) l.emToPx = F.lastEmToPx, l.percentToPxWidth = F.lastPercentToPxWidth, l.percentToPxHeight = F.lastPercentToPxHeight;
                            else {
                                var c = r(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(c), t.myParent.appendChild(c), f.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                    b.CSS.setPropertyValue(c, e, "hidden")
                                }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                    b.CSS.setPropertyValue(c, e, s + "%")
                                }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = F.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
                            }
                            return null === F.remToPx && (F.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(e.innerWidth) / 100, F.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = F.remToPx, l.vwToPx = F.vwToPx, l.vhToPx = F.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }
                        if (s.begin && 0 === k) try {
                            s.begin.call(p, p)
                        } catch (w) {
                            setTimeout(function() {
                                throw w
                            }, 1)
                        }
                        if ("scroll" === A) {
                            var C, T, P, M = /^x$/i.test(s.axis) ? "Left" : "Top",
                                I = parseFloat(s.offset) || 0;
                            s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, C = s.container["scroll" + M], P = C + f(a).position()[M.toLowerCase()] + I) : s.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + M]], T = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === M ? "Top" : "Left")]], P = f(a).offset()[M.toLowerCase()] + I), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: C,
                                    currentValue: C,
                                    endValue: P,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: M,
                                        alternateValue: T
                                    }
                                },
                                element: a
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                        } else if ("reverse" === A) {
                            if (!r(a).tweensContainer) return void f.dequeue(a, s.queue);
                            "none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = f.extend({}, r(a).opts, s);
                            var L = f.extend(!0, {}, r(a).tweensContainer);
                            for (var O in L)
                                if ("element" !== O) {
                                    var R = L[O].startValue;
                                    L[O].startValue = L[O].currentValue = L[O].endValue, L[O].endValue = R, v.isEmptyObject(y) || (L[O].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(L[O]), a)
                                }
                            l = L
                        } else if ("start" === A) {
                            var L;
                            r(a).tweensContainer && r(a).isAnimating === !0 && (L = r(a).tweensContainer), f.each(m, function(t, e) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = h(e, !0),
                                        o = i[0],
                                        a = i[1],
                                        r = i[2];
                                    if (x.RegEx.isHex.test(o)) {
                                        for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), c = r ? x.Values.hexToRgb(r) : n, u = 0; u < s.length; u++) {
                                            var f = [l[u]];
                                            a && f.push(a), c !== n && f.push(c[u]),
                                                m[t + s[u]] = f
                                        }
                                        delete m[t]
                                    }
                                }
                            });
                            for (var W in m) {
                                var z = h(m[W]),
                                    H = z[0],
                                    _ = z[1],
                                    Y = z[2];
                                W = x.Names.camelCase(W);
                                var X = x.Hooks.getRoot(W),
                                    V = !1;
                                if (r(a).isSVG || "tween" === X || x.Names.prefixCheck(X)[1] !== !1 || x.Normalizations.registered[X] !== n) {
                                    (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(W) && !Y && 0 !== H && (Y = 0), s._cacheValues && L && L[W] ? (Y === n && (Y = L[W].endValue + L[W].unitType), V = r(a).rootPropertyValueCache[X]) : x.Hooks.registered[W] ? Y === n ? (V = x.getPropertyValue(a, X), Y = x.getPropertyValue(a, W, V)) : V = x.Hooks.templates[X][1] : Y === n && (Y = x.getPropertyValue(a, W));
                                    var N, B, j, q = !1;
                                    if (N = d(W, Y), Y = N[0], j = N[1], N = d(W, H), H = N[0].replace(/^([+-\/*])=/, function(t, e) {
                                            return q = e, ""
                                        }), B = N[1], Y = parseFloat(Y) || 0, H = parseFloat(H) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(W) ? (H /= 100, B = "em") : /^scale/.test(W) ? (H /= 100, B = "") : /(Red|Green|Blue)$/i.test(W) && (H = H / 100 * 255, B = "")), /[\/*]/.test(q)) B = j;
                                    else if (j !== B && 0 !== Y)
                                        if (0 === H) B = j;
                                        else {
                                            o = o || g();
                                            var $ = /margin|padding|left|right|width|text|word|letter/i.test(W) || /X$/.test(W) || "x" === W ? "x" : "y";
                                            switch (j) {
                                                case "%":
                                                    Y *= "x" === $ ? o.percentToPxWidth : o.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    Y *= o[j + "ToPx"]
                                            }
                                            switch (B) {
                                                case "%":
                                                    Y *= 1 / ("x" === $ ? o.percentToPxWidth : o.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    Y *= 1 / o[B + "ToPx"]
                                            }
                                        }
                                    switch (q) {
                                        case "+":
                                            H = Y + H;
                                            break;
                                        case "-":
                                            H = Y - H;
                                            break;
                                        case "*":
                                            H = Y * H;
                                            break;
                                        case "/":
                                            H = Y / H
                                    }
                                    l[W] = {
                                        rootPropertyValue: V,
                                        startValue: Y,
                                        currentValue: Y,
                                        endValue: H,
                                        unitType: B,
                                        easing: _
                                    }, b.debug && console.log("tweensContainer (" + W + "): " + JSON.stringify(l[W]), a)
                                } else b.debug && console.log("Skipping [" + X + "] due to a lack of browser support.")
                            }
                            l.element = a
                        }
                        l.element && (x.Values.addClass(a, "velocity-animating"), D.push(l), "" === s.queue && (r(a).tweensContainer = l, r(a).opts = s), r(a).isAnimating = !0, k === S - 1 ? (b.State.calls.push([D, p, s, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : k++)
                    }
                    var o, a = this,
                        s = f.extend({}, b.defaults, y),
                        l = {};
                    switch (r(a) === n && b.init(a), parseFloat(s.delay) && s.queue !== !1 && f.queue(a, s.queue, function(t) {
                        b.velocityQueueEntryFlag = !0, r(a).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(s.delay)),
                            next: t
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = g;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(t, s.delay) : t() : f.queue(a, s.queue, function(e, i) {
                        return i === !0 ? (E.promise && E.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(a)[0] || f.dequeue(a)
                }
                var s, l, d, p, m, y, w = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
                if (v.isWrapped(this) ? (s = !1, d = 0, p = this, l = this) : (s = !0, d = 1, p = w ? arguments[0].elements || arguments[0].e : arguments[0]), p = a(p)) {
                    w ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[d], y = arguments[d + 1]);
                    var S = p.length,
                        k = 0;
                    if (!/^(stop|finish)$/i.test(m) && !f.isPlainObject(y)) {
                        var T = d + 1;
                        y = {};
                        for (var P = T; P < arguments.length; P++) v.isArray(arguments[P]) || !/^(fast|normal|slow)$/i.test(arguments[P]) && !/^\d/.test(arguments[P]) ? v.isString(arguments[P]) || v.isArray(arguments[P]) ? y.easing = arguments[P] : v.isFunction(arguments[P]) && (y.complete = arguments[P]) : y.duration = arguments[P]
                    }
                    var E = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (E.promise = new b.Promise(function(t, e) {
                        E.resolver = t, E.rejecter = e
                    }));
                    var A;
                    switch (m) {
                        case "scroll":
                            A = "scroll";
                            break;
                        case "reverse":
                            A = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            f.each(p, function(t, e) {
                                r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer)
                            });
                            var M = [];
                            return f.each(b.State.calls, function(t, e) {
                                e && f.each(e[1], function(i, o) {
                                    var a = y === n ? "" : y;
                                    return a === !0 || e[2].queue === a || y === n && e[2].queue === !1 ? void f.each(p, function(i, n) {
                                        n === o && ((y === !0 || v.isString(y)) && (f.each(f.queue(n, v.isString(y) ? y : ""), function(t, e) {
                                            v.isFunction(e) && e(null, !0)
                                        }), f.queue(n, v.isString(y) ? y : "", [])), "stop" === m ? (r(n) && r(n).tweensContainer && a !== !1 && f.each(r(n).tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), M.push(t)) : "finish" === m && (e[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === m && (f.each(M, function(t, e) {
                                h(e, !0)
                            }), E.promise && E.resolver(p)), t();
                        default:
                            if (!f.isPlainObject(m) || v.isEmptyObject(m)) {
                                if (v.isString(m) && b.Redirects[m]) {
                                    var I = f.extend({}, y),
                                        L = I.duration,
                                        O = I.delay || 0;
                                    return I.backwards === !0 && (p = f.extend(!0, [], p).reverse()), f.each(p, function(t, e) {
                                        parseFloat(I.stagger) ? I.delay = O + parseFloat(I.stagger) * t : v.isFunction(I.stagger) && (I.delay = O + I.stagger.call(e, t, S)), I.drag && (I.duration = parseFloat(L) || (/^(callout|transition)/.test(m) ? 1e3 : g), I.duration = Math.max(I.duration * (I.backwards ? 1 - t / S : (t + 1) / S), .75 * I.duration, 200)), b.Redirects[m].call(e, e, I || {}, t, S, p, E.promise ? E : n)
                                    }), t()
                                }
                                var R = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise ? E.rejecter(new Error(R)) : console.log(R), t()
                            }
                            A = "start"
                    }
                    var F = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        D = [];
                    f.each(p, function(t, e) {
                        v.isNode(e) && o.call(e)
                    });
                    var W, I = f.extend({}, b.defaults, y);
                    if (I.loop = parseInt(I.loop), W = 2 * I.loop - 1, I.loop)
                        for (var z = 0; W > z; z++) {
                            var H = {
                                delay: I.delay,
                                progress: I.progress
                            };
                            z === W - 1 && (H.display = I.display, H.visibility = I.visibility, H.complete = I.complete), C(p, "reverse", H)
                        }
                    return t()
                }
            };
            b = f.extend(C, b), b.animate = C;
            var S = e.requestAnimationFrame || p;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                i.hidden ? (S = function(t) {
                    return setTimeout(function() {
                        t(!0)
                    }, 16)
                }, u()) : S = e.requestAnimationFrame || p
            }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(t, e) {
                b.Redirects["slide" + e] = function(t, i, o, a, r, s) {
                    var l = f.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        h = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        d = {};
                    l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                        c && c.call(r, r);
                        for (var i in h) {
                            d[i] = t.style[i];
                            var n = b.CSS.getPropertyValue(t, i);
                            h[i] = "Down" === e ? [n, 0] : [0, n]
                        }
                        d.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var e in d) t.style[e] = d[e];
                        u && u.call(r, r), s && s.resolver(r)
                    }, b(t, h, l)
                }
            }), f.each(["In", "Out"], function(t, e) {
                b.Redirects["fade" + e] = function(t, i, o, a, r, s) {
                    var l = f.extend({}, i),
                        c = {
                            opacity: "In" === e ? 1 : 0
                        },
                        u = l.complete;
                    l.complete = o !== a - 1 ? l.begin = null : function() {
                        u && u.call(r, r), s && s.resolver(r)
                    }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) {
                this.canvas = t.canvas, this.ctx = t;
                var i = function(t, e) {
                        return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                    },
                    o = this.width = i(t.canvas, "Width") || t.canvas.width,
                    a = this.height = i(t.canvas, "Height") || t.canvas.height;
                return o = this.width = t.canvas.width, a = this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
            };
        i.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipTitleTemplate: "<%= label%>",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
                segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, i.types = {};
        var n = i.helpers = {},
            o = n.each = function(t, e, i) {
                var n = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var o;
                        for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
                    } else
                        for (var a in t) e.apply(i, [t[a], a].concat(n))
            },
            a = n.clone = function(t) {
                var e = {};
                return o(t, function(i, n) {
                    t.hasOwnProperty(n) && (e[n] = i)
                }), e
            },
            r = n.extend = function(t) {
                return o(Array.prototype.slice.call(arguments, 1), function(e) {
                    o(e, function(i, n) {
                        e.hasOwnProperty(n) && (t[n] = i)
                    })
                }), t
            },
            s = n.merge = function(t, e) {
                var i = Array.prototype.slice.call(arguments, 0);
                return i.unshift({}), r.apply(null, i)
            },
            l = n.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            },
            f = (n.where = function(t, e) {
                var i = [];
                return n.each(t, function(t) {
                    e(t) && i.push(t)
                }), i
            }, n.findNextWhere = function(t, e, i) {
                i || (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }, n.findPreviousWhere = function(t, e, i) {
                i || (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }, n.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = i
                    };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = f, t && r(i.prototype, t), i.__super__ = e.prototype, i
            }),
            d = n.noop = function() {},
            p = n.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(),
            v = n.warn = function(t) {
                window.console && "function" == typeof window.console.warn && console.warn(t)
            },
            m = n.amd = "function" == typeof define && define.amd,
            g = n.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            y = n.max = function(t) {
                return Math.max.apply(Math, t)
            },
            b = n.min = function(t) {
                return Math.min.apply(Math, t)
            },
            x = (n.cap = function(t, e, i) {
                if (g(e)) {
                    if (t > e) return e
                } else if (g(i) && i > t) return i;
                return t
            }, n.getDecimalPlaces = function(t) {
                if (t % 1 !== 0 && g(t)) {
                    var e = t.toString();
                    if (e.indexOf("e-") < 0) return e.split(".")[1].length;
                    if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);
                    var i = e.split(".")[1].split("e-");
                    return i[0].length + parseInt(i[1])
                }
                return 0
            }),
            C = n.radians = function(t) {
                return t * (Math.PI / 180)
            },
            k = (n.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    o = Math.sqrt(i * i + n * n),
                    a = 2 * Math.PI + Math.atan2(n, i);
                return 0 > i && 0 > n && (a += 2 * Math.PI), {
                    angle: a,
                    distance: o
                }
            }, n.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }),
            P = (n.splineCurve = function(t, e, i, n) {
                var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    a = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    r = n * o / (o + a),
                    s = n * a / (o + a);
                return {
                    inner: {
                        x: e.x - r * (i.x - t.x),
                        y: e.y - r * (i.y - t.y)
                    },
                    outer: {
                        x: e.x + s * (i.x - t.x),
                        y: e.y + s * (i.y - t.y)
                    }
                }
            }, n.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10)
            }),
            A = (n.calculateScaleRange = function(t, e, i, n, a) {
                var r = 2,
                    s = Math.floor(e / (1.5 * i)),
                    l = r >= s,
                    c = [];
                o(t, function(t) {
                    null == t || c.push(t)
                });
                var u = b(c),
                    h = y(c);
                h === u && (h += .5, u >= .5 && !n ? u -= .5 : h += .5);
                for (var f = Math.abs(h - u), d = P(f), p = Math.ceil(h / (1 * Math.pow(10, d))) * Math.pow(10, d), v = n ? 0 : Math.floor(u / (1 * Math.pow(10, d))) * Math.pow(10, d), m = p - v, g = Math.pow(10, d), w = Math.round(m / g);
                    (w > s || s > 2 * w) && !l;)
                    if (w > s) g *= 2, w = Math.round(m / g), w % 1 !== 0 && (l = !0);
                    else if (a && d >= 0) {
                    if (g / 2 % 1 !== 0) break;
                    g /= 2, w = Math.round(m / g)
                } else g /= 2, w = Math.round(m / g);
                return l && (w = r, g = m / w), {
                    steps: w,
                    stepValue: g,
                    min: v,
                    max: v + w * g
                }
            }, n.template = function(t, e) {
                function n(t, e) {
                    var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                    return e ? n(e) : n
                }
                if (t instanceof Function) return t(e);
                var i = {};
                return n(t, e)
            }),
            I = (n.generateLabels = function(t, e, i, n) {
                var a = new Array(e);
                return t && o(a, function(e, o) {
                    a[o] = A(t, {
                        value: i + n * (o + 1)
                    })
                }), a
            }, n.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - I.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * I.easeInBounce(2 * t) : .5 * I.easeOutBounce(2 * t - 1) + .5
                }
            }),
            L = n.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            D = (n.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(), n.animationLoop = function(t, e, i, n, o, a) {
                var r = 0,
                    s = I[i] || I.linear,
                    l = function() {
                        r++;
                        var i = r / e,
                            c = s(i);
                        t.call(a, c, i, r), n.call(a, c, i), e > r ? a.animationFrame = L(l) : o.apply(a)
                    };
                L(l)
            }, n.getRelativePosition = function(t) {
                var e, i, n = t.originalEvent || t,
                    o = t.currentTarget || t.srcElement,
                    a = o.getBoundingClientRect();
                return n.touches ? (e = n.touches[0].clientX - a.left, i = n.touches[0].clientY - a.top) : (e = n.clientX - a.left, i = n.clientY - a.top), {
                    x: e,
                    y: i
                }
            }, n.addEvent = function(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }),
            W = n.removeEvent = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = d
            },
            H = (n.bindEvents = function(t, e, i) {
                t.events || (t.events = {}), o(e, function(e) {
                    t.events[e] = function() {
                        i.apply(t, arguments)
                    }, D(t.chart.canvas, e, t.events[e])
                })
            }, n.unbindEvents = function(t, e) {
                o(e, function(e, i) {
                    W(t.chart.canvas, i, e)
                })
            }),
            _ = n.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(X(e, "padding-left")) + parseInt(X(e, "padding-right"));
                return e.clientWidth - i
            },
            Y = n.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(X(e, "padding-bottom")) + parseInt(X(e, "padding-top"));
                return e.clientHeight - i
            },
            X = n.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            },
            N = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    n = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            B = n.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            j = n.fontString = function(t, e, i) {
                return e + " " + t + "px " + i
            },
            q = n.longestText = function(t, e, i) {
                t.font = e;
                var n = 0;
                return o(i, function(e) {
                    var i = t.measureText(e).width;
                    n = i > n ? i : n
                }), n
            },
            $ = n.drawRoundedRectangle = function(t, e, i, n, o, a) {
                t.beginPath(), t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - a, i + o), t.lineTo(e + a, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + a, i), t.closePath()
            };
        i.instances = {}, i.Type = function(t, e, n) {
            this.options = e, this.chart = n, this.id = p(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
        }, r(i.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return B(this.chart), this
            },
            stop: function() {
                return i.animationService.cancelAnimation(this), this
            },
            resize: function(t) {
                this.stop();
                var e = this.chart.canvas,
                    i = _(this.chart.canvas),
                    n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : Y(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = n, N(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: d,
            render: function(t) {
                if (t && this.reflow(), this.options.animation && !t) {
                    var e = new i.Animation;
                    e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function(t, e) {
                        var i = n.easingEffects[e.easing],
                            o = e.currentStep / e.numSteps,
                            a = i(o);
                        t.draw(a, o, e.currentStep)
                    }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e)
                } else this.draw(), this.options.onAnimationComplete.call(this);
                return this
            },
            generateLegend: function() {
                return A(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), H(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
            },
            showTooltip: function(t, e) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var a = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, i) {
                        t !== this.activeElements[i] && (e = !0)
                    }, this), e)
                }.call(this, t);
                if (a || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var r, s, c = this.datasets.length - 1; c >= 0 && (r = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, s = l(r, t[0]), -1 === s); c--);
                            var u = [],
                                h = [],
                                f = function(t) {
                                    var i, r, l, c, f, e = [],
                                        o = [],
                                        a = [];
                                    return n.each(this.datasets, function(t) {
                                        i = t.points || t.bars || t.segments, i[s] && i[s].hasValue() && e.push(i[s])
                                    }), n.each(e, function(t) {
                                        o.push(t.x), a.push(t.y), u.push(n.template(this.options.multiTooltipTemplate, t)), h.push({
                                            fill: t._saved.fillColor || t.fillColor,
                                            stroke: t._saved.strokeColor || t.strokeColor
                                        })
                                    }, this), f = b(a), l = y(a), c = b(o), r = y(o), {
                                        x: c > this.chart.width / 2 ? c : r,
                                        y: (f + l) / 2
                                    }
                                }.call(this, s);
                            new i.MultiTooltip({
                                x: f.x,
                                y: f.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: u,
                                legendColors: h,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: A(this.options.tooltipTitleTemplate, t[0]),
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else o(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: A(this.options.tooltipTemplate, t),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), i.Type.extend = function(t) {
            var e = this,
                n = function() {
                    return e.apply(this, arguments)
                };
            if (n.prototype = a(e.prototype), r(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                var o = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? a(i.defaults[e.prototype.name]) : {};
                i.defaults[o] = r(l, t.defaults), i.types[o] = n, i.prototype[o] = function(t, e) {
                    var a = s(i.defaults.global, i.defaults[o], e || {});
                    return new n(t, a, this)
                }
            } else v("Name not provided for this chart, so it hasn't been registered");
            return e
        }, i.Element = function(t) {
            r(this, t), this.initialize.apply(this, arguments), this.save()
        }, r(i.Element.prototype, {
            initialize: function() {},
            restore: function(t) {
                return t ? o(t, function(t) {
                    this[t] = this._saved[t]
                }, this) : r(this, this._saved), this
            },
            save: function() {
                return this._saved = a(this), delete this._saved._saved, this
            },
            update: function(t) {
                return o(t, function(t, e) {
                    this._saved[e] = this[e], this[e] = t
                }, this), this
            },
            transition: function(t, e) {
                return o(t, function(t, i) {
                    this[i] = (t - this._saved[i]) * e + this._saved[i]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return g(this.value)
            }
        }), i.Element.extend = f, i.Point = i.Element.extend({
            display: !0,
            inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), i.Arc = i.Element.extend({
            inRange: function(t, e) {
                var i = n.getAngleFromPoint(this, {
                        x: t,
                        y: e
                    }),
                    o = i.angle % (2 * Math.PI),
                    a = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                    r = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                    s = a > r ? r >= o || o >= a : o >= a && r >= o,
                    l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return s && l
            },
            tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(t) * e,
                    y: this.y + Math.sin(t) * e
                }
            },
            draw: function(t) {
                var i = this.ctx;
                i.beginPath(), i.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
            }
        }), i.Rectangle = i.Element.extend({
            draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    n = this.x + e,
                    o = this.base - (this.base - this.y),
                    a = this.strokeWidth / 2;
                this.showStroke && (i += a, n -= a, o += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
            }
        }), i.Animation = i.Element.extend({
            currentStep: null,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }), i.Tooltip = i.Element.extend({
            draw: function() {
                var t = this.chart.ctx;
                t.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    n = this.fontSize + 2 * this.yPadding,
                    o = n + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
                var a = this.x - i / 2,
                    r = this.y - o;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            r = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            a = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            a = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    $(t, a, r, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + i / 2, r + n / 2)
                }
            }
        }), i.MultiTooltip = i.Element.extend({
            initialize: function() {
                this.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = j(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = q(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = y([e, t]);
                this.width = i + 2 * this.xPadding;
                var n = this.height / 2;
                this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    $(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                        t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), i.Scale = i.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(A(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }));
                this.yLabelWidth = this.display && this.showLabels ? q(this.ctx, this.font, this.yLabels) + 10 : 0
            },
            addXLabel: function(t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var i, t = this.endPoint,
                    e = this.endPoint - this.startPoint;
                for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, i = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), i < this.yLabelWidth && (this.endPoint = t, this.calculateXLabelRotation())
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var i, n, t = this.ctx.measureText(this.xLabels[0]).width,
                    e = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = e / 2 + 3, this.xScalePaddingLeft = t / 2 > this.yLabelWidth ? t / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                    var a, o = q(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = o;
                    for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) a = Math.cos(C(this.xLabelRotation)), i = a * t, n = a * e, i + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = i + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = a * o;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(C(this.xLabelRotation)) * o + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: d,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min)
            },
            calculateX: function(t) {
                var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    n = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    o = n * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (o += n / 2), Math.round(o)
            },
            update: function(t) {
                n.extend(this, t), this.fit()
            },
            draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, a) {
                    var r = this.endPoint - e * a,
                        s = Math.round(r),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, r), 0 !== a || l || (l = !0), l && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, s), t.lineTo(this.width, s), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, s), t.lineTo(i, s), t.stroke(), t.closePath()
                }, this), o(this.xLabels, function(e, i) {
                    var n = this.calculateX(i) + k(this.lineWidth),
                        o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + k(this.lineWidth),
                        a = this.xLabelRotation > 0,
                        r = this.showVerticalLines;
                    0 !== i || r || (r = !0), r && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(),
                        t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * C(this.xLabelRotation)), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), i.RadialScale = i.Element.extend({
            initialize: function() {
                this.size = b([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(A(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var e, i, n, o, r, s, c, u, h, f, d, p, t = b([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    a = this.width,
                    l = 0;
                for (this.ctx.font = j(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) e = this.getPointPosition(i, t), n = this.ctx.measureText(A(this.templateString, {
                    value: this.labels[i]
                })).width + 5, 0 === i || i === this.valuesCount / 2 ? (o = n / 2, e.x + o > a && (a = e.x + o, r = i), e.x - o < l && (l = e.x - o, c = i)) : i < this.valuesCount / 2 ? e.x + n > a && (a = e.x + n, r = i) : i > this.valuesCount / 2 && e.x - n < l && (l = e.x - n, c = i);
                h = l, f = Math.ceil(a - this.width), s = this.getIndexAngle(r), u = this.getIndexAngle(c), d = f / Math.sin(s + Math.PI / 2), p = h / Math.sin(u + Math.PI / 2), d = g(d) ? d : 0, p = g(p) ? p : 0, this.drawingArea = t - (p + d) / 2, this.setCenterPoint(p, d)
            },
            setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    n = t + this.drawingArea;
                this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (o(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var a, n = i * (this.drawingArea / this.steps),
                                    o = this.yCenter - n;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else {
                                        t.beginPath();
                                        for (var r = 0; r < this.valuesCount; r++) a = this.getPointPosition(r, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === r ? t.moveTo(a.x, a.y) : t.lineTo(a.x, a.y);
                                        t.closePath(), t.stroke()
                                    }
                                if (this.showLabels) {
                                    if (t.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var s = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - s / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, s + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            var i = null,
                                n = null;
                            if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max), n = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                                null == i && (i = this.calculateCenterOffset(this.max)), null == n && (n = this.getPointPosition(e, i));
                                var a = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                                    r = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                                    s = {
                                        x: (a.x + n.x) / 2,
                                        y: (a.y + n.y) / 2
                                    },
                                    l = {
                                        x: (n.x + r.x) / 2,
                                        y: (n.y + r.y) / 2
                                    };
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(s.x, s.y), t.lineTo(n.x, n.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath()
                            }
                            var c = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = j(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var u = this.labels.length,
                                h = this.labels.length / 2,
                                f = h / 2,
                                d = f > e || e > u - f,
                                p = e === f || e === u - f;
                            0 === e ? t.textAlign = "center" : e === h ? t.textAlign = "center" : h > e ? t.textAlign = "left" : t.textAlign = "right", p ? t.textBaseline = "middle" : d ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], c.x, c.y)
                        }
                    }
                }
            }
        }), i.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            addAnimation: function(t, e) {
                for (var i = 0; i < this.animations.length; ++i)
                    if (this.animations[i].chartInstance === t) return void(this.animations[i].animationObject = e);
                this.animations.push({
                    chartInstance: t,
                    animationObject: e
                }), 1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper)
            },
            cancelAnimation: function(t) {
                var e = n.findNextWhere(this.animations, function(e) {
                    return e.chartInstance === t
                });
                e && this.animations.splice(e, 1)
            },
            digestWrapper: function() {
                i.animationService.startDigest.call(i.animationService)
            },
            startDigest: function() {
                var t = Date.now(),
                    e = 0;
                this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
                for (var i = 0; i < this.animations.length; i++) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
                var o = Date.now(),
                    a = o - t - this.frameDuration,
                    r = a / this.frameDuration;
                r > 1 && (this.dropFrames += r), this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper)
            }
        }, n.addEvent(window, "resize", function() {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    o(i.instances, function(t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), m ? define(function() {
            return i
        }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i
        }
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, e, i) {
                        var o = this.calculateBaseWidth(),
                            a = this.calculateX(i) - o / 2,
                            r = this.calculateBarWidth(t);
                        return a + r * e + e * n.barDatasetSpacing + r / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function(e, n) {
                    var o = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(o), i.each(e.data, function(i, n) {
                        o.bars.push(new this.BarClass({
                            value: i,
                            label: t.labels[n],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                i.each(this.datasets, function(e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var a, e = [], n = i.getRelativePosition(t), o = function(t) {
                        e.push(t.bars[a])
                    }, r = 0; r < this.datasets.length; r++)
                    for (a = 0; a < this.datasets[r].bars.length; a++)
                        if (this.datasets[r].bars[a].inRange(n.x, n.y)) return i.each(this.datasets, o), e;
                return e
            },
            buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(o, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(o)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[i].strokeColor,
                        fillColor: this.datasets[i].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(e), i.each(this.datasets, function(t, n) {
                    i.each(t.bars, function(t, i) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function(e, i) {
                    e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, i, n) {
                var o = void 0 !== i ? i : this.segments.length;
                "undefined" == typeof t.color && (t.color = e.defaults.global.segmentColorDefault[o % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[o % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(o, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), n || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
                offsetGridLines: !1
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    offsetGridLines: this.options.offsetGridLines,
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[o],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) {
                    i.each(t.points, function(t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function(t) {
                var n = this,
                    o = function() {
                        var t = [];
                        return n.eachPoints(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    a = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        offsetGridLines: this.options.offsetGridLines,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(a, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(a)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    o = function(t) {
                        return null !== t.value
                    },
                    a = function(t, e, n) {
                        return i.findNextWhere(e, o, n) || t
                    },
                    r = function(t, e, n) {
                        return i.findPreviousWhere(e, o, n) || t
                    };
                this.scale && (this.scale.draw(e), i.each(this.datasets, function(t) {
                    var s = i.where(t.points, o);
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(s, function(t, e) {
                        var n = e > 0 && e < s.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(r(t, s, e), t, a(t, s, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(s, function(t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = r(t, s, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), this.options.datasetStroke && n.stroke(), this.options.datasetFill && s.length > 0 && (n.lineTo(s[s.length - 1].x, this.scale.endPoint), n.lineTo(s[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(s, function(t) {
                        t.draw()
                    })
                }, this))
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        var a;
                        this.scale.animation || (a = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[o],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : a.x,
                            y: this.options.animation ? this.scale.yCenter : a.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    o = 2 * Math.PI / this.scale.valuesCount,
                    a = Math.round((n.angle - 1.5 * Math.PI) / o),
                    r = [];
                return (a >= this.scale.valuesCount || 0 > a) && (a = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                    r.push(t.points[a])
                }), r
            },
            buildScale: function(t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backgroundColors: this.options.scaleBackgroundColors,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function(t, e) {
                this.scale.valuesCount++, i.each(t, function(t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, this.options.datasetFill && n.fill(), i.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        var t, e, i, n, o, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            r = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, i, n) {
                var o;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"),
                    o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, o, a;
                for (a = this.keys, e = n = 0, o = a.length; o > n; e = ++n)
                    if (i = a[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, o, a, r;
                for (r = this.keys, i = o = 0, a = r.length; a > o; i = ++o)
                    if (n = r[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), n = this.getComputedStyle || function(t, e) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(t) {
                null == t && (t = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.resetAnimation = a(this.resetAnimation, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var e, i, n, o;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, n, o;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.all = function() {
                        var t, i, n, o;
                        for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, i = 0, n = o.length; n > i; i++) e = o[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, n, o, a, r;
                        for (r = [], i = 0, n = e.length; n > i; i++) a = e[i], r.push(function() {
                            var t, e, i, n;
                            for (i = a.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push(this.doSync(o));
                            return n
                        }.call(t));
                        return r
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function(e) {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function(t) {
                var e, i, n, o, a;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), a = [], i = 0, n = o.length; n > i; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), a.push(this.scrolled = !0)) : a.push(void 0);
                    return a
                }
            }, o.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, o.prototype.applyStyle = function(t, e) {
                var i, n, o;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(a) {
                    return function() {
                        return a.customStyle(t, e, n, i, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), o.prototype.resetStyle = function() {
                var t, e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
            }, o.prototype.customStyle = function(t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
                var i, n, o, a;
                n = [];
                for (i in e) o = e[i], t["" + i] = o, n.push(function() {
                    var e, n, r, s;
                    for (r = this.vendors, s = [], e = 0, n = r.length; n > e; e++) a = r[e], s.push(t["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                    return s
                }.call(this));
                return n
            }, o.prototype.vendorCSS = function(t, e) {
                var i, o, a, r, s, l;
                for (s = n(t), r = s.getPropertyCSSValue(e), a = this.vendors, i = 0, o = a.length; o > i; i++) l = a[i], r = r || s.getPropertyCSSValue("-" + l + "-" + e);
                return r
            }, o.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = n(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, o.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, o.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, o.prototype.isVisible = function(t) {
                var e, i, n, o, a;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= a
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this), $(window).scroll(function() {
        $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }), $(function() {
        $("a.page-scroll").bind("click", function(t) {
            var e = $(this);
            $("html, body").stop().animate({
                scrollTop: $(e.attr("href")).offset().top
            }, 1500, "easeInOutExpo"), t.preventDefault()
        })
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function o(t) {
            return null !== t && t === t.window
        }

        function a(t) {
            return o(t) ? t : 9 === t.nodeType && t.defaultView
        }

        function r(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }

        function s(t) {
            return r(t) && t.nodeType > 0
        }

        function l(t) {
            var n = i.call(t);
            return "[object String]" === n ? e(t) : r(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && t.hasOwnProperty("length") ? t : s(t) ? [t] : []
        }

        function c(t) {
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                o = t && t.ownerDocument;
            return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = a(o), {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }
        }

        function u(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
            return e
        }

        function d(t, e, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    a = i.getAttribute("data-scale"),
                    r = i.getAttribute("data-translate"),
                    s = Date.now() - Number(i.getAttribute("data-hold")),
                    l = 350 - s;
                0 > l && (l = 0), "mousemove" === t.type && (l = 150);
                var c = "mousemove" === t.type ? 2500 : h.duration;
                setTimeout(function() {
                    var t = {
                        top: o + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": a + " " + r,
                        "-moz-transform": a + " " + r,
                        "-ms-transform": a + " " + r,
                        "-o-transform": a + " " + r,
                        transform: a + " " + r
                    };
                    i.setAttribute("style", u(t)), setTimeout(function() {
                        try {
                            e.removeChild(i)
                        } catch (t) {
                            return !1
                        }
                    }, c)
                }, l)
            }
        }

        function v(t) {
            if (p.allowEvent(t) === !1) return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                    e = i;
                    break
                }
                i = i.parentElement
            }
            return e
        }

        function m(t) {
            var e = v(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (p.registerEvent(t), "touchstart" === t.type && h.delay) {
                    var i = !1,
                        o = setTimeout(function() {
                            o = null, h.show(t, e)
                        }, h.delay),
                        a = function(n) {
                            o && (clearTimeout(o), o = null, h.show(t, e)), i || (i = !0, h.hide(n, e))
                        },
                        r = function(t) {
                            o && (clearTimeout(o), o = null), a(t)
                        };
                    e.addEventListener("touchmove", r, !1), e.addEventListener("touchend", a, !1), e.addEventListener("touchcancel", a, !1)
                } else h.show(t, e), n && (e.addEventListener("touchend", h.hide, !1), e.addEventListener("touchcancel", h.hide, !1)), e.addEventListener("mouseup", h.hide, !1), e.addEventListener("mouseleave", h.hide, !1)
            }
        }
        var t = t || {},
            e = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window,
            h = {
                duration: 750,
                delay: 200,
                show: function(t, e, i) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", e.appendChild(n);
                    var o = c(e),
                        a = 0,
                        r = 0;
                    "touches" in t && t.touches.length ? (a = t.touches[0].pageY - o.top, r = t.touches[0].pageX - o.left) : (a = t.pageY - o.top, r = t.pageX - o.left), r = r >= 0 ? r : 0, a = a >= 0 ? a : 0;
                    var s = "scale(" + e.clientWidth / 100 * 3 + ")",
                        l = "translate(0,0)";
                    i && (l = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", r), n.setAttribute("data-y", a), n.setAttribute("data-scale", s), n.setAttribute("data-translate", l);
                    var f = {
                        top: a + "px",
                        left: r + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", u(f)), n.classList.remove("waves-notransition"), f["-webkit-transform"] = s + " " + l, f["-moz-transform"] = s + " " + l, f["-ms-transform"] = s + " " + l, f["-o-transform"] = s + " " + l, f.transform = s + " " + l, f.opacity = "1";
                    var d = "mousemove" === t.type ? 2500 : h.duration;
                    f["-webkit-transition-duration"] = d + "ms", f["-moz-transition-duration"] = d + "ms", f["-o-transition-duration"] = d + "ms", f["transition-duration"] = d + "ms", n.setAttribute("style", u(f))
                },
                hide: function(t, e) {
                    e = e || this;
                    for (var i = e.getElementsByClassName("waves-rippling"), n = 0, o = i.length; o > n; n++) d(t, e, i[n])
                }
            },
            f = {
                input: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        i.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(i, t), i.appendChild(t);
                        var n = window.getComputedStyle(t, null),
                            o = n.color,
                            a = n.backgroundColor;
                        i.setAttribute("style", "color:" + o + ";background:" + a), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        e.replaceChild(i, t), i.appendChild(t)
                    }
                }
            },
            p = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && p.touches && (e = !1), e
                },
                registerEvent: function(t) {
                    var e = t.type;
                    "touchstart" === e ? p.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
                        p.touches && (p.touches -= 1)
                    }, 500)
                }
            };
        return t.init = function(t) {
            var e = document.body;
            t = t || {}, "duration" in t && (h.duration = t.duration), "delay" in t && (h.delay = t.delay), n && (e.addEventListener("touchstart", m, !1), e.addEventListener("touchcancel", p.registerEvent, !1), e.addEventListener("touchend", p.registerEvent, !1)), e.addEventListener("mousedown", m, !1)
        }, t.attach = function(t, e) {
            t = l(t), "[object Array]" === i.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var n, o, a = 0, r = t.length; r > a; a++) n = t[a], o = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (f[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
        }, t.ripple = function(t, e) {
            t = l(t);
            var i = t.length;
            if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, i)
                for (var n, o, a, r = {}, s = 0, u = {
                        type: "mousedown",
                        button: 1
                    }, f = function(t, e) {
                        return function() {
                            h.hide(t, e)
                        }
                    }; i > s; s++)
                    if (n = t[s], o = e.position || {
                            x: n.clientWidth / 2,
                            y: n.clientHeight / 2
                        }, a = c(n), r.x = a.left + o.x, r.y = a.top + o.y, u.pageX = r.x, u.pageY = r.y, h.show(u, n), e.wait >= 0 && null !== e.wait) {
                        var d = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(f(d, n), e.wait)
                    }
        }, t.calm = function(t) {
            t = l(t);
            for (var e = {
                    type: "mouseup",
                    button: 1
                }, i = 0, n = t.length; n > i; i++) h.hide(e, t[i])
        }, t.displayEffect = function(e) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
        }, t
    }), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a, .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".navbar-brand", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), $(document).ready(function() {
        $("#preloader-markup").load("mdb-addons/preloader.html", function() {
            $(window).load(function() {
                $("#mdb-preloader").fadeOut("slow")
            })
        })
    }),
    function(t) {
        t(document).ready(function() {
            t(document).on("click.card", ".card", function(e) {
                t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        t(this).css({
                            display: "none"
                        })
                    }
                }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
        })
    }(jQuery), $(document).ready(function(t) {
        t(".card-share > a").on("click", function(e) {
            e.preventDefault(), t(this).parent().find("div").toggleClass("social-reveal-active"), t(this).toggleClass("share-expanded")
        })
    }),
    function(t) {
        function e() {
            var e = +t(this).attr("length"),
                i = +t(this).val().length,
                n = e >= i;
            t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), o(n, t(this))
        }

        function i(e) {
            var i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            e.parent().append(i)
        }

        function n() {
            t(this).parent().find('span[class="character-counter"]').html("")
        }

        function o(t, e) {
            var i = e.hasClass("invalid");
            t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
        }
        t.fn.characterCounter = function() {
            return this.each(function() {
                var o = void 0 !== t(this).attr("length");
                o && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", n), i(t(this)))
            })
        }, t(document).ready(function() {
            t("input, textarea").characterCounter()
        })
    }(jQuery),
    function(t) {
        t(["jquery"], function(t) {
            return function() {
                function s(t, e, i) {
                    return w({
                        type: o.error,
                        iconClass: x().iconClasses.error,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function l(i, n) {
                    return i || (i = x()), e = t("#" + i.containerId), e.length ? e : (n && (e = g(i)), e)
                }

                function c(t, e, i) {
                    return w({
                        type: o.info,
                        iconClass: x().iconClasses.info,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function u(t) {
                    i = t
                }

                function h(t, e, i) {
                    return w({
                        type: o.success,
                        iconClass: x().iconClasses.success,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function f(t, e, i) {
                    return w({
                        type: o.warning,
                        iconClass: x().iconClasses.warning,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function d(t, i) {
                    var n = x();
                    e || l(n), m(t, n, i) || v(n)
                }

                function p(i) {
                    var n = x();
                    return e || l(n), i && 0 === t(":focus", i).length ? void C(i) : void(e.children().length && e.remove())
                }

                function v(i) {
                    for (var n = e.children(), o = n.length - 1; o >= 0; o--) m(t(n[o]), i)
                }

                function m(e, i, n) {
                    var o = n && n.force ? n.force : !1;
                    return e && (o || 0 === t(":focus", e).length) ? (e[i.hideMethod]({
                        duration: i.hideDuration,
                        easing: i.hideEasing,
                        complete: function() {
                            C(e)
                        }
                    }), !0) : !1
                }

                function g(i) {
                    return e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert"), e.appendTo(t(i.target)), e
                }

                function y() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        closeMethod: !1,
                        closeDuration: !1,
                        closeEasing: !1,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning"
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        escapeHtml: !1,
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }
                }

                function b(t) {
                    i && i(t)
                }

                function w(i) {
                    function m(t) {
                        return null == t && (t = ""), new String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }

                    function g() {
                        S(), T(), P(), E(), A(), k()
                    }

                    function y() {
                        c.hover(O, L), !o.onclick && o.tapToDismiss && c.click(I), o.closeButton && d && d.click(function(t) {
                            t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), I(!0)
                        }), o.onclick && c.click(function(t) {
                            o.onclick(t), I()
                        })
                    }

                    function w() {
                        c.hide(), c[o.showMethod]({
                            duration: o.showDuration,
                            easing: o.showEasing,
                            complete: o.onShown
                        }), o.timeOut > 0 && (s = setTimeout(I, o.timeOut), p.maxHideTime = parseFloat(o.timeOut), p.hideEta = (new Date).getTime() + p.maxHideTime, o.progressBar && (p.intervalId = setInterval(R, 10)))
                    }

                    function S() {
                        i.iconClass && c.addClass(o.toastClass).addClass(a)
                    }

                    function k() {
                        o.newestOnTop ? e.prepend(c) : e.append(c)
                    }

                    function T() {
                        i.title && (u.append(o.escapeHtml ? m(i.title) : i.title).addClass(o.titleClass), c.append(u))
                    }

                    function P() {
                        i.message && (h.append(o.escapeHtml ? m(i.message) : i.message).addClass(o.messageClass), c.append(h))
                    }

                    function E() {
                        o.closeButton && (d.addClass("toast-close-button").attr("role", "button"), c.prepend(d))
                    }

                    function A() {
                        o.progressBar && (f.addClass("toast-progress"), c.prepend(f))
                    }

                    function M(t, e) {
                        if (t.preventDuplicates) {
                            if (e.message === r) return !0;
                            r = e.message
                        }
                        return !1
                    }

                    function I(e) {
                        var i = e && o.closeMethod !== !1 ? o.closeMethod : o.hideMethod,
                            n = e && o.closeDuration !== !1 ? o.closeDuration : o.hideDuration,
                            a = e && o.closeEasing !== !1 ? o.closeEasing : o.hideEasing;
                        return !t(":focus", c).length || e ? (clearTimeout(p.intervalId), c[i]({
                            duration: n,
                            easing: a,
                            complete: function() {
                                C(c), o.onHidden && "hidden" !== v.state && o.onHidden(), v.state = "hidden", v.endTime = new Date, b(v)
                            }
                        })) : void 0
                    }

                    function L() {
                        (o.timeOut > 0 || o.extendedTimeOut > 0) && (s = setTimeout(I, o.extendedTimeOut), p.maxHideTime = parseFloat(o.extendedTimeOut), p.hideEta = (new Date).getTime() + p.maxHideTime)
                    }

                    function O() {
                        clearTimeout(s), p.hideEta = 0, c.stop(!0, !0)[o.showMethod]({
                            duration: o.showDuration,
                            easing: o.showEasing
                        })
                    }

                    function R() {
                        var t = (p.hideEta - (new Date).getTime()) / p.maxHideTime * 100;
                        f.width(t + "%")
                    }
                    var o = x(),
                        a = i.iconClass || o.iconClass;
                    if ("undefined" != typeof i.optionsOverride && (o = t.extend(o, i.optionsOverride), a = i.optionsOverride.iconClass || a), !M(o, i)) {
                        n++, e = l(o, !0);
                        var s = null,
                            c = t("<div/>"),
                            u = t("<div/>"),
                            h = t("<div/>"),
                            f = t("<div/>"),
                            d = t(o.closeHtml),
                            p = {
                                intervalId: null,
                                hideEta: null,
                                maxHideTime: null
                            },
                            v = {
                                toastId: n,
                                state: "visible",
                                startTime: new Date,
                                options: o,
                                map: i
                            };
                        return g(), w(), y(), b(v), o.debug && console && console.log(v), c
                    }
                }

                function x() {
                    return t.extend({}, y(), a.options)
                }

                function C(t) {
                    e || (e = l()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && (e.remove(), r = void 0))
                }
                var e, i, r, n = 0,
                    o = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    a = {
                        clear: d,
                        remove: p,
                        error: s,
                        getContainer: l,
                        info: c,
                        options: {},
                        subscribe: u,
                        success: h,
                        version: "2.1.2",
                        warning: f
                    };
                return a
            }()
        })
    }("function" == typeof define && define.amd ? define : function(t, e) {
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
    }), $(".smooth-scroll").on("click", "a", function(t) {
        t.preventDefault();
        var e = $(this).attr("href");
        $("body,html").animate({
            scrollTop: $(e).offset().top
        }, 700)
    }),
    function(t) {
        t.fn.scrollTo = function(e) {
            return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
        }, t.fn.dropdown = function(e) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function s() {
                    void 0 !== n.data("induration") && (o.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (o.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (o.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (o.hover = n.data("hover")), void 0 !== n.data("gutter") && (o.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (o.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (o.alignment = n.data("alignment"))
                }

                function l(e) {
                    "focus" === e && (a = !0), s(), r.addClass("active"), n.addClass("active"), o.constrain_width === !0 ? r.css("width", n.outerWidth()) : r.css("white-space", "nowrap");
                    var i = window.innerHeight,
                        l = n.innerHeight(),
                        c = n.offset().left,
                        u = n.offset().top - t(window).scrollTop(),
                        h = o.alignment,
                        f = 0,
                        d = 0,
                        p = 0;
                    o.belowOrigin === !0 && (p = l);
                    var v = 0,
                        m = n.parent();
                    if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (v = m[0].scrollTop), c + r.innerWidth() > t(window).width() ? h = "right" : c - r.innerWidth() + n.innerWidth() < 0 && (h = "left"), u + r.innerHeight() > i)
                        if (u + l - r.innerHeight() < 0) {
                            var g = i - u - p;
                            r.css("max-height", g)
                        } else p || (p += l), p -= r.innerHeight();
                    if ("left" === h) f = o.gutter, d = n.position().left + f;
                    else if ("right" === h) {
                        var y = n.position().left + n.outerWidth() - r.outerWidth();
                        f = -o.gutter, d = y + f
                    }
                    r.css({
                        position: "absolute",
                        top: n.position().top + p + v,
                        left: d
                    }), r.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: o.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: o.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function c() {
                    a = !1, r.fadeOut(o.outDuration), r.removeClass("active"), n.removeClass("active"), setTimeout(function() {
                        r.css("max-height", "")
                    }, o.outDuration)
                }
                var n = t(this),
                    o = t.extend({}, i, e),
                    a = !1,
                    r = t("#" + n.attr("data-activates"));
                if (s(), n.after(r), o.hover) {
                    var u = !1;
                    n.unbind("click." + n.attr("id")), n.on("mouseenter", function(t) {
                        u === !1 && (l(), u = !0)
                    }), n.on("mouseleave", function(e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-content").is(r) || (r.stop(!0, !0), c(), u = !1)
                    }), r.on("mouseleave", function(e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-button").is(n) || (r.stop(!0, !0), c(), u = !1)
                    })
                } else n.unbind("click." + n.attr("id")), n.bind("click." + n.attr("id"), function(e) {
                    a || (n[0] != e.currentTarget || n.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? n.hasClass("active") && (c(), t(document).unbind("click." + r.attr("id") + " touchstart." + r.attr("id"))) : (e.preventDefault(), l("click")), r.hasClass("active") && t(document).bind("click." + r.attr("id") + " touchstart." + r.attr("id"), function(e) {
                        r.is(e.target) || n.is(e.target) || n.find(e.target).length || (c(), t(document).unbind("click." + r.attr("id") + " touchstart." + r.attr("id")))
                    }))
                });
                n.on("open", function(t, e) {
                    l(e)
                }), n.on("close", c)
            })
        }, t(document).ready(function() {
            t(".dropdown-button").dropdown()
        })
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var t = dropdownEffectData(this);
            dropdownEffectStart(t, t.effectIn)
        },
        "shown.bs.dropdown": function() {
            var t = dropdownEffectData(this);
            t.effectIn && t.effectOut && dropdownEffectEnd(t, function() {})
        },
        "hide.bs.dropdown": function(t) {
            var e = dropdownEffectData(this);
            e.effectOut && (t.preventDefault(), dropdownEffectStart(e, e.effectOut), dropdownEffectEnd(e, function() {
                e.dropdown.removeClass("open")
            }))
        }
    }), $(".rotate-btn").on("click", function() {
        var t = $(this).attr("data-card");
        $("#" + t).toggleClass("flipped")
    }),
    function(t) {
        function n(e) {
            if ($this = e, $this.hasClass("active") === !1) {
                $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: "40px"
                }, {
                    duration: 0
                });
                var i = 0;
                $this.find("ul .btn-floating").reverse().each(function() {
                    t(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 80,
                        delay: i
                    }), i += 40
                })
            } else {
                $this.removeClass("active");
                var i = 0;
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
        }
        t(document).ready(function() {
            t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(i) {
                var n = t(this);
                e(n)
            }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(e) {
                var n = t(this);
                i(n)
            }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(n) {
                var o = t(this),
                    a = o.parent();
                a.hasClass("active") ? i(a) : e(a)
            })
        }), t.fn.extend({
            openFAB: function() {
                e(t(this))
            },
            closeFAB: function() {
                i(t(this))
            }
        });
        var e = function(e) {
                if ($this = e, $this.hasClass("active") === !1) {
                    var n, o, i = $this.hasClass("horizontal");
                    i === !0 ? o = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: n + "px",
                        translateX: o + "px"
                    }, {
                        duration: 0
                    });
                    var a = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        t(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: a
                        }), a += 40
                    })
                }
            },
            i = function(t) {
                $this = t;
                var i, n, e = $this.hasClass("horizontal");
                e === !0 ? n = 40 : i = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: i + "px",
                    translateX: n + "px"
                }, {
                    duration: 80
                })
            };
        t(".fixed-action-btn").on({
            click: function(e) {
                return e.preventDefault(), n(t(".fixed-action-btn")), !1
            }
        })
    }(jQuery),
    function(t, e, i, n) {
        "use strict";

        function u(t, e, i) {
            return setTimeout(y(t, i), e)
        }

        function h(t, e, i) {
            return Array.isArray(t) ? (f(t, i[e], i), !0) : !1
        }

        function f(t, e, i) {
            var o;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== n)
                for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
            else
                for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
        }

        function d(e, i, n) {
            var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    a = t.console && (t.console.warn || t.console.log);
                return a && a.call(t.console, o, n), e.apply(this, arguments)
            }
        }

        function g(t, e, i) {
            var o, n = e.prototype;
            o = t.prototype = Object.create(n), o.constructor = t, o._super = n, i && p(o, i)
        }

        function y(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function b(t, e) {
            return typeof t == r ? t.apply(e ? e[0] || n : n, e) : t
        }

        function w(t, e) {
            return t === n ? e : t
        }

        function x(t, e, i) {
            f(T(e), function(e) {
                t.addEventListener(e, i, !1)
            })
        }

        function C(t, e, i) {
            f(T(e), function(e) {
                t.removeEventListener(e, i, !1)
            })
        }

        function S(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function k(t, e) {
            return t.indexOf(e) > -1
        }

        function T(t) {
            return t.trim().split(/\s+/g)
        }

        function P(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (i && t[n][i] == e || !i && t[n] === e) return n;
                n++
            }
            return -1
        }

        function E(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function A(t, e, i) {
            for (var n = [], o = [], a = 0; a < t.length;) {
                var r = e ? t[a][e] : t[a];
                P(o, r) < 0 && n.push(t[a]), o[a] = r, a++
            }
            return i && (n = e ? n.sort(function(t, i) {
                return t[e] > i[e]
            }) : n.sort()), n
        }

        function M(t, e) {
            for (var i, a, r = e[0].toUpperCase() + e.slice(1), s = 0; s < o.length;) {
                if (i = o[s], a = i ? i + r : e, a in t) return a;
                s++
            }
            return n
        }

        function L() {
            return I++
        }

        function O(e) {
            var i = e.ownerDocument || e;
            return i.defaultView || i.parentWindow || t
        }

        function it(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                b(t.options.enable, [t]) && i.handler(e)
            }, this.init()
        }

        function nt(t) {
            var e, i = t.options.inputClass;
            return new(e = i ? i : D ? kt : W ? Ot : F ? Wt : bt)(t, ot)
        }

        function ot(t, e, i) {
            var n = i.pointers.length,
                o = i.changedPointers.length,
                a = e & V && n - o === 0,
                r = e & (B | j) && n - o === 0;
            i.isFirst = !!a, i.isFinal = !!r, a && (t.session = {}), i.eventType = e, at(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function at(t, e) {
            var i = t.session,
                n = e.pointers,
                o = n.length;
            i.firstInput || (i.firstInput = lt(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = lt(e) : 1 === o && (i.firstMultiple = !1);
            var a = i.firstInput,
                r = i.firstMultiple,
                s = r ? r.center : a.center,
                u = e.center = ct(n);
            e.timeStamp = c(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = dt(s, u), e.distance = ft(s, u), rt(i, e), e.offsetDirection = ht(e.deltaX, e.deltaY);
            var h = ut(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = h.x, e.overallVelocityY = h.y, e.overallVelocity = l(h.x) > l(h.y) ? h.x : h.y, e.scale = r ? vt(r.pointers, n) : 1, e.rotation = r ? pt(r.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, st(i, e);
            var f = t.element;
            S(e.srcEvent.target, f) && (f = e.srcEvent.target), e.target = f
        }

        function rt(t, e) {
            var i = e.center,
                n = t.offsetDelta || {},
                o = t.prevDelta || {},
                a = t.prevInput || {};
            (e.eventType === V || a.eventType === B) && (o = t.prevDelta = {
                x: a.deltaX || 0,
                y: a.deltaY || 0
            }, n = t.offsetDelta = {
                x: i.x,
                y: i.y
            }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
        }

        function st(t, e) {
            var a, r, s, c, i = t.lastInterval || e,
                o = e.timeStamp - i.timeStamp;
            if (e.eventType != j && (o > X || i.velocity === n)) {
                var u = e.deltaX - i.deltaX,
                    h = e.deltaY - i.deltaY,
                    f = ut(o, u, h);
                r = f.x, s = f.y, a = l(f.x) > l(f.y) ? f.x : f.y, c = ht(u, h), t.lastInterval = e
            } else a = i.velocity, r = i.velocityX, s = i.velocityY, c = i.direction;
            e.velocity = a, e.velocityX = r, e.velocityY = s, e.direction = c
        }

        function lt(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: s(t.pointers[i].clientX),
                clientY: s(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: c(),
                pointers: e,
                center: ct(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function ct(t) {
            var e = t.length;
            if (1 === e) return {
                x: s(t[0].clientX),
                y: s(t[0].clientY)
            };
            for (var i = 0, n = 0, o = 0; e > o;) i += t[o].clientX, n += t[o].clientY, o++;
            return {
                x: s(i / e),
                y: s(n / e)
            }
        }

        function ut(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function ht(t, e) {
            return t === e ? q : l(t) >= l(e) ? 0 > t ? $ : Q : 0 > e ? Z : U
        }

        function ft(t, e, i) {
            i || (i = tt);
            var n = e[i[0]] - t[i[0]],
                o = e[i[1]] - t[i[1]];
            return Math.sqrt(n * n + o * o)
        }

        function dt(t, e, i) {
            i || (i = tt);
            var n = e[i[0]] - t[i[0]],
                o = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI
        }

        function pt(t, e) {
            return dt(e[1], e[0], et) + dt(t[1], t[0], et)
        }

        function vt(t, e) {
            return ft(e[0], e[1], et) / ft(t[0], t[1], et)
        }

        function bt() {
            this.evEl = gt, this.evWin = yt, this.pressed = !1, it.apply(this, arguments)
        }

        function kt() {
            this.evEl = Ct, this.evWin = St, it.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function At() {
            this.evTarget = Pt, this.evWin = Et, this.started = !1, it.apply(this, arguments)
        }

        function Mt(t, e) {
            var i = E(t.touches),
                n = E(t.changedTouches);
            return e & (B | j) && (i = A(i.concat(n), "identifier", !0)), [i, n]
        }

        function Ot() {
            this.evTarget = Lt,
                this.targetIds = {}, it.apply(this, arguments)
        }

        function Rt(t, e) {
            var i = E(t.touches),
                n = this.targetIds;
            if (e & (V | N) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var o, a, r = E(t.changedTouches),
                s = [],
                l = this.target;
            if (a = i.filter(function(t) {
                    return S(t.target, l)
                }), e === V)
                for (o = 0; o < a.length;) n[a[o].identifier] = !0, o++;
            for (o = 0; o < r.length;) n[r[o].identifier] && s.push(r[o]), e & (B | j) && delete n[r[o].identifier], o++;
            return s.length ? [A(a.concat(s), "identifier", !0), s] : void 0
        }

        function Wt() {
            it.apply(this, arguments);
            var t = y(this.handler, this);
            this.touch = new Ot(this.manager, t), this.mouse = new bt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function zt(t, e) {
            t & V ? (this.primaryTouch = e.changedPointers[0].identifier, Ht.call(this, e)) : t & (B | j) && Ht.call(this, e)
        }

        function Ht(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var i = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches,
                    o = function() {
                        var t = n.indexOf(i);
                        t > -1 && n.splice(t, 1)
                    };
                setTimeout(o, Ft)
            }
        }

        function _t(t) {
            for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var o = this.lastTouches[n],
                    a = Math.abs(e - o.x),
                    r = Math.abs(i - o.y);
                if (Dt >= a && Dt >= r) return !0
            }
            return !1
        }

        function Zt(t, e) {
            this.manager = t, this.set(e)
        }

        function Ut(t) {
            if (k(t, jt)) return jt;
            var e = k(t, qt),
                i = k(t, $t);
            return e && i ? jt : e || i ? e ? qt : $t : k(t, Bt) ? Bt : Nt
        }

        function Gt() {
            if (!Xt) return !1;
            var e = {},
                i = t.CSS && t.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                e[n] = i ? t.CSS.supports("touch-action", n) : !0
            }), e
        }

        function ae(t) {
            this.options = p({}, this.defaults, t || {}), this.id = L(), this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = Kt, this.simultaneous = {}, this.requireFail = []
        }

        function re(t) {
            return t & ne ? "cancel" : t & ee ? "end" : t & te ? "move" : t & Jt ? "start" : ""
        }

        function se(t) {
            return t == U ? "down" : t == Z ? "up" : t == $ ? "left" : t == Q ? "right" : ""
        }

        function le(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function ce() {
            ae.apply(this, arguments)
        }

        function ue() {
            ce.apply(this, arguments), this.pX = null, this.pY = null
        }

        function he() {
            ce.apply(this, arguments)
        }

        function fe() {
            ae.apply(this, arguments), this._timer = null, this._input = null
        }

        function de() {
            ce.apply(this, arguments)
        }

        function pe() {
            ce.apply(this, arguments)
        }

        function ve() {
            ae.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function me(t, e) {
            return e = e || {}, e.recognizers = w(e.recognizers, me.defaults.preset), new be(t, e)
        }

        function be(t, e) {
            this.options = p({}, me.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = nt(this), this.touchAction = new Zt(this, this.options.touchAction), we(this, !0), f(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function we(t, e) {
            var i = t.element;
            if (i.style) {
                var n;
                f(t.options.cssProps, function(o, a) {
                    n = M(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = t.oldCssProps[n] || ""
                }), e || (t.oldCssProps = {})
            }
        }

        function xe(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var p, o = ["", "webkit", "Moz", "MS", "ms", "o"],
            a = e.createElement("div"),
            r = "function",
            s = Math.round,
            l = Math.abs,
            c = Date.now;
        p = "function" != typeof Object.assign ? function(t) {
            if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (o !== n && null !== o)
                    for (var a in o) o.hasOwnProperty(a) && (e[a] = o[a])
            }
            return e
        } : Object.assign;
        var v = d(function(t, e, i) {
                for (var o = Object.keys(e), a = 0; a < o.length;)(!i || i && t[o[a]] === n) && (t[o[a]] = e[o[a]]), a++;
                return t
            }, "extend", "Use `assign`."),
            m = d(function(t, e) {
                return v(t, e, !0)
            }, "merge", "Use `assign`."),
            I = 1,
            R = /mobile|tablet|ip(ad|hone|od)|android/i,
            F = "ontouchstart" in t,
            D = M(t, "PointerEvent") !== n,
            W = F && R.test(navigator.userAgent),
            z = "touch",
            H = "pen",
            _ = "mouse",
            Y = "kinect",
            X = 25,
            V = 1,
            N = 2,
            B = 4,
            j = 8,
            q = 1,
            $ = 2,
            Q = 4,
            Z = 8,
            U = 16,
            G = $ | Q,
            K = Z | U,
            J = G | K,
            tt = ["x", "y"],
            et = ["clientX", "clientY"];
        it.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(O(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(O(this.element), this.evWin, this.domHandler)
            }
        };
        var mt = {
                mousedown: V,
                mousemove: N,
                mouseup: B
            },
            gt = "mousedown",
            yt = "mousemove mouseup";
        g(bt, it, {
            handler: function(t) {
                var e = mt[t.type];
                e & V && 0 === t.button && (this.pressed = !0), e & N && 1 !== t.which && (e = B), this.pressed && (e & B && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: _,
                    srcEvent: t
                }))
            }
        });
        var wt = {
                pointerdown: V,
                pointermove: N,
                pointerup: B,
                pointercancel: j,
                pointerout: j
            },
            xt = {
                2: z,
                3: H,
                4: _,
                5: Y
            },
            Ct = "pointerdown",
            St = "pointermove pointerup pointercancel";
        t.MSPointerEvent && !t.PointerEvent && (Ct = "MSPointerDown", St = "MSPointerMove MSPointerUp MSPointerCancel"), g(kt, it, {
            handler: function(t) {
                var e = this.store,
                    i = !1,
                    n = t.type.toLowerCase().replace("ms", ""),
                    o = wt[n],
                    a = xt[t.pointerType] || t.pointerType,
                    r = a == z,
                    s = P(e, t.pointerId, "pointerId");
                o & V && (0 === t.button || r) ? 0 > s && (e.push(t), s = e.length - 1) : o & (B | j) && (i = !0), 0 > s || (e[s] = t, this.callback(this.manager, o, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: a,
                    srcEvent: t
                }), i && e.splice(s, 1))
            }
        });
        var Tt = {
                touchstart: V,
                touchmove: N,
                touchend: B,
                touchcancel: j
            },
            Pt = "touchstart",
            Et = "touchstart touchmove touchend touchcancel";
        g(At, it, {
            handler: function(t) {
                var e = Tt[t.type];
                if (e === V && (this.started = !0), this.started) {
                    var i = Mt.call(this, t, e);
                    e & (B | j) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: z,
                        srcEvent: t
                    })
                }
            }
        });
        var It = {
                touchstart: V,
                touchmove: N,
                touchend: B,
                touchcancel: j
            },
            Lt = "touchstart touchmove touchend touchcancel";
        g(Ot, it, {
            handler: function(t) {
                var e = It[t.type],
                    i = Rt.call(this, t, e);
                i && this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: z,
                    srcEvent: t
                })
            }
        });
        var Ft = 2500,
            Dt = 25;
        g(Wt, it, {
            handler: function(t, e, i) {
                var n = i.pointerType == z,
                    o = i.pointerType == _;
                if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n) zt.call(this, e, i);
                    else if (o && _t.call(this, i)) return;
                    this.callback(t, e, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Yt = M(a.style, "touchAction"),
            Xt = Yt !== n,
            Vt = "compute",
            Nt = "auto",
            Bt = "manipulation",
            jt = "none",
            qt = "pan-x",
            $t = "pan-y",
            Qt = Gt();
        Zt.prototype = {
            set: function(t) {
                t == Vt && (t = this.compute()), Xt && this.manager.element.style && Qt[t] && (this.manager.element.style[Yt] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return f(this.manager.recognizers, function(e) {
                    b(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), Ut(t.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var n = this.actions,
                    o = k(n, jt) && !Qt[jt],
                    a = k(n, $t) && !Qt[$t],
                    r = k(n, qt) && !Qt[qt];
                if (o) {
                    var s = 1 === t.pointers.length,
                        l = t.distance < 2,
                        c = t.deltaTime < 250;
                    if (s && l && c) return
                }
                return r && a ? void 0 : o || a && i & G || r && i & K ? this.preventSrc(e) : void 0
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var Kt = 1,
            Jt = 2,
            te = 4,
            ee = 8,
            ie = ee,
            ne = 16,
            oe = 32;
        ae.prototype = {
            defaults: {},
            set: function(t) {
                return p(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (h(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = le(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return h(t, "dropRecognizeWith", this) ? this : (t = le(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (h(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = le(t, this), -1 === P(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (h(t, "dropRequireFailure", this)) return this;
                t = le(t, this);
                var e = P(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function n(i) {
                    e.manager.emit(i, t)
                }
                var e = this,
                    i = this.state;
                ee > i && n(e.options.event + re(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= ee && n(e.options.event + re(i))
            },
            tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = oe)
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (oe | Kt))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = p({}, t);
                return b(this.options.enable, [this, e]) ? (this.state & (ie | ne | oe) && (this.state = Kt), this.state = this.process(e), void(this.state & (Jt | te | ee | ne) && this.tryEmit(e))) : (this.reset(), void(this.state = oe))
            },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, g(ce, ae, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    n = e & (Jt | te),
                    o = this.attrTest(t);
                return n && (i & j || !o) ? e | ne : n || o ? i & B ? e | ee : e & Jt ? e | te : Jt : oe
            }
        }), g(ue, ce, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: J
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & G && e.push($t), t & K && e.push(qt), e
            },
            directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    o = t.direction,
                    a = t.deltaX,
                    r = t.deltaY;
                return o & e.direction || (e.direction & G ? (o = 0 === a ? q : 0 > a ? $ : Q, i = a != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === r ? q : 0 > r ? Z : U, i = r != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
            },
            attrTest: function(t) {
                return ce.prototype.attrTest.call(this, t) && (this.state & Jt || !(this.state & Jt) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = se(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), g(he, ce, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [jt]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Jt)
            },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), g(fe, ae, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [Nt]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    o = t.deltaTime > e.time;
                if (this._input = t, !n || !i || t.eventType & (B | j) && !o) this.reset();
                else if (t.eventType & V) this.reset(), this._timer = u(function() {
                    this.state = ie, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & B) return ie;
                return oe
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === ie && (t && t.eventType & B ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = c(), this.manager.emit(this.options.event, this._input)))
            }
        }), g(de, ce, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [jt]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Jt)
            }
        }), g(pe, ce, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: G | K,
                pointers: 1
            },
            getTouchAction: function() {
                return ue.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var i, e = this.options.direction;
                return e & (G | K) ? i = t.overallVelocity : e & G ? i = t.overallVelocityX : e & K && (i = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && l(i) > this.options.velocity && t.eventType & B
            },
            emit: function(t) {
                var e = se(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), g(ve, ae, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Bt]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    o = t.deltaTime < e.time;
                if (this.reset(), t.eventType & V && 0 === this.count) return this.failTimeout();
                if (n && o && i) {
                    if (t.eventType != B) return this.failTimeout();
                    var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                        r = !this.pCenter || ft(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, r && a ? this.count += 1 : this.count = 1, this._input = t;
                    var s = this.count % e.taps;
                    if (0 === s) return this.hasRequireFailures() ? (this._timer = u(function() {
                        this.state = ie, this.tryEmit()
                    }, e.interval, this), Jt) : ie
                }
                return oe
            },
            failTimeout: function() {
                return this._timer = u(function() {
                    this.state = oe
                }, this.options.interval, this), oe
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == ie && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), me.VERSION = "2.0.7", me.defaults = {
            domEvents: !1,
            touchAction: Vt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [de, {
                    enable: !1
                }],
                [he, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [pe, {
                    direction: G
                }],
                [ue, {
                        direction: G
                    },
                    ["swipe"]
                ],
                [ve],
                [ve, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [fe]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var ge = 1,
            ye = 2;
        be.prototype = {
            set: function(t) {
                return p(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? ye : ge
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, n = this.recognizers,
                        o = e.curRecognizer;
                    (!o || o && o.state & ie) && (o = e.curRecognizer = null);
                    for (var a = 0; a < n.length;) i = n[a], e.stopped === ye || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (Jt | te | ee) && (o = e.curRecognizer = i), a++
                }
            },
            get: function(t) {
                if (t instanceof ae) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function(t) {
                if (h(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (h(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        i = P(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) {
                if (t !== n && e !== n) {
                    var i = this.handlers;
                    return f(T(t), function(t) {
                        i[t] = i[t] || [], i[t].push(e)
                    }), this
                }
            },
            off: function(t, e) {
                if (t !== n) {
                    var i = this.handlers;
                    return f(T(t), function(t) {
                        e ? i[t] && i[t].splice(P(i[t], e), 1) : delete i[t]
                    }), this
                }
            },
            emit: function(t, e) {
                this.options.domEvents && xe(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](e), n++
                }
            },
            destroy: function() {
                this.element && we(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, p(me, {
            INPUT_START: V,
            INPUT_MOVE: N,
            INPUT_END: B,
            INPUT_CANCEL: j,
            STATE_POSSIBLE: Kt,
            STATE_BEGAN: Jt,
            STATE_CHANGED: te,
            STATE_ENDED: ee,
            STATE_RECOGNIZED: ie,
            STATE_CANCELLED: ne,
            STATE_FAILED: oe,
            DIRECTION_NONE: q,
            DIRECTION_LEFT: $,
            DIRECTION_RIGHT: Q,
            DIRECTION_UP: Z,
            DIRECTION_DOWN: U,
            DIRECTION_HORIZONTAL: G,
            DIRECTION_VERTICAL: K,
            DIRECTION_ALL: J,
            Manager: be,
            Input: it,
            TouchAction: Zt,
            TouchInput: Ot,
            MouseInput: bt,
            PointerEventInput: kt,
            TouchMouseInput: Wt,
            SingleTouchInput: At,
            Recognizer: ae,
            AttrRecognizer: ce,
            Tap: ve,
            Pan: ue,
            Swipe: pe,
            Pinch: he,
            Rotate: de,
            Press: fe,
            on: x,
            off: C,
            each: f,
            merge: m,
            extend: v,
            assign: p,
            inherit: g,
            bindFn: y,
            prefixed: M
        });
        var Ce = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
        Ce.Hammer = me, "function" == typeof define && define.amd ? define(function() {
            return me
        }) : "undefined" != typeof module && module.exports ? module.exports = me : t[i] = me
    }(window, document, "Hammer"),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function(t, e) {
        function i(i, n) {
            var o = t(i);
            o.data("hammer") || o.data("hammer", new e(o[0], n))
        }
        t.fn.hammer = function(t) {
            return this.each(function() {
                i(this, t)
            })
        }, e.Manager.prototype.emit = function(e) {
            return function(i, n) {
                e.call(this, i, n), t(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(e.Manager.prototype.emit)
    }),
    function(t) {
        var e = {
            init: function(e) {
                var i = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                e = t.extend(i, e), t(this).each(function() {
                    function a(i) {
                        r = !1, s = !1, t("body").css({
                            overflow: "",
                            width: ""
                        }), t("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(this).remove()
                            }
                        }), "left" === e.edge ? (o.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), n.velocity({
                            translateX: "-100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                i === !0 && (n.removeAttr("style"), n.css("width", e.menuWidth))
                            }
                        })) : (o.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), n.velocity({
                            translateX: "100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                i === !0 && (n.removeAttr("style"), n.css("width", e.menuWidth))
                            }
                        }))
                    }
                    var i = t(this),
                        n = t("#" + i.attr("data-activates"));
                    240 != e.menuWidth && n.css("width", e.menuWidth);
                    var o = t('<div class="drag-target"></div>');
                    t("body").append(o), "left" == e.edge ? (n.css("transform", "translateX(-100%)"), o.css({
                        left: 0
                    })) : (n.addClass("right-aligned").css("transform", "translateX(100%)"), o.css({
                        right: 0
                    })), n.hasClass("fixed") && window.innerWidth > 1440 && n.css("transform", "translateX(0)"), n.hasClass("fixed") && t(window).resize(function() {
                        window.innerWidth > 1440 ? 0 != t("#sidenav-overlay").length && s ? a(!0) : n.css("transform", "translateX(0%)") : s === !1 && ("left" === e.edge ? n.css("transform", "translateX(-100%)") : n.css("transform", "translateX(100%)"))
                    }), e.closeOnClick === !0 && n.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        a()
                    });
                    var r = !1,
                        s = !1;
                    o.on("click", function() {
                        a()
                    }), o.hammer({
                        prevent_default: !1
                    }).bind("pan", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var r = (i.gesture.direction, i.gesture.center.x),
                                u = (i.gesture.center.y, i.gesture.velocityX, t("body")),
                                h = u.innerWidth();
                            if (u.css("overflow", "hidden"), u.width(h), 0 === t("#sidenav-overlay").length) {
                                var f = t('<div id="sidenav-overlay"></div>');
                                f.css("opacity", 0).click(function() {
                                    a()
                                }), t("body").append(f)
                            }
                            if ("left" === e.edge && (r > e.menuWidth ? r = e.menuWidth : 0 > r && (r = 0)), "left" === e.edge) r < e.menuWidth / 2 ? s = !1 : r >= e.menuWidth / 2 && (s = !0), n.css("transform", "translateX(" + (r - e.menuWidth) + "px)");
                            else {
                                r < window.innerWidth - e.menuWidth / 2 ? s = !0 : r >= window.innerWidth - e.menuWidth / 2 && (s = !1);
                                var d = r - e.menuWidth / 2;
                                0 > d && (d = 0), n.css("transform", "translateX(" + d + "px)")
                            }
                            var p;
                            "left" === e.edge ? (p = r / e.menuWidth, t("#sidenav-overlay").velocity({
                                opacity: p
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (p = Math.abs((r - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({
                                opacity: p
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var a = i.gesture.velocityX,
                                l = i.gesture.center.x,
                                c = l - e.menuWidth,
                                u = l - e.menuWidth / 2;
                            c > 0 && (c = 0), 0 > u && (u = 0), r = !1, "left" === e.edge ? s && .3 >= a || -.5 > a ? (0 != c && n.velocity({
                                translateX: [0, c]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!s || a > .3) && (t("body").css({
                                overflow: "",
                                width: ""
                            }), n.velocity({
                                translateX: [-1 * e.menuWidth - 10, c]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : s && a >= -.3 || a > .5 ? (n.velocity({
                                translateX: [0, u]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!s || -.3 > a) && (t("body").css({
                                overflow: "",
                                width: ""
                            }), n.velocity({
                                translateX: [e.menuWidth + 10, u]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), i.click(function() {
                        if (s === !0) s = !1, r = !1, a();
                        else {
                            var i = t("body"),
                                l = i.innerWidth();
                            i.css("overflow", "hidden"), i.width(l), t("body").append(o), "left" === e.edge ? (o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), n.velocity({
                                translateX: [0, -1 * e.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), n.velocity({
                                translateX: [0, e.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }));
                            var c = t('<div id="sidenav-overlay"></div>');
                            c.css("opacity", 0).click(function() {
                                s = !1, r = !1, a(), c.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        t(this).remove()
                                    }
                                })
                            }), t("body").append(c), c.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    s = !0, r = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                t("#sidenav-overlay").trigger("click")
            }
        };
        t.fn.sideNav = function(i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function(t) {
        t.fn.collapsible = function(e) {
            var i = {
                accordion: void 0
            };
            return e = t.extend(i, e), this.each(function() {
                function a(e) {
                    n = i.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }), n.not(e).removeClass("active").parent().removeClass("active"), n.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }

                function r(e) {
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }

                function s(t) {
                    var e = l(t);
                    return e.length > 0
                }

                function l(t) {
                    return t.closest("li > .collapsible-header")
                }
                var i = t(this),
                    n = t(this).find("> li > .collapsible-header"),
                    o = i.data("collapsible");
                i.off("click.collapse", ".collapsible-header"), n.off("click.collapse"), e.accordion || "accordion" === o || void 0 === o ? (n = i.find("> li > .collapsible-header"), n.on("click.collapse", function(e) {
                    var i = t(e.target);
                    s(i) && (i = l(i)), i.toggleClass("active"), a(i)
                }), a(n.filter(".active").first())) : n.each(function() {
                    t(this).on("click.collapse", function(e) {
                        var i = t(e.target);
                        s(i) && (i = l(i)), i.toggleClass("active"), r(i)
                    }), t(this).hasClass("active") && r(t(this))
                })
            })
        }, t(document).ready(function() {
            t(".collapsible").collapsible()
        })
    }(jQuery),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(this, function(t) {
        var e = function(t, e) {
                var i, n = document.createElement("canvas");
                t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
                var o = n.getContext("2d");
                n.width = n.height = e.size;
                var a = 1;
                window.devicePixelRatio > 1 && (a = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * a, o.scale(a, a)), o.translate(e.size / 2, e.size / 2), o.rotate((-0.5 + e.rotate / 180) * Math.PI);
                var r = (e.size - e.lineWidth) / 2;
                e.scaleColor && e.scaleLength && (r -= e.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var s = function(t, e, i) {
                        i = Math.min(Math.max(-1, i || 0), 1);
                        var n = 0 >= i ? !0 : !1;
                        o.beginPath(), o.arc(0, 0, r, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke()
                    },
                    l = function() {
                        var t, i;
                        o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
                        for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
                        o.restore()
                    },
                    c = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                            window.setTimeout(t, 1e3 / 60)
                        }
                    }(),
                    u = function() {
                        e.scaleColor && l(), e.trackColor && s(e.trackColor, e.trackWidth || e.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return n
                }, this.getCtx = function() {
                    return o
                }, this.clear = function() {
                    o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
                }, this.draw = function(t) {
                    e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, e.size * a, e.size * a)) : (this.clear(), u()) : this.clear(), o.lineCap = e.lineCap;
                    var n;
                    n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, s(n, e.lineWidth, t / 100)
                }.bind(this), this.animate = function(t, i) {
                    var n = Date.now();
                    e.onStart(t, i);
                    var o = function() {
                        var a = Math.min(Date.now() - n, e.animate.duration),
                            r = e.easing(this, a, t, i - t, e.animate.duration);
                        this.draw(r), e.onStep(t, i, r), a >= e.animate.duration ? e.onStop(t, i) : c(o)
                    }.bind(this);
                    c(o)
                }.bind(this)
            },
            i = function(t, i) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(t, e, i, n, o) {
                        return e /= o / 2, 1 > e ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
                    },
                    onStart: function(t, e) {},
                    onStep: function(t, e, i) {},
                    onStop: function(t, e) {}
                };
                if ("undefined" != typeof e) n.renderer = e;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer
                }
                var o = {},
                    a = 0,
                    r = function() {
                        this.el = t, this.options = o;
                        for (var e in n) n.hasOwnProperty(e) && (o[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
                        "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = {
                            duration: o.animate,
                            enabled: !0
                        }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                            duration: 1e3,
                            enabled: o.animate
                        }), this.renderer = new o.renderer(t, o), this.renderer.draw(a), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(t) {
                    return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(a, t) : this.renderer.draw(t), a = t, this
                }.bind(this), this.disableAnimation = function() {
                    return o.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return o.animate.enabled = !0, this
                }, r()
            };
        t.fn.easyPieChart = function(e) {
            return this.each(function() {
                var n;
                t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n)))
            })
        }
    }), $(function() {
        var t = !0;
        $("#accordion").on("show.bs.collapse", function() {
            t && $("#accordion .in").collapse("hide")
        })
    }),
    function(t) {
        t(document).ready(function() {
            function o(e) {
                var n = e.css("font-family"),
                    o = e.css("font-size");
                o && i.css("font-size", o), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
                var a = i.html().replace(/\n/g, "<br>");
                i.html(a), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height())
            }
            Materialize.updateTextFields = function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                t(e).each(function(e, i) {
                    t(i).val().length > 0 || i.autofocus || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
                })
            };
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(document).on("change", e, function() {
                (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label").addClass("active"), validate_field(t(this))
            }), t(document).ready(function() {
                Materialize.updateTextFields()
            }), t(document).on("reset", function(i) {
                var n = t(i.target);
                n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"), n.find(e).each(function() {
                    "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
                }), n.find("select.initialized").each(function() {
                    var t = n.find("option[selected]").text();
                    n.siblings("input.select-dropdown").val(t)
                }))
            }), t(document).on("focus", e, function() {
                t(this).siblings("label, i").addClass("active")
            }), t(document).on("blur", e, function() {
                var e = t(this);
                0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && e[0].validity.badInput !== !0 && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e)
            }), window.validate_field = function(t) {
                var e = void 0 !== t.attr("length"),
                    i = parseInt(t.attr("length")),
                    n = t.val().length;
                0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i >= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
            };
            var i = t(".hiddendiv").first();
            i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
            var n = ".materialize-textarea";
            t(n).each(function() {
                var e = t(this);
                e.val().length && o(e)
            }), t("body").on("keyup keydown autoresize", n, function() {
                o(t(this))
            }), t(document).on("change", '.file-field input[type="file"]', function() {
                for (var e = t(this).closest(".file-field"), i = e.find("input.file-path"), n = t(this)[0].files, o = [], a = 0; a < n.length; a++) o.push(n[a].name);
                i.val(o.join(", ")), i.trigger("change")
            });
            var s, a = "input[type=range]",
                r = !1;
            t(a).each(function() {
                var e = t('<span class="thumb"><span class="value"></span></span>');
                t(this).after(e)
            });
            var l = ".range-field";
            t(document).on("change", a, function(e) {
                var i = t(this).siblings(".thumb");
                i.find(".value").html(t(this).val())
            }), t(document).on("input mousedown touchstart", a, function(e) {
                var i = t(this).siblings(".thumb"),
                    n = t(this).outerWidth();
                i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(i)), i.find(".value").html(t(this).val()), r = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== e.type && (s = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left, 0 > s ? s = 0 : s > n && (s = n), i.addClass("active").css("left", s)), i.find(".value").html(t(this).val())
            }), t(document).on("mouseup touchend", l, function() {
                r = !1, t(this).removeClass("active")
            }), t(document).on("mousemove touchmove", l, function(e) {
                var n, i = t(this).children(".thumb");
                if (r) {
                    i.hasClass("active") || i.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), n = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                    var o = t(this).outerWidth();
                    0 > n ? n = 0 : n > o && (n = o), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(a).val())
                }
            }), t(document).on("mouseout touchleave", l, function() {
                if (!r) {
                    var e = t(this).children(".thumb");
                    e.hasClass("active") && e.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), e.removeClass("active")
                }
            })
        }), t.fn.material_select = function(e) {
            function i(t, e, i) {
                var o = t.indexOf(e),
                    a = -1 === o;
                return a ? t.push(e) : t.splice(o, 1), i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", a), n(t, i), a
            }

            function n(t, e) {
                for (var i = "", n = 0, o = t.length; o > n; n++) {
                    var a = e.find("option").eq(t[n]).text();
                    i += 0 === n ? a : ", " + a
                }
                "" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i)
            }
            t(this).each(function() {
                var n = t(this);
                if (!n.hasClass("browser-default")) {
                    var o = n.attr("multiple") ? !0 : !1,
                        a = n.data("select-id");
                    if (a && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + a).remove()), "destroy" === e) return void n.data("select-id", null).removeClass("initialized");
                    var r = Materialize.guid();
                    n.data("select-id", r);
                    var s = t('<div class="select-wrapper"></div>');
                    s.addClass(n.attr("class"));
                    var l = t('<ul id="select-options-' + r + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                        c = n.children("option, optgroup"),
                        u = [],
                        h = !1,
                        f = n.find("option:selected").html() || n.find("option:first").html() || "",
                        d = function(e, i, n) {
                            var o = i.is(":disabled") ? "disabled " : "",
                                a = i.data("icon"),
                                r = i.attr("class");
                            if (a) {
                                var s = "";
                                return r && (s = ' class="' + r + '"'), "multiple" === n ? l.append(t('<li class="' + o + '"><img src="' + a + '"' + s + '><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><img src="' + a + '"' + s + "><span>" + i.html() + "</span></li>")), !0
                            }
                            "multiple" === n ? l.append(t('<li class="' + o + '"><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><span>' + i.html() + "</span></li>"))
                        };
                    c.length && c.each(function() {
                        if (t(this).is("option")) o ? d(n, t(this), "multiple") : d(n, t(this));
                        else if (t(this).is("optgroup")) {
                            var e = t(this).children("option");
                            l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function() {
                                d(n, t(this))
                            })
                        }
                    }), l.find("li:not(.optgroup)").each(function(a) {
                        t(this).click(function(r) {
                            if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                var s = !0;
                                o ? (t('input[type="checkbox"]', this).prop("checked", function(t, e) {
                                    return !e
                                }), s = i(u, t(this).index(), n), m.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), m.val(t(this).text())), activateOption(l, t(this)), n.find("option").eq(a).prop("selected", s), n.trigger("change"), "undefined" != typeof e && e()
                            }
                            r.stopPropagation()
                        })
                    }), n.wrap(s);
                    var p = t('<span class="caret">&#9660;</span>');
                    n.is(":disabled") && p.addClass("disabled");
                    var v = f.replace(/"/g, "&quot;"),
                        m = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + r + '" value="' + v + '"/>');
                    n.before(m), m.before(p), m.after(l), n.is(":disabled") || m.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), n.attr("tabindex") && t(m[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), m.on({
                        focus: function() {
                            if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                                t(this).trigger("open", ["focus"]);
                                var e = t(this).val(),
                                    i = l.find("li").filter(function() {
                                        return t(this).text().toLowerCase() === e.toLowerCase()
                                    })[0];
                                activateOption(l, i)
                            }
                        },
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }), m.on("blur", function() {
                        o || t(this).trigger("close"), l.find("li.selected").removeClass("selected")
                    }), l.hover(function() {
                        h = !0
                    }, function() {
                        h = !1
                    }), t(window).on({
                        click: function() {
                            o && (h || m.trigger("close"))
                        }
                    }), o && n.find("option:selected:not(:disabled)").each(function() {
                        var e = t(this).index();
                        i(u, e, n), l.find("li").eq(e).find(":checkbox").prop("checked", !0)
                    }), activateOption = function(e, i) {
                        if (i) {
                            e.find("li.selected").removeClass("selected");
                            var n = t(i);
                            n.addClass("selected"), l.scrollTo(n)
                        }
                    };
                    var g = [],
                        y = function(e) {
                            if (9 == e.which) return void m.trigger("close");
                            if (40 == e.which && !l.is(":visible")) return void m.trigger("open");
                            if (13 != e.which || l.is(":visible")) {
                                e.preventDefault();
                                var i = String.fromCharCode(e.which).toLowerCase(),
                                    n = [9, 13, 27, 38, 40];
                                if (i && -1 === n.indexOf(e.which)) {
                                    g.push(i);
                                    var a = g.join(""),
                                        r = l.find("li").filter(function() {
                                            return 0 === t(this).text().toLowerCase().indexOf(a)
                                        })[0];
                                    r && activateOption(l, r)
                                }
                                if (13 == e.which) {
                                    var s = l.find("li.selected:not(.disabled)")[0];
                                    s && (t(s).trigger("click"), o || m.trigger("close"))
                                }
                                40 == e.which && (r = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], activateOption(l, r)), 27 == e.which && m.trigger("close"), 38 == e.which && (r = l.find("li.selected").prev("li:not(.disabled)")[0], r && activateOption(l, r)), setTimeout(function() {
                                    g = []
                                }, 1e3)
                            }
                        };
                    m.on("keydown", y)
                }
            })
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
    }(function(t) {
        function a(e, c, u, f) {
            function w() {
                return a._.node("div", a._.node("div", a._.node("div", a._.node("div", b.component.nodes(p.open), m.box), m.wrap), m.frame), m.holder, 'tabindex="-1"')
            }

            function x() {
                g.data(c, b).addClass(m.input).val(g.data("value") ? b.get("select", v.format) : e.value), v.editable || g.on("focus." + p.id + " click." + p.id, function(t) {
                    t.preventDefault(), b.open()
                }).on("keydown." + p.id, E), l(e, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: e.id + "_root"
                })
            }

            function C() {
                l(b.$root[0], "hidden", !0)
            }

            function S() {
                b.$holder.on({
                    keydown: E,
                    "focus.toOpen": P,
                    blur: function() {
                        g.removeClass(m.target)
                    },
                    focusin: function(t) {
                        b.$root.removeClass(m.focused), t.stopPropagation()
                    },
                    "mousedown click": function(e) {
                        var i = e.target;
                        i != b.$holder[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), b.$holder[0].focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var e = t(this),
                        i = e.data(),
                        n = e.hasClass(m.navDisabled) || e.hasClass(m.disabled),
                        o = h();
                    o = o && (o.type || o.href), (n || o && !t.contains(b.$root[0], o)) && b.$holder[0].focus(), !n && i.nav ? b.set("highlight", b.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? (b.set("select", i.pick), v.closeOnSelect && b.close(!0)) : i.clear ? (b.clear(), v.closeOnClear && b.close(!0)) : i.close && b.close(!0)
                })
            }

            function k() {
                var i;
                v.hiddenName === !0 ? (i = e.name, e.name = "") : (i = ["string" == typeof v.hiddenPrefix ? v.hiddenPrefix : "", "string" == typeof v.hiddenSuffix ? v.hiddenSuffix : "_submit"], i = i[0] + e.name + i[1]), b._hidden = t('<input type=hidden name="' + i + '"' + (g.data("value") || e.value ? ' value="' + b.get("select", v.formatSubmit) + '"' : "") + ">")[0], g.on("change." + p.id, function() {
                    b._hidden.value = e.value ? b.get("select", v.formatSubmit) : ""
                })
            }

            function T() {
                d && o ? b.$holder.find("." + m.frame).one("transitionend", function() {
                    b.$holder[0].focus()
                }) : b.$holder[0].focus()
            }

            function P(t) {
                t.stopPropagation(), g.addClass(m.target), b.$root.addClass(m.focused), b.open()
            }

            function E(t) {
                var e = t.keyCode,
                    i = /^(8|46)$/.test(e);
                return 27 == e ? (b.close(!0), !1) : void((32 == e || i || !p.open && b.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? b.clear().close() : b.open()))
            }
            if (!e) return a;
            var d = !1,
                p = {
                    id: e.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                v = u ? t.extend(!0, {}, u.defaults, f) : f || {},
                m = t.extend({}, a.klasses(), v.klass),
                g = t(e),
                y = function() {
                    return this.start()
                },
                b = y.prototype = {
                    constructor: y,
                    $node: g,
                    start: function() {
                        return p && p.start ? b : (p.methods = {}, p.start = !0, p.open = !1, p.type = e.type, e.autofocus = e == h(), e.readOnly = !v.editable, e.id = e.id || p.id, "text" != e.type && (e.type = "text"), b.component = new u(b, v), b.$root = t('<div class="' + m.picker + '" id="' + e.id + '_root" />'), C(), b.$holder = t(w()).appendTo(b.$root), S(), v.formatSubmit && k(), x(), v.containerHidden ? t(v.containerHidden).append(b._hidden) : g.after(b._hidden), v.container ? t(v.container).append(b.$root) : g.after(b.$root), b.on({
                            start: b.component.onStart,
                            render: b.component.onRender,
                            stop: b.component.onStop,
                            open: b.component.onOpen,
                            close: b.component.onClose,
                            set: b.component.onSet
                        }).on({
                            start: v.onStart,
                            render: v.onRender,
                            stop: v.onStop,
                            open: v.onOpen,
                            close: v.onClose,
                            set: v.onSet
                        }), d = r(b.$holder[0]), e.autofocus && b.open(), b.trigger("start").trigger("render"))
                    },
                    render: function(e) {
                        return e ? (b.$holder = t(w()), S(), b.$root.html(b.$holder)) : b.$root.find("." + m.box).html(b.component.nodes(p.open)), b.trigger("render")
                    },
                    stop: function() {
                        return p.start ? (b.close(), b._hidden && b._hidden.parentNode.removeChild(b._hidden), b.$root.remove(), g.removeClass(m.input).removeData(c), setTimeout(function() {
                            g.off("." + p.id)
                        }, 0), e.type = p.type, e.readOnly = !1, b.trigger("stop"), p.methods = {}, p.start = !1, b) : b
                    },
                    open: function(o) {
                        return p.open ? b : (g.addClass(m.active), l(e, "expanded", !0), setTimeout(function() {
                            b.$root.addClass(m.opened), l(b.$root[0], "hidden", !1)
                        }, 0), o !== !1 && (p.open = !0, d && n.css("overflow", "hidden").css("padding-right", "+=" + s()), T(), i.on("click." + p.id + " focusin." + p.id, function(t) {
                            var i = t.target;
                            i != e && i != document && 3 != t.which && b.close(i === b.$holder[0])
                        }).on("keydown." + p.id, function(e) {
                            var i = e.keyCode,
                                n = b.component.key[i],
                                o = e.target;
                            27 == i ? b.close(!0) : o != b.$holder[0] || !n && 13 != i ? t.contains(b.$root[0], o) && 13 == i && (e.preventDefault(), o.click()) : (e.preventDefault(), n ? a._.trigger(b.component.key.go, b, [a._.trigger(n)]) : b.$root.find("." + m.highlighted).hasClass(m.disabled) || (b.set("select", b.component.item.highlight), v.closeOnSelect && b.close(!0)))
                        })), b.trigger("open"))
                    },
                    close: function(t) {
                        return t && (v.editable ? e.focus() : (b.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                            b.$holder.on("focus.toOpen", P)
                        }, 0))), g.removeClass(m.active), l(e, "expanded", !1), setTimeout(function() {
                            b.$root.removeClass(m.opened + " " + m.focused), l(b.$root[0], "hidden", !0)
                        }, 0), p.open ? (p.open = !1, d && n.css("overflow", "").css("padding-right", "-=" + s()), i.off("." + p.id), b.trigger("close")) : b
                    },
                    clear: function(t) {
                        return b.set("clear", null, t)
                    },
                    set: function(e, i, n) {
                        var o, a, r = t.isPlainObject(e),
                            s = r ? e : {};
                        if (n = r && t.isPlainObject(i) ? i : n || {}, e) {
                            r || (s[e] = i);
                            for (o in s) a = s[o], o in b.component.item && (void 0 === a && (a = null), b.component.set(o, a, n)), ("select" == o || "clear" == o) && g.val("clear" == o ? "" : b.get(o, v.format)).trigger("change");
                            b.render()
                        }
                        return n.muted ? b : b.trigger("set", s)
                    },
                    get: function(t, i) {
                        if (t = t || "value", null != p[t]) return p[t];
                        if ("valueSubmit" == t) {
                            if (b._hidden) return b._hidden.value;
                            t = "value"
                        }
                        if ("value" == t) return e.value;
                        if (t in b.component.item) {
                            if ("string" == typeof i) {
                                var n = b.component.get(t);
                                return n ? a._.trigger(b.component.formats.toString, b.component, [i, n]) : ""
                            }
                            return b.component.get(t)
                        }
                    },
                    on: function(e, i, n) {
                        var o, a, r = t.isPlainObject(e),
                            s = r ? e : {};
                        if (e) {
                            r || (s[e] = i);
                            for (o in s) a = s[o], n && (o = "_" + o), p.methods[o] = p.methods[o] || [], p.methods[o].push(a)
                        }
                        return b
                    },
                    off: function() {
                        var t, e, i = arguments;
                        for (t = 0, namesCount = i.length; t < namesCount; t += 1) e = i[t], e in p.methods && delete p.methods[e];
                        return b
                    },
                    trigger: function(t, e) {
                        var i = function(t) {
                            var i = p.methods[t];
                            i && i.map(function(t) {
                                a._.trigger(t, b, [e])
                            })
                        };
                        return i("_" + t), i(t), b
                    }
                };
            return new y
        }

        function r(t) {
            var e, i = "position";
            return t.currentStyle ? e = t.currentStyle[i] : window.getComputedStyle && (e = getComputedStyle(t)[i]), "fixed" == e
        }

        function s() {
            if (n.height() <= e.height()) return 0;
            var i = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var a = t('<div style="width:100%" />').appendTo(i),
                r = a[0].offsetWidth;
            return i.remove(), o - r
        }

        function l(e, i, n) {
            if (t.isPlainObject(i))
                for (var o in i) c(e, o, i[o]);
            else c(e, i, n)
        }

        function c(t, e, i) {
            t.setAttribute(("role" == e ? "" : "aria-") + e, i)
        }

        function u(e, i) {
            t.isPlainObject(e) || (e = {
                attribute: i
            }), i = "";
            for (var n in e) {
                var o = ("role" == n ? "" : "aria-") + n,
                    a = e[n];
                i += null == a ? "" : o + '="' + e[n] + '"'
            }
            return i
        }

        function h() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        var e = t(window),
            i = t(document),
            n = t(document.documentElement),
            o = null != document.documentElement.style.transition;
        return a.klasses = function(t) {
            return t = t || "picker", {
                picker: t,
                opened: t + "--opened",
                focused: t + "--focused",
                input: t + "__input",
                active: t + "__input--active",
                target: t + "__input--target",
                holder: t + "__holder",
                frame: t + "__frame",
                wrap: t + "__wrap",
                box: t + "__box"
            }
        }, a._ = {
            group: function(t) {
                for (var e, i = "", n = a._.trigger(t.min, t); n <= a._.trigger(t.max, t, [n]); n += t.i) e = a._.trigger(t.item, t, [n]), i += a._.node(t.node, e[0], e[1], e[2]);
                return i
            },
            node: function(e, i, n, o) {
                return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", o = o ? " " + o : "", "<" + e + n + o + ">" + i + "</" + e + ">") : ""
            },
            lead: function(t) {
                return (10 > t ? "0" : "") + t
            },
            trigger: function(t, e, i) {
                return "function" == typeof t ? t.apply(e, i || []) : t
            },
            digits: function(t) {
                return /\d/.test(t[1]) ? 2 : 1
            },
            isDate: function(t) {
                return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
            },
            isInteger: function(t) {
                return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0
            },
            ariaAttr: u
        }, a.extend = function(e, i) {
            t.fn[e] = function(n, o) {
                var r = this.data(e);
                return "picker" == n ? r : r && "string" == typeof n ? a._.trigger(r[n], r, [o]) : this.each(function() {
                    var o = t(this);
                    o.data(e) || new a(this, e, i, n)
                })
            }, t.fn[e].defaults = i.defaults
        }, a
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
    }(function(t, e) {
        function a(t, e) {
            var i = this,
                n = t.$node[0],
                o = n.value,
                a = t.$node.data("value"),
                r = a || o,
                s = a ? e.formatSubmit : e.format,
                l = function() {
                    return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
                };
            i.settings = e, i.$node = t.$node, i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = - function(t) {
                return t[0] === !0 ? t.shift() : -1
            }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), r ? i.set("select", r, {
                format: s,
                defaultValue: !0
            }) : i.set("select", null).set("highlight", i.item.now), i.key = {
                40: 7,
                38: -7,
                39: function() {
                    return l() ? -1 : 1
                },
                37: function() {
                    return l() ? 1 : -1
                },
                go: function(t) {
                    var e = i.item.highlight,
                        n = new Date(e.year, e.month, e.date + t);
                    i.set("highlight", n, {
                        interval: t
                    }), this.render()
                }
            }, t.on("render", function() {
                t.$root.find("." + e.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
                }), t.$root.find("." + e.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                t.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var i = 7,
            n = 6,
            o = t._;
        a.prototype.set = function(t, e, i) {
            var n = this,
                o = n.item;
            return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function(o) {
                return e = n[o](t, e, i)
            }).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
        }, a.prototype.get = function(t) {
            return this.item[t]
        }, a.prototype.create = function(t, i, n) {
            var a, r = this;
            return i = void 0 === i ? t : i, i == -(1 / 0) || i == 1 / 0 ? a = i : e.isPlainObject(i) && o.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = o.isDate(i) ? i : r.create().obj) : i = o.isInteger(i) || o.isDate(i) ? r.normalize(new Date(i), n) : r.now(t, i, n), {
                year: a || i.getFullYear(),
                month: a || i.getMonth(),
                date: a || i.getDate(),
                day: a || i.getDay(),
                obj: a || i,
                pick: a || i.getTime()
            }
        }, a.prototype.createRange = function(t, i) {
            var n = this,
                a = function(t) {
                    return t === !0 || e.isArray(t) || o.isDate(t) ? n.create(t) : t
                };
            return o.isInteger(t) || (t = a(t)), o.isInteger(i) || (i = a(i)), o.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : o.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
                from: a(t),
                to: a(i)
            }
        }, a.prototype.withinRange = function(t, e) {
            return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
        }, a.prototype.overlapRanges = function(t, e) {
            var i = this;
            return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to)
        }, a.prototype.now = function(t, e, i) {
            return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
        }, a.prototype.navigate = function(t, i, n) {
            var o, a, r, s, l = e.isArray(i),
                c = e.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (a = i.year, r = i.month, s = i.date) : (a = +i[0], r = +i[1], s = +i[2]), n && n.nav && u && u.month !== r && (a = u.year, r = u.month), o = new Date(a, r + (n && n.nav ? n.nav : 0), 1), a = o.getFullYear(), r = o.getMonth(); new Date(a, r, s).getMonth() !== r;) s -= 1;
                i = [a, r, s]
            }
            return i
        }, a.prototype.normalize = function(t) {
            return t.setHours(0, 0, 0, 0), t
        }, a.prototype.measure = function(t, e) {
            var i = this;
            return e ? "string" == typeof e ? e = i.parse(t, e) : o.isInteger(e) && (e = i.now(t, e, {
                rel: e
            })) : e = "min" == t ? -(1 / 0) : 1 / 0, e
        }, a.prototype.viewset = function(t, e) {
            return this.create([e.year, e.month, 1])
        }, a.prototype.validate = function(t, i, n) {
            var c, u, d, p, a = this,
                r = i,
                s = n && n.interval ? n.interval : 1,
                l = -1 === a.item.enable,
                h = a.item.min,
                f = a.item.max,
                v = l && a.item.disable.filter(function(t) {
                    if (e.isArray(t)) {
                        var n = a.create(t).pick;
                        n < i.pick ? c = !0 : n > i.pick && (u = !0)
                    }
                    return o.isInteger(t)
                }).length;
            if ((!n || !n.nav && !n.defaultValue) && (!l && a.disabled(i) || l && a.disabled(i) && (v || c || u) || !l && (i.pick <= h.pick || i.pick >= f.pick)))
                for (l && !v && (!u && s > 0 || !c && 0 > s) && (s *= -1); a.disabled(i) && (Math.abs(s) > 1 && (i.month < r.month || i.month > r.month) && (i = r, s = s > 0 ? 1 : -1), i.pick <= h.pick ? (d = !0, s = 1, i = a.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= f.pick && (p = !0, s = -1, i = a.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !d || !p);) i = a.create([i.year, i.month, i.date + s]);
            return i
        }, a.prototype.disabled = function(t) {
            var i = this,
                n = i.item.disable.filter(function(n) {
                    return o.isInteger(n) ? t.day === (i.settings.firstDay ? n : n - 1) % 7 : e.isArray(n) || o.isDate(n) ? t.pick === i.create(n).pick : e.isPlainObject(n) ? i.withinRange(n, t) : void 0
                });
            return n = n.length && !n.filter(function(t) {
                return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
            }).length, -1 === i.item.enable ? !n : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick
        }, a.prototype.parse = function(t, e, i) {
            var n = this,
                a = {};
            return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function(t) {
                var i = n.formats[t],
                    r = i ? o.trigger(i, n, [e, a]) : t.replace(/^!/, "").length;
                i && (a[t] = e.substr(0, r)), e = e.substr(r)
            }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e
        }, a.prototype.formats = function() {
            function t(t, e, i) {
                var n = t.match(/[^\x00-\x7F]+|\w+/)[0];
                return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
            }

            function e(t) {
                return t.match(/\w+/)[0].length
            }
            return {
                d: function(t, e) {
                    return t ? o.digits(t) : e.date
                },
                dd: function(t, e) {
                    return t ? 2 : o.lead(e.date)
                },
                ddd: function(t, i) {
                    return t ? e(t) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(t, i) {
                    return t ? e(t) : this.settings.weekdaysFull[i.day]
                },
                m: function(t, e) {
                    return t ? o.digits(t) : e.month + 1
                },
                mm: function(t, e) {
                    return t ? 2 : o.lead(e.month + 1)
                },
                mmm: function(e, i) {
                    var n = this.settings.monthsShort;
                    return e ? t(e, n, i) : n[i.month]
                },
                mmmm: function(e, i) {
                    var n = this.settings.monthsFull;
                    return e ? t(e, n, i) : n[i.month]
                },
                yy: function(t, e) {
                    return t ? 2 : ("" + e.year).slice(2)
                },
                yyyy: function(t, e) {
                    return t ? 4 : e.year
                },
                toArray: function(t) {
                    return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(t, e) {
                    var i = this;
                    return i.formats.toArray(t).map(function(t) {
                        return o.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), a.prototype.isDateExact = function(t, i) {
            var n = this;
            return o.isInteger(t) && o.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (o.isDate(t) || e.isArray(t)) && (o.isDate(i) || e.isArray(i)) ? n.create(t).pick === n.create(i).pick : e.isPlainObject(t) && e.isPlainObject(i) ? n.isDateExact(t.from, i.from) && n.isDateExact(t.to, i.to) : !1
        }, a.prototype.isDateOverlap = function(t, i) {
            var n = this,
                a = n.settings.firstDay ? 1 : 0;
            return o.isInteger(t) && (o.isDate(i) || e.isArray(i)) ? (t = t % 7 + a, t === n.create(i).day + 1) : o.isInteger(i) && (o.isDate(t) || e.isArray(t)) ? (i = i % 7 + a, i === n.create(t).day + 1) : e.isPlainObject(t) && e.isPlainObject(i) ? n.overlapRanges(t, i) : !1
        }, a.prototype.flipEnable = function(t) {
            var e = this.item;
            e.enable = t || (-1 == e.enable ? 1 : -1)
        }, a.prototype.deactivate = function(t, i) {
            var n = this,
                a = n.item.disable.slice(0);
            return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), a = []) : i === !0 ? (n.flipEnable(-1), a = []) : i.map(function(t) {
                for (var i, r = 0; r < a.length; r += 1)
                    if (n.isDateExact(t, a[r])) {
                        i = !0;
                        break
                    }
                i || (o.isInteger(t) || o.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t)
            }), a
        }, a.prototype.activate = function(t, i) {
            var n = this,
                a = n.item.disable,
                r = a.length;
            return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), a = []) : i === !1 ? (n.flipEnable(-1), a = []) : i.map(function(t) {
                var i, s, l, c;
                for (l = 0; r > l; l += 1) {
                    if (s = a[l], n.isDateExact(s, t)) {
                        i = a[l] = null, c = !0;
                        break
                    }
                    if (n.isDateOverlap(s, t)) {
                        e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : o.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; r > l; l += 1)
                        if (n.isDateExact(a[l], t)) {
                            a[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; r > l; l += 1)
                        if (n.isDateOverlap(a[l], t)) {
                            a[l] = null;
                            break
                        }
                i && a.push(i)
            }), a.filter(function(t) {
                return null != t
            })
        }, a.prototype.nodes = function(t) {
            var e = this,
                a = e.settings,
                r = e.item,
                s = r.now,
                l = r.select,
                c = r.highlight,
                u = r.view,
                h = r.disable,
                f = r.min,
                d = r.max,
                p = function(t, e) {
                    return a.firstDay && (t.push(t.shift()), e.push(e.shift())), o.node("thead", o.node("tr", o.group({
                        min: 0,
                        max: i - 1,
                        i: 1,
                        node: "th",
                        item: function(i) {
                            return [t[i], a.klass.weekdays, 'scope=col title="' + e[i] + '"']
                        }
                    })))
                }((a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysShort).slice(0), a.weekdaysFull.slice(0)),
                v = function(t) {
                    return o.node("div", " ", a.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= d.year && u.month >= d.month || !t && u.year <= f.year && u.month <= f.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + o.ariaAttr({
                        role: "button",
                        controls: e.$node[0].id + "_table"
                    }) + ' title="' + (t ? a.labelMonthNext : a.labelMonthPrev) + '"')
                },
                m = function() {
                    var i = a.showMonthsShort ? a.monthsShort : a.monthsFull;
                    return a.selectMonths ? o.node("select", o.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(t) {
                            return [i[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == f.year && t < f.month || u.year == d.year && t > d.month ? " disabled" : "")]
                        }
                    }), a.klass.selectMonth, (t ? "" : "disabled") + " " + o.ariaAttr({
                        controls: e.$node[0].id + "_table"
                    }) + ' title="' + a.labelMonthSelect + '"') : o.node("div", i[u.month], a.klass.month)
                },
                g = function() {
                    var i = u.year,
                        n = a.selectYears === !0 ? 5 : ~~(a.selectYears / 2);
                    if (n) {
                        var r = f.year,
                            s = d.year,
                            l = i - n,
                            c = i + n;
                        if (r > l && (c += r - l, l = r), c > s) {
                            var h = l - r,
                                p = c - s;
                            l -= h > p ? p : h, c = s
                        }
                        return o.node("select", o.group({
                            min: l,
                            max: c,
                            i: 1,
                            node: "option",
                            item: function(t) {
                                return [t, 0, "value=" + t + (i == t ? " selected" : "")]
                            }
                        }), a.klass.selectYear, (t ? "" : "disabled") + " " + o.ariaAttr({
                            controls: e.$node[0].id + "_table"
                        }) + ' title="' + a.labelYearSelect + '"')
                    }
                    return o.node("div", i, a.klass.year)
                };
            return o.node("div", (a.selectYears ? g() + m() : m() + g()) + v() + v(1), a.klass.header) + o.node("table", p + o.node("tbody", o.group({
                min: 0,
                max: n - 1,
                i: 1,
                node: "tr",
                item: function(t) {
                    var n = a.firstDay && 0 === e.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [o.group({
                        min: i * t - u.day + n + 1,
                        max: function() {
                            return this.min + i - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(t) {
                            t = e.create([u.year, u.month, t + (a.firstDay ? 1 : 0)]);
                            var i = l && l.pick == t.pick,
                                n = c && c.pick == t.pick,
                                r = h && e.disabled(t) || t.pick < f.pick || t.pick > d.pick,
                                p = o.trigger(e.formats.toString, e, [a.format, t]);
                            return [o.node("div", t.date, function(e) {
                                return e.push(u.month == t.month ? a.klass.infocus : a.klass.outfocus), s.pick == t.pick && e.push(a.klass.now), i && e.push(a.klass.selected), n && e.push(a.klass.highlighted), r && e.push(a.klass.disabled), e.join(" ")
                            }([a.klass.day]), "data-pick=" + t.pick + " " + o.ariaAttr({
                                role: "gridcell",
                                label: p,
                                selected: i && e.$node.val() === p ? !0 : null,
                                activedescendant: n ? !0 : null,
                                disabled: r ? !0 : null
                            })), "", o.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), a.klass.table, 'id="' + e.$node[0].id + '_table" ' + o.ariaAttr({
                role: "grid",
                controls: e.$node[0].id,
                readonly: !0
            })) + o.node("div", o.node("button", a.today, a.klass.buttonToday, "type=button data-pick=" + s.pick + (t && !e.disabled(s) ? "" : " disabled") + " " + o.ariaAttr({
                controls: e.$node[0].id
            })) + o.node("button", a.clear, a.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + o.ariaAttr({
                controls: e.$node[0].id
            })) + o.node("button", a.close, a.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + o.ariaAttr({
                controls: e.$node[0].id
            })), a.klass.footer)
        }, a.defaults = function(t) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                closeOnSelect: !0,
                closeOnClear: !0,
                format: "d mmmm, yyyy",
                klass: {
                    table: t + "table",
                    header: t + "header",
                    navPrev: t + "nav--prev",
                    navNext: t + "nav--next",
                    navDisabled: t + "nav--disabled",
                    month: t + "month",
                    year: t + "year",
                    selectMonth: t + "select--month",
                    selectYear: t + "select--year",
                    weekdays: t + "weekday",
                    day: t + "day",
                    disabled: t + "day--disabled",
                    selected: t + "day--selected",
                    highlighted: t + "day--highlighted",
                    now: t + "day--today",
                    infocus: t + "day--infocus",
                    outfocus: t + "day--outfocus",
                    footer: t + "footer",
                    buttonClear: t + "button--clear",
                    buttonToday: t + "button--today",
                    buttonClose: t + "button--close"
                }
            }
        }(t.klasses().picker + "__"), t.extend("pickadate", a)
    }), $.extend($.fn.pickadate.defaults, {
        selectMonths: !0,
        selectYears: 15,
        onRender: function() {
            var t = this.$root,
                e = this.get("highlight", "yyyy"),
                i = this.get("highlight", "dd"),
                n = this.get("highlight", "mmm"),
                o = this.get("highlight", "dddd");
            t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + n + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + e + "</div></div></div>")
        }
    }),
    function() {
        function h(t) {
            return document.createElementNS(n, t)
        }

        function f(t) {
            return (10 > t ? "0" : "") + t
        }

        function p(t) {
            var e = ++d + "";
            return t ? t + e : e
        }

        function C(e, n) {
            function H(t, e) {
                var a = r.offset(),
                    s = /^touch/.test(t.type),
                    u = a.left + v,
                    h = a.top + v,
                    f = (s ? t.originalEvent.touches[0] : t).pageX - u,
                    d = (s ? t.originalEvent.touches[0] : t).pageY - h,
                    p = Math.sqrt(f * f + d * d),
                    g = !1;
                if (!e || !(m - y > p || p > m + y)) {
                    t.preventDefault();
                    var b = setTimeout(function() {
                        A.popover.addClass("clockpicker-moving")
                    }, 200);
                    o && r.append(A.canvas), A.setHand(f, d, !e, !0), i.off(l).on(l, function(t) {
                        t.preventDefault();
                        var e = /^touch/.test(t.type),
                            i = (e ? t.originalEvent.touches[0] : t).pageX - u,
                            n = (e ? t.originalEvent.touches[0] : t).pageY - h;
                        (g || i !== f || n !== d) && (g = !0, A.setHand(i, n, !1, !0))
                    }), i.off(c).on(c, function(t) {
                        i.off(c), t.preventDefault();
                        var o = /^touch/.test(t.type),
                            a = (o ? t.originalEvent.changedTouches[0] : t).pageX - u,
                            s = (o ? t.originalEvent.changedTouches[0] : t).pageY - h;
                        (e || g) && a === f && s === d && A.setHand(a, s), "hours" === A.currentView ? A.toggleView("minutes", w / 2) : n.autoclose && (A.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() {
                            A.done()
                        }, w / 2)), r.prepend(_), clearTimeout(b), A.popover.removeClass("clockpicker-moving"), i.off(l)
                    })
                }
            }
            var a = t(x),
                r = a.find(".clockpicker-plate"),
                u = a.find(".picker__holder"),
                d = a.find(".clockpicker-hours"),
                C = a.find(".clockpicker-minutes"),
                k = a.find(".clockpicker-am-pm-block"),
                T = "INPUT" === e.prop("tagName"),
                P = T ? e : e.find("input"),
                E = t("label[for=" + P.attr("id") + "]"),
                A = this;
            if (this.id = p("cp"), this.element = e, this.holder = u, this.options = n, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = T, this.input = P, this.label = E, this.popover = a, this.plate = r, this.hoursView = d, this.minutesView = C, this.amPmBlock = k, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.footer = a.find(".picker__footer"), this.amOrPm = "PM", n.twelvehour) {
                var I = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                t(I);
                n.ampmclickable ? (this.spanAmPm.empty(), t('<div id="click-am">AM</div>').on("click", function() {
                    A.spanAmPm.children("#click-am").addClass("text-primary"), A.spanAmPm.children("#click-pm").removeClass("text-primary"), A.amOrPm = "AM"
                }).appendTo(this.spanAmPm), t('<div id="click-pm">PM</div>').on("click", function() {
                    A.spanAmPm.children("#click-pm").addClass("text-primary"), A.spanAmPm.children("#click-am").removeClass("text-primary"), A.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (t('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
                    A.amOrPm = "AM", A.amPmBlock.children(".pm-button").removeClass("active"), A.amPmBlock.children(".am-button").addClass("active"), A.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), t('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
                    A.amOrPm = "PM", A.amPmBlock.children(".am-button").removeClass("active"), A.amPmBlock.children(".pm-button").addClass("active"), A.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            n.darktheme && a.addClass("darktheme"), t('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (n.twelvehour ? "3" : "1") + '">' + n.donetext + "</button>").click(t.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(t.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(t.proxy(this.toggleView, this, "minutes")), P.on("focus.clockpicker click.clockpicker", t.proxy(this.show, this));
            var R, F, D, W, O = t('<div class="clockpicker-tick"></div>');
            if (n.twelvehour)
                for (R = 1; 13 > R; R += 1) F = O.clone(), D = R / 6 * Math.PI, W = m, F.css("font-size", "140%"), F.css({
                    left: v + Math.sin(D) * W - y,
                    top: v - Math.cos(D) * W - y
                }), F.html(0 === R ? "00" : R), d.append(F), F.on(s, H);
            else
                for (R = 0; 24 > R; R += 1) {
                    F = O.clone(), D = R / 6 * Math.PI;
                    var z = R > 0 && 13 > R;
                    W = z ? g : m, F.css({
                        left: v + Math.sin(D) * W - y,
                        top: v - Math.cos(D) * W - y
                    }), z && F.css("font-size", "120%"), F.html(0 === R ? "00" : R), d.append(F), F.on(s, H)
                }
            for (R = 0; 60 > R; R += 5) F = O.clone(), D = R / 30 * Math.PI, F.css({
                left: v + Math.sin(D) * m - y,
                top: v - Math.cos(D) * m - y
            }), F.css("font-size", "140%"), F.html(f(R)), C.append(F), F.on(s, H);
            if (r.on(s, function(e) {
                    0 === t(e.target).closest(".clockpicker-tick").length && H(e, !0)
                }), o) {
                var _ = a.find(".clockpicker-canvas"),
                    Y = h("svg");
                Y.setAttribute("class", "clockpicker-svg"), Y.setAttribute("width", b), Y.setAttribute("height", b);
                var X = h("g");
                X.setAttribute("transform", "translate(" + v + "," + v + ")");
                var V = h("circle");
                V.setAttribute("class", "clockpicker-canvas-bearing"), V.setAttribute("cx", 0), V.setAttribute("cy", 0), V.setAttribute("r", 2);
                var N = h("line");
                N.setAttribute("x1", 0), N.setAttribute("y1", 0);
                var B = h("circle");
                B.setAttribute("class", "clockpicker-canvas-bg"), B.setAttribute("r", y);
                var j = h("circle");
                j.setAttribute("class", "clockpicker-canvas-fg"), j.setAttribute("r", 5), X.appendChild(N), X.appendChild(B), X.appendChild(j), X.appendChild(V), Y.appendChild(X), _.append(Y), this.hand = N, this.bg = B, this.fg = j, this.bearing = V, this.g = X, this.canvas = _
            }
            S(this.options.init)
        }

        function S(t) {
            t && "function" == typeof t && t()
        }
        var t = window.jQuery,
            e = t(window),
            i = t(document),
            n = "http://www.w3.org/2000/svg",
            o = "SVGAngle" in window && function() {
                var t, e = document.createElement("div");
                return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == n, e.innerHTML = "", t
            }(),
            a = function() {
                var t = document.createElement("div").style;
                return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t
            }(),
            r = "ontouchstart" in window,
            s = "mousedown" + (r ? " touchstart" : ""),
            l = "mousemove.clockpicker" + (r ? " touchmove.clockpicker" : ""),
            c = "mouseup.clockpicker" + (r ? " touchend.clockpicker" : ""),
            u = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
            d = 0,
            v = 135,
            m = 110,
            g = 80,
            y = 20,
            b = 2 * v,
            w = a ? 350 : 1,
            x = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        C.DEFAULTS = {
            "default": "",
            fromnow: 0,
            donetext: "Done",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !0,
            vibrate: !0
        }, C.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, C.prototype.locate = function() {
            var t = this.element,
                e = this.popover;
            t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
            e.show()
        }, C.prototype.show = function(n) {
            if (!this.isShown) {
                S(this.options.beforeShow), t(":input").each(function() {
                    t(this).attr("tabindex", -1)
                });
                var o = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), t(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), e.on("resize.clockpicker" + this.id, function() {
                    o.isShown && o.locate()
                }), this.isAppended = !0);
                var a = ((this.input.prop("value") || this.options["default"] || "") + "").split(":");
                if (this.options.twelvehour && "undefined" != typeof a[1] && (a[1] = a[1].replace("AM", "").replace("PM", "")), "now" === a[0]) {
                    var r = new Date(+new Date + this.options.fromnow);
                    a = [r.getHours(), r.getMinutes()]
                }
                this.hours = +a[0] || 0, this.minutes = +a[1] || 0, this.spanHours.html(f(this.hours)), this.spanMinutes.html(f(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, i.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function(e) {
                    var i = t(e.target);
                    0 === i.closest(o.popover.find(".picker__wrap")).length && 0 === i.closest(o.input).length && o.hide()
                }), i.on("keyup.clockpicker." + this.id, function(t) {
                    27 === t.keyCode && o.hide()
                }), S(this.options.afterShow)
            }
        }, C.prototype.hide = function() {
            S(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), t(document.body).css("overflow", "visible"), this.isShown = !1, t(":input").each(function(e) {
                t(this).attr("tabindex", e + 1)
            }), i.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), i.off("keyup.clockpicker." + this.id), this.popover.hide(), S(this.options.afterHide)
        }, C.prototype.toggleView = function(e, i) {
            var n = !1;
            "minutes" === e && "visible" === t(this.hoursView).css("visibility") && (S(this.options.beforeHourSelect), n = !0);
            var o = "hours" === e,
                a = o ? this.hoursView : this.minutesView,
                r = o ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), r.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(i), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
                r.css("visibility", "hidden")
            }, w), n && S(this.options.afterHourSelect)
        }, C.prototype.resetClock = function(t) {
            var e = this.currentView,
                i = this[e],
                n = "hours" === e,
                a = Math.PI / (n ? 6 : 30),
                r = i * a,
                s = n && i > 0 && 13 > i ? g : m,
                l = Math.sin(r) * s,
                c = -Math.cos(r) * s,
                u = this;
            o && t ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() {
                u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(l, c)
            }, t)) : this.setHand(l, c)
        }, C.prototype.setHand = function(e, i, n, a) {
            var v, r = Math.atan2(e, -i),
                s = "hours" === this.currentView,
                l = Math.PI / (s || n ? 6 : 30),
                c = Math.sqrt(e * e + i * i),
                h = this.options,
                d = s && (m + g) / 2 > c,
                p = d ? g : m;
            if (h.twelvehour && (p = m), 0 > r && (r = 2 * Math.PI + r), v = Math.round(r / l), r = v * l, h.twelvehour ? s ? 0 === v && (v = 12) : (n && (v *= 5), 60 === v && (v = 0)) : s ? (12 === v && (v = 0), v = d ? 0 === v ? 12 : v : 0 === v ? 0 : v + 12) : (n && (v *= 5), 60 === v && (v = 0)), s ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : v % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== v && u && this.options.vibrate && (this.vibrateTimer || (navigator[u](10), this.vibrateTimer = setTimeout(t.proxy(function() {
                    this.vibrateTimer = null
                }, this), 100))), this[this.currentView] = v, this[s ? "spanHours" : "spanMinutes"].html(f(v)), !o) return void this[s ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var e = t(this);
                e.toggleClass("active", v === +e.html())
            });
            a || !s && v % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
            var b = Math.sin(r) * (p - y),
                w = -Math.cos(r) * (p - y),
                x = Math.sin(r) * p,
                C = -Math.cos(r) * p;
            this.hand.setAttribute("x2", b), this.hand.setAttribute("y2", w), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", x), this.fg.setAttribute("cy", C)
        }, C.prototype.done = function() {
            S(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var t = this.input.prop("value"),
                e = f(this.hours) + ":" + f(this.minutes);
            this.options.twelvehour && (e += this.amOrPm), this.input.prop("value", e), e !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), S(this.options.afterDone)
        }, C.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (e.off("resize.clockpicker" + this.id), this.popover.remove())
        }, t.fn.pickatime = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("clockpicker");
                if (o) "function" == typeof o[e] && o[e].apply(o, i);
                else {
                    var a = t.extend({}, C.DEFAULTS, n.data(), "object" == typeof e && e);
                    n.data("clockpicker", new C(n, a))
                }
            })
        }
    }(), ! function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
    }(this, function() {
        "use strict";
        var t = function(t, e, i, n) {
            var o = {
                features: null,
                bind: function(t, e, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var a = 0; a < e.length; a++) e[a] && t[o](e[a], i, !1)
                },
                isArray: function(t) {
                    return t instanceof Array
                },
                createEl: function(t, e) {
                    var i = document.createElement(e || "div");
                    return t && (i.className = t), i
                },
                getScrollY: function() {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop
                },
                unbind: function(t, e, i) {
                    o.bind(t, e, i, !0)
                },
                removeClass: function(t, e) {
                    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(t, e) {
                    o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                },
                hasClass: function(t, e) {
                    return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                },
                getChildByClass: function(t, e) {
                    for (var i = t.firstChild; i;) {
                        if (o.hasClass(i, e)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(t, e, i) {
                    for (var n = t.length; n--;)
                        if (t[n][i] === e) return n;
                    return -1
                },
                extend: function(t, e, i) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (i && t.hasOwnProperty(n)) continue;
                            t[n] = e[n]
                        }
                },
                easing: {
                    sine: {
                        out: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        inOut: function(t) {
                            return -(Math.cos(Math.PI * t) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(t) {
                            return --t * t * t + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var t = o.createEl(),
                        e = t.style,
                        i = "",
                        n = {};
                    if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                        var a = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10), r >= 1 && 8 > r && (n.isOldIOSPhone = !0))
                        }
                        var s = a.match(/Android\s([0-9\.]*)/),
                            l = s ? s[1] : 0;
                        l = parseFloat(l), l >= 1 && (4.4 > l && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(a)
                    }
                    for (var c, u, h = ["transform", "perspective", "animationName"], f = ["", "webkit", "Moz", "ms", "O"], d = 0; 4 > d; d++) {
                        i = f[d];
                        for (var p = 0; 3 > p; p++) c = h[p], u = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && u in e && (n[c] = u);
                        i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
                    }
                    if (!n.raf) {
                        var v = 0;
                        n.raf = function(t) {
                            var e = (new Date).getTime(),
                                i = Math.max(0, 16 - (e - v)),
                                n = window.setTimeout(function() {
                                    t(e + i)
                                }, i);
                            return v = e + i, n
                        }, n.caf = function(t) {
                            clearTimeout(t)
                        }
                    }
                    return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(t, e, i, n) {
                e = e.split(" ");
                for (var o, a = (n ? "detach" : "attach") + "Event", r = function() {
                        i.handleEvent.call(i)
                    }, s = 0; s < e.length; s++)
                    if (o = e[s])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = r;
                            t[a]("on" + o, i["oldIE" + o])
                        } else t[a]("on" + o, i)
            });
            var a = this,
                r = 25,
                s = 3,
                l = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(t) {
                        return "A" === t.tagName
                    },
                    getDoubleTapZoom: function(t, e) {
                        return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(l, n);
            var c, u, h, f, d, p, v, m, g, y, b, w, x, C, S, k, T, P, E, A, M, I, L, O, R, F, D, W, z, H, _, Y, X, V, N, B, j, q, $, Q, Z, U, G, K, J, tt, et, it, nt, ot, at, rt, st, lt, ct, ut, ht = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                ft = ht(),
                dt = ht(),
                pt = ht(),
                vt = {},
                mt = 0,
                gt = {},
                yt = ht(),
                bt = 0,
                wt = !0,
                xt = [],
                Ct = {},
                St = !1,
                kt = function(t, e) {
                    o.extend(a, e.publicMethods), xt.push(t)
                },
                Tt = function(t) {
                    var e = Je();
                    return t > e - 1 ? t - e : 0 > t ? e + t : t
                },
                Pt = {},
                Et = function(t, e) {
                    return Pt[t] || (Pt[t] = []), Pt[t].push(e)
                },
                At = function(t) {
                    var e = Pt[t];
                    if (e) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < e.length; n++) e[n].apply(a, i)
                    }
                },
                Mt = function() {
                    return (new Date).getTime()
                },
                It = function(t) {
                    lt = t, a.bg.style.opacity = t * l.bgOpacity
                },
                Lt = function(t, e, i, n, o) {
                    (!St || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), t[I] = w + e + "px, " + i + "px" + x + " scale(" + n + ")"
                },
                Ot = function(t) {
                    nt && (t && (y > a.currItem.fitRatio ? St || (hi(a.currItem, !1, !0), St = !0) : St && (hi(a.currItem), St = !1)), Lt(nt, pt.x, pt.y, y))
                },
                Rt = function(t) {
                    t.container && Lt(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
                },
                Ft = function(t, e) {
                    e[I] = w + t + "px, 0px" + x
                },
                Dt = function(t, e) {
                    if (!l.loop && e) {
                        var i = f + (yt.x * mt - t) / yt.x,
                            n = Math.round(t - ye.x);
                        (0 > i && n > 0 || i >= Je() - 1 && 0 > n) && (t = ye.x + n * l.mainScrollEndFriction)
                    }
                    ye.x = t, Ft(t, d)
                },
                Wt = function(t, e) {
                    var i = be[t] - gt[t];
                    return dt[t] + ft[t] + i - i * (e / b)
                },
                zt = function(t, e) {
                    t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
                },
                Ht = function(t) {
                    t.x = Math.round(t.x), t.y = Math.round(t.y)
                },
                _t = null,
                Yt = function() {
                    _t && (o.unbind(document, "mousemove", Yt), o.addClass(t, "pswp--has_mouse"), l.mouseUsed = !0, At("mouseUsed")), _t = setTimeout(function() {
                        _t = null
                    }, 100)
                },
                Xt = function() {
                    o.bind(document, "keydown", a), _.transform && o.bind(a.scrollWrap, "click", a), l.mouseUsed || o.bind(document, "mousemove", Yt), o.bind(window, "resize scroll", a), At("bindEvents")
                },
                Vt = function() {
                    o.unbind(window, "resize", a), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Yt), _.transform && o.unbind(a.scrollWrap, "click", a), q && o.unbind(window, v, a), At("unbindEvents")
                },
                Nt = function(t, e) {
                    var i = si(a.currItem, vt, t);
                    return e && (it = i), i
                },
                Bt = function(t) {
                    return t || (t = a.currItem), t.initialZoomLevel
                },
                jt = function(t) {
                    return t || (t = a.currItem), t.w > 0 ? l.maxSpreadZoom : 1
                },
                qt = function(t, e, i, n) {
                    return n === a.currItem.initialZoomLevel ? (i[t] = a.currItem.initialPosition[t], !0) : (i[t] = Wt(t, n), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] ? (i[t] = e.max[t], !0) : !1)
                },
                $t = function() {
                    if (I) {
                        var e = _.perspective && !O;
                        return w = "translate" + (e ? "3d(" : "("), void(x = _.perspective ? ", 0px)" : ")")
                    }
                    I = "left", o.addClass(t, "pswp--ie"), Ft = function(t, e) {
                        e.left = t + "px"
                    }, Rt = function(t) {
                        var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                            i = t.container.style,
                            n = e * t.w,
                            o = e * t.h;
                        i.width = n + "px", i.height = o + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
                    }, Ot = function() {
                        if (nt) {
                            var t = nt,
                                e = a.currItem,
                                i = e.fitRatio > 1 ? 1 : e.fitRatio,
                                n = i * e.w,
                                o = i * e.h;
                            t.width = n + "px", t.height = o + "px", t.left = pt.x + "px", t.top = pt.y + "px"
                        }
                    }
                },
                Qt = function(t) {
                    var e = "";
                    l.escKey && 27 === t.keyCode ? e = "close" : l.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, a[e]()))
                },
                Zt = function(t) {
                    t && (Z || Q || ot || B) && (t.preventDefault(), t.stopPropagation())
                },
                Ut = function() {
                    a.setScrollOffset(0, o.getScrollY())
                },
                Gt = {},
                Kt = 0,
                Jt = function(t) {
                    Gt[t] && (Gt[t].raf && F(Gt[t].raf), Kt--, delete Gt[t])
                },
                te = function(t) {
                    Gt[t] && Jt(t), Gt[t] || (Kt++, Gt[t] = {})
                },
                ee = function() {
                    for (var t in Gt) Gt.hasOwnProperty(t) && Jt(t)
                },
                ie = function(t, e, i, n, o, a, r) {
                    var s, l = Mt();
                    te(t);
                    var c = function() {
                        if (Gt[t]) {
                            if (s = Mt() - l, s >= n) return Jt(t), a(i), void(r && r());
                            a((i - e) * o(s / n) + e), Gt[t].raf = R(c)
                        }
                    };
                    c()
                },
                ne = {
                    shout: At,
                    listen: Et,
                    viewportSize: vt,
                    options: l,
                    isMainScrollAnimating: function() {
                        return ot
                    },
                    getZoomLevel: function() {
                        return y
                    },
                    getCurrentIndex: function() {
                        return f
                    },
                    isDragging: function() {
                        return q
                    },
                    isZooming: function() {
                        return J
                    },
                    setScrollOffset: function(t, e) {
                        gt.x = t, H = gt.y = e, At("updateScrollOffset", gt)
                    },
                    applyZoomPan: function(t, e, i, n) {
                        pt.x = e, pt.y = i, y = t, Ot(n)
                    },
                    init: function() {
                        if (!c && !u) {
                            var i;
                            a.framework = o, a.template = t, a.bg = o.getChildByClass(t, "pswp__bg"), D = t.className, c = !0, _ = o.detectFeatures(), R = _.raf, F = _.caf, I = _.transform, z = _.oldIE, a.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = k = [{
                                el: a.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[2],
                                wrap: 0,
                                index: -1
                            }], k[0].el.style.display = k[2].el.style.display = "none", $t(), g = {
                                resize: a.updateSize,
                                scroll: Ut,
                                keydown: Qt,
                                click: Zt
                            };
                            var n = _.isOldIOSPhone || _.isOldAndroid || _.isMobileOpera;
                            for (_.animationName && _.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0), i = 0; i < xt.length; i++) a["init" + xt[i]]();
                            if (e) {
                                var r = a.ui = new e(a, o);
                                r.init()
                            }
                            At("firstUpdate"), f = f || l.index || 0, (isNaN(f) || 0 > f || f >= Je()) && (f = 0), a.currItem = Ke(f), (_.isOldIOSPhone || _.isOldAndroid) && (wt = !1), t.setAttribute("aria-hidden", "false"), l.modal && (wt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === H && (At("initialLayout"), H = W = o.getScrollY());
                            var h = "pswp--open ";
                            for (l.mainClass && (h += l.mainClass + " "), l.showHideOpacity && (h += "pswp--animate_opacity "), h += O ? "pswp--touch" : "pswp--notouch", h += _.animationName ? " pswp--css_animation" : "", h += _.svg ? " pswp--svg" : "", o.addClass(t, h), a.updateSize(), p = -1, bt = null, i = 0; s > i; i++) Ft((i + p) * yt.x, k[i].el.style);
                            z || o.bind(a.scrollWrap, m, a), Et("initialZoomInEnd", function() {
                                a.setContent(k[0], f - 1), a.setContent(k[2], f + 1), k[0].el.style.display = k[2].el.style.display = "block", l.focus && t.focus(), Xt()
                            }), a.setContent(k[1], f), a.updateCurrItem(), At("afterInit"), wt || (C = setInterval(function() {
                                Kt || q || J || y !== a.currItem.initialZoomLevel || a.updateSize()
                            }, 1e3)), o.addClass(t, "pswp--visible")
                        }
                    },
                    close: function() {
                        c && (c = !1, u = !0, At("close"), Vt(), ei(a.currItem, null, !0, a.destroy))
                    },
                    destroy: function() {
                        At("destroy"), Qe && clearTimeout(Qe), t.setAttribute("aria-hidden", "true"), t.className = D, C && clearInterval(C), o.unbind(a.scrollWrap, m, a), o.unbind(window, "scroll", a), ke(), ee(), Pt = null
                    },
                    panTo: function(t, e, i) {
                        i || (t > it.min.x ? t = it.min.x : t < it.max.x && (t = it.max.x), e > it.min.y ? e = it.min.y : e < it.max.y && (e = it.max.y)), pt.x = t, pt.y = e, Ot()
                    },
                    handleEvent: function(t) {
                        t = t || window.event, g[t.type] && g[t.type](t)
                    },
                    goTo: function(t) {
                        t = Tt(t);
                        var e = t - f;
                        bt = e, f = t, a.currItem = Ke(f), mt -= e, Dt(yt.x * mt), ee(), ot = !1, a.updateCurrItem()
                    },
                    next: function() {
                        a.goTo(f + 1)
                    },
                    prev: function() {
                        a.goTo(f - 1)
                    },
                    updateCurrZoomItem: function(t) {
                        if (t && At("beforeChange", 0), k[1].el.children.length) {
                            var e = k[1].el.children[0];
                            nt = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                        } else nt = null;
                        it = a.currItem.bounds, b = y = a.currItem.initialZoomLevel, pt.x = it.center.x, pt.y = it.center.y, t && At("afterChange")
                    },
                    invalidateCurrItems: function() {
                        S = !0;
                        for (var t = 0; s > t; t++) k[t].item && (k[t].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(t) {
                        if (0 !== bt) {
                            var e, i = Math.abs(bt);
                            if (!(t && 2 > i)) {
                                a.currItem = Ke(f), St = !1, At("beforeChange", bt), i >= s && (p += bt + (bt > 0 ? -s : s), i = s);
                                for (var n = 0; i > n; n++) bt > 0 ? (e = k.shift(), k[s - 1] = e, p++, Ft((p + 2) * yt.x, e.el.style), a.setContent(e, f - i + n + 1 + 1)) : (e = k.pop(), k.unshift(e), p--, Ft(p * yt.x, e.el.style), a.setContent(e, f + i - n - 1 - 1));
                                if (nt && 1 === Math.abs(bt)) {
                                    var o = Ke(T);
                                    o.initialZoomLevel !== y && (si(o, vt), hi(o), Rt(o))
                                }
                                bt = 0, a.updateCurrZoomItem(), T = f, At("afterChange")
                            }
                        }
                    },
                    updateSize: function(e) {
                        if (!wt && l.modal) {
                            var i = o.getScrollY();
                            if (H !== i && (t.style.top = i + "px", H = i), !e && Ct.x === window.innerWidth && Ct.y === window.innerHeight) return;
                            Ct.x = window.innerWidth, Ct.y = window.innerHeight, t.style.height = Ct.y + "px"
                        }
                        if (vt.x = a.scrollWrap.clientWidth, vt.y = a.scrollWrap.clientHeight, Ut(), yt.x = vt.x + Math.round(vt.x * l.spacing), yt.y = vt.y, Dt(yt.x * mt), At("beforeResize"), void 0 !== p) {
                            for (var n, r, c, u = 0; s > u; u++) n = k[u], Ft((u + p) * yt.x, n.el.style), c = f + u - 1, l.loop && Je() > 2 && (c = Tt(c)), r = Ke(c), r && (S || r.needsUpdate || !r.bounds) ? (a.cleanSlide(r), a.setContent(n, c), 1 === u && (a.currItem = r, a.updateCurrZoomItem(!0)), r.needsUpdate = !1) : -1 === n.index && c >= 0 && a.setContent(n, c), r && r.container && (si(r, vt), hi(r), Rt(r));
                            S = !1
                        }
                        b = y = a.currItem.initialZoomLevel, it = a.currItem.bounds, it && (pt.x = it.center.x, pt.y = it.center.y, Ot(!0)), At("resize")
                    },
                    zoomTo: function(t, e, i, n, a) {
                        e && (b = y, be.x = Math.abs(e.x) - pt.x, be.y = Math.abs(e.y) - pt.y, zt(dt, pt));
                        var r = Nt(t, !1),
                            s = {};
                        qt("x", r, s, t), qt("y", r, s, t);
                        var l = y,
                            c = {
                                x: pt.x,
                                y: pt.y
                            };
                        Ht(s);
                        var u = function(e) {
                            1 === e ? (y = t, pt.x = s.x, pt.y = s.y) : (y = (t - l) * e + l, pt.x = (s.x - c.x) * e + c.x, pt.y = (s.y - c.y) * e + c.y), a && a(e), Ot(1 === e)
                        };
                        i ? ie("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, u) : u(1)
                    }
                },
                oe = 30,
                ae = 10,
                re = {},
                se = {},
                le = {},
                ce = {},
                ue = {},
                he = [],
                fe = {},
                de = [],
                pe = {},
                ve = 0,
                me = ht(),
                ge = 0,
                ye = ht(),
                be = ht(),
                we = ht(),
                xe = function(t, e) {
                    return t.x === e.x && t.y === e.y
                },
                Ce = function(t, e) {
                    return Math.abs(t.x - e.x) < r && Math.abs(t.y - e.y) < r
                },
                Se = function(t, e) {
                    return pe.x = Math.abs(t.x - e.x), pe.y = Math.abs(t.y - e.y), Math.sqrt(pe.x * pe.x + pe.y * pe.y)
                },
                ke = function() {
                    U && (F(U), U = null)
                },
                Te = function() {
                    q && (U = R(Te), Xe())
                },
                Pe = function() {
                    return !("fit" === l.scaleMode && y === a.currItem.initialZoomLevel)
                },
                Ee = function(t, e) {
                    return t && t !== document ? t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : e(t) ? t : Ee(t.parentNode, e) : !1
                },
                Ae = {},
                Me = function(t, e) {
                    return Ae.prevent = !Ee(t.target, l.isClickableElement), At("preventDragEvent", t, e, Ae), Ae.prevent
                },
                Ie = function(t, e) {
                    return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
                },
                Le = function(t, e, i) {
                    i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y)
                },
                Oe = function(t, e, i) {
                    if (t - X > 50) {
                        var n = de.length > 2 ? de.shift() : {};
                        n.x = e, n.y = i, de.push(n), X = t
                    }
                },
                Re = function() {
                    var t = pt.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(t / (vt.y / 2))
                },
                Fe = {},
                De = {},
                We = [],
                ze = function(t) {
                    for (; We.length > 0;) We.pop();
                    return L ? (ut = 0, he.forEach(function(t) {
                        0 === ut ? We[0] = t : 1 === ut && (We[1] = t), ut++
                    })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (We[0] = Ie(t.touches[0], Fe), t.touches.length > 1 && (We[1] = Ie(t.touches[1], De))) : (Fe.x = t.pageX, Fe.y = t.pageY, Fe.id = "", We[0] = Fe), We
                },
                He = function(t, e) {
                    var i, n, o, r, s = 0,
                        c = pt[t] + e[t],
                        u = e[t] > 0,
                        h = ye.x + e.x,
                        f = ye.x - fe.x;
                    return i = c > it.min[t] || c < it.max[t] ? l.panEndFriction : 1, c = pt[t] + e[t] * i, !l.allowPanToNext && y !== a.currItem.initialZoomLevel || (nt ? "h" !== at || "x" !== t || Q || (u ? (c > it.min[t] && (i = l.panEndFriction, s = it.min[t] - c, n = it.min[t] - dt[t]), (0 >= n || 0 > f) && Je() > 1 ? (r = h, 0 > f && h > fe.x && (r = fe.x)) : it.min.x !== it.max.x && (o = c)) : (c < it.max[t] && (i = l.panEndFriction, s = c - it.max[t], n = dt[t] - it.max[t]), (0 >= n || f > 0) && Je() > 1 ? (r = h, f > 0 && h < fe.x && (r = fe.x)) : it.min.x !== it.max.x && (o = c))) : r = h, "x" !== t) ? void(ot || G || y > a.currItem.fitRatio && (pt[t] += e[t] * i)) : (void 0 !== r && (Dt(r, !0), G = r === fe.x ? !1 : !0), it.min.x !== it.max.x && (void 0 !== o ? pt.x = o : G || (pt.x += e.x * i)), void 0 !== r)
                },
                _e = function(t) {
                    if (!("mousedown" === t.type && t.button > 0)) {
                        if (Ge) return void t.preventDefault();
                        if (!j || "mousedown" !== t.type) {
                            if (Me(t, !0) && t.preventDefault(), At("pointerDown"), L) {
                                var e = o.arraySearch(he, t.pointerId, "id");
                                0 > e && (e = he.length), he[e] = {
                                    x: t.pageX,
                                    y: t.pageY,
                                    id: t.pointerId
                                }
                            }
                            var i = ze(t),
                                n = i.length;
                            K = null, ee(), q && 1 !== n || (q = rt = !0, o.bind(window, v, a), N = ct = st = B = G = Z = $ = Q = !1, at = null, At("firstTouchStart", i), zt(dt, pt), ft.x = ft.y = 0, zt(ce, i[0]), zt(ue, ce), fe.x = yt.x * mt, de = [{
                                x: ce.x,
                                y: ce.y
                            }], X = Y = Mt(), Nt(y, !0), ke(), Te()), !J && n > 1 && !ot && !G && (b = y, Q = !1, J = $ = !0, ft.y = ft.x = 0, zt(dt, pt), zt(re, i[0]), zt(se, i[1]), Le(re, se, we), be.x = Math.abs(we.x) - pt.x, be.y = Math.abs(we.y) - pt.y, tt = et = Se(re, se))
                        }
                    }
                },
                Ye = function(t) {
                    if (t.preventDefault(), L) {
                        var e = o.arraySearch(he, t.pointerId, "id");
                        if (e > -1) {
                            var i = he[e];
                            i.x = t.pageX, i.y = t.pageY
                        }
                    }
                    if (q) {
                        var n = ze(t);
                        if (at || Z || J) K = n;
                        else if (ye.x !== yt.x * mt) at = "h";
                        else {
                            var a = Math.abs(n[0].x - ce.x) - Math.abs(n[0].y - ce.y);
                            Math.abs(a) >= ae && (at = a > 0 ? "h" : "v", K = n)
                        }
                    }
                },
                Xe = function() {
                    if (K) {
                        var t = K.length;
                        if (0 !== t)
                            if (zt(re, K[0]), le.x = re.x - ce.x, le.y = re.y - ce.y, J && t > 1) {
                                if (ce.x = re.x, ce.y = re.y, !le.x && !le.y && xe(K[1], se)) return;
                                zt(se, K[1]), Q || (Q = !0, At("zoomGestureStarted"));
                                var e = Se(re, se),
                                    i = qe(e);
                                i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ct = !0);
                                var n = 1,
                                    o = Bt(),
                                    r = jt();
                                if (o > i)
                                    if (l.pinchToClose && !ct && b <= a.currItem.initialZoomLevel) {
                                        var s = o - i,
                                            c = 1 - s / (o / 1.2);
                                        It(c), At("onPinchClose", c), st = !0
                                    } else n = (o - i) / o, n > 1 && (n = 1), i = o - n * (o / 3);
                                else i > r && (n = (i - r) / (6 * o), n > 1 && (n = 1), i = r + n * o);
                                0 > n && (n = 0), tt = e, Le(re, se, me), ft.x += me.x - we.x, ft.y += me.y - we.y, zt(we, me), pt.x = Wt("x", i), pt.y = Wt("y", i), N = i > y, y = i, Ot()
                            } else {
                                if (!at) return;
                                if (rt && (rt = !1, Math.abs(le.x) >= ae && (le.x -= K[0].x - ue.x), Math.abs(le.y) >= ae && (le.y -= K[0].y - ue.y)), ce.x = re.x, ce.y = re.y, 0 === le.x && 0 === le.y) return;
                                if ("v" === at && l.closeOnVerticalDrag && !Pe()) {
                                    ft.y += le.y, pt.y += le.y;
                                    var u = Re();
                                    return B = !0, At("onVerticalDrag", u), It(u), void Ot()
                                }
                                Oe(Mt(), re.x, re.y), Z = !0, it = a.currItem.bounds;
                                var h = He("x", le);
                                h || (He("y", le), Ht(pt), Ot())
                            }
                    }
                },
                Ve = function(t) {
                    if (_.isOldAndroid) {
                        if (j && "mouseup" === t.type) return;
                        t.type.indexOf("touch") > -1 && (clearTimeout(j), j = setTimeout(function() {
                            j = 0
                        }, 600))
                    }
                    At("pointerUp"), Me(t, !1) && t.preventDefault();
                    var e;
                    if (L) {
                        var i = o.arraySearch(he, t.pointerId, "id");
                        if (i > -1)
                            if (e = he.splice(i, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";
                            else {
                                var n = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                e.type = n[t.pointerType], e.type || (e.type = t.pointerType || "mouse")
                            }
                    }
                    var r, s = ze(t),
                        c = s.length;
                    if ("mouseup" === t.type && (c = 0), 2 === c) return K = null, !0;
                    1 === c && zt(ue, s[0]), 0 !== c || at || ot || (e || ("mouseup" === t.type ? e = {
                        x: t.pageX,
                        y: t.pageY,
                        type: "mouse"
                    } : t.changedTouches && t.changedTouches[0] && (e = {
                        x: t.changedTouches[0].pageX,
                        y: t.changedTouches[0].pageY,
                        type: "touch"
                    })), At("touchRelease", t, e));
                    var u = -1;
                    if (0 === c && (q = !1, o.unbind(window, v, a), ke(), J ? u = 0 : -1 !== ge && (u = Mt() - ge)), ge = 1 === c ? Mt() : -1, r = -1 !== u && 150 > u ? "zoom" : "swipe", J && 2 > c && (J = !1, 1 === c && (r = "zoomPointerUp"), At("zoomGestureEnded")), K = null, Z || Q || ot || B)
                        if (ee(), V || (V = Ne()), V.calculateSwipeSpeed("x"), B) {
                            var h = Re();
                            if (h < l.verticalDragRange) a.close();
                            else {
                                var f = pt.y,
                                    d = lt;
                                ie("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(t) {
                                    pt.y = (a.currItem.initialPosition.y - f) * t + f, It((1 - d) * t + d), Ot()
                                }), At("onVerticalDrag", 1)
                            }
                        } else {
                            if ((G || ot) && 0 === c) {
                                var p = je(r, V);
                                if (p) return;
                                r = "zoomPointerUp"
                            }
                            if (!ot) return "swipe" !== r ? void $e() : void(!G && y > a.currItem.fitRatio && Be(V))
                        }
                },
                Ne = function() {
                    var t, e, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(n) {
                            de.length > 1 ? (t = Mt() - X + 50, e = de[de.length - 2][n]) : (t = Mt() - Y, e = ue[n]), i.lastFlickOffset[n] = ce[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function(t, e) {
                            i.backAnimStarted[t] || (pt[t] > it.min[t] ? i.backAnimDestination[t] = it.min[t] : pt[t] < it.max[t] && (i.backAnimDestination[t] = it.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, ie("bounceZoomPan" + t, pt[t], i.backAnimDestination[t], e || 300, o.easing.sine.out, function(e) {
                                pt[t] = e, Ot()
                            }))))
                        },
                        calculateAnimOffset: function(t) {
                            i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, pt[t] += i.distanceOffset[t])
                        },
                        panAnimLoop: function() {
                            return Gt.zoomPan && (Gt.zoomPan.raf = R(i.panAnimLoop), i.now = Mt(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ot(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (pt.x = Math.round(pt.x), pt.y = Math.round(pt.y), Ot(), void Jt("zoomPan")) : void 0
                        }
                    };
                    return i
                },
                Be = function(t) {
                    return t.calculateSwipeSpeed("y"), it = a.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (te("zoomPan"), t.lastNow = Mt(), void t.panAnimLoop())
                },
                je = function(t, e) {
                    var i;
                    ot || (ve = f);
                    var n;
                    if ("swipe" === t) {
                        var r = ce.x - ue.x,
                            s = e.lastFlickDist.x < 10;
                        r > oe && (s || e.lastFlickOffset.x > 20) ? n = -1 : -oe > r && (s || e.lastFlickOffset.x < -20) && (n = 1)
                    }
                    var c;
                    n && (f += n, 0 > f ? (f = l.loop ? Je() - 1 : 0, c = !0) : f >= Je() && (f = l.loop ? 0 : Je() - 1, c = !0), (!c || l.loop) && (bt += n, mt -= n, i = !0));
                    var u, h = yt.x * mt,
                        d = Math.abs(h - ye.x);
                    return i || h > ye.x == e.lastFlickSpeed.x > 0 ? (u = Math.abs(e.lastFlickSpeed.x) > 0 ? d / Math.abs(e.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, ve === f && (i = !1), ot = !0, At("mainScrollAnimStart"), ie("mainScroll", ye.x, h, u, o.easing.cubic.out, Dt, function() {
                        ee(), ot = !1, ve = -1, (i || ve !== f) && a.updateCurrItem(), At("mainScrollAnimComplete")
                    }), i && a.updateCurrItem(!0), i
                },
                qe = function(t) {
                    return 1 / et * t * b
                },
                $e = function() {
                    var t = y,
                        e = Bt(),
                        i = jt();
                    e > y ? t = e : y > i && (t = i);
                    var n, r = 1,
                        s = lt;
                    return st && !N && !ct && e > y ? (a.close(), !0) : (st && (n = function(t) {
                        It((r - s) * t + s)
                    }), a.zoomTo(t, 0, 200, o.easing.cubic.out, n), !0)
                };
            kt("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var t = function(t, e, i, n, o) {
                            P = t + e, E = t + i, A = t + n, M = o ? t + o : ""
                        };
                        L = _.pointerEvent, L && _.touch && (_.touch = !1), L ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : _.touch ? (t("touch", "start", "move", "end", "cancel"), O = !0) : t("mouse", "down", "move", "up"), v = E + " " + A + " " + M, m = P, L && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = O, g[P] = _e, g[E] = Ye, g[A] = Ve, M && (g[M] = g[A]), _.touch && (m += " mousedown", v += " mousemove mouseup", g.mousedown = g[P], g.mousemove = g[E], g.mouseup = g[A]), O || (l.allowPanToNext = !1)
                    }
                }
            });
            var Qe, Ze, Ue, Ge, Ke, Je, ti, ei = function(e, i, n, r) {
                    Qe && clearTimeout(Qe), Ge = !0, Ue = !0;
                    var s;
                    e.initialLayout ? (s = e.initialLayout, e.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(f);
                    var c = n ? l.hideAnimationDuration : l.showAnimationDuration,
                        u = function() {
                            Jt("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (It(1), i && (i.style.display = "block"), o.addClass(t, "pswp--animated-in"), At("initialZoom" + (n ? "OutEnd" : "InEnd"))), r && r(), Ge = !1
                        };
                    if (!c || !s || void 0 === s.x) return At("initialZoom" + (n ? "Out" : "In")), y = e.initialZoomLevel, zt(pt, e.initialPosition), Ot(), t.style.opacity = n ? 0 : 1, It(1), void(c ? setTimeout(function() {
                        u()
                    }, c) : u());
                    var d = function() {
                        var i = h,
                            r = !a.currItem.src || a.currItem.loadError || l.showHideOpacity;
                        e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (y = s.w / e.w, pt.x = s.x, pt.y = s.y - W, a[r ? "template" : "bg"].style.opacity = .001, Ot()), te("initialZoom"), n && !i && o.removeClass(t, "pswp--animated-in"), r && (n ? o[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(t, "pswp--animate_opacity")
                        }, 30)), Qe = setTimeout(function() {
                            if (At("initialZoom" + (n ? "Out" : "In")), n) {
                                var a = s.w / e.w,
                                    l = {
                                        x: pt.x,
                                        y: pt.y
                                    },
                                    h = y,
                                    f = lt,
                                    d = function(e) {
                                        1 === e ? (y = a, pt.x = s.x, pt.y = s.y - H) : (y = (a - h) * e + h, pt.x = (s.x - l.x) * e + l.x, pt.y = (s.y - H - l.y) * e + l.y), Ot(), r ? t.style.opacity = 1 - e : It(f - e * f)
                                    };
                                i ? ie("initialZoom", 0, 1, c, o.easing.cubic.out, d, u) : (d(1), Qe = setTimeout(u, c + 20))
                            } else y = e.initialZoomLevel, zt(pt, e.initialPosition), Ot(), It(1), r ? t.style.opacity = 1 : It(1), Qe = setTimeout(u, c + 20)
                        }, n ? 25 : 90)
                    };
                    d()
                },
                ii = {},
                ni = [],
                oi = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Ze.length
                    }
                },
                ai = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                ri = function(t, e, i) {
                    var n = t.bounds;
                    n.center.x = Math.round((ii.x - e) / 2), n.center.y = Math.round((ii.y - i) / 2) + t.vGap.top, n.max.x = e > ii.x ? Math.round(ii.x - e) : n.center.x, n.max.y = i > ii.y ? Math.round(ii.y - i) + t.vGap.top : n.center.y, n.min.x = e > ii.x ? 0 : n.center.x, n.min.y = i > ii.y ? t.vGap.top : n.center.y
                },
                si = function(t, e, i) {
                    if (t.src && !t.loadError) {
                        var n = !i;
                        if (n && (t.vGap || (t.vGap = {
                                top: 0,
                                bottom: 0
                            }), At("parseVerticalMargin", t)), ii.x = e.x, ii.y = e.y - t.vGap.top - t.vGap.bottom, n) {
                            var o = ii.x / t.w,
                                a = ii.y / t.h;
                            t.fitRatio = a > o ? o : a;
                            var r = l.scaleMode;
                            "orig" === r ? i = 1 : "fit" === r && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = ai())
                        }
                        if (!i) return;
                        return ri(t, t.w * i, t.h * i), n && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds
                    }
                    return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = ai(), t.initialPosition = t.bounds.center, t.bounds
                },
                li = function(t, e, i, n, o, r) {
                    e.loadError || n && (e.imageAppended = !0, hi(e, n, e === a.currItem && St), i.appendChild(n), r && setTimeout(function() {
                        e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                    }, 500))
                },
                ci = function(t) {
                    t.loading = !0, t.loaded = !1;
                    var e = t.img = o.createEl("pswp__img", "img"),
                        i = function() {
                            t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                        };
                    return e.onload = i, e.onerror = function() {
                        t.loadError = !0, i()
                    }, e.src = t.src, e
                },
                ui = function(t, e) {
                    return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = l.errorMsg.replace("%url%", t.src), !0) : void 0
                },
                hi = function(t, e, i) {
                    if (t.src) {
                        e || (e = t.container.lastChild);
                        var n = i ? t.w : Math.round(t.w * t.fitRatio),
                            o = i ? t.h : Math.round(t.h * t.fitRatio);
                        t.placeholder && !t.loaded && (t.placeholder.style.width = n + "px", t.placeholder.style.height = o + "px"), e.style.width = n + "px", e.style.height = o + "px"
                    }
                },
                fi = function() {
                    if (ni.length) {
                        for (var t, e = 0; e < ni.length; e++) t = ni[e], t.holder.index === t.index && li(t.index, t.item, t.baseDiv, t.img, !1, t.clearPlaceholder);
                        ni = []
                    }
                };
            kt("Controller", {
                publicMethods: {
                    lazyLoadItem: function(t) {
                        t = Tt(t);
                        var e = Ke(t);
                        e && (!e.loaded && !e.loading || S) && (At("gettingData", t, e), e.src && ci(e))
                    },
                    initController: function() {
                        o.extend(l, oi, !0), a.items = Ze = i, Ke = a.getItemAt, Je = l.getNumItemsFn, ti = l.loop, Je() < 3 && (l.loop = !1), Et("beforeChange", function(t) {
                            var e, i = l.preload,
                                n = null === t ? !0 : t >= 0,
                                o = Math.min(i[0], Je()),
                                r = Math.min(i[1], Je());
                            for (e = 1;
                                (n ? r : o) >= e; e++) a.lazyLoadItem(f + e);
                            for (e = 1;
                                (n ? o : r) >= e; e++) a.lazyLoadItem(f - e)
                        }), Et("initialLayout", function() {
                            a.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(f)
                        }), Et("mainScrollAnimComplete", fi), Et("initialZoomInEnd", fi), Et("destroy", function() {
                            for (var t, e = 0; e < Ze.length; e++) t = Ze[e], t.container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                            ni = null
                        })
                    },
                    getItemAt: function(t) {
                        return t >= 0 && void 0 !== Ze[t] ? Ze[t] : !1
                    },
                    allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !O || l.mouseUsed || screen.width > 1200
                    },
                    setContent: function(t, e) {
                        l.loop && (e = Tt(e));
                        var i = a.getItemAt(t.index);
                        i && (i.container = null);
                        var n, r = a.getItemAt(e);
                        if (!r) return void(t.el.innerHTML = "");
                        At("gettingData", e, r), t.index = e, t.item = r;
                        var s = r.container = o.createEl("pswp__zoom-wrap");
                        if (!r.src && r.html && (r.html.tagName ? s.appendChild(r.html) : s.innerHTML = r.html), ui(r), si(r, vt), !r.src || r.loadError || r.loaded) r.src && !r.loadError && (n = o.createEl("pswp__img", "img"), n.style.opacity = 1, n.src = r.src, hi(r, n), li(e, r, s, n, !0));
                        else {
                            if (r.loadComplete = function(i) {
                                    if (c) {
                                        if (t && t.index === e) {
                                            if (ui(i, !0)) return i.loadComplete = i.img = null, si(i, vt), Rt(i), void(t.index === f && a.updateCurrZoomItem());
                                            i.imageAppended ? !Ge && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : _.transform && (ot || Ge) ? ni.push({
                                                item: i,
                                                baseDiv: s,
                                                img: i.img,
                                                index: e,
                                                holder: t,
                                                clearPlaceholder: !0
                                            }) : li(e, i, s, i.img, ot || Ge, !0)
                                        }
                                        i.loadComplete = null, i.img = null, At("imageLoadComplete", e, i)
                                    }
                                }, o.features.transform) {
                                var u = "pswp__img pswp__img--placeholder";
                                u += r.msrc ? "" : " pswp__img--placeholder--blank";
                                var h = o.createEl(u, r.msrc ? "img" : "");
                                r.msrc && (h.src = r.msrc), hi(r, h), s.appendChild(h), r.placeholder = h
                            }
                            r.loading || ci(r), a.allowProgressiveImg() && (!Ue && _.transform ? ni.push({
                                item: r,
                                baseDiv: s,
                                img: r.img,
                                index: e,
                                holder: t
                            }) : li(e, r, s, r.img, !0, !0))
                        }
                        Ue || e !== f ? Rt(r) : (nt = s.style, ei(r, n || r.img)), t.el.innerHTML = "", t.el.appendChild(s)
                    },
                    cleanSlide: function(t) {
                        t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                    }
                }
            });
            var di, pi = {},
                vi = function(t, e, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: t,
                            target: t.target,
                            releasePoint: e,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(n)
                };
            kt("Tap", {
                publicMethods: {
                    initTap: function() {
                        Et("firstTouchStart", a.onTapStart), Et("touchRelease", a.onTapRelease), Et("destroy", function() {
                            pi = {}, di = null
                        })
                    },
                    onTapStart: function(t) {
                        t.length > 1 && (clearTimeout(di), di = null)
                    },
                    onTapRelease: function(t, e) {
                        if (e && !Z && !$ && !Kt) {
                            var i = e;
                            if (di && (clearTimeout(di), di = null, Ce(i, pi))) return void At("doubleTap", i);
                            if ("mouse" === e.type) return void vi(t, e, "mouse");
                            var n = t.target.tagName.toUpperCase();
                            if ("BUTTON" === n || o.hasClass(t.target, "pswp__single-tap")) return void vi(t, e);
                            zt(pi, i), di = setTimeout(function() {
                                vi(t, e), di = null
                            }, 300)
                        }
                    }
                }
            });
            var mi;
            kt("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        z || (O ? Et("mouseUsed", function() {
                            a.setupDesktopZoom()
                        }) : a.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(e) {
                        mi = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        Et("bindEvents", function() {
                            o.bind(t, i, a.handleMouseWheel)
                        }), Et("unbindEvents", function() {
                            mi && o.unbind(t, i, a.handleMouseWheel)
                        }), a.mouseZoomedIn = !1;
                        var n, r = function() {
                                a.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > y ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), s()
                            },
                            s = function() {
                                n && (o.removeClass(t, "pswp--dragging"), n = !1)
                            };
                        Et("resize", r), Et("afterChange", r), Et("pointerDown", function() {
                            a.mouseZoomedIn && (n = !0, o.addClass(t, "pswp--dragging"))
                        }), Et("pointerUp", s), e || r()
                    },
                    handleMouseWheel: function(t) {
                        if (y <= a.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Kt || q ? t.preventDefault() : I && Math.abs(t.deltaY) > 2 && (h = !0, a.close())), !0;
                        if (t.stopPropagation(), mi.x = 0, "deltaX" in t) 1 === t.deltaMode ? (mi.x = 18 * t.deltaX, mi.y = 18 * t.deltaY) : (mi.x = t.deltaX, mi.y = t.deltaY);
                        else if ("wheelDelta" in t) t.wheelDeltaX && (mi.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? mi.y = -.16 * t.wheelDeltaY : mi.y = -.16 * t.wheelDelta;
                        else {
                            if (!("detail" in t)) return;
                            mi.y = t.detail
                        }
                        Nt(y, !0);
                        var e = pt.x - mi.x,
                            i = pt.y - mi.y;
                        (l.modal || e <= it.min.x && e >= it.max.x && i <= it.min.y && i >= it.max.y) && t.preventDefault(), a.panTo(e, i)
                    },
                    toggleDesktopZoom: function(e) {
                        e = e || {
                            x: vt.x / 2 + gt.x,
                            y: vt.y / 2 + gt.y
                        };
                        var i = l.getDoubleTapZoom(!0, a.currItem),
                            n = y === i;
                        a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, e, 333), o[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in")
                    }
                }
            });
            var gi, yi, bi, wi, xi, Ci, Si, ki, Ti, Pi, Ei, Ai, Mi = {
                    history: !0,
                    galleryUID: 1
                },
                Ii = function() {
                    return Ei.hash.substring(1)
                },
                Li = function() {
                    gi && clearTimeout(gi), bi && clearTimeout(bi)
                },
                Oi = function() {
                    var t = Ii(),
                        e = {};
                    if (t.length < 5) return e;
                    var i, n = t.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (e[o[0]] = o[1])
                        }
                    if (l.galleryPIDs) {
                        var a = e.pid;
                        for (e.pid = 0, i = 0; i < Ze.length; i++)
                            if (Ze[i].pid === a) {
                                e.pid = i;
                                break
                            }
                    } else e.pid = parseInt(e.pid, 10) - 1;
                    return e.pid < 0 && (e.pid = 0), e
                },
                Ri = function() {
                    if (bi && clearTimeout(bi), Kt || q) return void(bi = setTimeout(Ri, 500));
                    wi ? clearTimeout(yi) : wi = !0;
                    var t = f + 1,
                        e = Ke(f);
                    e.hasOwnProperty("pid") && (t = e.pid);
                    var i = Si + "&gid=" + l.galleryUID + "&pid=" + t;
                    ki || -1 === Ei.hash.indexOf(i) && (Pi = !0);
                    var n = Ei.href.split("#")[0] + "#" + i;
                    Ai ? "#" + i !== window.location.hash && history[ki ? "replaceState" : "pushState"]("", document.title, n) : ki ? Ei.replace(n) : Ei.hash = i, ki = !0, yi = setTimeout(function() {
                        wi = !1
                    }, 60)
                };
            kt("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(l, Mi, !0), l.history) {
                            Ei = window.location, Pi = !1, Ti = !1, ki = !1, Si = Ii(), Ai = "pushState" in history, Si.indexOf("gid=") > -1 && (Si = Si.split("&gid=")[0], Si = Si.split("?gid=")[0]), Et("afterChange", a.updateURL), Et("unbindEvents", function() {
                                o.unbind(window, "hashchange", a.onHashChange)
                            });
                            var t = function() {
                                Ci = !0, Ti || (Pi ? history.back() : Si ? Ei.hash = Si : Ai ? history.pushState("", document.title, Ei.pathname + Ei.search) : Ei.hash = ""), Li()
                            };
                            Et("unbindEvents", function() {
                                h && t()
                            }), Et("destroy", function() {
                                Ci || t()
                            }), Et("firstUpdate", function() {
                                f = Oi().pid
                            });
                            var e = Si.indexOf("pid=");
                            e > -1 && (Si = Si.substring(0, e), "&" === Si.slice(-1) && (Si = Si.slice(0, -1))), setTimeout(function() {
                                c && o.bind(window, "hashchange", a.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return Ii() === Si ? (Ti = !0, void a.close()) : void(wi || (xi = !0, a.goTo(Oi().pid), xi = !1))
                    },
                    updateURL: function() {
                        Li(), xi || (ki ? gi = setTimeout(Ri, 800) : Ri())
                    }
                }
            }), o.extend(a, ne)
        };
        return t
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e()
    }(this, function() {
        "use strict";
        var t = function(t, e) {
            var i, n, o, a, r, s, l, c, u, h, f, d, p, v, m, g, y, b, w, x = this,
                C = !1,
                S = !0,
                k = !0,
                T = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(t, e) {
                        return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return t.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return t.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                P = function(t) {
                    if (g) return !0;
                    t = t || window.event, m.timeToIdle && m.mouseUsed && !u && W();
                    for (var i, n, o = t.target || t.srcElement, a = o.getAttribute("class") || "", r = 0; r < B.length; r++) i = B[r], i.onTap && a.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        t.stopPropagation && t.stopPropagation(), g = !0;
                        var s = e.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() {
                            g = !1
                        }, s)
                    }
                },
                E = function() {
                    return !t.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
                },
                A = function(t, i, n) {
                    e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i)
                },
                M = function() {
                    var t = 1 === m.getNumItemsFn();
                    t !== v && (A(n, "ui--one-slide", t), v = t)
                },
                I = function() {
                    A(l, "share-modal--hidden", k)
                },
                L = function() {
                    return k = !k, k ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        k && I()
                    }, 300)) : (I(), setTimeout(function() {
                        k || e.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), k || R(), !1
                },
                O = function(e) {
                    e = e || window.event;
                    var i = e.target || e.srcElement;
                    return t.shout("shareLinkClick", e, i), i.href ? i.hasAttribute("download") ? !0 : (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), k || L(), !1) : !1
                },
                R = function() {
                    for (var t, e, i, n, o, a = "", r = 0; r < m.shareButtons.length; r++) t = m.shareButtons[r], i = m.getImageURLForShare(t), n = m.getPageURLForShare(t), o = m.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", m.parseShareButtonOut && (a = m.parseShareButtonOut(t, a));
                    l.children[0].innerHTML = a, l.children[0].onclick = O
                },
                F = function(t) {
                    for (var i = 0; i < m.closeElClasses.length; i++)
                        if (e.hasClass(t, "pswp__" + m.closeElClasses[i])) return !0
                },
                D = 0,
                W = function() {
                    clearTimeout(w), D = 0, u && x.setIdle(!1)
                },
                z = function(t) {
                    t = t ? t : window.event;
                    var e = t.relatedTarget || t.toElement;
                    e && "HTML" !== e.nodeName || (clearTimeout(w), w = setTimeout(function() {
                        x.setIdle(!0)
                    }, m.timeToIdleOutside))
                },
                H = function() {
                    m.fullscreenEl && !e.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (e.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs"))
                },
                _ = function() {
                    m.preloaderEl && (Y(!0), h("beforeChange", function() {
                        clearTimeout(p), p = setTimeout(function() {
                            t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && Y(!1) : Y(!0)
                        }, m.loadingIndicatorDelay)
                    }), h("imageLoadComplete", function(e, i) {
                        t.currItem === i && Y(!0)
                    }))
                },
                Y = function(t) {
                    d !== t && (A(f, "preloader--active", !t), d = t)
                },
                X = function(t) {
                    var i = t.vGap;
                    if (E()) {
                        var r = m.barsSize;
                        if (m.captionEl && "auto" === r.bottom)
                            if (a || (a = e.createEl("pswp__caption pswp__caption--fake"), a.appendChild(e.createEl("pswp__caption__center")), n.insertBefore(a, o), e.addClass(n, "pswp__ui--fit")), m.addCaptionHTMLFn(t, a, !0)) {
                                var s = a.clientHeight;
                                i.bottom = parseInt(s, 10) || 44
                            } else i.bottom = r.top;
                        else i.bottom = "auto" === r.bottom ? 0 : r.bottom;
                        i.top = r.top
                    } else i.top = i.bottom = 0
                },
                V = function() {
                    m.timeToIdle && h("mouseUsed", function() {
                        e.bind(document, "mousemove", W), e.bind(document, "mouseout", z), b = setInterval(function() {
                            D++, 2 === D && x.setIdle(!0)
                        }, m.timeToIdle / 2)
                    })
                },
                N = function() {
                    h("onVerticalDrag", function(t) {
                        S && .95 > t ? x.hideControls() : !S && t >= .95 && x.showControls()
                    });
                    var t;
                    h("onPinchClose", function(e) {
                        S && .9 > e ? (x.hideControls(), t = !0) : t && !S && e > .9 && x.showControls()
                    }), h("zoomGestureEnded", function() {
                        t = !1, t && !S && x.showControls()
                    })
                },
                B = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(t) {
                        o = t
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(t) {
                        l = t
                    },
                    onTap: function() {
                        L()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(t) {
                        s = t
                    },
                    onTap: function() {
                        L()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: t.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(t) {
                        r = t
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: t.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: t.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: t.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(t) {
                        f = t
                    }
                }],
                j = function() {
                    var t, i, o, a = function(n) {
                        if (n)
                            for (var a = n.length, r = 0; a > r; r++) {
                                t = n[r], i = t.className;
                                for (var s = 0; s < B.length; s++) o = B[s], i.indexOf("pswp__" + o.name) > -1 && (m[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled"))
                            }
                    };
                    a(n.children);
                    var r = e.getChildByClass(n, "pswp__top-bar");
                    r && a(r.children)
                };
            x.init = function() {
                e.extend(t.options, T, !0), m = t.options, n = e.getChildByClass(t.scrollWrap, "pswp__ui"), h = t.listen, N(), h("beforeChange", x.update), h("doubleTap", function(e) {
                    var i = t.currItem.initialZoomLevel;
                    t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(m.getDoubleTapZoom(!1, t.currItem), e, 333)
                }), h("preventDragEvent", function(t, e, i) {
                    var n = t.target || t.srcElement;
                    n && n.getAttribute("class") && t.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                }), h("bindEvents", function() {
                    e.bind(n, "pswpTap click", P), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver)
                }), h("unbindEvents", function() {
                    k || L(), b && clearInterval(b), e.unbind(document, "mouseout", z), e.unbind(document, "mousemove", W), e.unbind(n, "pswpTap click", P), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), i && (e.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (m.hideAnimationDuration = 0, i.exit()), i = null)
                }), h("destroy", function() {
                    m.captionEl && (a && n.removeChild(a), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(n, "pswp__ui--over-close"), e.addClass(n, "pswp__ui--hidden"), x.setIdle(!1)
                }), m.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"), h("initialZoomIn", function() {
                    m.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden")
                }), h("initialZoomOut", function() {
                    e.addClass(n, "pswp__ui--hidden")
                }), h("parseVerticalMargin", X), j(), m.shareEl && s && l && (k = !0), M(), V(), H(), _()
            }, x.setIdle = function(t) {
                u = t, A(n, "ui--idle", t)
            }, x.update = function() {
                S && t.currItem ? (x.updateIndexIndicator(), m.captionEl && (m.addCaptionHTMLFn(t.currItem, o), A(o, "caption--empty", !t.currItem.title)), C = !0) : C = !1, k || L(), M()
            }, x.updateFullscreen = function(n) {
                n && setTimeout(function() {
                    t.setScrollOffset(0, e.getScrollY())
                }, 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs")
            }, x.updateIndexIndicator = function() {
                m.counterEl && (r.innerHTML = t.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
            }, x.onGlobalTap = function(i) {
                i = i || window.event;
                var n = i.target || i.srcElement;
                if (!g)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (F(n)) return void t.close();
                        e.hasClass(n, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? m.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (m.tapToToggleControls && (S ? x.hideControls() : x.showControls()), m.tapToClose && (e.hasClass(n, "pswp__img") || F(n))) return void t.close()
            }, x.onMouseOver = function(t) {
                t = t || window.event;
                var e = t.target || t.srcElement;
                A(n, "ui--over-close", F(e))
            }, x.hideControls = function() {
                e.addClass(n, "pswp__ui--hidden"), S = !1
            }, x.showControls = function() {
                S = !0, C || x.update(), e.removeClass(n, "pswp__ui--hidden")
            }, x.supportsFullscreen = function() {
                var t = document;
                return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen)
            }, x.getFullscreenAPI = function() {
                var e, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? e = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? e = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? e = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (e = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), e && (e.enter = function() {
                    return c = m.closeOnScroll, m.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, e.exit = function() {
                    return m.closeOnScroll = c, document[this.exitK]()
                }, e.isFullscreen = function() {
                    return document[this.elementK]
                }), e
            }
        };
        return t
    });
var initPhotoSwipeFromDOM = function(t) {
    for (var e = function(t) {
            for (var o, a, r, s, e = t.childNodes, i = e.length, n = [], l = 0; i > l; l++) o = e[l], 1 === o.nodeType && (a = o.children[0], r = a.getAttribute("data-size").split("x"), s = {
                src: a.getAttribute("href"),
                w: parseInt(r[0], 10),
                h: parseInt(r[1], 10)
            }, o.children.length > 1 && (s.title = o.children[1].innerHTML), a.children.length > 0 && (s.msrc = a.children[0].getAttribute("src")), s.el = o, n.push(s));
            return n
        }, i = function u(t, e) {
            return t && (e(t) ? t : u(t.parentNode, e))
        }, n = function(t) {
            t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1;
            var e = t.target || t.srcElement,
                n = i(e, function(t) {
                    return t.tagName && "FIGURE" === t.tagName.toUpperCase()
                });
            if (n) {
                for (var c, o = n.parentNode, r = n.parentNode.childNodes, s = r.length, l = 0, u = 0; s > u; u++)
                    if (1 === r[u].nodeType) {
                        if (r[u] === n) {
                            c = l;
                            break
                        }
                        l++
                    }
                return c >= 0 && a(c, o), !1
            }
        }, o = function() {
            var t = window.location.hash.substring(1),
                e = {};
            if (t.length < 5) return e;
            for (var i = t.split("&"), n = 0; n < i.length; n++)
                if (i[n]) {
                    var o = i[n].split("=");
                    o.length < 2 || (e[o[0]] = o[1])
                }
            return e.gid && (e.gid = parseInt(e.gid, 10)), e
        }, a = function(t, i, n, o) {
            var r, s, l, a = document.querySelectorAll(".pswp")[0];
            if (l = e(i), s = {
                    galleryUID: i.getAttribute("data-pswp-uid"),
                    getThumbBoundsFn: function(t) {
                        var e = l[t].el.getElementsByTagName("img")[0],
                            i = window.pageYOffset || document.documentElement.scrollTop,
                            n = e.getBoundingClientRect();
                        return {
                            x: n.left,
                            y: n.top + i,
                            w: n.width
                        }
                    }
                }, o)
                if (s.galleryPIDs) {
                    for (var c = 0; c < l.length; c++)
                        if (l[c].pid == t) {
                            s.index = c;
                            break
                        }
                } else s.index = parseInt(t, 10) - 1;
            else s.index = parseInt(t, 10);
            isNaN(s.index) || (n && (s.showAnimationDuration = 0), r = new PhotoSwipe(a, PhotoSwipeUI_Default, l, s), r.init())
        }, r = document.querySelectorAll(t), s = 0, l = r.length; l > s; s++) r[s].setAttribute("data-pswp-uid", s + 1), r[s].onclick = n;
    var c = o();
    c.pid && c.gid && a(c.pid, r[c.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function(t) {
        t.fn.sticky = function(e) {
            function o() {
                return "number" == typeof n.zIndex ? !0 : !1
            }

            function r() {
                return 0 < t(n.stopper).length || "number" == typeof n.stopper ? !0 : !1
            }
            var i = {
                    topSpacing: 0,
                    zIndex: "",
                    stopper: ".sticky-stopper"
                },
                n = t.extend({}, i, e),
                a = o(),
                s = r();
            return this.each(function() {
                function d() {
                    var n = f.scrollTop();
                    if (s && "string" == typeof h) var o = t(h).offset().top,
                        d = o - i - r;
                    else if (s && "number" == typeof h) var d = h;
                    if (n > c) {
                        if (e.after(u).css({
                                position: "fixed",
                                top: r
                            }), a && e.css({
                                zIndex: l
                            }), s && n > d) {
                            var p = d - n + r;
                            e.css({
                                top: p
                            })
                        }
                    } else e.css({
                        position: "static",
                        top: null,
                        left: null
                    }), u.remove()
                }
                var e = t(this),
                    i = e.outerHeight(),
                    o = e.outerWidth(),
                    r = n.topSpacing,
                    l = n.zIndex,
                    c = e.offset().top - r,
                    u = t("<div></div>").width(o).height(i).addClass("sticky-placeholder"),
                    h = n.stopper,
                    f = t(window);
                f.bind("scroll", d)
            })
        }
    }(jQuery),
    function t(e, i, n) {
        function o(r, s) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (a) return a(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function(t) {
                    var i = e[r][1][t];
                    return o(i ? i : t)
                }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function(t, e, i) {
            "use strict";
            var n = t("../main");
            "function" == typeof define && define.amd ? define(n) : (window.PerfectScrollbar = n, "undefined" == typeof window.Ps && (window.Ps = n))
        }, {
            "../main": 7
        }],
        2: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                var i = t.className.split(" ");
                i.indexOf(e) < 0 && i.push(e), t.className = i.join(" ")
            }

            function o(t, e) {
                var i = t.className.split(" "),
                    n = i.indexOf(e);
                n >= 0 && i.splice(n, 1), t.className = i.join(" ")
            }
            i.add = function(t, e) {
                t.classList ? t.classList.add(e) : n(t, e)
            }, i.remove = function(t, e) {
                t.classList ? t.classList.remove(e) : o(t, e)
            }, i.list = function(t) {
                return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
            }
        }, {}],
        3: [function(t, e, i) {
            "use strict";

            function o(t, e) {
                return window.getComputedStyle(t)[e]
            }

            function a(t, e, i) {
                return "number" == typeof i && (i = i.toString() + "px"), t.style[e] = i, t
            }

            function r(t, e) {
                for (var i in e) {
                    var n = e[i];
                    "number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
                }
                return t
            }
            var n = {};
            n.e = function(t, e) {
                var i = document.createElement(t);
                return i.className = e, i
            }, n.appendTo = function(t, e) {
                return e.appendChild(t), t
            }, n.css = function(t, e, i) {
                return "object" == typeof e ? r(t, e) : "undefined" == typeof i ? o(t, e) : a(t, e, i)
            }, n.matches = function(t, e) {
                return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
            }, n.remove = function(t) {
                "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
            }, n.queryChildren = function(t, e) {
                return Array.prototype.filter.call(t.childNodes, function(t) {
                    return n.matches(t, e)
                })
            }, e.exports = n
        }, {}],
        4: [function(t, e, i) {
            "use strict";
            var n = function(t) {
                this.element = t, this.events = {}
            };
            n.prototype.bind = function(t, e) {
                "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
            }, n.prototype.unbind = function(t, e) {
                var i = "undefined" != typeof e;
                this.events[t] = this.events[t].filter(function(n) {
                    return i && n !== e ? !0 : (this.element.removeEventListener(t, n, !1), !1)
                }, this)
            }, n.prototype.unbindAll = function() {
                for (var t in this.events) this.unbind(t)
            };
            var o = function() {
                this.eventElements = []
            };
            o.prototype.eventElement = function(t) {
                var e = this.eventElements.filter(function(e) {
                    return e.element === t
                })[0];
                return "undefined" == typeof e && (e = new n(t), this.eventElements.push(e)), e
            }, o.prototype.bind = function(t, e, i) {
                this.eventElement(t).bind(e, i)
            }, o.prototype.unbind = function(t, e, i) {
                this.eventElement(t).unbind(e, i)
            }, o.prototype.unbindAll = function() {
                for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
            }, o.prototype.once = function(t, e, i) {
                var n = this.eventElement(t),
                    o = function(t) {
                        n.unbind(e, o), i(t)
                    };
                n.bind(e, o)
            }, e.exports = o
        }, {}],
        5: [function(t, e, i) {
            "use strict";
            e.exports = function() {
                function t() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                }
            }()
        }, {}],
        6: [function(t, e, i) {
            "use strict";
            var n = t("./class"),
                o = t("./dom"),
                a = i.toInt = function(t) {
                    return parseInt(t, 10) || 0
                },
                r = i.clone = function(t) {
                    if (null === t) return null;
                    if (t.constructor === Array) return t.map(r);
                    if ("object" == typeof t) {
                        var e = {};
                        for (var i in t) e[i] = r(t[i]);
                        return e
                    }
                    return t
                };
            i.extend = function(t, e) {
                var i = r(t);
                for (var n in e) i[n] = r(e[n]);
                return i
            }, i.isEditable = function(t) {
                return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
            }, i.removePsClasses = function(t) {
                for (var e = n.list(t), i = 0; i < e.length; i++) {
                    var o = e[i];
                    0 === o.indexOf("ps-") && n.remove(t, o)
                }
            }, i.outerWidth = function(t) {
                return a(o.css(t, "width")) + a(o.css(t, "paddingLeft")) + a(o.css(t, "paddingRight")) + a(o.css(t, "borderLeftWidth")) + a(o.css(t, "borderRightWidth"))
            }, i.startScrolling = function(t, e) {
                n.add(t, "ps-in-scrolling"), "undefined" != typeof e ? n.add(t, "ps-" + e) : (n.add(t, "ps-x"), n.add(t, "ps-y"))
            }, i.stopScrolling = function(t, e) {
                n.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? n.remove(t, "ps-" + e) : (n.remove(t, "ps-x"), n.remove(t, "ps-y"))
            }, i.env = {
                isWebKit: "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                supportsIePointer: null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(t, e, i) {
            "use strict";
            var n = t("./plugin/destroy"),
                o = t("./plugin/initialize"),
                a = t("./plugin/update");
            e.exports = {
                initialize: o,
                update: a,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(t, e, i) {
            "use strict";
            e.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                stopPropagationOnClick: !0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(t, e, i) {
            "use strict";
            var n = t("../lib/helper"),
                o = t("../lib/dom"),
                a = t("./instances");
            e.exports = function(t) {
                var e = a.get(t);
                e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), n.removePsClasses(t), a.remove(t))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(t, e, i) {
            "use strict";

            function s(t, e) {
                function i(t) {
                    return t.getBoundingClientRect()
                }
                var o = function(t) {
                    t.stopPropagation()
                };
                e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", o), e.event.bind(e.scrollbarYRail, "click", function(o) {
                    var s = n.toInt(e.scrollbarYHeight / 2),
                        l = e.railYRatio * (o.pageY - window.pageYOffset - i(e.scrollbarYRail).top - s),
                        c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
                        u = l / c;
                    0 > u ? u = 0 : u > 1 && (u = 1), r(t, "top", (e.contentHeight - e.containerHeight) * u), a(t), o.stopPropagation()
                }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", o), e.event.bind(e.scrollbarXRail, "click", function(o) {
                    var s = n.toInt(e.scrollbarXWidth / 2),
                        l = e.railXRatio * (o.pageX - window.pageXOffset - i(e.scrollbarXRail).left - s),
                        c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
                        u = l / c;
                    0 > u ? u = 0 : u > 1 && (u = 1), r(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), a(t), o.stopPropagation()
                })
            }
            var n = t("../../lib/helper"),
                o = t("../instances"),
                a = t("../update-geometry"),
                r = t("../update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                s(t, e)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(t, e, i) {
            "use strict";

            function l(t, e) {
                function l(o) {
                    var a = i + o * e.railXRatio,
                        r = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                    0 > a ? e.scrollbarXLeft = 0 : a > r ? e.scrollbarXLeft = r : e.scrollbarXLeft = a;
                    var l = n.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                    s(t, "left", l)
                }
                var i = null,
                    a = null,
                    c = function(e) {
                        l(e.pageX - a), r(t), e.stopPropagation(), e.preventDefault()
                    },
                    u = function() {
                        n.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", c)
                    };
                e.event.bind(e.scrollbarX, "mousedown", function(r) {
                    a = r.pageX, i = n.toInt(o.css(e.scrollbarX, "left")) * e.railXRatio, n.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", c), e.event.once(e.ownerDocument, "mouseup", u), r.stopPropagation(), r.preventDefault()
                })
            }

            function c(t, e) {
                function l(o) {
                    var a = i + o * e.railYRatio,
                        r = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                    0 > a ? e.scrollbarYTop = 0 : a > r ? e.scrollbarYTop = r : e.scrollbarYTop = a;
                    var l = n.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                    s(t, "top", l)
                }
                var i = null,
                    a = null,
                    c = function(e) {
                        l(e.pageY - a), r(t), e.stopPropagation(), e.preventDefault()
                    },
                    u = function() {
                        n.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", c)
                    };
                e.event.bind(e.scrollbarY, "mousedown", function(r) {
                    a = r.pageY, i = n.toInt(o.css(e.scrollbarY, "top")) * e.railYRatio, n.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", c), e.event.once(e.ownerDocument, "mouseup", u), r.stopPropagation(), r.preventDefault()
                })
            }
            var n = t("../../lib/helper"),
                o = t("../../lib/dom"),
                a = t("../instances"),
                r = t("../update-geometry"),
                s = t("../update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                l(t, e), c(t, e)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(t, e, i) {
            "use strict";

            function l(t, e) {
                function l(i, n) {
                    var o = t.scrollTop;
                    if (0 === i) {
                        if (!e.scrollbarYActive) return !1;
                        if (0 === o && n > 0 || o >= e.contentHeight - e.containerHeight && 0 > n) return !e.settings.wheelPropagation
                    }
                    var a = t.scrollLeft;
                    if (0 === n) {
                        if (!e.scrollbarXActive) return !1;
                        if (0 === a && 0 > i || a >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
                    }
                    return !0
                }
                var i = !1;
                e.event.bind(t, "mouseenter", function() {
                    i = !0
                }), e.event.bind(t, "mouseleave", function() {
                    i = !1
                });
                var a = !1;
                e.event.bind(e.ownerDocument, "keydown", function(c) {
                    if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                        var u = o.matches(e.scrollbarX, ":focus") || o.matches(e.scrollbarY, ":focus");
                        if (i || u) {
                            var h = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (h) {
                                if ("IFRAME" === h.tagName) h = h.contentDocument.activeElement;
                                else
                                    for (; h.shadowRoot;) h = h.shadowRoot.activeElement;
                                if (n.isEditable(h)) return
                            }
                            var f = 0,
                                d = 0;
                            switch (c.which) {
                                case 37:
                                    f = -30;
                                    break;
                                case 38:
                                    d = 30;
                                    break;
                                case 39:
                                    f = 30;
                                    break;
                                case 40:
                                    d = -30;
                                    break;
                                case 33:
                                    d = 90;
                                    break;
                                case 32:
                                    d = c.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    d = -90;
                                    break;
                                case 35:
                                    d = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                    break;
                                case 36:
                                    d = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            s(t, "top", t.scrollTop - d), s(t, "left", t.scrollLeft + f), r(t), a = l(f, d), a && c.preventDefault()
                        }
                    }
                })
            }
            var n = t("../../lib/helper"),
                o = t("../../lib/dom"),
                a = t("../instances"),
                r = t("../update-geometry"),
                s = t("../update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                l(t, e)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(t, e, i) {
            "use strict";

            function r(t, e) {
                function n(i, n) {
                    var o = t.scrollTop;
                    if (0 === i) {
                        if (!e.scrollbarYActive) return !1;
                        if (0 === o && n > 0 || o >= e.contentHeight - e.containerHeight && 0 > n) return !e.settings.wheelPropagation
                    }
                    var a = t.scrollLeft;
                    if (0 === n) {
                        if (!e.scrollbarXActive) return !1;
                        if (0 === a && 0 > i || a >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
                    }
                    return !0
                }

                function r(t) {
                    var e = t.deltaX,
                        i = -1 * t.deltaY;
                    return ("undefined" == typeof e || "undefined" == typeof i) && (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), [e, i]
                }

                function s(e, i) {
                    var n = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (n) {
                        if ("TEXTAREA" !== n.tagName && !window.getComputedStyle(n).overflow.match(/(scroll|auto)/)) return !1;
                        var o = n.scrollHeight - n.clientHeight;
                        if (o > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === o && 0 > i)) return !0;
                        var a = n.scrollLeft - n.clientWidth;
                        if (a > 0 && !(0 === n.scrollLeft && 0 > e || n.scrollLeft === a && e > 0)) return !0
                    }
                    return !1
                }

                function l(l) {
                    var c = r(l),
                        u = c[0],
                        h = c[1];
                    s(u, h) || (i = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (h ? a(t, "top", t.scrollTop - h * e.settings.wheelSpeed) : a(t, "top", t.scrollTop + u * e.settings.wheelSpeed), i = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : a(t, "left", t.scrollLeft - h * e.settings.wheelSpeed), i = !0) : (a(t, "top", t.scrollTop - h * e.settings.wheelSpeed), a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), o(t), i = i || n(u, h), i && (l.stopPropagation(), l.preventDefault()))
                }
                var i = !1;
                "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", l) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", l)
            }
            var n = t("../instances"),
                o = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) {
                var e = n.get(t);
                r(t, e)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(t, e, i) {
            "use strict";

            function a(t, e) {
                e.event.bind(t, "scroll", function() {
                    o(t)
                })
            }
            var n = t("../instances"),
                o = t("../update-geometry");
            e.exports = function(t) {
                var e = n.get(t);
                a(t, e)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(t, e, i) {
            "use strict";

            function s(t, e) {
                function i() {
                    var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
                }

                function c() {
                    s || (s = setInterval(function() {
                        return o.get(t) ? (r(t, "top", t.scrollTop + l.top), r(t, "left", t.scrollLeft + l.left), void a(t)) : void clearInterval(s)
                    }, 50))
                }

                function u() {
                    s && (clearInterval(s), s = null), n.stopScrolling(t)
                }
                var s = null,
                    l = {
                        top: 0,
                        left: 0
                    },
                    h = !1;
                e.event.bind(e.ownerDocument, "selectionchange", function() {
                    t.contains(i()) ? h = !0 : (h = !1, u())
                }), e.event.bind(window, "mouseup", function() {
                    h && (h = !1, u())
                }), e.event.bind(window, "mousemove", function(e) {
                    if (h) {
                        var i = {
                                x: e.pageX,
                                y: e.pageY
                            },
                            o = {
                                left: t.offsetLeft,
                                right: t.offsetLeft + t.offsetWidth,
                                top: t.offsetTop,
                                bottom: t.offsetTop + t.offsetHeight
                            };
                        i.x < o.left + 3 ? (l.left = -5, n.startScrolling(t, "x")) : i.x > o.right - 3 ? (l.left = 5, n.startScrolling(t, "x")) : l.left = 0, i.y < o.top + 3 ? (o.top + 3 - i.y < 5 ? l.top = -5 : l.top = -20, n.startScrolling(t, "y")) : i.y > o.bottom - 3 ? (i.y - o.bottom + 3 < 5 ? l.top = 5 : l.top = 20, n.startScrolling(t, "y")) : l.top = 0, 0 === l.top && 0 === l.left ? u() : c()
                    }
                })
            }
            var n = t("../../lib/helper"),
                o = t("../instances"),
                a = t("../update-geometry"),
                r = t("../update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                s(t, e)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(t, e, i) {
            "use strict";

            function s(t, e, i, n) {
                function s(i, n) {
                    var o = t.scrollTop,
                        a = t.scrollLeft,
                        r = Math.abs(i),
                        s = Math.abs(n);
                    if (s > r) {
                        if (0 > n && o === e.contentHeight - e.containerHeight || n > 0 && 0 === o) return !e.settings.swipePropagation
                    } else if (r > s && (0 > i && a === e.contentWidth - e.containerWidth || i > 0 && 0 === a)) return !e.settings.swipePropagation;
                    return !0
                }

                function l(e, i) {
                    r(t, "top", t.scrollTop - i), r(t, "left", t.scrollLeft - e), a(t)
                }

                function v() {
                    d = !0
                }

                function m() {
                    d = !1
                }

                function g(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function y(t) {
                    return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1;
                }

                function b(t) {
                    if (y(t)) {
                        p = !0;
                        var e = g(t);
                        c.pageX = e.pageX, c.pageY = e.pageY, u = (new Date).getTime(), null !== f && clearInterval(f), t.stopPropagation()
                    }
                }

                function w(t) {
                    if (!p && e.settings.swipePropagation && b(t), !d && p && y(t)) {
                        var i = g(t),
                            n = {
                                pageX: i.pageX,
                                pageY: i.pageY
                            },
                            o = n.pageX - c.pageX,
                            a = n.pageY - c.pageY;
                        l(o, a), c = n;
                        var r = (new Date).getTime(),
                            f = r - u;
                        f > 0 && (h.x = o / f, h.y = a / f, u = r), s(o, a) && (t.stopPropagation(), t.preventDefault())
                    }
                }

                function x() {
                    !d && p && (p = !1, clearInterval(f), f = setInterval(function() {
                        return o.get(t) ? Math.abs(h.x) < .01 && Math.abs(h.y) < .01 ? void clearInterval(f) : (l(30 * h.x, 30 * h.y), h.x *= .8, void(h.y *= .8)) : void clearInterval(f)
                    }, 10))
                }
                var c = {},
                    u = 0,
                    h = {},
                    f = null,
                    d = !1,
                    p = !1;
                i && (e.event.bind(window, "touchstart", v), e.event.bind(window, "touchend", m), e.event.bind(t, "touchstart", b), e.event.bind(t, "touchmove", w), e.event.bind(t, "touchend", x)), n && (window.PointerEvent ? (e.event.bind(window, "pointerdown", v), e.event.bind(window, "pointerup", m), e.event.bind(t, "pointerdown", b), e.event.bind(t, "pointermove", w), e.event.bind(t, "pointerup", x)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", v), e.event.bind(window, "MSPointerUp", m), e.event.bind(t, "MSPointerDown", b), e.event.bind(t, "MSPointerMove", w), e.event.bind(t, "MSPointerUp", x)))
            }
            var n = t("../../lib/helper"),
                o = t("../instances"),
                a = t("../update-geometry"),
                r = t("../update-scroll");
            e.exports = function(t) {
                if (n.env.supportsTouch || n.env.supportsIePointer) {
                    var e = o.get(t);
                    s(t, e, n.env.supportsTouch, n.env.supportsIePointer)
                }
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(t, e, i) {
            "use strict";
            var n = t("../lib/helper"),
                o = t("../lib/class"),
                a = t("./instances"),
                r = t("./update-geometry"),
                s = {
                    "click-rail": t("./handler/click-rail"),
                    "drag-scrollbar": t("./handler/drag-scrollbar"),
                    keyboard: t("./handler/keyboard"),
                    wheel: t("./handler/mouse-wheel"),
                    touch: t("./handler/touch"),
                    selection: t("./handler/selection")
                },
                l = t("./handler/native-scroll");
            e.exports = function(t, e) {
                e = "object" == typeof e ? e : {}, o.add(t, "ps-container");
                var i = a.add(t);
                i.settings = n.extend(i.settings, e), o.add(t, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function(e) {
                    s[e](t)
                }), l(t), r(t)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(t, e, i) {
            "use strict";

            function u(t) {
                function i() {
                    o.add(t, "ps-focus")
                }

                function l() {
                    o.remove(t, "ps-focus")
                }
                var e = this;
                e.settings = n.clone(a), e.containerWidth = null, e.containerHeight = null, e.contentWidth = null, e.contentHeight = null, e.isRtl = "rtl" === r.css(t, "direction"), e.isNegativeScroll = function() {
                    var e = t.scrollLeft,
                        i = null;
                    return t.scrollLeft = -1, i = t.scrollLeft < 0, t.scrollLeft = e, i
                }(), e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, e.event = new s, e.ownerDocument = t.ownerDocument || document, e.scrollbarXRail = r.appendTo(r.e("div", "ps-scrollbar-x-rail"), t), e.scrollbarX = r.appendTo(r.e("div", "ps-scrollbar-x"), e.scrollbarXRail), e.scrollbarX.setAttribute("tabindex", 0), e.event.bind(e.scrollbarX, "focus", i), e.event.bind(e.scrollbarX, "blur", l), e.scrollbarXActive = null, e.scrollbarXWidth = null, e.scrollbarXLeft = null, e.scrollbarXBottom = n.toInt(r.css(e.scrollbarXRail, "bottom")), e.isScrollbarXUsingBottom = e.scrollbarXBottom === e.scrollbarXBottom, e.scrollbarXTop = e.isScrollbarXUsingBottom ? null : n.toInt(r.css(e.scrollbarXRail, "top")), e.railBorderXWidth = n.toInt(r.css(e.scrollbarXRail, "borderLeftWidth")) + n.toInt(r.css(e.scrollbarXRail, "borderRightWidth")), r.css(e.scrollbarXRail, "display", "block"), e.railXMarginWidth = n.toInt(r.css(e.scrollbarXRail, "marginLeft")) + n.toInt(r.css(e.scrollbarXRail, "marginRight")), r.css(e.scrollbarXRail, "display", ""), e.railXWidth = null, e.railXRatio = null, e.scrollbarYRail = r.appendTo(r.e("div", "ps-scrollbar-y-rail"), t), e.scrollbarY = r.appendTo(r.e("div", "ps-scrollbar-y"), e.scrollbarYRail), e.scrollbarY.setAttribute("tabindex", 0), e.event.bind(e.scrollbarY, "focus", i), e.event.bind(e.scrollbarY, "blur", l), e.scrollbarYActive = null, e.scrollbarYHeight = null, e.scrollbarYTop = null, e.scrollbarYRight = n.toInt(r.css(e.scrollbarYRail, "right")), e.isScrollbarYUsingRight = e.scrollbarYRight === e.scrollbarYRight, e.scrollbarYLeft = e.isScrollbarYUsingRight ? null : n.toInt(r.css(e.scrollbarYRail, "left")), e.scrollbarYOuterWidth = e.isRtl ? n.outerWidth(e.scrollbarY) : null, e.railBorderYWidth = n.toInt(r.css(e.scrollbarYRail, "borderTopWidth")) + n.toInt(r.css(e.scrollbarYRail, "borderBottomWidth")), r.css(e.scrollbarYRail, "display", "block"), e.railYMarginHeight = n.toInt(r.css(e.scrollbarYRail, "marginTop")) + n.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarYRail, "display", ""), e.railYHeight = null, e.railYRatio = null
            }

            function h(t) {
                return t.getAttribute("data-ps-id")
            }

            function f(t, e) {
                t.setAttribute("data-ps-id", e)
            }

            function d(t) {
                t.removeAttribute("data-ps-id")
            }
            var n = t("../lib/helper"),
                o = t("../lib/class"),
                a = t("./default-setting"),
                r = t("../lib/dom"),
                s = t("../lib/event-manager"),
                l = t("../lib/guid"),
                c = {};
            i.add = function(t) {
                var e = l();
                return f(t, e), c[e] = new u(t), c[e]
            }, i.remove = function(t) {
                delete c[h(t)], d(t)
            }, i.get = function(t) {
                return c[h(t)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(t, e, i) {
            "use strict";

            function l(t, e) {
                return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
            }

            function c(t, e) {
                var i = {
                    width: e.railXWidth
                };
                e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, a.css(e.scrollbarXRail, i);
                var n = {
                    top: t.scrollTop,
                    height: e.railYHeight
                };
                e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, a.css(e.scrollbarYRail, n), a.css(e.scrollbarX, {
                    left: e.scrollbarXLeft,
                    width: e.scrollbarXWidth - e.railBorderXWidth
                }), a.css(e.scrollbarY, {
                    top: e.scrollbarYTop,
                    height: e.scrollbarYHeight - e.railBorderYWidth
                })
            }
            var n = t("../lib/helper"),
                o = t("../lib/class"),
                a = t("../lib/dom"),
                r = t("./instances"),
                s = t("./update-scroll");
            e.exports = function(t) {
                var e = r.get(t);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
                var i;
                t.contains(e.scrollbarXRail) || (i = a.queryChildren(t, ".ps-scrollbar-x-rail"), i.length > 0 && i.forEach(function(t) {
                    a.remove(t)
                }), a.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (i = a.queryChildren(t, ".ps-scrollbar-y-rail"), i.length > 0 && i.forEach(function(t) {
                    a.remove(t)
                }), a.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = l(e, n.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = n.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = l(e, n.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = n.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), c(t, e), e.scrollbarXActive ? o.add(t, "ps-active-x") : (o.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, s(t, "left", 0)), e.scrollbarYActive ? o.add(t, "ps-active-y") : (o.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, s(t, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(t, e, i) {
            "use strict";
            var p, v, n = t("./instances"),
                o = document.createEvent("Event"),
                a = document.createEvent("Event"),
                r = document.createEvent("Event"),
                s = document.createEvent("Event"),
                l = document.createEvent("Event"),
                c = document.createEvent("Event"),
                u = document.createEvent("Event"),
                h = document.createEvent("Event"),
                f = document.createEvent("Event"),
                d = document.createEvent("Event");
            o.initEvent("ps-scroll-up", !0, !0), a.initEvent("ps-scroll-down", !0, !0), r.initEvent("ps-scroll-left", !0, !0), s.initEvent("ps-scroll-right", !0, !0), l.initEvent("ps-scroll-y", !0, !0), c.initEvent("ps-scroll-x", !0, !0), u.initEvent("ps-x-reach-start", !0, !0), h.initEvent("ps-x-reach-end", !0, !0), f.initEvent("ps-y-reach-start", !0, !0), d.initEvent("ps-y-reach-end", !0, !0), e.exports = function(t, e, i) {
                if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
                if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
                if ("undefined" == typeof i) throw "You must provide a value to the update-scroll function";
                "top" === e && 0 >= i && (t.scrollTop = i = 0, t.dispatchEvent(f)), "left" === e && 0 >= i && (t.scrollLeft = i = 0, t.dispatchEvent(u));
                var m = n.get(t);
                "top" === e && i >= m.contentHeight - m.containerHeight && (i = m.contentHeight - m.containerHeight, i - t.scrollTop <= 1 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(d)), "left" === e && i >= m.contentWidth - m.containerWidth && (i = m.contentWidth - m.containerWidth, i - t.scrollLeft <= 1 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(h)), p || (p = t.scrollTop), v || (v = t.scrollLeft), "top" === e && p > i && t.dispatchEvent(o), "top" === e && i > p && t.dispatchEvent(a), "left" === e && v > i && t.dispatchEvent(r), "left" === e && i > v && t.dispatchEvent(s), "top" === e && (t.scrollTop = p = i, t.dispatchEvent(l)), "left" === e && (t.scrollLeft = v = i, t.dispatchEvent(c))
            }
        }, {
            "./instances": 18
        }],
        21: [function(t, e, i) {
            "use strict";
            var n = t("../lib/helper"),
                o = t("../lib/dom"),
                a = t("./instances"),
                r = t("./update-geometry"),
                s = t("./update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(o.css(e.scrollbarXRail, "marginLeft")) + n.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(o.css(e.scrollbarYRail, "marginTop")) + n.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), r(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]), $(function() {
        $(".arrow-r").on("click", function() {
            $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"), $(this).find(".fa-angle-down").toggleClass("rotate-element")
        })
    });