import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/wxComputed.min.js',
    name: 'wxComputed',
    format: 'umd',
  },
  plugins: [uglify()],
}
