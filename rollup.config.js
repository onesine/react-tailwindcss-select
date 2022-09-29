import babel  from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve  from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV === "dev"
const MODES = ['cjs', 'esm'];

export default MODES.map(item => {
    const config = {
        input: `src/index.tsx`,
        output: {
            name: "ReactTailwindcssSelect",
            file: `dist/index.${item}${dev ? '' : '.min'}.js`,
            format: item,
            sourcemap: true,
            exports: "auto",
            globals: {
                'react': 'React'
            }
        },
        external: ["react"],
        plugins: [
            resolve(),
            babel({
                babelHelpers: "bundled",
                exclude: ['node_modules/**']
            }),
            commonjs(),
            typescript(),
        ]
    };
    if (!dev) {
        delete config.output.sourcemap;
        delete config.plugins.sourcemap
        config.plugins = [...config.plugins, terser()]
    }
    return config;
});
