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
      babelrc: false,
      exclude: [
        'node_modules/preact/**',
        'node_modules/preact-compat/**'
      ],
      plugins: [
        ['module-resolver', {
          'alias': {
            'inferno': 'inferno/dist-es',
            'inferno-shared': 'inferno-shared/dist-es',
            'react': 'inferno-compat/dist-es',
            'react-dom': 'inferno-compat/dist-es'
          }
        }],
        'transform-class-properties',
        'transform-object-rest-spread',
        'external-helpers'
      ],
      presets: [
        ['react']
      ]
    }),
    nodeResolve(),
    replace({'process.env.NODE_ENV': JSON.stringify('development')}),
    commonjs({
      namedExports: {
        './node_modules/inferno-compat/dist/inferno-compat.node.js': [
          'Component',
          'PropTypes'
        ],
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
