
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
    'index.csr.html': {size: 709, hash: '6eff196b433f5bdcb59ddc36615d64659c12ca98591d2df3cc6222c7f497c569', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '7ee862269faf3e23022adc2bf68d7cf4ea5843f8cdd8e7872dce20962623be24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2460, hash: '7b09c68c6df462f19bc70302c6d9b8494ce6e18993ddf37593925a3ebd174719', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 766, hash: 'ij2UqVGQjmk', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
