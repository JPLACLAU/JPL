(this["webpackJsonpJPL"] = this["webpackJsonpJPL"] || []).push([
  [0],
  {
    144: function (e, t, i) {},
    146: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(2),
        c = i.n(s),
        a = (i(77), i(27)),
        l = i.n(a),
        n = (i.p, i(81), i(13)),
        o = i(65),
        r = i.n(o),
        d = i(22),
        m = i(25),
        j = i(18),
        b = i(1),
        u = function () {
          var e = Object(s.useState)(!1),
            t = Object(n.a)(e, 2),
            i = t[0],
            c = t[1],
            a = function () {
              return c(!i);
            };
          return Object(b.jsxs)(b.Fragment, {
            children: [
              Object(b.jsx)("div", {
                className: "mob-header",
                children: Object(b.jsx)("button", {
                  className: "toggler-menu",
                  onClick: a,
                  children: Object(b.jsxs)("div", {
                    className: i ? "active" : "",
                    children: [
                      Object(b.jsx)("span", {}),
                      Object(b.jsx)("span", {}),
                      Object(b.jsx)("span", {}),
                    ],
                  }),
                }),
              }),
              Object(b.jsx)("header", {
                className: i
                  ? "header-left header-menu-style-two menu-open"
                  : "header-left header-menu-style-two",
                children: Object(b.jsxs)("div", {
                  className: "scroll-bar",
                  children: [
                    Object(b.jsx)("div", {
                      className: "hl-top",
                      children: Object(b.jsx)("div", {
                        className: "hl-logo",
                        children: Object(b.jsx)(d.b, {
                          to: "/",
                          children: "JPL",
                        }),
                      }),
                    }),
                    Object(b.jsxs)(r.a, {
                      className: "nav nav-menu",
                      items: [
                        "home",
                        "about",
                        "resume",
                        "work",
                        "blog",
                        "contactus",
                      ],
                      currentClassName: "active",
                      offset: -30,
                      children: [
                        Object(b.jsx)("li", {
                          children: Object(b.jsxs)("a", {
                            className: "nav-link ",
                            href: "#home",
                            onClick: a,
                            children: [
                              Object(b.jsx)(j.c, {}),
                              Object(b.jsx)("span", {
                                className: "item",
                                children: "Home",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsxs)("a", {
                            className: "nav-link",
                            href: "#about",
                            onClick: a,
                            children: [
                              Object(b.jsx)(m.f, {}),
                              Object(b.jsx)("span", {
                                className: "item",
                                children: "About",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsxs)("a", {
                            className: "nav-link",
                            href: "#resume",
                            onClick: a,
                            children: [
                              Object(b.jsx)(m.c, {}),
                              Object(b.jsx)("span", {
                                className: "item",
                                children: "Resume",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsxs)("a", {
                            className: "nav-link",
                            href: "#work",
                            onClick: a,
                            children: [
                              Object(b.jsx)(m.b, {}),
                              Object(b.jsx)("span", {
                                className: "item",
                                children: "Work",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsxs)("a", {
                            className: "nav-link",
                            href: "#blog",
                            onClick: a,
                            children: [
                              Object(b.jsx)(j.a, {}),
                              Object(b.jsx)("span", {
                                className: "item",
                                children: "Blog",
                              }),
                            ],
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsxs)("a", {
                            className: "nav-link",
                            href: "#contactus",
                            onClick: a,
                            children: [
                              Object(b.jsx)(m.e, {}),
                              Object(b.jsx)("span", {
                                className: "item",
                                children: "Contact",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        h = i(74),
        p = i(67),
        x = i.n(p),
        O = "Jean-Paul Laclau",
        g =
          "I design and develop services for customers of all sizes,\n  specializing in creating stylish, modern websites, web\n  services and online stores.",
        v = "DOWNLOAD CV",
        f = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsxs)("section", {
              id: "home",
              className: "home-banner home-banner-two",
              style: {
                backgroundImage: "url(".concat(
                  "/JPLimg/slider/JPL1920x950v3.png",
                  ")"
                ),
              },
              children: [
                Object(b.jsx)("div", {
                  className: "frame-layout__particles",
                  children: Object(b.jsx)(x.a, {
                    id: "tsparticles",
                    options: {
                      backgroundMode: { enable: !0, zIndex: 1 },
                      fullScreen: { enable: !1, zIndex: -1 },
                      fpsLimit: 70,
                      interactivity: {
                        detectsOn: "canvas",
                        events: {
                          onClick: { enable: !1, mode: "push" },
                          onHover: { enable: !1, mode: "repulse" },
                          resize: !0,
                        },
                        modes: {
                          bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.4,
                            size: 40,
                          },
                          push: { quantity: 4 },
                          repulse: { distance: 200, duration: 0.4 },
                        },
                      },
                      particles: {
                        color: { value: "#ddd" },
                        links: {
                          color: "#ffffff",
                          distance: 150,
                          enable: !0,
                          opacity: 0.5,
                          width: 1,
                        },
                        collisions: { enable: !0 },
                        move: {
                          direction: "none",
                          enable: !0,
                          outMode: "bounce",
                          random: !1,
                          speed: 2,
                          straight: !1,
                        },
                        number: {
                          density: { enable: !0, value_area: 800 },
                          value: 30,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { random: !0, value: 6 },
                      },
                      detectRetina: !0,
                    },
                  }),
                }),
                Object(b.jsx)("div", {
                  className: "container",
                  children: Object(b.jsx)("div", {
                    className: "row full-screen align-items-center",
                    children: Object(b.jsx)("div", {
                      className: "col-lg-12",
                      children: Object(b.jsxs)("div", {
                        className: "type-box",
                        children: [
                          Object(b.jsx)("h6", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            children: "Hello, My name is",
                          }),
                          Object(b.jsx)("h1", {
                            className: "font-alt",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "100",
                            children: O,
                          }),
                          Object(b.jsx)("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "200",
                            children: Object(b.jsxs)(h.a, {
                              children: [
                                Object(b.jsx)("p", {
                                  className: "loop-text lead",
                                  children: " I love wordpress",
                                }),
                                Object(b.jsx)("p", {
                                  className: "loop-text lead",
                                  children: " I code cool websites",
                                }),
                                Object(b.jsx)("p", {
                                  className: "loop-text lead",
                                  children: " I make online shops",
                                }),
                                Object(b.jsxs)("p", {
                                  className: "loop-text lead",
                                  children: [
                                    " ",
                                    "Web3 & Smart Contract Developer",
                                  ],
                                }),
                                Object(b.jsxs)("p", {
                                  className: "loop-text lead",
                                  children: [
                                    " ",
                                    "Bitcoin & Lightening Network Adept",
                                  ],
                                }),
                                Object(b.jsxs)("p", {
                                  className: "loop-text lead",
                                  children: [
                                    " ",
                                    "Highly Motivated | Healthy Life | I Love Sustainability",
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Object(b.jsx)("p", {
                            className: "desc",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "300",
                            children: g,
                          }),
                          Object(b.jsx)("div", {
                            className: "mt-4",
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            "data-aos-delay": "400",
                            children: Object(b.jsx)("a", {
                              className: "px-btn px-btn-white",
                              href: "img/resume.png",
                              download: !0,
                              children: v,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        N = [
          { Social: Object(b.jsx)(j.b, {}), link: "https://www.facebook.com/" },
          { Social: Object(b.jsx)(j.g, {}), link: "https://www.linkedin.com/" },
          {
            Social: Object(b.jsx)(j.d, {}),
            link: "https://www.instagram.com/",
          },
          { Social: Object(b.jsx)(j.e, {}), link: "https://twitter.com/" },
          {
            Social: Object(b.jsx)(j.f, {}),
            link: "https://www.pinterest.com/",
          },
        ],
        y = function () {
          return Object(b.jsx)("div", {
            className: "nav social-icons justify-content-center",
            children: N.map(function (e, t) {
              return Object(b.jsx)(
                "a",
                {
                  href: "".concat(e.link),
                  rel: "noreferrer",
                  target: "_blank",
                  children: e.Social,
                },
                t
              );
            }),
          });
        },
        k = i(10),
        w = i(39),
        T = i.n(w);
      i(60), i(61);
      function q() {
        return Object(b.jsx)("div", {
          className: "testimonial-wrapper",
          children: Object(b.jsx)(
            T.a,
            Object(k.a)(
              Object(k.a)(
                {},
                {
                  dots: !0,
                  arrow: !1,
                  infinite: !0,
                  speed: 900,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  autoplay: !1,
                  margin: 30,
                  responsive: [
                    { breakpoint: 991, settings: { slidesToShow: 1 } },
                    { breakpoint: 420, settings: { slidesToShow: 1 } },
                  ],
                }
              ),
              {},
              {
                children: [
                  {
                    imageName: "team-1",
                    desc: "  Lorem Ipsum is simply dummy text of the printing and\n      typesetting industry. Lorem Ipsum has been the industry's\n      standard dummy text ever since the 1500s.",
                    reviewerName: "Nancy Byers",
                    designation: "CEO at ib-themes",
                  },
                  {
                    imageName: "team-2",
                    desc: " Lorem Ipsum is simply dummy text of the printing and\n      typesetting industry. Lorem Ipsum has been the industry's\n      standard dummy text ever since the 1500s.",
                    reviewerName: "Jara Afsari",
                    designation: "CEO at ib-themes",
                  },
                  {
                    imageName: "team-4",
                    desc: " Lorem Ipsum is simply dummy text of the printing and\n      typesetting industry. Lorem Ipsum has been the industry's\n      standard dummy text ever since the 1500s.",
                    reviewerName: "Janiaya kiaram",
                    designation: "Visual Designer",
                  },
                ].map(function (e, t) {
                  return Object(b.jsx)(
                    "div",
                    {
                      children: Object(b.jsxs)("div", {
                        className: "testimonial-01 media",
                        children: [
                          Object(b.jsx)("div", {
                            className: "avatar",
                            children: Object(b.jsx)("img", {
                              src: "img/testimonial/".concat(
                                e.imageName,
                                ".jpg"
                              ),
                              alt: "review comments",
                            }),
                          }),
                          Object(b.jsxs)("div", {
                            className: "media-body",
                            children: [
                              Object(b.jsx)("p", { children: e.desc }),
                              Object(b.jsx)("h6", { children: e.reviewerName }),
                              Object(b.jsx)("span", {
                                children: e.designation,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t
                  );
                }),
              }
            )
          ),
        });
      }
      var S = [
        {
          icon: "icon-mobile",
          title: "Web Design",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          icon: "icon-desktop",
          title: "Web Development",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          icon: "icon-target",
          title: "Seo Marketing",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n    eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
      function L() {
        return Object(b.jsx)(b.Fragment, {
          children: Object(b.jsx)("div", {
            className: "row",
            children: S.map(function (e, t) {
              return Object(b.jsx)(
                "div",
                {
                  className: "col-md-6 col-lg-4 my-3",
                  children: Object(b.jsxs)("div", {
                    className: "feature-box-01",
                    children: [
                      Object(b.jsx)("div", {
                        className: "icon",
                        children: Object(b.jsx)("i", {
                          className: "icon ".concat(e.icon),
                        }),
                      }),
                      Object(b.jsxs)("div", {
                        className: "feature-content",
                        children: [
                          Object(b.jsx)("h5", { children: e.title }),
                          Object(b.jsx)("p", { children: e.descriptions }),
                        ],
                      }),
                    ],
                  }),
                },
                t
              );
            }),
          }),
        });
      }
      var C = [
          {
            img: "a1",
            awardName: "Creative Designer",
            awardFor: "Site of the day",
          },
          {
            img: "a2",
            awardName: "Yearly Best Performer",
            awardFor: "Site of the day",
          },
          {
            img: "a3",
            awardName: "Best Learner Award",
            awardFor: "Site of the day",
          },
        ],
        D = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("div", {
              className: "row",
              children: C.map(function (e, t) {
                return Object(b.jsx)(
                  "div",
                  {
                    className: "col-lg-4 m-15px-tb",
                    children: Object(b.jsxs)("div", {
                      className: "feature-box-02 d-flex align-items-center",
                      children: [
                        Object(b.jsx)("div", {
                          className: "icon",
                          children: Object(b.jsx)("img", {
                            src: "img/award/".concat(e.img, ".png"),
                            alt: "award",
                          }),
                        }),
                        Object(b.jsxs)("div", {
                          className: "media-body",
                          children: [
                            Object(b.jsx)("h6", { children: e.awardName }),
                            Object(b.jsx)("p", { children: e.awardFor }),
                          ],
                        }),
                      ],
                    }),
                  },
                  t
                );
              }),
            }),
          });
        },
        A = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("section", {
              id: "about",
              className: "section theme-light dark-bg",
              children: Object(b.jsxs)("div", {
                className: "container",
                children: [
                  Object(b.jsxs)("div", {
                    className: "row align-items-center justify-content-center",
                    children: [
                      Object(b.jsx)("div", {
                        className: "col-md-6 col-lg-4",
                        children: Object(b.jsxs)("div", {
                          className: "about-me",
                          children: [
                            Object(b.jsxs)("div", {
                              className: "img",
                              children: [
                                Object(b.jsx)("div", {
                                  className: "img-in",
                                  children: Object(b.jsx)("img", {
                                    src: "img/about/JPL626x630.png",
                                    alt: "about",
                                  }),
                                }),
                                Object(b.jsx)(y, {}),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "info",
                              children: [
                                Object(b.jsx)("p", {
                                  children: "Web3 & Web Developer",
                                }),
                                Object(b.jsx)("h3", {
                                  children: "Jean-Paul Laclau",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(b.jsx)("div", {
                        className: "col-lg-7 ml-auto",
                        children: Object(b.jsxs)("div", {
                          className: "about-info",
                          children: [
                            Object(b.jsx)("div", {
                              className: "title",
                              children: Object(b.jsx)("h3", {
                                children: "Biography",
                              }),
                            }),
                            Object(b.jsxs)("div", {
                              className: "about-text",
                              children: [
                                Object(b.jsx)("p", {
                                  children:
                                    "I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from Buenos Aires I code and create web elements for amazing people around the world. I like to work with new people. New people new Experiences.",
                                }),
                                Object(b.jsx)("p", {
                                  children:
                                    "I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from Buenos Aires. I code and create web elements for amazing people around the world. I like to work with new people. New people new Experiences.",
                                }),
                              ],
                            }),
                            Object(b.jsx)("div", {
                              className: "info-list",
                              children: Object(b.jsxs)("div", {
                                className: "row",
                                children: [
                                  Object(b.jsx)("div", {
                                    className: "col-sm-6",
                                    children: Object(b.jsxs)("ul", {
                                      children: [
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Name: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "Jean-Paul Laclau",
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Birthday: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "20th May 1985",
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Age: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "37 years",
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Address: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children:
                                                "Vicente L\xf3pez, Buenos Aires.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(b.jsx)("div", {
                                    className: "col-sm-6",
                                    children: Object(b.jsxs)("ul", {
                                      children: [
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Phone: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "+54 (9) 11 2265-3586",
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Email: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children:
                                                "laclaujeanpaul@gmail.com",
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Skype: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "chompolario",
                                            }),
                                          ],
                                        }),
                                        Object(b.jsxs)("li", {
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "Freelance: ",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "Available",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(b.jsx)("div", {
                    className: "separated",
                    style: {
                      backgroundImage: "url(".concat(
                        "/JPLimg/border-dark.png",
                        ")"
                      ),
                    },
                  }),
                  Object(b.jsx)("div", {
                    className: "title",
                    children: Object(b.jsx)("h3", { children: "What I do?" }),
                  }),
                  Object(b.jsx)(L, {}),
                  Object(b.jsx)("div", {
                    className: "separated",
                    style: {
                      backgroundImage: "url(".concat(
                        "/JPLimg/border-dark.png",
                        ")"
                      ),
                    },
                  }),
                  Object(b.jsx)("div", {
                    className: "title",
                    children: Object(b.jsx)("h3", { children: "Awards." }),
                  }),
                  Object(b.jsx)(D, {}),
                  Object(b.jsx)("div", {
                    className: "separated",
                    style: {
                      backgroundImage: "url(".concat(
                        "/JPLimg/border-dark.png",
                        ")"
                      ),
                    },
                  }),
                  Object(b.jsx)("div", {
                    className: "title",
                    children: Object(b.jsx)("h3", {
                      children: "Testimonials.",
                    }),
                  }),
                  Object(b.jsx)(q, {}),
                ],
              }),
            }),
          });
        },
        P = i(69),
        I = i.n(P),
        B = i(70),
        F = i.n(B),
        M = [
          {
            name: "HTML5",
            numberPercent: "92",
            startCount: "0",
            endCount: "92",
          },
          {
            name: "React JS",
            numberPercent: "85",
            startCount: "0",
            endCount: "85",
          },
          {
            name: "Vue Js",
            numberPercent: "90",
            startCount: "0",
            endCount: "90",
          },
          {
            name: "Ui/Ux",
            numberPercent: "88",
            startCount: "0",
            endCount: "88",
          },
        ],
        E = function () {
          var e = c.a.useState(!1),
            t = Object(n.a)(e, 2),
            i = t[0],
            s = t[1];
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("div", {
              className: "skill-wrapper",
              children: M.map(function (e, t) {
                return Object(b.jsxs)(
                  "div",
                  {
                    className: "skill-lt",
                    children: [
                      Object(b.jsx)("h6", { children: e.name }),
                      Object(b.jsxs)("span", {
                        className: "count-inner",
                        children: [
                          Object(b.jsx)(I.a, {
                            start: i ? e.startCount : null,
                            end: e.endCount,
                            duration: 1,
                            redraw: !0,
                            children: function (e) {
                              var t = e.countUpRef;
                              return Object(b.jsx)(F.a, {
                                onChange: function (e) {
                                  e && s(!0);
                                },
                                children: Object(b.jsx)("span", { ref: t }),
                              });
                            },
                          }),
                          "%",
                        ],
                      }),
                      Object(b.jsx)("div", {
                        className: "skill-bar",
                        children: Object(b.jsx)("div", {
                          className: "skill-bar-in",
                          style: { width: e.numberPercent + "%" },
                        }),
                      }),
                    ],
                  },
                  t
                );
              }),
            }),
          });
        },
        R = [
          {
            jobPosition: "Sr. Front-end Engineer",
            jobType: "Google | Remote",
            jobDuration: "Feb 2021 - Present",
            timeDuraton: "Full Time",
            compnayName: "Google LLC",
            jobDescription:
              "Adipisicing Lorem ipsum dolor sit amet, consectetur elit,\n    sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor.",
          },
          {
            jobPosition: "Visual Designer",
            jobType: "Ridian | Remote",
            jobDuration: "Mar 2020 - Present",
            timeDuraton: "Part Time",
            compnayName: "Ridian IT",
            jobDescription:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n    irure dolor. Lorem ipsum dolor sit amet, consectetur\n    adipisicing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua.",
          },
          {
            jobPosition: "Animation Artist",
            jobType: "IbThemes | Remote",
            jobDuration: "Jan 2019 - Present",
            timeDuraton: "Full Time",
            compnayName: "IB Themes",
            jobDescription:
              " Consectetur adipisicing elit,lorem ipsum dolor sit amet,\n    sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n    ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor.",
          },
        ],
        W = [
          {
            passingYear: "2018-2020",
            degreeTitle: "Ph.D in Horriblensess",
            instituteName: "University Of Evil Doing",
          },
          {
            passingYear: "2013-2016",
            degreeTitle: "Bsc. in Computer Science",
            instituteName: "World University",
          },
          {
            passingYear: "2010-2012",
            degreeTitle: "Graphic Artist Training ",
            instituteName: "Graphic Master Institute",
          },
        ],
        V = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("section", {
              id: "resume",
              className: "section",
              children: Object(b.jsxs)("div", {
                className: "container",
                children: [
                  Object(b.jsx)("div", {
                    className: "title",
                    children: Object(b.jsx)("h3", { children: "Experience." }),
                  }),
                  Object(b.jsx)("div", {
                    className: "resume-box",
                    children: R.map(function (e, t) {
                      return Object(b.jsx)(
                        "div",
                        {
                          className: "resume-row",
                          children: Object(b.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(b.jsx)("div", {
                                className: "col-md-4 col-xl-3",
                                children: Object(b.jsxs)("div", {
                                  className: "rb-left",
                                  children: [
                                    Object(b.jsx)("h6", {
                                      children: e.jobPosition,
                                    }),
                                    Object(b.jsx)("label", {
                                      children: e.jobType,
                                    }),
                                    Object(b.jsx)("p", {
                                      children: e.jobDuration,
                                    }),
                                    Object(b.jsx)("div", {
                                      className: "rb-time",
                                      children: e.timeDuraton,
                                    }),
                                  ],
                                }),
                              }),
                              Object(b.jsx)("div", {
                                className: "col-md-8 col-xl-9",
                                children: Object(b.jsxs)("div", {
                                  className: "rb-right",
                                  children: [
                                    Object(b.jsx)("h6", {
                                      children: e.compnayName,
                                    }),
                                    Object(b.jsx)("p", {
                                      children: e.jobDescription,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        t
                      );
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "separated",
                    style: {
                      backgroundImage: "url(".concat(
                        "/JPLimg/border-dark.png",
                        ")"
                      ),
                    },
                  }),
                  Object(b.jsx)("div", {
                    className: "title",
                    children: Object(b.jsx)("h3", {
                      children: "Education & Skills",
                    }),
                  }),
                  Object(b.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      Object(b.jsx)("div", {
                        className: "col-lg-4 m-15px-tb",
                        children: Object(b.jsx)("ul", {
                          className: "aducation-box",
                          children: W.map(function (e, t) {
                            return Object(b.jsxs)(
                              "li",
                              {
                                children: [
                                  Object(b.jsx)("span", {
                                    children: e.passingYear,
                                  }),
                                  Object(b.jsxs)("h6", {
                                    children: [e.degreeTitle, " "],
                                  }),
                                  Object(b.jsx)("p", {
                                    children: e.instituteName,
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      }),
                      Object(b.jsx)("div", {
                        className: "col-lg-7 ml-auto m-15px-tb",
                        children: Object(b.jsx)(E, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        U = i(36),
        J = i(40),
        Y = i(71),
        z = { default: 3, 1100: 3, 700: 2, 500: 1 },
        G = ["All", "Branding", "Photography", "Fashion", "Product"],
        _ = [
          {
            porftoliItems: [
              {
                img: "m-portfolio-1",
                title: "Bottle Illustration",
                subTitle: "Figma Shoot",
                alterText: "Bottle Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-2",
                title: "E-Learning App",
                subTitle: "Nuna ios App",
                alterText: "Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-3",
                title: "Visual Design",
                subTitle: "Themeforest Marke",
                alterText: "Business Mockup",
                portfolioLink:
                  "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
              },
              {
                img: "m-portfolio-4",
                title: "Business Card",
                subTitle: "Graphicriver Market",
                alterText: "E-Cosmetics",
                portfolioLink:
                  "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
              },
              {
                img: "m-portfolio-5",
                title: "Chatting Application",
                subTitle: "Codecanyon Market",
                alterText: "Bottle Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
              },
              {
                img: "m-portfolio-6",
                title: "Web Application",
                subTitle: "Behance Shot",
                alterText: "Web Application",
                portfolioLink:
                  "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-7",
                title: "Business Card",
                subTitle: "Graphicriver Market",
                alterText: "Business Card",
                portfolioLink:
                  "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-8",
                title: "Chatting App Design",
                subTitle: "Codecanyon Market",
                alterText: "Chatting App Design",
                portfolioLink:
                  "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
              },
              {
                img: "m-portfolio-9",
                title: "Web Motion",
                subTitle: "Behance Shot",
                alterText: "Web Motion",
                portfolioLink: "https://www.facebook.com/ibthemes",
              },
            ],
          },
          {
            porftoliItems: [
              {
                img: "m-portfolio-6",
                title: "Web Application",
                subTitle: "Behance Shot",
                alterText: "Web Application",
                portfolioLink:
                  "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-3",
                title: "Visual Design",
                subTitle: "Themeforest Marke",
                alterText: "Business Mockup",
                portfolioLink:
                  "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
              },
              {
                img: "m-portfolio-8",
                title: "Chatting App Design",
                subTitle: "Codecanyon Market",
                alterText: "Chatting App Design",
                portfolioLink:
                  "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
              },
              {
                img: "m-portfolio-4",
                title: "Business Card",
                subTitle: "Graphicriver Market",
                alterText: "E-Cosmetics",
                portfolioLink:
                  "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
              },
            ],
          },
          {
            porftoliItems: [
              {
                img: "m-portfolio-2",
                title: "E-Learning App",
                subTitle: "Nuna ios App",
                alterText: "Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-5",
                title: "Chatting Application",
                subTitle: "Codecanyon Market",
                alterText: "Bottle Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
              },
              {
                img: "m-portfolio-6",
                title: "Web Application",
                subTitle: "Behance Shot",
                alterText: "Web Application",
                portfolioLink:
                  "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
              },
            ],
          },
          {
            porftoliItems: [
              {
                img: "m-portfolio-1",
                title: "Bottle Illustration",
                subTitle: "Figma Shoot",
                alterText: "Bottle Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-7",
                title: "Business Card",
                subTitle: "Graphicriver Market",
                alterText: "Business Card",
                portfolioLink:
                  "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-9",
                title: "Web Motion",
                subTitle: "Behance Shot",
                alterText: "Web Motion",
                portfolioLink: "https://www.facebook.com/ibthemes",
              },
            ],
          },
          {
            porftoliItems: [
              {
                img: "m-portfolio-2",
                title: "E-Learning App",
                subTitle: "Nuna ios App",
                alterText: "Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
              },
              {
                img: "m-portfolio-3",
                title: "Visual Design",
                subTitle: "Themeforest Marke",
                alterText: "Business Mockup",
                portfolioLink:
                  "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
              },
              {
                img: "m-portfolio-5",
                title: "Chatting Application",
                subTitle: "Codecanyon Market",
                alterText: "Bottle Illustration",
                portfolioLink:
                  "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
              },
              {
                img: "m-portfolio-6",
                title: "Web Application",
                subTitle: "Behance Shot",
                alterText: "Web Application",
                portfolioLink:
                  "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
              },
            ],
          },
        ],
        H = function () {
          return Object(b.jsx)(J.b, {
            children: Object(b.jsx)("div", {
              className: "portfolio-filter-01",
              children: Object(b.jsxs)(U.d, {
                children: [
                  Object(b.jsx)(U.b, {
                    className: "filter d-flex flex-wrap justify-content-start",
                    children: G.map(function (e, t) {
                      return Object(b.jsx)(U.a, { children: e }, t);
                    }),
                  }),
                  Object(b.jsx)(J.a, {
                    children: _.map(function (e, t) {
                      return Object(b.jsx)(
                        U.c,
                        {
                          children: Object(b.jsx)("div", {
                            className: "portfolio-content ",
                            children: Object(b.jsx)(Y.a, {
                              breakpointCols: z,
                              className: "my-masonry-grid",
                              columnClassName: "my-masonry-grid_column",
                              children: e.porftoliItems.map(function (e, t) {
                                return Object(b.jsx)(
                                  "div",
                                  {
                                    className: "portfolio-box-01",
                                    children: Object(b.jsxs)("div", {
                                      className: "portfolio-img",
                                      children: [
                                        Object(b.jsxs)("div", {
                                          className: "portfolio-info",
                                          children: [
                                            Object(b.jsx)("h5", {
                                              children: Object(b.jsx)("a", {
                                                href: e.portfolioLink,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e.title,
                                              }),
                                            }),
                                            Object(b.jsx)("span", {
                                              children: e.subTitle,
                                            }),
                                          ],
                                        }),
                                        Object(b.jsx)("a", {
                                          href: "img/portfolio/".concat(
                                            e.img,
                                            ".jpg"
                                          ),
                                          className: "gallery-link",
                                          children: Object(b.jsx)("img", {
                                            src: "img/portfolio/".concat(
                                              e.img,
                                              ".jpg"
                                            ),
                                            alt: e.alterText,
                                          }),
                                        }),
                                        Object(b.jsx)("a", {
                                          className: "portfolio-icon",
                                          href: e.portfolioLink,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children: Object(b.jsx)(m.d, {}),
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                );
                              }),
                            }),
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        K = i(30),
        X = i.n(K),
        Q = i(75),
        Z = function () {
          var e = Object(Q.a)(),
            t = e.register,
            i = e.handleSubmit,
            s = e.formState.errors;
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("form", {
              onSubmit: i(function (e, t) {
                t.target.reset(),
                  console.log("Message submited: " + JSON.stringify(e));
              }),
              children: Object(b.jsxs)("div", {
                className: "row",
                children: [
                  Object(b.jsx)("div", {
                    className: "col-md-6",
                    children: Object(b.jsxs)("div", {
                      className: "form-group mb-3",
                      children: [
                        Object(b.jsx)(
                          "input",
                          Object(k.a)(
                            {
                              type: "text",
                              className: "form-control theme-light",
                              placeholder: "Full name",
                            },
                            t("name", { required: !0 })
                          )
                        ),
                        s.name &&
                          "required" === s.name.type &&
                          Object(b.jsx)("span", {
                            className: "invalid-feedback",
                            children: "Name is required",
                          }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-md-6",
                    children: Object(b.jsxs)("div", {
                      className: "form-group mb-3",
                      children: [
                        Object(b.jsx)(
                          "input",
                          Object(k.a)(
                            {
                              type: "email",
                              className: "form-control theme-light",
                              placeholder: "Email address",
                            },
                            t(
                              "email",
                              {
                                required: "Email is Required",
                                pattern: {
                                  value: /\S+@\S+\.\S+/,
                                  message:
                                    "Entered value does not match email format",
                                },
                              },
                              { required: !0 }
                            )
                          )
                        ),
                        s.email &&
                          Object(b.jsx)("span", {
                            className: "invalid-feedback",
                            children: s.email.message,
                          }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-12",
                    children: Object(b.jsxs)("div", {
                      className: "form-group mb-3",
                      children: [
                        Object(b.jsx)(
                          "input",
                          Object(k.a)(
                            {
                              type: "text",
                              className: "form-control theme-light",
                              placeholder: "Subject",
                            },
                            t("subject", { required: !0 })
                          )
                        ),
                        s.subject &&
                          Object(b.jsx)("span", {
                            className: "invalid-feedback",
                            children: "Subject is required.",
                          }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-12",
                    children: Object(b.jsxs)("div", {
                      className: "form-group mb-3",
                      children: [
                        Object(b.jsx)(
                          "textarea",
                          Object(k.a)(
                            {
                              rows: "4",
                              className: "form-control theme-light",
                              placeholder: "Type comment",
                            },
                            t("comment", { required: !0 })
                          )
                        ),
                        s.comment &&
                          Object(b.jsx)("span", {
                            className: "invalid-feedback",
                            children: "Comment is required.",
                          }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-12",
                    children: Object(b.jsx)("div", {
                      className: "btn-bar",
                      children: Object(b.jsx)("button", {
                        className: "px-btn px-btn-white",
                        children: "Send Message",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      X.a.setAppElement("#root");
      var $ = function () {
          var e = Object(s.useState)(!1),
            t = Object(n.a)(e, 2),
            i = t[0],
            c = t[1],
            a = Object(s.useState)(!1),
            l = Object(n.a)(a, 2),
            o = l[0],
            r = l[1],
            d = Object(s.useState)(!1),
            m = Object(n.a)(d, 2),
            j = m[0],
            u = m[1],
            h = Object(s.useState)(!1),
            p = Object(n.a)(h, 2),
            x = p[0],
            O = p[1];
          function g() {
            c(!i);
          }
          function v() {
            r(!o);
          }
          function f() {
            u(!j);
          }
          function N() {
            O(!x);
          }
          return Object(b.jsxs)(b.Fragment, {
            children: [
              Object(b.jsxs)("div", {
                className: "row",
                children: [
                  Object(b.jsx)("div", {
                    className: "col-md-6 m-15px-tb",
                    children: Object(b.jsxs)("div", {
                      className: "blog-grid",
                      onClick: g,
                      children: [
                        Object(b.jsx)("div", {
                          className: "blog-img",
                          children: Object(b.jsx)("a", {
                            children: Object(b.jsx)("img", {
                              src: "img/blog/blog-4.jpg",
                              alt: "blog post",
                            }),
                          }),
                        }),
                        Object(b.jsxs)("div", {
                          className: "blog-info",
                          children: [
                            Object(b.jsx)("div", {
                              className: "meta",
                              children: "29/FEB/2020 - BY ALEX",
                            }),
                            Object(b.jsx)("h6", {
                              children: Object(b.jsx)("a", {
                                children:
                                  "Five Solid Evidences Attending Design Is Good For Your Career Development.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-md-6 m-15px-tb",
                    children: Object(b.jsxs)("div", {
                      className: "blog-grid",
                      onClick: v,
                      children: [
                        Object(b.jsx)("div", {
                          className: "blog-img",
                          children: Object(b.jsx)("a", {
                            children: Object(b.jsx)("img", {
                              src: "img/blog/blog-2.jpg",
                              alt: "blog post",
                            }),
                          }),
                        }),
                        Object(b.jsxs)("div", {
                          className: "blog-info",
                          children: [
                            Object(b.jsx)("div", {
                              className: "meta",
                              children: "05/JAN/2020 - BY SMITH",
                            }),
                            Object(b.jsx)("h6", {
                              children: Object(b.jsx)("a", {
                                children:
                                  "Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-md-6 m-15px-tb",
                    children: Object(b.jsxs)("div", {
                      className: "blog-grid",
                      onClick: f,
                      children: [
                        Object(b.jsx)("div", {
                          className: "blog-img",
                          children: Object(b.jsx)("a", {
                            children: Object(b.jsx)("img", {
                              src: "img/blog/blog-3.jpg",
                              alt: "blog post",
                            }),
                          }),
                        }),
                        Object(b.jsxs)("div", {
                          className: "blog-info",
                          children: [
                            Object(b.jsx)("div", {
                              className: "meta",
                              children: "12/AUG/2020 - BY RIO",
                            }),
                            Object(b.jsx)("h6", {
                              children: Object(b.jsx)("a", {
                                children:
                                  "I Will Tell You The Truth About Design In The Next 60 Seconds.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "col-md-6 m-15px-tb",
                    children: Object(b.jsxs)("div", {
                      className: "blog-grid",
                      onClick: N,
                      children: [
                        Object(b.jsx)("div", {
                          className: "blog-img",
                          children: Object(b.jsx)("a", {
                            children: Object(b.jsx)("img", {
                              src: "img/blog/blog-1.jpg",
                              alt: "blog post",
                            }),
                          }),
                        }),
                        Object(b.jsxs)("div", {
                          className: "blog-info",
                          children: [
                            Object(b.jsx)("div", {
                              className: "meta",
                              children: "22/JUN/2020 - BY SVEIL",
                            }),
                            Object(b.jsx)("h6", {
                              children: Object(b.jsx)("a", {
                                children:
                                  "What You Know About Design And What You Don't Know About Design.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(b.jsx)(X.a, {
                isOpen: i,
                onRequestClose: g,
                contentLabel: "My dialog",
                className: "custom-modal",
                overlayClassName: "custom-overlay",
                closeTimeoutMS: 500,
                children: Object(b.jsxs)("div", {
                  children: [
                    Object(b.jsx)("button", {
                      className: "close-modal",
                      onClick: g,
                      children: Object(b.jsx)("img", {
                        src: "/img/cancel.svg",
                        alt: "close icon",
                      }),
                    }),
                    Object(b.jsx)("div", {
                      className: "box_inner",
                      children: Object(b.jsx)("div", {
                        className: "scrollable",
                        children: Object(b.jsxs)("div", {
                          className: "blog-grid",
                          children: [
                            Object(b.jsx)("div", {
                              className: "blog-img",
                              children: Object(b.jsx)("img", {
                                src: "img/blog/blog-4.jpg",
                                alt: "blog post",
                              }),
                            }),
                            Object(b.jsxs)("article", {
                              className: "article",
                              children: [
                                Object(b.jsxs)("div", {
                                  className: "article-title",
                                  children: [
                                    Object(b.jsx)("h2", {
                                      children:
                                        "They Now Bade Farewell To The Kind But Unseen People",
                                    }),
                                    Object(b.jsxs)("div", {
                                      className: "media",
                                      children: [
                                        Object(b.jsx)("div", {
                                          className: "avatar",
                                          children: Object(b.jsx)("img", {
                                            src: "img/testimonial/team-1.jpg",
                                            alt: "thumbnail",
                                          }),
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "media-body",
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "BY ALEX",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "26 FEB 2020",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("div", {
                                  className: "article-content",
                                  children: [
                                    Object(b.jsx)("p", {
                                      children:
                                        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.",
                                    }),
                                    Object(b.jsx)("h4", {
                                      children: "What are my payment options?",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    }),
                                    Object(b.jsxs)("blockquote", {
                                      children: [
                                        Object(b.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                                        }),
                                        Object(b.jsxs)("p", {
                                          className: "blockquote-footer",
                                          children: [
                                            "Someone famous in",
                                            " ",
                                            Object(b.jsx)("cite", {
                                              title: "Source Title",
                                              children: "Dick Grayson",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("ul", {
                                  className: "nav tag-cloud",
                                  children: [
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Development",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Travel",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Web Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Marketing",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Research",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Managment",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "contact-form article-comment",
                              children: [
                                Object(b.jsx)("h4", {
                                  children: "Leave a Reply",
                                }),
                                Object(b.jsx)(Z, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(b.jsx)(X.a, {
                isOpen: o,
                onRequestClose: v,
                contentLabel: "My dialog",
                className: "custom-modal",
                overlayClassName: "custom-overlay",
                closeTimeoutMS: 500,
                children: Object(b.jsxs)("div", {
                  children: [
                    Object(b.jsx)("button", {
                      className: "close-modal",
                      onClick: v,
                      children: Object(b.jsx)("img", {
                        src: "/img/cancel.svg",
                        alt: "close icon",
                      }),
                    }),
                    Object(b.jsx)("div", {
                      className: "box_inner",
                      children: Object(b.jsx)("div", {
                        className: "scrollable",
                        children: Object(b.jsxs)("div", {
                          className: "blog-grid",
                          children: [
                            Object(b.jsx)("div", {
                              className: "blog-img",
                              children: Object(b.jsx)("img", {
                                src: "img/blog/blog-2.jpg",
                                alt: "blog post",
                              }),
                            }),
                            Object(b.jsxs)("article", {
                              className: "article",
                              children: [
                                Object(b.jsxs)("div", {
                                  className: "article-title",
                                  children: [
                                    Object(b.jsx)("h2", {
                                      children:
                                        "Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.",
                                    }),
                                    Object(b.jsxs)("div", {
                                      className: "media",
                                      children: [
                                        Object(b.jsx)("div", {
                                          className: "avatar",
                                          children: Object(b.jsx)("img", {
                                            src: "img/testimonial/team-2.jpg",
                                            alt: "thumbnail",
                                          }),
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "media-body",
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "BY SMITH",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "05 JAN 2020",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("div", {
                                  className: "article-content",
                                  children: [
                                    Object(b.jsx)("p", {
                                      children:
                                        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.",
                                    }),
                                    Object(b.jsx)("h4", {
                                      children: "What are my payment options?",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    }),
                                    Object(b.jsxs)("blockquote", {
                                      children: [
                                        Object(b.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                                        }),
                                        Object(b.jsxs)("p", {
                                          className: "blockquote-footer",
                                          children: [
                                            "Someone famous in",
                                            " ",
                                            Object(b.jsx)("cite", {
                                              title: "Source Title",
                                              children: "Dick Grayson",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("ul", {
                                  className: "nav tag-cloud",
                                  children: [
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Development",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Travel",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Web Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Marketing",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Research",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Managment",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "contact-form article-comment",
                              children: [
                                Object(b.jsx)("h4", {
                                  children: "Leave a Reply",
                                }),
                                Object(b.jsx)(Z, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(b.jsx)(X.a, {
                isOpen: j,
                onRequestClose: f,
                contentLabel: "My dialog",
                className: "custom-modal",
                overlayClassName: "custom-overlay",
                closeTimeoutMS: 500,
                children: Object(b.jsxs)("div", {
                  children: [
                    Object(b.jsx)("button", {
                      className: "close-modal",
                      onClick: f,
                      children: Object(b.jsx)("img", {
                        src: "/img/cancel.svg",
                        alt: "close icon",
                      }),
                    }),
                    Object(b.jsx)("div", {
                      className: "box_inner",
                      children: Object(b.jsx)("div", {
                        className: "scrollable",
                        children: Object(b.jsxs)("div", {
                          className: "blog-grid",
                          children: [
                            Object(b.jsx)("div", {
                              className: "blog-img",
                              children: Object(b.jsx)("img", {
                                src: "img/blog/blog-3.jpg",
                                alt: "blog post",
                              }),
                            }),
                            Object(b.jsxs)("article", {
                              className: "article",
                              children: [
                                Object(b.jsxs)("div", {
                                  className: "article-title",
                                  children: [
                                    Object(b.jsx)("h2", {
                                      children:
                                        "I Will Tell You The Truth About Design In The Next 60 Seconds.",
                                    }),
                                    Object(b.jsxs)("div", {
                                      className: "media",
                                      children: [
                                        Object(b.jsx)("div", {
                                          className: "avatar",
                                          children: Object(b.jsx)("img", {
                                            src: "img/testimonial/team-3.jpg",
                                            alt: "thumbnail",
                                          }),
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "media-body",
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "BY RIO",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "12 AUG 2020",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("div", {
                                  className: "article-content",
                                  children: [
                                    Object(b.jsx)("p", {
                                      children:
                                        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.",
                                    }),
                                    Object(b.jsx)("h4", {
                                      children: "What are my payment options?",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    }),
                                    Object(b.jsxs)("blockquote", {
                                      children: [
                                        Object(b.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                                        }),
                                        Object(b.jsxs)("p", {
                                          className: "blockquote-footer",
                                          children: [
                                            "Someone famous in",
                                            " ",
                                            Object(b.jsx)("cite", {
                                              title: "Source Title",
                                              children: "Dick Grayson",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("ul", {
                                  className: "nav tag-cloud",
                                  children: [
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Development",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Travel",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Web Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Marketing",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Research",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Managment",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "contact-form article-comment",
                              children: [
                                Object(b.jsx)("h4", {
                                  children: "Leave a Reply",
                                }),
                                Object(b.jsx)(Z, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(b.jsx)(X.a, {
                isOpen: x,
                onRequestClose: N,
                contentLabel: "My dialog",
                className: "custom-modal",
                overlayClassName: "custom-overlay",
                closeTimeoutMS: 500,
                children: Object(b.jsxs)("div", {
                  children: [
                    Object(b.jsx)("button", {
                      className: "close-modal",
                      onClick: N,
                      children: Object(b.jsx)("img", {
                        src: "/img/cancel.svg",
                        alt: "close icon",
                      }),
                    }),
                    Object(b.jsx)("div", {
                      className: "box_inner",
                      children: Object(b.jsx)("div", {
                        className: "scrollable",
                        children: Object(b.jsxs)("div", {
                          className: "blog-grid",
                          children: [
                            Object(b.jsx)("div", {
                              className: "blog-img",
                              children: Object(b.jsx)("img", {
                                src: "img/blog/blog-1.jpg",
                                alt: "blog post",
                              }),
                            }),
                            Object(b.jsxs)("article", {
                              className: "article",
                              children: [
                                Object(b.jsxs)("div", {
                                  className: "article-title",
                                  children: [
                                    Object(b.jsx)("h2", {
                                      children:
                                        "They Now Bade Farewell To The Kind But Unseen People",
                                    }),
                                    Object(b.jsxs)("div", {
                                      className: "media",
                                      children: [
                                        Object(b.jsx)("div", {
                                          className: "avatar",
                                          children: Object(b.jsx)("img", {
                                            src: "img/testimonial/team-4.jpg",
                                            alt: "thumbnail",
                                          }),
                                        }),
                                        Object(b.jsxs)("div", {
                                          className: "media-body",
                                          children: [
                                            Object(b.jsx)("label", {
                                              children: "BY SVEIL",
                                            }),
                                            Object(b.jsx)("span", {
                                              children: "22 JAN 2020",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("div", {
                                  className: "article-content",
                                  children: [
                                    Object(b.jsx)("p", {
                                      children:
                                        "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.",
                                    }),
                                    Object(b.jsx)("h4", {
                                      children: "What are my payment options?",
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                    }),
                                    Object(b.jsxs)("blockquote", {
                                      children: [
                                        Object(b.jsx)("p", {
                                          children:
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                                        }),
                                        Object(b.jsxs)("p", {
                                          className: "blockquote-footer",
                                          children: [
                                            "Someone famous in",
                                            " ",
                                            Object(b.jsx)("cite", {
                                              title: "Source Title",
                                              children: "Dick Grayson",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(b.jsx)("p", {
                                      children:
                                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    }),
                                  ],
                                }),
                                Object(b.jsxs)("ul", {
                                  className: "nav tag-cloud",
                                  children: [
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Development",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Travel",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Web Design",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Marketing",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Research",
                                    }),
                                    Object(b.jsx)("li", {
                                      href: "#",
                                      children: "Managment",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(b.jsxs)("div", {
                              className: "contact-form article-comment",
                              children: [
                                Object(b.jsx)("h4", {
                                  children: "Leave a Reply",
                                }),
                                Object(b.jsx)(Z, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ee = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsxs)("div", {
              className: "contact-info",
              children: [
                Object(b.jsx)("h4", {
                  children: "What\u2019s your story? Get in touch",
                }),
                Object(b.jsx)("p", {
                  children:
                    "Always available for freelancing if the right project comes along, Feel free to contact me.",
                }),
                Object(b.jsxs)("ul", {
                  children: [
                    Object(b.jsxs)("li", {
                      className: "media",
                      children: [
                        Object(b.jsx)("i", { className: "icon icon-map" }),
                        Object(b.jsx)("span", {
                          className: "media-body",
                          children:
                            "123 Stree New York City , United States Of America 750065.",
                        }),
                      ],
                    }),
                    Object(b.jsxs)("li", {
                      className: "media",
                      children: [
                        Object(b.jsx)("i", { className: "icon icon-envelope" }),
                        Object(b.jsx)("span", {
                          className: "media-body",
                          children: "support@domain.com",
                        }),
                      ],
                    }),
                    Object(b.jsxs)("li", {
                      className: "media",
                      children: [
                        Object(b.jsx)("i", { className: "icon icon-phone" }),
                        Object(b.jsx)("span", {
                          className: "media-body",
                          children: "+044 9696 9696 3636",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        te = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)("div", {
              className: "google-map",
              children: Object(b.jsx)("div", {
                className: "embed-responsive embed-responsive-21by9",
                children: Object(b.jsx)("iframe", {
                  className: "embed-responsive-item",
                  title: "location title",
                  src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883",
                }),
              }),
            }),
          });
        },
        ie = [
          { Social: Object(b.jsx)(j.b, {}), link: "https://www.facebook.com/" },
          { Social: Object(b.jsx)(j.g, {}), link: "https://www.linkedin.com/" },
          {
            Social: Object(b.jsx)(j.d, {}),
            link: "https://www.instagram.com/",
          },
          { Social: Object(b.jsx)(j.e, {}), link: "https://twitter.com/" },
          {
            Social: Object(b.jsx)(j.f, {}),
            link: "https://www.pinterest.com/",
          },
        ],
        se = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsxs)("div", {
              className: "row align-items-center",
              children: [
                Object(b.jsx)("div", {
                  className: "col-md-6 my-2",
                  children: Object(b.jsx)("div", {
                    className:
                      "nav justify-content-center justify-content-md-start",
                    children: ie.map(function (e, t) {
                      return Object(b.jsx)(
                        "a",
                        {
                          href: "".concat(e.link),
                          rel: "noreferrer",
                          target: "_blank",
                          children: e.Social,
                        },
                        t
                      );
                    }),
                  }),
                }),
                Object(b.jsx)("div", {
                  className: "col-md-6 my-2 text-center text-md-end",
                  children: Object(b.jsxs)("p", {
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " copyright",
                      " ",
                      Object(b.jsx)("a", {
                        href: "https://themeforest.net/user/ib-themes/portfolio",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "ib-themes",
                      }),
                      " ",
                      "all right reserved",
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      var ce = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = Object(s.useRef)(document.title);
          Object(s.useEffect)(
            function () {
              document.title = e;
            },
            [e]
          ),
            Object(s.useEffect)(function () {
              return function () {
                t || (document.title = i.current);
              };
            }, []);
        },
        ae = function () {
          return (
            ce(
              "Jean-Paul Laclau || Sidebar Two React Personal Portfolio Template"
            ),
            Object(b.jsxs)("div", {
              className: "main-left theme-dark",
              children: [
                Object(b.jsx)(u, {}),
                Object(b.jsx)(f, {}),
                Object(b.jsx)(A, {}),
                Object(b.jsx)(V, {}),
                Object(b.jsx)("section", {
                  id: "work",
                  className: "section theme-light dark-bg",
                  children: Object(b.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(b.jsx)("div", {
                        className: "title",
                        children: Object(b.jsx)("h3", {
                          children: "My Portfolio.",
                        }),
                      }),
                      Object(b.jsx)(H, {}),
                    ],
                  }),
                }),
                Object(b.jsx)("section", {
                  id: "blog",
                  className: "section",
                  children: Object(b.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(b.jsx)("div", {
                        className: "title",
                        children: Object(b.jsx)("h3", {
                          children: "Latest Blog.",
                        }),
                      }),
                      Object(b.jsx)($, {}),
                    ],
                  }),
                }),
                Object(b.jsx)("section", {
                  id: "contactus",
                  className: "section theme-light dark-bg",
                  children: Object(b.jsx)("div", {
                    className: "container",
                    children: Object(b.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(b.jsx)("div", {
                          className: "col-lg-5 col-xl-4 m-15px-tb",
                          children: Object(b.jsx)(ee, {}),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-lg-7 ml-auto m-15px-tb  ",
                          children: Object(b.jsxs)("div", {
                            className: "contact-form",
                            children: [
                              Object(b.jsx)("h4", {
                                children: "Say Something",
                              }),
                              Object(b.jsx)(Z, {}),
                            ],
                          }),
                        }),
                        Object(b.jsx)("div", {
                          className: "col-12",
                          children: Object(b.jsx)(te, {}),
                        }),
                      ],
                    }),
                  }),
                }),
                Object(b.jsx)("footer", {
                  className: "footer white",
                  children: Object(b.jsx)("div", {
                    className: "container",
                    children: Object(b.jsx)(se, {}),
                  }),
                }),
              ],
            })
          );
        };
      var le = function () {
          return (
            ce("Not Found || React Personal Portfolio Template"),
            Object(b.jsxs)(b.Fragment, {
              children: [
                Object(b.jsx)("section", {
                  className: "error-page-wrapper",
                  children: Object(b.jsx)("div", {
                    className: "container",
                    children: Object(b.jsx)("div", {
                      className:
                        "row justify-content-center full-screen align-items-center",
                      children: Object(b.jsx)("div", {
                        className: "col-lg-8 text-center",
                        children: Object(b.jsxs)("div", {
                          className: "inner",
                          children: [
                            Object(b.jsx)("h1", {
                              className: "display-3 white-color m-15px-b",
                              children: "404 - Page Not Found..",
                            }),
                            Object(b.jsx)("p", {
                              className: "h4",
                              children:
                                "Whoops, it looks like the page you request wasn't found.",
                            }),
                            Object(b.jsx)("div", {
                              className: "btn-bar mt-4",
                              children: Object(b.jsx)(d.b, {
                                className: "px-btn px-btn-white",
                                to: "/",
                                children: "BACK TO HOME",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                Object(b.jsx)("footer", {
                  className: "footer white",
                  children: Object(b.jsx)("div", {
                    className: "container",
                    children: Object(b.jsx)(se, {}),
                  }),
                }),
              ],
            })
          );
        },
        ne = i(15);
      function oe() {
        var e = Object(ne.f)().pathname;
        return (
          Object(s.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      var re = function () {
        return Object(b.jsx)(b.Fragment, {
          children: Object(b.jsxs)(d.a, {
            children: [
              Object(b.jsx)(oe, {}),
              Object(b.jsxs)(ne.c, {
                children: [
                  Object(b.jsx)(ne.a, { exact: !0, path: "/", component: ae }),
                  Object(b.jsx)(ne.a, { component: le }),
                ],
              }),
            ],
          }),
        });
      };
      function de() {
        var e = Object(s.useState)(!1),
          t = Object(n.a)(e, 2),
          i = t[0],
          c = t[1];
        return (
          Object(s.useEffect)(function () {
            var e = function () {
              window.pageYOffset > 500 ? c(!0) : c(!1);
            };
            return (
              window.addEventListener("scroll", e),
              function () {
                return window.removeEventListener("scroll", e);
              }
            );
          }, []),
          Object(b.jsx)(b.Fragment, {
            children:
              i &&
              Object(b.jsx)("div", {
                children: Object(b.jsx)("div", {
                  onClick: function () {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  },
                  className: "scroll_up",
                  "data-aos": "fade-left",
                  "data-aos-duration": "1200",
                  "data-aos-delay": "200",
                  children: Object(b.jsx)(m.a, {}),
                }),
              }),
          })
        );
      }
      var me = i(72),
        je = i.n(me),
        be = i(73),
        ue = i.n(be),
        he =
          (i(143),
          function () {
            return (
              Object(s.useEffect)(function () {
                ue.a.init();
              }, []),
              Object(b.jsxs)(b.Fragment, {
                children: [
                  Object(b.jsx)(je.a, {
                    innerSize: 8,
                    outerSize: 44,
                    color: "75,255,165",
                    outerAlpha: 0.3,
                    innerScale: 0.7,
                    outerScale: 1.4,
                  }),
                  Object(b.jsx)(de, {}),
                  Object(b.jsx)(re, {}),
                ],
              })
            );
          }),
        pe = function (e) {
          e &&
            e instanceof Function &&
            i
              .e(4)
              .then(i.bind(null, 149))
              .then(function (t) {
                var i = t.getCLS,
                  s = t.getFID,
                  c = t.getFCP,
                  a = t.getLCP,
                  l = t.getTTFB;
                i(e), s(e), c(e), a(e), l(e);
              });
        };
      i(144);
      l.a.render(Object(b.jsx)(he, {}), document.getElementById("root")), pe();
    },
    77: function (e, t, i) {},
    81: function (e, t, i) {},
  },
  [[146, 1, 2]],
]);
