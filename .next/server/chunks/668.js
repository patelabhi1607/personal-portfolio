"use strict";
exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(665);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./components/ProjectsCard.tsx




const ProjectsCard = ({ name , desc , github , link  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
        lg: "6",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
            bottom: true,
            duration: 2000,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                className: "shadow-lg--hover shadow mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardBody, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex px-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pl-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "description mt-3",
                                    children: desc
                                }),
                                github ? /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                    className: "btn-icon",
                                    color: "github",
                                    href: github,
                                    target: "_blank",
                                    rel: "noopener",
                                    "aria-label": "Github",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "btn-inner--icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-github"
                                        })
                                    })
                                }) : null,
                                link ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Button, {
                                    className: "btn-icon",
                                    color: "success",
                                    href: link,
                                    target: "_blank",
                                    rel: "noopener",
                                    "aria-label": "Twitter",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "btn-inner--icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-arrow-right mr-2"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nav-link-inner--text ml-1",
                                            children: "Demo"
                                        })
                                    ]
                                }) : null
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_ProjectsCard = (ProjectsCard);

;// CONCATENATED MODULE: ./containers/Projects.tsx





const Projects = ()=>{
    return portfolio/* projects */.q && /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ni ni-laptop text-info"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "display-3 text-info",
                                children: "Projects"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                    className: "row-grid align-items-center",
                    children: portfolio/* projects.map */.q.map((data, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(components_ProjectsCard, {
                            ...data
                        }, i);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const containers_Projects = (Projects);


/***/ })

};
;