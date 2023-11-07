/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM7SUFDL0NPLFNBQVMsQ0FBQ04sU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3hDSyxTQUFTLENBQUNDLFlBQVksQ0FBQyxLQUFLLEVBQUVKLE9BQU8sQ0FBQ2YsWUFBWSxDQUFDO0lBQ25Ea0IsU0FBUyxDQUFDQyxZQUFZLENBQUMsS0FBSyxFQUFFSixPQUFPLENBQUNoQixXQUFXLENBQUM7SUFFbEQsSUFBTXFCLGFBQWEsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ2xEUyxhQUFhLENBQUNSLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQzdDTyxhQUFhLENBQUNyQixXQUFXLEdBQUdnQixPQUFPLENBQUNoQixXQUFXO0lBRS9DLElBQU1FLEtBQUssR0FBR1MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3pDVixLQUFLLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUNwQ1osS0FBSyxDQUFDRixXQUFXLE9BQUFzQixNQUFBLENBQU9OLE9BQU8sQ0FBQ2QsS0FBSyxDQUFFO0lBRXZDZ0IsV0FBVyxDQUFDSyxNQUFNLENBQUNGLGFBQWEsRUFBRUYsU0FBUyxFQUFFakIsS0FBSyxDQUFDO0lBQ25EZSxrQkFBa0IsQ0FBQ08sV0FBVyxDQUFDTixXQUFXLENBQUM7SUFDM0NSLFdBQVcsQ0FBQ2MsV0FBVyxDQUFDUCxrQkFBa0IsQ0FBQztFQUM3QztFQUVBLE9BQU9QLFdBQVc7QUFDcEI7QUFFQSxpRUFBZUQsaUJBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29mZmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2ZmZWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29mZmVlLy4vc3JjL2pzL3Byb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbmltcG9ydCBjb2ZmZWVJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL2NvZmZlZS5wbmcnO1xuaW1wb3J0IGNoYWlJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL2NoYWkucG5nJztcbmltcG9ydCBsYXR0ZUltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdHMvbGF0dGUucG5nJztcbmltcG9ydCBjYXBwdWNjaW5vSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9jYXBwdWNjaW5vLnBuZyc7XG5pbXBvcnQgZ3JlZW5UZWFJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL2dyZWVuLXRlYS5wbmcnO1xuaW1wb3J0IGhvdENvY29hSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9ob3QtY29jb2EucG5nJztcbmltcG9ydCBib2JhVGVhSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9ib2JhLXRlYS5wbmcnO1xuaW1wb3J0IG1hdGNoYSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL21hdGNoYS5wbmcnO1xuXG5jb25zdCBwcm9kdWN0cyA9IHtcbiAgY29mZmVlOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdjb2ZmZWUnLFxuICAgIHByb2R1Y3RJbWFnZTogY29mZmVlSW1hZ2UsXG4gICAgcHJpY2U6IDMuOTksXG4gIH0sXG4gIGNoYWk6IHtcbiAgICB0ZXh0Q29udGVudDogJ2NoYWknLFxuICAgIHByb2R1Y3RJbWFnZTogY2hhaUltYWdlLFxuICAgIHByaWNlOiAzLjk5XG4gIH0sXG4gIGxhdHRlOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdsYXR0ZScsXG4gICAgcHJvZHVjdEltYWdlOiBsYXR0ZUltYWdlLFxuICAgIHByaWNlOiA0Ljk5XG4gIH0sXG4gIGNhcHB1Y2Npbm86IHtcbiAgICB0ZXh0Q29udGVudDogJ2NhcHB1Y2Npbm8nLFxuICAgIHByb2R1Y3RJbWFnZTogY2FwcHVjY2lub0ltYWdlLFxuICAgIHByaWNlOiA0Ljk5XG4gIH0sXG4gIG1hdGNoYToge1xuICAgIHRleHRDb250ZW50OiAnbWF0Y2hhIGxhdHRlJyxcbiAgICBwcm9kdWN0SW1hZ2U6IG1hdGNoYSxcbiAgICBwcmljZTogNC45OVxuICB9LFxuICBib2JhVGVhOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdib2JhIHRlYScsXG4gICAgcHJvZHVjdEltYWdlOiBib2JhVGVhSW1hZ2UsXG4gICAgcHJpY2U6IDQuOTlcbiAgfSxcbiAgZ3JlZW5UZWE6IHtcbiAgICB0ZXh0Q29udGVudDogJ2dyZWVuIHRlYScsXG4gICAgcHJvZHVjdEltYWdlOiBncmVlblRlYUltYWdlLFxuICAgIHByaWNlOiAyLjk5XG4gIH0sXG4gIGhvdENvY29hOiB7XG4gICAgdGV4dENvbnRlbnQ6ICdob3QgY29jb2EnLFxuICAgIHByb2R1Y3RJbWFnZTogaG90Q29jb2FJbWFnZSxcbiAgICBwcmljZTogMy45OVxuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0R3JpZCgpIHtcbiAgY29uc3QgcHJvZHVjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBwcm9kdWN0R3JpZC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWdyaWQnKTtcblxuICBmb3IgKGNvbnN0IHByb2R1Y3RLZXkgaW4gcHJvZHVjdHMpIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHNbcHJvZHVjdEtleV07XG5cbiAgICBjb25zdCBwcm9kdWN0Q2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHByb2R1Y3RDYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LWNhcmQtd3JhcHBlcicpO1xuXG4gICAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgcHJvZHVjdENhcmQuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1jYXJkJyk7XG5cbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1pbWFnZScpO1xuICAgIGl0ZW1JbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByb2R1Y3QucHJvZHVjdEltYWdlKTtcbiAgICBpdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwcm9kdWN0LnRleHRDb250ZW50KTtcblxuICAgIGNvbnN0IHByb2R1Y3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2R1Y3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1oZWFkZXInKTtcbiAgICBwcm9kdWN0SGVhZGVyLnRleHRDb250ZW50ID0gcHJvZHVjdC50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcHJpY2UnKTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGAkJHtwcm9kdWN0LnByaWNlfWA7XG5cbiAgICBwcm9kdWN0Q2FyZC5hcHBlbmQocHJvZHVjdEhlYWRlciwgaXRlbUltYWdlLCBwcmljZSk7XG4gICAgcHJvZHVjdENhcmRXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3RDYXJkKTtcbiAgICBwcm9kdWN0R3JpZC5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZFdyYXBwZXIpO1xuICB9XG5cbiAgcmV0dXJuIHByb2R1Y3RHcmlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9kdWN0R3JpZDsiXSwibmFtZXMiOlsiY29mZmVlSW1hZ2UiLCJjaGFpSW1hZ2UiLCJsYXR0ZUltYWdlIiwiY2FwcHVjY2lub0ltYWdlIiwiZ3JlZW5UZWFJbWFnZSIsImhvdENvY29hSW1hZ2UiLCJib2JhVGVhSW1hZ2UiLCJtYXRjaGEiLCJwcm9kdWN0cyIsImNvZmZlZSIsInRleHRDb250ZW50IiwicHJvZHVjdEltYWdlIiwicHJpY2UiLCJjaGFpIiwibGF0dGUiLCJjYXBwdWNjaW5vIiwiYm9iYVRlYSIsImdyZWVuVGVhIiwiaG90Q29jb2EiLCJjcmVhdGVQcm9kdWN0R3JpZCIsInByb2R1Y3RHcmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvZHVjdEtleSIsInByb2R1Y3QiLCJwcm9kdWN0Q2FyZFdyYXBwZXIiLCJwcm9kdWN0Q2FyZCIsIml0ZW1JbWFnZSIsInNldEF0dHJpYnV0ZSIsInByb2R1Y3RIZWFkZXIiLCJjb25jYXQiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=