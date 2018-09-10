import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/wxComputed.min.js',
    name: 'wxComputed',
    format: 'umd',
  },
  plugins: [
    terser({
      sourcemap: false,
      output: {
        comments: false,
      },
    }),
  ],
}
