const { build } = require('esbuild')
const path = require('path')
const esbuildPluginPino = require('esbuild-plugin-pino')

build({
  bundle: true,
  sourcemap: true,
  format: "cjs",
  target: "es2021",
  platform: "node",
  external: [],
  conditions: ["production"],
  entryPoints: [path.join(__dirname, "src", "index.ts")],
  plugins: [esbuildPluginPino({ transports: [] })],
  outdir: path.join(__dirname, "lib"),
})
