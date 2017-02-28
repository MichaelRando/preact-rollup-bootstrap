import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import scss from 'rollup-plugin-scss'

export default {
  entry: 'main.jsx',
  dest: 'bundle.js',
  format: 'iife',
  sourceMap: true,
  treeshake: true,
  plugins: [
    scss({
      output: true
    }),
    babel({
      'exclude': [
        'node_modules/preact/**',
        'node_modules/preact-compat/**'
      ]
    }),
    nodeResolve(),
    replace({'process.env.NODE_ENV': JSON.stringify('development')}),
    commonjs({
      namedExports: {
        './node_modules/preact/dist/preact.js': [
          'h',
          'render',
          'Component',
          'cloneElement',
          'options'
        ],
        './node_modules/react/react.js': [
          'cloneElement',
          'createElement',
          'PropTypes',
          'Children',
          'PureComponent',
          'Component',
          'isValidElement'
        ]
      }
    })
  ]
}
