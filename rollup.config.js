import babel  from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";

const MODES = ['cjs', 'esm'];

export default MODES.map(item => {
    const config = {
        input: `src/index.js`,
        output: {
            file: `dist/index.${item}.js`,
            format: item,
            sourcemap: true,
            exports: "auto",
        },
        external: ["prop-types", "react"],
        plugins: [
            resolve(),
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
            terser()
        ]
    };
    return config;
});
