import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

const { __dirname } = resolvePath(import.meta.url);

removeBuild(import.meta.url);
updatePackageJson(path.resolve(__dirname, '../package.json'));
