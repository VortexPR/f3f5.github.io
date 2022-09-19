"use strict";

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}
his.closeModal()
        }
        scrollBehaviour(t) {
            if (eEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
        }
        onClick(t) {
            t.target.hasAttribute(this.config.closeTrigger) && this.closeModal(t)
        }
        onKeydown(t) {
            27 === t.keyCode && this.closeModal(t), 9 === t.keyCode && this.retainFocus(t)
        }
        getFocusableNodes() {
            const e = this.modal.querySelectorAll(t);
            return Array.apply(void 0, _toConsumableArray(e))
        }
        setFocusToFirstNode() {
            var t = this;
            if (this.config.disableFocus) return;
            const e = this.getFocusableNodes();
            if (0 === e.length) return;
            const o = e.filter(function(e) {
                return !e.hasAttribute(t.config.closeTrigger)
            });
            o.length > 0 && o[0].focus(), 0 === o.length && e[0].focus()
        }
        retainFocus(t) {
            let e = this.getFocusableNodes();
            if (0 !== e.length)
                if (e = e.filter(function(t) {
                        return null !== t.offsetParent
                    }), this.modal.contains(document.activeElement)) {
                    const o = e.indexOf(document.activeElement);
                    t.shiftKey && 0 === o && (e[e.length - 1].focus(), t.preventDefault()), !t.shiftKey && e.length > 0 && o === e.length - 1 && (e[0].focus(), t.preventDefault())
                } else e[0].focus()
        }
    }
    let o = null;
    const n = function(t) {
            if (!document.getElementById(t)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(t, '"></div>')), !1
        },
        i = function(t, e) {
            if (function(t) {
                    if (t.length <= 0) console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>')
                }(t), !e) return !0;
            for (var o in e) n(o);
            return !0
        };
    return {
        init: function(t) {
            const n = Object.assign({}, {
                    openTrigger: "data-micromodal-trigger"
                }, t),
                a = _toConsumableArray(document.querySelectorAll("[".concat(n.openTrigger, "]"))),
                r = function(t, e) {
                    const o = [];
                    return t.forEach(function(t) {
                        const n = t.attributes[e].value;
                        void 0 === o[n] && (o[n] = []), o[n].push(t)
                    }), o
                }(a, n.openTrigger);
            if (!0 !== n.debugMode || !1 !== i(a, r))
                for (var s in r) {
                    let t = r[s];
                    n.targetModal = s, n.triggers = _toConsumableArray(t), o = new e(n)
                }
        },
        show: function(t, i) {
            const a = i || {};
            a.targetModal = t, !0 === a.debugMode && !1 === n(t) || (o && o.removeEventListeners(), (o = new e(a)).showModal())
        },
        close: function(t) {
            o && (t ? o.closeModalById(t) : o.closeModal())
        }
    }
}();
window.MicroModal = MicroModal, document.addEventListener("click", function(t) {
    const e = t.target.closest(".ndzn-js--modal");
    if (!e) return;
    t.preventDefault();
    const o = e.getAttribute("data-href") || e.getAttribute("href");
    if (o && o.includes("#")) {
        const t = o.replace("#", "");
        MicroModal.show(t)
    } else if (o) {
        let t;
        (t = document.querySelector("#main-modal .modal-dialog")).innerHTML = "", MicroModal.show("main-modal"), axios.get(o).then(function(e) {
            let o, n = (new DOMParser).parseFromString(e.data, "text/html").querySelector("#main-modal .modal-dialog");
            o = n ? n.innerHTML : e.data, setTimeout(function() {
                t.innerHTML = o
            }, window.NDZN_DEV ? 1e3 : 0)
        })
    } else {
        const t = e.getAttribute("data-id");
        t ? MicroModal.show(t) : console.error("No modal target specified (use href, data-href or data-modal)")
    }
});
const $notification = document.querySelector("#ndzn-notification"),
    notifAnimationDuration = 600,
    notifClearAfterDuration = 5e3;
let notifTimeout;

function checkoutFields() {
    return {
        states: [],
        showStates: !1,
        get autofilledState() {
            return this.states.length ? this.states[0].id : "X"
        },
        handleCountryChange(t) {
            var e = this;
            const o = t.target.value;
            this.showStates = "39" === o,
                function(t) {
                    const e = new FormData;
                    e.append("country", t);
                    return axios({
                        method: "POST",
                        url: "/ajax/states",
                        data: e
                    }).then(function(t) {
                        return t.data
                    })
                }(o).then(function(t) {
                    e.states = t
                })
        }
    }
}
window.clearNotificationInstantly = function() {
        $notification && Array.from($notification.querySelectorAll(".alert")).forEach(function(t) {
            t.style.transitionDuration = "0.6s", t.style.maxHeight = t.clientHeight + "px", setTimeout(function() {
                t.classList.add("fadeout")
            }, 50), setTimeout(function() {
                t.remove()
            }, 650)
        })
    }, window.clearNotificationAfterTimeout = function() {
        clearTimeout(notifTimeout), notifTimeout = setTimeout(function() {
            window.clearNotificationInstantly()
        }, 5e3)
    }, clearNotificationAfterTimeout(), window.notification = {
        show: function(t, e) {
            const o = document.createElement("DIV");
            o.classList.add("alert"), o.innerText = e, $notification.appendChild(o), window.scrollTo({
                top: 0,
                behavior: "smooth"
            }), clearNotificationAfterTimeout()
        },
        clear: window.clearNotificationInstantly
    }, new ClipboardJS(".ndzn-js--copyip", {
        text: function(t) {
            return t.getAttribute("data-ip")
        }
    }).on("success", function(t) {
        t.trigger.classList.add("is-copied"), setTimeout(function() {
            t.trigger.classList.remove("is-copied")
        }, 2e3)
    }), document.addEventListener("click", function(t) {
        t.target.closest(".ndzn-js--toggleGiftForm") && document.getElementById("gift-form").classList.toggle("hidden")
    }), _toConsumableArray(document.querySelectorAll(".ndzn-js--countdown")).forEach(function(t) {
        let e = parseInt(t.getAttribute("data-ends"));
        const o = function() {
            let o = Math.floor(e / 86400),
                n = Math.floor(e % 86400 / 3600),
                i = Math.floor(e % 3600 / 60),
                a = Math.floor(e % 60);
            t.innerHTML = "".concat(o, "d ").concat(n, "h ").concat(i, "m ").concat(a, "s"), e--, t.setAttribute("data-ends", e)
        };
        o(), setInterval(o, 1e3)
    }),
    function() {
        const t = document.querySelectorAll('#checkout-form input[type="radio"][name="gateway"]');

        function e(t) {
            const e = document.querySelector("#checkout-form #paypal-button");
            e && (e.style.display = t ? null : "none")
        }

        function o(t) {
            const e = document.querySelector("#checkout-form .btn-pay");
            e && (e.style.display = t ? null : "none")
        }

        function n(t) {
            const e = document.querySelector("#checkout-form .panel-checkout-finish");
            e && (e.style.display = t ? null : "none")
        }
        if (!t || !t.length) {
            const t = document.querySelector('#checkout-form input[type="hidden"][name="gateway"]');
            if (!t) return;
            return "24" === t.getAttribute("data-gateway") ? (e(!0), o(!1)) : (e(!1), o(!0)), void n(!0)
        }
        Array.from(t).forEach(function(t) {
            t.addEventListener("change", function(i) {
                n(!0), "24" === t.getAttribute("data-gateway") ? (e(!0), o(!1)) : (e(!1), o(!0))
            })
        })
    }(),
    function() {
        const t = document.getElementById("checkout-form");
        t && t.addEventListener("submit", function(t) {
            "/checkout/pay" === t.target.getAttribute("action") && (t.preventDefault(), checkout.pay())
        })
    }(), window.checkout = {
        setOverlay(t) {
            document.getElementById("checkout-overlay").classList.toggle("shown", t)
        },
        pay() {
            checkout.setOverlay(!0);
            const t = document.getElementById("checkout-form"),
                e = new FormData(t);
            axios.post("/checkout/pay", e, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function(t) {
                const e = t.data;
                if ("error" === e.type && "redirect" === e.success_url) window.top.location.replace("/checkout/basket");
                else if ("error" === e.type) "undefined" != typeof reRenderWidgets && "rerender" === e.success_url && reRenderWidgets(), checkout.setOverlay(!1), notification.show("danger", e.message);
                else if ("success" === e.type)
                    if ("xsolla" === e.gateway) {
                        const t = document.createElement("div");
                        t.innerHTML = e.data.html, document.body.appendChild(t)
                    } else window.top.location.replace(e.data)
            }).catch(function(t) {
                console.log("Failed to checkout with this response:\n", t.response), notification.show("danger", "We could not send you to the payment gateway - please refresh the page and try again.")
            })
        }
    }, window.jQuery = function(t) {
        return {
            eq(t) {
                return this
            },
            remove(t) {
                return this
            }
        }
    };
