"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./src/app/contact/page.tsx":
/*!**********************************!*\
  !*** ./src/app/contact/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// ContactUs.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ContactUs = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log({\n            email,\n            message\n        });\n        setEmail(\"\");\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gradient-to-b from-gray-800 via-gray-900 to-black p-10 rounded-2xl shadow-xl max-w-lg w-full transform hover:scale-105 transition-transform duration-300\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-4xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600\",\n                    children: \"Get in Touch\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \" \",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true,\n                                    className: \"peer w-full px-6 py-6 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-all duration-300 placeholder-transparent \".concat(email && \"pt-6\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"absolute left-4 text-gray-400 transition-all duration-200 \".concat(email ? \"top-2 text-sm text-teal-400\" : \"top-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-gray-500\"),\n                                    children: \"Your Email\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    rows: 5,\n                                    placeholder: \" \",\n                                    value: message,\n                                    onChange: (e)=>setMessage(e.target.value),\n                                    required: true,\n                                    className: \"peer w-full px-6 py-6 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-all duration-300 placeholder-transparent \".concat(message && \"pt-6\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"absolute left-4 text-gray-400 transition-all duration-200 \".concat(message ? \"top-2 text-sm text-teal-400\" : \"top-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-gray-500\"),\n                                    children: \"Your Message\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-300 font-medium\",\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\portfolio\\\\src\\\\app\\\\contact\\\\page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContactUs, \"mxdRTHxkiTeLOv2akPbesFCh75U=\");\n_c = ContactUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactUs);\nvar _c;\n$RefreshReg$(_c, \"ContactUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZUFBZTs7O0FBRXlCO0FBRXhDLE1BQU1FLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkMsTUFBTU0sZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDO1lBQUVSO1lBQU9FO1FBQVE7UUFDN0JELFNBQVM7UUFDVEUsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBa0k7Ozs7Ozs4QkFHaEosOERBQUNFO29CQUFLQyxVQUFVVDs7c0NBQ2QsOERBQUNLOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU9qQjtvQ0FDUGtCLFVBQVUsQ0FBQ2IsSUFBTUosU0FBU0ksRUFBRWMsTUFBTSxDQUFDRixLQUFLO29DQUN4Q0csUUFBUTtvQ0FDUlYsV0FBVyw2TEFFVixPQURDVixTQUFTOzs7Ozs7OENBR2IsOERBQUNxQjtvQ0FDQ1gsV0FBVyw2REFJVixPQUhDVixRQUNJLGdDQUNBOzhDQUVQOzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNTOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1k7b0NBQ0NDLE1BQU07b0NBQ05QLGFBQVk7b0NBQ1pDLE9BQU9mO29DQUNQZ0IsVUFBVSxDQUFDYixJQUFNRixXQUFXRSxFQUFFYyxNQUFNLENBQUNGLEtBQUs7b0NBQzFDRyxRQUFRO29DQUNSVixXQUFXLDZMQUVWLE9BRENSLFdBQVc7Ozs7Ozs4Q0FHZiw4REFBQ21CO29DQUNDWCxXQUFXLDZEQUlWLE9BSENSLFVBQ0ksZ0NBQ0E7OENBRVA7Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQ3NCOzRCQUNDVCxNQUFLOzRCQUNMTCxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBdEVNWDtLQUFBQTtBQXdFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbnRhY3QvcGFnZS50c3g/MGU5NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb250YWN0VXMuanNcclxuJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRhY3RVcyA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coeyBlbWFpbCwgbWVzc2FnZSB9KTtcclxuICAgIHNldEVtYWlsKCcnKTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ibGFjayBweC00IHNtOnB4LTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS04MDAgdmlhLWdyYXktOTAwIHRvLWJsYWNrIHAtMTAgcm91bmRlZC0yeGwgc2hhZG93LXhsIG1heC13LWxnIHctZnVsbCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIG1iLTYgdGV4dC1jZW50ZXIgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRlYWwtMzAwIHZpYS1ibHVlLTUwMCB0by1wdXJwbGUtNjAwXCI+XHJcbiAgICAgICAgICBHZXQgaW4gVG91Y2hcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi04XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwZWVyIHctZnVsbCBweC02IHB5LTYgYmctdHJhbnNwYXJlbnQgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBwbGFjZWhvbGRlci10cmFuc3BhcmVudCAke1xyXG4gICAgICAgICAgICAgICAgZW1haWwgJiYgJ3B0LTYnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtNCB0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCAke1xyXG4gICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgPyAndG9wLTIgdGV4dC1zbSB0ZXh0LXRlYWwtNDAwJ1xyXG4gICAgICAgICAgICAgICAgICA6ICd0b3AtNiBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRvcC1bNjAlXSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRleHQtYmFzZSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LVstNTAlXSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRleHQtZ3JheS01MDAnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBZb3VyIEVtYWlsXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItOFwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBlZXIgdy1mdWxsIHB4LTYgcHktNiBiZy10cmFuc3BhcmVudCBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXRlYWwtNTAwIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHBsYWNlaG9sZGVyLXRyYW5zcGFyZW50ICR7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlICYmICdwdC02J1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVmdC00IHRleHQtZ3JheS00MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwICR7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgID8gJ3RvcC0yIHRleHQtc20gdGV4dC10ZWFsLTQwMCdcclxuICAgICAgICAgICAgICAgICAgOiAndG9wLTYgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0b3AtWzYwJV0gcGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LWJhc2UgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS1bLTUwJV0gcGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LWdyYXktNTAwJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWW91ciBNZXNzYWdlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLWdyYWRpZW50LXRvLXIgZnJvbS10ZWFsLTQwMCB2aWEtYmx1ZS01MDAgdG8tcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2VuZCBNZXNzYWdlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0VXMiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImxhYmVsIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contact/page.tsx\n"));

/***/ })

});