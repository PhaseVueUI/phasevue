import { defineConfig } from 'tsup';

export default defineConfig({ entry: ['src/index.ts'], format: ['esm'], outDir: 'dist', dts: true, external: [/^@primeuix\/(.*)$/], clean: true, sourcemap: process.env.NODE_ENV === 'production' });
