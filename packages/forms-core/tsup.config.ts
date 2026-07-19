import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';

const entry = globSync('src/**/index.ts').reduce<Record<string, string>>((acc, file) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');

    acc[name] = file;

    return acc;
}, {});

export default defineConfig({
    entry,
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    external: [/^@phasevueui\/(.*)$/, 'joi', 'superstruct', 'valibot', 'yup', 'zod'],
    minify: isProduction,
    sourcemap: isProduction,
    splitting: false,
    clean: isProduction
});
