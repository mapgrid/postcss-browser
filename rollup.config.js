import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
    input: 'index.js',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            sourcemap: true,
            name: 'postcss',
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [builtins(), resolve(), commonjs(), globals(), terser()],
}
