const sveltePreprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  preprocess: sveltePreprocess({ sourceMap: dev }),
  compilerOptions: {
    dev,
    hydratable: true,
  },
}
