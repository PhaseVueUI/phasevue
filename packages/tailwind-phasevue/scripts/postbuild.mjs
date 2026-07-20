import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, OUTPUT_DIR, INPUT_DIR } = resolvePath(import.meta.url);
const outputDir = path.resolve(__dirname, `../${OUTPUT_DIR}`);

fs.copySync(path.resolve(__dirname, `../${INPUT_DIR}`), outputDir);
fs.copySync(path.resolve(__dirname, '../README.md'), path.resolve(outputDir, 'README.md'));
fs.copySync(path.resolve(__workspace, './LICENSE.md'), path.resolve(outputDir, 'LICENSE.md'));
fs.copySync(path.resolve(__dirname, '../package.json'), path.resolve(outputDir, 'package.json'));
clearPackageJson(path.resolve(outputDir, 'package.json'));
