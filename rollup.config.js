import babel  from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import sourcemaps from 'rollup-plugin-sourcemaps';
import autoprefixer from "autoprefixer";

const dev = process.env.NODE_ENV === "dev"
const MODES = ['cjs'/*, 'iife', 'umd'*/, 'esm'];

export default MODES.map(item => {
    const config = {
        input: `src/index.js`,
        output: {
            name: "ReactTailwindcssSelect",
            file: `dist/index.${item}${dev ? '' : '.min'}.js`,
            format: item,
            sourcemap: item === "esm",
            exports: "auto",
            globals: {
                'prop-types': 'prop-types',
                'react': 'React'
            }
        },
        external: ["prop-types", "react"],
        plugins: [
            resolve(),
            sourcemaps(),
            styles({
                postcss: {
                    plugins: [
                        autoprefixer()
                    ]
                }
            }),
            babel({
                babelHelpers: "bundled",
                exclude: ['node_modules/**']
            }),
            commonjs(),
        ]
    };
    if (!dev) {
        delete config.output.sourcemap;
        delete config.plugins.sourcemap
        config.plugins = [...config.plugins, terser()]
    }
    return config;
});
