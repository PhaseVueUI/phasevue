import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const entry = globSync('src/**/index.ts').reduce<Record<string, string>>((acc, file) => {
    acc[file.replace(/^src\//, '').replace(/\.ts$/, '')] = file;
    return acc;
}, {});

export default defineConfig({ entry, format: ['esm'], outDir: 'dist', dts: false, external: [/^@primeuix\/(.*)$/], clean: true, sourcemap: process.env.NODE_ENV === 'production' });
