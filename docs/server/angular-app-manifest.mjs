
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/web-curriculum/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/web-curriculum"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 745, hash: '4803f768ba6e4886f18809bf5b58384ce977e4242528eff112cbb1fff2cd0b18', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '110449111c59b7fef31e7238487492c5a6ce8fc272d4c35dfc420067e7d85a29', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2496, hash: 'ea638a6a8340b1b7a6601c8cbacecc89523883113109bfa7999dc4f8c53adaf7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-G7NGESBL.css': {size: 766, hash: 'ij2UqVGQjmk', text: () => import('./assets-chunks/styles-G7NGESBL_css.mjs').then(m => m.default)}
  },
};
