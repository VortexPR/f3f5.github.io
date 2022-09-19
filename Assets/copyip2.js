
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return n = {
        686: function(t, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return o
                }
            });
            var e = n(279),
                i = n.n(e),
                e = n(370),
                u = n.n(e),
                e = n(817),
                c = n.n(e);

            function a(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }
            var f = function(t) {
                t = c()(t);
                return a("cut"), t
            };
            var l = function(t) {
                var e, n, o, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        container: document.body
                    },
                    i = "";
                return "string" == typeof t ? (e = t, n = "rtl" === document.documentElement.getAttribute("dir"), (o = document.createElement("textarea")).style.fontSize = "12pt", o.style.border = "0", o.style.padding = "0", o.style.margin = "0", o.style.position = "absolute", o.style[n ? "right" : "left"] = "-9999px", n = window.pageYOffset || document.documentElement.scrollTop, o.style.top = "".concat(n, "px"), o.setAttribute("readonly", ""), o.value = e, o = o, r.container.appendChild(o), i = c()(o), a("copy"), o.remove()) : (i = c()(t), a("copy")), i
            };

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var s = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.action,
                    n = void 0 === e ? "copy" : e,
                    o = t.container,
                    e = t.target,
                    t = t.text;
                if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== r(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? l(t, {
                    container: o
                }) : e ? "cut" === n ? f(e) : l(e, {
                    container: o
                }) : void 0
            };

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(n) {
                var o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return t = o ? (t = m(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== p(t) && "function" != typeof t ? function(t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(e) : t
                }
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function v(t, e) {
                t = "data-clipboard-".concat(t);
                if (e.hasAttribute(t)) return e.getAttribute(t)
            }
            var o = function() {
           
