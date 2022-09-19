"use strict";

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(t, e) : void 0
    }
}

function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) return _arrayLikeToArray(t)
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
    return n
}! function() {
    const t = document.querySelectorAll(".ndzn-js--age");
    Array.from(t).forEach(function(t) {
        t.innerHTML = function(t, e) {
            var o = new Date(new Date(t).toISOString().substr(0, 10));
            e || (e = (new Date).toISOString().substr(0, 10));
            var n = new Date(e);
            if (o > n) {
                var i = o;
                o = n, n = i
            }
            var a = o.getFullYear(),
                r = n.getFullYear() - a,
                s = n.getMonth() - o.getMonth();
            return s < 0 && (r--, s += 12), "".concat(r, " years ").concat(s, " months")
        }(t.dataset.born)
    })
}(), window.registerDropdowns = function() {
        const t = document.body.getElementsByClassName("ndzn-js--dd");
        for (let e of t) {
            const t = Math.floor(1e5 + 9e5 * Math.random());
            e.setAttribute("data-id", t)
        }
    },
    function() {
        let t = [];
        window.registerDropdowns(), document.body.addEventListener("click", function(e) {
            let o = e.target.closest(".ndzn-js--ddToggle"),
                n = e.target.closest(".ndzn-js--ddMenu"),
                i = [];
            if (e.target.closest(".ndzn-js--ddClose"));
            else if (o || n) {
                if (o) {
                    const e = o.closest(".ndzn-js--dd");
                    e.classList.toggle("open") && t.push(e)
                }
                let e = o || n;
                for (; e;) {
                    let t = e.getAttribute("data-id");
                    (e = e.closest(".ndzn-js--dd" + (t ? ':not([data-id="'.concat(t, '"])') : ""))) && i.push(e.getAttribute("data-id"))
                }
            }
            t = t.filter(function(t) {
                return !!i.includes(t.getAttribute("data-id")) || (t.classList.remove("open"), !1)
            })
        })
    }();
const MicroModal = function() {
    const t = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'];
    class e {
        constructor({
            targetModal: t,
            triggers: e = [],
            onShow: o = function() {},
            onClose: n = function() {},
            openTrigger: i = "data-modal-trigger",
            closeTrigger: a = "data-modal-close",
            openClass: r = "is-open",
            disableScroll: s = !0,
            disableFocus: c = !0,
            awaitCloseAnimation: l = !0,
            awaitOpenAnimation: d = !0,
            debugMode: u = !1
        }) {
            this.modal = document.getElementById(t), this.config = {
                debugMode: u,
                disableScroll: s,
                openTrigger: i,
                closeTrigger: a,
                openClass: r,
                onShow: o,
                onClose: n,
                awaitCloseAnimation: l,
                awaitOpenAnimation: d,
                disableFocus: c
            }, e.length > 0 && this.registerTriggers.apply(this, _toConsumableArray(e)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
        }
        registerTriggers(...t) {
            var e = this;
            t.filter(Boolean).forEach(function(t) {
                t.addEventListener("click", function(t) {
                    return e.showModal(t)
                })
            })
        }
        showModal(t = null) {
            var e = this;
            if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                const t = function() {
                    e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode()
                };
                this.modal.addEventListener("animationend", t, !1)
            } else this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, t)
        }
        closeModal(t = null) {
            var e = this;
            const o = this.modal;
            this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, t);
            const n = function() {
                return e.scrollBehaviour("enable")
            };
            if (this.config.awaitCloseAnimation) {
                let t = this.config.openClass;
                this.modal.addEventListener("animationend", function e() {
                    n(), o.classList.remove(t), o.removeEventListener("animationend", e, !1)
                }, !1)
            } else scrollBehaviour("enable"), n()
        }
        closeModalById(t) {
            this.modal = document.getElementById(t), this.modal && this.closeModal()
        }
        scrollBehaviour(t) {
            if (!this.config.disableScroll) return;
            const e = document.querySelector("body");
            switch (t) {
                case "enable":
                    Object.assign(e.style, {
                        overflow: "",
                        paddingRight: 0
                    });
                    break;
                case "disable":
                    var o = window.innerWidth - document.documentElement.clientWidth;
                    Object.assign(e.style, {
                        overflow: "hidden",
                        paddingRight: o + "px"
                    })
       
