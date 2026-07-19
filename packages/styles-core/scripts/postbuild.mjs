import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, OUTPUT_DIR } = resolvePath(import.meta.url);
const outputDir = path.resolve(__dirname, `../${OUTPUT_DIR}`);

fs.copySync(path.resolve(__dirname, '../README.md'), `${outputDir}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE.md'), `${outputDir}/LICENSE.md`);
fs.copySync(path.resolve(__dirname, '../package.json'), `${outputDir}/package.json`);
fs.copyFileSync(path.resolve(__dirname, '../src/index.d.ts'), `${outputDir}/index.d.ts`);
clearPackageJson(path.resolve(outputDir, 'package.json'));
