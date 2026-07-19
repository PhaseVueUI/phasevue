import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['./src/index.ts'],
    format: ['esm'],
    dts: true,
    external: [/^@phasevueui\/(.*)$/],
    splitting: false,
    clean: true,
    shims: true,
    banner: {
        js: '#!/usr/bin/env node'
    }
});
