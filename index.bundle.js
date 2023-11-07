/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_products_coffee_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/products/coffee.png */ "./src/assets/images/products/coffee.png");
/* harmony import */ var _assets_images_products_chai_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/products/chai.png */ "./src/assets/images/products/chai.png");
/* harmony import */ var _assets_images_products_latte_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/products/latte.png */ "./src/assets/images/products/latte.png");
/* harmony import */ var _assets_images_products_cappuccino_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/products/cappuccino.png */ "./src/assets/images/products/cappuccino.png");
/* harmony import */ var _assets_images_products_green_tea_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/products/green-tea.png */ "./src/assets/images/products/green-tea.png");
/* harmony import */ var _assets_images_products_hot_cocoa_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/products/hot-cocoa.png */ "./src/assets/images/products/hot-cocoa.png");
/* harmony import */ var _assets_images_products_boba_tea_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/products/boba-tea.png */ "./src/assets/images/products/boba-tea.png");
/* harmony import */ var _assets_images_products_matcha_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/products/matcha.png */ "./src/assets/images/products/matcha.png");








var products = {
  coffee: {
    textContent: 'coffee',
    productImage: _assets_images_products_coffee_png__WEBPACK_IMPORTED_MODULE_0__,
    price: 3.99
  },
  chai: {
    textContent: 'chai',
    productImage: _assets_images_products_chai_png__WEBPACK_IMPORTED_MODULE_1__,
    price: 3.99
  },
  latte: {
    textContent: 'latte',
    productImage: _assets_images_products_latte_png__WEBPACK_IMPORTED_MODULE_2__,
    price: 4.99
  },
  cappuccino: {
    textContent: 'cappuccino',
    productImage: _assets_images_products_cappuccino_png__WEBPACK_IMPORTED_MODULE_3__,
    price: 4.99
  },
  matcha: {
    textContent: 'matcha latte',
    productImage: _assets_images_products_matcha_png__WEBPACK_IMPORTED_MODULE_7__,
    price: 4.99
  },
  bobaTea: {
    textContent: 'boba tea',
    productImage: _assets_images_products_boba_tea_png__WEBPACK_IMPORTED_MODULE_6__,
    price: 4.99
  },
  greenTea: {
    textContent: 'green tea',
    productImage: _assets_images_products_green_tea_png__WEBPACK_IMPORTED_MODULE_4__,
    price: 2.99
  },
  hotCocoa: {
    textContent: 'hot cocoa',
    productImage: _assets_images_products_hot_cocoa_png__WEBPACK_IMPORTED_MODULE_5__,
    price: 3.99
  }
};
function createProductGrid() {
  var productGrid = document.createElement('ul');
  productGrid.classList.add('product-grid');
  for (var productKey in products) {
    var product = products[productKey];
    var productCardWrapper = document.createElement('li');
    productCardWrapper.classList.add('product-card-wrapper');
    var productCard = document.createElement('article');
    productCard.classList.add('product-card');
    var itemImage = document.createElement('img');
    itemImage.classList.add('product-image');
    itemImage.setAttribute('src', product.productImage);
    itemImage.setAttribute('alt', product.textContent);
    var productHeader = document.createElement('h3');
    productHeader.classList.add('product-header');
    productHeader.textContent = product.textContent;
    var price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = "$".concat(product.price);
    productCard.append(productHeader, itemImage, price);
    productCardWrapper.appendChild(productCard);
    productGrid.appendChild(productCardWrapper);
  }
  return productGrid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProductGrid);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/cyclone-reset.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/cyclone-reset.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  font: inherit;
}

html {
  box-sizing: inherit;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  line-height: 1.5;
  min-height: 100vh;
  position: relative;
  text-rendering: optimizeSpeed;
}

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

h1,
h2,
h3,
h3,
h5,
h6 {
  font-weight: normal;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

img {
  image-rendering: crisp-edges;
}

button {
  background-color: transparent;
  border: none;
  font-family: inherit;
  padding: 0;
}

picture img {
  object-fit: contain;
}

/* change colours to suit your needs */
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

/* change colours to suit your needs */
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}

del {
  text-decoration: line-through;
}

dfn {
  font-style: italic;
  margin-right: 3px;
}

abbr[title],
dfn[title] {
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

em {
  font-style: italic;
}

.accessibility {
  height: 1px;
  left: -9999px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

/* * UTILITIES */

.no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
`, "",{"version":3,"sources":["webpack://./src/css/cyclone-reset.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAqEE,uBAAuB;EACvB,SAAS;EACT,eAAe;EACf,SAAS;EACT,UAAU;EACV,UAAU;EACV,wBAAwB;AAC1B;;AAEA;;;;;;;;;;;EAWE,cAAc;AAChB;;AAEA;;;;;;EAME,mBAAmB;AACrB;;AAEA;;;EAGE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA,sCAAsC;AACtC;EACE,sBAAsB;EACtB,WAAW;EACX,qBAAqB;AACvB;;AAEA,sCAAsC;AACtC;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,4CAA4C;AAC5C;EACE,cAAc;EACd,WAAW;EACX,SAAS;EACT,6BAA6B;EAC7B,aAAa;EACb,UAAU;AACZ;;AAEA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;;;;EAIE,iDAAiD;AACnD;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,gCAAgC;IAChC,sCAAsC;EACxC;AACF;;AAEA,gBAAgB;;AAEhB;EACE,2BAA2B,EAAE,eAAe;EAC5C,yBAAyB,EAAE,WAAW;EACtC,wBAAwB,EAAE,mBAAmB;EAC7C,sBAAsB,EAAE,4BAA4B;EACpD,qBAAqB,EAAE,2BAA2B;EAClD,iBAAiB,EAAE;gFAC2D;AAChF","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  font: inherit;\n}\n\nhtml {\n  box-sizing: inherit;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nbody {\n  line-height: 1.5;\n  min-height: 100vh;\n  position: relative;\n  text-rendering: optimizeSpeed;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  background: transparent;\n  border: 0;\n  font-size: 100%;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nh1,\nh2,\nh3,\nh3,\nh5,\nh6 {\n  font-weight: normal;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nimg {\n  image-rendering: crisp-edges;\n}\n\nbutton {\n  background-color: transparent;\n  border: none;\n  font-family: inherit;\n  padding: 0;\n}\n\npicture img {\n  object-fit: contain;\n}\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\ndfn {\n  font-style: italic;\n  margin-right: 3px;\n}\n\nabbr[title],\ndfn[title] {\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput,\nselect {\n  vertical-align: middle;\n}\n\nem {\n  font-style: italic;\n}\n\n.accessibility {\n  height: 1px;\n  left: -9999px;\n  overflow: hidden;\n  position: absolute;\n  top: auto;\n  width: 1px;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5000s ease-in-out 0s;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    scroll-behavior: auto !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* * UTILITIES */\n\n.no-select {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cyclone_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./cyclone-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/cyclone-reset.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/hello-headline.woff2 */ "./src/assets/fonts/hello-headline.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_cyclone_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav-san-button-container {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
}
.nav-san-button-container .nav-san-button, .nav-san-button-container .nav-san-button::before, .nav-san-button-container .nav-san-button::after {
  transition: all 150ms ease-in-out;
}
.nav-san-button-container.open .nav-san-button {
  background: transparent;
}
.nav-san-button-container.open .nav-san-button::before {
  transform: translateY(0) rotate(-45deg);
}
.nav-san-button-container.open .nav-san-button::after {
  transform: translateY(0) rotate(45deg);
}
.nav-san-button-container.open + .nav-ul {
  animation: fade-in 1s ease-in-out;
  display: flex;
}
.nav-san-button-container.open + .nav-ul.closing {
  animation: fade-out 150ms ease-in-out;
}
.nav-san-button-container .nav-san-button {
  background: white;
  border-radius: 50%;
  height: 2.5px;
  position: relative;
  width: 100%;
}
.nav-san-button-container .nav-san-button::before, .nav-san-button-container .nav-san-button::after {
  background-color: white;
  border-radius: 50%;
  content: "";
  position: absolute;
  inset: 0;
  height: 2.5px;
  width: 100%;
}
.nav-san-button-container .nav-san-button::before {
  transform: translateY(-6.25px);
}
.nav-san-button-container .nav-san-button::after {
  transform: translateY(6.25px);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
nav .nav-ul {
  display: none;
  gap: 1.5rem;
  list-style: none;
  position: absolute;
}
nav .nav-ul .nav-li {
  position: relative;
  transition: transform 250ms ease-in-out;
}
nav .nav-ul .nav-li:nth-of-type(odd) {
  transform: rotate(8deg);
}
nav .nav-ul .nav-li:nth-of-type(even) {
  transform: rotate(-8deg);
}
nav .nav-ul .nav-li::before, nav .nav-ul .nav-li::after {
  border-radius: 100px;
  content: "";
  inset: 0px -10px;
  opacity: 1;
  pointer-events: none;
  position: absolute;
  transform: scaleX(0);
  transform-origin: center;
  z-index: 0;
}
nav .nav-ul .nav-li::before {
  border-right: 2px solid white;
}
nav .nav-ul .nav-li::after {
  border-left: 2px solid white;
}
nav .nav-ul .nav-li:hover {
  transform: rotate(0);
}
nav .nav-ul .nav-li:hover::before, nav .nav-ul .nav-li:hover::after {
  transform: scaleX(1);
  transition: transform 250ms ease-in-out;
}
nav .nav-ul .nav-a {
  background: linear-gradient(skyblue, white, white);
  background: -webkit-linear-gradient(skyblue, white, white);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-decoration: none;
  text-shadow: unset;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.product-grid {
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  list-style: none;
  margin-inline: auto;
  padding-block: 1rem;
  padding-inline: 1.5rem;
  width: min(100%, 803px + 3rem);
}
.product-grid .product-card-wrapper {
  aspect-ratio: 1/1;
  position: relative;
}
.product-grid .product-card-wrapper .product-card {
  color: var(--color-text-primary);
}
.product-grid .product-card-wrapper .product-card .product-image {
  animation: rotate 33s linear infinite;
  border-radius: 50%;
  box-shadow: 3px 3px 11px black, -3px -3px 11px skyblue;
  position: absolute;
  inset: 0;
  z-index: -1;
}
.product-grid .product-card-wrapper .product-card .product-header {
  font-family: "Hello Headline";
  font-size: clamp(1rem, 5vw, 1.313rem);
  line-height: 1;
  text-shadow: 2px 2px 3px black;
}
.product-grid .product-card-wrapper .product-card .product-price {
  font-size: var(--body-text-size);
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
}

@-webkit-keyframes wobble-hor-bottom {
  0%, 100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%, 100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@font-face {
  font-family: "Hello Headline";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
}
:root {
  --body-text-size: clamp(0.75rem, 2vw, 0.8313rem);
  --color-primary: #271300;
  --color-secondary: #D1E7E0;
  --color-text-primary: white;
  --color-text-secondary: #704241;
}

.page-content {
  padding-inline: 1.5rem;
}

.section-content {
  margin-inline: auto;
  padding-block: 25px;
  width: min(100%, 1200px);
}

.shape-divider {
  left: 0;
  line-height: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.shape-divider svg {
  display: block;
  height: 55px;
  position: relative;
  width: calc(100% + 1.3px);
}

.shape-divider-top {
  top: -1px;
}

.shape-divider-bottom {
  bottom: -1px;
  transform: rotate(180deg);
}

body {
  background: var(--color-primary);
  color: var(--color-text-primary);
  font-family: "Open Sans", "Courier New", Courier, monospace;
  font-size: var(--body-text-size);
  font-weight: 300;
}

a {
  color: var(--color-text-primary);
  font-size: var(--body-text-size);
  font-weight: bold;
}

header .header-content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  max-width: 1200px;
  padding-block: 25px;
  position: relative;
}
header .header-left .header-title {
  background: linear-gradient(skyblue, white, white);
  background: -webkit-linear-gradient(skyblue, white, white);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: "Hello Headline";
  font-size: clamp(1.313rem, 11vw, 5.5rem);
  line-height: 1.25;
  position: relative;
  text-decoration: none;
  transform-origin: top left;
  transition: transform 250ms ease-in-out;
}
header nav .nav-ul {
  right: 1.5rem;
  top: 65%;
}
header:has(.nav-san-button-container.open) .header-title {
  transform: scale(0.7);
}

main section {
  position: relative;
}
main section.shop-display-section .shop-image {
  object-fit: cover;
  margin-inline: auto;
  min-height: 333px;
  width: min(100%, 1200px);
}
main section.shop-display-section .shape-divider-one .shape-fill {
  fill: var(--color-primary);
}
main section.shop-display-section .shape-divider-two .shape-fill {
  fill: var(--color-secondary);
}
main section.testimonial-section {
  background-color: var(--color-secondary);
}
main section.testimonial-section .testimonial-section-content {
  align-items: center;
  display: grid;
  gap: 1rem;
  margin-inline: auto;
  place-items: center;
}
main section.testimonial-section .testimonial-quote,
main section.testimonial-section .testimonial-figcaption {
  color: var(--color-text-secondary);
  font-size: var(--body-text-size);
  font-style: italic;
  margin-bottom: 1rem;
  text-align: center;
}
main section.testimonial-section .testimonial-figcaption {
  font-weight: bold;
}
main section.testimonial-section .coffee-cup {
  -webkit-animation: wobble-hor-bottom 3s both infinite;
  animation: wobble-hor-bottom 3s both infinite;
  aspect-ratio: 1;
  filter: drop-shadow(3px 5px 5px var(--color-primary));
  height: clamp(100px, 33vw, 300px);
}
main section.testimonial-section .emphasized-text {
  font-weight: 700;
}
main section.testimonial-section .shape-divider-three .shape-fill {
  fill: var(--color-primary);
}
main section.information-section .information-section-content {
  display: grid;
  gap: 2rem;
}
main section.information-section .information-section-content .information-heading {
  font-weight: bold;
  font-size: clamp(0.8313rem, 2vw, 1rem);
  margin-bottom: 1rem;
}
main section.information-section .information-section-content .information-sub-heading {
  font-weight: bold;
  margin-bottom: 0.25rem;
}
main section.information-section .information-section-content .hours-content-container {
  display: flex;
  flex-direction: column;
}
main section.information-section .information-section-content .hours-content-container hr {
  margin: 0;
}
main section.information-section .information-section-content .information-sub-container {
  margin-bottom: 1rem;
}
main section.information-section .information-section-content .day-container {
  align-items: center;
  display: flex;
  font-size: var(--body-text-size);
  gap: 3rem;
  justify-content: space-between;
}
main section.information-section .information-section-content .information-bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

footer {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  display: grid;
  gap: 1rem;
  padding-block: 1rem;
  place-items: center;
}
footer .logo-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
}
footer .footer-logo {
  fill: var(--color-secondary);
  height: 1rem;
  transition: all 250ms ease-in-out;
}
footer .footer-logo:hover {
  opacity: 0.8;
  transform: scale(1.1) rotate(8deg);
}

@media (min-width: 768px) {
  .testimonial-section-content {
    grid-template-columns: repeat(3, 1fr);
  }
  .information-section-content {
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  header nav .nav-san-button-container {
    display: none;
  }
  header nav .nav-ul {
    display: flex;
    position: relative;
    right: 0;
  }
  header:has(.nav-san-button-container.open) .header-title {
    transform: scale(1);
  }
}

/*# sourceMappingURL=style.css.map */
`, "",{"version":3,"sources":["webpack://./src/css/sass/nav-button.scss","webpack://./src/css/style.css","webpack://./src/css/sass/nav.scss","webpack://./src/css/sass/gallery.scss","webpack://./src/css/sass/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/hello-headline.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/hello-headline.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aabdbb55e92fe78d0d61.woff2";

/***/ }),

/***/ "./src/assets/images/coffee-cup.webp":
/*!*******************************************!*\
  !*** ./src/assets/images/coffee-cup.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69c2ae1e785ee6f2cd2a.webp";

/***/ }),

/***/ "./src/assets/images/coffee-shop.png":
/*!*******************************************!*\
  !*** ./src/assets/images/coffee-shop.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7d7608f668cd033677d.png";

/***/ }),

/***/ "./src/assets/images/products/boba-tea.png":
/*!*************************************************!*\
  !*** ./src/assets/images/products/boba-tea.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fff2c50ddc1f89bcb14.png";

/***/ }),

/***/ "./src/assets/images/products/cappuccino.png":
/*!***************************************************!*\
  !*** ./src/assets/images/products/cappuccino.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a01315f6069f900e2b36.png";

/***/ }),

/***/ "./src/assets/images/products/chai.png":
/*!*********************************************!*\
  !*** ./src/assets/images/products/chai.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fae4c2520291009e747.png";

/***/ }),

/***/ "./src/assets/images/products/coffee.png":
/*!***********************************************!*\
  !*** ./src/assets/images/products/coffee.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "260e7aed857cb46d12d2.png";

/***/ }),

/***/ "./src/assets/images/products/green-tea.png":
/*!**************************************************!*\
  !*** ./src/assets/images/products/green-tea.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b99590a45c496d8c62e2.png";

/***/ }),

/***/ "./src/assets/images/products/hot-cocoa.png":
/*!**************************************************!*\
  !*** ./src/assets/images/products/hot-cocoa.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29dbe460af6472f8670e.png";

/***/ }),

/***/ "./src/assets/images/products/latte.png":
/*!**********************************************!*\
  !*** ./src/assets/images/products/latte.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70103bae2336da77b0e1.png";

/***/ }),

/***/ "./src/assets/images/products/matcha.png":
/*!***********************************************!*\
  !*** ./src/assets/images/products/matcha.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88f450bc72a885800ab5.png";

/***/ }),

/***/ "../../../node_modules/mustache/mustache.mjs":
/*!***************************************************!*\
  !*** ../../../node_modules/mustache/mustache.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill (object) {
  return objectToString.call(object) === '[object Array]';
};

function isFunction (object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr (obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty (primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
var regExpTest = RegExp.prototype.test;
function testRegExp (re, string) {
  return regExpTest.call(re, string);
}

var nonSpaceRe = /\S/;
function isWhitespace (string) {
  return !testRegExp(nonSpaceRe, string);
}

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}

var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate (template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];     // Stack to hold section tokens
  var tokens = [];       // Buffer to hold the tokens
  var spaces = [];       // Indices of whitespace tokens on the current line
  var hasTag = false;    // Is there a {{tag}} on the current line?
  var nonSpace = false;  // Is there a non-space char on the current line?
  var indentation = '';  // Tracks indentation for tags that use it
  var tagIndex = 0;      // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace () {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags (tagsToCompile) {
    if (typeof tagsToCompile === 'string')
      tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error('Invalid tags: ' + tagsToCompile);

    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
    closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
  }

  compileTags(tags || mustache.tags);

  var scanner = new Scanner(template);

  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push([ 'text', chr, start, start + 1 ]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe))
      break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe))
      throw new Error('Unclosed tag at ' + scanner.pos);

    if (type == '>') {
      token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
    } else {
      token = [ type, value, start, scanner.pos ];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);

      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens (tokens) {
  var squashedTokens = [];

  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens (tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];

  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner (string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos () {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan (re) {
  var match = this.tail.match(re);

  if (!match || match.index !== 0)
    return '';

  var string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil (re) {
  var index = this.tail.search(re), match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context (view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push (view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup (name) {
  var cache = this.cache;

  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         **/
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = (
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index])
            );

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         **/
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value))
    value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer () {
  this.templateCache = {
    _cache: {},
    set: function set (key, value) {
      this._cache[key] = value;
    },
    get: function get (key) {
      return this._cache[key];
    },
    clear: function clear () {
      this._cache = {};
    }
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache () {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse (template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ':' + (tags || mustache.tags).join(':');
  var isCacheEnabled = typeof cache !== 'undefined';
  var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render (template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context = (view instanceof Context) ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
  var buffer = '';

  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined)
      buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = '';
  var value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender (template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string')
      throw new Error('Cannot use higher-order sections without the original template');

    // Extract the portion of the original template that the section contains.
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0))
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};

Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, '');
  var partialByNl = partial.split('\n');
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);

  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue (token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};

Writer.prototype.escapedValue = function escapedValue (token, context, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
};

Writer.prototype.rawValue = function rawValue (token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags (config) {
  if (isArray(config)) {
    return config;
  }
  else if (config && typeof config === 'object') {
    return config.tags;
  }
  else {
    return undefined;
  }
};

Writer.prototype.getConfigEscape = function getConfigEscape (config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  else {
    return undefined;
  }
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: [ '{{', '}}' ],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache (cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache () {
    return defaultWriter.templateCache;
  }
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache () {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse (template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render (template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + typeStr(template) + '" was given as the first ' +
                        'argument for mustache#render(template, view, partials)');
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mustache);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.js */ "./src/js/products.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _assets_images_coffee_shop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/coffee-shop.png */ "./src/assets/images/coffee-shop.png");
/* harmony import */ var _assets_images_coffee_cup_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/coffee-cup.webp */ "./src/assets/images/coffee-cup.webp");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mustache */ "../../../node_modules/mustache/mustache.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var body = document.body;
var content = document.getElementById('content');
var pageNames = ['home', 'story', 'products'];
var homePage = [createSectionOne, createSectionTwo, createSectionThree];
function hideNav() {
  var navUL = document.querySelector('.nav-ul');
  navUL.classList.remove('closing');
  navUL.removeEventListener('animationend', hideNav);
  var navSanButtonContainer = document.querySelector('.nav-san-button-container');
  navSanButtonContainer.classList.remove('open');
  navSanButtonContainer.setAttribute('aria-label', 'Open Navigation Menu');
  navSanButtonContainer.setAttribute('aria-expanded', false);
}
function toggleNavButton() {
  var navOpen = this.classList.contains('open');
  if (!navOpen) {
    this.classList.add('open');
    this.setAttribute('aria-label', 'Close Navigation Menu');
    this.setAttribute('aria-expanded', true);
  } else {
    this.nextElementSibling.classList.add('closing');
    this.nextElementSibling.addEventListener('animationend', hideNav);
  }
}
function createNav(pages) {
  var mainNavigation = document.createElement('nav');
  mainNavigation.setAttribute('aria-label', 'Main Navigation');
  var navSanButtonContainer = document.createElement('button');
  navSanButtonContainer.classList.add('nav-san-button-container');
  navSanButtonContainer.setAttribute('aria-label', 'Open Navigation Menu');
  navSanButtonContainer.setAttribute('aria-expanded', 'false');
  var navSanButton = document.createElement('div');
  navSanButton.classList.add('nav-san-button');
  var navUL = document.createElement('ul');
  navUL.classList.add('nav-ul');
  var listFragment = document.createDocumentFragment();
  pages.forEach(function (page) {
    var navLI = document.createElement('li');
    navLI.classList.add('nav-li');
    var navLink = document.createElement('a');
    navLink.classList.add('nav-a');
    navLink.setAttribute('href', '#');
    navLink.textContent = page;
    navLI.appendChild(navLink);
    listFragment.appendChild(navLI);
  });
  navSanButtonContainer.appendChild(navSanButton);
  navUL.appendChild(listFragment);
  mainNavigation.appendChild(navSanButtonContainer);
  mainNavigation.appendChild(navUL);
  navSanButtonContainer.addEventListener('click', toggleNavButton);
  return mainNavigation;
}
function createHeader() {
  var header = document.createElement('header');
  var contentContainer = document.createElement('div');
  contentContainer.classList.add('page-content', 'header-content');
  var headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');
  var headerTitle = document.createElement('a');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'Cloud 8 Café';
  var headerRight = document.createElement('div');
  headerRight.classList.add('header-right');
  var nav = createNav(pageNames);
  headerLeft.appendChild(headerTitle);
  headerRight.appendChild(nav);
  contentContainer.appendChild(headerLeft);
  contentContainer.appendChild(headerRight);
  header.appendChild(contentContainer);
  return header;
}
function createDivider() {
  var _shapeDivider$classLi;
  var classArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // ? if classArray is an array, it returns the array
  // ? if classArray is a string (a truthy value), it returns an array with the string as the only element
  // ? if classArray is a falsy value, it returns an empty array
  classArray = Array.isArray(classArray) ? classArray : classArray ? [classArray] : [];
  var pathData = 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';
  var shapeDivider = document.createElement('div');
  (_shapeDivider$classLi = shapeDivider.classList).add.apply(_shapeDivider$classLi, _toConsumableArray(classArray));
  var shapeDividerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // ? ns = namespace (svgNameSpace) is required for svg elements
  shapeDividerSVG.setAttributeNS(null, 'viewBox', '0 0 1200 120');
  shapeDividerSVG.setAttributeNS(null, 'preserveAspectRatio', 'none');
  shapeDividerSVG.setAttribute('aria-hidden', 'true');
  shapeDividerSVG.setAttribute('role', 'presentation');
  var shapeDividerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  shapeDividerPath.classList.add('shape-fill');
  shapeDividerPath.setAttributeNS(null, 'd', pathData);
  shapeDividerSVG.appendChild(shapeDividerPath);
  shapeDivider.appendChild(shapeDividerSVG);
  return shapeDivider;
}
function createQuotation(quoteObject) {
  var quotePartsArray = quoteObject.parts,
    author = quoteObject.author;
  // ? extracts the value parts property from the quotesObject, an array
  // ? extracts the value of the author property from the quotesObject, a string

  var figure = document.createElement('figure');
  var blockquote = document.createElement('blockquote');
  var blockquoteText = document.createElement('p');
  blockquoteText.classList.add('testimonial-quote');
  var figcaption = document.createElement('figcaption');
  figcaption.classList.add('testimonial-figcaption');
  figcaption.textContent = "- ".concat(author);
  var emphasisText = 'coffee';
  quotePartsArray.forEach(function (part) {
    if (part === emphasisText) {
      var emphasizedSpan = document.createElement('span');
      emphasizedSpan.classList.add('emphasized-text');
      emphasizedSpan.textContent = part;
      blockquoteText.appendChild(emphasizedSpan);
    } else {
      blockquoteText.appendChild(document.createTextNode(part));
    }
  });
  blockquote.appendChild(blockquoteText);
  figure.appendChild(blockquote);
  figure.appendChild(figcaption);
  return figure;
}

// ! add arrow down on bottom of full height hero section
// ! use intersection observer to hide arrow down when user scrolls down 
// ! (or clicks it, which will scroll to next section)
function createSectionOne() {
  var shopDisplaySection = document.createElement('section');
  shopDisplaySection.classList.add('shop-display-section');
  var shopImage = document.createElement('img');
  shopImage.classList.add('shop-image');
  shopImage.setAttribute('src', _assets_images_coffee_shop_png__WEBPACK_IMPORTED_MODULE_2__);
  shopImage.setAttribute('alt', 'Coffee Shop');
  var shapeDividerTop = createDivider(['shape-divider', 'shape-divider-top', 'shape-divider-one']);
  var shapeDividerBottom = createDivider(['shape-divider', 'shape-divider-bottom', 'shape-divider-two']);
  shopDisplaySection.appendChild(shapeDividerTop);
  shopDisplaySection.appendChild(shopImage);
  shopDisplaySection.appendChild(shapeDividerBottom);
  return shopDisplaySection;
}
function createSectionTwo() {
  var testimonialSection = document.createElement('section');
  testimonialSection.classList.add('testimonial-section');
  var contentContainer = document.createElement('div');
  contentContainer.classList.add('page-content', 'section-content', 'testimonial-section-content');
  var coffeeCupImage = document.createElement('img');
  coffeeCupImage.classList.add('coffee-cup');
  coffeeCupImage.setAttribute('src', _assets_images_coffee_cup_webp__WEBPACK_IMPORTED_MODULE_3__);
  coffeeCupImage.setAttribute('alt', 'Coffee Cup');
  var shapeDividerBottom = createDivider(['shape-divider', 'shape-divider-bottom', 'shape-divider-three']);
  var quotes = {
    quoteOne: {
      'parts': ['"', 'coffee', ' ', 'blends sleek design with a productivity-boosting ambiance, all while serving up some of the city\'s finest joe. It\'s the perfect urban oasis for creatives and coffee lovers alike."'],
      'author': 'Elon Musk'
    },
    quoteTwo: {
      'parts': ['"With its winning combination of earth-toned, minimalist design and signature lo-fi music', ' ', 'coffee', ' ', 'is the go-to spot for modern city dwellers seeking a tranquil haven to work and savor top-notch java. It\'s where aesthetic meets caffeine."'],
      'author': 'John Cloud'
    }
  };
  contentContainer.appendChild(createQuotation(quotes.quoteOne));
  contentContainer.appendChild(coffeeCupImage);
  contentContainer.appendChild(createQuotation(quotes.quoteTwo));
  testimonialSection.appendChild(contentContainer);
  testimonialSection.appendChild(shapeDividerBottom);
  return testimonialSection;
}
function renderHoursContent() {
  var hoursTable = document.createElement('div');
  var tableHeading = document.createElement('h2');
  tableHeading.classList.add('information-heading');
  tableHeading.textContent = 'hours of operation';
  var hoursContentContainer = document.createElement('div');
  hoursContentContainer.classList.add('hours-content-container');
  var hoursData = {
    'monday': '7:00am - 11:00pm',
    'tuesday': '7:00am - 11:00pm',
    'wednesday': '7:00am - 11:00pm',
    'thursday': '7:00am - 11:00pm',
    'friday': '7:00am - 11:00pm',
    'saturday': '9:00am - 12:00am',
    'sunday': '9:00am - 7:00pm'
  };
  for (var day in hoursData) {
    var dayContainer = document.createElement('div');
    dayContainer.classList.add('day-container');
    var operatingDay = document.createElement('p');
    operatingDay.classList.add('information-sub-heading', 'operating-day');
    operatingDay.textContent = day;
    var operatingHours = document.createElement('p');
    operatingHours.classList.add('operating-hours');
    operatingHours.textContent = hoursData[day];
    var horizontalRule = document.createElement('hr');
    dayContainer.appendChild(operatingDay);
    dayContainer.appendChild(operatingHours);
    hoursContentContainer.appendChild(dayContainer);
    hoursContentContainer.appendChild(horizontalRule);
  }
  hoursTable.appendChild(tableHeading);
  hoursTable.appendChild(hoursContentContainer);
  return hoursTable;
}
function createSubContainer(contactDataArr) {
  var informationSubContainer = document.createElement('div');
  informationSubContainer.classList.add('information-sub-container');
  var informationSubHeading = document.createElement('h3');
  informationSubHeading.classList.add('information-sub-heading');
  informationSubHeading.textContent = contactDataArr[1];
  var methodOfContact = document.createElement('a');
  methodOfContact.classList.add('method-of-contact');
  methodOfContact.setAttribute('href', contactDataArr[0]);
  methodOfContact.textContent = contactDataArr[2];
  informationSubContainer.appendChild(informationSubHeading);
  informationSubContainer.appendChild(methodOfContact);
  return informationSubContainer;
}
function renderAddress(addressData) {
  var addressContainer = document.createElement('div');
  addressContainer.classList.add('address-container');
  var addressSubHeading = document.createElement('h3');
  addressSubHeading.classList.add('information-sub-heading');
  addressSubHeading.textContent = 'address:';
  var addressStreet = document.createElement('p');
  addressStreet.textContent = addressData[0];
  var addressCityStateZip = document.createElement('p');
  addressCityStateZip.textContent = addressData[1];
  addressContainer.appendChild(addressSubHeading);
  addressContainer.appendChild(addressStreet);
  addressContainer.appendChild(addressCityStateZip);
  return addressContainer;
}
function createSectionThree() {
  var addressDataArr = ['888 Coffee Street', 'New York, NY 10003'];
  var informationSection = document.createElement('section');
  informationSection.classList.add('information-section');
  var contentContainer = document.createElement('div');
  contentContainer.classList.add('page-content', 'section-content', 'information-section-content');
  var hoursTable = renderHoursContent();
  hoursTable.classList.add('hours-table');
  var informationBottomSection = document.createElement('div');
  informationBottomSection.classList.add('information-bottom-section');
  var contactUsContainer = document.createElement('div');
  contactUsContainer.classList.add('contact-us-container');
  var contactUsHeading = document.createElement('h2');
  contactUsHeading.classList.add('information-heading');
  contactUsHeading.textContent = 'contact us';
  var contactUsContent = document.createElement('div');
  contactUsContent.classList.add('contact-us-content');
  var visitUsContainer = document.createElement('div');
  visitUsContainer.classList.add('visit-us');
  var visitUsHeading = document.createElement('h2');
  visitUsHeading.classList.add('information-heading');
  visitUsHeading.textContent = 'visit us';
  var addressContainer = renderAddress(addressDataArr);
  var emailSubContainer = createSubContainer(['mailto:coffee@cyclonestud.io', 'email:', 'coffee@cyclonestud.io']);
  var phoneSubContainer = createSubContainer(['tel:212-555-7813', 'phone:', '212-555-7813']);
  var instagramSubContainer = createSubContainer(['#', 'instagram', '@coffeebycyclone']);
  contactUsContent.appendChild(emailSubContainer);
  contactUsContent.appendChild(phoneSubContainer);
  contactUsContent.appendChild(instagramSubContainer);
  contactUsContainer.appendChild(contactUsHeading);
  contactUsContainer.appendChild(contactUsContent);
  visitUsContainer.appendChild(visitUsHeading);
  visitUsContainer.appendChild(addressContainer);
  informationBottomSection.appendChild(contactUsContainer);
  informationBottomSection.appendChild(visitUsContainer);
  contentContainer.appendChild(hoursTable);
  contentContainer.appendChild(informationBottomSection);
  informationSection.appendChild(contentContainer);
  return informationSection;
}
function createFooter() {
  var footer = document.createElement('footer');
  var footerTextParts = ['©', ' ', '{{footerYear}}', ' ', 'Coffee by Cyclone Studios'];
  var footerText = document.createElement('p');
  footerTextParts.forEach(function (part) {
    if (part === '{{footerYear}}') {
      var footerYear = document.createElement('span');
      footerYear.classList.add('footer-year');
      footerYear.textContent = new Date().getFullYear();
      footerText.appendChild(footerYear);
    } else {
      footerText.appendChild(document.createTextNode(part));
    }
  });
  var logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  var contactData = {
    phone: {
      'href': 'tel:212-555-7813',
      'aria-label': 'Call Us',
      svgPathD: 'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
    },
    instagram: {
      'href': '#',
      'aria-label': 'Instagram',
      svgPathD: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
    },
    email: {
      href: 'mailto:coffee@cyclonestud.io',
      'aria-label': 'Email Us',
      svgPathD: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
    }
  };
  for (var contactMethod in contactData) {
    var methodData = contactData[contactMethod];
    var contactButtonLink = document.createElement('a');
    contactButtonLink.classList.add('footer-link');
    contactButtonLink.setAttribute('href', methodData.href);
    contactButtonLink.setAttribute('aria-label', methodData['aria-label']);
    var contactButtonSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    contactButtonSVG.classList.add('footer-logo');
    contactButtonSVG.setAttributeNS(null, 'viewBox', '0 0 512 512');
    contactButtonSVG.setAttributeNS(null, 'role', 'img');
    var contactButtonSVGPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    contactButtonSVGPath.setAttributeNS(null, 'd', methodData.svgPathD);
    contactButtonSVG.appendChild(contactButtonSVGPath);
    contactButtonLink.appendChild(contactButtonSVG);
    logoContainer.appendChild(contactButtonLink);
  }
  footer.appendChild(footerText);
  footer.appendChild(logoContainer);
  return footer;
}
function renderContent(sectionsArray) {
  sectionsArray = Array.isArray(sectionsArray) ? sectionsArray : sectionsArray ? [sectionsArray] : [];
  var pageContent = document.getElementById('content');
  var main = document.createElement('main');
  sectionsArray.forEach(function (section) {
    main.appendChild(section());
  });
  pageContent.appendChild(main);
  return pageContent;
}
function renderHomePage() {
  body.appendChild(createHeader(pageNames));
  body.appendChild(renderContent(homePage));
  body.appendChild(createFooter());
}
renderHomePage();
var navLinks = document.querySelectorAll('.nav-a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    content.innerHTML = ''; // ! hacky way, revisit and use removeChild()/remove()… document fragment maybe>
    switch (link.textContent) {
      case 'home':
        renderContent(homePage);
        break;
      case 'story':
        // renderContent(storyPage); // ! create story page :)
        break;
      case 'products':
        renderContent(_products_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  });
});

// ! use when changing page contents
// navLink.setAttribute('aria-current', 'page');
// main.appendChild(gallery);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxpUEFBaVAsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxjQUFjLGFBQWEsWUFBWSxVQUFVLEtBQUssS0FBSyxZQUFZLGNBQWMsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1B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QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0JBQW9CO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sdUNBQXVDO0FBQzdDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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LEVBQUk7RUFDdkJBLElBQUksQ0FBQ25ILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDb0gsQ0FBQyxFQUFLO0lBQ3BDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCdEksT0FBTyxDQUFDdUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLFFBQVFILElBQUksQ0FBQ2xLLFdBQVc7TUFDdEIsS0FBSyxNQUFNO1FBQ1QwSixhQUFhLENBQUN6SCxRQUFRLENBQUM7UUFDdkI7TUFDRixLQUFLLE9BQU87UUFDVjtRQUNBO01BQ0YsS0FBSyxVQUFVO1FBQ2J5SCxhQUFhLENBQUNqSSxvREFBWSxDQUFDO0lBQy9CO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS8uL3NyYy9qcy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUvLi9zcmMvY3NzL2N5Y2xvbmUtcmVzZXQuY3NzIiwid2VicGFjazovL2NvZmZlZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2NvZmZlZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2NvZmZlZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvZmZlZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29mZmVlLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9tdXN0YWNoZS9tdXN0YWNoZS5tanMiLCJ3ZWJwYWNrOi8vY29mZmVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZmZlZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZmZlZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZmZlZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZmZlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZmZlZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29mZmVlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2ZmZWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY29mZmVlSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9jb2ZmZWUucG5nJztcbmltcG9ydCBjaGFpSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9jaGFpLnBuZyc7XG5pbXBvcnQgbGF0dGVJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL2xhdHRlLnBuZyc7XG5pbXBvcnQgY2FwcHVjY2lub0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdHMvY2FwcHVjY2luby5wbmcnO1xuaW1wb3J0IGdyZWVuVGVhSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9ncmVlbi10ZWEucG5nJztcbmltcG9ydCBob3RDb2NvYUltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdHMvaG90LWNvY29hLnBuZyc7XG5pbXBvcnQgYm9iYVRlYUltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdHMvYm9iYS10ZWEucG5nJztcbmltcG9ydCBtYXRjaGEgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9tYXRjaGEucG5nJztcblxuY29uc3QgcHJvZHVjdHMgPSB7XG4gIGNvZmZlZToge1xuICAgIHRleHRDb250ZW50OiAnY29mZmVlJyxcbiAgICBwcm9kdWN0SW1hZ2U6IGNvZmZlZUltYWdlLFxuICAgIHByaWNlOiAzLjk5LFxuICB9LFxuICBjaGFpOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdjaGFpJyxcbiAgICBwcm9kdWN0SW1hZ2U6IGNoYWlJbWFnZSxcbiAgICBwcmljZTogMy45OVxuICB9LFxuICBsYXR0ZToge1xuICAgIHRleHRDb250ZW50OiAnbGF0dGUnLFxuICAgIHByb2R1Y3RJbWFnZTogbGF0dGVJbWFnZSxcbiAgICBwcmljZTogNC45OVxuICB9LFxuICBjYXBwdWNjaW5vOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdjYXBwdWNjaW5vJyxcbiAgICBwcm9kdWN0SW1hZ2U6IGNhcHB1Y2Npbm9JbWFnZSxcbiAgICBwcmljZTogNC45OVxuICB9LFxuICBtYXRjaGE6IHtcbiAgICB0ZXh0Q29udGVudDogJ21hdGNoYSBsYXR0ZScsXG4gICAgcHJvZHVjdEltYWdlOiBtYXRjaGEsXG4gICAgcHJpY2U6IDQuOTlcbiAgfSxcbiAgYm9iYVRlYToge1xuICAgIHRleHRDb250ZW50OiAnYm9iYSB0ZWEnLFxuICAgIHByb2R1Y3RJbWFnZTogYm9iYVRlYUltYWdlLFxuICAgIHByaWNlOiA0Ljk5XG4gIH0sXG4gIGdyZWVuVGVhOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdncmVlbiB0ZWEnLFxuICAgIHByb2R1Y3RJbWFnZTogZ3JlZW5UZWFJbWFnZSxcbiAgICBwcmljZTogMi45OVxuICB9LFxuICBob3RDb2NvYToge1xuICAgIHRleHRDb250ZW50OiAnaG90IGNvY29hJyxcbiAgICBwcm9kdWN0SW1hZ2U6IGhvdENvY29hSW1hZ2UsXG4gICAgcHJpY2U6IDMuOTlcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEdyaWQoKSB7XG4gIGNvbnN0IHByb2R1Y3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgcHJvZHVjdEdyaWQuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1ncmlkJyk7XG5cbiAgZm9yIChjb25zdCBwcm9kdWN0S2V5IGluIHByb2R1Y3RzKSB7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzW3Byb2R1Y3RLZXldO1xuXG4gICAgY29uc3QgcHJvZHVjdENhcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9kdWN0Q2FyZFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1jYXJkLXdyYXBwZXInKTtcblxuICAgIGNvbnN0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIHByb2R1Y3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtY2FyZCcpO1xuXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaW1hZ2UnKTtcbiAgICBpdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwcm9kdWN0LnByb2R1Y3RJbWFnZSk7XG4gICAgaXRlbUltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcHJvZHVjdC50ZXh0Q29udGVudCk7XG5cbiAgICBjb25zdCBwcm9kdWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9kdWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaGVhZGVyJyk7XG4gICAgcHJvZHVjdEhlYWRlci50ZXh0Q29udGVudCA9IHByb2R1Y3QudGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXByaWNlJyk7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBgJCR7cHJvZHVjdC5wcmljZX1gO1xuXG4gICAgcHJvZHVjdENhcmQuYXBwZW5kKHByb2R1Y3RIZWFkZXIsIGl0ZW1JbWFnZSwgcHJpY2UpO1xuICAgIHByb2R1Y3RDYXJkV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZCk7XG4gICAgcHJvZHVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvZHVjdENhcmRXcmFwcGVyKTtcbiAgfVxuXG4gIHJldHVybiBwcm9kdWN0R3JpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvZHVjdEdyaWQ7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xufVxuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmFiYnIsXG5hZGRyZXNzLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zYW1wLFxuc21hbGwsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG52YXIsXG5iLFxuaSxcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmgzLFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pbWcge1xuICBpbWFnZS1yZW5kZXJpbmc6IGNyaXNwLWVkZ2VzO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbn1cblxucGljdHVyZSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4vKiBjaGFuZ2UgY29sb3VycyB0byBzdWl0IHlvdXIgbmVlZHMgKi9cbmlucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIGNoYW5nZSBjb2xvdXJzIHRvIHN1aXQgeW91ciBuZWVkcyAqL1xubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kZWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuYWJiclt0aXRsZV0sXG5kZm5bdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBjaGFuZ2UgYm9yZGVyIGNvbG91ciB0byBzdWl0IHlvdXIgbmVlZHMgKi9cbmhyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBtYXJnaW46IDFlbSAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmVtIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uYWNjZXNzaWJpbGl0eSB7XG4gIGhlaWdodDogMXB4O1xuICBsZWZ0OiAtOTk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgd2lkdGg6IDFweDtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBodG1sOmZvY3VzLXdpdGhpbiB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICB9XG5cbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogKiBVVElMSVRJRVMgKi9cblxuLm5vLXNlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2N5Y2xvbmUtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFFRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjs7QUFFQTs7Ozs7O0VBTUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSxpREFBaUQ7QUFDbkQ7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLHNDQUFzQztFQUN4QztBQUNGOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSwyQkFBMkIsRUFBRSxlQUFlO0VBQzVDLHlCQUF5QixFQUFFLFdBQVc7RUFDdEMsd0JBQXdCLEVBQUUsbUJBQW1CO0VBQzdDLHNCQUFzQixFQUFFLDRCQUE0QjtFQUNwRCxxQkFBcUIsRUFBRSwyQkFBMkI7RUFDbEQsaUJBQWlCLEVBQUU7Z0ZBQzJEO0FBQ2hGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hYmJyLFxcbmFkZHJlc3MsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnZhcixcXG5iLFxcbmksXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmgzLFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW1nIHtcXG4gIGltYWdlLXJlbmRlcmluZzogY3Jpc3AtZWRnZXM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucGljdHVyZSBpbWcge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLyogY2hhbmdlIGNvbG91cnMgdG8gc3VpdCB5b3VyIG5lZWRzICovXFxuaW5zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogY2hhbmdlIGNvbG91cnMgdG8gc3VpdCB5b3VyIG5lZWRzICovXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbmFiYnJbdGl0bGVdLFxcbmRmblt0aXRsZV0ge1xcbiAgY3Vyc29yOiBoZWxwO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIGNoYW5nZSBib3JkZXIgY29sb3VyIHRvIHN1aXQgeW91ciBuZWVkcyAqL1xcbmhyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuZW0ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uYWNjZXNzaWJpbGl0eSB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGxlZnQ6IC05OTk5cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBhdXRvO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG5cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiAqIFVUSUxJVElFUyAqL1xcblxcbi5uby1zZWxlY3Qge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jeWNsb25lLXJlc2V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvaGVsbG8taGVhZGxpbmUud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubmF2LXNhbi1idXR0b24tY29udGFpbmVyIC5uYXYtc2FuLWJ1dHRvbiwgLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciAubmF2LXNhbi1idXR0b246OmJlZm9yZSwgLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciAubmF2LXNhbi1idXR0b246OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lci5vcGVuIC5uYXYtc2FuLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lci5vcGVuIC5uYXYtc2FuLWJ1dHRvbjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lci5vcGVuIC5uYXYtc2FuLWJ1dHRvbjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5uYXYtc2FuLWJ1dHRvbi1jb250YWluZXIub3BlbiArIC5uYXYtdWwge1xuICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2LXNhbi1idXR0b24tY29udGFpbmVyLm9wZW4gKyAubmF2LXVsLmNsb3Npbmcge1xuICBhbmltYXRpb246IGZhZGUtb3V0IDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciAubmF2LXNhbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciAubmF2LXNhbi1idXR0b246OmJlZm9yZSwgLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciAubmF2LXNhbi1idXR0b246OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgaGVpZ2h0OiAyLjVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2LXNhbi1idXR0b24tY29udGFpbmVyIC5uYXYtc2FuLWJ1dHRvbjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjI1cHgpO1xufVxuLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lciAubmF2LXNhbi1idXR0b246OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYuMjVweCk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5uYXYgLm5hdi11bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGdhcDogMS41cmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5uYXYgLm5hdi11bCAubmF2LWxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5uYXYgLm5hdi11bCAubmF2LWxpOm50aC1vZi10eXBlKG9kZCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKTtcbn1cbm5hdiAubmF2LXVsIC5uYXYtbGk6bnRoLW9mLXR5cGUoZXZlbikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG59XG5uYXYgLm5hdi11bCAubmF2LWxpOjpiZWZvcmUsIG5hdiAubmF2LXVsIC5uYXYtbGk6OmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGluc2V0OiAwcHggLTEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG5uYXYgLm5hdi11bCAubmF2LWxpOjpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbm5hdiAubmF2LXVsIC5uYXYtbGk6OmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbm5hdiAubmF2LXVsIC5uYXYtbGk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cbm5hdiAubmF2LXVsIC5uYXYtbGk6aG92ZXI6OmJlZm9yZSwgbmF2IC5uYXYtdWwgLm5hdi1saTpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxubmF2IC5uYXYtdWwgLm5hdi1hIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHNreWJsdWUsIHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHNreWJsdWUsIHdoaXRlLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiB1bnNldDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLnByb2R1Y3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNjRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjVweCwgMWZyKSk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxLjVyZW07XG4gIHdpZHRoOiBtaW4oMTAwJSwgODAzcHggKyAzcmVtKTtcbn1cbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtY2FyZC13cmFwcGVyIHtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtY2FyZC13cmFwcGVyIC5wcm9kdWN0LWNhcmQge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbn1cbi5wcm9kdWN0LWdyaWQgLnByb2R1Y3QtY2FyZC13cmFwcGVyIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtaW1hZ2Uge1xuICBhbmltYXRpb246IHJvdGF0ZSAzM3MgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTFweCBibGFjaywgLTNweCAtM3B4IDExcHggc2t5Ymx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogLTE7XG59XG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWNhcmQtd3JhcHBlciAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbGxvIEhlYWRsaW5lXCI7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNXZ3LCAxLjMxM3JlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggYmxhY2s7XG59XG4ucHJvZHVjdC1ncmlkIC5wcm9kdWN0LWNhcmQtd3JhcHBlciAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LXByaWNlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1ib2R5LXRleHQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUtaG9yLWJvdHRvbSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgfVxuICAxNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDZkZWcpO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZSgtMS4yZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyB3b2JibGUtaG9yLWJvdHRvbSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgfVxuICAxNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSByb3RhdGUoLTZkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDZkZWcpO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZSgtMS4yZGVnKTtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbGxvIEhlYWRsaW5lXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuOnJvb3Qge1xuICAtLWJvZHktdGV4dC1zaXplOiBjbGFtcCgwLjc1cmVtLCAydncsIDAuODMxM3JlbSk7XG4gIC0tY29sb3ItcHJpbWFyeTogIzI3MTMwMDtcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNEMUU3RTA7XG4gIC0tY29sb3ItdGV4dC1wcmltYXJ5OiB3aGl0ZTtcbiAgLS1jb2xvci10ZXh0LXNlY29uZGFyeTogIzcwNDI0MTtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctaW5saW5lOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLWNvbnRlbnQge1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBwYWRkaW5nLWJsb2NrOiAyNXB4O1xuICB3aWR0aDogbWluKDEwMCUsIDEyMDBweCk7XG59XG5cbi5zaGFwZS1kaXZpZGVyIHtcbiAgbGVmdDogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2hhcGUtZGl2aWRlciBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxLjNweCk7XG59XG5cbi5zaGFwZS1kaXZpZGVyLXRvcCB7XG4gIHRvcDogLTFweDtcbn1cblxuLnNoYXBlLWRpdmlkZXItYm90dG9tIHtcbiAgYm90dG9tOiAtMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LXNpemUpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LXNpemUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaGVhZGVyIC5oZWFkZXItY29udGVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHBhZGRpbmctYmxvY2s6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmhlYWRlciAuaGVhZGVyLWxlZnQgLmhlYWRlci10aXRsZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChza3libHVlLCB3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChza3libHVlLCB3aGl0ZSwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiSGVsbG8gSGVhZGxpbmVcIjtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjMxM3JlbSwgMTF2dywgNS41cmVtKTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuaGVhZGVyIG5hdiAubmF2LXVsIHtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgdG9wOiA2NSU7XG59XG5oZWFkZXI6aGFzKC5uYXYtc2FuLWJ1dHRvbi1jb250YWluZXIub3BlbikgLmhlYWRlci10aXRsZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbn1cblxubWFpbiBzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiBzZWN0aW9uLnNob3AtZGlzcGxheS1zZWN0aW9uIC5zaG9wLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMzM3B4O1xuICB3aWR0aDogbWluKDEwMCUsIDEyMDBweCk7XG59XG5tYWluIHNlY3Rpb24uc2hvcC1kaXNwbGF5LXNlY3Rpb24gLnNoYXBlLWRpdmlkZXItb25lIC5zaGFwZS1maWxsIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5tYWluIHNlY3Rpb24uc2hvcC1kaXNwbGF5LXNlY3Rpb24gLnNoYXBlLWRpdmlkZXItdHdvIC5zaGFwZS1maWxsIHtcbiAgZmlsbDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbm1haW4gc2VjdGlvbi50ZXN0aW1vbmlhbC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbm1haW4gc2VjdGlvbi50ZXN0aW1vbmlhbC1zZWN0aW9uIC50ZXN0aW1vbmlhbC1zZWN0aW9uLWNvbnRlbnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5tYWluIHNlY3Rpb24udGVzdGltb25pYWwtc2VjdGlvbiAudGVzdGltb25pYWwtcXVvdGUsXG5tYWluIHNlY3Rpb24udGVzdGltb25pYWwtc2VjdGlvbiAudGVzdGltb25pYWwtZmlnY2FwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYm9keS10ZXh0LXNpemUpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gc2VjdGlvbi50ZXN0aW1vbmlhbC1zZWN0aW9uIC50ZXN0aW1vbmlhbC1maWdjYXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5tYWluIHNlY3Rpb24udGVzdGltb25pYWwtc2VjdGlvbiAuY29mZmVlLWN1cCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3b2JibGUtaG9yLWJvdHRvbSAzcyBib3RoIGluZmluaXRlO1xuICBhbmltYXRpb246IHdvYmJsZS1ob3ItYm90dG9tIDNzIGJvdGggaW5maW5pdGU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNXB4IDVweCB2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG4gIGhlaWdodDogY2xhbXAoMTAwcHgsIDMzdncsIDMwMHB4KTtcbn1cbm1haW4gc2VjdGlvbi50ZXN0aW1vbmlhbC1zZWN0aW9uIC5lbXBoYXNpemVkLXRleHQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxubWFpbiBzZWN0aW9uLnRlc3RpbW9uaWFsLXNlY3Rpb24gLnNoYXBlLWRpdmlkZXItdGhyZWUgLnNoYXBlLWZpbGwge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbm1haW4gc2VjdGlvbi5pbmZvcm1hdGlvbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1zZWN0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDJyZW07XG59XG5tYWluIHNlY3Rpb24uaW5mb3JtYXRpb24tc2VjdGlvbiAuaW5mb3JtYXRpb24tc2VjdGlvbi1jb250ZW50IC5pbmZvcm1hdGlvbi1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44MzEzcmVtLCAydncsIDFyZW0pO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxubWFpbiBzZWN0aW9uLmluZm9ybWF0aW9uLXNlY3Rpb24gLmluZm9ybWF0aW9uLXNlY3Rpb24tY29udGVudCAuaW5mb3JtYXRpb24tc3ViLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbm1haW4gc2VjdGlvbi5pbmZvcm1hdGlvbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1zZWN0aW9uLWNvbnRlbnQgLmhvdXJzLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1haW4gc2VjdGlvbi5pbmZvcm1hdGlvbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1zZWN0aW9uLWNvbnRlbnQgLmhvdXJzLWNvbnRlbnQtY29udGFpbmVyIGhyIHtcbiAgbWFyZ2luOiAwO1xufVxubWFpbiBzZWN0aW9uLmluZm9ybWF0aW9uLXNlY3Rpb24gLmluZm9ybWF0aW9uLXNlY3Rpb24tY29udGVudCAuaW5mb3JtYXRpb24tc3ViLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5tYWluIHNlY3Rpb24uaW5mb3JtYXRpb24tc2VjdGlvbiAuaW5mb3JtYXRpb24tc2VjdGlvbi1jb250ZW50IC5kYXktY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiB2YXIoLS1ib2R5LXRleHQtc2l6ZSk7XG4gIGdhcDogM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxubWFpbiBzZWN0aW9uLmluZm9ybWF0aW9uLXNlY3Rpb24gLmluZm9ybWF0aW9uLXNlY3Rpb24tY29udGVudCAuaW5mb3JtYXRpb24tYm90dG9tLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuZm9vdGVyIC5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG5mb290ZXIgLmZvb3Rlci1sb2dvIHtcbiAgZmlsbDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5mb290ZXIgLmZvb3Rlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDhkZWcpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRlc3RpbW9uaWFsLXNlY3Rpb24tY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxuICAuaW5mb3JtYXRpb24tc2VjdGlvbi1jb250ZW50IHtcbiAgICBnYXA6IDVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBoZWFkZXIgbmF2IC5uYXYtc2FuLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIG5hdiAubmF2LXVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMDtcbiAgfVxuICBoZWFkZXI6aGFzKC5uYXYtc2FuLWJ1dHRvbi1jb250YWluZXIub3BlbikgLmhlYWRlci10aXRsZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2Fzcy9uYXYtYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Nhc3MvbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2Fzcy9nYWxsZXJ5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2Fzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBUUUsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBVmdCO0VBV2hCLHVCQUFBO0VBQ0EsV0FYZTtBQ09qQjtBRE1FO0VBQ0UsaUNBQUE7QUNKSjtBRFFJO0VBQ0UsdUJBQUE7QUNOTjtBRFFNO0VBQ0UsdUNBQUE7QUNOUjtBRFFNO0VBQ0Usc0NBQUE7QUNOUjtBRFdFO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FDVEY7QURXSTtFQUNFLHFDQUFBO0FDVE47QURhRTtFQUNFLGlCQXJDVTtFQXNDVixrQkF2Q2tCO0VBd0NsQixhQXpDUztFQTBDVCxrQkFBQTtFQUNBLFdBQUE7QUNYSjtBRGFJO0VBQ0UsdUJBNUNRO0VBNkNSLGtCQTlDZ0I7RUErQ2hCLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQW5ETztFQW9EUCxXQUFBO0FDWE47QURjSTtFQUNFLDhCQUFBO0FDWk47QURlSTtFQUNFLDZCQUFBO0FDYk47O0FDbERBO0VBQ0U7SUFDRSxVQUFBO0VEcURGO0VDbkRBO0lBQ0UsVUFBQTtFRHFERjtBQUNGO0FDbkRBO0VBQ0U7SUFDRSxVQUFBO0VEcURGO0VDbkRBO0lBQ0UsVUFBQTtFRHFERjtBQUNGO0FDN0NFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEK0NKO0FDN0NJ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Q0EsOEJBQUE7QUhzSFY7O0FHL0dBO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBSGtIRjtBR2hIRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUhrSEo7QUcvR0U7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBSGlISjtBRy9HSTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtBSGlITjs7QUc1R0E7RUFDRTtJQUNFLHFDQUFBO0VIK0dGO0VHNUdBO0lBQ0UsU0FBQTtJQUNBLHFDQUFBO0VIOEdGO0FBQ0Y7QUczR0E7RUFHTTtJQUNFLGFBQUE7RUgyR047RUd6R0k7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VIMkdOO0VHdEdBO0lBQ0UsbUJBQUE7RUh3R0Y7QUFDRjs7QUFFQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyohXG4gKiBtdXN0YWNoZS5qcyAtIExvZ2ljLWxlc3Mge3ttdXN0YWNoZX19IHRlbXBsYXRlcyB3aXRoIEphdmFTY3JpcHRcbiAqIGh0dHA6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanNcbiAqL1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXlQb2x5ZmlsbCAob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogTW9yZSBjb3JyZWN0IHR5cGVvZiBzdHJpbmcgaGFuZGxpbmcgYXJyYXlcbiAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gKi9cbmZ1bmN0aW9uIHR5cGVTdHIgKG9iaikge1xuICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbn1cblxuLyoqXG4gKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAqIGluY2x1ZGluZyBpdHMgcHJvdG90eXBlLCBoYXMgYSBnaXZlbiBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgKHByb3BOYW1lIGluIG9iaik7XG59XG5cbi8qKlxuICogU2FmZSB3YXkgb2YgZGV0ZWN0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiB0aGluZyBpcyBhIHByaW1pdGl2ZSBhbmRcbiAqIHdoZXRoZXIgaXQgaGFzIHRoZSBnaXZlbiBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eSAocHJpbWl0aXZlLCBwcm9wTmFtZSkge1xuICByZXR1cm4gKFxuICAgIHByaW1pdGl2ZSAhPSBudWxsXG4gICAgJiYgdHlwZW9mIHByaW1pdGl2ZSAhPT0gJ29iamVjdCdcbiAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHlcbiAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpXG4gICk7XG59XG5cbi8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01Nzdcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg5XG52YXIgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcbmZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgcmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSwgc3RyaW5nKTtcbn1cblxudmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAoc3RyaW5nKSB7XG4gIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHJpbmcpO1xufVxuXG52YXIgZW50aXR5TWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnLFxuICAnLyc6ICcmI3gyRjsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgIHJldHVybiBlbnRpdHlNYXBbc107XG4gIH0pO1xufVxuXG52YXIgd2hpdGVSZSA9IC9cXHMqLztcbnZhciBzcGFjZVJlID0gL1xccysvO1xudmFyIGVxdWFsc1JlID0gL1xccyo9LztcbnZhciBjdXJseVJlID0gL1xccypcXH0vO1xudmFyIHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbi8qKlxuICogQnJlYWtzIHVwIHRoZSBnaXZlbiBgdGVtcGxhdGVgIHN0cmluZyBpbnRvIGEgdHJlZSBvZiB0b2tlbnMuIElmIHRoZSBgdGFnc2BcbiAqIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUgaXQgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBzdHJpbmcgdmFsdWVzOiB0aGVcbiAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICogY291cnNlLCB0aGUgZGVmYXVsdCBpcyB0byB1c2UgbXVzdGFjaGVzIChpLmUuIG11c3RhY2hlLnRhZ3MpLlxuICpcbiAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAqIG11c3RhY2hlIHN5bWJvbCB0aGF0IHdhcyB1c2VkIGluc2lkZSB0aGUgdGFnLCBlLmcuIFwiI1wiIG9yIFwiJlwiLiBJZiB0aGUgdGFnXG4gKiBkaWQgbm90IGNvbnRhaW4gYSBzeW1ib2wgKGkuZS4ge3tteVZhbHVlfX0pIHRoaXMgZWxlbWVudCBpcyBcIm5hbWVcIi4gRm9yXG4gKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gKlxuICogVGhlIHNlY29uZCBlbGVtZW50IG9mIGEgdG9rZW4gaXMgaXRzIFwidmFsdWVcIi4gRm9yIG11c3RhY2hlIHRhZ3MgdGhpcyBpc1xuICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICogdGhpcyBpcyB0aGUgdGV4dCBpdHNlbGYuXG4gKlxuICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICogcmVzcGVjdGl2ZWx5LCBvZiB0aGUgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIHRlbXBsYXRlLlxuICpcbiAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICogYXJyYXkgb2YgdG9rZW5zIGluIHRoZSBzdWJ0cmVlIGFuZCAyKSB0aGUgaW5kZXggaW4gdGhlIG9yaWdpbmFsIHRlbXBsYXRlIGF0XG4gKiB3aGljaCB0aGUgY2xvc2luZyB0YWcgZm9yIHRoYXQgc2VjdGlvbiBiZWdpbnMuXG4gKlxuICogVG9rZW5zIGZvciBwYXJ0aWFscyBhbHNvIGNvbnRhaW4gdHdvIG1vcmUgZWxlbWVudHM6IDEpIGEgc3RyaW5nIHZhbHVlIG9mXG4gKiBpbmRlbmRhdGlvbiBwcmlvciB0byB0aGF0IHRhZyBhbmQgMikgdGhlIGluZGV4IG9mIHRoYXQgdGFnIG9uIHRoYXQgbGluZSAtXG4gKiBlZyBhIHZhbHVlIG9mIDIgaW5kaWNhdGVzIHRoZSBwYXJ0aWFsIGlzIHRoZSB0aGlyZCB0YWcgb24gdGhpcyBsaW5lLlxuICovXG5mdW5jdGlvbiBwYXJzZVRlbXBsYXRlICh0ZW1wbGF0ZSwgdGFncykge1xuICBpZiAoIXRlbXBsYXRlKVxuICAgIHJldHVybiBbXTtcbiAgdmFyIGxpbmVIYXNOb25TcGFjZSA9IGZhbHNlO1xuICB2YXIgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcbiAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gIHZhciBzcGFjZXMgPSBbXTsgICAgICAgLy8gSW5kaWNlcyBvZiB3aGl0ZXNwYWNlIHRva2VucyBvbiB0aGUgY3VycmVudCBsaW5lXG4gIHZhciBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuICB2YXIgaW5kZW50YXRpb24gPSAnJzsgIC8vIFRyYWNrcyBpbmRlbnRhdGlvbiBmb3IgdGFncyB0aGF0IHVzZSBpdFxuICB2YXIgdGFnSW5kZXggPSAwOyAgICAgIC8vIFN0b3JlcyBhIGNvdW50IG9mIG51bWJlciBvZiB0YWdzIGVuY291bnRlcmVkIG9uIGEgbGluZVxuXG4gIC8vIFN0cmlwcyBhbGwgd2hpdGVzcGFjZSB0b2tlbnMgYXJyYXkgZm9yIHRoZSBjdXJyZW50IGxpbmVcbiAgLy8gaWYgdGhlcmUgd2FzIGEge3sjdGFnfX0gb24gaXQgYW5kIG90aGVyd2lzZSBvbmx5IHNwYWNlLlxuICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICBpZiAoaGFzVGFnICYmICFub25TcGFjZSkge1xuICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpXG4gICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhY2VzID0gW107XG4gICAgfVxuXG4gICAgaGFzVGFnID0gZmFsc2U7XG4gICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBvcGVuaW5nVGFnUmUsIGNsb3NpbmdUYWdSZSwgY2xvc2luZ0N1cmx5UmU7XG4gIGZ1bmN0aW9uIGNvbXBpbGVUYWdzICh0YWdzVG9Db21waWxlKSB7XG4gICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgIHRhZ3NUb0NvbXBpbGUgPSB0YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsIDIpO1xuXG4gICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgIG9wZW5pbmdUYWdSZSA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMF0pICsgJ1xcXFxzKicpO1xuICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gIH1cblxuICBjb21waWxlVGFncyh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpO1xuXG4gIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gIHZhciBzdGFydCwgdHlwZSwgdmFsdWUsIGNociwgdG9rZW4sIG9wZW5TZWN0aW9uO1xuICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcbiAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgLy8gTWF0Y2ggYW55IHRleHQgYmV0d2VlbiB0YWdzLlxuICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBpIDwgdmFsdWVMZW5ndGg7ICsraSkge1xuICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgc3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCk7XG4gICAgICAgICAgaW5kZW50YXRpb24gKz0gY2hyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICBsaW5lSGFzTm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIGluZGVudGF0aW9uICs9ICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgIHN0YXJ0ICs9IDE7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlc3BhY2Ugb24gdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpIHtcbiAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgICAgaW5kZW50YXRpb24gPSAnJztcbiAgICAgICAgICB0YWdJbmRleCA9IDA7XG4gICAgICAgICAgbGluZUhhc05vblNwYWNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXRjaCB0aGUgb3BlbmluZyB0YWcuXG4gICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgIGJyZWFrO1xuXG4gICAgaGFzVGFnID0gdHJ1ZTtcblxuICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgdHlwZSA9IHNjYW5uZXIuc2Nhbih0YWdSZSkgfHwgJ25hbWUnO1xuICAgIHNjYW5uZXIuc2Nhbih3aGl0ZVJlKTtcblxuICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO1xuICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgc2Nhbm5lci5zY2FuKGN1cmx5UmUpO1xuICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIHR5cGUgPSAnJic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICB9XG5cbiAgICAvLyBNYXRjaCB0aGUgY2xvc2luZyB0YWcuXG4gICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICBpZiAodHlwZSA9PSAnPicpIHtcbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zLCBpbmRlbnRhdGlvbiwgdGFnSW5kZXgsIGxpbmVIYXNOb25TcGFjZSBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IFsgdHlwZSwgdmFsdWUsIHN0YXJ0LCBzY2FubmVyLnBvcyBdO1xuICAgIH1cbiAgICB0YWdJbmRleCsrO1xuICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xuICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgICAgaWYgKCFvcGVuU2VjdGlvbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgIGlmIChvcGVuU2VjdGlvblsxXSAhPT0gdmFsdWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgIG5vblNwYWNlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgIGNvbXBpbGVUYWdzKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzdHJpcFNwYWNlKCk7XG5cbiAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cbiAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICBpZiAob3BlblNlY3Rpb24pXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xufVxuXG4vKipcbiAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gKiB0byBhIHNpbmdsZSB0b2tlbi5cbiAqL1xuZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgdmFyIHNxdWFzaGVkVG9rZW5zID0gW107XG5cbiAgdmFyIHRva2VuLCBsYXN0VG9rZW47XG4gIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGxhc3RUb2tlblsxXSArPSB0b2tlblsxXTtcbiAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xufVxuXG4vKipcbiAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gKiB0b2tlbnMgdGhhdCByZXByZXNlbnQgYSBzZWN0aW9uIGhhdmUgdHdvIGFkZGl0aW9uYWwgaXRlbXM6IDEpIGFuIGFycmF5IG9mXG4gKiBhbGwgdG9rZW5zIHRoYXQgYXBwZWFyIGluIHRoYXQgc2VjdGlvbiBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbFxuICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICovXG5mdW5jdGlvbiBuZXN0VG9rZW5zICh0b2tlbnMpIHtcbiAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICB2YXIgY29sbGVjdG9yID0gbmVzdGVkVG9rZW5zO1xuICB2YXIgc2VjdGlvbnMgPSBbXTtcblxuICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgIGNhc2UgJyMnOlxuICAgICAgY2FzZSAnXic6XG4gICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbGxlY3RvciA9IHRva2VuWzRdID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIHNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcbiAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICBjb2xsZWN0b3IgPSBzZWN0aW9ucy5sZW5ndGggPiAwID8gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV1bNF0gOiBuZXN0ZWRUb2tlbnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXN0ZWRUb2tlbnM7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgc3RyaW5nIHNjYW5uZXIgdGhhdCBpcyB1c2VkIGJ5IHRoZSB0ZW1wbGF0ZSBwYXJzZXIgdG8gZmluZFxuICogdG9rZW5zIGluIHRlbXBsYXRlIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIFNjYW5uZXIgKHN0cmluZykge1xuICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgdGhpcy50YWlsID0gc3RyaW5nO1xuICB0aGlzLnBvcyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHRhaWwgaXMgZW1wdHkgKGVuZCBvZiBzdHJpbmcpLlxuICovXG5TY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICByZXR1cm4gdGhpcy50YWlsID09PSAnJztcbn07XG5cbi8qKlxuICogVHJpZXMgdG8gbWF0Y2ggdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBhdCB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAqIFJldHVybnMgdGhlIG1hdGNoZWQgdGV4dCBpZiBpdCBjYW4gbWF0Y2gsIHRoZSBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuICovXG5TY2FubmVyLnByb3RvdHlwZS5zY2FuID0gZnVuY3Rpb24gc2NhbiAocmUpIHtcbiAgdmFyIG1hdGNoID0gdGhpcy50YWlsLm1hdGNoKHJlKTtcblxuICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgIHJldHVybiAnJztcblxuICB2YXIgc3RyaW5nID0gbWF0Y2hbMF07XG5cbiAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgdGhpcy5wb3MgKz0gc3RyaW5nLmxlbmd0aDtcblxuICByZXR1cm4gc3RyaW5nO1xufTtcblxuLyoqXG4gKiBTa2lwcyBhbGwgdGV4dCB1bnRpbCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGNhbiBiZSBtYXRjaGVkLiBSZXR1cm5zXG4gKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAqL1xuU2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsID0gZnVuY3Rpb24gc2NhblVudGlsIChyZSkge1xuICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgc3dpdGNoIChpbmRleCkge1xuICAgIGNhc2UgLTE6XG4gICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9ICcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAwOlxuICAgICAgbWF0Y2ggPSAnJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXRjaCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCk7XG4gIH1cblxuICB0aGlzLnBvcyArPSBtYXRjaC5sZW5ndGg7XG5cbiAgcmV0dXJuIG1hdGNoO1xufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGNvbnRleHQgYnkgd3JhcHBpbmcgYSB2aWV3IG9iamVjdCBhbmRcbiAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAqL1xuZnVuY3Rpb24gQ29udGV4dCAodmlldywgcGFyZW50Q29udGV4dCkge1xuICB0aGlzLnZpZXcgPSB2aWV3O1xuICB0aGlzLmNhY2hlID0geyAnLic6IHRoaXMudmlldyB9O1xuICB0aGlzLnBhcmVudCA9IHBhcmVudENvbnRleHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBjb250ZXh0IHVzaW5nIHRoZSBnaXZlbiB2aWV3IHdpdGggdGhpcyBjb250ZXh0XG4gKiBhcyB0aGUgcGFyZW50LlxuICovXG5Db250ZXh0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAodmlldykge1xuICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICogdXAgdGhlIGNvbnRleHQgaGllcmFyY2h5IGlmIHRoZSB2YWx1ZSBpcyBhYnNlbnQgaW4gdGhpcyBjb250ZXh0J3Mgdmlldy5cbiAqL1xuQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG5cbiAgdmFyIHZhbHVlO1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICB2YWx1ZSA9IGNhY2hlW25hbWVdO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcywgaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzLCBpbmRleCwgbG9va3VwSGl0ID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoY29udGV4dCkge1xuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGNvbnRleHQudmlldztcbiAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNpbmcgdGhlIGRvdCBub3Rpb24gcGF0aCBpbiBgbmFtZWAsIHdlIGRlc2NlbmQgdGhyb3VnaCB0aGVcbiAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGJlIGNlcnRhaW4gdGhhdCB0aGUgbG9va3VwIGhhcyBiZWVuIHN1Y2Nlc3NmdWwsIHdlIGhhdmUgdG9cbiAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICogd2UgYXJlIGxvb2tpbmcgZm9yLiBXZSBzdG9yZSB0aGUgcmVzdWx0IGluIGBsb29rdXBIaXRgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgKiBgdW5kZWZpbmVkYCBhbmQgd2Ugd2FudCB0byBhdm9pZCBsb29raW5nIHVwIHBhcmVudCBjb250ZXh0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgZG90IG5vdGF0aW9uIGlzIHVzZWQsIHdlIGNvbnNpZGVyIHRoZSBsb29rdXBcbiAgICAgICAgICogdG8gYmUgc3VjY2Vzc2Z1bCBldmVuIGlmIHRoZSBsYXN0IFwib2JqZWN0XCIgaW4gdGhlIHBhdGggaXNcbiAgICAgICAgICogbm90IGFjdHVhbGx5IGFuIG9iamVjdCBidXQgYSBwcmltaXRpdmUgKGUuZy4sIGEgc3RyaW5nLCBvciBhblxuICAgICAgICAgKiBpbnRlZ2VyKSwgYmVjYXVzZSBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGFjY2VzcyBhIHByb3BlcnR5XG4gICAgICAgICAqIG9mIGFuIGF1dG9ib3hlZCBwcmltaXRpdmUsIHN1Y2ggYXMgdGhlIGxlbmd0aCBvZiBhIHN0cmluZy5cbiAgICAgICAgICoqL1xuICAgICAgICB3aGlsZSAoaW50ZXJtZWRpYXRlVmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gbmFtZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGxvb2t1cEhpdCA9IChcbiAgICAgICAgICAgICAgaGFzUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzW2luZGV4XSlcbiAgICAgICAgICAgICAgfHwgcHJpbWl0aXZlSGFzT3duUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzW2luZGV4XSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlW25hbWVzW2luZGV4KytdXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBjb250ZXh0LnZpZXdbbmFtZV07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgY2hlY2tpbmcgYWdhaW5zdCBgaGFzUHJvcGVydHlgLCB3aGljaCBhbHdheXMgcmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICAgICAqIGBjb250ZXh0LnZpZXdgIGlzIG5vdCBhbiBvYmplY3QuIERlbGliZXJhdGVseSBvbWl0dGluZyB0aGUgY2hlY2tcbiAgICAgICAgICogYWdhaW5zdCBgcHJpbWl0aXZlSGFzT3duUHJvcGVydHlgIGlmIGRvdCBub3RhdGlvbiBpcyBub3QgdXNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29uc2lkZXIgdGhpcyBleGFtcGxlOlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogTXVzdGFjaGUucmVuZGVyKFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIHt7I2xlbmd0aH19e3tsZW5ndGh9fXt7L2xlbmd0aH19LlwiLCB7bGVuZ3RoOiBcIjEwMCB5YXJkc1wifSlcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIHdlIHdlcmUgdG8gY2hlY2sgYWxzbyBhZ2FpbnN0IGBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eWAsIGFzIHdlIGRvXG4gICAgICAgICAqIGluIHRoZSBkb3Qgbm90YXRpb24gY2FzZSwgdGhlbiByZW5kZXIgY2FsbCB3b3VsZCByZXR1cm46XG4gICAgICAgICAqXG4gICAgICAgICAqIFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIDkuXCJcbiAgICAgICAgICpcbiAgICAgICAgICogcmF0aGVyIHRoYW4gdGhlIGV4cGVjdGVkOlxuICAgICAgICAgKlxuICAgICAgICAgKiBcIlRoZSBsZW5ndGggb2YgYSBmb290YmFsbCBmaWVsZCBpcyAxMDAgeWFyZHMuXCJcbiAgICAgICAgICoqL1xuICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobG9va3VwSGl0KSB7XG4gICAgICAgIHZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSlcbiAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIEEgV3JpdGVyIGtub3dzIGhvdyB0byB0YWtlIGEgc3RyZWFtIG9mIHRva2VucyBhbmQgcmVuZGVyIHRoZW0gdG8gYVxuICogc3RyaW5nLCBnaXZlbiBhIGNvbnRleHQuIEl0IGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2YgdGVtcGxhdGVzIHRvXG4gKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAqL1xuZnVuY3Rpb24gV3JpdGVyICgpIHtcbiAgdGhpcy50ZW1wbGF0ZUNhY2hlID0ge1xuICAgIF9jYWNoZToge30sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0IChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAqL1xuV3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy50ZW1wbGF0ZUNhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyBhbmQgY2FjaGVzIHRoZSBnaXZlbiBgdGVtcGxhdGVgIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gYHRhZ3NgIG9yXG4gKiBgbXVzdGFjaGUudGFnc2AgaWYgYHRhZ3NgIGlzIG9taXR0ZWQsICBhbmQgcmV0dXJucyB0aGUgYXJyYXkgb2YgdG9rZW5zXG4gKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAqL1xuV3JpdGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICB2YXIgY2FjaGUgPSB0aGlzLnRlbXBsYXRlQ2FjaGU7XG4gIHZhciBjYWNoZUtleSA9IHRlbXBsYXRlICsgJzonICsgKHRhZ3MgfHwgbXVzdGFjaGUudGFncykuam9pbignOicpO1xuICB2YXIgaXNDYWNoZUVuYWJsZWQgPSB0eXBlb2YgY2FjaGUgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgdG9rZW5zID0gaXNDYWNoZUVuYWJsZWQgPyBjYWNoZS5nZXQoY2FjaGVLZXkpIDogdW5kZWZpbmVkO1xuXG4gIGlmICh0b2tlbnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdG9rZW5zID0gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGFncyk7XG4gICAgaXNDYWNoZUVuYWJsZWQgJiYgY2FjaGUuc2V0KGNhY2hlS2V5LCB0b2tlbnMpO1xuICB9XG4gIHJldHVybiB0b2tlbnM7XG59O1xuXG4vKipcbiAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICogdGhlIGdpdmVuIGB2aWV3YC5cbiAqXG4gKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gKiBuYW1lcyBhbmQgdGVtcGxhdGVzIG9mIHBhcnRpYWxzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHRlbXBsYXRlLiBJdCBtYXlcbiAqIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gbG9hZCBwYXJ0aWFsIHRlbXBsYXRlcyBvbiB0aGUgZmx5XG4gKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAqXG4gKiBJZiB0aGUgb3B0aW9uYWwgYGNvbmZpZ2AgYXJndW1lbnQgaXMgZ2l2ZW4gaGVyZSwgdGhlbiBpdCBzaG91bGQgYmUgYW5cbiAqIG9iamVjdCB3aXRoIGEgYHRhZ3NgIGF0dHJpYnV0ZSBvciBhbiBgZXNjYXBlYCBhdHRyaWJ1dGUgb3IgYm90aC5cbiAqIElmIGFuIGFycmF5IGlzIHBhc3NlZCwgdGhlbiBpdCB3aWxsIGJlIGludGVycHJldGVkIHRoZSBzYW1lIHdheSBhc1xuICogYSBgdGFnc2AgYXR0cmlidXRlIG9uIGEgYGNvbmZpZ2Agb2JqZWN0LlxuICpcbiAqIFRoZSBgdGFnc2AgYXR0cmlidXRlIG9mIGEgYGNvbmZpZ2Agb2JqZWN0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d29cbiAqIHN0cmluZyB2YWx1ZXM6IHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZ3MgdXNlZCBpbiB0aGUgdGVtcGxhdGUgKGUuZy5cbiAqIFsgXCI8JVwiLCBcIiU+XCIgXSkuIFRoZSBkZWZhdWx0IGlzIHRvIG11c3RhY2hlLnRhZ3MuXG4gKlxuICogVGhlIGBlc2NhcGVgIGF0dHJpYnV0ZSBvZiBhIGBjb25maWdgIG9iamVjdCBtdXN0IGJlIGEgZnVuY3Rpb24gd2hpY2hcbiAqIGFjY2VwdHMgYSBzdHJpbmcgYXMgaW5wdXQgYW5kIG91dHB1dHMgYSBzYWZlbHkgZXNjYXBlZCBzdHJpbmcuXG4gKiBJZiBhbiBgZXNjYXBlYCBmdW5jdGlvbiBpcyBub3QgcHJvdmlkZWQsIHRoZW4gYW4gSFRNTC1zYWZlIHN0cmluZ1xuICogZXNjYXBpbmcgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgZGVmYXVsdC5cbiAqL1xuV3JpdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gIHZhciB0YWdzID0gdGhpcy5nZXRDb25maWdUYWdzKGNvbmZpZyk7XG4gIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcsIHVuZGVmaW5lZCk7XG4gIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSwgY29uZmlnKTtcbn07XG5cbi8qKlxuICogTG93LWxldmVsIG1ldGhvZCB0aGF0IHJlbmRlcnMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIHVzaW5nXG4gKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICpcbiAqIE5vdGU6IFRoZSBgb3JpZ2luYWxUZW1wbGF0ZWAgaXMgb25seSBldmVyIHVzZWQgdG8gZXh0cmFjdCB0aGUgcG9ydGlvblxuICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICogSWYgdGhlIHRlbXBsYXRlIGRvZXNuJ3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucywgdGhpcyBhcmd1bWVudCBtYXlcbiAqIGJlIG9taXR0ZWQuXG4gKi9cbldyaXRlci5wcm90b3R5cGUucmVuZGVyVG9rZW5zID0gZnVuY3Rpb24gcmVuZGVyVG9rZW5zICh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpIHtcbiAgdmFyIGJ1ZmZlciA9ICcnO1xuXG4gIHZhciB0b2tlbiwgc3ltYm9sLCB2YWx1ZTtcbiAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgaWYgKHN5bWJvbCA9PT0gJyMnKSB2YWx1ZSA9IHRoaXMucmVuZGVyU2VjdGlvbih0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgZWxzZSBpZiAoc3ltYm9sID09PSAnXicpIHZhbHVlID0gdGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgZWxzZSBpZiAoc3ltYm9sID09PSAnPicpIHZhbHVlID0gdGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcbiAgICBlbHNlIGlmIChzeW1ib2wgPT09ICcmJykgdmFsdWUgPSB0aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0KTtcbiAgICBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykgdmFsdWUgPSB0aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCwgY29uZmlnKTtcbiAgICBlbHNlIGlmIChzeW1ib2wgPT09ICd0ZXh0JykgdmFsdWUgPSB0aGlzLnJhd1ZhbHVlKHRva2VuKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbiA9IGZ1bmN0aW9uIHJlbmRlclNlY3Rpb24gKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGJ1ZmZlciA9ICcnO1xuICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbmRlciBhbiBhcmJpdHJhcnkgdGVtcGxhdGVcbiAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gIGZ1bmN0aW9uIHN1YlJlbmRlciAodGVtcGxhdGUpIHtcbiAgICByZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQsIHBhcnRpYWxzLCBjb25maWcpO1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWUpLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlJyk7XG5cbiAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxuICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQgPSBmdW5jdGlvbiByZW5kZXJJbnZlcnRlZCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpIHtcbiAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gIC8vIFVzZSBKYXZhU2NyaXB0J3MgZGVmaW5pdGlvbiBvZiBmYWxzeS4gSW5jbHVkZSBlbXB0eSBhcnJheXMuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gIGlmICghdmFsdWUgfHwgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUuaW5kZW50UGFydGlhbCA9IGZ1bmN0aW9uIGluZGVudFBhcnRpYWwgKHBhcnRpYWwsIGluZGVudGF0aW9uLCBsaW5lSGFzTm9uU3BhY2UpIHtcbiAgdmFyIGZpbHRlcmVkSW5kZW50YXRpb24gPSBpbmRlbnRhdGlvbi5yZXBsYWNlKC9bXiBcXHRdL2csICcnKTtcbiAgdmFyIHBhcnRpYWxCeU5sID0gcGFydGlhbC5zcGxpdCgnXFxuJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGlhbEJ5TmwubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocGFydGlhbEJ5TmxbaV0ubGVuZ3RoICYmIChpID4gMCB8fCAhbGluZUhhc05vblNwYWNlKSkge1xuICAgICAgcGFydGlhbEJ5TmxbaV0gPSBmaWx0ZXJlZEluZGVudGF0aW9uICsgcGFydGlhbEJ5TmxbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJ0aWFsQnlObC5qb2luKCdcXG4nKTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gIGlmICghcGFydGlhbHMpIHJldHVybjtcbiAgdmFyIHRhZ3MgPSB0aGlzLmdldENvbmZpZ1RhZ3MoY29uZmlnKTtcblxuICB2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHBhcnRpYWxzKSA/IHBhcnRpYWxzKHRva2VuWzFdKSA6IHBhcnRpYWxzW3Rva2VuWzFdXTtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICB2YXIgbGluZUhhc05vblNwYWNlID0gdG9rZW5bNl07XG4gICAgdmFyIHRhZ0luZGV4ID0gdG9rZW5bNV07XG4gICAgdmFyIGluZGVudGF0aW9uID0gdG9rZW5bNF07XG4gICAgdmFyIGluZGVudGVkVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGFnSW5kZXggPT0gMCAmJiBpbmRlbnRhdGlvbikge1xuICAgICAgaW5kZW50ZWRWYWx1ZSA9IHRoaXMuaW5kZW50UGFydGlhbCh2YWx1ZSwgaW5kZW50YXRpb24sIGxpbmVIYXNOb25TcGFjZSk7XG4gICAgfVxuICAgIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKGluZGVudGVkVmFsdWUsIHRhZ3MpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnRlZFZhbHVlLCBjb25maWcpO1xuICB9XG59O1xuXG5Xcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlID0gZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0LCBjb25maWcpIHtcbiAgdmFyIGVzY2FwZSA9IHRoaXMuZ2V0Q29uZmlnRXNjYXBlKGNvbmZpZykgfHwgbXVzdGFjaGUuZXNjYXBlO1xuICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBlc2NhcGUgPT09IG11c3RhY2hlLmVzY2FwZSkgPyBTdHJpbmcodmFsdWUpIDogZXNjYXBlKHZhbHVlKTtcbn07XG5cbldyaXRlci5wcm90b3R5cGUucmF3VmFsdWUgPSBmdW5jdGlvbiByYXdWYWx1ZSAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdO1xufTtcblxuV3JpdGVyLnByb3RvdHlwZS5nZXRDb25maWdUYWdzID0gZnVuY3Rpb24gZ2V0Q29uZmlnVGFncyAoY29uZmlnKSB7XG4gIGlmIChpc0FycmF5KGNvbmZpZykpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGVsc2UgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBjb25maWcudGFncztcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5Xcml0ZXIucHJvdG90eXBlLmdldENvbmZpZ0VzY2FwZSA9IGZ1bmN0aW9uIGdldENvbmZpZ0VzY2FwZSAoY29uZmlnKSB7XG4gIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkoY29uZmlnKSkge1xuICAgIHJldHVybiBjb25maWcuZXNjYXBlO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbnZhciBtdXN0YWNoZSA9IHtcbiAgbmFtZTogJ211c3RhY2hlLmpzJyxcbiAgdmVyc2lvbjogJzQuMi4wJyxcbiAgdGFnczogWyAne3snLCAnfX0nIF0sXG4gIGNsZWFyQ2FjaGU6IHVuZGVmaW5lZCxcbiAgZXNjYXBlOiB1bmRlZmluZWQsXG4gIHBhcnNlOiB1bmRlZmluZWQsXG4gIHJlbmRlcjogdW5kZWZpbmVkLFxuICBTY2FubmVyOiB1bmRlZmluZWQsXG4gIENvbnRleHQ6IHVuZGVmaW5lZCxcbiAgV3JpdGVyOiB1bmRlZmluZWQsXG4gIC8qKlxuICAgKiBBbGxvd3MgYSB1c2VyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGNhY2hpbmcgc3RyYXRlZ3ksIGJ5IHByb3ZpZGluZyBhblxuICAgKiBvYmplY3Qgd2l0aCBzZXQsIGdldCBhbmQgY2xlYXIgbWV0aG9kcy4gVGhpcyBjYW4gYWxzbyBiZSB1c2VkIHRvIGRpc2FibGVcbiAgICogdGhlIGNhY2hlIGJ5IHNldHRpbmcgaXQgdG8gdGhlIGxpdGVyYWwgYHVuZGVmaW5lZGAuXG4gICAqL1xuICBzZXQgdGVtcGxhdGVDYWNoZSAoY2FjaGUpIHtcbiAgICBkZWZhdWx0V3JpdGVyLnRlbXBsYXRlQ2FjaGUgPSBjYWNoZTtcbiAgfSxcbiAgLyoqXG4gICAqIEdldHMgdGhlIGRlZmF1bHQgb3Igb3ZlcnJpZGRlbiBjYWNoaW5nIG9iamVjdCBmcm9tIHRoZSBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIGdldCB0ZW1wbGF0ZUNhY2hlICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci50ZW1wbGF0ZUNhY2hlO1xuICB9XG59O1xuXG4vLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG52YXIgZGVmYXVsdFdyaXRlciA9IG5ldyBXcml0ZXIoKTtcblxuLyoqXG4gKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICovXG5tdXN0YWNoZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbn07XG5cbi8qKlxuICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAqIGFycmF5IG9mIHRva2VucyBpdCBjb250YWlucy4gRG9pbmcgdGhpcyBhaGVhZCBvZiB0aW1lIGF2b2lkcyB0aGUgbmVlZCB0b1xuICogcGFyc2UgdGVtcGxhdGVzIG9uIHRoZSBmbHkgYXMgdGhleSBhcmUgcmVuZGVyZWQuXG4gKi9cbm11c3RhY2hlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UgKHRlbXBsYXRlLCB0YWdzKSB7XG4gIHJldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyB0aGUgYHRlbXBsYXRlYCB3aXRoIHRoZSBnaXZlbiBgdmlld2AsIGBwYXJ0aWFsc2AsIGFuZCBgY29uZmlnYFxuICogdXNpbmcgdGhlIGRlZmF1bHQgd3JpdGVyLlxuICovXG5tdXN0YWNoZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKSB7XG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyknKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMsIGNvbmZpZyk7XG59O1xuXG4vLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8yNDRcbm11c3RhY2hlLmVzY2FwZSA9IGVzY2FwZUh0bWw7XG5cbi8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbm11c3RhY2hlLlNjYW5uZXIgPSBTY2FubmVyO1xubXVzdGFjaGUuQ29udGV4dCA9IENvbnRleHQ7XG5tdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IG11c3RhY2hlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHByb2R1Y3RzUGFnZSBmcm9tICcuL3Byb2R1Y3RzLmpzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBjb2ZmZWVTaG9wIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY29mZmVlLXNob3AucG5nJztcbmltcG9ydCBjb2ZmZWVDdXAgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWUtY3VwLndlYnAnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnbXVzdGFjaGUnO1xuXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IHBhZ2VOYW1lcyA9IFsnaG9tZScsICdzdG9yeScsICdwcm9kdWN0cyddO1xuY29uc3QgaG9tZVBhZ2UgPSBbY3JlYXRlU2VjdGlvbk9uZSwgY3JlYXRlU2VjdGlvblR3bywgY3JlYXRlU2VjdGlvblRocmVlXTtcblxuZnVuY3Rpb24gaGlkZU5hdigpIHtcbiAgY29uc3QgbmF2VUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXVsJyk7XG4gIG5hdlVMLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcbiAgbmF2VUwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGlkZU5hdik7XG5cbiAgY29uc3QgbmF2U2FuQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1zYW4tYnV0dG9uLWNvbnRhaW5lcicpO1xuICBuYXZTYW5CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICBuYXZTYW5CdXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ09wZW4gTmF2aWdhdGlvbiBNZW51Jyk7XG4gIG5hdlNhbkJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdkJ1dHRvbigpIHtcbiAgbGV0IG5hdk9wZW4gPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpO1xuXG4gIGlmICghbmF2T3Blbikge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UgTmF2aWdhdGlvbiBNZW51Jyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XG5cbiAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoaWRlTmF2KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYocGFnZXMpIHtcbiAgY29uc3QgbWFpbk5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbWFpbk5hdmlnYXRpb24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ01haW4gTmF2aWdhdGlvbicpO1xuXG4gIGNvbnN0IG5hdlNhbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuYXZTYW5CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2LXNhbi1idXR0b24tY29udGFpbmVyJyk7XG4gIG5hdlNhbkJ1dHRvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnT3BlbiBOYXZpZ2F0aW9uIE1lbnUnKTtcbiAgbmF2U2FuQnV0dG9uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gIGNvbnN0IG5hdlNhbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZTYW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LXNhbi1idXR0b24nKTtcbiAgXG4gIGNvbnN0IG5hdlVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2VUwuY2xhc3NMaXN0LmFkZCgnbmF2LXVsJyk7XG5cbiAgY29uc3QgbGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBwYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgY29uc3QgbmF2TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5hdkxJLmNsYXNzTGlzdC5hZGQoJ25hdi1saScpO1xuICAgIFxuICAgIGNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmF2TGluay5jbGFzc0xpc3QuYWRkKCduYXYtYScpO1xuICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gcGFnZTtcblxuICAgIG5hdkxJLmFwcGVuZENoaWxkKG5hdkxpbmspO1xuICAgIGxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChuYXZMSSk7XG4gIH0pO1xuICBcbiAgbmF2U2FuQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdlNhbkJ1dHRvbik7XG5cbiAgbmF2VUwuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcblxuICBtYWluTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChuYXZTYW5CdXR0b25Db250YWluZXIpO1xuICBtYWluTmF2aWdhdGlvbi5hcHBlbmRDaGlsZChuYXZVTCk7XG4gIFxuICBuYXZTYW5CdXR0b25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXZCdXR0b24pO1xuXG4gIHJldHVybiBtYWluTmF2aWdhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50JywgJ2hlYWRlci1jb250ZW50Jyk7XG5cbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJMZWZ0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1sZWZ0Jyk7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdDbG91ZCA4IENhZsOpJztcblxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItcmlnaHQnKTtcblxuICBjb25zdCBuYXYgPSBjcmVhdGVOYXYocGFnZU5hbWVzKTtcbiAgXG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMZWZ0KTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJSaWdodCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdmlkZXIoY2xhc3NBcnJheSA9IFtdKSB7XG4gIC8vID8gaWYgY2xhc3NBcnJheSBpcyBhbiBhcnJheSwgaXQgcmV0dXJucyB0aGUgYXJyYXlcbiAgLy8gPyBpZiBjbGFzc0FycmF5IGlzIGEgc3RyaW5nIChhIHRydXRoeSB2YWx1ZSksIGl0IHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgc3RyaW5nIGFzIHRoZSBvbmx5IGVsZW1lbnRcbiAgLy8gPyBpZiBjbGFzc0FycmF5IGlzIGEgZmFsc3kgdmFsdWUsIGl0IHJldHVybnMgYW4gZW1wdHkgYXJyYXlcbiAgY2xhc3NBcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NBcnJheSlcbiAgICA/IGNsYXNzQXJyYXlcbiAgICA6IGNsYXNzQXJyYXlcbiAgICA/IFtjbGFzc0FycmF5XVxuICAgIDogW107XG4gIFxuICBjb25zdCBwYXRoRGF0YSA9ICdNMzIxLjM5LDU2LjQ0YzU4LTEwLjc5LDExNC4xNi0zMC4xMywxNzItNDEuODYsODIuMzktMTYuNzIsMTY4LjE5LTE3LjczLDI1MC40NS0uMzlDODIzLjc4LDMxLDkwNi42Nyw3Miw5ODUuNjYsOTIuODNjNzAuMDUsMTguNDgsMTQ2LjUzLDI2LjA5LDIxNC4zNCwzVjBIMFYyNy4zNUE2MDAuMjEsNjAwLjIxLDAsMCwwLDMyMS4zOSw1Ni40NFonO1xuXG4gIGNvbnN0IHNoYXBlRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGFwZURpdmlkZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcblxuICBjb25zdCBzaGFwZURpdmlkZXJTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAvLyA/IG5zID0gbmFtZXNwYWNlIChzdmdOYW1lU3BhY2UpIGlzIHJlcXVpcmVkIGZvciBzdmcgZWxlbWVudHNcbiAgc2hhcGVEaXZpZGVyU1ZHLnNldEF0dHJpYnV0ZU5TKG51bGwsICd2aWV3Qm94JywgJzAgMCAxMjAwIDEyMCcpO1xuICBzaGFwZURpdmlkZXJTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAnbm9uZScpO1xuICBzaGFwZURpdmlkZXJTVkcuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIHNoYXBlRGl2aWRlclNWRy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG4gIFxuICBjb25zdCBzaGFwZURpdmlkZXJQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gIHNoYXBlRGl2aWRlclBhdGguY2xhc3NMaXN0LmFkZCgnc2hhcGUtZmlsbCcpO1xuICBzaGFwZURpdmlkZXJQYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgcGF0aERhdGEpO1xuXG4gIHNoYXBlRGl2aWRlclNWRy5hcHBlbmRDaGlsZChzaGFwZURpdmlkZXJQYXRoKTtcblxuICBzaGFwZURpdmlkZXIuYXBwZW5kQ2hpbGQoc2hhcGVEaXZpZGVyU1ZHKTtcblxuICByZXR1cm4gc2hhcGVEaXZpZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVRdW90YXRpb24ocXVvdGVPYmplY3QpIHtcbiAgY29uc3QgeyBwYXJ0czogcXVvdGVQYXJ0c0FycmF5LCBhdXRob3IgfSA9IHF1b3RlT2JqZWN0O1xuICAvLyA/IGV4dHJhY3RzIHRoZSB2YWx1ZSBwYXJ0cyBwcm9wZXJ0eSBmcm9tIHRoZSBxdW90ZXNPYmplY3QsIGFuIGFycmF5XG4gIC8vID8gZXh0cmFjdHMgdGhlIHZhbHVlIG9mIHRoZSBhdXRob3IgcHJvcGVydHkgZnJvbSB0aGUgcXVvdGVzT2JqZWN0LCBhIHN0cmluZ1xuXG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuXG4gIGNvbnN0IGJsb2NrcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdibG9ja3F1b3RlJyk7XG5cbiAgY29uc3QgYmxvY2txdW90ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJsb2NrcXVvdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rlc3RpbW9uaWFsLXF1b3RlJyk7XG5cbiAgY29uc3QgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcbiAgZmlnY2FwdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXN0aW1vbmlhbC1maWdjYXB0aW9uJyk7XG4gIGZpZ2NhcHRpb24udGV4dENvbnRlbnQgPSBgLSAke2F1dGhvcn1gO1xuXG4gIGNvbnN0IGVtcGhhc2lzVGV4dCA9ICdjb2ZmZWUnO1xuICBcbiAgcXVvdGVQYXJ0c0FycmF5LmZvckVhY2goKHBhcnQpID0+IHtcbiAgICBpZiAocGFydCA9PT0gZW1waGFzaXNUZXh0KSB7XG4gICAgICBjb25zdCBlbXBoYXNpemVkU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGVtcGhhc2l6ZWRTcGFuLmNsYXNzTGlzdC5hZGQoJ2VtcGhhc2l6ZWQtdGV4dCcpO1xuICAgICAgZW1waGFzaXplZFNwYW4udGV4dENvbnRlbnQgPSBwYXJ0O1xuXG4gICAgICBibG9ja3F1b3RlVGV4dC5hcHBlbmRDaGlsZChlbXBoYXNpemVkU3Bhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrcXVvdGVUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcnQpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJsb2NrcXVvdGUuYXBwZW5kQ2hpbGQoYmxvY2txdW90ZVRleHQpO1xuXG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChibG9ja3F1b3RlKTtcbiAgZmlndXJlLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xuXG4gIHJldHVybiBmaWd1cmU7XG59XG5cbi8vICEgYWRkIGFycm93IGRvd24gb24gYm90dG9tIG9mIGZ1bGwgaGVpZ2h0IGhlcm8gc2VjdGlvblxuLy8gISB1c2UgaW50ZXJzZWN0aW9uIG9ic2VydmVyIHRvIGhpZGUgYXJyb3cgZG93biB3aGVuIHVzZXIgc2Nyb2xscyBkb3duIFxuLy8gISAob3IgY2xpY2tzIGl0LCB3aGljaCB3aWxsIHNjcm9sbCB0byBuZXh0IHNlY3Rpb24pXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uT25lKCkge1xuICBjb25zdCBzaG9wRGlzcGxheVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHNob3BEaXNwbGF5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzaG9wLWRpc3BsYXktc2VjdGlvbicpO1xuXG4gIGNvbnN0IHNob3BJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzaG9wSW1hZ2UuY2xhc3NMaXN0LmFkZCgnc2hvcC1pbWFnZScpO1xuICBzaG9wSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBjb2ZmZWVTaG9wKTtcbiAgc2hvcEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NvZmZlZSBTaG9wJyk7XG5cbiAgY29uc3Qgc2hhcGVEaXZpZGVyVG9wID0gY3JlYXRlRGl2aWRlcihbXG4gICAgJ3NoYXBlLWRpdmlkZXInLFxuICAgICdzaGFwZS1kaXZpZGVyLXRvcCcsXG4gICAgJ3NoYXBlLWRpdmlkZXItb25lJyxcbiAgXSk7XG5cbiAgY29uc3Qgc2hhcGVEaXZpZGVyQm90dG9tID0gY3JlYXRlRGl2aWRlcihbXG4gICAgJ3NoYXBlLWRpdmlkZXInLFxuICAgICdzaGFwZS1kaXZpZGVyLWJvdHRvbScsXG4gICAgJ3NoYXBlLWRpdmlkZXItdHdvJyxcbiAgXSk7XG5cbiAgc2hvcERpc3BsYXlTZWN0aW9uLmFwcGVuZENoaWxkKHNoYXBlRGl2aWRlclRvcCk7XG4gIHNob3BEaXNwbGF5U2VjdGlvbi5hcHBlbmRDaGlsZChzaG9wSW1hZ2UpO1xuICBzaG9wRGlzcGxheVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2hhcGVEaXZpZGVyQm90dG9tKTtcblxuICByZXR1cm4gc2hvcERpc3BsYXlTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uVHdvKCkge1xuICBjb25zdCB0ZXN0aW1vbmlhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHRlc3RpbW9uaWFsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0ZXN0aW1vbmlhbC1zZWN0aW9uJyk7XG5cbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcsICdzZWN0aW9uLWNvbnRlbnQnLCAndGVzdGltb25pYWwtc2VjdGlvbi1jb250ZW50Jyk7XG5cbiAgY29uc3QgY29mZmVlQ3VwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29mZmVlQ3VwSW1hZ2UuY2xhc3NMaXN0LmFkZCgnY29mZmVlLWN1cCcpO1xuICBjb2ZmZWVDdXBJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNvZmZlZUN1cCk7XG4gIGNvZmZlZUN1cEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NvZmZlZSBDdXAnKTtcblxuICBjb25zdCBzaGFwZURpdmlkZXJCb3R0b20gPSBjcmVhdGVEaXZpZGVyKFtcbiAgICAnc2hhcGUtZGl2aWRlcicsXG4gICAgJ3NoYXBlLWRpdmlkZXItYm90dG9tJyxcbiAgICAnc2hhcGUtZGl2aWRlci10aHJlZScsXG4gIF0pO1xuXG4gIGNvbnN0IHF1b3RlcyA9IHtcbiAgICBxdW90ZU9uZToge1xuICAgICAgJ3BhcnRzJzogW1xuICAgICAgICAnXCInLFxuICAgICAgICAnY29mZmVlJyxcbiAgICAgICAgJyAnLFxuICAgICAgICAnYmxlbmRzIHNsZWVrIGRlc2lnbiB3aXRoIGEgcHJvZHVjdGl2aXR5LWJvb3N0aW5nIGFtYmlhbmNlLCBhbGwgd2hpbGUgc2VydmluZyB1cCBzb21lIG9mIHRoZSBjaXR5XFwncyBmaW5lc3Qgam9lLiBJdFxcJ3MgdGhlIHBlcmZlY3QgdXJiYW4gb2FzaXMgZm9yIGNyZWF0aXZlcyBhbmQgY29mZmVlIGxvdmVycyBhbGlrZS5cIicsXG4gICAgICBdLFxuICAgICAgJ2F1dGhvcic6ICdFbG9uIE11c2snLFxuICAgIH0sXG4gICAgcXVvdGVUd286IHtcbiAgICAgICdwYXJ0cyc6IFtcbiAgICAgICAgJ1wiV2l0aCBpdHMgd2lubmluZyBjb21iaW5hdGlvbiBvZiBlYXJ0aC10b25lZCwgbWluaW1hbGlzdCBkZXNpZ24gYW5kIHNpZ25hdHVyZSBsby1maSBtdXNpYycsXG4gICAgICAgICcgJyxcbiAgICAgICAgJ2NvZmZlZScsXG4gICAgICAgICcgJyxcbiAgICAgICAgJ2lzIHRoZSBnby10byBzcG90IGZvciBtb2Rlcm4gY2l0eSBkd2VsbGVycyBzZWVraW5nIGEgdHJhbnF1aWwgaGF2ZW4gdG8gd29yayBhbmQgc2F2b3IgdG9wLW5vdGNoIGphdmEuIEl0XFwncyB3aGVyZSBhZXN0aGV0aWMgbWVldHMgY2FmZmVpbmUuXCInLFxuICAgICAgXSxcbiAgICAgICdhdXRob3InOiAnSm9obiBDbG91ZCcsXG4gICAgfSxcbiAgfVxuICBcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVRdW90YXRpb24ocXVvdGVzLnF1b3RlT25lKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29mZmVlQ3VwSW1hZ2UpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVF1b3RhdGlvbihxdW90ZXMucXVvdGVUd28pKTtcblxuICB0ZXN0aW1vbmlhbFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gIHRlc3RpbW9uaWFsU2VjdGlvbi5hcHBlbmRDaGlsZChzaGFwZURpdmlkZXJCb3R0b20pO1xuXG4gIHJldHVybiB0ZXN0aW1vbmlhbFNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhvdXJzQ29udGVudCgpIHtcbiAgY29uc3QgaG91cnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHRhYmxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRhYmxlSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbi1oZWFkaW5nJyk7XG4gIHRhYmxlSGVhZGluZy50ZXh0Q29udGVudCA9ICdob3VycyBvZiBvcGVyYXRpb24nO1xuXG4gIGNvbnN0IGhvdXJzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vyc0NvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG91cnMtY29udGVudC1jb250YWluZXInKTtcblxuICBjb25zdCBob3Vyc0RhdGEgPSB7XG4gICAgJ21vbmRheSc6ICc3OjAwYW0gLSAxMTowMHBtJyxcbiAgICAndHVlc2RheSc6ICc3OjAwYW0gLSAxMTowMHBtJyxcbiAgICAnd2VkbmVzZGF5JzogJzc6MDBhbSAtIDExOjAwcG0nLFxuICAgICd0aHVyc2RheSc6ICc3OjAwYW0gLSAxMTowMHBtJyxcbiAgICAnZnJpZGF5JzogJzc6MDBhbSAtIDExOjAwcG0nLFxuICAgICdzYXR1cmRheSc6ICc5OjAwYW0gLSAxMjowMGFtJyxcbiAgICAnc3VuZGF5JzogJzk6MDBhbSAtIDc6MDBwbScsXG4gIH07XG4gIFxuICBmb3IgKGNvbnN0IGRheSBpbiBob3Vyc0RhdGEpIHtcbiAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgb3BlcmF0aW5nRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9wZXJhdGluZ0RheS5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbi1zdWItaGVhZGluZycsICdvcGVyYXRpbmctZGF5Jyk7XG4gICAgb3BlcmF0aW5nRGF5LnRleHRDb250ZW50ID0gZGF5O1xuXG4gICAgY29uc3Qgb3BlcmF0aW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3BlcmF0aW5nSG91cnMuY2xhc3NMaXN0LmFkZCgnb3BlcmF0aW5nLWhvdXJzJyk7XG4gICAgb3BlcmF0aW5nSG91cnMudGV4dENvbnRlbnQgPSBob3Vyc0RhdGFbZGF5XTtcblxuICAgIGNvbnN0IGhvcml6b250YWxSdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVyYXRpbmdEYXkpO1xuICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVyYXRpbmdIb3Vycyk7XG5cbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJ1bGUpO1xuICB9XG5cbiAgaG91cnNUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWRpbmcpO1xuICBob3Vyc1RhYmxlLmFwcGVuZENoaWxkKGhvdXJzQ29udGVudENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhvdXJzVGFibGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1YkNvbnRhaW5lcihjb250YWN0RGF0YUFycikge1xuICBjb25zdCBpbmZvcm1hdGlvblN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvcm1hdGlvblN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbi1zdWItY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5mb3JtYXRpb25TdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaW5mb3JtYXRpb25TdWJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLXN1Yi1oZWFkaW5nJyk7XG4gIGluZm9ybWF0aW9uU3ViSGVhZGluZy50ZXh0Q29udGVudCA9IGNvbnRhY3REYXRhQXJyWzFdO1xuXG4gIGNvbnN0IG1ldGhvZE9mQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbWV0aG9kT2ZDb250YWN0LmNsYXNzTGlzdC5hZGQoJ21ldGhvZC1vZi1jb250YWN0Jyk7XG4gIG1ldGhvZE9mQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjb250YWN0RGF0YUFyclswXSk7XG4gIG1ldGhvZE9mQ29udGFjdC50ZXh0Q29udGVudCA9IGNvbnRhY3REYXRhQXJyWzJdO1xuXG4gIGluZm9ybWF0aW9uU3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9ybWF0aW9uU3ViSGVhZGluZyk7XG4gIGluZm9ybWF0aW9uU3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1ldGhvZE9mQ29udGFjdCk7XG5cbiAgcmV0dXJuIGluZm9ybWF0aW9uU3ViQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRyZXNzKGFkZHJlc3NEYXRhKSB7IFxuICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1jb250YWluZXInKTtcblxuICBjb25zdCBhZGRyZXNzU3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGFkZHJlc3NTdWJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLXN1Yi1oZWFkaW5nJyk7XG4gIGFkZHJlc3NTdWJIZWFkaW5nLnRleHRDb250ZW50ID0gJ2FkZHJlc3M6JztcbiAgXG4gIGNvbnN0IGFkZHJlc3NTdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3NTdHJlZXQudGV4dENvbnRlbnQgPSBhZGRyZXNzRGF0YVswXTtcblxuICBjb25zdCBhZGRyZXNzQ2l0eVN0YXRlWmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzQ2l0eVN0YXRlWmlwLnRleHRDb250ZW50ID0gYWRkcmVzc0RhdGFbMV07XG5cbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzU3ViSGVhZGluZyk7XG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc1N0cmVldCk7XG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0NpdHlTdGF0ZVppcCk7XG5cbiAgcmV0dXJuIGFkZHJlc3NDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb25UaHJlZSgpIHtcbiAgY29uc3QgYWRkcmVzc0RhdGFBcnIgPSBbJzg4OCBDb2ZmZWUgU3RyZWV0JywgJ05ldyBZb3JrLCBOWSAxMDAwMyddO1xuXG4gIGNvbnN0IGluZm9ybWF0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaW5mb3JtYXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uLXNlY3Rpb24nKTtcbiAgXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnLCAnc2VjdGlvbi1jb250ZW50JywgJ2luZm9ybWF0aW9uLXNlY3Rpb24tY29udGVudCcpO1xuXG4gIGNvbnN0IGhvdXJzVGFibGUgPSByZW5kZXJIb3Vyc0NvbnRlbnQoKTtcbiAgaG91cnNUYWJsZS5jbGFzc0xpc3QuYWRkKCdob3Vycy10YWJsZScpO1xuXG4gIGNvbnN0IGluZm9ybWF0aW9uQm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvcm1hdGlvbkJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24tYm90dG9tLXNlY3Rpb24nKTtcblxuICBjb25zdCBjb250YWN0VXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdXMtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgY29udGFjdFVzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnRhY3RVc0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24taGVhZGluZycpO1xuICBjb250YWN0VXNIZWFkaW5nLnRleHRDb250ZW50ID0gJ2NvbnRhY3QgdXMnO1xuXG4gIGNvbnN0IGNvbnRhY3RVc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFVzQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXVzLWNvbnRlbnQnKTtcblxuICBjb25zdCB2aXNpdFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpc2l0VXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaXQtdXMnKTtcbiAgXG4gIGNvbnN0IHZpc2l0VXNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdmlzaXRVc0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24taGVhZGluZycpO1xuICB2aXNpdFVzSGVhZGluZy50ZXh0Q29udGVudCA9ICd2aXNpdCB1cyc7XG5cbiAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IHJlbmRlckFkZHJlc3MoYWRkcmVzc0RhdGFBcnIpO1xuXG4gIGNvbnN0IGVtYWlsU3ViQ29udGFpbmVyID0gY3JlYXRlU3ViQ29udGFpbmVyKFtcbiAgICAnbWFpbHRvOmNvZmZlZUBjeWNsb25lc3R1ZC5pbycsXG4gICAgJ2VtYWlsOicsXG4gICAgJ2NvZmZlZUBjeWNsb25lc3R1ZC5pbycsXG4gIF0pO1xuICBjb25zdCBwaG9uZVN1YkNvbnRhaW5lciA9IGNyZWF0ZVN1YkNvbnRhaW5lcihbXG4gICAgJ3RlbDoyMTItNTU1LTc4MTMnLFxuICAgICdwaG9uZTonLFxuICAgICcyMTItNTU1LTc4MTMnLFxuICBdKTsgIFxuICBjb25zdCBpbnN0YWdyYW1TdWJDb250YWluZXIgPSBjcmVhdGVTdWJDb250YWluZXIoW1xuICAgICcjJyxcbiAgICAnaW5zdGFncmFtJyxcbiAgICAnQGNvZmZlZWJ5Y3ljbG9uZScsXG4gIF0pO1xuXG4gIGNvbnRhY3RVc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWxTdWJDb250YWluZXIpO1xuICBjb250YWN0VXNDb250ZW50LmFwcGVuZENoaWxkKHBob25lU3ViQ29udGFpbmVyKTtcbiAgY29udGFjdFVzQ29udGVudC5hcHBlbmRDaGlsZChpbnN0YWdyYW1TdWJDb250YWluZXIpO1xuXG4gIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VXNIZWFkaW5nKTtcbiAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RVc0NvbnRlbnQpO1xuXG4gIHZpc2l0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQodmlzaXRVc0hlYWRpbmcpO1xuICB2aXNpdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xuXG4gIGluZm9ybWF0aW9uQm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0VXNDb250YWluZXIpO1xuICBpbmZvcm1hdGlvbkJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQodmlzaXRVc0NvbnRhaW5lcik7XG4gIFxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzVGFibGUpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9ybWF0aW9uQm90dG9tU2VjdGlvbik7XG5cbiAgaW5mb3JtYXRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4gIHJldHVybiBpbmZvcm1hdGlvblNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGZvb3RlclRleHRQYXJ0cyA9IFtcbiAgICAnwqknLFxuICAgICcgJyxcbiAgICAne3tmb290ZXJZZWFyfX0nLFxuICAgICcgJyxcbiAgICAnQ29mZmVlIGJ5IEN5Y2xvbmUgU3R1ZGlvcycsXG4gIF07XG5cbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9vdGVyVGV4dFBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICBpZiAocGFydCA9PT0gJ3t7Zm9vdGVyWWVhcn19Jykge1xuICAgICAgY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGZvb3RlclllYXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXllYXInKTtcbiAgICAgIGZvb3RlclllYXIudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgIGZvb3RlclRleHQuYXBwZW5kQ2hpbGQoZm9vdGVyWWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvb3RlclRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFydCkpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcblxuICBjb25zdCBjb250YWN0RGF0YSA9IHtcbiAgICBwaG9uZToge1xuICAgICAgJ2hyZWYnOiAndGVsOjIxMi01NTUtNzgxMycsXG4gICAgICAnYXJpYS1sYWJlbCc6ICdDYWxsIFVzJyxcbiAgICAgIHN2Z1BhdGhEOlxuICAgICAgICAnTTE2NC45IDI0LjZjLTcuNy0xOC42LTI4LTI4LjUtNDcuNC0yMy4ybC04OCAyNEMxMi4xIDMwLjIgMCA0NiAwIDY0QzAgMzExLjQgMjAwLjYgNTEyIDQ0OCA1MTJjMTggMCAzMy44LTEyLjEgMzguNi0yOS41bDI0LTg4YzUuMy0xOS40LTQuNi0zOS43LTIzLjItNDcuNGwtOTYtNDBjLTE2LjMtNi44LTM1LjItMi4xLTQ2LjMgMTEuNkwzMDQuNyAzNjhDMjM0LjMgMzM0LjcgMTc3LjMgMjc3LjcgMTQ0IDIwNy4zTDE5My4zIDE2N2MxMy43LTExLjIgMTguNC0zMCAxMS42LTQ2LjNsLTQwLTk2eicsXG4gICAgfSxcbiAgICBpbnN0YWdyYW06IHtcbiAgICAgICdocmVmJzogJyMnLFxuICAgICAgJ2FyaWEtbGFiZWwnOiAnSW5zdGFncmFtJyxcbiAgICAgIHN2Z1BhdGhEOlxuICAgICAgICAnTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xeicsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgaHJlZjogJ21haWx0bzpjb2ZmZWVAY3ljbG9uZXN0dWQuaW8nLFxuICAgICAgJ2FyaWEtbGFiZWwnOiAnRW1haWwgVXMnLFxuICAgICAgc3ZnUGF0aEQ6ICdNNjQgMTEyYy04LjggMC0xNiA3LjItMTYgMTZ2MjIuMUwyMjAuNSAyOTEuN2MyMC43IDE3IDUwLjQgMTcgNzEuMSAwTDQ2NCAxNTAuMVYxMjhjMC04LjgtNy4yLTE2LTE2LTE2SDY0ek00OCAyMTIuMlYzODRjMCA4LjggNy4yIDE2IDE2IDE2SDQ0OGM4LjggMCAxNi03LjIgMTYtMTZWMjEyLjJMMzIyIDMyOC44Yy0zOC40IDMxLjUtOTMuNyAzMS41LTEzMiAwTDQ4IDIxMi4yek0wIDEyOEMwIDkyLjcgMjguNyA2NCA2NCA2NEg0NDhjMzUuMyAwIDY0IDI4LjcgNjQgNjRWMzg0YzAgMzUuMy0yOC43IDY0LTY0IDY0SDY0Yy0zNS4zIDAtNjQtMjguNy02NC02NFYxMjh6JyxcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGNvbnRhY3RNZXRob2QgaW4gY29udGFjdERhdGEpIHtcbiAgICBjb25zdCBtZXRob2REYXRhID0gY29udGFjdERhdGFbY29udGFjdE1ldGhvZF07XG4gICAgXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29udGFjdEJ1dHRvbkxpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxpbmsnKTtcbiAgICBjb250YWN0QnV0dG9uTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtZXRob2REYXRhLmhyZWYpO1xuICAgIGNvbnRhY3RCdXR0b25MaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIG1ldGhvZERhdGFbJ2FyaWEtbGFiZWwnXSk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uU1ZHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjb250YWN0QnV0dG9uU1ZHLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1sb2dvJyk7XG4gICAgY29udGFjdEJ1dHRvblNWRy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsICcwIDAgNTEyIDUxMicpO1xuICAgIGNvbnRhY3RCdXR0b25TVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3JvbGUnLCAnaW1nJyk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uU1ZHUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGNvbnRhY3RCdXR0b25TVkdQYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgbWV0aG9kRGF0YS5zdmdQYXRoRCk7XG5cbiAgICBjb250YWN0QnV0dG9uU1ZHLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b25TVkdQYXRoKTtcblxuICAgIGNvbnRhY3RCdXR0b25MaW5rLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b25TVkcpO1xuXG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uTGluayk7XG4gIH1cblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KHNlY3Rpb25zQXJyYXkpIHtcbiAgc2VjdGlvbnNBcnJheSA9IEFycmF5LmlzQXJyYXkoc2VjdGlvbnNBcnJheSlcbiAgICA/IHNlY3Rpb25zQXJyYXlcbiAgICA6IHNlY3Rpb25zQXJyYXlcbiAgICA/IFtzZWN0aW9uc0FycmF5XVxuICAgIDogW107XG4gIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgXG4gIHNlY3Rpb25zQXJyYXkuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbigpKTtcbiAgfSk7XG5cbiAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgcmV0dXJuIHBhZ2VDb250ZW50O1xufVxuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpIHtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIocGFnZU5hbWVzKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyQ29udGVudChob21lUGFnZSkpO1xuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxucmVuZGVySG9tZVBhZ2UoKTtcblxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWEnKTtcbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnOyAvLyAhIGhhY2t5IHdheSwgcmV2aXNpdCBhbmQgdXNlIHJlbW92ZUNoaWxkKCkvcmVtb3ZlKCnigKYgZG9jdW1lbnQgZnJhZ21lbnQgbWF5YmU+XG4gICAgc3dpdGNoIChsaW5rLnRleHRDb250ZW50KSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgcmVuZGVyQ29udGVudChob21lUGFnZSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdG9yeSc6XG4gICAgICAgIC8vIHJlbmRlckNvbnRlbnQoc3RvcnlQYWdlKTsgLy8gISBjcmVhdGUgc3RvcnkgcGFnZSA6KVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2R1Y3RzJzpcbiAgICAgICAgcmVuZGVyQ29udGVudChwcm9kdWN0c1BhZ2UpXG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyAhIHVzZSB3aGVuIGNoYW5naW5nIHBhZ2UgY29udGVudHNcbi8vIG5hdkxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAncGFnZScpO1xuLy8gbWFpbi5hcHBlbmRDaGlsZChnYWxsZXJ5KTsiXSwibmFtZXMiOlsiY29mZmVlSW1hZ2UiLCJjaGFpSW1hZ2UiLCJsYXR0ZUltYWdlIiwiY2FwcHVjY2lub0ltYWdlIiwiZ3JlZW5UZWFJbWFnZSIsImhvdENvY29hSW1hZ2UiLCJib2JhVGVhSW1hZ2UiLCJtYXRjaGEiLCJwcm9kdWN0cyIsImNvZmZlZSIsInRleHRDb250ZW50IiwicHJvZHVjdEltYWdlIiwicHJpY2UiLCJjaGFpIiwibGF0dGUiLCJjYXBwdWNjaW5vIiwiYm9iYVRlYSIsImdyZWVuVGVhIiwiaG90Q29jb2EiLCJjcmVhdGVQcm9kdWN0R3JpZCIsInByb2R1Y3RHcmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvZHVjdEtleSIsInByb2R1Y3QiLCJwcm9kdWN0Q2FyZFdyYXBwZXIiLCJwcm9kdWN0Q2FyZCIsIml0ZW1JbWFnZSIsInNldEF0dHJpYnV0ZSIsInByb2R1Y3RIZWFkZXIiLCJjb25jYXQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsInByb2R1Y3RzUGFnZSIsImNvZmZlZVNob3AiLCJjb2ZmZWVDdXAiLCJyZW5kZXIiLCJib2R5IiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwicGFnZU5hbWVzIiwiaG9tZVBhZ2UiLCJjcmVhdGVTZWN0aW9uT25lIiwiY3JlYXRlU2VjdGlvblR3byIsImNyZWF0ZVNlY3Rpb25UaHJlZSIsImhpZGVOYXYiLCJuYXZVTCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2U2FuQnV0dG9uQ29udGFpbmVyIiwidG9nZ2xlTmF2QnV0dG9uIiwibmF2T3BlbiIsImNvbnRhaW5zIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZU5hdiIsInBhZ2VzIiwibWFpbk5hdmlnYXRpb24iLCJuYXZTYW5CdXR0b24iLCJsaXN0RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZm9yRWFjaCIsInBhZ2UiLCJuYXZMSSIsIm5hdkxpbmsiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJjb250ZW50Q29udGFpbmVyIiwiaGVhZGVyTGVmdCIsImhlYWRlclRpdGxlIiwiaGVhZGVyUmlnaHQiLCJuYXYiLCJjcmVhdGVEaXZpZGVyIiwiX3NoYXBlRGl2aWRlciRjbGFzc0xpIiwiY2xhc3NBcnJheSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIkFycmF5IiwiaXNBcnJheSIsInBhdGhEYXRhIiwic2hhcGVEaXZpZGVyIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzaGFwZURpdmlkZXJTVkciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGVOUyIsInNoYXBlRGl2aWRlclBhdGgiLCJjcmVhdGVRdW90YXRpb24iLCJxdW90ZU9iamVjdCIsInF1b3RlUGFydHNBcnJheSIsInBhcnRzIiwiYXV0aG9yIiwiZmlndXJlIiwiYmxvY2txdW90ZSIsImJsb2NrcXVvdGVUZXh0IiwiZmlnY2FwdGlvbiIsImVtcGhhc2lzVGV4dCIsInBhcnQiLCJlbXBoYXNpemVkU3BhbiIsImNyZWF0ZVRleHROb2RlIiwic2hvcERpc3BsYXlTZWN0aW9uIiwic2hvcEltYWdlIiwic2hhcGVEaXZpZGVyVG9wIiwic2hhcGVEaXZpZGVyQm90dG9tIiwidGVzdGltb25pYWxTZWN0aW9uIiwiY29mZmVlQ3VwSW1hZ2UiLCJxdW90ZXMiLCJxdW90ZU9uZSIsInF1b3RlVHdvIiwicmVuZGVySG91cnNDb250ZW50IiwiaG91cnNUYWJsZSIsInRhYmxlSGVhZGluZyIsImhvdXJzQ29udGVudENvbnRhaW5lciIsImhvdXJzRGF0YSIsImRheSIsImRheUNvbnRhaW5lciIsIm9wZXJhdGluZ0RheSIsIm9wZXJhdGluZ0hvdXJzIiwiaG9yaXpvbnRhbFJ1bGUiLCJjcmVhdGVTdWJDb250YWluZXIiLCJjb250YWN0RGF0YUFyciIsImluZm9ybWF0aW9uU3ViQ29udGFpbmVyIiwiaW5mb3JtYXRpb25TdWJIZWFkaW5nIiwibWV0aG9kT2ZDb250YWN0IiwicmVuZGVyQWRkcmVzcyIsImFkZHJlc3NEYXRhIiwiYWRkcmVzc0NvbnRhaW5lciIsImFkZHJlc3NTdWJIZWFkaW5nIiwiYWRkcmVzc1N0cmVldCIsImFkZHJlc3NDaXR5U3RhdGVaaXAiLCJhZGRyZXNzRGF0YUFyciIsImluZm9ybWF0aW9uU2VjdGlvbiIsImluZm9ybWF0aW9uQm90dG9tU2VjdGlvbiIsImNvbnRhY3RVc0NvbnRhaW5lciIsImNvbnRhY3RVc0hlYWRpbmciLCJjb250YWN0VXNDb250ZW50IiwidmlzaXRVc0NvbnRhaW5lciIsInZpc2l0VXNIZWFkaW5nIiwiZW1haWxTdWJDb250YWluZXIiLCJwaG9uZVN1YkNvbnRhaW5lciIsImluc3RhZ3JhbVN1YkNvbnRhaW5lciIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImZvb3RlclRleHRQYXJ0cyIsImZvb3RlclRleHQiLCJmb290ZXJZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibG9nb0NvbnRhaW5lciIsImNvbnRhY3REYXRhIiwicGhvbmUiLCJzdmdQYXRoRCIsImluc3RhZ3JhbSIsImVtYWlsIiwiaHJlZiIsImNvbnRhY3RNZXRob2QiLCJtZXRob2REYXRhIiwiY29udGFjdEJ1dHRvbkxpbmsiLCJjb250YWN0QnV0dG9uU1ZHIiwiY29udGFjdEJ1dHRvblNWR1BhdGgiLCJyZW5kZXJDb250ZW50Iiwic2VjdGlvbnNBcnJheSIsInBhZ2VDb250ZW50IiwibWFpbiIsInNlY3Rpb24iLCJyZW5kZXJIb21lUGFnZSIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9