import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, copyDependencies, renameDTSFile, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, INPUT_DIR, OUTPUT_DIR } = resolvePath(import.meta.url);

copyDependencies(INPUT_DIR + '/presets/', OUTPUT_DIR);
renameDTSFile(OUTPUT_DIR, 'index');

fs.copyFileSync(path.resolve(__dirname, '../src/index.d.ts'), `${OUTPUT_DIR}/index.d.ts`);
fs.mkdirSync(path.resolve(__dirname, `../${OUTPUT_DIR}/tokens`), { recursive: true });
fs.copyFileSync(path.resolve(__dirname, '../src/tokens/index.d.ts'), `${OUTPUT_DIR}/tokens/index.d.ts`);
fs.writeFileSync(`${OUTPUT_DIR}/index.d.ts`, fs.readFileSync(`${OUTPUT_DIR}/index.d.ts`, 'utf8').replace("from '../types/index'", "from './types/index'"));
fs.copySync(path.resolve(__dirname, '../types'), `${OUTPUT_DIR}/types`);
fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE.md'), `${OUTPUT_DIR}/LICENSE.md`);

clearPackageJson(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));
