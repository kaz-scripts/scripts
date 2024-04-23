// ==UserScript==
// @name        anti-anti-cheat
// @match       *://diep.io/*
// @run-at      document-start
// ==/UserScript==
const handler = {
  apply(r,o,args) {
    Error.stackTraceLimit = 0;
    return r.apply(o,args)
  }
}
Object.freeze = new Proxy(Object.freeze, handler)
