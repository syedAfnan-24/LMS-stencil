import { p as promiseResolve, b as bootstrapLazy } from './index-fbfe2e9d.js';
export { s as setNonce } from './index-fbfe2e9d.js';

/*
 Stencil Client Patch Browser v4.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["features-section_4",[[1,"features-section"],[1,"footer-section"],[1,"hero-section"],[1,"my-nav",{"firstOption":[1,"first-option"],"firstHref":[1,"first-href"],"secondOption":[1,"second-option"],"secondHref":[1,"second-href"],"toggleBool":[32]}]]]], options);
});

//# sourceMappingURL=librarymanagement.js.map