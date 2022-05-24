(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
})(this, (function (exports) { 'use strict';

	function use($) {
	  $.prototype && ($.prototype.createTextNode = createTextNodeCheerio);
	  $.__proto__ && ($.__proto__.createTextNode = createTextNodeCheerio);
	  return $;
	}
	function createTextNode(text) {
	  return {
	    type: 'text',
	    data: typeof text !== 'string' && typeof text.text == 'function' ? text.text() : text.toString()
	  };
	}
	function createTextNodeCheerio(text) {
	  return (this.prototype || this.__proto__)._make(createTextNode(text));
	}

	exports.createTextNode = createTextNode;
	exports.createTextNodeCheerio = createTextNodeCheerio;
	exports["default"] = createTextNode;
	exports.use = use;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.development.cjs.map
