/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var c_ = Object.create;
  var ln = Object.defineProperty;
  var l_ = Object.getOwnPropertyDescriptor;
  var f_ = Object.getOwnPropertyNames;
  var d_ = Object.getPrototypeOf,
    p_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ge = (e, t) => {
      for (var r in t) ln(e, r, { get: t[r], enumerable: !0 });
    },
    Gs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of f_(t))
          !p_.call(e, i) &&
            i !== r &&
            ln(e, i, {
              get: () => t[i],
              enumerable: !(n = l_(t, i)) || n.enumerable,
            });
      return e;
    };
  var de = (e, t, r) => (
      (r = e != null ? c_(d_(e)) : {}),
      Gs(
        t || !e || !e.__esModule
          ? ln(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => Gs(ln({}, "__esModule", { value: !0 }), e);
  var Fi = l(() => {
    "use strict";
    window.tram = (function (e) {
      function t(d, x) {
        var C = new v.Bare();
        return C.init(d, x);
      }
      function r(d) {
        return d.replace(/[A-Z]/g, function (x) {
          return "-" + x.toLowerCase();
        });
      }
      function n(d) {
        var x = parseInt(d.slice(1), 16),
          C = (x >> 16) & 255,
          M = (x >> 8) & 255,
          S = 255 & x;
        return [C, M, S];
      }
      function i(d, x, C) {
        return (
          "#" + ((1 << 24) | (d << 16) | (x << 8) | C).toString(16).slice(1)
        );
      }
      function o() {}
      function a(d, x) {
        f("Type warning: Expected: [" + d + "] Got: [" + typeof x + "] " + x);
      }
      function s(d, x, C) {
        f("Units do not match [" + d + "]: " + x + ", " + C);
      }
      function u(d, x, C) {
        if ((x !== void 0 && (C = x), d === void 0)) return C;
        var M = C;
        return (
          we.test(d) || !Re.test(d)
            ? (M = parseInt(d, 10))
            : Re.test(d) && (M = 1e3 * parseFloat(d)),
          0 > M && (M = 0),
          M === M ? M : C
        );
      }
      function f(d) {
        ie.debug && window && window.console.warn(d);
      }
      function _(d) {
        for (var x = -1, C = d ? d.length : 0, M = []; ++x < C; ) {
          var S = d[x];
          S && M.push(S);
        }
        return M;
      }
      var p = (function (d, x, C) {
          function M(ae) {
            return typeof ae == "object";
          }
          function S(ae) {
            return typeof ae == "function";
          }
          function k() {}
          function ne(ae, ge) {
            function Z() {
              var Pe = new ue();
              return S(Pe.init) && Pe.init.apply(Pe, arguments), Pe;
            }
            function ue() {}
            ge === C && ((ge = ae), (ae = Object)), (Z.Bare = ue);
            var ce,
              _e = (k[d] = ae[d]),
              rt = (ue[d] = Z[d] = new k());
            return (
              (rt.constructor = Z),
              (Z.mixin = function (Pe) {
                return (ue[d] = Z[d] = ne(Z, Pe)[d]), Z;
              }),
              (Z.open = function (Pe) {
                if (
                  ((ce = {}),
                  S(Pe) ? (ce = Pe.call(Z, rt, _e, Z, ae)) : M(Pe) && (ce = Pe),
                  M(ce))
                )
                  for (var Ir in ce) x.call(ce, Ir) && (rt[Ir] = ce[Ir]);
                return S(rt.init) || (rt.init = ae), Z;
              }),
              Z.open(ge)
            );
          }
          return ne;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (d, x, C, M) {
              var S = (d /= M) * d,
                k = S * d;
              return (
                x +
                C * (-2.75 * k * S + 11 * S * S + -15.5 * k + 8 * S + 0.25 * d)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (d, x, C, M) {
              var S = (d /= M) * d,
                k = S * d;
              return x + C * (-1 * k * S + 3 * S * S + -3 * k + 2 * S);
            },
          ],
          "ease-out": [
            "ease-out",
            function (d, x, C, M) {
              var S = (d /= M) * d,
                k = S * d;
              return (
                x +
                C * (0.3 * k * S + -1.6 * S * S + 2.2 * k + -1.8 * S + 1.9 * d)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (d, x, C, M) {
              var S = (d /= M) * d,
                k = S * d;
              return x + C * (2 * k * S + -5 * S * S + 2 * k + 2 * S);
            },
          ],
          linear: [
            "linear",
            function (d, x, C, M) {
              return (C * d) / M + x;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (d, x, C, M) {
              return C * (d /= M) * d + x;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (d, x, C, M) {
              return -C * (d /= M) * (d - 2) + x;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (d, x, C, M) {
              return (d /= M / 2) < 1
                ? (C / 2) * d * d + x
                : (-C / 2) * (--d * (d - 2) - 1) + x;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (d, x, C, M) {
              return C * (d /= M) * d * d + x;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (d, x, C, M) {
              return C * ((d = d / M - 1) * d * d + 1) + x;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (d, x, C, M) {
              return (d /= M / 2) < 1
                ? (C / 2) * d * d * d + x
                : (C / 2) * ((d -= 2) * d * d + 2) + x;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (d, x, C, M) {
              return C * (d /= M) * d * d * d + x;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (d, x, C, M) {
              return -C * ((d = d / M - 1) * d * d * d - 1) + x;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (d, x, C, M) {
              return (d /= M / 2) < 1
                ? (C / 2) * d * d * d * d + x
                : (-C / 2) * ((d -= 2) * d * d * d - 2) + x;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (d, x, C, M) {
              return C * (d /= M) * d * d * d * d + x;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (d, x, C, M) {
              return C * ((d = d / M - 1) * d * d * d * d + 1) + x;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (d, x, C, M) {
              return (d /= M / 2) < 1
                ? (C / 2) * d * d * d * d * d + x
                : (C / 2) * ((d -= 2) * d * d * d * d + 2) + x;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (d, x, C, M) {
              return -C * Math.cos((d / M) * (Math.PI / 2)) + C + x;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (d, x, C, M) {
              return C * Math.sin((d / M) * (Math.PI / 2)) + x;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (d, x, C, M) {
              return (-C / 2) * (Math.cos((Math.PI * d) / M) - 1) + x;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (d, x, C, M) {
              return d === 0 ? x : C * Math.pow(2, 10 * (d / M - 1)) + x;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (d, x, C, M) {
              return d === M
                ? x + C
                : C * (-Math.pow(2, (-10 * d) / M) + 1) + x;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (d, x, C, M) {
              return d === 0
                ? x
                : d === M
                ? x + C
                : (d /= M / 2) < 1
                ? (C / 2) * Math.pow(2, 10 * (d - 1)) + x
                : (C / 2) * (-Math.pow(2, -10 * --d) + 2) + x;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (d, x, C, M) {
              return -C * (Math.sqrt(1 - (d /= M) * d) - 1) + x;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (d, x, C, M) {
              return C * Math.sqrt(1 - (d = d / M - 1) * d) + x;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (d, x, C, M) {
              return (d /= M / 2) < 1
                ? (-C / 2) * (Math.sqrt(1 - d * d) - 1) + x
                : (C / 2) * (Math.sqrt(1 - (d -= 2) * d) + 1) + x;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (d, x, C, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                C * (d /= M) * d * ((S + 1) * d - S) + x
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (d, x, C, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                C * ((d = d / M - 1) * d * ((S + 1) * d + S) + 1) + x
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (d, x, C, M, S) {
              return (
                S === void 0 && (S = 1.70158),
                (d /= M / 2) < 1
                  ? (C / 2) * d * d * (((S *= 1.525) + 1) * d - S) + x
                  : (C / 2) *
                      ((d -= 2) * d * (((S *= 1.525) + 1) * d + S) + 2) +
                    x
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        w = window,
        O = "bkwld-tram",
        T = /[\-\.0-9]/g,
        P = /[A-Z]/,
        L = "number",
        F = /^(rgb|#)/,
        G = /(em|cm|mm|in|pt|pc|px)$/,
        D = /(em|cm|mm|in|pt|pc|px|%)$/,
        K = /(deg|rad|turn)$/,
        z = "unitless",
        Q = /(all|none) 0s ease 0s/,
        te = /^(width|height)$/,
        j = " ",
        R = y.createElement("a"),
        I = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (d) {
          if (d in R.style) return { dom: d, css: d };
          var x,
            C,
            M = "",
            S = d.split("-");
          for (x = 0; x < S.length; x++)
            M += S[x].charAt(0).toUpperCase() + S[x].slice(1);
          for (x = 0; x < I.length; x++)
            if (((C = I[x] + M), C in R.style))
              return { dom: C, css: N[x] + d };
        },
        H = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (H.transition) {
        var ee = H.timing.dom;
        if (((R.style[ee] = E["ease-in-back"][0]), !R.style[ee]))
          for (var re in m) E[re][0] = m[re];
      }
      var W = (t.frame = (function () {
          var d =
            w.requestAnimationFrame ||
            w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame ||
            w.oRequestAnimationFrame ||
            w.msRequestAnimationFrame;
          return d && H.bind
            ? d.bind(w)
            : function (x) {
                w.setTimeout(x, 16);
              };
        })()),
        B = (t.now = (function () {
          var d = w.performance,
            x = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
          return x && H.bind
            ? x.bind(d)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        g = p(function (d) {
          function x(oe, fe) {
            var Ee = _(("" + oe).split(j)),
              pe = Ee[0];
            fe = fe || {};
            var qe = Y[pe];
            if (!qe) return f("Unsupported property: " + pe);
            if (!fe.weak || !this.props[pe]) {
              var je = qe[0],
                ke = this.props[pe];
              return (
                ke || (ke = this.props[pe] = new je.Bare()),
                ke.init(this.$el, Ee, qe, fe),
                ke
              );
            }
          }
          function C(oe, fe, Ee) {
            if (oe) {
              var pe = typeof oe;
              if (
                (fe ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && fe)
              )
                return (
                  (this.timer = new $({
                    duration: oe,
                    context: this,
                    complete: k,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && fe) {
                switch (oe) {
                  case "hide":
                    Z.call(this);
                    break;
                  case "stop":
                    ne.call(this);
                    break;
                  case "redraw":
                    ue.call(this);
                    break;
                  default:
                    x.call(this, oe, Ee && Ee[1]);
                }
                return k.call(this);
              }
              if (pe == "function") return void oe.call(this, this);
              if (pe == "object") {
                var qe = 0;
                rt.call(
                  this,
                  oe,
                  function (Ie, u_) {
                    Ie.span > qe && (qe = Ie.span), Ie.stop(), Ie.animate(u_);
                  },
                  function (Ie) {
                    "wait" in Ie && (qe = u(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  qe > 0 &&
                    ((this.timer = new $({ duration: qe, context: this })),
                    (this.active = !0),
                    fe && (this.timer.complete = k));
                var je = this,
                  ke = !1,
                  cn = {};
                W(function () {
                  rt.call(je, oe, function (Ie) {
                    Ie.active && ((ke = !0), (cn[Ie.name] = Ie.nextStyle));
                  }),
                    ke && je.$el.css(cn);
                });
              }
            }
          }
          function M(oe) {
            (oe = u(oe, 0)),
              this.active
                ? this.queue.push({ options: oe })
                : ((this.timer = new $({
                    duration: oe,
                    context: this,
                    complete: k,
                  })),
                  (this.active = !0));
          }
          function S(oe) {
            return this.active
              ? (this.queue.push({ options: oe, args: arguments }),
                void (this.timer.complete = k))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function k() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var oe = this.queue.shift();
              C.call(this, oe.options, !0, oe.args);
            }
          }
          function ne(oe) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var fe;
            typeof oe == "string"
              ? ((fe = {}), (fe[oe] = 1))
              : (fe = typeof oe == "object" && oe != null ? oe : this.props),
              rt.call(this, fe, Pe),
              _e.call(this);
          }
          function ae(oe) {
            ne.call(this, oe), rt.call(this, oe, Ir, a_);
          }
          function ge(oe) {
            typeof oe != "string" && (oe = "block"),
              (this.el.style.display = oe);
          }
          function Z() {
            ne.call(this), (this.el.style.display = "none");
          }
          function ue() {
            this.el.offsetHeight;
          }
          function ce() {
            ne.call(this),
              e.removeData(this.el, O),
              (this.$el = this.el = null);
          }
          function _e() {
            var oe,
              fe,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (oe in this.props)
              (fe = this.props[oe]), fe.active && Ee.push(fe.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[H.transition.dom] = Ee));
          }
          function rt(oe, fe, Ee) {
            var pe,
              qe,
              je,
              ke,
              cn = fe !== Pe,
              Ie = {};
            for (pe in oe)
              (je = oe[pe]),
                pe in le
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = je))
                  : (P.test(pe) && (pe = r(pe)),
                    pe in Y ? (Ie[pe] = je) : (ke || (ke = {}), (ke[pe] = je)));
            for (pe in Ie) {
              if (((je = Ie[pe]), (qe = this.props[pe]), !qe)) {
                if (!cn) continue;
                qe = x.call(this, pe);
              }
              fe.call(this, qe, je);
            }
            Ee && ke && Ee.call(this, ke);
          }
          function Pe(oe) {
            oe.stop();
          }
          function Ir(oe, fe) {
            oe.set(fe);
          }
          function a_(oe) {
            this.$el.css(oe);
          }
          function Xe(oe, fe) {
            d[oe] = function () {
              return this.children
                ? s_.call(this, fe, arguments)
                : (this.el && fe.apply(this, arguments), this);
            };
          }
          function s_(oe, fe) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
            return this;
          }
          (d.init = function (oe) {
            if (
              ((this.$el = e(oe)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ie.keepInherited && !ie.fallback)
            ) {
              var fe = X(this.el, "transition");
              fe && !Q.test(fe) && (this.upstream = fe);
            }
            H.backface &&
              ie.hideBackface &&
              b(this.el, H.backface.css, "hidden");
          }),
            Xe("add", x),
            Xe("start", C),
            Xe("wait", M),
            Xe("then", S),
            Xe("next", k),
            Xe("stop", ne),
            Xe("set", ae),
            Xe("show", ge),
            Xe("hide", Z),
            Xe("redraw", ue),
            Xe("destroy", ce);
        }),
        v = p(g, function (d) {
          function x(C, M) {
            var S = e.data(C, O) || e.data(C, O, new g.Bare());
            return S.el || S.init(C), M ? S.start(M) : S;
          }
          d.init = function (C, M) {
            var S = e(C);
            if (!S.length) return this;
            if (S.length === 1) return x(S[0], M);
            var k = [];
            return (
              S.each(function (ne, ae) {
                k.push(x(ae, M));
              }),
              (this.children = k),
              this
            );
          };
        }),
        h = p(function (d) {
          function x() {
            var k = this.get();
            this.update("auto");
            var ne = this.get();
            return this.update(k), ne;
          }
          function C(k, ne, ae) {
            return ne !== void 0 && (ae = ne), k in E ? k : ae;
          }
          function M(k) {
            var ne = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(k);
            return (ne ? i(ne[1], ne[2], ne[3]) : k).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var S = { duration: 500, ease: "ease", delay: 0 };
          (d.init = function (k, ne, ae, ge) {
            (this.$el = k), (this.el = k[0]);
            var Z = ne[0];
            ae[2] && (Z = ae[2]),
              J[Z] && (Z = J[Z]),
              (this.name = Z),
              (this.type = ae[1]),
              (this.duration = u(ne[1], this.duration, S.duration)),
              (this.ease = C(ne[2], this.ease, S.ease)),
              (this.delay = u(ne[3], this.delay, S.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = te.test(this.name)),
              (this.unit = ge.unit || this.unit || ie.defaultUnit),
              (this.angle = ge.angle || this.angle || ie.defaultAngle),
              ie.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    j +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? j + E[this.ease][0] : "") +
                    (this.delay ? j + this.delay + "ms" : "")));
          }),
            (d.set = function (k) {
              (k = this.convert(k, this.type)), this.update(k), this.redraw();
            }),
            (d.transition = function (k) {
              (this.active = !0),
                (k = this.convert(k, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  k == "auto" && (k = x.call(this))),
                (this.nextStyle = k);
            }),
            (d.fallback = function (k) {
              var ne =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (k = this.convert(k, this.type)),
                this.auto &&
                  (ne == "auto" && (ne = this.convert(this.get(), this.type)),
                  k == "auto" && (k = x.call(this))),
                (this.tween = new A({
                  from: ne,
                  to: k,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (d.get = function () {
              return X(this.el, this.name);
            }),
            (d.update = function (k) {
              b(this.el, this.name, k);
            }),
            (d.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                b(this.el, this.name, this.get()));
              var k = this.tween;
              k && k.context && k.destroy();
            }),
            (d.convert = function (k, ne) {
              if (k == "auto" && this.auto) return k;
              var ae,
                ge = typeof k == "number",
                Z = typeof k == "string";
              switch (ne) {
                case L:
                  if (ge) return k;
                  if (Z && k.replace(T, "") === "") return +k;
                  ae = "number(unitless)";
                  break;
                case F:
                  if (Z) {
                    if (k === "" && this.original) return this.original;
                    if (ne.test(k))
                      return k.charAt(0) == "#" && k.length == 7 ? k : M(k);
                  }
                  ae = "hex or rgb string";
                  break;
                case G:
                  if (ge) return k + this.unit;
                  if (Z && ne.test(k)) return k;
                  ae = "number(px) or string(unit)";
                  break;
                case D:
                  if (ge) return k + this.unit;
                  if (Z && ne.test(k)) return k;
                  ae = "number(px) or string(unit or %)";
                  break;
                case K:
                  if (ge) return k + this.angle;
                  if (Z && ne.test(k)) return k;
                  ae = "number(deg) or string(angle)";
                  break;
                case z:
                  if (ge || (Z && D.test(k))) return k;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, k), k;
            }),
            (d.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = p(h, function (d, x) {
          d.init = function () {
            x.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), F));
          };
        }),
        q = p(h, function (d, x) {
          (d.init = function () {
            x.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (d.get = function () {
              return this.$el[this.name]();
            }),
            (d.update = function (C) {
              this.$el[this.name](C);
            });
        }),
        V = p(h, function (d, x) {
          function C(M, S) {
            var k, ne, ae, ge, Z;
            for (k in M)
              (ge = le[k]),
                (ae = ge[0]),
                (ne = ge[1] || k),
                (Z = this.convert(M[k], ae)),
                S.call(this, ne, Z, ae);
          }
          (d.init = function () {
            x.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                le.perspective &&
                  ie.perspective &&
                  ((this.current.perspective = ie.perspective),
                  b(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (d.set = function (M) {
              C.call(this, M, function (S, k) {
                this.current[S] = k;
              }),
                b(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (d.transition = function (M) {
              var S = this.values(M);
              this.tween = new se({
                current: this.current,
                values: S,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var k,
                ne = {};
              for (k in this.current) ne[k] = k in S ? S[k] : this.current[k];
              (this.active = !0), (this.nextStyle = this.style(ne));
            }),
            (d.fallback = function (M) {
              var S = this.values(M);
              this.tween = new se({
                current: this.current,
                values: S,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (d.update = function () {
              b(this.el, this.name, this.style(this.current));
            }),
            (d.style = function (M) {
              var S,
                k = "";
              for (S in M) k += S + "(" + M[S] + ") ";
              return k;
            }),
            (d.values = function (M) {
              var S,
                k = {};
              return (
                C.call(this, M, function (ne, ae, ge) {
                  (k[ne] = ae),
                    this.current[ne] === void 0 &&
                      ((S = 0),
                      ~ne.indexOf("scale") && (S = 1),
                      (this.current[ne] = this.convert(S, ge)));
                }),
                k
              );
            });
        }),
        A = p(function (d) {
          function x(Z) {
            ae.push(Z) === 1 && W(C);
          }
          function C() {
            var Z,
              ue,
              ce,
              _e = ae.length;
            if (_e)
              for (W(C), ue = B(), Z = _e; Z--; )
                (ce = ae[Z]), ce && ce.render(ue);
          }
          function M(Z) {
            var ue,
              ce = e.inArray(Z, ae);
            ce >= 0 &&
              ((ue = ae.slice(ce + 1)),
              (ae.length = ce),
              ue.length && (ae = ae.concat(ue)));
          }
          function S(Z) {
            return Math.round(Z * ge) / ge;
          }
          function k(Z, ue, ce) {
            return i(
              Z[0] + ce * (ue[0] - Z[0]),
              Z[1] + ce * (ue[1] - Z[1]),
              Z[2] + ce * (ue[2] - Z[2])
            );
          }
          var ne = { ease: E.ease[1], from: 0, to: 1 };
          (d.init = function (Z) {
            (this.duration = Z.duration || 0), (this.delay = Z.delay || 0);
            var ue = Z.ease || ne.ease;
            E[ue] && (ue = E[ue][1]),
              typeof ue != "function" && (ue = ne.ease),
              (this.ease = ue),
              (this.update = Z.update || o),
              (this.complete = Z.complete || o),
              (this.context = Z.context || this),
              (this.name = Z.name);
            var ce = Z.from,
              _e = Z.to;
            ce === void 0 && (ce = ne.from),
              _e === void 0 && (_e = ne.to),
              (this.unit = Z.unit || ""),
              typeof ce == "number" && typeof _e == "number"
                ? ((this.begin = ce), (this.change = _e - ce))
                : this.format(_e, ce),
              (this.value = this.begin + this.unit),
              (this.start = B()),
              Z.autoplay !== !1 && this.play();
          }),
            (d.play = function () {
              this.active ||
                (this.start || (this.start = B()), (this.active = !0), x(this));
            }),
            (d.stop = function () {
              this.active && ((this.active = !1), M(this));
            }),
            (d.render = function (Z) {
              var ue,
                ce = Z - this.start;
              if (this.delay) {
                if (ce <= this.delay) return;
                ce -= this.delay;
              }
              if (ce < this.duration) {
                var _e = this.ease(ce, 0, 1, this.duration);
                return (
                  (ue = this.startRGB
                    ? k(this.startRGB, this.endRGB, _e)
                    : S(this.begin + _e * this.change)),
                  (this.value = ue + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ue = this.endHex || this.begin + this.change),
                (this.value = ue + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (d.format = function (Z, ue) {
              if (((ue += ""), (Z += ""), Z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ue)),
                  (this.endRGB = n(Z)),
                  (this.endHex = Z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ce = ue.replace(T, ""),
                  _e = Z.replace(T, "");
                ce !== _e && s("tween", ue, Z), (this.unit = ce);
              }
              (ue = parseFloat(ue)),
                (Z = parseFloat(Z)),
                (this.begin = this.value = ue),
                (this.change = Z - ue);
            }),
            (d.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ge = 1e3;
        }),
        $ = p(A, function (d) {
          (d.init = function (x) {
            (this.duration = x.duration || 0),
              (this.complete = x.complete || o),
              (this.context = x.context),
              this.play();
          }),
            (d.render = function (x) {
              var C = x - this.start;
              C < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        se = p(A, function (d, x) {
          (d.init = function (C) {
            (this.context = C.context),
              (this.update = C.update),
              (this.tweens = []),
              (this.current = C.current);
            var M, S;
            for (M in C.values)
              (S = C.values[M]),
                this.current[M] !== S &&
                  this.tweens.push(
                    new A({
                      name: M,
                      from: this.current[M],
                      to: S,
                      duration: C.duration,
                      delay: C.delay,
                      ease: C.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (d.render = function (C) {
              var M,
                S,
                k = this.tweens.length,
                ne = !1;
              for (M = k; M--; )
                (S = this.tweens[M]),
                  S.context &&
                    (S.render(C), (this.current[S.name] = S.value), (ne = !0));
              return ne
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (d.destroy = function () {
              if ((x.destroy.call(this), this.tweens)) {
                var C,
                  M = this.tweens.length;
                for (C = M; C--; ) this.tweens[C].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ie = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !H.transition,
          agentTests: [],
        });
      (t.fallback = function (d) {
        if (!H.transition) return (ie.fallback = !0);
        ie.agentTests.push("(" + d + ")");
        var x = new RegExp(ie.agentTests.join("|"), "i");
        ie.fallback = x.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (d) {
          return new A(d);
        }),
        (t.delay = function (d, x, C) {
          return new $({ complete: x, duration: d, context: C });
        }),
        (e.fn.tram = function (d) {
          return t.call(null, this, d);
        });
      var b = e.style,
        X = e.css,
        J = { transform: H.transform && H.transform.css },
        Y = {
          color: [c, F],
          background: [c, F, "background-color"],
          "outline-color": [c, F],
          "border-color": [c, F],
          "border-top-color": [c, F],
          "border-right-color": [c, F],
          "border-bottom-color": [c, F],
          "border-left-color": [c, F],
          "border-width": [h, G],
          "border-top-width": [h, G],
          "border-right-width": [h, G],
          "border-bottom-width": [h, G],
          "border-left-width": [h, G],
          "border-spacing": [h, G],
          "letter-spacing": [h, G],
          margin: [h, G],
          "margin-top": [h, G],
          "margin-right": [h, G],
          "margin-bottom": [h, G],
          "margin-left": [h, G],
          padding: [h, G],
          "padding-top": [h, G],
          "padding-right": [h, G],
          "padding-bottom": [h, G],
          "padding-left": [h, G],
          "outline-width": [h, G],
          opacity: [h, L],
          top: [h, D],
          right: [h, D],
          bottom: [h, D],
          left: [h, D],
          "font-size": [h, D],
          "text-indent": [h, D],
          "word-spacing": [h, D],
          width: [h, D],
          "min-width": [h, D],
          "max-width": [h, D],
          height: [h, D],
          "min-height": [h, D],
          "max-height": [h, D],
          "line-height": [h, z],
          "scroll-top": [q, L, "scrollTop"],
          "scroll-left": [q, L, "scrollLeft"],
        },
        le = {};
      H.transform &&
        ((Y.transform = [V]),
        (le = {
          x: [D, "translateX"],
          y: [D, "translateY"],
          rotate: [K],
          rotateX: [K],
          rotateY: [K],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [K],
          skewX: [K],
          skewY: [K],
        })),
        H.transform &&
          H.backface &&
          ((le.z = [D, "translateZ"]),
          (le.rotateZ = [K]),
          (le.scaleZ = [L]),
          (le.perspective = [G]));
      var we = /ms/,
        Re = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Vs = l((uW, Us) => {
    "use strict";
    var v_ = window.$,
      g_ = Fi() && v_.tram;
    Us.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        _ = r.forEach,
        p = r.map,
        E = r.reduce,
        m = r.reduceRight,
        y = r.filter,
        w = r.every,
        O = r.some,
        T = r.indexOf,
        P = r.lastIndexOf,
        L = Array.isArray,
        F = Object.keys,
        G = i.bind,
        D =
          (e.each =
          e.forEach =
            function (I, N, U) {
              if (I == null) return I;
              if (_ && I.forEach === _) I.forEach(N, U);
              else if (I.length === +I.length) {
                for (var H = 0, ee = I.length; H < ee; H++)
                  if (N.call(U, I[H], H, I) === t) return;
              } else
                for (var re = e.keys(I), H = 0, ee = re.length; H < ee; H++)
                  if (N.call(U, I[re[H]], re[H], I) === t) return;
              return I;
            });
      (e.map = e.collect =
        function (I, N, U) {
          var H = [];
          return I == null
            ? H
            : p && I.map === p
            ? I.map(N, U)
            : (D(I, function (ee, re, W) {
                H.push(N.call(U, ee, re, W));
              }),
              H);
        }),
        (e.find = e.detect =
          function (I, N, U) {
            var H;
            return (
              K(I, function (ee, re, W) {
                if (N.call(U, ee, re, W)) return (H = ee), !0;
              }),
              H
            );
          }),
        (e.filter = e.select =
          function (I, N, U) {
            var H = [];
            return I == null
              ? H
              : y && I.filter === y
              ? I.filter(N, U)
              : (D(I, function (ee, re, W) {
                  N.call(U, ee, re, W) && H.push(ee);
                }),
                H);
          });
      var K =
        (e.some =
        e.any =
          function (I, N, U) {
            N || (N = e.identity);
            var H = !1;
            return I == null
              ? H
              : O && I.some === O
              ? I.some(N, U)
              : (D(I, function (ee, re, W) {
                  if (H || (H = N.call(U, ee, re, W))) return t;
                }),
                !!H);
          });
      (e.contains = e.include =
        function (I, N) {
          return I == null
            ? !1
            : T && I.indexOf === T
            ? I.indexOf(N) != -1
            : K(I, function (U) {
                return U === N;
              });
        }),
        (e.delay = function (I, N) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return I.apply(null, U);
          }, N);
        }),
        (e.defer = function (I) {
          return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (I) {
          var N, U, H;
          return function () {
            N ||
              ((N = !0),
              (U = arguments),
              (H = this),
              g_.frame(function () {
                (N = !1), I.apply(H, U);
              }));
          };
        }),
        (e.debounce = function (I, N, U) {
          var H,
            ee,
            re,
            W,
            B,
            g = function () {
              var v = e.now() - W;
              v < N
                ? (H = setTimeout(g, N - v))
                : ((H = null), U || ((B = I.apply(re, ee)), (re = ee = null)));
            };
          return function () {
            (re = this), (ee = arguments), (W = e.now());
            var v = U && !H;
            return (
              H || (H = setTimeout(g, N)),
              v && ((B = I.apply(re, ee)), (re = ee = null)),
              B
            );
          };
        }),
        (e.defaults = function (I) {
          if (!e.isObject(I)) return I;
          for (var N = 1, U = arguments.length; N < U; N++) {
            var H = arguments[N];
            for (var ee in H) I[ee] === void 0 && (I[ee] = H[ee]);
          }
          return I;
        }),
        (e.keys = function (I) {
          if (!e.isObject(I)) return [];
          if (F) return F(I);
          var N = [];
          for (var U in I) e.has(I, U) && N.push(U);
          return N;
        }),
        (e.has = function (I, N) {
          return f.call(I, N);
        }),
        (e.isObject = function (I) {
          return I === Object(I);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        te = /\\|'|\r|\n|\u2028|\u2029/g,
        j = function (I) {
          return "\\" + Q[I];
        },
        R = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (I, N, U) {
          !N && U && (N = U), (N = e.defaults({}, N, e.templateSettings));
          var H = RegExp(
              [
                (N.escape || z).source,
                (N.interpolate || z).source,
                (N.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            re = "__p+='";
          I.replace(H, function (v, h, c, q, V) {
            return (
              (re += I.slice(ee, V).replace(te, j)),
              (ee = V + v.length),
              h
                ? (re +=
                    `'+
    ((__t=(` +
                    h +
                    `))==null?'':_.escape(__t))+
    '`)
                : c
                ? (re +=
                    `'+
    ((__t=(` +
                    c +
                    `))==null?'':__t)+
    '`)
                : q &&
                  (re +=
                    `';
    ` +
                    q +
                    `
    __p+='`),
              v
            );
          }),
            (re += `';
    `);
          var W = N.variable;
          if (W) {
            if (!R.test(W))
              throw new Error("variable is not a bare identifier: " + W);
          } else
            (re =
              `with(obj||{}){
    ` +
              re +
              `}
    `),
              (W = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            re +
            `return __p;
    `;
          var B;
          try {
            B = new Function(N.variable || "obj", "_", re);
          } catch (v) {
            throw ((v.source = re), v);
          }
          var g = function (v) {
            return B.call(this, v, e);
          };
          return (
            (g.source =
              "function(" +
              W +
              `){
    ` +
              re +
              "}"),
            g
          );
        }),
        e
      );
    })();
  });
  var Le = l((cW, Ys) => {
    "use strict";
    var ve = {},
      Ht = {},
      Bt = [],
      ki = window.Webflow || [],
      bt = window.jQuery,
      Ke = bt(window),
      h_ = bt(document),
      it = bt.isFunction,
      ze = (ve._ = Vs()),
      Hs = (ve.tram = Fi() && bt.tram),
      dn = !1,
      Gi = !1;
    Hs.config.hideBackface = !1;
    Hs.config.keepInherited = !0;
    ve.define = function (e, t, r) {
      Ht[e] && Xs(Ht[e]);
      var n = (Ht[e] = t(bt, ze, r) || {});
      return Bs(n), n;
    };
    ve.require = function (e) {
      return Ht[e];
    };
    function Bs(e) {
      ve.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
        it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && m_(e);
    }
    function m_(e) {
      if (dn) {
        e.ready();
        return;
      }
      ze.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function Xs(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && y_(e);
    }
    function y_(e) {
      Bt = ze.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    ve.push = function (e) {
      if (dn) {
        it(e) && e();
        return;
      }
      ki.push(e);
    };
    ve.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var fn = navigator.userAgent.toLowerCase(),
      js = (ve.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      E_ = (ve.env.chrome =
        /chrome/.test(fn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(fn.match(/chrome\/(\d+)\./)[1], 10)),
      b_ = (ve.env.ios = /(ipod|iphone|ipad)/.test(fn));
    ve.env.safari = /safari/.test(fn) && !E_ && !b_;
    var Di;
    js &&
      h_.on("touchstart mousedown", function (e) {
        Di = e.target;
      });
    ve.validClick = js
      ? function (e) {
          return e === Di || bt.contains(e, Di);
        }
      : function () {
          return !0;
        };
    var zs = "resize.webflow orientationchange.webflow load.webflow",
      __ = "scroll.webflow " + zs;
    ve.resize = Ui(Ke, zs);
    ve.scroll = Ui(Ke, __);
    ve.redraw = Ui();
    function Ui(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ve.location = function (e) {
      window.location = e;
    };
    ve.env() && (ve.location = function () {});
    ve.ready = function () {
      (dn = !0), Gi ? I_() : ze.each(Bt, Ws), ze.each(ki, Ws), ve.resize.up();
    };
    function Ws(e) {
      it(e) && e();
    }
    function I_() {
      (Gi = !1), ze.each(Ht, Bs);
    }
    var Lt;
    ve.load = function (e) {
      Lt.then(e);
    };
    function Ks() {
      Lt && (Lt.reject(), Ke.off("load", Lt.resolve)),
        (Lt = new bt.Deferred()),
        Ke.on("load", Lt.resolve);
    }
    ve.destroy = function (e) {
      (e = e || {}),
        (Gi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (dn = e.domready),
        ze.each(Ht, Xs),
        ve.resize.off(),
        ve.scroll.off(),
        ve.redraw.off(),
        (Bt = []),
        (ki = []),
        Lt.state() === "pending" && Ks();
    };
    bt(ve.ready);
    Ks();
    Ys.exports = window.Webflow = ve;
  });
  var Zs = l((lW, $s) => {
    "use strict";
    var Qs = Le();
    Qs.define(
      "brand",
      ($s.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && a.hostname !== y && (m = !0),
            m &&
              !s &&
              ((f = f),
              E(),
              setTimeout(E, 500),
              e(r).off(u, _).on(u, _));
        };
        function _() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        
        function E() {
          var m = i.children(o),
            y = m.length && m.get(0) === f,
            w = Qs.env("editor");
          if (y) {
            w && m.remove();
            return;
          }
          m.length && m.remove(), w || i.append(f);
        }
        return t;
      })
    );
  });
  var eu = l((fW, Js) => {
    "use strict";
    var Vi = Le();
    Vi.define(
      "edit",
      (Js.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Vi.env("test") || Vi.env("frame")) && !r.fixture && !w_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || E,
          _ = !1;
        try {
          _ =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        _
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, p).triggerHandler(s);
        function p() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function E() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, p),
            P(function (F) {
              e.ajax({
                url: T("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(F),
              });
            });
        }
        function m(F) {
          return function (G) {
            if (!G) {
              console.error("Could not load editor data");
              return;
            }
            (G.thirdPartyCookiesSupported = F),
              y(O(G.scriptPath), function () {
                window.WebflowEditor(G);
              });
          };
        }
        function y(F, G) {
          e.ajax({ type: "GET", url: F, dataType: "script", cache: !0 }).then(
            G,
            w
          );
        }
        function w(F, G, D) {
          throw (console.error("Could not load editor script: " + G), D);
        }
        function O(F) {
          return F.indexOf("//") >= 0
            ? F
            : T("https://editor-api.webflow.com" + F);
        }
        function T(F) {
          return F.replace(/([^:])\/\//g, "$1/");
        }
        function P(F) {
          var G = window.document.createElement("iframe");
          (G.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (G.style.display = "none"),
            (G.sandbox = "allow-scripts allow-same-origin");
          var D = function (K) {
            K.data === "WF_third_party_cookies_unsupported"
              ? (L(G, D), F(!1))
              : K.data === "WF_third_party_cookies_supported" &&
                (L(G, D), F(!0));
          };
          (G.onerror = function () {
            L(G, D), F(!1);
          }),
            window.addEventListener("message", D, !1),
            window.document.body.appendChild(G);
        }
        function L(F, G) {
          window.removeEventListener("message", G, !1), F.remove();
        }
        return n;
      })
    );
    function w_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var ru = l((dW, tu) => {
    "use strict";
    var T_ = Le();
    T_.define(
      "focus-visible",
      (tu.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function u(L) {
            var F = L.type,
              G = L.tagName;
            return !!(
              (G === "INPUT" && a[F] && !L.readOnly) ||
              (G === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function f(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function _(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function p(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function m(L) {
            s(L.target) && (n || u(L.target)) && f(L.target);
          }
          function y(L) {
            s(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              _(L.target));
          }
          function w() {
            document.visibilityState === "hidden" && (i && (n = !0), O());
          }
          function O() {
            document.addEventListener("mousemove", P),
              document.addEventListener("mousedown", P),
              document.addEventListener("mouseup", P),
              document.addEventListener("pointermove", P),
              document.addEventListener("pointerdown", P),
              document.addEventListener("pointerup", P),
              document.addEventListener("touchmove", P),
              document.addEventListener("touchstart", P),
              document.addEventListener("touchend", P);
          }
          function T() {
            document.removeEventListener("mousemove", P),
              document.removeEventListener("mousedown", P),
              document.removeEventListener("mouseup", P),
              document.removeEventListener("pointermove", P),
              document.removeEventListener("pointerdown", P),
              document.removeEventListener("pointerup", P),
              document.removeEventListener("touchmove", P),
              document.removeEventListener("touchstart", P),
              document.removeEventListener("touchend", P);
          }
          function P(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), T());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", w, !0),
            O(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var ou = l((pW, iu) => {
    "use strict";
    var nu = Le();
    nu.define(
      "focus",
      (iu.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            nu.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var uu = l((vW, su) => {
    "use strict";
    var Wi = window.jQuery,
      ot = {},
      pn = [],
      au = ".w-ix",
      vn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Wi(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Wi(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + au, OUTRO: "w-ix-outro" + au };
    ot.init = function () {
      for (var e = pn.length, t = 0; t < e; t++) {
        var r = pn[t];
        r[0](0, r[1]);
      }
      (pn = []), Wi.extend(ot.triggers, vn);
    };
    ot.async = function () {
      for (var e in vn) {
        var t = vn[e];
        vn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            pn.push([t, n]);
          });
      }
    };
    ot.async();
    su.exports = ot;
  });
  var Xt = l((gW, fu) => {
    "use strict";
    var Hi = uu();
    function cu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var x_ = window.jQuery,
      gn = {},
      lu = ".w-ix",
      O_ = {
        reset: function (e, t) {
          Hi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Hi.triggers.intro(e, t), cu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Hi.triggers.outro(e, t), cu(t, "COMPONENT_INACTIVE");
        },
      };
    gn.triggers = {};
    gn.types = { INTRO: "w-ix-intro" + lu, OUTRO: "w-ix-outro" + lu };
    x_.extend(gn.triggers, O_);
    fu.exports = gn;
  });
  var du = l((hW, pt) => {
    function Bi(e) {
      return (
        (pt.exports = Bi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Bi(e)
      );
    }
    (pt.exports = Bi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var hn = l((mW, wr) => {
    var A_ = du().default;
    function pu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (pu = function (i) {
        return i ? r : t;
      })(e);
    }
    function S_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (A_(e) != "object" && typeof e != "function"))
        return { default: e };
      var r = pu(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (wr.exports = S_),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var vu = l((yW, Tr) => {
    function C_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = C_),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var ye = l((EW, gu) => {
    var mn = function (e) {
      return e && e.Math == Math && e;
    };
    gu.exports =
      mn(typeof globalThis == "object" && globalThis) ||
      mn(typeof window == "object" && window) ||
      mn(typeof self == "object" && self) ||
      mn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var jt = l((bW, hu) => {
    hu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Nt = l((_W, mu) => {
    var R_ = jt();
    mu.exports = !R_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var yn = l((IW, yu) => {
    var xr = Function.prototype.call;
    yu.exports = xr.bind
      ? xr.bind(xr)
      : function () {
          return xr.apply(xr, arguments);
        };
  });
  var Iu = l((_u) => {
    "use strict";
    var Eu = {}.propertyIsEnumerable,
      bu = Object.getOwnPropertyDescriptor,
      L_ = bu && !Eu.call({ 1: 2 }, 1);
    _u.f = L_
      ? function (t) {
          var r = bu(this, t);
          return !!r && r.enumerable;
        }
      : Eu;
  });
  var Xi = l((TW, wu) => {
    wu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = l((xW, xu) => {
    var Tu = Function.prototype,
      ji = Tu.bind,
      zi = Tu.call,
      N_ = ji && ji.bind(zi);
    xu.exports = ji
      ? function (e) {
          return e && N_(zi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return zi.apply(e, arguments);
            }
          );
        };
  });
  var Su = l((OW, Au) => {
    var Ou = Ye(),
      P_ = Ou({}.toString),
      q_ = Ou("".slice);
    Au.exports = function (e) {
      return q_(P_(e), 8, -1);
    };
  });
  var Ru = l((AW, Cu) => {
    var M_ = ye(),
      F_ = Ye(),
      D_ = jt(),
      k_ = Su(),
      Ki = M_.Object,
      G_ = F_("".split);
    Cu.exports = D_(function () {
      return !Ki("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return k_(e) == "String" ? G_(e, "") : Ki(e);
        }
      : Ki;
  });
  var Yi = l((SW, Lu) => {
    var U_ = ye(),
      V_ = U_.TypeError;
    Lu.exports = function (e) {
      if (e == null) throw V_("Can't call method on " + e);
      return e;
    };
  });
  var Or = l((CW, Nu) => {
    var W_ = Ru(),
      H_ = Yi();
    Nu.exports = function (e) {
      return W_(H_(e));
    };
  });
  var at = l((RW, Pu) => {
    Pu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var zt = l((LW, qu) => {
    var B_ = at();
    qu.exports = function (e) {
      return typeof e == "object" ? e !== null : B_(e);
    };
  });
  var Ar = l((NW, Mu) => {
    var Qi = ye(),
      X_ = at(),
      j_ = function (e) {
        return X_(e) ? e : void 0;
      };
    Mu.exports = function (e, t) {
      return arguments.length < 2 ? j_(Qi[e]) : Qi[e] && Qi[e][t];
    };
  });
  var Du = l((PW, Fu) => {
    var z_ = Ye();
    Fu.exports = z_({}.isPrototypeOf);
  });
  var Gu = l((qW, ku) => {
    var K_ = Ar();
    ku.exports = K_("navigator", "userAgent") || "";
  });
  var ju = l((MW, Xu) => {
    var Bu = ye(),
      $i = Gu(),
      Uu = Bu.process,
      Vu = Bu.Deno,
      Wu = (Uu && Uu.versions) || (Vu && Vu.version),
      Hu = Wu && Wu.v8,
      Qe,
      En;
    Hu &&
      ((Qe = Hu.split(".")),
      (En = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1])));
    !En &&
      $i &&
      ((Qe = $i.match(/Edge\/(\d+)/)),
      (!Qe || Qe[1] >= 74) &&
        ((Qe = $i.match(/Chrome\/(\d+)/)), Qe && (En = +Qe[1])));
    Xu.exports = En;
  });
  var Zi = l((FW, Ku) => {
    var zu = ju(),
      Y_ = jt();
    Ku.exports =
      !!Object.getOwnPropertySymbols &&
      !Y_(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && zu && zu < 41)
        );
      });
  });
  var Ji = l((DW, Yu) => {
    var Q_ = Zi();
    Yu.exports = Q_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var eo = l((kW, Qu) => {
    var $_ = ye(),
      Z_ = Ar(),
      J_ = at(),
      eI = Du(),
      tI = Ji(),
      rI = $_.Object;
    Qu.exports = tI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Z_("Symbol");
          return J_(t) && eI(t.prototype, rI(e));
        };
  });
  var Zu = l((GW, $u) => {
    var nI = ye(),
      iI = nI.String;
    $u.exports = function (e) {
      try {
        return iI(e);
      } catch {
        return "Object";
      }
    };
  });
  var ec = l((UW, Ju) => {
    var oI = ye(),
      aI = at(),
      sI = Zu(),
      uI = oI.TypeError;
    Ju.exports = function (e) {
      if (aI(e)) return e;
      throw uI(sI(e) + " is not a function");
    };
  });
  var rc = l((VW, tc) => {
    var cI = ec();
    tc.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : cI(r);
    };
  });
  var ic = l((WW, nc) => {
    var lI = ye(),
      to = yn(),
      ro = at(),
      no = zt(),
      fI = lI.TypeError;
    nc.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ro((r = e.toString)) && !no((n = to(r, e)))) ||
        (ro((r = e.valueOf)) && !no((n = to(r, e)))) ||
        (t !== "string" && ro((r = e.toString)) && !no((n = to(r, e))))
      )
        return n;
      throw fI("Can't convert object to primitive value");
    };
  });
  var ac = l((HW, oc) => {
    oc.exports = !1;
  });
  var bn = l((BW, uc) => {
    var sc = ye(),
      dI = Object.defineProperty;
    uc.exports = function (e, t) {
      try {
        dI(sc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        sc[e] = t;
      }
      return t;
    };
  });
  var _n = l((XW, lc) => {
    var pI = ye(),
      vI = bn(),
      cc = "__core-js_shared__",
      gI = pI[cc] || vI(cc, {});
    lc.exports = gI;
  });
  var io = l((jW, dc) => {
    var hI = ac(),
      fc = _n();
    (dc.exports = function (e, t) {
      return fc[e] || (fc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: hI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var vc = l((zW, pc) => {
    var mI = ye(),
      yI = Yi(),
      EI = mI.Object;
    pc.exports = function (e) {
      return EI(yI(e));
    };
  });
  var _t = l((KW, gc) => {
    var bI = Ye(),
      _I = vc(),
      II = bI({}.hasOwnProperty);
    gc.exports =
      Object.hasOwn ||
      function (t, r) {
        return II(_I(t), r);
      };
  });
  var oo = l((YW, hc) => {
    var wI = Ye(),
      TI = 0,
      xI = Math.random(),
      OI = wI((1).toString);
    hc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + OI(++TI + xI, 36);
    };
  });
  var ao = l((QW, _c) => {
    var AI = ye(),
      SI = io(),
      mc = _t(),
      CI = oo(),
      yc = Zi(),
      bc = Ji(),
      Kt = SI("wks"),
      Pt = AI.Symbol,
      Ec = Pt && Pt.for,
      RI = bc ? Pt : (Pt && Pt.withoutSetter) || CI;
    _c.exports = function (e) {
      if (!mc(Kt, e) || !(yc || typeof Kt[e] == "string")) {
        var t = "Symbol." + e;
        yc && mc(Pt, e)
          ? (Kt[e] = Pt[e])
          : bc && Ec
          ? (Kt[e] = Ec(t))
          : (Kt[e] = RI(t));
      }
      return Kt[e];
    };
  });
  var xc = l(($W, Tc) => {
    var LI = ye(),
      NI = yn(),
      Ic = zt(),
      wc = eo(),
      PI = rc(),
      qI = ic(),
      MI = ao(),
      FI = LI.TypeError,
      DI = MI("toPrimitive");
    Tc.exports = function (e, t) {
      if (!Ic(e) || wc(e)) return e;
      var r = PI(e, DI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = NI(r, e, t)), !Ic(n) || wc(n))
        )
          return n;
        throw FI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), qI(e, t);
    };
  });
  var so = l((ZW, Oc) => {
    var kI = xc(),
      GI = eo();
    Oc.exports = function (e) {
      var t = kI(e, "string");
      return GI(t) ? t : t + "";
    };
  });
  var co = l((JW, Sc) => {
    var UI = ye(),
      Ac = zt(),
      uo = UI.document,
      VI = Ac(uo) && Ac(uo.createElement);
    Sc.exports = function (e) {
      return VI ? uo.createElement(e) : {};
    };
  });
  var lo = l((eH, Cc) => {
    var WI = Nt(),
      HI = jt(),
      BI = co();
    Cc.exports =
      !WI &&
      !HI(function () {
        return (
          Object.defineProperty(BI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var fo = l((Lc) => {
    var XI = Nt(),
      jI = yn(),
      zI = Iu(),
      KI = Xi(),
      YI = Or(),
      QI = so(),
      $I = _t(),
      ZI = lo(),
      Rc = Object.getOwnPropertyDescriptor;
    Lc.f = XI
      ? Rc
      : function (t, r) {
          if (((t = YI(t)), (r = QI(r)), ZI))
            try {
              return Rc(t, r);
            } catch {}
          if ($I(t, r)) return KI(!jI(zI.f, t, r), t[r]);
        };
  });
  var Sr = l((rH, Pc) => {
    var Nc = ye(),
      JI = zt(),
      ew = Nc.String,
      tw = Nc.TypeError;
    Pc.exports = function (e) {
      if (JI(e)) return e;
      throw tw(ew(e) + " is not an object");
    };
  });
  var Cr = l((Fc) => {
    var rw = ye(),
      nw = Nt(),
      iw = lo(),
      qc = Sr(),
      ow = so(),
      aw = rw.TypeError,
      Mc = Object.defineProperty;
    Fc.f = nw
      ? Mc
      : function (t, r, n) {
          if ((qc(t), (r = ow(r)), qc(n), iw))
            try {
              return Mc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw aw("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var In = l((iH, Dc) => {
    var sw = Nt(),
      uw = Cr(),
      cw = Xi();
    Dc.exports = sw
      ? function (e, t, r) {
          return uw.f(e, t, cw(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var vo = l((oH, kc) => {
    var lw = Ye(),
      fw = at(),
      po = _n(),
      dw = lw(Function.toString);
    fw(po.inspectSource) ||
      (po.inspectSource = function (e) {
        return dw(e);
      });
    kc.exports = po.inspectSource;
  });
  var Vc = l((aH, Uc) => {
    var pw = ye(),
      vw = at(),
      gw = vo(),
      Gc = pw.WeakMap;
    Uc.exports = vw(Gc) && /native code/.test(gw(Gc));
  });
  var go = l((sH, Hc) => {
    var hw = io(),
      mw = oo(),
      Wc = hw("keys");
    Hc.exports = function (e) {
      return Wc[e] || (Wc[e] = mw(e));
    };
  });
  var wn = l((uH, Bc) => {
    Bc.exports = {};
  });
  var Qc = l((cH, Yc) => {
    var yw = Vc(),
      Kc = ye(),
      ho = Ye(),
      Ew = zt(),
      bw = In(),
      mo = _t(),
      yo = _n(),
      _w = go(),
      Iw = wn(),
      Xc = "Object already initialized",
      bo = Kc.TypeError,
      ww = Kc.WeakMap,
      Tn,
      Rr,
      xn,
      Tw = function (e) {
        return xn(e) ? Rr(e) : Tn(e, {});
      },
      xw = function (e) {
        return function (t) {
          var r;
          if (!Ew(t) || (r = Rr(t)).type !== e)
            throw bo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    yw || yo.state
      ? ((It = yo.state || (yo.state = new ww())),
        (jc = ho(It.get)),
        (Eo = ho(It.has)),
        (zc = ho(It.set)),
        (Tn = function (e, t) {
          if (Eo(It, e)) throw new bo(Xc);
          return (t.facade = e), zc(It, e, t), t;
        }),
        (Rr = function (e) {
          return jc(It, e) || {};
        }),
        (xn = function (e) {
          return Eo(It, e);
        }))
      : ((qt = _w("state")),
        (Iw[qt] = !0),
        (Tn = function (e, t) {
          if (mo(e, qt)) throw new bo(Xc);
          return (t.facade = e), bw(e, qt, t), t;
        }),
        (Rr = function (e) {
          return mo(e, qt) ? e[qt] : {};
        }),
        (xn = function (e) {
          return mo(e, qt);
        }));
    var It, jc, Eo, zc, qt;
    Yc.exports = { set: Tn, get: Rr, has: xn, enforce: Tw, getterFor: xw };
  });
  var Jc = l((lH, Zc) => {
    var _o = Nt(),
      Ow = _t(),
      $c = Function.prototype,
      Aw = _o && Object.getOwnPropertyDescriptor,
      Io = Ow($c, "name"),
      Sw = Io && function () {}.name === "something",
      Cw = Io && (!_o || (_o && Aw($c, "name").configurable));
    Zc.exports = { EXISTS: Io, PROPER: Sw, CONFIGURABLE: Cw };
  });
  var il = l((fH, nl) => {
    var Rw = ye(),
      el = at(),
      Lw = _t(),
      tl = In(),
      Nw = bn(),
      Pw = vo(),
      rl = Qc(),
      qw = Jc().CONFIGURABLE,
      Mw = rl.get,
      Fw = rl.enforce,
      Dw = String(String).split("String");
    (nl.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (el(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!Lw(r, "name") || (qw && r.name !== s)) && tl(r, "name", s),
          (u = Fw(r)),
          u.source || (u.source = Dw.join(typeof s == "string" ? s : ""))),
        e === Rw)
      ) {
        o ? (e[t] = r) : Nw(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : tl(e, t, r);
    })(Function.prototype, "toString", function () {
      return (el(this) && Mw(this).source) || Pw(this);
    });
  });
  var wo = l((dH, ol) => {
    var kw = Math.ceil,
      Gw = Math.floor;
    ol.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? Gw : kw)(t);
    };
  });
  var sl = l((pH, al) => {
    var Uw = wo(),
      Vw = Math.max,
      Ww = Math.min;
    al.exports = function (e, t) {
      var r = Uw(e);
      return r < 0 ? Vw(r + t, 0) : Ww(r, t);
    };
  });
  var cl = l((vH, ul) => {
    var Hw = wo(),
      Bw = Math.min;
    ul.exports = function (e) {
      return e > 0 ? Bw(Hw(e), 9007199254740991) : 0;
    };
  });
  var fl = l((gH, ll) => {
    var Xw = cl();
    ll.exports = function (e) {
      return Xw(e.length);
    };
  });
  var To = l((hH, pl) => {
    var jw = Or(),
      zw = sl(),
      Kw = fl(),
      dl = function (e) {
        return function (t, r, n) {
          var i = jw(t),
            o = Kw(i),
            a = zw(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    pl.exports = { includes: dl(!0), indexOf: dl(!1) };
  });
  var Oo = l((mH, gl) => {
    var Yw = Ye(),
      xo = _t(),
      Qw = Or(),
      $w = To().indexOf,
      Zw = wn(),
      vl = Yw([].push);
    gl.exports = function (e, t) {
      var r = Qw(e),
        n = 0,
        i = [],
        o;
      for (o in r) !xo(Zw, o) && xo(r, o) && vl(i, o);
      for (; t.length > n; ) xo(r, (o = t[n++])) && (~$w(i, o) || vl(i, o));
      return i;
    };
  });
  var On = l((yH, hl) => {
    hl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var yl = l((ml) => {
    var Jw = Oo(),
      eT = On(),
      tT = eT.concat("length", "prototype");
    ml.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Jw(t, tT);
      };
  });
  var bl = l((El) => {
    El.f = Object.getOwnPropertySymbols;
  });
  var Il = l((_H, _l) => {
    var rT = Ar(),
      nT = Ye(),
      iT = yl(),
      oT = bl(),
      aT = Sr(),
      sT = nT([].concat);
    _l.exports =
      rT("Reflect", "ownKeys") ||
      function (t) {
        var r = iT.f(aT(t)),
          n = oT.f;
        return n ? sT(r, n(t)) : r;
      };
  });
  var Tl = l((IH, wl) => {
    var uT = _t(),
      cT = Il(),
      lT = fo(),
      fT = Cr();
    wl.exports = function (e, t) {
      for (var r = cT(t), n = fT.f, i = lT.f, o = 0; o < r.length; o++) {
        var a = r[o];
        uT(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var Ol = l((wH, xl) => {
    var dT = jt(),
      pT = at(),
      vT = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = hT[gT(e)];
        return r == yT ? !0 : r == mT ? !1 : pT(t) ? dT(t) : !!t;
      },
      gT = (Lr.normalize = function (e) {
        return String(e).replace(vT, ".").toLowerCase();
      }),
      hT = (Lr.data = {}),
      mT = (Lr.NATIVE = "N"),
      yT = (Lr.POLYFILL = "P");
    xl.exports = Lr;
  });
  var Sl = l((TH, Al) => {
    var Ao = ye(),
      ET = fo().f,
      bT = In(),
      _T = il(),
      IT = bn(),
      wT = Tl(),
      TT = Ol();
    Al.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        _;
      if (
        (n
          ? (a = Ao)
          : i
          ? (a = Ao[r] || IT(r, {}))
          : (a = (Ao[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((_ = ET(a, s)), (u = _ && _.value)) : (u = a[s]),
            (o = TT(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            wT(f, u);
          }
          (e.sham || (u && u.sham)) && bT(f, "sham", !0), _T(a, s, f, e);
        }
    };
  });
  var Rl = l((xH, Cl) => {
    var xT = Oo(),
      OT = On();
    Cl.exports =
      Object.keys ||
      function (t) {
        return xT(t, OT);
      };
  });
  var Nl = l((OH, Ll) => {
    var AT = Nt(),
      ST = Cr(),
      CT = Sr(),
      RT = Or(),
      LT = Rl();
    Ll.exports = AT
      ? Object.defineProperties
      : function (t, r) {
          CT(t);
          for (var n = RT(r), i = LT(r), o = i.length, a = 0, s; o > a; )
            ST.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var ql = l((AH, Pl) => {
    var NT = Ar();
    Pl.exports = NT("document", "documentElement");
  });
  var Wl = l((SH, Vl) => {
    var PT = Sr(),
      qT = Nl(),
      Ml = On(),
      MT = wn(),
      FT = ql(),
      DT = co(),
      kT = go(),
      Fl = ">",
      Dl = "<",
      Co = "prototype",
      Ro = "script",
      Gl = kT("IE_PROTO"),
      So = function () {},
      Ul = function (e) {
        return Dl + Ro + Fl + e + Dl + "/" + Ro + Fl;
      },
      kl = function (e) {
        e.write(Ul("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      GT = function () {
        var e = DT("iframe"),
          t = "java" + Ro + ":",
          r;
        return (
          (e.style.display = "none"),
          FT.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Ul("document.F=Object")),
          r.close(),
          r.F
        );
      },
      An,
      Sn = function () {
        try {
          An = new ActiveXObject("htmlfile");
        } catch {}
        Sn =
          typeof document < "u"
            ? document.domain && An
              ? kl(An)
              : GT()
            : kl(An);
        for (var e = Ml.length; e--; ) delete Sn[Co][Ml[e]];
        return Sn();
      };
    MT[Gl] = !0;
    Vl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((So[Co] = PT(t)), (n = new So()), (So[Co] = null), (n[Gl] = t))
            : (n = Sn()),
          r === void 0 ? n : qT(n, r)
        );
      };
  });
  var Bl = l((CH, Hl) => {
    var UT = ao(),
      VT = Wl(),
      WT = Cr(),
      Lo = UT("unscopables"),
      No = Array.prototype;
    No[Lo] == null && WT.f(No, Lo, { configurable: !0, value: VT(null) });
    Hl.exports = function (e) {
      No[Lo][e] = !0;
    };
  });
  var Xl = l(() => {
    "use strict";
    var HT = Sl(),
      BT = To().includes,
      XT = Bl();
    HT(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return BT(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    XT("includes");
  });
  var zl = l((NH, jl) => {
    var jT = ye(),
      zT = Ye();
    jl.exports = function (e, t) {
      return zT(jT[e].prototype[t]);
    };
  });
  var Yl = l((PH, Kl) => {
    Xl();
    var KT = zl();
    Kl.exports = KT("Array", "includes");
  });
  var $l = l((qH, Ql) => {
    var YT = Yl();
    Ql.exports = YT;
  });
  var Jl = l((MH, Zl) => {
    var QT = $l();
    Zl.exports = QT;
  });
  var Po = l((FH, ef) => {
    var $T =
      typeof global == "object" && global && global.Object === Object && global;
    ef.exports = $T;
  });
  var $e = l((DH, tf) => {
    var ZT = Po(),
      JT = typeof self == "object" && self && self.Object === Object && self,
      e0 = ZT || JT || Function("return this")();
    tf.exports = e0;
  });
  var Yt = l((kH, rf) => {
    var t0 = $e(),
      r0 = t0.Symbol;
    rf.exports = r0;
  });
  var sf = l((GH, af) => {
    var nf = Yt(),
      of = Object.prototype,
      n0 = of.hasOwnProperty,
      i0 = of.toString,
      Nr = nf ? nf.toStringTag : void 0;
    function o0(e) {
      var t = n0.call(e, Nr),
        r = e[Nr];
      try {
        e[Nr] = void 0;
        var n = !0;
      } catch {}
      var i = i0.call(e);
      return n && (t ? (e[Nr] = r) : delete e[Nr]), i;
    }
    af.exports = o0;
  });
  var cf = l((UH, uf) => {
    var a0 = Object.prototype,
      s0 = a0.toString;
    function u0(e) {
      return s0.call(e);
    }
    uf.exports = u0;
  });
  var wt = l((VH, df) => {
    var lf = Yt(),
      c0 = sf(),
      l0 = cf(),
      f0 = "[object Null]",
      d0 = "[object Undefined]",
      ff = lf ? lf.toStringTag : void 0;
    function p0(e) {
      return e == null
        ? e === void 0
          ? d0
          : f0
        : ff && ff in Object(e)
        ? c0(e)
        : l0(e);
    }
    df.exports = p0;
  });
  var qo = l((WH, pf) => {
    function v0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    pf.exports = v0;
  });
  var Mo = l((HH, vf) => {
    var g0 = qo(),
      h0 = g0(Object.getPrototypeOf, Object);
    vf.exports = h0;
  });
  var vt = l((BH, gf) => {
    function m0(e) {
      return e != null && typeof e == "object";
    }
    gf.exports = m0;
  });
  var Fo = l((XH, mf) => {
    var y0 = wt(),
      E0 = Mo(),
      b0 = vt(),
      _0 = "[object Object]",
      I0 = Function.prototype,
      w0 = Object.prototype,
      hf = I0.toString,
      T0 = w0.hasOwnProperty,
      x0 = hf.call(Object);
    function O0(e) {
      if (!b0(e) || y0(e) != _0) return !1;
      var t = E0(e);
      if (t === null) return !0;
      var r = T0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && hf.call(r) == x0;
    }
    mf.exports = O0;
  });
  var yf = l((Do) => {
    "use strict";
    Object.defineProperty(Do, "__esModule", { value: !0 });
    Do.default = A0;
    function A0(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Ef = l((Go, ko) => {
    "use strict";
    Object.defineProperty(Go, "__esModule", { value: !0 });
    var S0 = yf(),
      C0 = R0(S0);
    function R0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Qt;
    typeof self < "u"
      ? (Qt = self)
      : typeof window < "u"
      ? (Qt = window)
      : typeof global < "u"
      ? (Qt = global)
      : typeof ko < "u"
      ? (Qt = ko)
      : (Qt = Function("return this")());
    var L0 = (0, C0.default)(Qt);
    Go.default = L0;
  });
  var Uo = l((Pr) => {
    "use strict";
    Pr.__esModule = !0;
    Pr.ActionTypes = void 0;
    Pr.default = wf;
    var N0 = Fo(),
      P0 = If(N0),
      q0 = Ef(),
      bf = If(q0);
    function If(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var _f = (Pr.ActionTypes = { INIT: "@@redux/INIT" });
    function wf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(wf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function _() {
        return o;
      }
      function p(w) {
        if (typeof w != "function")
          throw new Error("Expected listener to be a function.");
        var O = !0;
        return (
          f(),
          s.push(w),
          function () {
            if (O) {
              (O = !1), f();
              var P = s.indexOf(w);
              s.splice(P, 1);
            }
          }
        );
      }
      function E(w) {
        if (!(0, P0.default)(w))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof w.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, w));
        } finally {
          u = !1;
        }
        for (var O = (a = s), T = 0; T < O.length; T++) O[T]();
        return w;
      }
      function m(w) {
        if (typeof w != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = w), E({ type: _f.INIT });
      }
      function y() {
        var w,
          O = p;
        return (
          (w = {
            subscribe: function (P) {
              if (typeof P != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                P.next && P.next(_());
              }
              L();
              var F = O(L);
              return { unsubscribe: F };
            },
          }),
          (w[bf.default] = function () {
            return this;
          }),
          w
        );
      }
      return (
        E({ type: _f.INIT }),
        (n = { dispatch: E, subscribe: p, getState: _, replaceReducer: m }),
        (n[bf.default] = y),
        n
      );
    }
  });
  var Wo = l((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = M0;
    function M0(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Of = l((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = U0;
    var Tf = Uo(),
      F0 = Fo(),
      YH = xf(F0),
      D0 = Wo(),
      QH = xf(D0);
    function xf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function k0(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function G0(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Tf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Tf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function U0(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        G0(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          _ = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var E = !1, m = {}, y = 0; y < o.length; y++) {
          var w = o[y],
            O = r[w],
            T = f[w],
            P = O(T, _);
          if (typeof P > "u") {
            var L = k0(w, _);
            throw new Error(L);
          }
          (m[w] = P), (E = E || P !== T);
        }
        return E ? m : f;
      };
    }
  });
  var Sf = l((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = V0;
    function Af(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function V0(e, t) {
      if (typeof e == "function") return Af(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Af(a, t));
      }
      return n;
    }
  });
  var jo = l((Xo) => {
    "use strict";
    Xo.__esModule = !0;
    Xo.default = W0;
    function W0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Cf = l((zo) => {
    "use strict";
    zo.__esModule = !0;
    var H0 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    zo.default = z0;
    var B0 = jo(),
      X0 = j0(B0);
    function j0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function z0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            _ = {
              getState: s.getState,
              dispatch: function (E) {
                return u(E);
              },
            };
          return (
            (f = t.map(function (p) {
              return p(_);
            })),
            (u = X0.default.apply(void 0, f)(s.dispatch)),
            H0({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Ko = l((Be) => {
    "use strict";
    Be.__esModule = !0;
    Be.compose =
      Be.applyMiddleware =
      Be.bindActionCreators =
      Be.combineReducers =
      Be.createStore =
        void 0;
    var K0 = Uo(),
      Y0 = $t(K0),
      Q0 = Of(),
      $0 = $t(Q0),
      Z0 = Sf(),
      J0 = $t(Z0),
      ex = Cf(),
      tx = $t(ex),
      rx = jo(),
      nx = $t(rx),
      ix = Wo(),
      tB = $t(ix);
    function $t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Be.createStore = Y0.default;
    Be.combineReducers = $0.default;
    Be.bindActionCreators = J0.default;
    Be.applyMiddleware = tx.default;
    Be.compose = nx.default;
  });
  var Ze,
    Yo,
    st,
    ox,
    ax,
    Cn,
    sx,
    Qo = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Yo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (ox = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (ax = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Cn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (sx = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ue,
    ux,
    Rn = me(() => {
      "use strict";
      (Ue = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (ux = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var cx,
    Rf = me(() => {
      "use strict";
      cx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var lx,
    fx,
    dx,
    px,
    vx,
    gx,
    hx,
    $o,
    Lf = me(() => {
      "use strict";
      Rn();
      ({
        TRANSFORM_MOVE: lx,
        TRANSFORM_SCALE: fx,
        TRANSFORM_ROTATE: dx,
        TRANSFORM_SKEW: px,
        STYLE_SIZE: vx,
        STYLE_FILTER: gx,
        STYLE_FONT_VARIATION: hx,
      } = Ue),
        ($o = {
          [lx]: !0,
          [fx]: !0,
          [dx]: !0,
          [px]: !0,
          [vx]: !0,
          [gx]: !0,
          [hx]: !0,
        });
    });
  var Te = {};
  Ge(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Px,
    IX2_ANIMATION_FRAME_CHANGED: () => Ax,
    IX2_CLEAR_REQUESTED: () => Tx,
    IX2_ELEMENT_STATE_CHANGED: () => Nx,
    IX2_EVENT_LISTENER_ADDED: () => xx,
    IX2_EVENT_STATE_CHANGED: () => Ox,
    IX2_INSTANCE_ADDED: () => Cx,
    IX2_INSTANCE_REMOVED: () => Lx,
    IX2_INSTANCE_STARTED: () => Rx,
    IX2_MEDIA_QUERIES_DEFINED: () => Mx,
    IX2_PARAMETER_CHANGED: () => Sx,
    IX2_PLAYBACK_REQUESTED: () => Ix,
    IX2_PREVIEW_REQUESTED: () => _x,
    IX2_RAW_DATA_IMPORTED: () => mx,
    IX2_SESSION_INITIALIZED: () => yx,
    IX2_SESSION_STARTED: () => Ex,
    IX2_SESSION_STOPPED: () => bx,
    IX2_STOP_REQUESTED: () => wx,
    IX2_TEST_FRAME_RENDERED: () => Fx,
    IX2_VIEWPORT_WIDTH_CHANGED: () => qx,
  });
  var mx,
    yx,
    Ex,
    bx,
    _x,
    Ix,
    wx,
    Tx,
    xx,
    Ox,
    Ax,
    Sx,
    Cx,
    Rx,
    Lx,
    Nx,
    Px,
    qx,
    Mx,
    Fx,
    Nf = me(() => {
      "use strict";
      (mx = "IX2_RAW_DATA_IMPORTED"),
        (yx = "IX2_SESSION_INITIALIZED"),
        (Ex = "IX2_SESSION_STARTED"),
        (bx = "IX2_SESSION_STOPPED"),
        (_x = "IX2_PREVIEW_REQUESTED"),
        (Ix = "IX2_PLAYBACK_REQUESTED"),
        (wx = "IX2_STOP_REQUESTED"),
        (Tx = "IX2_CLEAR_REQUESTED"),
        (xx = "IX2_EVENT_LISTENER_ADDED"),
        (Ox = "IX2_EVENT_STATE_CHANGED"),
        (Ax = "IX2_ANIMATION_FRAME_CHANGED"),
        (Sx = "IX2_PARAMETER_CHANGED"),
        (Cx = "IX2_INSTANCE_ADDED"),
        (Rx = "IX2_INSTANCE_STARTED"),
        (Lx = "IX2_INSTANCE_REMOVED"),
        (Nx = "IX2_ELEMENT_STATE_CHANGED"),
        (Px = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (qx = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Mx = "IX2_MEDIA_QUERIES_DEFINED"),
        (Fx = "IX2_TEST_FRAME_RENDERED");
    });
  var Ne = {};
  Ge(Ne, {
    ABSTRACT_NODE: () => qO,
    AUTO: () => wO,
    BACKGROUND: () => mO,
    BACKGROUND_COLOR: () => hO,
    BAR_DELIMITER: () => OO,
    BORDER_COLOR: () => yO,
    BOUNDARY_SELECTOR: () => Vx,
    CHILDREN: () => AO,
    COLON_DELIMITER: () => xO,
    COLOR: () => EO,
    COMMA_DELIMITER: () => TO,
    CONFIG_UNIT: () => Yx,
    CONFIG_VALUE: () => Xx,
    CONFIG_X_UNIT: () => jx,
    CONFIG_X_VALUE: () => Wx,
    CONFIG_Y_UNIT: () => zx,
    CONFIG_Y_VALUE: () => Hx,
    CONFIG_Z_UNIT: () => Kx,
    CONFIG_Z_VALUE: () => Bx,
    DISPLAY: () => bO,
    FILTER: () => dO,
    FLEX: () => _O,
    FONT_VARIATION_SETTINGS: () => pO,
    HEIGHT: () => gO,
    HTML_ELEMENT: () => NO,
    IMMEDIATE_CHILDREN: () => SO,
    IX2_ID_DELIMITER: () => Dx,
    OPACITY: () => fO,
    PARENT: () => RO,
    PLAIN_OBJECT: () => PO,
    PRESERVE_3D: () => LO,
    RENDER_GENERAL: () => FO,
    RENDER_PLUGIN: () => kO,
    RENDER_STYLE: () => DO,
    RENDER_TRANSFORM: () => MO,
    ROTATE_X: () => oO,
    ROTATE_Y: () => aO,
    ROTATE_Z: () => sO,
    SCALE_3D: () => iO,
    SCALE_X: () => tO,
    SCALE_Y: () => rO,
    SCALE_Z: () => nO,
    SIBLINGS: () => CO,
    SKEW: () => uO,
    SKEW_X: () => cO,
    SKEW_Y: () => lO,
    TRANSFORM: () => Qx,
    TRANSLATE_3D: () => eO,
    TRANSLATE_X: () => $x,
    TRANSLATE_Y: () => Zx,
    TRANSLATE_Z: () => Jx,
    WF_PAGE: () => kx,
    WIDTH: () => vO,
    WILL_CHANGE: () => IO,
    W_MOD_IX: () => Ux,
    W_MOD_JS: () => Gx,
  });
  var Dx,
    kx,
    Gx,
    Ux,
    Vx,
    Wx,
    Hx,
    Bx,
    Xx,
    jx,
    zx,
    Kx,
    Yx,
    Qx,
    $x,
    Zx,
    Jx,
    eO,
    tO,
    rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    vO,
    gO,
    hO,
    mO,
    yO,
    EO,
    bO,
    _O,
    IO,
    wO,
    TO,
    xO,
    OO,
    AO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    MO,
    FO,
    DO,
    kO,
    Pf = me(() => {
      "use strict";
      (Dx = "|"),
        (kx = "data-wf-page"),
        (Gx = "w-mod-js"),
        (Ux = "w-mod-ix"),
        (Vx = ".w-dyn-item"),
        (Wx = "xValue"),
        (Hx = "yValue"),
        (Bx = "zValue"),
        (Xx = "value"),
        (jx = "xUnit"),
        (zx = "yUnit"),
        (Kx = "zUnit"),
        (Yx = "unit"),
        (Qx = "transform"),
        ($x = "translateX"),
        (Zx = "translateY"),
        (Jx = "translateZ"),
        (eO = "translate3d"),
        (tO = "scaleX"),
        (rO = "scaleY"),
        (nO = "scaleZ"),
        (iO = "scale3d"),
        (oO = "rotateX"),
        (aO = "rotateY"),
        (sO = "rotateZ"),
        (uO = "skew"),
        (cO = "skewX"),
        (lO = "skewY"),
        (fO = "opacity"),
        (dO = "filter"),
        (pO = "font-variation-settings"),
        (vO = "width"),
        (gO = "height"),
        (hO = "backgroundColor"),
        (mO = "background"),
        (yO = "borderColor"),
        (EO = "color"),
        (bO = "display"),
        (_O = "flex"),
        (IO = "willChange"),
        (wO = "AUTO"),
        (TO = ","),
        (xO = ":"),
        (OO = "|"),
        (AO = "CHILDREN"),
        (SO = "IMMEDIATE_CHILDREN"),
        (CO = "SIBLINGS"),
        (RO = "PARENT"),
        (LO = "preserve-3d"),
        (NO = "HTML_ELEMENT"),
        (PO = "PLAIN_OBJECT"),
        (qO = "ABSTRACT_NODE"),
        (MO = "RENDER_TRANSFORM"),
        (FO = "RENDER_GENERAL"),
        (DO = "RENDER_STYLE"),
        (kO = "RENDER_PLUGIN");
    });
  var qf = {};
  Ge(qf, {
    ActionAppliesTo: () => ux,
    ActionTypeConsts: () => Ue,
    EventAppliesTo: () => Yo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => ox,
    EventLimitAffectedElements: () => ax,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Ne,
    InteractionTypeConsts: () => cx,
    QuickEffectDirectionConsts: () => sx,
    QuickEffectIds: () => Cn,
    ReducedMotionTypes: () => $o,
  });
  var Ve = me(() => {
    "use strict";
    Qo();
    Rn();
    Rf();
    Lf();
    Nf();
    Pf();
    Rn();
    Qo();
  });
  var GO,
    Mf,
    Ff = me(() => {
      "use strict";
      Ve();
      ({ IX2_RAW_DATA_IMPORTED: GO } = Te),
        (Mf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case GO:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Zt = l((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var UO =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    be.clone = Nn;
    be.addLast = Gf;
    be.addFirst = Uf;
    be.removeLast = Vf;
    be.removeFirst = Wf;
    be.insert = Hf;
    be.removeAt = Bf;
    be.replaceAt = Xf;
    be.getIn = Pn;
    be.set = qn;
    be.setIn = Mn;
    be.update = zf;
    be.updateIn = Kf;
    be.merge = Yf;
    be.mergeDeep = Qf;
    be.mergeIn = $f;
    be.omit = Zf;
    be.addDefaults = Jf;
    var Df = "INVALID_ARGS";
    function kf(e) {
      throw new Error(e);
    }
    function Zo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var VO = {}.hasOwnProperty;
    function Nn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Zo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function We(e, t, r) {
      var n = r;
      n == null && kf(Df);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var _ = Zo(f);
          if (_.length)
            for (var p = 0; p <= _.length; p++) {
              var E = _[p];
              if (!(e && n[E] !== void 0)) {
                var m = f[E];
                t && Ln(n[E]) && Ln(m) && (m = We(e, t, n[E], m)),
                  !(m === void 0 || m === n[E]) &&
                    (i || ((i = !0), (n = Nn(n))), (n[E] = m));
              }
            }
        }
      }
      return n;
    }
    function Ln(e) {
      var t = typeof e > "u" ? "undefined" : UO(e);
      return e != null && (t === "object" || t === "function");
    }
    function Gf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Uf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Vf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Wf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Hf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Bf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Xf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Pn(e, t) {
      if ((!Array.isArray(t) && kf(Df), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function qn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Nn(i);
      return (o[t] = r), o;
    }
    function jf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Ln(e) && Ln(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = jf(a, t, r, n + 1);
      }
      return qn(e, o, i);
    }
    function Mn(e, t, r) {
      return t.length ? jf(e, t, r, 0) : r;
    }
    function zf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return qn(e, t, i);
    }
    function Kf(e, t, r) {
      var n = Pn(e, t),
        i = r(n);
      return Mn(e, t, i);
    }
    function Yf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? We.call.apply(We, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : We(!1, !1, e, t, r, n, i, o);
    }
    function Qf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? We.call.apply(We, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : We(!1, !0, e, t, r, n, i, o);
    }
    function $f(e, t, r, n, i, o, a) {
      var s = Pn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          _ = Array(f > 7 ? f - 7 : 0),
          p = 7;
        p < f;
        p++
      )
        _[p - 7] = arguments[p];
      return (
        _.length
          ? (u = We.call.apply(We, [null, !1, !1, s, r, n, i, o, a].concat(_)))
          : (u = We(!1, !1, s, r, n, i, o, a)),
        Mn(e, t, u)
      );
    }
    function Zf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (VO.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Zo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Jf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? We.call.apply(We, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : We(!0, !1, e, t, r, n, i, o);
    }
    var WO = {
      clone: Nn,
      addLast: Gf,
      addFirst: Uf,
      removeLast: Vf,
      removeFirst: Wf,
      insert: Hf,
      removeAt: Bf,
      replaceAt: Xf,
      getIn: Pn,
      set: qn,
      setIn: Mn,
      update: zf,
      updateIn: Kf,
      merge: Yf,
      mergeDeep: Qf,
      mergeIn: $f,
      omit: Zf,
      addDefaults: Jf,
    };
    be.default = WO;
  });
  var td,
    HO,
    BO,
    XO,
    jO,
    zO,
    ed,
    rd,
    nd = me(() => {
      "use strict";
      Ve();
      (td = de(Zt())),
        ({
          IX2_PREVIEW_REQUESTED: HO,
          IX2_PLAYBACK_REQUESTED: BO,
          IX2_STOP_REQUESTED: XO,
          IX2_CLEAR_REQUESTED: jO,
        } = Te),
        (zO = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (ed = Object.create(null, {
          [HO]: { value: "preview" },
          [BO]: { value: "playback" },
          [XO]: { value: "stop" },
          [jO]: { value: "clear" },
        })),
        (rd = (e = zO, t) => {
          if (t.type in ed) {
            let r = [ed[t.type]];
            return (0, td.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Me,
    KO,
    YO,
    QO,
    $O,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    id,
    iA,
    od,
    ad = me(() => {
      "use strict";
      Ve();
      (Me = de(Zt())),
        ({
          IX2_SESSION_INITIALIZED: KO,
          IX2_SESSION_STARTED: YO,
          IX2_TEST_FRAME_RENDERED: QO,
          IX2_SESSION_STOPPED: $O,
          IX2_EVENT_LISTENER_ADDED: ZO,
          IX2_EVENT_STATE_CHANGED: JO,
          IX2_ANIMATION_FRAME_CHANGED: eA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: tA,
          IX2_VIEWPORT_WIDTH_CHANGED: rA,
          IX2_MEDIA_QUERIES_DEFINED: nA,
        } = Te),
        (id = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (iA = 20),
        (od = (e = id, t) => {
          switch (t.type) {
            case KO: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Me.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case YO:
              return (0, Me.set)(e, "active", !0);
            case QO: {
              let {
                payload: { step: r = iA },
              } = t;
              return (0, Me.set)(e, "tick", e.tick + r);
            }
            case $O:
              return id;
            case eA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Me.set)(e, "tick", r);
            }
            case ZO: {
              let r = (0, Me.addLast)(e.eventListeners, t.payload);
              return (0, Me.set)(e, "eventListeners", r);
            }
            case JO: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Me.setIn)(e, ["eventState", r], n);
            }
            case tA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Me.setIn)(e, ["playbackState", r], n);
            }
            case rA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Me.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case nA:
              return (0, Me.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var ud = l((_B, sd) => {
    function oA() {
      (this.__data__ = []), (this.size = 0);
    }
    sd.exports = oA;
  });
  var Fn = l((IB, cd) => {
    function aA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    cd.exports = aA;
  });
  var qr = l((wB, ld) => {
    var sA = Fn();
    function uA(e, t) {
      for (var r = e.length; r--; ) if (sA(e[r][0], t)) return r;
      return -1;
    }
    ld.exports = uA;
  });
  var dd = l((TB, fd) => {
    var cA = qr(),
      lA = Array.prototype,
      fA = lA.splice;
    function dA(e) {
      var t = this.__data__,
        r = cA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : fA.call(t, r, 1), --this.size, !0;
    }
    fd.exports = dA;
  });
  var vd = l((xB, pd) => {
    var pA = qr();
    function vA(e) {
      var t = this.__data__,
        r = pA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    pd.exports = vA;
  });
  var hd = l((OB, gd) => {
    var gA = qr();
    function hA(e) {
      return gA(this.__data__, e) > -1;
    }
    gd.exports = hA;
  });
  var yd = l((AB, md) => {
    var mA = qr();
    function yA(e, t) {
      var r = this.__data__,
        n = mA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    md.exports = yA;
  });
  var Mr = l((SB, Ed) => {
    var EA = ud(),
      bA = dd(),
      _A = vd(),
      IA = hd(),
      wA = yd();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = EA;
    Jt.prototype.delete = bA;
    Jt.prototype.get = _A;
    Jt.prototype.has = IA;
    Jt.prototype.set = wA;
    Ed.exports = Jt;
  });
  var _d = l((CB, bd) => {
    var TA = Mr();
    function xA() {
      (this.__data__ = new TA()), (this.size = 0);
    }
    bd.exports = xA;
  });
  var wd = l((RB, Id) => {
    function OA(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Id.exports = OA;
  });
  var xd = l((LB, Td) => {
    function AA(e) {
      return this.__data__.get(e);
    }
    Td.exports = AA;
  });
  var Ad = l((NB, Od) => {
    function SA(e) {
      return this.__data__.has(e);
    }
    Od.exports = SA;
  });
  var ut = l((PB, Sd) => {
    function CA(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Sd.exports = CA;
  });
  var Jo = l((qB, Cd) => {
    var RA = wt(),
      LA = ut(),
      NA = "[object AsyncFunction]",
      PA = "[object Function]",
      qA = "[object GeneratorFunction]",
      MA = "[object Proxy]";
    function FA(e) {
      if (!LA(e)) return !1;
      var t = RA(e);
      return t == PA || t == qA || t == NA || t == MA;
    }
    Cd.exports = FA;
  });
  var Ld = l((MB, Rd) => {
    var DA = $e(),
      kA = DA["__core-js_shared__"];
    Rd.exports = kA;
  });
  var qd = l((FB, Pd) => {
    var ea = Ld(),
      Nd = (function () {
        var e = /[^.]+$/.exec((ea && ea.keys && ea.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function GA(e) {
      return !!Nd && Nd in e;
    }
    Pd.exports = GA;
  });
  var ta = l((DB, Md) => {
    var UA = Function.prototype,
      VA = UA.toString;
    function WA(e) {
      if (e != null) {
        try {
          return VA.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Md.exports = WA;
  });
  var Dd = l((kB, Fd) => {
    var HA = Jo(),
      BA = qd(),
      XA = ut(),
      jA = ta(),
      zA = /[\\^$.*+?()[\]{}|]/g,
      KA = /^\[object .+?Constructor\]$/,
      YA = Function.prototype,
      QA = Object.prototype,
      $A = YA.toString,
      ZA = QA.hasOwnProperty,
      JA = RegExp(
        "^" +
          $A
            .call(ZA)
            .replace(zA, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function eS(e) {
      if (!XA(e) || BA(e)) return !1;
      var t = HA(e) ? JA : KA;
      return t.test(jA(e));
    }
    Fd.exports = eS;
  });
  var Gd = l((GB, kd) => {
    function tS(e, t) {
      return e?.[t];
    }
    kd.exports = tS;
  });
  var Tt = l((UB, Ud) => {
    var rS = Dd(),
      nS = Gd();
    function iS(e, t) {
      var r = nS(e, t);
      return rS(r) ? r : void 0;
    }
    Ud.exports = iS;
  });
  var Dn = l((VB, Vd) => {
    var oS = Tt(),
      aS = $e(),
      sS = oS(aS, "Map");
    Vd.exports = sS;
  });
  var Fr = l((WB, Wd) => {
    var uS = Tt(),
      cS = uS(Object, "create");
    Wd.exports = cS;
  });
  var Xd = l((HB, Bd) => {
    var Hd = Fr();
    function lS() {
      (this.__data__ = Hd ? Hd(null) : {}), (this.size = 0);
    }
    Bd.exports = lS;
  });
  var zd = l((BB, jd) => {
    function fS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    jd.exports = fS;
  });
  var Yd = l((XB, Kd) => {
    var dS = Fr(),
      pS = "__lodash_hash_undefined__",
      vS = Object.prototype,
      gS = vS.hasOwnProperty;
    function hS(e) {
      var t = this.__data__;
      if (dS) {
        var r = t[e];
        return r === pS ? void 0 : r;
      }
      return gS.call(t, e) ? t[e] : void 0;
    }
    Kd.exports = hS;
  });
  var $d = l((jB, Qd) => {
    var mS = Fr(),
      yS = Object.prototype,
      ES = yS.hasOwnProperty;
    function bS(e) {
      var t = this.__data__;
      return mS ? t[e] !== void 0 : ES.call(t, e);
    }
    Qd.exports = bS;
  });
  var Jd = l((zB, Zd) => {
    var _S = Fr(),
      IS = "__lodash_hash_undefined__";
    function wS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = _S && t === void 0 ? IS : t),
        this
      );
    }
    Zd.exports = wS;
  });
  var tp = l((KB, ep) => {
    var TS = Xd(),
      xS = zd(),
      OS = Yd(),
      AS = $d(),
      SS = Jd();
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = TS;
    er.prototype.delete = xS;
    er.prototype.get = OS;
    er.prototype.has = AS;
    er.prototype.set = SS;
    ep.exports = er;
  });
  var ip = l((YB, np) => {
    var rp = tp(),
      CS = Mr(),
      RS = Dn();
    function LS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new rp(),
          map: new (RS || CS)(),
          string: new rp(),
        });
    }
    np.exports = LS;
  });
  var ap = l((QB, op) => {
    function NS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    op.exports = NS;
  });
  var Dr = l(($B, sp) => {
    var PS = ap();
    function qS(e, t) {
      var r = e.__data__;
      return PS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    sp.exports = qS;
  });
  var cp = l((ZB, up) => {
    var MS = Dr();
    function FS(e) {
      var t = MS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    up.exports = FS;
  });
  var fp = l((JB, lp) => {
    var DS = Dr();
    function kS(e) {
      return DS(this, e).get(e);
    }
    lp.exports = kS;
  });
  var pp = l((e5, dp) => {
    var GS = Dr();
    function US(e) {
      return GS(this, e).has(e);
    }
    dp.exports = US;
  });
  var gp = l((t5, vp) => {
    var VS = Dr();
    function WS(e, t) {
      var r = VS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    vp.exports = WS;
  });
  var kn = l((r5, hp) => {
    var HS = ip(),
      BS = cp(),
      XS = fp(),
      jS = pp(),
      zS = gp();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = HS;
    tr.prototype.delete = BS;
    tr.prototype.get = XS;
    tr.prototype.has = jS;
    tr.prototype.set = zS;
    hp.exports = tr;
  });
  var yp = l((n5, mp) => {
    var KS = Mr(),
      YS = Dn(),
      QS = kn(),
      $S = 200;
    function ZS(e, t) {
      var r = this.__data__;
      if (r instanceof KS) {
        var n = r.__data__;
        if (!YS || n.length < $S - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new QS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    mp.exports = ZS;
  });
  var ra = l((i5, Ep) => {
    var JS = Mr(),
      eC = _d(),
      tC = wd(),
      rC = xd(),
      nC = Ad(),
      iC = yp();
    function rr(e) {
      var t = (this.__data__ = new JS(e));
      this.size = t.size;
    }
    rr.prototype.clear = eC;
    rr.prototype.delete = tC;
    rr.prototype.get = rC;
    rr.prototype.has = nC;
    rr.prototype.set = iC;
    Ep.exports = rr;
  });
  var _p = l((o5, bp) => {
    var oC = "__lodash_hash_undefined__";
    function aC(e) {
      return this.__data__.set(e, oC), this;
    }
    bp.exports = aC;
  });
  var wp = l((a5, Ip) => {
    function sC(e) {
      return this.__data__.has(e);
    }
    Ip.exports = sC;
  });
  var xp = l((s5, Tp) => {
    var uC = kn(),
      cC = _p(),
      lC = wp();
    function Gn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new uC(); ++t < r; ) this.add(e[t]);
    }
    Gn.prototype.add = Gn.prototype.push = cC;
    Gn.prototype.has = lC;
    Tp.exports = Gn;
  });
  var Ap = l((u5, Op) => {
    function fC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Op.exports = fC;
  });
  var Cp = l((c5, Sp) => {
    function dC(e, t) {
      return e.has(t);
    }
    Sp.exports = dC;
  });
  var na = l((l5, Rp) => {
    var pC = xp(),
      vC = Ap(),
      gC = Cp(),
      hC = 1,
      mC = 2;
    function yC(e, t, r, n, i, o) {
      var a = r & hC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        _ = o.get(t);
      if (f && _) return f == t && _ == e;
      var p = -1,
        E = !0,
        m = r & mC ? new pC() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var y = e[p],
          w = t[p];
        if (n) var O = a ? n(w, y, p, t, e, o) : n(y, w, p, e, t, o);
        if (O !== void 0) {
          if (O) continue;
          E = !1;
          break;
        }
        if (m) {
          if (
            !vC(t, function (T, P) {
              if (!gC(m, P) && (y === T || i(y, T, r, n, o))) return m.push(P);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(y === w || i(y, w, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    Rp.exports = yC;
  });
  var Np = l((f5, Lp) => {
    var EC = $e(),
      bC = EC.Uint8Array;
    Lp.exports = bC;
  });
  var qp = l((d5, Pp) => {
    function _C(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Pp.exports = _C;
  });
  var Fp = l((p5, Mp) => {
    function IC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Mp.exports = IC;
  });
  var Vp = l((v5, Up) => {
    var Dp = Yt(),
      kp = Np(),
      wC = Fn(),
      TC = na(),
      xC = qp(),
      OC = Fp(),
      AC = 1,
      SC = 2,
      CC = "[object Boolean]",
      RC = "[object Date]",
      LC = "[object Error]",
      NC = "[object Map]",
      PC = "[object Number]",
      qC = "[object RegExp]",
      MC = "[object Set]",
      FC = "[object String]",
      DC = "[object Symbol]",
      kC = "[object ArrayBuffer]",
      GC = "[object DataView]",
      Gp = Dp ? Dp.prototype : void 0,
      ia = Gp ? Gp.valueOf : void 0;
    function UC(e, t, r, n, i, o, a) {
      switch (r) {
        case GC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case kC:
          return !(e.byteLength != t.byteLength || !o(new kp(e), new kp(t)));
        case CC:
        case RC:
        case PC:
          return wC(+e, +t);
        case LC:
          return e.name == t.name && e.message == t.message;
        case qC:
        case FC:
          return e == t + "";
        case NC:
          var s = xC;
        case MC:
          var u = n & AC;
          if ((s || (s = OC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= SC), a.set(e, t);
          var _ = TC(s(e), s(t), n, i, o, a);
          return a.delete(e), _;
        case DC:
          if (ia) return ia.call(e) == ia.call(t);
      }
      return !1;
    }
    Up.exports = UC;
  });
  var Un = l((g5, Wp) => {
    function VC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Wp.exports = VC;
  });
  var xe = l((h5, Hp) => {
    var WC = Array.isArray;
    Hp.exports = WC;
  });
  var oa = l((m5, Bp) => {
    var HC = Un(),
      BC = xe();
    function XC(e, t, r) {
      var n = t(e);
      return BC(e) ? n : HC(n, r(e));
    }
    Bp.exports = XC;
  });
  var jp = l((y5, Xp) => {
    function jC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Xp.exports = jC;
  });
  var aa = l((E5, zp) => {
    function zC() {
      return [];
    }
    zp.exports = zC;
  });
  var sa = l((b5, Yp) => {
    var KC = jp(),
      YC = aa(),
      QC = Object.prototype,
      $C = QC.propertyIsEnumerable,
      Kp = Object.getOwnPropertySymbols,
      ZC = Kp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                KC(Kp(e), function (t) {
                  return $C.call(e, t);
                }));
          }
        : YC;
    Yp.exports = ZC;
  });
  var $p = l((_5, Qp) => {
    function JC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Qp.exports = JC;
  });
  var Jp = l((I5, Zp) => {
    var eR = wt(),
      tR = vt(),
      rR = "[object Arguments]";
    function nR(e) {
      return tR(e) && eR(e) == rR;
    }
    Zp.exports = nR;
  });
  var kr = l((w5, rv) => {
    var ev = Jp(),
      iR = vt(),
      tv = Object.prototype,
      oR = tv.hasOwnProperty,
      aR = tv.propertyIsEnumerable,
      sR = ev(
        (function () {
          return arguments;
        })()
      )
        ? ev
        : function (e) {
            return iR(e) && oR.call(e, "callee") && !aR.call(e, "callee");
          };
    rv.exports = sR;
  });
  var iv = l((T5, nv) => {
    function uR() {
      return !1;
    }
    nv.exports = uR;
  });
  var Vn = l((Gr, nr) => {
    var cR = $e(),
      lR = iv(),
      sv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      ov = sv && typeof nr == "object" && nr && !nr.nodeType && nr,
      fR = ov && ov.exports === sv,
      av = fR ? cR.Buffer : void 0,
      dR = av ? av.isBuffer : void 0,
      pR = dR || lR;
    nr.exports = pR;
  });
  var Wn = l((x5, uv) => {
    var vR = 9007199254740991,
      gR = /^(?:0|[1-9]\d*)$/;
    function hR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? vR),
        !!t &&
          (r == "number" || (r != "symbol" && gR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    uv.exports = hR;
  });
  var Hn = l((O5, cv) => {
    var mR = 9007199254740991;
    function yR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mR;
    }
    cv.exports = yR;
  });
  var fv = l((A5, lv) => {
    var ER = wt(),
      bR = Hn(),
      _R = vt(),
      IR = "[object Arguments]",
      wR = "[object Array]",
      TR = "[object Boolean]",
      xR = "[object Date]",
      OR = "[object Error]",
      AR = "[object Function]",
      SR = "[object Map]",
      CR = "[object Number]",
      RR = "[object Object]",
      LR = "[object RegExp]",
      NR = "[object Set]",
      PR = "[object String]",
      qR = "[object WeakMap]",
      MR = "[object ArrayBuffer]",
      FR = "[object DataView]",
      DR = "[object Float32Array]",
      kR = "[object Float64Array]",
      GR = "[object Int8Array]",
      UR = "[object Int16Array]",
      VR = "[object Int32Array]",
      WR = "[object Uint8Array]",
      HR = "[object Uint8ClampedArray]",
      BR = "[object Uint16Array]",
      XR = "[object Uint32Array]",
      he = {};
    he[DR] =
      he[kR] =
      he[GR] =
      he[UR] =
      he[VR] =
      he[WR] =
      he[HR] =
      he[BR] =
      he[XR] =
        !0;
    he[IR] =
      he[wR] =
      he[MR] =
      he[TR] =
      he[FR] =
      he[xR] =
      he[OR] =
      he[AR] =
      he[SR] =
      he[CR] =
      he[RR] =
      he[LR] =
      he[NR] =
      he[PR] =
      he[qR] =
        !1;
    function jR(e) {
      return _R(e) && bR(e.length) && !!he[ER(e)];
    }
    lv.exports = jR;
  });
  var pv = l((S5, dv) => {
    function zR(e) {
      return function (t) {
        return e(t);
      };
    }
    dv.exports = zR;
  });
  var gv = l((Ur, ir) => {
    var KR = Po(),
      vv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      Vr = vv && typeof ir == "object" && ir && !ir.nodeType && ir,
      YR = Vr && Vr.exports === vv,
      ua = YR && KR.process,
      QR = (function () {
        try {
          var e = Vr && Vr.require && Vr.require("util").types;
          return e || (ua && ua.binding && ua.binding("util"));
        } catch {}
      })();
    ir.exports = QR;
  });
  var Bn = l((C5, yv) => {
    var $R = fv(),
      ZR = pv(),
      hv = gv(),
      mv = hv && hv.isTypedArray,
      JR = mv ? ZR(mv) : $R;
    yv.exports = JR;
  });
  var ca = l((R5, Ev) => {
    var eL = $p(),
      tL = kr(),
      rL = xe(),
      nL = Vn(),
      iL = Wn(),
      oL = Bn(),
      aL = Object.prototype,
      sL = aL.hasOwnProperty;
    function uL(e, t) {
      var r = rL(e),
        n = !r && tL(e),
        i = !r && !n && nL(e),
        o = !r && !n && !i && oL(e),
        a = r || n || i || o,
        s = a ? eL(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || sL.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              iL(f, u))
          ) &&
          s.push(f);
      return s;
    }
    Ev.exports = uL;
  });
  var Xn = l((L5, bv) => {
    var cL = Object.prototype;
    function lL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || cL;
      return e === r;
    }
    bv.exports = lL;
  });
  var Iv = l((N5, _v) => {
    var fL = qo(),
      dL = fL(Object.keys, Object);
    _v.exports = dL;
  });
  var jn = l((P5, wv) => {
    var pL = Xn(),
      vL = Iv(),
      gL = Object.prototype,
      hL = gL.hasOwnProperty;
    function mL(e) {
      if (!pL(e)) return vL(e);
      var t = [];
      for (var r in Object(e)) hL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    wv.exports = mL;
  });
  var Mt = l((q5, Tv) => {
    var yL = Jo(),
      EL = Hn();
    function bL(e) {
      return e != null && EL(e.length) && !yL(e);
    }
    Tv.exports = bL;
  });
  var Wr = l((M5, xv) => {
    var _L = ca(),
      IL = jn(),
      wL = Mt();
    function TL(e) {
      return wL(e) ? _L(e) : IL(e);
    }
    xv.exports = TL;
  });
  var Av = l((F5, Ov) => {
    var xL = oa(),
      OL = sa(),
      AL = Wr();
    function SL(e) {
      return xL(e, AL, OL);
    }
    Ov.exports = SL;
  });
  var Rv = l((D5, Cv) => {
    var Sv = Av(),
      CL = 1,
      RL = Object.prototype,
      LL = RL.hasOwnProperty;
    function NL(e, t, r, n, i, o) {
      var a = r & CL,
        s = Sv(e),
        u = s.length,
        f = Sv(t),
        _ = f.length;
      if (u != _ && !a) return !1;
      for (var p = u; p--; ) {
        var E = s[p];
        if (!(a ? E in t : LL.call(t, E))) return !1;
      }
      var m = o.get(e),
        y = o.get(t);
      if (m && y) return m == t && y == e;
      var w = !0;
      o.set(e, t), o.set(t, e);
      for (var O = a; ++p < u; ) {
        E = s[p];
        var T = e[E],
          P = t[E];
        if (n) var L = a ? n(P, T, E, t, e, o) : n(T, P, E, e, t, o);
        if (!(L === void 0 ? T === P || i(T, P, r, n, o) : L)) {
          w = !1;
          break;
        }
        O || (O = E == "constructor");
      }
      if (w && !O) {
        var F = e.constructor,
          G = t.constructor;
        F != G &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof F == "function" &&
            F instanceof F &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (w = !1);
      }
      return o.delete(e), o.delete(t), w;
    }
    Cv.exports = NL;
  });
  var Nv = l((k5, Lv) => {
    var PL = Tt(),
      qL = $e(),
      ML = PL(qL, "DataView");
    Lv.exports = ML;
  });
  var qv = l((G5, Pv) => {
    var FL = Tt(),
      DL = $e(),
      kL = FL(DL, "Promise");
    Pv.exports = kL;
  });
  var Fv = l((U5, Mv) => {
    var GL = Tt(),
      UL = $e(),
      VL = GL(UL, "Set");
    Mv.exports = VL;
  });
  var la = l((V5, Dv) => {
    var WL = Tt(),
      HL = $e(),
      BL = WL(HL, "WeakMap");
    Dv.exports = BL;
  });
  var zn = l((W5, Bv) => {
    var fa = Nv(),
      da = Dn(),
      pa = qv(),
      va = Fv(),
      ga = la(),
      Hv = wt(),
      or = ta(),
      kv = "[object Map]",
      XL = "[object Object]",
      Gv = "[object Promise]",
      Uv = "[object Set]",
      Vv = "[object WeakMap]",
      Wv = "[object DataView]",
      jL = or(fa),
      zL = or(da),
      KL = or(pa),
      YL = or(va),
      QL = or(ga),
      Ft = Hv;
    ((fa && Ft(new fa(new ArrayBuffer(1))) != Wv) ||
      (da && Ft(new da()) != kv) ||
      (pa && Ft(pa.resolve()) != Gv) ||
      (va && Ft(new va()) != Uv) ||
      (ga && Ft(new ga()) != Vv)) &&
      (Ft = function (e) {
        var t = Hv(e),
          r = t == XL ? e.constructor : void 0,
          n = r ? or(r) : "";
        if (n)
          switch (n) {
            case jL:
              return Wv;
            case zL:
              return kv;
            case KL:
              return Gv;
            case YL:
              return Uv;
            case QL:
              return Vv;
          }
        return t;
      });
    Bv.exports = Ft;
  });
  var Zv = l((H5, $v) => {
    var ha = ra(),
      $L = na(),
      ZL = Vp(),
      JL = Rv(),
      Xv = zn(),
      jv = xe(),
      zv = Vn(),
      eN = Bn(),
      tN = 1,
      Kv = "[object Arguments]",
      Yv = "[object Array]",
      Kn = "[object Object]",
      rN = Object.prototype,
      Qv = rN.hasOwnProperty;
    function nN(e, t, r, n, i, o) {
      var a = jv(e),
        s = jv(t),
        u = a ? Yv : Xv(e),
        f = s ? Yv : Xv(t);
      (u = u == Kv ? Kn : u), (f = f == Kv ? Kn : f);
      var _ = u == Kn,
        p = f == Kn,
        E = u == f;
      if (E && zv(e)) {
        if (!zv(t)) return !1;
        (a = !0), (_ = !1);
      }
      if (E && !_)
        return (
          o || (o = new ha()),
          a || eN(e) ? $L(e, t, r, n, i, o) : ZL(e, t, u, r, n, i, o)
        );
      if (!(r & tN)) {
        var m = _ && Qv.call(e, "__wrapped__"),
          y = p && Qv.call(t, "__wrapped__");
        if (m || y) {
          var w = m ? e.value() : e,
            O = y ? t.value() : t;
          return o || (o = new ha()), i(w, O, r, n, o);
        }
      }
      return E ? (o || (o = new ha()), JL(e, t, r, n, i, o)) : !1;
    }
    $v.exports = nN;
  });
  var ma = l((B5, tg) => {
    var iN = Zv(),
      Jv = vt();
    function eg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Jv(e) && !Jv(t))
        ? e !== e && t !== t
        : iN(e, t, r, n, eg, i);
    }
    tg.exports = eg;
  });
  var ng = l((X5, rg) => {
    var oN = ra(),
      aN = ma(),
      sN = 1,
      uN = 2;
    function cN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          _ = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var p = new oN();
          if (n) var E = n(f, _, u, e, t, p);
          if (!(E === void 0 ? aN(_, f, sN | uN, n, p) : E)) return !1;
        }
      }
      return !0;
    }
    rg.exports = cN;
  });
  var ya = l((j5, ig) => {
    var lN = ut();
    function fN(e) {
      return e === e && !lN(e);
    }
    ig.exports = fN;
  });
  var ag = l((z5, og) => {
    var dN = ya(),
      pN = Wr();
    function vN(e) {
      for (var t = pN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, dN(i)];
      }
      return t;
    }
    og.exports = vN;
  });
  var Ea = l((K5, sg) => {
    function gN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    sg.exports = gN;
  });
  var cg = l((Y5, ug) => {
    var hN = ng(),
      mN = ag(),
      yN = Ea();
    function EN(e) {
      var t = mN(e);
      return t.length == 1 && t[0][2]
        ? yN(t[0][0], t[0][1])
        : function (r) {
            return r === e || hN(r, e, t);
          };
    }
    ug.exports = EN;
  });
  var Hr = l((Q5, lg) => {
    var bN = wt(),
      _N = vt(),
      IN = "[object Symbol]";
    function wN(e) {
      return typeof e == "symbol" || (_N(e) && bN(e) == IN);
    }
    lg.exports = wN;
  });
  var Yn = l(($5, fg) => {
    var TN = xe(),
      xN = Hr(),
      ON = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      AN = /^\w*$/;
    function SN(e, t) {
      if (TN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        xN(e)
        ? !0
        : AN.test(e) || !ON.test(e) || (t != null && e in Object(t));
    }
    fg.exports = SN;
  });
  var vg = l((Z5, pg) => {
    var dg = kn(),
      CN = "Expected a function";
    function ba(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(CN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ba.Cache || dg)()), r;
    }
    ba.Cache = dg;
    pg.exports = ba;
  });
  var hg = l((J5, gg) => {
    var RN = vg(),
      LN = 500;
    function NN(e) {
      var t = RN(e, function (n) {
          return r.size === LN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    gg.exports = NN;
  });
  var yg = l((eX, mg) => {
    var PN = hg(),
      qN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      MN = /\\(\\)?/g,
      FN = PN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(qN, function (r, n, i, o) {
            t.push(i ? o.replace(MN, "$1") : n || r);
          }),
          t
        );
      });
    mg.exports = FN;
  });
  var _a = l((tX, Eg) => {
    function DN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Eg.exports = DN;
  });
  var xg = l((rX, Tg) => {
    var bg = Yt(),
      kN = _a(),
      GN = xe(),
      UN = Hr(),
      VN = 1 / 0,
      _g = bg ? bg.prototype : void 0,
      Ig = _g ? _g.toString : void 0;
    function wg(e) {
      if (typeof e == "string") return e;
      if (GN(e)) return kN(e, wg) + "";
      if (UN(e)) return Ig ? Ig.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -VN ? "-0" : t;
    }
    Tg.exports = wg;
  });
  var Ag = l((nX, Og) => {
    var WN = xg();
    function HN(e) {
      return e == null ? "" : WN(e);
    }
    Og.exports = HN;
  });
  var Br = l((iX, Sg) => {
    var BN = xe(),
      XN = Yn(),
      jN = yg(),
      zN = Ag();
    function KN(e, t) {
      return BN(e) ? e : XN(e, t) ? [e] : jN(zN(e));
    }
    Sg.exports = KN;
  });
  var ar = l((oX, Cg) => {
    var YN = Hr(),
      QN = 1 / 0;
    function $N(e) {
      if (typeof e == "string" || YN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -QN ? "-0" : t;
    }
    Cg.exports = $N;
  });
  var Qn = l((aX, Rg) => {
    var ZN = Br(),
      JN = ar();
    function eP(e, t) {
      t = ZN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[JN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Rg.exports = eP;
  });
  var $n = l((sX, Lg) => {
    var tP = Qn();
    function rP(e, t, r) {
      var n = e == null ? void 0 : tP(e, t);
      return n === void 0 ? r : n;
    }
    Lg.exports = rP;
  });
  var Pg = l((uX, Ng) => {
    function nP(e, t) {
      return e != null && t in Object(e);
    }
    Ng.exports = nP;
  });
  var Mg = l((cX, qg) => {
    var iP = Br(),
      oP = kr(),
      aP = xe(),
      sP = Wn(),
      uP = Hn(),
      cP = ar();
    function lP(e, t, r) {
      t = iP(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = cP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && uP(i) && sP(a, i) && (aP(e) || oP(e)));
    }
    qg.exports = lP;
  });
  var Dg = l((lX, Fg) => {
    var fP = Pg(),
      dP = Mg();
    function pP(e, t) {
      return e != null && dP(e, t, fP);
    }
    Fg.exports = pP;
  });
  var Gg = l((fX, kg) => {
    var vP = ma(),
      gP = $n(),
      hP = Dg(),
      mP = Yn(),
      yP = ya(),
      EP = Ea(),
      bP = ar(),
      _P = 1,
      IP = 2;
    function wP(e, t) {
      return mP(e) && yP(t)
        ? EP(bP(e), t)
        : function (r) {
            var n = gP(r, e);
            return n === void 0 && n === t ? hP(r, e) : vP(t, n, _P | IP);
          };
    }
    kg.exports = wP;
  });
  var Zn = l((dX, Ug) => {
    function TP(e) {
      return e;
    }
    Ug.exports = TP;
  });
  var Ia = l((pX, Vg) => {
    function xP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Vg.exports = xP;
  });
  var Hg = l((vX, Wg) => {
    var OP = Qn();
    function AP(e) {
      return function (t) {
        return OP(t, e);
      };
    }
    Wg.exports = AP;
  });
  var Xg = l((gX, Bg) => {
    var SP = Ia(),
      CP = Hg(),
      RP = Yn(),
      LP = ar();
    function NP(e) {
      return RP(e) ? SP(LP(e)) : CP(e);
    }
    Bg.exports = NP;
  });
  var xt = l((hX, jg) => {
    var PP = cg(),
      qP = Gg(),
      MP = Zn(),
      FP = xe(),
      DP = Xg();
    function kP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? MP
        : typeof e == "object"
        ? FP(e)
          ? qP(e[0], e[1])
          : PP(e)
        : DP(e);
    }
    jg.exports = kP;
  });
  var wa = l((mX, zg) => {
    var GP = xt(),
      UP = Mt(),
      VP = Wr();
    function WP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!UP(t)) {
          var o = GP(r, 3);
          (t = VP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    zg.exports = WP;
  });
  var Ta = l((yX, Kg) => {
    function HP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Kg.exports = HP;
  });
  var Qg = l((EX, Yg) => {
    var BP = /\s/;
    function XP(e) {
      for (var t = e.length; t-- && BP.test(e.charAt(t)); );
      return t;
    }
    Yg.exports = XP;
  });
  var Zg = l((bX, $g) => {
    var jP = Qg(),
      zP = /^\s+/;
    function KP(e) {
      return e && e.slice(0, jP(e) + 1).replace(zP, "");
    }
    $g.exports = KP;
  });
  var Jn = l((_X, th) => {
    var YP = Zg(),
      Jg = ut(),
      QP = Hr(),
      eh = 0 / 0,
      $P = /^[-+]0x[0-9a-f]+$/i,
      ZP = /^0b[01]+$/i,
      JP = /^0o[0-7]+$/i,
      eq = parseInt;
    function tq(e) {
      if (typeof e == "number") return e;
      if (QP(e)) return eh;
      if (Jg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Jg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = YP(e);
      var r = ZP.test(e);
      return r || JP.test(e) ? eq(e.slice(2), r ? 2 : 8) : $P.test(e) ? eh : +e;
    }
    th.exports = tq;
  });
  var ih = l((IX, nh) => {
    var rq = Jn(),
      rh = 1 / 0,
      nq = 17976931348623157e292;
    function iq(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = rq(e)), e === rh || e === -rh)) {
        var t = e < 0 ? -1 : 1;
        return t * nq;
      }
      return e === e ? e : 0;
    }
    nh.exports = iq;
  });
  var xa = l((wX, oh) => {
    var oq = ih();
    function aq(e) {
      var t = oq(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    oh.exports = aq;
  });
  var sh = l((TX, ah) => {
    var sq = Ta(),
      uq = xt(),
      cq = xa(),
      lq = Math.max;
    function fq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : cq(r);
      return i < 0 && (i = lq(n + i, 0)), sq(e, uq(t, 3), i);
    }
    ah.exports = fq;
  });
  var Oa = l((xX, uh) => {
    var dq = wa(),
      pq = sh(),
      vq = dq(pq);
    uh.exports = vq;
  });
  var fh = {};
  Ge(fh, {
    ELEMENT_MATCHES: () => gq,
    FLEX_PREFIXED: () => Aa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => Ot,
    TRANSFORM_STYLE_PREFIXED: () => ti,
    withBrowser: () => ei,
  });
  var lh,
    Je,
    ei,
    gq,
    Aa,
    Ot,
    ch,
    ti,
    ri = me(() => {
      "use strict";
      (lh = de(Oa())),
        (Je = typeof window < "u"),
        (ei = (e, t) => (Je ? e() : t)),
        (gq = ei(() =>
          (0, lh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Aa = ei(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Ot = ei(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (ch = Ot.split("transform")[0]),
        (ti = ch ? ch + "TransformStyle" : "transformStyle");
    });
  var Sa = l((OX, hh) => {
    var hq = 4,
      mq = 0.001,
      yq = 1e-7,
      Eq = 10,
      Xr = 11,
      ni = 1 / (Xr - 1),
      bq = typeof Float32Array == "function";
    function dh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ph(e, t) {
      return 3 * t - 6 * e;
    }
    function vh(e) {
      return 3 * e;
    }
    function ii(e, t, r) {
      return ((dh(t, r) * e + ph(t, r)) * e + vh(t)) * e;
    }
    function gh(e, t, r) {
      return 3 * dh(t, r) * e * e + 2 * ph(t, r) * e + vh(t);
    }
    function _q(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ii(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > yq && ++s < Eq);
      return a;
    }
    function Iq(e, t, r, n) {
      for (var i = 0; i < hq; ++i) {
        var o = gh(t, r, n);
        if (o === 0) return t;
        var a = ii(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    hh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = bq ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== i)
        for (var a = 0; a < Xr; ++a) o[a] = ii(a * ni, t, n);
      function s(u) {
        for (var f = 0, _ = 1, p = Xr - 1; _ !== p && o[_] <= u; ++_) f += ni;
        --_;
        var E = (u - o[_]) / (o[_ + 1] - o[_]),
          m = f + E * ni,
          y = gh(m, t, n);
        return y >= mq ? Iq(u, m, t, n) : y === 0 ? m : _q(u, f, f + ni, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : ii(s(f), r, i);
      };
    };
  });
  var zr = {};
  Ge(zr, {
    bounce: () => i1,
    bouncePast: () => o1,
    ease: () => wq,
    easeIn: () => Tq,
    easeInOut: () => Oq,
    easeOut: () => xq,
    inBack: () => Yq,
    inCirc: () => Xq,
    inCubic: () => Rq,
    inElastic: () => Zq,
    inExpo: () => Wq,
    inOutBack: () => $q,
    inOutCirc: () => zq,
    inOutCubic: () => Nq,
    inOutElastic: () => e1,
    inOutExpo: () => Bq,
    inOutQuad: () => Cq,
    inOutQuart: () => Mq,
    inOutQuint: () => kq,
    inOutSine: () => Vq,
    inQuad: () => Aq,
    inQuart: () => Pq,
    inQuint: () => Fq,
    inSine: () => Gq,
    outBack: () => Qq,
    outBounce: () => Kq,
    outCirc: () => jq,
    outCubic: () => Lq,
    outElastic: () => Jq,
    outExpo: () => Hq,
    outQuad: () => Sq,
    outQuart: () => qq,
    outQuint: () => Dq,
    outSine: () => Uq,
    swingFrom: () => r1,
    swingFromTo: () => t1,
    swingTo: () => n1,
  });
  function Aq(e) {
    return Math.pow(e, 2);
  }
  function Sq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Cq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Rq(e) {
    return Math.pow(e, 3);
  }
  function Lq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Nq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Pq(e) {
    return Math.pow(e, 4);
  }
  function qq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Mq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Fq(e) {
    return Math.pow(e, 5);
  }
  function Dq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function kq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Gq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Uq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Vq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Wq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Hq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Bq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Xq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function jq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function zq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Yq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Qq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $q(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Zq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Jq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function e1(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function t1(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function r1(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function n1(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function i1(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function o1(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var jr,
    gt,
    wq,
    Tq,
    xq,
    Oq,
    Ca = me(() => {
      "use strict";
      (jr = de(Sa())),
        (gt = 1.70158),
        (wq = (0, jr.default)(0.25, 0.1, 0.25, 1)),
        (Tq = (0, jr.default)(0.42, 0, 1, 1)),
        (xq = (0, jr.default)(0, 0, 0.58, 1)),
        (Oq = (0, jr.default)(0.42, 0, 0.58, 1));
    });
  var yh = {};
  Ge(yh, {
    applyEasing: () => s1,
    createBezierEasing: () => a1,
    optimizeFloat: () => Kr,
  });
  function Kr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function a1(e) {
    return (0, mh.default)(...e);
  }
  function s1(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Kr(r ? (t > 0 ? r(t) : t) : t > 0 && e && zr[e] ? zr[e](t) : t);
  }
  var mh,
    Ra = me(() => {
      "use strict";
      Ca();
      mh = de(Sa());
    });
  var _h = {};
  Ge(_h, {
    createElementState: () => bh,
    ixElements: () => _1,
    mergeActionState: () => La,
  });
  function bh(e, t, r, n, i) {
    let o =
      r === u1 ? (0, sr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, sr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function La(e, t, r, n, i) {
    let o = w1(i);
    return (0, sr.mergeIn)(e, [t, b1, r], n, o);
  }
  function w1(e) {
    let { config: t } = e;
    return I1.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var sr,
    SX,
    u1,
    CX,
    c1,
    l1,
    f1,
    d1,
    p1,
    v1,
    g1,
    h1,
    m1,
    y1,
    E1,
    Eh,
    b1,
    _1,
    I1,
    Ih = me(() => {
      "use strict";
      sr = de(Zt());
      Ve();
      ({
        HTML_ELEMENT: SX,
        PLAIN_OBJECT: u1,
        ABSTRACT_NODE: CX,
        CONFIG_X_VALUE: c1,
        CONFIG_Y_VALUE: l1,
        CONFIG_Z_VALUE: f1,
        CONFIG_VALUE: d1,
        CONFIG_X_UNIT: p1,
        CONFIG_Y_UNIT: v1,
        CONFIG_Z_UNIT: g1,
        CONFIG_UNIT: h1,
      } = Ne),
        ({
          IX2_SESSION_STOPPED: m1,
          IX2_INSTANCE_ADDED: y1,
          IX2_ELEMENT_STATE_CHANGED: E1,
        } = Te),
        (Eh = {}),
        (b1 = "refState"),
        (_1 = (e = Eh, t = {}) => {
          switch (t.type) {
            case m1:
              return Eh;
            case y1: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, sr.getIn)(u, [r, n]) !== n && (u = bh(u, n, a, r, o)),
                La(u, r, s, i, o)
              );
            }
            case E1: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return La(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      I1 = [
        [c1, p1],
        [l1, v1],
        [f1, g1],
        [d1, h1],
      ];
    });
  var wh = l((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var T1 = (e) => e.value;
    Oe.getPluginConfig = T1;
    var x1 = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = x1;
    var O1 = (e) => e || { value: 0 };
    Oe.getPluginOrigin = O1;
    var A1 = (e) => ({ value: e.value });
    Oe.getPluginDestination = A1;
    var S1 = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = S1;
    var C1 = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = C1;
    var R1 = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = R1;
  });
  var xh = l((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var L1 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      N1 = () => window.Webflow.require("spline"),
      P1 = (e, t) => e.filter((r) => !t.includes(r)),
      q1 = (e, t) => e.value[t];
    Ae.getPluginConfig = q1;
    var M1 = () => null;
    Ae.getPluginDuration = M1;
    var Th = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      F1 = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = P1(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = Th[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = Th[a]), o), {});
      };
    Ae.getPluginOrigin = F1;
    var D1 = (e) => e.value;
    Ae.getPluginDestination = D1;
    var k1 = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? L1(n) : null;
    };
    Ae.createPluginInstance = k1;
    var G1 = (e, t, r) => {
      let n = N1(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = G1;
    var U1 = () => null;
    Ae.clearPlugin = U1;
  });
  var Pa = l((Na) => {
    "use strict";
    Object.defineProperty(Na, "__esModule", { value: !0 });
    Na.normalizeColor = V1;
    var Oh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function V1(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Oh[o] == "string" ? Oh[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let E = (1 - Math.abs(2 * p - 1)) * _,
          m = E * (1 - Math.abs(((f / 60) % 2) - 1)),
          y = p - E / 2,
          w,
          O,
          T;
        f >= 0 && f < 60
          ? ((w = E), (O = m), (T = 0))
          : f >= 60 && f < 120
          ? ((w = m), (O = E), (T = 0))
          : f >= 120 && f < 180
          ? ((w = 0), (O = E), (T = m))
          : f >= 180 && f < 240
          ? ((w = 0), (O = m), (T = E))
          : f >= 240 && f < 300
          ? ((w = m), (O = 0), (T = E))
          : ((w = E), (O = 0), (T = m)),
          (t = Math.round((w + y) * 255)),
          (r = Math.round((O + y) * 255)),
          (n = Math.round((T + y) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          E = (1 - Math.abs(2 * p - 1)) * _,
          m = E * (1 - Math.abs(((f / 60) % 2) - 1)),
          y = p - E / 2,
          w,
          O,
          T;
        f >= 0 && f < 60
          ? ((w = E), (O = m), (T = 0))
          : f >= 60 && f < 120
          ? ((w = m), (O = E), (T = 0))
          : f >= 120 && f < 180
          ? ((w = 0), (O = E), (T = m))
          : f >= 180 && f < 240
          ? ((w = 0), (O = m), (T = E))
          : f >= 240 && f < 300
          ? ((w = m), (O = 0), (T = E))
          : ((w = E), (O = 0), (T = m)),
          (t = Math.round((w + y) * 255)),
          (r = Math.round((O + y) * 255)),
          (n = Math.round((T + y) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var Ah = l((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.renderPlugin =
      Se.getPluginOrigin =
      Se.getPluginDuration =
      Se.getPluginDestination =
      Se.getPluginConfig =
      Se.createPluginInstance =
      Se.clearPlugin =
        void 0;
    var W1 = Pa(),
      H1 = (e, t) => e.value[t];
    Se.getPluginConfig = H1;
    var B1 = () => null;
    Se.getPluginDuration = B1;
    var X1 = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, W1.normalizeColor)(i);
    };
    Se.getPluginOrigin = X1;
    var j1 = (e) => e.value;
    Se.getPluginDestination = j1;
    var z1 = () => null;
    Se.createPluginInstance = z1;
    var K1 = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: _ } = o,
        p;
      a != null && (p = a + i),
        s != null &&
          f != null &&
          u != null &&
          _ != null &&
          (p = `rgba(${s}, ${u}, ${f}, ${_})`),
        p != null && document.documentElement.style.setProperty(n, p);
    };
    Se.renderPlugin = K1;
    var Y1 = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Se.clearPlugin = Y1;
  });
  var Sh = l((oi) => {
    "use strict";
    var Ma = hn().default;
    Object.defineProperty(oi, "__esModule", { value: !0 });
    oi.pluginMethodMap = void 0;
    var qa = (Ve(), nt(qf)),
      Q1 = Ma(wh()),
      $1 = Ma(xh()),
      Z1 = Ma(Ah()),
      qX = (oi.pluginMethodMap = new Map([
        [qa.ActionTypeConsts.PLUGIN_LOTTIE, { ...Q1 }],
        [qa.ActionTypeConsts.PLUGIN_SPLINE, { ...$1 }],
        [qa.ActionTypeConsts.PLUGIN_VARIABLE, { ...Z1 }],
      ]));
  });
  var Ch = {};
  Ge(Ch, {
    clearPlugin: () => Va,
    createPluginInstance: () => eM,
    getPluginConfig: () => Da,
    getPluginDestination: () => Ga,
    getPluginDuration: () => J1,
    getPluginOrigin: () => ka,
    isPluginType: () => Dt,
    renderPlugin: () => Ua,
  });
  function Dt(e) {
    return Fa.pluginMethodMap.has(e);
  }
  var Fa,
    kt,
    Da,
    ka,
    J1,
    Ga,
    eM,
    Ua,
    Va,
    Wa = me(() => {
      "use strict";
      ri();
      Fa = de(Sh());
      (kt = (e) => (t) => {
        if (!Je) return () => null;
        let r = Fa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Da = kt("getPluginConfig")),
        (ka = kt("getPluginOrigin")),
        (J1 = kt("getPluginDuration")),
        (Ga = kt("getPluginDestination")),
        (eM = kt("createPluginInstance")),
        (Ua = kt("renderPlugin")),
        (Va = kt("clearPlugin"));
    });
  var Lh = l((DX, Rh) => {
    function tM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Rh.exports = tM;
  });
  var Ph = l((kX, Nh) => {
    function rM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Nh.exports = rM;
  });
  var Mh = l((GX, qh) => {
    function nM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    qh.exports = nM;
  });
  var Dh = l((UX, Fh) => {
    var iM = Mh(),
      oM = iM();
    Fh.exports = oM;
  });
  var Ha = l((VX, kh) => {
    var aM = Dh(),
      sM = Wr();
    function uM(e, t) {
      return e && aM(e, t, sM);
    }
    kh.exports = uM;
  });
  var Uh = l((WX, Gh) => {
    var cM = Mt();
    function lM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!cM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Gh.exports = lM;
  });
  var Ba = l((HX, Vh) => {
    var fM = Ha(),
      dM = Uh(),
      pM = dM(fM);
    Vh.exports = pM;
  });
  var Hh = l((BX, Wh) => {
    function vM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Wh.exports = vM;
  });
  var Xh = l((XX, Bh) => {
    var gM = Ph(),
      hM = Ba(),
      mM = xt(),
      yM = Hh(),
      EM = xe();
    function bM(e, t, r) {
      var n = EM(e) ? gM : yM,
        i = arguments.length < 3;
      return n(e, mM(t, 4), r, i, hM);
    }
    Bh.exports = bM;
  });
  var zh = l((jX, jh) => {
    var _M = Ta(),
      IM = xt(),
      wM = xa(),
      TM = Math.max,
      xM = Math.min;
    function OM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = wM(r)), (i = r < 0 ? TM(n + i, 0) : xM(i, n - 1))),
        _M(e, IM(t, 3), i, !0)
      );
    }
    jh.exports = OM;
  });
  var Yh = l((zX, Kh) => {
    var AM = wa(),
      SM = zh(),
      CM = AM(SM);
    Kh.exports = CM;
  });
  function Qh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function RM(e, t) {
    if (Qh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!Object.hasOwn(t, r[i]) || !Qh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var Xa,
    $h = me(() => {
      "use strict";
      Xa = RM;
    });
  var gm = {};
  Ge(gm, {
    cleanupHTMLElement: () => AF,
    clearAllStyles: () => OF,
    clearObjectCache: () => zM,
    getActionListProgress: () => CF,
    getAffectedElements: () => Qa,
    getComputedStyle: () => tF,
    getDestinationValues: () => uF,
    getElementId: () => $M,
    getInstanceId: () => YM,
    getInstanceOrigin: () => iF,
    getItemConfigByKey: () => sF,
    getMaxDurationItemIndex: () => vm,
    getNamespacedParameterId: () => NF,
    getRenderType: () => fm,
    getStyleProp: () => cF,
    mediaQueriesEqual: () => qF,
    observeStore: () => eF,
    reduceListToGroup: () => RF,
    reifyState: () => ZM,
    renderHTMLElement: () => lF,
    shallowEqual: () => Xa,
    shouldAllowMediaQuery: () => PF,
    shouldNamespaceEventParameter: () => LF,
    stringifyTarget: () => MF,
  });
  function zM() {
    ai.clear();
  }
  function YM() {
    return "i" + KM++;
  }
  function $M(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + QM++;
  }
  function ZM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, li.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function eF({ store: e, select: t, onChange: r, comparator: n = JM }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function em(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Qa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (R, I) =>
          R.concat(
            Qa({
              config: { target: I },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: _,
        matchSelector: p,
        elementContains: E,
        isSiblingNode: m,
      } = i,
      { target: y } = e;
    if (!y) return [];
    let {
      id: w,
      objectId: O,
      selector: T,
      selectorGuids: P,
      appliesTo: L,
      useEventTarget: F,
    } = em(y);
    if (O) return [ai.has(O) ? ai.get(O) : ai.set(O, {}).get(O)];
    if (L === Yo.PAGE) {
      let R = a(w);
      return R ? [R] : [];
    }
    let D = (t?.action?.config?.affectedElements ?? {})[w || T] || {},
      K = !!(D.id || D.selector),
      z,
      Q,
      te,
      j = t && s(em(t.target));
    if (
      (K
        ? ((z = D.limitAffectedElements), (Q = j), (te = s(D)))
        : (Q = te = s({ id: w, selector: T, selectorGuids: P })),
      t && F)
    ) {
      let R = r && (te || F === !0) ? [r] : u(j);
      if (te) {
        if (F === BM) return u(te).filter((I) => R.some((N) => E(I, N)));
        if (F === Zh) return u(te).filter((I) => R.some((N) => E(N, I)));
        if (F === Jh) return u(te).filter((I) => R.some((N) => m(N, I)));
      }
      return R;
    }
    return Q == null || te == null
      ? []
      : Je && n
      ? u(te).filter((R) => n.contains(R))
      : z === Zh
      ? u(Q, te)
      : z === HM
      ? f(u(Q)).filter(p(te))
      : z === Jh
      ? _(u(Q)).filter(p(te))
      : u(te);
  }
  function tF({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case dr:
      case pr:
      case vr:
      case gr:
      case di:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function iF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Dt(a)) return ka(a)(t[a], n);
    switch (n.actionTypeId) {
      case cr:
      case lr:
      case fr:
      case Zr:
        return t[n.actionTypeId] || $a[n.actionTypeId];
      case Jr:
        return rF(t[n.actionTypeId], n.config.filters);
      case en:
        return nF(t[n.actionTypeId], n.config.fontVariations);
      case um:
        return { value: (0, ht.default)(parseFloat(o(e, ui)), 1) };
      case dr: {
        let s = o(e, ct),
          u = o(e, lt),
          f,
          _;
        return (
          n.config.widthUnit === At
            ? (f = tm.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (_ = tm.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (_ = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: _ }
        );
      }
      case pr:
      case vr:
      case gr:
        return wF({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case di:
        return { value: (0, ht.default)(o(e, ci), r.display) };
      case jM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function uF({ element: e, actionItem: t, elementApi: r }) {
    if (Dt(t.actionTypeId)) return Ga(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case cr:
      case lr:
      case fr:
      case Zr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case dr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Je) return { widthValue: u, heightValue: f };
        if (a === At) {
          let _ = n(e, ct);
          i(e, ct, ""), (u = o(e, "offsetWidth")), i(e, ct, _);
        }
        if (s === At) {
          let _ = n(e, lt);
          i(e, lt, ""), (f = o(e, "offsetHeight")), i(e, lt, _);
        }
        return { widthValue: u, heightValue: f };
      }
      case pr:
      case vr:
      case gr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            _ = (0, im.normalizeColor)(f);
          return {
            rValue: _.red,
            gValue: _.green,
            bValue: _.blue,
            aValue: _.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Jr:
        return t.config.filters.reduce(oF, {});
      case en:
        return t.config.fontVariations.reduce(aF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function fm(e) {
    if (/^TRANSFORM_/.test(e)) return am;
    if (/^STYLE_/.test(e)) return Ka;
    if (/^GENERAL_/.test(e)) return za;
    if (/^PLUGIN_/.test(e)) return sm;
  }
  function cF(e, t) {
    return e === Ka ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function lF(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case am:
        return gF(e, t, r, i, a);
      case Ka:
        return TF(e, t, r, i, o, a);
      case za:
        return xF(e, i, a);
      case sm: {
        let { actionTypeId: f } = i;
        if (Dt(f)) return Ua(f)(u, t, i);
      }
    }
  }
  function gF(e, t, r, n, i) {
    let o = vF
        .map((s) => {
          let u = $a[s],
            {
              xValue: f = u.xValue,
              yValue: _ = u.yValue,
              zValue: p = u.zValue,
              xUnit: E = "",
              yUnit: m = "",
              zUnit: y = "",
            } = t[s] || {};
          switch (s) {
            case cr:
              return `${PM}(${f}${E}, ${_}${m}, ${p}${y})`;
            case lr:
              return `${qM}(${f}${E}, ${_}${m}, ${p}${y})`;
            case fr:
              return `${MM}(${f}${E}) ${FM}(${_}${m}) ${DM}(${p}${y})`;
            case Zr:
              return `${kM}(${f}${E}, ${_}${m})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Gt(e, Ot, i), a(e, Ot, o), yF(n, r) && a(e, ti, GM);
  }
  function hF(e, t, r, n) {
    let i = (0, li.default)(t, (a, s, u) => `${a} ${u}(${s}${pF(u, r)})`, ""),
      { setStyle: o } = n;
    Gt(e, Yr, n), o(e, Yr, i);
  }
  function mF(e, t, r, n) {
    let i = (0, li.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Gt(e, Qr, n), o(e, Qr, i);
  }
  function yF({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === cr && n !== void 0) ||
      (e === lr && n !== void 0) ||
      (e === fr && (t !== void 0 || r !== void 0))
    );
  }
  function IF(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function wF({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ya[t],
      o = n(e, i),
      a = bF.test(o) ? o : r[i],
      s = IF(_F, a).split($r);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function TF(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case dr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: _ } = r;
        f !== void 0 && (s === At && (s = "px"), Gt(e, ct, o), a(e, ct, f + s)),
          _ !== void 0 &&
            (u === At && (u = "px"), Gt(e, lt, o), a(e, lt, _ + u));
        break;
      }
      case Jr: {
        hF(e, r, n.config, o);
        break;
      }
      case en: {
        mF(e, r, n.config, o);
        break;
      }
      case pr:
      case vr:
      case gr: {
        let s = Ya[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          _ = Math.round(r.bValue),
          p = r.aValue;
        Gt(e, s, o),
          a(e, s, p >= 1 ? `rgb(${u},${f},${_})` : `rgba(${u},${f},${_},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Gt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function xF(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case di: {
        let { value: i } = t.config;
        i === UM && Je ? n(e, ci, Aa) : n(e, ci, i);
        return;
      }
    }
  }
  function Gt(e, t, r) {
    if (!Je) return;
    let n = lm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ur);
    if (!a) {
      o(e, ur, n);
      return;
    }
    let s = a.split($r).map(cm);
    s.indexOf(n) === -1 && o(e, ur, s.concat(n).join($r));
  }
  function dm(e, t, r) {
    if (!Je) return;
    let n = lm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ur);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ur,
        a
          .split($r)
          .map(cm)
          .filter((s) => s !== n)
          .join($r)
      );
  }
  function OF({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && rm({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        rm({ actionList: i[o], elementApi: t });
      });
  }
  function rm({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        nm({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            nm({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function nm({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Dt(o)
        ? (s = (u) => Va(o)(u, i))
        : (s = pm({ effect: SF, actionTypeId: o, elementApi: r })),
        Qa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function AF(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === dr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "");
    }
    i(e, ur) && pm({ effect: dm, actionTypeId: o, elementApi: r })(e);
  }
  function SF(e, t, r) {
    let { setStyle: n } = r;
    dm(e, t, r), n(e, t, ""), t === Ot && n(e, ti, "");
  }
  function vm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function CF(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: _ } = u,
          p = _[vm(_)],
          { config: E, actionTypeId: m } = p;
        i.id === p.id && (s = a + o);
        let y = fm(m) === za ? 0 : E.duration;
        a += E.delay + y;
      }),
      a > 0 ? Kr(s / a) : 0
    );
  }
  function RF({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, fi.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, fi.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function LF(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function NF(e, t) {
    return e + XM + t;
  }
  function PF(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function qF(e, t) {
    return Xa(e && e.sort(), t && t.sort());
  }
  function MF(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + ja + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + ja + r + ja + n;
  }
  var ht,
    li,
    si,
    fi,
    im,
    LM,
    NM,
    PM,
    qM,
    MM,
    FM,
    DM,
    kM,
    GM,
    UM,
    ui,
    Yr,
    Qr,
    ct,
    lt,
    om,
    VM,
    WM,
    Zh,
    HM,
    Jh,
    BM,
    ci,
    ur,
    At,
    $r,
    XM,
    ja,
    am,
    za,
    Ka,
    sm,
    cr,
    lr,
    fr,
    Zr,
    um,
    Jr,
    en,
    dr,
    pr,
    vr,
    gr,
    di,
    jM,
    cm,
    Ya,
    lm,
    ai,
    KM,
    QM,
    JM,
    tm,
    rF,
    nF,
    oF,
    aF,
    sF,
    $a,
    fF,
    dF,
    pF,
    vF,
    EF,
    bF,
    _F,
    pm,
    hm = me(() => {
      "use strict";
      (ht = de(Lh())), (li = de(Xh())), (si = de(Yh())), (fi = de(Zt()));
      Ve();
      $h();
      Ra();
      im = de(Pa());
      Wa();
      ri();
      ({
        BACKGROUND: LM,
        TRANSFORM: NM,
        TRANSLATE_3D: PM,
        SCALE_3D: qM,
        ROTATE_X: MM,
        ROTATE_Y: FM,
        ROTATE_Z: DM,
        SKEW: kM,
        PRESERVE_3D: GM,
        FLEX: UM,
        OPACITY: ui,
        FILTER: Yr,
        FONT_VARIATION_SETTINGS: Qr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: om,
        BORDER_COLOR: VM,
        COLOR: WM,
        CHILDREN: Zh,
        IMMEDIATE_CHILDREN: HM,
        SIBLINGS: Jh,
        PARENT: BM,
        DISPLAY: ci,
        WILL_CHANGE: ur,
        AUTO: At,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: XM,
        BAR_DELIMITER: ja,
        RENDER_TRANSFORM: am,
        RENDER_GENERAL: za,
        RENDER_STYLE: Ka,
        RENDER_PLUGIN: sm,
      } = Ne),
        ({
          TRANSFORM_MOVE: cr,
          TRANSFORM_SCALE: lr,
          TRANSFORM_ROTATE: fr,
          TRANSFORM_SKEW: Zr,
          STYLE_OPACITY: um,
          STYLE_FILTER: Jr,
          STYLE_FONT_VARIATION: en,
          STYLE_SIZE: dr,
          STYLE_BACKGROUND_COLOR: pr,
          STYLE_BORDER: vr,
          STYLE_TEXT_COLOR: gr,
          GENERAL_DISPLAY: di,
          OBJECT_VALUE: jM,
        } = Ue),
        (cm = (e) => e.trim()),
        (Ya = Object.freeze({ [pr]: om, [vr]: VM, [gr]: WM })),
        (lm = Object.freeze({
          [Ot]: NM,
          [om]: LM,
          [ui]: ui,
          [Yr]: Yr,
          [ct]: ct,
          [lt]: lt,
          [Qr]: Qr,
        })),
        (ai = new Map());
      KM = 1;
      QM = 1;
      JM = (e, t) => e === t;
      (tm = /px/),
        (rF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = fF[n.type]), r),
            e || {}
          )),
        (nF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = dF[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (oF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (aF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (sF = (e, t, r) => {
          if (Dt(e)) return Da(e)(r, t);
          switch (e) {
            case Jr: {
              let n = (0, si.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case en: {
              let n = (0, si.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      ($a = {
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [lr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [fr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Zr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (fF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (dF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (pF = (e, t) => {
          let r = (0, si.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (vF = Object.keys($a));
      (EF = "\\(([^)]+)\\)"), (bF = /^rgb/), (_F = RegExp(`rgba?${EF}`));
      pm =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case cr:
            case lr:
            case fr:
            case Zr:
              e(n, Ot, r);
              break;
            case Jr:
              e(n, Yr, r);
              break;
            case en:
              e(n, Qr, r);
              break;
            case um:
              e(n, ui, r);
              break;
            case dr:
              e(n, ct, r), e(n, lt, r);
              break;
            case pr:
            case vr:
            case gr:
              e(n, Ya[t], r);
              break;
            case di:
              e(n, ci, r);
              break;
          }
        };
    });
  var Ut = l((Fe) => {
    "use strict";
    var hr = hn().default;
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    Fe.IX2VanillaUtils =
      Fe.IX2VanillaPlugins =
      Fe.IX2ElementsReducer =
      Fe.IX2Easings =
      Fe.IX2EasingUtils =
      Fe.IX2BrowserSupport =
        void 0;
    var FF = hr((ri(), nt(fh)));
    Fe.IX2BrowserSupport = FF;
    var DF = hr((Ca(), nt(zr)));
    Fe.IX2Easings = DF;
    var kF = hr((Ra(), nt(yh)));
    Fe.IX2EasingUtils = kF;
    var GF = hr((Ih(), nt(_h)));
    Fe.IX2ElementsReducer = GF;
    var UF = hr((Wa(), nt(Ch)));
    Fe.IX2VanillaPlugins = UF;
    var VF = hr((hm(), nt(gm)));
    Fe.IX2VanillaUtils = VF;
  });
  var vi,
    mt,
    WF,
    HF,
    BF,
    XF,
    jF,
    zF,
    pi,
    mm,
    KF,
    YF,
    Za,
    QF,
    $F,
    ZF,
    JF,
    ym,
    Em = me(() => {
      "use strict";
      Ve();
      (vi = de(Ut())),
        (mt = de(Zt())),
        ({
          IX2_RAW_DATA_IMPORTED: WF,
          IX2_SESSION_STOPPED: HF,
          IX2_INSTANCE_ADDED: BF,
          IX2_INSTANCE_STARTED: XF,
          IX2_INSTANCE_REMOVED: jF,
          IX2_ANIMATION_FRAME_CHANGED: zF,
        } = Te),
        ({
          optimizeFloat: pi,
          applyEasing: mm,
          createBezierEasing: KF,
        } = vi.IX2EasingUtils),
        ({ RENDER_GENERAL: YF } = Ne),
        ({
          getItemConfigByKey: Za,
          getRenderType: QF,
          getStyleProp: $F,
        } = vi.IX2VanillaUtils),
        (ZF = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: _,
              skipToValue: p,
            } = e,
            { parameters: E } = t.payload,
            m = Math.max(1 - a, 0.01),
            y = E[n];
          y == null && ((m = 1), (y = s));
          let w = Math.max(y, 0) || 0,
            O = pi(w - r),
            T = _ ? p : pi(r + O * m),
            P = T * 100;
          if (T === r && e.current) return e;
          let L, F, G, D;
          for (let z = 0, { length: Q } = i; z < Q; z++) {
            let { keyframe: te, actionItems: j } = i[z];
            if ((z === 0 && (L = j[0]), P >= te)) {
              L = j[0];
              let R = i[z + 1],
                I = R && P !== te;
              (F = I ? R.actionItems[0] : null),
                I && ((G = te / 100), (D = (R.keyframe - te) / 100));
            }
          }
          let K = {};
          if (L && !F)
            for (let z = 0, { length: Q } = o; z < Q; z++) {
              let te = o[z];
              K[te] = Za(u, te, L.config);
            }
          else if (L && F && G !== void 0 && D !== void 0) {
            let z = (T - G) / D,
              Q = L.config.easing,
              te = mm(Q, z, f);
            for (let j = 0, { length: R } = o; j < R; j++) {
              let I = o[j],
                N = Za(u, I, L.config),
                ee = (Za(u, I, F.config) - N) * te + N;
              K[I] = ee;
            }
          }
          return (0, mt.merge)(e, { position: T, current: K });
        }),
        (JF = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: _,
              pluginDuration: p,
              instanceDelay: E,
              customEasingFn: m,
              skipMotion: y,
            } = e,
            w = u.config.easing,
            { duration: O, delay: T } = u.config;
          p != null && (O = p),
            (T = E ?? T),
            a === YF ? (O = 0) : (o || y) && (O = T = 0);
          let { now: P } = t.payload;
          if (r && n) {
            let L = P - (i + T);
            if (s) {
              let z = P - i,
                Q = O + T,
                te = pi(Math.min(Math.max(0, z / Q), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", Q * te);
            }
            if (L < 0) return e;
            let F = pi(Math.min(Math.max(0, L / O), 1)),
              G = mm(w, F, m),
              D = {},
              K = null;
            return (
              _.length &&
                (K = _.reduce((z, Q) => {
                  let te = f[Q],
                    j = parseFloat(n[Q]) || 0,
                    I = (parseFloat(te) - j) * G + j;
                  return (z[Q] = I), z;
                }, {})),
              (D.current = K),
              (D.position = F),
              F === 1 && ((D.active = !1), (D.complete = !0)),
              (0, mt.merge)(e, D)
            );
          }
          return e;
        }),
        (ym = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case WF:
              return t.payload.ixInstances || Object.freeze({});
            case HF:
              return Object.freeze({});
            case BF: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: _,
                  origin: p,
                  destination: E,
                  immediate: m,
                  verbose: y,
                  continuous: w,
                  parameterId: O,
                  actionGroups: T,
                  smoothing: P,
                  restingValue: L,
                  pluginInstance: F,
                  pluginDuration: G,
                  instanceDelay: D,
                  skipMotion: K,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: Q } = i,
                te = QF(Q),
                j = $F(te, Q),
                R = Object.keys(E).filter(
                  (N) => E[N] != null && typeof E[N] != "string"
                ),
                { easing: I } = i.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: E,
                destinationKeys: R,
                immediate: m,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: Q,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: te,
                isCarrier: _,
                styleProp: j,
                continuous: w,
                parameterId: O,
                actionGroups: T,
                smoothing: P,
                restingValue: L,
                pluginInstance: F,
                pluginDuration: G,
                instanceDelay: D,
                skipMotion: K,
                skipToValue: z,
                customEasingFn:
                  Array.isArray(I) && I.length === 4 ? KF(I) : void 0,
              });
            }
            case XF: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case jF: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case zF: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? ZF : JF;
                r = (0, mt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var eD,
    tD,
    rD,
    bm,
    _m = me(() => {
      "use strict";
      Ve();
      ({
        IX2_RAW_DATA_IMPORTED: eD,
        IX2_SESSION_STOPPED: tD,
        IX2_PARAMETER_CHANGED: rD,
      } = Te),
        (bm = (e = {}, t) => {
          switch (t.type) {
            case eD:
              return t.payload.ixParameters || {};
            case tD:
              return {};
            case rD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Tm = {};
  Ge(Tm, { default: () => iD });
  var Im,
    wm,
    nD,
    iD,
    xm = me(() => {
      "use strict";
      Im = de(Ko());
      Ff();
      nd();
      ad();
      wm = de(Ut());
      Em();
      _m();
      ({ ixElements: nD } = wm.IX2ElementsReducer),
        (iD = (0, Im.combineReducers)({
          ixData: Mf,
          ixRequest: rd,
          ixSession: od,
          ixElements: nD,
          ixInstances: ym,
          ixParameters: bm,
        }));
    });
  var Am = l((lj, Om) => {
    var oD = wt(),
      aD = xe(),
      sD = vt(),
      uD = "[object String]";
    function cD(e) {
      return typeof e == "string" || (!aD(e) && sD(e) && oD(e) == uD);
    }
    Om.exports = cD;
  });
  var Cm = l((fj, Sm) => {
    var lD = Ia(),
      fD = lD("length");
    Sm.exports = fD;
  });
  var Lm = l((dj, Rm) => {
    var dD = "\\ud800-\\udfff",
      pD = "\\u0300-\\u036f",
      vD = "\\ufe20-\\ufe2f",
      gD = "\\u20d0-\\u20ff",
      hD = pD + vD + gD,
      mD = "\\ufe0e\\ufe0f",
      yD = "\\u200d",
      ED = RegExp("[" + yD + dD + hD + mD + "]");
    function bD(e) {
      return ED.test(e);
    }
    Rm.exports = bD;
  });
  var Um = l((pj, Gm) => {
    var Pm = "\\ud800-\\udfff",
      _D = "\\u0300-\\u036f",
      ID = "\\ufe20-\\ufe2f",
      wD = "\\u20d0-\\u20ff",
      TD = _D + ID + wD,
      xD = "\\ufe0e\\ufe0f",
      OD = "[" + Pm + "]",
      Ja = "[" + TD + "]",
      es = "\\ud83c[\\udffb-\\udfff]",
      AD = "(?:" + Ja + "|" + es + ")",
      qm = "[^" + Pm + "]",
      Mm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Fm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      SD = "\\u200d",
      Dm = AD + "?",
      km = "[" + xD + "]?",
      CD = "(?:" + SD + "(?:" + [qm, Mm, Fm].join("|") + ")" + km + Dm + ")*",
      RD = km + Dm + CD,
      LD = "(?:" + [qm + Ja + "?", Ja, Mm, Fm, OD].join("|") + ")",
      Nm = RegExp(es + "(?=" + es + ")|" + LD + RD, "g");
    function ND(e) {
      for (var t = (Nm.lastIndex = 0); Nm.test(e); ) ++t;
      return t;
    }
    Gm.exports = ND;
  });
  var Wm = l((vj, Vm) => {
    var PD = Cm(),
      qD = Lm(),
      MD = Um();
    function FD(e) {
      return qD(e) ? MD(e) : PD(e);
    }
    Vm.exports = FD;
  });
  var Bm = l((gj, Hm) => {
    var DD = jn(),
      kD = zn(),
      GD = Mt(),
      UD = Am(),
      VD = Wm(),
      WD = "[object Map]",
      HD = "[object Set]";
    function BD(e) {
      if (e == null) return 0;
      if (GD(e)) return UD(e) ? VD(e) : e.length;
      var t = kD(e);
      return t == WD || t == HD ? e.size : DD(e).length;
    }
    Hm.exports = BD;
  });
  var jm = l((hj, Xm) => {
    var XD = "Expected a function";
    function jD(e) {
      if (typeof e != "function") throw new TypeError(XD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Xm.exports = jD;
  });
  var ts = l((mj, zm) => {
    var zD = Tt(),
      KD = (function () {
        try {
          var e = zD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    zm.exports = KD;
  });
  var rs = l((yj, Ym) => {
    var Km = ts();
    function YD(e, t, r) {
      t == "__proto__" && Km
        ? Km(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Ym.exports = YD;
  });
  var $m = l((Ej, Qm) => {
    var QD = rs(),
      $D = Fn(),
      ZD = Object.prototype,
      JD = ZD.hasOwnProperty;
    function e2(e, t, r) {
      var n = e[t];
      (!(JD.call(e, t) && $D(n, r)) || (r === void 0 && !(t in e))) &&
        QD(e, t, r);
    }
    Qm.exports = e2;
  });
  var ey = l((bj, Jm) => {
    var t2 = $m(),
      r2 = Br(),
      n2 = Wn(),
      Zm = ut(),
      i2 = ar();
    function o2(e, t, r, n) {
      if (!Zm(e)) return e;
      t = r2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = i2(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var _ = s[u];
          (f = n ? n(_, u, s) : void 0),
            f === void 0 && (f = Zm(_) ? _ : n2(t[i + 1]) ? [] : {});
        }
        t2(s, u, f), (s = s[u]);
      }
      return e;
    }
    Jm.exports = o2;
  });
  var ry = l((_j, ty) => {
    var a2 = Qn(),
      s2 = ey(),
      u2 = Br();
    function c2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = a2(e, a);
        r(s, a) && s2(o, u2(a, e), s);
      }
      return o;
    }
    ty.exports = c2;
  });
  var iy = l((Ij, ny) => {
    var l2 = Un(),
      f2 = Mo(),
      d2 = sa(),
      p2 = aa(),
      v2 = Object.getOwnPropertySymbols,
      g2 = v2
        ? function (e) {
            for (var t = []; e; ) l2(t, d2(e)), (e = f2(e));
            return t;
          }
        : p2;
    ny.exports = g2;
  });
  var ay = l((wj, oy) => {
    function h2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    oy.exports = h2;
  });
  var uy = l((Tj, sy) => {
    var m2 = ut(),
      y2 = Xn(),
      E2 = ay(),
      b2 = Object.prototype,
      _2 = b2.hasOwnProperty;
    function I2(e) {
      if (!m2(e)) return E2(e);
      var t = y2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !_2.call(e, n))) || r.push(n);
      return r;
    }
    sy.exports = I2;
  });
  var ly = l((xj, cy) => {
    var w2 = ca(),
      T2 = uy(),
      x2 = Mt();
    function O2(e) {
      return x2(e) ? w2(e, !0) : T2(e);
    }
    cy.exports = O2;
  });
  var dy = l((Oj, fy) => {
    var A2 = oa(),
      S2 = iy(),
      C2 = ly();
    function R2(e) {
      return A2(e, C2, S2);
    }
    fy.exports = R2;
  });
  var vy = l((Aj, py) => {
    var L2 = _a(),
      N2 = xt(),
      P2 = ry(),
      q2 = dy();
    function M2(e, t) {
      if (e == null) return {};
      var r = L2(q2(e), function (n) {
        return [n];
      });
      return (
        (t = N2(t)),
        P2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    py.exports = M2;
  });
  var hy = l((Sj, gy) => {
    var F2 = xt(),
      D2 = jm(),
      k2 = vy();
    function G2(e, t) {
      return k2(e, D2(F2(t)));
    }
    gy.exports = G2;
  });
  var yy = l((Cj, my) => {
    var U2 = jn(),
      V2 = zn(),
      W2 = kr(),
      H2 = xe(),
      B2 = Mt(),
      X2 = Vn(),
      j2 = Xn(),
      z2 = Bn(),
      K2 = "[object Map]",
      Y2 = "[object Set]",
      Q2 = Object.prototype,
      $2 = Q2.hasOwnProperty;
    function Z2(e) {
      if (e == null) return !0;
      if (
        B2(e) &&
        (H2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          X2(e) ||
          z2(e) ||
          W2(e))
      )
        return !e.length;
      var t = V2(e);
      if (t == K2 || t == Y2) return !e.size;
      if (j2(e)) return !U2(e).length;
      for (var r in e) if ($2.call(e, r)) return !1;
      return !0;
    }
    my.exports = Z2;
  });
  var by = l((Rj, Ey) => {
    var J2 = rs(),
      ek = Ha(),
      tk = xt();
    function rk(e, t) {
      var r = {};
      return (
        (t = tk(t, 3)),
        ek(e, function (n, i, o) {
          J2(r, i, t(n, i, o));
        }),
        r
      );
    }
    Ey.exports = rk;
  });
  var Iy = l((Lj, _y) => {
    function nk(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    _y.exports = nk;
  });
  var Ty = l((Nj, wy) => {
    var ik = Zn();
    function ok(e) {
      return typeof e == "function" ? e : ik;
    }
    wy.exports = ok;
  });
  var Oy = l((Pj, xy) => {
    var ak = Iy(),
      sk = Ba(),
      uk = Ty(),
      ck = xe();
    function lk(e, t) {
      var r = ck(e) ? ak : sk;
      return r(e, uk(t));
    }
    xy.exports = lk;
  });
  var Sy = l((qj, Ay) => {
    var fk = $e(),
      dk = function () {
        return fk.Date.now();
      };
    Ay.exports = dk;
  });
  var Ly = l((Mj, Ry) => {
    var pk = ut(),
      ns = Sy(),
      Cy = Jn(),
      vk = "Expected a function",
      gk = Math.max,
      hk = Math.min;
    function mk(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        _ = !1,
        p = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(vk);
      (t = Cy(t) || 0),
        pk(r) &&
          ((_ = !!r.leading),
          (p = "maxWait" in r),
          (o = p ? gk(Cy(r.maxWait) || 0, t) : o),
          (E = "trailing" in r ? !!r.trailing : E));
      function m(D) {
        var K = n,
          z = i;
        return (n = i = void 0), (f = D), (a = e.apply(z, K)), a;
      }
      function y(D) {
        return (f = D), (s = setTimeout(T, t)), _ ? m(D) : a;
      }
      function w(D) {
        var K = D - u,
          z = D - f,
          Q = t - K;
        return p ? hk(Q, o - z) : Q;
      }
      function O(D) {
        var K = D - u,
          z = D - f;
        return u === void 0 || K >= t || K < 0 || (p && z >= o);
      }
      function T() {
        var D = ns();
        if (O(D)) return P(D);
        s = setTimeout(T, w(D));
      }
      function P(D) {
        return (s = void 0), E && n ? m(D) : ((n = i = void 0), a);
      }
      function L() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function F() {
        return s === void 0 ? a : P(ns());
      }
      function G() {
        var D = ns(),
          K = O(D);
        if (((n = arguments), (i = this), (u = D), K)) {
          if (s === void 0) return y(u);
          if (p) return clearTimeout(s), (s = setTimeout(T, t)), m(u);
        }
        return s === void 0 && (s = setTimeout(T, t)), a;
      }
      return (G.cancel = L), (G.flush = F), G;
    }
    Ry.exports = mk;
  });
  var Py = l((Fj, Ny) => {
    var yk = Ly(),
      Ek = ut(),
      bk = "Expected a function";
    function _k(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(bk);
      return (
        Ek(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        yk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Ny.exports = _k;
  });
  var My = {};
  Ge(My, {
    actionListPlaybackChanged: () => yr,
    animationFrameChanged: () => hi,
    clearRequested: () => jk,
    elementStateChanged: () => fs,
    eventListenerAdded: () => gi,
    eventStateChanged: () => us,
    instanceAdded: () => cs,
    instanceRemoved: () => ls,
    instanceStarted: () => mi,
    mediaQueriesDefined: () => ps,
    parameterChanged: () => mr,
    playbackRequested: () => Bk,
    previewRequested: () => Hk,
    rawDataImported: () => is,
    sessionInitialized: () => os,
    sessionStarted: () => as,
    sessionStopped: () => ss,
    stopRequested: () => Xk,
    testFrameRendered: () => zk,
    viewportWidthChanged: () => ds,
  });
  var qy,
    Ik,
    wk,
    Tk,
    xk,
    Ok,
    Ak,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Pk,
    qk,
    Mk,
    Fk,
    Dk,
    kk,
    Gk,
    Uk,
    Vk,
    Wk,
    is,
    os,
    as,
    ss,
    Hk,
    Bk,
    Xk,
    jk,
    gi,
    zk,
    us,
    hi,
    mr,
    cs,
    mi,
    ls,
    fs,
    yr,
    ds,
    ps,
    yi = me(() => {
      "use strict";
      Ve();
      (qy = de(Ut())),
        ({
          IX2_RAW_DATA_IMPORTED: Ik,
          IX2_SESSION_INITIALIZED: wk,
          IX2_SESSION_STARTED: Tk,
          IX2_SESSION_STOPPED: xk,
          IX2_PREVIEW_REQUESTED: Ok,
          IX2_PLAYBACK_REQUESTED: Ak,
          IX2_STOP_REQUESTED: Sk,
          IX2_CLEAR_REQUESTED: Ck,
          IX2_EVENT_LISTENER_ADDED: Rk,
          IX2_TEST_FRAME_RENDERED: Lk,
          IX2_EVENT_STATE_CHANGED: Nk,
          IX2_ANIMATION_FRAME_CHANGED: Pk,
          IX2_PARAMETER_CHANGED: qk,
          IX2_INSTANCE_ADDED: Mk,
          IX2_INSTANCE_STARTED: Fk,
          IX2_INSTANCE_REMOVED: Dk,
          IX2_ELEMENT_STATE_CHANGED: kk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Gk,
          IX2_VIEWPORT_WIDTH_CHANGED: Uk,
          IX2_MEDIA_QUERIES_DEFINED: Vk,
        } = Te),
        ({ reifyState: Wk } = qy.IX2VanillaUtils),
        (is = (e) => ({ type: Ik, payload: { ...Wk(e) } })),
        (os = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: wk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (as = () => ({ type: Tk })),
        (ss = () => ({ type: xk })),
        (Hk = ({ rawData: e, defer: t }) => ({
          type: Ok,
          payload: { defer: t, rawData: e },
        })),
        (Bk = ({
          actionTypeId: e = Ue.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: Ak,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (Xk = (e) => ({ type: Sk, payload: { actionListId: e } })),
        (jk = () => ({ type: Ck })),
        (gi = (e, t) => ({
          type: Rk,
          payload: { target: e, listenerParams: t },
        })),
        (zk = (e = 1) => ({ type: Lk, payload: { step: e } })),
        (us = (e, t) => ({ type: Nk, payload: { stateKey: e, newState: t } })),
        (hi = (e, t) => ({ type: Pk, payload: { now: e, parameters: t } })),
        (mr = (e, t) => ({ type: qk, payload: { key: e, value: t } })),
        (cs = (e) => ({ type: Mk, payload: { ...e } })),
        (mi = (e, t) => ({ type: Fk, payload: { instanceId: e, time: t } })),
        (ls = (e) => ({ type: Dk, payload: { instanceId: e } })),
        (fs = (e, t, r, n) => ({
          type: kk,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (yr = ({ actionListId: e, isPlaying: t }) => ({
          type: Gk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ds = ({ width: e, mediaQueries: t }) => ({
          type: Uk,
          payload: { width: e, mediaQueries: t },
        })),
        (ps = () => ({ type: Vk }));
    });
  var De = {};
  Ge(De, {
    elementContains: () => hs,
    getChildElements: () => nG,
    getClosestElement: () => tn,
    getProperty: () => Zk,
    getQuerySelector: () => gs,
    getRefType: () => ms,
    getSiblingElements: () => iG,
    getStyle: () => $k,
    getValidDocument: () => eG,
    isSiblingNode: () => rG,
    matchSelector: () => Jk,
    queryDocument: () => tG,
    setStyle: () => Qk,
  });
  function Qk(e, t, r) {
    e.style[t] = r;
  }
  function $k(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Zk(e, t) {
    return e[t];
  }
  function Jk(e) {
    return (t) => t[vs](e);
  }
  function gs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Fy) !== -1) {
        let n = e.split(Fy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(ky)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function eG(e) {
    return e == null || e === document.documentElement.getAttribute(ky)
      ? document
      : null;
  }
  function tG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function hs(e, t) {
    return e.contains(t);
  }
  function rG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function nG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function iG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ms(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Kk
        : Yk
      : null;
  }
  var Dy,
    vs,
    Fy,
    Kk,
    Yk,
    ky,
    tn,
    Gy = me(() => {
      "use strict";
      Dy = de(Ut());
      Ve();
      ({ ELEMENT_MATCHES: vs } = Dy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Fy,
          HTML_ELEMENT: Kk,
          PLAIN_OBJECT: Yk,
          WF_PAGE: ky,
        } = Ne);
      tn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[vs] && r[vs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ys = l((Gj, Vy) => {
    var oG = ut(),
      Uy = Object.create,
      aG = (function () {
        function e() {}
        return function (t) {
          if (!oG(t)) return {};
          if (Uy) return Uy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Vy.exports = aG;
  });
  var Ei = l((Uj, Wy) => {
    function sG() {}
    Wy.exports = sG;
  });
  var _i = l((Vj, Hy) => {
    var uG = ys(),
      cG = Ei();
    function bi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    bi.prototype = uG(cG.prototype);
    bi.prototype.constructor = bi;
    Hy.exports = bi;
  });
  var zy = l((Wj, jy) => {
    var By = Yt(),
      lG = kr(),
      fG = xe(),
      Xy = By ? By.isConcatSpreadable : void 0;
    function dG(e) {
      return fG(e) || lG(e) || !!(Xy && e && e[Xy]);
    }
    jy.exports = dG;
  });
  var Qy = l((Hj, Yy) => {
    var pG = Un(),
      vG = zy();
    function Ky(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = vG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Ky(s, t - 1, r, n, i)
            : pG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Yy.exports = Ky;
  });
  var Zy = l((Bj, $y) => {
    var gG = Qy();
    function hG(e) {
      var t = e == null ? 0 : e.length;
      return t ? gG(e, 1) : [];
    }
    $y.exports = hG;
  });
  var eE = l((Xj, Jy) => {
    function mG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Jy.exports = mG;
  });
  var nE = l((jj, rE) => {
    var yG = eE(),
      tE = Math.max;
    function EG(e, t, r) {
      return (
        (t = tE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = tE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), yG(e, this, s);
        }
      );
    }
    rE.exports = EG;
  });
  var oE = l((zj, iE) => {
    function bG(e) {
      return function () {
        return e;
      };
    }
    iE.exports = bG;
  });
  var uE = l((Kj, sE) => {
    var _G = oE(),
      aE = ts(),
      IG = Zn(),
      wG = aE
        ? function (e, t) {
            return aE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: _G(t),
              writable: !0,
            });
          }
        : IG;
    sE.exports = wG;
  });
  var lE = l((Yj, cE) => {
    var TG = 800,
      xG = 16,
      OG = Date.now;
    function AG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = OG(),
          i = xG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= TG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    cE.exports = AG;
  });
  var dE = l((Qj, fE) => {
    var SG = uE(),
      CG = lE(),
      RG = CG(SG);
    fE.exports = RG;
  });
  var vE = l(($j, pE) => {
    var LG = Zy(),
      NG = nE(),
      PG = dE();
    function qG(e) {
      return PG(NG(e, void 0, LG), e + "");
    }
    pE.exports = qG;
  });
  var mE = l((Zj, hE) => {
    var gE = la(),
      MG = gE && new gE();
    hE.exports = MG;
  });
  var EE = l((Jj, yE) => {
    function FG() {}
    yE.exports = FG;
  });
  var Es = l((ez, _E) => {
    var bE = mE(),
      DG = EE(),
      kG = bE
        ? function (e) {
            return bE.get(e);
          }
        : DG;
    _E.exports = kG;
  });
  var wE = l((tz, IE) => {
    var GG = {};
    IE.exports = GG;
  });
  var bs = l((rz, xE) => {
    var TE = wE(),
      UG = Object.prototype,
      VG = UG.hasOwnProperty;
    function WG(e) {
      for (
        var t = e.name + "", r = TE[t], n = VG.call(TE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    xE.exports = WG;
  });
  var wi = l((nz, OE) => {
    var HG = ys(),
      BG = Ei(),
      XG = 4294967295;
    function Ii(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = XG),
        (this.__views__ = []);
    }
    Ii.prototype = HG(BG.prototype);
    Ii.prototype.constructor = Ii;
    OE.exports = Ii;
  });
  var SE = l((iz, AE) => {
    function jG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    AE.exports = jG;
  });
  var RE = l((oz, CE) => {
    var zG = wi(),
      KG = _i(),
      YG = SE();
    function QG(e) {
      if (e instanceof zG) return e.clone();
      var t = new KG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = YG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    CE.exports = QG;
  });
  var PE = l((az, NE) => {
    var $G = wi(),
      LE = _i(),
      ZG = Ei(),
      JG = xe(),
      eU = vt(),
      tU = RE(),
      rU = Object.prototype,
      nU = rU.hasOwnProperty;
    function Ti(e) {
      if (eU(e) && !JG(e) && !(e instanceof $G)) {
        if (e instanceof LE) return e;
        if (nU.call(e, "__wrapped__")) return tU(e);
      }
      return new LE(e);
    }
    Ti.prototype = ZG.prototype;
    Ti.prototype.constructor = Ti;
    NE.exports = Ti;
  });
  var ME = l((sz, qE) => {
    var iU = wi(),
      oU = Es(),
      aU = bs(),
      sU = PE();
    function uU(e) {
      var t = aU(e),
        r = sU[t];
      if (typeof r != "function" || !(t in iU.prototype)) return !1;
      if (e === r) return !0;
      var n = oU(r);
      return !!n && e === n[0];
    }
    qE.exports = uU;
  });
  var GE = l((uz, kE) => {
    var FE = _i(),
      cU = vE(),
      lU = Es(),
      _s = bs(),
      fU = xe(),
      DE = ME(),
      dU = "Expected a function",
      pU = 8,
      vU = 32,
      gU = 128,
      hU = 256;
    function mU(e) {
      return cU(function (t) {
        var r = t.length,
          n = r,
          i = FE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(dU);
          if (i && !a && _s(o) == "wrapper") var a = new FE([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = _s(o),
            u = s == "wrapper" ? lU(o) : void 0;
          u &&
          DE(u[0]) &&
          u[1] == (gU | pU | vU | hU) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[_s(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && DE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            _ = f[0];
          if (a && f.length == 1 && fU(_)) return a.plant(_).value();
          for (var p = 0, E = r ? t[p].apply(this, f) : _; ++p < r; )
            E = t[p].call(this, E);
          return E;
        };
      });
    }
    kE.exports = mU;
  });
  var VE = l((cz, UE) => {
    var yU = GE(),
      EU = yU();
    UE.exports = EU;
  });
  var HE = l((lz, WE) => {
    function bU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    WE.exports = bU;
  });
  var XE = l((fz, BE) => {
    var _U = HE(),
      Is = Jn();
    function IU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = Is(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = Is(t)), (t = t === t ? t : 0)),
        _U(Is(e), t, r)
      );
    }
    BE.exports = IU;
  });
  var eb,
    tb,
    rb,
    nb,
    wU,
    TU,
    xU,
    OU,
    AU,
    SU,
    CU,
    RU,
    LU,
    NU,
    PU,
    qU,
    MU,
    FU,
    DU,
    ib,
    ob,
    kU,
    GU,
    UU,
    ab,
    VU,
    WU,
    sb,
    HU,
    ws,
    ub,
    jE,
    zE,
    cb,
    nn,
    BU,
    ft,
    lb,
    XU,
    He,
    et,
    on,
    fb,
    Ts,
    KE,
    xs,
    jU,
    rn,
    zU,
    KU,
    YU,
    db,
    YE,
    QU,
    QE,
    $U,
    ZU,
    JU,
    $E,
    xi,
    Oi,
    ZE,
    JE,
    pb,
    vb = me(() => {
      "use strict";
      (eb = de(VE())), (tb = de($n())), (rb = de(XE()));
      Ve();
      Os();
      yi();
      (nb = de(Ut())),
        ({
          MOUSE_CLICK: wU,
          MOUSE_SECOND_CLICK: TU,
          MOUSE_DOWN: xU,
          MOUSE_UP: OU,
          MOUSE_OVER: AU,
          MOUSE_OUT: SU,
          DROPDOWN_CLOSE: CU,
          DROPDOWN_OPEN: RU,
          SLIDER_ACTIVE: LU,
          SLIDER_INACTIVE: NU,
          TAB_ACTIVE: PU,
          TAB_INACTIVE: qU,
          NAVBAR_CLOSE: MU,
          NAVBAR_OPEN: FU,
          MOUSE_MOVE: DU,
          PAGE_SCROLL_DOWN: ib,
          SCROLL_INTO_VIEW: ob,
          SCROLL_OUT_OF_VIEW: kU,
          PAGE_SCROLL_UP: GU,
          SCROLLING_IN_VIEW: UU,
          PAGE_FINISH: ab,
          ECOMMERCE_CART_CLOSE: VU,
          ECOMMERCE_CART_OPEN: WU,
          PAGE_START: sb,
          PAGE_SCROLL: HU,
        } = Ze),
        (ws = "COMPONENT_ACTIVE"),
        (ub = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: jE } = Ne),
        ({ getNamespacedParameterId: zE } = nb.IX2VanillaUtils),
        (cb = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (nn = cb(({ element: e, nativeEvent: t }) => e === t.target)),
        (BU = cb(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, eb.default)([nn, BU])),
        (lb = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !jU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (XU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!lb(e, n);
        }),
        (He = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = lb(e, u);
          return (
            f &&
              Er({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + jE + n.split(jE)[1],
                actionListId: (0, tb.default)(f, "action.config.actionListId"),
              }),
            Er({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            an({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (on = { handler: et(ft, He) }),
        (fb = { ...on, types: [ws, ub].join(" ") }),
        (Ts = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (KE = "mouseover mouseout"),
        (xs = { types: Ts }),
        (jU = { PAGE_START: sb, PAGE_FINISH: ab }),
        (rn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, rb.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (zU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (KU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (YU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = rn(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return zU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (db = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ws, ub].indexOf(n) !== -1 ? n === ws : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (YE = (e) => (t, r) => {
          let n = { elementHovered: KU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (QU = (e) => (t, r) => {
          let n = { ...r, elementVisible: YU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (QE =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = rn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              _ = f === "PX",
              p = i - o,
              E = Number((n / p).toFixed(2));
            if (r && r.percentTop === E) return r;
            let m = (_ ? u : (o * (u || 0)) / 100) / p,
              y,
              w,
              O = 0;
            r &&
              ((y = E > r.percentTop),
              (w = r.scrollingDown !== y),
              (O = w ? E : r.anchorTop));
            let T = s === ib ? E >= O + m : E <= O - m,
              P = {
                ...r,
                percentTop: E,
                inBounds: T,
                anchorTop: O,
                scrollingDown: y,
              };
            return (r && T && (w || P.inBounds !== r.inBounds) && e(t, P)) || P;
          }),
        ($U = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (ZU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (JU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        ($E =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (xi = (e = !0) => ({
          ...fb,
          handler: et(
            e ? ft : nn,
            db((t, r) => (r.isActive ? on.handler(t, r) : r))
          ),
        })),
        (Oi = (e = !0) => ({
          ...fb,
          handler: et(
            e ? ft : nn,
            db((t, r) => (r.isActive ? r : on.handler(t, r)))
          ),
        })),
        (ZE = {
          ...xs,
          handler: QU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === ob) === r
              ? (He(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (JE = 0.05),
        (pb = {
          [LU]: xi(),
          [NU]: Oi(),
          [RU]: xi(),
          [CU]: Oi(),
          [FU]: xi(!1),
          [MU]: Oi(!1),
          [PU]: xi(),
          [qU]: Oi(),
          [WU]: { types: "ecommerce-cart-open", handler: et(ft, He) },
          [VU]: { types: "ecommerce-cart-close", handler: et(ft, He) },
          [wU]: {
            types: "click",
            handler: et(
              ft,
              $E((e, { clickCount: t }) => {
                XU(e) ? t === 1 && He(e) : He(e);
              })
            ),
          },
          [TU]: {
            types: "click",
            handler: et(
              ft,
              $E((e, { clickCount: t }) => {
                t === 2 && He(e);
              })
            ),
          },
          [xU]: { ...on, types: "mousedown" },
          [OU]: { ...on, types: "mouseup" },
          [AU]: {
            types: KE,
            handler: et(
              ft,
              YE((e, t) => {
                t.elementHovered && He(e);
              })
            ),
          },
          [SU]: {
            types: KE,
            handler: et(
              ft,
              YE((e, t) => {
                t.elementHovered || He(e);
              })
            ),
          },
          [DU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: _ = 0,
                } = r,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: m = o.pageX,
                  pageY: y = o.pageY,
                } = n,
                w = s === "X_AXIS",
                O = n.type === "mouseout",
                T = _ / 100,
                P = u,
                L = !1;
              switch (a) {
                case st.VIEWPORT: {
                  T = w
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: F,
                    scrollTop: G,
                    scrollWidth: D,
                    scrollHeight: K,
                  } = rn();
                  T = w ? Math.min(F + m, D) / D : Math.min(G + y, K) / K;
                  break;
                }
                case st.ELEMENT:
                default: {
                  P = zE(i, u);
                  let F = n.type.indexOf("mouse") === 0;
                  if (F && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let G = t.getBoundingClientRect(),
                    { left: D, top: K, width: z, height: Q } = G;
                  if (!F && !$U({ left: p, top: E }, G)) break;
                  (L = !0), (T = w ? (p - D) / z : (E - K) / Q);
                  break;
                }
              }
              return (
                O && (T > 1 - JE || T < JE) && (T = Math.round(T)),
                (a !== st.ELEMENT || L || L !== o.elementHovered) &&
                  ((T = f ? 1 - T : T), e.dispatch(mr(P, T))),
                {
                  elementHovered: L,
                  clientX: p,
                  clientY: E,
                  pageX: m,
                  pageY: y,
                }
              );
            },
          },
          [HU]: {
            types: Ts,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = rn(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(mr(r, s));
            },
          },
          [UU]: {
            types: Ts,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = rn(),
                {
                  basedOn: _,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: m,
                  startsExiting: y,
                  addEndOffset: w,
                  addStartOffset: O,
                  addOffsetValue: T = 0,
                  endOffsetValue: P = 0,
                } = r,
                L = p === "X_AXIS";
              if (_ === st.VIEWPORT) {
                let F = L ? o / s : a / u;
                return (
                  F !== i.scrollPercent && t.dispatch(mr(E, F)),
                  { scrollPercent: F }
                );
              } else {
                let F = zE(n, E),
                  G = e.getBoundingClientRect(),
                  D = (O ? T : 0) / 100,
                  K = (w ? P : 0) / 100;
                (D = m ? D : 1 - D), (K = y ? K : 1 - K);
                let z = G.top + Math.min(G.height * D, f),
                  te = G.top + G.height * K - z,
                  j = Math.min(f + te, u),
                  I = Math.min(Math.max(0, f - z), j) / j;
                return (
                  I !== i.scrollPercent && t.dispatch(mr(F, I)),
                  { scrollPercent: I }
                );
              }
            },
          },
          [ob]: ZE,
          [kU]: ZE,
          [ib]: {
            ...xs,
            handler: QE((e, t) => {
              t.scrollingDown && He(e);
            }),
          },
          [GU]: {
            ...xs,
            handler: QE((e, t) => {
              t.scrollingDown || He(e);
            }),
          },
          [ab]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(nn, ZU(He)),
          },
          [sb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(nn, JU(He)),
          },
        });
    });
  var Lb = {};
  Ge(Lb, {
    observeRequests: () => EV,
    startActionGroup: () => an,
    startEngine: () => Ni,
    stopActionGroup: () => Er,
    stopAllActionGroups: () => Sb,
    stopEngine: () => Pi,
  });
  function EV(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: IV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: wV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: TV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: xV });
  }
  function bV(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Pi(e),
          Tb({ store: e, elementApi: De }),
          Ni({ store: e, allowEvents: !0 }),
          xb();
      },
    });
  }
  function _V(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function IV({ rawData: e, defer: t }, r) {
    let n = () => {
      Ni({ store: r, rawData: e, allowEvents: !0 }), xb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function xb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function wV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: _ } = e;
    if (n && i && _ && s) {
      let p = _.actionLists[n];
      p && (_ = uV({ actionList: p, actionItemId: i, rawData: _ }));
    }
    if (
      (Ni({ store: t, rawData: _, allowEvents: a, testManual: u }),
      (n && r === Ue.GENERAL_START_ACTION) || As(r))
    ) {
      Er({ store: t, actionListId: n }),
        Ab({ store: t, actionListId: n, eventId: o });
      let p = an({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && p && t.dispatch(yr({ actionListId: n, isPlaying: !s }));
    }
  }
  function TV({ actionListId: e }, t) {
    e ? Er({ store: t, actionListId: e }) : Sb({ store: t }), Pi(t);
  }
  function xV(e, t) {
    Pi(t), Tb({ store: t, elementApi: De });
  }
  function Ni({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(is(t)),
      i.active ||
        (e.dispatch(
          os({
            hasBoundaryNodes: !!document.querySelector(Si),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (LV(e), OV(), e.getState().ixSession.hasDefinedMediaQueries && bV(e)),
        e.dispatch(as()),
        AV(e, n));
  }
  function OV() {
    let { documentElement: e } = document;
    e.className.indexOf(gb) === -1 && (e.className += ` ${gb}`);
  }
  function AV(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(hi(n, o)), t ? _V(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Pi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(SV), dV(), e.dispatch(ss());
    }
  }
  function SV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function CV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: _ } = e.getState(),
      { events: p } = f,
      E = p[n],
      { eventTypeId: m } = E,
      y = {},
      w = {},
      O = [],
      { continuousActionGroups: T } = a,
      { id: P } = a;
    cV(m, i) && (P = lV(t, P));
    let L = _.hasBoundaryNodes && r ? tn(r, Si) : null;
    T.forEach((F) => {
      let { keyframe: G, actionItems: D } = F;
      D.forEach((K) => {
        let { actionTypeId: z } = K,
          { target: Q } = K.config;
        if (!Q) return;
        let te = Q.boundaryMode ? L : null,
          j = pV(Q) + Ss + z;
        if (((w[j] = RV(w[j], G, K)), !y[j])) {
          y[j] = !0;
          let { config: R } = K;
          Ci({
            config: R,
            event: E,
            eventTarget: r,
            elementRoot: te,
            elementApi: De,
          }).forEach((I) => {
            O.push({ element: I, key: j });
          });
        }
      });
    }),
      O.forEach(({ element: F, key: G }) => {
        let D = w[G],
          K = (0, yt.default)(D, "[0].actionItems[0]", {}),
          { actionTypeId: z } = K,
          Q = Li(z) ? Rs(z)(F, K) : null,
          te = Cs({ element: F, actionItem: K, elementApi: De }, Q);
        Ls({
          store: e,
          element: F,
          eventId: n,
          actionListId: o,
          actionItem: K,
          destination: te,
          continuous: !0,
          parameterId: P,
          actionGroups: D,
          smoothing: s,
          restingValue: u,
          pluginInstance: Q,
        });
      });
  }
  function RV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function LV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    Ob(e),
      (0, br.default)(r, (i, o) => {
        let a = pb[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        DV({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && PV(e);
  }
  function PV(e) {
    let t = () => {
      Ob(e);
    };
    NV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(gi(window, [r, t]));
    }),
      t();
  }
  function Ob(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ds({ width: n, mediaQueries: i }));
    }
  }
  function DV({ logic: e, store: t, events: r }) {
    kV(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = qV(r, FV);
    if (!(0, yb.default)(s)) return;
    (0, br.default)(s, (p, E) => {
      let m = r[E],
        { action: y, id: w, mediaQueries: O = o.mediaQueryKeys } = m,
        { actionListId: T } = y.config;
      vV(O, o.mediaQueryKeys) || t.dispatch(ps()),
        y.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((L) => {
            let { continuousParameterGroupId: F } = L,
              G = (0, yt.default)(a, `${T}.continuousParameterGroups`, []),
              D = (0, mb.default)(G, ({ id: Q }) => Q === F),
              K = (L.smoothing || 0) / 100,
              z = (L.restingState || 0) / 100;
            D &&
              p.forEach((Q, te) => {
                let j = w + Ss + te;
                CV({
                  store: t,
                  eventStateKey: j,
                  eventTarget: Q,
                  eventId: w,
                  eventConfig: L,
                  actionListId: T,
                  parameterGroup: D,
                  smoothing: K,
                  restingValue: z,
                });
              });
          }),
        (y.actionTypeId === Ue.GENERAL_START_ACTION || As(y.actionTypeId)) &&
          Ab({ store: t, actionListId: T, eventId: w });
    });
    let u = (p) => {
        let { ixSession: E } = t.getState();
        MV(s, (m, y, w) => {
          let O = r[y],
            T = E.eventState[w],
            { action: P, mediaQueries: L = o.mediaQueryKeys } = O;
          if (!Ri(L, E.mediaQueryKey)) return;
          let F = (G = {}) => {
            let D = i(
              {
                store: t,
                element: m,
                event: O,
                eventConfig: G,
                nativeEvent: p,
                eventStateKey: w,
              },
              T
            );
            gV(D, T) || t.dispatch(us(w, D));
          };
          P.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(F)
            : F();
        });
      },
      f = (0, Ib.default)(u, yV),
      _ = ({ target: p = document, types: E, throttle: m }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((y) => {
            let w = m ? f : u;
            p.addEventListener(y, w), t.dispatch(gi(p, [y, w]));
          });
      };
    Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
  }
  function kV(e) {
    if (!mV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = gs(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Ab({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
        _ = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ri(_, i.mediaQueryKey)) return;
      f.forEach((p) => {
        let { config: E, actionTypeId: m } = p,
          y =
            E?.target?.useEventTarget === !0 && E?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : E,
          w = Ci({ config: y, event: s, elementApi: De }),
          O = Li(m);
        w.forEach((T) => {
          let P = O ? Rs(m)(T, p) : null;
          Ls({
            destination: Cs({ element: T, actionItem: p, elementApi: De }, P),
            immediate: !0,
            store: e,
            element: T,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: P,
          });
        });
      });
    }
  }
  function Sb({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, br.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ns(r, e), i && e.dispatch(yr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function Er({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? tn(r, Si) : null;
    (0, br.default)(o, (u) => {
      let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
        _ = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && _) {
        if (s && f && !hs(s, u.element)) return;
        Ns(u, e),
          u.verbose && e.dispatch(yr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function an({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: _ } = u,
      p = _[t] || {},
      { mediaQueries: E = u.mediaQueryKeys } = p,
      m = (0, yt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: y, useFirstGroupAsInitialState: w } = m;
    if (!y || !y.length) return !1;
    o >= y.length && (0, yt.default)(p, "config.loop") && (o = 0),
      o === 0 && w && o++;
    let T =
        (o === 0 || (o === 1 && w)) && As(p.action?.actionTypeId)
          ? p.config.delay
          : void 0,
      P = (0, yt.default)(y, [o, "actionItems"], []);
    if (!P.length || !Ri(E, f.mediaQueryKey)) return !1;
    let L = f.hasBoundaryNodes && r ? tn(r, Si) : null,
      F = oV(P),
      G = !1;
    return (
      P.forEach((D, K) => {
        let { config: z, actionTypeId: Q } = D,
          te = Li(Q),
          { target: j } = z;
        if (!j) return;
        let R = j.boundaryMode ? L : null;
        Ci({
          config: z,
          event: p,
          eventTarget: r,
          elementRoot: R,
          elementApi: De,
        }).forEach((N, U) => {
          let H = te ? Rs(Q)(N, D) : null,
            ee = te ? hV(Q)(N, D) : null;
          G = !0;
          let re = F === K && U === 0,
            W = aV({ element: N, actionItem: D }),
            B = Cs({ element: N, actionItem: D, elementApi: De }, H);
          Ls({
            store: e,
            element: N,
            actionItem: D,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: W,
            destination: B,
            immediate: a,
            verbose: s,
            pluginInstance: H,
            pluginDuration: ee,
            instanceDelay: T,
          });
        });
      }),
      G
    );
  }
  function Ls(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: _,
      } = n,
      p = !u,
      E = nV(),
      { ixElements: m, ixSession: y, ixData: w } = t.getState(),
      O = rV(m, i),
      { refState: T } = m[O] || {},
      P = ms(i),
      L = y.reducedMotion && $o[o.actionTypeId],
      F;
    if (L && u)
      switch (w.events[_]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          F = f;
          break;
        default:
          F = 0.5;
          break;
      }
    let G = sV(i, T, r, o, De, s);
    if (
      (t.dispatch(
        cs({
          instanceId: E,
          elementId: O,
          origin: G,
          refType: P,
          skipMotion: L,
          skipToValue: F,
          ...n,
        })
      ),
      Cb(document.body, "ix2-animation-started", E),
      a)
    ) {
      GV(t, E);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: D }) => D[E], onChange: Rb }),
      p && t.dispatch(mi(E, y.tick));
  }
  function Ns(e, t) {
    Cb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === wb && fV(o, n, De), t.dispatch(ls(e.id));
  }
  function Cb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function GV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(mi(t, 0)), e.dispatch(hi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Rb(n[t], e);
  }
  function Rb(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: _,
        eventId: p,
        eventTarget: E,
        eventStateKey: m,
        actionListId: y,
        isCarrier: w,
        styleProp: O,
        verbose: T,
        pluginInstance: P,
      } = e,
      { ixData: L, ixSession: F } = t.getState(),
      { events: G } = L,
      D = G[p] || {},
      { mediaQueries: K = L.mediaQueryKeys } = D;
    if (Ri(K, F.mediaQueryKey) && (n || r || i)) {
      if (f || (u === tV && i)) {
        t.dispatch(fs(o, s, f, a));
        let { ixElements: z } = t.getState(),
          { ref: Q, refType: te, refState: j } = z[o] || {},
          R = j && j[s];
        (te === wb || Li(s)) && iV(Q, j, R, p, a, O, De, u, P);
      }
      if (i) {
        if (w) {
          let z = an({
            store: t,
            eventId: p,
            eventTarget: E,
            eventStateKey: m,
            actionListId: y,
            groupIndex: _ + 1,
            verbose: T,
          });
          T && !z && t.dispatch(yr({ actionListId: y, isPlaying: !1 }));
        }
        Ns(e, t);
      }
    }
  }
  var mb,
    yt,
    yb,
    Eb,
    bb,
    _b,
    br,
    Ib,
    Ai,
    eV,
    As,
    Ss,
    Si,
    wb,
    tV,
    gb,
    Ci,
    rV,
    Cs,
    Vt,
    nV,
    iV,
    Tb,
    oV,
    aV,
    sV,
    uV,
    cV,
    lV,
    Ri,
    fV,
    dV,
    pV,
    vV,
    gV,
    Li,
    Rs,
    hV,
    hb,
    mV,
    yV,
    NV,
    qV,
    MV,
    FV,
    Os = me(() => {
      "use strict";
      (mb = de(Oa())),
        (yt = de($n())),
        (yb = de(Bm())),
        (Eb = de(hy())),
        (bb = de(yy())),
        (_b = de(by())),
        (br = de(Oy())),
        (Ib = de(Py()));
      Ve();
      Ai = de(Ut());
      yi();
      Gy();
      vb();
      (eV = Object.keys(Cn)),
        (As = (e) => eV.includes(e)),
        ({
          COLON_DELIMITER: Ss,
          BOUNDARY_SELECTOR: Si,
          HTML_ELEMENT: wb,
          RENDER_GENERAL: tV,
          W_MOD_IX: gb,
        } = Ne),
        ({
          getAffectedElements: Ci,
          getElementId: rV,
          getDestinationValues: Cs,
          observeStore: Vt,
          getInstanceId: nV,
          renderHTMLElement: iV,
          clearAllStyles: Tb,
          getMaxDurationItemIndex: oV,
          getComputedStyle: aV,
          getInstanceOrigin: sV,
          reduceListToGroup: uV,
          shouldNamespaceEventParameter: cV,
          getNamespacedParameterId: lV,
          shouldAllowMediaQuery: Ri,
          cleanupHTMLElement: fV,
          clearObjectCache: dV,
          stringifyTarget: pV,
          mediaQueriesEqual: vV,
          shallowEqual: gV,
        } = Ai.IX2VanillaUtils),
        ({
          isPluginType: Li,
          createPluginInstance: Rs,
          getPluginDuration: hV,
        } = Ai.IX2VanillaPlugins),
        (hb = navigator.userAgent),
        (mV = hb.match(/iPad/i) || hb.match(/iPhone/)),
        (yV = 12);
      NV = ["resize", "orientationchange"];
      (qV = (e, t) => (0, Eb.default)((0, _b.default)(e, t), bb.default)),
        (MV = (e, t) => {
          (0, br.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Ss + o;
              t(i, n, a);
            });
          });
        }),
        (FV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ci({ config: t, elementApi: De });
        });
    });
  var Pb = l((Et) => {
    "use strict";
    var UV = hn().default,
      VV = vu().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = Nb;
    Et.init = jV;
    Et.setEnv = XV;
    Et.store = void 0;
    Jl();
    var WV = Ko(),
      HV = VV((xm(), nt(Tm))),
      Ps = (Os(), nt(Lb)),
      BV = UV((yi(), nt(My)));
    Et.actions = BV;
    var qs = (Et.store = (0, WV.createStore)(HV.default));
    function XV(e) {
      e() && (0, Ps.observeRequests)(qs);
    }
    function jV(e) {
      Nb(), (0, Ps.startEngine)({ store: qs, rawData: e, allowEvents: !0 });
    }
    function Nb() {
      (0, Ps.stopEngine)(qs);
    }
  });
  var Db = l((bz, Fb) => {
    "use strict";
    var qb = Le(),
      Mb = Pb();
    Mb.setEnv(qb.env);
    qb.define(
      "ix2",
      (Fb.exports = function () {
        return Mb;
      })
    );
  });
  var Gb = l((_z, kb) => {
    "use strict";
    var _r = Le();
    _r.define(
      "links",
      (kb.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = _r.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          _ = /\/$/,
          p,
          E;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && _r.env("design")),
            (E = _r.env("slug") || a.pathname || ""),
            _r.scroll.off(w),
            (p = []);
          for (var T = document.links, P = 0; P < T.length; ++P) y(T[P]);
          p.length && (_r.scroll.on(w), w());
        }
        function y(T) {
          if (!T.getAttribute("hreflang")) {
            var P =
              (i && T.getAttribute("href-disabled")) || T.getAttribute("href");
            if (((s.href = P), !(P.indexOf(":") >= 0))) {
              var L = e(T);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var F = e(s.hash);
                F.length && p.push({ link: L, sec: F, active: !1 });
                return;
              }
              if (!(P === "#" || P === "")) {
                var G =
                  s.href === a.href || P === E || (f.test(P) && _.test(E));
                O(L, u, G);
              }
            }
          }
        }
        function w() {
          var T = n.scrollTop(),
            P = n.height();
          t.each(p, function (L) {
            if (!L.link.attr("hreflang")) {
              var F = L.link,
                G = L.sec,
                D = G.offset().top,
                K = G.outerHeight(),
                z = P * 0.5,
                Q = G.is(":visible") && D + K - z >= T && D + z <= T + P;
              L.active !== Q && ((L.active = Q), O(F, u, Q));
            }
          });
        }
        function O(T, P, L) {
          var F = T.hasClass(P);
          (L && F) || (!L && !F) || (L ? T.addClass(P) : T.removeClass(P));
        }
        return r;
      })
    );
  });
  var Vb = l((Iz, Ub) => {
    "use strict";
    var qi = Le();
    qi.define(
      "scroll",
      (Ub.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (R) {
              window.setTimeout(R, 15);
            },
          u = qi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          _ = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(E));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var w = /^#[a-zA-Z0-9][\w:.-]*$/;
        function O(R) {
          return w.test(R.hash) && R.host + R.pathname === r.host + r.pathname;
        }
        let T =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function P() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            T.matches
          );
        }
        function L(R, I) {
          var N;
          switch (I) {
            case "add":
              (N = R.attr("tabindex")),
                N
                  ? R.attr("data-wf-tabindex-swap", N)
                  : R.attr("tabindex", "-1");
              break;
            case "remove":
              (N = R.attr("data-wf-tabindex-swap")),
                N
                  ? (R.attr("tabindex", N),
                    R.removeAttr("data-wf-tabindex-swap"))
                  : R.removeAttr("tabindex");
              break;
          }
          R.toggleClass("wf-force-outline-none", I === "add");
        }
        function F(R) {
          var I = R.currentTarget;
          if (
            !(
              qi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))
            )
          ) {
            var N = O(I) ? I.hash : "";
            if (N !== "") {
              var U = e(N);
              U.length &&
                (R && (R.preventDefault(), R.stopPropagation()),
                G(N, R),
                window.setTimeout(
                  function () {
                    D(U, function () {
                      L(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        L(U, "remove");
                    });
                  },
                  R ? 0 : 300
                ));
            }
          }
        }
        function G(R) {
          if (
            r.hash !== R &&
            n &&
            n.pushState &&
            !(qi.env.chrome && r.protocol === "file:")
          ) {
            var I = n.state && n.state.hash;
            I !== R && n.pushState({ hash: R }, "", R);
          }
        }
        function D(R, I) {
          var N = i.scrollTop(),
            U = K(R);
          if (N !== U) {
            var H = z(R, N, U),
              ee = Date.now(),
              re = function () {
                var W = Date.now() - ee;
                window.scroll(0, Q(N, U, W, H)),
                  W <= H ? s(re) : typeof I == "function" && I();
              };
            s(re);
          }
        }
        function K(R) {
          var I = e(f),
            N = I.css("position") === "fixed" ? I.outerHeight() : 0,
            U = R.offset().top - N;
          if (R.data("scroll") === "mid") {
            var H = i.height() - N,
              ee = R.outerHeight();
            ee < H && (U -= Math.round((H - ee) / 2));
          }
          return U;
        }
        function z(R, I, N) {
          if (P()) return 0;
          var U = 1;
          return (
            a.add(R).each(function (H, ee) {
              var re = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (U = re);
            }),
            (472.143 * Math.log(Math.abs(I - N) + 125) - 2e3) * U
          );
        }
        function Q(R, I, N, U) {
          return N > U ? I : R + (I - R) * te(N / U);
        }
        function te(R) {
          return R < 0.5
            ? 4 * R * R * R
            : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1;
        }
        function j() {
          var { WF_CLICK_EMPTY: R, WF_CLICK_SCROLL: I } = t;
          o.on(I, p, F),
            o.on(R, _, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: j };
      })
    );
  });
  var Hb = l((wz, Wb) => {
    "use strict";
    var zV = Le();
    zV.define(
      "touch",
      (Wb.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            _;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", E, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", y, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", E, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", y, !1);
          function p(O) {
            var T = O.touches;
            (T && T.length > 1) ||
              ((a = !0),
              T ? ((s = !0), (f = T[0].clientX)) : (f = O.clientX),
              (_ = f));
          }
          function E(O) {
            if (a) {
              if (s && O.type === "mousemove") {
                O.preventDefault(), O.stopPropagation();
                return;
              }
              var T = O.touches,
                P = T ? T[0].clientX : O.clientX,
                L = P - _;
              (_ = P),
                Math.abs(L) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", O, { direction: L > 0 ? "right" : "left" }), y());
            }
          }
          function m(O) {
            if (a && ((a = !1), s && O.type === "mouseup")) {
              O.preventDefault(), O.stopPropagation(), (s = !1);
              return;
            }
          }
          function y() {
            a = !1;
          }
          function w() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", E, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", y, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", E, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", y, !1),
              (o = null);
          }
          this.destroy = w;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var jb = l((Tz, Xb) => {
    "use strict";
    var Wt = Le(),
      KV = Xt(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Bb = !0,
      YV = /^#[a-zA-Z0-9\-_]+$/;
    Wt.define(
      "dropdown",
      (Xb.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Wt.env(),
          o = !1,
          a,
          s = Wt.env.touch,
          u = ".w-dropdown",
          f = "w--open",
          _ = KV.triggers,
          p = 900,
          E = "focusout" + u,
          m = "keydown" + u,
          y = "mouseenter" + u,
          w = "mousemove" + u,
          O = "mouseleave" + u,
          T = (s ? "click" : "mouseup") + u,
          P = "w-close" + u,
          L = "setting" + u,
          F = e(document),
          G;
        (n.ready = D),
          (n.design = function () {
            o && I(), (o = !1), D();
          }),
          (n.preview = function () {
            (o = !0), D();
          });
        function D() {
          (a = i && Wt.env("design")), (G = F.find(u)), G.each(K);
        }
        function K(c, q) {
          var V = e(q),
            A = e.data(q, u);
          A ||
            (A = e.data(q, u, {
              open: !1,
              el: V,
              config: {},
              selectedIdx: -1,
            })),
            (A.toggle = A.el.children(".w-dropdown-toggle")),
            (A.list = A.el.children(".w-dropdown-list")),
            (A.links = A.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (A.complete = H(A)),
            (A.mouseLeave = re(A)),
            (A.mouseUpOutside = U(A)),
            (A.mouseMoveOutside = W(A)),
            z(A);
          var $ = A.toggle.attr("id"),
            se = A.list.attr("id");
          $ || ($ = "w-dropdown-toggle-" + c),
            se || (se = "w-dropdown-list-" + c),
            A.toggle.attr("id", $),
            A.toggle.attr("aria-controls", se),
            A.toggle.attr("aria-haspopup", "menu"),
            A.toggle.attr("aria-expanded", "false"),
            A.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            A.toggle.prop("tagName") !== "BUTTON" &&
              (A.toggle.attr("role", "button"),
              A.toggle.attr("tabindex") || A.toggle.attr("tabindex", "0")),
            A.list.attr("id", se),
            A.list.attr("aria-labelledby", $),
            A.links.each(function (b, X) {
              X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                YV.test(X.hash) && X.addEventListener("click", R.bind(null, A));
            }),
            A.el.off(u),
            A.toggle.off(u),
            A.nav && A.nav.off(u);
          var ie = te(A, Bb);
          a && A.el.on(L, Q(A)),
            a ||
              (i && ((A.hovering = !1), R(A)),
              A.config.hover && A.toggle.on(y, ee(A)),
              A.el.on(P, ie),
              A.el.on(m, B(A)),
              A.el.on(E, h(A)),
              A.toggle.on(T, ie),
              A.toggle.on(m, v(A)),
              (A.nav = A.el.closest(".w-nav")),
              A.nav.on(P, ie));
        }
        function z(c) {
          var q = Number(c.el.css("z-index"));
          (c.manageZ = q === p || q === p + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !s,
              delay: c.el.attr("data-delay"),
            });
        }
        function Q(c) {
          return function (q, V) {
            (V = V || {}),
              z(c),
              V.open === !0 && j(c, !0),
              V.open === !1 && R(c, { immediate: !0 });
          };
        }
        function te(c, q) {
          return r(function (V) {
            if (c.open || (V && V.type === "w-close"))
              return R(c, { forceClose: q });
            j(c);
          });
        }
        function j(c) {
          if (!c.open) {
            N(c),
              (c.open = !0),
              c.list.addClass(f),
              c.toggle.addClass(f),
              c.toggle.attr("aria-expanded", "true"),
              _.intro(0, c.el[0]),
              Wt.redraw.up(),
              c.manageZ && c.el.css("z-index", p + 1);
            var q = Wt.env("editor");
            a || F.on(T, c.mouseUpOutside),
              c.hovering && !q && c.el.on(O, c.mouseLeave),
              c.hovering && q && F.on(w, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function R(c, { immediate: q, forceClose: V } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !V)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var A = c.config;
            if (
              (_.outro(0, c.el[0]),
              F.off(T, c.mouseUpOutside),
              F.off(w, c.mouseMoveOutside),
              c.el.off(O, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !A.delay || q)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, A.delay);
          }
        }
        function I() {
          F.find(u).each(function (c, q) {
            e(q).triggerHandler(P);
          });
        }
        function N(c) {
          var q = c.el[0];
          G.each(function (V, A) {
            var $ = e(A);
            $.is(q) || $.has(q).length || $.triggerHandler(P);
          });
        }
        function U(c) {
          return (
            c.mouseUpOutside && F.off(T, c.mouseUpOutside),
            r(function (q) {
              if (c.open) {
                var V = e(q.target);
                if (!V.closest(".w-dropdown-toggle").length) {
                  var A = e.inArray(c.el[0], V.parents(u)) === -1,
                    $ = Wt.env("editor");
                  if (A) {
                    if ($) {
                      var se =
                          V.parents().length === 1 &&
                          V.parents("svg").length === 1,
                        ie = V.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (se || ie) return;
                    }
                    R(c);
                  }
                }
              }
            })
          );
        }
        function H(c) {
          return function () {
            c.list.removeClass(f),
              c.toggle.removeClass(f),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function ee(c) {
          return function () {
            (c.hovering = !0), j(c);
          };
        }
        function re(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || R(c);
          };
        }
        function W(c) {
          return r(function (q) {
            if (c.open) {
              var V = e(q.target),
                A = e.inArray(c.el[0], V.parents(u)) === -1;
              if (A) {
                var $ = V.parents(".w-editor-bem-EditorHoverControls").length,
                  se = V.parents(".w-editor-bem-RTToolbar").length,
                  ie = e(".w-editor-bem-EditorOverlay"),
                  b =
                    ie.find(".w-editor-edit-outline").length ||
                    ie.find(".w-editor-bem-RTToolbar").length;
                if ($ || se || b) return;
                (c.hovering = !1), R(c);
              }
            }
          });
        }
        function B(c) {
          return function (q) {
            if (!(a || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                q.keyCode)
              ) {
                case tt.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), g(c), q.preventDefault())
                    : void 0;
                case tt.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      g(c),
                      q.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return R(c), c.toggle.focus(), q.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    g(c),
                    q.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    g(c),
                    q.preventDefault()
                  );
              }
          };
        }
        function g(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function v(c) {
          var q = te(c, Bb);
          return function (V) {
            if (!a) {
              if (!c.open)
                switch (V.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return V.stopPropagation();
                }
              switch (V.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return q(), V.stopPropagation(), V.preventDefault();
              }
            }
          };
        }
        function h(c) {
          return r(function (q) {
            var { relatedTarget: V, target: A } = q,
              $ = c.el[0],
              se = $.contains(V) || $.contains(A);
            return se || R(c), q.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var zb = l((Ms) => {
    "use strict";
    Object.defineProperty(Ms, "__esModule", { value: !0 });
    Ms.default = QV;
    function QV(e, t, r, n, i, o, a, s, u, f, _, p, E) {
      return function (m) {
        e(m);
        var y = m.form,
          w = {
            name: y.attr("data-name") || y.attr("name") || "Untitled Form",
            pageId: y.attr("data-wf-page-id") || "",
            elementId: y.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              y.html()
            ),
            trackingCookies: n(),
          };
        let O = y.attr("data-wf-flow");
        O && (w.wfFlow = O), i(m);
        var T = o(y, w.fields);
        if (T) return a(T);
        if (((w.fileUploads = s(y)), u(m), !f)) {
          _(m);
          return;
        }
        p.ajax({
          url: E,
          type: "POST",
          data: w,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (P) {
            P && P.code === 200 && (m.success = !0), _(m);
          })
          .fail(function () {
            _(m);
          });
      };
    }
  });
  var Yb = l((Oz, Kb) => {
    "use strict";
    var Mi = Le();
    Mi.define(
      "forms",
      (Kb.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          _ = /^\S+@\S+$/,
          p = window.alert,
          E = Mi.env(),
          m,
          y,
          w,
          O = /list-manage[1-9]?.com/i,
          T = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              P(), !E && !m && F();
            };
        function P() {
          (u = e("html").attr("data-wf-site")),
            (y = "https://webflow.com/api/v1/form/" + u),
            a &&
              y.indexOf("https://webflow.com") >= 0 &&
              (y = y.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (w = `${y}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(L);
        }
        function L(W, B) {
          var g = e(B),
            v = e.data(B, s);
          v || (v = e.data(B, s, { form: g })), G(v);
          var h = g.closest("div.w-form");
          (v.done = h.find("> .w-form-done")),
            (v.fail = h.find("> .w-form-fail")),
            (v.fileUploads = h.find(".w-file-upload")),
            v.fileUploads.each(function (V) {
              H(V, v);
            });
          var c =
            v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
          v.done.attr("aria-label") || v.form.attr("aria-label", c),
            v.done.attr("tabindex", "-1"),
            v.done.attr("role", "region"),
            v.done.attr("aria-label") ||
              v.done.attr("aria-label", c + " success"),
            v.fail.attr("tabindex", "-1"),
            v.fail.attr("role", "region"),
            v.fail.attr("aria-label") ||
              v.fail.attr("aria-label", c + " failure");
          var q = (v.action = g.attr("action"));
          if (
            ((v.handler = null),
            (v.redirect = g.attr("data-redirect")),
            O.test(q))
          ) {
            v.handler = I;
            return;
          }
          if (!q) {
            if (u) {
              v.handler = (() => {
                let V = zb().default;
                return V(G, o, Mi, te, U, K, p, z, D, u, N, e, y);
              })();
              return;
            }
            T();
          }
        }
        function F() {
          (m = !0),
            n.on("submit", s + " form", function (V) {
              var A = e.data(this, s);
              A.handler && ((A.evt = V), A.handler(A));
            });
          let W = ".w-checkbox-input",
            B = ".w-radio-input",
            g = "w--redirected-checked",
            v = "w--redirected-focus",
            h = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            q = [
              ["checkbox", W],
              ["radio", B],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + W + ")",
            (V) => {
              e(V.target).siblings(W).toggleClass(g);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (V) => {
              e(`input[name="${V.target.name}"]:not(${W})`).map(($, se) =>
                e(se).siblings(B).removeClass(g)
              );
              let A = e(V.target);
              A.hasClass("w-radio-input") || A.siblings(B).addClass(g);
            }),
            q.forEach(([V, A]) => {
              n.on(
                "focus",
                s + ` form input[type="${V}"]:not(` + A + ")",
                ($) => {
                  e($.target).siblings(A).addClass(v),
                    e($.target).filter(c).siblings(A).addClass(h);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${V}"]:not(` + A + ")",
                  ($) => {
                    e($.target).siblings(A).removeClass(`${v} ${h}`);
                  }
                );
            });
        }
        function G(W) {
          var B = (W.btn = W.form.find(':input[type="submit"]'));
          (W.wait = W.btn.attr("data-wait") || null),
            (W.success = !1),
            B.prop("disabled", !1),
            W.label && B.val(W.label);
        }
        function D(W) {
          var B = W.btn,
            g = W.wait;
          B.prop("disabled", !0), g && ((W.label = B.val()), B.val(g));
        }
        function K(W, B) {
          var g = null;
          return (
            (B = B || {}),
            W.find(':input:not([type="submit"]):not([type="file"])').each(
              function (v, h) {
                var c = e(h),
                  q = c.attr("type"),
                  V =
                    c.attr("data-name") || c.attr("name") || "Field " + (v + 1);
                V = encodeURIComponent(V);
                var A = c.val();
                if (q === "checkbox") A = c.is(":checked");
                else if (q === "radio") {
                  if (B[V] === null || typeof B[V] == "string") return;
                  A =
                    W.find(
                      'input[name="' + c.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof A == "string" && (A = e.trim(A)),
                  (B[V] = A),
                  (g = g || j(c, q, V, A));
              }
            ),
            g
          );
        }
        function z(W) {
          var B = {};
          return (
            W.find(':input[type="file"]').each(function (g, v) {
              var h = e(v),
                c = h.attr("data-name") || h.attr("name") || "File " + (g + 1),
                q = h.attr("data-value");
              typeof q == "string" && (q = e.trim(q)), (B[c] = q);
            }),
            B
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function te() {
          return document.cookie.split("; ").reduce(function (B, g) {
            let v = g.split("="),
              h = v[0];
            if (h in Q) {
              let c = Q[h],
                q = v.slice(1).join("=");
              B[c] = q;
            }
            return B;
          }, {});
        }
        function j(W, B, g, v) {
          var h = null;
          return (
            B === "password"
              ? (h = "Passwords cannot be submitted.")
              : W.attr("required")
              ? v
                ? f.test(W.attr("type")) &&
                  (_.test(v) ||
                    (h = "Please enter a valid email address for: " + g))
                : (h = "Please fill out the required field: " + g)
              : g === "g-recaptcha-response" &&
                !v &&
                (h = "Please confirm you\u2019re not a robot."),
            h
          );
        }
        function R(W) {
          U(W), N(W);
        }
        function I(W) {
          G(W);
          var B = W.form,
            g = {};
          if (/^https/.test(o.href) && !/^https/.test(W.action)) {
            B.attr("method", "post");
            return;
          }
          U(W);
          var v = K(B, g);
          if (v) return p(v);
          D(W);
          var h;
          t.each(g, function (A, $) {
            f.test($) && (g.EMAIL = A),
              /^((full[ _-]?)?name)$/i.test($) && (h = A),
              /^(first[ _-]?name)$/i.test($) && (g.FNAME = A),
              /^(last[ _-]?name)$/i.test($) && (g.LNAME = A);
          }),
            h &&
              !g.FNAME &&
              ((h = h.split(" ")),
              (g.FNAME = h[0]),
              (g.LNAME = g.LNAME || h[1]));
          var c = W.action.replace("/post?", "/post-json?") + "&c=?",
            q = c.indexOf("u=") + 2;
          q = c.substring(q, c.indexOf("&", q));
          var V = c.indexOf("id=") + 3;
          (V = c.substring(V, c.indexOf("&", V))),
            (g["b_" + q + "_" + V] = ""),
            e
              .ajax({ url: c, data: g, dataType: "jsonp" })
              .done(function (A) {
                (W.success = A.result === "success" || /already/.test(A.msg)),
                  W.success || console.info("MailChimp error: " + A.msg),
                  N(W);
              })
              .fail(function () {
                N(W);
              });
        }
        function N(W) {
          var B = W.form,
            g = W.redirect,
            v = W.success;
          if (v && g) {
            Mi.location(g);
            return;
          }
          W.done.toggle(v),
            W.fail.toggle(!v),
            v ? W.done.focus() : W.fail.focus(),
            B.toggle(!v),
            G(W);
        }
        function U(W) {
          W.evt && W.evt.preventDefault(), (W.evt = null);
        }
        function H(W, B) {
          if (!B.fileUploads || !B.fileUploads[W]) return;
          var g,
            v = e(B.fileUploads[W]),
            h = v.find("> .w-file-upload-default"),
            c = v.find("> .w-file-upload-uploading"),
            q = v.find("> .w-file-upload-success"),
            V = v.find("> .w-file-upload-error"),
            A = h.find(".w-file-upload-input"),
            $ = h.find(".w-file-upload-label"),
            se = $.children(),
            ie = V.find(".w-file-upload-error-msg"),
            b = q.find(".w-file-upload-file"),
            X = q.find(".w-file-remove-link"),
            J = b.find(".w-file-upload-file-name"),
            Y = ie.attr("data-w-size-error"),
            le = ie.attr("data-w-type-error"),
            we = ie.attr("data-w-generic-error");
          if (
            (E ||
              $.on("click keydown", function (S) {
                (S.type === "keydown" && S.which !== 13 && S.which !== 32) ||
                  (S.preventDefault(), A.click());
              }),
            $.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            A.on("click", function (S) {
              S.preventDefault();
            }),
              $.on("click", function (S) {
                S.preventDefault();
              }),
              se.on("click", function (S) {
                S.preventDefault();
              });
          else {
            X.on("click keydown", function (S) {
              if (S.type === "keydown") {
                if (S.which !== 13 && S.which !== 32) return;
                S.preventDefault();
              }
              A.removeAttr("data-value"),
                A.val(""),
                J.html(""),
                h.toggle(!0),
                q.toggle(!1),
                $.focus();
            }),
              A.on("change", function (S) {
                (g = S.target && S.target.files && S.target.files[0]),
                  g &&
                    (h.toggle(!1),
                    V.toggle(!1),
                    c.toggle(!0),
                    c.focus(),
                    J.text(g.name),
                    M() || D(B),
                    (B.fileUploads[W].uploading = !0),
                    ee(g, x));
              });
            var Re = $.outerHeight();
            A.height(Re), A.width(1);
          }
          function d(S) {
            var k = S.responseJSON && S.responseJSON.msg,
              ne = we;
            typeof k == "string" && k.indexOf("InvalidFileTypeError") === 0
              ? (ne = le)
              : typeof k == "string" &&
                k.indexOf("MaxFileSizeError") === 0 &&
                (ne = Y),
              ie.text(ne),
              A.removeAttr("data-value"),
              A.val(""),
              c.toggle(!1),
              h.toggle(!0),
              V.toggle(!0),
              V.focus(),
              (B.fileUploads[W].uploading = !1),
              M() || G(B);
          }
          function x(S, k) {
            if (S) return d(S);
            var ne = k.fileName,
              ae = k.postData,
              ge = k.fileId,
              Z = k.s3Url;
            A.attr("data-value", ge), re(Z, ae, g, ne, C);
          }
          function C(S) {
            if (S) return d(S);
            c.toggle(!1),
              q.css("display", "inline-block"),
              q.focus(),
              (B.fileUploads[W].uploading = !1),
              M() || G(B);
          }
          function M() {
            var S = (B.fileUploads && B.fileUploads.toArray()) || [];
            return S.some(function (k) {
              return k.uploading;
            });
          }
        }
        function ee(W, B) {
          var g = new URLSearchParams({ name: W.name, size: W.size });
          e.ajax({ type: "GET", url: `${w}?${g}`, crossDomain: !0 })
            .done(function (v) {
              B(null, v);
            })
            .fail(function (v) {
              B(v);
            });
        }
        function re(W, B, g, v, h) {
          var c = new FormData();
          for (var q in B) c.append(q, B[q]);
          c.append("file", g, v),
            e
              .ajax({
                type: "POST",
                url: W,
                data: c,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                h(null);
              })
              .fail(function (V) {
                h(V);
              });
        }
        return r;
      })
    );
  });
  var Zb = l((Az, $b) => {
    "use strict";
    var Fs = Le(),
      Qb = "w-condition-invisible",
      $V = "." + Qb;
    function ZV(e) {
      return e.filter(function (t) {
        return !un(t);
      });
    }
    function un(e) {
      return !!(e.$el && e.$el.closest($V).length);
    }
    function Ds(e, t) {
      for (var r = e; r >= 0; r--) if (!un(t[r])) return r;
      return -1;
    }
    function ks(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!un(t[r])) return r;
      return -1;
    }
    function JV(e, t) {
      return Ds(e - 1, t) === -1;
    }
    function eW(e, t) {
      return ks(e + 1, t) === -1;
    }
    function sn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function tW(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        u = /(^|\s+)/g,
        f = [],
        _,
        p,
        E,
        m = [];
      function y(v, h) {
        return (
          (f = o(v) ? v : [v]),
          p || y.build(),
          ZV(f).length > 1 &&
            ((p.items = p.empty),
            f.forEach(function (c, q) {
              var V = B("thumbnail"),
                A = B("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(V);
              sn(A, `show item ${q + 1} of ${f.length}`),
                un(c) && A.addClass(Qb),
                (p.items = p.items.add(A)),
                te(c.thumbnailUrl || c.url, function ($) {
                  $.prop("width") > $.prop("height")
                    ? H($, "wide")
                    : H($, "tall"),
                    V.append(H($, "thumbnail-image"));
                });
            }),
            p.strip.empty().append(p.items),
            H(p.content, "group")),
          i(ee(p.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          H(p.html, "noscroll"),
          y.show(h || 0)
        );
      }
      (y.build = function () {
        return (
          y.destroy(),
          (p = { html: r(t.documentElement), empty: r() }),
          (p.arrowLeft = B("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (p.arrowRight = B("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (p.close = B("control close").attr("role", "button")),
          sn(p.arrowLeft, "previous image"),
          sn(p.arrowRight, "next image"),
          sn(p.close, "close lightbox"),
          (p.spinner = B("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (p.strip = B("strip").attr("role", "tablist")),
          (E = new I(p.spinner, N("hide"))),
          (p.content = B("content").append(
            p.spinner,
            p.arrowLeft,
            p.arrowRight,
            p.close
          )),
          (p.container = B("container").append(p.content, p.strip)),
          (p.lightbox = B("backdrop hide").append(p.container)),
          p.strip.on("click", U("item"), L),
          p.content
            .on("swipe", F)
            .on("click", U("left"), O)
            .on("click", U("right"), T)
            .on("click", U("close"), P)
            .on("click", U("image, caption"), T),
          p.container.on("click", U("view"), P).on("dragstart", U("img"), D),
          p.lightbox.on("keydown", K).on("focusin", G),
          r(n).append(p.lightbox),
          y
        );
      }),
        (y.destroy = function () {
          p && (ee(p.html, "noscroll"), p.lightbox.remove(), (p = void 0));
        }),
        (y.show = function (v) {
          if (v !== _) {
            var h = f[v];
            if (!h) return y.hide();
            if (un(h)) {
              if (v < _) {
                var c = Ds(v - 1, f);
                v = c > -1 ? c : v;
              } else {
                var q = ks(v + 1, f);
                v = q > -1 ? q : v;
              }
              h = f[v];
            }
            var V = _;
            (_ = v),
              p.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              E.show();
            var A = (h.html && g(h.width, h.height)) || h.url;
            return (
              te(A, function ($) {
                if (v !== _) return;
                var se = B("figure", "figure").append(H($, "image")),
                  ie = B("frame").append(se),
                  b = B("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ie),
                  X,
                  J;
                h.html &&
                  ((X = r(h.html)),
                  (J = X.is("iframe")),
                  J && X.on("load", Y),
                  se.append(H(X, "embed"))),
                  h.caption &&
                    se.append(B("caption", "figcaption").text(h.caption)),
                  p.spinner.before(b),
                  J || Y();
                function Y() {
                  if (
                    (p.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    E.hide(),
                    v !== _)
                  ) {
                    b.remove();
                    return;
                  }
                  let le = JV(v, f);
                  re(p.arrowLeft, "inactive", le),
                    W(p.arrowLeft, le),
                    le && p.arrowLeft.is(":focus") && p.arrowRight.focus();
                  let we = eW(v, f);
                  if (
                    (re(p.arrowRight, "inactive", we),
                    W(p.arrowRight, we),
                    we && p.arrowRight.is(":focus") && p.arrowLeft.focus(),
                    p.view
                      ? (i(p.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(j(p.view)),
                        i(b)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: v > V ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : b.css("opacity", 1),
                    (p.view = b),
                    p.view.prop("tabIndex", 0),
                    p.items)
                  ) {
                    ee(p.items, "active"), p.items.removeAttr("aria-selected");
                    var Re = p.items.eq(v);
                    H(Re, "active"), Re.attr("aria-selected", !0), R(Re);
                  }
                }
              }),
              p.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (m.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                p.close.focus()),
              y
            );
          }
        }),
        (y.hide = function () {
          return (
            i(p.lightbox).add("opacity .3s").start({ opacity: 0 }).then(Q), y
          );
        }),
        (y.prev = function () {
          var v = Ds(_ - 1, f);
          v > -1 && y.show(v);
        }),
        (y.next = function () {
          var v = ks(_ + 1, f);
          v > -1 && y.show(v);
        });
      function w(v) {
        return function (h) {
          this === h.target && (h.stopPropagation(), h.preventDefault(), v());
        };
      }
      var O = w(y.prev),
        T = w(y.next),
        P = w(y.hide),
        L = function (v) {
          var h = r(this).index();
          v.preventDefault(), y.show(h);
        },
        F = function (v, h) {
          v.preventDefault(),
            h.direction === "left"
              ? y.next()
              : h.direction === "right" && y.prev();
        },
        G = function () {
          this.focus();
        };
      function D(v) {
        v.preventDefault();
      }
      function K(v) {
        var h = v.keyCode;
        h === 27 || z(h, "close")
          ? y.hide()
          : h === 37 || z(h, "left")
          ? y.prev()
          : h === 39 || z(h, "right")
          ? y.next()
          : z(h, "item") && r(":focus").click();
      }
      function z(v, h) {
        if (v !== 13 && v !== 32) return !1;
        var c = r(":focus").attr("class"),
          q = N(h).trim();
        return c.includes(q);
      }
      function Q() {
        p &&
          (p.strip.scrollLeft(0).empty(),
          ee(p.html, "noscroll"),
          H(p.lightbox, "hide"),
          p.view && p.view.remove(),
          ee(p.content, "group"),
          H(p.arrowLeft, "inactive"),
          H(p.arrowRight, "inactive"),
          (_ = p.view = void 0),
          m.forEach(function (v) {
            var h = v.node;
            h &&
              (v.hidden
                ? h.attr("aria-hidden", v.hidden)
                : h.removeAttr("aria-hidden"),
              v.tabIndex
                ? h.attr("tabIndex", v.tabIndex)
                : h.removeAttr("tabIndex"));
          }),
          (m = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function te(v, h) {
        var c = B("img", "img");
        return (
          c.one("load", function () {
            h(c);
          }),
          c.attr("src", v),
          c
        );
      }
      function j(v) {
        return function () {
          v.remove();
        };
      }
      function R(v) {
        var h = v.get(0),
          c = p.strip.get(0),
          q = h.offsetLeft,
          V = h.clientWidth,
          A = c.scrollLeft,
          $ = c.clientWidth,
          se = c.scrollWidth - $,
          ie;
        q < A
          ? (ie = Math.max(0, q + V - $))
          : q + V > $ + A && (ie = Math.min(q, se)),
          ie != null &&
            i(p.strip).add("scroll-left 500ms").start({ "scroll-left": ie });
      }
      function I(v, h, c) {
        (this.$element = v),
          (this.className = h),
          (this.delay = c || 200),
          this.hide();
      }
      (I.prototype.show = function () {
        var v = this;
        v.timeoutId ||
          (v.timeoutId = setTimeout(function () {
            v.$element.removeClass(v.className), delete v.timeoutId;
          }, v.delay));
      }),
        (I.prototype.hide = function () {
          var v = this;
          if (v.timeoutId) {
            clearTimeout(v.timeoutId), delete v.timeoutId;
            return;
          }
          v.$element.addClass(v.className);
        });
      function N(v, h) {
        return v.replace(u, (h ? " ." : " ") + s);
      }
      function U(v) {
        return N(v, !0);
      }
      function H(v, h) {
        return v.addClass(N(h));
      }
      function ee(v, h) {
        return v.removeClass(N(h));
      }
      function re(v, h, c) {
        return v.toggleClass(N(h), c);
      }
      function W(v, h) {
        return v.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0);
      }
      function B(v, h) {
        return H(r(t.createElement(h || "div")), v);
      }
      function g(v, h) {
        var c =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          v +
          '" height="' +
          h +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(c);
      }
      return (
        (function () {
          var v = e.navigator.userAgent,
            h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            c = v.match(h),
            q = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
          if (!q && (!c || c[2] > 7)) return;
          var V = t.createElement("style");
          t.head.appendChild(V), e.addEventListener("resize", A, !0);
          function A() {
            var $ = e.innerHeight,
              se = e.innerWidth,
              ie =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                $ +
                "px}.w-lightbox-view {width:" +
                se +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * $ +
                "px}.w-lightbox-image {max-width:" +
                se +
                "px;max-height:" +
                $ +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * $ +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * $ +
                "px}.w-lightbox-item {width:" +
                0.1 * $ +
                "px;padding:" +
                0.02 * $ +
                "px " +
                0.01 * $ +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * $ +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * $ +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * $ +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * $ +
                "px}.w-lightbox-image {max-width:" +
                0.96 * se +
                "px;max-height:" +
                0.96 * $ +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * se +
                "px;max-height:" +
                0.84 * $ +
                "px}}";
            V.textContent = ie;
          }
          A();
        })(),
        y
      );
    }
    Fs.define(
      "lightbox",
      ($b.exports = function (e) {
        var t = {},
          r = Fs.env(),
          n = tW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = f;
        function f() {
          (a = r && Fs.env("design")),
            n.destroy(),
            (u = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              sn(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (y, w) {
              var O = e.data(w, s);
              O ||
                (O = e.data(w, s, {
                  el: e(w),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                O.el.off(s),
                _(O),
                a
                  ? O.el.on("setting" + s, _.bind(null, O))
                  : O.el.on("click" + s, p(O)).on("click" + s, function (T) {
                      T.preventDefault();
                    });
            });
          },
        });
        function _(m) {
          var y = m.el.children(".w-json").html(),
            w,
            O;
          if (!y) {
            m.items = [];
            return;
          }
          try {
            y = JSON.parse(y);
          } catch (T) {
            console.error("Malformed lightbox JSON configuration.", T);
          }
          E(y),
            y.items.forEach(function (T) {
              T.$el = m.el;
            }),
            (w = y.group),
            w
              ? ((O = u[w]),
                O || (O = u[w] = []),
                (m.items = O),
                y.items.length &&
                  ((m.index = O.length), O.push.apply(O, y.items)))
              : ((m.items = y.items), (m.index = 0));
        }
        function p(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function E(m) {
          m.images &&
            (m.images.forEach(function (y) {
              y.type = "image";
            }),
            (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var e_ = l((Sz, Jb) => {
    "use strict";
    var St = Le(),
      rW = Xt(),
      Ce = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (Jb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          _,
          p = St.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          y = "w--open",
          w = "w--nav-dropdown-open",
          O = "w--nav-dropdown-toggle-open",
          T = "w--nav-dropdown-list-open",
          P = "w--nav-link-open",
          L = rW.triggers,
          F = e();
        (r.ready = r.design = r.preview = G),
          (r.destroy = function () {
            (F = e()), D(), u && u.length && u.each(te);
          });
        function G() {
          (f = p && St.env("design")),
            (_ = St.env("editor")),
            (s = e(document.body)),
            (u = o.find(m)),
            u.length && (u.each(Q), D(), K());
        }
        function D() {
          St.resize.off(z);
        }
        function K() {
          St.resize.on(z);
        }
        function z() {
          u.each(h);
        }
        function Q(b, X) {
          var J = e(X),
            Y = e.data(X, m);
          Y ||
            (Y = e.data(X, m, {
              open: !1,
              el: J,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = J.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = J.find(".w-nav-button")),
            (Y.container = J.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + b),
            (Y.outside = g(Y));
          var le = J.find(".w-nav-brand");
          le &&
            le.attr("href") === "/" &&
            le.attr("aria-label") == null &&
            le.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(m),
            Y.button.off(m),
            Y.menu.off(m),
            I(Y),
            f
              ? (j(Y), Y.el.on("setting" + m, N(Y)))
              : (R(Y),
                Y.button.on("click" + m, W(Y)),
                Y.menu.on("click" + m, "a", B(Y)),
                Y.button.on("keydown" + m, U(Y)),
                Y.el.on("keydown" + m, H(Y))),
            h(b, X);
        }
        function te(b, X) {
          var J = e.data(X, m);
          J && (j(J), e.removeData(X, m));
        }
        function j(b) {
          b.overlay && (ie(b, !0), b.overlay.remove(), (b.overlay = null));
        }
        function R(b) {
          b.overlay ||
            ((b.overlay = e(E).appendTo(b.el)),
            b.overlay.attr("id", b.overlayContainerId),
            (b.parent = b.menu.parent()),
            ie(b, !0));
        }
        function I(b) {
          var X = {},
            J = b.config || {},
            Y = (X.animation = b.el.attr("data-animation") || "default");
          (X.animOver = /^over/.test(Y)),
            (X.animDirect = /left$/.test(Y) ? -1 : 1),
            J.animation !== Y && b.open && t.defer(re, b),
            (X.easing = b.el.attr("data-easing") || "ease"),
            (X.easing2 = b.el.attr("data-easing2") || "ease");
          var le = b.el.attr("data-duration");
          (X.duration = le != null ? Number(le) : 400),
            (X.docHeight = b.el.attr("data-doc-height")),
            (b.config = X);
        }
        function N(b) {
          return function (X, J) {
            J = J || {};
            var Y = i.width();
            I(b),
              J.open === !0 && $(b, !0),
              J.open === !1 && ie(b, !0),
              b.open &&
                t.defer(function () {
                  Y !== i.width() && re(b);
                });
          };
        }
        function U(b) {
          return function (X) {
            switch (X.keyCode) {
              case Ce.SPACE:
              case Ce.ENTER:
                return W(b)(), X.preventDefault(), X.stopPropagation();
              case Ce.ESCAPE:
                return ie(b), X.preventDefault(), X.stopPropagation();
              case Ce.ARROW_RIGHT:
              case Ce.ARROW_DOWN:
              case Ce.HOME:
              case Ce.END:
                return b.open
                  ? (X.keyCode === Ce.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    ee(b),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function H(b) {
          return function (X) {
            if (b.open)
              switch (
                ((b.selectedIdx = b.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case Ce.HOME:
                case Ce.END:
                  return (
                    X.keyCode === Ce.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    ee(b),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Ce.ESCAPE:
                  return (
                    ie(b),
                    b.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Ce.ARROW_LEFT:
                case Ce.ARROW_UP:
                  return (
                    (b.selectedIdx = Math.max(-1, b.selectedIdx - 1)),
                    ee(b),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Ce.ARROW_RIGHT:
                case Ce.ARROW_DOWN:
                  return (
                    (b.selectedIdx = Math.min(
                      b.links.length - 1,
                      b.selectedIdx + 1
                    )),
                    ee(b),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
              }
          };
        }
        function ee(b) {
          if (b.links[b.selectedIdx]) {
            var X = b.links[b.selectedIdx];
            X.focus(), B(X);
          }
        }
        function re(b) {
          b.open && (ie(b, !0), $(b, !0));
        }
        function W(b) {
          return a(function () {
            b.open ? ie(b) : $(b);
          });
        }
        function B(b) {
          return function (X) {
            var J = e(this),
              Y = J.attr("href");
            if (!St.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && b.open && ie(b);
          };
        }
        function g(b) {
          return (
            b.outside && o.off("click" + m, b.outside),
            function (X) {
              var J = e(X.target);
              (_ && J.closest(".w-editor-bem-EditorOverlay").length) || v(b, J);
            }
          );
        }
        var v = a(function (b, X) {
          if (b.open) {
            var J = X.closest(".w-nav-menu");
            b.menu.is(J) || ie(b);
          }
        });
        function h(b, X) {
          var J = e.data(X, m),
            Y = (J.collapsed = J.button.css("display") !== "none");
          if ((J.open && !Y && !f && ie(J, !0), J.container.length)) {
            var le = q(J);
            J.links.each(le), J.dropdowns.each(le);
          }
          J.open && se(J);
        }
        var c = "max-width";
        function q(b) {
          var X = b.container.css(c);
          return (
            X === "none" && (X = ""),
            function (J, Y) {
              (Y = e(Y)), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, X);
            }
          );
        }
        function V(b, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function A(b, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function $(b, X) {
          if (b.open) return;
          (b.open = !0),
            b.menu.each(V),
            b.links.addClass(P),
            b.dropdowns.addClass(w),
            b.dropdownToggle.addClass(O),
            b.dropdownList.addClass(T),
            b.button.addClass(y);
          var J = b.config,
            Y = J.animation;
          (Y === "none" || !n.support.transform || J.duration <= 0) && (X = !0);
          var le = se(b),
            we = b.menu.outerHeight(!0),
            Re = b.menu.outerWidth(!0),
            d = b.el.height(),
            x = b.el[0];
          if (
            (h(0, x),
            L.intro(0, x),
            St.redraw.up(),
            f || o.on("click" + m, b.outside),
            X)
          ) {
            S();
            return;
          }
          var C = "transform " + J.duration + "ms " + J.easing;
          if (
            (b.overlay &&
              ((F = b.menu.prev()), b.overlay.show().append(b.menu)),
            J.animOver)
          ) {
            n(b.menu)
              .add(C)
              .set({ x: J.animDirect * Re, height: le })
              .start({ x: 0 })
              .then(S),
              b.overlay && b.overlay.width(Re);
            return;
          }
          var M = d + we;
          n(b.menu).add(C).set({ y: -M }).start({ y: 0 }).then(S);
          function S() {
            b.button.attr("aria-expanded", "true");
          }
        }
        function se(b) {
          var X = b.config,
            J = X.docHeight ? o.height() : s.height();
          return (
            X.animOver
              ? b.menu.height(J)
              : b.el.css("position") !== "fixed" && (J -= b.el.outerHeight(!0)),
            b.overlay && b.overlay.height(J),
            J
          );
        }
        function ie(b, X) {
          if (!b.open) return;
          (b.open = !1), b.button.removeClass(y);
          var J = b.config;
          if (
            ((J.animation === "none" ||
              !n.support.transform ||
              J.duration <= 0) &&
              (X = !0),
            L.outro(0, b.el[0]),
            o.off("click" + m, b.outside),
            X)
          ) {
            n(b.menu).stop(), x();
            return;
          }
          var Y = "transform " + J.duration + "ms " + J.easing2,
            le = b.menu.outerHeight(!0),
            we = b.menu.outerWidth(!0),
            Re = b.el.height();
          if (J.animOver) {
            n(b.menu)
              .add(Y)
              .start({ x: we * J.animDirect })
              .then(x);
            return;
          }
          var d = Re + le;
          n(b.menu).add(Y).start({ y: -d }).then(x);
          function x() {
            b.menu.height(""),
              n(b.menu).set({ x: 0, y: 0 }),
              b.menu.each(A),
              b.links.removeClass(P),
              b.dropdowns.removeClass(w),
              b.dropdownToggle.removeClass(O),
              b.dropdownList.removeClass(T),
              b.overlay &&
                b.overlay.children().length &&
                (F.length ? b.menu.insertAfter(F) : b.menu.prependTo(b.parent),
                b.overlay.attr("style", "").hide()),
              b.el.triggerHandler("w-close"),
              b.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var n_ = l((Cz, r_) => {
    "use strict";
    var Ct = Le(),
      nW = Xt(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      t_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ct.define(
      "slider",
      (r_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = Ct.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          _ =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          p = "w-slider-force-show",
          E = nW.triggers,
          m,
          y = !1;
        (r.ready = function () {
          (a = Ct.env("design")), w();
        }),
          (r.design = function () {
            (a = !0), setTimeout(w, 1e3);
          }),
          (r.preview = function () {
            (a = !1), w();
          }),
          (r.redraw = function () {
            (y = !0), w(), (y = !1);
          }),
          (r.destroy = O);
        function w() {
          (o = i.find(u)), o.length && (o.each(L), !m && (O(), T()));
        }
        function O() {
          Ct.resize.off(P), Ct.redraw.off(r.redraw);
        }
        function T() {
          Ct.resize.on(P), Ct.redraw.on(r.redraw);
        }
        function P() {
          o.filter(":visible").each(H);
        }
        function L(g, v) {
          var h = e(v),
            c = e.data(v, u);
          c ||
            (c = e.data(v, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: h,
              config: {},
            })),
            (c.mask = h.children(".w-slider-mask")),
            (c.left = h.children(".w-slider-arrow-left")),
            (c.right = h.children(".w-slider-arrow-right")),
            (c.nav = h.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(E.reset),
            y && (c.maskWidth = 0),
            h.attr("role") === void 0 && h.attr("role", "region"),
            h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
          var q = c.mask.attr("id");
          if (
            (q || ((q = "w-slider-mask-" + g), c.mask.attr("id", q)),
            !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(_).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", q),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", q),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(u),
            c.left.off(u),
            c.right.off(u),
            c.nav.off(u),
            F(c),
            a
              ? (c.el.on("setting" + u, I(c)), R(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + u, I(c)),
                c.left.on("click" + u, z(c)),
                c.right.on("click" + u, Q(c)),
                c.left.on("keydown" + u, K(c, z)),
                c.right.on("keydown" + u, K(c, Q)),
                c.nav.on("keydown" + u, "> div", I(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), j(c)),
                c.el.on("mouseenter" + u, D(c, !0, "mouse")),
                c.el.on("focusin" + u, D(c, !0, "keyboard")),
                c.el.on("mouseleave" + u, D(c, !1, "mouse")),
                c.el.on("focusout" + u, D(c, !1, "keyboard"))),
            c.nav.on("click" + u, "> div", I(c)),
            s ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var V = h.filter(":hidden");
          V.addClass(p);
          var A = h.parents(":hidden");
          A.addClass(p), y || H(g, v), V.removeClass(p), A.removeClass(p);
        }
        function F(g) {
          var v = {};
          (v.crossOver = 0),
            (v.animation = g.el.attr("data-animation") || "slide"),
            v.animation === "outin" &&
              ((v.animation = "cross"), (v.crossOver = 0.5)),
            (v.easing = g.el.attr("data-easing") || "ease");
          var h = g.el.attr("data-duration");
          if (
            ((v.duration = h != null ? parseInt(h, 10) : 500),
            G(g.el.attr("data-infinite")) && (v.infinite = !0),
            G(g.el.attr("data-disable-swipe")) && (v.disableSwipe = !0),
            G(g.el.attr("data-hide-arrows"))
              ? (v.hideArrows = !0)
              : g.config.hideArrows && (g.left.show(), g.right.show()),
            G(g.el.attr("data-autoplay")))
          ) {
            (v.autoplay = !0),
              (v.delay = parseInt(g.el.attr("data-delay"), 10) || 2e3),
              (v.timerMax = parseInt(g.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + u + " touchstart" + u;
            a ||
              g.el.off(c).one(c, function () {
                R(g);
              });
          }
          var q = g.right.width();
          (v.edge = q ? q + 40 : 100), (g.config = v);
        }
        function G(g) {
          return g === "1" || g === "true";
        }
        function D(g, v, h) {
          return function (c) {
            if (v) g.hasFocus[h] = v;
            else if (
              e.contains(g.el.get(0), c.relatedTarget) ||
              ((g.hasFocus[h] = v),
              (g.hasFocus.mouse && h === "keyboard") ||
                (g.hasFocus.keyboard && h === "mouse"))
            )
              return;
            v
              ? (g.ariaLiveLabel.attr("aria-live", "polite"),
                g.hasTimer && R(g))
              : (g.ariaLiveLabel.attr("aria-live", "off"), g.hasTimer && j(g));
          };
        }
        function K(g, v) {
          return function (h) {
            switch (h.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return v(g)(), h.preventDefault(), h.stopPropagation();
            }
          };
        }
        function z(g) {
          return function () {
            U(g, { index: g.index - 1, vector: -1 });
          };
        }
        function Q(g) {
          return function () {
            U(g, { index: g.index + 1, vector: 1 });
          };
        }
        function te(g, v) {
          var h = null;
          v === g.slides.length && (w(), ee(g)),
            t.each(g.anchors, function (c, q) {
              e(c.els).each(function (V, A) {
                e(A).index() === v && (h = q);
              });
            }),
            h != null && U(g, { index: h, immediate: !0 });
        }
        function j(g) {
          R(g);
          var v = g.config,
            h = v.timerMax;
          (h && g.timerCount++ > h) ||
            (g.timerId = window.setTimeout(function () {
              g.timerId == null || a || (Q(g)(), j(g));
            }, v.delay));
        }
        function R(g) {
          window.clearTimeout(g.timerId), (g.timerId = null);
        }
        function I(g) {
          return function (v, h) {
            h = h || {};
            var c = g.config;
            if (a && v.type === "setting") {
              if (h.select === "prev") return z(g)();
              if (h.select === "next") return Q(g)();
              if ((F(g), ee(g), h.select == null)) return;
              te(g, h.select);
              return;
            }
            if (v.type === "swipe")
              return c.disableSwipe || Ct.env("editor")
                ? void 0
                : h.direction === "left"
                ? Q(g)()
                : h.direction === "right"
                ? z(g)()
                : void 0;
            if (g.nav.has(v.target).length) {
              var q = e(v.target).index();
              if (
                (v.type === "click" && U(g, { index: q }), v.type === "keydown")
              )
                switch (v.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    U(g, { index: q }), v.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    N(g.nav, Math.max(q - 1, 0)), v.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    N(g.nav, Math.min(q + 1, g.pages)), v.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    N(g.nav, 0), v.preventDefault();
                    break;
                  }
                  case dt.END: {
                    N(g.nav, g.pages), v.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function N(g, v) {
          var h = g.children().eq(v).focus();
          g.children().not(h);
        }
        function U(g, v) {
          v = v || {};
          var h = g.config,
            c = g.anchors;
          g.previous = g.index;
          var q = v.index,
            V = {};
          q < 0
            ? ((q = c.length - 1),
              h.infinite &&
                ((V.x = -g.endX), (V.from = 0), (V.to = c[0].width)))
            : q >= c.length &&
              ((q = 0),
              h.infinite &&
                ((V.x = c[c.length - 1].width),
                (V.from = -c[c.length - 1].x),
                (V.to = V.from - V.x))),
            (g.index = q);
          var A = g.nav
            .children()
            .eq(q)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          g.nav
            .children()
            .not(A)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            h.hideArrows &&
              (g.index === c.length - 1 ? g.right.hide() : g.right.show(),
              g.index === 0 ? g.left.hide() : g.left.show());
          var $ = g.offsetX || 0,
            se = (g.offsetX = -c[g.index].x),
            ie = { x: se, opacity: 1, visibility: "" },
            b = e(c[g.index].els),
            X = e(c[g.previous] && c[g.previous].els),
            J = g.slides.not(b),
            Y = h.animation,
            le = h.easing,
            we = Math.round(h.duration),
            Re = v.vector || (g.index > g.previous ? 1 : -1),
            d = "opacity " + we + "ms " + le,
            x = "transform " + we + "ms " + le;
          if (
            (b.find(t_).removeAttr("tabindex"),
            b.removeAttr("aria-hidden"),
            b.find("*").removeAttr("aria-hidden"),
            J.find(t_).attr("tabindex", "-1"),
            J.attr("aria-hidden", "true"),
            J.find("*").attr("aria-hidden", "true"),
            a || (b.each(E.intro), J.each(E.outro)),
            v.immediate && !y)
          ) {
            n(b).set(ie), S();
            return;
          }
          if (g.index === g.previous) return;
          if (
            (a || g.ariaLiveLabel.text(`Slide ${q + 1} of ${c.length}.`),
            Y === "cross")
          ) {
            var C = Math.round(we - we * h.crossOver),
              M = Math.round(we - C);
            (d = "opacity " + C + "ms " + le),
              n(X).set({ visibility: "" }).add(d).start({ opacity: 0 }),
              n(b)
                .set({ visibility: "", x: se, opacity: 0, zIndex: g.depth++ })
                .add(d)
                .wait(M)
                .then({ opacity: 1 })
                .then(S);
            return;
          }
          if (Y === "fade") {
            n(X).set({ visibility: "" }).stop(),
              n(b)
                .set({ visibility: "", x: se, opacity: 0, zIndex: g.depth++ })
                .add(d)
                .start({ opacity: 1 })
                .then(S);
            return;
          }
          if (Y === "over") {
            (ie = { x: g.endX }),
              n(X).set({ visibility: "" }).stop(),
              n(b)
                .set({
                  visibility: "",
                  zIndex: g.depth++,
                  x: se + c[g.index].width * Re,
                })
                .add(x)
                .start({ x: se })
                .then(S);
            return;
          }
          h.infinite && V.x
            ? (n(g.slides.not(X))
                .set({ visibility: "", x: V.x })
                .add(x)
                .start({ x: se }),
              n(X).set({ visibility: "", x: V.from }).add(x).start({ x: V.to }),
              (g.shifted = X))
            : (h.infinite &&
                g.shifted &&
                (n(g.shifted).set({ visibility: "", x: $ }),
                (g.shifted = null)),
              n(g.slides).set({ visibility: "" }).add(x).start({ x: se }));
          function S() {
            (b = e(c[g.index].els)),
              (J = g.slides.not(b)),
              Y !== "slide" && (ie.visibility = "hidden"),
              n(J).set(ie);
          }
        }
        function H(g, v) {
          var h = e.data(v, u);
          if (h) {
            if (W(h)) return ee(h);
            a && B(h) && ee(h);
          }
        }
        function ee(g) {
          var v = 1,
            h = 0,
            c = 0,
            q = 0,
            V = g.maskWidth,
            A = V - g.config.edge;
          A < 0 && (A = 0),
            (g.anchors = [{ els: [], x: 0, width: 0 }]),
            g.slides.each(function (se, ie) {
              c - h > A &&
                (v++,
                (h += V),
                (g.anchors[v - 1] = { els: [], x: c, width: 0 })),
                (q = e(ie).outerWidth(!0)),
                (c += q),
                (g.anchors[v - 1].width += q),
                g.anchors[v - 1].els.push(ie);
              var b = se + 1 + " of " + g.slides.length;
              e(ie).attr("aria-label", b), e(ie).attr("role", "group");
            }),
            (g.endX = c),
            a && (g.pages = null),
            g.nav.length && g.pages !== v && ((g.pages = v), re(g));
          var $ = g.index;
          $ >= v && ($ = v - 1), U(g, { immediate: !0, index: $ });
        }
        function re(g) {
          var v = [],
            h,
            c = g.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var q = 0, V = g.pages; q < V; q++)
            (h = e(f)),
              h
                .attr("aria-label", "Show slide " + (q + 1) + " of " + V)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              g.nav.hasClass("w-num") && h.text(q + 1),
              c != null && h.css({ "margin-left": c, "margin-right": c }),
              v.push(h);
          g.nav.empty().append(v);
        }
        function W(g) {
          var v = g.mask.width();
          return g.maskWidth !== v ? ((g.maskWidth = v), !0) : !1;
        }
        function B(g) {
          var v = 0;
          return (
            g.slides.each(function (h, c) {
              v += e(c).outerWidth(!0);
            }),
            g.slidesWidth !== v ? ((g.slidesWidth = v), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var o_ = l((Rz, i_) => {
    "use strict";
    var Rt = Le(),
      iW = Xt();
    Rt.define(
      "tabs",
      (i_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Rt.env,
          s = a.safari,
          u = a(),
          f = "data-w-tab",
          _ = "data-w-pane",
          p = ".w-tabs",
          E = "w--current",
          m = "w--tab-active",
          y = iW.triggers,
          w = !1;
        (t.ready = t.design = t.preview = O),
          (t.redraw = function () {
            (w = !0), O(), (w = !1);
          }),
          (t.destroy = function () {
            (i = n.find(p)), i.length && (i.each(L), T());
          });
        function O() {
          (o = u && Rt.env("design")),
            (i = n.find(p)),
            i.length &&
              (i.each(F), Rt.env("preview") && !w && i.each(L), T(), P());
        }
        function T() {
          Rt.redraw.off(t.redraw);
        }
        function P() {
          Rt.redraw.on(t.redraw);
        }
        function L(j, R) {
          var I = e.data(R, p);
          I &&
            (I.links && I.links.each(y.reset),
            I.panes && I.panes.each(y.reset));
        }
        function F(j, R) {
          var I = p.substr(1) + "-" + j,
            N = e(R),
            U = e.data(R, p);
          if (
            (U || (U = e.data(R, p, { el: N, config: {} })),
            (U.current = null),
            (U.tabIdentifier = I + "-" + f),
            (U.paneIdentifier = I + "-" + _),
            (U.menu = N.children(".w-tab-menu")),
            (U.links = U.menu.children(".w-tab-link")),
            (U.content = N.children(".w-tab-content")),
            (U.panes = U.content.children(".w-tab-pane")),
            U.el.off(p),
            U.links.off(p),
            U.menu.attr("role", "tablist"),
            U.links.attr("tabindex", "-1"),
            G(U),
            !o)
          ) {
            U.links.on("click" + p, K(U)), U.links.on("keydown" + p, z(U));
            var H = U.links.filter("." + E),
              ee = H.attr(f);
            ee && Q(U, { tab: ee, immediate: !0 });
          }
        }
        function G(j) {
          var R = {};
          R.easing = j.el.attr("data-easing") || "ease";
          var I = parseInt(j.el.attr("data-duration-in"), 10);
          I = R.intro = I === I ? I : 0;
          var N = parseInt(j.el.attr("data-duration-out"), 10);
          (N = R.outro = N === N ? N : 0),
            (R.immediate = !I && !N),
            (j.config = R);
        }
        function D(j) {
          var R = j.current;
          return Array.prototype.findIndex.call(
            j.links,
            (I) => I.getAttribute(f) === R,
            null
          );
        }
        function K(j) {
          return function (R) {
            R.preventDefault();
            var I = R.currentTarget.getAttribute(f);
            I && Q(j, { tab: I });
          };
        }
        function z(j) {
          return function (R) {
            var I = D(j),
              N = R.key,
              U = {
                ArrowLeft: I - 1,
                ArrowUp: I - 1,
                ArrowRight: I + 1,
                ArrowDown: I + 1,
                End: j.links.length - 1,
                Home: 0,
              };
            if (N in U) {
              R.preventDefault();
              var H = U[N];
              H === -1 && (H = j.links.length - 1),
                H === j.links.length && (H = 0);
              var ee = j.links[H],
                re = ee.getAttribute(f);
              re && Q(j, { tab: re });
            }
          };
        }
        function Q(j, R) {
          R = R || {};
          var I = j.config,
            N = I.easing,
            U = R.tab;
          if (U !== j.current) {
            j.current = U;
            var H;
            j.links.each(function (h, c) {
              var q = e(c);
              if (R.immediate || I.immediate) {
                var V = j.panes[h];
                c.id || (c.id = j.tabIdentifier + "-" + h),
                  V.id || (V.id = j.paneIdentifier + "-" + h),
                  (c.href = "#" + V.id),
                  c.setAttribute("role", "tab"),
                  c.setAttribute("aria-controls", V.id),
                  c.setAttribute("aria-selected", "false"),
                  V.setAttribute("role", "tabpanel"),
                  V.setAttribute("aria-labelledby", c.id);
              }
              c.getAttribute(f) === U
                ? ((H = c),
                  q
                    .addClass(E)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : q.hasClass(E) &&
                  q
                    .removeClass(E)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var ee = [],
              re = [];
            j.panes.each(function (h, c) {
              var q = e(c);
              c.getAttribute(f) === U
                ? ee.push(c)
                : q.hasClass(m) && re.push(c);
            });
            var W = e(ee),
              B = e(re);
            if (R.immediate || I.immediate) {
              W.addClass(m).each(y.intro),
                B.removeClass(m),
                w || Rt.redraw.up();
              return;
            } else {
              var g = window.scrollX,
                v = window.scrollY;
              H.focus(), window.scrollTo(g, v);
            }
            B.length && I.outro
              ? (B.each(y.outro),
                r(B)
                  .add("opacity " + I.outro + "ms " + N, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => te(I, B, W)))
              : te(I, B, W);
          }
        }
        function te(j, R, I) {
          if (
            (R.removeClass(m).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            I.addClass(m).each(y.intro),
            Rt.redraw.up(),
            !j.intro)
          )
            return r(I).set({ opacity: 1 });
          r(I)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + j.intro + "ms " + j.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Zs();
  eu();
  ru();
  ou();
  Xt();
  Db();
  Gb();
  Vb();
  Hb();
  jb();
  Yb();
  Zb();
  e_();
  n_();
  o_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4|ec714655-6743-8132-29a4-107f16928df8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          selector: ".primary-button",
          originalId:
            "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6382",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673675283082,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4|ec714655-6743-8132-29a4-107f16928df8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          selector: ".primary-button",
          originalId:
            "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6382",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673675283082,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          selector: ".secondary-button",
          originalId:
            "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6387",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673675283082,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          selector: ".secondary-button",
          originalId:
            "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6387",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673675283082,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52ee830f3a4",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1673675303786,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-slider-item",
        originalId:
          "641ed1fda274e53a4e30f38b|e7ecbce3-858b-0030-12b6-5b65c5cabdaf",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-slider-item",
          originalId:
            "641ed1fda274e53a4e30f38b|e7ecbce3-858b-0030-12b6-5b65c5cabdaf",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674205823432,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimonial-slider-item",
        originalId:
          "641ed1fda274e53a4e30f38b|e7ecbce3-858b-0030-12b6-5b65c5cabdaf",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimonial-slider-item",
          originalId:
            "641ed1fda274e53a4e30f38b|e7ecbce3-858b-0030-12b6-5b65c5cabdaf",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674205823432,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-item",
        originalId:
          "641ed1fda274e53a4e30f38b|3ae2cd86-35cb-c820-7f8f-7789de88693c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".accordion-item",
          originalId:
            "641ed1fda274e53a4e30f38b|3ae2cd86-35cb-c820-7f8f-7789de88693c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674036288021,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-item",
        originalId:
          "641ed1fda274e53a4e30f38b|3ae2cd86-35cb-c820-7f8f-7789de88693c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".accordion-item",
          originalId:
            "641ed1fda274e53a4e30f38b|3ae2cd86-35cb-c820-7f8f-7789de88693c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674036288023,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-whole-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|c85585fc-6d2c-2f2c-d95d-8da8d2b79dba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-whole-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|c85585fc-6d2c-2f2c-d95d-8da8d2b79dba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674217589811,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-whole-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|c85585fc-6d2c-2f2c-d95d-8da8d2b79dba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-whole-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|c85585fc-6d2c-2f2c-d95d-8da8d2b79dba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674217589812,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-whole-wrap",
        originalId:
          "641ed1fda274e5a3f530f395|ec90ca5e-f3c5-6be4-da5f-b59195b8bdea",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-whole-wrap",
          originalId:
            "641ed1fda274e5a3f530f395|ec90ca5e-f3c5-6be4-da5f-b59195b8bdea",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676009139448,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-whole-wrap",
        originalId:
          "641ed1fda274e5a3f530f395|ec90ca5e-f3c5-6be4-da5f-b59195b8bdea",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-whole-wrap",
          originalId:
            "641ed1fda274e5a3f530f395|ec90ca5e-f3c5-6be4-da5f-b59195b8bdea",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676009139448,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|8151efea-fc5e-2a92-20ba-9ea5367dbfa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|8151efea-fc5e-2a92-20ba-9ea5367dbfa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012698014,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|8151efea-fc5e-2a92-20ba-9ea5367dbfa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|8151efea-fc5e-2a92-20ba-9ea5367dbfa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012698015,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|1974f06d-641f-6b94-7f35-4b33ddddfb64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|1974f06d-641f-6b94-7f35-4b33ddddfb64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012712371,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|1974f06d-641f-6b94-7f35-4b33ddddfb64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|1974f06d-641f-6b94-7f35-4b33ddddfb64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012712372,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6382",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6382",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012748218,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6382",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6382",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012748218,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|dcdb0d14-b406-f2fd-a755-dd4e446039cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|dcdb0d14-b406-f2fd-a755-dd4e446039cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012921275,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|dcdb0d14-b406-f2fd-a755-dd4e446039cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|dcdb0d14-b406-f2fd-a755-dd4e446039cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012921276,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|1bc120f4-6ee1-b87d-0864-308533a26f5f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|1bc120f4-6ee1-b87d-0864-308533a26f5f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012985859,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|1bc120f4-6ee1-b87d-0864-308533a26f5f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|1bc120f4-6ee1-b87d-0864-308533a26f5f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676012985859,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|befd62bb-f06c-65c6-e144-794efbfa8f14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|befd62bb-f06c-65c6-e144-794efbfa8f14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676013456239,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|befd62bb-f06c-65c6-e144-794efbfa8f14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|befd62bb-f06c-65c6-e144-794efbfa8f14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676013456239,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|a2ab0b9d-a9ee-997e-d0fb-1def1c364d7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|a2ab0b9d-a9ee-997e-d0fb-1def1c364d7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676013457407,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|a2ab0b9d-a9ee-997e-d0fb-1def1c364d7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|a2ab0b9d-a9ee-997e-d0fb-1def1c364d7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676013457407,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".about-vision-point-wrap",
        originalId:
          "641ed1fda274e5a3f530f395|7eff39c3-aa68-1dca-1117-1ee0b1c3a446",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".about-vision-point-wrap",
          originalId:
            "641ed1fda274e5a3f530f395|7eff39c3-aa68-1dca-1117-1ee0b1c3a446",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676023344051,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".about-vision-point-wrap",
        originalId:
          "641ed1fda274e5a3f530f395|7eff39c3-aa68-1dca-1117-1ee0b1c3a446",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".about-vision-point-wrap",
          originalId:
            "641ed1fda274e5a3f530f395|7eff39c3-aa68-1dca-1117-1ee0b1c3a446",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676023344052,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".scroll-section",
        originalId:
          "641ed1fda274e53a4e30f38b|6c92723b-f622-1cbb-a903-a6dad75d8051",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".scroll-section",
          originalId:
            "641ed1fda274e53a4e30f38b|6c92723b-f622-1cbb-a903-a6dad75d8051",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676030827083,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb3301ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb3301ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676098009909,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb3301ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb3301ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676098009909,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33021d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33021d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676098009909,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33021d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33021d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676098009909,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33023b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33023b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676098009909,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33023b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|ffa47ae7-a7f6-fa7d-7f15-1df0fb33023b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676098009909,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e54ada30f396|167c7543-4387-1a8d-94e1-65a789f4be68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e54ada30f396|167c7543-4387-1a8d-94e1-65a789f4be68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676545361235,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e54ada30f396|167c7543-4387-1a8d-94e1-65a789f4be68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e54ada30f396|167c7543-4387-1a8d-94e1-65a789f4be68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676545361236,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e54ada30f396|f82a1ad0-2b71-8046-ae50-b793d8d995ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e54ada30f396|f82a1ad0-2b71-8046-ae50-b793d8d995ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676548115128,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e54ada30f396|f82a1ad0-2b71-8046-ae50-b793d8d995ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e54ada30f396|f82a1ad0-2b71-8046-ae50-b793d8d995ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676548115129,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5444a30f39e|c397a98b-5dc7-6190-47ce-61864f979e21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5444a30f39e|c397a98b-5dc7-6190-47ce-61864f979e21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676631630283,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5444a30f39e|c397a98b-5dc7-6190-47ce-61864f979e21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5444a30f39e|c397a98b-5dc7-6190-47ce-61864f979e21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676631630284,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|f572facd-f7a4-40b7-7fd0-304c8ccac604",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|f572facd-f7a4-40b7-7fd0-304c8ccac604",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676954678019,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|f572facd-f7a4-40b7-7fd0-304c8ccac604",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|f572facd-f7a4-40b7-7fd0-304c8ccac604",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676954678019,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|bd348169-c637-d064-bcb7-32d00ace9bc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|bd348169-c637-d064-bcb7-32d00ace9bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677046382113,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-65",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|bd348169-c637-d064-bcb7-32d00ace9bc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|bd348169-c637-d064-bcb7-32d00ace9bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677046382114,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677317837485,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|4f2a76bc-dd82-1a1d-1ddd-57d25ee7e685",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|4f2a76bc-dd82-1a1d-1ddd-57d25ee7e685",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677319687074,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|bcbf22b7-e321-abc7-7b6f-45e613d8da9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|bcbf22b7-e321-abc7-7b6f-45e613d8da9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677320254098,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5386f30f39d|665cbced-4b08-6a4c-3f5b-dbec51c0434e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5386f30f39d|665cbced-4b08-6a4c-3f5b-dbec51c0434e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679562750662,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5386f30f39d|665cbced-4b08-6a4c-3f5b-dbec51c0434e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5386f30f39d|665cbced-4b08-6a4c-3f5b-dbec51c0434e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679562750662,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679633330558,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679633330585,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679633669248,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|a19e5002-edbe-f235-8f13-f360293e76ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679633669250,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|802b3dfc-d8fe-ff55-6c8e-d24b2fb4c6b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|802b3dfc-d8fe-ff55-6c8e-d24b2fb4c6b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679641325263,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|802b3dfc-d8fe-ff55-6c8e-d24b2fb4c6b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|802b3dfc-d8fe-ff55-6c8e-d24b2fb4c6b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679641325263,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b3f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b3f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679741655945,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b3f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b3f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679741655945,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b408",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b408",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679741655945,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b408",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e52d8430f399|e9c40249-b171-4c6f-d5cf-656a1251b408",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679741655945,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f815",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f815",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743022292,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f815",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f815",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743022292,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f82b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f82b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743022292,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f82b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5170130f39a|003b6a27-3b1f-5d0a-6f0f-8702bbd1f82b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743022292,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743059003,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743059003,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743059003,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|02b47d83-ea28-7177-3f8f-332b812dd3d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1679743059003,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680869779379,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680869779379,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680869779379,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1680869779379,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-102" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|c86b1b14-27a5-f2cd-8491-88dd657414b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|c86b1b14-27a5-f2cd-8491-88dd657414b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950065698,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|82d89cd6-ee4b-3906-d58b-0d74f807ea0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|82d89cd6-ee4b-3906-d58b-0d74f807ea0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950078328,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-106" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|acbe6fda-cf68-224e-f9c5-54011dfae182",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|acbe6fda-cf68-224e-f9c5-54011dfae182",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950109673,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-108" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".feature-card-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|eb1be709-42f5-b67c-8f0e-b6976d42236f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".feature-card-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|eb1be709-42f5-b67c-8f0e-b6976d42236f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680950126224,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopRight", autoStopEventId: "e-110" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|af837ae2-e547-2347-5f94-a8fb662cc52d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|af837ae2-e547-2347-5f94-a8fb662cc52d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP_RIGHT",
        effectIn: true,
      },
      createdOn: 1680950151617,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopRight", autoStopEventId: "e-112" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|0e394bdb-79d5-f657-e3d8-3f83005ee2e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|0e394bdb-79d5-f657-e3d8-3f83005ee2e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "TOP_RIGHT",
        effectIn: true,
      },
      createdOn: 1680950183296,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopRight", autoStopEventId: "e-114" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|3396bd22-4bd0-ec9b-d2a0-5353106ae6de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|3396bd22-4bd0-ec9b-d2a0-5353106ae6de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "TOP_RIGHT",
        effectIn: true,
      },
      createdOn: 1680950197865,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTopRight", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|afa9159c-62ab-1ca4-6480-9dba61a56585",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|afa9159c-62ab-1ca4-6480-9dba61a56585",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "TOP_RIGHT",
        effectIn: true,
      },
      createdOn: 1680950214928,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".choose-point-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|14aa9bfc-7df4-a15b-0563-1db16bed1305",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".choose-point-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|14aa9bfc-7df4-a15b-0563-1db16bed1305",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950319469,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|3e0a9c74-a2cc-f1d7-25b5-3eef7ea932f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|3e0a9c74-a2cc-f1d7-25b5-3eef7ea932f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950379425,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|c1729d15-215b-d585-b8d2-c8c1aea538b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|c1729d15-215b-d585-b8d2-c8c1aea538b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1680950396057,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".gallery-flex",
        originalId:
          "641ed1fda274e53a4e30f38b|7baf4b12-9f38-d785-e64f-293ebd6b8ea5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".gallery-flex",
          originalId:
            "641ed1fda274e53a4e30f38b|7baf4b12-9f38-d785-e64f-293ebd6b8ea5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680950411841,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".gallery-whole-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|fa0baf49-b3ad-6ce0-96c1-b2967eee5d0b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".gallery-whole-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|fa0baf49-b3ad-6ce0-96c1-b2967eee5d0b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680950426417,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|b1cb92c1-3445-1f29-29a5-06bbec304a86",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|b1cb92c1-3445-1f29-29a5-06bbec304a86",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950440160,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|176d1c58-c17e-76be-79ac-d302be0ca9be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|176d1c58-c17e-76be-79ac-d302be0ca9be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680950456553,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".client-image-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|107c6341-3c93-d74a-3eb0-e36ec60b63f6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".client-image-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|107c6341-3c93-d74a-3eb0-e36ec60b63f6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950854785,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-whole-wrap",
        originalId:
          "641ed1fda274e53a4e30f38b|c85585fc-6d2c-2f2c-d95d-8da8d2b79dba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-whole-wrap",
          originalId:
            "641ed1fda274e53a4e30f38b|c85585fc-6d2c-2f2c-d95d-8da8d2b79dba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680950872425,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|1e1987a8-43a2-4476-00b4-5b6c7699b96f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|1e1987a8-43a2-4476-00b4-5b6c7699b96f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950905193,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|cc556af9-d96a-dc22-af39-ac3c261224b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|cc556af9-d96a-dc22-af39-ac3c261224b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950913032,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e53a4e30f38b|eda6edfd-b7cd-7838-b8c5-e4c1a244aaa9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e53a4e30f38b|eda6edfd-b7cd-7838-b8c5-e4c1a244aaa9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950920032,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950936497,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950949002,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950958129,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d47",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d47",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950966528,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d58",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d58",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680950997226,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "8152ed65-6f51-b1c8-0ff5-3e5d413c2d61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951004513,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|8c5ed5bb-a408-bad1-624b-6f205bf409b1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|8c5ed5bb-a408-bad1-624b-6f205bf409b1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951140098,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|184dff06-f698-78cf-bf56-a6e42dedf762",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|184dff06-f698-78cf-bf56-a6e42dedf762",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951149721,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|7b8f2828-b194-9f12-465c-c5b45fc63e91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|7b8f2828-b194-9f12-465c-c5b45fc63e91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951190737,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|0320f6f8-8329-28aa-df22-1f5b95848c80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|0320f6f8-8329-28aa-df22-1f5b95848c80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951199361,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|d82eaae7-8fac-518f-f26e-dd052f2b4949",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|d82eaae7-8fac-518f-f26e-dd052f2b4949",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1680951226954,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|7eff39c3-aa68-1dca-1117-1ee0b1c3a446",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|7eff39c3-aa68-1dca-1117-1ee0b1c3a446",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1680951237546,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|3b6d619b-a1b2-87a1-ddc3-380c5f83a79d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|3b6d619b-a1b2-87a1-ddc3-380c5f83a79d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1680951248633,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|da2c3ed4-6836-f8b7-1d21-4d7d99f20603",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|da2c3ed4-6836-f8b7-1d21-4d7d99f20603",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1680951258752,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|7366ac1a-fe4e-f45c-fbf4-5d46a3c3f42d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|7366ac1a-fe4e-f45c-fbf4-5d46a3c3f42d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951278905,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SHRINK_EFFECT",
        instant: false,
        config: { actionListId: "shrinkIn", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|c0a9a767-195f-c44a-adab-5a5ed41c1d3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|c0a9a767-195f-c44a-adab-5a5ed41c1d3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951292249,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".pricing-whole-wrap",
        originalId:
          "641ed1fda274e5a3f530f395|ec90ca5e-f3c5-6be4-da5f-b59195b8bdea",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".pricing-whole-wrap",
          originalId:
            "641ed1fda274e5a3f530f395|ec90ca5e-f3c5-6be4-da5f-b59195b8bdea",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951434322,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-176" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5a3f530f395|2a0d505c-4014-8cc7-636c-6176d4d1cfb9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5a3f530f395|2a0d505c-4014-8cc7-636c-6176d4d1cfb9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951449481,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".performance-point-wrap",
        originalId:
          "641ed1fda274e5a3f530f395|df0fefaf-93fe-b012-0a39-aa6b37e141bb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".performance-point-wrap",
          originalId:
            "641ed1fda274e5a3f530f395|df0fefaf-93fe-b012-0a39-aa6b37e141bb",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951457497,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".event-wrap",
        originalId:
          "641ed1fda274e5444a30f39e|c397a98b-5dc7-6190-47ce-61864f979e21",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".event-wrap",
          originalId:
            "641ed1fda274e5444a30f39e|c397a98b-5dc7-6190-47ce-61864f979e21",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951555994,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".subscribe-letter-wrap",
        originalId:
          "641ed1fda274e5444a30f39e|3cf2b3a6-583d-a966-bbff-6698f34a6d6a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".subscribe-letter-wrap",
          originalId:
            "641ed1fda274e5444a30f39e|3cf2b3a6-583d-a966-bbff-6698f34a6d6a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951569666,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5db7d30f3a2|fe7e170b-8133-ee99-a2c0-0764f55e2134",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5db7d30f3a2|fe7e170b-8133-ee99-a2c0-0764f55e2134",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951593273,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e57e1530f3a1|fdefac1d-f910-379a-9023-9b53a749c7bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e57e1530f3a1|fdefac1d-f910-379a-9023-9b53a749c7bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951620193,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|a3bc6a78-51ea-f0dd-b553-0c526de6ef68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|a3bc6a78-51ea-f0dd-b553-0c526de6ef68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951644331,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-190" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|2362708d-f43f-250b-cc0d-6076e5de3a87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|2362708d-f43f-250b-cc0d-6076e5de3a87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951656731,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-192" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|4e8b79e7-5d51-9485-2b7e-fbed8c91af6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|4e8b79e7-5d51-9485-2b7e-fbed8c91af6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951671890,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-194" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5314430f39f|dd28c94c-1048-3da6-ea7d-86315fa1f9d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951687938,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-196" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".blog-whole-wrap",
        originalId:
          "641ed1fda274e54ada30f396|167c7543-4387-1a8d-94e1-65a789f4be68",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".blog-whole-wrap",
          originalId:
            "641ed1fda274e54ada30f396|167c7543-4387-1a8d-94e1-65a789f4be68",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951708218,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5f4fd30f398|cfa5cd07-3411-1260-59d7-628ea9be21a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5f4fd30f398|cfa5cd07-3411-1260-59d7-628ea9be21a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951773433,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".address-wrap",
        originalId:
          "641ed1fda274e5f4fd30f398|6d711962-c126-a13b-2486-24b7fbc64852",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".address-wrap",
          originalId:
            "641ed1fda274e5f4fd30f398|6d711962-c126-a13b-2486-24b7fbc64852",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951781369,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5f4fd30f398|1be06bf2-7704-acab-bc4f-212a8c7dba62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5f4fd30f398|1be06bf2-7704-acab-bc4f-212a8c7dba62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951795050,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".style-guide-grid",
        originalId:
          "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6338",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".style-guide-grid",
          originalId:
            "641ed1fda274e52ee830f3a4|1165196b-8f16-3ddc-a0d3-6ad1e64a6338",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951842586,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".licenses-grid-wrap",
        originalId:
          "641ed1fda274e5434e30f3a0|83fff6c9-0da9-6882-1101-464298493f77",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".licenses-grid-wrap",
          originalId:
            "641ed1fda274e5434e30f3a0|83fff6c9-0da9-6882-1101-464298493f77",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951895186,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5e02230f397|142b49fa-a16b-c1c2-c666-46af9cd63e24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5e02230f397|142b49fa-a16b-c1c2-c666-46af9cd63e24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680951912466,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-210" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e551b530f39c|2fa9a198-94c8-93f8-3a8d-82f09012061c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e551b530f39c|2fa9a198-94c8-93f8-3a8d-82f09012061c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951964858,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-212" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|84ed0759-4f31-e8ed-cdbb-32a95b957d15",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|84ed0759-4f31-e8ed-cdbb-32a95b957d15",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951989434,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|5cd39674-ac41-1bf9-9233-3ea2c180565c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|5cd39674-ac41-1bf9-9233-3ea2c180565c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680951999458,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|5bec2bcb-b75d-a0bc-82fe-79574849cdd0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|5bec2bcb-b75d-a0bc-82fe-79574849cdd0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680952011138,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-218" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e51d9730f39b|971196fa-2ce6-2459-e7fa-580a0a49eabc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e51d9730f39b|971196fa-2ce6-2459-e7fa-580a0a49eabc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1680952032266,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-220" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e574bd30f394|560a9c87-d210-e8b1-b804-6b3473de2157",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e574bd30f394|560a9c87-d210-e8b1-b804-6b3473de2157",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680952074812,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e574bd30f394|63e762888cfec265c35ccb5800000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e574bd30f394|63e762888cfec265c35ccb5800000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680952143442,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "641ed1fda274e5387a30f393|63eb2d3570fa5ff1d66d3e3100000000000c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "641ed1fda274e5387a30f393|63eb2d3570fa5ff1d66d3e3100000000000c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1680952157306,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-226",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "b2ebf6c4-8abc-46fa-9c94-9b61063d6135",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b2ebf6c4-8abc-46fa-9c94-9b61063d6135",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1702101814545,
    },
  },
  actionLists: {
    "a-2": {
      id: "a-2",
      title: "Primary Button",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-bg",
                  selectorGuids: ["f38d4a30-baf8-bcea-a211-deb05be6bdda"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-wrap",
                  selectorGuids: ["53709e61-078d-ab4c-8c2a-24345fc3c40e"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-wrap",
                  selectorGuids: ["53709e61-078d-ab4c-8c2a-24345fc3c40e"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-bg",
                  selectorGuids: ["f38d4a30-baf8-bcea-a211-deb05be6bdda"],
                },
                xValue: -5,
                yValue: 5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-wrap",
                  selectorGuids: ["53709e61-078d-ab4c-8c2a-24345fc3c40e"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-wrap",
                  selectorGuids: ["53709e61-078d-ab4c-8c2a-24345fc3c40e"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1673613146934,
    },
    "a-3": {
      id: "a-3",
      title: "Primary Button Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-bg",
                  selectorGuids: ["f38d4a30-baf8-bcea-a211-deb05be6bdda"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-wrap",
                  selectorGuids: ["53709e61-078d-ab4c-8c2a-24345fc3c40e"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".primary-button-wrap",
                  selectorGuids: ["53709e61-078d-ab4c-8c2a-24345fc3c40e"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1673613146934,
    },
    "a-4": {
      id: "a-4",
      title: "Secondary Button",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg",
                  selectorGuids: ["8047d18f-c88f-0a95-5a69-226b3e908c77"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "356d4825",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg",
                  selectorGuids: ["8047d18f-c88f-0a95-5a69-226b3e908c77"],
                },
                xValue: -5,
                yValue: 5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1673671035357,
    },
    "a-5": {
      id: "a-5",
      title: "Secondary Button Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg",
                  selectorGuids: ["8047d18f-c88f-0a95-5a69-226b3e908c77"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "356d4825",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1673671035357,
    },
    a: {
      id: "a",
      title: "Scroll Animate",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".scroll-flex",
                  selectorGuids: ["3ae25711-d76c-9ebe-0fca-daa7751f8d35"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 20000,
                target: {
                  selector: ".scroll-flex",
                  selectorGuids: ["3ae25711-d76c-9ebe-0fca-daa7751f8d35"],
                },
                xValue: -102.4,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".scroll-flex",
                  selectorGuids: ["3ae25711-d76c-9ebe-0fca-daa7751f8d35"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1673605623373,
    },
    "a-6": {
      id: "a-6",
      title: "Testimonial Slider Change",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-slider-item",
                  selectorGuids: ["8acefa93-b841-8ae2-7647-31c389fd07a1"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-6-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-content",
                  selectorGuids: ["f01817ee-f9c4-6546-7fbb-f9cfff39d127"],
                },
                globalSwatchId: "356d4825",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-5",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-content-wrap",
                  selectorGuids: ["5188348e-f4a7-e390-374b-9380bad145da"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-3",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-author-details",
                  selectorGuids: ["c7aa39e2-513f-a4a7-ce41-907ae8866f76"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-slider-item",
                  selectorGuids: ["8acefa93-b841-8ae2-7647-31c389fd07a1"],
                },
                globalSwatchId: "",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-6",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-content-wrap",
                  selectorGuids: ["5188348e-f4a7-e390-374b-9380bad145da"],
                },
                globalSwatchId: "",
                rValue: 51,
                bValue: 51,
                gValue: 51,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-4",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-author-details",
                  selectorGuids: ["c7aa39e2-513f-a4a7-ce41-907ae8866f76"],
                },
                globalSwatchId: "",
                rValue: 51,
                bValue: 51,
                gValue: 51,
                aValue: 1,
              },
            },
            {
              id: "a-6-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-content",
                  selectorGuids: ["f01817ee-f9c4-6546-7fbb-f9cfff39d127"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1674205825543,
    },
    "a-7": {
      id: "a-7",
      title: "Testimonial Slider Change Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-slider-item",
                  selectorGuids: ["8acefa93-b841-8ae2-7647-31c389fd07a1"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-content",
                  selectorGuids: ["f01817ee-f9c4-6546-7fbb-f9cfff39d127"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-content-wrap",
                  selectorGuids: ["5188348e-f4a7-e390-374b-9380bad145da"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-author-details",
                  selectorGuids: ["c7aa39e2-513f-a4a7-ce41-907ae8866f76"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1674205825543,
    },
    "a-8": {
      id: "a-8",
      title: "1. Open Accordion Item",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-8-n-15",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.horizontal-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "9580a2a7-6b29-421f-ae5f-b7a9f7d226c4",
                  ],
                },
                globalSwatchId: "9fe2958d",
                rValue: 40,
                bValue: 40,
                gValue: 40,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-14",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.vertical-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "b0ce8bbb-cc96-80be-6610-25bef73a770a",
                  ],
                },
                globalSwatchId: "9fe2958d",
                rValue: 40,
                bValue: 40,
                gValue: 40,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.vertical-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "b0ce8bbb-cc96-80be-6610-25bef73a770a",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-arrow-wrap",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b73"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross.vertical-line",
                  selectorGuids: [
                    "fe9c19db-373d-67b5-35b3-bc51069a2b75",
                    "fe9c19db-373d-67b5-35b3-bc51069a2b79",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-8-n-16",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.horizontal-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "9580a2a7-6b29-421f-ae5f-b7a9f7d226c4",
                  ],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-13",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.vertical-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "b0ce8bbb-cc96-80be-6610-25bef73a770a",
                  ],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.vertical-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "b0ce8bbb-cc96-80be-6610-25bef73a770a",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-arrow-wrap",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b73"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross.vertical-line",
                  selectorGuids: [
                    "fe9c19db-373d-67b5-35b3-bc51069a2b75",
                    "fe9c19db-373d-67b5-35b3-bc51069a2b79",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                widthUnit: "AUTO",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-8-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1626114382035,
    },
    "a-9": {
      id: "a-9",
      title: "2.Close Accordion Item",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.vertical-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "b0ce8bbb-cc96-80be-6610-25bef73a770a",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.horizontal-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "9580a2a7-6b29-421f-ae5f-b7a9f7d226c4",
                  ],
                },
                globalSwatchId: "9fe2958d",
                rValue: 40,
                bValue: 40,
                gValue: 40,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross-dark.vertical-line",
                  selectorGuids: [
                    "1c9d0856-e127-9293-df1f-b7e6a2199ec8",
                    "b0ce8bbb-cc96-80be-6610-25bef73a770a",
                  ],
                },
                globalSwatchId: "9fe2958d",
                rValue: 40,
                bValue: 40,
                gValue: 40,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-arrow-wrap",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b73"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-cross.vertical-line",
                  selectorGuids: [
                    "fe9c19db-373d-67b5-35b3-bc51069a2b75",
                    "fe9c19db-373d-67b5-35b3-bc51069a2b79",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["fe9c19db-373d-67b5-35b3-bc51069a2b74"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1626114382035,
    },
    "a-10": {
      id: "a-10",
      title: "Team Member Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["6f1ec9c5-d214-d5e1-41a4-4ea1dff5c242"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["6f1ec9c5-d214-d5e1-41a4-4ea1dff5c242"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1674217595180,
    },
    "a-11": {
      id: "a-11",
      title: "Team Member Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-social-wrap",
                  selectorGuids: ["6f1ec9c5-d214-d5e1-41a4-4ea1dff5c242"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1674217595180,
    },
    "a-12": {
      id: "a-12",
      title: "Pricing Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pricing-point-whole-wrap",
                  selectorGuids: ["c12c130e-9b54-f4b3-d8f9-4a673d63de52"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pricing-point-content",
                  selectorGuids: ["455ca108-dace-75d2-bd1a-e398212c9f78"],
                },
                globalSwatchId: "9fe2958d",
                rValue: 40,
                bValue: 40,
                gValue: 40,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-10",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pricing-point-content",
                  selectorGuids: ["455ca108-dace-75d2-bd1a-e398212c9f78"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pricing-point-whole-wrap",
                  selectorGuids: ["c12c130e-9b54-f4b3-d8f9-4a673d63de52"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676009143942,
    },
    "a-13": {
      id: "a-13",
      title: "Pricing Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pricing-point-content",
                  selectorGuids: ["455ca108-dace-75d2-bd1a-e398212c9f78"],
                },
                globalSwatchId: "9fe2958d",
                rValue: 40,
                bValue: 40,
                gValue: 40,
                aValue: 1,
              },
            },
            {
              id: "a-13-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pricing-point-whole-wrap",
                  selectorGuids: ["c12c130e-9b54-f4b3-d8f9-4a673d63de52"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676009143942,
    },
    "a-14": {
      id: "a-14",
      title: "Secondary Button Pricing Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "356d4825",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: -5,
                yValue: 5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1673671035357,
    },
    "a-15": {
      id: "a-15",
      title: "Secondary Button Pricing Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button",
                  selectorGuids: ["bd3a34fc-5e31-bad8-dfe9-a053711a0cd3"],
                },
                globalSwatchId: "356d4825",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1673671035357,
    },
    "a-16": {
      id: "a-16",
      title: "About Vision Point",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".about-vision-point-number-wrap",
                  selectorGuids: ["aae7caf1-51ea-c2db-5b16-2d9774ab9ffa"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".about-vision-point-number-wrap",
                  selectorGuids: ["aae7caf1-51ea-c2db-5b16-2d9774ab9ffa"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676023353195,
    },
    "a-17": {
      id: "a-17",
      title: "About Vision Point 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".about-vision-point-number-wrap",
                  selectorGuids: ["aae7caf1-51ea-c2db-5b16-2d9774ab9ffa"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676023353195,
    },
    "a-18": {
      id: "a-18",
      title: "Blog Post Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-date-hover-bg",
                  selectorGuids: ["335e7373-b15a-14cb-3c41-2d372a98d70f"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-15",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-date-hover-bg",
                  selectorGuids: ["335e7373-b15a-14cb-3c41-2d372a98d70f"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-18-n-7",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                xValue: 5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-14",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-date-hover-bg",
                  selectorGuids: ["335e7373-b15a-14cb-3c41-2d372a98d70f"],
                },
                xValue: 5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-16",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-date-hover-bg",
                  selectorGuids: ["335e7373-b15a-14cb-3c41-2d372a98d70f"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-13",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                xValue: 5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-18-n-9",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "356d4825",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676545363797,
    },
    "a-19": {
      id: "a-19",
      title: "Blog Post Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-date-hover-bg",
                  selectorGuids: ["335e7373-b15a-14cb-3c41-2d372a98d70f"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-date-hover-bg",
                  selectorGuids: ["335e7373-b15a-14cb-3c41-2d372a98d70f"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-19-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                xValue: 5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-19-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-19-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676545363797,
    },
    "a-20": {
      id: "a-20",
      title: "Blog Button Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-20-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-20-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-20-n-7",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676549263335,
    },
    "a-21": {
      id: "a-21",
      title: "Blog Button Hover 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                xValue: 5,
                yValue: -5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-wrap",
                  selectorGuids: ["dc067ffc-e8fe-b33e-cd54-6e2742ffa7e4"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-21-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-button-bg",
                  selectorGuids: ["6e301178-8d73-6052-2e2e-26f364305922"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676549263335,
    },
    "a-22": {
      id: "a-22",
      title: "Event Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".event-title-wrap",
                  selectorGuids: ["a2560477-d1c6-734e-4084-509d2fd6a7bd"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".event-title-wrap",
                  selectorGuids: ["a2560477-d1c6-734e-4084-509d2fd6a7bd"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676631633211,
    },
    "a-23": {
      id: "a-23",
      title: "Event Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".event-title-wrap",
                  selectorGuids: ["a2560477-d1c6-734e-4084-509d2fd6a7bd"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676631633211,
    },
    "a-24": {
      id: "a-24",
      title: "Feature Button Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-24-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-24-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: -5,
                yValue: 5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677046487817,
    },
    "a-25": {
      id: "a-25",
      title: "Feature Button Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap",
                  selectorGuids: ["f1f358a2-4097-52ab-df76-c6350cfc1ff1"],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677046487817,
    },
    "a-26": {
      id: "a-26",
      title: "Banner Slider 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".slider-next-area",
                  selectorGuids: ["39168ddb-e9fb-5b5a-dec7-ee2b9c07a618"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".slider-pervious-flex",
                  selectorGuids: ["bfe7af49-2e85-8eb5-0211-9c380b78919a"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".slider-previous-wrap",
                  selectorGuids: ["9cd8b74c-0a41-4c3c-abc6-1136b2eff948"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-next-area",
                  selectorGuids: ["39168ddb-e9fb-5b5a-dec7-ee2b9c07a618"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-pervious-flex",
                  selectorGuids: ["bfe7af49-2e85-8eb5-0211-9c380b78919a"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677318153133,
    },
    "a-27": {
      id: "a-27",
      title: "Banner Slider 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-next-area",
                  selectorGuids: ["39168ddb-e9fb-5b5a-dec7-ee2b9c07a618"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-pervious-flex",
                  selectorGuids: ["bfe7af49-2e85-8eb5-0211-9c380b78919a"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-next-area",
                  selectorGuids: ["39168ddb-e9fb-5b5a-dec7-ee2b9c07a618"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".slider-next-wrap",
                  selectorGuids: ["63de9fc5-5767-2d64-f17f-71dc2dd5e4ca"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-pervious-flex",
                  selectorGuids: ["bfe7af49-2e85-8eb5-0211-9c380b78919a"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".slider-previous-wrap",
                  selectorGuids: ["9cd8b74c-0a41-4c3c-abc6-1136b2eff948"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677318153133,
    },
    "a-28": {
      id: "a-28",
      title: "Banner Slider 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-next-area",
                  selectorGuids: ["39168ddb-e9fb-5b5a-dec7-ee2b9c07a618"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-pervious-flex",
                  selectorGuids: ["bfe7af49-2e85-8eb5-0211-9c380b78919a"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-next-area",
                  selectorGuids: ["39168ddb-e9fb-5b5a-dec7-ee2b9c07a618"],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".slider-next-wrap",
                  selectorGuids: ["63de9fc5-5767-2d64-f17f-71dc2dd5e4ca"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".slider-pervious-flex",
                  selectorGuids: ["bfe7af49-2e85-8eb5-0211-9c380b78919a"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677318153133,
    },
    "a-29": {
      id: "a-29",
      title: "Banner Right Arrow Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.next-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "11e43f19-71b6-1b57-97f4-f46597e67083",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.next-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "11e43f19-71b6-1b57-97f4-f46597e67083",
                  ],
                },
                xValue: 10,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1679633576911,
    },
    "a-30": {
      id: "a-30",
      title: "Banner Right Arrow Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.next-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "11e43f19-71b6-1b57-97f4-f46597e67083",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679633576911,
    },
    "a-31": {
      id: "a-31",
      title: "Banner Left Arrow Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.previous-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "fe430740-8bb1-2f9b-5a6c-df2511200704",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.previous-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "fe430740-8bb1-2f9b-5a6c-df2511200704",
                  ],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.previous-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "fe430740-8bb1-2f9b-5a6c-df2511200704",
                  ],
                },
                xValue: -10,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1679633675134,
    },
    "a-32": {
      id: "a-32",
      title: "Banner Left Arrow Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".banner-arrow-image.previous-arrow",
                  selectorGuids: [
                    "134598e3-99d0-d6c8-37ad-a2c17b7e9b16",
                    "fe430740-8bb1-2f9b-5a6c-df2511200704",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1679633675134,
    },
    "a-33": {
      id: "a-33",
      title: "More Blog Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button.more-blog-button",
                  selectorGuids: [
                    "bd3a34fc-5e31-bad8-dfe9-a053711a0cd3",
                    "c6287d68-01d3-8b77-adbb-d963785c5530",
                  ],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-33-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap.blog-post-button",
                  selectorGuids: [
                    "f1f358a2-4097-52ab-df76-c6350cfc1ff1",
                    "62b03a5b-353e-9485-1586-cdc326129838",
                  ],
                },
                globalSwatchId: "",
                rValue: 230,
                bValue: 240,
                gValue: 234,
                aValue: 1,
              },
            },
            {
              id: "a-33-n",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap.blog-post-button",
                  selectorGuids: [
                    "f1f358a2-4097-52ab-df76-c6350cfc1ff1",
                    "62b03a5b-353e-9485-1586-cdc326129838",
                  ],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button.more-blog-button",
                  selectorGuids: [
                    "bd3a34fc-5e31-bad8-dfe9-a053711a0cd3",
                    "c6287d68-01d3-8b77-adbb-d963785c5530",
                  ],
                },
                globalSwatchId: "d50893d6",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: -5,
                yValue: 5,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap.blog-post-button",
                  selectorGuids: [
                    "f1f358a2-4097-52ab-df76-c6350cfc1ff1",
                    "62b03a5b-353e-9485-1586-cdc326129838",
                  ],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
            {
              id: "a-33-n-4",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap.blog-post-button",
                  selectorGuids: [
                    "f1f358a2-4097-52ab-df76-c6350cfc1ff1",
                    "62b03a5b-353e-9485-1586-cdc326129838",
                  ],
                },
                globalSwatchId: "5f5e5bb6",
                rValue: 241,
                bValue: 66,
                gValue: 55,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677046487817,
    },
    "a-34": {
      id: "a-34",
      title: "More Blog Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button.more-blog-button",
                  selectorGuids: [
                    "bd3a34fc-5e31-bad8-dfe9-a053711a0cd3",
                    "c6287d68-01d3-8b77-adbb-d963785c5530",
                  ],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap.blog-post-button",
                  selectorGuids: [
                    "f1f358a2-4097-52ab-df76-c6350cfc1ff1",
                    "62b03a5b-353e-9485-1586-cdc326129838",
                  ],
                },
                globalSwatchId: "",
                rValue: 230,
                bValue: 240,
                gValue: 234,
                aValue: 1,
              },
            },
            {
              id: "a-34-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-bg.pink-bg",
                  selectorGuids: [
                    "8047d18f-c88f-0a95-5a69-226b3e908c77",
                    "e0fd972d-3d4d-247d-56ed-4972cd69a6ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".secondary-button-wrap.blog-post-button",
                  selectorGuids: [
                    "f1f358a2-4097-52ab-df76-c6350cfc1ff1",
                    "62b03a5b-353e-9485-1586-cdc326129838",
                  ],
                },
                globalSwatchId: "18ed85b1",
                rValue: 20,
                bValue: 21,
                gValue: 20,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677046487817,
    },
    "a-35": {
      id: "a-35",
      title: "Hireus Badge Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".hireus-badge",
                  selectorGuids: ["0faea733-474d-f565-4959-e445bcd3242e"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".hireus-badge",
                  selectorGuids: ["0faea733-474d-f565-4959-e445bcd3242e"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1702101819338,
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInTopRight: {
      id: "slideInTopRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    shrinkIn: {
      id: "shrinkIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1.25,
                yValue: 1.25,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
