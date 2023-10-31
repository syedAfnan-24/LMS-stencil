'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2de6d9f4.js');

/*
 Stencil Client Patch Browser v4.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('librarymanagement.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["features-section_4.cjs",[[1,"features-section"],[1,"footer-section"],[1,"hero-section"],[1,"my-nav",{"firstOption":[1,"first-option"],"firstHref":[1,"first-href"],"secondOption":[1,"second-option"],"secondHref":[1,"second-href"],"toggleBool":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=librarymanagement.cjs.js.map