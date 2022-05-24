function use(e) {
  return e.prototype && (e.prototype.createTextNode = createTextNodeCheerio), e.__proto__ && (e.__proto__.createTextNode = createTextNodeCheerio), 
  e;
}

function createTextNode(e) {
  return {
    type: "text",
    data: "string" != typeof e && "function" == typeof e.text ? e.text() : e.toString()
  };
}

function createTextNodeCheerio(e) {
  return (this.prototype || this.__proto__)._make(createTextNode(e));
}

export { createTextNode, createTextNodeCheerio, createTextNode as default, use };
//# sourceMappingURL=index.esm.mjs.map
